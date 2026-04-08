
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
    planPreview:'mb22_plan_preview'
  };

  const plans = [
    { key:'A', title:'A · Push hipertrofia', focus:'Peito, ombros e tríceps. Dia dominante para o teu objetivo.', exercises:[
      { variants:{easy:'Flexão de joelhos',normal:'Flexão',hard:'Flexão diamante'}, instructions:{easy:'Joelhos no chão, corpo alinhado, desce até quase tocar no chão e sobe sem colapsar a lombar.',normal:'Mãos sob os ombros, glúteos e abdómen contraídos, descida controlada e subida firme.',hard:'Mãos mais juntas, cotovelos fechados, desce limpo e sobe com intenção.'}, desc:'Pressão horizontal base para hipertrofia do peito.', focus:'Peitoral, deltoide anterior, tríceps.', cues:'2–3 segundos a descer, expira ao subir, mantém o tronco rígido.' },
      { variants:{easy:'Flexão isométrica alta',normal:'Flexão lenta',hard:'Flexão 1.5 reps'}, instructions:{easy:'Mantém a posição a meio do movimento com tensão contínua.',normal:'Desce em 4 segundos, pausa curta em baixo e sobe com controlo.',hard:'Desce, sobe só até meio, desce outra vez e só depois sobe por completo.'}, desc:'Aumenta o tempo sob tensão sem carga externa.', focus:'Peito e tríceps sob fadiga.', cues:'Amplitude limpa e sem descanso completo no topo.' },
      { variants:{easy:'Pike hold',normal:'Pike push-up',hard:'Pike press pulses'}, instructions:{easy:'Ancas altas, mãos firmes no chão, mantém a carga nos ombros.',normal:'Cabeça desce entre as mãos e sobe empurrando forte o chão.',hard:'Pulsações curtas perto do fundo para prolongar a tensão.'}, desc:'Bloco vertical para ombros e tríceps.', focus:'Deltoides, tríceps.', cues:'Empurra o chão, pescoço neutro e anca alta.' },
      { variants:{easy:'Scapular push-up',normal:'Close-grip push-up',hard:'Pseudo-planche lean push-up'}, instructions:{easy:'Só move as escápulas, sem dobrar muito os cotovelos.',normal:'Mãos mais próximas, cotovelos junto ao corpo e controlo total.',hard:'Inclina os ombros ligeiramente à frente das mãos para subir a exigência.'}, desc:'Fecho técnico para tríceps, serrátil e peito.', focus:'Tríceps, serrátil, peito.', cues:'Não deixes a lombar cair nem aceleres a descida.' }
    ]},
    { key:'B', title:'B · Pernas + glúteos', focus:'Quadríceps, glúteos e cadeia posterior. Dia dominante inferior para estética e longevidade.', exercises:[
      { variants:{easy:'Air squat',normal:'Tempo squat',hard:'Squat 1.5 reps'}, instructions:{easy:'Agacha até amplitude confortável e sobe sem perder alinhamento.',normal:'Desce em 3 segundos, pequena pausa em baixo e sobe forte.',hard:'Desce, sobe até meio, volta a descer e sobe por completo.'}, desc:'Base de quadríceps e glúteos sem material.', focus:'Quadríceps, glúteos.', cues:'Pés firmes, joelhos acompanham a linha do pé e tronco estável.' },
      { variants:{easy:'Split squat assistido',normal:'Split squat',hard:'Split squat 1.5 reps'}, instructions:{easy:'Base estável e apoio leve na parede se precisares.',normal:'Desce vertical, joelho de trás aponta ao chão e sobe com o pé da frente.',hard:'Usa a repetição e meia para aumentar tensão local.'}, desc:'Trabalho unilateral para carga local real.', focus:'Quadríceps, glúteos.', cues:'Peso no pé da frente, sem inclinar demasiado o tronco.' },
      { variants:{easy:'Glute bridge',normal:'Single-leg bridge',hard:'Long-lever bridge'}, instructions:{easy:'Eleva a anca e aperta glúteos no topo.',normal:'Trabalha uma perna de cada vez sem rodar a bacia.',hard:'Afasta os calcanhares para aumentar a exigência posterior.'}, desc:'Extensão da anca para glúteos e posteriores.', focus:'Glúteos, isquiotibiais.', cues:'Pausa de 1 segundo no topo, sem hiperextensão lombar.' },
      { variants:{easy:'Frog pump',normal:'Frog pump com pausa',hard:'Hamstring walkout'}, instructions:{easy:'Solas dos pés juntas e joelhos abertos; eleva a anca e aperta forte os glúteos.',normal:'Repete o frog pump mas segura 1–2 segundos no topo de cada repetição.',hard:'Parte da ponte de glúteos e caminha com os calcanhares para a frente e para trás sem deixar a anca cair.'}, desc:'Fecho glúteo/posterior para dar mais volume útil ao bloco inferior.', focus:'Glúteos e isquiotibiais.', cues:'Pensa em apertar os glúteos no topo e manter costelas controladas.' }
    ]},
    { key:'C', title:'C · Pull + braços', focus:'Costas e bíceps em peso corporal puro.', exercises:[
      { variants:{easy:'Back widow curta',normal:'Back widow',hard:'Back widow com pausa'}, instructions:{easy:'No chão, empurra os cotovelos contra o solo e eleva ligeiramente o peito.',normal:'Eleva o peito do chão através dos cotovelos e aperta as escápulas.',hard:'Mantém 1–2 segundos no topo de cada repetição.'}, desc:'Uma das poucas formas úteis de “remo” sem equipamento.', focus:'Costas altas, dorsais, braços.', cues:'Peito aberto, queixo neutro e aperto escapular claro.' },
      { variants:{easy:'Reverse snow angels',normal:'Prone W raises',hard:'Prone Y-T-W combo'}, instructions:{easy:'No chão, desenha um arco lento com os braços.',normal:'Levanta os braços em W com pausa curta.',hard:'Alterna Y, T e W sem perder controlo.'}, desc:'Costas altas e deltoide posterior.', focus:'Trapézio médio, romboides, deltoide posterior.', cues:'Sem impulso, pescoço relaxado e movimento limpo.' },
      { variants:{easy:'Superman pull',normal:'Superman pull com pausa',hard:'Swimmer pulls lentos'}, instructions:{easy:'Eleva ligeiramente o tronco e puxa os cotovelos para trás.',normal:'Pausa um segundo quando os cotovelos chegam atrás.',hard:'Alterna braçadas lentas sob tensão contínua.'}, desc:'Complemento para dorsais e controlo escapular.', focus:'Costas altas, dorsais, lombar isométrica.', cues:'Evita hiperextender a lombar e mantém a amplitude útil.' },
      { variants:{easy:'Curl auto-resistido',normal:'Curl auto-resistido lento',hard:'Hammer curl auto-resistido'}, instructions:{easy:'Uma mão resiste à outra durante a flexão do cotovelo.',normal:'Sobe em 2 segundos, desce em 4 mantendo resistência manual.',hard:'Pegada neutra e resistência máxima controlada.'}, desc:'Bíceps sem pesos externos usando auto-resistência.', focus:'Bíceps e braquiorradial.', cues:'Resistência contínua em toda a amplitude, sem relaxar no topo.' }
    ]},
    { key:'D', title:'D · Core + braços', focus:'Core rígido e braço complementar.', exercises:[
      { variants:{easy:'Prancha',normal:'Hollow hold',hard:'Body-saw plank'}, instructions:{easy:'Corpo em linha reta, glúteos contraídos e pescoço neutro.',normal:'Lombar colada ao chão e costelas baixas.',hard:'Na prancha, desloca ligeiramente o corpo para a frente e para trás.'}, desc:'Anti-extensão para transferir força.', focus:'Core anterior.', cues:'Respiração curta, tensão total e sem perder posição.' },
      { variants:{easy:'Side plank',normal:'Side plank dip',hard:'Long-lever side plank'}, instructions:{easy:'Corpo alinhado e anca alta.',normal:'Desce e sobe a anca sob controlo.',hard:'Aumenta a alavanca estendendo mais o corpo.'}, desc:'Anti-flexão lateral e oblíquos.', focus:'Oblíquos, glúteo médio.', cues:'Não deixes a bacia rodar ou cair.' },
      { variants:{easy:'Shoulder taps',normal:'Shoulder taps lentos',hard:'Plank to pike'}, instructions:{easy:'Alterna toques sem rodar o tronco.',normal:'Executa mais lento e mais limpo.',hard:'Da prancha sobe a anca em pike e regressa.'}, desc:'Core anti-rotação com carga nos ombros.', focus:'Core, serrátil, ombro.', cues:'Mãos sob os ombros e bacia estável.' },
      { variants:{easy:'Extensão curta de tríceps',normal:'Bodyweight triceps extension',hard:'Diamond push-up pulses'}, instructions:{easy:'De joelhos, leva a testa ao chão e estende os cotovelos.',normal:'Aumenta a alavanca do corpo para carregar mais os tríceps.',hard:'Pulsações curtas em flexão diamante perto da falha técnica.'}, desc:'Braço complementar sem acessórios.', focus:'Tríceps.', cues:'Cotovelos fechados e controlo absoluto da descida.' }
    ]},
    { key:'E', title:'E · Full body density', focus:'Sessão global curta e densa com novo reforço de peito e braços.', exercises:[
      { variants:{easy:'Air squat',normal:'Squat tempo contínuo',hard:'Jump squat controlado'}, instructions:{easy:'Amplitude confortável e ritmo contínuo.',normal:'Desce controlado e sobe com intenção.',hard:'Salto pequeno e aterragem suave.'}, desc:'Ativa pernas e acelera densidade global.', focus:'Quadríceps, glúteos.', cues:'Mantém o alinhamento e pousa suave.' },
      { variants:{easy:'Flexão de joelhos',normal:'Flexão',hard:'Flexão lenta perto da falha'}, instructions:{easy:'Carga reduzida, mas técnica impecável.',normal:'Clássica e limpa.',hard:'4 segundos a descer, sobe firme.'}, desc:'Reforço final de peito e tríceps.', focus:'Peito e tríceps.', cues:'Empurra o chão com intenção e sem quebrar o tronco.' },
      { variants:{easy:'Back widow curta',normal:'Back widow',hard:'Swimmer pulls lentos'}, instructions:{easy:'Eleva ligeiramente o peito do chão via cotovelos.',normal:'Amplitude maior e aperto escapular.',hard:'Braçadas lentas sob tensão contínua.'}, desc:'Tração sem equipamento para equilibrar a semana.', focus:'Costas altas, dorsais, braços.', cues:'Escápulas firmes, sem roubo nem balanço.' },
      { variants:{easy:'Curl auto-resistido',normal:'Close-grip push-up',hard:'Pseudo-planche lean push-up'}, instructions:{easy:'Uma mão resiste à outra durante toda a flexão.',normal:'Mãos mais juntas para dar ênfase a tríceps.',hard:'Inclina os ombros à frente das mãos e mantém controlo total.'}, desc:'Fecho com braço e empurrar.', focus:'Bíceps/tríceps e peito.', cues:'Último bloco perto da falha técnica limpa.' }
    ]}
  ];

  const state = {
    intervalId:null,
    phase:'work',
    exerciseIndex:0,
    roundIndex:0,
    remainingTime:45,
    difficulty:localStorage.getItem(STORAGE.difficulty) || localStorage.getItem('mb8_difficulty') || 'normal',
    soundOn:JSON.parse(localStorage.getItem(STORAGE.sound) ?? localStorage.getItem('mb8_sound') ?? 'true'),
    voiceOn:JSON.parse(localStorage.getItem(STORAGE.voice) ?? 'true'),
    selectedPlanMode:localStorage.getItem(STORAGE.selectedPlan) || 'auto',
    profileMode:localStorage.getItem(STORAGE.profileMode) || 'chest_arms',
    autoPlanKey:localStorage.getItem(STORAGE.autoPlan) || '',
    autoPlanPos:Number(localStorage.getItem(STORAGE.autoPlanPos) || 0),
    activeTab:localStorage.getItem(STORAGE.activeTab) || localStorage.getItem('mb11_tab') || 'today',
    viewDate:new Date(),
    lastSpoken:null,
    planPreview:JSON.parse(localStorage.getItem(STORAGE.planPreview) || '{}')
  };

  const difficultyConfig = {
    easy:{ label:'Fácil', work:40, rest:20 },
    normal:{ label:'Normal', work:45, rest:15 },
    hard:{ label:'Difícil', work:50, rest:10 }
  };

  const $ = id => document.getElementById(id);
  const el = {
    dayBadge:$('dayBadge'), planTitle:$('planTitle'), planFocus:$('planFocus'), planStatus:$('planStatus'), nextPlan:$('nextPlan'),
    exerciseName:$('exerciseName'), exerciseInstruction:$('exerciseInstruction'), nextExerciseLine:$('nextExerciseLine'), timer:$('timer'), phase:$('phase'), countdown:$('countdown'), progressFill:$('progressFill'), progressText:$('progressText'),
    roundValue:$('roundValue'), moveValue:$('moveValue'), streakValue:$('streakValue'), doseValue:$('doseValue'), startBtn:$('startBtn'), pauseBtn:$('pauseBtn'), resetBtn:$('resetBtn'), skipBtn:$('skipBtn'), techBtn:$('techBtn'), markTodayBtn:$('markTodayBtn'),
    soundToggle:$('soundToggle'), voiceToggle:$('voiceToggle'), soundSwitch:$('soundSwitch'), voiceSwitch:$('voiceSwitch'), exerciseList:$('exerciseList'), techTitle:$('techTitle'), techDesc:$('techDesc'), techSetup:$('techSetup'), techExecution:$('techExecution'), techBreathing:$('techBreathing'), techMistake:$('techMistake'), techRegression:$('techRegression'), techFocus:$('techFocus'), techCues:$('techCues'), profileSummary:$('profileSummary'),
    rotationGrid:$('rotationGrid'), entryDate:$('entryDate'), ageInput:$('ageInput'), heightInput:$('heightInput'), weightInput:$('weightInput'), waistInput:$('waistInput'), armInput:$('armInput'), proteinInput:$('proteinInput'), sleepInput:$('sleepInput'), saveBodyBtn:$('saveBodyBtn'), photoInput:$('photoInput'), photoDateInput:$('photoDateInput'), photoAngleInput:$('photoAngleInput'), addPhotoBtn:$('addPhotoBtn'), removePhotoBtn:$('removePhotoBtn'), photoCompareGrid:$('photoCompareGrid'), photoCompareText:$('photoCompareText'),
    bmiValue:$('bmiValue'), proteinTargetBody:$('proteinTargetBody'), leanGainBody:$('leanGainBody'), weightGoalBody:$('weightGoalBody'), consistencyBadge:$('consistencyBadge'), projectionFill:$('projectionFill'), projectionText:$('projectionText'), visualGainValue:$('visualGainValue'), monthlyGainValue:$('monthlyGainValue'), projectionChart:$('projectionChart'), projectionChecks:$('projectionChecks'), projectionDetail:$('projectionDetail'), bodyInsight:$('bodyInsight'),
    analysisPill:$('analysisPill'), analysisText:$('analysisText'), progressChart:$('progressChart'), weekSummaryPill:$('weekSummaryPill'), monthLabel:$('monthLabel'), calendar:$('calendar'), recentList:$('recentList'), prevMonthBtn:$('prevMonthBtn'), nextMonthBtn:$('nextMonthBtn'), jumpTodayBtn:$('jumpTodayBtn'), weeklyRecommendationPill:$('weeklyRecommendationPill'), weeklySummaryGrid:$('weeklySummaryGrid'), weeklyRecommendationText:$('weeklyRecommendationText')
  };

  let audioCtx = null;
  let wakeLock = null;
  let mediaPrimed = false;
  let preferredVoice = null;

  function pad2(n){ return String(n).padStart(2,'0'); }
  function middayLocal(date = new Date()){ const d = new Date(date); d.setHours(12,0,0,0); return d; }
  function localDateKey(date = new Date()){ const d = middayLocal(date); return `${d.getFullYear()}-${pad2(d.getMonth()+1)}-${pad2(d.getDate())}`; }
  function dateFromKey(key){ const [y,m,d] = String(key).split('-').map(Number); return new Date(y, (m||1)-1, d||1, 12,0,0,0); }
  function addDaysToKey(key, delta){ const d = dateFromKey(key); d.setDate(d.getDate()+delta); return localDateKey(d); }
  function todayKey(){ return localDateKey(new Date()); }
  function formatSeconds(total){ const m=Math.floor(total/60), s=total%60; return `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`; }
  function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }

  function getSessions(){ try{ return JSON.parse(localStorage.getItem(STORAGE.sessions) || '[]').sort((a,b)=>a.date.localeCompare(b.date)); } catch { return []; } }
  function saveSessions(list){ localStorage.setItem(STORAGE.sessions, JSON.stringify(list.sort((a,b)=>a.date.localeCompare(b.date)))); }
  function getBody(){ try{ return JSON.parse(localStorage.getItem(STORAGE.body) || '{}'); } catch { return {}; } }
  function saveBody(entry){ localStorage.setItem(STORAGE.body, JSON.stringify(entry)); }
  function getBodyHistory(){ try{ return JSON.parse(localStorage.getItem(STORAGE.bodyHistory) || '[]').sort((a,b)=>a.date.localeCompare(b.date)); } catch { return []; } }
  function saveBodyHistory(list){ localStorage.setItem(STORAGE.bodyHistory, JSON.stringify(list.sort((a,b)=>a.date.localeCompare(b.date)))); }

  function sanitizePhotoEntry(p){
    if(!p || typeof p !== 'object') return null;
    const dataUrl = p.dataUrl || p.src || '';
    if(!dataUrl) return null;
    const date = /^\d{4}-\d{2}-\d{2}$/.test(String(p.date||'')) ? String(p.date) : todayKey();
    const angle = ['front','three_quarter','side'].includes(String(p.angle||'')) ? String(p.angle) : '';
    return { date, dataUrl, angle };
  }
  function getPhotos(){ try{ return (JSON.parse(localStorage.getItem(STORAGE.photos) || '[]') || []).map(sanitizePhotoEntry).filter(Boolean).sort((a,b)=>a.date.localeCompare(b.date)); } catch { return []; } }
  function savePhotos(list){ localStorage.setItem(STORAGE.photos, JSON.stringify(list.map(sanitizePhotoEntry).filter(Boolean).sort((a,b)=>a.date.localeCompare(b.date)).slice(-24))); }
  function monthKey(key){ return String(key || '').slice(0,7); }
  function latestMonthlyPhotos(){ const list=getPhotos(); const seen=new Set(); const picks=[]; for(let i=list.length-1;i>=0;i--){ const mk=monthKey(list[i].date); if(!seen.has(mk)){ picks.push(list[i]); seen.add(mk); if(picks.length===2) break; } } return picks; }
  function angleLabel(angle){ if(angle==='three_quarter') return '3/4'; if(angle==='side') return 'Lateral'; if(angle==='front') return 'Frente'; return ''; }
  function formatShortDate(key){ return dateFromKey(key).toLocaleDateString('pt-PT',{day:'2-digit',month:'short',year:'numeric'}); }
  function compressImageFile(file, maxSide=1200, quality=0.78){ return new Promise((resolve,reject)=>{ const reader=new FileReader(); reader.onload=()=>{ const img=new Image(); img.onload=()=>{ let w=img.width, h=img.height; const scale=Math.min(1, maxSide / Math.max(w,h)); w=Math.max(1, Math.round(w*scale)); h=Math.max(1, Math.round(h*scale)); const canvas=document.createElement('canvas'); canvas.width=w; canvas.height=h; const ctx=canvas.getContext('2d'); ctx.drawImage(img,0,0,w,h); resolve(canvas.toDataURL('image/jpeg', quality)); }; img.onerror=reject; img.src=reader.result; }; reader.onerror=reject; reader.readAsDataURL(file); }); }

  function bodyDefaults(){
    const body = getBody();
    if (!body.height && !body.weight){
      const seeded = { date:todayKey(), age:'', height:'173', weight:'62.6', waist:'', arm:'', protein:'', sleep:'7.5' };
      saveBody(seeded);
      saveBodyHistory([seeded]);
    }
  }

  function completedDatesSet(){ return new Set(getSessions().map(s => s.date)); }
  function calcStreak(){ let streak=0, key=todayKey(); const done=completedDatesSet(); while(done.has(key)){ streak+=1; key=addDaysToKey(key,-1); } return streak; }
  function calcAdherence(days=28){ let count=0, key=todayKey(); const done=completedDatesSet(); for(let i=0;i<days;i++){ if(done.has(key)) count += 1; key=addDaysToKey(key,-1); } return Math.round((count/days)*100); }

  function sessionsInLastDays(days=7){ let count=0, key=todayKey(); const done=completedDatesSet(); for(let i=0;i<days;i++){ if(done.has(key)) count += 1; key=addDaysToKey(key,-1); } return count; }
  function weeklyTargetSessions(){ return state.profileMode==='definition' ? 5 : 6; }
  function rotationSequence(){ if(state.profileMode==='balanced') return ['A','B','C','D','E']; if(state.profileMode==='definition') return ['E','A','B','C','D']; if(state.profileMode==='lower_glutes') return ['B','A','C','B','E','D']; return ['A','B','C','D','A','E']; }
  function profileMeta(){ if(state.profileMode==='balanced') return { title:'Equilibrado', text:'Sequência A-B-C-D-E com distribuição estável entre empurrar, puxar, pernas e core.' }; if(state.profileMode==='definition') return { title:'Definição geral', text:'Começa em densidade global e mantém frequência ligeiramente menor para facilitar aderência e controlo da fadiga.' }; if(state.profileMode==='lower_glutes') return { title:'Pernas + glúteos', text:'Usa B-A-C-B-E-D para repetir mais cedo o dia inferior e reforçar glúteos, quadríceps e cadeia posterior.' }; return { title:'Peito + braços', text:'Usa A-B-C-D-A-E para dar mais frequência útil a peito, tríceps e braço sem apagar pernas e costas.' }; }
  function volumeTierForPlan(planKey=currentPlan().key){ const a7=calcAdherence(7), a28=calcAdherence(28); const blended=Math.round(a7*0.65 + a28*0.35); let rounds=3, label='Base'; if(blended<46){ rounds=2; label='Alívio'; } else if(blended>=82){ rounds=4; label='Alto'; } if(state.profileMode==='chest_arms' && ['A','D'].includes(planKey) && blended>=65) { rounds=Math.max(rounds,4); label='Alto'; } if(state.profileMode==='lower_glutes' && ['B','E'].includes(planKey) && blended>=65){ rounds=Math.max(rounds,4); label='Alto'; } if(state.profileMode==='definition' && blended>=82 && planKey!=='E'){ rounds=Math.min(rounds,3); label=rounds===2 ? 'Alívio' : 'Base'; } return { rounds, label, blended, a7, a28 }; }
  function weeklySummary(){ const s7=sessionsInLastDays(7); const s28=sessionsInLastDays(28); const adherence=calcAdherence(28); const target=weeklyTargetSessions(); const volume=volumeTierForPlan(); const gap=Math.max(target-s7,0); let status='Em linha'; let action='Mantém a rotina. O ganho visual depende agora de repetires semanas sólidas.'; if(s7>=target && adherence>=75){ status='Forte'; action = volume.rounds>=4 ? 'A semana está forte. Mantém o volume alto nos blocos chave e tenta repetir esta consistência.' : 'A semana já aguenta mais trabalho. A app sobe o volume automático nos blocos chave.'; } else if(gap>0){ status=gap>=2 ? 'Atrasado' : 'A recuperar'; const priority = state.profileMode==='lower_glutes' ? 'Prioriza primeiro os dias B e E se queres puxar pernas e glúteos.' : state.profileMode==='chest_arms' ? 'Prioriza primeiro os dias A e D se queres maximizar peito e braços.' : 'Prioriza primeiro os dias dominantes do perfil que escolheste.'; action = `Faltam ${gap} sessão(ões) para o alvo semanal. ${priority}`; } else if(adherence<55){ status='Irregular'; action='Aderência baixa. Reduz a ambição de intensidade máxima e volta a fechar 5–6 sessões antes de tentar subir volume.'; } return { s7, s28, adherence, target, volume, status, action }; }

  function syncAutoPlanState(){ const seq=rotationSequence(); state.autoPlanPos=((Number(state.autoPlanPos)||0)%seq.length + seq.length) % seq.length; state.autoPlanKey = seq[state.autoPlanPos]; localStorage.setItem(STORAGE.autoPlanPos, String(state.autoPlanPos)); localStorage.setItem(STORAGE.autoPlan, state.autoPlanKey); }
  function inferAutoPlanPosFromHistory(){ const seq=rotationSequence(); const sessions=getSessions(); if(!sessions.length) return 0; const savedKey = state.autoPlanKey || localStorage.getItem(STORAGE.autoPlan) || ''; const savedIdx = seq.indexOf(savedKey); if(savedIdx>=0) return savedIdx; const last=sessions[sessions.length-1].plan; const firstMatch=seq.indexOf(last); return firstMatch>=0 ? (firstMatch+1)%seq.length : 0; }
  function ensureAutoPlan(){ const seq=rotationSequence(); const savedPos=Number(localStorage.getItem(STORAGE.autoPlanPos)); if(Number.isInteger(savedPos) && savedPos>=0) state.autoPlanPos = savedPos % seq.length; else state.autoPlanPos = inferAutoPlanPosFromHistory(); syncAutoPlanState(); }
  function currentPlanAutoIndex(){ ensureAutoPlan(); const idx=plans.findIndex(p=>p.key===rotationSequence()[state.autoPlanPos]); return idx>=0?idx:0; }
  function selectedPlanIndex(){ if(state.selectedPlanMode!=='auto'){ const idx=plans.findIndex(p=>p.key===state.selectedPlanMode); if(idx>=0) return idx; } return currentPlanAutoIndex(); }
  function currentPlan(){ return plans[selectedPlanIndex()]; }
  function nextPlanObj(){ if(state.selectedPlanMode!=='auto') return plans[(selectedPlanIndex()+1)%plans.length]; const seq=rotationSequence(); const nextKey=seq[(state.autoPlanPos+1)%seq.length]; return plans.find(p=>p.key===nextKey) || plans[0]; }
  function advanceAutoPlan(){ const seq=rotationSequence(); state.autoPlanPos = (state.autoPlanPos+1)%seq.length; syncAutoPlanState(); }
  function setPlanMode(mode){ state.selectedPlanMode = ['auto','A','B','C','D','E'].includes(mode) ? mode : 'auto'; localStorage.setItem(STORAGE.selectedPlan, state.selectedPlanMode); resetCycle(); renderAll(); }
  function setProfileMode(mode){ state.profileMode = ['balanced','chest_arms','definition','lower_glutes'].includes(mode) ? mode : 'chest_arms'; localStorage.setItem(STORAGE.profileMode, state.profileMode); state.autoPlanPos=0; syncAutoPlanState(); resetCycle(); renderAll(); }
  function currentCfg(){ return difficultyConfig[state.difficulty]; }
  function roundsPerSession(planKey=currentPlan().key){ return volumeTierForPlan(planKey).rounds; }
  function currentExercise(){ return currentPlan().exercises[state.exerciseIndex]; }
  function currentVariantName(ex){ return ex.variants[state.difficulty]; }
  function currentVariantInstruction(ex){ return ex.instructions[state.difficulty]; }
  function totalWorkBlocks(){ return currentPlan().exercises.length * roundsPerSession(currentPlan().key); }
  function completedWorkBlocks(){ return state.roundIndex * currentPlan().exercises.length + state.exerciseIndex; }
  function progressPct(){ return clamp(Math.round((completedWorkBlocks()/totalWorkBlocks())*100),0,100); }
  function nextExerciseAfterCurrentBlock(){ let exIndex=state.exerciseIndex+1, round=state.roundIndex; if(exIndex>=currentPlan().exercises.length){ exIndex=0; round+=1; } if(round>=roundsPerSession()) return null; return { exercise:currentPlan().exercises[exIndex], index:exIndex, round:round+1 }; }

  function refreshVoices(){ if(!('speechSynthesis' in window)) return; const voices=window.speechSynthesis.getVoices() || []; preferredVoice = voices.find(v=>/^pt-PT$/i.test(v.lang)) || voices.find(v=>/^pt/i.test(v.lang)) || voices.find(v=>/Portugal/i.test(v.name)) || voices[0] || null; }
  async function primeMedia(){ try{ if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)(); if(audioCtx.state==='suspended') await audioCtx.resume(); }catch{} refreshVoices(); mediaPrimed=true; }
  if('speechSynthesis' in window){ refreshVoices(); window.speechSynthesis.onvoiceschanged = refreshVoices; }
  ['click','touchstart'].forEach(evt => document.addEventListener(evt, () => { if(!mediaPrimed) primeMedia(); }, {passive:true}));

  function beep(freq=900, duration=0.12, volume=0.09){
    if(!state.soundOn) return;
    try{
      if(!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if(audioCtx.state==='suspended') audioCtx.resume();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type='sine'; osc.frequency.value=freq; gain.gain.setValueAtTime(volume, audioCtx.currentTime);
      osc.connect(gain); gain.connect(audioCtx.destination); osc.start();
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
      osc.stop(audioCtx.currentTime + duration);
    }catch{}
  }
  function vibrate(ms=40){ try{ if(state.soundOn && 'vibrate' in navigator) navigator.vibrate(ms); } catch{} }
  function speak(text){ if(!state.voiceOn || !('speechSynthesis' in window) || !text) return; try{ window.speechSynthesis.cancel(); const utter=new SpeechSynthesisUtterance(text); utter.lang=preferredVoice?.lang || 'pt-PT'; if(preferredVoice) utter.voice=preferredVoice; utter.rate=1; utter.pitch=1; setTimeout(()=>window.speechSynthesis.speak(utter),30); }catch{} }
  async function requestWakeLock(){ try{ if('wakeLock' in navigator && !wakeLock){ wakeLock = await navigator.wakeLock.request('screen'); wakeLock.addEventListener('release',()=>{ wakeLock=null; }); } }catch{} }
  async function releaseWakeLock(){ try{ if(wakeLock){ await wakeLock.release(); wakeLock=null; } }catch{} }
  document.addEventListener('visibilitychange', async ()=>{ if(document.visibilityState==='visible' && state.intervalId) await requestWakeLock(); });

  function saveTodaySession(marked=false){ const sessions=getSessions(); const key=todayKey(); if(sessions.some(s=>s.date===key)) return false; sessions.push({ date:key, plan:currentPlan().key, difficulty:state.difficulty, marked, profile:state.profileMode, rounds:roundsPerSession(currentPlan().key) }); saveSessions(sessions); if(state.selectedPlanMode==='auto') advanceAutoPlan(); return true; }
  function toggleSessionForDate(key){ if(key>todayKey()) return; const sessions=getSessions(); const ix=sessions.findIndex(s=>s.date===key); if(ix>=0) sessions.splice(ix,1); else sessions.push({ date:key, plan:currentPlan().key, difficulty:state.difficulty, marked:true }); saveSessions(sessions); renderAll(); }

  function resetCycle(){ clearInterval(state.intervalId); state.intervalId=null; state.phase='work'; state.exerciseIndex=0; state.roundIndex=0; state.remainingTime=currentCfg().work; state.lastSpoken=null; releaseWakeLock(); }
  function advanceFromRest(){ state.exerciseIndex += 1; if(state.exerciseIndex>=currentPlan().exercises.length){ state.exerciseIndex=0; state.roundIndex += 1; } if(state.roundIndex>=roundsPerSession()){ clearInterval(state.intervalId); state.intervalId=null; saveTodaySession(false); resetCycle(); renderAll(); alert('Sessão concluída.'); return; } state.phase='work'; state.remainingTime=currentCfg().work; state.lastSpoken=null; speak(currentVariantName(currentExercise())); }
  async function startSession(){ if(state.intervalId) return; await primeMedia(); await requestWakeLock(); speak(currentVariantName(currentExercise())); state.intervalId = setInterval(()=>{ state.remainingTime -= 1; if(state.remainingTime <= 5 && state.remainingTime > 0){ if(state.lastSpoken !== state.remainingTime){ beep(780 + (5-state.remainingTime)*90, 0.12, 0.08); vibrate(30); speak(String(state.remainingTime)); state.lastSpoken = state.remainingTime; } } if(state.remainingTime <= 0){ beep(state.phase==='work' ? 620 : 880, 0.18, 0.11); vibrate(60); if(state.phase==='work'){ state.phase='rest'; state.remainingTime=currentCfg().rest; state.lastSpoken=null; speak('descanso'); } else advanceFromRest(); } renderToday(); }, 1000); renderToday(); }
  function pauseSession(){ clearInterval(state.intervalId); state.intervalId=null; releaseWakeLock(); }
  function skipCurrent(){ pauseSession(); if(state.phase==='work'){ state.phase='rest'; state.remainingTime=currentCfg().rest; } else advanceFromRest(); renderToday(); }

  function setActiveTab(tab){ state.activeTab = ['today','plan','body','progress'].includes(tab) ? tab : 'today'; localStorage.setItem(STORAGE.activeTab, state.activeTab); document.querySelectorAll('.tabbtn').forEach(btn=>btn.classList.toggle('active', btn.dataset.tab===state.activeTab)); document.querySelectorAll('.tab-panel').forEach(panel=>panel.classList.toggle('active', panel.dataset.panel===state.activeTab)); window.scrollTo({top:0, behavior:'smooth'}); }
  function initTabs(){ document.querySelectorAll('.tabbtn').forEach(btn=>btn.addEventListener('click', ()=>setActiveTab(btn.dataset.tab))); setActiveTab(state.activeTab); }
  function proteinRange(weight){ if(!weight) return '100–138 g'; const low=Math.round(weight*1.6), high=Math.round(weight*2.2); return `${low}–${high} g`; }
  function proteinStatus(weight, protein){ const low=weight*1.6, high=weight*2.2; if(!protein) return { assumed:true, low, high, band:'neutra', met:false }; if(protein<low) return { assumed:false, low, high, band:'baixa', met:false }; if(protein<=high) return { assumed:false, low, high, band:'ótima', met:true }; return { assumed:false, low, high, band:'alta', met:true }; }
  function sleepFactor(sleep){ if(!sleep) return 0.96; if(sleep>=7) return 1; if(sleep>=6.5) return 0.96; return 0.9; }
  function profileFactor(height,weight,waist,age){ const bmi=weight/((height/100)**2); let factor=1; if(bmi>=20 && bmi<=22.5) factor+=0.08; else if(bmi<18.5) factor-=0.06; else if(bmi>26) factor-=0.07; if(waist){ const whtr=waist/height; if(whtr<=0.50) factor+=0.05; else if(whtr>=0.55) factor-=0.06; } if(age){ if(age>=50) factor-=0.1; else if(age>=40) factor-=0.05; } return clamp(factor,0.82,1.16); }
  function difficultyFactor(){ if(state.difficulty==='hard') return 1.03; if(state.difficulty==='easy') return 0.94; return 1; }
  function buildProjectionModel({height,weight,waist,age,protein,sleep,adherence}){ const profile=profileFactor(height,weight,waist,age); const p=proteinStatus(weight,protein); const sleepF=sleepFactor(sleep); const diffF=difficultyFactor(); const sessions=getSessions().length; const planningMode=sessions<4 && adherence<15; const effectiveAdherence=planningMode ? 85 : adherence; const adherenceF = 0.58 + (effectiveAdherence/100)*0.47; let proteinF=0.93; if(!p.assumed){ if(p.band==='ótima') proteinF=1; else if(p.band==='alta') proteinF=1.01; else proteinF=0.86; } const pureBodyweightF=0.91; const basePotential = weight && weight<=66 ? 2.25 : 2.05; let mid = basePotential * profile * sleepF * proteinF * adherenceF * diffF * pureBodyweightF; mid = clamp(mid,0.7,3); const low = clamp(Math.round(mid*0.78*10)/10,0.6,2.8); const high = clamp(Math.round(mid*1.22*10)/10,low+0.4,3.3); const likely=Math.round((((low+high)/2))*100)/100; const monthlyLow=Math.round((low/6)*100)/100; const monthlyHigh=Math.round((high/6)*100)/100; const monthlyLikely=Math.round((likely/6)*100)/100; const avgDailyLikely=Math.round((likely*1000)/180); const sleepScore=clamp(Math.round(sleepF*100),0,100); const proteinScore=p.assumed ? 68 : clamp(Math.round(proteinF*100),0,100); const bodyScore=clamp(Math.round(profile*100),0,100); const visibilityScore=clamp(Math.round(effectiveAdherence*0.42 + sleepScore*0.18 + proteinScore*0.18 + bodyScore*0.12 + 10),0,100); return { low, high, likely, monthlyLow, monthlyHigh, monthlyLikely, avgDailyLikely, visibilityScore, planningMode, effectiveAdherence, targetWeightLow:Math.round((weight+low+0.4)*10)/10, targetWeightHigh:Math.round((weight+high+1)*10)/10 }; }
  function visibilityLabel(score){ if(score>=82) return 'Alta'; if(score>=68) return 'Boa'; if(score>=54) return 'Moderada'; return 'Lenta'; }

  function normalizeName(str){ return String(str||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); }
  function exerciseGuide(name){
    const n=normalizeName(name);
    const out=(intro,setup,execution,breathing,mistake,regression,focus,cues)=>({intro,setup,execution,breathing,mistake,regression,focus,cues});
    if(n.includes('flexao diamante')) return out('Variação de flexão com as mãos mais juntas para carregar mais tríceps e parte interna do peito.','Coloca as mãos no chão abaixo do peito, próximas entre si, formando um losango ou simplesmente muito juntas. Joelhos, anca e ombros apontam para a frente e o corpo fica numa prancha rígida.','Desce o tronco em bloco até o peito se aproximar das mãos. Os cotovelos ficam junto ao corpo. Empurra o chão e sobe sem perder a linha da anca.','Inspira a descer. Expira com força ao subir. Mantém 2–3 segundos na descida e subida firme.','Abrir demasiado os cotovelos ou deixar a lombar ceder.','Faz a mesma versão com joelhos apoiados ou encurta a amplitude.','Tríceps, peitoral e deltóide anterior.','Corpo em prancha, mãos juntas, cotovelos fechados.');
    if(n.includes('flexao de joelhos')) return out('Flexão simplificada para manter o padrão de empurrar com menos carga total.','Apoia mãos ligeiramente mais largas do que os ombros e joelhos no chão. Da cabeça aos joelhos faz uma linha reta; não dobres a cintura.','Desce peito e ombros ao mesmo tempo até quase tocar no chão. Empurra o chão e regressa sem deixar a barriga cair primeiro.','Inspira na descida. Expira ao subir. Mantém ritmo controlado e sem “saltos”.','Levar a anca demasiado atrás ou dobrar só o pescoço em vez de baixar o tronco inteiro.','Aproxima ligeiramente as mãos de uma superfície mais alta, como parede ou bancada, se mesmo assim for pesado.','Peito, tríceps e ombro anterior.','Abdómen firme, pescoço neutro, peito desce entre as mãos.');
    if(n.includes('flexao 1.5')) return out('Flexão com repetição e meia para prolongar o tempo sob tensão sem precisar de mais carga.','Assume a posição de flexão normal: mãos sob os ombros, corpo alinhado e glúteos ativos.','Desce até baixo. Sobe apenas até meio. Volta a descer. Depois sobe totalmente. Isso conta como uma repetição.','Inspira durante a descida longa. Expira na subida final.','Fazer a meia repetição demasiado rápida e perder tensão no peito.','Troca para flexão normal lenta.','Peito e tríceps com forte tempo sob tensão.','Lento, limpo, sem descansar no topo.');
    if(n.includes('flexao lenta')) return out('Flexão clássica, mas com excêntrica lenta para aumentar estímulo muscular.','Mãos abaixo dos ombros, pés juntos ou afastados conforme equilíbrio, abdómen e glúteos contraídos.','Desce em 4 segundos, faz pausa curta perto do fundo e sobe de forma contínua até estender os cotovelos sem relaxar totalmente.','Inspira durante os 4 segundos de descida. Expira a subir.','Acelerar demasiado na fase de descida ou quebrar a lombar no final.','Faz a versão de joelhos com o mesmo ritmo lento.','Peito, tríceps, ombro anterior.','Conta mentalmente 1-2-3-4 a descer.');
    if(n.startsWith('flexao') || n==='flexao') return out('Flexão clássica de chão. É o principal exercício de peito desta app.','Mãos ligeiramente mais largas que os ombros, dedos apontados para a frente, corpo em prancha desde a cabeça aos calcanhares.','Baixa peito e ombros juntos até amplitude controlada. Empurra o chão até regressar à posição alta sem perder a linha do corpo.','Inspira a descer. Expira a subir. Usa descida controlada e subida firme.','Descer com a barriga e depois subir com a anca, em vez de mover o corpo como uma peça única.','Passa para joelhos no chão ou reduz amplitude.','Peito, tríceps, deltóide anterior e core.','Peito entre as mãos, glúteos ativos, pescoço neutro.');
    if(n.includes('pike hold')) return out('Isometria de ombros com anca alta. Serve para aprender a direção de força do pike push-up.','Coloca mãos no chão à largura dos ombros e eleva a anca, formando um V invertido. Joelhos podem ficar ligeiramente fletidos.','Mantém a posição, empurrando o chão e tentando levar a cabeça entre os braços. O peso fica mais nas mãos do que nos pés.','Respira curto e controlado pelo nariz. Mantém tensão contínua.','Deixar os ombros colapsar e carregar tudo nos pés.','Aproxima mais os pés das mãos ou dobra mais os joelhos.','Ombros, serrátil e tronco.','Empurra o chão e afasta os ombros das orelhas.');
    if(n.includes('pike push-up') || n.includes('pike press pulses')) return out('Empurrar vertical sem material, com grande foco nos ombros.','Parte da posição de V invertido: mãos firmes no chão, anca alta e cabeça entre os braços.','Dobra os cotovelos e leva a cabeça na direção do espaço entre as mãos. Depois empurra forte o chão até regressar. Na versão pulses, faz pequenas repetições perto do fundo.','Inspira ao descer. Expira ao empurrar. Mantém descida controlada.','Baixar a cabeça à frente das mãos, transformando o movimento numa flexão normal.','Faz pike hold ou encurta a amplitude.','Deltóide, tríceps, parte superior do peito.','Anca alta, cabeça entre as mãos, empurra para cima.');
    if(n.includes('scapular push-up')) return out('Movimento curto só das escápulas. Parece simples, mas é técnico.','Posição de prancha alta com cotovelos quase estendidos o tempo todo.','Sem dobrar muito os cotovelos, deixa o peito afundar ligeiramente entre os ombros e depois afasta o chão arredondando suavemente a parte alta das costas.','Respiração calma. Movimento curto e controlado.','Transformar isto numa flexão normal, dobrando demasiado os cotovelos.','Faz em joelhos.','Serrátil, controlo escapular e estabilidade do ombro.','Braços longos, peito desce pouco, omoplatas movem-se.');
    if(n.includes('close-grip push-up')) return out('Flexão com mãos mais juntas para puxar mais por tríceps.','Mãos debaixo do peito, um pouco mais próximas do que na flexão clássica. Corpo em prancha.','Desce mantendo os cotovelos junto ao tronco. Sobe empurrando sem abrir os cotovelos.','Inspira a descer. Expira ao subir.','Mãos demasiado fechadas a ponto de perder alinhamento do punho.','Abre ligeiramente as mãos ou faz joelhos no chão.','Tríceps, peito e ombro anterior.','Cotovelos junto ao corpo e tronco rígido.');
    if(n.includes('pseudo-planche lean push-up')) return out('Flexão avançada em que o tronco inclina à frente para aumentar a carga sobre peito, ombro e tríceps.','Começa em prancha alta e leva os ombros alguns centímetros à frente das mãos antes de descer.','Mantém essa inclinação e faz a flexão sem deixar a anca cair. Quanto mais à frente estiverem os ombros, mais pesado fica.','Inspira a descer. Expira ao subir com controlo.','Inclinar tanto que o punho perde conforto ou a lombar cede.','Reduz a inclinação ou usa close-grip push-up.','Peito superior, ombro anterior, tríceps.','Ombros ligeiramente à frente das mãos, corpo duro como uma tábua.');
    if(n.includes('frog pump')) return out('Ponte curta com plantas dos pés juntas para concentrar o esforço nos glúteos.','Deita-te, junta as plantas dos pés e deixa os joelhos cair para fora. Calcanhares relativamente perto da bacia.','Eleva a anca, aperta forte os glúteos no topo e desce sem relaxar totalmente. Na versão com pausa, segura 1–2 segundos lá em cima.','Expira ao subir. Inspira a descer. Ritmo controlado sem balanço.','Empurrar com a lombar em vez de acabar o movimento a apertar os glúteos.','Troca para glute bridge clássico com pés no chão.','Glúteo máximo e cadeia posterior proximal.','Costelas baixas, topo curto mas forte, glúteos apertam no fim.');
    if(n.includes('air squat') || n.includes('tempo squat') || n.includes('squat 1.5') || n.includes('jump squat')) return out('Agachamento sem carga. Base para pernas e glúteos.','Pés à largura dos ombros ou pouco mais abertos, pontas ligeiramente para fora e peito aberto.','Empurra a anca para trás e para baixo. Desce até amplitude confortável mantendo o pé todo no chão. Sobe empurrando o chão. Na 1.5 reps, faz meia subida e volta a descer antes de subir totalmente.','Inspira a descer. Expira a subir. Na versão tempo, usa 3 segundos na descida.','Levantar os calcanhares, joelhos a colapsar para dentro ou arredondar demasiado a lombar.','Reduz a profundidade e usa uma cadeira imaginária atrás para orientar a anca.','Quadríceps, glúteos e adutores.','Pé inteiro no chão, joelho acompanha a ponta do pé.');
    if(n.includes('split squat')) return out('Agachamento em passada fixa para dar mais carga a cada perna.','Dá um passo à frente e outro atrás, como se estivesses em carris, não numa linha apertada. Tronco alto e peso maioritariamente na perna da frente.','Desce na vertical até o joelho de trás aproximar o chão. Sobe a empurrar o chão com o pé da frente.','Inspira a descer. Expira a subir. Vai devagar para manter equilíbrio.','Passo demasiado curto, fazendo o joelho da frente ir muito à frente sem controlo.','Apoia de leve uma mão na parede.','Quadríceps, glúteo e estabilidade da anca.','Base estável, tronco alto, força na perna da frente.');
    if(n.includes('glute bridge') || n.includes('single-leg bridge') || n.includes('long-lever bridge')) return out('Ponte de glúteos para extensão da anca.','Deita-te de costas. Pés no chão e joelhos dobrados; na single-leg estende uma perna, na long-lever afasta mais os calcanhares do glúteo.','Empurra o chão com os calcanhares e eleva a anca até alinhar joelhos, bacia e ombros. Desce controlado sem pousar completamente se quiseres manter tensão.','Expira ao subir. Inspira a descer. Pausa 1 segundo no topo.','Arquear a lombar em vez de subir com glúteos.','Usa a ponte bilateral normal.','Glúteos e posteriores da coxa.','Calcanhares firmes, costelas baixas, aperta glúteos no topo.');
    if(n.includes('reverse lunge')) return out('Passada atrás para trabalhar perna sem exigir tanta mobilidade frontal.','Começa de pé, pés à largura da bacia.','Leva uma perna para trás, pousa a ponta do pé e desce ambos os joelhos. Regressa puxando pelo pé da frente. Alterna lados.','Inspira a descer. Expira a regressar.','Atirar o tronco demasiado para a frente ou empurrar só com a perna de trás.','Encurta a passada e segura numa parede se precisares.','Quadríceps, glúteos e equilíbrio.','Passo atrás limpo, tronco alto, força na perna da frente.');
    if(n.includes('hamstring walkout')) return out('Exercício de posteriores exigente feito a partir da ponte.','Deita-te de costas, sobe para posição de ponte com os calcanhares no chão.','Mantendo a anca elevada, vai caminhando com os calcanhares para a frente em passos curtos. Depois regressa da mesma forma.','Respiração curta e estável. Não deixes a anca cair.','Dar passos longos e perder a bacia alta logo no início.','Faz ponte de glúteos normal.','Isquiotibiais, glúteos e core posterior.','Passos curtos, anca alta, ritmo controlado.');
    if(n.includes('back widow')) return out('Tração de chão para costas altas. É pouco intuitivo, mas muito útil sem material.','Deita-te de costas. Dobra os braços e coloca os cotovelos no chão, próximos do tronco. Antebraços podem apontar para cima.','Empurra os cotovelos contra o chão como se quisesses fazer um remo. O peito sobe alguns centímetros e as escápulas apertam. Desce controlado.','Expira ao subir o peito. Inspira a descer. Segura 1 segundo no topo se conseguires.','Empurrar com a lombar ou com a cabeça em vez de usar cotovelos e escápulas.','Faz a versão curta com amplitude pequena.','Costas altas, romboides, trapézio médio, algum braço.','Cotovelos enterram no chão, peito abre, omoplatas apertam.');
    if(n.includes('reverse snow angels') || n.includes('prone w raises') || n.includes('y-t-w')) return out('Trabalho de costas altas e ombro posterior em decúbito ventral.','Deita-te de barriga para baixo, testa perto do chão e abdómen ligeiramente ativo.','Levanta ligeiramente os braços do chão e desenha o padrão indicado: arco largo nos snow angels, braços em W nos W raises, ou sequência Y-T-W no combo. Faz tudo sem pressa.','Respira normalmente e mantém o pescoço relaxado.','Levantar demasiado a cabeça e contrair o pescoço mais do que as costas.','Reduz a amplitude e faz menos letras no combo.','Trapézio médio, romboides e deltóide posterior.','Braços flutuam do chão, pescoço solto, movimento limpo.');
    if(n.includes('superman pull') || n.includes('swimmer pulls')) return out('Extensão leve do tronco com puxada dos braços para ativar costas e controlo escapular.','De barriga para baixo, pernas longas e braços à frente. Eleva pouco o peito, sem forçar demasiado a lombar.','Puxa os cotovelos para trás como se quisesses meter os bolsos de trás nas axilas. Na versão swimmer, alterna braçadas lentas.','Expira na puxada. Inspira quando estendes novamente os braços.','Subir demasiado o tronco e sentir tudo na lombar.','Eleva menos o peito e mantém só os braços ativos.','Costas altas, dorsais e estabilizadores escapulares.','Peito só ligeiramente fora do chão, cotovelos puxam atrás.');
    if(n.includes('curl auto-resistido') || n.includes('hammer curl auto-resistido')) return out('Curl de bíceps sem pesos, usando uma mão para resistir à outra.','Fica de pé ou sentado. A mão que trabalha tenta fletir o cotovelo enquanto a outra mão faz força contrária. Na versão hammer, usa pegada neutra.','Sobe lentamente contra a resistência da outra mão. Desce ainda mais devagar sem aliviar a pressão. A sensação deve ser de esforço real durante toda a amplitude.','Expira a subir. Inspira a descer. Tensão contínua.','Resistência demasiado fraca no início e só forte no fim.','Diminui a resistência para fazer o movimento completo e limpo.','Bíceps e braquiorradial.','A mão que resiste deve acompanhar todo o percurso.');
    if(n.includes('prancha') || n.includes('hollow hold') || n.includes('body-saw plank')) return out('Bloco de core anti-extensão. O objetivo é travar a lombar.','Na prancha: antebraços ou mãos no chão e corpo alinhado. No hollow hold: deitado de costas, lombar colada ao chão e braços/pernas mais longos.','Mantém costelas baixas e glúteos contraídos. No body-saw, move o corpo alguns centímetros para a frente e para trás sem perder a posição.','Respiração curta, baixa e controlada.','Subir demasiado a anca ou deixar a lombar afundar.','Encurta a alavanca: joelhos no chão ou pernas mais dobradas no hollow hold.','Core anterior, reto abdominal e estabilizadores profundos.','Lombar neutra ou colada, costelas baixas, tensão total.');
    if(n.includes('side plank')) return out('Prancha lateral para oblíquos e estabilidade da bacia.','Apoia um antebraço no chão, cotovelo abaixo do ombro. Pernas alinhadas.','Eleva a anca e mantém o corpo em linha. Na versão dip, desce e sobe a anca com controlo.','Respira curto e mantém o tronco firme.','Rodar o peito para o chão ou deixar a anca cair.','Dobra o joelho de baixo para dar apoio.','Oblíquos, quadrado lombar e glúteo médio.','Ombro longe da orelha, anca alta, corpo comprido.');
    if(n.includes('shoulder taps') || n.includes('plank to pike')) return out('Exercício de estabilidade anti-rotação com carga no ombro.','Começa em prancha alta, mãos sob os ombros e pés um pouco mais afastados para mais estabilidade.','Toca alternadamente num ombro com a mão oposta sem rodar a bacia. Na versão plank to pike, leva a anca acima e regressa à prancha.','Expira em cada toque ou na subida para pike. Inspira entre repetições.','Balançar a anca de um lado ao outro a cada toque.','Alarga a base dos pés e vai mais devagar.','Core, serrátil, ombro e algum tríceps.','Quadril quieto, chão bem empurrado, toque curto.');
    if(n.includes('triceps extension') || n.includes('extensao curta de triceps')) return out('Extensão de tríceps em cadeia fechada, parecida com um “skull crusher” com peso corporal.','Ajoelha-te no chão e coloca as mãos ou antebraços à frente do corpo. Quanto mais à frente estiveres, mais difícil fica.','Dobra os cotovelos levando a testa na direção do chão. Depois estende os cotovelos para regressar, sem transformar isto numa flexão normal.','Inspira a descer. Expira a estender.','Mover demasiado os ombros e perder o foco nos cotovelos.','Aproxima os joelhos das mãos para encurtar a alavanca.','Tríceps e estabilidade do ombro.','Cotovelos apontam para a frente, movimento nasce nos cotovelos.');
    return out('Exercício do plano atual.','Começa numa posição estável e confortável.','Executa lentamente, mantendo controlo total da amplitude útil.','Respira de forma regular e não aceleres desnecessariamente.','Perder posição para “fazer mais repetições”.','Reduz amplitude ou escolhe modo Fácil.','Grupo muscular do plano atual.','Técnica limpa acima de velocidade.');
  }
  function projectionNarrative(model){
    const avgDaily=Math.round((model.likely*1000)/180);
    const line = model.planningMode ? 'Sem histórico suficiente, a linha provável assume que vais treinar com boa regularidade nas próximas semanas.' : `A linha provável usa a tua consistência recente (${model.effectiveAdherence}%), o sono, a proteína e a dificuldade escolhida.`;
    return {
      avgDaily,
      headline:'O gráfico mostra ganho acumulado de massa magra desde hoje. Não é ganho “desse dia”; é o total acumulado até esse dia.',
      line,
      action:'Para puxar a linha azul escura para cima, o que mais pesa é subir consistência, aproximar as séries da fadiga técnica e manter proteína diária perto do alvo.'
    };
  }
  function getPreviewIndex(plan=currentPlan()){ 
    const raw = state.planPreview?.[plan.key];
    const idx = Number(raw);
    if(Number.isInteger(idx) && idx>=0 && idx<plan.exercises.length) return idx;
    return Math.min(state.exerciseIndex, plan.exercises.length-1);
  }
  function setPreviewIndex(idx, planKey=currentPlan().key){
    const plan = plans.find(p=>p.key===planKey) || currentPlan();
    const safe = Math.max(0, Math.min(Number(idx)||0, plan.exercises.length-1));
    state.planPreview = { ...(state.planPreview || {}), [planKey]: safe };
    localStorage.setItem(STORAGE.planPreview, JSON.stringify(state.planPreview));
    updatePlanPreviewPanels();
    renderExerciseList();
  }
  function previewExerciseData(plan=currentPlan()){
    const index = getPreviewIndex(plan);
    return { plan, index, exercise: plan.exercises[index] };
  }
  function updatePlanPreviewPanels(){
    const {plan, index, exercise} = previewExerciseData();
    updateTechniqueCard(exercise, index, plan);
    renderGuideVisual(plan, index);
  }
  function updateTechniqueCard(ex){
    const name=currentVariantName(ex);
    const g=exerciseGuide(name);
    el.techTitle.textContent=`Técnica · ${name}`;
    el.techDesc.textContent=g.intro;
    el.techSetup.textContent=g.setup;
    el.techExecution.textContent=g.execution;
    el.techBreathing.textContent=g.breathing;
    el.techMistake.textContent=g.mistake;
    el.techRegression.textContent=g.regression;
    el.techFocus.textContent=g.focus;
    el.techCues.textContent=g.cues;
  }

  function renderProfileModeSummary(){ const meta=profileMeta(); document.querySelectorAll('[data-profile-mode]').forEach(btn=>btn.classList.toggle('active', btn.dataset.profileMode===state.profileMode)); if(el.profileSummary) el.profileSummary.innerHTML=`<div class="label">Lógica atual</div><div style="margin-top:6px;color:var(--text);font-weight:760">${meta.title}</div><div class="micro-copy">${meta.text}</div>`; }
  function renderWeeklySummary(){ if(!el.weeklySummaryGrid) return; const w=weeklySummary(); el.weeklyRecommendationPill.textContent=w.status; el.weeklySummaryGrid.innerHTML=`<div class="weekly-card"><div class="v">${w.s7}/${w.target}</div><div class="l">Sessões / alvo 7d</div></div><div class="weekly-card"><div class="v">${w.adherence}%</div><div class="l">Consistência 28d</div></div><div class="weekly-card"><div class="v">${w.volume.label}</div><div class="l">Volume automático</div></div>`; el.weeklyRecommendationText.innerHTML=`<div class="label">Recomendação objetiva</div><div style="margin-top:6px;color:var(--text);font-weight:760">${w.action}</div><div class="micro-copy">Nesta versão, o plano de hoje corre com <strong>${w.volume.rounds} rondas</strong> quando a aderência justifica. Isso evita volume alto em semanas fracas e sobe carga total quando estás consistente.</div>`; }
  function renderPhotoCompare(){ if(!el.photoCompareGrid) return; const picks=latestMonthlyPhotos(); if(!picks.length){ el.photoCompareGrid.innerHTML=''; el.photoCompareText.textContent='Sem fotos locais ainda. Guarda uma foto frontal, 3/4 ou lateral e repete no mês seguinte.'; return; } const labels=['Mais recente','Anterior']; el.photoCompareGrid.innerHTML=picks.map((p,i)=>`<div class="photo-frame"><img src="${p.dataUrl}" alt="Foto de progresso ${p.date}"><div class="meta"><strong>${labels[i] || 'Foto'}</strong>${formatShortDate(p.date)}${p.angle ? ` · ${angleLabel(p.angle)}` : ''}</div></div>`).join(''); if(picks.length===1){ el.photoCompareText.innerHTML='Existe 1 foto local. Atribui a data certa e tenta repetir com ângulo, luz e distância parecidos dentro de 3–5 semanas.'; return; } const days=Math.max(1, Math.round((dateFromKey(picks[0].date)-dateFromKey(picks[1].date))/86400000)); el.photoCompareText.innerHTML=`Comparação local entre <strong>${formatShortDate(picks[1].date)}</strong> e <strong>${formatShortDate(picks[0].date)}</strong> (${days} dias). Idealmente compara o mesmo ângulo nas duas fotos.`; }

  function renderPlanModes(){ document.querySelectorAll('[data-plan-mode]').forEach(btn=>btn.classList.toggle('active', btn.dataset.planMode===state.selectedPlanMode)); const meta=profileMeta(); el.planStatus.textContent = state.selectedPlanMode==='auto' ? `Auto · próxima sessão ${state.autoPlanKey} · ${meta.title}` : `Manual · plano ${state.selectedPlanMode}`; }
  function renderRotation(){ el.rotationGrid.innerHTML = plans.map(p => `<div class="rotation-card ${p.key===currentPlan().key ? 'active' : ''}" data-plan-key="${p.key}"><strong>${p.title}</strong><span>${p.focus}</span></div>`).join(''); document.querySelectorAll('.rotation-card').forEach(card=>card.addEventListener('click', ()=>setPlanMode(card.dataset.planKey))); }
  function renderExerciseList(){ const upcoming=nextExerciseAfterCurrentBlock(); el.exerciseList.innerHTML = currentPlan().exercises.map((ex,idx)=>{ const active = state.phase==='work' ? idx===state.exerciseIndex : (upcoming && idx===upcoming.index); const g=exerciseGuide(currentVariantName(ex)); return `<div class="plan-item ${active ? 'active' : ''}"><div class="left"><div class="name">${currentVariantName(ex)}</div><div class="sub">${g.intro}</div><div class="hint">${g.cues}</div></div><div class="right">${idx+1}/4</div></div>`; }).join(''); }
  function renderToday(){ const plan=currentPlan(); const ex=currentExercise(); const upcoming=nextExerciseAfterCurrentBlock(); const nextPlan=nextPlanObj(); const cfg=currentCfg(); el.dayBadge.textContent = state.selectedPlanMode==='auto' ? `Auto ${plan.key}` : `Plano ${plan.key}`; el.planTitle.textContent = plan.title; el.planFocus.textContent = plan.focus; el.nextPlan.textContent = state.selectedPlanMode==='auto' ? `Auto · seguinte ${nextPlan.key}` : 'Modo manual'; el.exerciseName.textContent = state.phase==='work' ? currentVariantName(ex) : 'Descanso'; el.exerciseInstruction.textContent = state.phase==='work' ? currentVariantInstruction(ex) : 'Respira fundo, recupera e prepara a próxima série.'; el.nextExerciseLine.textContent = upcoming ? `Seguinte: ${currentVariantName(upcoming.exercise)} · ronda ${upcoming.round}` : 'Seguinte: fim da sessão'; el.timer.textContent = formatSeconds(state.remainingTime); el.phase.textContent = state.phase.toUpperCase(); el.countdown.textContent = state.phase==='work' && state.remainingTime<=5 && state.remainingTime>0 ? `Últimos ${state.remainingTime}s` : ''; el.progressFill.style.width = `${progressPct()}%`; el.progressText.textContent = `${progressPct()}% da sessão`; el.roundValue.textContent = `${Math.min(state.roundIndex+1, roundsPerSession())}/${roundsPerSession()}`; el.moveValue.textContent = `${Math.min(state.exerciseIndex+1, currentPlan().exercises.length)}/${currentPlan().exercises.length}`; el.streakValue.textContent = String(calcStreak()); el.doseValue.textContent = `${cfg.work}/${cfg.rest}`; el.soundSwitch.classList.toggle('on', state.soundOn); el.voiceSwitch.classList.toggle('on', state.voiceOn); updateTechniqueCard(ex); document.querySelectorAll('#difficultySegment button').forEach(btn=>btn.classList.toggle('active', btn.dataset.difficulty===state.difficulty)); renderPlanModes(); renderExerciseList(); renderRotation(); }

  function fillBodyInputs(){ const body=getBody(); el.entryDate.value = body.date || todayKey(); el.ageInput.value=body.age || ''; el.heightInput.value=body.height || ''; el.weightInput.value=body.weight || ''; el.waistInput.value=body.waist || ''; el.armInput.value=body.arm || ''; el.proteinInput.value=body.protein || ''; el.sleepInput.value=body.sleep || ''; }
  function fillPhotoInputs(){ if(el.photoDateInput) el.photoDateInput.value = todayKey(); if(el.photoAngleInput) el.photoAngleInput.value = 'front'; }
  function saveBodyFromInputs(){ const entry={ date:el.entryDate.value || todayKey(), age:el.ageInput.value || '', height:el.heightInput.value || '', weight:el.weightInput.value || '', waist:el.waistInput.value || '', arm:el.armInput.value || '', protein:el.proteinInput.value || '', sleep:el.sleepInput.value || '' }; saveBody(entry); const history=getBodyHistory().filter(x=>x.date!==entry.date); history.push(entry); saveBodyHistory(history); fillBodyInputs(); updateBodyPanel(); renderAnalysis(); }
  function latestBody(){ const hist=getBodyHistory(); return hist.length ? hist[hist.length-1] : getBody(); }

  function buildProjectionSeries(model){ const likely=model.likely; const points=[]; for(let day=0; day<=180; day++){ const progress=day/180; const curve=Math.pow(progress,0.86); points.push({ day, low:+(model.low*curve).toFixed(3), likely:+(likely*curve).toFixed(3), high:+(model.high*curve).toFixed(3) }); } return points; }
  function svgLine(points,key,width,height,pad,maxY){ return points.map((p,i)=>{ const x=pad+(p.day/180)*(width-pad*2); const y=height-pad-((p[key]||0)/maxY)*(height-pad*2); return `${i===0?'M':'L'} ${x.toFixed(1)} ${y.toFixed(1)}`; }).join(' '); }
  function renderProjectionChart(model){ const points=buildProjectionSeries(model); const width=320, height=170, pad=16, maxY=Math.max(...points.map(p=>p.high),0.1); const lowPath=svgLine(points,'low',width,height,pad,maxY); const likelyPath=svgLine(points,'likely',width,height,pad,maxY); const highPath=svgLine(points,'high',width,height,pad,maxY); el.projectionChart.innerHTML = `<svg viewBox="0 0 ${width} ${height}" class="svg-host" aria-label="Projeção diária"><line x1="16" y1="150" x2="304" y2="150" stroke="#D9DCE4" stroke-width="1"/><line x1="16" y1="95" x2="304" y2="95" stroke="#ECEEF3" stroke-width="1"/><line x1="16" y1="40" x2="304" y2="40" stroke="#ECEEF3" stroke-width="1"/><path d="${lowPath}" fill="none" stroke="#B8BCC6" stroke-width="2" stroke-linecap="round"/><path d="${highPath}" fill="none" stroke="#53C4FF" stroke-width="2" stroke-linecap="round"/><path d="${likelyPath}" fill="none" stroke="#0A84FF" stroke-width="3" stroke-linecap="round"/><text x="16" y="164" fill="#6E6E73" font-size="10">Hoje</text><text x="104" y="164" fill="#6E6E73" font-size="10">60d</text><text x="192" y="164" fill="#6E6E73" font-size="10">120d</text><text x="279" y="164" fill="#6E6E73" font-size="10">180d</text></svg>`; const pick = day => points.find(p=>p.day===day) || points[points.length-1]; const d30=pick(30), d90=pick(90), d180=pick(180); el.projectionChecks.innerHTML = `<div class="checkpoint"><div class="v">+${d30.likely.toFixed(2)} kg</div><div class="l">Acumulado provável no dia 30</div></div><div class="checkpoint"><div class="v">+${d90.likely.toFixed(2)} kg</div><div class="l">Acumulado provável no dia 90</div></div><div class="checkpoint"><div class="v">+${d180.likely.toFixed(2)} kg</div><div class="l">Acumulado provável no dia 180</div></div>`; }
  function renderTrendChart(){ const hist=getBodyHistory().slice(-8); if(hist.length<2){ el.progressChart.innerHTML=''; return; } const width=320, height=210, pad=18; const labels=hist.map(h=>h.date.slice(5)); const all=hist.flatMap(h=>[Number(h.weight)||null, Number(h.waist)||null, Number(h.arm)||null]).filter(v=>v!=null); const min=Math.min(...all), max=Math.max(...all); const scaleY=v => height-pad-((v-min)/Math.max(max-min,0.1))*(height-pad*2); const scaleX=i => pad+(i/Math.max(hist.length-1,1))*(width-pad*2); const pathFor = getter => hist.map((h,i)=>{ const v=getter(h); if(!v) return ''; const before = hist.slice(0,i).some(x=>getter(x)); return `${before?'L':'M'} ${scaleX(i).toFixed(1)} ${scaleY(v).toFixed(1)}`; }).filter(Boolean).join(' '); el.progressChart.innerHTML = `<svg viewBox="0 0 ${width} ${height}" class="svg-host"><line x1="18" y1="180" x2="302" y2="180" stroke="#D9DCE4" stroke-width="1"/><line x1="18" y1="126" x2="302" y2="126" stroke="#ECEEF3" stroke-width="1"/><line x1="18" y1="72" x2="302" y2="72" stroke="#ECEEF3" stroke-width="1"/><path d="${pathFor(h=>Number(h.weight)||null)}" fill="none" stroke="#0A84FF" stroke-width="2.5" stroke-linecap="round"/><path d="${pathFor(h=>Number(h.waist)||null)}" fill="none" stroke="#7B7F89" stroke-width="2.2" stroke-linecap="round"/><path d="${pathFor(h=>Number(h.arm)||null)}" fill="none" stroke="#36A269" stroke-width="2.2" stroke-linecap="round"/>${hist.map((h,i)=>`<text x="${scaleX(i).toFixed(1)}" y="198" text-anchor="middle" fill="#6E6E73" font-size="10">${labels[i]}</text>`).join('')}</svg>`; }

  function updateBodyPanel(){ const b=latestBody(); const height=Number(b.height||0), weight=Number(b.weight||0), waist=Number(b.waist||0), age=Number(b.age||0), protein=Number(b.protein||0), sleep=Number(b.sleep||0), adherence=calcAdherence(); el.consistencyBadge.textContent=`Consistência ${adherence}%`; if(!height || !weight){ el.bmiValue.textContent='—'; el.proteinTargetBody.textContent='—'; el.leanGainBody.textContent='—'; el.weightGoalBody.textContent='—'; el.projectionFill.style.width='0%'; el.projectionText.textContent='Introduz peso e altura para personalizar a projeção.'; el.visualGainValue.textContent='—'; el.monthlyGainValue.textContent='—'; el.projectionChart.innerHTML=''; el.projectionChecks.innerHTML=''; el.projectionDetail.innerHTML=''; el.bodyInsight.innerHTML=''; return; } const bmi=weight/((height/100)**2); const model=buildProjectionModel({height,weight,waist,age,protein,sleep,adherence}); const story=projectionNarrative(model); el.bmiValue.textContent=bmi.toFixed(1); el.proteinTargetBody.textContent=proteinRange(weight); el.leanGainBody.textContent=`+${model.low} a ${model.high} kg`; el.weightGoalBody.textContent=`${model.targetWeightLow}–${model.targetWeightHigh} kg`; el.projectionFill.style.width=`${model.visibilityScore}%`; el.projectionText.textContent=`Linha azul escura = cenário provável. Aos 180 dias, o cenário provável para ti é +${model.likely.toFixed(2)} kg de massa magra acumulada.`; el.visualGainValue.textContent=visibilityLabel(model.visibilityScore); el.monthlyGainValue.textContent=`~${model.monthlyLikely.toFixed(2)} kg/mês`; renderProjectionChart(model); el.projectionDetail.innerHTML=`<div class="note-box"><div class="label">Como interpretar</div><div style="margin-top:6px;color:var(--text);font-weight:700">${story.headline}</div><div class="legend-grid"><div class="legend-item"><span class="dot low"></span><div><strong>Conservador</strong><span>O mínimo plausível se a execução ficar irregular ou se a fadiga técnica não for suficiente.</span></div></div><div class="legend-item"><span class="dot likely"></span><div><strong>Provável</strong><span>A leitura principal. É a melhor estimativa com os teus dados atuais.</span></div></div><div class="legend-item"><span class="dot high"></span><div><strong>Ótimo</strong><span>O teto plausível se a consistência e a recuperação forem muito boas.</span></div></div></div><div class="micro-copy">${story.line}</div><div class="micro-copy">Em média matemática, a tua linha provável equivale a cerca de <strong>${story.avgDaily} g/dia</strong>, mas o corpo não cresce de forma linear: alguns dias não mudam nada e o valor vai-se acumulando ao longo das semanas.</div></div>`; el.bodyInsight.innerHTML=`<div class="note-box"><div class="label">Leitura rápida</div><div style="margin-top:6px;color:var(--text);font-weight:700">Hoje, o número mais útil para seguires é <strong>+${model.likely.toFixed(2)} kg em 180 dias</strong>.</div><div class="micro-copy">Tradução prática: se o peso subir devagar, a cintura não disparar e o braço subir ligeiramente, estás a andar na direção certa. ${story.action}</div></div>`; }

  function renderAnalysis(){ const hist=getBodyHistory().slice(-8); el.analysisPill.textContent = hist.length>=2 ? `${hist.length} registos` : '2+ registos'; if(hist.length>=2){ const first=hist[0], last=hist[hist.length-1]; const dW=(Number(last.weight||0)-Number(first.weight||0)).toFixed(1); const dWa=(Number(last.waist||0)-Number(first.waist||0)).toFixed(1); const dA=(Number(last.arm||0)-Number(first.arm||0)).toFixed(1); el.analysisText.textContent=`Desde o primeiro destes registos: peso ${dW>=0?'+':''}${dW} kg · cintura ${dWa>=0?'+':''}${dWa} cm · braço ${dA>=0?'+':''}${dA} cm.`; } else el.analysisText.textContent='Adiciona pelo menos dois registos para ver tendência de peso, cintura e braço.'; renderTrendChart(); const week=sessionsInLastDays(7); el.weekSummaryPill.textContent=`${week}/${weeklyTargetSessions()}`; }

  function renderCalendar(){ const view=new Date(state.viewDate.getFullYear(), state.viewDate.getMonth(), 1, 12,0,0,0); const year=view.getFullYear(), month=view.getMonth(); const today=todayKey(); const completed=completedDatesSet(); const first=new Date(year,month,1,12,0,0,0); const startWeekday=(first.getDay()+6)%7; const daysInMonth=new Date(year,month+1,0,12,0,0,0).getDate(); const monthName=view.toLocaleDateString('pt-PT',{month:'long',year:'numeric'}); el.monthLabel.textContent=monthName.charAt(0).toUpperCase()+monthName.slice(1); el.calendar.innerHTML=''; ['S','T','Q','Q','S','S','D'].forEach(day=>{ const w=document.createElement('div'); w.className='weekday'; w.textContent=day; el.calendar.appendChild(w); }); for(let i=0;i<startWeekday;i++){ const blank=document.createElement('div'); blank.className='day future'; blank.style.visibility='hidden'; el.calendar.appendChild(blank); } for(let d=1; d<=daysInMonth; d++){ const key=localDateKey(new Date(year,month,d,12,0,0,0)); const cell=document.createElement('div'); cell.className='day'; if(key===today) cell.classList.add('today'); if(key>today) cell.classList.add('future'); else if(completed.has(key)) cell.classList.add('done'); else cell.classList.add('missed'); cell.textContent=String(d); if(key<=today){ cell.style.cursor='pointer'; cell.addEventListener('click', ()=>toggleSessionForDate(key)); } el.calendar.appendChild(cell); } }
  function renderRecent(){ const recent=getSessions().slice(-6).reverse(); if(!recent.length){ el.recentList.innerHTML='<div class="recent-item"><span>Nenhuma sessão ainda.</span><span>—</span></div>'; return; } el.recentList.innerHTML = recent.map(item=>`<div class="recent-item"><span>${item.date} · Plano ${item.plan}</span><span>${difficultyConfig[item.difficulty]?.label || '—'}</span></div>`).join(''); }
  async function handlePhotoSelection(file){ if(!file) return; try{ const dataUrl=await compressImageFile(file); const key=(el.photoDateInput?.value || todayKey()); const angle=(el.photoAngleInput?.value || 'front'); let photos=getPhotos().filter(p=>!(p.date===key && (p.angle||'')===angle)); photos.push({ date:key, dataUrl, angle }); savePhotos(photos); renderPhotoCompare(); } catch {} finally { if(el.photoInput) el.photoInput.value=''; } }
  function removeLatestPhoto(){ const photos=getPhotos(); if(!photos.length) return; photos.pop(); savePhotos(photos); renderPhotoCompare(); }
  function renderAll(){ renderToday(); updateBodyPanel(); renderAnalysis(); renderWeeklySummary(); renderPhotoCompare(); renderCalendar(); renderRecent(); }

  function applyDifficulty(diff){ state.difficulty=diff; localStorage.setItem(STORAGE.difficulty, diff); resetCycle(); renderToday(); }


  STORAGE.progress='mb19_progress';
  STORAGE.feedbackLog='mb19_feedback_log';
  STORAGE.pendingFeedback='mb19_pending_feedback';
  Object.assign(el, {
    feedbackBox:$('feedbackBox'), progressionSummary:$('progressionSummary'), feedbackPrompt:$('feedbackPrompt'),
    guideTitle:$('guideTitle'), guideLevelPill:$('guideLevelPill'), guideVisual:$('guideVisual'), guideSteps:$('guideSteps'), progressionStrip:$('progressionStrip'), progressionHint:$('progressionHint'),
    trajectoryGrid:$('trajectoryGrid')
  });

  function getProgressStore(){ try{ return JSON.parse(localStorage.getItem(STORAGE.progress) || '{}'); }catch{ return {}; } }
  function saveProgressStore(obj){ localStorage.setItem(STORAGE.progress, JSON.stringify(obj)); }
  function progressKey(planKey, idx){ return `${planKey}_${idx}`; }
  function getExerciseProgress(planKey, idx){ const store=getProgressStore(); const key=progressKey(planKey, idx); if(!store[key]){ store[key]={ level:1, easy:0, hard:0, last:'good' }; saveProgressStore(store); } return store[key]; }
  function setExerciseProgress(planKey, idx, next){ const store=getProgressStore(); store[progressKey(planKey, idx)] = next; saveProgressStore(store); }
  function variantTier(planKey, idx){ const entry=getExerciseProgress(planKey, idx); return ['easy','normal','hard'][Math.max(0,Math.min(2,Number(entry.level)||1))]; }
  function levelLabel(level){ return ['Base','Intermédio','Avançado'][Math.max(0,Math.min(2,level||0))]; }
  function currentVariantName(ex, idx=state.exerciseIndex, planKey=currentPlan().key){ return ex.variants[variantTier(planKey, idx)]; }
  function currentVariantInstruction(ex, idx=state.exerciseIndex, planKey=currentPlan().key){ return ex.instructions[variantTier(planKey, idx)]; }
  function getPendingFeedback(){ try{ return JSON.parse(localStorage.getItem(STORAGE.pendingFeedback) || 'null'); }catch{ return null; } }
  function setPendingFeedback(obj){ if(!obj) localStorage.removeItem(STORAGE.pendingFeedback); else localStorage.setItem(STORAGE.pendingFeedback, JSON.stringify(obj)); }
  function getFeedbackLog(){ try{ return JSON.parse(localStorage.getItem(STORAGE.feedbackLog) || '{}'); }catch{ return {}; } }
  function saveFeedbackLog(obj){ localStorage.setItem(STORAGE.feedbackLog, JSON.stringify(obj)); }
  function feedbackLogKey(date, planKey){ return `${date}_${planKey}`; }
  function planProgressSummary(planKey=currentPlan().key){ const plan=plans.find(p=>p.key===planKey); const levels=plan.exercises.map((_,idx)=>getExerciseProgress(planKey, idx).level); const avg=levels.reduce((a,b)=>a+b,0)/levels.length; const ready=levels.filter(v=>v===2).length; const base=levels.filter(v=>v===0).length; return { avg, ready, base, text: avg>=1.7 ? 'plano bastante avançado' : avg>=1 ? 'plano em subida' : 'plano ainda em base' }; }
  function applySessionFeedback(kind, planKey=currentPlan().key){
    const plan=plans.find(p=>p.key===planKey); let promoted=0, demoted=0;
    plan.exercises.forEach((_,idx)=>{
      const entry={...getExerciseProgress(planKey, idx)};
      if(kind==='easy'){
        entry.easy=(entry.easy||0)+1; entry.hard=0;
        if(entry.easy>=2 && entry.level<2){ entry.level+=1; entry.easy=0; promoted+=1; }
      }else if(kind==='hard'){
        entry.hard=(entry.hard||0)+1; entry.easy=0;
        if(entry.hard>=2 && entry.level>0){ entry.level-=1; entry.hard=0; demoted+=1; }
      }else{
        entry.easy=0; entry.hard=0;
      }
      entry.last=kind;
      setExerciseProgress(planKey, idx, entry);
    });
    const pending=getPendingFeedback();
    if(pending && pending.planKey===planKey) setPendingFeedback(null);
    const log=getFeedbackLog();
    log[feedbackLogKey(todayKey(), planKey)] = { kind, promoted, demoted, date:todayKey(), planKey };
    saveFeedbackLog(log);
    renderAll();
  }
  function progressionFeedbackText(planKey=currentPlan().key){
    const pending=getPendingFeedback();
    const summary=planProgressSummary(planKey);
    if(pending && pending.planKey===planKey){
      return {
        headline:`Sessão ${planKey} concluída. Falta só calibrar a progressão.`,
        prompt:'Como sentiste o bloco de hoje no conjunto? A app vai ajustar as variantes deste plano para a próxima vez.'
      };
    }
    const log=getFeedbackLog()[feedbackLogKey(todayKey(), planKey)];
    if(log){
      const change = log.promoted ? `${log.promoted} movimento(s) subiram.` : log.demoted ? `${log.demoted} movimento(s) desceram.` : 'Hoje a app manteve as variantes.';
      return { headline:`Plano ${planKey}: ${summary.text}.`, prompt:change };
    }
    return { headline:`Plano ${planKey}: ${summary.text}.`, prompt:'Depois de cada sessão real, usa este feedback para a app saber se deve subir, manter ou aliviar este plano.' };
  }
  function feedbackButtonState(kind, planKey=currentPlan().key){
    const pending=getPendingFeedback();
    const log=getFeedbackLog()[feedbackLogKey(todayKey(), planKey)];
    if(pending && pending.planKey===planKey) return false;
    return log?.kind===kind;
  }
  function renderFeedbackBox(){
    const planKey=(getPendingFeedback()?.planKey) || currentPlan().key;
    const copy=progressionFeedbackText(planKey);
    el.progressionSummary.textContent = copy.headline;
    el.feedbackPrompt.textContent = copy.prompt;
    document.querySelectorAll('[data-session-feedback]').forEach(btn=>btn.classList.toggle('active', feedbackButtonState(btn.dataset.sessionFeedback, planKey)));
  }
  function exerciseFamily(name){
    const n=normalizeName(name);
    if(n.includes('pike')) return 'pike';
    if(n.includes('squat') && !n.includes('split')) return 'squat';
    if(n.includes('split') || n.includes('lunge')) return 'split';
    if(n.includes('bridge') || n.includes('walkout')) return 'bridge';
    if(n.includes('back widow') || n.includes('superman') || n.includes('prone') || n.includes('snow angel') || n.includes('swimmer')) return 'pullfloor';
    if(n.includes('curl')) return 'curl';
    if(n.includes('side plank')) return 'sideplank';
    if(n.includes('plank') || n.includes('hollow') || n.includes('shoulder taps') || n.includes('body-saw')) return 'plank';
    if(n.includes('triceps extension') || n.includes('diamond')) return 'tricepsfloor';
    if(n.includes('push')) return 'push';
    if(n.includes('flexao')) return 'push';
    return 'push';
  }
  function shortText(text, max=82){ const t=String(text||'').trim(); return t.length>max ? `${t.slice(0,max-1)}…` : t; }
  function guideStepsFor(name){ const g=exerciseGuide(name); const family=exerciseFamily(name); const base=[{title:'Coloca-te',text:shortText(g.setup)},{title:'Executa',text:shortText(g.execution)},{title:'Fecha limpo',text:shortText(g.cues)}]; if(family==='pullfloor') base[2]={title:'Aperta atrás',text:shortText(g.focus)}; if(family==='bridge') base[2]={title:'Pausa no topo',text:shortText(g.breathing)}; if(family==='curl') base[2]={title:'Resiste sempre',text:shortText(g.execution)}; return base; }
  function svgPanel(x, title, body){ return `<rect x="${x}" y="16" width="94" height="136" rx="18" fill="#F7F8FB" stroke="#E6E7EB"/><text x="${x+47}" y="34" text-anchor="middle" fill="#6E6E73" font-size="10" font-weight="700">${title}</text>${body}<line x1="${x+12}" y1="126" x2="${x+82}" y2="126" stroke="#D9DCE4" stroke-width="2" stroke-linecap="round"/>`; }
  function guideSVG(name){
    const family=exerciseFamily(name);
    const stroke='#1D1D1F', accent='#0A84FF';
    const push = [
      svgPanel(10,'Início',`<circle cx="30" cy="72" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="35" y1="76" x2="62" y2="88" stroke="${stroke}" stroke-width="2"/><line x1="62" y1="88" x2="84" y2="98" stroke="${stroke}" stroke-width="2"/><line x1="47" y1="82" x2="42" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="56" y1="86" x2="52" y2="112" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Fundo',`<circle cx="138" cy="88" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="143" y1="92" x2="170" y2="98" stroke="${stroke}" stroke-width="2"/><line x1="170" y1="98" x2="192" y2="103" stroke="${stroke}" stroke-width="2"/><line x1="156" y1="95" x2="150" y2="116" stroke="${stroke}" stroke-width="2"/><line x1="165" y1="97" x2="160" y2="116" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Sobe',`<circle cx="246" cy="72" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="251" y1="76" x2="278" y2="88" stroke="${stroke}" stroke-width="2"/><line x1="278" y1="88" x2="300" y2="98" stroke="${stroke}" stroke-width="2"/><line x1="263" y1="82" x2="258" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="272" y1="86" x2="268" y2="112" stroke="${stroke}" stroke-width="2"/><path d="M286 52 l10 0 l-5 -8 z" fill="${accent}"/>`)
    ].join('');
    const pike = [
      svgPanel(10,'Anca alta',`<circle cx="38" cy="92" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="43" y1="96" x2="56" y2="64" stroke="${stroke}" stroke-width="2"/><line x1="56" y1="64" x2="76" y2="104" stroke="${stroke}" stroke-width="2"/><line x1="44" y1="98" x2="38" y2="118" stroke="${stroke}" stroke-width="2"/><line x1="72" y1="98" x2="80" y2="118" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Desce',`<circle cx="148" cy="104" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="153" y1="108" x2="166" y2="74" stroke="${stroke}" stroke-width="2"/><line x1="166" y1="74" x2="186" y2="108" stroke="${stroke}" stroke-width="2"/><line x1="154" y1="110" x2="150" y2="120" stroke="${stroke}" stroke-width="2"/><line x1="181" y1="103" x2="188" y2="120" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Empurra',`<circle cx="254" cy="92" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="259" y1="96" x2="272" y2="64" stroke="${stroke}" stroke-width="2"/><line x1="272" y1="64" x2="292" y2="104" stroke="${stroke}" stroke-width="2"/><line x1="260" y1="98" x2="254" y2="118" stroke="${stroke}" stroke-width="2"/><line x1="288" y1="98" x2="296" y2="118" stroke="${stroke}" stroke-width="2"/><path d="M296 54 l10 0 l-5 -8 z" fill="${accent}"/>`)
    ].join('');
    const squat = [
      svgPanel(10,'Alto',`<circle cx="49" cy="54" r="6" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="60" x2="49" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="70" x2="34" y2="84" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="70" x2="64" y2="84" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="92" x2="38" y2="120" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="92" x2="60" y2="120" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Fundo',`<circle cx="157" cy="62" r="6" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="157" y1="68" x2="160" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="160" y1="76" x2="143" y2="90" stroke="${stroke}" stroke-width="2"/><line x1="160" y1="76" x2="178" y2="89" stroke="${stroke}" stroke-width="2"/><line x1="160" y1="92" x2="146" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="160" y1="92" x2="180" y2="112" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Sobe',`<circle cx="265" cy="54" r="6" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="265" y1="60" x2="265" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="265" y1="70" x2="250" y2="84" stroke="${stroke}" stroke-width="2"/><line x1="265" y1="70" x2="280" y2="84" stroke="${stroke}" stroke-width="2"/><line x1="265" y1="92" x2="254" y2="120" stroke="${stroke}" stroke-width="2"/><line x1="265" y1="92" x2="276" y2="120" stroke="${stroke}" stroke-width="2"/><path d="M280 44 l10 0 l-5 -8 z" fill="${accent}"/>`)
    ].join('');
    const split = [
      svgPanel(10,'Base',`<circle cx="50" cy="54" r="6" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="50" y1="60" x2="52" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="52" y1="72" x2="36" y2="84" stroke="${stroke}" stroke-width="2"/><line x1="52" y1="72" x2="66" y2="80" stroke="${stroke}" stroke-width="2"/><line x1="52" y1="92" x2="38" y2="120" stroke="${stroke}" stroke-width="2"/><line x1="52" y1="92" x2="72" y2="118" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Desce',`<circle cx="160" cy="60" r="6" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="160" y1="66" x2="162" y2="96" stroke="${stroke}" stroke-width="2"/><line x1="162" y1="78" x2="146" y2="90" stroke="${stroke}" stroke-width="2"/><line x1="162" y1="78" x2="176" y2="86" stroke="${stroke}" stroke-width="2"/><line x1="162" y1="96" x2="148" y2="120" stroke="${stroke}" stroke-width="2"/><line x1="162" y1="96" x2="182" y2="112" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Sobe',`<circle cx="270" cy="54" r="6" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="270" y1="60" x2="272" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="272" y1="72" x2="256" y2="84" stroke="${stroke}" stroke-width="2"/><line x1="272" y1="72" x2="286" y2="80" stroke="${stroke}" stroke-width="2"/><line x1="272" y1="92" x2="258" y2="120" stroke="${stroke}" stroke-width="2"/><line x1="272" y1="92" x2="292" y2="118" stroke="${stroke}" stroke-width="2"/><path d="M288 44 l10 0 l-5 -8 z" fill="${accent}"/>`)
    ].join('');
    const bridge = [
      svgPanel(10,'Chão',`<circle cx="30" cy="101" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="35" y1="104" x2="62" y2="104" stroke="${stroke}" stroke-width="2"/><line x1="62" y1="104" x2="80" y2="104" stroke="${stroke}" stroke-width="2"/><line x1="64" y1="104" x2="76" y2="118" stroke="${stroke}" stroke-width="2"/><line x1="54" y1="104" x2="44" y2="118" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Eleva',`<circle cx="138" cy="104" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="143" y1="107" x2="166" y2="84" stroke="${stroke}" stroke-width="2"/><line x1="166" y1="84" x2="188" y2="104" stroke="${stroke}" stroke-width="2"/><line x1="188" y1="104" x2="198" y2="118" stroke="${stroke}" stroke-width="2"/><line x1="154" y1="96" x2="146" y2="118" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Pausa',`<circle cx="246" cy="104" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="251" y1="107" x2="274" y2="84" stroke="${stroke}" stroke-width="2"/><line x1="274" y1="84" x2="296" y2="104" stroke="${stroke}" stroke-width="2"/><line x1="296" y1="104" x2="306" y2="118" stroke="${stroke}" stroke-width="2"/><line x1="262" y1="96" x2="254" y2="118" stroke="${stroke}" stroke-width="2"/><path d="M282 62 l10 0 l-5 -8 z" fill="${accent}"/>`)
    ].join('');
    const pullfloor = [
      svgPanel(10,'Coloca',`<circle cx="32" cy="98" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="37" y1="101" x2="58" y2="101" stroke="${stroke}" stroke-width="2"/><line x1="48" y1="101" x2="42" y2="114" stroke="${stroke}" stroke-width="2"/><line x1="48" y1="101" x2="62" y2="114" stroke="${stroke}" stroke-width="2"/><line x1="58" y1="101" x2="78" y2="104" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Puxa',`<circle cx="140" cy="94" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="145" y1="97" x2="166" y2="89" stroke="${stroke}" stroke-width="2"/><line x1="155" y1="94" x2="148" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="160" y1="92" x2="176" y2="108" stroke="${stroke}" stroke-width="2"/><line x1="166" y1="89" x2="188" y2="95" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Aperta',`<circle cx="248" cy="94" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="253" y1="97" x2="274" y2="89" stroke="${stroke}" stroke-width="2"/><line x1="263" y1="94" x2="256" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="268" y1="92" x2="284" y2="108" stroke="${stroke}" stroke-width="2"/><line x1="274" y1="89" x2="296" y2="95" stroke="${stroke}" stroke-width="2"/><path d="M286 72 l10 0 l-5 -8 z" fill="${accent}"/>`)
    ].join('');
    const curl = [
      svgPanel(10,'Base',`<circle cx="49" cy="54" r="6" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="60" x2="49" y2="94" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="72" x2="36" y2="85" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="72" x2="64" y2="82" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="94" x2="39" y2="120" stroke="${stroke}" stroke-width="2"/><line x1="49" y1="94" x2="60" y2="120" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Resiste',`<circle cx="157" cy="54" r="6" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="157" y1="60" x2="157" y2="94" stroke="${stroke}" stroke-width="2"/><line x1="157" y1="72" x2="144" y2="85" stroke="${stroke}" stroke-width="2"/><line x1="157" y1="72" x2="171" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="171" y1="92" x2="166" y2="74" stroke="${accent}" stroke-width="2"/><line x1="157" y1="94" x2="147" y2="120" stroke="${stroke}" stroke-width="2"/><line x1="157" y1="94" x2="168" y2="120" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Desce lento',`<circle cx="265" cy="54" r="6" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="265" y1="60" x2="265" y2="94" stroke="${stroke}" stroke-width="2"/><line x1="265" y1="72" x2="252" y2="85" stroke="${stroke}" stroke-width="2"/><line x1="265" y1="72" x2="280" y2="88" stroke="${stroke}" stroke-width="2"/><line x1="280" y1="88" x2="275" y2="72" stroke="${accent}" stroke-width="2"/><line x1="265" y1="94" x2="255" y2="120" stroke="${stroke}" stroke-width="2"/><line x1="265" y1="94" x2="276" y2="120" stroke="${stroke}" stroke-width="2"/>`)
    ].join('');
    const plank = [
      svgPanel(10,'Linha reta',`<circle cx="32" cy="78" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="37" y1="82" x2="64" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="64" y1="92" x2="84" y2="102" stroke="${stroke}" stroke-width="2"/><line x1="48" y1="86" x2="44" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="64" y1="92" x2="62" y2="112" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Mantém',`<circle cx="140" cy="78" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="145" y1="82" x2="172" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="172" y1="92" x2="192" y2="102" stroke="${stroke}" stroke-width="2"/><line x1="156" y1="86" x2="152" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="172" y1="92" x2="170" y2="112" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Sem rodar',`<circle cx="248" cy="78" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="253" y1="82" x2="280" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="280" y1="92" x2="300" y2="102" stroke="${stroke}" stroke-width="2"/><line x1="264" y1="86" x2="260" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="280" y1="92" x2="278" y2="112" stroke="${stroke}" stroke-width="2"/><path d="M294 64 l10 0 l-5 -8 z" fill="${accent}"/>`)
    ].join('');
    const side = [
      svgPanel(10,'Empilha',`<circle cx="40" cy="74" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="45" y1="78" x2="70" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="70" y1="92" x2="82" y2="108" stroke="${stroke}" stroke-width="2"/><line x1="54" y1="82" x2="42" y2="104" stroke="${stroke}" stroke-width="2"/><line x1="70" y1="92" x2="64" y2="120" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Anca alta',`<circle cx="148" cy="74" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="153" y1="78" x2="178" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="178" y1="92" x2="190" y2="108" stroke="${stroke}" stroke-width="2"/><line x1="162" y1="82" x2="150" y2="104" stroke="${stroke}" stroke-width="2"/><line x1="178" y1="92" x2="172" y2="120" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Controla',`<circle cx="256" cy="74" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="261" y1="78" x2="286" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="286" y1="92" x2="298" y2="108" stroke="${stroke}" stroke-width="2"/><line x1="270" y1="82" x2="258" y2="104" stroke="${stroke}" stroke-width="2"/><line x1="286" y1="92" x2="280" y2="120" stroke="${stroke}" stroke-width="2"/><path d="M292 58 l10 0 l-5 -8 z" fill="${accent}"/>`)
    ].join('');
    const tricepsfloor = [
      svgPanel(10,'Joelhos',`<circle cx="42" cy="74" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="47" y1="78" x2="64" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="64" y1="92" x2="74" y2="108" stroke="${stroke}" stroke-width="2"/><line x1="50" y1="84" x2="44" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="57" y1="88" x2="52" y2="112" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(118,'Testa perto',`<circle cx="150" cy="96" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="155" y1="100" x2="172" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="172" y1="92" x2="182" y2="108" stroke="${stroke}" stroke-width="2"/><line x1="158" y1="100" x2="152" y2="118" stroke="${stroke}" stroke-width="2"/><line x1="165" y1="98" x2="160" y2="118" stroke="${stroke}" stroke-width="2"/>`),
      svgPanel(226,'Estende',`<circle cx="258" cy="74" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="263" y1="78" x2="280" y2="92" stroke="${stroke}" stroke-width="2"/><line x1="280" y1="92" x2="290" y2="108" stroke="${stroke}" stroke-width="2"/><line x1="266" y1="84" x2="260" y2="112" stroke="${stroke}" stroke-width="2"/><line x1="273" y1="88" x2="268" y2="112" stroke="${stroke}" stroke-width="2"/><path d="M286 58 l10 0 l-5 -8 z" fill="${accent}"/>`)
    ].join('');
    const markup = ({push,pike,squat,split,bridge,pullfloor,curl,plank,sideplank:side,tricepsfloor}[family] || push);
    return `<svg viewBox="0 0 330 170" class="svg-host" aria-label="Guia visual">${markup}</svg>`;
  }
  function updateTechniqueCard(ex, idx=getPreviewIndex(), plan=currentPlan()){
    const name=currentVariantName(ex, idx, plan.key);
    const g=exerciseGuide(name);
    el.techTitle.textContent=`Técnica · ${name}`;
    el.techDesc.textContent=g.intro;
    el.techSetup.textContent=g.setup;
    el.techExecution.textContent=g.execution;
    el.techBreathing.textContent=g.breathing;
    el.techMistake.textContent=g.mistake;
    el.techRegression.textContent=g.regression;
    el.techFocus.textContent=g.focus;
    el.techCues.textContent=g.cues;
  }
  function renderGuideVisual(plan=currentPlan(), idx=getPreviewIndex(plan)){
    const ex=plan.exercises[idx];
    const name=currentVariantName(ex, idx, plan.key);
    el.guideTitle.textContent=`${name} · início → meio → fim`;
    el.guideLevelPill.textContent=`Nível ${levelLabel(getExerciseProgress(plan.key, idx).level)}`;
    el.guideVisual.innerHTML=guideSVG(name);
    const steps=guideStepsFor(name);
    el.guideSteps.innerHTML=steps.map(step=>`<div class="guide-step"><strong>${step.title}</strong><span>${step.text}</span></div>`).join('');
    const levels=['easy','normal','hard'];
    el.progressionStrip.innerHTML=levels.map((tier,i)=>`<span class="progression-pill ${variantTier(plan.key, idx)===tier?'active':''}">${ex.variants[tier]}</span>`).join('');
    const summary=planProgressSummary(plan.key);
    el.progressionHint.textContent=`Este plano está em ${summary.text}. O nível atual deste exercício muda quando repetes o plano e sinalizas “fácil demais” ou “no limite”.`;
  }
  function nextExerciseAfterCurrentBlock(){ let exIndex=state.exerciseIndex+1, round=state.roundIndex; if(exIndex>=currentPlan().exercises.length){ exIndex=0; round+=1; } if(round>=roundsPerSession()) return null; return { exercise:currentPlan().exercises[exIndex], index:exIndex, round:round+1 }; }
  function renderExerciseList(){
    const plan=currentPlan();
    const upcoming=nextExerciseAfterCurrentBlock();
    const selected=getPreviewIndex(plan);
    el.exerciseList.innerHTML = plan.exercises.map((ex,idx)=>{
      const active = state.phase==='work' ? idx===state.exerciseIndex : (upcoming && idx===upcoming.index);
      const isSelected = idx===selected;
      const name=currentVariantName(ex, idx, plan.key);
      const g=exerciseGuide(name);
      const level=levelLabel(getExerciseProgress(plan.key, idx).level);
      return `<div class="plan-item ${active ? 'active' : ''} ${isSelected ? 'selected' : ''}" data-preview-index="${idx}" role="button" aria-label="Ver técnica de ${name}"><div class="left"><div class="name">${name}</div><div class="sub">${g.intro}</div><div class="hint">${g.cues}</div></div><div class="right">${level}<div style="margin-top:4px">ver técnica</div></div></div>`;
    }).join('');
  }
  function renderToday(){
    const plan=currentPlan(); const ex=currentExercise(); const upcoming=nextExerciseAfterCurrentBlock(); const nextPlan=nextPlanObj(); const cfg=currentCfg(); const volume=volumeTierForPlan(plan.key); const meta=profileMeta();
    el.dayBadge.textContent = state.selectedPlanMode==='auto' ? `Auto ${plan.key}` : `Plano ${plan.key}`;
    el.planTitle.textContent = plan.title;
    el.planFocus.textContent = plan.focus;
    el.nextPlan.textContent = state.selectedPlanMode==='auto' ? `Auto · seguinte ${nextPlan.key} · ${meta.title}` : 'Modo manual';
    el.exerciseName.textContent = state.phase==='work' ? currentVariantName(ex, state.exerciseIndex, plan.key) : 'Descanso';
    el.exerciseInstruction.textContent = state.phase==='work' ? currentVariantInstruction(ex, state.exerciseIndex, plan.key) : 'Respira fundo, recupera e prepara a próxima série.';
    el.nextExerciseLine.textContent = upcoming ? `Seguinte: ${currentVariantName(upcoming.exercise, upcoming.index, plan.key)} · ronda ${upcoming.round}` : 'Seguinte: fim da sessão';
    el.timer.textContent = formatSeconds(state.remainingTime);
    el.phase.textContent = state.phase.toUpperCase();
    el.countdown.textContent = state.phase==='work' && state.remainingTime<=5 && state.remainingTime>0 ? `Últimos ${state.remainingTime}s` : '';
    el.progressFill.style.width = `${progressPct()}%`;
    el.progressText.textContent = `${progressPct()}% da sessão`;
    el.roundValue.textContent = `${Math.min(state.roundIndex+1, roundsPerSession(plan.key))}/${roundsPerSession(plan.key)}`;
    el.moveValue.textContent = `${Math.min(state.exerciseIndex+1, plan.exercises.length)}/${plan.exercises.length}`;
    el.streakValue.textContent = String(calcStreak());
    el.doseValue.textContent = `${cfg.work}/${cfg.rest} · ${volume.rounds}R`;
    el.soundSwitch.classList.toggle('on', state.soundOn);
    el.voiceSwitch.classList.toggle('on', state.voiceOn);
    updatePlanPreviewPanels();
    renderFeedbackBox();
    renderProfileModeSummary();
    document.querySelectorAll('#difficultySegment button').forEach(btn=>btn.classList.toggle('active', btn.dataset.difficulty===state.difficulty));
    renderPlanModes(); renderExerciseList(); renderRotation();
  }
  function renderProjectionChart(model){
    const points=buildProjectionSeries(model); const width=320, height=170, pad=16, maxY=Math.max(...points.map(p=>p.high),0.1);
    const lowPath=svgLine(points,'low',width,height,pad,maxY); const likelyPath=svgLine(points,'likely',width,height,pad,maxY); const highPath=svgLine(points,'high',width,height,pad,maxY);
    const d7=points.find(p=>p.day===7), d30=points.find(p=>p.day===30), d90=points.find(p=>p.day===90), d180=points.find(p=>p.day===180);
    el.projectionChart.innerHTML = `<svg viewBox="0 0 ${width} ${height}" class="svg-host" aria-label="Projeção diária"><line x1="16" y1="150" x2="304" y2="150" stroke="#D9DCE4" stroke-width="1"/><line x1="16" y1="95" x2="304" y2="95" stroke="#ECEEF3" stroke-width="1"/><line x1="16" y1="40" x2="304" y2="40" stroke="#ECEEF3" stroke-width="1"/><path d="${lowPath}" fill="none" stroke="#B8BCC6" stroke-width="2" stroke-linecap="round"/><path d="${highPath}" fill="none" stroke="#53C4FF" stroke-width="2" stroke-linecap="round"/><path d="${likelyPath}" fill="none" stroke="#0A84FF" stroke-width="3" stroke-linecap="round"/><circle cx="${(16+(7/180)*(width-pad*2)).toFixed(1)}" cy="${(height-pad-((d7.likely||0)/maxY)*(height-pad*2)).toFixed(1)}" r="3.5" fill="#0A84FF"/><text x="16" y="164" fill="#6E6E73" font-size="10">Hoje</text><text x="101" y="164" fill="#6E6E73" font-size="10">30d</text><text x="189" y="164" fill="#6E6E73" font-size="10">90d</text><text x="276" y="164" fill="#6E6E73" font-size="10">180d</text></svg>`;
    el.projectionChecks.innerHTML = `<div class="checkpoint"><div class="v">+${d30.likely.toFixed(2)} kg</div><div class="l">Linha provável ao dia 30</div></div><div class="checkpoint"><div class="v">+${d90.likely.toFixed(2)} kg</div><div class="l">Linha provável ao dia 90</div></div><div class="checkpoint"><div class="v">+${d180.likely.toFixed(2)} kg</div><div class="l">Linha provável ao dia 180</div></div>`;
  }
  function trajectoryBand(score){ if(score>=80) return 'Forte'; if(score>=62) return 'Aceitável'; return 'Insuficiente'; }
  function updateBodyPanel(){
    const b=latestBody(); const height=Number(b.height||0), weight=Number(b.weight||0), waist=Number(b.waist||0), age=Number(b.age||0), protein=Number(b.protein||0), sleep=Number(b.sleep||0), adherence=calcAdherence();
    el.consistencyBadge.textContent=`Consistência ${adherence}%`;
    if(!height || !weight){
      el.bmiValue.textContent='—'; el.proteinTargetBody.textContent='—'; el.leanGainBody.textContent='—'; el.weightGoalBody.textContent='—'; el.projectionFill.style.width='0%'; el.projectionText.textContent='Introduz peso e altura para personalizar a projeção.'; el.visualGainValue.textContent='—'; el.monthlyGainValue.textContent='—'; el.projectionChart.innerHTML=''; el.projectionChecks.innerHTML=''; el.trajectoryGrid.innerHTML=''; el.projectionDetail.innerHTML=''; el.bodyInsight.innerHTML=''; return;
    }
    const bmi=weight/((height/100)**2); const model=buildProjectionModel({height,weight,waist,age,protein,sleep,adherence}); const story=projectionNarrative(model); const adherenceTarget = model.effectiveAdherence>=80 ? 'mantém ≥80%' : 'sobe para 80%';
    el.bmiValue.textContent=bmi.toFixed(1);
    el.proteinTargetBody.textContent=proteinRange(weight);
    el.leanGainBody.textContent=`+${model.low} a ${model.high} kg`;
    el.weightGoalBody.textContent=`${model.targetWeightLow}–${model.targetWeightHigh} kg`;
    el.projectionFill.style.width=`${model.visibilityScore}%`;
    el.projectionText.textContent=`A leitura principal é a linha azul escura. Mantendo o ritmo de hoje, ela aponta para +${model.likely.toFixed(2)} kg em 180 dias.`;
    el.visualGainValue.textContent=visibilityLabel(model.visibilityScore);
    el.monthlyGainValue.textContent=`~${model.monthlyLikely.toFixed(2)} kg/mês`;
    el.trajectoryGrid.innerHTML = `<div class="trajectory-card"><div class="v">${trajectoryBand(model.visibilityScore)}</div><div class="l">Trajetória atual</div></div><div class="trajectory-card"><div class="v">${model.avgDailyLikely} g</div><div class="l">Média provável por dia</div></div><div class="trajectory-card"><div class="v">${adherenceTarget}</div><div class="l">Ação para puxar a curva</div></div>`;
    renderProjectionChart(model);
    el.projectionDetail.innerHTML=`<div class="note-box"><div class="label">Como ler agora</div><div style="margin-top:6px;color:var(--text);font-weight:700">${story.headline}</div><div class="mini-legend"><span><b class="c1"></b> conservador</span><span><b class="c2"></b> provável</span><span><b class="c3"></b> ótimo</span></div><div class="micro-copy">${story.line}</div><div class="micro-copy">Lê primeiro o valor do dia 180. Depois usa os checkpoints dos 30 e 90 dias para perceber se a evolução real do peso, braço e cintura está a acompanhar o cenário provável.</div><div class="micro-copy">Em média matemática, a tua linha provável equivale a cerca de <strong>${story.avgDaily} g/dia</strong>. Isto não significa crescimento diário visível; significa acumulação progressiva ao longo das semanas.</div></div>`;
    el.bodyInsight.innerHTML=`<div class="note-box"><div class="label">Leitura operacional</div><div style="margin-top:6px;color:var(--text);font-weight:700">Se o braço sobe ligeiramente, a cintura não dispara e a consistência se mantém, a linha provável continua válida.</div><div class="micro-copy">${story.action}</div></div>`;
  }
  function advanceFromRest(){
    state.exerciseIndex += 1;
    if(state.exerciseIndex>=currentPlan().exercises.length){ state.exerciseIndex=0; state.roundIndex+=1; }
    if(state.roundIndex>=roundsPerSession()){
      const finishedPlan=currentPlan().key;
      clearInterval(state.intervalId); state.intervalId=null;
      saveTodaySession(false);
      setPendingFeedback({ date:todayKey(), planKey:finishedPlan });
      releaseWakeLock();
      state.phase='work'; state.exerciseIndex=0; state.roundIndex=0; state.remainingTime=currentCfg().work; state.lastSpoken=null;
      speak('sessão concluída');
      setActiveTab('today');
      renderAll();
      return;
    }
    state.phase='work'; state.remainingTime=currentCfg().work; state.lastSpoken=null; speak(currentVariantName(currentExercise(), state.exerciseIndex, currentPlan().key));
  }
  function renderAll(){ renderToday(); updateBodyPanel(); renderAnalysis(); renderWeeklySummary(); renderPhotoCompare(); renderCalendar(); renderRecent(); }

  /* v23 overrides */
  Object.assign(el, {
    chestInput:$('chestInput'), thighInput:$('thighInput'), hipInput:$('hipInput'),
    swapPrevBtn:$('swapPrevBtn'), swapNextBtn:$('swapNextBtn'), swapStatus:$('swapStatus'),
    compareAngleSelect:$('compareAngleSelect'), compareWindowSelect:$('compareWindowSelect'),
    monthlySummaryPill:$('monthlySummaryPill'), monthlySummaryGrid:$('monthlySummaryGrid'), monthlySummaryText:$('monthlySummaryText')
  });
  const V23 = {
    swaps:'mb23_exercise_swaps',
    photoCompareAngle:'mb23_photo_compare_angle',
    photoCompareWindow:'mb23_photo_compare_window'
  };
  const exTpl = (variants, instructions, desc, focus, cues) => ({ variants, instructions, desc, focus, cues });
  const slotFamilies = {
    'A_0':'push_horizontal','A_1':'push_tension','A_2':'shoulder_press','A_3':'triceps_push',
    'B_0':'squat','B_1':'split','B_2':'bridge','B_3':'hinge_glutes',
    'C_0':'back_row','C_1':'back_scap','C_2':'back_lat','C_3':'biceps',
    'D_0':'core_front','D_1':'core_side','D_2':'core_rotation','D_3':'triceps_iso',
    'E_0':'density_lower','E_1':'density_push','E_2':'density_pull','E_3':'finisher'
  };
  const swapLibraries = {
    push_horizontal:[
      exTpl({easy:'Flexão de joelhos',normal:'Flexão',hard:'Flexão diamante'},{easy:'Joelhos no chão, corpo rígido e mãos ligeiramente mais largas que os ombros. Desce até o peito quase tocar no chão e sobe empurrando forte o solo.',normal:'Posição de prancha alta. Mãos sob os ombros, glúteos e abdómen apertados. Desce em bloco e sobe sem partir a lombar.',hard:'Mãos mais juntas em forma de diamante. Mantém cotovelos relativamente próximos do corpo e sobe sem perder alinhamento.'},'Pressão horizontal base para peito e tríceps.','Peitoral, tríceps e deltoide anterior.','Peito desce primeiro, cotovelos seguem para trás e o tronco mantém-se inteiro.'),
      exTpl({easy:'Flexão mãos largas',normal:'Flexão mãos largas lenta',hard:'Flexão com pausa baixa'},{easy:'Mãos um pouco mais largas do que na flexão normal. Desce só até conseguires manter controlo.',normal:'Usa mãos largas e desce em 3–4 segundos até ao fundo antes de subir.',hard:'Faz a flexão normal, mas segura 1–2 segundos no fundo antes de empurrar o chão.'},'Variação que tende a carregar mais o peito e a reduzir ligeiramente a ênfase nos tríceps.','Peito e deltoide anterior.','Peito aberto, pescoço neutro e pausa real no fundo.'),
      exTpl({easy:'Flexão inclinada no chão alta',normal:'Flexão 1.5 reps',hard:'Flexão arqueiro assistida'},{easy:'Parte de amplitude curta: desce até metade e volta a subir mantendo tensão contínua.',normal:'Desce, sobe só até meio, desce outra vez e só depois sobe por completo.',hard:'Desloca ligeiramente mais peso para um lado de cada vez, mantendo a outra mão mais longe para assistir.'},'Mais tensão local no peito sem equipamento.','Peito, tríceps e estabilidade do core.','Vai devagar e não sacrifiques amplitude útil por variedade.')
    ],
    push_tension:[
      exTpl({easy:'Flexão isométrica alta',normal:'Flexão lenta',hard:'Flexão 1.5 reps'},{easy:'Mantém a flexão a meio da descida, com cotovelos dobrados e tronco rígido.',normal:'Desce em 4 segundos, pausa curta e sobe forte.',hard:'Desce, sobe até meio, desce outra vez e só depois sobe completa.'},'Aumenta o tempo sob tensão sem carga externa.','Peito e tríceps sob fadiga.','Amplitude limpa, sem relaxar no topo.'),
      exTpl({easy:'Flexão com pausa curta',normal:'Flexão com pausa baixa',hard:'Flexão excêntrica longa'},{easy:'Desce e segura meio segundo no fundo antes de subir.',normal:'Mantém 1–2 segundos no fundo sem pousar.',hard:'Desce em 5 segundos e sobe em 1–2 mantendo o corpo em bloco.'},'Excelente para hipertrofia quando não há carga extra.','Peito, tríceps e controlo corporal.','A pausa é no peito, não na lombar.'),
      exTpl({easy:'Push-up hold baixo',normal:'Push-up pulses',hard:'Push-up mechanical drop set'},{easy:'Segura o fundo da flexão na amplitude mais baixa que controles.',normal:'Pulsações curtas nos últimos 20–30% do movimento.',hard:'Começa em diamante/padrão difícil e, perto da falha técnica, alarga um pouco as mãos sem parar.'},'Opção densa para quem responde bem a fadiga local.','Peito e tríceps.','Tensão contínua e respiração curta.')
    ],
    shoulder_press:[
      exTpl({easy:'Pike hold',normal:'Pike push-up',hard:'Pike press pulses'},{easy:'Ancas altas, braços firmes e peso deslocado para os ombros.',normal:'Cabeça desce entre as mãos e sobe empurrando o chão.',hard:'Faz pequenas pulsações perto do fundo do pike.'},'Bloco vertical para ombros e tríceps.','Deltoides e tríceps.','Anca alta, olhar para o chão e pescoço neutro.'),
      exTpl({easy:'Dolphin hold',normal:'Dolphin push-up',hard:'Pike negativa lenta'},{easy:'Mantém a posição de antebraços no chão com anca alta.',normal:'Dos antebraços sobe para prancha alta e regressa, mantendo foco no ombro.',hard:'Desce muito lentamente em pike até o topo da cabeça aproximar-se do chão.'},'Variante mais amigável para ombro quando o pike clássico cansa demasiado os punhos.','Ombro, serrátil e tríceps.','Empurra o chão para longe e mantém as costelas controladas.'),
      exTpl({easy:'Pike parcial',normal:'Pike com pausa baixa',hard:'Pseudo-handstand lean'},{easy:'Reduz a amplitude e concentra-te em descer só até onde manténs técnica.',normal:'Pausa 1 segundo no ponto mais baixo do pike.',hard:'Inclina progressivamente os ombros para a frente sem colapsar a linha do corpo.'},'Variação de progressão para ombro anterior.','Deltoides, tríceps e cintura escapular.','Tensão nos ombros, não no pescoço.')
    ],
    triceps_push:[
      exTpl({easy:'Scapular push-up',normal:'Close-grip push-up',hard:'Pseudo-planche lean push-up'},{easy:'Move só as omoplatas mantendo os braços quase estendidos.',normal:'Mãos mais próximas, cotovelos fechados e subida firme.',hard:'Inclina os ombros ligeiramente para a frente para aumentar a alavanca.'},'Fecho técnico para tríceps, serrátil e peito.','Tríceps, serrátil e peito.','Cotovelos controlados, abdómen firme.'),
      exTpl({easy:'Extensão curta de tríceps',normal:'Bodyweight triceps extension',hard:'Diamond push-up pulses'},{easy:'Ajoelhado, leva a testa ao chão e estende os cotovelos.',normal:'Avança as mãos e o corpo para a frente para carregar mais os tríceps.',hard:'Pulsações curtas em flexão diamante perto da falha técnica.'},'Foca o cotovelo mais do que o peito.','Tríceps e estabilização do ombro.','O movimento nasce nos cotovelos, não na lombar.'),
      exTpl({easy:'Tríceps isométrico ajoelhado',normal:'Close-grip com pausa',hard:'Close-grip 1.5 reps'},{easy:'Mantém metade da extensão de tríceps ajoelhado por tempo.',normal:'Segura 1 segundo no fundo da close-grip.',hard:'Usa a repetição e meia para aumentar a tensão local.'},'Opção simples quando queres tríceps puro.','Tríceps.','Cotovelos apontam para trás e para baixo.')
    ],
    squat:[
      exTpl({easy:'Air squat',normal:'Tempo squat',hard:'Squat 1.5 reps'},{easy:'Agacha até amplitude confortável e sobe sem perder alinhamento.',normal:'Desce em 3 segundos, pausa curta e sobe forte.',hard:'Desce, sobe até meio, volta a descer e sobe por completo.'},'Base de quadríceps e glúteos sem material.','Quadríceps e glúteos.','Pés firmes, joelhos acompanham o pé e tronco estável.'),
      exTpl({easy:'Sit-to-squat controlado',normal:'Squat com pausa baixa',hard:'Wall sit + squats'},{easy:'Desce até um agachamento curto e volta a subir com controlo.',normal:'Segura 2 segundos no fundo antes de subir.',hard:'Alterna 15–20 segundos de wall sit imaginário encostado a uma parede com 3–5 agachamentos lentos.'},'Mais tempo sob tensão nas pernas.','Quadríceps, glúteos e adutores.','Amplitude útil e calcanhares bem assentes.'),
      exTpl({easy:'Squat isométrico curto',normal:'Tempo squat contínuo',hard:'Jump squat controlado'},{easy:'Mantém meia amplitude por tempo para aprender posição.',normal:'Faz repetições contínuas mas sempre lentas.',hard:'Salto pequeno, aterragem suave e joelhos alinhados.'},'Variante de densidade para pernas.','Quadríceps, glúteos e controlo de aterragem.','No salto, qualidade da aterragem acima da altura.')
    ],
    split:[
      exTpl({easy:'Split squat assistido',normal:'Split squat',hard:'Split squat 1.5 reps'},{easy:'Base estável e apoio leve numa parede se precisares.',normal:'Desce vertical, joelho de trás aponta ao chão e sobe com o pé da frente.',hard:'Usa a repetição e meia para prolongar a tensão.'},'Trabalho unilateral com carga local real.','Quadríceps, glúteos e estabilidade.','Peso no pé da frente, tronco alto.'),
      exTpl({easy:'Reverse lunge',normal:'Reverse lunge lenta',hard:'Reverse lunge com pausa'},{easy:'Passo atrás e regressa com controlo.',normal:'Desce lentamente e sobe firme.',hard:'Segura 1 segundo no fundo antes de regressar.'},'Alternativa mais dinâmica ao split squat.','Quadríceps, glúteos e equilíbrio.','Passo atrás limpo e força na perna da frente.'),
      exTpl({easy:'Split squat curto',normal:'Split squat glute bias',hard:'Split squat pulsos baixos'},{easy:'Encurta um pouco a amplitude e ganha estabilidade.',normal:'Inclina ligeiramente o tronco para puxar mais pelo glúteo da frente.',hard:'Faz pulsações curtas nos últimos centímetros do fundo.'},'Boa opção quando queres mais glúteo no trabalho unilateral.','Glúteos, quadríceps e adutores.','Bacia estável e joelho da frente alinhado.')
    ],
    bridge:[
      exTpl({easy:'Glute bridge',normal:'Single-leg bridge',hard:'Long-lever bridge'},{easy:'Eleva a anca e aperta glúteos no topo.',normal:'Trabalha uma perna de cada vez sem rodar a bacia.',hard:'Afasta os calcanhares para aumentar a exigência posterior.'},'Extensão da anca para glúteos e posteriores.','Glúteos e isquiotibiais.','Pausa 1 segundo no topo e costelas controladas.'),
      exTpl({easy:'Frog pump',normal:'Frog pump com pausa',hard:'Frog pump alto-rep'},{easy:'Solas dos pés juntas, joelhos abertos, eleva a anca e aperta forte glúteos.',normal:'Repete o frog pump mas segura 1–2 segundos no topo.',hard:'Usa repetições mais contínuas e queimantes sem perder o topo.'},'Muito útil para glúteo máximo sem material.','Glúteos e alguma cadeia posterior.','Pensa em apertar as nádegas, não em arquear a lombar.'),
      exTpl({easy:'Bridge march',normal:'Single-leg bridge com pausa',hard:'Long-lever bridge com pausa'},{easy:'Na ponte bilateral, alterna levantar um pé do chão sem mexer a bacia.',normal:'Ponte unilateral com 1 segundo de pausa no topo.',hard:'Long-lever segurando 1 segundo no topo.'},'Combina glúteo com maior desafio de estabilidade.','Glúteos, posteriores e core.','Bacia quieta e calcanhares firmes.')
    ],
    hinge_glutes:[
      exTpl({easy:'Frog pump',normal:'Frog pump com pausa',hard:'Hamstring walkout'},{easy:'Solas dos pés juntas e joelhos abertos; eleva a anca e aperta forte os glúteos.',normal:'Repete o frog pump mas segura 1–2 segundos no topo de cada repetição.',hard:'Parte da ponte de glúteos e caminha com os calcanhares para a frente e para trás sem deixar a anca cair.'},'Fecho glúteo/posterior para dar mais volume útil ao bloco inferior.','Glúteos e isquiotibiais.','Aperta glúteos no topo e mantém costelas controladas.'),
      exTpl({easy:'Reverse lunge',normal:'Reverse lunge lenta',hard:'Split squat glute bias'},{easy:'Passo atrás e regressa com controlo.',normal:'Desce lentamente e sobe firme.',hard:'Inclina ligeiramente o tronco e carrega mais no glúteo da frente.'},'Alternativa mais unilateral para fechar pernas.','Glúteos, quadríceps e equilíbrio.','Controla o joelho da frente e o peso no calcanhar.'),
      exTpl({easy:'Bridge march',normal:'Hamstring bridge hold',hard:'Walkout parcial'},{easy:'Alterna levantar um pé mantendo a ponte.',normal:'Fica na ponte com os calcanhares mais afastados por tempo.',hard:'Faz só a primeira metade do walkout sem deixar a anca cair.'},'Finisher posterior quando queres menos repetição e mais controlo.','Isquiotibiais, glúteos e estabilidade lombopélvica.','Anca alta e passos curtos.')
    ],
    back_row:[
      exTpl({easy:'Retração escapular deitado',normal:'Back widow',hard:'Row de cotovelos no chão com pausa'},{easy:'Deitado de costas, cotovelos no chão e peito ligeiramente aberto. Empurra os cotovelos para baixo e junta as omoplatas sem tentar subir muito.',normal:'Deitado de costas, cotovelos dobrados junto ao corpo. Empurra os cotovelos contra o chão para levantar ligeiramente o peito e apertar as omoplatas.',hard:'Igual ao movimento anterior, mas segura 1–2 segundos no topo de cada repetição.'},'Tração de chão para costas altas. Muito útil quando não tens qualquer material.','Romboides, trapézio médio, parte posterior do ombro.','Está bem feito se sentires trabalho entre as omoplatas; está mal se sentires só pescoço ou lombar.'),
      exTpl({easy:'Row de cotovelos no chão curto',normal:'Row de cotovelos no chão',hard:'Row de cotovelos no chão com pausa'},{easy:'Mantém-te deitado de costas e faz uma amplitude menor, focando apenas o aperto das omoplatas.',normal:'Empurra forte os cotovelos contra o chão e imagina que queres aproximar o peito do teto. A subida é pequena mas a tensão atrás deve ser clara.',hard:'Repete o row de cotovelos no chão, mas congela 2 segundos quando sentires o aperto máximo entre as omoplatas.'},'Versão mais intuitiva do back widow para aprender a puxar sem equipamento.','Costas altas, romboides e deltoide posterior.','Cotovelos enterram o chão, peito abre e omoplatas aproximam-se.'),
      exTpl({easy:'Back widow curta',normal:'Back widow lenta',hard:'Back widow isométrica'},{easy:'Faz só a parte inicial da subida, sem tirar a cabeça muito do chão.',normal:'Desce e sobe lentamente, 3 segundos em cada fase.',hard:'Mantém a posição de topo o máximo de tempo limpo que conseguires.'},'Opção para quem quer aprender o padrão com mais controlo.','Costas altas e estabilizadores escapulares.','Queixo neutro e pescoço relaxado.')
    ],
    back_scap:[
      exTpl({easy:'Prone W raise curta',normal:'Prone W raise',hard:'Prone W raise com pausa'},{easy:'De barriga para baixo, braços em forma de W. Levanta ligeiramente os cotovelos e mãos do chão com pouca amplitude.',normal:'Mantém testa próxima do chão e levanta braços em W, apertando as omoplatas para baixo e para dentro.',hard:'Segura 1–2 segundos no topo de cada W raise.'},'Excelente para aprender a usar costas altas sem depender do pescoço.','Trapézio médio/inferior, romboides e ombro posterior.','Está bem feito se sentires atrás do ombro e entre as omoplatas; está mal se sentires mais o pescoço do que as costas.'),
      exTpl({easy:'Prone T raise curta',normal:'Prone T raise',hard:'Prone Y-T-W combo'},{easy:'Braços abertos em T, sobe pouco mas sem perder controlo.',normal:'Levanta os braços lateralmente em T, polegares virados para cima ou neutros.',hard:'Alterna Y, T e W lentamente sem tocar no chão entre letras.'},'Foca a parte média das costas e o deltoide posterior.','Trapézio médio, deltoide posterior e romboides.','Pescoço solto, testa perto do chão e ombros longe das orelhas.'),
      exTpl({easy:'Reverse snow angel curta',normal:'Reverse snow angel',hard:'Reverse snow angel lenta'},{easy:'Desenha um arco curto com os braços, mantendo-os leves.',normal:'De barriga para baixo, desenha um arco amplo com os braços, como um anjo invertido, sem tocar no chão.',hard:'Faz o mesmo movimento mas muito lentamente, sentindo a escápula deslizar e apertar.'},'Boa para coordenação escapular e costas altas.','Trapézio médio/inferior e parte posterior do ombro.','Movimento grande mas limpo; não forces a lombar.' )
    ],
    back_lat:[
      exTpl({easy:'Prone lat pull curto',normal:'Prone lat pull',hard:'Prone lat pull com pausa'},{easy:'De barriga para baixo, braços à frente. Levanta pouco o peito e puxa os cotovelos em direção às costelas.',normal:'Eleva ligeiramente o peito e puxa os cotovelos para trás, como se quisesses pô-los nos bolsos de trás.',hard:'Repete e segura 1 segundo quando os cotovelos chegam atrás.'},'Puxa mais pela sensação de dorsais do que os raises clássicos.','Dorsais, redondo maior e costas altas.','Está bem feito se sentires debaixo da axila e atrás do ombro; está mal se for só lombar.'),
      exTpl({easy:'Swimmer pull curta',normal:'Swimmer pulls lentos',hard:'Swimmer pulls com pausa'},{easy:'Alterna braçadas curtas fora do chão, mantendo a testa próxima do solo.',normal:'Braçadas lentas tipo nado, sem tocar no chão, sempre sob tensão.',hard:'Faz a braçada e segura 1 segundo nas posições-chave.'},'Variante dinâmica para costas sem material.','Dorsais, ombro posterior e controlo escapular.','Peito só ligeiramente levantado e ritmo controlado.'),
      exTpl({easy:'Superman pull curta',normal:'Superman pull com pausa',hard:'Lat prayer pull no chão'},{easy:'Eleva pouco o peito e puxa os cotovelos até meio do percurso.',normal:'Puxa os cotovelos até atrás e segura 1 segundo.',hard:'Partindo dos braços mais à frente, traz os cotovelos para baixo e para trás como um “pulldown” rezando contra o ar.'},'Alternativa quando queres um padrão de puxada mais claro.','Dorsais, costas altas e alguma lombar isométrica.','Menos altura do tronco, mais intenção de puxar os cotovelos atrás.')
    ],
    biceps:[
      exTpl({easy:'Curl auto-resistido',normal:'Curl auto-resistido lento',hard:'Hammer curl auto-resistido'},{easy:'Uma mão resiste à outra durante a flexão do cotovelo.',normal:'Sobe em 2 segundos e desce em 4 mantendo resistência manual.',hard:'Pegada neutra e resistência máxima controlada.'},'Bíceps sem pesos externos usando auto-resistência.','Bíceps e braquiorradial.','Resistência contínua em toda a amplitude, sem relaxar no topo.'),
      exTpl({easy:'Curl isométrico 90°',normal:'Curl auto-resistido com pausa',hard:'Hammer isométrico + repetições'},{easy:'Leva o cotovelo a cerca de 90 graus e mantém a resistência por tempo.',normal:'A cada repetição, faz uma pequena pausa a meio da subida.',hard:'Alterna 3–5 segundos de isometria neutra com 1–2 repetições completas.'},'Ótimo quando queres mais ardor local no bíceps.','Bíceps e antebraço.','O cotovelo fica junto ao corpo e a mão que resiste acompanha todo o percurso.'),
      exTpl({easy:'Curl curto contínuo',normal:'Curl auto-resistido alternado',hard:'Curl auto-resistido 1.5 reps'},{easy:'Trabalha numa amplitude mais curta mas sem perder tensão.',normal:'Alterna direita e esquerda mantendo resistência real em ambas.',hard:'Sobe, desce até meio, sobe outra vez e só depois desce completa.'},'Variante para prolongar tempo sob tensão.','Bíceps.','O importante é resistência honesta, não velocidade.')
    ],
    core_front:[
      exTpl({easy:'Prancha',normal:'Hollow hold',hard:'Body-saw plank'},{easy:'Corpo em linha reta, glúteos contraídos e pescoço neutro.',normal:'Lombar colada ao chão e costelas baixas.',hard:'Na prancha, desloca o corpo ligeiramente para a frente e para trás.'},'Anti-extensão para transferir força.','Core anterior.','Lombar controlada, costelas baixas, tensão total.'),
      exTpl({easy:'Dead-bug hold',normal:'Dead-bug alternado',hard:'Hollow rocks curtas'},{easy:'De costas, uma perna de cada vez a 90 graus, lombar colada ao chão.',normal:'Alterna braço e perna opostos sem perder a lombar.',hard:'Pequenos balanços no hollow hold mantendo a posição.'},'Core anterior com feedback claro da lombar.','Reto abdominal e estabilizadores profundos.','Se a lombar sair do chão, reduz amplitude.'),
      exTpl({easy:'Bear hold',normal:'Bear hover taps',hard:'Bear hold longo'},{easy:'Joelhos flutuam poucos centímetros acima do chão.',normal:'Na posição bear, toca alternadamente nos ombros ou joelhos mantendo o tronco estável.',hard:'Mantém a posição mais tempo sem perder a lombar neutra.'},'Boa alternativa quando queres mais ombro e core.','Core, ombro e serrátil.','Joelhos baixos e costas neutras.')
    ],
    core_side:[
      exTpl({easy:'Side plank',normal:'Side plank dip',hard:'Long-lever side plank'},{easy:'Corpo alinhado e anca alta.',normal:'Desce e sobe a anca sob controlo.',hard:'Aumenta a alavanca estendendo mais o corpo.'},'Anti-flexão lateral e oblíquos.','Oblíquos e glúteo médio.','Anca alta e ombro longe da orelha.'),
      exTpl({easy:'Side plank joelho dobrado',normal:'Side plank reach-through',hard:'Side plank pulses'},{easy:'Dobra o joelho de baixo para facilitar.',normal:'Em side plank, roda ligeiramente o tronco passando o braço por baixo e regressa.',hard:'Pulsações curtas mantendo a anca sempre alta.'},'Alternativa mais amigável ou mais dinâmica para a lateral do tronco.','Oblíquos, glúteo médio e estabilidade da bacia.','Mantém o apoio firme e evita colapsar o ombro.'),
      exTpl({easy:'Clamshell hold lateral',normal:'Side plank com abdução curta',hard:'Side plank longa com abdução'},{easy:'Em decúbito lateral, abre ligeiramente o joelho de cima e mantém tensão no glúteo médio.',normal:'Na side plank, levanta ligeiramente a perna de cima.',hard:'Mantém a side plank longa enquanto fazes pequenas abduções.'},'Puxa mais por glúteo médio sem abandonar o core lateral.','Oblíquos e glúteo médio.','Bacia alinhada e movimento pequeno mas limpo.')
    ],
    core_rotation:[
      exTpl({easy:'Shoulder taps',normal:'Shoulder taps lentos',hard:'Plank to pike'},{easy:'Alterna toques sem rodar o tronco.',normal:'Executa mais lento e mais limpo.',hard:'Da prancha sobe a anca em pike e regressa.'},'Core anti-rotação com carga nos ombros.','Core, serrátil e ombro.','Quadril quieto e mãos sob os ombros.'),
      exTpl({easy:'Bear shoulder taps',normal:'Bear hold reach',hard:'Plank drag imaginário'},{easy:'Na posição bear, toca alternadamente nos ombros.',normal:'Estende um braço à frente mantendo tronco estável.',hard:'Imagina arrastar um peso por baixo do corpo sem deixar a bacia rodar.'},'Alternativa com centro de gravidade mais baixo e menos carga nos punhos.','Core anti-rotação e serrátil.','Movimento curto e sem abanar a bacia.'),
      exTpl({easy:'Plank knee taps',normal:'Plank to pike lenta',hard:'Plank toe taps'},{easy:'Da prancha toca um joelho de cada vez no chão e volta.',normal:'Leva a anca para cima lentamente e regressa à prancha.',hard:'Toca alternadamente numa ponta do pé com a mão oposta, controlando a rotação.'},'Boa para variar a anti-rotação e o controlo do tronco.','Core, ombro e coordenação.','Ritmo controlado e costelas baixas.')
    ],
    triceps_iso:[
      exTpl({easy:'Extensão curta de tríceps',normal:'Bodyweight triceps extension',hard:'Diamond push-up pulses'},{easy:'De joelhos, leva a testa ao chão e estende os cotovelos.',normal:'Aumenta a alavanca do corpo para carregar mais os tríceps.',hard:'Pulsações curtas em flexão diamante perto da falha técnica.'},'Braço complementar sem acessórios.','Tríceps.','Cotovelos fechados e controlo absoluto da descida.'),
      exTpl({easy:'Tríceps ajoelhado isométrico',normal:'Extensão de tríceps com pausa',hard:'Extensão 1.5 reps'},{easy:'Mantém metade da extensão durante tempo.',normal:'Segura 1 segundo no ponto mais difícil de cada repetição.',hard:'Faz repetição e meia mantendo o corpo alinhado.'},'Mais tempo sob tensão no tríceps.','Tríceps e estabilidade do ombro.','Movimento vem do cotovelo.'),
      exTpl({easy:'Close-grip de joelhos',normal:'Close-grip push-up',hard:'Close-grip com pausa'},{easy:'Versão apoiada nos joelhos.',normal:'Flexão mãos próximas com cotovelos fechados.',hard:'Mantém pausa curta no fundo antes de subir.'},'Alternativa quando preferes um padrão mais parecido com push-up.','Tríceps e peito interno.','Cotovelos perto do corpo e tronco rígido.')
    ],
    density_lower:[
      exTpl({easy:'Air squat',normal:'Squat tempo contínuo',hard:'Jump squat controlado'},{easy:'Amplitude confortável e ritmo contínuo.',normal:'Desce controlado e sobe com intenção.',hard:'Salto pequeno e aterragem suave.'},'Ativa pernas e acelera densidade global.','Quadríceps e glúteos.','Mantém alinhamento e pousa suave.'),
      exTpl({easy:'Lunge alternada',normal:'Lunge alternada lenta',hard:'Split switch controlado'},{easy:'Alterna passadas com amplitude curta e limpa.',normal:'Faz cada passada devagar, sem perder o tronco.',hard:'Troca a base de forma dinâmica mas controlada, sem impacto excessivo.'},'Mais gasto global sem abandonar pernas.','Quadríceps, glúteos e cardio muscular.','Passos limpos e joelhos estáveis.'),
      exTpl({easy:'Wall sit imaginário',normal:'Squat hold + reps',hard:'Squat pulses'},{easy:'Mantém meia amplitude por tempo.',normal:'Segura o fundo e faz 2–3 repetições entre pausas curtas.',hard:'Pulsações curtas perto do fundo.'},'Boa para densidade e queimadura local.','Quadríceps e glúteos.','Respiração curta, calcanhares firmes.')
    ],
    density_push:[
      exTpl({easy:'Flexão de joelhos',normal:'Flexão',hard:'Flexão lenta perto da falha'},{easy:'Carga reduzida, mas técnica impecável.',normal:'Clássica e limpa.',hard:'4 segundos a descer e sobe firme.'},'Reforço final de peito e tríceps.','Peito e tríceps.','Empurra o chão com intenção e sem quebrar o tronco.'),
      exTpl({easy:'Flexão com pausa',normal:'Close-grip push-up',hard:'Diamond push-up pulses'},{easy:'Pausa breve no fundo para aumentar tensão.',normal:'Mãos mais próximas e cotovelos fechados.',hard:'Pulsações curtas perto do fundo.'},'Acaba a sessão com mais braço anterior.','Peito, tríceps e ombro anterior.','Qualidade do tronco antes da velocidade.'),
      exTpl({easy:'Scapular push-up',normal:'Flexão 1.5 reps',hard:'Pseudo-planche lean push-up'},{easy:'Move só as escápulas.',normal:'Usa a repetição e meia.',hard:'Inclina os ombros à frente para maior alavanca.'},'Variação de densidade sem equipamento.','Peito, tríceps e serrátil.','Ombros longe das orelhas e abdómen ativo.')
    ],
    density_pull:[
      exTpl({easy:'Prone W raise curta',normal:'Prone W raise',hard:'Prone lat pull com pausa'},{easy:'Levanta pouco os braços em W sem forçar o pescoço.',normal:'W raise limpa com aperto claro atrás.',hard:'Puxa os cotovelos para trás e segura 1 segundo.'},'Tração sem material para equilibrar a semana.','Costas altas, parte posterior do ombro e dorsais leves.','Está bem feito se sentires atrás do ombro e entre as omoplatas.'),
      exTpl({easy:'Back widow curta',normal:'Back widow',hard:'Row de cotovelos no chão com pausa'},{easy:'Amplitude curta e controlada.',normal:'Empurra os cotovelos contra o chão para levantar ligeiramente o peito.',hard:'Pausa 1–2 segundos no topo.'},'Opção de remo de chão simples.','Romboides e trapézio médio.','Peito abre e pescoço fica relaxado.'),
      exTpl({easy:'Swimmer pull curta',normal:'Swimmer pulls lentos',hard:'Reverse snow angel lenta'},{easy:'Braçadas curtas sob controlo.',normal:'Braçadas lentas sem tocar no chão.',hard:'Arco invertido muito lento sem perder tensão.'},'Alternativa dinâmica para costas.','Dorsais, ombro posterior e controlo escapular.','Menos altura do tronco, mais trabalho do braço e escápula.')
    ],
    finisher:[
      exTpl({easy:'Curl auto-resistido',normal:'Close-grip push-up',hard:'Pseudo-planche lean push-up'},{easy:'Uma mão resiste à outra durante toda a flexão do cotovelo.',normal:'Flexão mãos próximas com foco em tríceps.',hard:'Inclinação anterior dos ombros para mais carga relativa.'},'Fecho de braços misto: bíceps no fácil, tríceps/peito nas variantes seguintes.','Braços e empurrar complementar.','Escolhe a variante que melhor respeita o teu objetivo do bloco.'),
      exTpl({easy:'Hammer curl auto-resistido',normal:'Bodyweight triceps extension',hard:'Diamond push-up pulses'},{easy:'Pegada neutra e resistência manual contínua.',normal:'Extensão de tríceps em alavanca de joelhos.',hard:'Pulsações curtas em diamante.'},'Opção mais direta de braços.','Bíceps, braquiorradial ou tríceps conforme a variante.','Procura tensão real no braço escolhido.'),
      exTpl({easy:'Curl isométrico 90°',normal:'Close-grip com pausa',hard:'Close-grip 1.5 reps'},{easy:'Mantém o ângulo de 90° com resistência manual.',normal:'Pausa breve no fundo da close-grip.',hard:'Repetição e meia na close-grip para aumentar tensão.'},'Alternativa quando queres finisher mais previsível.','Braço e peito interno.','Vai perto da fadiga técnica mas sem perder forma.')
    ]
  };
  const angleLabelMap = { front:'Frente', three_quarter:'3/4', side:'Lateral' };
  const clampIdx = (v,max) => Math.max(0, Math.min(Number(v)||0, max));
  const cloneExercise = obj => JSON.parse(JSON.stringify(obj));
  function swapSlotKey(planKey, idx){ return `${planKey}_${idx}`; }
  function getSwapStore(){ try{ return JSON.parse(localStorage.getItem(V23.swaps) || '{}'); }catch{ return {}; } }
  function saveSwapStore(obj){ localStorage.setItem(V23.swaps, JSON.stringify(obj)); }
  function familyForSlot(planKey, idx){ return slotFamilies[swapSlotKey(planKey, idx)] || null; }
  function swapOptionsFor(planKey, idx){
    const base = plans.find(p=>p.key===planKey)?.exercises[idx];
    const fam = familyForSlot(planKey, idx);
    const options = fam ? (swapLibraries[fam] || []) : [];
    if(options.length) return options;
    return base ? [base] : [];
  }
  function swapIndexFor(planKey, idx){ const options = swapOptionsFor(planKey, idx); const store = getSwapStore(); return clampIdx(store[swapSlotKey(planKey, idx)] || 0, Math.max(options.length-1,0)); }
  function resolvedExercise(planKey, idx){ const options = swapOptionsFor(planKey, idx); return cloneExercise(options[swapIndexFor(planKey, idx)] || plans.find(p=>p.key===planKey)?.exercises[idx]); }
  function resolvedPlan(basePlan){ return { ...basePlan, exercises: basePlan.exercises.map((_,idx)=>resolvedExercise(basePlan.key, idx)) }; }
  function cycleSwap(planKey, idx, delta=1){
    const options = swapOptionsFor(planKey, idx); if(options.length<2) return;
    const store = getSwapStore(); const key = swapSlotKey(planKey, idx);
    const current = swapIndexFor(planKey, idx);
    store[key] = (current + delta + options.length) % options.length;
    saveSwapStore(store);
    renderAll();
  }
  function currentPlan(){ return resolvedPlan(plans[selectedPlanIndex()]); }
  function nextPlanObj(){
    if(state.selectedPlanMode!=='auto') return resolvedPlan(plans[(selectedPlanIndex()+1)%plans.length]);
    const seq=rotationSequence(); const nextKey=seq[(state.autoPlanPos+1)%seq.length]; return resolvedPlan(plans.find(p=>p.key===nextKey) || plans[0]);
  }
  function currentExercise(){ return currentPlan().exercises[state.exerciseIndex]; }
  function nextExerciseAfterCurrentBlock(){ let exIndex=state.exerciseIndex+1, round=state.roundIndex; const plan=currentPlan(); if(exIndex>=plan.exercises.length){ exIndex=0; round+=1; } if(round>=roundsPerSession(plan.key)) return null; return { exercise:plan.exercises[exIndex], index:exIndex, round:round+1 }; }
  function totalWorkBlocks(){ const plan=currentPlan(); return plan.exercises.length * roundsPerSession(plan.key); }
  function completedWorkBlocks(){ const plan=currentPlan(); return state.roundIndex * plan.exercises.length + state.exerciseIndex; }
  function progressPct(){ return clamp(Math.round((completedWorkBlocks()/Math.max(totalWorkBlocks(),1))*100),0,100); }
  function currentVariantName(ex, idx=state.exerciseIndex, planKey=currentPlan().key){ return ex.variants[variantTier(planKey, idx)]; }
  function currentVariantInstruction(ex, idx=state.exerciseIndex, planKey=currentPlan().key){ return ex.instructions[variantTier(planKey, idx)]; }
  function currentCfg(){ return difficultyConfig[state.difficulty]; }
  function roundsPerSession(planKey=currentPlan().key){ return volumeTierForPlan(planKey).rounds; }
  function bodyDefaults(){
    const body = getBody();
    if (!body.height && !body.weight){
      const seeded = { date:todayKey(), age:'', height:'173', weight:'62.6', waist:'', arm:'', chest:'', thigh:'', hip:'', protein:'', sleep:'7.5' };
      saveBody(seeded); saveBodyHistory([seeded]);
    }
  }
  function angleLabel(v){ return angleLabelMap[v] || 'Sem ângulo'; }
  function readComparePrefs(){
    return {
      angle: localStorage.getItem(V23.photoCompareAngle) || 'auto',
      window: String(localStorage.getItem(V23.photoCompareWindow) || '30')
    };
  }
  function setComparePrefs(partial){
    const next = { ...readComparePrefs(), ...partial };
    localStorage.setItem(V23.photoCompareAngle, next.angle);
    localStorage.setItem(V23.photoCompareWindow, String(next.window));
    if(el.compareAngleSelect) el.compareAngleSelect.value = next.angle;
    if(el.compareWindowSelect) el.compareWindowSelect.value = String(next.window);
    renderPhotoCompare();
  }
  function fillPhotoInputs(){
    if(el.photoDateInput) el.photoDateInput.value = todayKey();
    if(el.photoAngleInput) el.photoAngleInput.value = 'front';
    const prefs = readComparePrefs();
    if(el.compareAngleSelect) el.compareAngleSelect.value = prefs.angle;
    if(el.compareWindowSelect) el.compareWindowSelect.value = String(prefs.window);
  }
  function fillBodyInputs(){ const body=getBody(); el.entryDate.value = body.date || todayKey(); el.ageInput.value=body.age || ''; el.heightInput.value=body.height || ''; el.weightInput.value=body.weight || ''; el.waistInput.value=body.waist || ''; el.armInput.value=body.arm || ''; if(el.chestInput) el.chestInput.value=body.chest || ''; if(el.thighInput) el.thighInput.value=body.thigh || ''; if(el.hipInput) el.hipInput.value=body.hip || ''; el.proteinInput.value=body.protein || ''; el.sleepInput.value=body.sleep || ''; }
  function saveBodyFromInputs(){
    const entry={ date:el.entryDate.value || todayKey(), age:el.ageInput.value || '', height:el.heightInput.value || '', weight:el.weightInput.value || '', waist:el.waistInput.value || '', arm:el.armInput.value || '', chest:el.chestInput?.value || '', thigh:el.thighInput?.value || '', hip:el.hipInput?.value || '', protein:el.proteinInput.value || '', sleep:el.sleepInput.value || '' };
    saveBody(entry); const history=getBodyHistory().filter(x=>x.date!==entry.date); history.push(entry); saveBodyHistory(history); fillBodyInputs(); updateBodyPanel(); renderAnalysis(); renderMonthlySummary();
  }
  function nearestHistory(daysBack=30){
    const hist=getBodyHistory(); if(hist.length<2) return null;
    const latest=hist[hist.length-1]; const target=addDaysToKey(latest.date, -daysBack);
    const earlier = hist.filter(h=>h.date < latest.date);
    if(!earlier.length) return null;
    let best = earlier[0], bestDiff = Math.abs(dateFromKey(best.date) - dateFromKey(target));
    earlier.forEach(item=>{ const diff = Math.abs(dateFromKey(item.date) - dateFromKey(target)); if(diff < bestDiff){ best=item; bestDiff=diff; } });
    return { latest, base:best, days:Math.max(1, Math.round((dateFromKey(latest.date)-dateFromKey(best.date))/86400000)) };
  }
  function measurementDelta(field, from, to){ const a=Number(from?.[field]); const b=Number(to?.[field]); if(!Number.isFinite(a) || !Number.isFinite(b)) return null; return +(b-a).toFixed(1); }
  function deltaText(v, unit='cm'){ if(v==null) return '—'; return `${v>0?'+':''}${v.toFixed(1)} ${unit}`; }
  function monthlySummary(){
    const s30=sessionsInLastDays(30); const adherence=calcAdherence(30); const target=Math.round(weeklyTargetSessions()*4.3);
    const pair=nearestHistory(30); const photos=getPhotos(); const prefs=readComparePrefs(); const angle = prefs.angle==='auto' ? (photos[photos.length-1]?.angle || 'front') : prefs.angle; const sameAngle=photos.filter(p=>p.angle===angle).length;
    let status='Base';
    if(adherence>=80) status='Forte'; else if(adherence>=62) status='Aceitável'; else status='Irregular';
    const deltas = pair ? {
      weight: measurementDelta('weight', pair.base, pair.latest), waist: measurementDelta('waist', pair.base, pair.latest), arm: measurementDelta('arm', pair.base, pair.latest), chest: measurementDelta('chest', pair.base, pair.latest), thigh: measurementDelta('thigh', pair.base, pair.latest), hip: measurementDelta('hip', pair.base, pair.latest)
    } : null;
    let action = 'Mantém o bloco atual e procura repetir um mês com consistência alta.';
    if(status==='Irregular') action = 'Fecha primeiro 18–22 sessões em 30 dias antes de tentar empurrar mais volume ou intensidade.';
    else if(state.profileMode==='lower_glutes') action = 'Mês suficiente para puxar mais B e E; observa coxa/anca e fotos do mesmo ângulo.';
    else if(state.profileMode==='chest_arms') action = 'Mês útil para observar braço/peito e cintura. Se o braço sobe e a cintura não dispara, a trajetória mantém-se boa.';
    return { s30, adherence, target, status, pair, deltas, sameAngle, angle, action };
  }
  function renderMonthlySummary(){
    if(!el.monthlySummaryGrid) return;
    const m=monthlySummary();
    el.monthlySummaryPill.textContent = m.status;
    el.monthlySummaryGrid.innerHTML = `<div class="summary-card"><div class="v">${m.s30}/${m.target}</div><div class="l">Sessões / alvo 30d</div></div><div class="summary-card"><div class="v">${m.adherence}%</div><div class="l">Consistência 30d</div></div><div class="summary-card"><div class="v">${m.sameAngle}</div><div class="l">Fotos no ângulo ${angleLabel(m.angle)}</div></div>`;
    if(!m.pair || !m.deltas){ el.monthlySummaryText.innerHTML = 'Adiciona pelo menos dois registos corporais em semanas diferentes para abrir a leitura mensal de peso, cintura, braço, peito, coxa e anca/glúteo.'; return; }
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
  function pickPhotoPair(){
    const photos=getPhotos(); if(!photos.length) return { recent:null, older:null, angle:null, targetDays:30 };
    const prefs=readComparePrefs(); const targetDays=Number(prefs.window || 30);
    let recent = photos[photos.length-1];
    let angle = prefs.angle;
    let filtered = photos;
    if(angle==='auto'){
      angle = recent.angle || 'front';
      const same = photos.filter(p=>p.angle===angle);
      if(same.length) { filtered = same; recent = same[same.length-1]; }
    } else {
      const same = photos.filter(p=>p.angle===angle);
      if(same.length) { filtered = same; recent = same[same.length-1]; }
    }
    const olderOptions = filtered.filter(p=>p.date < recent.date);
    if(!olderOptions.length) return { recent, older:null, angle, targetDays };
    const target = dateFromKey(addDaysToKey(recent.date, -targetDays));
    let older = olderOptions[0], best = Math.abs(dateFromKey(older.date) - target);
    olderOptions.forEach(p=>{ const diff = Math.abs(dateFromKey(p.date) - target); if(diff < best){ older = p; best = diff; } });
    return { recent, older, angle, targetDays };
  }
  function renderPhotoCompare(){
    if(!el.photoCompareGrid) return;
    const pair = pickPhotoPair();
    const prefs = readComparePrefs();
    if(!pair.recent){ el.photoCompareGrid.innerHTML=''; el.photoCompareText.textContent='Sem fotos locais ainda. Guarda uma foto frontal, 3/4 ou lateral e repete no mesmo ângulo.'; return; }
    const cards = [pair.older, pair.recent].filter(Boolean);
    const labels = [pair.older ? `Comparação alvo ${pair.targetDays}d` : 'Mais recente', 'Mais recente'];
    el.photoCompareGrid.innerHTML = cards.map((p,i)=>`<div class="photo-frame compare"><img src="${p.dataUrl}" alt="Foto de progresso ${p.date}"><div class="meta"><strong>${labels[i]}</strong>${formatShortDate(p.date)}${p.angle ? ` · ${angleLabel(p.angle)}` : ''}</div></div>`).join('');
    if(!pair.older){ el.photoCompareText.innerHTML = `Existe 1 foto utilizável para o filtro atual (${prefs.angle==='auto' ? 'automático' : angleLabel(prefs.angle)}). Mantém o mesmo ângulo, a mesma distância e volta a fotografar dentro de ${pair.targetDays} dias.`; return; }
    const gap = Math.max(1, Math.round((dateFromKey(pair.recent.date)-dateFromKey(pair.older.date))/86400000));
    el.photoCompareText.innerHTML = `Comparação local lado a lado entre <strong>${formatShortDate(pair.older.date)}</strong> e <strong>${formatShortDate(pair.recent.date)}</strong> (${gap} dias). O filtro atual está em <strong>${prefs.angle==='auto' ? `automático · ${angleLabel(pair.angle)}` : angleLabel(pair.angle)}</strong>.`;
  }
  function renderWeeklySummary(){
    if(!el.weeklySummaryGrid) return;
    const w=weeklySummary();
    const profile = state.profileMode==='lower_glutes' ? 'B e E' : state.profileMode==='chest_arms' ? 'A e D' : 'dias dominantes';
    el.weeklyRecommendationPill.textContent=w.status;
    el.weeklySummaryGrid.innerHTML=`<div class="weekly-card"><div class="v">${w.s7}/${w.target}</div><div class="l">Sessões / alvo 7d</div></div><div class="weekly-card"><div class="v">${w.adherence}%</div><div class="l">Consistência 28d</div></div><div class="weekly-card"><div class="v">${w.volume.label}</div><div class="l">Volume automático</div></div>`;
    el.weeklyRecommendationText.innerHTML=`<div class="label">Recomendação objetiva</div><div style="margin-top:6px;color:var(--text);font-weight:760">${w.action}</div><div class="micro-copy">Nesta versão, o plano de hoje corre com <strong>${w.volume.rounds} rondas</strong>. Quando a aderência sobe, a app dá mais trabalho aos ${profile}; quando cai, desce volume para manter aderência real.</div>`;
  }
  function renderTrendChart(){
    const hist=getBodyHistory().slice(-8); if(hist.length<2){ el.progressChart.innerHTML=''; return; }
    const width=320, height=210, pad=18; const labels=hist.map(h=>h.date.slice(5));
    const all=hist.flatMap(h=>[Number(h.weight)||null, Number(h.waist)||null, Number(h.arm)||null]).filter(v=>v!=null);
    const min=Math.min(...all), max=Math.max(...all);
    const scaleY=v => height-pad-((v-min)/Math.max(max-min,0.1))*(height-pad*2);
    const scaleX=i => pad+(i/Math.max(hist.length-1,1))*(width-pad*2);
    const pathFor = getter => hist.map((h,i)=>{ const v=getter(h); if(!v && v!==0) return ''; const before = hist.slice(0,i).some(x=>getter(x) || getter(x)===0); return `${before?'L':'M'} ${scaleX(i).toFixed(1)} ${scaleY(v).toFixed(1)}`; }).filter(Boolean).join(' ');
    el.progressChart.innerHTML = `<svg viewBox="0 0 ${width} ${height}" class="svg-host"><line x1="18" y1="180" x2="302" y2="180" stroke="#D9DCE4" stroke-width="1"/><line x1="18" y1="126" x2="302" y2="126" stroke="#ECEEF3" stroke-width="1"/><line x1="18" y1="72" x2="302" y2="72" stroke="#ECEEF3" stroke-width="1"/><path d="${pathFor(h=>Number(h.weight)||null)}" fill="none" stroke="#0A84FF" stroke-width="2.5" stroke-linecap="round"/><path d="${pathFor(h=>Number(h.waist)||null)}" fill="none" stroke="#7B7F89" stroke-width="2.2" stroke-linecap="round"/><path d="${pathFor(h=>Number(h.arm)||null)}" fill="none" stroke="#36A269" stroke-width="2.2" stroke-linecap="round"/>${hist.map((h,i)=>`<text x="${scaleX(i).toFixed(1)}" y="198" text-anchor="middle" fill="#6E6E73" font-size="10">${labels[i]}</text>`).join('')}</svg>`;
  }
  function renderAnalysis(){
    const hist=getBodyHistory().slice(-8); el.analysisPill.textContent = hist.length>=2 ? `${hist.length} registos` : '2+ registos';
    if(hist.length>=2){
      const first=hist[0], last=hist[hist.length-1];
      const lines = [];
      const add = (label, field, unit='cm')=>{ const a=Number(first[field]); const b=Number(last[field]); if(Number.isFinite(a) && Number.isFinite(b)) lines.push(`${label} ${(b-a)>=0?'+':''}${(b-a).toFixed(1)} ${unit}`); };
      add('peso','weight','kg'); add('cintura','waist'); add('braço','arm'); add('peito','chest'); add('coxa','thigh'); add('anca/glúteo','hip');
      el.analysisText.textContent = lines.length ? `Desde o primeiro destes registos: ${lines.join(' · ')}.` : 'Registos disponíveis, mas ainda faltam medidas comparáveis.';
    } else el.analysisText.textContent='Adiciona pelo menos dois registos para ver tendência de peso, cintura, braço, peito, coxa e anca/glúteo.';
    renderTrendChart(); const week=sessionsInLastDays(7); el.weekSummaryPill.textContent=`${week}/${weeklyTargetSessions()}`;
  }
  function buildProjectionModel({height,weight,waist,age,protein,sleep,adherence}){
    const profile=profileFactor(height,weight,waist,age); const p=proteinStatus(weight,protein); const sleepF=sleepFactor(sleep); const diffF=difficultyFactor(); const sessions=getSessions().length; const planningMode=sessions<4 && adherence<15; const effectiveAdherence=planningMode ? 85 : adherence; const adherenceF = 0.58 + (effectiveAdherence/100)*0.47; let proteinF=0.93; if(!p.assumed){ if(p.band==='ótima') proteinF=1; else if(p.band==='alta') proteinF=1.01; else proteinF=0.86; } const pureBodyweightF=0.91; const chestBonus = state.profileMode==='chest_arms' ? 1.04 : state.profileMode==='lower_glutes' ? 0.98 : 1; const lowerBonus = state.profileMode==='lower_glutes' ? 1.05 : 1; const basePotential = weight && weight<=66 ? 2.25 : 2.05; let mid = basePotential * profile * sleepF * proteinF * adherenceF * diffF * pureBodyweightF * chestBonus * lowerBonus; mid = clamp(mid,0.7,3.1); const low = clamp(Math.round(mid*0.78*10)/10,0.6,2.9); const high = clamp(Math.round(mid*1.22*10)/10,low+0.4,3.4); const likely=Math.round((((low+high)/2))*100)/100; const monthlyLikely=Math.round((likely/6)*100)/100; const avgDailyLikely=Math.round((likely*1000)/180); const sleepScore=clamp(Math.round(sleepF*100),0,100); const proteinScore=p.assumed ? 68 : clamp(Math.round(proteinF*100),0,100); const bodyScore=clamp(Math.round(profile*100),0,100); const visibilityScore=clamp(Math.round(effectiveAdherence*0.42 + sleepScore*0.18 + proteinScore*0.18 + bodyScore*0.12 + 10),0,100); return { low, high, likely, monthlyLikely, avgDailyLikely, visibilityScore, planningMode, effectiveAdherence, targetWeightLow:Math.round((weight+low+0.4)*10)/10, targetWeightHigh:Math.round((weight+high+1)*10)/10 };
  }
  function updateBodyPanel(){
    const b=latestBody(); const height=Number(b.height||0), weight=Number(b.weight||0), waist=Number(b.waist||0), age=Number(b.age||0), protein=Number(b.protein||0), sleep=Number(b.sleep||0), adherence=calcAdherence();
    el.consistencyBadge.textContent=`Consistência ${adherence}%`;
    if(!height || !weight){ el.bmiValue.textContent='—'; el.proteinTargetBody.textContent='—'; el.leanGainBody.textContent='—'; el.weightGoalBody.textContent='—'; el.projectionFill.style.width='0%'; el.projectionText.textContent='Introduz peso e altura para personalizar a projeção.'; el.visualGainValue.textContent='—'; el.monthlyGainValue.textContent='—'; el.projectionChart.innerHTML=''; el.projectionChecks.innerHTML=''; el.trajectoryGrid.innerHTML=''; el.projectionDetail.innerHTML=''; el.bodyInsight.innerHTML=''; return; }
    const bmi=weight/((height/100)**2); const model=buildProjectionModel({height,weight,waist,age,protein,sleep,adherence}); const story=projectionNarrative(model); const adherenceTarget = model.effectiveAdherence>=80 ? 'mantém ≥80%' : 'sobe para 80%';
    el.bmiValue.textContent=bmi.toFixed(1); el.proteinTargetBody.textContent=proteinRange(weight); el.leanGainBody.textContent=`+${model.low} a ${model.high} kg`; el.weightGoalBody.textContent=`${model.targetWeightLow}–${model.targetWeightHigh} kg`;
    el.projectionFill.style.width=`${model.visibilityScore}%`;
    el.projectionText.textContent=`Linha azul escura = cenário provável. Aos 180 dias, a trajetória provável para ti é +${model.likely.toFixed(2)} kg de massa magra acumulada.`;
    el.visualGainValue.textContent=visibilityLabel(model.visibilityScore); el.monthlyGainValue.textContent=`~${model.monthlyLikely.toFixed(2)} kg/mês`;
    el.trajectoryGrid.innerHTML = `<div class="trajectory-card"><div class="v">${trajectoryBand(model.visibilityScore)}</div><div class="l">Trajetória atual</div></div><div class="trajectory-card"><div class="v">${model.avgDailyLikely} g</div><div class="l">Média provável por dia</div></div><div class="trajectory-card"><div class="v">${adherenceTarget}</div><div class="l">Ação para puxar a curva</div></div>`;
    renderProjectionChart(model);
    el.projectionDetail.innerHTML=`<div class="note-box"><div class="label">Como interpretar</div><div style="margin-top:6px;color:var(--text);font-weight:700">${story.headline}</div><div class="legend-grid"><div class="legend-item"><span class="dot low"></span><div><strong>Conservador</strong><span>Faixa inferior plausível se a técnica e a consistência forem irregulares.</span></div></div><div class="legend-item"><span class="dot likely"></span><div><strong>Provável</strong><span>A leitura principal. É a melhor estimativa com os teus dados atuais.</span></div></div><div class="legend-item"><span class="dot high"></span><div><strong>Ótimo</strong><span>Teto plausível se a consistência, recuperação e execução forem muito boas.</span></div></div></div><div class="micro-copy">${story.line}</div><div class="micro-copy">Em média matemática, a tua linha provável equivale a cerca de <strong>${story.avgDaily} g/dia</strong>, mas o corpo não cresce de forma linear: o valor vai-se acumulando ao longo das semanas.</div></div>`;
    const measureHint = [];
    if(b.arm) measureHint.push(`braço ${b.arm} cm`); if(b.chest) measureHint.push(`peito ${b.chest} cm`); if(b.thigh) measureHint.push(`coxa ${b.thigh} cm`); if(b.hip) measureHint.push(`anca/glúteo ${b.hip} cm`);
    el.bodyInsight.innerHTML=`<div class="note-box"><div class="label">Leitura rápida</div><div style="margin-top:6px;color:var(--text);font-weight:700">Hoje, o número mais útil para seguires é <strong>+${model.likely.toFixed(2)} kg em 180 dias</strong>.</div><div class="micro-copy">Tradução prática: se o peso subir devagar, a cintura não disparar e as medidas prioritárias acompanharem, estás a andar na direção certa. ${story.action}</div>${measureHint.length ? `<div class="micro-copy">Últimas medidas relevantes: ${measureHint.join(' · ')}.</div>` : ''}</div>`;
  }
  function exerciseGuide(name){
    const n=normalizeName(name);
    const out=(intro,setup,execution,breathing,mistake,regression,focus,cues)=>({intro,setup,execution,breathing,mistake,regression,focus,cues});
    if(n.includes('flexao de joelhos')) return out('Flexão apoiada nos joelhos para aprender a mecânica de empurrar sem perder o tronco.','Joelhos no chão, mãos um pouco mais largas do que os ombros, ancas alinhadas com tronco e cabeça em posição neutra.','Dobra os cotovelos e deixa o peito aproximar-se do chão primeiro. Sobe empurrando o chão para longe sem deixar a barriga cair.','Inspira na descida. Expira a subir. Ritmo controlado, sem pressa.','Dobrar a lombar e fazer o movimento só com o pescoço ou com a barriga solta.','Encurta a amplitude e usa uma base ligeiramente mais alta com mãos mais abertas.','Peito, tríceps e deltoide anterior.','Está bem feito se o corpo sobe em bloco e sentes peito/tríceps.');
    if(n.includes('flexao') || n.includes('close-grip') || n.includes('diamond') || n.includes('pseudo-planche')) return out('Flexão / variante de flexão para peito e tríceps.','Posição de prancha alta: mãos firmes no chão, ombros ativos, glúteos e abdómen contraídos. Na close-grip ou diamante, aproxima mais as mãos.','Desce o peito em direção ao chão mantendo o corpo inteiro. Na pseudo-planche, inclina ligeiramente os ombros para a frente antes de dobrar os cotovelos.','Inspira a descer. Expira a empurrar. Em variantes lentas, controla 3–4 segundos na excêntrica.','Deixar a lombar cair, abrir demasiado os cotovelos ou encurtar a amplitude sem necessidade.','Passa para joelhos no chão ou para pausa mais curta.','Peito, tríceps e ombro anterior.','Peito desce primeiro, tronco inteiro e cotovelos sob controlo.');
    if(n.includes('pike') || n.includes('dolphin')) return out('Empurrar mais vertical para ombros e tríceps.','Forma um V invertido: mãos no chão, anca alta e peso distribuído sobretudo para a frente. Na dolphin, antebraços podem ficar apoiados.','Dobra os cotovelos e leva a cabeça entre as mãos. Sobe empurrando o chão sem deixar a anca colapsar.','Expira a subir. Inspira a descer. Faz pausa curta no fundo se quiseres mais controlo.','Transformar o movimento numa flexão horizontal ou encolher os ombros para as orelhas.','Reduz a amplitude e mantém só a posição isométrica de pike/dolphin.','Deltoides, tríceps e serrátil.','Anca alta, pescoço neutro e chão bem empurrado.');
    if(n.includes('scapular push-up')) return out('Movimento curto para ensinar a escápula a deslizar e estabilizar.','Prancha alta com braços estendidos.','Sem dobrar muito os cotovelos, deixa o peito afundar ligeiramente entre os ombros e depois afasta o chão arredondando um pouco a parte alta das costas.','Respiração curta e regular.','Dobrar os cotovelos em excesso e transformar isto numa flexão comum.','Faz de joelhos no chão.','Serrátil e controlo escapular.','Pensa em empurrar o chão para longe no final.');
    if(n.includes('air squat') || n.includes('tempo squat') || n.includes('squat 1.5') || n.includes('squat com pausa') || n.includes('squat hold') || n.includes('jump squat')) return out('Agachamento base para pernas e glúteos.','Pés à largura dos ombros ou ligeiramente mais abertos, pontas dos pés levemente para fora, tronco estável.','Leva a bacia para trás e para baixo, mantendo o pé inteiro no chão. Sobe empurrando o chão com os dois pés. Nas variantes com pausa ou 1.5 reps, respeita o tempo extra no fundo.','Inspira a descer. Expira a subir.','Levantar os calcanhares, juntar os joelhos para dentro ou cair demasiado para a frente.','Reduz amplitude e usa só a parte que controlas.','Quadríceps, glúteos e algum core.','Joelhos seguem a linha do pé e o tronco mantém-se firme.');
    if(n.includes('split squat') || n.includes('reverse lunge') || n.includes('lunge alternada')) return out('Trabalho unilateral para pernas e glúteos.','Dá um passo à frente ou atrás e monta uma base estável, como se estivesses em trilhos paralelos, não numa linha apertada.','Desce na vertical até os joelhos dobrarem. Sobe a partir do pé da frente. Nas lunges alternadas, regressa ao centro antes de trocar lado.','Inspira a descer. Expira a subir.','Empurrar com a perna de trás ou perder equilíbrio a cada repetição.','Segura numa parede, encurta a passada e reduz a profundidade.','Quadríceps, glúteos e estabilidade da bacia.','Peso no pé da frente, tronco alto e joelho alinhado.');
    if(n.includes('glute bridge') || n.includes('single-leg bridge') || n.includes('long-lever bridge') || n.includes('frog pump') || n.includes('bridge march') || n.includes('hamstring bridge')) return out('Exercício de extensão da anca para glúteos e posteriores.','Deita-te de costas. Na ponte normal, joelhos dobrados e pés no chão. No frog pump, une as solas dos pés. Na long-lever, afasta os calcanhares.','Empurra o chão com os calcanhares e sobe a anca até formar uma linha entre joelhos, bacia e ombros. Desce com controlo.','Expira ao subir. Inspira a descer. Pausa 1 segundo no topo sempre que possível.','Arquear a lombar em vez de subir com os glúteos.','Usa a ponte bilateral normal com amplitude menor.','Glúteos e isquiotibiais.','Está bem feito se sentires glúteo/posterior; está mal se sentires só lombar.');
    if(n.includes('hamstring walkout') || n.includes('walkout parcial')) return out('Finisher posterior exigente feito a partir da ponte.','Começa na posição de ponte, anca alta e calcanhares firmes.','Sem deixar a bacia cair, vai caminhando com os calcanhares para a frente em passos curtos. Depois regressa da mesma forma.','Respiração curta, constante.','Dar passos longos demais e perder logo a anca alta.','Faz só meia distância ou volta à ponte normal.','Isquiotibiais, glúteos e controlo do core posterior.','Passos curtos, anca alta e sem pressa.');
    if(n.includes('retracao escapular deitado') || n.includes('back widow') || n.includes('row de cotovelos no chao')) return out('Tração de chão para costas altas. Parece pequeno, mas é um dos melhores padrões sem equipamento.','Deita-te de costas. Dobra os braços e pousa os cotovelos no chão perto do tronco. O peito fica “aberto” e a cabeça neutra.','Empurra os cotovelos contra o chão como se quisesses remar o chão para baixo. O peito sobe só alguns centímetros; o objetivo é apertar as omoplatas, não fazer uma ponte de costas.','Expira no momento em que o peito sobe e as omoplatas apertam. Inspira a descer. Podes segurar 1–2 segundos no topo.','Empurrar com a cabeça ou arquear a lombar para parecer que sobes mais.','Faz a amplitude curta e tenta apenas sentir as omoplatas a aproximarem-se.','Deves sentir sobretudo entre as omoplatas, atrás dos ombros e um pouco junto às axilas.','Está bem feito se sentires a parte alta das costas; está mal se sentires só pescoço ou lombar.');
    if(n.includes('prone w raise') || n.includes('prone t raise') || n.includes('reverse snow angel') || n.includes('y-t-w')) return out('Exercício de barriga para baixo para ensinar costas altas e ombro posterior.','Deita-te de barriga para baixo. Testa próxima do chão, abdómen ligeiramente ativo e braços na forma indicada: W, T ou arco de snow angel.','Levanta ligeiramente os braços do chão e move-os no padrão indicado sem encolher os ombros. A amplitude não precisa de ser grande; precisa de ser limpa.','Respira normalmente. Mantém o pescoço relaxado e a testa perto do chão.','Levantar demasiado a cabeça e contrair mais o pescoço do que as costas.','Reduz a amplitude e faz menos repetições/ligações entre letras.','Deves sentir romboides, trapézio médio/inferior e parte posterior do ombro.','Está bem feito se sentires atrás do ombro e entre as omoplatas; está mal se o pescoço dominar o esforço.');
    if(n.includes('prone lat pull') || n.includes('swimmer') || n.includes('superman pull') || n.includes('lat prayer')) return out('Puxada ventral para dar mais sensação de dorsais e axila posterior.','De barriga para baixo, braços à frente e peito apenas ligeiramente fora do chão.','Puxa os cotovelos para baixo e para trás, como se quisesses metê-los nos bolsos de trás. Nas braçadas tipo swimmer, mantém a tensão contínua durante todo o arco.','Expira na puxada. Inspira quando voltas a estender os braços.','Levantar demasiado o tronco e transformar tudo num exercício lombar.','Eleva menos o peito e encurta a amplitude dos braços.','Deves sentir debaixo da axila, atrás do ombro e na parte média das costas.','Menos altura do peito, mais intenção de puxar cotovelos atrás.');
    if(n.includes('curl auto-resistido') || n.includes('hammer') || n.includes('curl isometrico')) return out('Curl de bíceps sem pesos, usando uma mão para resistir à outra.','Fica de pé ou sentado. O braço que trabalha tenta fletir o cotovelo enquanto a outra mão faz força contrária.','Sobe lentamente contra a resistência da outra mão. Desce ainda mais devagar sem aliviar a pressão. Nas isometrias, mantém o ângulo pedido enquanto continuas a resistir.','Expira a subir. Inspira a descer. Tensão contínua.','Resistência fraca no início e forte só no fim.','Diminui a resistência para conseguires uma amplitude completa e limpa.','Bíceps e braquiorradial.','A mão que resiste acompanha todo o percurso.');
    if(n.includes('prancha') || n.includes('hollow') || n.includes('body-saw') || n.includes('dead-bug') || n.includes('bear')) return out('Bloco de core anti-extensão. O objetivo é travar a lombar e manter o tronco compacto.','Na prancha/bear: mãos ou antebraços no chão e coluna neutra. No hollow/dead-bug: deitado de costas com lombar colada ao chão.','Mantém costelas baixas, glúteos contraídos e amplitude só até onde a lombar fica controlada.','Respiração curta, baixa e regular.','Subir demasiado a anca ou deixar a lombar afundar.','Encurta a alavanca: joelhos no chão, pernas mais dobradas ou posição bear mais alta.','Core anterior e estabilizadores profundos.','Se perderes a lombar, a repetição acabou.');
    if(n.includes('side plank') || n.includes('clamshell')) return out('Bloco lateral para oblíquos e glúteo médio.','Apoia o antebraço no chão com cotovelo debaixo do ombro. Empilha ou semi-empilha as pernas consoante a variante.','Eleva a anca e mantém o corpo comprido. Nas dips, desce e sobe a anca com controlo. Nas variantes com perna, o movimento é pequeno mas limpo.','Respiração curta e estável.','Rodar o tronco para o chão ou colapsar o ombro.','Dobra o joelho de baixo ou reduz a alavanca.','Oblíquos e glúteo médio.','Anca alta, ombro longe da orelha e bacia alinhada.');
    if(n.includes('shoulder taps') || n.includes('plank to pike') || n.includes('plank drag') || n.includes('toe taps')) return out('Core anti-rotação com carga nos ombros.','Começa em prancha alta ou bear, com base suficientemente larga para conseguires estabilidade.','Executa o toque, alcance ou subida para pike sem deixar a bacia rodar. O objetivo é manter o tronco quieto enquanto um membro se move.','Expira em cada toque ou subida. Inspira entre repetições.','Abanar a anca de um lado para o outro a cada repetição.','Alarga a base dos pés ou vai mais devagar.','Core, serrátil, ombro e coordenação.','Quadril quieto e chão bem empurrado.');
    if(n.includes('triceps extension') || n.includes('extensao curta de triceps') || n.includes('triceps ajoelhado')) return out('Extensão de tríceps em cadeia fechada, parecida com um “skull crusher” com peso corporal.','Ajoelha-te no chão e coloca as mãos ou antebraços à frente do corpo. Quanto mais à frente estiveres, mais difícil fica.','Dobra os cotovelos levando a testa na direção do chão. Depois estende os cotovelos para regressar, sem transformar isto numa flexão normal.','Inspira a descer. Expira a estender.','Mover demasiado os ombros e perder o foco nos cotovelos.','Aproxima os joelhos das mãos para encurtar a alavanca.','Tríceps e estabilidade do ombro.','Está bem feito se o esforço estiver no tríceps; está mal se sentires mais peito/lombar do que braço.');
    return out('Exercício do plano atual.','Começa numa posição estável e confortável.','Executa lentamente, mantendo controlo total da amplitude útil.','Respira de forma regular e não aceleres desnecessariamente.','Perder posição para “fazer mais repetições”.','Reduz amplitude ou escolhe modo Fácil.','Grupo muscular do plano atual.','Técnica limpa acima de velocidade.');
  }
  function projectionNarrative(model){ const avgDaily=Math.round((model.likely*1000)/180); const line = model.planningMode ? 'Sem histórico suficiente, a linha provável assume que vais treinar com boa regularidade nas próximas semanas.' : `A linha provável usa a tua consistência recente (${model.effectiveAdherence}%), o sono, a proteína e a dificuldade escolhida.`; return { avgDaily, headline:'O gráfico mostra ganho acumulado de massa magra desde hoje. Não é ganho “desse dia”; é o total acumulado até esse dia.', line, action:'Para puxar a linha azul escura para cima, o que mais pesa é subir consistência, aproximar as séries da fadiga técnica e manter proteína diária perto do alvo.' }; }
  function exerciseFamily(name){
    const n=normalizeName(name);
    if(n.includes('pike') || n.includes('dolphin')) return 'pike';
    if(n.includes('squat') && !n.includes('split') && !n.includes('lunge')) return 'squat';
    if(n.includes('split') || n.includes('lunge')) return 'split';
    if(n.includes('bridge') || n.includes('walkout') || n.includes('frog pump')) return 'bridge';
    if(n.includes('retracao escapular deitado') || n.includes('back widow') || n.includes('row de cotovelos no chao')) return 'backrow';
    if(n.includes('prone w') || n.includes('prone t') || n.includes('snow angel') || n.includes('y-t-w')) return 'backscap';
    if(n.includes('lat pull') || n.includes('swimmer') || n.includes('superman pull') || n.includes('lat prayer')) return 'backlat';
    if(n.includes('curl')) return 'curl';
    if(n.includes('side plank') || n.includes('clamshell')) return 'sideplank';
    if(n.includes('plank') || n.includes('hollow') || n.includes('dead-bug') || n.includes('bear')) return 'plank';
    if(n.includes('triceps extension') || n.includes('diamond') || n.includes('triceps')) return 'tricepsfloor';
    if(n.includes('flexao')) return 'push';
    return 'push';
  }
  function guideStepsFor(name){
    const g=exerciseGuide(name); const family=exerciseFamily(name);
    if(family==='backrow') return [{title:'Posição',text:shortText(g.setup)},{title:'Empurra cotovelos',text:'Empurra os cotovelos contra o chão e eleva só ligeiramente o peito.'},{title:'Deves sentir',text:'Entre as omoplatas e atrás dos ombros; não no pescoço.'}];
    if(family==='backscap') return [{title:'Coloca-te',text:shortText(g.setup)},{title:'Levanta braços',text:'Pequena amplitude, sem encolher os ombros.'},{title:'Deves sentir',text:'Trapézio médio/inferior e deltoide posterior.'}];
    if(family==='backlat') return [{title:'Base',text:shortText(g.setup)},{title:'Puxa cotovelos',text:'Traz os cotovelos para baixo e para trás sem levantar muito o peito.'},{title:'Deves sentir',text:'Debaixo da axila, atrás do ombro e na parte média das costas.'}];
    const base=[{title:'Coloca-te',text:shortText(g.setup)},{title:'Executa',text:shortText(g.execution)},{title:'Fecha limpo',text:shortText(g.cues)}];
    if(family==='bridge') base[2]={title:'Pausa no topo',text:shortText(g.breathing)};
    if(family==='curl') base[2]={title:'Resiste sempre',text:shortText(g.execution)};
    return base;
  }
  function guideSVG(name){
    const family=exerciseFamily(name); const stroke='#1D1D1F', accent='#0A84FF', fill='#F7F8FB', back='#DAECFF';
    const panel=(x,title,body)=>`<rect x="${x}" y="16" width="94" height="136" rx="18" fill="${fill}" stroke="#E6E7EB"/><text x="${x+47}" y="34" text-anchor="middle" fill="#6E6E73" font-size="10" font-weight="700">${title}</text>${body}`;
    if(family==='backrow') return `<svg viewBox="0 0 330 168" class="svg-host">${panel(10,'Cotovelos',`<circle cx="32" cy="96" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="37" y1="99" x2="62" y2="99" stroke="${stroke}" stroke-width="2"/><line x1="47" y1="99" x2="42" y2="116" stroke="${stroke}" stroke-width="2"/><line x1="52" y1="99" x2="64" y2="116" stroke="${stroke}" stroke-width="2"/><ellipse cx="56" cy="90" rx="18" ry="10" fill="${back}"/><path d="M28 76 l10 0 l-5 -8 z" fill="${accent}"/>`)}${panel(118,'Peito sobe',`<circle cx="140" cy="92" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="145" y1="95" x2="170" y2="87" stroke="${stroke}" stroke-width="2"/><line x1="156" y1="94" x2="150" y2="114" stroke="${stroke}" stroke-width="2"/><line x1="165" y1="90" x2="178" y2="109" stroke="${stroke}" stroke-width="2"/><ellipse cx="165" cy="83" rx="18" ry="10" fill="${back}"/><path d="M178 66 l10 0 l-5 -8 z" fill="${accent}"/>`)}${panel(226,'Aperta',`<circle cx="248" cy="92" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="253" y1="95" x2="278" y2="87" stroke="${stroke}" stroke-width="2"/><line x1="264" y1="94" x2="258" y2="114" stroke="${stroke}" stroke-width="2"/><line x1="273" y1="90" x2="286" y2="109" stroke="${stroke}" stroke-width="2"/><ellipse cx="273" cy="83" rx="18" ry="10" fill="${back}"/><path d="M288 66 l10 0 l-5 -8 z" fill="${accent}"/>`)}<text x="166" y="160" text-anchor="middle" fill="#6E6E73" font-size="10">Sente entre as omoplatas, não no pescoço.</text></svg>`;
    if(family==='backscap') return `<svg viewBox="0 0 330 168" class="svg-host">${panel(10,'Barriga',`<circle cx="48" cy="96" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="53" y1="99" x2="72" y2="99" stroke="${stroke}" stroke-width="2"/><line x1="60" y1="98" x2="40" y2="86" stroke="${stroke}" stroke-width="2"/><line x1="60" y1="98" x2="80" y2="86" stroke="${stroke}" stroke-width="2"/><ellipse cx="60" cy="86" rx="18" ry="10" fill="${back}"/>`)}${panel(118,'Levanta',`<circle cx="156" cy="96" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="161" y1="99" x2="180" y2="99" stroke="${stroke}" stroke-width="2"/><line x1="168" y1="98" x2="146" y2="78" stroke="${stroke}" stroke-width="2"/><line x1="168" y1="98" x2="190" y2="78" stroke="${stroke}" stroke-width="2"/><ellipse cx="168" cy="84" rx="18" ry="10" fill="${back}"/><path d="M148 68 l10 0 l-5 -8 z" fill="${accent}"/><path d="M186 68 l10 0 l-5 -8 z" fill="${accent}"/>`)}${panel(226,'Sem pescoço',`<circle cx="264" cy="96" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="269" y1="99" x2="288" y2="99" stroke="${stroke}" stroke-width="2"/><line x1="276" y1="98" x2="254" y2="78" stroke="${stroke}" stroke-width="2"/><line x1="276" y1="98" x2="298" y2="78" stroke="${stroke}" stroke-width="2"/><ellipse cx="276" cy="84" rx="18" ry="10" fill="${back}"/><line x1="264" y1="62" x2="288" y2="62" stroke="#B8BCC6" stroke-width="2" stroke-dasharray="4 3"/>`)}<text x="166" y="160" text-anchor="middle" fill="#6E6E73" font-size="10">Ombros longe das orelhas, testa perto do chão.</text></svg>`;
    if(family==='backlat') return `<svg viewBox="0 0 330 168" class="svg-host">${panel(10,'Braços à frente',`<circle cx="52" cy="96" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="57" y1="99" x2="76" y2="99" stroke="${stroke}" stroke-width="2"/><line x1="62" y1="98" x2="32" y2="78" stroke="${stroke}" stroke-width="2"/><line x1="62" y1="98" x2="92" y2="78" stroke="${stroke}" stroke-width="2"/><ellipse cx="62" cy="90" rx="18" ry="10" fill="${back}"/>`)}${panel(118,'Puxa cotovelos',`<circle cx="160" cy="92" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="165" y1="95" x2="184" y2="91" stroke="${stroke}" stroke-width="2"/><line x1="170" y1="94" x2="150" y2="78" stroke="${accent}" stroke-width="2"/><line x1="174" y1="94" x2="194" y2="78" stroke="${accent}" stroke-width="2"/><ellipse cx="172" cy="88" rx="18" ry="10" fill="${back}"/>`)}${panel(226,'Axila atrás',`<circle cx="268" cy="92" r="5" fill="none" stroke="${stroke}" stroke-width="2"/><line x1="273" y1="95" x2="292" y2="91" stroke="${stroke}" stroke-width="2"/><line x1="278" y1="94" x2="258" y2="82" stroke="${accent}" stroke-width="2"/><line x1="282" y1="94" x2="302" y2="82" stroke="${accent}" stroke-width="2"/><ellipse cx="280" cy="88" rx="18" ry="10" fill="${back}"/>`)}<text x="166" y="160" text-anchor="middle" fill="#6E6E73" font-size="10">Peito só ligeiramente elevado. A sensação deve ir para as axilas e costas médias.</text></svg>`;
    return (function(){
      const originalFamily = family;
      if(originalFamily==='pike') return `<svg viewBox="0 0 330 168" class="svg-host"><text x="165" y="84" text-anchor="middle" fill="#6E6E73" font-size="12">Guia visual disponível na técnica acima.</text></svg>`;
      if(originalFamily==='curl') return `<svg viewBox="0 0 330 168" class="svg-host"><text x="165" y="84" text-anchor="middle" fill="#6E6E73" font-size="12">Resiste com a mão oposta em toda a amplitude.</text></svg>`;
      return `<svg viewBox="0 0 330 168" class="svg-host"><text x="165" y="84" text-anchor="middle" fill="#6E6E73" font-size="12">Usa os 3 passos abaixo como guia rápido.</text></svg>`;
    })();
  }
  function updateTechniqueCard(ex, idx=getPreviewIndex(currentPlan()), plan=currentPlan()){
    const name=currentVariantName(ex, idx, plan.key); const g=exerciseGuide(name); const options=swapOptionsFor(plan.key, idx); const swapIdx=swapIndexFor(plan.key, idx);
    el.techTitle.textContent=`Técnica · ${name}`; el.techDesc.textContent=g.intro; el.techSetup.textContent=g.setup; el.techExecution.textContent=g.execution; el.techBreathing.textContent=g.breathing; el.techMistake.textContent=g.mistake; el.techRegression.textContent=g.regression; el.techFocus.textContent=g.focus; el.techCues.textContent=g.cues;
    if(el.swapStatus){ el.swapStatus.textContent = options.length>1 ? `Equivalente ${swapIdx+1}/${options.length}. Usa a troca se este movimento não te assenta bem; a app mantém o mesmo objetivo muscular.` : 'Este movimento não tem alternativas equivalentes configuradas nesta versão.'; }
    if(el.swapPrevBtn) el.swapPrevBtn.disabled = options.length<2;
    if(el.swapNextBtn) el.swapNextBtn.disabled = options.length<2;
  }
  function previewExerciseData(plan=currentPlan()){ const index=getPreviewIndex(plan); return { plan, index, exercise:plan.exercises[index] }; }
  function updatePlanPreviewPanels(){ const {plan,index,exercise} = previewExerciseData(); updateTechniqueCard(exercise, index, plan); renderGuideVisual(plan, index); }
  function renderExerciseList(){
    const plan=currentPlan(); const upcoming=nextExerciseAfterCurrentBlock();
    el.exerciseList.innerHTML = plan.exercises.map((ex,idx)=>{ const active = state.phase==='work' ? idx===state.exerciseIndex : (upcoming && idx===upcoming.index); const selected=getPreviewIndex(plan)===idx; const g=exerciseGuide(currentVariantName(ex, idx, plan.key)); const options=swapOptionsFor(plan.key, idx); return `<div class="plan-item ${active ? 'active' : ''} ${selected ? 'selected' : ''}" data-preview-index="${idx}"><div class="left"><div class="name">${currentVariantName(ex, idx, plan.key)}</div><div class="sub">${g.intro}</div><div class="hint">${g.cues}</div></div><div class="right">${options.length>1 ? `<span class="swap-chip">${swapIndexFor(plan.key, idx)+1}/${options.length}</span>` : `${idx+1}/4`}</div></div>`; }).join('');
  }
  function renderGuideVisual(plan=currentPlan(), idx=getPreviewIndex(plan)){
    const ex=plan.exercises[idx]; const name=currentVariantName(ex, idx, plan.key); const levels=['easy','normal','hard']; const summary=planProgressSummary(plan.key); el.guideTitle.textContent=name; el.guideLevelPill.textContent=`${levelLabel(getExerciseProgress(plan.key, idx).level)} · ${summary.text}`; el.guideVisual.innerHTML = guideSVG(name); const steps=guideStepsFor(name); el.guideSteps.innerHTML = steps.map(step=>`<div class="guide-step"><strong>${step.title}</strong><span>${step.text}</span></div>`).join(''); el.progressionStrip.innerHTML=levels.map((tier,i)=>`<span class="progression-pill ${variantTier(plan.key, idx)===tier?'active':''}">${ex.variants[tier]}</span>`).join(''); el.progressionHint.textContent=`Este plano está em ${summary.text}. O nível atual deste exercício muda quando repetes o plano e sinalizas “fácil demais” ou “no limite”.`; }
  function renderToday(){ const plan=currentPlan(); const ex=currentExercise(); const upcoming=nextExerciseAfterCurrentBlock(); const nextPlan=nextPlanObj(); const cfg=currentCfg(); const volume=volumeTierForPlan(plan.key); el.dayBadge.textContent = state.selectedPlanMode==='auto' ? `Auto ${plan.key}` : `Plano ${plan.key}`; el.planTitle.textContent = plan.title; el.planFocus.textContent = plan.focus; el.planStatus.textContent = state.selectedPlanMode==='auto' ? `Rotação ${profileMeta().title} · ${volume.rounds} rondas hoje` : `Modo manual · ${volume.rounds} rondas hoje`; el.nextPlan.textContent = state.selectedPlanMode==='auto' ? `Auto · seguinte ${nextPlan.key}` : 'Modo manual'; el.exerciseName.textContent = state.phase==='work' ? currentVariantName(ex, state.exerciseIndex, plan.key) : 'Descanso'; el.exerciseInstruction.textContent = state.phase==='work' ? currentVariantInstruction(ex, state.exerciseIndex, plan.key) : 'Respira fundo, recupera e prepara a próxima série.'; el.nextExerciseLine.textContent = upcoming ? `Seguinte: ${currentVariantName(upcoming.exercise, upcoming.index, plan.key)} · ronda ${upcoming.round}` : 'Seguinte: fim da sessão'; el.timer.textContent = formatSeconds(state.remainingTime); el.phase.textContent = state.phase.toUpperCase(); el.countdown.textContent = state.phase==='work' && state.remainingTime<=5 && state.remainingTime>0 ? `Últimos ${state.remainingTime}s` : ''; el.progressFill.style.width = `${progressPct()}%`; el.progressText.textContent = `${progressPct()}% da sessão`; el.roundValue.textContent = `${Math.min(state.roundIndex+1, roundsPerSession(plan.key))}/${roundsPerSession(plan.key)}`; el.moveValue.textContent = `${Math.min(state.exerciseIndex+1, plan.exercises.length)}/${plan.exercises.length}`; el.streakValue.textContent = String(calcStreak()); el.doseValue.textContent = `${cfg.work}/${cfg.rest} · ${volume.rounds}R`; el.soundSwitch.classList.toggle('on', state.soundOn); el.voiceSwitch.classList.toggle('on', state.voiceOn); updatePlanPreviewPanels(); renderFeedbackBox(); renderProfileModeSummary(); document.querySelectorAll('#difficultySegment button').forEach(btn=>btn.classList.toggle('active', btn.dataset.difficulty===state.difficulty)); renderPlanModes(); renderExerciseList(); renderRotation(); }
  function renderAll(){ renderToday(); updateBodyPanel(); renderAnalysis(); renderWeeklySummary(); renderMonthlySummary(); renderPhotoCompare(); renderCalendar(); renderRecent(); }

  document.querySelectorAll('[data-session-feedback]').forEach(btn=>btn.addEventListener('click', ()=>applySessionFeedback(btn.dataset.sessionFeedback, (getPendingFeedback()?.planKey) || currentPlan().key)));

  document.querySelectorAll('#difficultySegment button').forEach(btn=>btn.addEventListener('click', ()=>applyDifficulty(btn.dataset.difficulty)));
  document.querySelectorAll('[data-plan-mode]').forEach(btn=>btn.addEventListener('click', ()=>setPlanMode(btn.dataset.planMode)));
  document.querySelectorAll('[data-profile-mode]').forEach(btn=>btn.addEventListener('click', ()=>setProfileMode(btn.dataset.profileMode)));
  el.exerciseList.addEventListener('click', e=>{ const item=e.target.closest('[data-preview-index]'); if(!item) return; setPreviewIndex(Number(item.dataset.previewIndex)); });
  el.startBtn.addEventListener('click', startSession); el.pauseBtn.addEventListener('click', pauseSession); el.resetBtn.addEventListener('click', ()=>{ resetCycle(); renderToday(); }); el.skipBtn.addEventListener('click', skipCurrent); el.techBtn.addEventListener('click', ()=>setActiveTab('plan')); el.markTodayBtn.addEventListener('click', ()=>{ saveTodaySession(true); renderAll(); });
  el.soundToggle.addEventListener('click', async ()=>{ state.soundOn=!state.soundOn; localStorage.setItem(STORAGE.sound, JSON.stringify(state.soundOn)); if(state.soundOn) await primeMedia(); renderToday(); });
  el.voiceToggle.addEventListener('click', async ()=>{ state.voiceOn=!state.voiceOn; localStorage.setItem(STORAGE.voice, JSON.stringify(state.voiceOn)); if(state.voiceOn){ await primeMedia(); speak('voz ativa'); } renderToday(); });
  el.saveBodyBtn.addEventListener('click', saveBodyFromInputs);
  if(el.addPhotoBtn) el.addPhotoBtn.addEventListener('click', ()=>el.photoInput?.click());
  if(el.photoInput) el.photoInput.addEventListener('change', e=>handlePhotoSelection(e.target.files?.[0]));
  if(el.removePhotoBtn) el.removePhotoBtn.addEventListener('click', removeLatestPhoto);
  if(el.swapPrevBtn) el.swapPrevBtn.addEventListener('click', ()=>{ const data=previewExerciseData(); cycleSwap(data.plan.key, data.index, -1); });
  if(el.swapNextBtn) el.swapNextBtn.addEventListener('click', ()=>{ const data=previewExerciseData(); cycleSwap(data.plan.key, data.index, 1); });
  if(el.compareAngleSelect) el.compareAngleSelect.addEventListener('change', ()=>setComparePrefs({ angle: el.compareAngleSelect.value }));
  if(el.compareWindowSelect) el.compareWindowSelect.addEventListener('change', ()=>setComparePrefs({ window: el.compareWindowSelect.value }));
  el.prevMonthBtn.addEventListener('click', ()=>{ state.viewDate.setMonth(state.viewDate.getMonth()-1); renderCalendar(); });
  el.nextMonthBtn.addEventListener('click', ()=>{ state.viewDate.setMonth(state.viewDate.getMonth()+1); renderCalendar(); });
  el.jumpTodayBtn.addEventListener('click', ()=>{ state.viewDate = dateFromKey(todayKey()); renderCalendar(); });

  bodyDefaults(); ensureAutoPlan(); fillBodyInputs(); fillPhotoInputs(); resetCycle(); initTabs(); renderAll();
  if('serviceWorker' in navigator){ window.addEventListener('load', ()=>navigator.serviceWorker.register('./sw.js?v=23').then(reg=>reg.update()).catch(()=>{})); }
