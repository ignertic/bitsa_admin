'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "67d196cf2744c714b09e2bb0b923b19d",
"assets/assets/images/1.jpg": "cb88fb01a601f18484f9bf7844c1434c",
"assets/assets/images/2.jpg": "29c23ad1fa167fcdc1db01220d3e3fe9",
"assets/assets/images/3.jpg": "61d29bb1fc599262ba5af14c243a8a29",
"assets/assets/images/4.jpg": "94c9a5cc9349d9b7fd0c31492fdd6c1a",
"assets/assets/images/profile-bg.jpg": "85b35d367ad98bc305c5101ed97a074a",
"assets/FontManifest.json": "580ff1a5d08679ded8fcf5c6848cece7",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "4f38146a9f2d4249842060333ccfdca7",
"index.html": "3342afbb2a7d743825277ed6fcbdf394",
"/": "3342afbb2a7d743825277ed6fcbdf394",
"main.dart.js": "26608d9e73056fd5016d5b5508517232"
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
