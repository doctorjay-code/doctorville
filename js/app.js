// DVA Point Dashboard Application (Full History + Mobile Optimized)
const SUPABASE_URL = "https://jpdospunrcscvfpuqzhf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwZG9zcHVucmNzY3ZmcHVxemhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNDY3NjcsImV4cCI6MjEwMjcyMjc2N30.UsIKguZm2v5Y_tDilvH7CQuqBt5dG6QSVFMeixX6r5Q";

// 전 기간 188종 세미나 타이틀 사전 (2025.06 ~ 2026.09 전체)
const SEMINAR_TITLES = {
  "5663": "Exploring the therapeutic potential of SGLT-2 Inhibitors",
  "5662": "크레스토 웹심포지엄",
  "5659": "Easyef MD Spray for Cutaneous and Mucosal Regeneration: From EGF Biology to Clinical Evidence",
  "5656": "[ENDO WEEK] No.1 Gemigliptin Web Zeminar",
  "5636": "[ENDO WEEK] ALL 4 ONE WEB Symposium",
  "5626": "BEYOND Web Symposium",
  "5625": "[ENDO WEEK] Optimal Combination Therapy for Diabetes Management",
  "5624": "ARB Strategies in Atrial Fibrillation – Clinical Value of Olmesartan",
  "5623": "From Continuous Monitoring to Sustained Control: CART BP Pro and Olmesartan-Based Therapy",
  "5616": "전공의를 위한 호흡기내과 증례강의",
  "5613": "[ENDO WEEK] 1등 당뇨병 치료제,제미글로 Family의 모든것",
  "5608": "BEYOND Web Symposium",
  "5607": "DIVE (Digital Innovation, Value & Experience) Web symposium",
  "5585": "[재] Love Life Love Liver web Symposium",
  "5584": "[재] O.M.T Web Symposium",
  "5583": "[재] 엔블로 X 바로에젯 웹 심포지엄",
  "5582": "[재] For Strong Bone \"STOBOCLO\" Web symposium",
  "5581": "[재] ARB Strategies in Atrial Fibrillation – Clinical value of Olmesartan",
  "5580": "[재] ENVLO WEB SYMPOSIUM",
  "5579": "[재] Redefining P-CAB: From Gastritis to GERD",
  "5578": "[재] 호흡기내과에서 바라보는 펙수클루",
  "5577": "[재] NO.1 collaboration symposium",
  "5575": "[재] BEYOND Web Symposium",
  "5574": "[재] ALL 4 ONE Symposium",
  "5570": "제미메트서방정을 활용한 초기 당뇨병 관리 전략",
  "5565": "눈에서 시작하는 심혈관 위험 평가와 AI의 미래",
  "5557": "No.1 Gemigliptin Web Zeminar",
  "5544": "AI와 함께하는 차세대 내시경 WAYMED ENDO로 완성하는 명의의 진단 노하우",
  "5543": "엔블로 Web Symposium",
  "5542": "진심(心), Symposium",
  "5526": "클린콜정, 장정결제의 새로운 패러다임: 임상 케이스로 본 클린콜정 20정의 우수성과 안전성",
  "5525": "케이스로 보는 류마티스 관절염·척추관절염 – 진단부터 젤토파®정(Tofacitinib) 치료 선택까지",
  "5517": "Breathe Well Symposium",
  "5516": "O.M.T Web symposium",
  "5515": "Advances in Diabetes Management Clinical Benefits of SGLT-2 Inhibitors in Combination Therapy",
  "5514": "뇌졸중 환자의 콜레스테롤 관리를 위한 최적의 치료 옵션",
  "5497": "Breathe Well Symposium",
  "5496": "CLOART, the Answer from HOST-PREVENTION & HOST-EXAM RCT",
  "5495": "BEYOND Web Symposium",
  "5494": "Optimal combination therapy for DM management",
  "5493": "The Role of Fundus Exams in Preventing Blindness",
  "5492": "Cardiovascular Protection in Rheumatoid Arthritis: Focusing on Statin/Ezetimibe Evidence",
  "5491": "O.M.T Web symposium",
  "5487": "BEYOND Web symposium",
  "5486": "진심(心), Symposium",
  "5484": "당뇨병 환자의 심혈관질환 위험 관리 및 이상지질혈증 치료 전략",
  "5483": "간수치 상승 환자에서 간장용제의 실제 활용",
  "5429": "Overcoming Therapeutic Inertia in Elderly Hypertension_What SPOIILER Tells Us",
  "5428": "[실리스칸] 간질환 케이스와 실리마린의 효능 및 효과",
  "5427": "NO.1 collaboration symposium",
  "5425": "BEYOND Web Symposium",
  "5424": "Update on BP control strategy in Patients with Hypertension in Older Adults",
  "5421": "No.1 Collaboration",
  "5416": "호흡기내과에서 바라보는 펙수클루",
  "5415": "간장용제의 작용기전 및 2제 병용의 효과",
  "5414": "O.M.T Web Symposium",
  "5413": "BEYOND Web Symposium",
  "5412": "이비인후과에서 바라보는 펙수클루 10mg",
  "5411": "크레스토 웹 심포지엄",
  "5410": "Does Switching Within the DPP-4 Inhibitor Class Make a Real Difference?: Integrating Korean RWE into Diabetes Care",
  "5409": "시작은 크레스토 웹심포지엄",
  "5408": "류마티스내과에서 바라보는 펙수클루",
  "5406": "시작은 크레스토",
  "5405": "No.1 Gemigliptin Web Zeminar",
  "5404": "Diagnosis and Treatment of Depression and Anxiety disorder",
  "5403": "Breathe Well Symposium",
  "5401": "간수치 상승 환자에서 간장용제의 병용요법",
  "5400": "Dexamethasone palmitate: A promising intratympanic treatment option for severe sudden hearing loss",
  "5399": "Breathe Well Symposium",
  "5397": "EAS 2025 Revisited: Before EAS 2026",
  "5396": "BEYOND Web Symposium",
  "5395": "CLISMAS Web Symposium",
  "5394": "Real-Time Glucose Readings, Every Single Minute : FreeStyle Libre 2",
  "5393": "Bisoprolol in Hypertension: Evidence-Based Value",
  "5391": "7월 라이브 세미나 심화설문 (5391)",
  "5390": "소화기질환에서 펙수클루 처방의 실제",
  "5389": "펙수클루 40/20/10mg 함량별 처방가이드",
  "5388": "Breathe Well Symposium",
  "5387": "Crezet X Fexuclue Collaboration Web Symposium",
  "5386": "펙수클루 웹심포지엄(소화기 & 순환기)",
  "5385": "BEYOND Web Symposium",
  "5384": "진심(心), Symposium",
  "5380": "Beyond Blood Pressure: Why Aggressive Hypertension Management Matters in Elderly Patients",
  "5379": "The Pioneering Inpatient Telemonitoring Systems, thynC™ different",
  "5378": "전공의를 위한 부정맥 증례 강의",
  "5377": "두 개의 성분, 하나의 확신 : URSA & Thiliskan",
  "5376": "ALL 4 ONE Symposium",
  "5375": "엔블로 Web Symposium",
  "5374": "대웅로수바스타틴+펙수클루 웹 심포지엄",
  "5373": "DIVE (Digital Innovation, Value & Experience) Web symposium",
  "5372": "Does Switching Within the DPP-4 Inhibitor Class Make a Real Difference?Integrating Korean RWE into Diabetes Care",
  "5371": "BEYOND Web Symposium",
  "5370": "눈에서 시작하는 심혈관 위험 평가와 AI의 미래",
  "5369": "B-Right Now Symposium",
  "5368": "당뇨병 환자의 심혈관질환 위험 관리 및 이상지질혈증 치료 전략",
  "5367": "제미다파정을 활용한 새로운 병용치료의 제안",
  "5366": "Real-Time Glucose Readings, Every Single Minute",
  "5362": "Digital Care Symposium",
  "5360": "Redefining P-CAB: From Gastritis to GERD",
  "5359": "BEYOND Web Symposium",
  "5357": "CLISMAS Web Symposium",
  "5356": "건강수명연장의 새로운 패러다임",
  "5355": "Advances in ECG-Based AI for Heart Failure Screening: From Innovation to Clinical Practice",
  "5354": "진심(心), Symposium",
  "5353": "Strategies for Early Detection of Atrial Fibrillation Using Wearable ECG Devices",
  "5352": "만성폐쇄성폐질환(COPD) 검사 국가 검진 도입/폐 기능 검사",
  "5350": "릭시아나 x 펙수클루 웹심포지엄",
  "5348": "인공지능을 이용한 안저검사 : OPTINA & WISKY의 임상적 활용",
  "5347": "펙수클루 40/20/10mg 함량별 처방가이드",
  "5346": "[D-DDW 2026] 간질환의 최신 지견 : 우루사, 베믈리버",
  "5345": "Wearable ECG Device를 활용한 주요 부정맥 진단과 치료",
  "5344": "Treat-to-target LDL-C lowering strategy",
  "5343": "실시간 연속혈당 모니터링의 필요성",
  "5342": "CLISMAS Symposium",
  "5340": "심대사약물 안전하게 활용하기 SGLT-2",
  "5339": "펙수클루 40/20/10mg 함량별 처방가이드",
  "5338": "펙수클루 40/20/10mg 함량별 처방가이드",
  "5336": "BEYOND Web Symposium",
  "5334": "Improving Adherence in Patients with Atrial Fibrillation on DOAC Therapy",
  "5333": "PERFECT Web SYMPOSIUM",
  "5332": "제미메트서방정을 활용한 초기 당뇨병 관리전략",
  "5331": "BRAIN Web Symposium",
  "5330": "Does Switching Within the DPP-4 Inhibitor Class Make a Real Difference?: Integrating Korean RWE into Diabetes Care",
  "5329": "Thiliskan & URSA The BEST Combination for Liver Health",
  "5328": "No.1 Collaboration Symposium",
  "5327": "Beyond AST and ALT : 간수치 상승 환자의 평가와 실리마린의 임상적 활용",
  "5326": "B형간염의 치료 및 만성 간질환의 보호 전략",
  "5325": "BEYOND Web Symposium",
  "5324": "O.M.T Web Symposium",
  "5323": "EBIXA Add-on Web Symposium",
  "5322": "O.M.T Web Symposium",
  "5320": "Thiliskan & URSA The BEST Combination for Liver Health",
  "5318": "Beyond Antiplatelets A Better Strategy for AF Patients",
  "5317": "진심(心), Symposium",
  "5316": "ALL 4 ONE Symposium",
  "5311": "진심(心), Symposium",
  "5310": "Wearable ECG Device를 활용한 주요 부정맥 진단과 치료",
  "5309": "만성폐쇄성폐질환(COPD)검사 국가 검진 도입/폐 기능 검사",
  "5308": "심대사약물 안전하게 활용하기 SGLT-2",
  "5306": "실시간 연속혈당 모니터링의 필요성",
  "5305": "심(心)포니 Symposium_AiTiA",
  "5304": "[D-DDW 2026] 소화기내과에서 바라보는 펙수클루",
  "5303": "Mobius web Symposium",
  "5301": "소화기 전문의가 바라보는 펙수클루",
  "5300": "진심(心), Symposium",
  "5297": "BEYOND Web Symposium",
  "5296": "BEYOND Web Symposium",
  "5294": "Improving Adherence in Patients with Atrial Fibrillation on DOAC Therapy",
  "5293": "Optimal combination therapy for DM management",
  "5292": "No.1 Gemigliptin Web Zeminar",
  "5291": "Breathe Well Symposium",
  "5287": "Add-on Web Sympoium",
  "5286": "뇌졸중 환자의 콜레스테롤 관리를 위한 최적의 치료 옵션",
  "5285": "importance of out of office BP monitoring",
  "5284": "Clinical evidence for continuous glucose monitoring during pregnancy",
  "5282": "Advances in Diabetes Management Clinical Benefits of SGLT-2 Inhibitors in Combination Therapy",
  "5281": "BEYOND Web Symposium",
  "5280": "No.1 Gemigliptin Web Zeminar",
  "5278": "제미다파정을 활용한 병용치료 전략",
  "5276": "O.M.T Web symposium",
  "5267": "No.1 Collaboration Symposium",
  "5263": "No.1 Collaboration WEB Symposium",
  "5261": "제미다파정을 활용한 병용치료의 제안",
  "5260": "Breathe Well Symposium",
  "5259": "Does Switching Within the DPP-4 Inhibitor Class Make a Real Difference? : Integrating Korean RWE into Diabetes Care",
  "5257": "The Pioneering Inpatuent Telemonitoring Systems, thynC different",
  "5256": "펙수클루 Web Symposium",
  "5255": "Improving Adherence in patients with Atrial Fibrillation on DOAC Therapy",
  "5250": "The Lower the Better Rosuvastatin’s Next Option for Dyslipidemia Management",
  "5249": "NSAIDs 유발 소화성 궤양 예방과 치료전략",
  "5248": "BEYOND Web Symposium",
  "5244": "The Role of Fundus Exams in Preventing Blindness",
  "5226": "The Pioneering Inpatuent Telemonitoring Systems, thynC different",
  "5222": "New Generation : 실리스칸, 펙수클루",
  "5221": "뇌졸중 환자의 콜레스테롤 관리를 위한 최적의 치료 옵션",
  "5220": "진심(心), Symposium",
  "5212": "PERFECT Web SYMPOSIUM",
  "5209": "진심(心), Symposium",
  "5189": "증례를 통해 확인하는 알쏭달쏭 Q&A 13탄",
  "5186": "Breathe Well Symposium",
  "5185": "Breathe Well Symposium",
  "5114": "Bisoprolol in Hypertension: Evidence-Based Value",
  "5029": "건강수명연장의 새로운 패러다임",
  "5011": "CLISMAS Web Symposium",
  "5001": "소화기질환에서 펙수클루 처방의 실제",
  "4980": "이리콜정, 설사형 IBS 치료의 새로운 표준",
  "4979": "체중 감소에 의한 담석 발생 위험과 우루사 300mg 예방 전략",
  "4795": "클린콜정, 장정결제의 패러다임 전환"
};

