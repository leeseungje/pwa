var CACHE_NAME = 'pwa-offline-v1'; // 캐싱 스토리지에 저장될 파일 이름
var filesToCache = [ // 캐싱할 파일 목록
  '/', // index.html
  '/css/app.css',
]
// 서비스 워커 설치 (웹 지원 캐싱)
self.addEventListener('install', function (event) {
  // self는 window를 의미 한다.
  event.waitUntil(
    caches.open(CACHE_NAME) // pwa 파일
      .then(function (cache) {
        // pwa 파일에 다 집어 넣어라
        return cache.addAll(filesToCache);
      })
      .catch(function (error) {
        return console.log(error)
      })
  )

})

self.addEventListener('fetch', function (event) {
  console.log("[Service Workers] Fetch", event.request)
  event.respondWidth(
    caches.match(event.request)
      .then(function (response) {
        return response || fetch(event.request)
      })
      .catch()
  );
})