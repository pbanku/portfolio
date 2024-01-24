'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6044f7a6dac588cf3ef41a1d0bb90e24",
"assets/AssetManifest.bin.json": "0fbb275b699a4c3971b176bfe12f50c9",
"assets/AssetManifest.json": "e6fa62e83b226657c38f95402c9b7487",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/icons/dev.png": "136350fd9f00dc8d1dd1514e40b9f9cd",
"assets/assets/icons/developer.png": "6576f0932f8dc70413579a59715c184b",
"assets/assets/icons/done.png": "d3786409b1df621a0b55e61d92430590",
"assets/assets/icons/facebook.png": "cb055867df3c7b03ef1135f77d1a9411",
"assets/assets/icons/github.png": "e6b2daf427b81c388625ffee75f2acf4",
"assets/assets/icons/hashnode.png": "5830176711a7028847bb9ef5fba9b39b",
"assets/assets/icons/instagram.png": "78064309e7314e8399f3f83d715aecc7",
"assets/assets/icons/linkedin.png": "1816e5c1168ca75e4e824ed21c4f002a",
"assets/assets/icons/student.png": "e9e5874f03b649f3101e7458f3b7acdf",
"assets/assets/icons/telegram.png": "c89ff009e3e05233e29b53baea4b57de",
"assets/assets/icons/twitter.png": "632f6320a7e3538439ffafd9ee8a03cd",
"assets/assets/icons/volunteer.png": "7c2b0e4e0cd150fd439e01cd60da1261",
"assets/assets/icons/youtube.png": "92d7341ea8fd5c88350cbd570a145f43",
"assets/assets/images/ddstechvira.png": "e8468c1307955ea1f2e64bb5b3f14a80",
"assets/assets/images/flutterscope.png": "bf9d96f9660b19b398e0b02316f65523",
"assets/assets/images/github.png": "bada3b2dca0911637f07d961cd7da5d5",
"assets/assets/images/image1.png": "b7cdf0ee9e329d578e0e1d368f883213",
"assets/assets/images/image10.jpeg": "23c0ef38bde44c9e6ea145e8c6acec99",
"assets/assets/images/image11.jpeg": "443321a5182d7c5c52f0ece677a7357b",
"assets/assets/images/image12.jpeg": "0aa73bde4bf7004d4c6c91f1bc1c4811",
"assets/assets/images/image13.jpeg": "22f90d74e37179d13c6cebadd76896bf",
"assets/assets/images/image14.jpeg": "90f15df9e9b3d2b94f723d15cc6ab75c",
"assets/assets/images/image15.jpeg": "3f854a020add3d88b4b21d57effc099d",
"assets/assets/images/image16.jpeg": "ad7496c9327d88a4dd047d95b924ae38",
"assets/assets/images/image17.jpeg": "e73338f3318c0b86a7279bf8afdc82e4",
"assets/assets/images/image18.jpeg": "7637dd858ed982e74de94978991162c7",
"assets/assets/images/image19.jpeg": "212b6d260d3cba7835d6049baf8c2775",
"assets/assets/images/image2.png": "6a26580084dccc7d7c82f8d6f02c34e6",
"assets/assets/images/image20.jpeg": "42bf6217c539f7bf9f52b02f87c6261c",
"assets/assets/images/image21.jpeg": "b9d76101e34e0d732a0eea03841390d2",
"assets/assets/images/image22.jpeg": "b601b30637b01b3255ddb7190da3cf6f",
"assets/assets/images/image23.jpeg": "0d7e26bfc59396d4ff85054075c9483d",
"assets/assets/images/image24.jpeg": "885709e6b9a43bd45ea18efac9c89ac7",
"assets/assets/images/image25.jpeg": "2edd7b748898ebfa5de11072998ab454",
"assets/assets/images/image26.jpeg": "683b004930a3dbe2a68ba32a43d2a999",
"assets/assets/images/image27.jpeg": "5768052d55c4e0b95f1a9781c8d92e56",
"assets/assets/images/image28.jpeg": "a4bc78e07c0871726a3c6d0f7f8cd3d1",
"assets/assets/images/image29.png": "fcacb8a40259e30f04273a05dbb86194",
"assets/assets/images/image3.jpeg": "3038990e0c784bea49738a45e45ecc25",
"assets/assets/images/image30.png": "661e97d03a3bd733c4cd0de73165668e",
"assets/assets/images/image31.png": "661e97d03a3bd733c4cd0de73165668e",
"assets/assets/images/image32.png": "1d9e2e8be891f7fee54804fa1f5493c7",
"assets/assets/images/image33.png": "1d9e2e8be891f7fee54804fa1f5493c7",
"assets/assets/images/image34.png": "9e568b733c35a763e6c20f9af2cc21b1",
"assets/assets/images/image35.png": "5e1debff766307f60e91c25456f7d712",
"assets/assets/images/image37.png": "2d07a18089a94479b6559a2fab1f5cf2",
"assets/assets/images/image38.png": "0e3c379ad0ecdf899da985886846e03f",
"assets/assets/images/image4.jpeg": "ba8d944b625ccdf79ff18c3b0cf27f4b",
"assets/assets/images/image5.jpeg": "e3f16824ec3052aeab749d6d1aac207a",
"assets/assets/images/image6.jpeg": "a5b9bd72c82f5c5503577507bc8deec6",
"assets/assets/images/image7.jpeg": "521b2605a2ee92a05031c3ee183b65e2",
"assets/assets/images/image8.jpeg": "d92e70c5628484f1433742619c3cdc7c",
"assets/assets/images/image9.jpeg": "a6650691dfa2ae788bb0f6328f28e1ef",
"assets/assets/images/mlsa.png": "ac77090e37e75814439d7134e6f38d28",
"assets/assets/images/nibm.png": "44922ab8b2df9e3090b04bcd474f5a43",
"assets/assets/images/profile.png": "841934e269b03139a61da962a5d0ae72",
"assets/assets/images/school.png": "d34a08fff7dcc65969427fd64e6939ae",
"assets/FontManifest.json": "d5c53906b6d86d304b23aa61eec71815",
"assets/fonts/MaterialIcons-Regular.otf": "057071262697e945e35c87ba124272f4",
"assets/NOTICES": "c26b8a30477af90f6a1620749b18e1a2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/apple-touch-icon.png": "c8722fb470a194fd892e7ca76e8d7248",
"icons/favicon.ico": "5122351650ae623a757289c48338a8f4",
"icons/icon-192-maskable.png": "3835c97708e1788952d43e6a2a081da2",
"icons/icon-192.png": "0acd9f9c92e61e45e7474f900c54efad",
"icons/icon-512-maskable.png": "c1ef942cdfca19bcc456f5903e17736c",
"icons/icon-512.png": "851030b8b32eeaf3b2715b5ddebe0a43",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9d185f8fbbcaa6d3e1b8199b4e9b65f0",
"/": "9d185f8fbbcaa6d3e1b8199b4e9b65f0",
"main.dart.js": "6fde2807de2fc7cba3355c182e82c82d",
"manifest.json": "0d41addfc3f48821e8e067eea75872dd",
"splash/img/dark-1x.png": "b6cf9c9da9e1d547ae2ea4cb487830dc",
"splash/img/dark-2x.png": "7c5f33439049daf9ae2495cd4f709f12",
"splash/img/dark-3x.png": "454a94fba1d2b2233c2681f62f1362df",
"splash/img/dark-4x.png": "7487d38550a868418ebe077584c65abf",
"splash/img/light-1x.png": "b6cf9c9da9e1d547ae2ea4cb487830dc",
"splash/img/light-2x.png": "7c5f33439049daf9ae2495cd4f709f12",
"splash/img/light-3x.png": "454a94fba1d2b2233c2681f62f1362df",
"splash/img/light-4x.png": "7487d38550a868418ebe077584c65abf",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "1404a5cdf67c618f89467983c828bd26",
"version.json": "64e02aa4d311941be04881081c0bd50d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
