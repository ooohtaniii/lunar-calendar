const CACHE = 'lunar-v2';
const ASSETS = [
  '/lunar-calendar/',
  '/lunar-calendar/index.html',
  '/lunar-calendar/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
