'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "aa62cba149c51923916eff46f80fe74c",
".git/config": "6ec52b8be92e431a23a8ddb1bf23a6aa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f41558712bddfea2a4cab473ded7b140",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c3bfebdef6ee71e0526ea43d6b4877d",
".git/logs/refs/heads/main": "3026e5f713ef5a3204b0352f9e128381",
".git/logs/refs/remotes/origin/main": "afa0ff3f2d73c43f3c2614a5b5114706",
".git/objects/00/35ac63380aa07e7ea90d3901e8a75b0dd00a67": "b8913a0f41b0e5d2820273fdcef8496f",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/07/e56f3ba6c0df0a98a7f544dea1e0772ee861d9": "f593094c0bcc20c893670e88149fc9b4",
".git/objects/08/9318aa8f330af5194e848b966d41e1519a9157": "54349b56e34e9a1acb674d004e41c3d6",
".git/objects/09/cc636ff62afc75f5ea6470e5ac5fda0619acc8": "eaf0c51fcd03153c47dcbc7987b90b90",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/164f6490156ee6430f0d99621155828f7e187f": "d5082eaa73cce0ade875347d44548a73",
".git/objects/14/5dd62faeacdde622068defa371ffcaf1fbe180": "0b75585b3072bb1e9bf54969140dae5d",
".git/objects/1b/b6a27dc03b537c719b4dedc0d69ddd3f39ff12": "5ad739b8d658192185fe8dd30bc0fa80",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/2d/ba2180edc872e0fde6fa2740d5dc146bf7c8cf": "d80607e296cddd1846e2ccbe65653a77",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/ebd7beb2fb99a22fce13b2a6e1a06298f09cd1": "1df90f39d78afd3f787d76743be285ef",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/6c/3b3cd14aece03ce138e53c6e8ecc4954b17e8a": "c8d87d423261aba8bb07177d139d8f1b",
".git/objects/71/ed26da56330438bfaeaa7d6a6e28bff1557224": "0428e421a760ab94cf4bd3b49dfd449b",
".git/objects/75/9ce388753a436f40b75f574d1377077a7a40ec": "22405202bcf8e16da18d3b49990c9820",
".git/objects/75/f720143cd5ff3b542a3a42cbbf2b7fb1b321de": "1ea98d67ad353fe8b516c39bdc80647a",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/68a33dec12637f088bfabfd65139b49bb129c4": "9ddd8693e507caf00c7eadb609c5a761",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/581935d6a628ccbd46e81437ea776f179ee532": "e34899a2783196ec727d7bf38775004e",
".git/objects/97/9853eeb8574548f001b203176da25fc253cf11": "449d348b1abb3772acfdc508694cda38",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/aa/59d49b3411ffe7598f81519753485f15e3a1a6": "3c4c14f0cad74f50b972aba3277720aa",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/d2363e2e4b5c6d5773bd5266e4a1112972c0a2": "6f31c6db3e0ad610cfd8c711c9ec0490",
".git/objects/b3/b271d682a670b301f20134935f2067bc0fe9c7": "2bc13e31f4cfa4d9c835ba4498513dd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/ad3f6325c22fa0a2ea7392f3b49381eed016b8": "2893e72f6b94dddb7dd30f194839d7db",
".git/objects/c5/103c54244550767ebb9e3b28eb3660a1845a93": "c7d6fff1372a61766952b7cdc789d440",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/e1cee4e996cd22a0b552d6c8329b9c81a04e2a": "854e2bd8b88514d97fff774bc68e4d31",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/4fdfcb61c20ac02b8ca854214798f696eef10b": "2624ddb5b2a4493d3d1e353c66ff618b",
".git/objects/e2/c23cdd1af637e66aa60e3d0137a1f0ef5312fb": "e8f6ff4ba8f33ebb4a6ba397408cfa49",
".git/objects/e3/b2a62a17bba18352ecc8ad611044409e3fe635": "63b2d63a5d53d64e7f51b4c4efb3378f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/d36423281b14a0ce212c5cb7a03b8ccf52a661": "313b1bca406da4fd302fa0e92752a682",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/efedbc912e26668adffd2ecc25c984ede4c588": "6f318c7d41ef0456cf6c76d979cfd492",
".git/objects/f9/da6448d2ce1d7e852ac37e2803885f2c7319d6": "a5c33ccd8d57bf694587dd2f2b1bde8f",
".git/objects/fa/4398e440404184a6b64abf918553e640627238": "83e142d386895abfbe78819006ad2bd7",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "06659606a8f84baedc81561cf797e13a",
".git/refs/remotes/origin/main": "06659606a8f84baedc81561cf797e13a",
"assets/AssetManifest.json": "1dfa6750c49130c38f1b9140472fe71b",
"assets/assets/augray.png": "9fcaa36d3fa0ee3f9d4cad5c1fbcfaab",
"assets/assets/brainvibe.png": "5f6a995e6b1ed4444d4f3453e3ae550d",
"assets/assets/buff.png": "7b4f20002dafbe47f40d691e30b7baba",
"assets/assets/coursera.jpeg": "0c9f6aeddffae2cb423debc476551fd1",
"assets/assets/gh.png": "89c2c0674bdba3d61daf6b1b1e5e82b5",
"assets/assets/google.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/Image.png": "2452b30e73cfefc63a6a5c51fa0a49a7",
"assets/assets/l.png": "fb595be1a0e06bf7eca2b10f3b0e7072",
"assets/assets/scroll.png": "0d22eb9e5d6c64b006af85966f06110d",
"assets/assets/sret.png": "7e5ad16afccced6b1d65209f9652b926",
"assets/assets/udemy.jpg": "0553572cd8559a82cd98b7eb8173a312",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "c9d69efb40f15453a78bef5c65399ac2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "473b2c488df4516d4442d97371a79059",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "85bb7248cd47f8bb7f7abce6fb5dbf48",
"/": "85bb7248cd47f8bb7f7abce6fb5dbf48",
"main.dart.js": "9d57ffc39b865de0c5fe0415db5348e8",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