// Global State
const state = {
  account: 'all', // 'all' | '박범준' | '박주하'
  datePreset: 'all', // 'all' | '2026' | 'thisMonth' | 'lastMonth' | '3months' | 'custom'
  selectedMonth: '', // 'YYYY-MM' or ''
  startDate: '',
  endDate: '',
  searchQuery: '',
  selectedCategories: new Set(), // Empty means ALL
  currentPage: 1,
  pageSize: 20,
  transactions: []
};

// Sub-category mapping definitions
const CATEGORY_MAP = {
  deep_9000: { label: "🎯 9,000P 심화", color: "bg-amber-500 text-white" },
  deep_4000: { label: "🎯 4,000P 심화", color: "bg-amber-100 text-amber-800" },
  deep_3000: { label: "🎯 3,000P 심화", color: "bg-amber-100 text-amber-900 border border-amber-200" },
  deep_2000: { label: "🎯 2,000P 심화", color: "bg-amber-50 text-amber-700" },
  market_baemin: { label: "🛵 배달의민족", color: "bg-emerald-100 text-emerald-800" },
  market_kakao: { label: "💛 카카오페이", color: "bg-yellow-100 text-yellow-800" },
  market_naver: { label: "💚 네이버페이", color: "bg-green-100 text-green-800" },
  market_other: { label: "🛵 기타 빌마켓", color: "bg-rose-100 text-rose-800" },
  regular_survey: { label: "📝 일반설문", color: "bg-blue-100 text-blue-800" },
  daily_quiz: { label: "❓ 데일리퀴즈", color: "bg-purple-100 text-purple-800" },
  attendance: { label: "📅 출석체크", color: "bg-slate-100 text-slate-700" },
  birthday: { label: "🎂 생일포인트", color: "bg-pink-100 text-pink-800" },
  other: { label: "기타", color: "bg-slate-100 text-slate-600" }
};

