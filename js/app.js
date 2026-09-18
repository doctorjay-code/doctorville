// DVA Point Dashboard Application (Full History + Mobile Optimized)
const SUPABASE_URL = "https://jpdospunrcscvfpuqzhf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwZG9zcHVucmNzY3ZmcHVxemhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxNDY3NjcsImV4cCI6MjEwMjcyMjc2N30.UsIKguZm2v5Y_tDilvH7CQuqBt5dG6QSVFMeixX6r5Q";

// 전 기간 250종 세미나 타이틀 사전 (2025.06 ~ 2026.10 전체)
const SEMINAR_TITLES = {
  "5755": "단계적으로 치료하는 개원가 천식 관리",
  "5754": "근골격질환(골다공증)",
  "5753": "류가형 프로가 선생님의 골프 고민에 직접 답합니다.",
  "5752": "[재] 류가형 프로의<100타 탈출 클리닉> 골프 고민을 해부하다!",
  "5751": "[재] 실패 없는 와인 입문: 와인 제대로 알고 마시는 법",
  "5750": "CNS WEEK",
  "5749": "CNS WEEK",
  "5748": "CNS WEEK",
  "5746": "O.M.T Web Symposium",
  "5745": "고혈압 WEEK",
  "5744": "대장암의 조기 진단부터 치료까지",
  "5743": "고혈압 WEEK",
  "5742": "ENVLO WEB SYMPOSIUM",
  "5741": "CNS WEEK",
  "5740": "[재] 진심(心), Symposium",
  "5739": "[재] Approaches to Medical Management of Resistant Hypertension",
  "5738": "Best Combination for Liver Health",
  "5737": "[고혈압 WEEK] Overcoming Therapeutic Inertia in Elderly Hypertension_What SPOIILER Tells Us",
  "5736": "시작은 크레스토 웹심포지엄",
  "5735": "True Atherosclerosis Regression with a 20-year Legacy, CRESTOR",
  "5734": "CABOMETYX® VALUE UP MEETING",
  "5733": "CABOMETYX® VALUE UP MEETING",
  "5732": "심장내과에서 바라보는 펙수클루",
  "5730": "간질환에 실리마린의 의의",
  "5729": "스토보클로X엔블로 Web symposium",
  "5728": "No.1 Collaboration Symposium",
  "5727": "제미다파정을 활용한 새로운 병용 치료의 제안",
  "5726": "SWITCHING 임상으로 확인된 제미다파® 치료 전환의 가치",
  "5724": "아토피피부염 장기 관리를 위한 치료 전략",
  "5723": "ARB Strategies in Atrial Fibrillation – Clinical value of Olmesartan",
  "5722": "ARB Strategies in Atrial Fibrillation – Clinical Value of Olmesartan",
  "5721": "고혈압 WEEK",
  "5720": "고혈압 WEEK",
  "5719": "투게더 심포지엄",
  "5718": "ENVLO WEB SYMPOSIUM",
  "5717": "ARB Strategies in Atrial Fibrillation – Clinical Value of Olmesartan",
  "5716": "전공의를 위한 호흡기내과 증례강의",
  "5715": "DIVE (Digital Innovation, Value & Experience) Web symposium",
  "5714": "ARB Strategies in Atrial Fibrillation – Clinical Value of Olmesartan",
  "5713": "Breathe Well Symposium",
  "5712": "No.1 Gemigliptin Web Zeminar",
  "5711": "ARB Strategies in Atrial Fibrillation – Clinical Value of Olmesartan",
  "5710": "Breathe Well Symposium",
  "5709": "클린콜 케이스리뷰, 대장내시경 정결의 최적 선택",
  "5708": "위내시경으로 보는 전공의 증례강의",
  "5707": "Heart Ville Web symposium",
  "5706": "고혈압 WEEK",
  "5705": "O.M.T Web Symposium",
  "5704": "케이스로 보는 류마티스 관절염·척추관절염 – 진단부터 젤토파®정(Tofacitinib) 치료 선택까지",
  "5703": "DIVE (Digital Innovation, Value & Experience) Web symposium",
  "5702": "ARB Strategies in Atrial Fibrillation – Clinical Value of Olmesartan",
  "5701": "From Continuous Monitoring to Sustained Control_CART BP Pro and Olmesartan-Based Therapy",
  "5700": "No.1 Collaboration 심포지엄",
  "5699": "Long-term obesity care: clinical evidence of maintaining tirzepatide",
  "5698": "소화기내과에서 바라보는 펙수클루",
  "5695": "비뇨기질환에서 프로바이오틱스의 최신지견과 의의",
  "5693": "O.M.T Web Symposium",
  "5691": "SWITCHING 임상으로 확인된 제미다파® 치료 전환의 가치",
  "5690": "[재] 이비인후과에서 바라보는 펙수클루",
  "5689": "크레스토 웹 심포지엄",
  "5688": "BEYOND Web Symposium",
  "5686": "제미다파정을 활용한 새로운 병용치료의 제안",
  "5685": "Breathe Well Symposium",
  "5684": "[Libre Week] 혈당 모니터링을 넘어 행동변화로,CGM 기반 새로운 관리 모델",
  "5683": "펙수클루 Triple Symposium",
  "5682": "개원가에서의 SGLT-2i 치료 전략",
  "5681": "[Libre Week] Changing Standards in Inpatient Glycemic Management",
  "5680": "개원의가 바라보는 펙수클루",
  "5679": "전문직과 직장인을 위한 거북목·일자목 관리 전략",
  "5678": "Clinical Efficacy and Safety of Lipothason in Pain Treatment",
  "5677": "조기 목표혈압 도달 중요성과 약물선택",
  "5676": "Does Switching Within the DPP-4 Inhibitor Class Make a Real Difference?: Integrating Korean RWE into Diabetes Care",
  "5673": "이상지질혈증 1차 치료 전략에서 피에젯타의 포지셔닝과 임상적 의의",
  "5672": "[대한내분비학회] 제4회 ENstagram Webinar",
  "5671": "New WAVE Webinar",
  "5670": "[대한심부전학회] 디지털헬스연구회 제 13차 웹심포지엄",
  "5669": "개원의를 위한 고혈압 처방 팁: 인다파미드 기반 3제 복합제로 강압효과 극대화하기",
  "5668": "일반 개원의가 바라보는 펙수클루",
  "5665": "소화기내과에서 바라보는 펙수클루",
  "5664": "심혈관질환자에서 대상포진 예방의 중요성",
  "5660": "DEEP INSIGHT WEDNESDAY WEBINAR_Dual Regeneration Strategy: ECM Restoration & Collagen Biostimulation",
  "5651": "For Strong Bone, STOBOCLO",
  "5646": "[ENDO WEEK] Real-Time Glucose Readings,Every Single Minute:FreeStyle Libre 2",
  "5644": "No.1 Collaboration WEB Symposium",
  "5643": "Gastro-protection Strategies in NSAIDs Therapy",
  "5639": "일반 개원의가 바라보는 펙수클루",
  "5638": "[EZcare WEEK] 개원가의 눈으로 바라보는 이상지질혈증의 모든 것",
  "5635": "[EZcare WEEK] 이상지질혈증 치료의 최신 근거와 바로에젯의 임상적 역할",
  "5634": "척수성 근위축증(SMA) 조기 진단과 전원",
  "5633": "소화기 내시경의 새로운 패러다임: WAYMED ENDO AI를 활용한 병변 검출 실전",
  "5631": "True Cardiovascular Event Prevention from the HEART, CRESTOR",
  "5629": "True Cardiovascular Event Prevention from the HEART, CRESTOR",
  "5667": "ALL 4 ONE WEB Symposium",
  "5663": "Exploring the therapeutic potential of SGLT-2 Inhibitors",
  "5662": "크레스토 웹심포지엄",
  "5661": "[재] Love Life Love Liver",
  "5659": "Easyef MD Spray for Cutaneous and Mucosal Regeneration: From EGF Biology to Clinical Evidence",
  "5656": "[ENDO WEEK] No.1 Gemigliptin Web Zeminar",
  "5655": "[ENDO WEEK] Advances in Diabetes Management Clinical Benefits of SGLT-2 Inhibitors in Combination Therapy",
  "5645": "[ENDO WEEK] 골다공증 톺아보기",
  "5642": "[ENDO WEEK] 골다공증, 제대로 이해하기",
  "5637": "[ENDO WEEK] 엔블로 Web Symposium",
  "5636": "[ENDO WEEK] ALL 4 ONE WEB Symposium",
  "5628": "Does Switching Within the DPP-4 Inhibitor Class Make a Real Difference?: Integrating Korean RWE into Diabetes Care",
  "5627": "Love Life Love Liver",
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

// Account Display Name Mapping (박범준 -> BJ, 박주하 -> JH)
const ACCOUNT_DISPLAY = {
  '박범준': 'BJ',
  '박주하': 'JH'
};
function formatAccountName(name) {
  return ACCOUNT_DISPLAY[name] || name;
}

// Clean and normalize seminar titles across history
function cleanSeminarTitle(title) {
  if (!title) return '라이브 세미나';
  let t = String(title).trim();
  t = t.replace(/[\r\n\t]+/g, ' ');
  t = t.replace(/\s+/g, ' ');
  t = t.replace(/^비공개\s*/, '');
  t = t.replace(/\s*\(세미나\s*\[.*?\]\s*설문.*?\)/g, '');
  t = t.replace(/&amp;/g, '&');
  t = t.replace(/\)+$/, '');
  t = t.trim();
  return t || '라이브 세미나';
}

