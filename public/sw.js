const CACHE = 'angebote-v1';
const ASSETS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.url.includes('kaufda') || e.request.url.includes('lidl') ||
      e.request.url.includes('aldi') || e.request.url.includes('edeka')) {
    return; // Externe Seiten nicht cachen
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
