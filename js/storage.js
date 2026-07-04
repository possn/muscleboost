export const S={profile:'mb28_profile',log:'mb28_log',coach:'mb28_coach',body:'mb28_body',photos:'mb28_photos',tab:'mb28_tab'};
export const defProfile={age:48,height:173,startWeight:61,targetWeight:66,protein:125,mission:1,xp:0,streak:0,lastDate:'',plan:'auto'};
export function load(k,d){try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}}
export function save(k,v){localStorage.setItem(k,JSON.stringify(v))}
export function today(){return new Date().toISOString().slice(0,10)}
export function clamp(n,a,b){return Math.max(a,Math.min(b,n))}