// Classify a transaction & extract display title
function processTransaction(row) {
  const desc = row.description || '';
  const pts = row.points || 0;
  let catKey = 'other';
  let displayTitle = '';
  let subText = desc;

  // 1. Point Deductions / Retractions (오지급 회수 등)
  if (desc.includes('회수') || desc.includes('오지급')) {
    const m = desc.match(/(?:설문|세미나|오지급|회수).*?([0-9]{4})/) || desc.match(/([0-9]{4}).*?(?:세미나|설문)/);
    const sid = m ? (m[1] || m[2]) : null;
    if (sid && SEMINAR_TITLES[sid]) {
      displayTitle = `↩️ [회수] ${SEMINAR_TITLES[sid]}`;
    } else {
      displayTitle = `↩️ 포인트 회수 (${desc})`;
    }
    catKey = 'other';
  }
  // 2. BilMarket / Coupon Purchases
  else if (pts < 0 || desc.includes('결제') || desc.includes('비즈마켓') || desc.includes('포인트샵') || desc.includes('쿠폰') || desc.includes('전환')) {
    const absP = Math.abs(pts);

    // 1) 배달의민족: 10,000P, 20,000P 또는 9,700P의 정수배 (19,400P, 29,100P, 38,800P, 48,500P, 87,300P 등)
    if (absP === 10000 || absP === 20000 || (absP % 9700 === 0 && absP >= 9700) || desc.includes('배달의민족') || desc.includes('배민')) {
      catKey = 'market_baemin';
      const sheets = absP % 9700 === 0 ? (absP / 9700) : (absP / 10000);
      displayTitle = sheets === 1 ? '🛵 [배달의민족] 1만원권' : `🛵 [배달의민족] 1만원권 ${sheets}장`;
    }
    // 2) 카카오페이: 9,900P(1만원), 3,000P, 15,000P, 또는 desc에 '카카오' 포함
    else if (absP === 9900 || absP === 3000 || absP === 15000 || desc.includes('카카오')) {
      catKey = 'market_kakao';
      if (absP === 9900 || absP === 10000) displayTitle = '💛 [카카오페이] 1만원 교환권';
      else if (absP === 15000) displayTitle = '💛 [카카오페이] 1만5천원 교환권';
      else if (absP === 3000) displayTitle = '💛 [카카오페이] 3천원 교환권';
      else displayTitle = '💛 [카카오페이] 5천원 교환권';
    }
    // 3) 네이버페이: 4,900P(5천원), 5,000P, 또는 desc에 '네이버' 포함
    else if (absP === 4900 || absP === 5000 || desc.includes('네이버')) {
      catKey = 'market_naver';
      if (desc.includes('전환')) displayTitle = `💚 [네이버페이] ${absP.toLocaleString()}원 전환`;
      else displayTitle = '💚 [네이버페이] 5천원권';
    }
    // 4) 기타 상품: 기프티콘 5만원권, 식음료 3,900원 등
    else if (absP === 50000 || desc.includes('기프티콘')) {
      catKey = 'market_other';
      displayTitle = '🎁 [기프티콘] 모바일 5만원권';
    } else if (absP === 3900) {
      catKey = 'market_other';
      displayTitle = '☕ [빌마켓] 커피/식음료 모바일 쿠폰';
    } else {
      catKey = 'market_other';
      displayTitle = '🛵 빌마켓 상품 결제';
    }
  }
  // 3. Seminars & Surveys (Supports all historical formats)
  else if (desc.includes('설문') || desc.includes('세미나')) {
    // Robust regex matching all variations: '설문 포인트 5636', '세미나 설문 (5212)', '설문 포인트 지급 5281', '5/18 세미나 설문(5189)', etc.
    const m = desc.match(/(?:설문|세미나|오지급|회수).*?([0-9]{4})/) || desc.match(/([0-9]{4}).*?(?:세미나|설문)/);
    const sid = m ? (m[1] || m[2]) : null;

    if (pts >= 9000) catKey = 'deep_9000';
    else if (pts >= 4000) catKey = 'deep_4000';
    else if (pts >= 3000) catKey = 'deep_3000';
    else if (pts >= 2000) catKey = 'deep_2000';
    else catKey = 'regular_survey';

    if (sid && SEMINAR_TITLES[sid]) {
      displayTitle = `📘 ${SEMINAR_TITLES[sid]}`;
    } else if (catKey !== 'regular_survey') {
      displayTitle = '🎯 닥터빌 라이브 심화설문';
    } else {
      displayTitle = '📝 라이브 세미나 수강 설문';
    }
  }
  // 4. Daily Activities & Events
  else if (desc.includes('퀴즈')) {
    catKey = 'daily_quiz';
    displayTitle = '❓ 데일리 퀴즈 정답 풀이 적립';
  } else if (desc.includes('출석')) {
    catKey = 'attendance';
    displayTitle = '📅 매일 출석체크 적립';
  } else if (desc.includes('생일')) {
    catKey = 'birthday';
    displayTitle = '🎂 생일 축하 포인트';
  } else {
    displayTitle = desc;
  }

  return {
    ...row,
    categoryKey: catKey,
    displayTitle: displayTitle,
    subText: subText
  };
}

