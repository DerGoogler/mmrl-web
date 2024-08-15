/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./web/cordova/cordova-js-src/android/nativeapiprovider.js":
/*!*****************************************************************!*\
  !*** ./web/cordova/cordova-js-src/android/nativeapiprovider.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
*/

/**
 * Exports the ExposedJsApi.java object if available, otherwise exports the PromptBasedNativeApi.
 */

var nativeApi = this._cordovaNative || __webpack_require__(/*! cordova/android/promptbasednativeapi */ "?bafa");
var currentApi = nativeApi;

module.exports = {
    get: function() { return currentApi; },
    setPreferPrompt: function(value) {
        currentApi = value ? __webpack_require__(/*! cordova/android/promptbasednativeapi */ "?bafa") : nativeApi;
    },
    // Used only by tests.
    set: function(value) {
        currentApi = value;
    }
};


/***/ }),

/***/ "./web/cordova/cordova-js-src/android/promptbasednativeapi.js":
/*!********************************************************************!*\
  !*** ./web/cordova/cordova-js-src/android/promptbasednativeapi.js ***!
  \********************************************************************/
/***/ ((module) => {

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
*/

/**
 * Implements the API of ExposedJsApi.java, but uses prompt() to communicate.
 * This is used pre-JellyBean, where addJavascriptInterface() is disabled.
 */

module.exports = {
    exec: function(bridgeSecret, service, action, callbackId, argsJson) {
        return prompt(argsJson, 'gap:'+JSON.stringify([bridgeSecret, service, action, callbackId]));
    },
    setNativeToJsBridgeMode: function(bridgeSecret, value) {
        prompt(value, 'gap_bridge_mode:' + bridgeSecret);
    },
    retrieveJsMessages: function(bridgeSecret, fromOnlineEvent) {
        return prompt(+fromOnlineEvent, 'gap_poll:' + bridgeSecret);
    }
};


/***/ }),

/***/ "./web/cordova/cordova-js-src/exec.js":
/*!********************************************!*\
  !*** ./web/cordova/cordova-js-src/exec.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

/**
 * Execute a cordova command.  It is up to the native side whether this action
 * is synchronous or asynchronous.  The native side can return:
 *      Synchronous: PluginResult object as a JSON string
 *      Asynchronous: Empty string ""
 * If async, the native side will cordova.callbackSuccess or cordova.callbackError,
 * depending upon the result of the action.
 *
 * @param {Function} success    The success callback
 * @param {Function} fail       The fail callback
 * @param {String} service      The name of the service to use
 * @param {String} action       Action to be run in cordova
 * @param {String[]} [args]     Zero or more arguments to pass to the method
 */
var cordova = __webpack_require__(/*! cordova */ "?ae53"),
    nativeApiProvider = __webpack_require__(/*! cordova/android/nativeapiprovider */ "?bd35"),
    utils = __webpack_require__(/*! cordova/utils */ "?4463"),
    base64 = __webpack_require__(/*! cordova/base64 */ "?e8f6"),
    channel = __webpack_require__(/*! cordova/channel */ "?49c1"),
    jsToNativeModes = {
        PROMPT: 0,
        JS_OBJECT: 1
    },
    nativeToJsModes = {
        // Polls for messages using the JS->Native bridge.
        POLLING: 0,
        // For LOAD_URL to be viable, it would need to have a work-around for
        // the bug where the soft-keyboard gets dismissed when a message is sent.
        LOAD_URL: 1,
        // For the ONLINE_EVENT to be viable, it would need to intercept all event
        // listeners (both through addEventListener and window.ononline) as well
        // as set the navigator property itself.
        ONLINE_EVENT: 2
    },
    jsToNativeBridgeMode,  // Set lazily.
    nativeToJsBridgeMode = nativeToJsModes.ONLINE_EVENT,
    pollEnabled = false,
    bridgeSecret = -1;

var messagesFromNative = [];
var isProcessing = false;
var resolvedPromise = typeof Promise == 'undefined' ? null : Promise.resolve();
var nextTick = resolvedPromise ? function(fn) { resolvedPromise.then(fn); } : function(fn) { setTimeout(fn); };

