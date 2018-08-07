/* globals importScripts WorkboxSW */
importScripts('workbox-sw.prod.v2.1.3.js');

const workboxSW = new WorkboxSW();
workboxSW.precache([]);
