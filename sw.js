const CACHE_NAME = 'dsi-cache-v2';

const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/script.js',
  '/manifest.json',
  '/assets/images/dslogo.png',
  '/assets/images/DSLOGO.jpg',
  '/assets/images/hero-bg.jpg',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
];

// INSTALL
self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// ACTIVATE
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );

  return self.clients.claim();
});

// FETCH
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {

      // cache mil gaya to wahi serve
      if (response) {
        return response;
      }

      // nahi mila to network se lao
      return fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {

            // new request cache me store
            cache.put(event.request, networkResponse.clone());

            return networkResponse;
          });
        })
        .catch(() => {
          return new Response("Offline");
        });

    })
  );
});