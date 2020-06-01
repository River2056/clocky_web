'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "42ea25453e1a1f64b466e99551190659",
"assets/FontManifest.json": "f83d05a640131fac922a863a88f0c03c",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Orbitron-Regular.ttf": "add0c4244a015960586eeb51f091fd71",
"assets/LICENSE": "7f1df1ee47854388e684afc0845ea820",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"clock.png": "06ff14cc38d4e7dd19e6a914bb5d69fe",
"favicon.png": "8a130b3579005fa0b476eb3c7a11522c",
"icons/Icon-192.png": "87d0d4696227442c0305c7ba9a49f25f",
"icons/Icon-512.png": "57e3be47bb7428220ff39fc826c3d4b1",
"index.html": "b1861457394afc99d192b1b1be9f1685",
"/": "b1861457394afc99d192b1b1be9f1685",
"main.dart.js": "cdf334bcd00e712b0e015790e4354715",
"manifest.json": "7dce86affbb70d38c8f345888b771685"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