// Reverse SID lookup by seminar title (Blacklists generic phrases to prevent false positives)
const GENERIC_SEMINAR_PHRASES = [
  '라이브 세미나', '심화설문', '설문', '세미나', '양식 폼', '웹심포지엄', '웹 심포지엄',
  'Web Symposium', 'Webinar', 'webinar', '심포지엄', 'Symposium', '라이브 세미나 심화설문'
];

function findSeminarIdByTitle(title) {
  if (!title) return null;
  const clean = cleanSeminarTitle(title);
  if (!clean || clean === '라이브 세미나' || clean === '라이브 세미나 심화설문') return null;

  // 1. Exact match
  for (const [sid, fullTitle] of Object.entries(SEMINAR_TITLES)) {
    if (fullTitle === clean) return sid;
  }

  // 2. Blacklist generic phrases from substring matching
  const isGeneric = GENERIC_SEMINAR_PHRASES.some(g => clean.toLowerCase() === g.toLowerCase());
  if (isGeneric) return null;

  // 3. Substring match only with meaningful, non-generic titles (>= 6 chars)
  if (clean.length >= 6) {
    for (const [sid, fullTitle] of Object.entries(SEMINAR_TITLES)) {
      if (fullTitle.toLowerCase().includes(clean.toLowerCase()) || clean.toLowerCase().includes(fullTitle.toLowerCase())) {
        return sid;
      }
    }
  }
  return null;
}

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
  transactions: [],
  currentMainTab: 'points', // 'points' | 'seminars'
  seminarViewMode: 'monthly', // 'monthly' | 'daily'
  selectedSeminarMonth: '2026-09',
  selectedDailyDate: null,
  hideRegularSurveys: false,
  seminarFilters: {
    deep_completed: true,
    deep_pending: true,
    basic_completed: true,
    free_completed: true
  },
  allAnswersExpanded: false, // false: 주관식 답변 기본 접힘(Closed)
  surveyRecords: [],
  seminarsMaster: [],
  vodMaster: []
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
    } else if (sid) {
      displayTitle = `📘 세미나 설문 (${sid})`;
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

// Activity Category Rank for Chronological Newest-First Intra-day Sorting
function getActivityRank(row) {
  const desc = row.description || '';
  const pts = row.points || 0;
  // 1. Coupon purchases / Market (BilMarket):
  if (pts < 0 || desc.includes('결제') || desc.includes('비즈마켓') || desc.includes('쿠폰') || desc.includes('포인트샵')) {
    return 40;
  }
  // 2. Seminars / Surveys (usually completed afternoon/evening):
  if (desc.includes('설문') || desc.includes('세미나')) {
    return 30;
  }
  // 3. Daily Quiz (morning):
  if (desc.includes('퀴즈')) {
    return 20;
  }
  // 4. Attendance (morning earliest):
  if (desc.includes('출석')) {
    return 10;
  }
  // 5. Other
  return 5;
}

// 1:1 Pairing & Chronological Newest-First (Top is Newest) Sorter
function sortAndPairTransactions(rows) {
  // 1. Group transactions into events for intra-day chronological ordering & 1:1 pairing
  const eventMaxId = new Map();
  for (const r of rows) {
    const eventKey = `${r.trans_date}|${r.categoryKey}|${r.displayTitle}|${r.points}|${r.day_seq || 1}`;
    const curMax = eventMaxId.get(eventKey) || 0;
    if ((r.id || 0) > curMax) {
      eventMaxId.set(eventKey, r.id || 0);
    }
  }

  return rows.sort((a, b) => {
    // 1. trans_date DESC (newest date first)
    if (a.trans_date !== b.trans_date) {
      return b.trans_date.localeCompare(a.trans_date);
    }

    // 2. Intra-day Event Chronological Order DESC (Newest Event Top via max ID)
    const aKey = `${a.trans_date}|${a.categoryKey}|${a.displayTitle}|${a.points}|${a.day_seq || 1}`;
    const bKey = `${b.trans_date}|${b.categoryKey}|${b.displayTitle}|${b.points}|${b.day_seq || 1}`;
    const aMaxId = eventMaxId.get(aKey) || 0;
    const bMaxId = eventMaxId.get(bKey) || 0;
    if (bMaxId !== aMaxId) {
      return bMaxId - aMaxId;
    }

    // 3. Fallback: Activity Category Rank DESC
    const rankDiff = getActivityRank(b) - getActivityRank(a);
    if (rankDiff !== 0) return rankDiff;

    // 4. Account pairing: 박범준 first, then 박주하
    const aOrder = a.account_name === '박범준' ? 0 : 1;
    const bOrder = b.account_name === '박범준' ? 0 : 1;
    if (aOrder !== bOrder) return aOrder - bOrder;

    // 5. Tie breaker
    return (b.id || 0) - (a.id || 0);
  });
}

// Compute Chronological Running Cumulative Balance per Account
function computeRunningBalances(rows) {
  const byAccount = new Map();
  for (const r of rows) {
    if (!byAccount.has(r.account_name)) byAccount.set(r.account_name, []);
    byAccount.get(r.account_name).push(r);
  }

  for (const list of byAccount.values()) {
    // Sort chronological: oldest to newest (exact ID order)
    list.sort((a, b) => {
      if (a.trans_date !== b.trans_date) {
        return a.trans_date.localeCompare(b.trans_date);
      }
      return (a.id || 0) - (b.id || 0);
    });

    let currentBalance = 0;
    for (const item of list) {
      currentBalance += (item.points || 0);
      item.runningBalance = currentBalance;
    }
  }
}

let loadTransactionsPromise = null;

// Fetch all transactions from Supabase REST API (Parallel + Stale-While-Revalidate Cache)
export function loadTransactions(force = false) {
  if (force) {
    loadTransactionsPromise = null;
  }
  if (loadTransactionsPromise) return loadTransactionsPromise;

  loadTransactionsPromise = (async () => {
    // 1. Instant Render from Local Cache (0.01초 즉시 표시 - force가 아닐 때)
    let hasCache = false;
    if (!force) {
      try {
        localStorage.removeItem('dva_cached_transactions_v4');
        const rawCache = localStorage.getItem('dva_cached_transactions_v5');
        if (rawCache) {
          const cachedRows = JSON.parse(rawCache);
          if (Array.isArray(cachedRows) && cachedRows.length > 0) {
            const processed = cachedRows.map(processTransaction);
            computeRunningBalances(processed);
            state.transactions = sortAndPairTransactions(processed);
            populateMonthDropdown();
            renderApp();
            hasCache = true;
          }
        }
      } catch (e) {
        console.warn('Failed to load local cache:', e);
      }
    }

    // 2. High-speed Parallel Fetch via Promise.all (0.3초대 백그라운드 프리패칭 - deterministic order=trans_date.desc,id.desc)
    try {
      const url = `${SUPABASE_URL}/rest/v1/dva_point_transactions?select=id,trans_date,account_name,category,service_type,description,points,expire_date,day_seq,tx_hash&order=trans_date.desc,id.desc`;
      const semUrl = `${SUPABASE_URL}/rest/v1/dva_seminars?select=*`;
      const surveyUrl = `${SUPABASE_URL}/rest/v1/dva_survey_records?select=*&order=id.desc`;
      const vodUrl = `${SUPABASE_URL}/rest/v1/dva_vod_master?select=seminar_id,title,broadcast_date,time_range,category,lecturer&order=broadcast_date.desc`;
      const batchRanges = ['0-999', '1000-1999', '2000-2999', '3000-3999'];

      const [responses, semRows, surveyRows, vodRows] = await Promise.all([
        Promise.all(batchRanges.map(range => 
          fetch(url, {
            headers: {
              'apikey': SUPABASE_KEY,
              'Authorization': `Bearer ${SUPABASE_KEY}`,
              'Range': range
            }
          }).then(r => r.ok ? r.json() : [])
        )),
        fetch(semUrl, {
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`
          }
        }).then(r => r.ok ? r.json() : []).catch(() => []),
        fetch(surveyUrl, {
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`
          }
        }).then(r => r.ok ? r.json() : []).catch(() => []),
        fetch(vodUrl, {
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`
          }
        }).then(r => r.ok ? r.json() : []).catch(() => [])
      ]);

      if (Array.isArray(vodRows)) {
        state.vodMaster = vodRows;
        for (const v of vodRows) {
          if (v.seminar_id && v.title) {
            SEMINAR_TITLES[v.seminar_id] = v.title.trim();
          }
        }
      }

      if (Array.isArray(semRows)) {
        state.seminarsMaster = semRows;
        for (const s of semRows) {
          if (s.seminar_id && s.title) {
            const cleanTitle = s.title.trim();
            if (cleanTitle.includes('만족도') || cleanTitle.includes('설문조사 양식') || cleanTitle.includes('양식 폼')) {
              continue;
            }
            if (!SEMINAR_TITLES[s.seminar_id]) {
              SEMINAR_TITLES[s.seminar_id] = cleanTitle;
            }
          }
        }
      }

      if (Array.isArray(surveyRows)) {
        state.surveyRecords = surveyRows;
      }

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

      // Deduplicate by Natural Key (account, date, description, points, day_seq)
      const seen = new Set();
      const dedupedRows = [];
      for (const row of allRows) {
        const key = `${row.account_name}_${row.trans_date}_${row.description}_${row.points}_${row.day_seq || 1}`;
        if (!seen.has(key)) {
          seen.add(key);
          dedupedRows.push(row);
        }
      }

      // Compute Running Balance per Account & Sort/Pair Newest First
      const processedRows = dedupedRows.map(processTransaction);
      computeRunningBalances(processedRows);
      const pairedRows = sortAndPairTransactions(processedRows);

      // Update state & Local Storage Cache
      state.transactions = pairedRows;
      try {
        localStorage.setItem('dva_cached_transactions_v5', JSON.stringify(dedupedRows));
      } catch (e) {
        // quota safeguard
      }

      console.log(`Loaded ${state.transactions.length} point transactions in parallel (100% exact balance, 1:1 paired, top newest)`);
      populateMonthDropdown();
      renderApp();
    } catch (error) {
      console.error('Failed to load transactions from Supabase:', error);
    } finally {
      loadTransactionsPromise = null;
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

  const pointsSec = document.getElementById('pointsViewSection');
  const semSec = document.getElementById('seminarArchiveSection');

  if (state.currentMainTab === 'points') {
    if (pointsSec) pointsSec.classList.remove('hidden');
    if (semSec) semSec.classList.add('hidden');
    renderMonthlyBarChart();
    renderFilteredList();
  } else {
    if (pointsSec) pointsSec.classList.add('hidden');
    if (semSec) semSec.classList.remove('hidden');
    renderSeminarArchive();
  }
}

// =========================================================================
// 📑 세미나 & 심화설문 아카이브 관제 엔진 (일간/월간 듀얼 뷰)
// =========================================================================

function populateSeminarMonthDropdown() {
  const selectEl = document.getElementById('seminarMonthSelect');
  if (!selectEl) return;

  const monthSet = new Set();
  const nowYM = new Date().toISOString().slice(0, 7);
  monthSet.add(nowYM);

  state.transactions.forEach(r => {
    if (r.trans_date && (r.description.includes('설문') || r.description.includes('세미나'))) {
      const desc = r.description || '';
      const mDate = desc.match(/([0-9]{1,2})\/([0-9]{1,2})\s*설문/);
      if (mDate) {
        const y = r.trans_date.slice(0, 4);
        const m = String(mDate[1]).padStart(2, '0');
        monthSet.add(`${y}-${m}`);
      } else {
        monthSet.add(r.trans_date.slice(0, 7));
      }
    }
  });
  (state.surveyRecords || []).forEach(r => {
    const d = r.seminar_date || (r.submitted_at ? r.submitted_at.slice(0, 10) : '');
    if (d) monthSet.add(d.slice(0, 7));
  });

  const sortedYMs = Array.from(monthSet).sort().reverse();
  const currentVal = state.selectedSeminarMonth || sortedYMs[0] || '2026-09';

  selectEl.innerHTML = sortedYMs.map(ym => {
    const [y, m] = ym.split('-');
    return `<option value="${ym}" ${ym === currentVal ? 'selected' : ''}>${y}년 ${parseInt(m, 10)}월</option>`;
  }).join('');
}

function getAggregatedSeminarData(targetMonth) {
  const dateMap = new Map();
  const todayStr = new Date().toISOString().slice(0, 10);

  // 0. Build global lookup maps
  const globalSurveyMap = new Map();
  for (const sRec of (state.surveyRecords || [])) {
    const sid = sRec.seminar_id;
    if (sid) {
      if (!globalSurveyMap.has(sid)) globalSurveyMap.set(sid, []);
      globalSurveyMap.get(sid).push(sRec);
    }
  }

  // Map of transactions: deepPayouts & basic attendance
  const deepPayoutMap = new Map();
  const basicAttendanceMap = new Map();

  for (const tx of state.transactions) {
    const desc = tx.description || '';
    const m = desc.match(/(?:설문|세미나).*?([0-9]{4})/) || desc.match(/([0-9]{4}).*?(?:세미나|설문)/);
    const sid = m ? (m[1] || m[2]) : null;

    if (sid && tx.points >= 2000) {
      if (!deepPayoutMap.has(sid)) deepPayoutMap.set(sid, { pointsByAcc: {}, payoutDate: tx.trans_date });
      const dp = deepPayoutMap.get(sid);
      dp.pointsByAcc[tx.account_name] = (dp.pointsByAcc[tx.account_name] || 0) + tx.points;
      dp.payoutDate = tx.trans_date;
    } else if (tx.points === 1000 && (desc.includes('세미나') || desc.includes('설문'))) {
      const d = tx.trans_date;
      if (!basicAttendanceMap.has(d)) basicAttendanceMap.set(d, {});
      const ba = basicAttendanceMap.get(d);
      ba[tx.account_name] = (ba[tx.account_name] || 0) + 1;
    }
  }

  const addSeminarToMap = (sid, rawTitle, bDate, timeRange = '13:00 ~ 14:00') => {
    if (!bDate || !bDate.startsWith(targetMonth)) return;
    if (!dateMap.has(bDate)) dateMap.set(bDate, new Map());
    const daySems = dateMap.get(bDate);
    if (daySems.has(sid)) return;

    const title = (rawTitle || SEMINAR_TITLES[sid] || '라이브 세미나').trim();
    const surveyList = globalSurveyMap.get(sid) || [];
    const hasSurvey = surveyList.length > 0;
    // 100자 이상 주관식 답변이 1개 이상 있어야 정식 심화설문으로 인정
    const hasDeepSurvey = surveyList.some(r => (r.char_count || (r.subjective_answer ? r.subjective_answer.length : 0)) >= 100);
    const hasDeepPayout = deepPayoutMap.has(sid);

    let categoryStatus = 'upcoming';
    let payoutDate = null;
    const basicPointsByAccount = {};
    const deepPointsByAccount = {};
    const surveyAnswers = {};

    // Collect survey answers (including < 100 chars so they show in daily detail)
    if (hasSurvey) {
      for (const sRec of surveyList) {
        if (state.account === 'all' || sRec.account_name === state.account) {
          const acc = sRec.account_name;
          if (!surveyAnswers[acc]) surveyAnswers[acc] = [];
          surveyAnswers[acc].push({
            question: sRec.question,
            answer: sRec.subjective_answer,
            charCount: sRec.char_count || (sRec.subjective_answer ? sRec.subjective_answer.length : 0),
            submittedAt: sRec.submitted_at
          });
        }
      }
    }

    // Determine basic points (1000P on eventDate)
    const isFreeSeminar = title.includes('Global Journal') || title.includes('무료') || (bDate <= todayStr && !hasDeepSurvey && !hasDeepPayout && (!basicAttendanceMap.has(bDate) || Object.keys(basicAttendanceMap.get(bDate)).length === 0));

    if (bDate <= todayStr && !isFreeSeminar) {
      if (state.account === 'all') {
        basicPointsByAccount['박범준'] = 1000;
        basicPointsByAccount['박주하'] = 1000;
      } else {
        basicPointsByAccount[state.account] = 1000;
      }
    }

    // Determine deep points
    if (hasDeepPayout) {
      const dp = deepPayoutMap.get(sid);
      payoutDate = dp.payoutDate;
      for (const [acc, pts] of Object.entries(dp.pointsByAcc)) {
        if (state.account === 'all' || acc === state.account) {
          deepPointsByAccount[acc] = pts;
        }
      }
    }

    // Determine categoryStatus (Standard Business Priority)
    if (bDate > todayStr) {
      categoryStatus = 'upcoming';
    } else if (hasDeepPayout && Object.keys(deepPointsByAccount).length > 0) {
      // 1순위: 심화 리워드 입금 완료 -> 심화완료
      categoryStatus = 'deep_completed';
    } else if (hasDeepSurvey) {
      // 2순위: 100자 이상 정식 심화설문 제출 -> 심화대기
      categoryStatus = 'deep_pending';
    } else if (isFreeSeminar) {
      // 3순위: 학술 무료 세미나 -> 무료완료
      categoryStatus = 'free_completed';
    } else {
      // 4순위: 일반 세미나 (100자 미만 단답형 설문 포함) -> 기본완료
      categoryStatus = 'basic_completed';
    }

    const basicTotal = Object.values(basicPointsByAccount).reduce((a, b) => a + b, 0);
    const deepTotal = Object.values(deepPointsByAccount).reduce((a, b) => a + b, 0);

    daySems.set(sid, {
      sid,
      title,
      eventDate: bDate,
      timeRange,
      payoutDate,
      categoryStatus,
      basicPointsByAccount,
      deepPointsByAccount,
      basicPointsTotal: basicTotal,
      deepPointsTotal: deepTotal,
      totalPoints: basicTotal + deepTotal,
      surveyAnswers
    });
  };

  // 1. Process all VOD Master seminars for targetMonth
  for (const v of (state.vodMaster || [])) {
    addSeminarToMap(v.seminar_id, v.title, v.broadcast_date, v.time_range || '13:00 ~ 14:00');
  }

  // 2. Process all live seminars from state.seminarsMaster for targetMonth
  for (const s of (state.seminarsMaster || [])) {
    addSeminarToMap(s.seminar_id, s.title, s.seminar_date, s.time_range || '19:00 ~ 20:00');
  }

  // 3. Process any surveys in surveyRecords not yet attached
  for (const sRec of (state.surveyRecords || [])) {
    if (sRec.seminar_id && sRec.seminar_date) {
      addSeminarToMap(sRec.seminar_id, sRec.seminar_title, sRec.seminar_date, '19:00 ~ 20:00');
    }
  }

  // 4. Process any deep payouts in deepPayoutMap not yet attached
  for (const [sid, dp] of deepPayoutMap.entries()) {
    if (dp.payoutDate) {
      const foundVod = (state.vodMaster || []).find(v => v.seminar_id === sid);
      const eDate = foundVod ? foundVod.broadcast_date : dp.payoutDate;
      addSeminarToMap(sid, SEMINAR_TITLES[sid] || '심화 세미나', eDate, '13:00 ~ 14:00');
    }
  }

  return dateMap;
}

function renderSeminarArchive() {
  populateSeminarMonthDropdown();
  const targetMonth = state.selectedSeminarMonth || '2026-09';
  const dateMap = getAggregatedSeminarData(targetMonth);

  // Compute 4-category monthly KPI
  let deepCompletedCount = 0, deepCompletedPoints = 0;
  let deepPendingCount = 0, deepPendingPoints = 0;
  let basicCompletedCount = 0, basicCompletedPoints = 0;
  let freeCompletedCount = 0, freeCompletedPoints = 0;

  for (const daySems of dateMap.values()) {
    for (const sem of daySems.values()) {
      if (sem.categoryStatus === 'deep_completed') {
        deepCompletedCount++;
        deepCompletedPoints += sem.totalPoints;
      } else if (sem.categoryStatus === 'deep_pending') {
        deepPendingCount++;
        deepPendingPoints += sem.basicPointsTotal;
      } else if (sem.categoryStatus === 'basic_completed') {
        basicCompletedCount++;
        basicCompletedPoints += sem.basicPointsTotal;
      } else if (sem.categoryStatus === 'free_completed') {
        freeCompletedCount++;
      }
    }
  }

  const kpiDeepDoneCnt = document.getElementById('kpiDeepCompletedCount');
  const kpiDeepDonePts = document.getElementById('kpiDeepCompletedPoints');
  const kpiDeepPendCnt = document.getElementById('kpiDeepPendingCount');
  const kpiDeepPendPts = document.getElementById('kpiDeepPendingPoints');
  const kpiBasicDoneCnt = document.getElementById('kpiBasicCompletedCount');
  const kpiBasicDonePts = document.getElementById('kpiBasicCompletedPoints');
  const kpiFreeDoneCnt = document.getElementById('kpiFreeCompletedCount');
  const kpiFreeDonePts = document.getElementById('kpiFreeCompletedPoints');

  if (kpiDeepDoneCnt) kpiDeepDoneCnt.innerText = `${deepCompletedCount}건`;
  if (kpiDeepDonePts) kpiDeepDonePts.innerText = `+${deepCompletedPoints.toLocaleString()} P`;
  if (kpiDeepPendCnt) kpiDeepPendCnt.innerText = `${deepPendingCount}건`;
  if (kpiDeepPendPts) kpiDeepPendPts.innerText = `+${deepPendingPoints.toLocaleString()} P`;
  if (kpiBasicDoneCnt) kpiBasicDoneCnt.innerText = `${basicCompletedCount}건`;
  if (kpiBasicDonePts) kpiBasicDonePts.innerText = `+${basicCompletedPoints.toLocaleString()} P`;
  if (kpiFreeDoneCnt) kpiFreeDoneCnt.innerText = `${freeCompletedCount}건`;
  if (kpiFreeDonePts) kpiFreeDonePts.innerText = `0 P`;

  // Sub-views visibility
  const calView = document.getElementById('seminarCalendarContainer');
  const timeView = document.getElementById('seminarTimelineContainer');

  if (state.seminarViewMode === 'monthly') {
    if (calView) calView.classList.remove('hidden');
    if (timeView) timeView.classList.add('hidden');
    renderMonthlyCalendar(targetMonth, dateMap);
  } else {
    if (calView) calView.classList.add('hidden');
    if (timeView) timeView.classList.remove('hidden');
    renderDailyTimeline(targetMonth, dateMap);
  }
}

function renderMonthlyCalendar(targetMonth, dateMap) {
  const grid = document.getElementById('calendarDaysGrid');
  const titleEl = document.getElementById('calendarMonthTitle');
  if (!grid) return;

  const [yearStr, monthStr] = targetMonth.split('-');
  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10);
  if (titleEl) titleEl.innerHTML = `<span>📅</span> ${year}년 ${month}월 세미나 달력 (평일)`;

  grid.innerHTML = '';

  const firstDayRaw = new Date(year, month - 1, 1).getDay();
  const totalDays = new Date(year, month, 0).getDate();
  const todayStr = new Date().toISOString().slice(0, 10);

  // 평일(월~금) 5열 그리드: 월(1)->0, 화(2)->1, 수(3)->2, 목(4)->3, 금(5)->4, 토/일->0
  let leadEmptyDays = 0;
  if (firstDayRaw >= 1 && firstDayRaw <= 5) {
    leadEmptyDays = firstDayRaw - 1;
  }

  for (let i = 0; i < leadEmptyDays; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.className = "min-h-[85px] bg-slate-50/40 rounded-xl border border-slate-100/60";
    grid.appendChild(emptyCell);
  }

  for (let day = 1; day <= totalDays; day++) {
    const dayDate = new Date(year, month - 1, day);
    const dayOfWeek = dayDate.getDay();
    // 주말(토=6, 일=0)은 달력에서 제외
    if (dayOfWeek === 0 || dayOfWeek === 6) continue;

    const dayStr = String(day).padStart(2, '0');
    const fullDate = `${targetMonth}-${dayStr}`;
    const daySemsMap = dateMap.get(fullDate);
    const allSems = daySemsMap ? Array.from(daySemsMap.values()) : [];
    
    // Multi-select Category Filter
    const visibleSems = allSems.filter(sem => state.seminarFilters[sem.categoryStatus] !== false);
    visibleSems.sort((a, b) => (a.timeRange || '').localeCompare(b.timeRange || ''));
    const hasSems = visibleSems.length > 0;
    const isToday = fullDate === todayStr;

    const cell = document.createElement('div');
    cell.className = `min-h-[85px] p-1.5 rounded-xl border flex flex-col justify-start gap-1 transition-all cursor-pointer ${
      hasSems 
        ? 'bg-blue-50/60 border-blue-200 hover:border-blue-400 hover:shadow-xs' 
        : isToday 
          ? 'bg-emerald-50/40 border-emerald-300' 
          : 'bg-white border-slate-100 hover:bg-slate-50'
    }`;

    let topHtml = `<div class="flex items-center justify-between pb-0.5 border-b border-slate-100/80"><span class="text-[10px] font-bold ${
      isToday ? 'text-emerald-700 bg-emerald-100 px-1 rounded' : 'text-slate-600'
    }">${day}</span>`;
    if (hasSems) {
      topHtml += `<span class="text-[9px] font-bold text-blue-600">${visibleSems.length}건</span>`;
    }
    topHtml += `</div>`;

    let badgesHtml = '<div class="space-y-1 w-full">';
    if (hasSems) {
      for (const sem of visibleSems) {
        let ptsText = '';
        let badgeStyle = '';
        if (sem.categoryStatus === 'deep_completed') {
          const kPts = Math.round(sem.totalPoints / 1000);
          ptsText = `${kPts}K`;
          badgeStyle = 'bg-emerald-500 text-white font-bold';
        } else if (sem.categoryStatus === 'deep_pending') {
          const kPts = Math.max(1, Math.round(sem.basicPointsTotal / 1000));
          ptsText = `${kPts}K`;
          badgeStyle = 'bg-amber-400 text-amber-950 font-bold';
        } else if (sem.categoryStatus === 'basic_completed') {
          const kPts = Math.max(1, Math.round(sem.basicPointsTotal / 1000));
          ptsText = `${kPts}K`;
          badgeStyle = 'bg-blue-500 text-white font-bold';
        } else if (sem.categoryStatus === 'free_completed') {
          ptsText = '0';
          badgeStyle = 'bg-white text-slate-700 border border-slate-300 font-bold';
        } else {
          ptsText = '예정';
          badgeStyle = 'bg-slate-200 text-slate-600 font-bold';
        }

        const sidText = sem.sid || '세미나';

        badgesHtml += `
          <div class="flex items-center gap-0.5 w-full text-[8.5px] leading-none" title="${sem.title}">
            <span class="flex-1 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-center truncate">
              ${sidText}
            </span>
            <span class="flex-1 py-0.5 rounded text-center truncate ${badgeStyle}">
              ${ptsText}
            </span>
          </div>
        `;
      }
    }
    badgesHtml += '</div>';

    cell.innerHTML = topHtml + badgesHtml;

    cell.addEventListener('click', () => {
      state.selectedDailyDate = fullDate;
      state.seminarViewMode = 'daily';
      syncSubModeButtons();
      renderSeminarArchive();
    });

    grid.appendChild(cell);
  }
}

function renderDailyTimeline(targetMonth, dateMap) {
  const container = document.getElementById('seminarTimelineContainer');
  if (!container) return;

  container.innerHTML = '';

  const sortedDates = Array.from(dateMap.keys()).sort().reverse();
  const filterDate = state.selectedDailyDate;
  const datesToShow = filterDate ? [filterDate] : sortedDates;

  if (filterDate) {
    const availableDatesAsc = Array.from(dateMap.keys()).sort();
    const currentIndex = availableDatesAsc.indexOf(filterDate);

    let prevDate = null;
    let nextDate = null;
    if (currentIndex !== -1) {
      if (currentIndex > 0) prevDate = availableDatesAsc[currentIndex - 1];
      if (currentIndex < availableDatesAsc.length - 1) nextDate = availableDatesAsc[currentIndex + 1];
    } else {
      for (let i = availableDatesAsc.length - 1; i >= 0; i--) {
        if (availableDatesAsc[i] < filterDate) {
          prevDate = availableDatesAsc[i];
          break;
        }
      }
      for (let i = 0; i < availableDatesAsc.length; i++) {
        if (availableDatesAsc[i] > filterDate) {
          nextDate = availableDatesAsc[i];
          break;
        }
      }
    }

    const banner = document.createElement('div');
    banner.className = "flex items-center justify-between bg-blue-50 p-2 rounded-xl border border-blue-200 text-xs";
    banner.innerHTML = `
      <div class="flex items-center gap-1.5">
        <button id="btnPrevDate" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-blue-200 text-blue-700 hover:bg-blue-100 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs active:scale-90" ${!prevDate ? 'disabled' : ''} title="${prevDate ? `${prevDate}로 이동` : '이전 날짜 없음'}">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <span class="font-bold text-blue-900 px-1">📅 ${filterDate}</span>
        <button id="btnNextDate" class="w-7 h-7 flex items-center justify-center rounded-lg bg-white border border-blue-200 text-blue-700 hover:bg-blue-100 disabled:opacity-30 disabled:pointer-events-none transition-all shadow-2xs active:scale-90" ${!nextDate ? 'disabled' : ''} title="${nextDate ? `${nextDate}로 이동` : '다음 날짜 없음'}">
          <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
      <button id="btnShowAllDates" class="font-bold text-blue-600 hover:underline px-2 py-1">전체 날짜 보기</button>
    `;
    container.appendChild(banner);

    if (prevDate) {
      banner.querySelector('#btnPrevDate').addEventListener('click', () => {
        state.selectedDailyDate = prevDate;
        renderDailyTimeline(targetMonth, dateMap);
      });
    }
    if (nextDate) {
      banner.querySelector('#btnNextDate').addEventListener('click', () => {
        state.selectedDailyDate = nextDate;
        renderDailyTimeline(targetMonth, dateMap);
      });
    }
    banner.querySelector('#btnShowAllDates').addEventListener('click', () => {
      state.selectedDailyDate = null;
      renderDailyTimeline(targetMonth, dateMap);
    });
  }

  if (datesToShow.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400">
        <div class="text-3xl mb-2">🔍</div>
        <p class="text-xs font-semibold">선택하신 조건에 등록된 세미나 내역이 없습니다.</p>
      </div>
    `;
    return;
  }

  // Action Bar: 전체 주관식 답변 접기/펼치기 토글
  const actionToolbar = document.createElement('div');
  actionToolbar.className = "flex items-center justify-between px-1 py-0.5 text-xs";
  actionToolbar.innerHTML = `
    <span class="text-[11px] font-semibold text-slate-400">일간 세미나 상세 일정</span>
    <button class="btn-toggle-all-answers px-2.5 py-1 rounded-lg border border-slate-200 bg-white text-[11px] font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-1 shadow-2xs transition-all">
      <span>${state.allAnswersExpanded ? '전체 답변 접기 🔼' : '전체 답변 펼치기 🔽'}</span>
    </button>
  `;
  actionToolbar.querySelector('.btn-toggle-all-answers').addEventListener('click', () => {
    state.allAnswersExpanded = !state.allAnswersExpanded;
    renderDailyTimeline(targetMonth, dateMap);
  });
  container.appendChild(actionToolbar);

  for (const dt of datesToShow) {
    const daySemsMap = dateMap.get(dt);
    if (!daySemsMap || daySemsMap.size === 0) continue;

    const allSems = Array.from(daySemsMap.values());
    const visibleSems = allSems.filter(sem => state.seminarFilters[sem.categoryStatus] !== false);
    if (visibleSems.length === 0) continue;

    visibleSems.sort((a, b) => (a.timeRange || '').localeCompare(b.timeRange || ''));

    let dayTotalPts = 0;
    for (const s of visibleSems) dayTotalPts += s.totalPoints;

    const dayCard = document.createElement('div');
    dayCard.className = "bg-white rounded-2xl p-4 card-shadow border border-slate-100 space-y-3";

    const dayHeader = `
      <div class="flex items-center justify-between pb-2 border-b border-slate-100">
        <div class="flex items-center gap-2">
          <span class="text-base">📅</span>
          <h4 class="text-xs font-bold text-slate-900">${dt}</h4>
          <span class="text-[10px] text-slate-400">총 ${visibleSems.length}건</span>
        </div>
        ${dayTotalPts > 0 ? `<span class="text-xs font-black text-emerald-600">+${dayTotalPts.toLocaleString()} P</span>` : '<span class="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">정산 대기</span>'}
      </div>
    `;

    let itemsHtml = '<div class="space-y-3">';
    for (const sem of visibleSems) {
      const hasSurveyAnswers = Object.keys(sem.surveyAnswers).length > 0;

      // Status Badge
      let statusBadge = '';
      if (sem.categoryStatus === 'deep_completed') {
        statusBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs">🟢 심화완료</span>';
      } else if (sem.categoryStatus === 'deep_pending') {
        statusBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">🟡 심화대기</span>';
      } else if (sem.categoryStatus === 'basic_completed') {
        statusBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-blue-100 text-blue-900 border border-blue-300 shadow-2xs">🔵 기본완료</span>';
      } else if (sem.categoryStatus === 'free_completed') {
        statusBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 text-slate-700 border border-slate-300 shadow-2xs">⚪ 무료완료</span>';
      } else {
        statusBadge = '<span class="text-[10px] font-bold px-2 py-0.5 rounded-lg bg-slate-100 text-slate-500 border border-slate-200">⚪ 방송예정</span>';
      }

      // Line 1: Basic points buttons (진행일)
      let basicBtns = '';
      const basicEntries = Object.entries(sem.basicPointsByAccount || {});
      if (basicEntries.length > 0) {
        basicBtns = basicEntries.map(([acc, pts]) => `
          <span class="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200 shadow-2xs">
            +${pts.toLocaleString()}P (${formatAccountName(acc)})
          </span>
        `).join(' ');
      } else if (sem.categoryStatus !== 'free_completed' && sem.categoryStatus !== 'upcoming') {
        basicBtns = `<span class="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200 shadow-2xs">+1,000P</span>`;
      }

      // Line 2: Deep points buttons (입금일)
      let deepLine = '';
      if (sem.categoryStatus === 'deep_completed') {
        const deepEntries = Object.entries(sem.deepPointsByAccount || {});
        const deepBtns = deepEntries.map(([acc, pts]) => `
          <span class="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-900 border border-emerald-300 shadow-2xs">
            +${pts.toLocaleString()}P (${formatAccountName(acc)})
          </span>
        `).join(' ');
        deepLine = `
          <div class="flex items-center gap-2 text-[10px] text-slate-600 flex-wrap">
            <span class="font-semibold text-emerald-700">💰 <strong>입금일</strong>: ${sem.payoutDate || '-'}</span>
            <div class="flex items-center gap-1 flex-wrap">${deepBtns}</div>
          </div>
        `;
      } else if (sem.categoryStatus === 'deep_pending') {
        const accounts = Object.keys(sem.surveyAnswers || {});
        const pendingBtns = (accounts.length > 0 ? accounts : (state.account === 'all' ? ['박범준', '박주하'] : [state.account])).map(acc => `
          <span class="text-[9.5px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 shadow-2xs">
            대기 (${formatAccountName(acc)})
          </span>
        `).join(' ');
        deepLine = `
          <div class="flex items-center gap-2 text-[10px] text-slate-600 flex-wrap">
            <span class="font-semibold text-amber-700">💰 <strong>입금일</strong>: 대기</span>
            <div class="flex items-center gap-1 flex-wrap">${pendingBtns}</div>
          </div>
        `;
      } else if (sem.categoryStatus === 'basic_completed') {
        deepLine = `
          <div class="flex items-center gap-2 text-[10px] text-slate-400">
            <span>💰 <strong>입금일</strong>: -</span>
          </div>
        `;
      } else if (sem.categoryStatus === 'free_completed') {
        deepLine = `
          <div class="flex items-center gap-2 text-[10px] text-slate-400">
            <span>💰 <strong>입금일</strong>: - (포인트 없음)</span>
          </div>
        `;
      }

      itemsHtml += `
        <div class="bg-slate-50/70 p-3 rounded-xl border border-slate-200/70 space-y-2">
          <!-- Header: ID -> Time Range -> Status Badge -->
          <div class="flex flex-wrap items-center gap-2 pb-1.5 border-b border-slate-200/50">
            ${sem.sid ? `<span class="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">ID: ${sem.sid}</span>` : ''}
            ${sem.timeRange ? `<span class="text-[10.5px] font-bold text-slate-600">⏰ ${sem.timeRange}</span>` : ''}
            ${statusBadge}
          </div>
          <h5 class="text-xs font-bold text-slate-800 leading-snug break-keep">${cleanSeminarTitle(sem.title)}</h5>

          <!-- 일정 및 포인트 영역 (줄바꿈 분리) -->
          <div class="space-y-1.5 pt-1">
            <div class="flex items-center gap-2 text-[10px] text-slate-600 flex-wrap">
              <span>📅 <strong>진행일</strong>: ${sem.eventDate}</span>
              ${basicBtns ? `<div class="flex items-center gap-1 flex-wrap">${basicBtns}</div>` : ''}
            </div>
            ${deepLine}
          </div>

          ${hasSurveyAnswers ? `
            <div class="pt-1.5">
              <button class="toggle-subjective-btn w-full py-1.5 px-2.5 rounded-lg bg-white border border-slate-200 text-[11px] font-bold text-slate-700 flex items-center justify-between hover:bg-slate-50 transition-all">
                <span class="flex items-center gap-1.5">
                  <span>✍️</span> ${sem.categoryStatus.startsWith('deep') ? 'AI 심화설문 주관식 작성 내역' : 'AI 설문 주관식 작성 내역'}
                  <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">전문 수록</span>
                  <span class="text-[10px] font-normal text-slate-400">(${Object.keys(sem.surveyAnswers).map(formatAccountName).join(', ')})</span>
                </span>
                <span class="accordion-arrow text-slate-400 transition-transform" style="transform: ${state.allAnswersExpanded ? 'rotate(180deg)' : 'rotate(0deg)'}">▼</span>
              </button>
              <div class="subjective-content ${state.allAnswersExpanded ? '' : 'hidden'} mt-2 space-y-2 text-xs">
                ${Object.entries(sem.surveyAnswers).map(([acc, ansVal]) => {
                  const ansList = Array.isArray(ansVal) ? ansVal : [ansVal];
                  return `
                    <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                      <div class="flex items-center justify-between border-b border-slate-100 pb-1.5">
                        <span class="font-bold text-slate-800 flex items-center gap-1">
                          ${acc === '박범준' ? '👨‍⚕️' : '👩‍⚕️'} <strong class="text-blue-900">${formatAccountName(acc)}님</strong>
                        </span>
                        <span class="text-[10px] font-medium text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">${ansList.length}개 문항 답변 완료</span>
                      </div>
                      ${ansList.map((item, qIdx) => `
                        <div class="space-y-1.5 ${qIdx > 0 ? 'pt-2.5 border-t border-dashed border-slate-200' : ''}">
                          <div class="flex items-start justify-between gap-2">
                            <p class="text-[10.5px] text-slate-700 font-bold bg-slate-50 p-1.5 rounded border border-slate-100 flex-1 leading-snug">
                              <span class="text-blue-600 font-extrabold mr-1">Q${ansList.length > 1 ? (qIdx + 1) : ''}.</span> ${item.question || '라이브 세미나 심화 설문'}
                            </p>
                            <span class="text-[9.5px] font-medium text-slate-400 whitespace-nowrap bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">${item.charCount}자</span>
                          </div>
                          <div class="p-2.5 bg-blue-50/40 rounded-lg text-slate-800 leading-relaxed font-sans text-xs border border-blue-100/60 break-keep">
                            "${item.answer}"
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `;
    }
    itemsHtml += '</div>';

    dayCard.innerHTML = dayHeader + itemsHtml;

    dayCard.querySelectorAll('.toggle-subjective-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const arrow = btn.querySelector('.accordion-arrow');
        if (content.classList.contains('hidden')) {
          content.classList.remove('hidden');
          arrow.style.transform = 'rotate(180deg)';
        } else {
          content.classList.add('hidden');
          arrow.style.transform = 'rotate(0deg)';
        }
      });
    });

    container.appendChild(dayCard);
  }
}

function syncSubModeButtons() {
  const mBtn = document.getElementById('seminarModeMonth');
  const dBtn = document.getElementById('seminarModeDaily');
  if (state.seminarViewMode === 'monthly') {
    if (mBtn) mBtn.className = "px-2.5 py-1 text-xs font-bold rounded-lg bg-white text-blue-600 shadow-xs transition-all";
    if (dBtn) dBtn.className = "px-2.5 py-1 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-800 transition-all";
  } else {
    if (mBtn) mBtn.className = "px-2.5 py-1 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-800 transition-all";
    if (dBtn) dBtn.className = "px-2.5 py-1 text-xs font-bold rounded-lg bg-white text-blue-600 shadow-xs transition-all";
  }
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
    if (balanceSubEl) balanceSubEl.innerHTML = `BJ: <strong>${beomjunBalance.toLocaleString()}P</strong> &nbsp;|&nbsp; JH: <strong>${juhaBalance.toLocaleString()}P</strong>`;
  } else if (state.account === '박범준') {
    if (balanceEl) balanceEl.innerText = `${beomjunBalance.toLocaleString()} P`;
    if (balanceSubEl) balanceSubEl.innerHTML = "BJ 계정 관제 중";
  } else {
    if (balanceEl) balanceEl.innerText = `${juhaBalance.toLocaleString()} P`;
    if (balanceSubEl) balanceSubEl.innerHTML = "JH 계정 관제 중";
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
              <span class="badge bg-slate-100 text-slate-600 font-medium">${formatAccountName(row.account_name)}</span>
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
          <!-- Points & Running Balance -->
          <div class="text-right whitespace-nowrap pl-2 flex-shrink-0 flex flex-col items-end justify-center">
            <span class="text-sm font-black font-mono ${ptsColor}">
              ${ptsPrefix}${row.points.toLocaleString()} P
            </span>
            <span class="text-[10px] font-mono text-slate-400 mt-0.5" title="해당 시점 잔액">
              잔액 ${row.runningBalance !== undefined ? row.runningBalance.toLocaleString() : '-'} P
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
  // Refresh Button Listener
  const btnRefresh = document.getElementById('btnRefresh');
  if (btnRefresh) {
    btnRefresh.addEventListener('click', async () => {
      const icon = document.getElementById('refreshIcon');
      if (icon) icon.classList.add('animate-spin');
      try {
        await loadTransactions(true);
      } finally {
        setTimeout(() => {
          if (icon) icon.classList.remove('animate-spin');
        }, 500);
      }
    });
  }

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

  // Main Tab Switching (Points vs Seminars)
  const tabPointsBtn = document.getElementById('mainTabPoints');
  const tabSeminarsBtn = document.getElementById('mainTabSeminars');
  if (tabPointsBtn && tabSeminarsBtn) {
    tabPointsBtn.addEventListener('click', () => {
      state.currentMainTab = 'points';
      tabPointsBtn.className = "main-mode-tab flex-1 py-2 text-xs font-bold rounded-lg bg-white text-blue-600 shadow-sm transition-all flex items-center justify-center gap-1.5";
      tabSeminarsBtn.className = "main-mode-tab flex-1 py-2 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-800 transition-all flex items-center justify-center gap-1.5";
      renderApp();
    });

    tabSeminarsBtn.addEventListener('click', () => {
      state.currentMainTab = 'seminars';
      tabSeminarsBtn.className = "main-mode-tab flex-1 py-2 text-xs font-bold rounded-lg bg-white text-blue-600 shadow-sm transition-all flex items-center justify-center gap-1.5";
      tabPointsBtn.className = "main-mode-tab flex-1 py-2 text-xs font-bold rounded-lg text-slate-500 hover:text-slate-800 transition-all flex items-center justify-center gap-1.5";
      renderApp();
    });
  }

  // Seminar Sub-mode Switching (Monthly vs Daily)
  const semMonthBtn = document.getElementById('seminarModeMonth');
  const semDailyBtn = document.getElementById('seminarModeDaily');
  if (semMonthBtn && semDailyBtn) {
    semMonthBtn.addEventListener('click', () => {
      state.seminarViewMode = 'monthly';
      syncSubModeButtons();
      renderSeminarArchive();
    });
    semDailyBtn.addEventListener('click', () => {
      state.seminarViewMode = 'daily';
      syncSubModeButtons();
      renderSeminarArchive();
    });
  }

  // Seminar Month Dropdown Selector
  const semMonthSelect = document.getElementById('seminarMonthSelect');
  if (semMonthSelect) {
    semMonthSelect.addEventListener('change', (e) => {
      state.selectedSeminarMonth = e.target.value;
      state.selectedDailyDate = null;
      renderSeminarArchive();
    });
  }

  // Seminar Filter: Multi-Select Category Filters (심화완료, 심화대기, 기본완료, 무료완료)
  const filterBtns = document.querySelectorAll('#seminarFilterGroup .filter-toggle-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.filter;
      if (!key) return;
      state.seminarFilters[key] = !state.seminarFilters[key];

      const isActive = state.seminarFilters[key];
      if (isActive) {
        btn.classList.add('active');
        if (key === 'deep_completed') {
          btn.className = "filter-toggle-btn active px-2.5 py-1 text-[11px] font-bold rounded-lg border border-emerald-400 bg-emerald-500 text-white transition-all cursor-pointer shadow-2xs";
        } else if (key === 'deep_pending') {
          btn.className = "filter-toggle-btn active px-2.5 py-1 text-[11px] font-bold rounded-lg border border-amber-400 bg-amber-500 text-white transition-all cursor-pointer shadow-2xs";
        } else if (key === 'basic_completed') {
          btn.className = "filter-toggle-btn active px-2.5 py-1 text-[11px] font-bold rounded-lg border border-blue-400 bg-blue-500 text-white transition-all cursor-pointer shadow-2xs";
        } else if (key === 'free_completed') {
          btn.className = "filter-toggle-btn active px-2.5 py-1 text-[11px] font-bold rounded-lg border border-slate-300 bg-slate-200 text-slate-800 transition-all cursor-pointer shadow-2xs";
        }
      } else {
        btn.classList.remove('active');
        btn.className = "filter-toggle-btn px-2.5 py-1 text-[11px] font-medium rounded-lg border border-slate-200 bg-white text-slate-400 opacity-60 transition-all cursor-pointer shadow-2xs";
      }

      renderSeminarArchive();
    });
  });

  // Toggle All Subjective Answers (전체 답변 접기 / 펼치기)
  const btnToggleAll = document.getElementById('btnToggleAllAnswers');
  const txtToggleAll = document.getElementById('toggleAllAnswersText');
  if (btnToggleAll) {
    btnToggleAll.addEventListener('click', () => {
      state.allAnswersExpanded = !state.allAnswersExpanded;
      if (txtToggleAll) {
        txtToggleAll.innerText = state.allAnswersExpanded ? '전체 답변 접기' : '전체 답변 펼치기';
      }
      renderDailyTimeline(state.selectedSeminarMonth || '2026-09', getAggregatedSeminarData(state.selectedSeminarMonth || '2026-09'));
    });
  }

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

  // Reactive Auto-Sync: Silent background refresh on tab focus & 60-second heartbeat
  let lastAutoSync = Date.now();
  const triggerSilentSync = () => {
    const now = Date.now();
    // Throttle silent refresh to at most once every 15 seconds
    if (now - lastAutoSync < 15000) return;
    lastAutoSync = now;
    loadTransactions(true).then(() => {
      console.log('🔄 Reactive Auto-Sync complete: points & archive updated');
    }).catch(err => console.debug('Silent sync skipped:', err));
  };

  window.addEventListener('focus', triggerSilentSync);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') triggerSilentSync();
  });
  setInterval(triggerSilentSync, 60000);
}
