// ============================================================
// BPSC EXAM TRACKER – Service Worker
// Offline-first caching strategy
// ============================================================

const CACHE_NAME   = "bpsc-tracker-v3";
const OFFLINE_PAGE = "./index.html";

// Files to pre-cache on install
const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  // Google Fonts (cache for offline)
  "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap",
];

// ── Install: pre-cache core assets ──────────────────────────
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Cache core local files (must succeed)
      const localFiles = ["./", "./index.html", "./style.css", "./script.js", "./manifest.json"];
      await cache.addAll(localFiles);

      // Cache fonts (best effort – won't fail install if offline)
      try {
        await cache.add("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=JetBrains+Mono:wght@400;600&display=swap");
      } catch (_) { /* fonts optional */ }

      return self.skipWaiting();
    })
  );
});

// ── Activate: clean old caches ───────────────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch: cache-first for assets, network-first for HTML ───
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET and Chrome extension requests
  if (request.method !== "GET") return;
  if (url.protocol === "chrome-extension:") return;

  // HTML pages: network-first, fallback to cache
  if (request.headers.get("accept")?.includes("text/html")) {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(request, clone));
          return res;
        })
        .catch(() => caches.match(OFFLINE_PAGE))
    );
    return;
  }

  // CSS/JS/fonts: cache-first, network fallback
  if (
    url.pathname.endsWith(".css") ||
    url.pathname.endsWith(".js")  ||
    url.hostname === "fonts.googleapis.com" ||
    url.hostname === "fonts.gstatic.com"
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((res) => {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(request, clone));
          return res;
        }).catch(() => new Response("/* offline */", { headers: { "Content-Type": "text/css" } }));
      })
    );
    return;
  }

  // All other requests: network with cache fallback
  event.respondWith(
    fetch(request).catch(() => caches.match(request))
  );
});

// ── Background sync placeholder (for future server sync) ────
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-progress") {
    // Placeholder: could POST progress to a server
    console.log("[SW] Background sync triggered");
  }
});

// ── Push notification placeholder ───────────────────────────
self.addEventListener("push", (event) => {
  const data = event.data?.json() || { title: "BPSC Tracker", body: "Time to study!" };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: "./manifest.json",
      badge: "./manifest.json",
      tag: "bpsc-reminder",
      renotify: true,
    })
  );
});
