"use strict";var precacheConfig=[["/React-Dashboard/index.html","35a64cb1519d1459cdfb6686b2eb9ca1"],["/React-Dashboard/static/css/main.5bf5ac4e.css","a509253a206abc3154067595e56978e9"],["/React-Dashboard/static/js/main.d655f04e.js","52ce0d0383391bbdc8c7310c868ca8f8"],["/React-Dashboard/static/media/01d.a82069ff.svg","a82069ff99c54fb70eeb7350e3962e98"],["/React-Dashboard/static/media/01n.5c18f561.svg","5c18f5615656a3c79606f1dfa57c6460"],["/React-Dashboard/static/media/02d.6f58dee5.svg","6f58dee51fb163f47575f0610de6940c"],["/React-Dashboard/static/media/02n.01ea4817.svg","01ea4817f9cf043d467a035b999818a7"],["/React-Dashboard/static/media/03d.43d44daa.svg","43d44daaf53896b171ab687c472c0a23"],["/React-Dashboard/static/media/04d.4731597a.svg","4731597a7a08b996c1537e26330b09e4"],["/React-Dashboard/static/media/09d.472778e9.svg","472778e924201232304b0406e971f43a"],["/React-Dashboard/static/media/10d.043dcd80.svg","043dcd8014169050d3166bae43deeb48"],["/React-Dashboard/static/media/10n.3f983a27.svg","3f983a27280a86f95f69dc285a1e9085"],["/React-Dashboard/static/media/11d.58fab0dc.svg","58fab0dc6fae4c6311cc7df64786ce6e"],["/React-Dashboard/static/media/13d.109cc8d7.svg","109cc8d7d70504a06640fa508582cddb"],["/React-Dashboard/static/media/50d.2ecfcf0e.svg","2ecfcf0e59ca063c23e92137091bf5d9"],["/React-Dashboard/static/media/circular-black.7f42d848.otf","7f42d8488652eb250af2f484d377dbee"],["/React-Dashboard/static/media/circular-book.6365c40a.otf","6365c40aa59d462f1cc52ccce9635cb4"],["/React-Dashboard/static/media/robotomono-light.b82d827b.ttf","b82d827ba127c43e9272942682b88dc3"],["/React-Dashboard/static/media/x.62eefd11.svg","62eefd11215424ec653ab194330af840"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var r=new URL(e);return c&&r.pathname.match(c)||(r.search+=(r.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),r.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),r=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var r="/React-Dashboard/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});