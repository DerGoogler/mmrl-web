(()=>{var __webpack_modules__={2115:module=>{var __webpack_unused_export__;null!=window.__os__&&function(){var PLATFORM_VERSION_BUILD_LABEL="10.1.2",require,define,modules,requireStack,inProgressModules;modules={},requireStack=[],inProgressModules={},require=function(e){if(!modules[e])throw new Error("module "+e+" not found");if(e in inProgressModules){var r=requireStack.slice(inProgressModules[e]).join("->")+"->"+e;throw new Error("Cycle in require graph: "+r)}if(modules[e].factory)try{return inProgressModules[e]=requireStack.length,requireStack.push(e),function(e){var r=e.factory;return e.exports={},delete e.factory,r((function(r){var n=r;return"."===r.charAt(0)&&(n=e.id.slice(0,e.id.lastIndexOf("."))+"."+r.slice(2)),require(n)}),e.exports,e),e.exports}(modules[e])}finally{delete inProgressModules[e],requireStack.pop()}return modules[e].exports},(define=function(e,r){if(Object.prototype.hasOwnProperty.call(modules,e))throw new Error("module "+e+" already defined");modules[e]={id:e,factory:r}}).remove=function(e){delete modules[e]},define.moduleMap=modules,"function"==typeof require&&(__webpack_unused_export__=require,__webpack_unused_export__=define),define("cordova",(function(e,r,n){if(window.cordova&&!(window.cordova instanceof HTMLElement))throw new Error("cordova already defined");var o=e("cordova/channel"),t=e("cordova/platform"),i=document.addEventListener,a=document.removeEventListener,s=window.addEventListener,c=window.removeEventListener,d={},l={};function u(e,r){var n=document.createEvent("Events");if(n.initEvent(e,!1,!1),r)for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n}document.addEventListener=function(e,r,n){var o=e.toLowerCase();void 0!==d[o]?d[o].subscribe(r):i.call(document,e,r,n)},window.addEventListener=function(e,r,n){var o=e.toLowerCase();void 0!==l[o]?l[o].subscribe(r):s.call(window,e,r,n)},document.removeEventListener=function(e,r,n){var o=e.toLowerCase();void 0!==d[o]?d[o].unsubscribe(r):a.call(document,e,r,n)},window.removeEventListener=function(e,r,n){var o=e.toLowerCase();void 0!==l[o]?l[o].unsubscribe(r):c.call(window,e,r,n)};var f={define,require:e,version:PLATFORM_VERSION_BUILD_LABEL,platformVersion:PLATFORM_VERSION_BUILD_LABEL,platformId:t.id,addWindowEventHandler:function(e){return l[e]=o.create(e)},addStickyDocumentEventHandler:function(e){return d[e]=o.createSticky(e)},addDocumentEventHandler:function(e){return d[e]=o.create(e)},removeWindowEventHandler:function(e){delete l[e]},removeDocumentEventHandler:function(e){delete d[e]},getOriginalHandlers:function(){return{document:{addEventListener:i,removeEventListener:a},window:{addEventListener:s,removeEventListener:c}}},fireDocumentEvent:function(e,r,n){var o=u(e,r);void 0!==d[e]?n?d[e].fire(o):setTimeout((function(){"deviceready"===e&&document.dispatchEvent(o),d[e].fire(o)}),0):document.dispatchEvent(o)},fireWindowEvent:function(e,r){var n=u(e,r);void 0!==l[e]?setTimeout((function(){l[e].fire(n)}),0):window.dispatchEvent(n)},callbackId:Math.floor(2e9*Math.random()),callbacks:{},callbackStatus:{NO_RESULT:0,OK:1,CLASS_NOT_FOUND_EXCEPTION:2,ILLEGAL_ACCESS_EXCEPTION:3,INSTANTIATION_EXCEPTION:4,MALFORMED_URL_EXCEPTION:5,IO_EXCEPTION:6,INVALID_ACTION:7,JSON_EXCEPTION:8,ERROR:9},callbackSuccess:function(e,r){f.callbackFromNative(e,!0,r.status,[r.message],r.keepCallback)},callbackError:function(e,r){f.callbackFromNative(e,!1,r.status,[r.message],r.keepCallback)},callbackFromNative:function(e,r,n,o,t){try{var i=f.callbacks[e];i&&(r&&n===f.callbackStatus.OK?i.success&&i.success.apply(null,o):r||i.fail&&i.fail.apply(null,o),t||delete f.callbacks[e])}catch(n){var a="Error in "+(r?"Success":"Error")+" callbackId: "+e+" : "+n;throw f.fireWindowEvent("cordovacallbackerror",{message:a,error:n}),n}},addConstructor:function(e){o.onCordovaReady.subscribe((function(){try{e()}catch(e){console.log("Failed to run constructor: "+e)}}))}};n.exports=f})),define("cordova/android/nativeapiprovider",(function(e,r,n){var o=this._cordovaNative||e("cordova/android/promptbasednativeapi"),t=o;n.exports={get:function(){return t},setPreferPrompt:function(r){t=r?e("cordova/android/promptbasednativeapi"):o},set:function(e){t=e}}})),define("cordova/android/promptbasednativeapi",(function(e,r,n){n.exports={exec:function(e,r,n,o,t){return prompt(t,"gap:"+JSON.stringify([e,r,n,o]))},setNativeToJsBridgeMode:function(e,r){prompt(r,"gap_bridge_mode:"+e)},retrieveJsMessages:function(e,r){return prompt(+r,"gap_poll:"+e)}}})),define("cordova/argscheck",(function(e,r,n){var o=e("cordova/utils"),t=n.exports,i={A:"Array",D:"Date",N:"Number",S:"String",F:"Function",O:"Object"};t.checkArgs=function(e,r,n,a){if(t.enableChecks){for(var s,c,d,l=null,u=0;u<e.length;++u){var f=e.charAt(u),v=f.toUpperCase(),p=n[u];if("*"!==f&&(s=o.typeName(p),(null!=p||f!==v)&&s!==i[v])){l="Expected "+i[v];break}}if(l)throw l+=", but got "+s+".",l='Wrong type for parameter "'+(c=a||n.callee,d=u,/\(\s*([^)]*?)\s*\)/.exec(c)[1].split(/\s*,\s*/)[d]+'" of ')+r+": "+l,"undefined"==typeof jasmine&&console.error(l),TypeError(l)}},t.getValue=function(e,r){return void 0===e?r:e},t.enableChecks=!0})),define("cordova/base64",(function(e,r,n){var o=r;o.fromArrayBuffer=function(e){return function(e){for(var r,n=e.byteLength,o="",t=a(),s=0;s<n-2;s+=3)o+=t[(r=(e[s]<<16)+(e[s+1]<<8)+e[s+2])>>12],o+=t[4095&r];n-s==2?(o+=t[(r=(e[s]<<16)+(e[s+1]<<8))>>12],o+=i[(4095&r)>>6],o+="="):n-s==1&&(o+=t[(r=e[s]<<16)>>12],o+="==");return o}(new Uint8Array(e))},o.toArrayBuffer=function(e){for(var r=atob(e),n=new ArrayBuffer(r.length),o=new Uint8Array(n),t=0,i=r.length;t<i;t++)o[t]=r.charCodeAt(t);return n};var t,i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=function(){t=[];for(var e=0;e<64;e++)for(var r=0;r<64;r++)t[64*e+r]=i[e]+i[r];return a=function(){return t},t}})),define("cordova/builder",(function(e,r,n){var o=e("cordova/utils");function t(e,r,n){var t=!1;try{e[r]=n}catch(e){t=!0}(t||e[r]!==n)&&o.defineGetter(e,r,(function(){return n}))}function i(e,r,n,i){i?o.defineGetter(e,r,(function(){return console.log(i),delete e[r],t(e,r,n),n})):t(e,r,n)}function a(r,n,t,c){!function(e,r,n){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.apply(n,[e[o],o])}(n,(function(n,d){try{var l=n.path?e(n.path):{};t?(void 0===r[d]?i(r,d,l,n.deprecated):void 0!==n.path&&(c?s(r[d],l):i(r,d,l,n.deprecated)),l=r[d]):void 0===r[d]?i(r,d,l,n.deprecated):l=r[d],n.children&&a(l,n.children,t,c)}catch(e){o.alert("Exception building Cordova JS globals: "+e+' for key "'+d+'"')}}))}function s(e,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e.prototype&&e.prototype.constructor===e?t(e.prototype,n,r[n]):"object"==typeof r[n]&&"object"==typeof e[n]?s(e[n],r[n]):t(e,n,r[n]))}r.buildIntoButDoNotClobber=function(e,r){a(r,e,!1,!1)},r.buildIntoAndClobber=function(e,r){a(r,e,!0,!1)},r.buildIntoAndMerge=function(e,r){a(r,e,!0,!0)},r.recursiveMerge=s,r.assignOrWrapInDeprecateGetter=i})),define("cordova/channel",(function(e,r,n){var o=e("cordova/utils"),t=1,i=function(e,r){this.type=e,this.handlers={},this.state=r?1:0,this.fireArgs=null,this.numHandlers=0,this.onHasSubscribersChange=null},a={join:function(e,r){for(var n=r.length,o=n,t=function(){--o||e()},i=0;i<n;i++){if(0===r[i].state)throw Error("Can only use join with sticky channels.");r[i].subscribe(t)}n||e()},create:function(e){return a[e]=new i(e,!1)},createSticky:function(e){return a[e]=new i(e,!0)},deviceReadyChannelsArray:[],deviceReadyChannelsMap:{},waitForInitialization:function(e){if(e){var r=a[e]||this.createSticky(e);this.deviceReadyChannelsMap[e]=r,this.deviceReadyChannelsArray.push(r)}},initializationComplete:function(e){var r=this.deviceReadyChannelsMap[e];r&&r.fire()}};function s(e){if("function"!=typeof e&&"function"!=typeof e.handleEvent)throw new Error("Must provide a function or an EventListener object implementing the handleEvent interface.")}i.prototype.subscribe=function(e,r){var n,i;s(e),e&&"object"==typeof e?(n=e.handleEvent,r=e):n=e,2!==this.state?(i=e.observer_guid,"object"==typeof r&&(n=o.close(r,n)),i||(i=""+t++),n.observer_guid=i,e.observer_guid=i,this.handlers[i]||(this.handlers[i]=n,this.numHandlers++,1===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())):n.apply(r||this,this.fireArgs)},i.prototype.unsubscribe=function(e){var r;s(e),r=(e&&"object"==typeof e?e.handleEvent:e).observer_guid,this.handlers[r]&&(delete this.handlers[r],this.numHandlers--,0===this.numHandlers&&this.onHasSubscribersChange&&this.onHasSubscribersChange())},i.prototype.fire=function(e){var r=Array.prototype.slice.call(arguments);if(1===this.state&&(this.state=2,this.fireArgs=r),this.numHandlers){var n=[];for(var o in this.handlers)n.push(this.handlers[o]);for(var t=0;t<n.length;++t)n[t].apply(this,r);2===this.state&&this.numHandlers&&(this.numHandlers=0,this.handlers={},this.onHasSubscribersChange&&this.onHasSubscribersChange())}},a.createSticky("onDOMContentLoaded"),a.createSticky("onNativeReady"),a.createSticky("onCordovaReady"),a.createSticky("onPluginsReady"),a.createSticky("onDeviceReady"),a.create("onResume"),a.create("onPause"),a.waitForInitialization("onCordovaReady"),a.waitForInitialization("onDOMContentLoaded"),n.exports=a})),define("cordova/exec",(function(require,exports,module){var cordova=require("cordova"),nativeApiProvider=require("cordova/android/nativeapiprovider"),utils=require("cordova/utils"),base64=require("cordova/base64"),channel=require("cordova/channel"),jsToNativeModes={PROMPT:0,JS_OBJECT:1},nativeToJsModes={POLLING:0,LOAD_URL:1,ONLINE_EVENT:2,EVAL_BRIDGE:3},jsToNativeBridgeMode,nativeToJsBridgeMode=nativeToJsModes.EVAL_BRIDGE,pollEnabled=!1,bridgeSecret=-1,messagesFromNative=[],isProcessing=!1,resolvedPromise="undefined"==typeof Promise?null:Promise.resolve(),nextTick=resolvedPromise?function(e){resolvedPromise.then(e)}:function(e){setTimeout(e)};function androidExec(e,r,n,o,t){if(bridgeSecret<0)throw new Error("exec() called without bridgeSecret");void 0===jsToNativeBridgeMode&&androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT),t=t||[];for(var i=0;i<t.length;i++)"ArrayBuffer"===utils.typeName(t[i])&&(t[i]=base64.fromArrayBuffer(t[i]));var a=n+cordova.callbackId++,s=JSON.stringify(t);(e||r)&&(cordova.callbacks[a]={success:e,fail:r});var c=nativeApiProvider.get().exec(bridgeSecret,n,o,a,s);jsToNativeBridgeMode===jsToNativeModes.JS_OBJECT&&"@Null arguments."===c?(androidExec.setJsToNativeBridgeMode(jsToNativeModes.PROMPT),androidExec(e,r,n,o,t),androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT)):c&&(messagesFromNative.push(c),nextTick(processMessages))}function pollOnceFromOnlineEvent(){pollOnce(!0)}function pollOnce(e){if(!(bridgeSecret<0)){var r=nativeApiProvider.get().retrieveJsMessages(bridgeSecret,!!e);r&&(messagesFromNative.push(r),processMessages())}}function pollingTimerFunc(){pollEnabled&&(pollOnce(),setTimeout(pollingTimerFunc,50))}function hookOnlineApis(){function e(e){cordova.fireWindowEvent(e.type)}window.addEventListener("online",pollOnceFromOnlineEvent,!1),window.addEventListener("offline",pollOnceFromOnlineEvent,!1),cordova.addWindowEventHandler("online"),cordova.addWindowEventHandler("offline"),document.addEventListener("online",e,!1),document.addEventListener("offline",e,!1)}function buildPayload(e,r){var n=r.charAt(0);if("s"===n)e.push(r.slice(1));else if("t"===n)e.push(!0);else if("f"===n)e.push(!1);else if("N"===n)e.push(null);else if("n"===n)e.push(+r.slice(1));else if("A"===n){var o=r.slice(1);e.push(base64.toArrayBuffer(o))}else if("S"===n)e.push(window.atob(r.slice(1)));else if("M"===n)for(var t=r.slice(1);""!==t;){var i=t.indexOf(" "),a=+t.slice(0,i),s=t.substr(i+1,a);t=t.slice(i+a+1),buildPayload(e,s)}else e.push(JSON.parse(r))}function processMessage(message){var firstChar=message.charAt(0);if("J"===firstChar)eval(message.slice(1));else if("S"===firstChar||"F"===firstChar){var success="S"===firstChar,keepCallback="1"===message.charAt(1),spaceIdx=message.indexOf(" ",2),status=+message.slice(2,spaceIdx),nextSpaceIdx=message.indexOf(" ",spaceIdx+1),callbackId=message.slice(spaceIdx+1,nextSpaceIdx),payloadMessage=message.slice(nextSpaceIdx+1),payload=[];buildPayload(payload,payloadMessage),cordova.callbackFromNative(callbackId,success,status,payload,keepCallback)}else console.log("processMessage failed: invalid message: "+JSON.stringify(message))}function processMessages(){if(!isProcessing&&0!==messagesFromNative.length){isProcessing=!0;try{var e=popMessageFromQueue();if("*"===e&&0===messagesFromNative.length)return void nextTick(pollOnce);processMessage(e)}finally{isProcessing=!1,messagesFromNative.length>0&&nextTick(processMessages)}}}function popMessageFromQueue(){var e=messagesFromNative.shift();if("*"===e)return"*";var r=e.indexOf(" "),n=+e.slice(0,r),o=e.substr(r+1,n);return(e=e.slice(r+n+1))&&messagesFromNative.unshift(e),o}androidExec.init=function(){bridgeSecret=+prompt("","gap_init:"+nativeToJsBridgeMode),channel.onNativeReady.fire()},hookOnlineApis(),androidExec.jsToNativeModes=jsToNativeModes,androidExec.nativeToJsModes=nativeToJsModes,androidExec.setJsToNativeBridgeMode=function(e){e!==jsToNativeModes.JS_OBJECT||window._cordovaNative||(e=jsToNativeModes.PROMPT),nativeApiProvider.setPreferPrompt(e===jsToNativeModes.PROMPT),jsToNativeBridgeMode=e},androidExec.setNativeToJsBridgeMode=function(e){e!==nativeToJsBridgeMode&&(nativeToJsBridgeMode===nativeToJsModes.POLLING&&(pollEnabled=!1),nativeToJsBridgeMode=e,bridgeSecret>=0&&nativeApiProvider.get().setNativeToJsBridgeMode(bridgeSecret,e),e===nativeToJsModes.POLLING&&(pollEnabled=!0,setTimeout(pollingTimerFunc,1)))},module.exports=androidExec})),define("cordova/exec/proxy",(function(e,r,n){var o={};n.exports={add:function(e,r){return console.log("adding proxy for "+e),o[e]=r,r},remove:function(e){var r=o[e];return delete o[e],o[e]=null,r},get:function(e,r){return o[e]?o[e][r]:null}}})),define("cordova/init",(function(e,r,n){var o=e("cordova/channel"),t=e("cordova"),i=e("cordova/modulemapper"),a=e("cordova/platform"),s=e("cordova/pluginloader"),c=[o.onNativeReady,o.onPluginsReady];function d(e){for(var r=0;r<e.length;++r)2!==e[r].state&&console.log("Channel not fired: "+e[r].type)}window.setTimeout((function(){2!==o.onDeviceReady.state&&(console.log("deviceready has not fired after 5 seconds."),d(c),d(o.deviceReadyChannelsArray))}),5e3),window.console||(window.console={log:function(){}}),window.console.warn||(window.console.warn=function(e){this.log("warn: "+e)}),o.onPause=t.addDocumentEventHandler("pause"),o.onResume=t.addDocumentEventHandler("resume"),o.onActivated=t.addDocumentEventHandler("activated"),o.onDeviceReady=t.addStickyDocumentEventHandler("deviceready"),"complete"===document.readyState||"interactive"===document.readyState?o.onDOMContentLoaded.fire():document.addEventListener("DOMContentLoaded",(function(){o.onDOMContentLoaded.fire()}),!1),window._nativeReady&&o.onNativeReady.fire(),i.clobbers("cordova","cordova"),i.clobbers("cordova/exec","cordova.exec"),i.clobbers("cordova/exec","Cordova.exec"),a.bootstrap&&a.bootstrap(),setTimeout((function(){s.load((function(){o.onPluginsReady.fire()}))}),0),o.join((function(){i.mapModules(window),a.initialize&&a.initialize(),o.onCordovaReady.fire(),o.join((function(){e("cordova").fireDocumentEvent("deviceready")}),o.deviceReadyChannelsArray)}),c)})),define("cordova/modulemapper",(function(e,r,n){var o,t,i=e("cordova/builder"),a=define.moduleMap;function s(e,r,n,i){if(!(r in a))throw new Error("Module "+r+" does not exist.");o.push(e,r,n),i&&(t[n]=i)}function c(e,r){return e?e.split(".").reduce((function(e,r){return e[r]=e[r]||{}}),r):r}r.reset=function(){o=[],t={}},r.clobbers=function(e,r,n){s("c",e,r,n)},r.merges=function(e,r,n){s("m",e,r,n)},r.defaults=function(e,r,n){s("d",e,r,n)},r.runs=function(e){s("r",e,null)},r.mapModules=function(r){var n={};r.CDV_origSymbols=n;for(var a=0,s=o.length;a<s;a+=3){var d=o[a],l=o[a+1],u=e(l);if("r"!==d){var f=o[a+2],v=f.lastIndexOf("."),p=f.substr(0,v),m=f.substr(v+1),b=f in t?"Access made to deprecated symbol: "+f+". "+b:null,_=c(p,r),g=_[m];"m"===d&&g?i.recursiveMerge(g,u):("d"===d&&!g||"d"!==d)&&(f in n||(n[f]=g),i.assignOrWrapInDeprecateGetter(_,m,u,b))}}},r.getOriginalSymbol=function(e,r){var n=e.CDV_origSymbols;if(n&&r in n)return n[r];for(var o=r.split("."),t=e,i=0;i<o.length;++i)t=t&&t[o[i]];return t},r.reset()})),define("cordova/platform",(function(e,r,n){var o=null;function t(r){var n=e("cordova"),t=r.action;switch(t){case"backbutton":case"menubutton":case"searchbutton":case"pause":case"volumedownbutton":case"volumeupbutton":n.fireDocumentEvent(t);break;case"resume":if(arguments.length>1&&r.pendingResult){if(2===arguments.length)r.pendingResult.result=arguments[1];else{for(var i=[],a=1;a<arguments.length;a++)i.push(arguments[a]);r.pendingResult.result=i}o=r}n.fireDocumentEvent(t,r);break;default:throw new Error("Unknown event action "+t)}}n.exports={id:"android",bootstrap:function(){var r=e("cordova/channel"),n=e("cordova"),i=e("cordova/exec"),a=e("cordova/modulemapper");i.init(),a.clobbers("cordova/plugin/android/app","navigator.app");var s=Number(n.platformVersion.split(".")[0])>=4?"CoreAndroid":"App";function c(e){n.addDocumentEventHandler(e+"button").onHasSubscribersChange=function(){i(null,null,s,"overrideButton",[e,1===this.numHandlers])}}n.addDocumentEventHandler("backbutton").onHasSubscribersChange=function(){i(null,null,s,"overrideBackbutton",[1===this.numHandlers])},n.addDocumentEventHandler("menubutton"),n.addDocumentEventHandler("searchbutton"),c("volumeup"),c("volumedown");var d=document.addEventListener;document.addEventListener=function(e,r,n){d(e,r,n),"resume"===e&&o&&r(o)},r.onCordovaReady.subscribe((function(){i(t,null,s,"messageChannel",[]),i(null,null,s,"show",[])}))}}})),define("cordova/plugin/android/app",(function(e,r,n){var o=e("cordova/exec"),t=Number(e("cordova").platformVersion.split(".")[0])>=4?"CoreAndroid":"App";n.exports={clearCache:function(){o(null,null,t,"clearCache",[])},loadUrl:function(e,r){o(null,null,t,"loadUrl",[e,r])},cancelLoadUrl:function(){o(null,null,t,"cancelLoadUrl",[])},clearHistory:function(){o(null,null,t,"clearHistory",[])},backHistory:function(){o(null,null,t,"backHistory",[])},overrideBackbutton:function(e){o(null,null,t,"overrideBackbutton",[e])},overrideButton:function(e,r){o(null,null,t,"overrideButton",[e,r])},exitApp:function(){return o(null,null,t,"exitApp",[])}}})),define("cordova/pluginloader",(function(e,r,n){var o=e("cordova/modulemapper");function t(e,n,o,t){t=t||o,e in define.moduleMap?o():r.injectScript(n,(function(){e in define.moduleMap?o():t()}),t)}function i(e,r,n){var i=r.length;if(i)for(var a=0;a<r.length;a++)t(r[a].id,e+r[a].file,s);else n();function s(){--i||function(e,r){for(var n,t=0;n=e[t];t++){if(n.clobbers&&n.clobbers.length)for(var i=0;i<n.clobbers.length;i++)o.clobbers(n.id,n.clobbers[i]);if(n.merges&&n.merges.length)for(var a=0;a<n.merges.length;a++)o.merges(n.id,n.merges[a]);n.runs&&o.runs(n.id)}r()}(r,n)}}r.injectScript=function(e,r,n){var o=document.createElement("script");o.onload=r,o.onerror=n,o.src=e,document.head.appendChild(o)},r.load=function(r){var n=function(){for(var e=null,r=document.getElementsByTagName("script"),n="/cordova.js",o=r.length-1;o>-1;o--){var t=r[o].src.replace(/\?.*$/,"");let i=t.lastIndexOf(n);if(-1!==i&&i===t.length-11){e=t.substring(0,t.length-11)+"/";break}}return e}();null===n&&(console.log("Could not find cordova.js script tag. Plugin loading may fail."),n=""),t("cordova/plugin_list",n+"cordova_plugins.js",(function(){var o=e("cordova/plugin_list");i(n,o,r)}),r)}})),define("cordova/urlutil",(function(e,r,n){r.makeAbsolute=function(e){var r=document.createElement("a");return r.href=e,r.href}})),define("cordova/utils",(function(e,r,n){var o,t=r;function i(e){for(var r="",n=0;n<e;n++){var o=parseInt(256*Math.random(),10).toString(16);1===o.length&&(o="0"+o),r+=o}return r}t.defineGetterSetter=function(e,r,n,o){if(Object.defineProperty){var t={get:n,configurable:!0};o&&(t.set=o),Object.defineProperty(e,r,t)}else e.__defineGetter__(r,n),o&&e.__defineSetter__(r,o)},t.defineGetter=t.defineGetterSetter,t.arrayIndexOf=function(e,r){if(e.indexOf)return e.indexOf(r);for(var n=e.length,o=0;o<n;++o)if(e[o]===r)return o;return-1},t.arrayRemove=function(e,r){var n=t.arrayIndexOf(e,r);return-1!==n&&e.splice(n,1),-1!==n},t.typeName=function(e){return Object.prototype.toString.call(e).slice(8,-1)},t.isArray=Array.isArray||function(e){return"Array"===t.typeName(e)},t.isDate=function(e){return e instanceof Date},t.clone=function(e){if(!e||"function"==typeof e||t.isDate(e)||"object"!=typeof e)return e;var r,n;if(t.isArray(e)){for(r=[],n=0;n<e.length;++n)r.push(t.clone(e[n]));return r}for(n in r={},e)n in r&&r[n]===e[n]||void 0===e[n]||"unknown"==typeof e[n]||(r[n]=t.clone(e[n]));return r},t.close=function(e,r,n){return function(){var o=n||arguments;return r.apply(e,o)}},t.createUUID=function(){return i(4)+"-"+i(2)+"-"+i(2)+"-"+i(2)+"-"+i(6)},t.extend=(o=function(){},function(e,r){o.prototype=r.prototype,e.prototype=new o,e.__super__=r.prototype,e.prototype.constructor=e}),t.alert=function(e){window.alert?window.alert(e):console&&console.log&&console.log(e)}})),window.cordova=require("cordova"),require("cordova/init")}()}},__webpack_module_cache__={},deferred;function __webpack_require__(e){var r=__webpack_module_cache__[e];if(void 0!==r)return r.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,r,n,o)=>{if(!r){var t=1/0;for(c=0;c<deferred.length;c++){for(var[r,n,o]=deferred[c],i=!0,a=0;a<r.length;a++)(!1&o||t>=o)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](r[a])))?r.splice(a--,1):(i=!1,o<t&&(t=o));if(i){deferred.splice(c--,1);var s=n();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=deferred.length;c>0&&deferred[c-1][2]>o;c--)deferred[c]=deferred[c-1];deferred[c]=[r,n,o]},__webpack_require__.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={957:0};__webpack_require__.O.j=r=>0===e[r];var r=(r,n)=>{var o,t,[i,a,s]=n,c=0;if(i.some((r=>0!==e[r]))){for(o in a)__webpack_require__.o(a,o)&&(__webpack_require__.m[o]=a[o]);if(s)var d=s(__webpack_require__)}for(r&&r(n);c<i.length;c++)t=i[c],__webpack_require__.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return __webpack_require__.O(d)},n=self.webpackChunkcom_dergoogler_mmrl_web=self.webpackChunkcom_dergoogler_mmrl_web||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))})();var __webpack_exports__=__webpack_require__(2115);__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();