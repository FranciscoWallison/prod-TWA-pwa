importScripts('/workbox-vX.X.X/workbox-sw.js');

workbox.routing.registerRoute(
  new RegExp('.*'),
  new workbox.strategies.NetworkFirst()
);