function androidExec(success, fail, service, action, args) {
    if (bridgeSecret < 0) {
        // If we ever catch this firing, we'll need to queue up exec()s
        // and fire them once we get a secret. For now, I don't think
        // it's possible for exec() to be called since plugins are parsed but
        // not run until until after onNativeReady.
        throw new Error('exec() called without bridgeSecret');
    }
    // Set default bridge modes if they have not already been set.
    // By default, we use the failsafe, since addJavascriptInterface breaks too often
    if (jsToNativeBridgeMode === undefined) {
        androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT);
    }

    // Process any ArrayBuffers in the args into a string.
    for (var i = 0; i < args.length; i++) {
        if (utils.typeName(args[i]) == 'ArrayBuffer') {
            args[i] = base64.fromArrayBuffer(args[i]);
        }
    }

    var callbackId = service + cordova.callbackId++,
        argsJson = JSON.stringify(args);

    if (success || fail) {
        cordova.callbacks[callbackId] = {success:success, fail:fail};
    }

    var msgs = nativeApiProvider.get().exec(bridgeSecret, service, action, callbackId, argsJson);
    // If argsJson was received by Java as null, try again with the PROMPT bridge mode.
    // This happens in rare circumstances, such as when certain Unicode characters are passed over the bridge on a Galaxy S2.  See CB-2666.
    if (jsToNativeBridgeMode == jsToNativeModes.JS_OBJECT && msgs === "@Null arguments.") {
        androidExec.setJsToNativeBridgeMode(jsToNativeModes.PROMPT);
        androidExec(success, fail, service, action, args);
        androidExec.setJsToNativeBridgeMode(jsToNativeModes.JS_OBJECT);
    } else if (msgs) {
        messagesFromNative.push(msgs);
        // Always process async to avoid exceptions messing up stack.
        nextTick(processMessages);
    }
}

androidExec.init = function() {
    bridgeSecret = +prompt('', 'gap_init:' + nativeToJsBridgeMode);
    channel.onNativeReady.fire();
};

function pollOnceFromOnlineEvent() {
    pollOnce(true);
}

function pollOnce(opt_fromOnlineEvent) {
    if (bridgeSecret < 0) {
        // This can happen when the NativeToJsMessageQueue resets the online state on page transitions.
        // We know there's nothing to retrieve, so no need to poll.
        return;
    }
    var msgs = nativeApiProvider.get().retrieveJsMessages(bridgeSecret, !!opt_fromOnlineEvent);
    if (msgs) {
        messagesFromNative.push(msgs);
        // Process sync since we know we're already top-of-stack.
        processMessages();
    }
}

function pollingTimerFunc() {
    if (pollEnabled) {
        pollOnce();
        setTimeout(pollingTimerFunc, 50);
    }
}

function hookOnlineApis() {
    function proxyEvent(e) {
        cordova.fireWindowEvent(e.type);
    }
    // The network module takes care of firing online and offline events.
    // It currently fires them only on document though, so we bridge them
    // to window here (while first listening for exec()-releated online/offline
    // events).
    window.addEventListener('online', pollOnceFromOnlineEvent, false);
    window.addEventListener('offline', pollOnceFromOnlineEvent, false);
    cordova.addWindowEventHandler('online');
    cordova.addWindowEventHandler('offline');
    document.addEventListener('online', proxyEvent, false);
    document.addEventListener('offline', proxyEvent, false);
}

hookOnlineApis();

androidExec.jsToNativeModes = jsToNativeModes;
androidExec.nativeToJsModes = nativeToJsModes;

androidExec.setJsToNativeBridgeMode = function(mode) {
    if (mode == jsToNativeModes.JS_OBJECT && !window._cordovaNative) {
        mode = jsToNativeModes.PROMPT;
    }
    nativeApiProvider.setPreferPrompt(mode == jsToNativeModes.PROMPT);
    jsToNativeBridgeMode = mode;
};

