let cacheName = "core";

let filesToCache = [
    "/",
    "/index.html",
    "/bundle.css",
    "/bundle.js",
    "/global.css",
    "/data.js",
    "/pure-drawer.min.css",
    "/bundle.css.map",
    "/bundle.js.map"
];

self.addEventListener("install", function (e) {
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener("fetch", function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});