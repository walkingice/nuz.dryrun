/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["air.html","8f4c0b61242b643aa1a060805d5af33c"],["css/bootstrap.min.css","9f7ec46e3bdfec2d8709daeeab976708"],["css/normalize.css","fda27b856c2e3cada6e0f6bfeccc2067"],["css/style.css","7871ed324cca142f29563e9f7dda2642"],["css/style.min.css","4fc13b9b916f4ab6a175ace7f872fa05"],["css/tiny-slider.css","257503bff4c10c966bab5abd840f58a0"],["girl.html","db68dbca20f1ca959e97f022555abd7c"],["images/air/ab4562_bl.png","8e138aa33ec4c4ef27866dd35d41bded"],["images/air/ab4562_bl_thumb.png","8f5f1dd4d8a0b06cdef40fa4b5f93aa3"],["images/air/ab4562_ge.png","abb6217fbb52608ab672e84b39f23e9d"],["images/air/ab4562_ge_thumb.png","2be56bc22ce0229a0f4e2b354df73ba8"],["images/air/ab4562_ls.png","e08317f947a6aaed5d63b5ffc99cb7dc"],["images/air/ab4562_ls_thumb.png","b8dad42e7f23797bf335c45b19cb2a3e"],["images/air/air_text_01.png","2076739a8aa160c06d387b41cab421dd"],["images/air/air_text_02.png","3b40070150b519fd1f0db673cca8a510"],["images/air/as2362_bl.png","fa8a505287cf447952feea7bf681728a"],["images/air/as2362_ge.png","7fdff033289d161e1be4e99104ed8901"],["images/air/as2362_ls.png","18010d1e464018ecfb58064f6b123a7d"],["images/air/as2462_bl.png","059e013ea1e17ecdaf5dc7ffcb42999d"],["images/air/as2462_ge.png","e63e5174ee672a41e6b92a3b6b452cd3"],["images/air/as2462_ls.png","628a802c2fec9537664f65b8b835f8a4"],["images/air/as3462_bl.png","a50ad7008cacd5583e06f3ebd2f3b672"],["images/air/as3462_ge.png","01e79798eb4c063cfac6eb6fc7c32f4d"],["images/air/as3462_ls.png","70002b9ed724e2a976ef1b9aeb2cff61"],["images/arrow_left.svg","b688a8baf44faa3c9a8162c13abcc01b"],["images/arrow_right.svg","94ca5b8f07bcbdef15f48797cc2c0343"],["images/bg/air_bg_01.jpg","e5d418dc8b9df88bdfaf15caa4e1fa18"],["images/bg/air_bg_02.png","b17b6e73f4a7da5b8aba90856ccb44ab"],["images/bg/air_bg_03.jpg","d624ee930dc91ae13c15a1e53abddcba"],["images/bg/air_bg_04.jpg","b1261f036655da979b7f1e861e6ae8cf"],["images/bg/air_bg_05.jpg","d6339f94586702aa08e3067a0d155891"],["images/bg/air_bg_06.gif","7a1d12194163be2de0bdb66d7d7c33c5"],["images/bg/air_bg_07.gif","146e43994b627ee5f97191846d4a49af"],["images/bg/air_bg_08.gif","ef4f425e9b77adeae345551e3f718762"],["images/bg/air_bg_09.gif","22d881d6f2f50d51e303c6a4684bb32f"],["images/bg/air_bg_10.jpg","5549a5dffe77847459c294f3906a0b78"],["images/bg/air_bg_11.jpg","ee192399778ebb8f2fa161f3caa4898c"],["images/bg/carbon-fibre-v2.png","eaa8b868c387b02f883a96774023fe9f"],["images/bg/girl_bg_01.jpg","b9c2dc1272cef953c0439a7efce96cd0"],["images/bg/girl_bg_01.png","191aebee9bcbbc336e1efba5cad10069"],["images/bg/girl_bg_02.jpg","7552578ee0d163c50d1ba0c01d2a4e1b"],["images/bg/girl_bg_02.png","607a94a33232975c18192bab7e4f640d"],["images/bg/girl_bg_03.jpg","3ddc0d51c435ff1949ba1aca38dd777f"],["images/bg/index_bg_01-1.jpg","328d13c7b0ce54905bfe79203e2aa34b"],["images/bg/index_bg_01-2.jpg","24b95c21504d4a91369a656d196c50d6"],["images/bg/index_bg_01-3.jpg","9a1a5935561c57e0c00c92dac9860384"],["images/bg/index_bg_01-4.jpg","86d96de0eefb0a6b572cf20239bb5585"],["images/bg/index_bg_01-5.jpg","0e74abf8c37039ebc81c8c2cf0252ee1"],["images/bg/index_bg_01-6.jpg","c311e10943648645200e09a3d261f893"],["images/bg/index_bg_02.png","3c91a703648707402c3ebc950bee6a43"],["images/bg/index_bg_03.png","7e8d27a132b172678d91bd03f699562b"],["images/bg/index_bg_04.png","767ee3d50216f49eb0ffd20515620e8c"],["images/bg/index_bg_05.png","6fb6fa2d65a8799b0b6ac7abf8c02246"],["images/bg/index_bg_06.png","60b79ccd19fea318c9fdd18595dcdcc0"],["images/bg/index_bg_07.png","ef1ad290ca0cba0a4ceadfcf9f8d9c94"],["images/bg/lanzi_bg_01.jpg","3a0ae091867178ccd949151874345b96"],["images/bg/lanzi_bg_01.png","7cd95972a0bc3c8be260cdb5068dcfac"],["images/bg/lanzi_bg_02.jpg","d894681e4b79b83db89ca2ae467c0375"],["images/bg/lanzi_bg_03.jpg","f78415e099e7a3b50b5e0b483bbccfc5"],["images/bg/lanzi_bg_04.jpg","71f5fdf98b4e911ea8f61569e24c725b"],["images/bg/lanzi_bg_05.jpg","e35729238994e9466aac056e8863f720"],["images/bg/lanzi_bg_06.jpg","63a93eb4d356f03a1a42ab5c3b9ed79a"],["images/bg/lanzi_bg_07.jpg","f69ba54297f7fb276affdd1dac88582a"],["images/bg/lanzi_bg_08.png","db03777342532ba57e1999de2c75cf84"],["images/bg/lanzi_bg_09.png","ba0fb5d7ab3b5bc4dddd89f7ad2ce3b6"],["images/bg/pink_bg_01.jpg","a7339eb1f50d5deab45404281298f9d8"],["images/bg/pink_bg_02.jpg","32ad92446ca753bedc62538764739413"],["images/bg/pink_bg_03.jpg","f101d8606d1f7cba95f93d9c729a998c"],["images/bg/pink_bg_04.jpg","36bb676ba877fe7b9aef8f3841b773b4"],["images/bg/pink_bg_05.jpg","c0a4afaadf345e8f713abcc46ffa5c73"],["images/bg/pink_bg_06.jpg","0e130aca371fc340384f13c6ce20d735"],["images/bg/purple_bg_01.jpg","3ad6b3ae8ca309a687ef11f6c997180d"],["images/bg/purple_bg_02.jpg","dbc7e854716e94c6365e6ad35144cb85"],["images/bg/purple_bg_03.jpg","68d48bdae1f40b07f15d9c03e849cc96"],["images/bg/purple_bg_04.jpg","c97ec67e97ce58ebc47b9e9ace1aae8e"],["images/bg/purple_bg_05.jpg","fa8075c3e6b5d0dbd36a9f493364e891"],["images/bg/purple_bg_06.jpg","866b798fcbc28decfe3aa218d3762b3d"],["images/bg/purple_bg_07.jpg","a7856f718bf5b8a2e8237731e6fbc6b1"],["images/bg/water_bg_01.jpg","b5cd1e65967ab9ab8fa98238d18b33f2"],["images/bg/water_bg_01.png","b333a9c6052706b9597b96eb1d673f42"],["images/bg/water_bg_02.png","9ce9c97867eed7f9d302d8fb56ed36b9"],["images/bg/water_bg_03.png","f5e719d0ff46dd4f6a6738e09b8da7e3"],["images/bg/water_bg_04.jpg","4209d53b9f026c3572d823dd11bd83ca"],["images/bg/water_bg_04.png","fb2c648d4b882b4b9730cd98d2811822"],["images/bg/water_bg_05.png","1deef140f4ac6a0bcb0d5179818086c0"],["images/bg/water_bg_06.png","b2b8afa9c3715559c2a63fdfd38f24c0"],["images/bg/water_bg_07.png","5975bba3190dd954bcea9fc04833f353"],["images/bg/zig-zag.png","a0d3ec73392d5d62f1aebcfc74ad42c5"],["images/comp/btn_fb.png","a423b50b88206a0fd37cdb3f2525fbf1"],["images/comp/btn_line.png","73ed6fa6e0247fda32295deae3b86cab"],["images/girl/ab4567_ij.png","f74173b64f9436bdd7ae51b21c49a232"],["images/girl/ab4567_ij_thumb.png","4265021957848ccb5bf1abeafdf8e713"],["images/girl/ab4567_s8.png","ccdd72da272ecda0d122bfbbbab1e4ac"],["images/girl/ab4567_s8_thumb.png","c9addc58d6a86fe773bfaf2aa7032acb"],["images/girl/as2367_ij.png","399f30eca8b7e76aa5a98caa484cb6e5"],["images/girl/as2367_s8.png","f21b75a1631360df3e2499bfd99e5392"],["images/ic.png","4cd70fba1490c18a2b9899e065409d0e"],["images/lanzi/as3176_ge.png","256f7b2f252690372baf5b79ef4b1963"],["images/lanzi/as3176_ge_thumb.png","7d6ece42051f9b0267e1fc38b943a233"],["images/lanzi/as3176_sp.png","7168e56a3b5f2aac624b4f19d127e5ef"],["images/lanzi/as3176_sp_thumb.png","2ce501cab0b56dc16dcbb21a8e53dc73"],["images/lanzi/as3305_bl.png","d26e7979cbf8e99cfff1478f52f81157"],["images/lanzi/as3305_bl_thumb.png","cc1e3f46169861b4120282121d2d2fca"],["images/lanzi/as3305_d3.png","e47d375a3436e3d611cbf9b1ec08156f"],["images/lanzi/as3305_d3_thumb.png","97138bdb17bfbdf2a606c5cf9322d07d"],["images/lanzi/as3305_kw.png","783f5a1139f07e9cdc7f2d09b134e3d8"],["images/lanzi/as3305_kw_thumb.png","1e2c152764d51d98fade45ca68598bcc"],["images/lanzi/as3305_mp.png","e822837d43a0e7938a7dbd6aee2ffac7"],["images/lanzi/as3305_mp_thumb.png","9d24911d884865355a5400382bd4907c"],["images/lanzi/as3306_bl.png","145216a60da44e1481a9207fe1df9783"],["images/lanzi/as3306_d3.png","5300da7c32f93e0b76b868e51408353d"],["images/lanzi/as3306_kw.png","2f800843f37634aec0e579d04c2bec79"],["images/lanzi/as3306_mp.png","6eed84ccd7cc423e4274e2a7b5b43c78"],["images/lanzi/as3376_bl.png","24b05ce72b90ad2170b97fc47c52b626"],["images/lanzi/as3376_bl_thumb.png","a8723c5df310fcf4b3039e753fa94a2d"],["images/lanzi/as3376_ge.png","3414f53f137bf6a336a3bd95c95e75ce"],["images/lanzi/as3376_ge_thumb.png","f868481e68d05d67d795a44b4d820b6f"],["images/lanzi/as3376_po.png","0853cefb7c7de9403842ce0e50702f7e"],["images/lanzi/as3376_po_thumb.png","2aba8131f965e5844ef56e0d9d3b56fc"],["images/lanzi/as3376_sp.png","13de7800fcb5a0e3d9f69e5620c3a6e8"],["images/lanzi/as3376_sp_thumb.png","ecf8d6ed53fe84d4b9e70d7bda624c49"],["images/lanzi/as3520_bl.png","312cc205cbebd019513a8f90ad4343b7"],["images/lanzi/as3520_bl_thumb.png","25fe8f8b30687757186b43120a296b6e"],["images/lanzi/as3520_po.png","43b777daae3f730dcfbff40e90e0bfc6"],["images/lanzi/as3520_po_thumb.png","15714e0bf677a1e134d16d39a7c25146"],["images/lanzi/at1809_bl.png","843ea64efea2cbc6e4f33b52654db52c"],["images/lanzi/at1809_bl_thumb.png","9ba705214f900c6cd605ee3f7deae888"],["images/lanzi/at1809_cr.png","67f562adb62ffc8c493ab557319c6e49"],["images/lanzi/at1809_cr_thumb.png","1cf7b35d9783501b6fdb568279d4fa76"],["images/lanzi/at1810_cr.png","6294d04c982b3ba147986358963af6df"],["images/lanzi/at1810_cr_thumb.png","846187b94381e053d382baa92fe28b32"],["images/lanzi/at1819_bl.png","c74bfa6dda207e4aa33b8b33f94da2e4"],["images/lanzi/at1819_cr.png","da52faef52446dbe81572f9f2544cc39"],["images/og_image.png","975256389a5349f3220d41bb1a9a6f33"],["images/og_image_v2.png","ab78b426be2dbdba05f2187613a4fd6d"],["images/pink/ab3569_pl.png","1bbc82e57df3c6a3348df0566e4c876a"],["images/pink/ab3569_pl_thumb.png","35c6b799225a60592f4f87339906fac7"],["images/pink/ab3569_yi.png","bf1c459123a0f3fc0ba804d599cee716"],["images/pink/ab3569_yi_thumb.png","2428dd02a8a1af4ab16189bb754e7b39"],["images/pink/as2369_pl.png","3c0456389976ba9a218a014a074bb75c"],["images/pink/as2369_yi.png","76127e2461d80a85a8345a4998249334"],["images/purple/ab2361_k2_thumb.png","37b34966a2d4b7dfa97202c3ef58ab37"],["images/purple/ab2361_k4_thumb.png","de12d3cbb8e80c0a4bee9ffae6f5adbd"],["images/purple/ab3561_k2.png","3c30da83c70563a0e9c137f2eb46f663"],["images/purple/ab3561_k4.png","33ecce92529e7afdd8152ceabb22e516"],["images/purple/as2361_k2.png","f7a8f86f0f3099e7231537bd5d392e5e"],["images/purple/as2361_k4.png","e260ce23d3b181f056d0766cb8a48f75"],["images/top_bar/top_bar_close.png","ff461c348abfe0ae71b20e89fd900501"],["images/top_bar/top_bar_home.png","b7aa2ca2cbc475f0b2f7ddf27e78f7a3"],["images/top_bar/top_bar_logo.png","cbbe0bb9b76847dba887f462019334c5"],["images/top_bar/top_bar_menu.png","5bc038c9d9efb30cf31db15988485323"],["images/water/ab4560_bl.png","35ae4956e41f114971e3f4d0b93ee011"],["images/water/ab4560_bl_thumb.png","e66c936ee66c92737b299a92ea1536da"],["images/water/ab4560_dd.png","6626b76c860824bc302da295b8d8a187"],["images/water/ab4560_dd_thumb.png","b74c7102c38b8830be2cf4629b7975c5"],["images/water/ab4628_bl.png","c616d53e57fdaba676519e573efaf8f5"],["images/water/ab4628_bl_thumb.png","4be1069e64c8362eb4625726c1f43ae5"],["images/water/ab4628_cr.png","81416c5495eba5ad94eacff43c9fe33f"],["images/water/ab4628_cr_thumb.png","96b6465ecf64bd3e22471869d077860a"],["images/water/as2108_bl.png","fe49875eee88b2a815606df87519b85b"],["images/water/as2108_cr.png","dde95b4150ff58904b530a6c6853de38"],["images/water/as2228_bl.png","a8ff02c088ed05f5467c504e562cd3ba"],["images/water/as2228_cr.png","b8884cc93afaaeebbb1e11cd2af45460"],["images/water/as2360_bl.png","869f9fb66e1e06b52174eea0f17da3eb"],["images/water/as2360_dd.png","e0f2c02290782866c9ce7cfcd0c79f96"],["images/water/as2460_bl.png","e850c315ce3d3f85ccec500404c6aefa"],["images/water/as2460_dd.png","1ded9220270b92eea0cf87bfc4b1febb"],["index.html","7d9b3a4256403787c5bfbd81777c4e41"],["js/bubbles.js","ac7b785800dfbb2a4610559c23850c76"],["js/control.js","7f1cd749473be641d3feb4536d3cae51"],["js/tiny-slider.helper.ie8.js","f15b275eed8219267e945d5c87302b37"],["js/tiny-slider.js","a99bcd3199d34a6a9eb93c670e6bc1fe"],["lanzi.html","d8c73e92c6454dee82bd17fc1fd54303"],["pink.html","ccd54865127ebd0a0877f6d0f43b7dee"],["purple.html","009edf0633c6470941d01beb629da89c"],["water.html","0a484f94b21e34207d1709cd3c7fbbd9"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







