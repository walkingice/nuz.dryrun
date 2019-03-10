/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

workbox.core.skipWaiting();
workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "css/bootstrap-theme.min.css",
    "revision": "de8635e68dcd3b092cd8cd10e6739bef"
  },
  {
    "url": "css/bootstrap.min.css",
    "revision": "a9893fda46dffb63041b2969cec269a2"
  },
  {
    "url": "css/index.css",
    "revision": "6baa5e7297291928f717c118d5b15eea"
  },
  {
    "url": "css/index.min.css",
    "revision": "03194022f03e4f10cb48d0d97c440baa"
  },
  {
    "url": "css/normalize.css",
    "revision": "fda27b856c2e3cada6e0f6bfeccc2067"
  },
  {
    "url": "css/style.css",
    "revision": "785dd676dc21c0798152f181569bd197"
  },
  {
    "url": "css/style.min.css",
    "revision": "7438efb18b33692fde924e928f79ba6a"
  },
  {
    "url": "css/tiny-slider.css",
    "revision": "257503bff4c10c966bab5abd840f58a0"
  },
  {
    "url": "index.html",
    "revision": "c6e67993498e7662e89170a410b322bf"
  },
  {
    "url": "js/bubbles.js",
    "revision": "ac7b785800dfbb2a4610559c23850c76"
  },
  {
    "url": "js/control.js",
    "revision": "7f1cd749473be641d3feb4536d3cae51"
  },
  {
    "url": "js/lib.js",
    "revision": "8067b196981c7ff2366905022d6bbba5"
  },
  {
    "url": "js/tiny-slider.helper.ie8.js",
    "revision": "f15b275eed8219267e945d5c87302b37"
  },
  {
    "url": "js/tiny-slider.js",
    "revision": "a99bcd3199d34a6a9eb93c670e6bc1fe"
  },
  {
    "url": "js/topbar.js",
    "revision": "0998db102668fc8346326b008e57b8b2"
  },
  {
    "url": "images/arrow_left.svg",
    "revision": "b688a8baf44faa3c9a8162c13abcc01b"
  },
  {
    "url": "images/arrow_right.svg",
    "revision": "94ca5b8f07bcbdef15f48797cc2c0343"
  },
  {
    "url": "images/bg/index_bg_01.jpg",
    "revision": "9199995af25d5ee195903f297d1d1107"
  },
  {
    "url": "images/bg/index_bg_02.jpg",
    "revision": "3e806ddf842455b100adf0adbc27f731"
  },
  {
    "url": "images/bg/index_bg_03.jpg",
    "revision": "0d23fb0f1b07c15ffaf27658ddf28d4a"
  },
  {
    "url": "images/comp/btn_fb.png",
    "revision": "a423b50b88206a0fd37cdb3f2525fbf1"
  },
  {
    "url": "images/comp/btn_line.png",
    "revision": "73ed6fa6e0247fda32295deae3b86cab"
  },
  {
    "url": "images/index/fashion_01.jpg",
    "revision": "517ccda3f0fbe1b852b2af803319f8a7"
  },
  {
    "url": "images/index/fashion_02.jpg",
    "revision": "3789c622d628500b050485fb4f1ae6fc"
  },
  {
    "url": "images/index/fashion_03.jpg",
    "revision": "ccee000b1250bcbb8334a744367b8305"
  },
  {
    "url": "images/index/fashion_04.jpg",
    "revision": "597f2eedd74e7e87dbb8396ca500d5cc"
  },
  {
    "url": "images/index/fashion_05.jpg",
    "revision": "9bd039e9d28bad3d98c7bcdce0645f15"
  },
  {
    "url": "images/index/fashion_06.jpg",
    "revision": "bf33c84df8a7f2ae75b09ec662a85ac5"
  },
  {
    "url": "images/index/fashion_07.jpg",
    "revision": "2a3380352a742e606f94a753f7286a00"
  },
  {
    "url": "images/index/fashion_08.jpg",
    "revision": "458b1060064afc62ed61580119c246e2"
  },
  {
    "url": "images/index/fashion_09.jpg",
    "revision": "275583676f04859012a5a558e13b2d7b"
  },
  {
    "url": "images/index/fashion_10.jpg",
    "revision": "51f15d368a3e72328d545c77fa7823b6"
  },
  {
    "url": "images/index/fashion_11.jpg",
    "revision": "f2a3d49f0a315712aab0a196abd67257"
  },
  {
    "url": "images/index/fashion_12.jpg",
    "revision": "2dda35a155460e8b76339566a9989e24"
  },
  {
    "url": "images/index/fashion_13.jpg",
    "revision": "e5c7876fb3f234fb44815565b0d25c11"
  },
  {
    "url": "images/manifest/ic_192.png",
    "revision": "3535eea279587d8be3d1ee99a8db1a31"
  },
  {
    "url": "images/manifest/ic_512.png",
    "revision": "7de981a5e432ecfff78464865addeb2a"
  },
  {
    "url": "images/manifest/ic_ios.png",
    "revision": "a605360e80da517d8fa3acefe5385b29"
  },
  {
    "url": "images/manifest/ic.png",
    "revision": "d5267e5e9f59811492179200562ac415"
  },
  {
    "url": "images/og_image.png",
    "revision": "465be8c060b4005b29737b61800e432b"
  },
  {
    "url": "images/top_bar/top_bar_close.png",
    "revision": "0cd453b36f78e6017fd479e8f9758e17"
  },
  {
    "url": "images/top_bar/top_bar_home.png",
    "revision": "5f0957da674abd559224a2f6293eafc0"
  },
  {
    "url": "images/top_bar/top_bar_logo.png",
    "revision": "6384d8a83c0fabd6d10d68e5802e87bb"
  },
  {
    "url": "images/top_bar/top_bar_menu.png",
    "revision": "7bc2113b4e73a70a82007821577a41e5"
  },
  {
    "url": "images/top_bar/top_bar_story.png",
    "revision": "85bc0e663a68d6e37582cb7a16cf8276"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
