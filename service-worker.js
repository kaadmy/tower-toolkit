const staticCacheName = "tower-toolkit";
const assets = [
    "/",
    "/index.html",
    "/assets/style/main.css",
    "/assets/scripts/main.js",
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
});