androidExec.setNativeToJsBridgeMode = function(mode) {
    if (mode == nativeToJsBridgeMode) {
        return;
    }
    if (nativeToJsBridgeMode == nativeToJsModes.POLLING) {
        pollEnabled = false;
    }

    nativeToJsBridgeMode = mode;
    // Tell the native side to switch modes.
    // Otherwise, it will be set by androidExec.init()
    if (bridgeSecret >= 0) {
        nativeApiProvider.get().setNativeToJsBridgeMode(bridgeSecret, mode);
    }

    if (mode == nativeToJsModes.POLLING) {
        pollEnabled = true;
        setTimeout(pollingTimerFunc, 1);
    }
};

function buildPayload(payload, message) {
    var payloadKind = message.charAt(0);
    if (payloadKind == 's') {
        payload.push(message.slice(1));
    } else if (payloadKind == 't') {
        payload.push(true);
    } else if (payloadKind == 'f') {
        payload.push(false);
    } else if (payloadKind == 'N') {
        payload.push(null);
    } else if (payloadKind == 'n') {
        payload.push(+message.slice(1));
    } else if (payloadKind == 'A') {
        var data = message.slice(1);
        payload.push(base64.toArrayBuffer(data));
    } else if (payloadKind == 'S') {
        payload.push(window.atob(message.slice(1)));
    } else if (payloadKind == 'M') {
        var multipartMessages = message.slice(1);
        while (multipartMessages !== "") {
            var spaceIdx = multipartMessages.indexOf(' ');
            var msgLen = +multipartMessages.slice(0, spaceIdx);
            var multipartMessage = multipartMessages.substr(spaceIdx + 1, msgLen);
            multipartMessages = multipartMessages.slice(spaceIdx + msgLen + 1);
            buildPayload(payload, multipartMessage);
        }
    } else {
        payload.push(JSON.parse(message));
    }
}

// Processes a single message, as encoded by NativeToJsMessageQueue.java.
function processMessage(message) {
    var firstChar = message.charAt(0);
    if (firstChar == 'J') {
        // This is deprecated on the .java side. It doesn't work with CSP enabled.
        eval(message.slice(1));
    } else if (firstChar == 'S' || firstChar == 'F') {
        var success = firstChar == 'S';
        var keepCallback = message.charAt(1) == '1';
        var spaceIdx = message.indexOf(' ', 2);
        var status = +message.slice(2, spaceIdx);
        var nextSpaceIdx = message.indexOf(' ', spaceIdx + 1);
        var callbackId = message.slice(spaceIdx + 1, nextSpaceIdx);
        var payloadMessage = message.slice(nextSpaceIdx + 1);
        var payload = [];
        buildPayload(payload, payloadMessage);
        cordova.callbackFromNative(callbackId, success, status, payload, keepCallback);
    } else {
        console.log("processMessage failed: invalid message: " + JSON.stringify(message));
    }
}

function processMessages() {
    // Check for the reentrant case.
    if (isProcessing) {
        return;
    }
    if (messagesFromNative.length === 0) {
        return;
    }
    isProcessing = true;
    try {
        var msg = popMessageFromQueue();
        // The Java side can send a * message to indicate that it
        // still has messages waiting to be retrieved.
        if (msg == '*' && messagesFromNative.length === 0) {
            nextTick(pollOnce);
            return;
        }
        processMessage(msg);
    } finally {
        isProcessing = false;
        if (messagesFromNative.length > 0) {
            nextTick(processMessages);
        }
    }
}

function popMessageFromQueue() {
    var messageBatch = messagesFromNative.shift();
    if (messageBatch == '*') {
        return '*';
    }

    var spaceIdx = messageBatch.indexOf(' ');
    var msgLen = +messageBatch.slice(0, spaceIdx);
    var message = messageBatch.substr(spaceIdx + 1, msgLen);
    messageBatch = messageBatch.slice(spaceIdx + msgLen + 1);
    if (messageBatch) {
        messagesFromNative.unshift(messageBatch);
    }
    return message;
}

module.exports = androidExec;


/***/ }),

