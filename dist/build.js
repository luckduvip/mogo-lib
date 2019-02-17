!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("MogoLib",[],n):"object"==typeof exports?exports.MogoLib=n():e.MogoLib=n()}(window,function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/",t(t.s=0)}([function(e,n,t){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}t.r(n);var r={},a=/android/gi.test(navigator.appVersion),l=function(){var e=window.localStorage;return a&&window.os&&(e=os.localStorage()),e};function i(e,n,t,o){return"function"==typeof n&&(o=t,t=n,n=void 0),"function"!=typeof t&&(o=t,t=void 0),{url:e,data:n,fnSuc:t,dataType:o}}r.trim=function(e){return String.prototype.trim?null==e?"":String.prototype.trim.call(e):e.replace(/(^\s*)|(\s*$)/g,"")},r.trimAll=function(e){return e.replace(/\s*/g,"")},r.isElement=function(e){return!(!e||1!=e.nodeType)},r.isArray=function(e){return Array.isArray?Array.isArray(e):e instanceof Array},r.isEmptyObject=function(e){return"{}"===JSON.stringify(e)},r.addEvt=function(e,n,t,o){r.isElement(e)?(o=o||!1,e.addEventListener&&e.addEventListener(n,t,o)):console.warn("$api.addEvt Function need el param, el param must be DOM Element")},r.rmEvt=function(e,n,t,o){r.isElement(e)?(o=o||!1,e.removeEventListener&&e.removeEventListener(n,t,o)):console.warn("$api.rmEvt Function need el param, el param must be DOM Element")},r.one=function(e,n,t,o){if(r.isElement(e)){o=o||!1;var a=this;a.addEvt(e,n,function r(){t&&t(),a.rmEvt(e,n,r,o)},o)}else console.warn("$api.one Function need el param, el param must be DOM Element")},r.dom=function(e,n){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelector)return document.querySelector(arguments[0])}else if(2===arguments.length&&e.querySelector)return e.querySelector(n)},r.domAll=function(e,n){if(1===arguments.length&&"string"==typeof arguments[0]){if(document.querySelectorAll)return document.querySelectorAll(arguments[0])}else if(2===arguments.length&&e.querySelectorAll)return e.querySelectorAll(n)},r.byId=function(e){return document.getElementById(e)},r.first=function(e,n){return 1===arguments.length?r.isElement(e)?e.children[0]:void console.warn("$api.first Function need el param, el param must be DOM Element"):2===arguments.length?this.dom(e,n+":first-child"):void 0},r.last=function(e,n){if(1===arguments.length){if(!r.isElement(e))return void console.warn("$api.last Function need el param, el param must be DOM Element");var t=e.children;return t[t.length-1]}if(2===arguments.length)return this.dom(e,n+":last-child")},r.eq=function(e,n){return this.dom(e,":nth-child("+n+")")},r.not=function(e,n){return this.domAll(e,":not("+n+")")},r.prev=function(e){if(r.isElement(e)){var n=e.previousSibling;return n.nodeType&&3===n.nodeType?n=n.previousSibling:void 0}console.warn("$api.prev Function need el param, el param must be DOM Element")},r.next=function(e){if(r.isElement(e)){var n=e.nextSibling;return n.nodeType&&3===n.nodeType?n=n.nextSibling:void 0}console.warn("$api.next Function need el param, el param must be DOM Element")},r.closest=function(e,n){if(r.isElement(e)){var t,o;return function e(n,a){for(t=r.domAll(n.parentNode,a),o=function(e,n){for(var t=0,o=e.length;t<o;t++)if(e[t].isEqualNode(n))return e[t];return!1}(t,n);!o;){if(null!=(n=n.parentNode)&&n.nodeType==n.DOCUMENT_NODE)return!1;e(n,a)}return o}(e,n)}console.warn("$api.closest Function need el param, el param must be DOM Element")},r.contains=function(e,n){var t=!1;if(n===e)return t=!0;do{if((n=n.parentNode)===e)return t=!0}while(n===document.body||n===document.documentElement);return t},r.remove=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},r.attr=function(e,n,t){if(r.isElement(e))return 2==arguments.length?e.getAttribute(n):3==arguments.length?(e.setAttribute(n,t),e):void 0;console.warn("$api.attr Function need el param, el param must be DOM Element")},r.removeAttr=function(e,n){r.isElement(e)?2===arguments.length&&e.removeAttribute(n):console.warn("$api.removeAttr Function need el param, el param must be DOM Element")},r.hasCls=function(e,n){if(r.isElement(e))return e.className.indexOf(n)>-1;console.warn("$api.hasCls Function need el param, el param must be DOM Element")},r.addCls=function(e,n){if(r.isElement(e)){if("classList"in e)e.classList.add(n);else{var t=e.className+" "+n;e.className=t}return e}console.warn("$api.addCls Function need el param, el param must be DOM Element")},r.removeCls=function(e,n){if(r.isElement(e)){if("classList"in e)e.classList.remove(n);else{var t=e.className.replace(n,"");e.className=t}return e}console.warn("$api.removeCls Function need el param, el param must be DOM Element")},r.toggleCls=function(e,n){if(r.isElement(e))return"classList"in e?e.classList.toggle(n):r.hasCls(e,n)?r.removeCls(e,n):r.addCls(e,n),e;console.warn("$api.toggleCls Function need el param, el param must be DOM Element")},r.val=function(e,n){if(r.isElement(e)){if(1===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value;case"INPUT":case"TEXTAREA":return e.value}if(2===arguments.length)switch(e.tagName){case"SELECT":return e.options[e.selectedIndex].value=n,e;case"INPUT":case"TEXTAREA":return e.value=n,e}}else console.warn("$api.val Function need el param, el param must be DOM Element")},r.prepend=function(e,n){if(r.isElement(e))return e.insertAdjacentHTML("afterbegin",n),e;console.warn("$api.prepend Function need el param, el param must be DOM Element")},r.append=function(e,n){if(r.isElement(e))return e.insertAdjacentHTML("beforeend",n),e;console.warn("$api.append Function need el param, el param must be DOM Element")},r.before=function(e,n){if(r.isElement(e))return e.insertAdjacentHTML("beforebegin",n),e;console.warn("$api.before Function need el param, el param must be DOM Element")},r.after=function(e,n){if(r.isElement(e))return e.insertAdjacentHTML("afterend",n),e;console.warn("$api.after Function need el param, el param must be DOM Element")},r.html=function(e,n){if(r.isElement(e))return 1===arguments.length?e.innerHTML:2===arguments.length?(e.innerHTML=n,e):void 0;console.warn("$api.html Function need el param, el param must be DOM Element")},r.text=function(e,n){if(r.isElement(e))return 1===arguments.length?e.textContent:2===arguments.length?(e.textContent=n,e):void 0;console.warn("$api.text Function need el param, el param must be DOM Element")},r.offset=function(e){if(r.isElement(e)){var n=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft),t=Math.max(document.documentElement.scrollTop,document.body.scrollTop),o=e.getBoundingClientRect();return{l:o.left+n,t:o.top+t,w:e.offsetWidth,h:e.offsetHeight}}console.warn("$api.offset Function need el param, el param must be DOM Element")},r.css=function(e,n){r.isElement(e)?"string"==typeof n&&n.indexOf(":")>0&&e.style&&(e.style.cssText+=";"+n):console.warn("$api.css Function need el param, el param must be DOM Element")},r.cssVal=function(e,n){if(r.isElement(e)){if(2===arguments.length)return window.getComputedStyle(e,null).getPropertyValue(n)}else console.warn("$api.cssVal Function need el param, el param must be DOM Element")},r.jsonToStr=function(e){if("object"===o(e))return JSON&&JSON.stringify(e)},r.strToJson=function(e){if("string"==typeof e)return JSON&&JSON.parse(e)},r.setStorage=function(e,n){if(2===arguments.length){var t=n;t="object"==o(t)?"obj-"+(t=JSON.stringify(t)):"str-"+t;var r=l();r&&r.setItem(e,t)}},r.getStorage=function(e){var n=l();if(n){var t=n.getItem(e);if(!t)return;if(0===t.indexOf("obj-"))return t=t.slice(4),JSON.parse(t);if(0===t.indexOf("str-"))return t.slice(4)}},r.rmStorage=function(e){var n=l();n&&e&&n.removeItem(e)},r.clearStorage=function(){var e=l();e&&e.clear()},r.fixIos7Bar=function(e){return r.fixStatusBar(e)},r.fixStatusBar=function(e){return r.isElement(e)?(window.api&&(e.style.paddingTop=api.safeArea.top+"px"),e.offsetHeight):(console.warn("$api.fixStatusBar Function need el param, el param must be DOM Element"),0)},r.toast=function(e,n,t){var o={},r=function(e,n){api.showProgress(e),setTimeout(function(){api.hideProgress()},n)};if(1===arguments.length){t=t||500;"number"==typeof e?t=e:o.title=e+"",r(o,t)}else if(2===arguments.length){t=t||500;if("number"==typeof(n=n))t=n,n=null;e&&(o.title=e),n&&(o.text=n),r(o,t)}e&&(o.title=e),n&&(o.text=n),r(o,t=t||500)},r.post=function(){var e=i.apply(null,arguments),n={},t=e.fnSuc;if(e.url&&(n.url=e.url),e.data&&(n.data=e.data),e.dataType){var o=e.dataType.toLowerCase();"text"!=o&&"json"!=o||(n.dataType=o)}else n.dataType="json";n.method="post",api.ajax(n,function(e,n){e&&t&&t(e)})},r.get=function(){var e=i.apply(null,arguments),n={},t=e.fnSuc;if(e.url&&(n.url=e.url),e.dataType){var o=e.dataType.toLowerCase();"text"!=o&&"json"!=o||(n.dataType=o)}else n.dataType="text";n.method="get",api.ajax(n,function(e,n){e&&t&&t(e)})};var s=r;console.log("ssss");var u={init:function(){},ApiTool:s,isApp:""==location.port,currWinName:"root",version:"1.1.0",onScrollHandle:function(e){document.body.onscroll=function(){var n=document.body.scrollTop||document.documentElement.scrollTop;e(n)}},apiReady:function(e){var n,t=function(){n&&clearTimeout(n),e(),window.api||(window.api={setPrefs:function(){},getPrefs:function(){},confirm:function(e){console.log("confirm",e)},openApp:function(e){console.log("open App"+e.uri)},closeToWin:function(e){console.log("closetoWin")},closeFrame:function(){console.log("api.closeFrame")},toast:function(){console.log("toasted")},hideProgress:function(){console.log("hide progress")},setFrameGroupIndex:function(e){console.log("set frame group index groupName= ".concat(e.name))},require:function(){console.log("require---")},openFrame:function(e,n){console.log("openFrame",e,JSON.stringify(n))},openFrameGroup:function(){console.log("openFrameGroup")},refreshHeaderLoadDone:function(){console.log("call method == refreshHeaderLoadDone")},pageParam:{____name:"ddefault api pageParam"},openWin:function(e,n){console.log("openWin",e,JSON.stringify(n))},test:function(){console.log("call method == test")},refreshHeaderLoading:function(){console.log("call method == refreshHeaderLoading")},sendEvent:function(e){console.log("call method == sendEvent"+e.name)},addEventListener:function(){console.log("call method == addEventListener")},setRefreshHeaderInfo:function(){console.log("call method == setRefreshHeaderInfo")},setStatusBarStyle:function(){console.log("set status bar style")},safeArea:{top:0},closeWin:function(){console.log("close win")}})};window.apiready=t,n=setTimeout(t,2e3)},openOuter:function(e){this.openWin("outer".concat(Date.now()),{url:"./can_outer.html",bounces:e.bouncds,pageParam:e.pageParam})},openWin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"test",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=e;this.currWinName=t,api.openWin({name:t,url:n.url||"./"+e+".html",rect:n.rect||{x:0,y:0,w:"auto",h:"auto"},pageParam:n.pageParam||{},useWKWebView:!1,vScrollBarEnabled:!1,bounces:!!n.bounces,reload:!!n.reload,scrollToTop:null==n.scrollToTop||n.scrollToTop,bgColor:n.bgColor||"#fff",slidBackEnabled:null==n.slidBackEnabled||n.slidBackEnabled,slidBackType:n.slidBackType||"edge",animation:n.animation||null})},openFrame:function(e,n){n=n||{},api.openFrame({name:e,url:n.url||"./"+e+".html",rect:n.rect||{x:0,y:0,w:"auto",h:"auto"},pageParam:n.pageParam||{},useWKWebView:!1,vScrollBarEnabled:!1,bounces:null==n.bounces||n.bounces,reload:!!n.reload,scrollToTop:null==n.scrollToTop||n.scrollToTop,bgColor:n.bgColor||"#fff",animation:n.animation||null})},setRefreshHeaderInfo:function(e,n){n=n||{},window.api?api.setRefreshHeaderInfo({bgColor:n.bgColor||"#fff",textDown:n.textDown||"下拉刷新...",textUp:n.textUp||"松开刷新..."},e):e()},setRefreshFooterInfo:function(e){window.api?api.addEventListener({name:"scrolltobottom",extra:{threshold:0}},e):e()},setStorage:function(e,n){return s.setStorage(e,n)},getStorage:function(e){return s.getStorage(e)},rmStorage:function(e){return s.rmStorage(e)},clearStorage:function(){return s.clearStorage()}};n.default=u}])});
//# sourceMappingURL=build.js.map