let loadTransactionsPromise = null;

// Fetch all transactions from Supabase REST API (Parallel + Stale-While-Revalidate Cache)
export function loadTransactions() {
  if (loadTransactionsPromise) return loadTransactionsPromise;

  loadTransactionsPromise = (async () => {
    // 1. Instant Render from Local Cache (0.01초 즉시 표시)
    let hasCache = false;
    try {
      const rawCache = localStorage.getItem('dva_cached_transactions');
      if (rawCache) {
        const cachedRows = JSON.parse(rawCache);
        if (Array.isArray(cachedRows) && cachedRows.length > 0) {
          state.transactions = cachedRows.map(processTransaction);
          populateMonthDropdown();
          renderApp();
          hasCache = true;
        }
      }
    } catch (e) {
      console.warn('Failed to load local cache:', e);
    }

    // 2. High-speed Parallel Fetch via Promise.all (0.3초대 백그라운드 프리패칭)
    try {
      const url = `${SUPABASE_URL}/rest/v1/dva_point_transactions?select=trans_date,account_name,category,service_type,description,points,expire_date,tx_hash&order=trans_date.desc,account_name.asc,day_seq.asc,tx_hash.asc`;
      const batchRanges = ['0-999', '1000-1999', '2000-2999', '3000-3999'];

      const responses = await Promise.all(batchRanges.map(range => 
        fetch(url, {
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Range': range
          }
        }).then(r => r.ok ? r.json() : [])
      ));

      let allRows = responses.flat();

      // If data exceeded 4,000 rows in future, fetch remainder seamlessly
      if (responses[responses.length - 1]?.length === 1000) {
        let offset = 4000;
        while (true) {
          const extraRes = await fetch(url, {
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`,
              'Range': `${offset}-${offset + 999}`
            }
          });
          if (!extraRes.ok) break;
          const batch = await extraRes.json();
          if (!batch || batch.length === 0) break;
          allRows = allRows.concat(batch);
          if (batch.length < 1000) break;
          offset += 1000;
        }
      }

      // Deduplicate by tx_hash to guarantee 100% integrity
      const seen = new Set();
      const dedupedRows = [];
      for (const row of allRows) {
        const key = row.tx_hash || `${row.account_name}_${row.trans_date}_${row.description}_${row.points}`;
        if (!seen.has(key)) {
          seen.add(key);
          dedupedRows.push(row);
        }
      }

      // Update state & Local Storage Cache
      state.transactions = dedupedRows.map(processTransaction);
      try {
        localStorage.setItem('dva_cached_transactions', JSON.stringify(dedupedRows));
      } catch (e) {
        // quota safeguard
      }

      console.log(`Loaded ${state.transactions.length} point transactions in parallel`);
      populateMonthDropdown();
      renderApp();
    } catch (error) {
      console.error('Failed to load transactions from Supabase:', error);
    }
  })();

  return loadTransactionsPromise;
}

// Populate Month Dropdown based on unique transaction months
function populateMonthDropdown() {
  const selectEl = document.getElementById('monthSelect');
  if (!selectEl) return;

  const yms = Array.from(new Set(state.transactions.map(r => r.trans_date.slice(0, 7)))).sort().reverse();
  selectEl.innerHTML = '<option value="">전체 월 (선택 안 함)</option>' + 
    yms.map(ym => {
      const parts = ym.split('-');
      return `<option value="${ym}">${parts[0]}년 ${parseInt(parts[1], 10)}월</option>`;
    }).join('');
}

// Calculate Monthly Statistics across the entire history
function computeMonthlyStats() {
  const monthly = {};
  state.transactions.forEach(r => {
    if (state.account !== 'all' && r.account_name !== state.account) return;
    const ym = r.trans_date.slice(0, 7);
    if (!monthly[ym]) monthly[ym] = { ym, earned: 0, spent: 0 };
    if (r.points > 0) monthly[ym].earned += r.points;
    else monthly[ym].spent += Math.abs(r.points);
  });

  return Object.keys(monthly).sort().map(k => monthly[k]);
}

// Main Render Function
export function renderApp() {
  renderKPICards();
  renderMonthlyBarChart();
  renderFilteredList();
}

// 1. Render Account & KPI Cards
function renderKPICards() {
  const balanceEl = document.getElementById('currentBalance');
  const balanceSubEl = document.getElementById('balanceSubText');

  // Calculate live current balance from all transactions
  let beomjunBalance = 0;
  let juhaBalance = 0;
  state.transactions.forEach(r => {
    if (r.account_name === '박범준') beomjunBalance += r.points;
    else if (r.account_name === '박주하') juhaBalance += r.points;
  });

  if (state.account === 'all') {
    if (balanceEl) balanceEl.innerText = `${(beomjunBalance + juhaBalance).toLocaleString()} P`;
    if (balanceSubEl) balanceSubEl.innerHTML = `박범준: <strong>${beomjunBalance.toLocaleString()}P</strong> &nbsp;|&nbsp; 박주하: <strong>${juhaBalance.toLocaleString()}P</strong>`;
  } else if (state.account === '박범준') {
    if (balanceEl) balanceEl.innerText = `${beomjunBalance.toLocaleString()} P`;
    if (balanceSubEl) balanceSubEl.innerHTML = "박범준 계정 관제 중";
  } else {
    if (balanceEl) balanceEl.innerText = `${juhaBalance.toLocaleString()} P`;
    if (balanceSubEl) balanceSubEl.innerHTML = "박주하 계정 관제 중";
  }

  // Monthly stats (Current month 2026-09 vs previous month 2026-08)
  const monthData = computeMonthlyStats();
  const sep = monthData.find(d => d.ym === '2026-09') || { earned: 0, spent: 0 };
  const aug = monthData.find(d => d.ym === '2026-08') || { earned: 0, spent: 0 };

  const earnedDiff = sep.earned - aug.earned;
  const spentDiff = sep.spent - aug.spent;

  const earnedPct = aug.earned > 0 ? ((earnedDiff / aug.earned) * 100).toFixed(1) : 0;
  const spentPct = aug.spent > 0 ? ((spentDiff / aug.spent) * 100).toFixed(1) : 0;

  // Earned card
  const thisMonthEarnedEl = document.getElementById('thisMonthEarned');
  const earnedDiffEl = document.getElementById('earnedDiffText');
  if (thisMonthEarnedEl) thisMonthEarnedEl.innerText = `+${sep.earned.toLocaleString()} P`;
  if (earnedDiffEl) {
    const icon = earnedDiff >= 0 ? '▲' : '▼';
    const sign = earnedDiff >= 0 ? '+' : '';
    const color = earnedDiff >= 0 ? 'text-emerald-600 font-semibold' : 'text-slate-500 font-semibold';
    earnedDiffEl.innerHTML = `전월(8월) 대비 <span class="${color}">${sign}${earnedDiff.toLocaleString()}P (${icon} ${Math.abs(earnedPct)}%)</span>`;
  }

  // Spent card
  const thisMonthSpentEl = document.getElementById('thisMonthSpent');
  const spentDiffEl = document.getElementById('spentDiffText');
  if (thisMonthSpentEl) thisMonthSpentEl.innerText = `-${sep.spent.toLocaleString()} P`;
  if (spentDiffEl) {
    const icon = spentDiff >= 0 ? '▲' : '▼';
    const sign = spentDiff >= 0 ? '+' : '';
    const color = spentDiff <= 0 ? 'text-blue-600 font-semibold' : 'text-rose-600 font-semibold';
    spentDiffEl.innerHTML = `전월(8월) 대비 <span class="${color}">${sign}${spentDiff.toLocaleString()}P (${icon} ${Math.abs(spentPct)}%)</span>`;
  }
}

// 2. Render Full-History Monthly Trend Bar Chart (Visually Separated Capsules + Horizontal Scroll)
function renderMonthlyBarChart() {
  const container = document.getElementById('monthlyBarsContainer');
  if (!container) return;

  container.innerHTML = '';
  const data = computeMonthlyStats();
  const maxVal = Math.max(...data.map(d => Math.max(d.earned, d.spent))) || 1;

  data.forEach(d => {
    const earnedH = Math.max(4, (d.earned / maxVal) * 100);
    const spentH = Math.max(4, (d.spent / maxVal) * 100);
    const isSelected = state.selectedMonth === d.ym;
    const isThisMonth = d.ym === '2026-09';

    // Format label: '26.09'
    const parts = d.ym.split('-');
    const monthShort = `${parts[0].slice(2)}.${parts[1]}`;

    const capsule = document.createElement('div');
    capsule.className = `month-capsule flex-shrink-0 flex flex-col items-center justify-end px-2 py-1.5 rounded-xl transition-all cursor-pointer border ${
      isSelected 
        ? 'bg-blue-50/90 border-blue-500 ring-2 ring-blue-400/40 shadow-sm' 
        : isThisMonth 
          ? 'bg-emerald-50/60 border-emerald-300' 
          : 'bg-slate-50/80 border-slate-200/70 hover:bg-slate-100'
    }`;
    capsule.style.minWidth = '52px';
    capsule.title = `${d.ym} (클릭하여 이 달만 보기)`;

    capsule.innerHTML = `
      <!-- Tooltip text on click/hover -->
      <div class="text-[9px] font-bold text-slate-400 mb-1 leading-none text-center">${monthShort}</div>
      
      <!-- Pair Bars -->
      <div class="w-full flex justify-center items-end gap-1 h-28 pt-2">
        <div style="height: ${earnedH}%;" class="w-2.5 bg-emerald-500 rounded-t transition-all hover:bg-emerald-600" title="적립: +${d.earned.toLocaleString()}P"></div>
        <div style="height: ${spentH}%;" class="w-2.5 bg-rose-400 rounded-t transition-all hover:bg-rose-500" title="사용: -${d.spent.toLocaleString()}P"></div>
      </div>

      <!-- Quick Net/Indicator -->
      <div class="text-[9px] font-bold mt-1 text-slate-500">
        ${(d.earned / 10000).toFixed(0)}만
      </div>
    `;

    // Clicking a month capsule toggles filtering by that month!
    capsule.addEventListener('click', () => {
      if (state.selectedMonth === d.ym) {
        state.selectedMonth = '';
        state.datePreset = 'all';
      } else {
        state.selectedMonth = d.ym;
        state.datePreset = 'custom';
      }

      // Sync Month Dropdown
      const mSel = document.getElementById('monthSelect');
      if (mSel) mSel.value = state.selectedMonth;

      state.currentPage = 1;
      renderApp();
    });

    container.appendChild(capsule);
  });

  // Auto-scroll to the rightmost (most recent month) on load
  setTimeout(() => {
    const scrollContainer = document.getElementById('monthlyChartScroll');
    if (scrollContainer) {
      scrollContainer.scrollLeft = scrollContainer.scrollWidth;
    }
  }, 100);
}

// 3. Filter Data Helper
function getFilteredTransactions() {
  return state.transactions.filter(row => {
    // 1. Account Filter
    if (state.account !== 'all' && row.account_name !== state.account) {
      return false;
    }

    // 2. Month Selector Filter (Highest priority if selected)
    if (state.selectedMonth) {
      if (!row.trans_date.startsWith(state.selectedMonth)) return false;
    } else {
      // Date Preset Filter
      const d = row.trans_date;
      if (state.datePreset === '2026') {
        if (!d.startsWith('2026')) return false;
      } else if (state.datePreset === 'thisMonth') {
        if (!d.startsWith('2026-09')) return false;
      } else if (state.datePreset === 'lastMonth') {
        if (!d.startsWith('2026-08')) return false;
      } else if (state.datePreset === '3months') {
        if (d < '2026-07-01') return false;
      } else if (state.datePreset === 'custom') {
        if (state.startDate && d < state.startDate) return false;
        if (state.endDate && d > state.endDate) return false;
      }
    }

    // 3. Multi-Select Categories Filter
    if (state.selectedCategories.size > 0) {
      if (!state.selectedCategories.has(row.categoryKey)) {
        return false;
      }
    }

    // 4. Text Search
    if (state.searchQuery) {
      const searchTarget = `${row.trans_date} ${row.account_name} ${row.displayTitle} ${row.description} ${row.points}`.toLowerCase();
      if (!searchTarget.includes(state.searchQuery)) {
        return false;
      }
    }

    return true;
  });
}

// 4. Render Filtered List & Separate Summary Bar
function renderFilteredList() {
  const filtered = getFilteredTransactions();

  // Separate Calculation: Earned vs Spent
  let totalEarned = 0;
  let totalSpent = 0;
  let earnedCount = 0;
  let spentCount = 0;

  filtered.forEach(r => {
    if (r.points > 0) {
      totalEarned += r.points;
      earnedCount += 1;
    } else if (r.points < 0) {
      totalSpent += Math.abs(r.points);
      spentCount += 1;
    }
  });

  // Update Summary Bar
  const summaryTotalCountEl = document.getElementById('summaryTotalCount');
  const summaryEarnedEl = document.getElementById('summaryEarned');
  const summarySpentEl = document.getElementById('summarySpent');

  if (summaryTotalCountEl) summaryTotalCountEl.innerText = `${filtered.length.toLocaleString()}건`;
  if (summaryEarnedEl) summaryEarnedEl.innerHTML = `+${totalEarned.toLocaleString()} P <span class="text-[11px] font-normal text-slate-400">(${earnedCount}건)</span>`;
  if (summarySpentEl) summarySpentEl.innerHTML = `-${totalSpent.toLocaleString()} P <span class="text-[11px] font-normal text-slate-400">(${spentCount}건)</span>`;

  // Render Table / List
  const start = (state.currentPage - 1) * state.pageSize;
  const end = Math.min(start + state.pageSize, filtered.length);
  const pageItems = filtered.slice(start, end);

  const container = document.getElementById('transactionListContainer');
  if (!container) return;

  if (pageItems.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400">
        <div class="text-3xl mb-2">🔍</div>
        <p class="text-sm font-medium">선택하신 조건에 맞는 내역이 없습니다.</p>
      </div>
    `;
  } else {
    container.innerHTML = pageItems.map(row => {
      const isSpend = row.points < 0;
      const ptsColor = isSpend ? 'text-rose-600' : 'text-emerald-600';
      const ptsPrefix = isSpend ? '' : '+';
      const meta = CATEGORY_MAP[row.categoryKey] || CATEGORY_MAP.other;

      return `
        <div class="bg-white rounded-xl p-3.5 card-shadow border border-slate-100 flex items-center justify-between gap-3 transition-all hover:border-blue-200">
          <div class="flex-1 min-w-0">
            <!-- 1st line: Date, Account, Category Badge -->
            <div class="flex items-center gap-1.5 mb-1">
              <span class="text-[11px] font-mono text-slate-400">${row.trans_date}</span>
              <span class="badge bg-slate-100 text-slate-600 font-medium">${row.account_name}</span>
              <span class="badge ${meta.color}">${meta.label}</span>
            </div>
            <!-- 2nd line: Prominent Seminar/Product Title -->
            <h3 class="text-xs font-bold text-slate-900 leading-snug line-clamp-2" title="${row.displayTitle}">
              ${row.displayTitle}
            </h3>
            <!-- 3rd line: Original Description / Subtext -->
            <p class="text-[10px] text-slate-400 truncate mt-0.5">
              └ ${row.subText}
            </p>
          </div>
          <!-- Points -->
          <div class="text-right whitespace-nowrap pl-2 flex-shrink-0">
            <span class="text-sm font-black font-mono ${ptsColor}">
              ${ptsPrefix}${row.points.toLocaleString()} P
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  // Pagination UI
  const totalPages = Math.ceil(filtered.length / state.pageSize) || 1;
  const pageInfo = document.getElementById('paginationInfo');
  if (pageInfo) {
    pageInfo.innerText = `${filtered.length > 0 ? (start + 1) : 0}-${end} / ${filtered.length}건`;
  }

  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  const curPageEl = document.getElementById('currentPageNumber');

  if (prevBtn) prevBtn.disabled = state.currentPage <= 1;
  if (nextBtn) nextBtn.disabled = state.currentPage >= totalPages;
  if (curPageEl) curPageEl.innerText = `${state.currentPage} / ${totalPages}`;
}

// Event Handlers for UI Controls
export function setupEventHandlers() {
  // Account Tabs
  ['all', 'beomjun', 'juha'].forEach(tabId => {
    const btn = document.getElementById(`tab-${tabId}`);
    if (!btn) return;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.account-tab').forEach(b => {
        b.className = "account-tab flex-1 py-2 text-xs font-semibold rounded-lg text-slate-500 transition-all";
      });
      btn.className = "account-tab flex-1 py-2 text-xs font-semibold rounded-lg bg-white text-blue-600 shadow-sm transition-all";

      if (tabId === 'all') state.account = 'all';
      else if (tabId === 'beomjun') state.account = '박범준';
      else state.account = '박주하';

      state.currentPage = 1;
      renderApp();
    });
  });

  // Month Dropdown Listener
  const monthSelect = document.getElementById('monthSelect');
  if (monthSelect) {
    monthSelect.addEventListener('change', (e) => {
      state.selectedMonth = e.target.value;
      if (state.selectedMonth) {
        state.datePreset = 'custom';
        // unselect preset buttons
        document.querySelectorAll('.date-preset-btn').forEach(b => {
          b.className = "date-preset-btn px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-600";
        });
      } else {
        state.datePreset = 'all';
      }
      state.currentPage = 1;
      renderApp();
    });
  }

  // Date Preset Buttons
  document.querySelectorAll('.date-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.date-preset-btn').forEach(b => {
        b.className = "date-preset-btn px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-600";
      });
      btn.className = "date-preset-btn px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-600 text-white";

      state.datePreset = btn.dataset.preset;
      state.selectedMonth = ''; // Clear month select when preset is used
      const mSel = document.getElementById('monthSelect');
      if (mSel) mSel.value = '';

      const customInputs = document.getElementById('customDateInputs');
      if (state.datePreset === 'custom') {
        if (customInputs) customInputs.classList.remove('hidden');
      } else {
        if (customInputs) customInputs.classList.add('hidden');
      }

      state.currentPage = 1;
      renderApp();
    });
  });

  // Custom Date Input Listeners
  const startInput = document.getElementById('customStartDate');
  const endInput = document.getElementById('customEndDate');
  if (startInput) {
    startInput.addEventListener('change', (e) => {
      state.startDate = e.target.value;
      state.selectedMonth = '';
      state.currentPage = 1;
      renderFilteredList();
    });
  }
  if (endInput) {
    endInput.addEventListener('change', (e) => {
      state.endDate = e.target.value;
      state.selectedMonth = '';
      state.currentPage = 1;
      renderFilteredList();
    });
  }

  // Multi-Select Category Chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const catKey = chip.dataset.cat;
      if (state.selectedCategories.has(catKey)) {
        state.selectedCategories.delete(catKey);
        chip.classList.remove('selected');
      } else {
        state.selectedCategories.add(catKey);
        chip.classList.add('selected');
      }
      state.currentPage = 1;
      renderFilteredList();
    });
  });

  // Category Quick Clear
  const clearCatBtn = document.getElementById('clearCategoriesBtn');
  if (clearCatBtn) {
    clearCatBtn.addEventListener('click', () => {
      state.selectedCategories.clear();
      state.selectedMonth = '';
      state.datePreset = 'all';
      state.searchQuery = '';
      const sInput = document.getElementById('searchInput');
      if (sInput) sInput.value = '';
      const mSel = document.getElementById('monthSelect');
      if (mSel) mSel.value = '';

      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('selected'));
      document.querySelectorAll('.date-preset-btn').forEach(b => {
        if (b.dataset.preset === 'all') b.className = "date-preset-btn px-2.5 py-1 text-xs font-medium rounded-lg bg-blue-600 text-white";
        else b.className = "date-preset-btn px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-600";
      });

      state.currentPage = 1;
      renderApp();
    });
  }

  // Search Input
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      state.currentPage = 1;
      renderFilteredList();
    });
  }

  // Pagination Buttons
  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.currentPage > 1) {
        state.currentPage--;
        renderFilteredList();
        window.scrollTo({ top: document.getElementById('transactionsSection').offsetTop - 60, behavior: 'smooth' });
      }
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const filtered = getFilteredTransactions();
      const totalPages = Math.ceil(filtered.length / state.pageSize) || 1;
      if (state.currentPage < totalPages) {
        state.currentPage++;
        renderFilteredList();
        window.scrollTo({ top: document.getElementById('transactionsSection').offsetTop - 60, behavior: 'smooth' });
      }
    });
  }
}
