!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=13)}([function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),o=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(o).concat([i]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r={},i=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),a=null,s=0,c=[],u=t(4);function l(e,n){for(var t=0;t<e.length;t++){var i=e[t],o=r[i.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](i.parts[a]);for(;a<i.parts.length;a++)o.parts.push(g(i.parts[a],n))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(g(i.parts[a],n));r[i.id]={id:i.id,refs:1,parts:s}}}}function d(e,n){for(var t=[],r={},i=0;i<e.length;i++){var o=e[i],a=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function f(e,n){var t=o(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=c[c.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),c.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=o(e.insertAt.before,t);t.insertBefore(n,i)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=c.indexOf(e);n>=0&&c.splice(n,1)}function p(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return v(n,e.attrs),f(e,n),n}function v(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,r,i,o;if(n.transform&&e.css){if(!(o="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=o}if(n.singleton){var c=s++;t=a||(a=p(n)),r=m.bind(null,t,c,!1),i=m.bind(null,t,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(n,e.attrs),f(e,n),n}(n),r=function(e,n,t){var r=t.css,i=t.sourceMap,o=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||o)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),i=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=p(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){h(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=i()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=d(e,n);return l(t,n),function(e){for(var i=[],o=0;o<t.length;o++){var a=t[o];(s=r[a.id]).refs--,i.push(s)}e&&l(d(e,n),n);for(o=0;o<i.length;o++){var s;if(0===(s=i[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete r[s.id]}}}};var b=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function m(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=b(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}},function(e,n,t){var r=t(3);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(n=e.exports=t(0)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:300);",""]),n.push([e.i,":root {\n  --cards: 1;\n  --w: 300px;\n  --m: 20px;\n}\n\n@media only screen and (min-width: 600px) {\n  :root {\n    --w: 300px;\n    --m: 20px;\n  }\n}\n\n@media only screen and (min-width: 1200px) {\n  :root {\n    --w: 350px;\n    --m: 20px;\n  }\n}\n\nbody {\n  font-family: 'Source Sans Pro', sans-serif;\n  font-size: 16px;\n  font-weight: 300;\n\n  overflow: hidden;\n\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n\n  background: gainsboro;\n}\n\n#app {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  width: 100vw;\n  height: 100vh;\n\n  background-image: radial-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9));\n}\n\n.bottom {\n  position: relative;\n  /* flex-grow: 1; */\n  /* flex: 1; */\n  \n  display: flex;\n  overflow: hidden;\n  /* justify-content: center; */\n  align-items: stretch;\n\n  height: 100%;\n  width: calc(var(--cards) * (2 * var(--m) + var(--w)));\n  margin: 5vh auto;\n  margin-top: unset;\n  /* border-right: 3em solid rgba(128, 128, 128, 0.541); */\n  /* padding: 1em 1em; */\n  /* padding-bottom: 3em; */\n\n  transition: width 0.5s;\n\n  /* background: rgb(48, 48, 48); */\n  background-image: url('https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg');\n  /* background-image: url('https://upload.wikimedia.org/wikipedia/commons/8/8b/YouTube_dark_icon_%282017%29.svg'); */\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 20%;\n  background-blend-mode: soft-light;\n}\n",""])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,o=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,n,t){var r=t(6);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"#search {\n  font-family: inherit;\n  font-size: 1.5em;\n  font-weight: 300;\n  line-height: 1em;\n\n  margin: 5vh 5vw;\n  padding: 0.25em 1em;\n\n  transition: background 0.5s;\n\n  color: white;\n  border: 4px solid transparent;\n  border-radius: 5px;\n  background: black;\n  box-shadow: 0 0 3px 0 rgb(65, 65, 65);\n}\n\n#search:focus {\n  transition: background 0.25s;\n\n  color: black;\n  outline: unset;\n  background: white;\n}\n",""])},function(e,n,t){var r=t(8);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"#clips {\n  display: flex;\n  align-items: stretch;\n\n  transition: transform 1.25s cubic-bezier(0, 0.6, 0.19, 0.99);\n}\n",""])},function(e,n,t){var r=t(10);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,".card {\n  overflow: hidden;\n\n  width: var(--w);\n  margin: var(--m);\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  color: black;\n  border-bottom: 1em solid transparent;\n  background: gainsboro;\n  box-shadow: 0 0 20px 0 rgba(255, 255, 255, 0.377);\n  animation: slide-from-right 1s;\n}\n\n.card-header {\n  overflow: hidden;\n\n  height: 180px;\n\n  background: rgba(0, 0, 0, 0.705);\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n}\n\n.card-header a {\n  text-decoration: none;\n}\n\n.card-header h2 {\n  font-size: 1.25em;\n  font-weight: 300;\n\n  margin: 0;\n  margin-top: 1em;\n  padding: 0.25em 0.75em;\n\n  transition: transform 0.5s;\n\n  color: white;\n  background-color: rgba(0, 0, 0, 0.6);\n  text-shadow: 0 0 20px white;\n}\n\n.card-header h2:hover {\n  transform: translateX(0.5em);\n}\n\n.card-body {\n  margin: 1em;\n\n  overflow-wrap: break-word;\n}\n\n@keyframes slide-from-right {\n  from {\n    transform: translate3d(200%, 0, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n",""])},function(e,n,t){var r=t(12);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,".pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  margin: 3em;\n  padding: 0;\n\n  list-style-type: none;\n}\n\n.pagination-page {\n  --size: 1.8em;\n  font-size: 1.1em;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  width: var(--size);\n  height: var(--size);\n  margin: 0.7em;\n\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition: box-shadow 0.25s, content 1s;\n\n  color: white;\n  background-color: rgba(220, 20, 60, 0.63);\n  box-shadow: 0 0 6px 0 rgba(255, 255, 255, 0.3);\n  box-shadow: 0 0 5px 0px rgba(255, 255, 255, 0.3);\n}\n\n.pagination-page.active {\n  margin: 1em;\n\n  transform: scale(1.3);\n\n  box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.3);\n}\n\n.pagination-page:hover {\n  box-shadow: 0 0 8px 5px rgba(255, 255, 255, 0.3);\n}\n",""])},function(e,n,t){"use strict";t.r(n);t(2),t(5);function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.subscribers=[]}return function(e,n,t){n&&r(e.prototype,n),t&&r(e,t)}(e,[{key:"subscribe",value:function(e){this.subscribers.push(e)}},{key:"unsubscribe",value:function(e){this.subscribers=this.subscribers.filter(function(n){return n!==e})}},{key:"notify",value:function(e){this.subscribers.forEach(function(n){return n(e)})}}]),e}();function o(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=document.createElement("input"),this.node.id="search",this.node.type="search",this.node.placeholder="Search the youtube...",this.node.required=!0,this.node.autofocus=!0,this.node.autocomplete="off",this.node.oninput=this.onInput.bind(this),this.timer=null,this.inputEventObserver=new i}return function(e,n,t){n&&o(e.prototype,n),t&&o(e,t)}(e,[{key:"onInput",value:function(){clearTimeout(this.timer),this.timer=setTimeout(this.triggerInputEvent.bind(this),500)}},{key:"triggerInputEvent",value:function(){this.inputEventObserver.notify(this.node.value)}}]),e}(),s=(t(7),t(9),function(e){var n=e.cardData,t=e.dataId,r=document.createElement("article");r.classList.add("card"),r.dataset.id=t;var i=n.id,o=n.statistics,a=n.snippet,s=new Date(a.publishedAt).toDateString(),c=Number(o.viewCount).toLocaleString();return r.innerHTML='\n    <header class="card-header" style="background-image: url(\''.concat(a.thumbnails.medium.url,'\')">\n      <a href="https://www.youtube.com/watch?v=').concat(i,'" target="_blank">\n        <h2>').concat(a.title,'</h2>\n      </a>\n    </header>\n    <section class="card-body">\n      <div class="card-meta-info">\n        <div class="card-channel"><span>Author:</span> ').concat(a.channelTitle,'</div>\n        <div class="card-published"><span>Published:</span> ').concat(s,'</div>\n        <div class="card-viewed"><span>Views:</span> ').concat(c,'</div>\n      </div>\n      <p class="card-description">').concat(a.description,"</p> \n    </section>\n"),r});function c(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=document.createElement("div"),this.node.id="clips",this.offsetX=0}return function(e,n,t){n&&c(e.prototype,n),t&&c(e,t)}(e,[{key:"addCards",value:function(e){var n=this,t=this.numberOfCards;e.items.forEach(function(e,r){var i=new s({cardData:e,dataId:t+r});n.node.appendChild(i)})}},{key:"translateX",value:function(e){e&&(this.offsetX+=e),this.node.style.transform="translate3d(".concat(this.offsetX,"px, 0, 0)")}},{key:"translateToCard",value:function(e,n){this.offsetX=-n*e,this.translateX()}},{key:"translateToPage",value:function(e){var n=e.pageIndex,t=e.cardsPerPage,r=e.cardFullWidth,i=n*t;this.translateToCard(i,r)}},{key:"reset",value:function(){this.node.innerHTML="",this.offsetX=0,this.translateX()}},{key:"numberOfCards",get:function(){return this.node.children.length}}]),e}(),l=4,d=1,f="--w",h="--m",p="--cards";function v(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var g=function(e,n){var t=getComputedStyle(e).getPropertyValue(n),r=parseInt(t,10);if(Number.isNaN(r))throw new Error("can not parse ".concat(n," from ").concat(e," to integer"));return r},b=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=document.documentElement,this.cardFullWidth=null,this.cardsPerPage=null,this.update()}return function(e,n,t){n&&v(e.prototype,n),t&&v(e,t)}(e,[{key:"update",value:function(){this.calcCardFullWidth(),this.calcCardsPerPage(),this.writeCardsPerPage()}},{key:"calcCardFullWidth",value:function(){var e=this.cardWidth+2*this.cardMargin;this.cardFullWidth=e}},{key:"calcCardsPerPage",value:function(){var e=window.innerWidth,n=Math.trunc(e/this.cardFullWidth);n=Math.max(d,n),n=Math.min(l,n),this.cardsPerPage=n}},{key:"writeCardsPerPage",value:function(){this.element.style.setProperty(p,this.cardsPerPage)}},{key:"cardWidth",get:function(){return g(this.element,f)}},{key:"cardMargin",get:function(){return g(this.element,h)}}]),e}();function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.pageIndex=null,this.variables=new b,this.q="",this.nextPageToken=void 0,this.totalResults=0,this.pageIndexObserver=new i}return function(e,n,t){n&&m(e.prototype,n),t&&m(e,t)}(e,[{key:"reset",value:function(){this.q="",this.totalResults=0,this.nextPageToken=void 0,this.setPageIndex(null)}},{key:"setPageIndex",value:function(e){var n=this.boundPageIndex(e);this.pageIndex=n,console.log("pageIndex now:",this.pageIndex),this.pageIndexObserver.notify({pageIndex:this.pageIndex,cardsPerPage:this.variables.cardsPerPage,cardFullWidth:this.variables.cardFullWidth,totalPages:this.totalPages})}},{key:"goPage",value:function(e){this.setPageIndex(e)}},{key:"goNextPage",value:function(){this.setPageIndex(this.pageIndex+1)}},{key:"goPrevPage",value:function(){this.setPageIndex(this.pageIndex-1)}},{key:"goFirstPage",value:function(){this.setPageIndex(0)}},{key:"boundPageIndex",value:function(e){if(null===e)return e;var n=e;return n<0?n=0:n>=this.totalPages&&(n=this.totalPages-1),n}},{key:"evalPageIndexByCardIndex",value:function(e){return Math.trunc(e/this.variables.cardsPerPage)}},{key:"totalPages",get:function(){return Math.ceil(this.totalResults/this.variables.cardsPerPage)}},{key:"leftVisibleCardIndex",get:function(){return this.variables.cardsPerPage*this.pageIndex}}]),e}(),w={directions:{left:"left",right:"right"},phases:{wait:"wait",start:"swipeStart",move:"swipeMove",end:"swipeEnd"}};function k(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function x(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(n,t){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=n,this.onSwipeCallback=t,this.phase=w.phases.wait,this.startX=null,this.addListeners()}return function(e,n,t){n&&x(e.prototype,n),t&&x(e,t)}(e,[{key:"addListeners",value:function(){var e=this,n={pointerup:this.onPointerUp,pointerdown:this.onPointerDown,pointermove:this.onPointerMove};Object.entries(n).forEach(function(n){var t=k(n,2),r=t[0],i=t[1];return e.node.addEventListener(r,i.bind(e))})}},{key:"dispatchSwipeEvent",value:function(e){var n=Object.assign({phase:this.phase},e);this.onSwipeCallback(n)}},{key:"onPointerDown",value:function(e){if(this.phase!==w.phases.wait)throw new Error("two pointer down");this.phase=w.phases.start,this.startX=e.x,this.dispatchSwipeEvent()}},{key:"onPointerUp",value:function(e){this.phase=w.phases.end;var n,t=e.x;t<this.startX?n=w.directions.left:t>this.startX&&(n=w.directions.right),this.dispatchSwipeEvent({directionX:n}),this.startX=null,this.phase=w.phases.wait}},{key:"onPointerMove",value:function(e){if(this.phase!==w.phases.wait){this.phase=w.phases.move;var n=e.movementX;this.dispatchSwipeEvent({dx:n})}}}]),e}();function I(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=new u,this.model=new y,this.addListeners()}return function(e,n,t){n&&I(e.prototype,n),t&&I(e,t)}(e,[{key:"addListeners",value:function(){window.onresize=this.onWindowResize.bind(this),this.model.pageIndexObserver.subscribe(this.view.translateToPage.bind(this.view)),this.model.pageIndexObserver.subscribe(this.checkIfMoreDataNeeded.bind(this))}},{key:"reset",value:function(){this.view.reset(),this.model.reset()}},{key:"checkIfMoreDataNeeded",value:function(){null!==this.model.pageIndex&&this.model.nextPageToken&&(Math.trunc(this.view.numberOfCards/this.model.variables.cardsPerPage)-(this.model.pageIndex+1)<4&&this.api.requestNext())}},{key:"onGoToPage",value:function(e){this.model.goPage(e)}},{key:"onResponseOk",value:function(e){var n=e.q,t=e.nextPageToken,r=e.pageInfo.totalResults;n!==this.model.q&&this.reset(),this.view.addCards(e),this.model.q=n,this.model.totalResults=t?r:this.view.numberOfCards,this.model.nextPageToken=t,null===this.model.pageIndex&&this.model.goFirstPage()}},{key:"onResponseErr",value:function(){}},{key:"onWindowResize",value:function(){var e=this.model.leftVisibleCardIndex;this.model.variables.update();var n=this.model.evalPageIndexByCardIndex(e);this.model.goPage(n)}},{key:"onSwipe",value:function(e){switch(e.phase){case w.phases.move:this.onSwipeMove(e);break;case w.phases.end:this.onSwipeEnd(e)}}},{key:"onSwipeEnd",value:function(e){switch(e.directionX){case w.directions.left:this.model.goNextPage();break;case w.directions.right:this.model.goPrevPage()}}},{key:"onSwipeMove",value:function(e){var n=e.dx;this.view.translateX(n)}}]),e}(),E=(t(11),function(e){return e+1}),S=function(e){return parseInt(e-1,10)};function T(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C="pagination-page",j="active",L=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.node=document.createElement("ul"),this.node.classList.add("pagination"),this.callback=n,this.addListeners()}return function(e,n,t){n&&T(e.prototype,n),t&&T(e,t)}(e,[{key:"renderIndicators",value:function(e){if(this.node.innerHTML="",e){var n=document.createDocumentFragment();Array(e).fill().forEach(function(){var e=function(){var e=document.createElement("li");return e.classList.add(C),e}();n.appendChild(e)}),this.node.appendChild(n)}}},{key:"setupIndicators",value:function(e,n){this.indicators.forEach(function(t,r){var i=E(r+e);t.innerHTML=i,i===E(n)?t.classList.add(j):t.classList.remove(j)})}},{key:"addListeners",value:function(){var e=this;this.node.addEventListener("pointerup",function(n){if(n.target.classList.contains(C)){var t=n.target.innerHTML;e.callback(S(t))}})}},{key:"indicators",get:function(){return this.node.querySelectorAll(".".concat(C))}}]),e}();function M(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.view=new L,this.view.callback=this.onIndicatorSelect.bind(this),this.pageSelectObserver=new i}return function(e,n,t){n&&M(e.prototype,n),t&&M(e,t)}(e,[{key:"goToPage",value:function(e){var n=e.pageIndex,t=e.totalPages;if(null!==n&&0!==t){if(n<0||n>t-1)throw new Error("Pagination: wrong page index ".concat(n));var r=function(e){return Math.min(e,5)}(t),i=function(e,n,t){if(t<=n)return 0;var r=e-Math.trunc(n/2);return r<0?0:r+n>t-1?t-n:r}(n,r,t);r!==this.view.indicators.length&&this.view.renderIndicators(r),r&&this.view.setupIndicators(i,n)}else this.view.renderIndicators(0)}},{key:"onIndicatorSelect",value:function(e){this.pageSelectObserver.notify(e)}}]),e}();function U(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var q=function(e,n){var t=new URLSearchParams(n);return t.append("key","AIzaSyCO91lXUmyHSjptIytppH21bKNTF_9pBT8"),"".concat("https://www.googleapis.com/youtube/v3/").concat(e,"?").concat(t.toString())},A=function(e){var n=function(e){return q("videos",{id:e.join(","),part:"snippet,statistics",fields:"items(id,snippet(channelTitle,description,publishedAt,thumbnails/medium,title),statistics/viewCount)"})}(e.items.map(function(e){return e.id.videoId}));return fetch(n).then(function(e){return e.json()}).then(function(n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){U(e,n,t[n])})}return e}({},e,n)}).catch(function(e){return console.log("error",e)})},N=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";console.log("get videos ids for:",e);var t=function(e,n){return q("search",{q:e,pageToken:n,maxResults:15,part:"snippet",type:"id",fields:"items(id/videoId),nextPageToken,pageInfo,prevPageToken"})}(e,n);return fetch(t).then(function(e){return e.json()}).catch(function(e){return console.log("error",e)}).then(function(e){return e}).then(function(e){return e})};function X(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.apiKey=n,this.maxResult=t,this.q="",this.nextPageToken="",this.callbackOK}return function(e,n,t){n&&z(e.prototype,n),t&&z(e,t)}(e,[{key:"requestNext",value:function(){this.request(this.q,this.nextPageToken)}},{key:"request",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";e&&""!==e&&(this.q=e,function(e,n){return N(e,n).then(function(e){return A(e)}).catch(function(e){return console.log(e)})}(e,n).then(this.onSearchOk.bind(this)).catch(this.onSearchError.bind(this)))}},{key:"onSearchOk",value:function(e){this.nextPageToken=e.nextPageToken,console.log("this.nextPageToken",this.nextPageToken),this.callbackOK(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){X(e,n,t[n])})}return e}({},e,{q:this.q}))}},{key:"onSearchError",value:function(e){}}]),e}(),F=function(){var e=document.createElement("div");return e.id="app",e}(),_=function(){var e=document.createElement("div");return e.classList.add("bottom"),e}(),W=new R,B=new O,H=new a;B.model.pageIndexObserver.subscribe(W.goToPage.bind(W)),W.pageSelectObserver.subscribe(B.onGoToPage.bind(B));new P(_,B.onSwipe.bind(B));document.body.appendChild(F),F.appendChild(H.node),F.appendChild(_),_.appendChild(B.view.node),F.appendChild(W.view.node);var K=new D;K.callbackOK=B.onResponseOk.bind(B),K.callbackErr=B.onResponseErr.bind(B),H.inputEventObserver.subscribe(K.request.bind(K)),B.api=K}]);
//# sourceMappingURL=main.js.map