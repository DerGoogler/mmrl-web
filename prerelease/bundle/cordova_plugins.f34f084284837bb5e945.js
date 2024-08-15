/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./web/cordova/cordova_plugins.js ***!
  \****************************************/
cordova.define("cordova/plugin_list", function (require, exports, module) {
  const plugins = [
    {
      id: "com.dergoogler.plugin.chooser",
      clobbers: ["__chooser__"],
    },
    {
      id: "com.dergoogler.plugin.fetch",
      clobbers: ["fetch"],
    },
    {
      id: "com.dergoogler.plugin.terminal",
      clobbers: ["__terminal__"],
    },
  ];

  module.exports = plugins.map((plugin) => ({ file: "bundle/c-plugins.js", ...plugin }));
});

/******/ })()
;
//# sourceMappingURL=cordova_plugins.f34f084284837bb5e945.js.map