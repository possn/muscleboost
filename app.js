
(() => {
  const STORAGE = {
    sessions:'mb8_sessions',
    body:'mb8_body',
    bodyHistory:'mb8_body_history',
    difficulty:'mb17_difficulty',
    sound:'mb17_sound',
    voice:'mb17_voice',
    selectedPlan:'mb17_selected_plan',
    autoPlan:'mb17_auto_plan',
    autoPlanPos:'mb20_auto_plan_pos',
    activeTab:'mb17_tab',
    profileMode:'mb20_profile_mode',
    photos:'mb20_photos',
    planPreview:'mb22_plan_preview',
    progress:'mb19_progress',
    feedbackLog:'mb19_feedback_log',
    pendingFeedback:'mb19_pending_feedback',
    swaps:'mb23_exercise_swaps',
    photoCompareAngle:'mb23_photo_compare_angle',
    photoCompareWindow:'mb23_photo_compare_window'
  };

  const DIFFICULTY_CONFIG = {
    easy:{ label:'Fácil', work:40, rest:20 },
    normal:{ label:'Normal', work:45, rest:15 },
    hard:{ label:'Difícil', work:50, rest:10 }
  };

  const BASE_PLANS = [
    { key:'A', title:'A · Push hipertrofia', focus:'Peito, ombros e tríceps. Dia dominante para o teu objetivo.', exercises:[
      ex('Flexão de joelhos','Flexão','Flexão diamante'),
      ex('Flexão isométrica alta','Flexão lenta','Flexão 1.5 reps'),
      ex('Pike hold','Pike push-up','Pike press pulses'),
      ex('Scapular push-up','Close-grip push-up','Pseudo-planche lean push-up')
    ]},
    { key:'B', title:'B · Pernas + glúteos', focus:'Quadríceps, glúteos e cadeia posterior. Dia dominante inferior para estética e longevidade.', exercises:[
      ex('Air squat','Tempo squat','Squat 1.5 reps'),
      ex('Split squat assistido','Split squat','Split squat 1.5 reps'),
      ex('Glute bridge','Single-leg bridge','Long-lever bridge'),
      ex('Frog pump','Frog pump com pausa','Hamstring walkout')
    ]},
    { key:'C', title:'C · Pull + braços', focus:'Costas e bíceps em peso corporal puro.', exercises:[
      ex('Retração escapular deitado','Back widow','Row de cotovelos no chão com pausa'),
      ex('Prone W raise curta','Prone W raise','Prone Y-T-W combo'),
      ex('Prone lat pull curto','Prone lat pull','Prone lat pull com pausa'),
      ex('Curl auto-resistido','Curl auto-resistido lento','Hammer curl auto-resistido')
    ]},
    { key:'D', title:'D · Core + braços', focus:'Core rígido e braço complementar.', exercises:[
      ex('Prancha','Hollow hold','Body-saw plank'),
      ex('Side plank','Side plank dip','Long-lever side plank'),
      ex('Shoulder taps','Shoulder taps lentos','Plank to pike'),
      ex('Extensão curta de tríceps','Bodyweight triceps extension','Diamond push-up pulses')
    ]},
    { key:'E', title:'E · Full body density', focus:'Sessão global curta e densa com novo reforço de peito e braços.', exercises:[
      ex('Air squat','Squat tempo contínuo','Jump squat controlado'),
      ex('Flexão de joelhos','Flexão','Flexão lenta perto da falha'),
      ex('Back widow curta','Back widow','Swimmer pulls lentos'),
      ex('Curl auto-resistido','Close-grip push-up','Pseudo-planche lean push-up')
    ]}
  ];

  const SLOT_FAMILIES = {
    'A_0':'push_horizontal','A_1':'push_tension','A_2':'shoulder_press','A_3':'triceps_push',
    'B_0':'squat','B_1':'split','B_2':'bridge','B_3':'hinge_glutes',
    'C_0':'back_row','C_1':'back_scap','C_2':'back_lat','C_3':'biceps',
    'D_0':'core_front','D_1':'core_side','D_2':'core_rotation','D_3':'triceps_iso',
    'E_0':'density_lower','E_1':'density_push','E_2':'density_pull','E_3':'finisher'
  };

  const SWAP_LIBRARIES = {
    push_horizontal:[
      ex('Flexão de joelhos','Flexão','Flexão diamante'),
      ex('Flexão mãos largas','Flexão mãos largas lenta','Flexão com pausa baixa'),
      ex('Flexão inclinada no chão alta','Flexão 1.5 reps','Flexão arqueiro assistida')
    ],
    push_tension:[
      ex('Flexão isométrica alta','Flexão lenta','Flexão 1.5 reps'),
      ex('Flexão com pausa curta','Flexão com pausa baixa','Flexão excêntrica longa'),
      ex('Push-up hold baixo','Push-up pulses','Push-up mechanical drop set')
    ],
    shoulder_press:[
      ex('Pike hold','Pike push-up','Pike press pulses'),
      ex('Dolphin hold','Dolphin push-up','Pike negativa lenta'),
      ex('Pike parcial','Pike com pausa baixa','Pseudo-handstand lean')
    ],
    triceps_push:[
      ex('Scapular push-up','Close-grip push-up','Pseudo-planche lean push-up'),
      ex('Extensão curta de tríceps','Bodyweight triceps extension','Diamond push-up pulses'),
      ex('Tríceps isométrico ajoelhado','Close-grip com pausa','Close-grip 1.5 reps')
    ],
    squat:[
      ex('Air squat','Tempo squat','Squat 1.5 reps'),
      ex('Sit-to-squat controlado','Squat com pausa baixa','Wall sit + squats'),
      ex('Squat isométrico curto','Tempo squat contínuo','Jump squat controlado')
    ],
    split:[
      ex('Split squat assistido','Split squat','Split squat 1.5 reps'),
      ex('Reverse lunge','Reverse lunge lenta','Reverse lunge com pausa'),
      ex('Split squat curto','Split squat glute bias','Split squat pulsos baixos')
    ],
    bridge:[
      ex('Glute bridge','Single-leg bridge','Long-lever bridge'),
      ex('Frog pump','Frog pump com pausa','Frog pump alto-rep'),
      ex('Bridge march','Single-leg bridge com pausa','Long-lever bridge com pausa')
    ],
    hinge_glutes:[
      ex('Frog pump','Frog pump com pausa','Hamstring walkout'),
      ex('Reverse lunge','Reverse lunge lenta','Split squat glute bias'),
      ex('Bridge march','Hamstring bridge hold','Walkout parcial')
    ],
    back_row:[
      ex('Retração escapular deitado','Back widow','Row de cotovelos no chão com pausa'),
      ex('Row de cotovelos no chão curto','Row de cotovelos no chão','Row de cotovelos no chão com pausa'),
      ex('Back widow curta','Back widow lenta','Back widow isométrica')
    ],
    back_scap:[
      ex('Prone W raise curta','Prone W raise','Prone W raise com pausa'),
      ex('Prone T raise curta','Prone T raise','Prone Y-T-W combo'),
      ex('Reverse snow angel curta','Reverse snow angel','Reverse snow angel lenta')
    ],
    back_lat:[
      ex('Prone lat pull curto','Prone lat pull','Prone lat pull com pausa'),
      ex('Swimmer pull curta','Swimmer pulls lentos','Swimmer pulls com pausa'),
      ex('Superman pull curta','Superman pull com pausa','Lat prayer pull no chão')
    ],
    biceps:[
      ex('Curl auto-resistido','Curl auto-resistido lento','Hammer curl auto-resistido'),
      ex('Curl isométrico 90°','Curl auto-resistido com pausa','Hammer isométrico + repetições'),
      ex('Curl curto contínuo','Curl auto-resistido alternado','Curl auto-resistido 1.5 reps')
    ],
    core_front:[
      ex('Prancha','Hollow hold','Body-saw plank'),
      ex('Dead-bug hold','Dead-bug alternado','Hollow rocks curtas'),
      ex('Bear hold','Bear hover taps','Bear hold longo')
    ],
    core_side:[
      ex('Side plank','Side plank dip','Long-lever side plank'),
      ex('Side plank joelho dobrado','Side plank reach-through','Side plank pulses'),
      ex('Clamshell hold lateral','Side plank com abdução curta','Side plank longa com abdução')
    ],
    core_rotation:[
      ex('Shoulder taps','Shoulder taps lentos','Plank to pike'),
      ex('Bear shoulder taps','Bear hold reach','Plank drag imaginário'),
      ex('Plank knee taps','Plank to pike lenta','Plank toe taps')
    ],
    triceps_iso:[
      ex('Extensão curta de tríceps','Bodyweight triceps extension','Diamond push-up pulses'),
      ex('Tríceps ajoelhado isométrico','Extensão de tríceps com pausa','Extensão 1.5 reps'),
      ex('Close-grip de joelhos','Close-grip push-up','Close-grip com pausa')
    ],
    density_lower:[
      ex('Air squat','Squat tempo contínuo','Jump squat controlado'),
      ex('Lunge alternada','Lunge alternada lenta','Split switch controlado'),
      ex('Wall sit imaginário','Squat hold + reps','Squat pulses')
    ],
    density_push:[
      ex('Flexão de joelhos','Flexão','Flexão lenta perto da falha'),
      ex('Flexão com pausa','Close-grip push-up','Diamond push-up pulses'),
      ex('Scapular push-up','Flexão 1.5 reps','Pseudo-planche lean push-up')
    ],
    density_pull:[
      ex('Prone W raise curta','Prone W raise','Prone lat pull com pausa'),
      ex('Back widow curta','Back widow','Row de cotovelos no chão com pausa'),
      ex('Swimmer pull curta','Swimmer pulls lentos','Reverse snow angel lenta')
    ],
    finisher:[
      ex('Curl auto-resistido','Close-grip push-up','Pseudo-planche lean push-up'),
      ex('Hammer curl auto-resistido','Bodyweight triceps extension','Diamond push-up pulses'),
      ex('Curl isométrico 90°','Close-grip com pausa','Close-grip 1.5 reps')
    ]
  };

  const state = {
    intervalId:null,
    phase:'work',
    exerciseIndex:0,
    roundIndex:0,
    remainingTime:DIFFICULTY_CONFIG.normal.work,
    difficulty:localStorage.getItem(STORAGE.difficulty) || 'normal',
    soundOn:readJSON(STORAGE.sound, true),
    voiceOn:readJSON(STORAGE.voice, true),
    selectedPlanMode:localStorage.getItem(STORAGE.selectedPlan) || 'auto',
    profileMode:localStorage.getItem(STORAGE.profileMode) || 'chest_arms',
    autoPlanKey:localStorage.getItem(STORAGE.autoPlan) || 'A',
    autoPlanPos:Number(localStorage.getItem(STORAGE.autoPlanPos) || 0),
    activeTab:localStorage.getItem(STORAGE.activeTab) || 'today',
    viewDate:new Date(),
    lastSpoken:null,
    planPreview:readJSON(STORAGE.planPreview, {}),
  };

  const $ = id => document.getElementById(id);
  const el = {
    dayBadge:$('dayBadge'), planTitle:$('planTitle'), planFocus:$('planFocus'), planStatus:$('planStatus'), nextPlan:$('nextPlan'),
    exerciseName:$('exerciseName'), exerciseInstruction:$('exerciseInstruction'), nextExerciseLine:$('nextExerciseLine'), timer:$('timer'), phase:$('phase'), countdown:$('countdown'), progressFill:$('progressFill'), progressText:$('progressText'),
    roundValue:$('roundValue'), moveValue:$('moveValue'), streakValue:$('streakValue'), doseValue:$('doseValue'), startBtn:$('startBtn'), pauseBtn:$('pauseBtn'), resetBtn:$('resetBtn'), skipBtn:$('skipBtn'), techBtn:$('techBtn'), markTodayBtn:$('markTodayBtn'),
    soundToggle:$('soundToggle'), voiceToggle:$('voiceToggle'), soundSwitch:$('soundSwitch'), voiceSwitch:$('voiceSwitch'),
    profileSummary:$('profileSummary'), rotationGrid:$('rotationGrid'), exerciseList:$('exerciseList'),
    techTitle:$('techTitle'), techDesc:$('techDesc'), techSetup:$('techSetup'), techExecution:$('techExecution'), techBreathing:$('techBreathing'), techMistake:$('techMistake'), techRegression:$('techRegression'), techFocus:$('techFocus'), techCues:$('techCues'),
    swapPrevBtn:$('swapPrevBtn'), swapNextBtn:$('swapNextBtn'), swapStatus:$('swapStatus'),
    guideTitle:$('guideTitle'), guideLevelPill:$('guideLevelPill'), guideVisual:$('guideVisual'), guideSteps:$('guideSteps'), progressionStrip:$('progressionStrip'), progressionHint:$('progressionHint'),
    feedbackBox:$('feedbackBox'), progressionSummary:$('progressionSummary'), feedbackPrompt:$('feedbackPrompt'),
    entryDate:$('entryDate'), ageInput:$('ageInput'), heightInput:$('heightInput'), weightInput:$('weightInput'), waistInput:$('waistInput'), armInput:$('armInput'), chestInput:$('chestInput'), thighInput:$('thighInput'), hipInput:$('hipInput'), proteinInput:$('proteinInput'), sleepInput:$('sleepInput'), saveBodyBtn:$('saveBodyBtn'),
    bmiValue:$('bmiValue'), proteinTargetBody:$('proteinTargetBody'), leanGainBody:$('leanGainBody'), weightGoalBody:$('weightGoalBody'), consistencyBadge:$('consistencyBadge'), projectionFill:$('projectionFill'), projectionText:$('projectionText'), visualGainValue:$('visualGainValue'), monthlyGainValue:$('monthlyGainValue'), trajectoryGrid:$('trajectoryGrid'), projectionChart:$('projectionChart'), projectionChecks:$('projectionChecks'), projectionDetail:$('projectionDetail'), bodyInsight:$('bodyInsight'),
    analysisPill:$('analysisPill'), analysisText:$('analysisText'), progressChart:$('progressChart'),
    weeklyRecommendationPill:$('weeklyRecommendationPill'), weeklySummaryGrid:$('weeklySummaryGrid'), weeklyRecommendationText:$('weeklyRecommendationText'),
    monthlySummaryPill:$('monthlySummaryPill'), monthlySummaryGrid:$('monthlySummaryGrid'), monthlySummaryText:$('monthlySummaryText'),
    photoInput:$('photoInput'), photoDateInput:$('photoDateInput'), photoAngleInput:$('photoAngleInput'), addPhotoBtn:$('addPhotoBtn'), removePhotoBtn:$('removePhotoBtn'), compareAngleSelect:$('compareAngleSelect'), compareWindowSelect:$('compareWindowSelect'), photoCompareGrid:$('photoCompareGrid'), photoCompareText:$('photoCompareText'),
    weekSummaryPill:$('weekSummaryPill'), monthLabel:$('monthLabel'), calendar:$('calendar'), prevMonthBtn:$('prevMonthBtn'), nextMonthBtn:$('nextMonthBtn'), jumpTodayBtn:$('jumpTodayBtn'), recentList:$('recentList')
  };

  let audioCtx = null;
  let wakeLock = null;
  let preferredVoice = null;
  let mediaPrimed = false;

  function ex(easy, normal, hard){
    return {
      variants:{ easy, normal, hard },
      instructions:{
        easy: defaultInstruction(easy),
        normal: defaultInstruction(normal),
        hard: defaultInstruction(hard)
      }
    };
  }

  function defaultInstruction(name){
    const f = exerciseFamily(name);
    if(f === 'push') return 'Mantém tronco rígido, desce controlado e sobe empurrando o chão sem quebrar a lombar.';
    if(f === 'pike') return 'Anca alta, peso nas mãos e cabeça a descer entre as mãos antes de empurrar.';
    if(f === 'squat') return 'Pé inteiro no chão, joelhos a seguir a ponta do pé e subida firme.';
    if(f === 'split') return 'Base estável, desce na vertical e sobe a partir do pé da frente.';
    if(f === 'bridge') return 'Empurra pelos calcanhares, eleva a anca e aperta glúteos no topo.';
    if(f === 'backrow') return 'Empurra os cotovelos contra o chão e procura sentir entre as omoplatas.';
    if(f === 'backscap') return 'Levanta os braços do chão sem encolher os ombros nem forçar o pescoço.';
    if(f === 'backlat') return 'Peito só ligeiramente elevado e cotovelos a puxar para baixo e para trás.';
    if(f === 'curl') return 'Uma mão resiste à outra durante toda a amplitude, sem aliviar no topo.';
    if(f === 'plank') return 'Costelas baixas, glúteos ativos e lombar sob controlo.';
    if(f === 'sideplank') return 'Anca alta, ombro estável e corpo comprido.';
    if(f === 'tricepsfloor') return 'O movimento nasce nos cotovelos; não transformes isto numa flexão normal.';
    return 'Executa com controlo, tensão e técnica limpa.';
  }

  function readJSON(key, fallback){
    try{
      const raw = localStorage.getItem(key);
      return raw == null ? fallback : JSON.parse(raw);
    }catch{
      return fallback;
    }
  }

  function pad2(n){ return String(n).padStart(2,'0'); }
  function middayLocal(date=new Date()){ const d=new Date(date); d.setHours(12,0,0,0); return d; }
  function localDateKey(date=new Date()){ const d=middayLocal(date); return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`; }
  function dateFromKey(key){ const [y,m,d] = String(key).split('-').map(Number); return new Date(y, (m||1)-1, d||1, 12,0,0,0); }
  function addDaysToKey(key, delta){ const d=dateFromKey(key); d.setDate(d.getDate()+delta); return localDateKey(d); }
  function todayKey(){ return localDateKey(new Date()); }
  function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }
  function formatSeconds(total){ const m=Math.floor(total/60), s=total%60; return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }
  function formatShortDate(key){ return dateFromKey(key).toLocaleDateString('pt-PT',{day:'2-digit',month:'short',year:'numeric'}); }
  function normalizeName(str){ return String(str || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,''); }
  function shortText(text, max=82){ const t=String(text||'').trim(); return t.length>max ? `${t.slice(0,max-1)}…` : t; }

  function getSessions(){ return readJSON(STORAGE.sessions, []).sort((a,b)=>a.date.localeCompare(b.date)); }
  function saveSessions(list){ localStorage.setItem(STORAGE.sessions, JSON.stringify([...list].sort((a,b)=>a.date.localeCompare(b.date)))); }
  function getBody(){ return readJSON(STORAGE.body, {}); }
  function saveBody(entry){ localStorage.setItem(STORAGE.body, JSON.stringify(entry)); }
  function getBodyHistory(){ return readJSON(STORAGE.bodyHistory, []).sort((a,b)=>a.date.localeCompare(b.date)); }
  function saveBodyHistory(list){ localStorage.setItem(STORAGE.bodyHistory, JSON.stringify([...list].sort((a,b)=>a.date.localeCompare(b.date)))); }
  function getPhotos(){ return readJSON(STORAGE.photos, []).filter(Boolean).sort((a,b)=>a.date.localeCompare(b.date)); }
  function savePhotos(list){ localStorage.setItem(STORAGE.photos, JSON.stringify([...list].sort((a,b)=>a.date.localeCompare(b.date)).slice(-24))); }
  function getProgressStore(){ return readJSON(STORAGE.progress, {}); }
  function saveProgressStore(obj){ localStorage.setItem(STORAGE.progress, JSON.stringify(obj)); }
  function getFeedbackLog(){ return readJSON(STORAGE.feedbackLog, {}); }
  function saveFeedbackLog(obj){ localStorage.setItem(STORAGE.feedbackLog, JSON.stringify(obj)); }
  function getPendingFeedback(){ return readJSON(STORAGE.pendingFeedback, null); }
  function setPendingFeedback(obj){ if(obj) localStorage.setItem(STORAGE.pendingFeedback, JSON.stringify(obj)); else localStorage.removeItem(STORAGE.pendingFeedback); }
  function getSwapStore(){ return readJSON(STORAGE.swaps, {}); }
  function saveSwapStore(obj){ localStorage.setItem(STORAGE.swaps, JSON.stringify(obj)); }

  function bodyDefaults(){
    const body = getBody();
    if(!body.height && !body.weight){
      const seeded = { date:todayKey(), age:'', height:'173', weight:'62.6', waist:'', arm:'', chest:'', thigh:'', hip:'', protein:'', sleep:'7.5' };
      saveBody(seeded);
      saveBodyHistory([seeded]);
    }
  }

  function completedDatesSet(){ return new Set(getSessions().map(s=>s.date)); }
  function calcStreak(){
    const done = completedDatesSet();
    let streak=0, key=todayKey();
    while(done.has(key)){ streak += 1; key = addDaysToKey(key,-1); }
    return streak;
  }
  function calcAdherence(days=28){
    const done = completedDatesSet();
    let count=0, key=todayKey();
    for(let i=0;i<days;i++){ if(done.has(key)) count += 1; key = addDaysToKey(key,-1); }
    return Math.round((count/days)*100);
  }
  function sessionsInLastDays(days=7){
    const done = completedDatesSet();
    let count=0, key=todayKey();
    for(let i=0;i<days;i++){ if(done.has(key)) count += 1; key = addDaysToKey(key,-1); }
    return count;
  }
  function weeklyTargetSessions(){ return state.profileMode === 'definition' ? 5 : 6; }

  function rotationSequence(){
    if(state.profileMode === 'balanced') return ['A','B','C','D','E'];
    if(state.profileMode === 'definition') return ['E','A','B','C','D'];
    if(state.profileMode === 'lower_glutes') return ['B','A','C','B','E','D'];
    return ['A','B','C','D','A','E'];
  }

  function profileMeta(){
    if(state.profileMode === 'balanced') return { title:'Equilibrado', text:'Sequência A-B-C-D-E com distribuição estável entre empurrar, puxar, pernas e core.' };
    if(state.profileMode === 'definition') return { title:'Definição geral', text:'Começa em densidade global e mantém frequência ligeiramente menor para facilitar aderência e controlo da fadiga.' };
    if(state.profileMode === 'lower_glutes') return { title:'Pernas + glúteos', text:'Usa B-A-C-B-E-D para repetir mais cedo o dia inferior e reforçar glúteos, quadríceps e cadeia posterior.' };
    return { title:'Peito + braços', text:'Usa A-B-C-D-A-E para dar mais frequência útil a peito, tríceps e braço sem apagar pernas e costas.' };
  }

  function volumeTierForPlan(planKey){
    const a7 = calcAdherence(7), a28 = calcAdherence(28);
    const blended = Math.round(a7*0.65 + a28*0.35);
    let rounds=3, label='Base';
    if(blended < 46){ rounds = 2; label = 'Alívio'; }
    else if(blended >= 82){ rounds = 4; label='Alto'; }
    if(state.profileMode === 'chest_arms' && ['A','D'].includes(planKey) && blended >= 65){ rounds = Math.max(rounds,4); label='Alto'; }
    if(state.profileMode === 'lower_glutes' && ['B','E'].includes(planKey) && blended >= 65){ rounds = Math.max(rounds,4); label='Alto'; }
    if(state.profileMode === 'definition' && blended >= 82 && planKey !== 'E'){ rounds = Math.min(rounds,3); label = rounds === 2 ? 'Alívio' : 'Base'; }
    return { rounds, label, blended };
  }

  function weeklySummary(){
    const s7=sessionsInLastDays(7);
    const adherence=calcAdherence(28);
    const target=weeklyTargetSessions();
    const volume=volumeTierForPlan(currentPlan().key);
    const gap=Math.max(target-s7,0);
    let status='Em linha';
    let action='Mantém a rotina. O ganho visual depende agora de repetires semanas sólidas.';
    if(s7>=target && adherence>=75){
      status='Forte';
      action = volume.rounds >= 4
        ? 'A semana está forte. Mantém o volume alto nos blocos chave e tenta repetir esta consistência.'
        : 'A semana já aguenta mais trabalho. A app sobe o volume automático nos blocos chave.';
    }else if(gap>0){
      status = gap >= 2 ? 'Atrasado' : 'A recuperar';
      const priority = state.profileMode==='lower_glutes'
        ? 'Prioriza primeiro os dias B e E.'
        : state.profileMode==='chest_arms'
          ? 'Prioriza primeiro os dias A e D.'
          : 'Prioriza primeiro os dias dominantes do perfil.';
      action = `Faltam ${gap} sessão(ões) para o alvo semanal. ${priority}`;
    }else if(adherence<55){
      status='Irregular';
      action='Aderência baixa. Reduz a ambição de intensidade máxima e volta a fechar 5–6 sessões antes de tentar subir volume.';
    }
    return { s7, adherence, target, volume, status, action };
  }

  function syncAutoPlanState(){
    const seq = rotationSequence();
    state.autoPlanPos = ((Number(state.autoPlanPos)||0) % seq.length + seq.length) % seq.length;
    state.autoPlanKey = seq[state.autoPlanPos];
    localStorage.setItem(STORAGE.autoPlanPos, String(state.autoPlanPos));
    localStorage.setItem(STORAGE.autoPlan, state.autoPlanKey);
  }

  function inferAutoPlanPosFromHistory(){
    const seq = rotationSequence();
    const sessions = getSessions();
    if(!sessions.length) return 0;
    const last = sessions[sessions.length-1].plan;
    const idx = seq.indexOf(last);
    return idx >= 0 ? (idx + 1) % seq.length : 0;
  }

  function ensureAutoPlan(){
    const seq = rotationSequence();
    const stored = Number(localStorage.getItem(STORAGE.autoPlanPos));
    if(Number.isInteger(stored) && stored >= 0) state.autoPlanPos = stored % seq.length;
    else state.autoPlanPos = inferAutoPlanPosFromHistory();
    syncAutoPlanState();
  }

  function currentPlanAutoIndex(){
    ensureAutoPlan();
    const idx = BASE_PLANS.findIndex(p=>p.key === rotationSequence()[state.autoPlanPos]);
    return idx >= 0 ? idx : 0;
  }

  function selectedPlanIndex(){
    if(state.selectedPlanMode !== 'auto'){
      const idx = BASE_PLANS.findIndex(p=>p.key===state.selectedPlanMode);
      if(idx >= 0) return idx;
    }
    return currentPlanAutoIndex();
  }

  function progressKey(planKey, idx){ return `${planKey}_${idx}`; }

  function getExerciseProgress(planKey, idx){
    const store=getProgressStore();
    const key=progressKey(planKey, idx);
    if(!store[key]){
      store[key] = { level:1, easy:0, hard:0, last:'good' };
      saveProgressStore(store);
    }
    return store[key];
  }

  function setExerciseProgress(planKey, idx, value){
    const store=getProgressStore();
    store[progressKey(planKey, idx)] = value;
    saveProgressStore(store);
  }

  function variantTier(planKey, idx){
    const level = getExerciseProgress(planKey, idx).level;
    return ['easy','normal','hard'][clamp(Number(level)||1, 0, 2)];
  }

  function levelLabel(level){ return ['Base','Intermédio','Avançado'][clamp(Number(level)||0, 0, 2)]; }

  function swapSlotKey(planKey, idx){ return `${planKey}_${idx}`; }
  function familyForSlot(planKey, idx){ return SLOT_FAMILIES[swapSlotKey(planKey, idx)] || null; }
  function swapOptionsFor(planKey, idx){
    const fam = familyForSlot(planKey, idx);
    const options = fam ? SWAP_LIBRARIES[fam] : null;
    return options && options.length ? options : [BASE_PLANS.find(p=>p.key===planKey).exercises[idx]];
  }

  function swapIndexFor(planKey, idx){
    const options = swapOptionsFor(planKey, idx);
    const store = getSwapStore();
    return clamp(Number(store[swapSlotKey(planKey, idx)] || 0), 0, Math.max(options.length-1,0));
  }

  function resolvedExercise(planKey, idx){
    const options = swapOptionsFor(planKey, idx);
    return JSON.parse(JSON.stringify(options[swapIndexFor(planKey, idx)] || options[0]));
  }

  function resolvedPlan(base){
    return { ...base, exercises: base.exercises.map((_,idx)=>resolvedExercise(base.key, idx)) };
  }

  function currentPlan(){
    return resolvedPlan(BASE_PLANS[selectedPlanIndex()]);
  }

  function nextPlanObj(){
    if(state.selectedPlanMode !== 'auto') return resolvedPlan(BASE_PLANS[(selectedPlanIndex()+1)%BASE_PLANS.length]);
    const seq = rotationSequence();
    const nextKey = seq[(state.autoPlanPos+1)%seq.length];
    return resolvedPlan(BASE_PLANS.find(p=>p.key===nextKey) || BASE_PLANS[0]);
  }

  function currentExercise(){ return currentPlan().exercises[state.exerciseIndex]; }
  function currentCfg(){ return DIFFICULTY_CONFIG[state.difficulty] || DIFFICULTY_CONFIG.normal; }
  function roundsPerSession(planKey=currentPlan().key){ return volumeTierForPlan(planKey).rounds; }

  function currentVariantName(ex, idx=state.exerciseIndex, planKey=currentPlan().key){
    return ex.variants[variantTier(planKey, idx)];
  }

  function currentVariantInstruction(ex, idx=state.exerciseIndex, planKey=currentPlan().key){
    return ex.instructions[variantTier(planKey, idx)];
  }

  function totalWorkBlocks(){
    const plan = currentPlan();
    return plan.exercises.length * roundsPerSession(plan.key);
  }

  function completedWorkBlocks(){
    const plan = currentPlan();
    return state.roundIndex * plan.exercises.length + state.exerciseIndex;
  }

  function progressPct(){
    return clamp(Math.round((completedWorkBlocks()/Math.max(totalWorkBlocks(),1))*100),0,100);
  }

  function nextExerciseAfterCurrentBlock(){
    const plan = currentPlan();
    let exIndex = state.exerciseIndex + 1;
    let round = state.roundIndex;
    if(exIndex >= plan.exercises.length){ exIndex = 0; round += 1; }
    if(round >= roundsPerSession(plan.key)) return null;
    return { exercise: plan.exercises[exIndex], index: exIndex, round: round + 1 };
  }

  function getPreviewIndex(plan=currentPlan()){
    const raw = state.planPreview?.[plan.key];
    const idx = Number(raw);
    if(Number.isInteger(idx) && idx >= 0 && idx < plan.exercises.length) return idx;
    return clamp(state.exerciseIndex, 0, plan.exercises.length-1);
  }

  function setPreviewIndex(idx, planKey=currentPlan().key){
    const plan = BASE_PLANS.find(p=>p.key===planKey) || BASE_PLANS[0];
    const safe = clamp(Number(idx)||0, 0, plan.exercises.length-1);
    state.planPreview = { ...(state.planPreview || {}), [planKey]: safe };
    localStorage.setItem(STORAGE.planPreview, JSON.stringify(state.planPreview));
    updatePlanPreviewPanels();
    renderExerciseList();
  }

  function previewExerciseData(plan=currentPlan()){
    const index = getPreviewIndex(plan);
    return { plan, index, exercise: plan.exercises[index] };
  }

  function cycleSwap(planKey, idx, delta=1){
    const options = swapOptionsFor(planKey, idx);
    if(options.length < 2) return;
    const store = getSwapStore();
    const key = swapSlotKey(planKey, idx);
    const current = swapIndexFor(planKey, idx);
    store[key] = (current + delta + options.length) % options.length;
    saveSwapStore(store);
    renderAll();
  }

  function applyDifficulty(diff){
    if(!DIFFICULTY_CONFIG[diff]) return;
    state.difficulty = diff;
    localStorage.setItem(STORAGE.difficulty, diff);
    resetCycle();
    renderAll();
  }

  function setPlanMode(mode){
    if(!['auto','A','B','C','D','E'].includes(mode)) return;
    state.selectedPlanMode = mode;
    localStorage.setItem(STORAGE.selectedPlan, mode);
    resetCycle();
    renderAll();
  }

  function setProfileMode(mode){
    if(!['balanced','chest_arms','definition','lower_glutes'].includes(mode)) return;
    state.profileMode = mode;
    localStorage.setItem(STORAGE.profileMode, mode);
    state.autoPlanPos = 0;
    syncAutoPlanState();
    resetCycle();
    renderAll();
  }

  function refreshVoices(){
    if(!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices() || [];
    preferredVoice = voices.find(v => /^pt-PT$/i.test(v.lang)) || voices.find(v => /Portugal/i.test(v.name)) || voices.find(v => /^pt/i.test(v.lang)) || voices[0] || null;
  }

  async function primeMedia(){
    try{
      if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if(audioCtx.state === 'suspended') await audioCtx.resume();
    }catch{}
    refreshVoices();
    mediaPrimed = true;
  }

  if('speechSynthesis' in window){
    refreshVoices();
    window.speechSynthesis.onvoiceschanged = refreshVoices;
  }

  ['click','touchstart'].forEach(evt => document.addEventListener(evt, () => {
    if(!mediaPrimed) primeMedia();
  }, { passive:true }));

  function beep(freq=880, duration=0.12, volume=0.09){
    if(!state.soundOn) return;
    try{
      if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if(audioCtx.state === 'suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(volume, audioCtx.currentTime);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.stop(audioCtx.currentTime + duration);
    }catch{}
  }

  function vibrate(ms=40){
    try{ if(state.soundOn && 'vibrate' in navigator) navigator.vibrate(ms); }catch{}
  }

  function speak(text){
    if(!state.voiceOn || !('speechSynthesis' in window) || !text) return;
    try{
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = preferredVoice?.lang || 'pt-PT';
      if(preferredVoice) utter.voice = preferredVoice;
      utter.rate = 1;
      utter.pitch = 1;
      setTimeout(() => window.speechSynthesis.speak(utter), 20);
    }catch{}
  }

  async function requestWakeLock(){
    try{
      if('wakeLock' in navigator && !wakeLock){
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', ()=>{ wakeLock = null; });
      }
    }catch{}
  }

  async function releaseWakeLock(){
    try{
      if(wakeLock){ await wakeLock.release(); wakeLock = null; }
    }catch{}
  }

  document.addEventListener('visibilitychange', async () => {
    if(document.visibilityState === 'visible' && state.intervalId) await requestWakeLock();
  });

  function resetCycle(){
    clearInterval(state.intervalId);
    state.intervalId = null;
    state.phase = 'work';
    state.exerciseIndex = 0;
    state.roundIndex = 0;
    state.remainingTime = currentCfg().work;
    state.lastSpoken = null;
    releaseWakeLock();
  }

  function saveTodaySession(marked=false){
    const sessions = getSessions();
    const key = todayKey();
    if(sessions.some(s=>s.date===key)) return false;
    const plan = currentPlan();
    sessions.push({ date:key, plan:plan.key, difficulty:state.difficulty, profile:state.profileMode, marked, rounds:roundsPerSession(plan.key) });
    saveSessions(sessions);
    if(state.selectedPlanMode === 'auto'){
      const seq = rotationSequence();
      state.autoPlanPos = (state.autoPlanPos + 1) % seq.length;
      syncAutoPlanState();
    }
    return true;
  }

  function toggleSessionForDate(key){
    if(key > todayKey()) return;
    const sessions = getSessions();
    const idx = sessions.findIndex(s=>s.date===key);
    if(idx >= 0) sessions.splice(idx,1);
    else sessions.push({ date:key, plan:currentPlan().key, difficulty:state.difficulty, profile:state.profileMode, marked:true, rounds:roundsPerSession(currentPlan().key) });
    saveSessions(sessions);
    renderAll();
  }

  function planProgressSummary(planKey=currentPlan().key){
    const levels = BASE_PLANS.find(p=>p.key===planKey).exercises.map((_,idx)=>getExerciseProgress(planKey, idx).level);
    const avg = levels.reduce((a,b)=>a+b,0) / levels.length;
    return {
      avg,
      text: avg >= 1.7 ? 'plano bastante avançado' : avg >= 1 ? 'plano em subida' : 'plano ainda em base'
    };
  }

  function feedbackLogKey(date, planKey){ return `${date}_${planKey}`; }

  function getPendingPlanKey(){
    return getPendingFeedback()?.planKey || currentPlan().key;
  }

  function progressionFeedbackText(planKey=currentPlan().key){
    const pending = getPendingFeedback();
    const summary = planProgressSummary(planKey);
    if(pending && pending.planKey === planKey){
      return {
        headline:`Sessão ${planKey} concluída. Falta só calibrar a progressão.`,
        prompt:'Como sentiste o bloco de hoje no conjunto? A app vai ajustar as variantes deste plano para a próxima vez.'
      };
    }
    const log = getFeedbackLog()[feedbackLogKey(todayKey(), planKey)];
    if(log){
      const change = log.promoted ? `${log.promoted} movimento(s) subiram.` : log.demoted ? `${log.demoted} movimento(s) desceram.` : 'Hoje a app manteve as variantes.';
      return { headline:`Plano ${planKey}: ${summary.text}.`, prompt:change };
    }
    return {
      headline:`Plano ${planKey}: ${summary.text}.`,
      prompt:'Depois de cada sessão real, usa este feedback para a app saber se deve subir, manter ou aliviar este plano.'
    };
  }

  function feedbackButtonState(kind, planKey=currentPlan().key){
    const pending = getPendingFeedback();
    const log = getFeedbackLog()[feedbackLogKey(todayKey(), planKey)];
    if(pending && pending.planKey === planKey) return false;
    return log?.kind === kind;
  }

  function applySessionFeedback(kind, planKey=currentPlan().key){
    const base = BASE_PLANS.find(p=>p.key===planKey);
    let promoted = 0, demoted = 0;
    base.exercises.forEach((_,idx)=>{
      const entry = { ...getExerciseProgress(planKey, idx) };
      if(kind === 'easy'){
        entry.easy = (entry.easy || 0) + 1;
        entry.hard = 0;
        if(entry.easy >= 2 && entry.level < 2){ entry.level += 1; entry.easy = 0; promoted += 1; }
      }else if(kind === 'hard'){
        entry.hard = (entry.hard || 0) + 1;
        entry.easy = 0;
        if(entry.hard >= 2 && entry.level > 0){ entry.level -= 1; entry.hard = 0; demoted += 1; }
      }else{
        entry.easy = 0;
        entry.hard = 0;
      }
      entry.last = kind;
      setExerciseProgress(planKey, idx, entry);
    });
    const pending = getPendingFeedback();
    if(pending && pending.planKey === planKey) setPendingFeedback(null);
    const log = getFeedbackLog();
    log[feedbackLogKey(todayKey(), planKey)] = { kind, promoted, demoted, date:todayKey(), planKey };
    saveFeedbackLog(log);
    renderAll();
  }

  function advanceFromRest(){
    state.exerciseIndex += 1;
    const plan = currentPlan();
    if(state.exerciseIndex >= plan.exercises.length){
      state.exerciseIndex = 0;
      state.roundIndex += 1;
    }
    if(state.roundIndex >= roundsPerSession(plan.key)){
      const finishedPlan = plan.key;
      clearInterval(state.intervalId);
      state.intervalId = null;
      saveTodaySession(false);
      setPendingFeedback({ date: todayKey(), planKey: finishedPlan });
      releaseWakeLock();
      state.phase='work';
      state.exerciseIndex=0;
      state.roundIndex=0;
      state.remainingTime=currentCfg().work;
      state.lastSpoken=null;
      speak('sessão concluída');
      setActiveTab('today');
      renderAll();
      return;
    }
    state.phase='work';
    state.remainingTime=currentCfg().work;
    state.lastSpoken=null;
    speak(currentVariantName(currentExercise(), state.exerciseIndex, currentPlan().key));
  }

  async function startSession(){
    if(state.intervalId) return;
    await primeMedia();
    await requestWakeLock();
    speak(currentVariantName(currentExercise(), state.exerciseIndex, currentPlan().key));
    state.intervalId = setInterval(() => {
      state.remainingTime -= 1;
      if(state.remainingTime <= 5 && state.remainingTime > 0){
        if(state.lastSpoken !== state.remainingTime){
          beep(760 + (5-state.remainingTime)*100, 0.12, 0.08);
          vibrate(25);
          speak(String(state.remainingTime));
          state.lastSpoken = state.remainingTime;
        }
      }
      if(state.remainingTime <= 0){
        beep(state.phase === 'work' ? 620 : 880, 0.18, 0.11);
        vibrate(60);
        if(state.phase === 'work'){
          state.phase = 'rest';
          state.remainingTime = currentCfg().rest;
          state.lastSpoken = null;
          speak('descanso');
        }else{
          advanceFromRest();
        }
      }
      renderToday();
    }, 1000);
    renderToday();
  }

  function pauseSession(){
    clearInterval(state.intervalId);
    state.intervalId = null;
    releaseWakeLock();
    renderToday();
  }

  function skipCurrent(){
    pauseSession();
    if(state.phase === 'work'){
      state.phase = 'rest';
      state.remainingTime = currentCfg().rest;
      state.lastSpoken = null;
    }else{
      advanceFromRest();
    }
    renderToday();
  }

  function setActiveTab(tab){
    if(!['today','plan','body','progress'].includes(tab)) tab='today';
    state.activeTab = tab;
    localStorage.setItem(STORAGE.activeTab, tab);
    document.querySelectorAll('.tabbtn').forEach(btn=>btn.classList.toggle('active', btn.dataset.tab===tab));
    document.querySelectorAll('.tab-panel').forEach(panel=>panel.classList.toggle('active', panel.dataset.panel===tab));
    window.scrollTo({ top:0, behavior:'smooth' });
  }

  function initTabs(){
    document.querySelectorAll('.tabbtn').forEach(btn=>btn.addEventListener('click', ()=>setActiveTab(btn.dataset.tab)));
    setActiveTab(state.activeTab);
  }

  function renderPlanModes(){
    document.querySelectorAll('[data-plan-mode]').forEach(btn=>btn.classList.toggle('active', btn.dataset.planMode === state.selectedPlanMode));
  }

  function renderProfileModeSummary(){
    const meta = profileMeta();
    document.querySelectorAll('[data-profile-mode]').forEach(btn=>btn.classList.toggle('active', btn.dataset.profileMode === state.profileMode));
    el.profileSummary.innerHTML = `<div class="label">Lógica atual</div><div style="margin-top:6px;color:var(--text);font-weight:760">${meta.title}</div><div class="micro-copy">${meta.text}</div>`;
  }

  function renderRotation(){
    el.rotationGrid.innerHTML = BASE_PLANS.map(p => `<div class="rotation-card ${p.key===currentPlan().key ? 'active' : ''}" data-plan-key="${p.key}"><strong>${p.title}</strong><span>${p.focus}</span></div>`).join('');
    el.rotationGrid.querySelectorAll('.rotation-card').forEach(card => {
      card.addEventListener('click', ()=>setPlanMode(card.dataset.planKey));
    });
  }

  function exerciseFamily(name){
    const n = normalizeName(name);
    if(n.includes('pike') || n.includes('dolphin')) return 'pike';
    if(n.includes('squat') && !n.includes('split') && !n.includes('lunge')) return 'squat';
    if(n.includes('split') || n.includes('lunge')) return 'split';
    if(n.includes('bridge') || n.includes('walkout') || n.includes('frog pump')) return 'bridge';
    if(n.includes('retracao escapular') || n.includes('back widow') || n.includes('row de cotovelos')) return 'backrow';
    if(n.includes('prone w') || n.includes('prone t') || n.includes('snow angel') || n.includes('y-t-w')) return 'backscap';
    if(n.includes('lat pull') || n.includes('swimmer') || n.includes('superman pull') || n.includes('lat prayer')) return 'backlat';
    if(n.includes('curl')) return 'curl';
    if(n.includes('side plank') || n.includes('clamshell')) return 'sideplank';
    if(n.includes('plank') || n.includes('hollow') || n.includes('dead-bug') || n.includes('bear')) return 'plank';
    if(n.includes('triceps') || n.includes('diamond')) return 'tricepsfloor';
    if(n.includes('flexao') || n.includes('push-up') || n.includes('close-grip')) return 'push';
    return 'push';
  }

  function exerciseGuide(name){
    const f = exerciseFamily(name);
    const generic = (intro, setup, execution, breathing, mistake, regression, focus, cues) => ({ intro, setup, execution, breathing, mistake, regression, focus, cues });
    if(f === 'push') return generic(
      'Flexão / variação de flexão para peito e tríceps.',
      'Posição de prancha alta, mãos firmes no chão, glúteos e abdómen contraídos.',
      'Desce o peito em bloco até à amplitude útil e sobe empurrando o chão sem partir o tronco.',
      'Inspira a descer e expira a subir. Nas versões lentas, controla 3–4 segundos na descida.',
      'Lombar a cair, cotovelos descontrolados ou amplitude roubada.',
      'Passa para joelhos no chão, pausa mais curta ou amplitude menor.',
      'Peito, tríceps e ombro anterior.',
      'Peito desce primeiro, cotovelos sob controlo e tronco inteiro.'
    );
    if(f === 'pike') return generic(
      'Empurrar mais vertical para ombros e tríceps.',
      'Forma um V invertido: mãos no chão, anca alta e peso mais à frente.',
      'Leva a cabeça entre as mãos e sobe empurrando o chão sem deixar a anca colapsar.',
      'Expira a subir. Inspira a descer.',
      'Transformar isto numa flexão horizontal ou encolher os ombros.',
      'Reduz amplitude ou fica só em hold.',
      'Deltoides, tríceps e serrátil.',
      'Anca alta, pescoço neutro e chão bem empurrado.'
    );
    if(f === 'squat') return generic(
      'Agachamento base para pernas e glúteos.',
      'Pés à largura dos ombros, pé inteiro no chão e tronco estável.',
      'Leva a bacia para trás e para baixo e sobe empurrando o chão com os dois pés.',
      'Inspira a descer. Expira a subir.',
      'Calcanhares a levantar, joelhos a colapsar ou perda de tronco.',
      'Reduz amplitude e usa só a parte que controlas.',
      'Quadríceps, glúteos e algum core.',
      'Joelhos seguem a linha do pé e o tronco mantém-se firme.'
    );
    if(f === 'split') return generic(
      'Trabalho unilateral para pernas e glúteos.',
      'Dá um passo à frente ou atrás e monta uma base estável em “trilhos”.',
      'Desce na vertical e sobe a partir do pé da frente com controlo.',
      'Inspira a descer. Expira a subir.',
      'Empurrar demais com a perna de trás ou perder equilíbrio.',
      'Segura numa parede e encurta a passada.',
      'Quadríceps, glúteos e estabilidade da bacia.',
      'Peso no pé da frente, tronco alto e joelho alinhado.'
    );
    if(f === 'bridge') return generic(
      'Exercício de extensão da anca para glúteos e posteriores.',
      'Deita-te de costas. Pés no chão ou configuração específica da variante.',
      'Empurra pelos calcanhares, sobe a anca e aperta glúteos no topo.',
      'Expira ao subir. Inspira a descer.',
      'Arquear a lombar em vez de subir com glúteos.',
      'Volta à ponte bilateral normal ou encurta a amplitude.',
      'Glúteos e isquiotibiais.',
      'Está bem feito se sentires glúteo/posterior; está mal se sentires só lombar.'
    );
    if(f === 'backrow') return generic(
      'Tração de chão para costas altas.',
      'Deita-te de costas, cotovelos no chão e peito “aberto”.',
      'Empurra os cotovelos contra o chão para levantar ligeiramente o peito e apertar as omoplatas.',
      'Expira no aperto. Inspira a descer.',
      'Arquear a lombar ou empurrar com a cabeça.',
      'Faz a amplitude curta e procura só o aperto escapular.',
      'Romboides, trapézio médio e ombro posterior.',
      'Está bem feito se sentires entre as omoplatas; está mal se sentires só pescoço.'
    );
    if(f === 'backscap') return generic(
      'Bloco de barriga para baixo para ensinar costas altas e ombro posterior.',
      'Testa perto do chão, abdómen leve e braços no padrão pedido.',
      'Levanta ligeiramente os braços do chão sem encolher os ombros.',
      'Respiração calma e pescoço relaxado.',
      'Levantar demasiado a cabeça e carregar o pescoço.',
      'Reduz amplitude.',
      'Trapézio médio/inferior, romboides e deltoide posterior.',
      'Atrás do ombro e entre as omoplatas, não no pescoço.'
    );
    if(f === 'backlat') return generic(
      'Puxada ventral para dar mais sensação de dorsais.',
      'Braços à frente e peito só ligeiramente fora do chão.',
      'Puxa os cotovelos para baixo e para trás, sem transformar o exercício num superman de lombar.',
      'Expira na puxada. Inspira ao estender.',
      'Levantar demasiado o tronco.',
      'Eleva menos o peito e encurta a amplitude.',
      'Dorsais, axila posterior e costas médias.',
      'Menos altura do peito, mais intenção de puxar cotovelos atrás.'
    );
    if(f === 'curl') return generic(
      'Curl de bíceps sem pesos, usando uma mão para resistir à outra.',
      'Fica de pé ou sentado. Um braço trabalha e o outro resiste.',
      'Sobe lentamente contra a resistência e desce ainda mais devagar.',
      'Expira a subir. Inspira a descer.',
      'Resistência fraca no início e forte só no fim.',
      'Diminui a resistência para conseguir amplitude completa.',
      'Bíceps e braquiorradial.',
      'A mão que resiste acompanha todo o percurso.'
    );
    if(f === 'plank') return generic(
      'Bloco de core anti-extensão.',
      'Prancha, bear ou posição supina com lombar controlada.',
      'Mantém costelas baixas, glúteos ativos e amplitude só até onde a lombar fica segura.',
      'Respiração curta, baixa e regular.',
      'Anca a subir demais ou lombar a afundar.',
      'Encurta a alavanca.',
      'Core anterior e estabilizadores profundos.',
      'Se perderes a lombar, a repetição acabou.'
    );
    if(f === 'sideplank') return generic(
      'Bloco lateral para oblíquos e glúteo médio.',
      'Antebraço no chão, ombro estável e pernas alinhadas.',
      'Eleva a anca e mantém o corpo comprido. Faz as dips ou variações sem colapsar o ombro.',
      'Respiração curta e estável.',
      'Rodar o tronco para o chão ou deixar a anca cair.',
      'Dobra o joelho de baixo.',
      'Oblíquos e glúteo médio.',
      'Anca alta, ombro longe da orelha e bacia alinhada.'
    );
    if(f === 'tricepsfloor') return generic(
      'Extensão de tríceps em cadeia fechada.',
      'Ajoelha-te e coloca mãos/antebraços à frente do corpo.',
      'Dobra os cotovelos levando a testa na direção do chão e depois estende sem transformar isto numa flexão normal.',
      'Inspira a descer. Expira a estender.',
      'Mover demasiado os ombros e perder o foco do cotovelo.',
      'Aproxima os joelhos das mãos.',
      'Tríceps e estabilidade do ombro.',
      'Está bem feito se o esforço estiver no tríceps; está mal se sentires só peito/lombar.'
    );
    return generic('Exercício do plano atual.','Começa numa posição estável.','Executa com controlo.','Respiração regular.','Perder posição.','Reduz amplitude.','Grupo muscular do plano.','Técnica limpa acima de velocidade.');
  }

  function guideStepsFor(name){
    const g = exerciseGuide(name);
    const f = exerciseFamily(name);
    if(f === 'backrow') return [
      { title:'Posição', text: shortText(g.setup) },
      { title:'Empurra cotovelos', text:'Empurra os cotovelos contra o chão e eleva só ligeiramente o peito.' },
      { title:'Deves sentir', text:'Entre as omoplatas e atrás dos ombros; não no pescoço.' }
    ];
    if(f === 'backscap') return [
      { title:'Coloca-te', text: shortText(g.setup) },
      { title:'Levanta braços', text:'Pequena amplitude, sem encolher os ombros.' },
      { title:'Deves sentir', text:'Trapézio médio/inferior e deltoide posterior.' }
    ];
    if(f === 'backlat') return [
      { title:'Base', text: shortText(g.setup) },
      { title:'Puxa cotovelos', text:'Traz os cotovelos para baixo e para trás sem levantar muito o peito.' },
      { title:'Deves sentir', text:'Debaixo da axila, atrás do ombro e na parte média das costas.' }
    ];
    return [
      { title:'Coloca-te', text: shortText(g.setup) },
      { title:'Executa', text: shortText(g.execution) },
      { title:'Fecha limpo', text: shortText(g.cues) }
    ];
  }

  function guideSVG(name){
    const f = exerciseFamily(name);
    const title = {
      push:'Empurra',
      pike:'Pressão vertical',
      squat:'Agacha',
      split:'Unilateral',
      bridge:'Eleva anca',
      backrow:'Cotovelos no chão',
      backscap:'Costas altas',
      backlat:'Puxa cotovelos',
      curl:'Auto-resistência',
      plank:'Core rígido',
      sideplank:'Core lateral',
      tricepsfloor:'Extensão de tríceps'
    }[f] || 'Guia';
    const note = {
      push:'Tronco inteiro, peito desce primeiro.',
      pike:'Anca alta e cabeça entre as mãos.',
      squat:'Pé inteiro no chão e subida firme.',
      split:'Peso na perna da frente e base estável.',
      bridge:'Empurra pelos calcanhares e aperta glúteos.',
      backrow:'Sente entre as omoplatas, não no pescoço.',
      backscap:'Atrás do ombro e trapézio médio, sem forçar o pescoço.',
      backlat:'Puxa cotovelos para trás, não subas demasiado o peito.',
      curl:'Resistência contínua em toda a amplitude.',
      plank:'Costelas baixas e lombar sob controlo.',
      sideplank:'Anca alta e ombro estável.',
      tricepsfloor:'Movimento nasce no cotovelo.'
    }[f] || 'Usa os 3 passos abaixo como guia rápido.';
    return `<svg viewBox="0 0 330 170" class="svg-host" aria-label="Guia visual">
      <rect x="14" y="18" width="302" height="134" rx="20" fill="#F7F8FB" stroke="#E6E7EB"></rect>
      <text x="165" y="48" text-anchor="middle" fill="#1D1D1F" font-size="18" font-weight="700">${escapeHtml(title)}</text>
      <text x="165" y="86" text-anchor="middle" fill="#6E6E73" font-size="13">${escapeHtml(name)}</text>
      <text x="165" y="118" text-anchor="middle" fill="#0A84FF" font-size="12" font-weight="600">${escapeHtml(note)}</text>
      <line x1="54" y1="132" x2="276" y2="132" stroke="#D9DCE4" stroke-width="2" stroke-linecap="round"></line>
    </svg>`;
  }

  function escapeHtml(text){
    return String(text).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));
  }

  function updateTechniqueCard(ex, idx=getPreviewIndex(currentPlan()), plan=currentPlan()){
    const name = currentVariantName(ex, idx, plan.key);
    const g = exerciseGuide(name);
    const options = swapOptionsFor(plan.key, idx);
    const swapIdx = swapIndexFor(plan.key, idx);
    el.techTitle.textContent = `Técnica · ${name}`;
    el.techDesc.textContent = g.intro;
    el.techSetup.textContent = g.setup;
    el.techExecution.textContent = g.execution;
    el.techBreathing.textContent = g.breathing;
    el.techMistake.textContent = g.mistake;
    el.techRegression.textContent = g.regression;
    el.techFocus.textContent = g.focus;
    el.techCues.textContent = g.cues;
    el.swapStatus.textContent = options.length > 1
      ? `Equivalente ${swapIdx+1}/${options.length}. Usa a troca se este movimento não te assenta bem; a app mantém o mesmo objetivo muscular.`
      : 'Este movimento não tem alternativas equivalentes configuradas nesta versão.';
    el.swapPrevBtn.disabled = options.length < 2;
    el.swapNextBtn.disabled = options.length < 2;
  }

  function renderGuideVisual(plan=currentPlan(), idx=getPreviewIndex(plan)){
    const ex = plan.exercises[idx];
    const name = currentVariantName(ex, idx, plan.key);
    const summary = planProgressSummary(plan.key);
    el.guideTitle.textContent = name;
    el.guideLevelPill.textContent = `${levelLabel(getExerciseProgress(plan.key, idx).level)} · ${summary.text}`;
    el.guideVisual.innerHTML = guideSVG(name);
    el.guideSteps.innerHTML = guideStepsFor(name).map(step => `<div class="guide-step"><strong>${step.title}</strong><span>${step.text}</span></div>`).join('');
    el.progressionStrip.innerHTML = ['easy','normal','hard'].map(tier => `<span class="progression-pill ${variantTier(plan.key, idx)===tier ? 'active' : ''}">${ex.variants[tier]}</span>`).join('');
    el.progressionHint.textContent = `Este plano está em ${summary.text}. O nível atual deste exercício muda quando repetes o plano e sinalizas “fácil demais” ou “no limite”.`;
  }

  function updatePlanPreviewPanels(){
    const { plan, index, exercise } = previewExerciseData();
    updateTechniqueCard(exercise, index, plan);
    renderGuideVisual(plan, index);
  }

  function renderFeedbackBox(){
    const planKey = getPendingPlanKey();
    const copy = progressionFeedbackText(planKey);
    el.progressionSummary.textContent = copy.headline;
    el.feedbackPrompt.textContent = copy.prompt;
    document.querySelectorAll('[data-session-feedback]').forEach(btn => {
      btn.classList.toggle('active', feedbackButtonState(btn.dataset.sessionFeedback, planKey));
    });
  }

  function renderExerciseList(){
    const plan = currentPlan();
    const upcoming = nextExerciseAfterCurrentBlock();
    const selected = getPreviewIndex(plan);
    el.exerciseList.innerHTML = plan.exercises.map((ex, idx) => {
      const active = state.phase === 'work' ? idx === state.exerciseIndex : (upcoming && idx === upcoming.index);
      const isSelected = idx === selected;
      const name = currentVariantName(ex, idx, plan.key);
      const g = exerciseGuide(name);
      const options = swapOptionsFor(plan.key, idx);
      const right = options.length > 1 ? `<span class="swap-chip">${swapIndexFor(plan.key, idx)+1}/${options.length}</span>` : `${idx+1}/4`;
      return `<div class="plan-item ${active ? 'active' : ''} ${isSelected ? 'selected' : ''}" data-preview-index="${idx}" role="button" aria-label="Ver técnica de ${escapeHtml(name)}">
        <div class="left">
          <div class="name">${escapeHtml(name)}</div>
          <div class="sub">${escapeHtml(g.intro)}</div>
          <div class="hint">${escapeHtml(g.cues)}</div>
        </div>
        <div class="right">${right}</div>
      </div>`;
    }).join('');
  }

  function renderToday(){
    const plan = currentPlan();
    const ex = currentExercise();
    const upcoming = nextExerciseAfterCurrentBlock();
    const nextPlan = nextPlanObj();
    const cfg = currentCfg();
    const volume = volumeTierForPlan(plan.key);
    const meta = profileMeta();

    el.dayBadge.textContent = state.selectedPlanMode === 'auto' ? `Auto ${plan.key}` : `Plano ${plan.key}`;
    el.planTitle.textContent = plan.title;
    el.planFocus.textContent = plan.focus;
    el.planStatus.textContent = state.selectedPlanMode === 'auto'
      ? `Rotação ${meta.title} · ${volume.rounds} rondas hoje`
      : `Modo manual · ${volume.rounds} rondas hoje`;
    el.nextPlan.textContent = state.selectedPlanMode === 'auto' ? `Auto · seguinte ${nextPlan.key}` : 'Modo manual';
    el.exerciseName.textContent = state.phase === 'work' ? currentVariantName(ex, state.exerciseIndex, plan.key) : 'Descanso';
    el.exerciseInstruction.textContent = state.phase === 'work' ? currentVariantInstruction(ex, state.exerciseIndex, plan.key) : 'Respira fundo, recupera e prepara a próxima série.';
    el.nextExerciseLine.textContent = upcoming ? `Seguinte: ${currentVariantName(upcoming.exercise, upcoming.index, plan.key)} · ronda ${upcoming.round}` : 'Seguinte: fim da sessão';
    el.timer.textContent = formatSeconds(state.remainingTime);
    el.phase.textContent = state.phase.toUpperCase();
    el.countdown.textContent = state.phase === 'work' && state.remainingTime <= 5 && state.remainingTime > 0 ? `Últimos ${state.remainingTime}s` : '';
    el.progressFill.style.width = `${progressPct()}%`;
    el.progressText.textContent = `${progressPct()}% da sessão`;
    el.roundValue.textContent = `${Math.min(state.roundIndex+1, roundsPerSession(plan.key))}/${roundsPerSession(plan.key)}`;
    el.moveValue.textContent = `${Math.min(state.exerciseIndex+1, plan.exercises.length)}/${plan.exercises.length}`;
    el.streakValue.textContent = String(calcStreak());
    el.doseValue.textContent = `${cfg.work}/${cfg.rest} · ${volume.rounds}R`;
    el.soundSwitch.classList.toggle('on', state.soundOn);
    el.voiceSwitch.classList.toggle('on', state.voiceOn);

    document.querySelectorAll('#difficultySegment button').forEach(btn => btn.classList.toggle('active', btn.dataset.difficulty === state.difficulty));
    renderPlanModes();
    renderProfileModeSummary();
    renderRotation();
    renderExerciseList();
    updatePlanPreviewPanels();
    renderFeedbackBox();
  }

  function proteinRange(weight){
    if(!weight) return '100–138 g';
    const low=Math.round(weight*1.6), high=Math.round(weight*2.2);
    return `${low}–${high} g`;
  }

  function proteinStatus(weight, protein){
    const low=weight*1.6, high=weight*2.2;
    if(!protein) return { assumed:true, low, high, band:'neutra' };
    if(protein < low) return { assumed:false, low, high, band:'baixa' };
    if(protein <= high) return { assumed:false, low, high, band:'ótima' };
    return { assumed:false, low, high, band:'alta' };
  }

  function sleepFactor(sleep){
    if(!sleep) return 0.96;
    if(sleep >= 7) return 1;
    if(sleep >= 6.5) return 0.96;
    return 0.9;
  }

  function profileFactor(height, weight, waist, age){
    const bmi = weight / ((height/100)**2);
    let factor = 1;
    if(bmi >= 20 && bmi <= 22.5) factor += 0.08;
    else if(bmi < 18.5) factor -= 0.06;
    else if(bmi > 26) factor -= 0.07;
    if(waist){
      const whtr = waist / height;
      if(whtr <= 0.50) factor += 0.05;
      else if(whtr >= 0.55) factor -= 0.06;
    }
    if(age){
      if(age >= 50) factor -= 0.1;
      else if(age >= 40) factor -= 0.05;
    }
    return clamp(factor, 0.82, 1.16);
  }

  function difficultyFactor(){
    if(state.difficulty === 'hard') return 1.03;
    if(state.difficulty === 'easy') return 0.94;
    return 1;
  }

  function buildProjectionModel({height, weight, waist, age, protein, sleep, adherence}){
    const profile = profileFactor(height, weight, waist, age);
    const p = proteinStatus(weight, protein);
    const sleepF = sleepFactor(sleep);
    const diffF = difficultyFactor();
    const sessions = getSessions().length;
    const planningMode = sessions < 4 && adherence < 15;
    const effectiveAdherence = planningMode ? 85 : adherence;
    const adherenceF = 0.58 + (effectiveAdherence/100)*0.47;
    let proteinF = 0.93;
    if(!p.assumed){
      if(p.band === 'ótima') proteinF = 1;
      else if(p.band === 'alta') proteinF = 1.01;
      else proteinF = 0.86;
    }
    const basePotential = weight && weight <= 66 ? 2.25 : 2.05;
    const chestBonus = state.profileMode === 'chest_arms' ? 1.04 : state.profileMode === 'lower_glutes' ? 0.98 : 1;
    const lowerBonus = state.profileMode === 'lower_glutes' ? 1.05 : 1;
    const pureBodyweightF = 0.91;
    let mid = basePotential * profile * sleepF * proteinF * adherenceF * diffF * pureBodyweightF * chestBonus * lowerBonus;
    mid = clamp(mid, 0.7, 3.1);
    const low = clamp(Math.round(mid*0.78*10)/10, 0.6, 2.9);
    const high = clamp(Math.round(mid*1.22*10)/10, low+0.4, 3.4);
    const likely = Math.round(((low+high)/2)*100)/100;
    const monthlyLikely = Math.round((likely/6)*100)/100;
    const avgDailyLikely = Math.round((likely*1000)/180);
    const sleepScore = clamp(Math.round(sleepF*100),0,100);
    const proteinScore = p.assumed ? 68 : clamp(Math.round(proteinF*100),0,100);
    const bodyScore = clamp(Math.round(profile*100),0,100);
    const visibilityScore = clamp(Math.round(effectiveAdherence*0.42 + sleepScore*0.18 + proteinScore*0.18 + bodyScore*0.12 + 10), 0, 100);
    return {
      low, high, likely, monthlyLikely, avgDailyLikely, visibilityScore,
      planningMode, effectiveAdherence,
      targetWeightLow:Math.round((weight+low+0.4)*10)/10,
      targetWeightHigh:Math.round((weight+high+1)*10)/10
    };
  }

  function visibilityLabel(score){
    if(score >= 82) return 'Alta';
    if(score >= 68) return 'Boa';
    if(score >= 54) return 'Moderada';
    return 'Lenta';
  }

  function trajectoryBand(score){
    if(score >= 80) return 'Forte';
    if(score >= 62) return 'Aceitável';
    return 'Insuficiente';
  }

  function projectionNarrative(model){
    const avgDaily = Math.round((model.likely*1000)/180);
    const line = model.planningMode
      ? 'Sem histórico suficiente, a linha provável assume que vais treinar com boa regularidade nas próximas semanas.'
      : `A linha provável usa a tua consistência recente (${model.effectiveAdherence}%), o sono, a proteína e a dificuldade escolhida.`;
    return {
      avgDaily,
      headline:'O gráfico mostra ganho acumulado de massa magra desde hoje. Não é ganho “desse dia”; é o total acumulado até esse dia.',
      line,
      action:'Para puxar a linha azul escura para cima, o que mais pesa é subir consistência, aproximar as séries da fadiga técnica e manter proteína diária perto do alvo.'
    };
  }

  function latestBody(){
    const hist = getBodyHistory();
    return hist.length ? hist[hist.length-1] : getBody();
  }

  function buildProjectionSeries(model){
    const points=[];
    for(let day=0; day<=180; day++){
      const progress = day/180;
      const curve = Math.pow(progress, 0.86);
      points.push({
        day,
        low:+(model.low*curve).toFixed(3),
        likely:+(model.likely*curve).toFixed(3),
        high:+(model.high*curve).toFixed(3)
      });
    }
    return points;
  }

  function svgLine(points, key, width, height, pad, maxY){
    return points.map((p,i) => {
      const x = pad + (p.day/180)*(width-pad*2);
      const y = height - pad - ((p[key]||0)/maxY)*(height-pad*2);
      return `${i===0?'M':'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(' ');
  }

  function renderProjectionChart(model){
    const points = buildProjectionSeries(model);
    const width=320, height=170, pad=16, maxY=Math.max(...points.map(p=>p.high), 0.1);
    const lowPath = svgLine(points, 'low', width, height, pad, maxY);
    const likelyPath = svgLine(points, 'likely', width, height, pad, maxY);
    const highPath = svgLine(points, 'high', width, height, pad, maxY);
    const d30 = points.find(p=>p.day===30) || points[30];
    const d90 = points.find(p=>p.day===90) || points[90];
    const d180 = points.find(p=>p.day===180) || points[points.length-1];

    el.projectionChart.innerHTML = `<svg viewBox="0 0 ${width} ${height}" class="svg-host" aria-label="Projeção diária">
      <line x1="16" y1="150" x2="304" y2="150" stroke="#D9DCE4" stroke-width="1"></line>
      <line x1="16" y1="95" x2="304" y2="95" stroke="#ECEEF3" stroke-width="1"></line>
      <line x1="16" y1="40" x2="304" y2="40" stroke="#ECEEF3" stroke-width="1"></line>
      <path d="${lowPath}" fill="none" stroke="#B8BCC6" stroke-width="2" stroke-linecap="round"></path>
      <path d="${highPath}" fill="none" stroke="#53C4FF" stroke-width="2" stroke-linecap="round"></path>
      <path d="${likelyPath}" fill="none" stroke="#0A84FF" stroke-width="3" stroke-linecap="round"></path>
      <text x="16" y="164" fill="#6E6E73" font-size="10">Hoje</text>
      <text x="101" y="164" fill="#6E6E73" font-size="10">30d</text>
      <text x="189" y="164" fill="#6E6E73" font-size="10">90d</text>
      <text x="276" y="164" fill="#6E6E73" font-size="10">180d</text>
    </svg>`;

    el.projectionChecks.innerHTML = `
      <div class="checkpoint"><div class="v">+${d30.likely.toFixed(2)} kg</div><div class="l">Linha provável ao dia 30</div></div>
      <div class="checkpoint"><div class="v">+${d90.likely.toFixed(2)} kg</div><div class="l">Linha provável ao dia 90</div></div>
      <div class="checkpoint"><div class="v">+${d180.likely.toFixed(2)} kg</div><div class="l">Linha provável ao dia 180</div></div>`;
  }

  function updateBodyPanel(){
    const b = latestBody();
    const height = Number(b.height||0), weight = Number(b.weight||0), waist = Number(b.waist||0), age = Number(b.age||0), protein = Number(b.protein||0), sleep = Number(b.sleep||0), adherence = calcAdherence();
    el.consistencyBadge.textContent = `Consistência ${adherence}%`;
    if(!height || !weight){
      el.bmiValue.textContent='—';
      el.proteinTargetBody.textContent='—';
      el.leanGainBody.textContent='—';
      el.weightGoalBody.textContent='—';
      el.projectionFill.style.width='0%';
      el.projectionText.textContent='Introduz peso e altura para personalizar a projeção.';
      el.visualGainValue.textContent='—';
      el.monthlyGainValue.textContent='—';
      el.trajectoryGrid.innerHTML='';
      el.projectionChart.innerHTML='';
      el.projectionChecks.innerHTML='';
      el.projectionDetail.innerHTML='';
      el.bodyInsight.innerHTML='';
      return;
    }
    const bmi = weight/((height/100)**2);
    const model = buildProjectionModel({height, weight, waist, age, protein, sleep, adherence});
    const story = projectionNarrative(model);
    const adherenceTarget = model.effectiveAdherence >= 80 ? 'mantém ≥80%' : 'sobe para 80%';

    el.bmiValue.textContent = bmi.toFixed(1);
    el.proteinTargetBody.textContent = proteinRange(weight);
    el.leanGainBody.textContent = `+${model.low} a ${model.high} kg`;
    el.weightGoalBody.textContent = `${model.targetWeightLow}–${model.targetWeightHigh} kg`;
    el.projectionFill.style.width = `${model.visibilityScore}%`;
    el.projectionText.textContent = `Linha azul escura = cenário provável. Aos 180 dias, a trajetória provável para ti é +${model.likely.toFixed(2)} kg de massa magra acumulada.`;
    el.visualGainValue.textContent = visibilityLabel(model.visibilityScore);
    el.monthlyGainValue.textContent = `~${model.monthlyLikely.toFixed(2)} kg/mês`;
    el.trajectoryGrid.innerHTML = `
      <div class="trajectory-card"><div class="v">${trajectoryBand(model.visibilityScore)}</div><div class="l">Trajetória atual</div></div>
      <div class="trajectory-card"><div class="v">${model.avgDailyLikely} g</div><div class="l">Média provável por dia</div></div>
      <div class="trajectory-card"><div class="v">${adherenceTarget}</div><div class="l">Ação para puxar a curva</div></div>`;
    renderProjectionChart(model);
    el.projectionDetail.innerHTML = `
      <div class="note-box">
        <div class="label">Como interpretar</div>
        <div style="margin-top:6px;color:var(--text);font-weight:700">${story.headline}</div>
        <div class="legend-grid">
          <div class="legend-item"><span class="dot low"></span><div><strong>Conservador</strong><span>Faixa inferior plausível se a técnica e a consistência forem irregulares.</span></div></div>
          <div class="legend-item"><span class="dot likely"></span><div><strong>Provável</strong><span>A leitura principal. É a melhor estimativa com os teus dados atuais.</span></div></div>
          <div class="legend-item"><span class="dot high"></span><div><strong>Ótimo</strong><span>Teto plausível se a consistência, recuperação e execução forem muito boas.</span></div></div>
        </div>
        <div class="micro-copy">${story.line}</div>
        <div class="micro-copy">Em média matemática, a tua linha provável equivale a cerca de <strong>${story.avgDaily} g/dia</strong>, mas o corpo não cresce de forma linear: o valor vai-se acumulando ao longo das semanas.</div>
      </div>`;
    const measureHint = [];
    if(b.arm) measureHint.push(`braço ${b.arm} cm`);
    if(b.chest) measureHint.push(`peito ${b.chest} cm`);
    if(b.thigh) measureHint.push(`coxa ${b.thigh} cm`);
    if(b.hip) measureHint.push(`anca/glúteo ${b.hip} cm`);
    el.bodyInsight.innerHTML = `
      <div class="note-box">
        <div class="label">Leitura rápida</div>
        <div style="margin-top:6px;color:var(--text);font-weight:700">Hoje, o número mais útil para seguires é <strong>+${model.likely.toFixed(2)} kg em 180 dias</strong>.</div>
        <div class="micro-copy">Tradução prática: se o peso subir devagar, a cintura não disparar e as medidas prioritárias acompanharem, estás a andar na direção certa. ${story.action}</div>
        ${measureHint.length ? `<div class="micro-copy">Últimas medidas relevantes: ${measureHint.join(' · ')}.</div>` : ''}
      </div>`;
  }

  function fillBodyInputs(){
    const body = getBody();
    el.entryDate.value = body.date || todayKey();
    el.ageInput.value = body.age || '';
    el.heightInput.value = body.height || '';
    el.weightInput.value = body.weight || '';
    el.waistInput.value = body.waist || '';
    el.armInput.value = body.arm || '';
    el.chestInput.value = body.chest || '';
    el.thighInput.value = body.thigh || '';
    el.hipInput.value = body.hip || '';
    el.proteinInput.value = body.protein || '';
    el.sleepInput.value = body.sleep || '';
  }

  function saveBodyFromInputs(){
    const entry = {
      date: el.entryDate.value || todayKey(),
      age: el.ageInput.value || '',
      height: el.heightInput.value || '',
      weight: el.weightInput.value || '',
      waist: el.waistInput.value || '',
      arm: el.armInput.value || '',
      chest: el.chestInput.value || '',
      thigh: el.thighInput.value || '',
      hip: el.hipInput.value || '',
      protein: el.proteinInput.value || '',
      sleep: el.sleepInput.value || ''
    };
    saveBody(entry);
    const history = getBodyHistory().filter(x=>x.date !== entry.date);
    history.push(entry);
    saveBodyHistory(history);
    fillBodyInputs();
    updateBodyPanel();
    renderAnalysis();
    renderMonthlySummary();
  }

  function renderTrendChart(){
    const hist = getBodyHistory().slice(-8);
    if(hist.length < 2){
      el.progressChart.innerHTML = '';
      return;
    }
    const width=320, height=210, pad=18;
    const labels = hist.map(h=>h.date.slice(5));
    const all = hist.flatMap(h => [Number(h.weight)||null, Number(h.waist)||null, Number(h.arm)||null]).filter(v=>v!=null);
    const min=Math.min(...all), max=Math.max(...all);
    const scaleY = v => height-pad-((v-min)/Math.max(max-min,0.1))*(height-pad*2);
    const scaleX = i => pad+(i/Math.max(hist.length-1,1))*(width-pad*2);

    const pathFor = getter => hist.map((h,i)=>{
      const v = getter(h);
      if(!Number.isFinite(v)) return '';
      const prev = hist.slice(0,i).some(x=>Number.isFinite(getter(x)));
      return `${prev?'L':'M'} ${scaleX(i).toFixed(1)} ${scaleY(v).toFixed(1)}`;
    }).filter(Boolean).join(' ');

    el.progressChart.innerHTML = `<svg viewBox="0 0 ${width} ${height}" class="svg-host">
      <line x1="18" y1="180" x2="302" y2="180" stroke="#D9DCE4" stroke-width="1"></line>
      <line x1="18" y1="126" x2="302" y2="126" stroke="#ECEEF3" stroke-width="1"></line>
      <line x1="18" y1="72" x2="302" y2="72" stroke="#ECEEF3" stroke-width="1"></line>
      <path d="${pathFor(h=>Number(h.weight))}" fill="none" stroke="#0A84FF" stroke-width="2.5" stroke-linecap="round"></path>
      <path d="${pathFor(h=>Number(h.waist))}" fill="none" stroke="#7B7F89" stroke-width="2.2" stroke-linecap="round"></path>
      <path d="${pathFor(h=>Number(h.arm))}" fill="none" stroke="#36A269" stroke-width="2.2" stroke-linecap="round"></path>
      ${hist.map((h,i)=>`<text x="${scaleX(i).toFixed(1)}" y="198" text-anchor="middle" fill="#6E6E73" font-size="10">${labels[i]}</text>`).join('')}
    </svg>`;
  }

  function renderAnalysis(){
    const hist = getBodyHistory().slice(-8);
    el.analysisPill.textContent = hist.length >= 2 ? `${hist.length} registos` : '2+ registos';
    if(hist.length >= 2){
      const first = hist[0], last = hist[hist.length-1];
      const lines = [];
      const add = (label, field, unit='cm') => {
        const a = Number(first[field]), b = Number(last[field]);
        if(Number.isFinite(a) && Number.isFinite(b)) lines.push(`${label} ${(b-a)>=0?'+':''}${(b-a).toFixed(1)} ${unit}`);
      };
      add('peso','weight','kg');
      add('cintura','waist');
      add('braço','arm');
      add('peito','chest');
      add('coxa','thigh');
      add('anca/glúteo','hip');
      el.analysisText.textContent = lines.length ? `Desde o primeiro destes registos: ${lines.join(' · ')}.` : 'Registos disponíveis, mas ainda faltam medidas comparáveis.';
    }else{
      el.analysisText.textContent = 'Adiciona pelo menos dois registos para ver tendência de peso, cintura, braço, peito, coxa e anca/glúteo.';
    }
    renderTrendChart();
    el.weekSummaryPill.textContent = `${sessionsInLastDays(7)}/${weeklyTargetSessions()}`;
  }

  function measurementDelta(field, from, to){
    const a = Number(from?.[field]), b = Number(to?.[field]);
    if(!Number.isFinite(a) || !Number.isFinite(b)) return null;
    return +(b-a).toFixed(1);
  }

  function deltaText(v, unit='cm'){
    if(v == null) return '—';
    return `${v>0?'+':''}${v.toFixed(1)} ${unit}`;
  }

  function nearestHistory(daysBack=30){
    const hist = getBodyHistory();
    if(hist.length < 2) return null;
    const latest = hist[hist.length-1];
    const target = addDaysToKey(latest.date, -daysBack);
    const earlier = hist.filter(h=>h.date < latest.date);
    if(!earlier.length) return null;
    let best = earlier[0];
    let bestDiff = Math.abs(dateFromKey(best.date) - dateFromKey(target));
    earlier.forEach(item => {
      const diff = Math.abs(dateFromKey(item.date) - dateFromKey(target));
      if(diff < bestDiff){ best = item; bestDiff = diff; }
    });
    return { latest, base:best, days:Math.max(1, Math.round((dateFromKey(latest.date)-dateFromKey(best.date))/86400000)) };
  }

  function monthlySummary(){
    const s30 = sessionsInLastDays(30);
    const adherence = calcAdherence(30);
    const target = Math.round(weeklyTargetSessions()*4.3);
    const pair = nearestHistory(30);
    const photos = getPhotos();
    const prefs = readComparePrefs();
    const angle = prefs.angle === 'auto' ? (photos[photos.length-1]?.angle || 'front') : prefs.angle;
    const sameAngle = photos.filter(p=>p.angle === angle).length;
    let status='Base';
    if(adherence >= 80) status='Forte';
    else if(adherence >= 62) status='Aceitável';
    else status='Irregular';
    const deltas = pair ? {
      weight: measurementDelta('weight', pair.base, pair.latest),
      waist: measurementDelta('waist', pair.base, pair.latest),
      arm: measurementDelta('arm', pair.base, pair.latest),
      chest: measurementDelta('chest', pair.base, pair.latest),
      thigh: measurementDelta('thigh', pair.base, pair.latest),
      hip: measurementDelta('hip', pair.base, pair.latest)
    } : null;
    let action = 'Mantém o bloco atual e procura repetir um mês com consistência alta.';
    if(status === 'Irregular') action = 'Fecha primeiro 18–22 sessões em 30 dias antes de tentar empurrar mais volume ou intensidade.';
    else if(state.profileMode === 'lower_glutes') action = 'Mês suficiente para puxar mais B e E; observa coxa/anca e fotos do mesmo ângulo.';
    else if(state.profileMode === 'chest_arms') action = 'Mês útil para observar braço/peito e cintura. Se o braço sobe e a cintura não dispara, a trajetória mantém-se boa.';
    return { s30, adherence, target, status, pair, deltas, sameAngle, angle, action };
  }

  function renderWeeklySummary(){
    const w = weeklySummary();
    const profile = state.profileMode==='lower_glutes' ? 'B e E' : state.profileMode==='chest_arms' ? 'A e D' : 'dias dominantes';
    el.weeklyRecommendationPill.textContent = w.status;
    el.weeklySummaryGrid.innerHTML = `
      <div class="weekly-card"><div class="v">${w.s7}/${w.target}</div><div class="l">Sessões / alvo 7d</div></div>
      <div class="weekly-card"><div class="v">${w.adherence}%</div><div class="l">Consistência 28d</div></div>
      <div class="weekly-card"><div class="v">${w.volume.label}</div><div class="l">Volume automático</div></div>`;
    el.weeklyRecommendationText.innerHTML = `<div class="label">Recomendação objetiva</div><div style="margin-top:6px;color:var(--text);font-weight:760">${w.action}</div><div class="micro-copy">Nesta versão, o plano de hoje corre com <strong>${w.volume.rounds} rondas</strong>. Quando a aderência sobe, a app dá mais trabalho aos ${profile}; quando cai, desce volume para manter aderência real.</div>`;
  }

  function renderMonthlySummary(){
    const m = monthlySummary();
    el.monthlySummaryPill.textContent = m.status;
    el.monthlySummaryGrid.innerHTML = `
      <div class="summary-card"><div class="v">${m.s30}/${m.target}</div><div class="l">Sessões / alvo 30d</div></div>
      <div class="summary-card"><div class="v">${m.adherence}%</div><div class="l">Consistência 30d</div></div>
      <div class="summary-card"><div class="v">${m.sameAngle}</div><div class="l">Fotos no ângulo ${angleLabel(m.angle)}</div></div>`;
    if(!m.pair || !m.deltas){
      el.monthlySummaryText.innerHTML = 'Adiciona pelo menos dois registos corporais em semanas diferentes para abrir a leitura mensal de peso, cintura, braço, peito, coxa e anca/glúteo.';
      return;
    }
    const parts = [
      `peso ${deltaText(m.deltas.weight,'kg')}`,
      `cintura ${deltaText(m.deltas.waist)}`,
      `braço ${deltaText(m.deltas.arm)}`,
      `peito ${deltaText(m.deltas.chest)}`,
      `coxa ${deltaText(m.deltas.thigh)}`,
      `anca/glúteo ${deltaText(m.deltas.hip)}`
    ];
    el.monthlySummaryText.innerHTML = `<div class="label">Leitura do último bloco</div><div style="margin-top:6px;color:var(--text);font-weight:760">Comparação entre ${formatShortDate(m.pair.base.date)} e ${formatShortDate(m.pair.latest.date)} (${m.pair.days} dias).</div><div class="micro-copy">${parts.join(' · ')}.</div><div class="micro-copy">${m.action}</div>`;
  }

  function angleLabel(v){
    return { front:'Frente', three_quarter:'3/4', side:'Lateral', auto:'Automático' }[v] || 'Sem ângulo';
  }

  function readComparePrefs(){
    return {
      angle: localStorage.getItem(STORAGE.photoCompareAngle) || 'auto',
      window: String(localStorage.getItem(STORAGE.photoCompareWindow) || '30')
    };
  }

  function setComparePrefs(partial){
    const next = { ...readComparePrefs(), ...partial };
    localStorage.setItem(STORAGE.photoCompareAngle, next.angle);
    localStorage.setItem(STORAGE.photoCompareWindow, String(next.window));
    el.compareAngleSelect.value = next.angle;
    el.compareWindowSelect.value = String(next.window);
    renderPhotoCompare();
  }

  function pickPhotoPair(){
    const photos = getPhotos();
    if(!photos.length) return { recent:null, older:null, angle:null, targetDays:30 };
    const prefs = readComparePrefs();
    const targetDays = Number(prefs.window || 30);
    let recent = photos[photos.length-1];
    let angle = prefs.angle;
    let filtered = photos;
    if(angle === 'auto'){
      angle = recent.angle || 'front';
      const same = photos.filter(p=>p.angle === angle);
      if(same.length){ filtered = same; recent = same[same.length-1]; }
    }else{
      const same = photos.filter(p=>p.angle === angle);
      if(same.length){ filtered = same; recent = same[same.length-1]; }
    }
    const olderOptions = filtered.filter(p=>p.date < recent.date);
    if(!olderOptions.length) return { recent, older:null, angle, targetDays };
    const target = dateFromKey(addDaysToKey(recent.date, -targetDays));
    let older = olderOptions[0];
    let best = Math.abs(dateFromKey(older.date) - target);
    olderOptions.forEach(p => {
      const diff = Math.abs(dateFromKey(p.date) - target);
      if(diff < best){ older = p; best = diff; }
    });
    return { recent, older, angle, targetDays };
  }

  function renderPhotoCompare(){
    const pair = pickPhotoPair();
    const prefs = readComparePrefs();
    if(!pair.recent){
      el.photoCompareGrid.innerHTML = '';
      el.photoCompareText.textContent = 'Sem fotos locais ainda. Guarda uma foto frontal, 3/4 ou lateral e repete no mesmo ângulo.';
      return;
    }
    const cards = [pair.older, pair.recent].filter(Boolean);
    const labels = [pair.older ? `Comparação alvo ${pair.targetDays}d` : 'Mais recente', 'Mais recente'];
    el.photoCompareGrid.innerHTML = cards.map((p,i) => `<div class="photo-frame compare"><img src="${p.dataUrl}" alt="Foto de progresso ${p.date}"><div class="meta"><strong>${labels[i]}</strong>${formatShortDate(p.date)}${p.angle ? ` · ${angleLabel(p.angle)}` : ''}</div></div>`).join('');
    if(!pair.older){
      el.photoCompareText.innerHTML = `Existe 1 foto utilizável para o filtro atual (${prefs.angle==='auto' ? 'automático' : angleLabel(prefs.angle)}). Mantém o mesmo ângulo, a mesma distância e volta a fotografar dentro de ${pair.targetDays} dias.`;
      return;
    }
    const gap = Math.max(1, Math.round((dateFromKey(pair.recent.date)-dateFromKey(pair.older.date))/86400000));
    el.photoCompareText.innerHTML = `Comparação local lado a lado entre <strong>${formatShortDate(pair.older.date)}</strong> e <strong>${formatShortDate(pair.recent.date)}</strong> (${gap} dias). O filtro atual está em <strong>${prefs.angle==='auto' ? `automático · ${angleLabel(pair.angle)}` : angleLabel(pair.angle)}</strong>.`;
  }

  function fillPhotoInputs(){
    el.photoDateInput.value = todayKey();
    el.photoAngleInput.value = 'front';
    const prefs = readComparePrefs();
    el.compareAngleSelect.value = prefs.angle;
    el.compareWindowSelect.value = String(prefs.window);
  }

  function compressImageFile(file, maxSide=1200, quality=0.8){
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          let { width:w, height:h } = img;
          const scale = Math.min(1, maxSide / Math.max(w,h));
          w = Math.round(w*scale); h = Math.round(h*scale);
          const canvas = document.createElement('canvas');
          canvas.width = w; canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.onerror = reject;
        img.src = reader.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  async function handlePhotoSelection(file){
    if(!file) return;
    try{
      const dataUrl = await compressImageFile(file);
      const key = el.photoDateInput.value || todayKey();
      const angle = el.photoAngleInput.value || 'front';
      const photos = getPhotos().filter(p => !(p.date===key && (p.angle||'')===angle));
      photos.push({ date:key, dataUrl, angle });
      savePhotos(photos);
      renderPhotoCompare();
      renderMonthlySummary();
    }catch{}
    finally{
      el.photoInput.value = '';
    }
  }

  function removeLatestPhoto(){
    const photos = getPhotos();
    if(!photos.length) return;
    photos.pop();
    savePhotos(photos);
    renderPhotoCompare();
    renderMonthlySummary();
  }

  function renderCalendar(){
    const view = new Date(state.viewDate.getFullYear(), state.viewDate.getMonth(), 1, 12,0,0,0);
    const year=view.getFullYear(), month=view.getMonth();
    const today=todayKey();
    const completed=completedDatesSet();
    const first = new Date(year, month, 1, 12,0,0,0);
    const startWeekday = (first.getDay()+6)%7;
    const daysInMonth = new Date(year, month+1, 0, 12,0,0,0).getDate();
    const monthName = view.toLocaleDateString('pt-PT',{month:'long', year:'numeric'});
    el.monthLabel.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    el.calendar.innerHTML = '';
    ['S','T','Q','Q','S','S','D'].forEach(day => {
      const w=document.createElement('div');
      w.className='weekday';
      w.textContent=day;
      el.calendar.appendChild(w);
    });
    for(let i=0;i<startWeekday;i++){
      const blank=document.createElement('div');
      blank.className='day future';
      blank.style.visibility='hidden';
      el.calendar.appendChild(blank);
    }
    for(let d=1; d<=daysInMonth; d++){
      const key = localDateKey(new Date(year, month, d, 12,0,0,0));
      const cell = document.createElement('div');
      cell.className='day';
      if(key===today) cell.classList.add('today');
      if(key>today) cell.classList.add('future');
      else if(completed.has(key)) cell.classList.add('done');
      else cell.classList.add('missed');
      cell.textContent = String(d);
      if(key <= today){
        cell.style.cursor='pointer';
        cell.addEventListener('click', ()=>toggleSessionForDate(key));
      }
      el.calendar.appendChild(cell);
    }
  }

  function renderRecent(){
    const recent = getSessions().slice(-6).reverse();
    if(!recent.length){
      el.recentList.innerHTML = '<div class="recent-item"><span>Nenhuma sessão ainda.</span><span>—</span></div>';
      return;
    }
    el.recentList.innerHTML = recent.map(item => `<div class="recent-item"><span>${item.date} · Plano ${item.plan}</span><span>${DIFFICULTY_CONFIG[item.difficulty]?.label || '—'}</span></div>`).join('');
  }

  function renderAll(){
    renderToday();
    updateBodyPanel();
    renderAnalysis();
    renderWeeklySummary();
    renderMonthlySummary();
    renderPhotoCompare();
    renderCalendar();
    renderRecent();
  }

  // Event listeners
  document.querySelectorAll('[data-session-feedback]').forEach(btn => btn.addEventListener('click', () => applySessionFeedback(btn.dataset.sessionFeedback, getPendingPlanKey())));
  document.querySelectorAll('#difficultySegment button').forEach(btn => btn.addEventListener('click', () => applyDifficulty(btn.dataset.difficulty)));
  document.querySelectorAll('[data-plan-mode]').forEach(btn => btn.addEventListener('click', () => setPlanMode(btn.dataset.planMode)));
  document.querySelectorAll('[data-profile-mode]').forEach(btn => btn.addEventListener('click', () => setProfileMode(btn.dataset.profileMode)));
  el.exerciseList.addEventListener('click', e => {
    const item = e.target.closest('[data-preview-index]');
    if(!item) return;
    setPreviewIndex(Number(item.dataset.previewIndex));
  });

  el.startBtn.addEventListener('click', startSession);
  el.pauseBtn.addEventListener('click', pauseSession);
  el.resetBtn.addEventListener('click', () => { resetCycle(); renderToday(); });
  el.skipBtn.addEventListener('click', skipCurrent);
  el.techBtn.addEventListener('click', () => setActiveTab('plan'));
  el.markTodayBtn.addEventListener('click', () => { saveTodaySession(true); renderAll(); });

  el.soundToggle.addEventListener('click', async () => {
    state.soundOn = !state.soundOn;
    localStorage.setItem(STORAGE.sound, JSON.stringify(state.soundOn));
    if(state.soundOn) await primeMedia();
    renderToday();
  });

  el.voiceToggle.addEventListener('click', async () => {
    state.voiceOn = !state.voiceOn;
    localStorage.setItem(STORAGE.voice, JSON.stringify(state.voiceOn));
    if(state.voiceOn){ await primeMedia(); speak('voz ativa'); }
    renderToday();
  });

  el.saveBodyBtn.addEventListener('click', saveBodyFromInputs);
  el.addPhotoBtn.addEventListener('click', () => el.photoInput.click());
  el.photoInput.addEventListener('change', e => handlePhotoSelection(e.target.files?.[0]));
  el.removePhotoBtn.addEventListener('click', removeLatestPhoto);
  el.swapPrevBtn.addEventListener('click', () => { const { plan, index } = previewExerciseData(); cycleSwap(plan.key, index, -1); });
  el.swapNextBtn.addEventListener('click', () => { const { plan, index } = previewExerciseData(); cycleSwap(plan.key, index, +1); });
  el.compareAngleSelect.addEventListener('change', () => setComparePrefs({ angle: el.compareAngleSelect.value }));
  el.compareWindowSelect.addEventListener('change', () => setComparePrefs({ window: el.compareWindowSelect.value }));
  el.prevMonthBtn.addEventListener('click', () => { state.viewDate.setMonth(state.viewDate.getMonth()-1); renderCalendar(); });
  el.nextMonthBtn.addEventListener('click', () => { state.viewDate.setMonth(state.viewDate.getMonth()+1); renderCalendar(); });
  el.jumpTodayBtn.addEventListener('click', () => { state.viewDate = dateFromKey(todayKey()); renderCalendar(); });

  // boot
  bodyDefaults();
  ensureAutoPlan();
  fillBodyInputs();
  fillPhotoInputs();
  resetCycle();
  initTabs();
  renderAll();

  if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js?v=24').then(reg => reg.update()).catch(() => {});
    });
  }
})();