/***/ "./web/cordova/cordova-js-src/platform.js":
/*!************************************************!*\
  !*** ./web/cordova/cordova-js-src/platform.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

// The last resume event that was received that had the result of a plugin call.
var lastResumeEvent = null;

module.exports = {
    id: 'android',
    bootstrap: function() {
        var channel = __webpack_require__(/*! cordova/channel */ "?49c1"),
            cordova = __webpack_require__(/*! cordova */ "?ae53"),
            exec = __webpack_require__(/*! cordova/exec */ "?3c9d"),
            modulemapper = __webpack_require__(/*! cordova/modulemapper */ "?2ce6");

        // Get the shared secret needed to use the bridge.
        exec.init();

        // TODO: Extract this as a proper plugin.
        modulemapper.clobbers('cordova/plugin/android/app', 'navigator.app');

        var APP_PLUGIN_NAME = Number(cordova.platformVersion.split('.')[0]) >= 4 ? 'CoreAndroid' : 'App';

        // Inject a listener for the backbutton on the document.
        var backButtonChannel = cordova.addDocumentEventHandler('backbutton');
        backButtonChannel.onHasSubscribersChange = function() {
            // If we just attached the first handler or detached the last handler,
            // let native know we need to override the back button.
            exec(null, null, APP_PLUGIN_NAME, "overrideBackbutton", [this.numHandlers == 1]);
        };

        // Add hardware MENU and SEARCH button handlers
        cordova.addDocumentEventHandler('menubutton');
        cordova.addDocumentEventHandler('searchbutton');

        function bindButtonChannel(buttonName) {
            // generic button bind used for volumeup/volumedown buttons
            var volumeButtonChannel = cordova.addDocumentEventHandler(buttonName + 'button');
            volumeButtonChannel.onHasSubscribersChange = function() {
                exec(null, null, APP_PLUGIN_NAME, "overrideButton", [buttonName, this.numHandlers == 1]);
            };
        }
        // Inject a listener for the volume buttons on the document.
        bindButtonChannel('volumeup');
        bindButtonChannel('volumedown');

        // The resume event is not "sticky", but it is possible that the event
        // will contain the result of a plugin call. We need to ensure that the
        // plugin result is delivered even after the event is fired (CB-10498)
        var cordovaAddEventListener = document.addEventListener;

        document.addEventListener = function(evt, handler, capture) {
            cordovaAddEventListener(evt, handler, capture);

            if (evt === 'resume' && lastResumeEvent) {
                handler(lastResumeEvent);
            }
        };

        // Let native code know we are all done on the JS side.
        // Native code will then un-hide the WebView.
        channel.onCordovaReady.subscribe(function() {
            exec(onMessageFromNative, null, APP_PLUGIN_NAME, 'messageChannel', []);
            exec(null, null, APP_PLUGIN_NAME, "show", []);
        });
    }
};

function onMessageFromNative(msg) {
    var cordova = __webpack_require__(/*! cordova */ "?ae53");
    var action = msg.action;

    switch (action)
    {
        // Button events
        case 'backbutton':
        case 'menubutton':
        case 'searchbutton':
        // App life cycle events
        case 'pause':
        // Volume events
        case 'volumedownbutton':
        case 'volumeupbutton':
            cordova.fireDocumentEvent(action);
            break;
        case 'resume':
            if(arguments.length > 1 && msg.pendingResult) {
                if(arguments.length === 2) {
                    msg.pendingResult.result = arguments[1];
                } else {
                    // The plugin returned a multipart message
                    var res = [];
                    for(var i = 1; i < arguments.length; i++) {
                        res.push(arguments[i]);
                    }
                    msg.pendingResult.result = res;
                }

                // Save the plugin result so that it can be delivered to the js
                // even if they miss the initial firing of the event
                lastResumeEvent = msg;
            }
            cordova.fireDocumentEvent(action, msg);
            break;
        default:
            throw new Error('Unknown event action ' + action);
    }
}


/***/ }),

/***/ "./web/cordova/cordova-js-src/plugin/android/app.js":
/*!**********************************************************!*\
  !*** ./web/cordova/cordova-js-src/plugin/android/app.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
 *
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 *
*/

var exec = __webpack_require__(/*! cordova/exec */ "?b082");
var APP_PLUGIN_NAME = Number((__webpack_require__(/*! cordova */ "?bc3f").platformVersion).split('.')[0]) >= 4 ? 'CoreAndroid' : 'App';

