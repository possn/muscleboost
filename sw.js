const CACHE='muscleboost-v16';
const APP_SHELL=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  const isNavigation = event.request.mode === 'navigate';
  const isAppShell = url.pathname.endsWith('/index.html') || url.pathname.endsWith('/');

  if (isNavigation || isAppShell) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(event.request, { cache: 'no-store' });
        const cache = await caches.open(CACHE);
        cache.put('./index.html', fresh.clone()).catch(() => {});
        return fresh;
      } catch (err) {
        const cached = await caches.match('./index.html');
        return cached || caches.match('./');
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const fresh = await fetch(event.request);
      const cache = await caches.open(CACHE);
      cache.put(event.request, fresh.clone()).catch(() => {});
      return fresh;
    } catch (err) {
      return caches.match('./index.html');
    }
  })());
});
