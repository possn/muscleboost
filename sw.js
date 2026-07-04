const CACHE='mb-operation66-v28-2';
const CORE=['./','index.html','css/style.css','js/app.js','js/storage.js','js/coach.js','js/recovery.js','js/missions.js','js/academy.js','js/analytics.js','data/exercises.json','data/missions.json','data/achievements.json','manifest.json','icons/icon-192.png','icons/icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
