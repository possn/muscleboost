const CACHE='muscleboost-v18';
const CORE=['./','./index.html','./index.html?v=18','./manifest.json','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const url=new URL(e.request.url);
  const isHTML = e.request.mode==='navigate' || url.pathname.endsWith('/index.html') || url.pathname==='/' || url.search.includes('v=18');
  if(isHTML){
    e.respondWith(fetch(e.request).then(res=>{const copy=res.clone(); caches.open(CACHE).then(c=>c.put('./index.html',copy)).catch(()=>{}); return res;}).catch(()=>caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit || fetch(e.request).then(res=>{const copy=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)).catch(()=>{}); return res;})));
});
