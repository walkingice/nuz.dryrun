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
    "url": "css/bootstrap.min.css",
    "revision": "2c13f8f196c90ed6bac9ccdc67dd188e"
  },
  {
    "url": "css/normalize.css",
    "revision": "fda27b856c2e3cada6e0f6bfeccc2067"
  },
  {
    "url": "css/style.css",
    "revision": "0a809fee911b208b7b68d89fd8944fa1"
  },
  {
    "url": "css/style.min.css",
    "revision": "c2c2095236d59e992750f73cb197acc5"
  },
  {
    "url": "css/tiny-slider.css",
    "revision": "257503bff4c10c966bab5abd840f58a0"
  },
  {
    "url": "detail.html",
    "revision": "18eed0071e943280102e0bcde4f454ac"
  },
  {
    "url": "index.html",
    "revision": "3c07006fa198f1dd1bac69bf4216bef4"
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
    "url": "js/tiny-slider.helper.ie8.js",
    "revision": "f15b275eed8219267e945d5c87302b37"
  },
  {
    "url": "js/tiny-slider.js",
    "revision": "a99bcd3199d34a6a9eb93c670e6bc1fe"
  },
  {
    "url": "setup.html",
    "revision": "340cbb0aac637f3b8a0a0425248d7d61"
  },
  {
    "url": "story.html",
    "revision": "190db5464d617821a698559850243ad3"
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
    "url": "images/bg/detail_bg_01.jpg",
    "revision": "dc881c65e79356492a86ea226dc9082d"
  },
  {
    "url": "images/bg/detail_bg_02.jpg",
    "revision": "ab155f3525a2ea55d4c1ba2466b16aec"
  },
  {
    "url": "images/bg/detail_bg_03.jpg",
    "revision": "898e01bdb0ee4436aba0ff1dcfeab4ae"
  },
  {
    "url": "images/bg/index_bg_01-1.jpg",
    "revision": "4b05ebd07bf11562e558ced7c471efd5"
  },
  {
    "url": "images/bg/index_bg_01-2.jpg",
    "revision": "8fdad73e99001cc29f23249074cda700"
  },
  {
    "url": "images/bg/index_bg_01-3.jpg",
    "revision": "01e3f4abd071362b7a767dda7ce71095"
  },
  {
    "url": "images/bg/index_bg_01-4.jpg",
    "revision": "41d0da29a3bd3c9e8420781da8b3a1a6"
  },
  {
    "url": "images/bg/index_bg_01-5.jpg",
    "revision": "ebf49d217c1f84739e002ad2f8b8dff9"
  },
  {
    "url": "images/bg/index_bg_02.jpg",
    "revision": "0f9292ee734e8972dc0ddfe36f37adfb"
  },
  {
    "url": "images/bg/story_bg_01_02.jpg",
    "revision": "a6b3d3cdd420ca9434e6c1b566b8c600"
  },
  {
    "url": "images/bg/story_bg_01_03.jpg",
    "revision": "dc7e94de8cdde3c9e55726285a3ea9b1"
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
    "url": "images/detail/ss0001_bl_thumb.png",
    "revision": "1606504c3e698078cc675697d47c2a3c"
  },
  {
    "url": "images/detail/ss0001_bl.png",
    "revision": "1f6c731223c31ae4e7038cc4b0646b3a"
  },
  {
    "url": "images/detail/ss0001_gr_thumb.png",
    "revision": "c508bb9204e7644e4ae9dc9009996285"
  },
  {
    "url": "images/detail/ss0001_gr.png",
    "revision": "71398150037962747f2a076cf60bcb0f"
  },
  {
    "url": "images/detail/ss0001_pr_thumb.png",
    "revision": "f83b4a47293cf511e1aa12c4e0cd4dcd"
  },
  {
    "url": "images/detail/ss0001_pr.png",
    "revision": "693d21723f5ca7ccd9ea72b387ef6922"
  },
  {
    "url": "images/detail/ss0002_bl_thumb.png",
    "revision": "c876165d85dd4959e071ee813cfba760"
  },
  {
    "url": "images/detail/ss0002_bl.png",
    "revision": "eb7099f1df2c0508f50120e309fd0ab0"
  },
  {
    "url": "images/detail/ss0002_gr_thumb.png",
    "revision": "cbc74f0cbd9d9ee277fddab45665f757"
  },
  {
    "url": "images/detail/ss0002_gr.png",
    "revision": "2c395f792eb6353a80c3d1aff95e1ee2"
  },
  {
    "url": "images/detail/ss0002_pr_thumb.png",
    "revision": "c99657b1e1dcd6686fc089ca58185a23"
  },
  {
    "url": "images/detail/ss0002_pr.png",
    "revision": "ca93c5733517aaac304a215fa248dbdc"
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
    "revision": "ab78b426be2dbdba05f2187613a4fd6d"
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
    "revision": "80d21e400cb0e0d64522c4e7823daff9"
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
