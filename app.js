
(() => {
  const STORAGE = {
    sessions: 'mb8_sessions',
    body: 'mb8_body',
    bodyHistory: 'mb8_body_history',
    difficulty: 'mb8_difficulty',
    tab: 'mb14_tab',
    manualPlan: 'mb14_manual_plan',
    sound: 'mb14_sound',
    voice: 'mb14_voice'
  };

  const plans = [{"key": "A", "title": "A · Push hipertrofia", "focus": "Peito, ombros e tríceps.", "exercises": [{"id": "pushup_base", "variants": {"easy": "Flexão de joelhos", "normal": "Flexão", "hard": "Flexão diamante"}, "instructions": {"easy": "Joelhos no chão, mãos sob os ombros, corpo em linha do joelho à cabeça.", "normal": "Mãos sob os ombros, tronco rígido, desce até o peito quase tocar no chão.", "hard": "Mãos mais juntas, cotovelos perto do tronco, foco maior em tríceps e peito."}, "desc": "Empurrar horizontal base para peito e tríceps.", "focus": "Peitoral, deltoide anterior, tríceps.", "guide": {"steps": ["Coloca as mãos ligeiramente mais largas do que os ombros e ativa o abdómen.", "Desce em bloco, sem deixar a bacia cair nem abrir demasiado os cotovelos.", "Sobe a empurrar o chão com intenção até quase estender totalmente os braços."], "tempo": "3 segundos a descer, 1 segundo a subir.", "breath": "Inspira na descida. Expira na subida.", "mistakes": "Lombar a afundar, cotovelos demasiado abertos, descida curta."}}, {"id": "pushup_tension", "variants": {"easy": "Flexão isométrica alta", "normal": "Flexão lenta", "hard": "Flexão 1.5 reps"}, "instructions": {"easy": "Mantém a meio da amplitude com tensão contínua no peito e tríceps.", "normal": "Desce muito devagar e sobe firme sem relaxar no topo.", "hard": "Desce, sobe só até meio, desce de novo e só depois sobe totalmente."}, "desc": "Tempo sob tensão para hipertrofia sem carga externa.", "focus": "Peito e tríceps sob fadiga.", "guide": {"steps": ["Parte da posição de flexão estável.", "Mantém a descida lenta e controlada, sem colapsar o tronco.", "No topo não descanses completamente; mantém sempre tensão muscular."], "tempo": "4 segundos na descida; no hard usa repetição e meia.", "breath": "Respiração curta e controlada durante todo o bloco.", "mistakes": "Perder a linha corporal, acelerar quando começa a fatiga, descansar no topo."}}, {"id": "pike_press", "variants": {"easy": "Pike hold", "normal": "Pike push-up", "hard": "Pike press pulses"}, "instructions": {"easy": "Ancas altas, peso nos ombros, mantém a posição com cabeça entre os braços.", "normal": "Desce a cabeça entre as mãos e empurra de volta para cima.", "hard": "Mantém a parte baixa da pike e faz pulsações curtas sob controlo."}, "desc": "Pressão vertical para ombros e tríceps.", "focus": "Deltoides, tríceps, serrátil.", "guide": {"steps": ["Levanta a bacia para formar um V invertido.", "Carrega o peso para a frente até os ombros sentirem trabalho real.", "Desce a cabeça entre as mãos e empurra forte para regressar."], "tempo": "2–3 segundos a descer; subida firme.", "breath": "Inspira a descer. Expira ao empurrar.", "mistakes": "Bacia demasiado baixa, amplitude curta, pescoço tenso."}}, {"id": "triceps_finisher", "variants": {"easy": "Scapular push-up", "normal": "Close-grip push-up", "hard": "Pseudo-planche lean push-up"}, "instructions": {"easy": "Sem dobrar muito os cotovelos, junta e separa as omoplatas.", "normal": "Mãos mais próximas e cotovelos encostados ao corpo.", "hard": "Inclina os ombros para a frente antes de descer para aumentar a alavanca."}, "desc": "Fecho técnico para tríceps, peito e controlo escapular.", "focus": "Tríceps, serrátil, peito.", "guide": {"steps": ["Estabiliza o tronco antes de começar.", "Mantém os cotovelos perto do corpo durante a fase de esforço.", "Na variante hard, leva os ombros um pouco à frente das mãos antes da descida."], "tempo": "Controlado; sem rebote no fundo.", "breath": "Expira quando empurras. Inspira ao regressar.", "mistakes": "Cotovelos a abrir, ombros encolhidos, amplitude incompleta."}}]}, {"key": "B", "title": "B · Pernas", "focus": "Quadríceps, glúteos e posteriores.", "exercises": [{"id": "squat_base", "variants": {"easy": "Air squat", "normal": "Tempo squat", "hard": "Squat 1.5 reps"}, "instructions": {"easy": "Desce até amplitude confortável e sobe sem perder alinhamento.", "normal": "Desce em 3 segundos, pausa curta em baixo e sobe forte.", "hard": "Desce, sobe até meio, desce de novo e só depois sobe totalmente."}, "desc": "Agachamento base para pernas e glúteos.", "focus": "Quadríceps, glúteos.", "guide": {"steps": ["Afasta os pés à largura dos ombros e abre ligeiramente as pontas.", "Empurra a bacia para trás e para baixo mantendo o peito aberto.", "Sobe a pressionar o chão com todo o pé, sem levantar os calcanhares."], "tempo": "3 segundos a descer; subida firme.", "breath": "Inspira na descida. Expira ao subir.", "mistakes": "Calcanhares a levantar, joelhos a colapsar para dentro, tronco a cair em excesso."}}, {"id": "split_squat", "variants": {"easy": "Split squat assistido leve", "normal": "Split squat", "hard": "Split squat 1.5 reps"}, "instructions": {"easy": "Usa apoio leve na parede se precisares de equilíbrio.", "normal": "Desce na vertical mantendo a maior parte do peso na perna da frente.", "hard": "Usa repetição e meia para aumentar tensão local na perna da frente."}, "desc": "Unilateral que aumenta a carga local sem material.", "focus": "Quadríceps, glúteos.", "guide": {"steps": ["Dá um passo à frente suficientemente comprido para manter estabilidade.", "Desce o joelho de trás na vertical, sem atirar o tronco para a frente.", "Sobe a carregar no médio-pé e calcanhar da perna da frente."], "tempo": "Desce controlado; sem ressalto em baixo.", "breath": "Inspira a descer. Expira na subida.", "mistakes": "Base demasiado curta, joelho da frente a fugir para dentro, peso excessivo atrás."}}, {"id": "bridge", "variants": {"easy": "Glute bridge", "normal": "Single-leg glute bridge", "hard": "Long-lever bridge"}, "instructions": {"easy": "Sobe a bacia e aperta os glúteos no topo.", "normal": "Trabalha uma perna de cada vez sem deixar a bacia rodar.", "hard": "Afasta mais os calcanhares para puxar mais pelos posteriores."}, "desc": "Extensão da anca para glúteos e cadeia posterior.", "focus": "Glúteos, posteriores.", "guide": {"steps": ["Deita-te, dobra os joelhos e apoia firmemente os pés.", "Eleva a bacia até formar linha ombros-anca-joelhos.", "Pausa no topo e desce sem largar totalmente a tensão."], "tempo": "1 segundo de pausa no topo.", "breath": "Expira na subida. Inspira na descida.", "mistakes": "Hiperextender a lombar, empurrar pouco com os calcanhares, descer demasiado rápido."}}, {"id": "lunge_walkout", "variants": {"easy": "Reverse lunge", "normal": "Reverse lunge lenta", "hard": "Hamstring walkout"}, "instructions": {"easy": "Passo atrás controlado e regressa sem perder equilíbrio.", "normal": "Desce mais devagar e mantém o tronco firme.", "hard": "Parte da ponte de glúteos e caminha com os calcanhares para a frente e para trás."}, "desc": "Fecha o dia com mais unilateral ou cadeia posterior.", "focus": "Quadríceps, glúteos, posteriores.", "guide": {"steps": ["Na lunge, mantém o tronco alto e controla o passo atrás.", "Na walkout, sobe a bacia primeiro e só depois afasta os pés lentamente.", "Mantém a anca estável até ao fim da série."], "tempo": "Movimento contínuo, sem perder a forma.", "breath": "Respiração curta e ritmada.", "mistakes": "Passo atrás demasiado curto, joelho da frente instável, bacia a cair na walkout."}}]}, {"key": "C", "title": "C · Pull + braços", "focus": "Costas e bíceps só com peso corporal.", "exercises": [{"id": "back_widow", "variants": {"easy": "Back widow curta", "normal": "Back widow", "hard": "Back widow com pausa"}, "instructions": {"easy": "Empurra os cotovelos contra o chão e eleva ligeiramente o peito.", "normal": "Eleva mais o peito a partir da pressão dos cotovelos no solo.", "hard": "Faz pausa de 1–2 segundos no topo de cada repetição."}, "desc": "Uma das melhores opções de tração sem equipamento.", "focus": "Costas altas, dorsais, bíceps de apoio.", "guide": {"steps": ["Deita-te de costas com cotovelos dobrados e junto ao tronco.", "Empurra os cotovelos para o chão para levantar peito e parte alta das costas.", "Desce sem largar completamente a tensão entre as omoplatas."], "tempo": "Subida firme, pausa curta, descida controlada.", "breath": "Expira na elevação. Inspira a descer.", "mistakes": "Impulso excessivo, queixo muito projetado, não apertar escápulas."}}, {"id": "rear_delts", "variants": {"easy": "Reverse snow angels", "normal": "Prone W raises", "hard": "Prone Y-T-W combo"}, "instructions": {"easy": "Braços deslizam num arco lento mantendo-os ativos.", "normal": "Levanta os braços em forma de W e pausa no topo.", "hard": "Alterna Y, T e W sem perder tensão no ombro posterior."}, "desc": "Costas altas e deltoide posterior.", "focus": "Trapézio médio, romboides, deltoide posterior.", "guide": {"steps": ["Deita-te de barriga para baixo com testa leve sobre o chão.", "Levanta os braços sem encolher os ombros.", "Pensa em afastar e depois aproximar as omoplatas com controlo."], "tempo": "Lento e limpo.", "breath": "Respiração calma, sem prender o ar.", "mistakes": "Usar balanço, encolher ombros, levantar demasiado a cabeça."}}, {"id": "superman_pull", "variants": {"easy": "Superman pull", "normal": "Superman pull com pausa", "hard": "Swimmer pulls lentos"}, "instructions": {"easy": "Eleva ligeiramente o tronco e puxa os cotovelos para trás.", "normal": "Pausa quando os cotovelos chegam atrás e aperta as costas.", "hard": "Faz braçadas lentas sob tensão contínua."}, "desc": "Complemento para dorsais e controlo escapular.", "focus": "Dorsais, costas altas, lombar isométrica.", "guide": {"steps": ["Parte de barriga para baixo com braços à frente.", "Eleva ligeiramente o peito e traz os cotovelos para trás como se estivesses a remar.", "Mantém o pescoço neutro e a lombar só o suficiente para estabilizar."], "tempo": "Controlado; sem pressa.", "breath": "Expira na puxada. Inspira ao alongar à frente.", "mistakes": "Hiperextender a lombar, puxar curto, ombros junto às orelhas."}}, {"id": "biceps_self", "variants": {"easy": "Curl auto-resistido", "normal": "Curl auto-resistido lento", "hard": "Hammer curl auto-resistido"}, "instructions": {"easy": "Uma mão resiste à outra durante a flexão do cotovelo.", "normal": "Sobe em 2 segundos e desce em 4 mantendo resistência manual.", "hard": "Pegada neutra e resistência máxima controlada em toda a amplitude."}, "desc": "Bíceps sem pesos externos usando auto-resistência.", "focus": "Bíceps, braquial, braquiorradial.", "guide": {"steps": ["Cria resistência com a mão oposta desde o início do movimento.", "Sobe a mão ativa devagar como se estivesses a puxar um peso real.", "Na descida aumenta ainda mais a resistência para prolongar a tensão."], "tempo": "2 segundos a subir, 4 a descer.", "breath": "Expira a subir. Inspira a descer.", "mistakes": "Resistência fraca, amplitude curta, compensar com o ombro."}}]}, {"key": "D", "title": "D · Core + braços", "focus": "Core rígido e braço complementar.", "exercises": [{"id": "core_front", "variants": {"easy": "Prancha", "normal": "Hollow hold", "hard": "Body-saw plank"}, "instructions": {"easy": "Corpo em linha reta, glúteos contraídos e abdómen ativo.", "normal": "Lombar colada ao chão, costelas baixas e pernas ativas.", "hard": "Na prancha, desloca o corpo ligeiramente para a frente e para trás."}, "desc": "Anti-extensão para transferir força e proteger a lombar.", "focus": "Core anterior.", "guide": {"steps": ["Cria tensão do ombro ao pé antes de começar.", "Mantém costelas baixas e abdómen contraído.", "Não deixes a lombar cair nem a bacia subir demais."], "tempo": "Tensão contínua.", "breath": "Expira curto mantendo brace abdominal.", "mistakes": "Lombar arqueada, pescoço em hiperextensão, glúteos desligados."}}, {"id": "core_side", "variants": {"easy": "Side plank", "normal": "Side plank dip", "hard": "Long-lever side plank"}, "instructions": {"easy": "Corpo alinhado e anca alta.", "normal": "Desce e sobe a anca sob controlo sem rodar o tronco.", "hard": "Aumenta a alavanca afastando mais os pés e prolongando o corpo."}, "desc": "Anti-flexão lateral e oblíquos.", "focus": "Oblíquos, glúteo médio.", "guide": {"steps": ["Empilha ombro, anca e tornozelo.", "Empurra o chão com o antebraço para manter espaço no ombro.", "Mantém a bacia alta do primeiro ao último segundo."], "tempo": "Constante e sem perda de alinhamento.", "breath": "Respiração curta e estável.", "mistakes": "Rodar a bacia, afundar a anca, ombro colapsado."}}, {"id": "core_antirot", "variants": {"easy": "Shoulder taps", "normal": "Shoulder taps lentos", "hard": "Plank to pike"}, "instructions": {"easy": "Alterna toques no ombro sem balançar o tronco.", "normal": "Faz o toque mais lento e mais limpo.", "hard": "Da prancha sobe a bacia em pike e regressa sob controlo."}, "desc": "Core anti-rotação com carga no ombro.", "focus": "Core, serrátil, ombro.", "guide": {"steps": ["Abre um pouco os pés para estabilizar se precisares.", "Quando tocas no ombro, evita deslocar a bacia para o lado oposto.", "Na versão hard, sobe a anca mantendo braços e tronco ativos."], "tempo": "Mais lento é mais difícil.", "breath": "Expira em cada toque ou subida.", "mistakes": "Bacia a rodar, mãos demasiado à frente, perder tensão abdominal."}}, {"id": "triceps_floor", "variants": {"easy": "Tríceps extension no chão curta", "normal": "Bodyweight triceps extension no chão", "hard": "Diamond push-up pulses"}, "instructions": {"easy": "A partir de joelhos, leva a testa ao chão e estende os cotovelos.", "normal": "Aumenta a alavanca para carregar mais os tríceps.", "hard": "Pulsações curtas em flexão diamante perto da falha técnica."}, "desc": "Tríceps complementar sem acessórios.", "focus": "Tríceps.", "guide": {"steps": ["Mantém os cotovelos apontados para a frente e não para fora.", "Desce controlado até perto do chão.", "Empurra a partir da extensão do cotovelo, não da lombar ou do balanço."], "tempo": "Descida controlada e subida firme.", "breath": "Inspira a descer. Expira ao estender.", "mistakes": "Cotovelos a abrir, amplitude mínima, perder rigidez no tronco."}}]}, {"key": "E", "title": "E · Full body density", "focus": "Sessão global curta e densa.", "exercises": [{"id": "density_squat", "variants": {"easy": "Air squat", "normal": "Squat tempo contínuo", "hard": "Jump squat controlado"}, "instructions": {"easy": "Amplitude confortável e ritmo contínuo.", "normal": "Desce controlado e sobe com intenção.", "hard": "Salto pequeno, aterragem suave e joelhos alinhados."}, "desc": "Ativa pernas e acelera densidade global.", "focus": "Quadríceps, glúteos.", "guide": {"steps": ["Mantém o tronco organizado e o pé todo no chão.", "Na variante hard, salta só o suficiente para manter qualidade.", "Aterragem silenciosa e nova repetição imediata."], "tempo": "Contínuo mas limpo.", "breath": "Respiração ritmada com o movimento.", "mistakes": "Aterragem pesada, joelhos a entrar, perder postura."}}, {"id": "density_push", "variants": {"easy": "Flexão de joelhos", "normal": "Flexão", "hard": "Flexão lenta perto da falha"}, "instructions": {"easy": "Carga reduzida com técnica rigorosa.", "normal": "Flexão clássica limpa e contínua.", "hard": "Descida muito lenta e subida firme perto da falha técnica."}, "desc": "Reforço final de peito e tríceps.", "focus": "Peito, tríceps.", "guide": {"steps": ["Organiza mãos, ombros e tronco antes da primeira repetição.", "Desce sempre até amplitude semelhante.", "Mantém a qualidade mesmo quando surge fadiga."], "tempo": "No hard: 4 segundos a descer.", "breath": "Expira quando empurras.", "mistakes": "Repetições a meio, bacia a cair, ombros a fechar."}}, {"id": "density_pull", "variants": {"easy": "Back widow curta", "normal": "Back widow", "hard": "Swimmer pulls lentos"}, "instructions": {"easy": "Eleva ligeiramente o peito pelo empurrar dos cotovelos.", "normal": "Amplitude maior e aperto escapular no topo.", "hard": "Braçadas lentas sob tensão sem descanso entre fases."}, "desc": "Tração sem equipamento para equilibrar a semana.", "focus": "Costas, dorsais, braços de apoio.", "guide": {"steps": ["Concentra-te em fechar as omoplatas antes de levantar demasiado o peito.", "Evita compensar com o pescoço.", "Mantém a tensão dorsal do início ao fim do bloco."], "tempo": "Lento e controlado.", "breath": "Expira na puxada.", "mistakes": "Movimento curto, ombros encolhidos, pressa."}}, {"id": "density_finish", "variants": {"easy": "Curl auto-resistido", "normal": "Close-grip push-up", "hard": "Pseudo-planche lean push-up"}, "instructions": {"easy": "Usa a mão oposta para criar resistência contínua.", "normal": "Mãos mais juntas para reforçar tríceps.", "hard": "Inclina os ombros para a frente e mantém grande tensão corporal."}, "desc": "Fecho de braço e empurrar.", "focus": "Bíceps ou tríceps/peito conforme variante.", "guide": {"steps": ["Escolhe a variante correspondente à dificuldade e mantém forma limpa.", "No auto-resistido, não deixes a resistência cair a meio da série.", "No push-up, fecha bem os cotovelos e controla a descida."], "tempo": "Sem perder tensão entre repetições.", "breath": "Respiração curta e ritmada.", "mistakes": "Alternar técnica a meio, reduzir demais a amplitude, relaxar no topo."}}]}];

  const difficultyConfig = {
    easy:   { label:'Fácil', work:40, rest:20 },
    normal: { label:'Normal', work:45, rest:15 },
    hard:   { label:'Difícil', work:50, rest:10 }
  };

  const state = {
    intervalId: null,
    phase: 'work',
    exerciseIndex: 0,
    roundIndex: 0,
    remainingTime: 45,
    difficulty: localStorage.getItem(STORAGE.difficulty) || 'normal',
    soundOn: JSON.parse(localStorage.getItem(STORAGE.sound) ?? 'true'),
    voiceOn: JSON.parse(localStorage.getItem(STORAGE.voice) ?? 'true'),
    manualPlanKey: localStorage.getItem(STORAGE.manualPlan) || '',
    activeTab: localStorage.getItem(STORAGE.tab) || 'today',
    viewDate: new Date(),
    lastSpoken: null,
    speechReady: false,
    voices: []
  };

  const $ = id => document.getElementById(id);
  const el = {
    contentScroll: $('contentScroll'),
    dayBadge: $('dayBadge'),
    autoPlanBadge: $('autoPlanBadge'),
    planModeBadge: $('planModeBadge'),
    planTitle: $('planTitle'),
    planFocus: $('planFocus'),
    nowLabel: $('nowLabel'),
    nextLabel: $('nextLabel'),
    nextMeta: $('nextMeta'),
    phaseMeta: $('phaseMeta'),
    exerciseNow: $('exerciseNow'),
    exerciseNext: $('exerciseNext'),
    exerciseInstruction: $('exerciseInstruction'),
    timer: $('timer'),
    phase: $('phase'),
    countdown: $('countdown'),
    progressFill: $('progressFill'),
    progressText: $('progressText'),
    roundValue: $('roundValue'),
    moveValue: $('moveValue'),
    streakValue: $('streakValue'),
    doseValue: $('doseValue'),
    startBtn: $('startBtn'),
    pauseBtn: $('pauseBtn'),
    resetBtn: $('resetBtn'),
    skipBtn: $('skipBtn'),
    planBtn: $('planBtn'),
    markTodayBtn: $('markTodayBtn'),
    soundToggle: $('soundToggle'),
    voiceToggle: $('voiceToggle'),
    soundSwitch: $('soundSwitch'),
    voiceSwitch: $('voiceSwitch'),
    techSteps: $('techSteps'),
    techTempo: $('techTempo'),
    techBreath: $('techBreath'),
    techMistake: $('techMistake'),
    exerciseList: $('exerciseList'),
    techTitle: $('techTitle'),
    techDesc: $('techDesc'),
    techFocus: $('techFocus'),
    techStepsPlan: $('techStepsPlan'),
    techCuePlan: $('techCuePlan'),
    entryDate: $('entryDate'),
    ageInput: $('ageInput'),
    heightInput: $('heightInput'),
    weightInput: $('weightInput'),
    waistInput: $('waistInput'),
    armInput: $('armInput'),
    proteinInput: $('proteinInput'),
    sleepInput: $('sleepInput'),
    saveBodyBtn: $('saveBodyBtn'),
    bmiValue: $('bmiValue'),
    proteinTargetBody: $('proteinTargetBody'),
    leanGainBody: $('leanGainBody'),
    weightGoalBody: $('weightGoalBody'),
    consistencyBadge: $('consistencyBadge'),
    projectionHeadline: $('projectionHeadline'),
    projectionBadge: $('projectionBadge'),
    projectionStrip: $('projectionStrip'),
    projectionChart: $('projectionChart'),
    progressChart: $('progressChart'),
    analysisPill: $('analysisPill'),
    analysisText: $('analysisText'),
    monthLabel: $('monthLabel'),
    calendar: $('calendar'),
    recentList: $('recentList'),
    prevMonthBtn: $('prevMonthBtn'),
    nextMonthBtn: $('nextMonthBtn')
  };

  let audioCtx = null;
  let wakeLock = null;

  function formatSeconds(total) {
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }

  function todayKey() { return new Date().toISOString().slice(0,10); }

  function getJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
    catch { return fallback; }
  }
  function setJSON(key, value) { localStorage.setItem(key, JSON.stringify(value)); }

  function getSessions() {
    return getJSON(STORAGE.sessions, []).sort((a,b)=>a.date.localeCompare(b.date));
  }
  function saveSessions(list) { setJSON(STORAGE.sessions, list.sort((a,b)=>a.date.localeCompare(b.date))); }
  function getBody() { return getJSON(STORAGE.body, {}); }
  function saveBody(entry) { setJSON(STORAGE.body, entry); }
  function getBodyHistory() { return getJSON(STORAGE.bodyHistory, []).sort((a,b)=>a.date.localeCompare(b.date)); }
  function saveBodyHistory(list) { setJSON(STORAGE.bodyHistory, list.sort((a,b)=>a.date.localeCompare(b.date))); }

  function bodyDefaults() {
    const body = getBody();
    if (!body.height && !body.weight) {
      const seeded = { date: todayKey(), age:'', height:'173', weight:'62.6', waist:'', arm:'', protein:'', sleep:'7.5' };
      saveBody(seeded);
      saveBodyHistory([seeded]);
    }
  }

  function completedDatesSet() { return new Set(getSessions().map(s=>s.date)); }
  function calcStreak() {
    const done = completedDatesSet();
    let streak = 0;
    const d = new Date();
    while (true) {
      const key = d.toISOString().slice(0,10);
      if (!done.has(key)) break;
      streak += 1;
      d.setDate(d.getDate()-1);
    }
    return streak;
  }
  function calcAdherence(days=28) {
    const done = completedDatesSet();
    let count = 0;
    for (let i=0;i<days;i++) {
      const d = new Date();
      d.setDate(d.getDate()-i);
      if (done.has(d.toISOString().slice(0,10))) count += 1;
    }
    return Math.round((count / days) * 100);
  }

  function roundsPerSession() { return 3; }
  function currentCfg() { return difficultyConfig[state.difficulty]; }
  function lastCompletedPlanIndex() {
    const sessions = getSessions();
    if (!sessions.length) return -1;
    const last = sessions[sessions.length-1].plan;
    return plans.findIndex(p=>p.key===last);
  }
  function autoPlanIndex() {
    const idx = lastCompletedPlanIndex();
    return idx < 0 ? 0 : (idx + 1) % plans.length;
  }
  function autoPlan() { return plans[autoPlanIndex()]; }
  function selectedPlan() {
    const manual = state.manualPlanKey && plans.find(p=>p.key===state.manualPlanKey);
    return manual || autoPlan();
  }
  function sequenceNextPlan(plan) {
    const idx = plans.findIndex(p=>p.key===plan.key);
    return plans[(idx + 1) % plans.length];
  }
  function currentExercise() { return selectedPlan().exercises[state.exerciseIndex]; }
  function variantName(ex) { return ex.variants[state.difficulty]; }
  function variantInstruction(ex) { return ex.instructions[state.difficulty]; }
  function totalWorkBlocks() { return selectedPlan().exercises.length * roundsPerSession(); }
  function completedWorkBlocks() { return state.roundIndex * selectedPlan().exercises.length + state.exerciseIndex; }
  function progressPct() {
    return Math.max(0, Math.min(100, Math.round((completedWorkBlocks() / totalWorkBlocks()) * 100)));
  }

  function computeNextExercise() {
    const plan = selectedPlan();
    let nextExerciseIndex = state.exerciseIndex + 1;
    let nextRound = state.roundIndex;
    if (nextExerciseIndex >= plan.exercises.length) {
      nextExerciseIndex = 0;
      nextRound += 1;
    }
    if (nextRound >= roundsPerSession()) return { name:'Fim da sessão', meta:'Concluir' };
    const ex = plan.exercises[nextExerciseIndex];
    return { name: variantName(ex), meta:`Ronda ${nextRound+1} · ${nextExerciseIndex+1}/${plan.exercises.length}` };
  }

  function resetCycle() {
    clearInterval(state.intervalId);
    state.intervalId = null;
    state.phase = 'work';
    state.exerciseIndex = 0;
    state.roundIndex = 0;
    state.remainingTime = currentCfg().work;
    state.lastSpoken = null;
    releaseWakeLock();
    renderAll();
  }

  function setManualPlan(planKey) {
    state.manualPlanKey = planKey === 'AUTO' ? '' : planKey;
    localStorage.setItem(STORAGE.manualPlan, state.manualPlanKey);
    resetCycle();
  }

  function saveTodaySession(marked=false) {
    const sessions = getSessions();
    const key = todayKey();
    const plan = selectedPlan().key;
    const exists = sessions.findIndex(s=>s.date===key);
    if (exists >= 0) {
      sessions[exists] = { ...sessions[exists], plan, difficulty:state.difficulty, marked };
    } else {
      sessions.push({ date:key, plan, difficulty:state.difficulty, marked });
    }
    saveSessions(sessions);
    state.manualPlanKey = '';
    localStorage.setItem(STORAGE.manualPlan, '');
  }

  function toggleSessionForDate(key) {
    if (key > todayKey()) return;
    const sessions = getSessions();
    const ix = sessions.findIndex(s=>s.date===key);
    if (ix >= 0) sessions.splice(ix,1);
    else sessions.push({ date:key, plan:selectedPlan().key, difficulty:state.difficulty, marked:true });
    saveSessions(sessions);
    renderAll();
  }

  function clamp(n,min,max) { return Math.max(min, Math.min(max, n)); }
  function proteinRange(weight) {
    if (!weight) return '—';
    const low = Math.round(weight * 1.6);
    const high = Math.round(weight * 2.2);
    return `${low}–${high} g`;
  }
  function proteinStatus(weight, protein) {
    const low = weight ? weight * 1.6 : 0;
    const high = weight ? weight * 2.2 : 0;
    if (!weight) return { low, high, met:false, band:'desconhecida', assumed:true };
    if (!protein) return { low, high, met:false, band:'não registada', assumed:true };
    const gkg = protein / weight;
    let band = 'baixa';
    if (gkg >= 1.6 && gkg <= 2.2) band = 'ótima';
    else if (gkg >= 1.3) band = 'aceitável';
    else if (gkg > 2.2) band = 'alta';
    return { low, high, met: protein >= low, band, assumed:false };
  }
  function sleepFactor(hours) {
    if (!hours) return 0.98;
    if (hours < 6) return 0.78;
    if (hours < 6.5) return 0.86;
    if (hours < 7) return 0.93;
    if (hours <= 8.5) return 1.0;
    if (hours <= 9.5) return 0.98;
    return 0.95;
  }
  function profileFactor(height, weight, waist, age) {
    if (!height || !weight) return 1.0;
    const bmi = weight / ((height/100)**2);
    let factor = 1.0;
    if (bmi >= 20 && bmi <= 22.5) factor += 0.08;
    else if (bmi < 18.5) factor -= 0.06;
    else if (bmi > 26) factor -= 0.07;
    if (waist) {
      const whtr = waist / height;
      if (whtr <= 0.50) factor += 0.05;
      else if (whtr >= 0.55) factor -= 0.06;
    }
    if (age) {
      if (age >= 50) factor -= 0.10;
      else if (age >= 40) factor -= 0.05;
    }
    return clamp(factor,0.82,1.16);
  }
  function difficultyFactor() {
    if (state.difficulty === 'hard') return 1.03;
    if (state.difficulty === 'easy') return 0.94;
    return 1.0;
  }
  function projectionQuality(score) {
    if (score >= 86) return 'Alta';
    if (score >= 72) return 'Boa';
    if (score >= 58) return 'Moderada';
    return 'Baixa';
  }
  function buildProjectionModel({height, weight, waist, age, protein, sleep, adherence}) {
    const profile = profileFactor(height, weight, waist, age);
    const p = proteinStatus(weight, protein);
    const sleepF = sleepFactor(sleep);
    const diffF = difficultyFactor();
    const pureBodyweightF = 0.91;
    const sessions = getSessions().length;
    const planningMode = sessions < 4 && adherence < 15;
    const effectiveAdherence = planningMode ? 85 : adherence;
    const adherenceF = 0.58 + (effectiveAdherence / 100) * 0.47;
    let proteinF = 0.93;
    if (!p.assumed) {
      if (p.band === 'ótima') proteinF = 1.0;
      else if (p.band === 'aceitável') proteinF = 0.95;
      else if (p.band === 'alta') proteinF = 1.01;
      else proteinF = 0.86;
    }
    const basePotential = weight && weight <= 66 ? 2.25 : 2.05;
    let mid = basePotential * profile * sleepF * proteinF * adherenceF * diffF * pureBodyweightF;
    mid = clamp(mid, 0.7, 3.0);
    const low = clamp(Math.round(mid * 0.78 * 10) / 10, 0.6, 2.8);
    const high = clamp(Math.round(mid * 1.22 * 10) / 10, low + 0.4, 3.3);
    const monthlyLow = Math.round((low / 6) * 100) / 100;
    const monthlyHigh = Math.round((high / 6) * 100) / 100;
    const successScore = clamp(Math.round(effectiveAdherence * 0.46 + sleepF*100 * 0.18 + (p.assumed ? 68 : (p.met ? 96 : 74)) * 0.20 + profile*100 * 0.10 + diffF*100 * 0.06), 0, 100);
    const targetWeightLow = weight ? Math.round((weight + low + 0.4) * 10) / 10 : 0;
    const targetWeightHigh = weight ? Math.round((weight + high + 1.0) * 10) / 10 : 0;
    return { low, high, mid, monthlyLow, monthlyHigh, successScore, effectiveAdherence, planningMode, targetWeightLow, targetWeightHigh };
  }

  function projectionSeries(model, days=180) {
    const finalMid = model.mid;
    const k = 0.015;
    const denom = 1 - Math.exp(-k * days);
    const series = [];
    for (let d=1; d<=days; d++) {
      const gain = finalMid * ((1 - Math.exp(-k * d)) / denom);
      series.push({ day:d, gain:Math.round(gain * 1000) / 1000 });
    }
    return series;
  }

  function fillBodyInputs() {
    const body = getBody();
    el.entryDate.value = todayKey();
    el.ageInput.value = body.age || '';
    el.heightInput.value = body.height || '';
    el.weightInput.value = body.weight || '';
    el.waistInput.value = body.waist || '';
    el.armInput.value = body.arm || '';
    el.proteinInput.value = body.protein || '';
    el.sleepInput.value = body.sleep || '';
  }

  function saveBodyFromInputs() {
    const entry = {
      date: el.entryDate.value || todayKey(),
      age: el.ageInput.value || '',
      height: el.heightInput.value || '',
      weight: el.weightInput.value || '',
      waist: el.waistInput.value || '',
      arm: el.armInput.value || '',
      protein: el.proteinInput.value || '',
      sleep: el.sleepInput.value || ''
    };
    saveBody(entry);
    const history = getBodyHistory().filter(x=>x.date!==entry.date);
    history.push(entry);
    saveBodyHistory(history);
    renderAll();
  }

  function drawLineChart(canvas, seriesArr, options={}) {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const w = canvas.clientWidth || 300;
    const h = canvas.clientHeight || 200;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.clearRect(0,0,w,h);

    const margin = { left: 34, right: 12, top: 12, bottom: 26 };
    const plotW = w - margin.left - margin.right;
    const plotH = h - margin.top - margin.bottom;

    const allVals = seriesArr.flatMap(s => s.data.filter(v => typeof v === 'number' && !Number.isNaN(v)));
    if (!allVals.length) {
      ctx.fillStyle = '#6E6E73';
      ctx.font = '13px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(options.emptyText || 'Sem dados suficientes', w/2, h/2);
      return;
    }

    let min = Math.min(...allVals), max = Math.max(...allVals);
    if (min === max) { min -= 1; max += 1; }
    const pad = (max - min) * 0.12;
    min -= pad; max += pad;

    ctx.strokeStyle = '#E6E7EB';
    ctx.lineWidth = 1;
    for (let i=0;i<4;i++) {
      const y = margin.top + (plotH/3) * i;
      ctx.beginPath(); ctx.moveTo(margin.left, y); ctx.lineTo(w - margin.right, y); ctx.stroke();
    }

    ctx.fillStyle = '#6E6E73';
    ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText(max.toFixed(1), margin.left - 6, margin.top + 4);
    ctx.fillText(((max+min)/2).toFixed(1), margin.left - 6, margin.top + plotH/2 + 4);
    ctx.fillText(min.toFixed(1), margin.left - 6, margin.top + plotH + 4);

    const count = Math.max(...seriesArr.map(s=>s.data.length),1);
    function xFor(i) { return margin.left + (plotW * (count===1 ? 0.5 : i/(count-1))); }
    function yFor(v) { return margin.top + plotH - ((v - min) / (max - min)) * plotH; }

    seriesArr.forEach(series => {
      ctx.strokeStyle = series.color;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      let started = false;
      series.data.forEach((v,i) => {
        if (typeof v !== 'number' || Number.isNaN(v)) return;
        const x = xFor(i), y = yFor(v);
        if (!started) { ctx.moveTo(x,y); started = true; } else ctx.lineTo(x,y);
      });
      ctx.stroke();
      series.data.forEach((v,i) => {
        if (typeof v !== 'number' || Number.isNaN(v)) return;
        const x = xFor(i), y = yFor(v);
        ctx.fillStyle = series.color;
        ctx.beginPath(); ctx.arc(x,y,2.6,0,Math.PI*2); ctx.fill();
      });
    });

    if (options.labels && options.labels.length) {
      ctx.textAlign = 'center';
      ctx.fillStyle = '#6E6E73';
      const first = options.labels[0];
      const last = options.labels[options.labels.length - 1];
      ctx.fillText(first, margin.left, h - 8);
      ctx.fillText(last, w - margin.right, h - 8);
    }
  }

  function latestBody() {
    const hist = getBodyHistory();
    return hist.length ? hist[hist.length-1] : getBody();
  }

  function updateBodyPanel() {
    const b = latestBody();
    const height = Number(b.height || 0);
    const weight = Number(b.weight || 0);
    const waist = Number(b.waist || 0);
    const age = Number(b.age || 0);
    const protein = Number(b.protein || 0);
    const sleep = Number(b.sleep || 0);
    const adherence = calcAdherence();

    el.consistencyBadge.textContent = `Consistência ${adherence}%`;
    if (!height || !weight) {
      el.bmiValue.textContent = '—';
      el.proteinTargetBody.textContent = '—';
      el.leanGainBody.textContent = '—';
      el.weightGoalBody.textContent = '—';
      el.projectionBadge.textContent = 'Sem dados';
      drawLineChart(el.projectionChart, [{data:[], color:'#0A84FF'}], { emptyText:'Introduz peso e altura' });
      el.projectionStrip.innerHTML = '';
      return;
    }

    const model = buildProjectionModel({height, weight, waist, age, protein, sleep, adherence});
    const bmi = weight / ((height/100)**2);
    const series = projectionSeries(model, 180);
    const checkpoints = [1,7,14,30,60,90,180].map(day => series[day-1]);

    el.bmiValue.textContent = bmi.toFixed(1);
    el.proteinTargetBody.textContent = proteinRange(weight);
    el.leanGainBody.textContent = `+${model.low} a ${model.high} kg`;
    el.weightGoalBody.textContent = `${model.targetWeightLow}–${model.targetWeightHigh} kg`;
    el.projectionBadge.textContent = projectionQuality(model.successScore);
    el.projectionHeadline.textContent = `Próximo bloco: +${model.monthlyLow}–${model.monthlyHigh} kg/mês`;

    drawLineChart(el.projectionChart, [{ data: series.map(p=>p.gain), color:'#0A84FF' }], { labels:['Dia 1','Dia 180'], emptyText:'Sem projeção' });

    el.projectionStrip.innerHTML = checkpoints.map(item => `
      <div class="projection-day">
        <div class="d">Dia ${item.day}</div>
        <div class="g">+${item.gain.toFixed(2)} kg</div>
      </div>
    `).join('');
  }

  function renderAnalysis() {
    const hist = getBodyHistory().slice(-8);
    const labels = hist.map(x => x.date.slice(5));
    const weightData = hist.map(x => x.weight ? Number(x.weight) : NaN);
    const waistData = hist.map(x => x.waist ? Number(x.waist) : NaN);
    const armData = hist.map(x => x.arm ? Number(x.arm) : NaN);

    drawLineChart(el.progressChart, [
      { data: weightData, color:'#0A84FF' },
      { data: waistData, color:'#7B7F89' },
      { data: armData, color:'#36A269' }
    ], { labels, emptyText:'Adiciona pelo menos dois registos' });

    el.analysisPill.textContent = hist.length >= 2 ? `${hist.length} registos` : '2+ registos';
    if (hist.length >= 2) {
      const first = hist[0], last = hist[hist.length-1];
      const dW = (Number(last.weight || 0) - Number(first.weight || 0)).toFixed(1);
      const dWa = (Number(last.waist || 0) - Number(first.waist || 0)).toFixed(1);
      const dA = (Number(last.arm || 0) - Number(first.arm || 0)).toFixed(1);
      el.analysisText.textContent = `Peso ${dW>=0?'+':''}${dW} kg · cintura ${dWa>=0?'+':''}${dWa} cm · braço ${dA>=0?'+':''}${dA} cm`;
    } else {
      el.analysisText.textContent = 'Adiciona pelo menos dois registos para ver tendência.';
    }
  }

  function renderCalendar() {
    const view = new Date(state.viewDate.getFullYear(), state.viewDate.getMonth(), 1);
    const year = view.getFullYear();
    const month = view.getMonth();
    const today = todayKey();
    const completed = completedDatesSet();
    const first = new Date(year, month, 1);
    const startWeekday = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthName = view.toLocaleDateString('pt-PT', { month:'long', year:'numeric' });

    el.monthLabel.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
    el.calendar.innerHTML = '';
    ['S','T','Q','Q','S','S','D'].forEach(d => {
      const w = document.createElement('div');
      w.className = 'weekday';
      w.textContent = d;
      el.calendar.appendChild(w);
    });
    for (let i=0;i<startWeekday;i++) {
      const blank = document.createElement('div');
      blank.className = 'day future';
      blank.style.visibility = 'hidden';
      el.calendar.appendChild(blank);
    }
    for (let d=1; d<=daysInMonth; d++) {
      const date = new Date(year, month, d);
      const key = date.toISOString().slice(0,10);
      const cell = document.createElement('div');
      cell.className = 'day';
      if (key === today) cell.classList.add('today');
      if (key > today) cell.classList.add('future');
      else if (completed.has(key)) cell.classList.add('done');
      else cell.classList.add('missed');
      cell.textContent = String(d);
      if (key <= today) {
        cell.style.cursor = 'pointer';
        cell.addEventListener('click', ()=>toggleSessionForDate(key));
      }
      el.calendar.appendChild(cell);
    }
  }

  function renderRecent() {
    const recent = getSessions().slice(-6).reverse();
    if (!recent.length) {
      el.recentList.innerHTML = '<div class="recent-item"><span>Nenhuma sessão ainda.</span><span>—</span></div>';
      return;
    }
    el.recentList.innerHTML = recent.map(item => `
      <div class="recent-item">
        <span>${item.date} · Plano ${item.plan}</span>
        <span>${difficultyConfig[item.difficulty]?.label || '—'}</span>
      </div>`).join('');
  }

  function renderPlanPickers() {
    document.querySelectorAll('[data-plan]').forEach(btn => {
      const active = (btn.dataset.plan === 'AUTO' && !state.manualPlanKey) || btn.dataset.plan === state.manualPlanKey;
      btn.classList.toggle('active', active);
    });
    const mode = state.manualPlanKey ? `Manual ${state.manualPlanKey}` : 'Auto';
    el.planModeBadge.textContent = mode;
  }

  function renderExerciseList() {
    const plan = selectedPlan();
    el.exerciseList.innerHTML = plan.exercises.map((ex, idx) => `
      <div class="plan-item ${state.phase==='work' && idx===state.exerciseIndex ? 'active' : ''}">
        <div class="left">
          <div class="name">${variantName(ex)}</div>
          <div class="sub">${variantInstruction(ex)}</div>
        </div>
        <div class="right">${idx+1}/4</div>
      </div>
    `).join('');
  }

  function renderTechnique() {
    const ex = currentExercise();
    const guide = ex.guide;
    el.techSteps.innerHTML = guide.steps.map(step => `<li>${step}</li>`).join('');
    el.techTempo.textContent = guide.tempo;
    el.techBreath.textContent = guide.breath;
    el.techMistake.textContent = guide.mistakes;
    el.techTitle.textContent = variantName(ex);
    el.techDesc.textContent = ex.desc;
    el.techFocus.textContent = ex.focus;
    el.techStepsPlan.innerHTML = guide.steps.map(step => `<li>${step}</li>`).join('');
    el.techCuePlan.textContent = guide.mistakes;
  }

  function renderToday() {
    const plan = selectedPlan();
    const ex = currentExercise();
    const nextInfo = computeNextExercise();
    const sequenceTarget = state.manualPlanKey ? autoPlan().key : sequenceNextPlan(plan).key;

    el.dayBadge.textContent = `Plano ${plan.key}`;
    el.autoPlanBadge.textContent = state.manualPlanKey ? `Auto: ${autoPlan().key}` : `Sequência: ${sequenceTarget}`;
    el.planTitle.textContent = plan.title;
    el.planFocus.textContent = plan.focus;
    el.nowLabel.textContent = state.phase === 'work' ? 'A fazer agora' : 'Agora';
    el.nextLabel.textContent = 'A seguir';
    el.phaseMeta.textContent = state.phase.toUpperCase();
    el.nextMeta.textContent = nextInfo.meta;
    el.exerciseNow.textContent = state.phase === 'work' ? variantName(ex) : 'Descanso';
    el.exerciseNext.textContent = `Seguinte: ${nextInfo.name}`;
    el.exerciseInstruction.textContent = state.phase === 'work' ? variantInstruction(ex) : `Prepara ${nextInfo.name}.`;
    el.timer.textContent = formatSeconds(state.remainingTime);
    el.phase.textContent = state.phase.toUpperCase();
    el.countdown.textContent = state.remainingTime <= 5 && state.remainingTime > 0 ? `Últimos ${state.remainingTime}s` : '';
    el.progressFill.style.width = `${progressPct()}%`;
    el.progressText.textContent = `${progressPct()}% da sessão`;
    el.roundValue.textContent = `${Math.min(state.roundIndex + 1, roundsPerSession())}/${roundsPerSession()}`;
    el.moveValue.textContent = `${state.exerciseIndex + 1}/${selectedPlan().exercises.length}`;
    el.streakValue.textContent = String(calcStreak());
    el.doseValue.textContent = `${currentCfg().work}/${currentCfg().rest}`;
    el.soundSwitch.classList.toggle('on', state.soundOn);
    el.voiceSwitch.classList.toggle('on', state.voiceOn);
    document.querySelectorAll('#difficultySegment button').forEach(btn => btn.classList.toggle('active', btn.dataset.difficulty === state.difficulty));
  }

  function setActiveTab(tab) {
    state.activeTab = ['today','plan','body','progress'].includes(tab) ? tab : 'today';
    localStorage.setItem(STORAGE.tab, state.activeTab);
    document.querySelectorAll('.tabbtn').forEach(btn => btn.classList.toggle('active', btn.dataset.tab===state.activeTab));
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.toggle('active', panel.dataset.panel===state.activeTab));
    el.contentScroll.scrollTo({ top:0, behavior:'smooth' });
    if (state.activeTab === 'body') updateBodyPanel();
    if (state.activeTab === 'progress') { renderAnalysis(); renderCalendar(); renderRecent(); }
    if (state.activeTab === 'plan') { renderExerciseList(); renderTechnique(); }
    if (state.activeTab === 'today') renderToday();
  }

  function renderAll() {
    renderPlanPickers();
    renderToday();
    renderExerciseList();
    renderTechnique();
    updateBodyPanel();
    renderAnalysis();
    renderCalendar();
    renderRecent();
  }

  async function requestWakeLock() {
    try {
      if ('wakeLock' in navigator && !wakeLock) {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', ()=>wakeLock = null);
      }
    } catch (e) {}
  }
  async function releaseWakeLock() {
    try { if (wakeLock) { await wakeLock.release(); wakeLock = null; } } catch (e) {}
  }

  function ensureAudioContext() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    return audioCtx;
  }

  function primeAudio() {
    try {
      const ctx = ensureAudioContext();
      const gain = ctx.createGain();
      gain.gain.value = 0.0001;
      gain.connect(ctx.destination);
      const osc = ctx.createOscillator();
      osc.frequency.value = 440;
      osc.connect(gain);
      osc.start();
      osc.stop(ctx.currentTime + 0.02);
    } catch (e) {}
  }

  function loadVoices() {
    if (!('speechSynthesis' in window)) return;
    const voices = window.speechSynthesis.getVoices();
    if (voices && voices.length) state.voices = voices;
  }

  function bestVoice() {
    const voices = state.voices || [];
    return voices.find(v => /pt-PT/i.test(v.lang) || /pt_PT/i.test(v.lang))
        || voices.find(v => /^pt/i.test(v.lang))
        || voices[0]
        || null;
  }

  function primeSpeech() {
    if (!('speechSynthesis' in window)) return;
    loadVoices();
    try {
      const utter = new SpeechSynthesisUtterance('ok');
      const voice = bestVoice();
      if (voice) utter.voice = voice;
      utter.lang = voice?.lang || 'pt-PT';
      utter.volume = 0.2;
      utter.rate = 1.0;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
      state.speechReady = true;
    } catch (e) {}
  }

  function beep(freq=920, duration=0.12, volume=0.11, type='square') {
    if (!state.soundOn) return;
    try {
      const ctx = ensureAudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.value = freq;
      gain.gain.value = volume;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
      osc.stop(ctx.currentTime + duration);
    } catch (e) {}
  }

  function doubleBeep() {
    beep(920,0.09,0.11,'square');
    setTimeout(()=>beep(1140,0.10,0.11,'square'), 130);
  }

  function vibrate(ms=40) { try { if (state.soundOn && 'vibrate' in navigator) navigator.vibrate(ms); } catch (e) {} }

  function speak(text) {
    if (!state.voiceOn || !('speechSynthesis' in window)) return;
    try {
      loadVoices();
      const utter = new SpeechSynthesisUtterance(text);
      const voice = bestVoice();
      if (voice) utter.voice = voice;
      utter.lang = voice?.lang || 'pt-PT';
      utter.rate = 0.98;
      utter.pitch = 1.0;
      utter.volume = 1.0;
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utter);
    } catch (e) {}
  }

  async function prepareMedia() {
    primeAudio();
    loadVoices();
    await requestWakeLock();
  }

  async function startSession() {
    if (state.intervalId) return;
    await prepareMedia();
    if (state.voiceOn) primeSpeech();
    speak(variantName(currentExercise()));
    state.intervalId = setInterval(() => {
      state.remainingTime -= 1;
      if (state.remainingTime <= 5 && state.remainingTime > 0) {
        if (state.lastSpoken !== state.remainingTime) {
          beep(760 + (5-state.remainingTime)*100, 0.11, 0.10, 'square');
          vibrate(28);
          speak(String(state.remainingTime));
          state.lastSpoken = state.remainingTime;
        }
      }
      if (state.remainingTime <= 0) {
        doubleBeep();
        vibrate(60);
        if (state.phase === 'work') {
          state.phase = 'rest';
          state.remainingTime = currentCfg().rest;
          state.lastSpoken = null;
          speak('descanso');
        } else {
          advanceFromRest();
        }
      }
      renderToday();
    }, 1000);
    renderToday();
  }

  function pauseSession() {
    clearInterval(state.intervalId);
    state.intervalId = null;
    releaseWakeLock();
  }

  function advanceFromRest() {
    state.exerciseIndex += 1;
    if (state.exerciseIndex >= selectedPlan().exercises.length) {
      state.exerciseIndex = 0;
      state.roundIndex += 1;
    }
    if (state.roundIndex >= roundsPerSession()) {
      clearInterval(state.intervalId);
      state.intervalId = null;
      saveTodaySession(false);
      const finishedPlan = selectedPlan().key;
      resetCycle();
      alert(`Sessão concluída. Plano ${finishedPlan} registado.`);
      return;
    }
    state.phase = 'work';
    state.remainingTime = currentCfg().work;
    state.lastSpoken = null;
    speak(variantName(currentExercise()));
  }

  function skipCurrent() {
    pauseSession();
    if (state.phase === 'work') {
      state.phase = 'rest';
      state.remainingTime = currentCfg().rest;
    } else {
      advanceFromRest();
    }
    renderAll();
  }

  document.addEventListener('visibilitychange', async () => {
    if (document.visibilityState === 'visible' && state.intervalId) await requestWakeLock();
  });

  window.addEventListener('resize', () => { renderAnalysis(); updateBodyPanel(); });

  document.querySelectorAll('.tabbtn').forEach(btn => btn.addEventListener('click', ()=>setActiveTab(btn.dataset.tab)));
  document.querySelectorAll('#difficultySegment button').forEach(btn => btn.addEventListener('click', ()=>{ state.difficulty = btn.dataset.difficulty; localStorage.setItem(STORAGE.difficulty, state.difficulty); resetCycle(); }));
  document.querySelectorAll('[data-plan]').forEach(btn => btn.addEventListener('click', ()=>setManualPlan(btn.dataset.plan)));

  el.startBtn.addEventListener('click', startSession);
  el.pauseBtn.addEventListener('click', pauseSession);
  el.resetBtn.addEventListener('click', resetCycle);
  el.skipBtn.addEventListener('click', skipCurrent);
  el.planBtn.addEventListener('click', ()=>setActiveTab('plan'));
  el.markTodayBtn.addEventListener('click', ()=>{ saveTodaySession(true); renderAll(); });
  el.soundToggle.addEventListener('click', async () => { state.soundOn = !state.soundOn; localStorage.setItem(STORAGE.sound, JSON.stringify(state.soundOn)); await prepareMedia(); doubleBeep(); renderToday(); });
  el.voiceToggle.addEventListener('click', async () => { state.voiceOn = !state.voiceOn; localStorage.setItem(STORAGE.voice, JSON.stringify(state.voiceOn)); await prepareMedia(); if (state.voiceOn) { primeSpeech(); setTimeout(()=>speak('voz ativa'), 120); } renderToday(); });
  el.saveBodyBtn.addEventListener('click', saveBodyFromInputs);
  el.prevMonthBtn.addEventListener('click', ()=>{ state.viewDate.setMonth(state.viewDate.getMonth() - 1); renderCalendar(); });
  el.nextMonthBtn.addEventListener('click', ()=>{ state.viewDate.setMonth(state.viewDate.getMonth() + 1); renderCalendar(); });

  loadVoices();
  if ('speechSynthesis' in window && typeof speechSynthesis.onvoiceschanged !== 'undefined') speechSynthesis.onvoiceschanged = loadVoices;
  bodyDefaults();
  fillBodyInputs();
  resetCycle();
  setActiveTab(state.activeTab);
  renderAll();
  prepareMedia();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const reg = await navigator.serviceWorker.register('./sw.js');
        reg.update();
      } catch (e) {}
    });
  }
})();
