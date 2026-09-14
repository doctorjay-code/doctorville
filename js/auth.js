// Security Auth System (Adapted from Schedule Project)
export const SECURITY_PASSWORD_HASH = '4417e9d3ebf53ef7033b6f05f7c19272baaf187eafd6459c7c1268e0abc26d22';

let authSuccessCallbackFn = null;

const authState = {
  failedAttempts: parseInt(localStorage.getItem('dva_security_failed_attempts') || '0', 10),
  lockoutUntil: parseInt(localStorage.getItem('dva_security_lockout_until') || '0', 10),
  lockoutInterval: null
};

export function setAuthSuccessCallback(fn) {
  authSuccessCallbackFn = typeof fn === 'function' ? fn : null;
}

export function initSecurityAuth() {
  const overlay = document.getElementById('authModalOverlay');
  const input = document.getElementById('authPasswordInput');
  const submit = document.getElementById('authSubmitBtn');
  if (!overlay || !input || !submit) return false;

  // Check existing session
  if (sessionStorage.getItem('dva_security_authenticated') === 'true') {
    overlay.classList.remove('active');
    authSuccessCallbackFn?.();
    return true;
  } else {
    overlay.classList.add('active');
    setTimeout(() => input.focus(), 300);
  }

  if (authState.lockoutUntil > Date.now()) {
    startLockoutTimer(authState.lockoutUntil);
  }

  submit.addEventListener('click', handleAuthSubmit);
  input.addEventListener('keydown', event => {
    if (event.key === 'Enter') handleAuthSubmit();
  });

  return true;
}

export function startLockoutTimer(untilTime) {
  const input = document.getElementById('authPasswordInput');
  const submit = document.getElementById('authSubmitBtn');
  const error = document.getElementById('authErrorMsg');
  const timer = document.getElementById('authLockoutTimer');

  if (input) input.disabled = true;
  if (submit) submit.disabled = true;
  if (timer) timer.classList.remove('hidden');

  if (authState.lockoutInterval) clearInterval(authState.lockoutInterval);

  authState.lockoutInterval = setInterval(() => {
    const remaining = untilTime - Date.now();
    if (remaining <= 0) {
      clearInterval(authState.lockoutInterval);
      authState.failedAttempts = 0;
      authState.lockoutUntil = 0;
      localStorage.removeItem('dva_security_failed_attempts');
      localStorage.removeItem('dva_security_lockout_until');
      if (input) input.disabled = false;
      if (submit) submit.disabled = false;
      if (timer) timer.classList.add('hidden');
      if (error) { error.textContent = ''; error.classList.add('hidden'); }
      return;
    }
    if (timer) {
      const minutes = Math.floor(remaining / 60000);
      const seconds = Math.floor((remaining % 60000) / 1000);
      timer.textContent = `접속이 일시 차단되었습니다 (${minutes}분 ${seconds}초 남음)`;
    }
  }, 1000);
}

export async function hashString(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function handleAuthSubmit() {
  const overlay = document.getElementById('authModalOverlay');
  const input = document.getElementById('authPasswordInput');
  const error = document.getElementById('authErrorMsg');

  if (!input || authState.lockoutUntil > Date.now()) return;

  const rawPassword = input.value.trim();
  if (!rawPassword) {
    if (error) {
      error.textContent = '비밀번호를 입력해주세요.';
      error.classList.remove('hidden');
    }
    return;
  }

  let enteredHash;
  try {
    enteredHash = await hashString(rawPassword);
  } catch (hashError) {
    console.error('Password verification failed:', hashError);
    if (error) {
      error.textContent = 'HTTPS 환경에서 접속해주세요.';
      error.classList.remove('hidden');
    }
    return;
  }

  if (enteredHash === SECURITY_PASSWORD_HASH) {
    sessionStorage.setItem('dva_security_authenticated', 'true');
    authState.failedAttempts = 0;
    localStorage.removeItem('dva_security_failed_attempts');
    input.value = '';
    if (error) { error.textContent = ''; error.classList.add('hidden'); }
    if (overlay) overlay.classList.remove('active');
    
    try {
      await authSuccessCallbackFn?.();
    } catch (loadError) {
      console.error('Post-auth initialization failed:', loadError);
    }
  } else {
    authState.failedAttempts += 1;
    localStorage.setItem('dva_security_failed_attempts', authState.failedAttempts.toString());
    input.value = '';
    input.focus();

    if (authState.failedAttempts >= 10) {
      authState.lockoutUntil = Date.now() + 5 * 60 * 1000;
      localStorage.setItem('dva_security_lockout_until', authState.lockoutUntil.toString());
      startLockoutTimer(authState.lockoutUntil);
      return;
    }

    if (error) {
      const remaining = 10 - authState.failedAttempts;
      error.textContent = `비밀번호가 일치하지 않습니다. (남은 횟수: ${remaining}회)`;
      error.classList.remove('hidden');
    }
  }
}