module.exports = {
    /**
    * Clear the resource cache.
    */
    clearCache:function() {
        exec(null, null, APP_PLUGIN_NAME, "clearCache", []);
    },

    /**
    * Load the url into the webview or into new browser instance.
    *
    * @param url           The URL to load
    * @param props         Properties that can be passed in to the activity:
    *      wait: int                           => wait msec before loading URL
    *      loadingDialog: "Title,Message"      => display a native loading dialog
    *      loadUrlTimeoutValue: int            => time in msec to wait before triggering a timeout error
    *      clearHistory: boolean              => clear webview history (default=false)
    *      openExternal: boolean              => open in a new browser (default=false)
    *
    * Example:
    *      navigator.app.loadUrl("http://server/myapp/index.html", {wait:2000, loadingDialog:"Wait,Loading App", loadUrlTimeoutValue: 60000});
    */
    loadUrl:function(url, props) {
        exec(null, null, APP_PLUGIN_NAME, "loadUrl", [url, props]);
    },

    /**
    * Cancel loadUrl that is waiting to be loaded.
    */
    cancelLoadUrl:function() {
        exec(null, null, APP_PLUGIN_NAME, "cancelLoadUrl", []);
    },

    /**
    * Clear web history in this web view.
    * Instead of BACK button loading the previous web page, it will exit the app.
    */
    clearHistory:function() {
        exec(null, null, APP_PLUGIN_NAME, "clearHistory", []);
    },

    /**
    * Go to previous page displayed.
    * This is the same as pressing the backbutton on Android device.
    */
    backHistory:function() {
        exec(null, null, APP_PLUGIN_NAME, "backHistory", []);
    },

    /**
    * Override the default behavior of the Android back button.
    * If overridden, when the back button is pressed, the "backKeyDown" JavaScript event will be fired.
    *
    * Note: The user should not have to call this method.  Instead, when the user
    *       registers for the "backbutton" event, this is automatically done.
    *
    * @param override        T=override, F=cancel override
    */
    overrideBackbutton:function(override) {
        exec(null, null, APP_PLUGIN_NAME, "overrideBackbutton", [override]);
    },

    /**
    * Override the default behavior of the Android volume button.
    * If overridden, when the volume button is pressed, the "volume[up|down]button"
    * JavaScript event will be fired.
    *
    * Note: The user should not have to call this method.  Instead, when the user
    *       registers for the "volume[up|down]button" event, this is automatically done.
    *
    * @param button          volumeup, volumedown
    * @param override        T=override, F=cancel override
    */
    overrideButton:function(button, override) {
        exec(null, null, APP_PLUGIN_NAME, "overrideButton", [button, override]);
    },

    /**
    * Exit and terminate the application.
    */
    exitApp:function() {
        return exec(null, null, APP_PLUGIN_NAME, "exitApp", []);
    }
};


/***/ }),

/***/ "?bafa":
/*!******************************************************!*\
  !*** cordova/android/promptbasednativeapi (ignored) ***!
  \******************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?bc3f":
/*!*************************!*\
  !*** cordova (ignored) ***!
  \*************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b082":
/*!******************************!*\
  !*** cordova/exec (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?ae53":
/*!*************************!*\
  !*** cordova (ignored) ***!
  \*************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?bd35":
/*!***************************************************!*\
  !*** cordova/android/nativeapiprovider (ignored) ***!
  \***************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?e8f6":
/*!********************************!*\
  !*** cordova/base64 (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?49c1":
/*!*********************************!*\
  !*** cordova/channel (ignored) ***!
  \*********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?3c9d":
/*!******************************!*\
  !*** cordova/exec (ignored) ***!
  \******************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2ce6":
/*!**************************************!*\
  !*** cordova/modulemapper (ignored) ***!
  \**************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?4463":
/*!*******************************!*\
  !*** cordova/utils (ignored) ***!
  \*******************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./web/cordova/cordova-js-src/android/nativeapiprovider.js");
/******/ 	__webpack_require__("./web/cordova/cordova-js-src/android/promptbasednativeapi.js");
/******/ 	__webpack_require__("./web/cordova/cordova-js-src/plugin/android/app.js");
/******/ 	__webpack_require__("./web/cordova/cordova-js-src/exec.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./web/cordova/cordova-js-src/platform.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=cordova-js-src.f34f084284837bb5e945.js.map