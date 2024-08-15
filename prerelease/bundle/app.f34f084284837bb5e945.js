/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/standalone sync recursive":
/*!**********************************************!*\
  !*** ./node_modules/@babel/standalone/ sync ***!
  \**********************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "./node_modules/@babel/standalone sync recursive";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "./src/styles/default.scss":
/*!*********************************!*\
  !*** ./src/styles/default.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/onsenui.scss":
/*!*********************************!*\
  !*** ./src/styles/onsenui.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/activitys/AboutActivity.tsx":
/*!*****************************************!*\
  !*** ./src/activitys/AboutActivity.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Badge */ "./node_modules/@mui/material/Badge/Badge.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_icons_material_CodeRounded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/CodeRounded */ "./node_modules/@mui/icons-material/CodeRounded.js");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Native_Shell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Native/Shell */ "./src/native/Shell.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListSubheader/ListSubheader.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Native/BuildConfig */ "./src/native/BuildConfig.ts");
/* harmony import */ var _Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useFormatDate */ "./src/hooks/useFormatDate.ts");



















const checkRoot = () => {
    if (_Native_Shell__WEBPACK_IMPORTED_MODULE_6__.Shell.isMagiskSU()) {
        return "assets/MagiskSULogo.png";
    }
    else if (_Native_Shell__WEBPACK_IMPORTED_MODULE_6__.Shell.isKernelSU()) {
        return "assets/KernelSULogo.png";
    }
    else if (_Native_Shell__WEBPACK_IMPORTED_MODULE_6__.Shell.isAPatchSU()) {
        return "assets/APatchSULogo.png";
    }
    else {
        return undefined;
    }
};
const AboutActivity = () => {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__.useStrings)();
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__.useSettings)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: strings("about") })] }));
    };
    // false to ignore multiplying
    const date = (0,_Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_9__.useFormatDate)(_Native_BuildConfig__WEBPACK_IMPORTED_MODULE_8__.BuildConfig.BUILD_DATE, false);
    const list = react__WEBPACK_IMPORTED_MODULE_7___default().useMemo(() => [
        {
            title: "App",
            content: [
                { primary: "Name", secondary: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_8__.BuildConfig.APPLICATION_ID },
                { primary: "Version", secondary: `v${_Native_BuildConfig__WEBPACK_IMPORTED_MODULE_8__.BuildConfig.VERSION_NAME} (${_Native_BuildConfig__WEBPACK_IMPORTED_MODULE_8__.BuildConfig.VERSION_CODE})` },
                { primary: "Build date", secondary: date },
                { primary: "Build type", secondary: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_8__.BuildConfig.BUILD_TYPE },
            ],
        },
        {
            title: "Root",
            content: [
                { primary: "Root manager", secondary: _Native_Shell__WEBPACK_IMPORTED_MODULE_6__.Shell.getRootManager() },
                { primary: "Root version", secondary: `${_Native_Shell__WEBPACK_IMPORTED_MODULE_6__.Shell.VERSION_NAME().replace(/(.+):(.+)/gim, "$1")} (${_Native_Shell__WEBPACK_IMPORTED_MODULE_6__.Shell.VERSION_CODE()})` },
            ],
        },
        {
            title: "User",
            content: [
                { primary: "Name", secondary: _Native_Shell__WEBPACK_IMPORTED_MODULE_6__.Shell.pw_name() },
                { primary: "User ID", secondary: _Native_Shell__WEBPACK_IMPORTED_MODULE_6__.Shell.pw_uid() },
                { primary: "Group ID", secondary: _Native_Shell__WEBPACK_IMPORTED_MODULE_6__.Shell.pw_gid() },
            ],
        },
    ], []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page.RelativeContent, { zeroMargin: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: { mt: 1 }, direction: "column", justifyContent: "flex-start", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_11__["default"], { sx: { height: 100, width: 100 }, overlap: "circular", anchorOrigin: { vertical: "bottom", horizontal: "right" }, badgeContent: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: (theme) => ({
                                width: 40,
                                height: 40,
                                borderRadius: "unset",
                                bgcolor: "transparent",
                            }), src: checkRoot() }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: { height: 100, width: 100, bgcolor: "#4a148c" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_CodeRounded__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: { color: "white", height: 67, width: 67 } }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], { variant: "h3", noWrap: true, color: settings.darkmode ? "text.primary" : undefined, sx: {
                            display: "flex",
                            fontFamily: "monospace",
                            letterSpacing: ".3rem",
                            textDecoration: "none",
                        }, children: "MMRL" }), list.map((l) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: { width: "100%", bgcolor: "background.paper" }, subheader: l.title ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { children: l.title }) : undefined, children: l.content.map((c) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_17__["default"], { alignItems: "flex-start", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], { primary: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_10__["default"], { direction: "row", justifyContent: "space-between", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], { sx: { display: "inline" }, color: settings.darkmode ? "text.primary" : undefined, component: "span", children: c.primary }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], { sx: { display: "inline" }, component: "span", variant: "body2", color: "text.primary", children: c.secondary })] }) }) }) }))) })))] }) }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AboutActivity);


/***/ }),

/***/ "./src/activitys/DescriptonActivity.tsx":
/*!**********************************************!*\
  !*** ./src/activitys/DescriptonActivity.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-onsenui */ "./node_modules/react-onsenui/dist/react-onsenui.js");
/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_onsenui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/Markdown */ "./src/components/Markdown/index.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");












function DescriptonActivity() {
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__.useStrings)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    const { desc, name, logo } = extra;
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Center, { sx: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], { sx: {
                            display: "flex",
                        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], { alt: name, sx: (theme) => ({
                                    bgcolor: theme.palette.primary.dark,
                                    width: 40,
                                    height: 40,
                                    boxShadow: "0 -1px 5px rgba(0,0,0,.09), 0 3px 5px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.3), 0 1px 3px rgba(0,0,0,.15)",
                                    borderRadius: "20%",
                                    mr: 1.5,
                                    fontSize: 14,
                                }), src: logo, children: name.charAt(0).toUpperCase() }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], { sx: { alignSelf: "center", ml: 0.5, mr: 0.5, width: "100%" }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], { variant: "body1", fontWeight: "bold", noWrap: true, children: name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], { variant: "body2", color: "text.secondary", noWrap: true, children: strings("about_this_module") })] })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Right, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Button, { icon: _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_11__["default"], onClick: context.popPage }) })] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page.RelativeContent, { zeroMargin: true, children: !desc ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_1__.ProgressCircular, { indeterminate: true, style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    WebkitTransform: "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                } })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_Markdown__WEBPACK_IMPORTED_MODULE_2__.Markup, { sx: {
                        px: {
                            xs: 1,
                            sm: 1,
                            md: 0,
                        },
                    }, children: desc }) })) }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DescriptonActivity);


/***/ }),

/***/ "./src/activitys/FetchTextActivity.tsx":
/*!*********************************************!*\
  !*** ./src/activitys/FetchTextActivity.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-onsenui */ "./node_modules/react-onsenui/dist/react-onsenui.js");
/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_onsenui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/Markdown */ "./src/components/Markdown/index.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useNetwork__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useNetwork */ "./src/hooks/useNetwork.ts");
/* harmony import */ var _Components_MissingInternet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/MissingInternet */ "./src/components/MissingInternet.tsx");
/* harmony import */ var _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Hooks/useFetch */ "./src/hooks/useFetch.ts");









function FetchTextActivity() {
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { isNetworkAvailable } = (0,_Hooks_useNetwork__WEBPACK_IMPORTED_MODULE_6__.useNetwork)();
    const { title, modulename, url } = extra;
    const [data] = (0,_Hooks_useFetch__WEBPACK_IMPORTED_MODULE_8__.useFetch)(url, {
        type: "text",
    });
    const state = data || extra.raw_data;
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Center, { children: title || modulename })] }));
    };
    if (!isNetworkAvailable) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_MissingInternet__WEBPACK_IMPORTED_MODULE_7__.MissingInternet, {}) }));
    }
    if (!state) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_onsenui__WEBPACK_IMPORTED_MODULE_1__.ProgressCircular, { indeterminate: true, style: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    WebkitTransform: "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                } }) }));
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page.RelativeContent, { children: !extra.rendering ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_Markdown__WEBPACK_IMPORTED_MODULE_2__.Markup, { children: state }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(extra.rendering, { children: state }) }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchTextActivity);


/***/ }),

/***/ "./src/activitys/InstallTerminalV2Activity.tsx":
/*!*****************************************************!*\
  !*** ./src/activitys/InstallTerminalV2Activity.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstallTerminalV2Activity: () => (/* binding */ InstallTerminalV2Activity),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RestartAlt.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatlist-react */ "./node_modules/flatlist-react/lib/index.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatlist_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_Ansi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/Ansi */ "./src/components/Ansi.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Native_View__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Native/View */ "./src/native/View.ts");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var material_ui_confirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! material-ui-confirm */ "./node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js");
/* harmony import */ var _Native_Shell__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Native/Shell */ "./src/native/Shell.ts");
/* harmony import */ var _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Native/BuildConfig */ "./src/native/BuildConfig.ts");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Util_stringFormat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Util/stringFormat */ "./src/util/stringFormat.ts");
/* harmony import */ var _Native_Terminal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Native/Terminal */ "./src/native/Terminal.ts");
/* harmony import */ var _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Components/dapi/Image */ "./src/components/dapi/Image.tsx");




















const colors = {
    R: "\x1b[0m",
    BRIGHT: "\x1b[1m",
    DIM: "\x1b[2m",
    UNDERSCORE: "\x1b[4m",
    FG: {
        BLACK: "\x1b[30m",
        RED: "\x1b[31m",
        GREEN: "\x1b[32m",
        YELLOW: "\x1b[33m",
        BLUE: "\x1b[34m",
        MAGENTA: "\x1b[35m",
        CYAN: "\x1b[36m",
        WHITE: "\x1b[37m",
        GRAY: "\x1b[90m",
    },
    BG: {
        BLACK: "\x1b[40m",
        RED: "\x1b[41m",
        GREEN: "\x1b[42m",
        YELLOW: "\x1b[43m",
        BLUE: "\x1b[44m",
        MAGENTA: "\x1b[45m",
        CYAN: "\x1b[46m",
        WHITE: "\x1b[47m",
        GRAY: "\x1b[100m",
    },
};
const useLines = (cmds) => {
    const [useInt, setUseInt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [lines, setLines] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const addText = (text, props) => {
        const txt = processCommand(text);
        if (typeof txt === "string") {
            setLines((lines) => [
                ...lines,
                {
                    component: _Components_Ansi__WEBPACK_IMPORTED_MODULE_3__.Ansi,
                    props: {
                        children: txt,
                        sx: {
                            mr: 1,
                            ml: 1,
                        },
                        linkify: true,
                        ...props,
                    },
                },
            ]);
        }
    };
    const addImage = (data, props) => {
        if (typeof data === "string") {
            setLines((lines) => [
                ...lines,
                {
                    component: _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_17__.Image,
                    props: {
                        src: data,
                        noOpen: true,
                        sx: {
                            mr: 1,
                            ml: 1,
                        },
                        ...props,
                    },
                },
            ]);
        }
    };
    const addButton = (text, props) => {
        setLines((lines) => [
            ...lines,
            {
                component: _mui_material__WEBPACK_IMPORTED_MODULE_18__["default"],
                props: {
                    children: text,
                    variant: "contained",
                    sx: {
                        width: "50vmin",
                        mt: 1,
                        mb: 1,
                    },
                    ...props,
                },
            },
        ]);
    };
    const processCommand = (rawCommand) => {
        if (rawCommand.startsWith("#!mmrl:")) {
            let args = [];
            let options = {};
            let command;
            rawCommand = rawCommand.substring(7);
            const i = rawCommand.indexOf(" ");
            if (i !== -1 && rawCommand.length !== i + 1) {
                // Extract command arguments and options
                const argsString = rawCommand.substring(i + 1).trim();
                const matches = argsString.match(/"([^"]+)"|--?[\w-]+|\S+/g);
                if (matches) {
                    for (let j = 0; j < matches.length; j++) {
                        let match = matches[j];
                        if (match.startsWith("--")) {
                            // Long option
                            const key = match.substring(2);
                            let value = true;
                            if (j + 1 < matches.length && !matches[j + 1].startsWith("-")) {
                                value = matches[++j];
                                // Remove surrounding quotes if present
                                if (value.startsWith('"') && value.endsWith('"')) {
                                    value = value.slice(1, -1);
                                }
                            }
                            options[key] = value;
                        }
                        else if (match.startsWith("-")) {
                            // Short option
                            const key = match.substring(1);
                            let value = true;
                            if (j + 1 < matches.length && !matches[j + 1].startsWith("-")) {
                                value = matches[++j];
                                // Remove surrounding quotes if present
                                if (value.startsWith('"') && value.endsWith('"')) {
                                    value = value.slice(1, -1);
                                }
                            }
                            options[key] = value;
                        }
                        else {
                            // Positional argument
                            // Remove surrounding quotes if present
                            if (match.startsWith('"') && match.endsWith('"')) {
                                match = match.slice(1, -1);
                            }
                            args.push(match);
                        }
                    }
                }
                command = rawCommand.substring(0, i);
            }
            else {
                command = rawCommand;
            }
            const handleCommand = cmds[command];
            if (handleCommand) {
                handleCommand(args, options, { addButton: addButton, addText: addText, addImage: addImage, setLines: setLines, lines: lines });
            }
        }
        else {
            const info = /^\-(\s+)?(.+)/gm;
            const warn = /^\?(\s+)?(.+)/gm;
            const erro = /^\!(\s+)?(.+)/gm;
            if (rawCommand.match(info)) {
                return rawCommand.replace(info, "$2");
            }
            else if (rawCommand.match(erro)) {
                return rawCommand.replace(erro, "\x1b[31m$2\x1b[0m");
            }
            else if (rawCommand.match(warn)) {
                return rawCommand.replace(warn, "\x1b[33m$2\x1b[0m");
            }
            else {
                return rawCommand;
            }
        }
    };
    return {
        processCommand: processCommand,
        lines: lines,
        setLines: setLines,
        useInt: useInt,
        setUseInt: setUseInt,
        addButton: addButton,
        addText: addText,
    };
};
const InstallTerminalV2Activity = () => {
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_6__.useActivity)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_10__.useStrings)();
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__.useSettings)();
    const { modFS, __modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_14__.useModFS)();
    const confirm = (0,material_ui_confirm__WEBPACK_IMPORTED_MODULE_11__.useConfirm)();
    const termEndRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const [active, setActive] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const { lines, addText, addButton } = useLines({
        color: (args, _, add) => {
            add.addText((0,_Util_stringFormat__WEBPACK_IMPORTED_MODULE_15__.formatString)(args[0], colors));
        },
        clearTerminal: (_, __, add) => {
            add.setLines([]);
        },
        setLastLine: (args, __, add) => {
            add.setLines((p) => p.slice(0, -1));
            addText(args[0]);
        },
        removeLastLine: (_, __, add) => {
            add.setLines((p) => p.slice(0, -1));
        },
        addImage: (args, opt, add) => {
            const { width, height } = opt;
            add.addImage(args[0], {
                sx: {
                    width: width || "80vmin",
                    height: height,
                },
            });
        },
        addButton: (args, opt, add) => {
            const { variant } = opt;
            add.addButton(args[0], {
                sx: {
                    width: "50vmin",
                    mt: 1,
                    mb: 1,
                },
                variant: variant,
            });
        },
    });
    // ensure that it is always the same function
    const nativeVolumeEventPrevent = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((e) => {
        e.preventDefault();
    }, []);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        document.addEventListener("volumeupbutton", nativeVolumeEventPrevent, false);
        document.addEventListener("volumedownbutton", nativeVolumeEventPrevent, false);
        return () => {
            document.removeEventListener("volumeupbutton", nativeVolumeEventPrevent, false);
            document.removeEventListener("volumedownbutton", nativeVolumeEventPrevent, false);
        };
    }, []);
    if (settings.term_scroll_bottom) {
        const termBehavior = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => settings.term_scroll_behavior, [settings]);
        react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            termEndRef.current?.scrollIntoView({ behavior: termBehavior.value, block: "end", inline: "nearest" });
        }, [lines]);
    }
    const rebootDevice = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((reason = "") => {
        confirm({
            title: strings("reboot_device"),
            description: strings("reboot_device_desc"),
            confirmationText: strings("yes"),
            cancellationText: strings("cancel"),
        }).then(() => {
            _Native_Shell__WEBPACK_IMPORTED_MODULE_12__.Shell.cmd(`/system/bin/svc power reboot ${reason} || /system/bin/reboot ${reason}`).exec();
        });
    }, []);
    const install = () => {
        const { exploreInstall, modSource, id, source, issues } = extra;
        if (exploreInstall) {
            const url = modSource[0];
            const urls = modSource.join(" ");
            const explore_install = new _Native_Terminal__WEBPACK_IMPORTED_MODULE_16__.Terminal({
                cwd: "/data/local/tmp",
                printError: settings.print_terminal_error,
            });
            explore_install.env = {
                ASH_STANDALONE: "1",
                MMRL: "true",
                MMRL_INTR: "true",
                MMRL_VER: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_13__.BuildConfig.VERSION_CODE.toString(),
                NAME: id,
                ROOTMANAGER: _Native_Shell__WEBPACK_IMPORTED_MODULE_12__.Shell.getRootManager(),
                ...__modFS,
            };
            explore_install.onLine = (line) => {
                addText(line);
            };
            explore_install.onExit = (code) => {
                switch (code) {
                    case _Native_Shell__WEBPACK_IMPORTED_MODULE_12__.Shell.M_INS_SUCCESS:
                        addText(" ");
                        addText("\x1b[93mYou can press the \x1b[33;4mbutton\x1b[93;0m\x1b[93m below to \x1b[33;4mreboot\x1b[93;0m\x1b[93m your device\x1b[0m");
                        addButton("Reboot", {
                            startIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], {}),
                            onClick: rebootDevice,
                        });
                        addText("\x1b[2mModules that causes issues after installing belog not to \x1b[35;4mMMRL\x1b[0;2m!\nPlease report these issues to thier support page\x1b[2m");
                        if (issues) {
                            addText(`> \x1b[32mIssues: \x1b[33m${issues}\x1b[0m`);
                        }
                        if (source) {
                            addText(`> \x1b[32mSource: \x1b[33m${source}\x1b[0m`);
                        }
                        setActive(false);
                        break;
                    case _Native_Shell__WEBPACK_IMPORTED_MODULE_12__.Shell.M_INS_FAILURE:
                        addText(" ");
                        addText("\x1b[2mModules that causes issues after installing belog not to \x1b[35;4mMMRL\x1b[0;2m!\nPlease report these issues to thier support page\x1b[2m");
                        if (issues) {
                            addText(`> \x1b[32mIssues: \x1b[33m${issues}\x1b[0m`);
                        }
                        if (source) {
                            addText(`> \x1b[32mSource: \x1b[33m${source}\x1b[0m`);
                        }
                        setActive(false);
                        break;
                    case _Native_Shell__WEBPACK_IMPORTED_MODULE_12__.Shell.TERM_INTR_ERR:
                        addText("! \x1b[31mInternal error!\x1b[0m");
                        setActive(false);
                        break;
                    default:
                        addText("? Unknown code returned");
                        setActive(false);
                        break;
                }
            };
            explore_install.exec(modFS("EXPLORE_INSTALL", {
                URL: url,
                URLS: urls,
                MODID: id,
            }));
        }
        else {
            const zipfile = modSource[0];
            const zipfiles = modSource.join(" ");
            const local_install = new _Native_Terminal__WEBPACK_IMPORTED_MODULE_16__.Terminal({
                cwd: "/data/local/tmp",
                printError: settings.print_terminal_error,
            });
            local_install.env = {
                ASH_STANDALONE: "1",
                MMRL: "true",
                MMRL_INTR: "true",
                MMRL_VER: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_13__.BuildConfig.VERSION_CODE.toString(),
                NAME: id,
                ROOTMANAGER: _Native_Shell__WEBPACK_IMPORTED_MODULE_12__.Shell.getRootManager(),
                ...__modFS,
            };
            local_install.onLine = (line) => {
                addText(line);
            };
            local_install.onExit = (code) => {
                switch (code) {
                    case _Native_Shell__WEBPACK_IMPORTED_MODULE_12__.Shell.M_INS_SUCCESS:
                        addText(" ");
                        addText("\x1b[93mYou can press the \x1b[33;4mbutton\x1b[93;0m\x1b[93m below to \x1b[33;4mreboot\x1b[93;0m\x1b[93m your device\x1b[0m");
                        addButton("Reboot", {
                            startIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"], {}),
                            onClick: rebootDevice,
                        });
                        addText("\x1b[2mModules that causes issues after installing belog not to \x1b[35;4mMMRL\x1b[0;2m!\nPlease report these issues to thier support page\x1b[2m");
                        setActive(false);
                        break;
                    case _Native_Shell__WEBPACK_IMPORTED_MODULE_12__.Shell.M_INS_FAILURE:
                        addText(" ");
                        addText("\x1b[2mModules that causes issues after installing belog not to \x1b[35;4mMMRL\x1b[0;2m!\nPlease report these issues to thier support page\x1b[2m");
                        setActive(false);
                        break;
                    case _Native_Shell__WEBPACK_IMPORTED_MODULE_12__.Shell.TERM_INTR_ERR:
                        addText("! \x1b[31mInternal error!\x1b[0m");
                        setActive(false);
                        break;
                    default:
                        addText("- Unknown code returned");
                        setActive(false);
                        break;
                }
            };
            local_install.exec(modFS("LOCAL_INSTALL", {
                ZIPFILE: zipfile,
                ZIPFILES: zipfiles,
            }));
        }
    };
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_7__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Left, { children: !active && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_7__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_7__.Toolbar.Center, { children: "Install" })] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_9__.Page, { onDeviceBackButton: (e) => {
            if (!active) {
                e.callParentHandler();
            }
        }, sx: {
            pl: 1,
            pr: 1,
            // removing bottom window insets
            pb: "0px !important",
        }, onShow: install, modifier: "noshadow", renderToolbar: renderToolbar, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { sx: {
                    display: "flex",
                    flexWrap: "wrap",
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { style: {
                        whiteSpace: !settings.terminal_word_wrap ? "pre" : "unset",
                        flex: "0 0 100%",
                        color: "white",
                        height: "100%",
                        fontSize: "smaller",
                    }, direction: "column", justifyContent: "flex-start", alignItems: "stretch", spacing: 0, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((flatlist_react__WEBPACK_IMPORTED_MODULE_2___default()), { list: lines, renderItem: (line, key) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { sx: {
                                display: "flex",
                                ":hover": {
                                    backgroundColor: (0,_mui_material__WEBPACK_IMPORTED_MODULE_22__.alpha)("#fff", 0.03),
                                },
                                code: {
                                    wordBreak: settings.terminal_word_wrap ? "break-all" : "unset",
                                },
                            }, children: [settings.terminal_numberic_lines && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { sx: (theme) => ({
                                        minWidth: "40px",
                                        paddingRight: "1em",
                                        fontSize: "unset",
                                        marginLeft: "calc(18px - 1em)",
                                        color: theme.palette.text.secondary,
                                        textAlign: "right",
                                        textDecoration: "none",
                                    }), children: Number(key) + 1 })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(line.component, { ...line.props }, key)] })), renderOnScroll: true, renderWhenEmpty: () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { sx: { height: _Native_View__WEBPACK_IMPORTED_MODULE_8__.view.getWindowBottomInsets() }, ref: termEndRef })] }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InstallTerminalV2Activity);


/***/ }),

/***/ "./src/activitys/LicensesActivity.tsx":
/*!********************************************!*\
  !*** ./src/activitys/LicensesActivity.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flatlist-react */ "./node_modules/flatlist-react/lib/index.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flatlist_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Util_licenses_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Util/licenses.json */ "./src/util/licenses.json");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _FetchTextActivity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FetchTextActivity */ "./src/activitys/FetchTextActivity.tsx");
/* harmony import */ var _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Hooks/useFetch */ "./src/hooks/useFetch.ts");
















const DepCard = (props) => {
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__.useStrings)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const dep = props.dep;
    const handleOpenSource = () => {
        _Native_Os__WEBPACK_IMPORTED_MODULE_8__.os.open(dep.source, {
            target: "_blank",
            features: {
                color: theme.palette.primary.main,
            },
        });
    };
    const [licenseData] = (0,_Hooks_useFetch__WEBPACK_IMPORTED_MODULE_11__.useFetch)(`https://raw.githubusercontent.com/spdx/license-list-data/main/website/${dep.license}.json`);
    const handleOpenLicense = () => {
        if (licenseData) {
            context.pushPage({
                component: _FetchTextActivity__WEBPACK_IMPORTED_MODULE_10__["default"],
                key: "license_" + dep.license,
                extra: {
                    raw_data: licenseData.licenseText,
                    modulename: licenseData.name,
                },
            });
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: { p: 2 }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], { direction: "column", justifyContent: "center", alignItems: "stretch", spacing: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], { direction: "row", justifyContent: "space-between", alignItems: "center", spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], { variant: "caption", display: "block", children: dep.author }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], { variant: "overline", display: "block", children: dep.license })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], { direction: "column", justifyContent: "center", alignItems: "flex-start", spacing: 0.5, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], { variant: "h5", gutterBottom: true, children: dep.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], { variant: "caption", display: "block", children: dep.version }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_14__["default"], { variant: "subtitle2", gutterBottom: true, children: dep.description })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], { direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 1, mt: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_15__["default"], { disableElevation: true, variant: "contained", size: "small", onClick: handleOpenLicense, children: strings("license") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_15__["default"], { disableElevation: true, variant: "outlined", size: "small", onClick: handleOpenSource, children: strings("source") })] })] }));
};
const LicensesActivity = () => {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__.useStrings)();
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__.useSettings)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: strings("licenses") })] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page.RelativeContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((flatlist_react__WEBPACK_IMPORTED_MODULE_6___default()), { list: _Util_licenses_json__WEBPACK_IMPORTED_MODULE_7__, renderItem: (dep) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(DepCard, { dep: dep }), renderOnScroll: true, display: {
                    row: true,
                    rowGap: "8px",
                } }) }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LicensesActivity);


/***/ }),

/***/ "./src/activitys/LogcatActivity.tsx":
/*!******************************************!*\
  !*** ./src/activitys/LogcatActivity.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogcatActivity: () => (/* binding */ LogcatActivity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Remove.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Slider/Slider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatlist-react */ "./node_modules/flatlist-react/lib/index.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatlist_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Components_onsenui_BottomToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/onsenui/BottomToolbar */ "./src/components/onsenui/BottomToolbar.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Native/BuildConfig */ "./src/native/BuildConfig.ts");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Hooks_useNativeStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useNativeStorage */ "./src/hooks/useNativeStorage.tsx");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Components_Ansi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/Ansi */ "./src/components/Ansi.tsx");
/* harmony import */ var _Native_Terminal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Native/Terminal */ "./src/native/Terminal.ts");















const LogcatActivity = () => {
    const [fontSize, setFontSize] = (0,_Hooks_useNativeStorage__WEBPACK_IMPORTED_MODULE_9__.useNativeStorage)("mmrlini_log_terminal", 100);
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_7__.useActivity)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_8__.useTheme)();
    const [lines, setLines] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_10__.useSettings)();
    const termEndRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    if (settings.term_scroll_bottom) {
        const termBehavior = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => settings.term_scroll_behavior, [settings]);
        react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            termEndRef.current?.scrollIntoView({ behavior: termBehavior.value, block: "end", inline: "nearest" });
        }, [lines]);
    }
    const addLine = (line) => {
        setLines((lines) => [...lines, line]);
    };
    const startLog = () => {
        const logcat = new _Native_Terminal__WEBPACK_IMPORTED_MODULE_12__.Terminal();
        logcat.env = {
            PACKAGENAME: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_6__.BuildConfig.APPLICATION_ID,
        };
        logcat.onLine = (line) => {
            addLine(line);
        };
        logcat.onExit = (code) => { };
        logcat.exec("logcat --pid=`pidof -s $PACKAGENAME` -v color");
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page, { onShow: startLog, renderToolbar: () => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Center, { children: "Logcat" })] })), modifier: "noshadow", renderBottomToolbar: () => {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_BottomToolbar__WEBPACK_IMPORTED_MODULE_4__.BottomToolbar, { sx: { background: "none", backgroundColor: theme.palette.background.default }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { spacing: 2, direction: "row", sx: { height: "100%", ml: 1, mr: 1 }, alignItems: "center", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__["default"], { color: "secondary" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], { value: fontSize, onChange: (event, newValue) => {
                                setFontSize(Number(newValue));
                            }, step: 10, marks: true, min: 20, max: 200 }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_16__["default"], { color: "secondary" })] }) }));
        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { style: {
                    display: "flex",
                    flexWrap: "wrap",
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { style: {
                        whiteSpace: "pre",
                        flex: "0 0 100%",
                        color: "white",
                        height: "100%",
                    }, direction: "column", justifyContent: "flex-start", alignItems: "stretch", spacing: 0, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((flatlist_react__WEBPACK_IMPORTED_MODULE_2___default()), { list: lines, renderItem: (line, key) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { component: _Components_Ansi__WEBPACK_IMPORTED_MODULE_11__.Ansi, sx: {
                                fontSize: fontSize ? `${fontSize}%` : "none",
                                ml: 1,
                                mr: 1,
                            }, children: line }, key)), renderOnScroll: true, renderWhenEmpty: () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ref: termEndRef })] }));
};



/***/ }),

/***/ "./src/activitys/MainActivity.tsx":
/*!****************************************!*\
  !*** ./src/activitys/MainActivity.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainActivity: () => (/* binding */ MainActivity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/CloseRounded.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_RouterUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Util/RouterUtil */ "./src/util/RouterUtil.js");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Native_Shell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Native/Shell */ "./src/native/Shell.ts");
/* harmony import */ var _MainApplication__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MainApplication */ "./src/activitys/MainApplication.tsx");
/* harmony import */ var _NoRootActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NoRootActivity */ "./src/activitys/NoRootActivity.tsx");
/* harmony import */ var _Components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/ErrorBoundary */ "./src/components/ErrorBoundary.tsx");
/* harmony import */ var _Components_Icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/Icon */ "./src/components/Icon.tsx");
/* harmony import */ var _SettingsActivity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SettingsActivity */ "./src/activitys/SettingsActivity.tsx");
/* harmony import */ var _Components_onsenui_Splitter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/onsenui/Splitter */ "./src/components/onsenui/Splitter.tsx");
/* harmony import */ var _Components_onsenui_RouterNavigator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/onsenui/RouterNavigator */ "./src/components/onsenui/RouterNavigator.tsx");
/* harmony import */ var _fragments_DrawerFragment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fragments/DrawerFragment */ "./src/activitys/fragments/DrawerFragment.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _mui_icons_material_CodeRounded__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material/CodeRounded */ "./node_modules/@mui/icons-material/CodeRounded.js");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var eruda__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! eruda */ "./node_modules/eruda/eruda.js");
/* harmony import */ var eruda__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(eruda__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Components/dapi/Pre */ "./src/components/dapi/Pre.tsx");
/* harmony import */ var _Components_dapi_Code__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Components/dapi/Code */ "./src/components/dapi/Code.tsx");
/* harmony import */ var _Package__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @Package */ "./package.json");
/* harmony import */ var _UnverifiedHostActivity__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UnverifiedHostActivity */ "./src/activitys/UnverifiedHostActivity.tsx");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _LogcatActivity__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./LogcatActivity */ "./src/activitys/LogcatActivity.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");






























const getLocation = () => {
    if (window.location !== window.parent.location) {
        return window.parent.location;
    }
    else if (window.self !== window.top && window.top) {
        return window.top.location;
    }
    else {
        return window.location;
    }
};
const CheckRoot = () => {
    if (_Package__WEBPACK_IMPORTED_MODULE_20__.config.verified_hosts.some((e) => new RegExp(e[0], e[1]).test(getLocation().hostname))) {
        if (_Native_Os__WEBPACK_IMPORTED_MODULE_4__.os.isAndroid) {
            // Shell.isAppGrantedRoot() doesn't work on KSU
            if (_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isSuAvailable()) {
                return react__WEBPACK_IMPORTED_MODULE_1___default().memo(_MainApplication__WEBPACK_IMPORTED_MODULE_6__["default"]);
            }
            else {
                return react__WEBPACK_IMPORTED_MODULE_1___default().memo(_NoRootActivity__WEBPACK_IMPORTED_MODULE_7__["default"]);
            }
        }
        else {
            return react__WEBPACK_IMPORTED_MODULE_1___default().memo(_MainApplication__WEBPACK_IMPORTED_MODULE_6__["default"]);
        }
    }
    else {
        return react__WEBPACK_IMPORTED_MODULE_1___default().memo(_UnverifiedHostActivity__WEBPACK_IMPORTED_MODULE_21__["default"]);
    }
};
const MainActivity = () => {
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__.useSettings)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_25__.useStrings)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_17__.useTheme)();
    const { modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_22__.useModFS)();
    const [isSplitterOpen, setIsSplitterOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const hideSplitter = () => {
        setIsSplitterOpen(false);
    };
    const showSplitter = () => {
        setIsSplitterOpen(true);
    };
    const erudaRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const _eruda = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => (eruda__WEBPACK_IMPORTED_MODULE_16___default()), [settings.eruda_console_enabled]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        if (settings.eruda_console_enabled) {
            _eruda.init({
                container: erudaRef.current,
                tool: ["console", "elements", "resources", "info"],
            });
        }
        else {
            if (window.eruda) {
                _eruda.destroy();
            }
        }
    }, [settings.eruda_console_enabled]);
    const pushContext = {
        pushPage: (props) => pushPage(props),
        popPage: (options) => popPage(options),
        splitter: {
            show: () => showSplitter(),
            hide: () => hideSplitter(),
            state: isSplitterOpen,
        },
    };
    const ignoreThat = _Util_RouterUtil__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.init([
        {
            route: {
                component: CheckRoot(),
                props: {
                    key: "main",
                },
            },
            key: "main",
            props: {
                key: "main",
            },
            context: pushContext,
        },
    ]);
    const [routeConfig, setRouteConfig] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ignoreThat);
    const popPage = (options) => {
        setRouteConfig((prev) => _Util_RouterUtil__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.pop({
            routeConfig: prev,
            key: prev.key,
            options: {
                ...options,
                animationOptions: {
                    duration: 0.2,
                    timing: "ease-in",
                    animation: "fade-md",
                },
            },
        }));
    };
    const pushPage = (props) => {
        const route = {
            component: !props.noMemo ? react__WEBPACK_IMPORTED_MODULE_1___default().memo(props.component) : props.component,
            props: {
                key: props.component.name || props.key,
            },
        };
        const options = {};
        setRouteConfig((prev) => _Util_RouterUtil__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.push({
            routeConfig: prev,
            route: route,
            options: options,
            key: props.component.name || props.key,
            props: props.props,
            context: pushContext,
            extra: props.extra ? props.extra : {},
        }));
    };
    const onPostPush = () => {
        setRouteConfig((prev) => _Util_RouterUtil__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.postPush(prev));
    };
    const onPostPop = () => {
        setRouteConfig((prev) => _Util_RouterUtil__WEBPACK_IMPORTED_MODULE_2__.RouterUtil.postPop(prev));
    };
    const renderPage = (route, props) => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_8__.ErrorBoundary, { fallback: fallback, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(route.component, { ...props }) }));
    };
    const renderSpliterToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_14__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_14__.Toolbar.Center, { sx: {
                            display: "flex",
                            alignSelf: "center",
                            alignItems: "center",
                        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_CodeRounded__WEBPACK_IMPORTED_MODULE_26__["default"], { sx: { display: "flex", mr: 1 } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], { variant: "h6", noWrap: true, component: "div", sx: {
                                    mr: 2,
                                    display: "flex",
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }, children: "MMRL" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_14__.Toolbar.Right, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_14__.Toolbar.Button, { onClick: hideSplitter, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_Icon__WEBPACK_IMPORTED_MODULE_9__["default"], { icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_28__["default"], keepLight: true }) }) })] }) }));
    };
    const fallback = (error, errorInfo, resetErrorBoundary) => {
        const style = {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.primary,
            borderRadius: theme.shape.borderRadius / theme.shape.borderRadius,
            lineHeight: 1.45,
            overflow: "auto",
            padding: 2,
        };
        const handleOpenSettings = () => {
            pushPage({
                component: _SettingsActivity__WEBPACK_IMPORTED_MODULE_10__["default"],
                key: "SettingsActivity",
            });
        };
        const handleOpenLogcat = () => {
            pushPage({
                component: _LogcatActivity__WEBPACK_IMPORTED_MODULE_24__.LogcatActivity,
                key: "LogcatActivity",
            });
        };
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_15__.Page, { ref: erudaRef, renderToolbar: () => {
                return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_14__.Toolbar, { modifier: "noshadow", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_14__.Toolbar.Center, { children: strings("we_hit_a_brick") }) }));
            }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_15__.Page.RelativeContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_18__.Pre, { sx: style, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Code__WEBPACK_IMPORTED_MODULE_19__.Code, { children: error.message }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"], { fullWidth: true, variant: "contained", disableElevation: true, onClick: resetErrorBoundary, children: strings("try_again") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"], { sx: { mt: 2 }, fullWidth: true, variant: "contained", disableElevation: true, onClick: handleOpenSettings, children: strings("open_settings") }), _Native_Os__WEBPACK_IMPORTED_MODULE_4__.os.isAndroid && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_29__["default"], { sx: { mt: 2 }, fullWidth: true, variant: "contained", disableElevation: true, onClick: handleOpenLogcat, children: strings("open_logcat") })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_18__.Pre, { sx: style, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Code__WEBPACK_IMPORTED_MODULE_19__.Code, { children: errorInfo.componentStack }) })] }) }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_15__.Page, { onInit: () => {
            const mmrlFolder = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_23__.SuFile(`${modFS("ADB")}/mmrl`);
            if (!mmrlFolder.exist()) {
                mmrlFolder.create(_Native_SuFile__WEBPACK_IMPORTED_MODULE_23__.SuFile.NEW_FOLDERS);
            }
        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Splitter__WEBPACK_IMPORTED_MODULE_11__.Splitter, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Splitter__WEBPACK_IMPORTED_MODULE_11__.Splitter.Side, { side: "left", width: 250, collapse: true, swipeable: false, isOpen: isSplitterOpen, onClose: hideSplitter, onOpen: showSplitter, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fragments_DrawerFragment__WEBPACK_IMPORTED_MODULE_13__.DrawerFragment, { renderToolbar: renderSpliterToolbar, hideSplitter: hideSplitter, pushPage: pushPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Splitter__WEBPACK_IMPORTED_MODULE_11__.Splitter.Content, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_RouterNavigator__WEBPACK_IMPORTED_MODULE_12__.RouterNavigator, { swipeable: true, swipePop: (options) => popPage(options), routeConfig: routeConfig, renderPage: renderPage, onPostPush: () => onPostPush(), onPostPop: () => onPostPop() }) })] }) }));
};



/***/ }),

/***/ "./src/activitys/MainApplication.tsx":
/*!*******************************************!*\
  !*** ./src/activitys/MainApplication.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_icons_material_CodeRounded__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material/CodeRounded */ "./node_modules/@mui/icons-material/CodeRounded.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material/Menu */ "./node_modules/@mui/icons-material/Menu.js");
/* harmony import */ var _fragments_ModuleFragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fragments/ModuleFragment */ "./src/activitys/fragments/ModuleFragment.tsx");
/* harmony import */ var _Components_module_DeviceModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/module/DeviceModule */ "./src/components/module/DeviceModule.tsx");
/* harmony import */ var _Components_module_ExploreModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/module/ExploreModule */ "./src/components/module/ExploreModule.tsx");
/* harmony import */ var _Components_module_UpdateModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/module/UpdateModule */ "./src/components/module/UpdateModule.tsx");
/* harmony import */ var _ModuleViewActivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModuleViewActivity */ "./src/activitys/ModuleViewActivity/index.tsx");
/* harmony import */ var _mui_icons_material_CreateNewFolder__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material/CreateNewFolder */ "./node_modules/@mui/icons-material/CreateNewFolder.js");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Components_onsenui_Tabbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/onsenui/Tabbar */ "./src/components/onsenui/Tabbar.tsx");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/icons-material/Search */ "./node_modules/@mui/icons-material/Search.js");
/* harmony import */ var _Components_onsenui_Fab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/onsenui/Fab */ "./src/components/onsenui/Fab.tsx");
/* harmony import */ var _Hooks_useLocalModules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Hooks/useLocalModules */ "./src/hooks/useLocalModules.ts");
/* harmony import */ var _Native_Shell__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Native/Shell */ "./src/native/Shell.ts");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Hooks_useOpenModuleSearch__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Hooks/useOpenModuleSearch */ "./src/hooks/useOpenModuleSearch.tsx");
/* harmony import */ var _InstallTerminalV2Activity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./InstallTerminalV2Activity */ "./src/activitys/InstallTerminalV2Activity.tsx");
/* harmony import */ var _Native_Chooser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @Native/Chooser */ "./src/native/Chooser.ts");
/* harmony import */ var material_ui_confirm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! material-ui-confirm */ "./node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js");



























const MainApplication = () => {
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_7__.useActivity)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_11__.useStrings)();
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_17__.useSettings)();
    const { modules } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_13__.useRepos)();
    const [index, setIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const localModules = (0,_Hooks_useLocalModules__WEBPACK_IMPORTED_MODULE_15__.useLocalModules)();
    const confirm = (0,material_ui_confirm__WEBPACK_IMPORTED_MODULE_21__.useConfirm)();
    const handleOpenModuleSearch = (0,_Hooks_useOpenModuleSearch__WEBPACK_IMPORTED_MODULE_18__.useOpenModuleSearch)(modules);
    const handleBackEvent = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((e) => {
        if (index === 0) {
            confirm({
                title: strings("exit_app"),
                description: strings("exit_app_desc"),
                confirmationText: strings("yes"),
                cancellationText: strings("no"),
            })
                .then(() => {
                if (typeof e.callParentHandler === "function") {
                    e.callParentHandler();
                }
                else {
                    navigator.app.exitApp();
                }
            })
                .catch(() => { });
        }
        else {
            setIndex(0);
        }
    }, [index]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get("module");
        const m_ = modules.find((m) => m.id === id);
        if (m_) {
            context.pushPage({
                component: _ModuleViewActivity__WEBPACK_IMPORTED_MODULE_6__.ModuleViewActivity,
                key: "ModuleViewActivity",
                extra: m_,
            });
        }
    }, [modules]);
    const renderTabs = () => {
        return [
            {
                content: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fragments_ModuleFragment__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "explore", modules: modules, renderItem: (module, key) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_module_ExploreModule__WEBPACK_IMPORTED_MODULE_4__["default"], { module: module }, key) })),
                tab: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Tabbar__WEBPACK_IMPORTED_MODULE_12__.Tabbar.Tab, { label: strings("explore") }),
            },
            ...(_Native_Os__WEBPACK_IMPORTED_MODULE_9__.os.isAndroid
                ? [
                    {
                        content: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fragments_ModuleFragment__WEBPACK_IMPORTED_MODULE_2__["default"], { disableNoInternet: true, id: "local", modules: localModules, renderItem: (module, key) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_module_DeviceModule__WEBPACK_IMPORTED_MODULE_3__["default"], { module: module }, key), renderFixed: () => {
                                if (_Native_Os__WEBPACK_IMPORTED_MODULE_9__.os.isAndroid && (_Native_Shell__WEBPACK_IMPORTED_MODULE_16__.Shell.isMagiskSU() || _Native_Shell__WEBPACK_IMPORTED_MODULE_16__.Shell.isKernelSU() || _Native_Shell__WEBPACK_IMPORTED_MODULE_16__.Shell.isAPatchSU())) {
                                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Fab__WEBPACK_IMPORTED_MODULE_14__["default"], { sx: {
                                            "& .fab__icon": {
                                                verticalAlign: "middle",
                                                color: "black",
                                            },
                                        }, onClick: () => {
                                            const chooseModule = new _Native_Chooser__WEBPACK_IMPORTED_MODULE_20__.Chooser("application/zip");
                                            chooseModule.onChose = (files) => {
                                                if (_Native_Chooser__WEBPACK_IMPORTED_MODULE_20__.Chooser.isSuccess(files)) {
                                                    context.pushPage({
                                                        component: _InstallTerminalV2Activity__WEBPACK_IMPORTED_MODULE_19__["default"],
                                                        key: "InstallTerminalV2Activity",
                                                        extra: {
                                                            exploreInstall: false,
                                                            modSource: files,
                                                        },
                                                    });
                                                }
                                            };
                                            chooseModule.getFiles();
                                        }, position: "bottom right", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_CreateNewFolder__WEBPACK_IMPORTED_MODULE_22__["default"], {}) }));
                                }
                            } })),
                        tab: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Tabbar__WEBPACK_IMPORTED_MODULE_12__.Tabbar.Tab, { label: strings("installed") }),
                    },
                    {
                        content: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_fragments_ModuleFragment__WEBPACK_IMPORTED_MODULE_2__["default"], { id: "update", modules: localModules, renderItem: (module, key) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_module_UpdateModule__WEBPACK_IMPORTED_MODULE_5__["default"], { module: module }, key) })),
                        tab: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Tabbar__WEBPACK_IMPORTED_MODULE_12__.Tabbar.Tab, { label: strings("updates") }),
                    },
                ]
                : []),
        ];
    };
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar, { modifier: "noshadow", sx: { boderBottom: "unset !important" }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Button, { icon: _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_23__["default"], onClick: context.splitter.show }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Center, { sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "center",
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_24__["default"], { sx: {
                            display: "flex",
                            justifyContent: "center",
                            alignSelf: "center",
                            alignItems: "center",
                        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_CodeRounded__WEBPACK_IMPORTED_MODULE_25__["default"], { sx: { display: "flex", mr: 1 } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_24__["default"], { variant: "h6", noWrap: true, component: "div", sx: {
                                    mr: 2,
                                    display: "flex",
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "inherit",
                                    textDecoration: "none",
                                }, children: "MMRL" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Right, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_8__.Toolbar.Button, { icon: _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_26__["default"], onClick: () => handleOpenModuleSearch() }) })] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_10__.Page, { modifier: "noshadow", onDeviceBackButton: handleBackEvent, renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Tabbar__WEBPACK_IMPORTED_MODULE_12__.Tabbar, { modifier: "noshadow", hideTabs: !_Native_Os__WEBPACK_IMPORTED_MODULE_9__.os.isAndroid, swipeable: settings.swipeable_tabs, position: "top", index: index, onPreChange: (event) => {
                if (event.index != index) {
                    setIndex(event.index);
                }
            }, renderTabs: renderTabs }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainApplication);


/***/ }),

/***/ "./src/activitys/ModConfActivity/components/ModConfView/index.tsx":
/*!************************************************************************!*\
  !*** ./src/activitys/ModConfActivity/components/ModConfView/index.tsx ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModConfView: () => (/* binding */ ModConfView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Hooks_native_useLog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/native/useLog */ "./src/hooks/native/useLog.ts");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Native_IsolatedEval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Native/IsolatedEval */ "./src/native/IsolatedEval/index.ts");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _libs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./libs */ "./src/activitys/ModConfActivity/components/ModConfView/libs.ts");







const ModConfView = (props) => {
    const { modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_2__.useModFS)();
    const { modid, children } = props;
    const log = (0,_Hooks_native_useLog__WEBPACK_IMPORTED_MODULE_1__.useLog)(`Config-${modid}`);
    const format = react__WEBPACK_IMPORTED_MODULE_5__.useCallback((key) => modFS(key, { MODID: modid }), []);
    const internalFetch = react__WEBPACK_IMPORTED_MODULE_5__.useCallback((input, init) => {
        return fetch(input, init);
    }, [modid]);
    const isoEval = react__WEBPACK_IMPORTED_MODULE_5__.useMemo(() => {
        const options = {
            libraries: _libs__WEBPACK_IMPORTED_MODULE_6__.libraries,
            indexFile: props.indexFile,
            cwd: props.cwd,
            scope: {
                log: log,
                __idname: modid,
                __filename: props.indexFile,
                __dirname: props.cwd,
                __modpath: format("MODULECWD"),
                window: {
                    fetch: internalFetch,
                    open: _Native_Os__WEBPACK_IMPORTED_MODULE_4__.os.openURL,
                },
                fetch: internalFetch,
                // @deprecated
                modid: modid,
                modpath: (path) => `${format("MODULECWD")}/${path}`,
                confpath: (path) => `${format("CONFCWD")}/${path}`,
                include: (modulePath, opt = { isolate: false }) => {
                    if (opt.isolate) {
                        modulePath = `${format("CONFCWD")}/${modulePath}`;
                    }
                    return isoEval.require(modulePath);
                },
            },
            standaloneFile: props.standaloneFile,
        };
        return new _Native_IsolatedEval__WEBPACK_IMPORTED_MODULE_3__.IsolatedEval(options);
    }, [children, modid]);
    const box = react__WEBPACK_IMPORTED_MODULE_5__.useCallback((code) => isoEval.compileTransform(code), []);
    const Component = box(children);
    if (Component.exports.default) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component.exports.default, {});
    }
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};


/***/ }),

/***/ "./src/activitys/ModConfActivity/components/ModConfView/libs.ts":
/*!**********************************************************************!*\
  !*** ./src/activitys/ModConfActivity/components/ModConfView/libs.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   libraries: () => (/* binding */ libraries)
/* harmony export */ });
/* harmony import */ var _Components_dapi_Video__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Components/dapi/Video */ "./src/components/dapi/Video.tsx");
/* harmony import */ var _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/dapi/Image */ "./src/components/dapi/Image.tsx");
/* harmony import */ var _Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/dapi/Anchor */ "./src/components/dapi/Anchor.tsx");
/* harmony import */ var _Components_dapi_DiscordWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/dapi/DiscordWidget */ "./src/components/dapi/DiscordWidget.tsx");
/* harmony import */ var _Components_onsenui_BottomToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/onsenui/BottomToolbar */ "./src/components/onsenui/BottomToolbar.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Tabbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/onsenui/Tabbar */ "./src/components/onsenui/Tabbar.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Hooks_useNativeStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Hooks/useNativeStorage */ "./src/hooks/useNativeStorage.tsx");
/* harmony import */ var _Hooks_useNativeProperties__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useNativeProperties */ "./src/hooks/useNativeProperties.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Components_Ansi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/Ansi */ "./src/components/Ansi.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Hooks_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Hooks/useNativeFileStorage */ "./src/hooks/useNativeFileStorage.tsx");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Activitys_PicturePreviewActivity__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Activitys/PicturePreviewActivity */ "./src/activitys/PicturePreviewActivity.tsx");
/* harmony import */ var material_ui_confirm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! material-ui-confirm */ "./node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js");
/* harmony import */ var _Components_Markdown__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @Components/Markdown */ "./src/components/Markdown/index.tsx");
/* harmony import */ var _Components_DialogEditTextListItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @Components/DialogEditTextListItem */ "./src/components/DialogEditTextListItem.tsx");
/* harmony import */ var _Activitys_SearchActivity__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @Activitys/SearchActivity */ "./src/activitys/SearchActivity.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _hoc_withRequireNewVersion__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../hoc/withRequireNewVersion */ "./src/hoc/withRequireNewVersion.tsx");
/* harmony import */ var _Components_CodeBlock__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @Components/CodeBlock */ "./src/components/CodeBlock.tsx");
/* harmony import */ var _Components_icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @Components/icons/VerifiedIcon */ "./src/components/icons/VerifiedIcon.tsx");
/* harmony import */ var _Native_IsolatedEval_IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @Native/IsolatedEval/IsolatedFunctionBlockError */ "./src/native/IsolatedEval/IsolatedFunctionBlockError.ts");
/* harmony import */ var _Native_Terminal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @Native/Terminal */ "./src/native/Terminal.ts");
/* harmony import */ var _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @Hooks/useFetch */ "./src/hooks/useFetch.ts");






























const libraries = {
    react: {
        ...__webpack_require__(/*! react */ "./node_modules/react/index.js"),
        createElement(type, props, ...children) {
            switch (type) {
                // prevents webview url change
                case "a":
                    return react__WEBPACK_IMPORTED_MODULE_23___default().createElement(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_2__.Anchor, props, ...children);
                case "iframe":
                    throw new _Native_IsolatedEval_IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_27__.IsolatedFunctionBlockError("iframe");
                default:
                    return react__WEBPACK_IMPORTED_MODULE_23___default().createElement(type, props, ...children);
            }
        },
    },
    "@mui/material": __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/index.js"),
    "@mui/lab": __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/index.js"),
    "@mui/icons-material": __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/index.js"),
    "@mmrl/terminal": _Native_Os__WEBPACK_IMPORTED_MODULE_14__.os.isAndroid ? _Native_Terminal__WEBPACK_IMPORTED_MODULE_28__.Terminal : {},
    "flatlist-react": (__webpack_require__(/*! flatlist-react */ "./node_modules/flatlist-react/lib/index.js")["default"]),
    onsenui: (__webpack_require__(/*! onsenui */ "./node_modules/onsenui/esm/index.js")["default"]),
    "@mmrl/activity": {
        SearchActivity: _Activitys_SearchActivity__WEBPACK_IMPORTED_MODULE_22__.SearchActivity,
        PicturePreviewActivity: _Activitys_PicturePreviewActivity__WEBPACK_IMPORTED_MODULE_18__["default"],
    },
    // high order components
    "@mmrl/hoc": {
        withRequireNewVersion: _hoc_withRequireNewVersion__WEBPACK_IMPORTED_MODULE_24__.withRequireNewVersion,
    },
    "@mmrl/icons": {
        VerifiedIcon: _Components_icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_26__.VerifiedIcon,
    },
    "@mmrl/ui": {
        Anchor: _Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_2__.Anchor,
        Page: _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page,
        BottomToolbar: _Components_onsenui_BottomToolbar__WEBPACK_IMPORTED_MODULE_4__.BottomToolbar,
        Tabbar: _Components_onsenui_Tabbar__WEBPACK_IMPORTED_MODULE_6__.Tabbar,
        Toolbar: _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_11__.Toolbar,
        Video: _Components_dapi_Video__WEBPACK_IMPORTED_MODULE_0__.Video,
        DiscordWidget: _Components_dapi_DiscordWidget__WEBPACK_IMPORTED_MODULE_3__.DiscordWidget,
        Markdown: _Components_Markdown__WEBPACK_IMPORTED_MODULE_20__.Markup,
        ListItemDialogEditText: _Components_DialogEditTextListItem__WEBPACK_IMPORTED_MODULE_21__.DialogEditTextListItem,
        Image: _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_1__.Image,
        Ansi: _Components_Ansi__WEBPACK_IMPORTED_MODULE_13__.Ansi,
        CodeBlock: _Components_CodeBlock__WEBPACK_IMPORTED_MODULE_25__.CodeBlock,
    },
    "@mmrl/hooks": {
        useConfirm: material_ui_confirm__WEBPACK_IMPORTED_MODULE_19__.useConfirm,
        useFetch: _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_29__.useFetch,
        useConfig: _Hooks_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_16__.useConfig,
        useModFS: _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_17__.useModFS,
        useActivity: _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_10__.useActivity,
        useNativeProperties: _Hooks_useNativeProperties__WEBPACK_IMPORTED_MODULE_9__.useNativeProperties,
        useNativeFileStorage: _Hooks_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_16__.useNativeFileStorage,
        useNativeStorage: _Hooks_useNativeStorage__WEBPACK_IMPORTED_MODULE_8__.useNativeStorage,
        useTheme: _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__.useTheme,
        useSettings: _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_15__.useSettings,
        useStrings: _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_12__.useStrings,
    },
    "@mmrl/providers": {
        ConfigProvider: _Hooks_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_16__.ConfigProvider,
        StringsProvider: _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_12__.StringsProvider,
    },
    modfs: __webpack_require__(/*! modfs */ "./node_modules/modfs/dist/index.js"),
    "default-composer": __webpack_require__(/*! default-composer */ "./node_modules/default-composer/dist/index.js"),
};


/***/ }),

/***/ "./src/activitys/ModConfActivity/index.tsx":
/*!*************************************************!*\
  !*** ./src/activitys/ModConfActivity/index.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModConfActivity: () => (/* binding */ ModConfActivity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _Activitys_ModConfActivity_components_ModConfView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Activitys/ModConfActivity/components/ModConfView */ "./src/activitys/ModConfActivity/components/ModConfView/index.tsx");
/* harmony import */ var _ModConfPlaygroundActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ModConfPlaygroundActivity */ "./src/activitys/ModConfPlaygroundActivity.tsx");






const ModConfActivity = () => {
    const { extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_1__.useActivity)();
    const config = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => {
        const notFound = 'import {Page} from "@mmrl/ui";export default () => <Page>Config file not found</Page>';
        const file = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_3__.SuFile(extra.indexFile);
        if (file.exist()) {
            return file.read();
        }
        else {
            return notFound;
        }
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ModConfPlaygroundActivity__WEBPACK_IMPORTED_MODULE_5__.PreviewErrorBoundary, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Activitys_ModConfActivity_components_ModConfView__WEBPACK_IMPORTED_MODULE_4__.ModConfView, { cwd: extra.cwd, indexFile: extra.indexFile, modid: extra.modId, children: config }) }));
};



/***/ }),

/***/ "./src/activitys/ModConfPlaygroundActivity.tsx":
/*!*****************************************************!*\
  !*** ./src/activitys/ModConfPlaygroundActivity.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreviewErrorBoundary: () => (/* binding */ PreviewErrorBoundary),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _mui_icons_material_Preview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Preview */ "./node_modules/@mui/icons-material/Preview.js");
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @monaco-editor/react */ "./node_modules/@monaco-editor/react/dist/index.mjs");
/* harmony import */ var _Components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/ErrorBoundary */ "./src/components/ErrorBoundary.tsx");
/* harmony import */ var _Util_editorTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Util/editorTheme */ "./src/util/editorTheme.ts");
/* harmony import */ var _Activitys_ModConfActivity_components_ModConfView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Activitys/ModConfActivity/components/ModConfView */ "./src/activitys/ModConfActivity/components/ModConfView/index.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useNativeFileStorage */ "./src/hooks/useNativeFileStorage.tsx");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/dapi/Pre */ "./src/components/dapi/Pre.tsx");
/* harmony import */ var _Components_dapi_Code__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/dapi/Code */ "./src/components/dapi/Code.tsx");

















const preElementStyle = (theme) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    borderRadius: theme.shape.borderRadius / theme.shape.borderRadius,
    lineHeight: 1.45,
    overflow: "auto",
    padding: 2,
});
class PreviewErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.state = _Components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__.errorBoundaryInitialState;
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }
    render() {
        if (this.state.hasError) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { sx: { p: 1 }, renderToolbar: () => {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: "Complile error" }) }));
                }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_12__.Pre, { sx: preElementStyle, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Code__WEBPACK_IMPORTED_MODULE_13__.Code, { children: this.state.error.message }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_12__.Pre, { sx: preElementStyle, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Code__WEBPACK_IMPORTED_MODULE_13__.Code, { children: this.state.errorInfo.componentStack }) })] }));
        }
        return this.props.children;
    }
}
const createDependencyProposals = (monaco, range) => {
    // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
    // here you could do a server side lookup
    return [
        {
            label: "native",
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "",
            insertText: "native",
            range: range,
        },
        {
            label: "ignore",
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "",
            insertText: "// @ts-ignore",
            range: range,
        },
    ];
};
const editorDidMount = (editor, monaco) => {
    monaco.editor.defineTheme("editorTheme", _Util_editorTheme__WEBPACK_IMPORTED_MODULE_7__["default"]);
    monaco.editor.setTheme("editorTheme");
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: true,
    });
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        jsx: monaco.languages.typescript.JsxEmit.React,
        jsxFactory: "React.createElement",
        reactNamespace: "React",
        allowNonTsExtensions: true,
        allowJs: true,
        target: monaco.languages.typescript.ScriptTarget.ES2015,
    });
    monaco.languages.registerCompletionItemProvider("javascript", {
        provideCompletionItems: (model, position) => {
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
            };
            return {
                suggestions: createDependencyProposals(monaco, range),
            };
        },
    });
    editor.focus();
};
const ModConfPlaygroundActivity = () => {
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_4__.useActivity)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_9__.useStrings)();
    const { modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_11__.useModFS)();
    const [description, setDescription] = (0,_Hooks_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_10__.useNativeFileStorage)(modFS("MODCONF_PLAYGROUND"), extra.defaultText || "");
    const [errBoundKey, setErrBoundKey] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const isLargeScreen = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_14__["default"])("(min-width:600px)");
    const handlePreview = () => {
        context.pushPage({
            component: _Activitys_ModConfActivity_components_ModConfView__WEBPACK_IMPORTED_MODULE_8__.ModConfView,
            key: extra.title,
            extra: {
                modulename: "Preview",
            },
            props: {
                cwd: modFS("MMRLFOL"),
                indexFile: modFS("MODCONF_PLAYGROUND"),
                modid: modFS("MODCONF_PLAYGROUND_MODID"),
                children: description,
            },
        });
    };
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: strings("modconf_playground") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Right, { children: !isLargeScreen && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Button, { icon: _mui_icons_material_Preview__WEBPACK_IMPORTED_MODULE_15__["default"], onClick: handlePreview }) })] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", { style: { padding: 8, height: "100%", width: "100%", display: "flex", flexDirection: "column" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { flex: 1, display: "flex", marginTop: 4 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { style: {
                        height: "100%",
                        width: "100%",
                    }, direction: "row", justifyContent: "center", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Preview, { sx: { border: "unset" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_5__["default"], { height: "100%", width: "100%", language: extra.editorMode, value: description, onChange: (value) => {
                                    if (value) {
                                        setErrBoundKey((prev) => prev + 1);
                                        setDescription(value);
                                    }
                                }, onMount: editorDidMount, options: {
                                    autoIndent: "full",
                                    contextmenu: true,
                                    fontFamily: "monospace",
                                    fontSize: 13,
                                    lineHeight: 24,
                                    hideCursorInOverviewRuler: true,
                                    matchBrackets: "always",
                                    minimap: {
                                        enabled: false,
                                    },
                                    scrollbar: {
                                        horizontalSliderSize: 4,
                                        verticalSliderSize: 18,
                                    },
                                    selectOnLineNumbers: true,
                                    roundedSelection: false,
                                    readOnly: false,
                                    cursorStyle: "line",
                                    automaticLayout: true,
                                } }) }), isLargeScreen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Preview, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { id: "ModConf-Container", component: "section", sx: { position: "relative", width: "100%", height: "100%" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PreviewErrorBoundary, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Activitys_ModConfActivity_components_ModConfView__WEBPACK_IMPORTED_MODULE_8__.ModConfView, { cwd: modFS("MMRLFOL"), indexFile: modFS("MODCONF_PLAYGROUND"), modid: modFS("MODCONF_PLAYGROUND_MODID"), children: description }) }, "preview_error_bound_key_" + errBoundKey) }) }))] }) }) }) }));
};
const Preview = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"])("div")(({ theme }) => ({
    flex: 1,
    flexBasis: "50%",
    height: "100%",
    width: "100%",
    minHeight: "100%",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderStyle: "solid",
    borderWidth: "1px",
    minWidth: "0%",
    overflow: "auto",
    borderColor: theme.palette.divider,
    section: {
        position: "absolute",
        overflowY: "scroll",
    },
    ".monaco-editor": {
        borderRadius: theme.shape.borderRadius / theme.shape.borderRadius,
    },
    ".overflow-guard": {
        borderRadius: theme.shape.borderRadius / theme.shape.borderRadius,
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModConfPlaygroundActivity);


/***/ }),

/***/ "./src/activitys/ModConfStandaloneActivity.tsx":
/*!*****************************************************!*\
  !*** ./src/activitys/ModConfStandaloneActivity.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _ModConfActivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ModConfActivity */ "./src/activitys/ModConfActivity/index.tsx");
/* harmony import */ var modfs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! modfs */ "./node_modules/modfs/dist/index.js");









const ModConfStandaloneActivity = () => {
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { modFS, _modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_4__.useModFS)();
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: "ModConf Standalone" })] }));
    };
    const mcalone = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_5__.SuFile(modFS("MCALONE"));
    if (!mcalone.exist()) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page, { renderToolbar: renderToolbar, children: "No files" });
    }
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page.RelativeContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { children: mcalone.list().map((item) => {
                    const confFile = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_5__.SuFile(modFS("MCALONEMETA", { MODID: item }));
                    if (!confFile.exist())
                        return null;
                    try {
                        const metaData = JSON.parse(confFile.read());
                        if (!metaData.id && metaData.id !== item)
                            return null;
                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { disablePadding: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { onClick: () => {
                                        context.pushPage({
                                            component: _ModConfActivity__WEBPACK_IMPORTED_MODULE_6__.ModConfActivity,
                                            key: `${metaData.id}_configure_standalone`,
                                            extra: {
                                                indexFile: metaData.main
                                                    ? modfs__WEBPACK_IMPORTED_MODULE_7__["default"].format(metaData.main, { MODID: item, ..._modFS })
                                                    : modFS("MCALONEIDX", { MODID: item }),
                                                cwd: metaData.cwd
                                                    ? modfs__WEBPACK_IMPORTED_MODULE_7__["default"].format(metaData.cwd, { MODID: item, ..._modFS })
                                                    : modFS("MCALONECWD", { MODID: item }),
                                                modId: metaData.id,
                                            },
                                        });
                                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { primary: metaData.name, secondary: metaData.description }) }) }, metaData.id) }));
                    }
                    catch {
                        return null;
                    }
                }) }) }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModConfStandaloneActivity);


/***/ }),

/***/ "./src/activitys/ModFSActivity.tsx":
/*!*****************************************!*\
  !*** ./src/activitys/ModFSActivity.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListSubheader/ListSubheader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/AvatarGroup */ "./node_modules/@mui/material/AvatarGroup/AvatarGroup.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Native_Shell__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Native/Shell */ "./src/native/Shell.ts");
/* harmony import */ var _Components_DialogEditTextListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/DialogEditTextListItem */ "./src/components/DialogEditTextListItem.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/dapi/Anchor */ "./src/components/dapi/Anchor.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flatlist-react */ "./node_modules/flatlist-react/lib/index.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flatlist_react__WEBPACK_IMPORTED_MODULE_10__);














function ModFSActivity() {
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_9__.useStrings)();
    const { _modFS, setModFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_4__.useModFS)();
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_1__.Toolbar.Center, { children: strings("modfs") })] }));
    };
    const items = react__WEBPACK_IMPORTED_MODULE_7___default().useMemo(() => [
        {
            sectionText: "Installer",
            items: [
                {
                    text: "Explore install script",
                    multiline: true,
                    maxRows: 10,
                    dialogDesc: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { children: ["Check the", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_8__.Anchor, { href: "https://github.com/DerGoogler/MMRL/tree/master/docs", noIcon: true, children: "ModFS documentations" }), " ", "for more informations!", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "<URL>" }), ", ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "<URLS>" }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "<MODID>" }), " can also be used, shell supported."] }) })),
                    confKey: "EXPLORE_INSTALL",
                },
                {
                    text: "Local install script",
                    multiline: true,
                    maxRows: 10,
                    dialogDesc: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { children: ["Check the", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_8__.Anchor, { href: "https://github.com/DerGoogler/MMRL/tree/master/docs", noIcon: true, children: "ModFS documentations" }), " ", "for more informations!", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "<ZIPFILE>" }), " and ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: "<ZIPFILES>" }), " can also be used, shell supported."] }) })),
                    confKey: "LOCAL_INSTALL",
                },
            ],
        },
        {
            sectionText: "Command line interfaces",
            items: [
                {
                    text: "Magisk install CLI",
                    disabled: !_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isMagiskSU(),
                    logoText: "assets/MagiskSULogo.png",
                    confKey: "MSUCLI",
                },
                {
                    text: "Magisk Busybox CLI",
                    disabled: !_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isMagiskSU(),
                    logoText: "assets/MagiskSULogo.png",
                    confKey: "MSUBSU",
                },
                {
                    text: "Magisk ResetProp CLI",
                    disabled: !_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isMagiskSU(),
                    logoText: "assets/MagiskSULogo.png",
                    confKey: "MSURSP",
                },
                {
                    text: "KernelSU install CLI",
                    disabled: !_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isKernelSU(),
                    logoText: "assets/KernelSULogo.png",
                    confKey: "KSUCLI",
                },
                {
                    text: "KernelSU Busybox CLI",
                    disabled: !_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isKernelSU(),
                    logoText: "assets/KernelSULogo.png",
                    confKey: "KSUBSU",
                },
                {
                    text: "KernelSU ResetProp CLI",
                    disabled: !_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isKernelSU(),
                    logoText: "assets/KernelSULogo.png",
                    confKey: "KSURSP",
                },
                {
                    text: "APatch install CLI",
                    disabled: !_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isAPatchSU(),
                    logoText: "assets/APatchSULogo.png",
                    confKey: "ASUCLI",
                },
                {
                    text: "APatch Busybox CLI",
                    disabled: !_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isAPatchSU(),
                    logoText: "assets/APatchSULogo.png",
                    confKey: "ASUBSU",
                },
                {
                    text: "APatch ResetProp CLI",
                    disabled: !_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isAPatchSU(),
                    logoText: "assets/APatchSULogo.png",
                    confKey: "ASURSP",
                },
            ],
        },
        {
            sectionText: "Default paths",
            items: [
                {
                    text: "Base path",
                    confKey: "ADB",
                },
                {
                    text: "MMRL path",
                    confKey: "MMRLFOL",
                },
                {
                    text: "Modules path",
                    confKey: "MODULES",
                },
                {
                    text: "Module work directory",
                    confKey: "MODULECWD",
                },
                {
                    text: "Module properties path",
                    confKey: "PROPS",
                },
                {
                    text: "Module system properties path",
                    confKey: "SYSTEM",
                },
                {
                    text: "Module SEPolicy rules path",
                    confKey: "SEPOLICY",
                },
            ],
        },
        {
            sectionText: "Service paths",
            items: [
                {
                    text: "Late service path",
                    confKey: "LATESERVICE",
                },
                {
                    text: "Post service path",
                    confKey: "POSTSERVICE",
                },
                {
                    text: "Post mount service path",
                    disabled: !(_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isKernelSU() || _Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isAPatchSU()),
                    logoText: ["assets/KernelSULogo.png", "assets/APatchSULogo.png"],
                    confKey: "POSTMOUNT",
                },
                {
                    text: "Boot complete service path",
                    disabled: !(_Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isKernelSU() || _Native_Shell__WEBPACK_IMPORTED_MODULE_5__.Shell.isAPatchSU()),
                    logoText: ["assets/KernelSULogo.png", "assets/APatchSULogo.png"],
                    confKey: "BOOTCOMP",
                },
            ],
        },
        {
            sectionText: "Status paths",
            items: [
                {
                    text: "Skip mount path",
                    confKey: "SKIPMOUNT",
                },
                {
                    text: "Disable path",
                    confKey: "DISABLE",
                },
                {
                    text: "Remove path",
                    confKey: "REMOVE",
                },
                {
                    text: "Update path",
                    confKey: "UPDATE",
                },
            ],
        },
        {
            sectionText: "ModConf",
            items: [
                {
                    text: "Config working directory",
                    confKey: "CONFCWD",
                },
                {
                    text: "Config index file",
                    confKey: "CONFINDEX",
                },
                {
                    text: "ModConf Playground Root",
                    dialogDesc: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { children: ["Check the", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_8__.Anchor, { href: "https://github.com/DerGoogler/MMRL/tree/master/docs", noIcon: true, children: "ModConf documentations" }), " ", "for more informations!"] }) })),
                    confKey: "MODCONF_PLAYGROUND",
                },
                {
                    text: "ModConf Playground Module ID",
                    confKey: "MODCONF_PLAYGROUND_MODID",
                },
            ],
        },
        // {
        //   sectionText: "ModConf Standalone",
        //   items: [
        //     {
        //       text: "Standalone root directory",
        //       confKey: "MCALONE",
        //     },
        //     {
        //       text: "Standalone working directory",
        //       confKey: "MCALONECWD",
        //     },
        //     {
        //       text: "Stadnalone meta file",
        //       confKey: "MCALONEMTA",
        //     },
        //   ],
        // },
    ], []);
    const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_7___default().useState("");
    const handleSearch = () => { };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_2__.Page.RelativeContent, { zeroMargin: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: { m: { xs: 1, md: 1 }, whiteSpace: "normal" }, severity: "error", children: "I am not responsible for anything that may happen to your phone by changing these informations. You do it at your own risk and take the responsibility upon yourself and you are not to blame us or MMRL and its respected developers" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { label: "Search", variant: "outlined", sx: { m: 1 }, onChange: (e) => setSearch(e.target.value) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((flatlist_react__WEBPACK_IMPORTED_MODULE_10___default()), { list: items, renderItem: (section) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], { children: section.sectionText }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((flatlist_react__WEBPACK_IMPORTED_MODULE_10___default()), { list: section.items, search: {
                                        by: ["text", "confKey", "dialogDesc"],
                                        onEveryWord: true,
                                        caseInsensitive: true,
                                        term: search,
                                    }, renderItem: (item) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_DialogEditTextListItem__WEBPACK_IMPORTED_MODULE_6__.DialogEditTextListItem, { inputLabel: "Path", type: "text", title: item.text, disabled: item.disabled, description: item.dialogDesc, initialValue: _modFS[item.confKey], onSuccess: (value) => {
                                            if (value) {
                                                setModFS(item.confKey, value);
                                            }
                                        }, multiline: item.multiline, maxRows: item.maxRows, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { primary: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { direction: "column", justifyContent: "center", alignItems: "flex-start", spacing: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { variant: "caption", children: `<${item.confKey}>` }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { sx: { fontSize: "unset" }, children: [" ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { sx: { display: "flex", alignItems: "center", justifyItems: "center", whiteSpace: "normal" }, children: [item.logoText && Array.isArray(item.logoText) ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AvatarGroup__WEBPACK_IMPORTED_MODULE_19__["default"], { sx: { mr: 1 }, children: item.logoText.map((logo) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_20__["default"], { sx: { borderRadius: "unset", width: "1rem", height: "1rem" }, src: logo }))) }) })) : (item.logoText && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_20__["default"], { sx: { borderRadius: "unset", mr: 1, width: "1rem", height: "1rem" }, src: item.logoText }))), item.text] })] })] }), secondary: _modFS[item.confKey] }) })), renderOnScroll: true, renderWhenEmpty: () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], {})] })), renderOnScroll: true, renderWhenEmpty: () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) })] }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModFSActivity);


/***/ }),

/***/ "./src/activitys/ModuleViewActivity/index.tsx":
/*!****************************************************!*\
  !*** ./src/activitys/ModuleViewActivity/index.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleViewActivity: () => (/* binding */ ModuleViewActivity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Activitys_InstallTerminalV2Activity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Activitys/InstallTerminalV2Activity */ "./src/activitys/InstallTerminalV2Activity.tsx");
/* harmony import */ var _Components_icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/icons/VerifiedIcon */ "./src/components/icons/VerifiedIcon.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useOpenModuleSearch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useOpenModuleSearch */ "./src/hooks/useOpenModuleSearch.tsx");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Native_Shell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Native/Shell */ "./src/native/Shell.ts");
/* harmony import */ var _Native_View__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Native/View */ "./src/native/View.ts");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/VolunteerActivism.js");
/* harmony import */ var _mui_icons_material_Telegram__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material/Telegram */ "./node_modules/@mui/icons-material/Telegram.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material/CardMedia */ "./node_modules/@mui/material/CardMedia/CardMedia.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Fade__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Fade */ "./node_modules/@mui/material/Fade/Fade.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/SvgIcon */ "./node_modules/@mui/material/SvgIcon/SvgIcon.js");
/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/Tab */ "./node_modules/@mui/material/Tab/Tab.js");
/* harmony import */ var _mui_material_Tabs__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Tabs */ "./node_modules/@mui/material/Tabs/Tabs.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var material_ui_confirm__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! material-ui-confirm */ "./node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_disappear__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-disappear */ "./node_modules/react-disappear/dist/index.js");
/* harmony import */ var _tabs_AboutTabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tabs/AboutTabs */ "./src/activitys/ModuleViewActivity/tabs/AboutTabs.tsx");
/* harmony import */ var _tabs_OverviewTab__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tabs/OverviewTab */ "./src/activitys/ModuleViewActivity/tabs/OverviewTab.tsx");
/* harmony import */ var _tabs_VersionsTab__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./tabs/VersionsTab */ "./src/activitys/ModuleViewActivity/tabs/VersionsTab.tsx");
/* harmony import */ var _Components_DropdownButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Components/DropdownButton */ "./src/components/DropdownButton.tsx");
/* harmony import */ var _Hooks_useModuleInfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @Hooks/useModuleInfo */ "./src/hooks/useModuleInfo.ts");
/* harmony import */ var _Hooks_useFormatBytes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @Hooks/useFormatBytes */ "./src/hooks/useFormatBytes.ts");


































function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { role: "tabpanel", hidden: value !== index, id: `simple-tabpanel-${index}`, "aria-labelledby": `simple-tab-${index}`, ...other, children: value === index && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__["default"], { children: children }) }));
}
const ModuleViewActivity = () => {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_8__.useStrings)();
    const confirm = (0,material_ui_confirm__WEBPACK_IMPORTED_MODULE_13__.useConfirm)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    const { modules } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_7__.useRepos)();
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__.useActivity)();
    const { id, name, version, versionCode, author, versions, track } = extra;
    const { cover, icon, verified, donate, support, latestVersion, timestamp, size } = (0,_Hooks_useModuleInfo__WEBPACK_IMPORTED_MODULE_20__.useModuleInfo)(extra);
    const [moduleFileSize, moduleFileSizeByteText] = (0,_Hooks_useFormatBytes__WEBPACK_IMPORTED_MODULE_21__.useFormatBytes)(size);
    const search = react__WEBPACK_IMPORTED_MODULE_14___default().useMemo(() => new URLSearchParams(window.location.search), [window.location.search]);
    const handleOpenModuleSearch = (0,_Hooks_useOpenModuleSearch__WEBPACK_IMPORTED_MODULE_6__.useOpenModuleSearch)(modules);
    react__WEBPACK_IMPORTED_MODULE_14___default().useEffect(() => {
        search.set("module", id);
        const newRelativePathQuery = window.location.pathname + "?" + search.toString();
        history.pushState(null, "", newRelativePathQuery);
        return () => {
            search.delete("module");
            const newRelativePathQuery = window.location.pathname + search.toString();
            history.pushState(null, "", newRelativePathQuery);
        };
    }, []);
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, { modifier: "noshadow", sx: {
                ...(cover
                    ? {
                        // invert
                        backgroundColor: !isNameVisible ? "transparent" : theme.palette.background.default,
                        transition: " background-color 0.05s linear",
                    }
                    : {}),
            }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Center, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Fade__WEBPACK_IMPORTED_MODULE_23__["default"], { in: isNameVisible, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: name }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Right, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Button, { icon: _mui_icons_material_Telegram__WEBPACK_IMPORTED_MODULE_24__["default"], onClick: () => {
                            _Native_Os__WEBPACK_IMPORTED_MODULE_10__.os.open(`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Check out this module on MMRL. Requires a machted repo to open this module. ")}`, {
                                target: "_blank",
                                features: {
                                    color: theme.palette.primary.main,
                                },
                            });
                        } }) })] }));
    };
    const [isNameVisible, setIsNameVisible] = react__WEBPACK_IMPORTED_MODULE_14___default().useState(true);
    const boxRef = react__WEBPACK_IMPORTED_MODULE_14___default().useRef(null);
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_14___default().useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { modifier: "noshadow", renderToolbar: renderToolbar, backgroundStyle: {
            ...(cover ? { top: `0px !important` } : {}),
        }, sx: {
            ...(cover ? { top: `0px !important` } : {}),
        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__["default"], { ref: boxRef, component: "div", sx: {
                    position: "relative",
                    zIndex: 9,
                    backgroundColor: theme.palette.background.default,
                    color: "white",
                }, children: [cover && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__["default"], { sx: (theme) => ({
                            background: `linear-gradient(to top,${theme.palette.background.default} 0,rgba(0,0,0,0) calc(56% - ${_Native_View__WEBPACK_IMPORTED_MODULE_12__.view.getWindowTopInsets()}px))`,
                        }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_25__["default"], { component: "img", sx: {
                                    filter: `url(#${id}-cover-blur)`,
                                    zIndex: -1,
                                    display: "block",
                                    position: "relative",
                                    height: {
                                        sm: `calc(calc(50vw - 48px + ${_Native_View__WEBPACK_IMPORTED_MODULE_12__.view.getWindowTopInsets()}px)*9/16)`,
                                        xs: `calc(calc(100vw - 48px + ${_Native_View__WEBPACK_IMPORTED_MODULE_12__.view.getWindowTopInsets()}px)*9/16)`,
                                    },
                                    objectFit: "cover",
                                }, image: cover, alt: name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_SvgIcon__WEBPACK_IMPORTED_MODULE_26__["default"], { sx: { display: "none" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("filter", { id: `${id}-cover-blur`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feGaussianBlur", { stdDeviation: "3" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feColorMatrix", { type: "matrix", values: "1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("feComposite", { in2: "SourceGraphic", operator: "in" })] }) }) }) })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__["default"], { sx: (theme) => ({
                            pt: cover ? 0 : 2,
                            pl: 2,
                            pr: 2,
                            pb: 2,
                            backgroundColor: theme.palette.background.default,
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__["default"], { sx: {
                                    display: "flex",
                                    width: "100%",
                                }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_27__["default"], { alt: name, sx: (theme) => ({
                                            bgcolor: theme.palette.primary.dark,
                                            width: 100,
                                            height: 100,
                                            boxShadow: "0 -1px 5px rgba(0,0,0,.09), 0 3px 5px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.3), 0 1px 3px rgba(0,0,0,.15)",
                                            borderRadius: "20%",
                                            mr: 1.5,
                                            fontSize: 50,
                                        }), src: icon, children: name.charAt(0).toUpperCase() }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_22__["default"], { sx: { alignSelf: "center", ml: 0.5, mr: 0.5, width: "100%" }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__["default"], { direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 0.5, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_disappear__WEBPACK_IMPORTED_MODULE_15__.Disappear, { as: _mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], variant: "body1", fontWeight: "bold", onDisappear: (visible) => setIsNameVisible(!visible), children: name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_2__.VerifiedIcon, { isVerified: verified })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], { variant: "body2", onClick: () => handleOpenModuleSearch(author), sx: {
                                                    ":hover": {
                                                        cursor: "pointer",
                                                    },
                                                }, color: "text.link", children: author })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__["default"], { sx: {
                                    mt: 3,
                                    display: "flex",
                                    width: "100%",
                                }, direction: "column", justifyContent: "center", alignItems: "flex-start", spacing: 1, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__["default"], { sx: {
                                        display: "flex",
                                        width: "100%",
                                    }, direction: { xs: "column", sm: "row" }, justifyContent: "space-between", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__["default"], { sx: { display: "flex" }, direction: "row", divider: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_30__["default"], { sx: {
                                                    height: "24px",
                                                    alignSelf: "center",
                                                }, orientation: "vertical" }), spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__["default"], { direction: "column", justifyContent: "center", alignItems: "stretch", spacing: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], { variant: "body2", align: "center", children: version }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], { variant: "caption", display: "block", align: "center", color: "text.secondary", children: "name" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__["default"], { direction: "column", justifyContent: "center", alignItems: "stretch", spacing: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], { variant: "body2", align: "center", children: versionCode }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], { variant: "caption", display: "block", align: "center", color: "text.secondary", children: "code" })] }), size && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__["default"], { direction: "column", justifyContent: "center", alignItems: "stretch", spacing: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], { variant: "body2", align: "center", children: moduleFileSize }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], { variant: "caption", display: "block", align: "center", color: "text.secondary", children: moduleFileSizeByteText })] })), donate && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__["default"], { direction: "column", justifyContent: "center", alignItems: "stretch", spacing: 0, onClick: () => {
                                                        _Native_Os__WEBPACK_IMPORTED_MODULE_10__.os.open(donate, {
                                                            target: "_blank",
                                                            features: {
                                                                color: theme.palette.primary.main,
                                                            },
                                                        });
                                                    }, sx: { cursor: "pointer" }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], { variant: "body2", align: "center", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_31__["default"], { sx: { fontSize: "0.875rem" } }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_29__["default"], { variant: "caption", display: "block", align: "center", color: "text.secondary", children: "donate" })] }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_28__["default"], { direction: "row", justifyContent: "center", alignItems: "center", spacing: 1, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_DropdownButton__WEBPACK_IMPORTED_MODULE_19__.DropdownButton, { sx: {
                                                    width: "100%",
                                                    "& .MuiButtonGroup-root": {
                                                        width: "100%",
                                                    },
                                                    "& .MuiButton-root:first-child": {
                                                        width: "100%",
                                                    },
                                                }, options: [
                                                    {
                                                        children: strings("download"),
                                                        disabled: !latestVersion.zipUrl,
                                                        onClick: () => {
                                                            _Native_Os__WEBPACK_IMPORTED_MODULE_10__.os.open(latestVersion.zipUrl, {
                                                                target: "_blank",
                                                                features: {
                                                                    color: theme.palette.primary.main,
                                                                },
                                                            });
                                                        },
                                                    },
                                                    {
                                                        children: strings("install"),
                                                        disabled: !(_Native_Os__WEBPACK_IMPORTED_MODULE_10__.os.isAndroid && (_Native_Shell__WEBPACK_IMPORTED_MODULE_11__.Shell.isMagiskSU() || _Native_Shell__WEBPACK_IMPORTED_MODULE_11__.Shell.isKernelSU() || _Native_Shell__WEBPACK_IMPORTED_MODULE_11__.Shell.isAPatchSU())),
                                                        onClick: () => {
                                                            confirm({
                                                                title: strings("install_module", { name: name }),
                                                                description: strings("install_module_dialog_desc", { name: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: name }) }),
                                                                confirmationText: "Yes",
                                                            }).then(() => {
                                                                context.pushPage({
                                                                    component: _Activitys_InstallTerminalV2Activity__WEBPACK_IMPORTED_MODULE_1__.InstallTerminalV2Activity,
                                                                    key: "InstallTerminalV2Activity",
                                                                    extra: {
                                                                        issues: support,
                                                                        source: track.source,
                                                                        id: id,
                                                                        exploreInstall: true,
                                                                        modSource: [latestVersion.zipUrl],
                                                                    },
                                                                });
                                                            });
                                                        },
                                                    },
                                                    {
                                                        children: strings("update"),
                                                        disabled: true,
                                                        onClick: () => {
                                                            console.log("Rebase and merge");
                                                        },
                                                    },
                                                ] }) })] }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Tabs__WEBPACK_IMPORTED_MODULE_32__["default"], { value: value, onChange: handleChange, indicatorColor: "secondary", textColor: "inherit", variant: "fullWidth", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_33__["default"], { label: strings("overview"), ...a11yProps(0) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_33__["default"], { label: strings("versions"), ...a11yProps(1) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_33__["default"], { label: strings("about"), ...a11yProps(2) })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page.RelativeContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomTabPanel, { value: value, index: 0, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tabs_OverviewTab__WEBPACK_IMPORTED_MODULE_17__.OverviewTab, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomTabPanel, { value: value, index: 1, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tabs_VersionsTab__WEBPACK_IMPORTED_MODULE_18__.VersionsTab, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CustomTabPanel, { value: value, index: 2, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tabs_AboutTabs__WEBPACK_IMPORTED_MODULE_16__.AboutTab, {}) })] })] }));
};



/***/ }),

/***/ "./src/activitys/ModuleViewActivity/tabs/AboutTabs.tsx":
/*!*************************************************************!*\
  !*** ./src/activitys/ModuleViewActivity/tabs/AboutTabs.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutTab: () => (/* binding */ AboutTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_icons_material_BugReport__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/BugReport */ "./node_modules/@mui/icons-material/BugReport.js");
/* harmony import */ var _mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/ListItemIcon */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_icons_material_Verified__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Verified */ "./node_modules/@mui/icons-material/Verified.js");
/* harmony import */ var _mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/GitHub */ "./node_modules/@mui/icons-material/GitHub.js");
/* harmony import */ var _mui_icons_material_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/FormatAlignLeft */ "./node_modules/@mui/icons-material/FormatAlignLeft.js");
/* harmony import */ var _FetchTextActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../FetchTextActivity */ "./src/activitys/FetchTextActivity.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Hooks_useModuleInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useModuleInfo */ "./src/hooks/useModuleInfo.ts");
















const AboutTab = () => {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_2__.useStrings)();
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const { track } = extra;
    const { license, verified, support } = (0,_Hooks_useModuleInfo__WEBPACK_IMPORTED_MODULE_6__.useModuleInfo)(extra);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_List__WEBPACK_IMPORTED_MODULE_7__["default"], { children: [verified && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_8__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Verified__WEBPACK_IMPORTED_MODULE_10__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], { primary: strings("verified_module"), secondary: strings("verified_module_desc") })] })), license && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__["default"], { onClick: () => {
                    fetch(`https://raw.githubusercontent.com/spdx/license-list-data/main/website/${license}.json`)
                        .then((res) => {
                        if (res.status === 200) {
                            return res.json();
                        }
                        else {
                            throw new Error("Fetching license failed");
                        }
                    })
                        .then((json) => {
                        context.pushPage({
                            component: _FetchTextActivity__WEBPACK_IMPORTED_MODULE_1__["default"],
                            key: "license_" + license,
                            extra: {
                                raw_data: json.licenseText,
                                modulename: json.name,
                            },
                        });
                    })
                        .catch((err) => { });
                }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_FormatAlignLeft__WEBPACK_IMPORTED_MODULE_13__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], { primary: strings("license"), secondary: license })] })), support && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__["default"], { onClick: () => {
                    _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.open(support, {
                        target: "_blank",
                        features: {
                            color: theme.palette.primary.main,
                        },
                    });
                }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_BugReport__WEBPACK_IMPORTED_MODULE_14__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], { primary: "Issues", secondary: support })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_12__["default"], { onClick: () => {
                    _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.open(track.source, {
                        target: "_blank",
                        features: {
                            color: theme.palette.primary.main,
                        },
                    });
                }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemIcon__WEBPACK_IMPORTED_MODULE_9__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_GitHub__WEBPACK_IMPORTED_MODULE_15__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_11__["default"], { primary: strings("source"), secondary: track.source })] })] }));
};



/***/ }),

/***/ "./src/activitys/ModuleViewActivity/tabs/OverviewTab.tsx":
/*!***************************************************************!*\
  !*** ./src/activitys/ModuleViewActivity/tabs/OverviewTab.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewTab: () => (/* binding */ OverviewTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material/ArrowForward */ "./node_modules/@mui/icons-material/ArrowForward.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_ImageList__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/ImageList */ "./node_modules/@mui/material/ImageList/ImageList.js");
/* harmony import */ var _mui_material_ImageListItem__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/ImageListItem */ "./node_modules/@mui/material/ImageListItem/ImageListItem.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/AlertTitle */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _DescriptonActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../DescriptonActivity */ "./src/activitys/DescriptonActivity.tsx");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _Hooks_useLowQualityModule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useLowQualityModule */ "./src/hooks/useLowQualityModule.ts");
/* harmony import */ var _Components_AntiFeatureListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/AntiFeatureListItem */ "./src/components/AntiFeatureListItem.tsx");
/* harmony import */ var _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/dapi/Image */ "./src/components/dapi/Image.tsx");
/* harmony import */ var _Hooks_useCategories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useCategories */ "./src/hooks/useCategories.ts");
/* harmony import */ var _Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useFormatDate */ "./src/hooks/useFormatDate.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .. */ "./src/activitys/ModuleViewActivity/index.tsx");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var _Util_blacklisted_modules__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Util/blacklisted-modules */ "./src/util/blacklisted-modules.ts");
/* harmony import */ var _Hooks_useModuleInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Hooks/useModuleInfo */ "./src/hooks/useModuleInfo.ts");
/* harmony import */ var _Native_Build__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Native/Build */ "./src/native/Build.ts");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Hooks/useFetch */ "./src/hooks/useFetch.ts");


































const colorHandler = (color) => {
    switch (color) {
        case "green":
        case "success":
            return "success";
        case "info":
        case "blue":
            return "info";
        case "warning":
        case "yellow":
            return "warning";
        case "error":
        case "red":
            return "error";
        default:
            return "info";
    }
};
const OverviewTab = () => {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__.useStrings)();
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_5__.useSettings)();
    const { modules } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_12__.useRepos)();
    const { id, name, description, versions, minApi, note, track } = extra;
    const { icon, screenshots, require, readme: moduleReadme, categories } = (0,_Hooks_useModuleInfo__WEBPACK_IMPORTED_MODULE_14__.useModuleInfo)(extra);
    const { filteredCategories } = (0,_Hooks_useCategories__WEBPACK_IMPORTED_MODULE_9__.useCategories)(categories);
    const isLowQuality = (0,_Hooks_useLowQualityModule__WEBPACK_IMPORTED_MODULE_6__.useLowQualityModule)(extra, !settings._low_quality_module);
    const latestVersion = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => versions[versions.length - 1], [versions]);
    const formatLastUpdate = (0,_Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_10__.useFormatDate)(latestVersion.timestamp);
    const findHardCodedAntifeature = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => {
        return [...(track.antifeatures || []), ...(_Util_blacklisted_modules__WEBPACK_IMPORTED_MODULE_13__.blacklistedModules.find((mod) => mod.id === id)?.antifeatures || [])];
    }, [id, track.antifeatures]);
    const [readme] = (0,_Hooks_useFetch__WEBPACK_IMPORTED_MODULE_17__.useFetch)(moduleReadme, { type: "text" });
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_18__["default"], { direction: "column", justifyContent: "center", alignItems: "flex-start", spacing: 1, children: [note && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_19__["default"], { sx: { width: "100%" }, severity: colorHandler(note.color), children: [note.title && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_20__["default"], { children: note.title }), note.message] })), isLowQuality && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_19__["default"], { sx: { width: "100%" }, severity: "warning", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_AlertTitle__WEBPACK_IMPORTED_MODULE_20__["default"], { children: strings("low_quality_module") }), strings("low_quality_module_warn")] })), minApi && minApi > _Native_Os__WEBPACK_IMPORTED_MODULE_16__.os.sdk && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_19__["default"], { sx: { width: "100%" }, severity: "warning", children: strings("module_require_android_ver", { andro_ver: _Native_Build__WEBPACK_IMPORTED_MODULE_15__.Build.parseVersion(minApi) }) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_21__["default"], { sx: {
                        width: "100%",
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_22__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_18__["default"], { component: _mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], sx: {
                                    alignItems: "center",
                                }, direction: "row", justifyContent: { xs: "space-between", sm: "row" }, spacing: 1, gutterBottom: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], { variant: "h5", component: "div", children: strings("about_this_module") }), readme && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_24__["default"], { onClick: () => {
                                            context.pushPage({
                                                component: _DescriptonActivity__WEBPACK_IMPORTED_MODULE_4__["default"],
                                                key: "DescriptonActivity",
                                                extra: {
                                                    desc: readme,
                                                    name: name,
                                                    logo: icon,
                                                },
                                            });
                                        }, sx: { ml: 0.5 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ArrowForward__WEBPACK_IMPORTED_MODULE_25__["default"], {}) }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], { variant: "body2", color: "text.secondary", children: description }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], { sx: { mt: 3 }, variant: "h6", component: "div", children: [strings("updated_on"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], { sx: { fontSize: "0.875rem" }, variant: "body2", component: "div", color: "text.secondary", children: formatLastUpdate })] }), filteredCategories.length !== 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_26__["default"], { sx: {
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: "16px 12px",
                                    mt: 3.5,
                                }, children: filteredCategories.map((category) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_27__["default"], { label: category, variant: "outlined" }))) }))] }) }), findHardCodedAntifeature && findHardCodedAntifeature.length !== 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_21__["default"], { sx: {
                        width: "100%",
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_22__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_18__["default"], { component: _mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], sx: {
                                    alignItems: "center",
                                }, variant: "h5", direction: "row", justifyContent: { xs: "space-between", sm: "row" }, spacing: 1, gutterBottom: true, children: strings("antifeatures") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], { disablePadding: true, children: typeof findHardCodedAntifeature === "string" ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_AntiFeatureListItem__WEBPACK_IMPORTED_MODULE_7__["default"], { type: findHardCodedAntifeature })) : (Array.isArray(findHardCodedAntifeature) && findHardCodedAntifeature.map((anti) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_AntiFeatureListItem__WEBPACK_IMPORTED_MODULE_7__["default"], { type: anti }))) })] }) })), require && require.length !== 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_21__["default"], { sx: {
                        width: "100%",
                    }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_22__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], { variant: "h5", component: "div", children: "Dependencies" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_26__["default"], { sx: {
                                display: "flex",
                                flexDirection: {
                                    xs: "column", // mobile
                                    sm: "row", // tablet and up
                                },
                            }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_28__["default"], { disablePadding: true, sx: { width: { xs: "100%" } }, children: require.map((req) => {
                                    const findRequire = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => modules.find((module) => module.id === req), [modules]);
                                    if (findRequire) {
                                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_29__["default"], { onClick: () => {
                                                context.pushPage({
                                                    component: ___WEBPACK_IMPORTED_MODULE_11__.ModuleViewActivity,
                                                    key: "ModuleViewActivity",
                                                    extra: findRequire,
                                                });
                                            }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_30__["default"], { primary: findRequire.name, secondary: `${findRequire.version} (${findRequire.versionCode})` }) }));
                                    }
                                    else {
                                        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_31__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_30__["default"], { primary: req }) }));
                                    }
                                }) }) })] })), screenshots && screenshots.length !== 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_21__["default"], { sx: { width: "100%" }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_22__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_23__["default"], { variant: "h5", component: "div", children: strings("images") }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ImageList__WEBPACK_IMPORTED_MODULE_32__["default"], { sx: {
                                mt: 0,
                                pt: 0,
                                p: 1,
                                overflow: "auto",
                                whiteSpace: "nowrap",
                                gridAutoFlow: "column",
                                gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr)) !important",
                                gridAutoColumns: "minmax(250px, 1fr)",
                            }, children: screenshots.map((image, i) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ImageListItem__WEBPACK_IMPORTED_MODULE_33__["default"], { sx: (theme) => ({
                                    ml: 1,
                                    mr: 1,
                                }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_26__["default"], { sx: { width: "100%" }, component: _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_8__.Image, src: image }) }))) })] }))] }) }));
};



/***/ }),

/***/ "./src/activitys/ModuleViewActivity/tabs/VersionsTab.tsx":
/*!***************************************************************!*\
  !*** ./src/activitys/ModuleViewActivity/tabs/VersionsTab.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VersionsTab: () => (/* binding */ VersionsTab)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Activitys_FetchTextActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Activitys/FetchTextActivity */ "./src/activitys/FetchTextActivity.tsx");
/* harmony import */ var _Activitys_InstallTerminalV2Activity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Activitys/InstallTerminalV2Activity */ "./src/activitys/InstallTerminalV2Activity.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useFormatDate */ "./src/hooks/useFormatDate.ts");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Native_Shell__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Native/Shell */ "./src/native/Shell.ts");
/* harmony import */ var _mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/Download */ "./node_modules/@mui/icons-material/Download.js");
/* harmony import */ var _mui_icons_material_InstallMobile__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/InstallMobile */ "./node_modules/@mui/icons-material/InstallMobile.js");
/* harmony import */ var _mui_icons_material_ManageHistory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/ManageHistory */ "./node_modules/@mui/icons-material/ManageHistory.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var material_ui_confirm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! material-ui-confirm */ "./node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);





















const VersionsTab = () => {
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { id, versions } = extra;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_11__["default"], { children: versions.toReversed().map((version, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(VersionItem, { id: id, version: version, index: index }))) }));
};
const VersionItem = react__WEBPACK_IMPORTED_MODULE_10___default().memo(({ id, version, index }) => {
    const ts = (0,_Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_4__.useFormatDate)(version.timestamp);
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const confirm = (0,material_ui_confirm__WEBPACK_IMPORTED_MODULE_9__.useConfirm)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_5__.useStrings)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const { track, support } = extra;
    const versionName = `${version.version} (${version.versionCode})`;
    const handleInstall = () => {
        confirm({
            title: `Install ${versionName}?`,
            confirmationText: "Yes",
        }).then(() => {
            context.pushPage({
                component: _Activitys_InstallTerminalV2Activity__WEBPACK_IMPORTED_MODULE_2__["default"],
                key: "InstallTerminalV2Activity",
                extra: {
                    issues: support,
                    source: track.source,
                    id: id,
                    exploreInstall: true,
                    modSource: [version.zipUrl],
                },
            });
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_12__["default"], { secondaryAction: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], { direction: "row", justifyContent: "center", alignItems: "center", spacing: 0.5, children: [version.changelog && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], { disabled: !version.changelog, onClick: () => {
                        context.pushPage({
                            component: _Activitys_FetchTextActivity__WEBPACK_IMPORTED_MODULE_1__["default"],
                            key: `changelog_${id}`,
                            extra: {
                                title: version.version,
                                url: version.changelog,
                            },
                        });
                    }, edge: "end", "aria-label": "download", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ManageHistory__WEBPACK_IMPORTED_MODULE_15__["default"], {}) })), _Native_Os__WEBPACK_IMPORTED_MODULE_7__.os.isAndroid && (_Native_Shell__WEBPACK_IMPORTED_MODULE_8__.Shell.isMagiskSU() || _Native_Shell__WEBPACK_IMPORTED_MODULE_8__.Shell.isKernelSU() || _Native_Shell__WEBPACK_IMPORTED_MODULE_8__.Shell.isAPatchSU()) && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], { onClick: handleInstall, edge: "end", "aria-label": "install", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_InstallMobile__WEBPACK_IMPORTED_MODULE_16__["default"], {}) })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], { disabled: !version.zipUrl, onClick: () => {
                        _Native_Os__WEBPACK_IMPORTED_MODULE_7__.os.open(version.zipUrl, {
                            target: "_blank",
                            features: {
                                color: theme.palette.primary.main,
                            },
                        });
                    }, edge: "end", "aria-label": "download", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Download__WEBPACK_IMPORTED_MODULE_17__["default"], {}) })] }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_18__["default"], { primary: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_19__["default"], { component: _mui_material_Stack__WEBPACK_IMPORTED_MODULE_13__["default"], variant: "body1", direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: versionName }), index === 0 && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_20__["default"], { variant: "outlined", color: "success", size: "small", label: strings("latest") })] }), secondary: ts }) }));
});



/***/ }),

/***/ "./src/activitys/NoRootActivity.tsx":
/*!******************************************!*\
  !*** ./src/activitys/NoRootActivity.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ButtonGroup */ "./node_modules/@mui/material/ButtonGroup/ButtonGroup.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");









const NoRootActivity = () => {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_3__.useStrings)();
    const rootManagers = [
        {
            name: "Open KernelSU",
            package: "me.weishu.kernelsu",
        },
        {
            name: "Open Magisk",
            package: "com.topjohnwu.magisk",
        },
        {
            name: "Open Magisk Delta",
            package: "io.github.huskydg.magisk",
        },
        {
            name: "Open APatch",
            package: "me.bmax.apatch",
        },
    ];
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: strings("no_root") }) }));
    };
    const getRootManagers = rootManagers.filter((manager) => window.__os__.isPackageInstalled(manager.package));
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page, { modifier: "noshadow", renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page.RelativeContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__["default"], { elevation: 0, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_5__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], { gutterBottom: true, variant: "h5", component: "div", children: [strings("failed"), "!"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], { variant: "body2", color: "text.secondary", children: strings("no_root_message") })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__["default"], { fullWidth: true, sx: { mt: 1 }, disableElevation: true, orientation: "vertical", "aria-label": "vertical contained button group", variant: "contained", children: getRootManagers.map((manager) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__["default"], { onClick: () => {
                            window.__os__.launchAppByPackageName(manager.package);
                        }, children: manager.name }, manager.name))) })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NoRootActivity);


/***/ }),

/***/ "./src/activitys/PicturePreviewActivity.tsx":
/*!**************************************************!*\
  !*** ./src/activitys/PicturePreviewActivity.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-zoom-pan-pinch */ "./node_modules/react-zoom-pan-pinch/dist/index.esm.js");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");







const generalStyle = {
    width: "100%",
    height: `100%`,
};
const PicturePreviewActivity = () => {
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__.useActivity)();
    const { picture, src } = extra;
    const [fullscreen, setFullscreen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar, { modifier: "noshadow", sx: {
                backgroundColor: "transparent",
                background: "linear-gradient(0deg, rgba(25,159,75,0) 0%, rgba(16,16,16,1) 150%)",
            }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Center, {})] }));
    };
    if (typeof (picture || src) !== "string")
        throw new TypeError("'src' is undefined in PicturePreviewActivity");
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { modifier: "noshadow", renderToolbar: renderToolbar, backgroundStyle: {
            top: `0px !important`,
        }, sx: {
            top: `0px !important`,
            paddingBottom: 0,
        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_4__.TransformWrapper, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_4__.TransformComponent, { wrapperStyle: { ...generalStyle }, contentStyle: {
                    display: "flex",
                    alignContent: "center",
                    ...generalStyle,
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__["default"], { component: "img", sx: { ...generalStyle, objectFit: "contain" }, src: picture || src }) }) }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PicturePreviewActivity);


/***/ }),

/***/ "./src/activitys/PlaygroundsActivity.tsx":
/*!***********************************************!*\
  !*** ./src/activitys/PlaygroundsActivity.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PreviewErrorBoundary: () => (/* binding */ PreviewErrorBoundary),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _mui_icons_material_Preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Preview */ "./node_modules/@mui/icons-material/Preview.js");
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @monaco-editor/react */ "./node_modules/@monaco-editor/react/dist/index.mjs");
/* harmony import */ var _Components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/ErrorBoundary */ "./src/components/ErrorBoundary.tsx");
/* harmony import */ var _Util_editorTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Util/editorTheme */ "./src/util/editorTheme.ts");
/* harmony import */ var _Hooks_useNativeStorage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Hooks/useNativeStorage */ "./src/hooks/useNativeStorage.tsx");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");














class PreviewErrorBoundary extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
    constructor(props) {
        super(props);
        this.state = _Components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_6__.errorBoundaryInitialState;
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }
    render() {
        if (this.state.hasError) {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: this.state.error?.message }) }));
        }
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(this.props.renderElement, { modid: this.props.modid, children: this.props.children, hasError: this.state.hasError });
    }
}
const createDependencyProposals = (monaco, range) => {
    // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
    // here you could do a server side lookup
    return [
        {
            label: "native",
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "",
            insertText: "native",
            range: range,
        },
        {
            label: "ignore",
            kind: monaco.languages.CompletionItemKind.Function,
            documentation: "",
            insertText: "// @ts-ignore",
            range: range,
        },
    ];
};
const editorDidMount = (editor, monaco) => {
    monaco.editor.defineTheme("editorTheme", _Util_editorTheme__WEBPACK_IMPORTED_MODULE_7__["default"]);
    monaco.editor.setTheme("editorTheme");
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: true,
    });
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        jsx: monaco.languages.typescript.JsxEmit.React,
        jsxFactory: "React.createElement",
        reactNamespace: "React",
        allowNonTsExtensions: true,
        allowJs: true,
        target: monaco.languages.typescript.ScriptTarget.ES2015,
    });
    monaco.languages.registerCompletionItemProvider("javascript", {
        provideCompletionItems: (model, position) => {
            const word = model.getWordUntilPosition(position);
            const range = {
                startLineNumber: position.lineNumber,
                endLineNumber: position.lineNumber,
                startColumn: word.startColumn,
                endColumn: word.endColumn,
            };
            return {
                suggestions: createDependencyProposals(monaco, range),
            };
        },
    });
    editor.focus();
};
const PlaygroundsActivity = () => {
    const { context, extra } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_4__.useActivity)();
    const { modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_9__.useModFS)();
    const [description, setDescription] = (0,_Hooks_useNativeStorage__WEBPACK_IMPORTED_MODULE_8__.useNativeStorage)("playground_" + extra.title, extra.defaultText || "");
    const [errBoundKey, setErrBoundKey] = react__WEBPACK_IMPORTED_MODULE_1__.useState(0);
    const isLargeScreen = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_10__["default"])("(min-width:600px)");
    const handlePreview = () => {
        context.pushPage({
            component: extra.previewPage,
            key: extra.title,
            extra: {
                modulename: "Preview",
                raw_data: description,
            },
        });
    };
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Button, { icon: _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_11__["default"], onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: extra.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Right, { children: !isLargeScreen && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Button, { icon: _mui_icons_material_Preview__WEBPACK_IMPORTED_MODULE_12__["default"], onClick: handlePreview }) })] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("section", { style: { padding: 8, height: "100%", width: "100%", display: "flex", flexDirection: "column" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { style: { flex: 1, display: "flex", marginTop: 4 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { style: {
                        height: "100%",
                        width: "100%",
                    }, direction: "row", justifyContent: "center", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Preview, { sx: { border: "unset" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_5__["default"], { height: "100%", width: "100%", language: extra.editorMode, value: description, onChange: (value) => {
                                    if (value) {
                                        setErrBoundKey((prev) => prev + 1);
                                        setDescription(value);
                                    }
                                }, onMount: editorDidMount, options: {
                                    autoIndent: "full",
                                    contextmenu: true,
                                    fontFamily: "monospace",
                                    fontSize: 13,
                                    lineHeight: 24,
                                    hideCursorInOverviewRuler: true,
                                    matchBrackets: "always",
                                    minimap: {
                                        enabled: false,
                                    },
                                    scrollbar: {
                                        horizontalSliderSize: 4,
                                        verticalSliderSize: 18,
                                    },
                                    selectOnLineNumbers: true,
                                    roundedSelection: false,
                                    readOnly: false,
                                    cursorStyle: "line",
                                    automaticLayout: true,
                                } }) }), isLargeScreen && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Preview, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], { component: "section", sx: { width: "100%", height: "100%" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PreviewErrorBoundary, { modid: modFS("MODCONF_PLAYGROUND_MODID"), children: description, renderElement: extra.preview }, "preview_error_bound_key_" + errBoundKey) }) }))] }) }) }) }));
};
const Preview = (0,_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"])("div")(({ theme }) => ({
    flex: 1,
    flexBasis: "50%",
    height: "100%",
    width: "100%",
    minHeight: "100%",
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderStyle: "solid",
    borderWidth: "1px",
    minWidth: "0%",
    overflow: "auto",
    borderColor: "rgba(0, 0, 0, 0.23)",
    section: {
        position: "absolute",
        overflowY: "scroll",
    },
    ".monaco-editor": {
        borderRadius: theme.shape.borderRadius / theme.shape.borderRadius,
    },
    ".overflow-guard": {
        borderRadius: theme.shape.borderRadius / theme.shape.borderRadius,
    },
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlaygroundsActivity);


/***/ }),

/***/ "./src/activitys/RepoActivity/components/LocalRepository.tsx":
/*!*******************************************************************!*\
  !*** ./src/activitys/RepoActivity/components/LocalRepository.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalRepository: () => (/* binding */ LocalRepository)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/ExpandLess */ "./node_modules/@mui/icons-material/ExpandLess.js");
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var _mui_material_Collapse__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Collapse */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/LanguageRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/SupportRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/VolunteerActivismRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/UploadFileRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/DeleteRounded.js");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useFormatDate */ "./src/hooks/useFormatDate.ts");
/* harmony import */ var material_ui_confirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! material-ui-confirm */ "./node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js");
/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/Delete */ "./node_modules/@mui/icons-material/Delete.js");
/* harmony import */ var _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Hooks/useFetch */ "./src/hooks/useFetch.ts");















const MListItem = react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
    return props.part ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { onClick: props.onClick, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(props.icon, {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { primary: props.text })] })) : null;
});
const LocalRepository = react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
    const { repo } = props;
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__.useStrings)();
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_3__.useSettings)();
    const confirm = (0,material_ui_confirm__WEBPACK_IMPORTED_MODULE_7__.useConfirm)();
    const { actions } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_2__.useRepos)();
    const [enabled, setEnabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(actions.isRepoEnabled(repo.base_url));
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const [data] = (0,_Hooks_useFetch__WEBPACK_IMPORTED_MODULE_8__.useFetch)(`${repo.base_url}json/modules.json`);
    const formatLastUpdate = (0,_Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_6__.useFormatDate)(data ? data.metadata.timestamp : 0);
    const handleRepoDelete = () => {
        confirm({
            title: "Delete?",
            confirmationText: "Sure",
            description: strings("confirm_repo_delete", {
                name: repo.name,
            }),
        }).then(() => {
            actions.removeRepo({
                id: repo.base_url,
            });
        });
    };
    if (!data) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { secondaryAction: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { onClick: handleRepoDelete, edge: "end", "aria-label": "delete", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_14__["default"], {}) }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { primary: "Loading..." }) }));
    }
    const handleClick = () => {
        setOpen(!open);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { onClick: handleClick, children: open ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ExpandLess__WEBPACK_IMPORTED_MODULE_15__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_16__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { primary: repo.name, secondary: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { variant: "body2", children: formatLastUpdate }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { variant: "body2", sx: {}, children: ["Holds", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { component: "span", variant: "body2", sx: {
                                                background: "-webkit-linear-gradient(132deg, rgba(188,2,194,1) 10%,rgba(255,255,255,1) 100%, rgba(74,20,140,0.5) 50%)",
                                                WebkitBackgroundClip: "text",
                                                WebkitTextFillColor: "transparent",
                                            }, children: data.modules.length.toString() }), " ", "modules"] })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { edge: "end", onChange: (e, checked) => {
                            actions.setRepoEnabled({
                                id: repo.base_url,
                                callback(state) {
                                    setEnabled(!state.some((elem) => elem === repo.base_url));
                                },
                            });
                        }, checked: enabled })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Collapse__WEBPACK_IMPORTED_MODULE_19__["default"], { in: open, timeout: "auto", unmountOnExit: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { component: "div", disablePadding: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MListItem, { part: repo.website, icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_21__["default"], text: strings("website"), onClick: () => {
                                if (repo.website) {
                                    _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.open(repo.website);
                                }
                            } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MListItem, { part: repo.support, icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"], text: strings("support"), onClick: () => {
                                if (repo.support) {
                                    _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.open(repo.support);
                                }
                            } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MListItem, { part: repo.donate, icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__["default"], text: strings("donate"), onClick: () => {
                                if (repo.donate) {
                                    _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.open(repo.donate);
                                }
                            } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MListItem, { part: repo.submission, icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_24__["default"], text: strings("submit_module"), onClick: () => {
                                if (repo.submission) {
                                    _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.open(repo.submission);
                                }
                            } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MListItem, { part: true, icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_25__["default"], text: strings("remove"), onClick: handleRepoDelete })] }) })] }));
});


/***/ }),

/***/ "./src/activitys/RepoActivity/components/RecommendedRepo.tsx":
/*!*******************************************************************!*\
  !*** ./src/activitys/RepoActivity/components/RecommendedRepo.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecommendedRepo: () => (/* binding */ RecommendedRepo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/Add */ "./node_modules/@mui/icons-material/Add.js");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");






const RecommendedRepo = (props) => {
    const { actions } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_1__.useRepos)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { secondaryAction: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], { edge: "end", "aria-label": "add", onClick: () => {
                actions.addRepo({
                    url: props.link,
                    callback: (state) => { },
                    error: (error) => {
                        _Native_Os__WEBPACK_IMPORTED_MODULE_2__.os.toast(error.message, "short");
                    },
                });
            }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_5__["default"], {}) }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { primary: props.name, secondary: props.link }) }));
};


/***/ }),

/***/ "./src/activitys/RepoActivity/index.tsx":
/*!**********************************************!*\
  !*** ./src/activitys/RepoActivity/index.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Add.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListSubheader/ListSubheader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _components_RecommendedRepo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/RecommendedRepo */ "./src/activitys/RepoActivity/components/RecommendedRepo.tsx");
/* harmony import */ var _components_LocalRepository__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/LocalRepository */ "./src/activitys/RepoActivity/components/LocalRepository.tsx");
/* harmony import */ var _Hooks_useNetwork__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useNetwork */ "./src/hooks/useNetwork.ts");














const recommended_repos = [
    {
        name: "Magisk Modules Alternative Repository",
        link: "https://magisk-modules-alt-repo.github.io/json-v2/",
    },
    {
        name: "Googlers Magisk Repo",
        link: "https://gr.dergoogler.com/gmr/",
    },
    {
        name: "IzzyOnDroid Magisk Repository",
        link: "https://apt.izzysoft.de/magisk/",
    },
    // {
    //   name: "Magisk Modules Repo (Official)",
    //   link: "https://gr.dergoogler.com/mmr/",
    // },
];
const MemoizdRecommendedRepos = react__WEBPACK_IMPORTED_MODULE_2___default().memo((props) => {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__.useStrings)();
    const { repos } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_1__.useRepos)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [repos.length !== 0 && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { sx: (theme) => ({ bgcolor: theme.palette.background.default }), children: strings("explore_repositories") }), children: recommended_repos.map((repo, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_RecommendedRepo__WEBPACK_IMPORTED_MODULE_8__.RecommendedRepo, { name: repo.name, link: repo.link }, repo.name + "_" + index))) })] }));
});
const RepoActivity = () => {
    const { isNetworkAvailable } = (0,_Hooks_useNetwork__WEBPACK_IMPORTED_MODULE_10__.useNetwork)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__.useStrings)();
    const { repos, actions } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_1__.useRepos)();
    const [repoLink, setRepoLink] = react__WEBPACK_IMPORTED_MODULE_2___default().useState("");
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const handleClickOpen = () => {
        if (isNetworkAvailable) {
            setOpen(true);
        }
        else {
            _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.toast("Please chack your internet connection", "short");
        }
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleRepoLinkChange = (event) => {
        setRepoLink(event.target.value);
    };
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Button, { icon: _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_14__["default"], onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Center, { children: strings("repositories") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Right, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Button, { icon: _mui_icons_material__WEBPACK_IMPORTED_MODULE_15__["default"], onClick: handleClickOpen }) })] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_7__.Page, { renderToolbar: renderToolbar, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_7__.Page.RelativeContent, { zeroMargin: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: { bgcolor: "transparent" }, children: repos.map((repo, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_LocalRepository__WEBPACK_IMPORTED_MODULE_9__.LocalRepository, { repo: repo }, "repo_" + repo.name + "_" + index))) }), isNetworkAvailable && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(MemoizdRecommendedRepos, {})] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { open: open, onClose: handleClose, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { children: strings("add_repository") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: strings("add_repository_description") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { autoFocus: true, name: "repo_link", fullWidth: true, margin: "dense", type: "text", label: "Modules link", value: repoLink, variant: "outlined", onChange: handleRepoLinkChange })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: handleClose, children: strings("cancel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                                        actions.addRepo({
                                            url: repoLink,
                                            callback: (state) => {
                                                setRepoLink("");
                                                handleClose();
                                            },
                                            error: (error) => {
                                                setRepoLink("");
                                                _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.toast(error.message, "short");
                                                handleClose();
                                            },
                                        });
                                    }, children: strings("add") })] })] })] }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RepoActivity);


/***/ }),

/***/ "./src/activitys/SearchActivity.tsx":
/*!******************************************!*\
  !*** ./src/activitys/SearchActivity.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchActivity: () => (/* binding */ SearchActivity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flatlist-react */ "./node_modules/flatlist-react/lib/index.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flatlist_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/InputBase */ "./node_modules/@mui/material/InputBase/InputBase.js");
/* harmony import */ var _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/Clear */ "./node_modules/@mui/icons-material/Clear.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");











const RenderWhenEmpty = react__WEBPACK_IMPORTED_MODULE_1___default().memo(() => {
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { component: "h4", sx: {
            color: theme.palette.text.secondary,
            position: "absolute",
            left: "50%",
            top: "50%",
            WebkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
        }, children: "What you looking for?" }));
});
function SearchActivity(props) {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__.useStrings)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_3__.useActivity)();
    const { placeholder, list, renderList, initialSearch = "" } = props;
    const __placeholder = placeholder ? placeholder : strings("search");
    const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(initialSearch);
    const __renderList = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(renderList, [search, list]);
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Center, { sx: {
                        display: "flex",
                        justifyContent: "center",
                        alignSelf: "center",
                        alignItems: "center",
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_9__["default"], { autoFocus: true, fullWidth: true, value: search, inputProps: {
                            "aria-label": __placeholder,
                        }, onChange: (e) => setSearch(e.target.value), placeholder: __placeholder }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Right, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Button, { icon: _mui_icons_material_Clear__WEBPACK_IMPORTED_MODULE_10__["default"], onClick: () => {
                            setSearch("");
                        } }) })] }));
    };
    const __list = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => (search ? list : []), [search]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page, { modifier: "noshadow", renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_5__.Page.RelativeContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { sx: { position: "unset" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((flatlist_react__WEBPACK_IMPORTED_MODULE_2___default()), { list: __list, renderItem: __renderList, renderWhenEmpty: () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RenderWhenEmpty, {}), renderOnScroll: true, search: { term: search, ...props.search }, group: props.group }) }) }) }));
}



/***/ }),

/***/ "./src/activitys/SettingsActivity.tsx":
/*!********************************************!*\
  !*** ./src/activitys/SettingsActivity.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListSubheader/ListSubheader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Native/BuildConfig */ "./src/native/BuildConfig.ts");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Components_ListPickerItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/ListPickerItem */ "./src/components/ListPickerItem.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var _Native_Shell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Native/Shell */ "./src/native/Shell.ts");
/* harmony import */ var _Native_Properties__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Native/Properties */ "./src/native/Properties.ts");
/* harmony import */ var _locales_declaration__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../locales/declaration */ "./src/locales/declaration.ts");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Hooks_useLocalModules__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Hooks/useLocalModules */ "./src/hooks/useLocalModules.ts");


















function SettingsActivity() {
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__.useActivity)();
    const { _modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_14__.useModFS)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__.useStrings)();
    const availableLangs = (0,_locales_declaration__WEBPACK_IMPORTED_MODULE_13__.useLanguageMap)();
    const { setRepos } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_10__.useRepos)();
    const { patchSettings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_6__.useSettings)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__.useTheme)();
    // Prefs
    const { settings, setSettings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_6__.useSettings)();
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Button, { icon: _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_16__["default"], onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: strings("settings") })] }));
    };
    const localModules = (0,_Hooks_useLocalModules__WEBPACK_IMPORTED_MODULE_15__.useLocalModules)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page.RelativeContent, { zeroMargin: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: strings("appearance") }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("swipeable_tabs"), secondary: strings("swipeable_tabs_subtitle") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: "end", onChange: (e) => {
                                        setSettings("swipeable_tabs", e.target.checked);
                                    }, checked: settings.swipeable_tabs })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_ListPickerItem__WEBPACK_IMPORTED_MODULE_7__.ListPickerItem, { id: "language", targetSetting: "language", title: strings("language"), contentMap: availableLangs })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: strings("security") }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("link_protection_title"), secondary: strings("link_protection_desc") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: "end", onChange: (e) => {
                                    setSettings("link_protection", e.target.checked);
                                }, checked: settings.link_protection })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: strings("module") }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("low_quality_modules"), secondary: strings("low_quality_modules_subtitle") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: "end", onChange: (e) => {
                                        setSettings("_low_quality_module", e.target.checked);
                                    }, checked: settings._low_quality_module })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("invaild_modules"), secondary: strings("invaild_modules_subtitle") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: "end", onChange: (e) => {
                                        setSettings("_invald_module", e.target.checked);
                                    }, checked: settings._invald_module })] })] }), _Native_Os__WEBPACK_IMPORTED_MODULE_8__.os.isAndroid && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: strings("terminal") }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("scroll_to_bottom"), secondary: strings("scroll_to_bottom_subtitle") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: "end", onChange: (e) => {
                                                setSettings("term_scroll_bottom", e.target.checked);
                                            }, checked: settings.term_scroll_bottom })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("print_errors"), secondary: strings("print_errors_desc") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: "end", onChange: (e) => {
                                                setSettings("print_terminal_error", e.target.checked);
                                            }, checked: settings.print_terminal_error })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("word_wrap_title") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: "end", onChange: (e) => {
                                                setSettings("terminal_word_wrap", e.target.checked);
                                            }, checked: settings.terminal_word_wrap })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("numberic_lines_title"), secondary: strings("numberic_lines_desc") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: "end", onChange: (e) => {
                                                setSettings("terminal_numberic_lines", e.target.checked);
                                            }, checked: settings.terminal_numberic_lines })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_ListPickerItem__WEBPACK_IMPORTED_MODULE_7__.ListPickerItem, { id: "term-scroll-behavior", targetSetting: "term_scroll_behavior", title: strings("scroll_behavior"), contentMap: _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_6__.termScrollBehaviors })] })] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: strings("development") }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { id: "switch-list-label-eruda", primary: strings("eruda_console"), secondary: strings("eruda_console_subtitle") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { edge: "end", onChange: (e) => {
                                        setSettings("eruda_console_enabled", e.target.checked);
                                    }, checked: settings.eruda_console_enabled, inputProps: {
                                        "aria-labelledby": "switch-list-label-eruda",
                                    } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { onClick: () => {
                                _Native_Os__WEBPACK_IMPORTED_MODULE_8__.os.open("https://github.com/DerGoogler/MMRL/issues", {
                                    target: "_blank",
                                    features: {
                                        color: theme.palette.primary.main,
                                    },
                                });
                            }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { id: "switch-list-label-wifi", primary: "Issues", secondary: "Track our issues" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { onClick: () => {
                                _Native_Os__WEBPACK_IMPORTED_MODULE_8__.os.shareText("Share via", JSON.stringify({
                                    device: {
                                        sdk: _Native_Properties__WEBPACK_IMPORTED_MODULE_12__.Properties.get("ro.build.version.sdk", "unknown"),
                                        brand: _Native_Properties__WEBPACK_IMPORTED_MODULE_12__.Properties.get("ro.product.brand", "unknown"),
                                        model: _Native_Properties__WEBPACK_IMPORTED_MODULE_12__.Properties.get("ro.product.model", "unknown"),
                                    },
                                    application: {
                                        user_agent: navigator.userAgent,
                                        package_name: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_1__.BuildConfig.APPLICATION_ID,
                                        version_name: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_1__.BuildConfig.VERSION_NAME,
                                        version_code: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_1__.BuildConfig.VERSION_CODE,
                                    },
                                    root: {
                                        manager: _Native_Shell__WEBPACK_IMPORTED_MODULE_11__.Shell.getRootManager(),
                                        version_name: _Native_Shell__WEBPACK_IMPORTED_MODULE_11__.Shell.VERSION_NAME(),
                                        version_code: _Native_Shell__WEBPACK_IMPORTED_MODULE_11__.Shell.VERSION_CODE(),
                                    },
                                    modconf: _modFS,
                                    modules: localModules,
                                }, null, 4));
                            }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("share_device_infos"), secondary: strings("share_device_infos_subtilte") }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: strings("storage") }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { onClick: () => {
                                setRepos([]);
                            }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("clear_repos") }) }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { onClick: () => {
                                patchSettings();
                            }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: strings("patch_settings"), secondary: strings("patch_settings_subtitle") }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {}), _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_1__.BuildConfig.DEBUG && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: "Debug" }), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { onClick: () => {
                                    throw new Error("Test error thrown!");
                                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: "Throw error" }) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], {})] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { primary: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", { children: [_Native_BuildConfig__WEBPACK_IMPORTED_MODULE_1__.BuildConfig.APPLICATION_ID, " v", _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_1__.BuildConfig.VERSION_NAME, " (", _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_1__.BuildConfig.VERSION_CODE, ")", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), _Native_Os__WEBPACK_IMPORTED_MODULE_8__.os.isAndroid ? `${_Native_Shell__WEBPACK_IMPORTED_MODULE_11__.Shell.VERSION_NAME()} (${_Native_Shell__WEBPACK_IMPORTED_MODULE_11__.Shell.VERSION_CODE()})` : ""] }) }) })] }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SettingsActivity);


/***/ }),

/***/ "./src/activitys/SubmitModuleActivity.tsx":
/*!************************************************!*\
  !*** ./src/activitys/SubmitModuleActivity.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SubmitModuleActivity: () => (/* binding */ SubmitModuleActivity)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Autocomplete/Autocomplete.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useCategories */ "./src/hooks/useCategories.ts");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Components_icons_MMRL__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/icons/MMRL */ "./src/components/icons/MMRL.tsx");
/* harmony import */ var _Components_icons_MRepo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/icons/MRepo */ "./src/components/icons/MRepo.tsx");
/* harmony import */ var _Hooks_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useNativeFileStorage */ "./src/hooks/useNativeFileStorage.tsx");
/* harmony import */ var _Util_licenseTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Util/licenseTypes */ "./src/util/licenseTypes.ts");
/* harmony import */ var _Components_CodeBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/CodeBlock */ "./src/components/CodeBlock.tsx");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Util_path__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Util/path */ "./src/util/path.js");
/* harmony import */ var _locales_antifeatures_en__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../locales/antifeatures/en */ "./src/locales/antifeatures/en.ts");

















const INITIAL_TRACK_FORM = {
    id: "",
    enable: true,
    verified: false,
    update_to: "",
    source: "",
    antifeatures: [],
};
const INITIAL_COM_REPO_FORM = {
    license: "",
    support: "",
    donate: "",
    cover: "",
    icon: "",
    categories: [],
    require: [],
    screenshots: [],
    readme: "",
};
const antifeatures = _locales_antifeatures_en__WEBPACK_IMPORTED_MODULE_15__.en_antifeatures.map((af) => af.id);
const SupportedApp = react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", alignItems: "center", divider: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { sx: { marginTop: "4px !important", marginBottom: "4px !important" }, orientation: "vertical", variant: "middle", flexItem: true }), spacing: 1, children: [props.mmrl && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "center", alignItems: "center", spacing: 0.5, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_icons_MMRL__WEBPACK_IMPORTED_MODULE_8__.MMRL, { sx: { fontSize: "unset" } }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "MMRL" })] })), props.mrepo && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "center", alignItems: "center", spacing: 0.5, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_icons_MRepo__WEBPACK_IMPORTED_MODULE_9__.MRepo, { sx: { fontSize: "unset" } }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { children: "MRepo" })] }))] }));
});
const SubmitModuleActivity = () => {
    const { allCategories } = (0,_Hooks_useCategories__WEBPACK_IMPORTED_MODULE_4__.useCategories)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__.useActivity)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__.useStrings)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_7__.useTheme)();
    const { modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_13__.useModFS)();
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: strings("submit_module") })] }));
    };
    const [trackFormData, setTrackFormData] = (0,_Hooks_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_10__.useNativeFileStorage)(_Util_path__WEBPACK_IMPORTED_MODULE_14__.path.resolve(modFS("MMRLFOL"), "submit-form-track.json"), INITIAL_TRACK_FORM, {
        loader: "json",
    });
    const [repoFormData, setRepoFormData] = (0,_Hooks_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_10__.useNativeFileStorage)(_Util_path__WEBPACK_IMPORTED_MODULE_14__.path.resolve(modFS("MMRLFOL"), "submit-form-repo.json"), INITIAL_COM_REPO_FORM, {
        loader: "json",
    });
    const handleTrackChange = (e) => {
        const { name, value } = e.target;
        setTrackFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleRepoChange = (e) => {
        const { name, value } = e.target;
        setRepoFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    const isInvalidLicense = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => !_Util_licenseTypes__WEBPACK_IMPORTED_MODULE_11__.licenseTypes.includes(repoFormData.license), [repoFormData.license]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { sx: { p: 1 }, renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page.RelativeContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_CodeBlock__WEBPACK_IMPORTED_MODULE_12__.CodeBlock, { sx: {
                        mb: 1,
                    }, lang: "json", children: JSON.stringify({
                        "track.json": trackFormData,
                        "common/repo.json": repoFormData,
                    }, null, 2) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "column", justifyContent: "center", alignItems: "center", spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { sx: { width: "100%" }, variant: "h5", children: "track.json" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { placeholder: "mkshrc", fullWidth: true, label: "Module ID", name: "id", value: trackFormData.id, onChange: handleTrackChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { placeholder: "https://...", fullWidth: true, label: "Module Source URL", name: "source", value: trackFormData.source, onChange: handleTrackChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { fullWidth: true, label: "Update to", name: "update_to", value: trackFormData.update_to, onChange: handleTrackChange, placeholder: "Git repositores needs to end with '.git' or you pass a valid 'update.json'" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { multiple: true, sx: { width: "100%" }, value: trackFormData.antifeatures, options: antifeatures, onChange: (e, value) => {
                                setTrackFormData((prevState) => ({ ...prevState, antifeatures: value }));
                            }, filterSelectedOptions: true, disableCloseOnSelect: true, renderInput: (params) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { ...params, label: "Anti-Features" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { sx: { width: "100%" }, variant: "h5", children: "common/repo.json" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { error: isInvalidLicense, placeholder: "MIT", fullWidth: true, label: isInvalidLicense ? "License (invalid)" : "License", name: "license", value: repoFormData.license, onChange: handleRepoChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { placeholder: "https://...", fullWidth: true, label: "Support URL", name: "support", value: repoFormData.support, onChange: handleRepoChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { placeholder: "https://...", fullWidth: true, label: "Donate URL", name: "donate", value: repoFormData.donate, onChange: handleRepoChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { multiple: true, sx: { width: "100%" }, value: repoFormData.categories, options: allCategories, onChange: (e, value) => {
                                setRepoFormData((prevState) => ({ ...prevState, categories: value }));
                            }, disableCloseOnSelect: true, filterSelectedOptions: true, renderInput: (params) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { ...params, label: "Categories" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { placeholder: "https://...", fullWidth: true, label: "Module Cover", name: "cover", value: repoFormData.cover, onChange: handleRepoChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { placeholder: "https://...", fullWidth: true, label: "Module Icon", name: "icon", value: repoFormData.icon, onChange: handleRepoChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { placeholder: "https://...", fullWidth: true, label: "Raw README.md URL", name: "readme", value: repoFormData.readme, onChange: handleRepoChange }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { style: { width: "100%" }, sx: {
                                "& .MuiInputBase-root": {
                                    flexDirection: "column-reverse",
                                    WebkitAlignItems: "stretch",
                                    alignItems: "stretch",
                                    width: "100% !important",
                                },
                                "& .MuiInputBase-input": {
                                    width: "100% !important",
                                },
                            }, multiple: true, value: repoFormData.screenshots, onChange: (e, value) => {
                                setRepoFormData((prevState) => ({ ...prevState, screenshots: value }));
                            }, options: [], freeSolo: true, renderTags: (value, getTagProps) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "column", justifyContent: "flex-start", alignItems: "flex-start", spacing: 1, useFlexGap: true, flexWrap: "wrap", children: value.map((option, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { variant: "outlined", label: option, avatar: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { alt: option, src: option }), ...getTagProps({ index }) }))) })), renderInput: (params) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { ...params, fullWidth: true, label: "Screenshots", placeholder: "https://..." }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { style: { width: "100%" }, sx: {
                                "& .MuiInputBase-root": {
                                    flexDirection: "column-reverse",
                                    WebkitAlignItems: "stretch",
                                    alignItems: "stretch",
                                    width: "100% !important",
                                },
                                "& .MuiInputBase-input": {
                                    width: "100% !important",
                                },
                            }, multiple: true, value: repoFormData.require, onChange: (e, value) => {
                                setRepoFormData((prevState) => ({ ...prevState, require: value }));
                            }, options: [], freeSolo: true, renderTags: (value, getTagProps) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "column", justifyContent: "flex-start", alignItems: "flex-start", spacing: 1, useFlexGap: true, flexWrap: "wrap", children: value.map((option, index) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { variant: "outlined", label: option, ...getTagProps({ index }) }))) })), renderInput: (params) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { ...params, fullWidth: true, label: "Require Modules", placeholder: "mkshrc" }) })] })] }) }));
};



/***/ }),

/***/ "./src/activitys/UnverifiedHostActivity.tsx":
/*!**************************************************!*\
  !*** ./src/activitys/UnverifiedHostActivity.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CardContent */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_icons_material_BugReport__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/BugReport */ "./node_modules/@mui/icons-material/BugReport.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/dapi/Anchor */ "./src/components/dapi/Anchor.tsx");











const UnverifiedHostActivity = () => {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_3__.useStrings)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar, { modifier: "noshadow", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_2__.Toolbar.Center, { children: strings("unverified_host") }) }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page, { modifier: "noshadow", renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_1__.Page.RelativeContent, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_6__["default"], { elevation: 0, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { gutterBottom: true, variant: "h5", component: "div", children: [strings("caution"), "!"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", color: "text.secondary", children: strings("unverified_host_text", {
                                    url: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { component: "span", sx: { fontSize: "unset", color: theme.palette.text.link }, children: location.host })),
                                }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { variant: "middle" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_7__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], { variant: "body2", color: "text.secondary", children: strings("unverified_host_text_help", {
                                issues: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_5__.Anchor, { href: "https://github.com/DerGoogler/MMRL/issues", icon: _mui_icons_material_BugReport__WEBPACK_IMPORTED_MODULE_10__["default"], children: "issues" })),
                            }) }) })] }) }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnverifiedHostActivity);


/***/ }),

/***/ "./src/activitys/ViewBlacklistedModulesActivity.tsx":
/*!**********************************************************!*\
  !*** ./src/activitys/ViewBlacklistedModulesActivity.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Components_AntiFeatureListItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/AntiFeatureListItem */ "./src/components/AntiFeatureListItem.tsx");
/* harmony import */ var _Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/dapi/Anchor */ "./src/components/dapi/Anchor.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Util_blacklisted_modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Util/blacklisted-modules */ "./src/util/blacklisted-modules.ts");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ExpandLess.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ExpandMore.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Collapse/Collapse.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flatlist-react */ "./node_modules/flatlist-react/lib/index.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flatlist_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);












function BlacklistItem({ module }) {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_9___default().useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { onClick: handleClick, children: open ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_12__["default"], {}) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_13__["default"], {}) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_2__.Anchor, { color: "text.primary", href: module.source, noIcon: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"], { primary: module.id, secondary: module.source }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__["default"], { in: open, timeout: "auto", unmountOnExit: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { disablePadding: true, children: [module.notes && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_17__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_18__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { sx: { fontSize: 14 }, color: "text.secondary", gutterBottom: true, children: "Additional notes" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__["default"], { variant: "body2", children: module.notes })] }) }) })), typeof module.antifeatures === "string" ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_AntiFeatureListItem__WEBPACK_IMPORTED_MODULE_1__["default"], { sx: { pl: 4 }, type: module.antifeatures })) : (Array.isArray(module.antifeatures) && module.antifeatures.map((anti) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_AntiFeatureListItem__WEBPACK_IMPORTED_MODULE_1__["default"], { sx: { pl: 4 }, type: anti })))] }) })] }));
}
function ViewBlacklistedModulesActivity() {
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__.useActivity)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__.useStrings)();
    const renderToolbar = () => {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_4__.Toolbar.Center, { children: strings("blacklisted_modules") })] }));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { renderToolbar: renderToolbar, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page.RelativeContent, { zeroMargin: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_16__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((flatlist_react__WEBPACK_IMPORTED_MODULE_8___default()), { list: _Util_blacklisted_modules__WEBPACK_IMPORTED_MODULE_7__.blacklistedModules, renderItem: (mod) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlacklistItem, { module: mod }), renderOnScroll: true, renderWhenEmpty: () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}) }) }) }) }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewBlacklistedModulesActivity);


/***/ }),

/***/ "./src/activitys/fragments/DrawerFragment.tsx":
/*!****************************************************!*\
  !*** ./src/activitys/fragments/DrawerFragment.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DrawerFragment: () => (/* binding */ DrawerFragment)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Activitys_RepoActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Activitys/RepoActivity */ "./src/activitys/RepoActivity/index.tsx");
/* harmony import */ var _Activitys_SettingsActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Activitys/SettingsActivity */ "./src/activitys/SettingsActivity.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListSubheader/ListSubheader.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-onsenui */ "./node_modules/react-onsenui/dist/react-onsenui.js");
/* harmony import */ var react_onsenui__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_onsenui__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Activitys_FetchTextActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Activitys/FetchTextActivity */ "./src/activitys/FetchTextActivity.tsx");
/* harmony import */ var _Activitys_AboutActivity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Activitys/AboutActivity */ "./src/activitys/AboutActivity.tsx");
/* harmony import */ var _Activitys_PlaygroundsActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Activitys/PlaygroundsActivity */ "./src/activitys/PlaygroundsActivity.tsx");
/* harmony import */ var _Activitys_ModConfActivity_components_ModConfView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Activitys/ModConfActivity/components/ModConfView */ "./src/activitys/ModConfActivity/components/ModConfView/index.tsx");
/* harmony import */ var _Components_Markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/Markdown */ "./src/components/Markdown/index.tsx");
/* harmony import */ var _Util_configure_sample__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Util/configure-sample */ "./src/util/configure-sample.ts");
/* harmony import */ var _Util_dapi_sample__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Util/dapi-sample */ "./src/util/dapi-sample.ts");
/* harmony import */ var _Activitys_ModFSActivity__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Activitys/ModFSActivity */ "./src/activitys/ModFSActivity.tsx");
/* harmony import */ var _Activitys_ModConfPlaygroundActivity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Activitys/ModConfPlaygroundActivity */ "./src/activitys/ModConfPlaygroundActivity.tsx");
/* harmony import */ var _Activitys_LicensesActivity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Activitys/LicensesActivity */ "./src/activitys/LicensesActivity.tsx");
/* harmony import */ var _Activitys_SubmitModuleActivity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Activitys/SubmitModuleActivity */ "./src/activitys/SubmitModuleActivity.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Activitys_ViewBlacklistedModulesActivity__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Activitys/ViewBlacklistedModulesActivity */ "./src/activitys/ViewBlacklistedModulesActivity.tsx");
/* harmony import */ var _Activitys_ModConfStandaloneActivity__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Activitys/ModConfStandaloneActivity */ "./src/activitys/ModConfStandaloneActivity.tsx");





















const DrawerFragment = (props) => {
    const hide = props.hideSplitter;
    const pushPage = props.pushPage;
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_17__.useTheme)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_3__.useStrings)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_onsenui__WEBPACK_IMPORTED_MODULE_4__.Page, { renderToolbar: props.renderToolbar, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { children: "App" }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_SettingsActivity__WEBPACK_IMPORTED_MODULE_2__["default"],
                                key: "settings",
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("settings") }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_RepoActivity__WEBPACK_IMPORTED_MODULE_1__["default"],
                                key: "repos",
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("repositories") }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_ModFSActivity__WEBPACK_IMPORTED_MODULE_12__["default"],
                                key: "ModFSActivity",
                                extra: {},
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("modfs") }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_ViewBlacklistedModulesActivity__WEBPACK_IMPORTED_MODULE_18__["default"],
                                key: "ViewBlacklistedModulesActivity",
                                extra: {},
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("blacklisted_modules") }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { children: "Components" }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                noMemo: true,
                                component: _Activitys_SubmitModuleActivity__WEBPACK_IMPORTED_MODULE_15__.SubmitModuleActivity,
                                key: "SubmitModuleActivity",
                                extra: {},
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("submit_module") }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_PlaygroundsActivity__WEBPACK_IMPORTED_MODULE_7__["default"],
                                key: "dapitestActivity",
                                extra: {
                                    title: "DAPI Tester",
                                    defaultText: _Util_dapi_sample__WEBPACK_IMPORTED_MODULE_11__.dapiSample,
                                    editorMode: "markdown",
                                    previewPage: _Activitys_FetchTextActivity__WEBPACK_IMPORTED_MODULE_5__["default"],
                                    preview: _Components_Markdown__WEBPACK_IMPORTED_MODULE_9__.Markup,
                                },
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: "DAPI Tester" }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_ModConfPlaygroundActivity__WEBPACK_IMPORTED_MODULE_13__["default"],
                                key: "ModConfPlaygroundActivity",
                                extra: {
                                    editorMode: "javascript",
                                    defaultText: _Util_configure_sample__WEBPACK_IMPORTED_MODULE_10__.configureSample,
                                },
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("modconf_playground") }) }), " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_ModConfStandaloneActivity__WEBPACK_IMPORTED_MODULE_19__["default"],
                                key: "ModConfStandaloneActivity",
                                extra: {},
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: "ModConf Standalone" }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__["default"], { subheader: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__["default"], { children: "Other" }), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            _Native_Os__WEBPACK_IMPORTED_MODULE_16__.os.open("https://dergoogler.com/legal/privacy-policy", {
                                target: "_blank",
                                features: {
                                    color: theme.palette.background.default,
                                },
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("privacy_privacy") }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_AboutActivity__WEBPACK_IMPORTED_MODULE_6__["default"],
                                key: "abt",
                                extra: {},
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("about") }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_LicensesActivity__WEBPACK_IMPORTED_MODULE_14__["default"],
                                key: "license",
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("licenses") }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__["default"], { onClick: () => {
                            pushPage({
                                component: _Activitys_FetchTextActivity__WEBPACK_IMPORTED_MODULE_5__["default"],
                                key: "changelog",
                                extra: {
                                    rendering: _Activitys_ModConfActivity_components_ModConfView__WEBPACK_IMPORTED_MODULE_8__.ModConfView,
                                    url: "https://raw.githubusercontent.com/wiki/DerGoogler/MMRL/JSX-Changelog.md",
                                    modulename: "Changelog",
                                },
                            });
                            hide();
                        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { primary: strings("changelog") }) })] })] }));
};


/***/ }),

/***/ "./src/activitys/fragments/ModuleFragment.tsx":
/*!****************************************************!*\
  !*** ./src/activitys/fragments/ModuleFragment.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Components_DropdownButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/DropdownButton */ "./src/components/DropdownButton.tsx");
/* harmony import */ var _Components_MissingInternet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/MissingInternet */ "./src/components/MissingInternet.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Hooks_useModulesFilter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useModulesFilter */ "./src/hooks/useModulesFilter.tsx");
/* harmony import */ var _Hooks_useNetwork__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useNetwork */ "./src/hooks/useNetwork.ts");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowDown */ "./node_modules/@mui/icons-material/KeyboardArrowDown.js");
/* harmony import */ var _mui_icons_material_VolunteerActivism__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/VolunteerActivism */ "./node_modules/@mui/icons-material/VolunteerActivism.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flatlist-react */ "./node_modules/flatlist-react/lib/index.js");
/* harmony import */ var flatlist_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flatlist_react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
















const RenderWhenEmpty = react__WEBPACK_IMPORTED_MODULE_9___default().memo(() => {
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], { component: "h4", sx: {
            color: theme.palette.text.secondary,
            position: "absolute",
            left: "50%",
            top: "50%",
            WebkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
        }, children: "No modules were found" }));
});
const ModuleFragment = react__WEBPACK_IMPORTED_MODULE_9___default().memo((props) => {
    const { isNetworkAvailable } = (0,_Hooks_useNetwork__WEBPACK_IMPORTED_MODULE_5__.useNetwork)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__.useTheme)();
    const renderItem = react__WEBPACK_IMPORTED_MODULE_9___default().useCallback((m, k) => props.renderItem(m, k), []);
    const [filter, _filter, setFilter] = (0,_Hooks_useModulesFilter__WEBPACK_IMPORTED_MODULE_4__.useModuleFilter)(`${props.id}_filter`);
    if (!isNetworkAvailable && !props.disableNoInternet) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_MissingInternet__WEBPACK_IMPORTED_MODULE_2__.MissingInternet, {}) }));
    }
    const modules = react__WEBPACK_IMPORTED_MODULE_9___default().useMemo(() => props.modules, [props.modules]);
    const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_9___default().useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const findCurrentFilter = react__WEBPACK_IMPORTED_MODULE_9___default().useMemo(() => _Hooks_useModulesFilter__WEBPACK_IMPORTED_MODULE_4__.filters.find((f) => f.value === _filter), [_filter]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page, { renderFixed: props.renderFixed, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_3__.Page.RelativeContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "row", justifyContent: "space-between", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], { onClick: () => {
                                _Native_Os__WEBPACK_IMPORTED_MODULE_7__.os.open("https://github.com/sponsors/DerGoogler", {
                                    target: "_blank",
                                    features: {
                                        color: theme.palette.background.default,
                                    },
                                });
                            }, variant: "outlined", endIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_VolunteerActivism__WEBPACK_IMPORTED_MODULE_13__["default"], {}), children: "Sponsor" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], { id: "demo-customized-button", "aria-controls": open ? "demo-customized-menu" : undefined, "aria-haspopup": "true", "aria-expanded": open ? "true" : undefined, variant: "contained", onClick: handleClick, endIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_14__["default"], {}), children: findCurrentFilter ? findCurrentFilter.name : "None" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_DropdownButton__WEBPACK_IMPORTED_MODULE_1__.StyledMenu, { id: "demo-customized-menu", MenuListProps: {
                                "aria-labelledby": "demo-customized-button",
                            }, anchorEl: anchorEl, open: open, onClose: () => {
                                setAnchorEl(null);
                            }, children: _Hooks_useModulesFilter__WEBPACK_IMPORTED_MODULE_4__.filters.map((fil) => {
                                if (fil.allowedIds.includes(props.id)) {
                                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_15__["default"], { onClick: () => {
                                            setFilter(fil.value);
                                            setAnchorEl(null);
                                        }, disableRipple: true, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(fil.icon, {}), fil.name] }));
                                }
                                else {
                                    return null;
                                }
                            }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: { mt: 1 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((flatlist_react__WEBPACK_IMPORTED_MODULE_8___default()), { list: modules, renderItem: renderItem, renderOnScroll: true, renderWhenEmpty: () => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RenderWhenEmpty, {}), sortBy: filter, display: {
                            row: true,
                            rowGap: "8px",
                        }, group: props.group }) })] }) }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModuleFragment);


/***/ }),

/***/ "./src/components/Ansi.tsx":
/*!*********************************!*\
  !*** ./src/components/Ansi.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ansi: () => (/* binding */ Ansi)
/* harmony export */ });
/* harmony import */ var anser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! anser */ "./node_modules/anser/lib/index.js");
/* harmony import */ var anser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(anser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var escape_carriage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! escape-carriage */ "./node_modules/escape-carriage/index.js");
/* harmony import */ var escape_carriage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(escape_carriage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var linkify_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! linkify-it */ "./node_modules/linkify-it/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _dapi_Code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dapi/Code */ "./src/components/dapi/Code.tsx");
/* harmony import */ var _dapi_Anchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dapi/Anchor */ "./src/components/dapi/Anchor.tsx");






function ansiToJSON(input, use_classes = false) {
    input = (0,escape_carriage__WEBPACK_IMPORTED_MODULE_1__.escapeCarriageReturn)(fixBackspace(input));
    return anser__WEBPACK_IMPORTED_MODULE_0___default().ansiToJson(input, {
        json: true,
        remove_empty: true,
        use_classes,
    });
}
function createClass(bundle) {
    let classNames = "";
    if (bundle.bg) {
        classNames += `${bundle.bg}-bg `;
    }
    if (bundle.fg) {
        classNames += `${bundle.fg}-fg `;
    }
    if (bundle.decoration) {
        classNames += `ansi-${bundle.decoration} `;
    }
    if (classNames === "") {
        return null;
    }
    classNames = classNames.substring(0, classNames.length - 1);
    return classNames;
}
function createStyle(bundle) {
    const style = {};
    if (bundle.bg) {
        style.backgroundColor = `rgb(${bundle.bg})`;
    }
    if (bundle.fg) {
        style.color = `rgb(${bundle.fg})`;
    }
    switch (bundle.decoration) {
        case "bold":
            style.fontWeight = "bold";
            break;
        case "dim":
            style.opacity = "0.5";
            break;
        case "italic":
            style.fontStyle = "italic";
            break;
        case "hidden":
            style.visibility = "hidden";
            break;
        case "strikethrough":
            style.textDecoration = "line-through";
            break;
        case "underline":
            style.textDecoration = "underline";
            break;
        case "blink":
            style.textDecoration = "blink";
            break;
        default:
            break;
    }
    return style;
}
function convertBundleIntoReact(linkify, useClasses, bundle, key) {
    const style = useClasses ? null : createStyle(bundle);
    const className = useClasses ? createClass(bundle) : null;
    if (!linkify) {
        return react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", { style, key, className }, bundle.content);
    }
    if (linkify === "fuzzy") {
        return linkWithLinkify(bundle, key, style, className);
    }
    return linkWithClassicMode(bundle, key, style, className);
}
function linkWithClassicMode(bundle, key, style, className) {
    const content = [];
    const linkRegex = /(\s|^)(https?:\/\/(?:www\.|(?!www))[^\s.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g;
    let index = 0;
    let match;
    while ((match = linkRegex.exec(bundle.content)) !== null) {
        const [, pre, url] = match;
        const startIndex = match.index + pre.length;
        if (startIndex > index) {
            content.push(bundle.content.substring(index, startIndex));
        }
        const href = url.startsWith("www.") ? `http://${url}` : url;
        content.push(react__WEBPACK_IMPORTED_MODULE_3__.createElement(_dapi_Anchor__WEBPACK_IMPORTED_MODULE_5__.Anchor, {
            noIcon: true,
            color: "unset",
            key: index,
            href,
            target: "_blank",
        }, `${url}`));
        index = linkRegex.lastIndex;
    }
    if (index < bundle.content.length) {
        content.push(bundle.content.substring(index));
    }
    return react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", { style, key, className }, content);
}
function linkWithLinkify(bundle, key, style, className) {
    const linker = (0,linkify_it__WEBPACK_IMPORTED_MODULE_2__["default"])({ fuzzyEmail: false }).tlds(["io"], true);
    if (!linker.pretest(bundle.content)) {
        return react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", { style, key, className }, bundle.content);
    }
    const matches = linker.match(bundle.content);
    if (!matches) {
        return react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", { style, key, className }, bundle.content);
    }
    const content = [bundle.content.substring(0, matches[0]?.index)];
    matches.forEach((match, i) => {
        content.push(react__WEBPACK_IMPORTED_MODULE_3__.createElement(_dapi_Anchor__WEBPACK_IMPORTED_MODULE_5__.Anchor, {
            noIcon: true,
            color: "unset",
            href: match.url,
            target: "_blank",
            key: i,
        }, bundle.content.substring(match.index, match.lastIndex)));
        if (matches[i + 1]) {
            content.push(bundle.content.substring(matches[i].lastIndex, matches[i + 1]?.index));
        }
    });
    if (matches[matches.length - 1].lastIndex !== bundle.content.length) {
        content.push(bundle.content.substring(matches[matches.length - 1].lastIndex, bundle.content.length));
    }
    return react__WEBPACK_IMPORTED_MODULE_3__.createElement("span", { style, key, className }, content);
}
function Ansi(props) {
    const { className, useClasses, children, linkify, ...rest } = props;
    return react__WEBPACK_IMPORTED_MODULE_3__.createElement(_dapi_Code__WEBPACK_IMPORTED_MODULE_4__.Code, { className, ...rest }, ansiToJSON(children ?? "", useClasses ?? false).map(convertBundleIntoReact.bind(null, linkify ?? false, useClasses ?? false)));
}
function fixBackspace(txt) {
    let tmp = txt;
    do {
        txt = tmp;
        tmp = txt.replace(/[^\n]\x08/gm, "");
    } while (tmp.length < txt.length);
    return txt;
}


/***/ }),

/***/ "./src/components/AntiFeatureListItem.tsx":
/*!************************************************!*\
  !*** ./src/components/AntiFeatureListItem.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _locales_antifeatures_en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../locales/antifeatures/en */ "./src/locales/antifeatures/en.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");





const AntiFeatureListItem = (props) => {
    const find = react__WEBPACK_IMPORTED_MODULE_2___default().useMemo(() => _locales_antifeatures_en__WEBPACK_IMPORTED_MODULE_1__.en_antifeatures.find((anti) => anti.id === props.type), []);
    if (!find)
        return null;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_3__["default"], { sx: props.sx, disablePadding: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { primary: find.name, secondary: find.desc }) }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AntiFeatureListItem);


/***/ }),

/***/ "./src/components/AntifeaturesButton.tsx":
/*!***********************************************!*\
  !*** ./src/components/AntifeaturesButton.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AntifeatureButton: () => (/* binding */ AntifeatureButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/WarningAmber */ "./node_modules/@mui/icons-material/WarningAmber.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _AntiFeatureListItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AntiFeatureListItem */ "./src/components/AntiFeatureListItem.tsx");
/* harmony import */ var _onsenui_GestureDetector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./onsenui/GestureDetector */ "./src/components/onsenui/GestureDetector.tsx");








const AntifeatureButton = (props) => {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_2__.useStrings)();
    const handleClickOpen = (e) => {
        e.preventDefault();
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_onsenui_GestureDetector__WEBPACK_IMPORTED_MODULE_4__.GestureDetector, { onHold: handleClickOpen, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: props.sx, variant: "contained", color: "error", size: "small", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_WarningAmber__WEBPACK_IMPORTED_MODULE_6__["default"], {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], { open: open, onClose: handleClose, scroll: "paper", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { children: strings("antifeatures") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], { dividers: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { disablePadding: true, children: typeof props.antifeatures === "string" ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AntiFeatureListItem__WEBPACK_IMPORTED_MODULE_3__["default"], { type: props.antifeatures })) : (Array.isArray(props.antifeatures) && props.antifeatures.map((anti) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AntiFeatureListItem__WEBPACK_IMPORTED_MODULE_3__["default"], { type: anti }))) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], { onClick: handleClose, children: strings("cancel") }) })] })] }));
};


/***/ }),

/***/ "./src/components/CodeBlock.tsx":
/*!**************************************!*\
  !*** ./src/components/CodeBlock.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CodeBlock: () => (/* binding */ CodeBlock)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Markdown_StyledMarkdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Markdown/StyledMarkdown */ "./src/components/Markdown/StyledMarkdown.tsx");
/* harmony import */ var _dapi_Pre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dapi/Pre */ "./src/components/dapi/Pre.tsx");
/* harmony import */ var _dapi_Code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dapi/Code */ "./src/components/dapi/Code.tsx");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/es/index.js");






const CodeBlock = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(({ lang, children, sx }, ref) => {
    const _ref = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const className = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => `lang-${lang} hljs language-${lang}`, [lang]);
    if (typeof children !== "string") {
        throw new TypeError("CodeBlock children aren't a string");
    }
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        if (_ref.current) {
            _ref.current.querySelectorAll("pre code").forEach((block) => {
                block.removeAttribute("data-highlighted");
                highlight_js__WEBPACK_IMPORTED_MODULE_5__["default"].highlightElement(block);
            });
        }
    }, [children]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Markdown_StyledMarkdown__WEBPACK_IMPORTED_MODULE_2__.StyledMarkdown, { ref: _ref, sx: sx, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dapi_Pre__WEBPACK_IMPORTED_MODULE_3__.Pre, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_dapi_Code__WEBPACK_IMPORTED_MODULE_4__.Code, { className: className, children: children }) }) }));
});



/***/ }),

/***/ "./src/components/DialogEditTextListItem.tsx":
/*!***************************************************!*\
  !*** ./src/components/DialogEditTextListItem.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DialogEditTextListItem: () => (/* binding */ DialogEditTextListItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogActions */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/DialogContentText */ "./node_modules/@mui/material/DialogContentText/DialogContentText.js");
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);











const DialogEditTextListItem = (props) => {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__.useStrings)();
    const [textInput, setTextInput] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(props.initialValue);
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleRepoLinkChange = (event) => {
        setTextInput(event.target.value);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_3__["default"], { disabled: props.disabled, onClick: handleClickOpen, children: props.children }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"], { sx: { position: "absolute" }, slotProps: {
                    backdrop: {
                        sx: {
                            position: "absolute",
                        },
                    },
                }, container: () => document.getElementById("ModConf-Container"), open: open, maxWidth: "md", fullWidth: true, onClose: handleClose, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_5__["default"], { children: props.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_6__["default"], { children: [props.description && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_7__["default"], { children: props.description }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], { autoFocus: true, fullWidth: true, margin: "dense", type: props.type || "text", label: props.inputLabel, value: textInput, variant: "outlined", onChange: handleRepoLinkChange, InputProps: props.InputProps, helperText: props.helperText, inputProps: { maxLength: props.maxLength }, multiline: props.multiline, maxRows: props.maxRows })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_9__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__["default"], { onClick: handleClose, children: strings("cancel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_10__["default"], { onClick: () => (props.onSuccess(textInput), handleClose()), children: "Apply" })] })] })] }));
};


/***/ }),

/***/ "./src/components/DropdownButton.tsx":
/*!*******************************************!*\
  !*** ./src/components/DropdownButton.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DropdownButton: () => (/* binding */ DropdownButton),
/* harmony export */   StyledMenu: () => (/* binding */ StyledMenu)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Hooks_useNativeStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useNativeStorage */ "./src/hooks/useNativeStorage.tsx");
/* harmony import */ var _mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/ArrowDropDown */ "./node_modules/@mui/icons-material/ArrowDropDown.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ButtonGroup */ "./node_modules/@mui/material/ButtonGroup/ButtonGroup.js");
/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Menu */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/system/esm/colorManipulator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);










const StyledMenu = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])((props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], { elevation: 0, anchorOrigin: {
        vertical: "bottom",
        horizontal: "right",
    }, transformOrigin: {
        vertical: "top",
        horizontal: "right",
    }, ...props })))(({ theme }) => ({
    "& .MuiPaper-root": {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === "light" ? "rgb(55, 65, 81)" : theme.palette.grey[300],
        boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        "& .MuiMenu-list": {
            padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
            "& .MuiSvgIcon-root": {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            "&:active": {
                backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.alpha)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            },
        },
    },
}));
const DropdownButton = (props) => {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_2__.useState(false);
    const anchorRef = react__WEBPACK_IMPORTED_MODULE_2__.useRef(null);
    const [selectedIndex, setSelectedIndex] = (0,_Hooks_useNativeStorage__WEBPACK_IMPORTED_MODULE_1__.useNativeStorage)("module_page_button_action", 0);
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { sx: props.sx, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_7__["default"], { variant: "contained", "aria-label": "Button group with a nested menu", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__["default"], { ...props.options[selectedIndex] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__["default"], { ref: anchorRef, size: "small", "aria-controls": open ? "split-button-menu" : undefined, "aria-expanded": open ? "true" : undefined, "aria-label": "select merge strategy", "aria-haspopup": "menu", onClick: handleToggle, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material_ArrowDropDown__WEBPACK_IMPORTED_MODULE_9__["default"], {}) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StyledMenu, { anchorEl: anchorRef.current, open: open, onClose: handleClose, children: props.options.map((option, index) => {
                    switch (option.type) {
                        case "divider":
                            return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: { my: 0.5 } });
                        default:
                            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_11__["default"], { disabled: option.disabled, selected: index === selectedIndex, onClick: (event) => handleMenuItemClick(event, index), children: option.children }, index));
                    }
                }) })] }));
};


/***/ }),

/***/ "./src/components/ErrorBoundary.tsx":
/*!******************************************!*\
  !*** ./src/components/ErrorBoundary.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorBoundary: () => (/* binding */ ErrorBoundary),
/* harmony export */   errorBoundaryInitialState: () => (/* binding */ errorBoundaryInitialState)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const errorBoundaryInitialState = {
    hasError: false,
    error: {
        name: "string",
        message: "string",
        stack: "string",
    },
    errorInfo: {
        /**
         * Captures which component contained the exception, and its ancestors.
         */
        componentStack: "string",
    },
};
class ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
    constructor(props) {
        super(props);
        this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
        this.state = errorBoundaryInitialState;
    }
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
    }
    resetErrorBoundary() {
        const { error } = this.state;
        if (error !== null) {
            this.setState(errorBoundaryInitialState);
        }
    }
    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return this.props.fallback(this.state.error, this.state.errorInfo, this.resetErrorBoundary);
        }
        return this.props.children;
    }
}


/***/ }),

/***/ "./src/components/Icon.tsx":
/*!*********************************!*\
  !*** ./src/components/Icon.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");


/**
 * An icon wrapper for Material React icons
 */
const Icon = (props) => {
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_1__.useSettings)();
    const { keepLight, icon: WarpperIcon, ...rest } = props;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(WarpperIcon, { sx: {
            color: keepLight ? "rgba(255, 255, 255, 1)" : settings.darkmode ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 0.54)",
            verticalAlign: "baseline",
        }, ...rest }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ "./src/components/ListPickerItem.tsx":
/*!*******************************************!*\
  !*** ./src/components/ListPickerItem.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmationDialogRaw: () => (/* binding */ ConfirmationDialogRaw),
/* harmony export */   ListPickerItem: () => (/* binding */ ListPickerItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/DialogContent */ "./node_modules/@mui/material/DialogContent/DialogContent.js");
/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/DialogActions */ "./node_modules/@mui/material/DialogActions/DialogActions.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/RadioGroup */ "./node_modules/@mui/material/RadioGroup/RadioGroup.js");
/* harmony import */ var _mui_material_Radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Radio */ "./node_modules/@mui/material/Radio/Radio.js");
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/FormControlLabel */ "./node_modules/@mui/material/FormControlLabel/FormControlLabel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");












/**
 * Remembers! The first item in the array will be the default.
 * @param props
 * @returns
 */
function ListPickerItem(props) {
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const { settings, setSettings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_2__.useSettings)();
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(settings[props.targetSetting]);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = (val) => {
        setOpen(false);
        if (val.name && val.value) {
            setValue(val);
            setSettings(props.targetSetting, val);
        }
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { disabled: props.disabled, onClick: handleOpen, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { primary: props.title, secondary: settings[props.targetSetting].name }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ConfirmationDialogRaw, { id: props.id, title: props.title, keepMounted: true, open: open, contentMap: props.contentMap, onClose: handleClose, value: value })] }));
}
function ConfirmationDialogRaw(props) {
    const { onClose, value: valueProp, open, ...other } = props;
    const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(valueProp);
    const radioGroupRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        if (!open) {
            setValue(valueProp);
        }
    }, [valueProp, open]);
    const handleEntering = () => {
        if (radioGroupRef.current != null) {
            radioGroupRef.current.focus();
        }
    };
    const handleCancel = () => {
        onClose(null);
    };
    const handleOk = () => {
        onClose(value);
    };
    const handleChange = (event) => {
        setValue(JSON.parse(event.target.value));
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }, maxWidth: "xs", TransitionProps: { onEntering: handleEntering }, open: open, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_6__["default"], { children: props.title }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_7__["default"], { dividers: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], { ref: radioGroupRef, "aria-label": "ringtone", name: "ringtone", value: JSON.stringify(value), onChange: handleChange, children: props.contentMap.map((option) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"]
                    // checked={option.value === value.value}
                    , { 
                        // checked={option.value === value.value}
                        value: JSON.stringify({ name: option.name, value: option.value }), control: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Radio__WEBPACK_IMPORTED_MODULE_10__["default"], { checked: option.value === value.value }), label: option.name }, option.value))) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_11__["default"], { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], { autoFocus: true, onClick: handleCancel, children: "Cancel" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__["default"], { onClick: handleOk, children: "Ok" })] })] }));
}


/***/ }),

/***/ "./src/components/Markdown/StyledMarkdown.tsx":
/*!****************************************************!*\
  !*** ./src/components/Markdown/StyledMarkdown.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyledMarkdown: () => (/* binding */ StyledMarkdown)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _hooks_useSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");



const StyledMarkdown = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])("article")(() => {
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const { settings } = (0,_hooks_useSettings__WEBPACK_IMPORTED_MODULE_0__.useSettings)();
    return {
        msTextSizeAdjust: "100%",
        WebkitTextSizeAdjust: "100%",
        margin: "0",
        color: theme.palette.text.primary,
        // backgroundColor: "#ffffff",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji",\n    "Segoe UI Emoji"',
        fontSize: "16px",
        lineHeight: 1.5,
        wordWrap: "break-word",
        ".octicon": {
            display: "inline-block",
            fill: "currentColor",
            verticalAlign: "text-bottom",
            overflow: "visible !important",
        },
        "h1:hover .anchor .octicon-link:before,\n  h2:hover .anchor .octicon-link:before,\n  h3:hover .anchor .octicon-link:before,\n  h4:hover .anchor .octicon-link:before,\n  h5:hover .anchor .octicon-link:before,\n  h6:hover .anchor .octicon-link:before": {
            width: "16px",
            height: "16px",
            content: '" "',
            display: "inline-block",
            backgroundColor: "currentColor",
            WebkitMaskImage: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\")",
            maskImage: "url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\")",
        },
        "details,\n  figcaption,\n  figure": { display: "block" },
        summary: { display: "list-item" },
        "[hidden]": { display: "none !important" },
        a: {
            backgroundColor: "transparent",
            color: "#4a148c",
            textDecoration: "none",
            "&:active,\n    &:hover": { outlineWidth: "0" },
        },
        "abbr[title]": { borderBottom: "none", textDecoration: "underline dotted" },
        "b,\n  strong": { fontWeight: 600 },
        dfn: { fontStyle: "italic" },
        h1: {
            margin: "0.67em 0",
            fontWeight: 600,
            paddingBottom: "0.3em",
            fontSize: "2em",
            borderBottom: `thin solid ${theme.palette.divider}`,
            "tt,\n    code": { padding: "0 0.2em", fontSize: "inherit" },
        },
        mark: { backgroundColor: "#fff8c5", color: "#24292f" },
        small: { fontSize: "90%" },
        "sub,\n  sup": {
            fontSize: "75%",
            lineHeight: 0,
            position: "relative",
            verticalAlign: "baseline",
        },
        sub: { bottom: "-0.25em" },
        sup: { top: "-0.5em" },
        img: {
            borderStyle: "none",
            maxWidth: "100%",
            boxSizing: "content-box",
            '&[align="right"]': { paddingLeft: "20px" },
            '&[align="left"]': { paddingRight: "20px" },
        },
        "code,\n  kbd,\n  pre,\n  samp": {
            fontFamily: "monospace, monospace",
            fontSize: "1em",
        },
        figure: { margin: "1em 40px" },
        hr: {
            boxSizing: "content-box",
            overflow: "hidden",
            background: "transparent",
            borderBottom: `thin solid ${theme.palette.divider}`,
            height: "0.25em",
            padding: "0",
            margin: "24px 0",
            backgroundColor: theme.palette.divider,
            border: "0",
            "&::before": { display: "table", content: '""' },
            "&::after": { display: "table", clear: "both", content: '""' },
        },
        input: {
            font: "inherit",
            margin: "0",
            overflow: "visible",
            fontFamily: "inherit",
            fontSize: "inherit",
            lineHeight: "inherit",
            "&::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button": {
                margin: "0",
                WebkitAppearance: "none",
                appearance: "none",
            },
        },
        '[type="button"],\n  [type="reset"],\n  [type="submit"]': {
            WebkitAppearance: "button",
        },
        '[type="button"]::-moz-focus-inner,\n  [type="reset"]::-moz-focus-inner,\n  [type="submit"]::-moz-focus-inner': {
            borderStyle: "none",
            padding: "0",
        },
        '[type="button"]:-moz-focusring,\n  [type="reset"]:-moz-focusring,\n  [type="submit"]:-moz-focusring': {
            outline: "1px dotted ButtonText",
        },
        '[type="checkbox"],\n  [type="radio"]': {
            boxSizing: "border-box",
            padding: "0",
        },
        '[type="number"]': {
            "&::-webkit-inner-spin-button,\n    &::-webkit-outer-spin-button": {
                height: "auto",
            },
        },
        '[type="search"]': {
            WebkitAppearance: "textfield",
            outlineOffset: "-2px",
            "&::-webkit-search-cancel-button,\n    &::-webkit-search-decoration": {
                WebkitAppearance: "none",
            },
        },
        "::-webkit-input-placeholder": { color: "inherit", opacity: 0.54 },
        "::-webkit-file-upload-button": {
            WebkitAppearance: "button",
            font: "inherit",
        },
        "a:hover": { textDecoration: "underline" },
        table: {
            borderSpacing: "0",
            borderCollapse: "collapse",
            display: "block",
            width: "max-content",
            maxWidth: "100%",
            overflow: "auto",
            th: { fontWeight: 600, padding: "6px 13px", border: `1px solid ${theme.palette.divider}` },
            td: { padding: "6px 13px", border: `1px solid ${theme.palette.divider}` },
            tr: {
                backgroundColor: theme.palette.background.default,
                borderTop: `thin solid ${theme.palette.divider}`,
                "&:nth-child(2n)": {
                    backgroundColor: theme.palette.background.paper,
                },
            },
            img: { backgroundColor: "transparent" },
        },
        "td,\n  th": { padding: "0" },
        details: {
            summary: { cursor: "pointer" },
            "&:not([open]) > *:not(summary)": { display: "none !important" },
        },
        kbd: {
            display: "inline-block",
            padding: "3px 5px",
            font: "11px ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
            lineHeight: "10px",
            color: "#24292f",
            verticalAlign: "middle",
            backgroundColor: "#f6f8fa",
            border: "solid 1px rgba(175, 184, 193, 0.2)",
            borderBottomColor: "rgba(175, 184, 193, 0.2)",
            borderRadius: "6px",
            boxShadow: "inset 0 -1px 0 rgba(175, 184, 193, 0.2)",
        },
        "h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6": {
            marginTop: "24px",
            marginBottom: "16px",
            fontWeight: 600,
            lineHeight: 1.25,
        },
        h2: {
            fontWeight: 600,
            paddingBottom: "0.3em",
            fontSize: "1.5em",
            borderBottom: `thin solid ${theme.palette.divider}`,
            "tt,\n    code": { padding: "0 0.2em", fontSize: "inherit" },
        },
        h3: {
            fontWeight: 600,
            fontSize: "1.25em",
            "tt,\n    code": { padding: "0 0.2em", fontSize: "inherit" },
        },
        h4: {
            fontWeight: 600,
            fontSize: "1em",
            "tt,\n    code": { padding: "0 0.2em", fontSize: "inherit" },
        },
        h5: {
            fontWeight: 600,
            fontSize: "0.875em",
            "tt,\n    code": { padding: "0 0.2em", fontSize: "inherit" },
        },
        h6: {
            fontWeight: 600,
            fontSize: "0.85em",
            color: "#57606a",
            "tt,\n    code": { padding: "0 0.2em", fontSize: "inherit" },
        },
        p: { marginTop: "0", marginBottom: "10px" },
        blockquote: {
            margin: "0",
            padding: "0 1em",
            color: theme.palette.text.secondary,
            borderLeft: `5px solid ${theme.palette.text.secondary}`,
        },
        ul: {
            marginTop: "0",
            marginBottom: "0",
            paddingLeft: "2em",
            ol: { listStyleType: "lower-roman" },
            "ul ol,\n    ol ol": { listStyleType: "lower-alpha" },
            "ul,\n    ol": { marginTop: "0", marginBottom: "0" },
        },
        ol: {
            marginTop: "0",
            marginBottom: "0",
            paddingLeft: "2em",
            ol: { listStyleType: "lower-roman" },
            "ul ol,\n    ol ol": { listStyleType: "lower-alpha" },
            "&.no-list": { padding: "0", listStyleType: "none" },
            '&[type="1"]': { listStyleType: "decimal" },
            '&[type="a"]': { listStyleType: "lower-alpha" },
            '&[type="i"]': { listStyleType: "lower-roman" },
            "ol,\n    ul": { marginTop: "0", marginBottom: "0" },
        },
        dd: { marginLeft: "0" },
        "tt,\n  code": {
            fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
            fontSize: "12px",
        },
        pre: {
            marginTop: "0",
            marginBottom: "0",
            fontFamily: "ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace",
            fontSize: "85%",
            wordWrap: "normal",
            code: { fontSize: "100%" },
            "> code": {
                padding: "0",
                margin: "0",
                wordBreak: "normal",
                whiteSpace: "pre",
                background: "transparent",
                border: "0",
            },
            padding: "16px",
            overflow: "auto",
            lineHeight: 1.45,
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            "code,\n    tt": {
                display: "inline",
                maxWidth: "auto",
                padding: "0",
                margin: "0",
                overflow: "visible",
                lineHeight: "inherit",
                wordWrap: "normal",
                backgroundColor: "transparent",
                border: "0",
            },
        },
        "::placeholder": { color: "#6e7781", opacity: 1 },
        ".pl-c": { color: "#6e7781" },
        ".pl-c1,\n  .pl-s .pl-v": { color: "#0550ae" },
        ".pl-e,\n  .pl-en": { color: "#8250df" },
        ".pl-smi,\n  .pl-s .pl-s1": { color: "#24292f" },
        ".pl-ent": { color: "#116329" },
        ".pl-k": { color: "#cf222e" },
        ".pl-s,\n  .pl-pds,\n  .pl-s .pl-pse .pl-s1": { color: "#0a3069" },
        ".pl-sr": {
            color: "#0a3069",
            ".pl-cce,\n    .pl-sre,\n    .pl-sra": { color: "#0a3069" },
        },
        ".pl-v,\n  .pl-smw": { color: "#953800" },
        ".pl-bu": { color: "#82071e" },
        ".pl-ii": { color: "#f6f8fa", backgroundColor: "#82071e" },
        ".pl-c2": { color: "#f6f8fa", backgroundColor: "#cf222e" },
        ".pl-sr .pl-cce": { fontWeight: "bold", color: "#116329" },
        ".pl-ml": { color: "#3b2300" },
        ".pl-mh": {
            fontWeight: "bold",
            color: "#0550ae",
            ".pl-en": { fontWeight: "bold", color: "#0550ae" },
        },
        ".pl-ms": { fontWeight: "bold", color: "#0550ae" },
        ".pl-mi": { fontStyle: "italic", color: "#24292f" },
        ".pl-mb": { fontWeight: "bold", color: "#24292f" },
        ".pl-md": { color: "#82071e", backgroundColor: "#ffebe9" },
        ".pl-mi1": { color: "#116329", backgroundColor: "#dafbe1" },
        ".pl-mc": { color: "#953800", backgroundColor: "#ffd8b5" },
        ".pl-mi2": { color: "#eaeef2", backgroundColor: "#0550ae" },
        ".pl-mdr": { fontWeight: "bold", color: "#8250df" },
        ".pl-ba": { color: "#57606a" },
        ".pl-sg": { color: "#8c959f" },
        ".pl-corl": { textDecoration: "underline", color: "#0a3069" },
        "[data-catalyst]": { display: "block" },
        "g-emoji": {
            fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            fontSize: "1em",
            fontStyle: "normal !important",
            fontWeight: 400,
            lineHeight: 1,
            verticalAlign: "-0.075em",
            img: { width: "1em", height: "1em" },
        },
        "&::before": { display: "table", content: '""' },
        "&::after": { display: "table", clear: "both", content: '""' },
        "> *": {
            "&:first-of-type": { marginTop: "0 !important" },
            "&:last-child": { marginBottom: "0 !important" },
        },
        "a:not([href])": { color: "inherit", textDecoration: "none" },
        ".absent": { color: "#cf222e" },
        ".anchor": {
            cssFloat: "left",
            paddingRight: "4px",
            marginLeft: "-20px",
            lineHeight: 1,
            "&:focus": { outline: "none" },
        },
        "p,\n  blockquote,\n  ul,\n  ol,\n  dl,\n  table,\n  pre,\n  details": {
            marginTop: "0",
            marginBottom: "16px",
        },
        "blockquote >": {
            ":first-of-type": { marginTop: "0" },
            ":last-child": { marginBottom: "0" },
        },
        "sup > a": {
            "&::before": { content: '"["' },
            "&::after": { content: '"]"' },
        },
        "h1 .octicon-link,\n  h2 .octicon-link,\n  h3 .octicon-link,\n  h4 .octicon-link,\n  h5 .octicon-link,\n  h6 .octicon-link": {
            color: "#24292f",
            verticalAlign: "middle",
            visibility: "hidden",
        },
        "h1:hover .anchor,\n  h2:hover .anchor,\n  h3:hover .anchor,\n  h4:hover .anchor,\n  h5:hover .anchor,\n  h6:hover .anchor": {
            textDecoration: "none",
        },
        "h1:hover .anchor .octicon-link,\n  h2:hover .anchor .octicon-link,\n  h3:hover .anchor .octicon-link,\n  h4:hover .anchor .octicon-link,\n  h5:hover .anchor .octicon-link,\n  h6:hover .anchor .octicon-link": {
            visibility: "visible",
        },
        "ul.no-list": { padding: "0", listStyleType: "none" },
        "div > ol:not([type])": { listStyleType: "decimal" },
        li: { "> p": { marginTop: "16px" }, "+ li": { marginTop: "0.25em" } },
        dl: {
            padding: "0",
            dt: {
                padding: "0",
                marginTop: "16px",
                fontSize: "1em",
                fontStyle: "italic",
                fontWeight: 600,
            },
            dd: { padding: "0 16px", marginBottom: "16px" },
        },
        ".emoji": {
            maxWidth: "none",
            verticalAlign: "text-top",
            backgroundColor: "transparent",
        },
        span: {
            "&.frame": {
                display: "block",
                overflow: "hidden",
                "> span": {
                    display: "block",
                    cssFloat: "left",
                    width: "auto",
                    padding: "7px",
                    margin: "13px 0 0",
                    overflow: "hidden",
                    border: "1px solid #d0d7de",
                },
                span: {
                    img: { display: "block", cssFloat: "left" },
                    span: {
                        display: "block",
                        padding: "5px 0 0",
                        clear: "both",
                        color: "#24292f",
                    },
                },
            },
            "&.align-center": {
                display: "block",
                overflow: "hidden",
                clear: "both",
                "> span": {
                    display: "block",
                    margin: "13px auto 0",
                    overflow: "hidden",
                    textAlign: "center",
                },
                "span img": { margin: "0 auto", textAlign: "center" },
            },
            "&.align-right": {
                display: "block",
                overflow: "hidden",
                clear: "both",
                "> span": {
                    display: "block",
                    margin: "13px 0 0",
                    overflow: "hidden",
                    textAlign: "right",
                },
                "span img": { margin: "0", textAlign: "right" },
            },
            "&.float-left": {
                display: "block",
                cssFloat: "left",
                marginRight: "13px",
                overflow: "hidden",
                span: { margin: "13px 0 0" },
            },
            "&.float-right": {
                display: "block",
                cssFloat: "right",
                marginLeft: "13px",
                overflow: "hidden",
                "> span": {
                    display: "block",
                    margin: "13px auto 0",
                    overflow: "hidden",
                    textAlign: "right",
                },
            },
        },
        "code,\n  tt": {
            padding: "0.2em 0.4em",
            margin: "0",
            fontSize: "85%",
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
            borderRadius: "6px",
        },
        "code br,\n  tt br": { display: "none" },
        "del code": { textDecoration: "inherit" },
        ".highlight": {
            marginBottom: "16px",
            pre: {
                marginBottom: "0",
                wordBreak: "normal",
                padding: "16px",
                overflow: "auto",
                fontSize: "85%",
                lineHeight: 1.45,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.paper,
                borderRadius: "6px",
            },
        },
        ".csv-data": {
            "td,\n    th": {
                padding: "5px",
                overflow: "hidden",
                fontSize: "12px",
                lineHeight: 1,
                textAlign: "left",
                whiteSpace: "nowrap",
            },
            ".blob-num": {
                padding: "10px 8px 9px",
                textAlign: "right",
                background: "#ffffff",
                border: "0",
            },
            tr: { borderTop: "0" },
            th: { fontWeight: 600, background: "#f6f8fa", borderTop: "0" },
        },
        ".footnotes": {
            fontSize: "12px",
            color: "#57606a",
            borderTop: "1px solid #d0d7de",
            ol: { paddingLeft: "16px" },
            li: {
                position: "relative",
                "&:target": {
                    "&::before": {
                        position: "absolute",
                        top: "-8px",
                        right: "-8px",
                        bottom: "-8px",
                        left: "-24px",
                        pointerEvents: "none",
                        content: '""',
                        border: "2px solid #0969da",
                        borderRadius: "6px",
                    },
                    color: "#24292f",
                },
            },
            ".data-footnote-backref g-emoji": { fontFamily: "monospace" },
        },
        ".task-list-item": {
            listStyleType: "none",
            label: { fontWeight: 400 },
            "&.enabled label": { cursor: "pointer" },
            "+ .task-list-item": { marginTop: "3px" },
            ".handle": { display: "none" },
        },
        ".task-list-item-checkbox": {
            margin: "0 0.2em 0.25em -1.6em",
            verticalAlign: "middle",
        },
        ".contains-task-list:dir(rtl) .task-list-item-checkbox": {
            margin: "0 -1.6em 0.25em 0.2em",
        },
        "::-webkit-calendar-picker-indicator": { filter: "invert(50%)" },
        // Highlight.js
        ".hljs": {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
        },
        ".hljs-comment,\n.hljs-punctuation": { color: "#768390" },
        ".hljs-attr,\n.hljs-attribute,\n.hljs-meta,\n.hljs-selector-attr,\n.hljs-selector-class,\n.hljs-selector-id": {
            color: "#6cb6ff",
        },
        ".hljs-variable,\n.hljs-literal,\n.hljs-number,\n.hljs-doctag": {
            color: "#f69d50",
        },
        ".hljs-params": { color: "#cdd9e5" },
        ".hljs-function": { color: "#dcbdfb" },
        ".hljs-class,\n.hljs-tag,\n.hljs-title,\n.hljs-built_in": {
            color: "#8ddb8c",
        },
        ".hljs-keyword,\n.hljs-type,\n.hljs-builtin-name,\n.hljs-meta-keyword,\n.hljs-template-tag,\n.hljs-template-variable": {
            color: "#f47067",
        },
        ".hljs-string,\n.hljs-undefined": { color: "#96d0ff" },
        ".hljs-regexp": { color: "#96d0ff" },
        ".hljs-symbol": { color: "#6cb6ff" },
        ".hljs-bullet": { color: "#f69d50" },
        ".hljs-section": { color: "#6cb6ff", fontWeight: "bold" },
        ".hljs-quote,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-selector-pseudo": {
            color: "#8ddb8c",
        },
        ".hljs-emphasis": { color: "#f69d50", fontStyle: "italic" },
        ".hljs-strong": { color: "#f69d50", fontWeight: "bold" },
        ".hljs-deletion": { color: "#ff938a", backgroundColor: "#78191b" },
        ".hljs-addition": { color: "#8ddb8c", backgroundColor: "#113417" },
        ".hljs-link": { color: "#96d0ff", fontStyle: "underline" },
    };
});


/***/ }),

/***/ "./src/components/Markdown/index.tsx":
/*!*******************************************!*\
  !*** ./src/components/Markdown/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarkUpCompile: () => (/* binding */ MarkUpCompile),
/* harmony export */   MarkdownOverrides: () => (/* binding */ MarkdownOverrides),
/* harmony export */   Markup: () => (/* binding */ Markup),
/* harmony export */   admonitionTypes: () => (/* binding */ admonitionTypes)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/index.modern.js");
/* harmony import */ var _Components_dapi_Video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/dapi/Video */ "./src/components/dapi/Video.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AlertTitle/AlertTitle.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/es/index.js");
/* harmony import */ var _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/dapi/Image */ "./src/components/dapi/Image.tsx");
/* harmony import */ var _StyledMarkdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./StyledMarkdown */ "./src/components/Markdown/StyledMarkdown.tsx");
/* harmony import */ var _Components_dapi_DiscordWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Components/dapi/DiscordWidget */ "./src/components/dapi/DiscordWidget.tsx");
/* harmony import */ var _primer_octicons_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @primer/octicons-react */ "./node_modules/@primer/octicons-react/dist/index.esm.mjs");
/* harmony import */ var _Components_dapi_Code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Components/dapi/Code */ "./src/components/dapi/Code.tsx");
/* harmony import */ var _Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Components/dapi/Pre */ "./src/components/dapi/Pre.tsx");
/* harmony import */ var _Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Components/dapi/Anchor */ "./src/components/dapi/Anchor.tsx");
/* harmony import */ var _Hooks_useFetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Hooks/useFetch */ "./src/hooks/useFetch.ts");















const sx = {
    mb: 2,
};
const admonitionTypes = {
    "[!NOTE]": {
        title: "Note",
        render: (content) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: sx, severity: "info", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { children: "Note" }), content] })),
    },
    "[!TIP]": {
        title: "Tip",
        render: (content) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: sx, severity: "success", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { children: "Tip" }), content] })),
    },
    "[!IMPORTANT]": {
        title: "Important",
        render: (content) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: sx, severity: "info", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { children: "Important" }), content] })),
    },
    "[!WARNING]": {
        title: "Warning",
        render: (content) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: sx, severity: "warning", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { children: "Warning" }), content] })),
    },
    "[!CAUTION]": {
        title: "Caution",
        render: (content) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { sx: sx, severity: "error", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__["default"], { children: "Caution" }), content] })),
    },
};
const StyledDivider = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_14__["default"])({
    "h1, & h2, & h3, & h4, & h5, & h6": {
        border: "none",
    },
});
const MarkdownOverrides = {
    // Icons
    BugIcon: {
        component: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_15__.BugIcon,
    },
    IssueOpenedIcon: {
        component: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_15__.IssueOpenedIcon,
    },
    IssueClosedIcon: {
        component: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_15__.IssueClosedIcon,
    },
    IssueReopenedIcon: {
        component: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_15__.IssueReopenedIcon,
    },
    CheckIcon: {
        component: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_15__.CheckIcon,
    },
    XIcon: {
        component: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_15__.XIcon,
    },
    AlertIcon: {
        component: _primer_octicons_react__WEBPACK_IMPORTED_MODULE_15__.AlertIcon,
    },
    alert: {
        component: (props) => {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], { severity: props.info ? "info" : props.warning ? "warning" : props.error ? "error" : props.success ? "success" : "info", children: props.children }));
        },
    },
    img: {
        component: _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_5__.Image,
    },
    video: {
        component: _Components_dapi_Video__WEBPACK_IMPORTED_MODULE_1__.Video,
    },
    divider: {
        component: StyledDivider,
    },
    paper: {
        component: _mui_material__WEBPACK_IMPORTED_MODULE_16__["default"],
    },
    stack: {
        component: _mui_material__WEBPACK_IMPORTED_MODULE_17__["default"],
    },
    code: {
        component: _Components_dapi_Code__WEBPACK_IMPORTED_MODULE_8__.Code,
    },
    pre: {
        component: _Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_9__.Pre,
    },
    discordwidget: {
        component: _Components_dapi_DiscordWidget__WEBPACK_IMPORTED_MODULE_7__.DiscordWidget,
    },
};
const Markup = (props) => {
    const ref = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);
    const [fetchedText] = (0,_Hooks_useFetch__WEBPACK_IMPORTED_MODULE_11__.useFetch)(props.fetch, { type: "text" });
    const text = fetchedText || props.children;
    react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
        if (ref.current) {
            ref.current.querySelectorAll("pre code").forEach((block) => {
                block.removeAttribute("data-highlighted");
                highlight_js__WEBPACK_IMPORTED_MODULE_4__["default"].highlightElement(block);
            });
        }
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_StyledMarkdown__WEBPACK_IMPORTED_MODULE_6__.StyledMarkdown, { ref: ref, sx: props.sx, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_18__["default"], { style: props.styleMd, options: {
                overrides: MarkdownOverrides,
                createElement(type, props, ...children) {
                    switch (type) {
                        case "a":
                            return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_10__.Anchor, props, ...children);
                        default:
                            return react__WEBPACK_IMPORTED_MODULE_2___default().createElement(type, props, ...children);
                    }
                },
                renderRule(next, node, renderChildren, state) {
                    if (node.type != "0" /* RuleType.blockQuote */)
                        return next();
                    const blockquote = node;
                    if (blockquote.children[0].type != "21" /* RuleType.paragraph */)
                        return next();
                    const paragraph = blockquote.children[0];
                    if (paragraph.children[0].type != "27" /* RuleType.text */)
                        return next();
                    let text = paragraph.children.flatMap((p) => p.text).join("");
                    let title;
                    let admonitionType = null;
                    // A link break after the title is explicitly required by GitHub
                    const titleEnd = text.indexOf("\n");
                    if (titleEnd < 0) {
                        // But if the following one is a block, the newline would be trimmed by the upstream.
                        // To start a new block, a newline is required.
                        // So we just need to addtionally check if the following one is a block.
                        // The legacy title variant is not affected since it checks an inline and does not care about the newline.
                        // Considering the reason why the paragraph ends here, the following one should be a children of the blockquote, which means it is always a block.
                        // So no more check is required.
                        title = text;
                        admonitionType = admonitionTypes[title];
                        if (!admonitionType) {
                            return next();
                        }
                        // No addtional inlines can exist in this paragraph for the title...
                        if (paragraph.children.length > 1) {
                            // Unless it is an inline break, which can be transformed to from 2 spaces with a newline.
                            if (paragraph.children.at(1)?.type == "1" /* RuleType.breakLine */) {
                                // When it is, we actually have already found the line break required by GitHub.
                                // So we just strip the additional `<br>` element.
                                // The title element will be removed later.
                                paragraph.children.splice(1, 1);
                            }
                            else {
                                return next();
                            }
                        }
                        // strip the title
                        paragraph.children.shift();
                    }
                    else {
                        const textBody = text.substring(titleEnd + 1);
                        title = text.substring(0, titleEnd);
                        // Handle whitespaces after the title.
                        // Whitespace characters are defined by GFM.
                        const m = /[ \t\v\f\r]+$/.exec(title);
                        if (m) {
                            title = title.substring(0, title.length - m[0].length);
                        }
                        admonitionType = admonitionTypes[title];
                        if (!admonitionType)
                            return next();
                        // Update the text body to remove the title
                        text = textBody;
                    }
                    return admonitionType.render(text);
                },
            }, children: text || "" }) }));
};
const MarkUpCompile = (children) => {
    return (0,markdown_to_jsx__WEBPACK_IMPORTED_MODULE_18__.compiler)(children, { overrides: MarkdownOverrides });
};


/***/ }),

/***/ "./src/components/MissingInternet.tsx":
/*!********************************************!*\
  !*** ./src/components/MissingInternet.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MissingInternet: () => (/* binding */ MissingInternet)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_icons_material_WifiOffOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/icons-material/WifiOffOutlined */ "./node_modules/@mui/icons-material/WifiOffOutlined.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icon */ "./src/components/Icon.tsx");





const MissingInternet = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_2__["default"], { component: "h4", sx: (theme) => ({
            color: theme.palette.secondary.dark,
            width: "100%",
            height: "100%",
            m: "unset",
        }), direction: "column", justifyContent: "center", alignItems: "center", spacing: 2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_1__["default"], { icon: _mui_icons_material_WifiOffOutlined__WEBPACK_IMPORTED_MODULE_3__["default"], sx: {
                    fontSize: 160,
                } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__["default"], { children: "Please check your internet connection" })] }));
};


/***/ }),

/***/ "./src/components/dapi/Anchor.tsx":
/*!****************************************!*\
  !*** ./src/components/dapi/Anchor.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Anchor: () => (/* binding */ Anchor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var material_ui_confirm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui-confirm */ "./node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js");
/* harmony import */ var _Util_createRegexURL__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Util/createRegexURL */ "./src/util/createRegexURL.ts");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/GitHub.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Telegram.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/VolunteerActivism.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/YouTube.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/X.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Facebook.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Instagram.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Email.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/LocalPhone.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/LaunchRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Extension.js");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Activitys_ModuleViewActivity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Activitys/ModuleViewActivity */ "./src/activitys/ModuleViewActivity/index.tsx");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Components_onsenui_GestureDetector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Components/onsenui/GestureDetector */ "./src/components/onsenui/GestureDetector.tsx");
/* harmony import */ var _Components_icons_Xda__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/icons/Xda */ "./src/components/icons/Xda.tsx");
/* harmony import */ var _Components_CodeBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Components/CodeBlock */ "./src/components/CodeBlock.tsx");
















function useIcon(link) {
    if ((0,_Util_createRegexURL__WEBPACK_IMPORTED_MODULE_6__.createRegexURL)("github", "com").test(link)) {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__["default"];
    }
    else if ((0,_Util_createRegexURL__WEBPACK_IMPORTED_MODULE_6__.createRegexURL)(["xdaforums", "forum.xda-developers"], "com").test(link)) {
        return _Components_icons_Xda__WEBPACK_IMPORTED_MODULE_12__.Xda;
    }
    else if ((0,_Util_createRegexURL__WEBPACK_IMPORTED_MODULE_6__.createRegexURL)("(\\/[w-]+\\.)?t", "me").test(link)) {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_15__["default"];
    }
    else if ((0,_Util_createRegexURL__WEBPACK_IMPORTED_MODULE_6__.createRegexURL)("paypal", ["me", "com"]).test(link)) {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_16__["default"];
    }
    else if ((0,_Util_createRegexURL__WEBPACK_IMPORTED_MODULE_6__.createRegexURL)(["youtube", "youtu"], ["com", "be"]).test(link)) {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_17__["default"];
    }
    else if ((0,_Util_createRegexURL__WEBPACK_IMPORTED_MODULE_6__.createRegexURL)(["x", "twitter"], "com").test(link)) {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_18__["default"];
    }
    else if ((0,_Util_createRegexURL__WEBPACK_IMPORTED_MODULE_6__.createRegexURL)("facebook", "com").test(link)) {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_19__["default"];
    }
    else if ((0,_Util_createRegexURL__WEBPACK_IMPORTED_MODULE_6__.createRegexURL)(["instagram", "ig"], ["com", "me"]).test(link)) {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_20__["default"];
    }
    else if (/mailto:[\w-]+/i.test(link)) {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_21__["default"];
    }
    else if (/tel:\+?[\d-]+/i.test(link)) {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"];
    }
    else {
        return _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__["default"];
    }
}
function increase_brightness(hex, percent) {
    // strip the leading # if it's there
    hex = hex.replace(/^\s*#|\s*$/g, "");
    // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
    if (hex.length == 3) {
        hex = hex.replace(/(.)/g, "$1$1");
    }
    var r = parseInt(hex.substr(0, 2), 16), g = parseInt(hex.substr(2, 2), 16), b = parseInt(hex.substr(4, 2), 16);
    return ("#" +
        (0 | ((1 << 8) + r + ((256 - r) * percent) / 100)).toString(16).substr(1) +
        (0 | ((1 << 8) + g + ((256 - g) * percent) / 100)).toString(16).substr(1) +
        (0 | ((1 << 8) + b + ((256 - b) * percent) / 100)).toString(16).substr(1));
}
const Anchor = (props) => {
    const confirm = (0,material_ui_confirm__WEBPACK_IMPORTED_MODULE_5__.useConfirm)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_8__.useActivity)();
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_10__.useSettings)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_7__.useStrings)();
    const { href, children, noIcon, module, color = theme.palette.text.link, target = _Native_Os__WEBPACK_IMPORTED_MODULE_2__.os.WindowMMRLOwn } = props;
    const { modules } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_3__.useRepos)();
    const findModule = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => modules.find((m) => m.id === module), [module]);
    const icon = !props.icon ? useIcon(href) : props.icon;
    const s = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => ({
        display: "inline-block",
        "& ons-gesture-detector[href]": {
            cursor: "pointer",
            color: color,
            display: "flex",
            alignItems: "center",
            fontWeight: "unset",
            ":hover": {
                background: `linear-gradient(${color}, ${color}) 0 100% / 0.1em 0.1em repeat-x`,
            },
            "& code": {
                color: increase_brightness(color, 75.09),
                backgroundColor: `${color}4d`,
            },
        },
    }), [color]);
    const __href = react__WEBPACK_IMPORTED_MODULE_4___default().useMemo(() => (!(module && findModule) ? href : module), [href]);
    const openLink = react__WEBPACK_IMPORTED_MODULE_4___default().useCallback(() => {
        _Native_Os__WEBPACK_IMPORTED_MODULE_2__.os.openURL(__href, target, `color=${theme.palette.background.default}`);
    }, [__href]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], { title: __href, placement: "bottom", arrow: true, disableInteractive: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], { sx: s, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_26__["default"], { component: _Components_onsenui_GestureDetector__WEBPACK_IMPORTED_MODULE_11__.GestureDetector, direction: "row", spacing: 0.5, href: __href, 
                // onHold={() => {
                //   ons
                //     .openActionSheet({
                //       cancelable: true,
                //       buttons: ["Copy link"],
                //     })
                //     .then((index) => {
                //       switch (index) {
                //         case 0:
                //           console.log("link copied");
                //           break;
                //       }
                //     });
                // }}
                onTap: () => {
                    if (__href && module && findModule) {
                        context.pushPage({
                            component: _Activitys_ModuleViewActivity__WEBPACK_IMPORTED_MODULE_9__.ModuleViewActivity,
                            key: "ModuleViewActivity",
                            extra: findModule,
                        });
                    }
                    else {
                        if (settings.link_protection) {
                            confirm({
                                title: strings("anchor_confirm_title"),
                                description: strings("anchor_confirm_desc", {
                                    codeblock: ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_CodeBlock__WEBPACK_IMPORTED_MODULE_13__.CodeBlock, { sx: { mt: 1 }, lang: "url", children: __href })),
                                }),
                                confirmationText: strings("yes"),
                            }).then(() => openLink());
                        }
                        else {
                            openLink();
                        }
                    }
                }, color: color, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_27__["default"], { component: "span", sx: {
                            fontSize: "unset",
                            fontFamily: "unset",
                        }, color: color, children: children }), !noIcon && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], { component: !(module && findModule) ? icon : _mui_icons_material__WEBPACK_IMPORTED_MODULE_28__["default"], sx: {
                            color: color,
                            fill: color,
                            fontSize: "unset",
                        } }))] }) }) }));
};



/***/ }),

/***/ "./src/components/dapi/Code.tsx":
/*!**************************************!*\
  !*** ./src/components/dapi/Code.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Code: () => (/* binding */ Code)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Code = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, _ref) => {
    const ref = _ref || (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("contextmenu", function (event) {
                event.returnValue = true;
                if (typeof event.stopPropagation === "function") {
                    event.stopPropagation();
                }
                if (typeof event.cancelBubble === "function") {
                    event.cancelBubble();
                }
            }, true);
        }
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"]
    // @ts-ignore
    , { 
        // @ts-ignore
        ref: ref, component: "code", ...props }));
});



/***/ }),

/***/ "./src/components/dapi/DiscordWidget.tsx":
/*!***********************************************!*\
  !*** ./src/components/dapi/DiscordWidget.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiscordWidget: () => (/* binding */ DiscordWidget)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var googlers_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! googlers-tools */ "./node_modules/googlers-tools/dist/index.js");


const DiscordWidget = (props) => {
    const { token, width, height, theme } = props;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0px",
            }, src: "https://discord.com/widget?id=" + googlers_tools__WEBPACK_IMPORTED_MODULE_1__.util.typeCheck(token, "753360232515764255") + " &theme=" + googlers_tools__WEBPACK_IMPORTED_MODULE_1__.util.typeCheck(theme, "dark"), width: googlers_tools__WEBPACK_IMPORTED_MODULE_1__.util.typeCheck(width, 350), height: googlers_tools__WEBPACK_IMPORTED_MODULE_1__.util.typeCheck(height, 500), allowTransparency: true, frameBorder: "0", sandbox: "allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" }) }));
};



/***/ }),

/***/ "./src/components/dapi/Image.tsx":
/*!***************************************!*\
  !*** ./src/components/dapi/Image.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Image: () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Activitys_PicturePreviewActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Activitys/PicturePreviewActivity */ "./src/activitys/PicturePreviewActivity.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _Util_stringFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Util/stringFormat */ "./src/util/stringFormat.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);









function Image(props) {
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const { _modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_3__.useModFS)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_2__.useActivity)();
    const { type = "image/png", src, shadow, noOpen, sx, blur, modFSAdds, noOutline, ...rest } = props;
    const [newSrc, setNewSrc] = react__WEBPACK_IMPORTED_MODULE_7___default().useState(src);
    react__WEBPACK_IMPORTED_MODULE_7___default().useEffect(() => {
        if (src) {
            const file = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_5__.SuFile((0,_Util_stringFormat__WEBPACK_IMPORTED_MODULE_6__.formatString)(src, Object.assign(_modFS, modFSAdds)));
            if (file.exist()) {
                setNewSrc(`data:${type};base64,${file.readAsBase64()}`);
            }
        }
    }, [src]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], { component: "img", sx: {
            ":hover": {
                cursor: !noOpen ? "pointer" : "unset",
            },
            borderRadius: theme.shape.borderRadius / theme.shape.borderRadius,
            ...(!noOutline && { outlineOffset: -1, outline: `1px solid ${theme.palette.divider} !important` }),
            boxShadow: theme.shadows[shadow || 0],
            ...sx,
        }, src: newSrc, onClick: () => {
            if (!noOpen) {
                context.pushPage({
                    component: _Activitys_PicturePreviewActivity__WEBPACK_IMPORTED_MODULE_1__["default"],
                    key: "PicturePreviewActivity",
                    extra: {
                        picture: newSrc,
                    },
                });
            }
        }, ...rest }));
}



/***/ }),

/***/ "./src/components/dapi/Pre.tsx":
/*!*************************************!*\
  !*** ./src/components/dapi/Pre.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Pre: () => (/* binding */ Pre)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const Pre = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, _ref) => {
    const ref = _ref || (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener("contextmenu", function (event) {
                event.returnValue = true;
                if (typeof event.stopPropagation === "function") {
                    event.stopPropagation();
                }
                if (typeof event.cancelBubble === "function") {
                    event.cancelBubble();
                }
            }, true);
        }
    }, []);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__["default"]
    // @ts-ignore
    , { 
        // @ts-ignore
        ref: ref, component: "pre", ...props }));
});



/***/ }),

/***/ "./src/components/dapi/Video.tsx":
/*!***************************************!*\
  !*** ./src/components/dapi/Video.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Video: () => (/* binding */ Video)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var googlers_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! googlers-tools */ "./node_modules/googlers-tools/dist/index.js");
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");



const Video = (props) => {
    const { src, type, controls, noSupportText, style, poster } = props;
    const Style = {
        width: "100%",
        height: react_device_detect__WEBPACK_IMPORTED_MODULE_2__.isDesktop ? "445px" : "181.500px",
        padding: "0px",
        margin: "0px",
    };
    switch (type) {
        case "video/youtube":
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe", { className: "Video--Custom card", style: googlers_tools__WEBPACK_IMPORTED_MODULE_1__.util.typeCheck(style, Style), src: `https://www.youtube.com/embed/${src.replace("https://www.youtube.com/watch?v=", "")}` }));
        default:
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("video", { className: "Video--Custom card", style: googlers_tools__WEBPACK_IMPORTED_MODULE_1__.util.typeCheck(style, Style), controls: googlers_tools__WEBPACK_IMPORTED_MODULE_1__.util.typeCheck(controls, true), poster: poster, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("source", { src: src, type: googlers_tools__WEBPACK_IMPORTED_MODULE_1__.util.typeCheck(type, "video/mp4") }), googlers_tools__WEBPACK_IMPORTED_MODULE_1__.util.typeCheck(noSupportText, "Your browser does not support HTML video.")] }));
    }
};



/***/ }),

/***/ "./src/components/icons/MMRL.tsx":
/*!***************************************!*\
  !*** ./src/components/icons/MMRL.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MMRL: () => (/* binding */ MMRL)
/* harmony export */ });
/* harmony import */ var _mui_icons_material_Code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/icons-material/Code */ "./node_modules/@mui/icons-material/Code.js");

const MMRL = _mui_icons_material_Code__WEBPACK_IMPORTED_MODULE_0__["default"];



/***/ }),

/***/ "./src/components/icons/MRepo.tsx":
/*!****************************************!*\
  !*** ./src/components/icons/MRepo.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MRepo: () => (/* binding */ MRepo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/utils/createSvgIcon.js");


const MRepo = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", "stroke-width": "1.5", stroke: "currentColor", fill: "none", "stroke-linecap": "round", "stroke-linejoin": "round", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 12l8 -4.5" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M8.2 9.8l7.6 -4.6" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 12v9" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M12 12l-8 -4.5" })] }), "MRepo");



/***/ }),

/***/ "./src/components/icons/VerifiedIcon.tsx":
/*!***********************************************!*\
  !*** ./src/components/icons/VerifiedIcon.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VerifiedIcon: () => (/* binding */ VerifiedIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/SvgIcon/SvgIcon.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





const VerifiedIcon = (props) => {
    const { isVerified } = props;
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_1__.useStrings)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const verifiedId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
    if (isVerified) {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], { title: strings("verified_module"), placement: "right", arrow: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { sx: { fontSize: "unset" }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", { xmlns: "http://www.w3.org/2000/svg", version: "1.1", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24", opacity: "1", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", { gradientTransform: "rotate(140, 0.5, 0.5)", x1: "50%", y1: "0%", x2: "50%", y2: "100%", id: `${verifiedId}-gradient`, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { stopColor: "hsl(298.13deg 97.96% 38.43%)", stopOpacity: "1", offset: "0%" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", { stopColor: "hsl(267deg 75% 31.37%)", stopOpacity: "1", offset: "100%" })] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { fill: `url(#${verifiedId}-gradient) ${theme.palette.text.link}`, filter: `url(#${verifiedId}-filter)`, d: "m23 12-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69zm-12.91 4.72-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48z" })] }) }) }));
    }
    else {
        return null;
    }
};



/***/ }),

/***/ "./src/components/icons/Xda.tsx":
/*!**************************************!*\
  !*** ./src/components/icons/Xda.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Xda: () => (/* binding */ Xda)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/utils/createSvgIcon.js");


const Xda = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 1026 1024", version: "1.1", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: "M0 716.373333l138.24-162.986666-138.24-162.986667L66.133333 335.36l128 151.466667 128-151.466667 66.133334 55.04-138.24 162.986667 138.24 162.986666-66.133334 54.613334-128-152.32-128 152.32-66.133333-54.613334M1026.133333 725.333333a42.666667 42.666667 0 0 1-42.666666 42.666667h-128a85.333333 85.333333 0 0 1-85.333334-85.333333v-85.333334a85.333333 85.333333 0 0 1 85.333334-85.333333h85.333333v-85.333333h-170.666667V341.333333h213.333334a42.666667 42.666667 0 0 1 42.666666 42.666667m-85.333333 213.333333h-85.333333v85.333334h85.333333v-85.333334m-256 128a42.666667 42.666667 0 0 1-42.666667 42.666667h-128a85.333333 85.333333 0 0 1-85.333333-85.333333v-256a85.333333 85.333333 0 0 1 85.333333-85.333334h85.333334V213.333333h85.333333v512m-85.333333-42.666666v-256h-85.333334v256h85.333334z" }) }), "Xda");



/***/ }),

/***/ "./src/components/module/DeviceModule.tsx":
/*!************************************************!*\
  !*** ./src/components/module/DeviceModule.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _Activitys_ModConfActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Activitys/ModConfActivity */ "./src/activitys/ModConfActivity/index.tsx");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Settings.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/RefreshRounded.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Delete.js");
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/Loop.js");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Hooks_useLowQualityModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useLowQualityModule */ "./src/hooks/useLowQualityModule.ts");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_native_useLog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Hooks/native/useLog */ "./src/hooks/native/useLog.ts");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var material_ui_confirm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! material-ui-confirm */ "./node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js");
/* harmony import */ var _mui_material_Switch__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Switch */ "./node_modules/@mui/material/Switch/Switch.js");
/* harmony import */ var _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Components/dapi/Image */ "./src/components/dapi/Image.tsx");
/* harmony import */ var _Util_blacklisted_modules__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Util/blacklisted-modules */ "./src/util/blacklisted-modules.ts");
/* harmony import */ var _Components_AntifeaturesButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Components/AntifeaturesButton */ "./src/components/AntifeaturesButton.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


















// @ts-ignore





const DeviceModule = react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_3__.useTheme)();
    const { modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_9__.useModFS)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__.useStrings)();
    const { settings } = (0,_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_4__.useSettings)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_7__.useActivity)();
    const log = (0,_Hooks_native_useLog__WEBPACK_IMPORTED_MODULE_8__.useLog)("DeviceModule");
    const confirm = (0,material_ui_confirm__WEBPACK_IMPORTED_MODULE_11__.useConfirm)();
    const { id, name, author, version, versionCode, timestamp, description, cover } = props.module;
    const format = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((key) => modFS(key, { MODID: id }), []);
    const remove = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_10__.SuFile(format("REMOVE"));
    const disable = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_10__.SuFile(format("DISABLE"));
    const has_update = _Native_SuFile__WEBPACK_IMPORTED_MODULE_10__.SuFile.exist(format("UPDATE"));
    const [isEnabled, setIsEnabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(!disable.exist());
    const [isSwitchDisabled, setIsSwitchDisabled] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(remove.exist());
    const isLowQuality = (0,_Hooks_useLowQualityModule__WEBPACK_IMPORTED_MODULE_5__.useLowQualityModule)(props.module, !settings._low_quality_module);
    const isNew = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => new Date().getTime() - timestamp < 60 * 60 * 1000, [timestamp]);
    const isDisabledStyle = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => (isSwitchDisabled ? { textDecoration: "line-through" } : {}), [isSwitchDisabled]);
    const post_service = _Native_SuFile__WEBPACK_IMPORTED_MODULE_10__.SuFile.exist(format("POSTSERVICE"));
    const late_service = _Native_SuFile__WEBPACK_IMPORTED_MODULE_10__.SuFile.exist(format("LATESERVICE"));
    const post_mount = _Native_SuFile__WEBPACK_IMPORTED_MODULE_10__.SuFile.exist(format("POSTMOUNT"));
    const boot_complete = _Native_SuFile__WEBPACK_IMPORTED_MODULE_10__.SuFile.exist(format("BOOTCOMP"));
    const module_config_file = _Native_SuFile__WEBPACK_IMPORTED_MODULE_10__.SuFile.exist(format("CONFINDEX"));
    const findHardCodedAntifeature = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => {
        return _Util_blacklisted_modules__WEBPACK_IMPORTED_MODULE_13__.blacklistedModules.find((mod) => mod.id === id)?.antifeatures || [];
    }, [id]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_15__["default"], { sx: {
            position: "relative",
            p: 2,
            width: "100%",
        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { sx: { position: "relative", zIndex: 1 }, direction: "column", justifyContent: "center", spacing: 1, children: [cover && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Image__WEBPACK_IMPORTED_MODULE_12__.Image, { sx: {
                            height: "100%",
                            objectFit: "cover",
                            width: "100%",
                        }, src: cover, alt: name, modFSAdds: {
                            MODID: id,
                        }, noOpen: true })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "column", justifyContent: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "flex-end", alignItems: "center", spacing: 1, children: [isLowQuality && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], { color: "error", clickable: true, onClick: () => {
                                            confirm({ title: strings("low_quality_module"), description: strings("low_quality_module_warn") }).then(() => { });
                                        }, label: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], { variant: "caption", children: strings("low_quality_module") }), size: "small", sx: { borderRadius: theme.shape.borderRadius / theme.shape.borderRadius } })), isNew && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], { color: "primary", label: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], { variant: "caption", children: strings("new") }), size: "small", sx: { borderRadius: theme.shape.borderRadius / theme.shape.borderRadius } }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "space-between", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "column", justifyContent: "center", alignItems: "flex-start", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], { variant: "h6", sx: { ...isDisabledStyle }, children: name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], { color: "text.secondary", variant: "caption", sx: { ...isDisabledStyle }, children: [version, " (", versionCode, ") / ", author] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], { variant: "caption", display: "block", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Switch__WEBPACK_IMPORTED_MODULE_19__["default"], { checked: isEnabled, disabled: isSwitchDisabled || has_update, onChange: (e) => {
                                                const checked = e.target.checked;
                                                if (checked) {
                                                    if (disable.exist()) {
                                                        if (disable.delete()) {
                                                            log.d(strings("module_enabled_LOG", {
                                                                name: id,
                                                            }));
                                                        }
                                                    }
                                                }
                                                else {
                                                    if (!disable.exist()) {
                                                        if (disable.create()) {
                                                            log.d(strings("module_disabled_LOG", {
                                                                name: id,
                                                            }));
                                                        }
                                                    }
                                                }
                                                setIsEnabled(checked);
                                            }, sx: {
                                                right: -8,
                                            } }) })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_18__["default"], { color: "text.secondary", variant: "body2", display: "block", sx: { ...isDisabledStyle }, children: description }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "column", justifyContent: "center", spacing: 1.2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 1, sx: {
                                            overflowY: "auto",
                                        }, children: [post_service && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], { variant: "outlined", size: "small", color: "error", label: "Post service" }), late_service && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], { variant: "outlined", size: "small", color: "info", label: "Late service" }), post_mount && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], { variant: "outlined", size: "small", color: "warning", label: "Post mount" }), boot_complete && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], { variant: "outlined", size: "small", color: "success", label: "Boot completed" })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_20__["default"], { variant: "middle" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "flex-end", alignItems: "center", spacing: 1, children: [findHardCodedAntifeature && findHardCodedAntifeature.length !== 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_AntifeaturesButton__WEBPACK_IMPORTED_MODULE_14__.AntifeatureButton, { antifeatures: findHardCodedAntifeature })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_21__["default"], { onClick: () => {
                                                    context.pushPage({
                                                        component: _Activitys_ModConfActivity__WEBPACK_IMPORTED_MODULE_2__.ModConfActivity,
                                                        key: `${id}_configure`,
                                                        extra: {
                                                            indexFile: format("CONFINDEX"),
                                                            cwd: format("CONFCWD"),
                                                            modId: id,
                                                        },
                                                    });
                                                }, disableElevation: true, variant: "contained", size: "medium", startIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_22__["default"], {}), disabled: !module_config_file, children: "Config" }), isSwitchDisabled ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_21__["default"], { onClick: () => {
                                                    if (remove.exist()) {
                                                        if (remove.delete()) {
                                                            setIsSwitchDisabled(false);
                                                            log.d(`${module} has been recovered`);
                                                        }
                                                        else {
                                                            log.e(`Failed to restore ${module}`);
                                                        }
                                                    }
                                                    else {
                                                        log.e(`This remove file don't exists for ${module}`);
                                                    }
                                                }, disableElevation: true, variant: "contained", size: "medium", startIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_23__["default"], {}), children: strings("restore") })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_21__["default"], { onClick: () => {
                                                    if (remove.create()) {
                                                        setIsSwitchDisabled(true);
                                                    }
                                                    else {
                                                        setIsSwitchDisabled(false);
                                                    }
                                                }, disableElevation: true, variant: "contained", size: "medium", startIcon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_24__["default"], {}), children: strings("remove") }))] })] })] })] }), has_update && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_25__["default"], { sx: {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    fill: theme.palette.background.default,
                    color: theme.palette.background.default,
                    WebkitTransform: "translate(-50%, -50%)",
                    transform: "translate(-50%, -50%)",
                    fontSize: "50cqmin",
                } }))] }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeviceModule);


/***/ }),

/***/ "./src/components/module/ExploreModule.tsx":
/*!*************************************************!*\
  !*** ./src/components/module/ExploreModule.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Activitys_ModuleViewActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Activitys/ModuleViewActivity */ "./src/activitys/ModuleViewActivity/index.tsx");
/* harmony import */ var _Components_AntifeaturesButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/AntifeaturesButton */ "./src/components/AntifeaturesButton.tsx");
/* harmony import */ var _Components_dapi_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Components/dapi/Image */ "./src/components/dapi/Image.tsx");
/* harmony import */ var _Components_icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Components/icons/VerifiedIcon */ "./src/components/icons/VerifiedIcon.tsx");
/* harmony import */ var _Components_onsenui_GestureDetector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/onsenui/GestureDetector */ "./src/components/onsenui/GestureDetector.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Hooks/useFormatDate */ "./src/hooks/useFormatDate.ts");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Util_blacklisted_modules__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Util/blacklisted-modules */ "./src/util/blacklisted-modules.ts");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Hooks_useModuleInfo__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Hooks/useModuleInfo */ "./src/hooks/useModuleInfo.ts");




















const ExploreModule = react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
    const { id, name, author, description, track, timestamp, version, versions, versionCode } = props.module;
    const { cover, verified } = (0,_Hooks_useModuleInfo__WEBPACK_IMPORTED_MODULE_14__.useModuleInfo)(props.module);
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_7__.useActivity)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_9__.useStrings)();
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_10__.useTheme)();
    const { modFS } = (0,_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_13__.useModFS)();
    const formatLastUpdate = (0,_Hooks_useFormatDate__WEBPACK_IMPORTED_MODULE_8__.useFormatDate)(timestamp ? timestamp : versions[versions.length - 1].timestamp);
    const findHardCodedAntifeature = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => {
        return [...(track.antifeatures || []), ...(_Util_blacklisted_modules__WEBPACK_IMPORTED_MODULE_11__.blacklistedModules.find((mod) => mod.id === id)?.antifeatures || [])];
    }, [id, track.antifeatures]);
    const handleOpenModule = () => {
        context.pushPage({
            component: _Activitys_ModuleViewActivity__WEBPACK_IMPORTED_MODULE_2__.ModuleViewActivity,
            key: "ModuleViewActivity",
            extra: props.module,
        });
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_15__["default"], { onTap: handleOpenModule, component: _Components_onsenui_GestureDetector__WEBPACK_IMPORTED_MODULE_6__.GestureDetector, sx: {
            p: 2,
            ":hover": {
                opacity: ".8",
                cursor: "pointer",
            },
            width: "100%",
        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "column", justifyContent: "center", spacing: 1, children: [cover && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Image__WEBPACK_IMPORTED_MODULE_4__.Image, { sx: {
                        height: "100%",
                        objectFit: "cover",
                        width: "100%",
                    }, src: cover, alt: name, noOpen: true })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "column", justifyContent: "center", alignItems: "flex-start", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 0.5, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], { variant: "h6", children: name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_5__.VerifiedIcon, { isVerified: verified })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], { color: "text.secondary", variant: "caption", children: [version, " (", versionCode, ") / ", author] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], { color: "text.secondary", variant: "body2", display: "block", children: description }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "column", justifyContent: "center", spacing: 1.2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_18__["default"], { variant: "middle" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "space-between", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_19__["default"], { sx: {
                                                color: theme.palette.text.secondary,
                                                backgroundColor: theme.palette.secondary.dark,
                                            }, label: formatLastUpdate }), _Native_SuFile__WEBPACK_IMPORTED_MODULE_12__.SuFile.exist(modFS("PROPS", { MODID: id })) && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_19__["default"], { sx: {
                                                background: `linear-gradient(333deg, ${theme.palette.secondary.dark} 0%, ${theme.palette.secondary.dark} 83%) padding-box,linear-gradient(22deg, rgba(188,2,194,0.4) 0%, rgba(74,20,140,0.4) 100%) border-box`,
                                                color: theme.palette.text.secondary,
                                                border: "1px solid transparent",
                                            }, label: strings("installed") }))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_16__["default"], { direction: "row", justifyContent: "flex-end", alignItems: "center", spacing: 1, children: findHardCodedAntifeature && findHardCodedAntifeature.length !== 0 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_AntifeaturesButton__WEBPACK_IMPORTED_MODULE_3__.AntifeatureButton, { antifeatures: findHardCodedAntifeature })) })] })] })] }) }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreModule);


/***/ }),

/***/ "./src/components/module/UpdateModule.tsx":
/*!************************************************!*\
  !*** ./src/components/module/UpdateModule.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/icons-material */ "./node_modules/@mui/icons-material/esm/ArrowRightAlt.js");
/* harmony import */ var _mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/material/ButtonGroup */ "./node_modules/@mui/material/ButtonGroup/ButtonGroup.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Card */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Divider */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Hooks_native_useLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Hooks/native/useLog */ "./src/hooks/native/useLog.ts");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var _Activitys_FetchTextActivity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Activitys/FetchTextActivity */ "./src/activitys/FetchTextActivity.tsx");
/* harmony import */ var googlers_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! googlers-tools */ "./node_modules/googlers-tools/dist/index.js");
/* harmony import */ var _Activitys_InstallTerminalV2Activity__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Activitys/InstallTerminalV2Activity */ "./src/activitys/InstallTerminalV2Activity.tsx");


















const UpdateModule = react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_4__.useStrings)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__.useActivity)();
    const { modules, repos } = (0,_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_6__.useRepos)();
    const { id, name, author, version, versionCode, updateJson: __updateJson } = props.module;
    const log = (0,_Hooks_native_useLog__WEBPACK_IMPORTED_MODULE_3__.useLog)("UpdateModule");
    const [updateJson, setUpdateJson] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);
    if (__updateJson && googlers_tools__WEBPACK_IMPORTED_MODULE_8__.link.validURL(__updateJson)) {
        react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
            fetch(__updateJson)
                .then((res) => res.json())
                .then((json) => setUpdateJson(json));
        }, [repos]);
    }
    else {
        log.d(strings("dm_update_json_fetch_warn", { id: id }));
    }
    const hasUpdate = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => {
        const onlineModule = modules.find((module) => module.id === id);
        if (__updateJson && updateJson) {
            return versionCode < Number(updateJson.versionCode);
        }
        else {
            return onlineModule && versionCode < onlineModule.versionCode;
        }
    }, [updateJson, modules, repos]);
    const updatedModule = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => {
        const onlineModule = modules.find((module) => module.id === id);
        if (__updateJson && updateJson) {
            return updateJson;
        }
        else {
            return onlineModule && onlineModule.versions[onlineModule.versions.length - 1];
        }
    }, [updateJson, modules, repos]);
    if (!hasUpdate)
        return null;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_10__["default"], { sx: { p: 2 }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "column", justifyContent: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "column", justifyContent: "center", alignItems: "flex-start", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], { variant: "h6", children: name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], { color: "text.secondary", variant: "caption", children: author })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "column", justifyContent: "center", alignItems: "flex-start", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], { variant: "body1", gutterBottom: true, children: "Version:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_13__["default"], { label: version, size: "small", sx: { borderRadius: theme.shape.borderRadius / theme.shape.borderRadius } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_13__["default"], { label: updatedModule?.version, size: "small", sx: { borderRadius: theme.shape.borderRadius / theme.shape.borderRadius } })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], { variant: "body1", gutterBottom: true, children: "Version code:" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_13__["default"], { label: versionCode, size: "small", sx: { borderRadius: theme.shape.borderRadius / theme.shape.borderRadius } }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_icons_material__WEBPACK_IMPORTED_MODULE_14__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_13__["default"], { label: updatedModule?.versionCode, size: "small", sx: { borderRadius: theme.shape.borderRadius / theme.shape.borderRadius } })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "column", justifyContent: "center", alignItems: "stretch", spacing: 1.2, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_15__["default"], { variant: "middle" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ButtonGroup__WEBPACK_IMPORTED_MODULE_16__["default"], { disableElevation: true, fullWidth: true, variant: "contained", "aria-label": "Disabled elevation buttons", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_17__["default"], { onClick: () => {
                                        context.pushPage({
                                            component: _Activitys_InstallTerminalV2Activity__WEBPACK_IMPORTED_MODULE_9__["default"],
                                            key: "InstallTerminalV2Activity",
                                            extra: {
                                                id: id,
                                                exploreInstall: true,
                                                modSource: [updatedModule?.zipUrl],
                                            },
                                        });
                                    }, children: strings("update") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_17__["default"], { disabled: updatedModule?.changelog === "", onClick: () => {
                                        context.pushPage({
                                            component: _Activitys_FetchTextActivity__WEBPACK_IMPORTED_MODULE_7__["default"],
                                            key: `changelog_${id}`,
                                            extra: {
                                                title: updatedModule?.version,
                                                url: updatedModule?.changelog,
                                            },
                                        });
                                    }, children: strings("changelog") })] })] })] }) }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateModule);


/***/ }),

/***/ "./src/components/onsenui/BottomToolbar.tsx":
/*!**************************************************!*\
  !*** ./src/components/onsenui/BottomToolbar.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BottomToolbar: () => (/* binding */ BottomToolbar)
/* harmony export */ });
/* harmony import */ var _Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Util/onsCustomElement */ "./src/util/onsCustomElement.tsx");
/* harmony import */ var onsenui_esm_elements_ons_bottom_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! onsenui/esm/elements/ons-bottom-toolbar */ "./node_modules/onsenui/esm/elements/ons-bottom-toolbar.js");


const BottomToolbar = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_0__["default"])("ons-bottom-toolbar")({});



/***/ }),

/***/ "./src/components/onsenui/Fab.tsx":
/*!****************************************!*\
  !*** ./src/components/onsenui/Fab.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fab: () => (/* binding */ Fab),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var onsenui_esm_elements_ons_fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! onsenui/esm/elements/ons-fab */ "./node_modules/onsenui/esm/elements/ons-fab.js");
/* harmony import */ var _Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Util/onsCustomElement */ "./src/util/onsCustomElement.tsx");


const Fab = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_1__["default"])("ons-fab")({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fab);


/***/ }),

/***/ "./src/components/onsenui/GestureDetector.tsx":
/*!****************************************************!*\
  !*** ./src/components/onsenui/GestureDetector.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GestureDetector: () => (/* binding */ GestureDetector)
/* harmony export */ });
/* harmony import */ var onsenui_esm_elements_ons_gesture_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! onsenui/esm/elements/ons-gesture-detector */ "./node_modules/onsenui/esm/elements/ons-gesture-detector.js");
/* harmony import */ var _Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Util/onsCustomElement */ "./src/util/onsCustomElement.tsx");


const GestureDetector = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_1__["default"])("ons-gesture-detector")({});


/***/ }),

/***/ "./src/components/onsenui/Page.tsx":
/*!*****************************************!*\
  !*** ./src/components/onsenui/Page.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page: () => (/* binding */ Page)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var onsenui_esm_elements_ons_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onsenui/esm/elements/ons-page */ "./node_modules/onsenui/esm/elements/ons-page.js");
/* harmony import */ var _Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Util/onsCustomElement */ "./src/util/onsCustomElement.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/useMediaQuery */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");






const HTMLPage = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_3__["default"])("ons-page", {
    notAttributes: ["onInfiniteScroll", "onDeviceBackButton"],
})({});
const _Page = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref) => {
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__.useTheme)();
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__.useActivity)();
    const { renderToolbar, renderBottomToolbar, renderModal, renderFixed, sx, compSx, children, backgroundStyle, ...rest } = props;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HTMLPage, { ...rest, sx: compSx, ref: ref, children: [renderToolbar && renderToolbar(ref, context), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "page__background", sx: backgroundStyle }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "page__content", sx: sx, children: children }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], { className: "page__extra", sx: { zIndex: 10001 }, children: renderModal && renderModal(ref, context) }), renderFixed && renderFixed(ref, context), renderBottomToolbar && renderBottomToolbar(ref, context)] }));
});


const Content = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])("section")((props) => ({
    display: "flex",
    flexDirection: "column",
    margin: props.zeroMargin ? 0 : 8,
}));
const RelativeContent = (0,_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"])(Content)((props) => {
    const matches = (0,_mui_material_useMediaQuery__WEBPACK_IMPORTED_MODULE_8__["default"])("(max-width: 767px)");
    return {
        boxSizing: "border-box",
        minWidth: props.minWidth ? props.minWidth : 200,
        maxWidth: props.maxWidth ? props.maxWidth : 980,
        margin: "0 auto",
        ...(matches ? { padding: props.zeroMargin ? 0 : 8 } : { padding: "8px 45px 8px 45px" }),
    };
});
const Page = Object.assign(_Page, {
    Content: Content,
    /**
     * Used for large screen to prevent content stretching
     */
    RelativeContent: RelativeContent,
});



/***/ }),

/***/ "./src/components/onsenui/RouterNavigator.tsx":
/*!****************************************************!*\
  !*** ./src/components/onsenui/RouterNavigator.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouterNavigator: () => (/* binding */ RouterNavigator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var onsenui_esm_elements_ons_navigator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! onsenui/esm/elements/ons-navigator */ "./node_modules/onsenui/esm/elements/ons-navigator.js");
/* harmony import */ var _Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Util/onsCustomElement */ "./src/util/onsCustomElement.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");






const HTMLNavigator = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_4__["default"])("ons-navigator")({});
class RouterNavigatorClass extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    cancelUpdate;
    ref;
    onPrePush;
    onPostPush;
    onPrePop;
    onPostPop;
    _url;
    constructor(props) {
        super(props);
        this.cancelUpdate = false;
        const callback = (name, event) => {
            if (this.props[name]) {
                return this.props[name](event);
            }
        };
        this.onPrePush = callback.bind(this, "onPrePush");
        this.onPostPush = callback.bind(this, "onPostPush");
        this.onPrePop = callback.bind(this, "onPrePop");
        this.onPostPop = callback.bind(this, "onPostPop");
        this.ref = react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
        this._url = new URL(window.location.href);
        this.state = {
            internalStack: [],
        };
    }
    update(cb) {
        if (!this.cancelUpdate) {
            this.setState({}, cb);
        }
    }
    resetPageStack(routes, options = {}, props = {}) {
        if (this.isRunning()) {
            return;
        }
        const update = () => {
            return new Promise((resolve) => {
                this.setState({ internalStack: [...this.state.internalStack, { route: routes[routes.length - 1] }] }, resolve);
            });
        };
        return this.ref.current._pushPage(options, update).then(() => {
            this.setState({ internalStack: [{ route: [...routes] }] });
        });
    }
    pushPage(route, options = {}, props = {}, context = {}, extra = {}) {
        if (this.isRunning()) {
            return;
        }
        const update = () => {
            return new Promise((resolve) => {
                this.setState((prevState) => {
                    return { internalStack: [...prevState.internalStack, { route: route, props: props, context: context, extra: extra }] };
                }, resolve);
            });
        };
        return this.ref.current._pushPage(options, update);
    }
    isRunning() {
        return this.ref.current._isRunning;
    }
    replacePage(route, options = {}) {
        if (this.isRunning()) {
            return;
        }
        const update = () => {
            return new Promise((resolve) => {
                this.setState((prevState) => {
                    return { internalStack: [...prevState.internalStack, { route: route }] };
                }, resolve);
            });
        };
        return this.ref.current._pushPage(options, update).then(() => {
            this.setState((prevState) => {
                return { internalStack: [...prevState.internalStack.slice(0, -2), { route: route }] };
            });
        });
    }
    popPage(options) {
        if (this.isRunning()) {
            return;
        }
        const update = () => {
            return new Promise((resolve) => {
                react_dom__WEBPACK_IMPORTED_MODULE_2__.flushSync(() => {
                    // prevents flickering caused by React 18 batching
                    this.setState((prevState) => {
                        return { internalStack: prevState.internalStack.slice(0, -1) };
                    }, resolve);
                });
            });
        };
        return this.ref.current._popPage(options, update);
    }
    _onDeviceBackButton(event) {
        if (this.props.routeConfig.routeStack.length > 1) {
            this.popPage();
        }
        else {
            event.callParentHandler();
        }
    }
    componentDidMount() {
        const node = this.ref.current;
        this.cancelUpdate = false;
        node.addEventListener("prepush", this.onPrePush);
        node.addEventListener("postpush", this.onPostPush);
        node.addEventListener("prepop", this.onPrePop);
        node.addEventListener("postpop", this.onPostPop);
        if (!this.props.routeConfig) {
            throw new Error("In RouterNavigator the property routeConfig needs to be set");
        }
        node.swipeMax = this.props.swipePop;
        node.onDeviceBackButton = this.props.onDeviceBackButton || this._onDeviceBackButton.bind(this);
        this.setState({ internalStack: this.props.routeConfig.routeStack });
    }
    componentWillUnmount() {
        const node = this.ref.current;
        node.removeEventListener("prepush", this.onPrePush);
        node.removeEventListener("postpush", this.onPostPush);
        node.removeEventListener("prepop", this.onPrePop);
        node.removeEventListener("postpop", this.onPostPop);
        this.cancelUpdate = true;
    }
    componentDidUpdate(prevProps) {
        if (this.props.onDeviceBackButton !== undefined) {
            this.ref.current.onDeviceBackButton = this.props.onDeviceBackButton;
        }
        const processStack = [...this.props.routeConfig.processStack];
        /**
         * Fix for Redux Timetravel.
         */
        if (prevProps.routeConfig.processStack.length < this.props.routeConfig.processStack.length &&
            prevProps.routeConfig.routeStack.length > this.props.routeConfig.routeStack.length) {
            return;
        }
        if (processStack.length > 0) {
            const { type, route, options, props, context, extra } = processStack[0];
            switch (type) {
                case "push":
                    this.pushPage(route, options, props, context, extra);
                    break;
                case "pop":
                    this.popPage(options);
                    break;
                case "reset":
                    if (Array.isArray(route)) {
                        this.resetPageStack(route, options);
                    }
                    else {
                        this.resetPageStack([route], options);
                    }
                    break;
                case "replace":
                    this.replacePage(route, options);
                    break;
                default:
                    throw new Error(`Unknown type ${type} in processStack`);
            }
        }
    }
    render() {
        const { innerRef, renderPage, 
        // these props should not be passed down
        onPrePush, onPostPush, onPrePop, onPostPop, swipePop, onDeviceBackButton, ...rest } = this.props;
        const pagesToRender = this.state.internalStack.map((item) => {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__.Extra.Provider, { value: item.extra, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_5__.Context.Provider, { value: item.context, children: renderPage(item.route, item.props) }, item.props.key + "_context") }, item.props.key + "_extra"));
        });
        if (innerRef && innerRef !== this.ref) {
            this.ref = innerRef;
        }
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HTMLNavigator, { ...rest, ref: this.ref, children: pagesToRender });
    }
}
const _RouterNavigator = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref) => (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RouterNavigatorClass, { innerRef: ref, ...props }));
const RouterNavigator = Object.assign(_RouterNavigator, {});



/***/ }),

/***/ "./src/components/onsenui/Splitter.tsx":
/*!*********************************************!*\
  !*** ./src/components/onsenui/Splitter.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Splitter: () => (/* binding */ Splitter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Util/onsCustomElement */ "./src/util/onsCustomElement.tsx");
/* harmony import */ var onsenui_esm_elements_ons_splitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onsenui/esm/elements/ons-splitter */ "./node_modules/onsenui/esm/elements/ons-splitter.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const HTMLSplitter = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_1__["default"])("ons-splitter", {
    notAttributes: ["onDeviceBackButton"],
})({});
const HTMLSplitterContent = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_1__["default"])("ons-splitter-content")({});
const HTMLSplitterSide = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_1__["default"])("ons-splitter-side", {
    deprecated: {
        onOpen: "onPostOpen",
        onClose: "onPostClose",
    },
    notAttributes: ["isOpen"],
})({});
const _SplitterSide = react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef((props, ref) => {
    const { width, ...rest } = props;
    // number values for width are deprecated but handle them safely to avoid breaking user code
    const realWidth = typeof width === "number" ? `${width}px` : width;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HTMLSplitterSide, { width: realWidth, ref: ref, ...rest, children: props.children });
});
const Splitter = Object.assign(HTMLSplitter, {
    Content: HTMLSplitterContent,
    Side: _SplitterSide,
});



/***/ }),

/***/ "./src/components/onsenui/Tabbar.tsx":
/*!*******************************************!*\
  !*** ./src/components/onsenui/Tabbar.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tabbar: () => (/* binding */ Tabbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var onsenui_esm_elements_ons_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onsenui/esm/elements/ons-tab */ "./node_modules/onsenui/esm/elements/ons-tab.js");
/* harmony import */ var onsenui_esm_elements_ons_tabbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! onsenui/esm/elements/ons-tabbar */ "./node_modules/onsenui/esm/elements/ons-tabbar.js");
/* harmony import */ var _Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Util/onsCustomElement */ "./src/util/onsCustomElement.tsx");





const HTMLTabbar = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_4__["default"])("ons-tabbar", {
    deprecated: {
        index: "activeIndex",
    },
})({});
const _Tabbar = react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef((props, ref) => {
    const { visible, hideTabs, renderTabs, ...rest } = props;
    const [reallyHideTabs, setReallyHideTabs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const tabs = renderTabs(props.activeIndex, ref);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        // visible is deprecated in favour of hideTabs, but if visible is defined and
        // hideTabs is not, we use its negation as the value of hideTabs
        if (hideTabs === undefined && visible !== undefined) {
            setReallyHideTabs(!visible);
        }
        else {
            setReallyHideTabs(hideTabs);
        }
    }, [hideTabs, visible]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(HTMLTabbar, { hideTabs: reallyHideTabs, ...rest, ref: ref, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tabbar__content", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { children: tabs.map((tab) => tab.content) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {})] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "tabbar", children: [tabs.map((tab) => tab.tab), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "tabbar__border" })] })] }));
});
const HTMLTab = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_4__["default"])("ons-tab")({});
const Tabbar = Object.assign(_Tabbar, {
    Tab: HTMLTab,
});



/***/ }),

/***/ "./src/components/onsenui/Toolbar.tsx":
/*!********************************************!*\
  !*** ./src/components/onsenui/Toolbar.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Toolbar: () => (/* binding */ Toolbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var onsenui_esm_elements_ons_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! onsenui/esm/elements/ons-toolbar */ "./node_modules/onsenui/esm/elements/ons-toolbar.js");
/* harmony import */ var _Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Util/onsCustomElement */ "./src/util/onsCustomElement.tsx");
/* harmony import */ var _Components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/Icon */ "./src/components/Icon.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/ArrowBack */ "./node_modules/@mui/icons-material/ArrowBack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");







const HTMLToolbar = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_2__["default"])("ons-toolbar", { notAttributes: ["visible"] })({});
const HTMLToolbarButton = (0,_Util_onsCustomElement__WEBPACK_IMPORTED_MODULE_2__["default"])("ons-toolbar-button")({});
const ToolbarButton = react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef((props, ref) => {
    const { icon, iconProps, keepLight, children, ...rest } = props;
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HTMLToolbarButton, { ref: ref, style: { fontFamily: "unset" }, ...rest, children: icon ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_Icon__WEBPACK_IMPORTED_MODULE_3__["default"], { icon: icon, ...iconProps, keepLight: !keepLight ? true : keepLight }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: children }) }));
});
const ToolbarLeft = react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef((props, ref) => {
    const { component = "div", ...rest } = props;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { ref: ref, component: component, className: "left", ...rest });
});
const ToolbarCenter = react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef((props, ref) => {
    const { component = "div", ...rest } = props;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { ref: ref, component: component, className: "center", ...rest });
});
const ToolbarRight = react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef((props, ref) => {
    const { component = "div", ...rest } = props;
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], { ref: ref, component: component, className: "right", ...rest });
});
const ToolbarBackButton = react__WEBPACK_IMPORTED_MODULE_4___default().forwardRef((props, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ToolbarButton, { ref: ref, icon: _mui_icons_material_ArrowBack__WEBPACK_IMPORTED_MODULE_6__["default"], ...props })));
const Toolbar = Object.assign(HTMLToolbar, {
    Button: ToolbarButton,
    Left: ToolbarLeft,
    Center: ToolbarCenter,
    Right: ToolbarRight,
    BackButton: ToolbarBackButton,
});



/***/ }),

/***/ "./src/custom-elements/anchor.ts":
/*!***************************************!*\
  !*** ./src/custom-elements/anchor.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MMRLAnchor: () => (/* binding */ MMRLAnchor)
/* harmony export */ });
class MMRLAnchor extends HTMLElement {
    constructor() {
        super();
    }
    static get observedAttributes() {
        return ["class", "href", "page", "noicon", "onclick"];
    }
}


/***/ }),

/***/ "./src/custom-elements/app.ts":
/*!************************************!*\
  !*** ./src/custom-elements/app.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MMRLApp: () => (/* binding */ MMRLApp)
/* harmony export */ });
/* harmony import */ var _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Native/BuildConfig */ "./src/native/BuildConfig.ts");

class MMRLApp extends HTMLElement {
    constructor() {
        super();
        this.initConfigStats([
            {
                key: "package",
                value: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_0__.BuildConfig.APPLICATION_ID,
            },
            {
                key: "version-name",
                value: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_0__.BuildConfig.VERSION_NAME,
            },
            {
                key: "version-code",
                value: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_0__.BuildConfig.VERSION_CODE,
            },
            {
                key: "debug",
                value: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_0__.BuildConfig.DEBUG,
            },
            {
                key: "build-type",
                value: _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_0__.BuildConfig.BUILD_TYPE,
            },
        ]);
    }
    initConfigStats(data) {
        return data.map((element) => {
            return this.set(element.key, element.value);
        });
    }
    set(qualifiedName, value) {
        this.setAttribute(qualifiedName, value);
    }
}


/***/ }),

/***/ "./src/hoc/withRequireNewVersion.tsx":
/*!*******************************************!*\
  !*** ./src/hoc/withRequireNewVersion.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   withRequireNewVersion: () => (/* binding */ withRequireNewVersion)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Components/dapi/Anchor */ "./src/components/dapi/Anchor.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Hooks_useActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Hooks/useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Native/BuildConfig */ "./src/native/BuildConfig.ts");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");








function withRequireNewVersion(opt) {
    const { strings } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__.useStrings)();
    const { versionCode = _Native_BuildConfig__WEBPACK_IMPORTED_MODULE_5__.BuildConfig.VERSION_CODE, component, title = "New version required!", text = strings("hoc_with_require_new_version", {
        versionCode,
        br: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}),
        url: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_1__.Anchor, { href: "https://github.com/DerGoogler/MMRL/releases", children: "release" }),
    }), } = opt;
    const { context } = (0,_Hooks_useActivity__WEBPACK_IMPORTED_MODULE_4__.useActivity)();
    if (_Native_BuildConfig__WEBPACK_IMPORTED_MODULE_5__.BuildConfig.VERSION_CODE < versionCode) {
        return () => {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_2__.Page, { renderToolbar: () => {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar, { modifier: "noshadow", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Left, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.BackButton, { onClick: context.popPage }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_3__.Toolbar.Center, { children: title })] }));
                }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__["default"], { component: "span", sx: {
                        position: "absolute",
                        left: "50%",
                        top: "calc(50% - 56px)",
                        textAlign: "center",
                        WebkitTransform: "translate(-50%, -50%)",
                        transform: "translate(-50%, -50%)",
                    }, children: text }) }));
        };
    }
    else {
        return component;
    }
}



/***/ }),

/***/ "./src/hooks/native/useLog.ts":
/*!************************************!*\
  !*** ./src/hooks/native/useLog.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLog: () => (/* binding */ useLog)
/* harmony export */ });
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");

function useLog(tag) {
    const DEBUG = 3;
    const INFO = 4;
    const WARN = 5;
    const ERROR = 6;
    return {
        d: (msg) => {
            if (_Native_Os__WEBPACK_IMPORTED_MODULE_0__.os.isAndroid) {
                window.__log__.native_log(DEBUG, String(tag), msg);
            }
            else {
                console.debug(`D/${tag}: ${msg}`);
            }
        },
        i: (msg) => {
            if (_Native_Os__WEBPACK_IMPORTED_MODULE_0__.os.isAndroid) {
                window.__log__.native_log(INFO, String(tag), msg);
            }
            else {
                console.info(`D/${tag}: ${msg}`);
            }
        },
        w: (msg) => {
            if (_Native_Os__WEBPACK_IMPORTED_MODULE_0__.os.isAndroid) {
                window.__log__.native_log(WARN, String(tag), msg);
            }
            else {
                console.warn(`D/${tag}: ${msg}`);
            }
        },
        e: (msg) => {
            if (_Native_Os__WEBPACK_IMPORTED_MODULE_0__.os.isAndroid) {
                window.__log__.native_log(ERROR, String(tag), msg);
            }
            else {
                console.error(`D/${tag}: ${msg}`);
            }
        },
    };
}


/***/ }),

/***/ "./src/hooks/useActivity.ts":
/*!**********************************!*\
  !*** ./src/hooks/useActivity.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Context: () => (/* binding */ Context),
/* harmony export */   Extra: () => (/* binding */ Extra),
/* harmony export */   useActivity: () => (/* binding */ useActivity)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Context = react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const Extra = react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
function useActivity() {
    const ctx = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(Context);
    const etx = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(Extra);
    return {
        context: ctx,
        extra: etx,
    };
}


/***/ }),

/***/ "./src/hooks/useCategories.ts":
/*!************************************!*\
  !*** ./src/hooks/useCategories.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCategories: () => (/* binding */ useCategories)
/* harmony export */ });
function useCategories(input) {
    const categories = [
        "Tools",
        "Boot",
        "Coding",
        "Configurable",
        "Management",
        "System",
        "Apps",
        "Gaming",
        "Other",
        // New categroies
        "Magisk",
        "KernelSU",
        "Zygisk",
        "LSPosed",
        "Xposed",
        "Performance Optimization",
        "Battery Life",
        "Customization",
        "Audio Enhancements",
        "Security",
        "Camera Enhancements",
        "SystemUI Mods",
        "Tweaks and Hacks",
        "Modifications for Root Apps",
        "System Fonts and Emojis",
        // Same as "Other"
        "Miscellaneous",
        "ROM-Specific Modules",
        "Gamepad and Controller Support",
        "App Additions and Features",
        "Adblocking and Hosts Files",
        "Navigation Bar and Gesture Customization",
        "Advanced Audio Mods",
        "Custom Kernels",
        "Boot Animation",
        "Privacy Enhancements",
    ];
    if (input) {
        return { allCategories: categories, filteredCategories: categories.filter((i) => input.indexOf(i) !== -1) };
    }
    else {
        return { allCategories: categories, filteredCategories: [] };
    }
}


/***/ }),

/***/ "./src/hooks/useFetch.ts":
/*!*******************************!*\
  !*** ./src/hooks/useFetch.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFetch: () => (/* binding */ useFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useFetch(url, options) {
    const cache = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});
    // Used to prevent state update if the component is unmounted
    const cancelRequest = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const initialState = {
        error: undefined,
        data: undefined,
    };
    // Keep state logic separated
    const fetchReducer = (state, action) => {
        switch (action.type) {
            case "loading":
                return { ...initialState };
            case "fetched":
                return { ...initialState, data: action.payload };
            case "error":
                return { ...initialState, error: action.payload };
            default:
                return state;
        }
    };
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(fetchReducer, initialState);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Do nothing if the url is not given
        if (!url)
            return;
        cancelRequest.current = false;
        const fetchData = async () => {
            dispatch({ type: "loading" });
            // If a cache exists for this url, return it
            if (cache.current[url]) {
                dispatch({ type: "fetched", payload: cache.current[url] });
                return;
            }
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                let data = (await response[options?.type || "json"]());
                cache.current[url] = data;
                if (cancelRequest.current)
                    return;
                dispatch({ type: "fetched", payload: data });
            }
            catch (error) {
                if (cancelRequest.current)
                    return;
                dispatch({ type: "error", payload: error });
            }
        };
        void fetchData();
        // Use the cleanup function for avoiding a possibly...
        // ...state update after the component was unmounted
        return () => {
            cancelRequest.current = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);
    return [state.data, state.error];
}


/***/ }),

/***/ "./src/hooks/useFormatBytes.ts":
/*!*************************************!*\
  !*** ./src/hooks/useFormatBytes.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFormatBytes: () => (/* binding */ useFormatBytes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * A function to format file sizes
 * @param bytes
 * @param decimalPoint Default is `2`
 * @returns
 */
function useFormatBytes(bytes, decimalPoint = 2) {
    if (!bytes || bytes == 0)
        return react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => ["0", "Bytes"], [bytes]);
    var k = 1000, sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], i = Math.floor(Math.log(bytes) / Math.log(k));
    return react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => [parseFloat((bytes / Math.pow(k, i)).toFixed(decimalPoint)), sizes[i]], [bytes]);
}



/***/ }),

/***/ "./src/hooks/useFormatDate.ts":
/*!************************************!*\
  !*** ./src/hooks/useFormatDate.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFormatDate: () => (/* binding */ useFormatDate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useSettings */ "./src/hooks/useSettings.tsx");


const useFormatDate = (date, multiply = true) => {
    const { settings } = (0,_useSettings__WEBPACK_IMPORTED_MODULE_1__.useSettings)();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => Intl.DateTimeFormat(settings.language.value, {
        year: "numeric",
        day: "2-digit",
        month: "short",
        hour12: true,
    }).format(new Date(multiply ? date * 1000 : date)), [date]);
};


/***/ }),

/***/ "./src/hooks/useLocalModules.ts":
/*!**************************************!*\
  !*** ./src/hooks/useLocalModules.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLocalModules: () => (/* binding */ useLocalModules)
/* harmony export */ });
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var properties_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! properties-file */ "./node_modules/properties-file/lib/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _useModFS__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _useSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useSettings */ "./src/hooks/useSettings.tsx");






function useLocalModules() {
    const { modFS } = (0,_useModFS__WEBPACK_IMPORTED_MODULE_4__.useModFS)();
    const { settings } = (0,_useSettings__WEBPACK_IMPORTED_MODULE_5__.useSettings)();
    const [localModules, setLocalModules] = react__WEBPACK_IMPORTED_MODULE_3___default().useState([]);
    if (_Native_Os__WEBPACK_IMPORTED_MODULE_0__.os.isAndroid) {
        react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(() => {
            const folders = _Native_SuFile__WEBPACK_IMPORTED_MODULE_1__.SuFile.list(modFS("MODULES"));
            folders.forEach((module) => {
                const properties = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_1__.SuFile(modFS("PROPS", { MODID: module }));
                if (properties.exist()) {
                    setLocalModules((prev) => {
                        // Preventing duplicates
                        const ids = new Set(prev.map((d) => d.id));
                        const merged = [
                            ...prev,
                            ...[
                                {
                                    ...new properties_file__WEBPACK_IMPORTED_MODULE_2__.Properties(properties.read()).toObject(),
                                    timestamp: properties.lastModified(),
                                    __mmrl__local__module__: true,
                                },
                            ].filter((d) => !ids.has(d.id)),
                        ];
                        return merged;
                    });
                }
            });
        }, [settings]);
    }
    return localModules;
}


/***/ }),

/***/ "./src/hooks/useLowQualityModule.ts":
/*!******************************************!*\
  !*** ./src/hooks/useLowQualityModule.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useLowQualityModule: () => (/* binding */ useLowQualityModule)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useLowQualityModule = (props, disable) => {
    const requiredProp = ["id", "name", "version", "versionCode", "author", "description"];
    const res = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => requiredProp.reduce(function (i, j) {
        return i && props[j] && j in props;
    }, true), [props]);
    return disable ? false : !res;
};


/***/ }),

/***/ "./src/hooks/useModFS.tsx":
/*!********************************!*\
  !*** ./src/hooks/useModFS.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INITIAL_MOD_CONF: () => (/* binding */ INITIAL_MOD_CONF),
/* harmony export */   ModConfContext: () => (/* binding */ ModConfContext),
/* harmony export */   ModFSProvider: () => (/* binding */ ModFSProvider),
/* harmony export */   useModFS: () => (/* binding */ useModFS)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var default_composer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! default-composer */ "./node_modules/default-composer/dist/index.modern.mjs");
/* harmony import */ var _useNativeFileStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useNativeFileStorage */ "./src/hooks/useNativeFileStorage.tsx");
/* harmony import */ var modfs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! modfs */ "./node_modules/modfs/dist/index.js");





const INITIAL_MOD_CONF = {
    //cli
    MSUCLI: "/system/bin/magisk",
    MSUBSU: "<ADB>/magisk/busybox",
    MSURSP: "/system/bin/resetprop",
    KSUCLI: "<ADB>/ksu/bin/ksud",
    KSUBSU: "<ADB>/ksu/bin/busybox",
    KSURSP: "<ADB>/ksu/bin/resetprop",
    ASUCLI: "<ADB>/ap/bin/apd",
    ASUBSU: "<ADB>/ap/bin/busybox",
    ASURSP: "<ADB>/ap/bin/resetprop",
    // default paths
    ADB: "/data/adb",
    MMRLFOL: "<ADB>/mmrl",
    MODULES: "<ADB>/modules",
    MODULECWD: "<MODULES>/<MODID>",
    PROPS: "<MODULECWD>/module.prop",
    SYSTEM: "<MODULECWD>/system.prop",
    SEPOLICY: "<MODULECWD>/sepolicy.rule",
    CONFIG: `<MODULECWD>/system/usr/share/mmrl/config/<MODID>.mdx`,
    // service paths
    LATESERVICE: "<MODULECWD>/service.sh",
    POSTSERVICE: "<MODULECWD>/post-fs-data.sh",
    POSTMOUNT: "<MODULECWD>/post-mount.sh",
    BOOTCOMP: "<MODULECWD>/boot-completed.sh",
    // status paths
    SKIPMOUNT: "<MODULECWD>/skip_mount",
    DISABLE: "<MODULECWD>/disable",
    REMOVE: "<MODULECWD>/remove",
    UPDATE: "<MODULECWD>/update",
    // modconf
    CONFCWD: "<MODULECWD>/system/usr/share/mmrl/config/<MODID>",
    CONFINDEX: "<CONFCWD>/index.jsx",
    MODCONF_PLAYGROUND: "<ADB>/mmrl/modconf-playground.jsx",
    MODCONF_PLAYGROUND_MODID: "playground",
    // modconf standalone
    MCALONE: "<MMRLFOL>/modconf",
    MCALONECWD: "<MCALONE>/<MODID>",
    MCALONEMETA: "<MCALONECWD>/modconf.json",
    MCALONEIDX: "<MCALONECWD>/index.jsx",
    // Installer
    EXPLORE_INSTALL: 'mmrl install -y "<URL>"',
    LOCAL_INSTALL: "mmrl install local -y <ZIPFILES>",
};
const ModConfContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    _modFS: INITIAL_MOD_CONF,
    __modFS: INITIAL_MOD_CONF,
    modFS(key, adds) {
        return key;
    },
    setModFS(key, state) { },
});
const useModFS = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModConfContext);
};
const ModFSProvider = (props) => {
    const [modFS, setModFS] = (0,_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_3__.useNativeFileStorage)("/data/adb/mmrl/modfs.v2.json", INITIAL_MOD_CONF, { loader: "json" });
    const pmodFS = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => new modfs__WEBPACK_IMPORTED_MODULE_4__["default"]((0,default_composer__WEBPACK_IMPORTED_MODULE_2__.defaultComposer)(INITIAL_MOD_CONF, modFS)), [modFS]);
    const contextValue = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => ({
        _modFS: (0,default_composer__WEBPACK_IMPORTED_MODULE_2__.defaultComposer)(INITIAL_MOD_CONF, modFS),
        __modFS: pmodFS.formatEntries(),
        modFS(key, adds) {
            return modfs__WEBPACK_IMPORTED_MODULE_4__["default"].format(pmodFS.getEntrie(key), { ...modFS, ...adds });
        },
        setModFS: (name, state) => {
            setModFS((prev) => {
                const newValue = state instanceof Function ? state(prev[name]) : state;
                return {
                    ...prev,
                    [name]: newValue,
                };
            });
        },
    }), [modFS]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ModConfContext.Provider, { value: contextValue, children: props.children });
};


/***/ }),

/***/ "./src/hooks/useModuleInfo.ts":
/*!************************************!*\
  !*** ./src/hooks/useModuleInfo.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useModuleInfo: () => (/* binding */ useModuleInfo)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Used to handle undefined properties
 */
const useModuleInfo = (extra) => {
    const { track } = extra;
    const latestVersion = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => extra.versions[extra.versions.length - 1], [extra.versions]);
    return {
        timestamp: extra.timestamp || latestVersion.timestamp,
        verified: extra.verified,
        license: extra.license || track.license,
        homepage: extra.homepage || track.homepage,
        support: extra.support || track.support,
        donate: extra.donate || track.donate,
        cover: extra.cover || track.cover,
        icon: extra.icon || track.icon,
        require: extra.require || track.require,
        screenshots: extra.screenshots || track.screenshots,
        categories: extra.categories || track.categories,
        readme: extra.readme || track.readme,
        latestVersion: latestVersion,
        size: extra.size || latestVersion.size,
    };
};


/***/ }),

/***/ "./src/hooks/useModulesFilter.tsx":
/*!****************************************!*\
  !*** ./src/hooks/useModulesFilter.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FilterDialog: () => (/* binding */ FilterDialog),
/* harmony export */   filters: () => (/* binding */ filters),
/* harmony export */   useModuleFilter: () => (/* binding */ useModuleFilter)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _useNativeStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useNativeStorage */ "./src/hooks/useNativeStorage.tsx");
/* harmony import */ var _mui_icons_material_UpdateDisabled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/UpdateDisabled */ "./node_modules/@mui/icons-material/UpdateDisabled.js");
/* harmony import */ var _mui_icons_material_CalendarMonth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/icons-material/CalendarMonth */ "./node_modules/@mui/icons-material/CalendarMonth.js");
/* harmony import */ var _mui_icons_material_Abc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Abc */ "./node_modules/@mui/icons-material/Abc.js");
/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/List */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItem */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ "./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Dialog */ "./node_modules/@mui/material/Dialog/Dialog.js");
/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogTitle */ "./node_modules/@mui/material/DialogTitle/DialogTitle.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);















const filters = [
    {
        name: "No filter",
        icon: _mui_icons_material_UpdateDisabled__WEBPACK_IMPORTED_MODULE_4__["default"],
        value: "none",
        allowedIds: ["explore", "local", "update"],
    },
    {
        name: "Newest date first",
        icon: _mui_icons_material_CalendarMonth__WEBPACK_IMPORTED_MODULE_5__["default"],
        value: "date_newest",
        allowedIds: ["explore", "local", "update"],
    },
    {
        name: "Oldest date first",
        icon: _mui_icons_material_CalendarMonth__WEBPACK_IMPORTED_MODULE_5__["default"],
        value: "date_oldest",
        allowedIds: ["explore", "local", "update"],
    },
    {
        name: "Name (A to Z)",
        icon: _mui_icons_material_Abc__WEBPACK_IMPORTED_MODULE_6__["default"],
        value: "alphabetically",
        allowedIds: ["explore", "local", "update"],
    },
    {
        name: "Name (Z to A)",
        icon: _mui_icons_material_Abc__WEBPACK_IMPORTED_MODULE_6__["default"],
        value: "alphabetically_reverse",
        allowedIds: ["explore", "local", "update"],
    },
    // {
    //   name: "Most stars",
    //   icon: StarIcon,
    //   value: "most_stars",
    //   allowedIds: ["explore"],
    // },
    // {
    //   name: "Least stars",
    //   icon: StarBorderIcon,
    //   value: "least_stars",
    //   allowedIds: ["explore"],
    // },
];
const useModuleFilter = (key) => {
    const [filter, setFilter] = (0,_useNativeStorage__WEBPACK_IMPORTED_MODULE_1__.useNativeStorage)(key, filters[0].value);
    const f = react__WEBPACK_IMPORTED_MODULE_3___default().useMemo(() => ({
        none: [{}],
        date_oldest: [{ key: "timestamp", descending: false }],
        date_newest: [{ key: "timestamp", descending: true }],
        alphabetically: [{ key: "name", descending: false }],
        alphabetically_reverse: [{ key: "name", descending: true }],
        // least_stars: [{ key: "stars", descending: false }],
        // most_stars: [{ key: "stars", descending: true }],
    }), []);
    return [f[filter], filter, setFilter];
};
const FilterDialog = (props) => {
    const { theme } = (0,_useTheme__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
    const { onClose, selectedValue, open } = props;
    const handleClose = () => {
        onClose(selectedValue);
    };
    const handleListItemClick = (value) => {
        onClose(value);
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_7__["default"], { onClose: handleClose, open: open, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_8__["default"], { children: "Apply filter" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_List__WEBPACK_IMPORTED_MODULE_9__["default"], { sx: { pt: 0 }, children: filters.map((filter) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_10__["default"], { disableGutters: true, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_11__["default"], { onClick: () => handleListItemClick(filter.value), children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_12__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_13__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(filter.icon, {}) }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_14__["default"], { primary: filter.name })] }) }, filter.value))) })] }));
};


/***/ }),

/***/ "./src/hooks/useNativeFileStorage.tsx":
/*!********************************************!*\
  !*** ./src/hooks/useNativeFileStorage.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigContext: () => (/* binding */ ConfigContext),
/* harmony export */   ConfigProvider: () => (/* binding */ ConfigProvider),
/* harmony export */   useConfig: () => (/* binding */ useConfig),
/* harmony export */   useNativeFileStorage: () => (/* binding */ useNativeFileStorage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var default_composer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! default-composer */ "./node_modules/default-composer/dist/index.modern.mjs");
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ini */ "./node_modules/ini/lib/ini.js");
/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ini__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var yaml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! yaml */ "./node_modules/yaml/browser/index.js");
/* harmony import */ var _useModFS__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useModFS */ "./src/hooks/useModFS.tsx");








function useNativeFileStorage(key, initialValue, opt = { loader: null }) {
    const { loader } = opt;
    const file = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => new _Native_SuFile__WEBPACK_IMPORTED_MODULE_3__.SuFile(key, { readDefaultValue: JSON.stringify(_useModFS__WEBPACK_IMPORTED_MODULE_6__.INITIAL_MOD_CONF) }), [key]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        if (!file.exist()) {
            file.create(_Native_SuFile__WEBPACK_IMPORTED_MODULE_3__.SuFile.NEW_FILE);
        }
    }, [key]);
    const readValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
        try {
            if (file.exist()) {
                switch (loader) {
                    case "json":
                        return JSON.parse(file.read());
                    case "properties":
                    case "prop":
                    case "ini":
                        return ini__WEBPACK_IMPORTED_MODULE_4___default().parse(file.read());
                    case "yml":
                    case "yaml":
                        return yaml__WEBPACK_IMPORTED_MODULE_5__["default"].parse(file.read());
                    default:
                        return file.read();
                }
            }
            else {
                return initialValue;
            }
        }
        catch (error) {
            return initialValue;
        }
    }, [initialValue, key]);
    const [storedValue, setStoredValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(readValue);
    const setValue = (value) => {
        try {
            const newValue = value instanceof Function ? value(storedValue) : value;
            switch (loader) {
                case "json":
                    file.write(JSON.stringify(newValue, null, 4));
                    break;
                case "properties":
                case "prop":
                case "ini":
                    file.write(ini__WEBPACK_IMPORTED_MODULE_4___default().stringify(newValue, { whitespace: true, newline: true }));
                    break;
                case "yml":
                case "yaml":
                    file.write(yaml__WEBPACK_IMPORTED_MODULE_5__["default"].stringify(newValue));
                    break;
                default:
                    file.write(String(newValue));
                    break;
            }
            setStoredValue(newValue);
        }
        catch (error) {
            throw new Error(`Error writing file “${key}”: ${error}`);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        setStoredValue(readValue());
    }, []);
    return [storedValue, setValue];
}
const ConfigContext = react__WEBPACK_IMPORTED_MODULE_1___default().createContext([
    {},
    (key, state) => { },
    (state) => { },
]);
const useConfig = () => {
    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ConfigContext);
};
const ConfigProvider = (props) => {
    const { loadFromFile, loader = "json", initialConfig } = props;
    if (!loadFromFile) {
        throw new TypeError('"loadFromFile" is undefined');
    }
    if (!initialConfig) {
        throw new TypeError('"initialConfig" is undefined');
    }
    const [config, setConfig] = useNativeFileStorage(loadFromFile, initialConfig, { loader: loader });
    const contextValue = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => [
        (0,default_composer__WEBPACK_IMPORTED_MODULE_2__.defaultComposer)(initialConfig, config),
        (name, state) => {
            setConfig((prev) => {
                const newValue = state instanceof Function ? state(prev[name]) : state;
                return {
                    ...prev,
                    [name]: newValue,
                };
            });
        },
        setConfig,
    ], [config]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ConfigContext.Provider, { value: contextValue, children: props.children });
};


/***/ }),

/***/ "./src/hooks/useNativeProperties.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/useNativeProperties.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useNativeProperties: () => (/* binding */ useNativeProperties)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useStateCallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useStateCallback */ "./src/hooks/useStateCallback.ts");
/* harmony import */ var _native_useLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./native/useLog */ "./src/hooks/native/useLog.ts");
/* harmony import */ var _useNativeStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useNativeStorage */ "./src/hooks/useNativeStorage.tsx");
/* harmony import */ var _Native_Properties__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Native/Properties */ "./src/native/Properties.ts");
/**
 * FORK (https://usehooks-ts.com/react-hook/use-local-storage) to use our native storage
 */





function convertToProperType(value) {
    if (/^(true|1|y|yes|on)$/i.test(value)) {
        return /^(true|1|y|yes|on)$/i.test(value); // Convert to boolean true
    }
    else if (!isNaN(value)) {
        return parseFloat(value); // Convert to number if it's a valid number
    }
    else {
        return value; // Return the original string if no conversion is possible
    }
}
function useNativeProperties(key, initialValue) {
    const log = (0,_native_useLog__WEBPACK_IMPORTED_MODULE_2__.useLog)("useNativeProperties");
    const readValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            return (0,_useNativeStorage__WEBPACK_IMPORTED_MODULE_3__.parseJSON)(_Native_Properties__WEBPACK_IMPORTED_MODULE_4__.Properties.get(key, JSON.stringify(initialValue)));
        }
        catch (error) {
            log.w(`Error reading nativeStorage key “${key}”: ${error}`);
            return initialValue;
        }
    }, [initialValue, key]);
    const [storedValue, setStoredValue] = (0,_useStateCallback__WEBPACK_IMPORTED_MODULE_1__.useStateCallback)(readValue);
    const setValue = (value, callback) => {
        if (typeof window === "undefined") {
            log.w(`Tried setting nativeProperties key “${key}” even though environment is not a client`);
        }
        try {
            const newValue = value instanceof Function ? value(storedValue) : value;
            _Native_Properties__WEBPACK_IMPORTED_MODULE_4__.Properties.set(key, JSON.stringify(JSON.stringify(newValue)));
            setStoredValue(newValue, callback);
        }
        catch (error) {
            log.w(`Error setting localStorage key “${key}”: ${error}`);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setStoredValue(readValue());
    }, []);
    return [storedValue, setValue];
}


/***/ }),

/***/ "./src/hooks/useNativeStorage.tsx":
/*!****************************************!*\
  !*** ./src/hooks/useNativeStorage.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   nativeStorage: () => (/* binding */ nativeStorage),
/* harmony export */   parseJSON: () => (/* binding */ parseJSON),
/* harmony export */   useNativeStorage: () => (/* binding */ useNativeStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _useStateCallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useStateCallback */ "./src/hooks/useStateCallback.ts");
/* harmony import */ var _native_useLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./native/useLog */ "./src/hooks/native/useLog.ts");
/**
 * FORK (https://usehooks-ts.com/react-hook/use-local-storage) to use our native storage
 */




const nativeStorage = _Native_Os__WEBPACK_IMPORTED_MODULE_1__.os.isAndroid ? window.__nativeStorage__ : window.localStorage;
function useNativeStorage(key, initialValue) {
    const log = (0,_native_useLog__WEBPACK_IMPORTED_MODULE_3__.useLog)("useNativeStorage");
    // Get from local storage then
    // parse stored json or return initialValue
    const readValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window === "undefined") {
            return initialValue;
        }
        try {
            const item = nativeStorage.getItem(key);
            return item ? parseJSON(item) : initialValue;
        }
        catch (error) {
            log.w(`Error reading nativeStorage key “${key}”: ${error}`);
            return initialValue;
        }
    }, [initialValue, key]);
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = (0,_useStateCallback__WEBPACK_IMPORTED_MODULE_2__.useStateCallback)(readValue);
    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = (value, callback) => {
        // Prevent build error "window is undefined" but keeps working
        if (typeof window === "undefined") {
            log.w(`Tried setting localStorage key “${key}” even though environment is not a client`);
        }
        try {
            // Allow value to be a function so we have the same API as useState
            const newValue = value instanceof Function ? value(storedValue) : value;
            // Save to local storage
            nativeStorage.setItem(key, JSON.stringify(newValue));
            // Save state
            setStoredValue(newValue, callback);
            // We dispatch a custom event so every useLocalStorage hook are notified
            // window.dispatchEvent(new Event("local-storage"));
        }
        catch (error) {
            log.w(`Error setting localStorage key “${key}”: ${error}`);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        setStoredValue(readValue());
    }, []);
    // const handleStorageChange = useCallback(
    //   (event: StorageEvent | CustomEvent) => {
    //     if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
    //       return;
    //     }
    //     setStoredValue(readValue());
    //   },
    //   [key, readValue]
    // );
    // // this only works for other documents, not the current one
    // useEventListener("storage", handleStorageChange);
    // // this is a custom event, triggered in writeValueToLocalStorage
    // // See: useLocalStorage()
    // useEventListener("native-storage", handleStorageChange);
    return [storedValue, setValue];
}
// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON(value) {
    try {
        return value === "undefined" ? undefined : JSON.parse(value ?? "");
    }
    catch (e) {
        console.log("parsing error on", { value });
        return e;
    }
}


/***/ }),

/***/ "./src/hooks/useNetwork.ts":
/*!*********************************!*\
  !*** ./src/hooks/useNetwork.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useNetwork: () => (/* binding */ useNetwork)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useNetwork = () => {
    const [isOnline, setNetwork] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(window.navigator.onLine);
    const updateNetwork = () => {
        setNetwork(window.navigator.onLine);
    };
    react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
        window.addEventListener("offline", updateNetwork);
        window.addEventListener("online", updateNetwork);
        return () => {
            window.removeEventListener("offline", updateNetwork);
            window.removeEventListener("online", updateNetwork);
        };
    }, [isOnline]);
    return { isNetworkAvailable: isOnline };
};


/***/ }),

/***/ "./src/hooks/useOpenModuleSearch.tsx":
/*!*******************************************!*\
  !*** ./src/hooks/useOpenModuleSearch.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useOpenModuleSearch: () => (/* binding */ useOpenModuleSearch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Activitys_SearchActivity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Activitys/SearchActivity */ "./src/activitys/SearchActivity.tsx");
/* harmony import */ var _useActivity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useActivity */ "./src/hooks/useActivity.ts");
/* harmony import */ var _mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/ListItemButton */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _Activitys_ModuleViewActivity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Activitys/ModuleViewActivity */ "./src/activitys/ModuleViewActivity/index.tsx");
/* harmony import */ var _mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/ListItemAvatar */ "./node_modules/@mui/material/ListItemAvatar/ListItemAvatar.js");
/* harmony import */ var _mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Avatar */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Chip */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Stack */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/ListItemText */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _useModFS__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _Components_icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Components/icons/VerifiedIcon */ "./src/components/icons/VerifiedIcon.tsx");














function useOpenModuleSearch(list) {
    const { context } = (0,_useActivity__WEBPACK_IMPORTED_MODULE_2__.useActivity)();
    const { modFS } = (0,_useModFS__WEBPACK_IMPORTED_MODULE_5__.useModFS)();
    return (initialSearch = "") => {
        context.pushPage({
            component: _Activitys_SearchActivity__WEBPACK_IMPORTED_MODULE_1__.SearchActivity,
            key: "SearchActivity",
            props: {
                list: list,
                initialSearch: initialSearch,
                search: {
                    by: ["id", "name", "author"],
                    //onEveryWord: true,
                    caseInsensitive: true,
                },
                renderList(item, index) {
                    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_7__["default"], { onClick: () => {
                            context.pushPage({
                                component: _Activitys_ModuleViewActivity__WEBPACK_IMPORTED_MODULE_3__.ModuleViewActivity,
                                key: "ModuleViewActivity",
                                extra: item,
                            });
                        }, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemAvatar__WEBPACK_IMPORTED_MODULE_8__["default"], { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Avatar__WEBPACK_IMPORTED_MODULE_9__["default"], { alt: item.name, sx: (theme) => ({
                                        bgcolor: theme.palette.primary.dark,
                                        boxShadow: "0 -1px 5px rgba(0,0,0,.09), 0 3px 5px rgba(0,0,0,.06), 0 1px 2px rgba(0,0,0,.3), 0 1px 3px rgba(0,0,0,.15)",
                                        borderRadius: "20%",
                                        mr: 1.5,
                                    }), src: item.icon, children: item.name.charAt(0).toUpperCase() }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_10__["default"], { primary: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 0.5, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], { children: item.name }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_icons_VerifiedIcon__WEBPACK_IMPORTED_MODULE_6__.VerifiedIcon, { isVerified: item.verified })] }), secondary: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "column", justifyContent: "center", alignItems: "flex-start", spacing: 0.5, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], { variant: "body2", children: item.version }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_11__["default"], { direction: "row", justifyContent: "flex-start", alignItems: "center", spacing: 0.5, children: _Native_SuFile__WEBPACK_IMPORTED_MODULE_4__.SuFile.exist(modFS("PROPS", { MODID: item.id })) && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_13__["default"], { size: "small", label: "Installed" }) })] }) })] }, item.id));
                },
            },
        });
    };
}


/***/ }),

/***/ "./src/hooks/useRepos.tsx":
/*!********************************!*\
  !*** ./src/hooks/useRepos.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RepoContext: () => (/* binding */ RepoContext),
/* harmony export */   RepoProvider: () => (/* binding */ RepoProvider),
/* harmony export */   useRepos: () => (/* binding */ useRepos)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useNativeStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useNativeStorage */ "./src/hooks/useNativeStorage.tsx");
/* harmony import */ var googlers_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! googlers-tools */ "./node_modules/googlers-tools/dist/index.js");
/* harmony import */ var _useSettings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Native_Os__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Native/Os */ "./src/native/Os.ts");
/* harmony import */ var _native_useLog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./native/useLog */ "./src/hooks/native/useLog.ts");







const RepoContext = react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    repos: [],
    setRepos: () => { },
    modules: [],
    actions: {
        addRepo: (data) => { },
        removeRepo: (data) => { },
        setRepoEnabled: (data) => { },
        isRepoEnabled: (repo) => false,
    },
});
const RepoProvider = (props) => {
    const TAG = "RepoProvider";
    const log = (0,_native_useLog__WEBPACK_IMPORTED_MODULE_6__.useLog)(TAG);
    const [disabledRepos, setDisabledRepos] = (0,_useNativeStorage__WEBPACK_IMPORTED_MODULE_2__.useNativeStorage)("disabled_Repos", []);
    const [repos, setRepos] = (0,_useNativeStorage__WEBPACK_IMPORTED_MODULE_2__.useNativeStorage)("repos_v3", [
        {
            name: "Googlers Magisk Repo",
            website: "https://mmrl.dergoogler.com",
            support: "https://github.com/Googlers-Repo/gmr/issues",
            donate: "https://github.com/sponsors/DerGoogler",
            submission: "https://github.com/Googlers-Repo/gmr/issues/new?assignees=&labels=module&projects=&template=submission.yml&title=%5BModule%5D%3A+",
            base_url: "https://gr.dergoogler.com/gmr/",
            max_num: 3,
            enable_log: true,
            log_dir: "log",
        },
        {
            name: "Magisk Modules Alt Repo",
            website: undefined,
            support: undefined,
            donate: undefined,
            submission: "https://github.com/Magisk-Modules-Alt-Repo/submission/issues/new?assignees=&labels=module&projects=&template=module-submission.yml&tit",
            base_url: "https://magisk-modules-alt-repo.github.io/json-v2/",
            max_num: 3,
            enable_log: true,
            log_dir: "log",
        },
    ]);
    const { settings, setSettings } = (0,_useSettings__WEBPACK_IMPORTED_MODULE_4__.useSettings)();
    const [modules, setModules] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const addRepo = (data) => {
        if (!repos.some((repo) => repo.base_url === data.url)) {
            if (repos.length <= 4) {
                if (googlers_tools__WEBPACK_IMPORTED_MODULE_3__.link.validURL(data.url)) {
                    fetch(`${data.url.slice(-1) != "/" ? data.url + "/" : data.url}json/config.json`)
                        .then((response) => {
                        if (response.status == 200) {
                            return response.json();
                        }
                        else {
                            data.error && data.error(Error("Cannot find given repo link or your link isn't valid"));
                        }
                    })
                        .then((response) => {
                        setRepos((prev) => [...prev, response], data.callback);
                    })
                        .catch((e) => (data.callback ? data.callback(e) : log.e(e)));
                }
                else {
                    _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.toast("The given link isn't valid", "short");
                }
            }
            else {
                _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.toast("You can't add more than 5 repos", "short");
            }
        }
        else {
            _Native_Os__WEBPACK_IMPORTED_MODULE_5__.os.toast("This repo alredy exist", "short");
        }
    };
    const removeRepo = (data) => {
        setRepos((tmp) => {
            tmp = tmp.filter((remv) => remv.base_url != data.id);
            return tmp;
        }, data.callback);
    };
    const setRepoEnabled = (data) => {
        setDisabledRepos((prev) => {
            if (prev.some((elem) => elem === data.id)) {
                return prev.filter((item) => item !== data.id);
            }
            else {
                return [...prev, data.id];
            }
        }, data.callback);
    };
    const isRepoEnabled = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((repo) => {
        return !disabledRepos.includes(repo);
    }, [disabledRepos]);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(() => {
        // Needs an another solution
        setModules([]);
        const fetchData = async () => {
            for (const repo of repos) {
                if (disabledRepos.includes(repo.base_url))
                    continue;
                fetch(`${repo.base_url}json/modules.json`)
                    .then((res) => {
                    if (!res.ok)
                        throw new Error(res.statusText);
                    return res.json();
                })
                    .then((json) => {
                    setModules((prev) => {
                        // Preventing duplicates
                        var ids = new Set(prev.map((d) => d.id));
                        var merged = [...prev, ...json.modules.filter((d) => !ids.has(d.id))];
                        return merged;
                    });
                });
            }
        };
        void fetchData();
    }, [disabledRepos, repos, settings]);
    const contextValue = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => ({ repos, setRepos, modules, actions: { addRepo, removeRepo, setRepoEnabled, isRepoEnabled } }), [repos, modules, settings]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(RepoContext.Provider, { value: contextValue, children: props.children });
};
const useRepos = () => {
    return react__WEBPACK_IMPORTED_MODULE_1___default().useContext(RepoContext);
};


/***/ }),

/***/ "./src/hooks/useSettings.tsx":
/*!***********************************!*\
  !*** ./src/hooks/useSettings.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContext: () => (/* binding */ SettingsContext),
/* harmony export */   SettingsProvider: () => (/* binding */ SettingsProvider),
/* harmony export */   termScrollBehaviors: () => (/* binding */ termScrollBehaviors),
/* harmony export */   useSettings: () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var default_composer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! default-composer */ "./node_modules/default-composer/dist/index.modern.mjs");
/* harmony import */ var _locales_declaration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../locales/declaration */ "./src/locales/declaration.ts");
/* harmony import */ var _useNativeFileStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useNativeFileStorage */ "./src/hooks/useNativeFileStorage.tsx");





const termScrollBehaviors = [
    {
        name: "Smooth",
        value: "smooth",
    },
    {
        name: "Instant",
        value: "instant",
    },
];
const SettingsContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({
    patchSettings: () => { },
    // @ts-ignore
    settings: {},
    setSettings(key, state, callback) { },
});
const useSettings = () => {
    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(SettingsContext);
};
const SettingsProvider = (props) => {
    const availableLangs = (0,_locales_declaration__WEBPACK_IMPORTED_MODULE_3__.useLanguageMap)();
    const INITIAL_SETTINGS = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => ({
        darkmode: false,
        language: availableLangs[0],
        eruda_console_enabled: false,
        disabled_repos: [],
        _low_quality_module: true,
        _invald_module: false,
        shade_value: -80,
        term_scroll_bottom: true,
        term_scroll_behavior: termScrollBehaviors[0],
        link_protection: true,
        swipeable_tabs: false,
        print_terminal_error: false,
        terminal_word_wrap: true,
        terminal_numberic_lines: true,
    }), []);
    const [settings, setSettings] = (0,_useNativeFileStorage__WEBPACK_IMPORTED_MODULE_4__.useNativeFileStorage)("/data/adb/mmrl/settings.v2.json", INITIAL_SETTINGS, { loader: "json" });
    const _setSettings = (name, state, callback) => {
        setSettings((prev) => {
            const newValue = state instanceof Function ? state(prev[name]) : state;
            return {
                ...prev,
                [name]: newValue,
            };
        }, (state) => callback && callback(state[name]));
    };
    const contextValue = react__WEBPACK_IMPORTED_MODULE_1___default().useMemo(() => ({
        patchSettings: () => {
            setSettings((0,default_composer__WEBPACK_IMPORTED_MODULE_2__.defaultComposer)(INITIAL_SETTINGS, settings));
        },
        settings: (0,default_composer__WEBPACK_IMPORTED_MODULE_2__.defaultComposer)(INITIAL_SETTINGS, settings),
        setSettings: _setSettings,
    }), [settings]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SettingsContext.Provider, { value: contextValue, children: props.children });
};


/***/ }),

/***/ "./src/hooks/useStateCallback.ts":
/*!***************************************!*\
  !*** ./src/hooks/useStateCallback.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useStateCallback: () => (/* binding */ useStateCallback)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useStateCallback(initialState) {
    const [state, setState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
    const cbRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(undefined); // init mutable ref container for callbacks
    const [uniqueState, setUniqueState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Symbol());
    const setStateCallback = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((state, callback) => {
        cbRef.current = callback; // store current, passed callback in ref
        setState(state);
        // Prevent unnecessary firing of the useEffect if there is no callback to fire
        if (callback) {
            setUniqueState(Symbol());
        }
    }, []); // keep object reference stable, exactly like `useState`
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // cb.current is `undefined` on initial render,
        // so we only invoke callback on state *updates*
        if (cbRef.current) {
            cbRef.current(state);
            cbRef.current = undefined; // reset callback after execution
        }
    }, [state, uniqueState]);
    return [state, setStateCallback];
}


/***/ }),

/***/ "./src/hooks/useStrings.tsx":
/*!**********************************!*\
  !*** ./src/hooks/useStrings.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StringsProvider: () => (/* binding */ StringsProvider),
/* harmony export */   useStrings: () => (/* binding */ useStrings)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useSettings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSettings */ "./src/hooks/useSettings.tsx");



const StringsContext = react__WEBPACK_IMPORTED_MODULE_1__.createContext({
    strings(key, fmt) {
        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    },
    format(template, object) {
        return "";
    },
    currentLanguage: "en",
});
/**
 *
 * @param strings The first element is the default language
 */
const StringsProvider = (props) => {
    const { settings } = (0,_useSettings__WEBPACK_IMPORTED_MODULE_2__.useSettings)();
    const defaultLanguage = Object.keys(props.data)[0];
    const currentLanguage = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => settings.language.value, [settings]);
    // const format = React.useCallback((template: string, object?: object) => {
    //   return template.replace(/\{(\w+(\.\w+)*)\}/gi, (match, key) => {
    //     const keys = key.split(".");
    //     let value = object || {};
    //     for (const k of keys) {
    //       if (k in value) {
    //         value = value[k];
    //       } else {
    //         return match;
    //       }
    //     }
    //     return format(String(value), object);
    //   });
    // }, []);
    const format = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((str, replacement) => {
        if (!replacement) {
            return str;
        }
        const result = [];
        const keys = Object.keys(replacement);
        const getRegExp = () => {
            const regexp = [];
            keys.forEach((key) => regexp.push(`{${key}}`));
            return new RegExp(regexp.join("|"));
        };
        str.split(getRegExp()).forEach((item, i) => {
            result.push(item, replacement[keys[i]]);
        });
        return result;
    }, []);
    const strings = react__WEBPACK_IMPORTED_MODULE_1__.useCallback((key, fmt) => {
        const currentLang = props.data[currentLanguage];
        const defaultLang = props.data[defaultLanguage];
        if (currentLang[key] !== undefined) {
            return format(currentLang[key], fmt);
        }
        else if (defaultLang[key] !== undefined) {
            return format(defaultLang[key], fmt);
        }
        else {
            return "";
        }
    }, [currentLanguage]);
    const contextValue = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => ({
        strings,
        format,
        currentLanguage,
    }), [strings, format, currentLanguage, settings]);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(StringsContext.Provider, { children: props.children, value: contextValue });
};
const useStrings = () => react__WEBPACK_IMPORTED_MODULE_1__.useContext(StringsContext);


/***/ }),

/***/ "./src/hooks/useTheme.tsx":
/*!********************************!*\
  !*** ./src/hooks/useTheme.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider),
/* harmony export */   useTheme: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/createTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/ThemeProvider.js");


const useTheme = () => {
    const theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return {
        theme: theme,
    };
};
const THIS_IS_THE_THEME_OBJECT_OF_THIS_F_APP = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])({
    components: {
        MuiListItemText: {
            styleOverrides: {
                root: {
                    wordWrap: "break-word",
                },
            },
        },
        MuiListSubheader: {
            styleOverrides: {
                root: ({ theme }) => ({
                    backgroundColor: theme.palette.background.default,
                }),
            },
        },
        MuiSwitch: {
            styleOverrides: {
                root: ({ theme }) => ({
                    "& .MuiSwitch-switchBase": {
                        color: theme.palette.background.default,
                    },
                    "& .MuiSwitch-switchBase.Mui-checked": {
                        color: theme.palette.background.default,
                    },
                    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        opacity: "unset",
                        backgroundColor: theme.palette.primary.main,
                    },
                    "& .MuiSwitch-switchBase + .MuiSwitch-track": {
                        backgroundColor: theme.palette.text.secondary,
                    },
                    padding: 8,
                    "& .MuiSwitch-track": {
                        borderRadius: 22 / 2,
                        "&:before, &:after": {
                            content: '""',
                            position: "absolute",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: 16,
                            height: 16,
                        },
                    },
                    "& .MuiSwitch-thumb": {
                        boxShadow: "none",
                        width: 16,
                        height: 16,
                        margin: 2,
                    },
                }),
            },
        },
        MuiPopover: {
            styleOverrides: {
                root: {
                    "& .MuiBackdrop-root": {
                        position: "fixed",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        right: "0",
                        bottom: "0",
                        top: "0",
                        left: "0",
                        zIndex: "-1",
                        backdropFilter: "blur(4px)",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                    },
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                root: {
                    "& .MuiModal-backdrop": {
                        // position: "fixed",
                        position: "absolute",
                        display: "flex",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        WebkitBoxPack: "center",
                        justifyContent: "center",
                        inset: "0px",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        WebkitTapHighlightColor: "transparent",
                        zIndex: "-1",
                        backdropFilter: "blur(4px)",
                    },
                    "& .MuiDialog-paper": {
                        backgroundColor: "#101010",
                        border: `1px solid #333638`,
                        backgroundImage: "none",
                    },
                    "& .MuiDialogContent-root": {
                        borderTop: "none",
                        borderBottom: "none",
                    },
                    "& .MuiButtonBase-root": {
                        color: "#f3f5f7",
                    },
                },
            },
        },
        MuiCard: {
            defaultProps: {
                elevation: 0,
            },
        },
        MuiTabs: {
            styleOverrides: {
                root: {
                    "& .MuiButtonBase-root": {
                        borderBottom: "1px solid #f3f5f726",
                    },
                    "& .MuiTabs-indicator": {
                        height: 1,
                    },
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: ({ theme, ownerState }) => ({
                    ...(ownerState.variant === "outlined" && {
                        color: "white",
                        border: `1px solid ${theme.palette.divider}`,
                        boxShadow: "none",
                    }),
                    ...(ownerState.variant === "contained" && {
                        color: "black",
                        ":disabled": {
                            cursor: "not-allowed",
                            color: "black",
                            opacity: ".3",
                            backgroundColor: "#ffffff",
                        },
                        ":hover": {
                            cursor: "pointer",
                            backgroundColor: "#999999",
                        },
                    }),
                }),
            },
            defaultProps: {
                disableElevation: true,
            },
        },
    },
    shape: {
        borderRadius: 8,
    },
    palette: {
        mode: "dark",
        primary: {
            header: "#101010d9",
            main: "#ffffff",
            dark: "#353535",
        },
        secondary: {
            main: "#ffffff",
            light: "#0a0a0a",
            dark: "#1e1e1e",
        },
        background: {
            paper: "#181818",
            default: "#101010",
        },
        text: {
            link: "#0095F6",
            primary: "#f3f5f7",
            secondary: "#777777",
        },
        divider: "#f3f5f726",
        menuoutline: "#333638",
    },
});
const ThemeProvider = (props) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], { theme: THIS_IS_THE_THEME_OBJECT_OF_THIS_F_APP, children: props.children }));


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/esm/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Divider/Divider.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _Styles_light_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Styles/light_theme */ "./src/styles/light_theme.tsx");
/* harmony import */ var material_ui_confirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! material-ui-confirm */ "./node_modules/material-ui-confirm/dist/material-ui-confirm.esm.js");
/* harmony import */ var _Hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @Hooks/useTheme */ "./src/hooks/useTheme.tsx");
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var react_render_tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-render-tools */ "./node_modules/react-render-tools/dist/index.js");
/* harmony import */ var _Activitys_MainActivity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @Activitys/MainActivity */ "./src/activitys/MainActivity.tsx");
/* harmony import */ var _Hooks_useRepos__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @Hooks/useRepos */ "./src/hooks/useRepos.tsx");
/* harmony import */ var _Hooks_useSettings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @Hooks/useSettings */ "./src/hooks/useSettings.tsx");
/* harmony import */ var _Hooks_useModFS__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @Hooks/useModFS */ "./src/hooks/useModFS.tsx");
/* harmony import */ var _custom_elements_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./custom-elements/app */ "./src/custom-elements/app.ts");
/* harmony import */ var _custom_elements_anchor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./custom-elements/anchor */ "./src/custom-elements/anchor.ts");
/* harmony import */ var _Styles_onsenui_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @Styles/onsenui.scss */ "./src/styles/onsenui.scss");
/* harmony import */ var _Styles_default_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @Styles/default.scss */ "./src/styles/default.scss");
/* harmony import */ var _locales_declaration__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./locales/declaration */ "./src/locales/declaration.ts");
/* harmony import */ var _Components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @Components/ErrorBoundary */ "./src/components/ErrorBoundary.tsx");
/* harmony import */ var _Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @Components/onsenui/Page */ "./src/components/onsenui/Page.tsx");
/* harmony import */ var _Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @Components/onsenui/Toolbar */ "./src/components/onsenui/Toolbar.tsx");
/* harmony import */ var _Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @Components/dapi/Pre */ "./src/components/dapi/Pre.tsx");
/* harmony import */ var _Components_dapi_Code__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @Components/dapi/Code */ "./src/components/dapi/Code.tsx");
/* harmony import */ var _Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @Components/dapi/Anchor */ "./src/components/dapi/Anchor.tsx");
























onsenui__WEBPACK_IMPORTED_MODULE_2__["default"].platform.select("android");
/**
 * This component is non translatable
 * ThemeProvider won't get catched
 */
const Fallback = react__WEBPACK_IMPORTED_MODULE_1___default().memo((props) => {
    const { theme } = (0,_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.useTheme)();
    const style = {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        borderRadius: theme.shape.borderRadius / theme.shape.borderRadius,
        lineHeight: 1.45,
        overflow: "auto",
        padding: 2,
    };
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_18__.Page, { renderToolbar: () => {
            return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_19__.Toolbar, { modifier: "noshadow", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_onsenui_Toolbar__WEBPACK_IMPORTED_MODULE_19__.Toolbar.Center, { children: "Global App Error" }) }));
        }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_onsenui_Page__WEBPACK_IMPORTED_MODULE_18__.Page.RelativeContent, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_20__.Pre, { sx: style, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Components_dapi_Code__WEBPACK_IMPORTED_MODULE_21__.Code, { children: [props.error.message, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__["default"], { sx: { mt: 1.2, mb: 1.2 } }), "If this problem persists, please reach out", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br", {}), "to our", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_22__.Anchor, { href: "https://github.com/DerGoogler/MMRL/issues", noIcon: true, children: "GitHub issues" }), " ", "or visit our", " ", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Anchor__WEBPACK_IMPORTED_MODULE_22__.Anchor, { href: "https://github.com/DerGoogler/MMRL/blob/master/docs/faq.md", noIcon: true, children: "FAQ page" }), "."] }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__["default"], { fullWidth: true, variant: "contained", disableElevation: true, onClick: props.resetErrorBoundary, children: "Try again" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Pre__WEBPACK_IMPORTED_MODULE_20__.Pre, { lang: "log", sx: style, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_dapi_Code__WEBPACK_IMPORTED_MODULE_21__.Code, { children: props.errorInfo.componentStack }) })] }) }));
});
onsenui__WEBPACK_IMPORTED_MODULE_2__["default"].ready(() => {
    customElements.define("mmrl-app", _custom_elements_app__WEBPACK_IMPORTED_MODULE_12__.MMRLApp);
    customElements.define("mmrl-anchor", _custom_elements_anchor__WEBPACK_IMPORTED_MODULE_13__.MMRLAnchor);
    (0,react_render_tools__WEBPACK_IMPORTED_MODULE_7__.render)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_25__["default"], {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Styles_light_theme__WEBPACK_IMPORTED_MODULE_3__.LightTheme, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Components_ErrorBoundary__WEBPACK_IMPORTED_MODULE_17__.ErrorBoundary, { fallback: (error, errorInfo, resetErrorBoundary) => {
                        return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Fallback, { error: error, errorInfo: errorInfo, resetErrorBoundary: resetErrorBoundary });
                    }, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Hooks_useModFS__WEBPACK_IMPORTED_MODULE_11__.ModFSProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Hooks_useSettings__WEBPACK_IMPORTED_MODULE_10__.SettingsProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_6__.StringsProvider, { data: _locales_declaration__WEBPACK_IMPORTED_MODULE_16__.strs, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_render_tools__WEBPACK_IMPORTED_MODULE_7__.Preventer, { prevent: "contextmenu", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Hooks_useRepos__WEBPACK_IMPORTED_MODULE_9__.RepoProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(material_ui_confirm__WEBPACK_IMPORTED_MODULE_4__.ConfirmProvider, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Activitys_MainActivity__WEBPACK_IMPORTED_MODULE_8__.MainActivity, {}) }) }) }) }) }) }) })] }) }), "mmrl-app");
});


/***/ }),

/***/ "./src/locales/antifeatures/en.ts":
/*!****************************************!*\
  !*** ./src/locales/antifeatures/en.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   en_antifeatures: () => (/* binding */ en_antifeatures)
/* harmony export */ });
const en_antifeatures = [
    {
        id: "Ads",
        name: "Advertising",
        desc: "The module contains advertisements.",
    },
    {
        id: "KnownVuln",
        name: "Known Vulnerability",
        desc: "This module contains a known security vulnerability",
    },
    {
        id: "NSFW",
        name: "NSFW",
        desc: "This module contains content that should not be publicized or visible everywhere",
    },
    {
        id: "NoSourceSince",
        name: "No Source Since",
        desc: "The source code is no longer available, no updates possible.",
    },
    {
        id: "NonFreeAdd",
        name: "Non-Free Addons",
        desc: "This module promotes non-free add-ons",
    },
    {
        id: "NonFreeAssets",
        name: "Non-Free Assets",
        desc: "This module contains non-free assets",
    },
    {
        id: "NonFreeDep",
        name: "Non-Free Dependencies",
        desc: "This module depends on other non-free modules",
    },
    {
        id: "NonFreeNet",
        name: "Non-Free Network Services",
        desc: "This module promotes or depends entirely on a non-changeable or non-free network service",
    },
    {
        id: "Tracking",
        name: "Tracking",
        desc: "This module tracks and reports your activity",
    },
    {
        id: "UpstreamNonFree",
        name: "Upstream Non-Free",
        desc: "The upstream source code is not entirely Free",
    },
    {
        id: "Obfuscation",
        name: "Obfuscation",
        desc: "The module source code is may obfuscated, making it difficult to understand, audit, or modify.",
    },
    {
        id: "UnaskedRemoval",
        name: "Unasked Removal",
        desc: "The module removes apps, files, or other modules without user consent.",
    },
];


/***/ }),

/***/ "./src/locales/az-AZ.ts":
/*!******************************!*\
  !*** ./src/locales/az-AZ.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   az_AZ: () => (/* binding */ az_AZ)
/* harmony export */ });
/**
 * Credits due file rename: GitHub @RashadGasimli
 * First PR: https://github.com/DerGoogler/MMRL/pull/199
 */
const az_AZ = {
    continue: "Davam et",
    caution: "Diqqət",
    latest: "Ən sonuncu",
    security: "Təhlükəsizlik",
    changelog: "Dəyişiklik jurnalı",
    new: "Yeni",
    search: "Axtarış",
    updates: "Güncəlləmələr",
    versions: "Versiyalar",
    licenses: "Lisenziyalar",
    license: "Lisenziya",
    search_modules: "Axtarış modulları",
    settings: "Parametrlər",
    repository: "Depo",
    repositories: "Depolar",
    appearance: "Xarici görünüş",
    accent_color: "Vurğu rəngi",
    language: "Dil",
    dark_theme: "Qaranlıq tema",
    bottom_navigation_text: "Alt naviqasiya",
    bottom_navigation_subtext: "Tab vərəqləri ekranın aşağısına köçürür.",
    not_supported_in_web_version: "Bu veb versiyasında dəstəklənmit.",
    source_code: "Mənbə kodu",
    acknowledgements: "Təsdiqlər",
    issues: "Xətalar",
    download: "Yüklə",
    install: "Quraşdır",
    update: "Güncəllə",
    explore: "Kəşf et",
    installed: "Quraşdırılıb",
    remove: "Sil",
    restore: "Bərpa edin",
    module_enabled_LOG: "{name} aktivləşdirilib",
    module_disabled_LOG: "{name} deaktivləşdirilib",
    add: "Əlavə et",
    cancel: "Ləğv et",
    confirm_repo_delete: "{name} anbarı silmək istədiyinizdən əminsinizmi?",
    submit_module: "Bir modul göndərin",
    donate: "İanə verin",
    support: "Dəstəkləyin",
    website: "Vebsayt",
    no_root: "Kök girişi yoxdur",
    failed: "Uğursuz oldu",
    no_root_message: "Zəhmət olmasa ən azı bir kök (root) meneceri istifadə etdiyinzdən əmin olun, əks halda MMRL tətbiqindən istifadə edə bilməzsiniz.",
    open_magisk: "Magisk-i açın",
    development: "İnkişaf etdirin",
    enabled: "Aktivləşdirildi",
    comments: "Şərhlər",
    configureable: "konfiqurasiya edilə bilər",
    change_boot: "Açılışı dəyişir",
    need_ramdisk: "Ramdisk lazımdır",
    add_repository: "Anbar əlavə edin",
    add_repository_description: "Sizin yaxud başqa bir yerdən anbar əlavə edin.",
    explore_repositories: "Anbarları kəşf edin",
    overview: "Ümumi baxış",
    about_this_module: "Bu modul haqqında",
    about: "Haqqında",
    updated_on: "Güncəlləndi",
    requirements: "Tələblər",
    access: "Keçid",
    minimum: "Minimum",
    recommended: "Tövsiyə edilir",
    source: "Mənbə",
    require_sdk: "Modul {sdk} tələb edir",
    unsupported: "Dəstəklənmir",
    images: "Şəkillər",
    unset: "Təyin etməyin",
    yes: "Bəli",
    no: "Xeyr",
    operating_sys: "Əməliyyat sistemi",
    verified_module: "Təsdiqlənmiş modul",
    verified_module_desc: "Bu modul yoxlamadan keçmiş və nüfuzlu tərtibatçı tərəfindən hazırlanmış təhlükəsiz modul kimi təsdiq edilmişdir.",
    update_json: "Öz update.json istifadə edir",
    update_json_desc: "Bu modul yeniləmə və quraşdırma məqsədilə öz update.json faylını istifadə edir.",
    shading: "Kölgə salma",
    shading_title: "Xüsusi kölgə salma tətbiq edin",
    shading_desc: "Diqqətli istifadə edin, əgər çox qaranlıq olarsa, İstifadəçi İnterfeysini görə bilməyəcəksiniz.",
    module: "Modul",
    swipeable_tabs: "Sürüşdürülə bilən tab vərəqlər",
    swipeable_tabs_subtitle: "Bütün tab vərəqləri sürüşdürülə bilən edin. Bu, istifadəçi təcrübəsini pozur.",
    low_quality_module: "Aşağı keyfiyyətli modul",
    low_quality_modules: "Aşağı keyfiyyətli modullar",
    low_quality_modules_subtitle: "Əgər modulun keyfiyyəti aşağıdırsa, modulun altında xəbərdarlıq göstərin",
    low_quality_module_warn: "Bu Magisk modulunda onun funksionallığına və mənşəyinə təsir edə biləcək id, versiya, versiya kodu, müəllif və s. kimi mühüm xüsusiyyətlər yoxdur.",
    invaild_modules: "Etibarsız modullar",
    invaild_modules_subtitle: "Etibarsız modulları göstər",
    // no translate
    modconf: "ModConf",
    modconf_playground: "ModConf önplanı",
    // no translate
    modfs: "ModFS",
    enable_install: "Quraşdırmanı aktivləşdirin",
    enable_install_subtitle: "1.8.5 versiyadan etibarən MMRL Quraşdırma Alətləri tələb olunur",
    scroll_to_bottom: "Aşağı sürüşdürün",
    scroll_to_bottom_subtitle: "Terminalda avtomatik olaraq aşağıya sürüşdürün",
    scroll_behavior: "Sürüşdürmə davranışı",
    terminal: "Terminal",
    eruda_console: "Eruda konsol",
    eruda_console_subtitle: "İnkişaf və xətaların ovlanması üçün faydalıdır",
    share_device_infos: "Cihaz məlumatlarını paylaşın",
    share_device_infos_subtilte: "Cihaz xüsusiyyətləri, konfiqurasiya edilmiş ModConf, proqram məlumatları və quraşdırılmış modullar",
    storage: "Yaddaş",
    clear_repos: "Anbarları təmizləyin",
    patch_settings: "Yamaq paramterləri",
    patch_settings_subtitle: "Çatışmayan parametr açarlarını əlavə edin",
    sticky_search_bar: "Yapışqan axtarış çubuğunu deaktiv edin",
    dm_update_json_fetch_warn: "{id} boş „updateJson“ xüsusiyyətinə malikdir və ya keçid etibarlı deyil",
    // Anti-Features
    antifeature: "Anti-Xüsusiyyət",
    antifeatures: "Anti-Xüsusiyyətlər",
    // Anchor link confirm
    anchor_confirm_title: "MMRL-dən çıxılır",
    anchor_confirm_desc: "Bu keçid sizi aşağıdakı vebsayta aparır {codeblock}",
    link_protection_title: "Keçid qorunması",
    link_protection_desc: "Əlavə təsdiq dialoqu ilə təsadüfən kliklənən keçidin qarşısını alın. Bu parametr ModConf-a da təsir edir.",
    // modconf
    compile_error: "Tərtib xətası!",
    unverified_host: "Doğrulanmamış host!",
    unverified_host_text: "MMRL-ə doğrulanmış bir host olmayan {url} ünvanından daxil olursunuz. MMRL-ni üçüncü tərəf mənbələrindən deyil, yalnız orijinal mənbədən istifadə edin.",
    unverified_host_text_help: "Hər hansı bir problem gördünüz və ya əldə edilmiş hostun istifadə üçün təhlükəsiz olduğunu bilirsiniz? Sonra bunu {issues} altında bildirin",
    // terminal activity
    reboot_device: "Cihaz yenidən başladılsın?",
    reboot_device_desc: "Cihazınızı yenidən başlatmağa əminsiniz?",
    privacy_privacy: "Məxfilik Məxfilik",
    hoc_with_require_new_version: "Bu konfiqurasiya {versionCode} üzərində MMRL tələb edir (versionCode){br}Ən sonuncu {url} yoxlayın",
    print_errors: "Xətaları çap edin",
    print_errors_desc: "Terminal və MMRL Quraşdırma Alətləri xətasını konsola çap edir",
    blacklisted_modules: "Qara siyahıya alınmış modullar",
};


/***/ }),

/***/ "./src/locales/de.ts":
/*!***************************!*\
  !*** ./src/locales/de.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   de: () => (/* binding */ de)
/* harmony export */ });
const de = {
    changelog: "Changelog",
    new: "Neu",
    search: "Suche",
    updates: "Updates",
    versions: "Versionen",
    licenses: "Lizenzen",
    license: "Lizenz",
    search_modules: "Module durchsuchen",
    settings: "Einstellungen",
    repository: "Repository",
    repositories: "Repositorys",
    accent_color: "Akzentfarbe",
    appearance: "Aussehen",
    language: "Sprache",
    dark_theme: "Dunkles Thema",
    bottom_navigation_text: "Navigation unten",
    bottom_navigation_subtext: "Bewegt Tabs an den unteren Bildschirmrand.",
    not_supported_in_web_version: "In der Web-Version nicht unterstuetzt",
    source_code: "Quellcode",
    acknowledgements: "Danksagungen/Lizenzen",
    issues: "Issues",
    module_verified: "Dieses Modul ist verifiziert und vertrauenswürdig",
    download: "Herunterladen",
    install: "Installieren",
    explore: "Erkunden",
    installed: "Installiert",
    remove: "Entfernen",
    restore: "Wiederherstellen",
    module_enabled_LOG: "{name} wurde aktiviert",
    module_disabled_LOG: "{name} wurde deaktiviert",
    add: "Hinzufügen",
    cancel: "Abbrechen",
    confirm_repo_delete: "Möchten Sie das {name} Repository wirklich entfernen?",
    submit_module: "Ein Module einreichen",
    donate: "Spenden",
    support: "Support",
    website: "Webseite",
    no_root: "Kein Root",
    failed: "Fehlgeschlagen",
    no_root_message: "Bitte stellen Sie sicher, dass Sie über mindestens einen Root-Manager verfügen, andernfalls können Sie MMRL nicht verwenden.",
    open_magisk: "Magisk öffnen",
    development: "Entwicklung",
    enabled: "Aktiviert",
    comments: "Kommentare",
    verified: "Verifiziert",
    configureable: "Anpassbar",
    change_boot: "Ändert Boot",
    need_ramdisk: "Braucht Ramdisk",
    add_repository: "Repository hinzufügen",
    add_repository_description: "Fügen Sie Ihr Repository oder ein Repository von einem anderen hinzu.",
    explore_repositories: "Entdecke Repositorys",
    overview: "Übersicht",
    about_this_module: "Über dieses Modul",
    about: "Über",
    updated_on: "Aktualisiert am",
    requirements: "Anforderungen",
    access: "Zugriffe",
    minimum: "Minimum",
    recommended: "Empfohlen",
    source: "Quelle",
    require_sdk: "Modul erfordert {sdk}",
    unsupported: "Nicht unterstützt",
    images: "Bilder",
    unset: "Unbestimmt",
    yes: "Ja",
    no: "Nein",
    operating_sys: "Betriebssystem",
    verified_module: "Verifiziertes Modul",
    verified_module_desc: "Dieses Modul wurde einer Überprüfung unterzogen und wurde als vertrauenswürdiges Modul bestätigt, das von einem seriösen Entwickler entwickelt wurde.",
    update_json: "Verwendet eigene Update.json",
    update_json_desc: "Dieses Modul verwendet seine eigene update.json für Aktualisierungs- und Installationszwecke.",
    shading: "Schattierung",
    shading_title: "Benutzerdefinierte Schattierung anwenden",
    shading_desc: "Seien Sie vorsichtig, wenn es zu dunkel ist, können Sie die Benutzeroberfläche möglicherweise nicht mehr sehen.",
    module: "Modul",
    low_quality_module: "Modul von geringer Qualität",
    low_quality_modules: "Module von geringer Qualität",
    low_quality_modules_subtitle: "Zeigt eine Warnung unterhalb des Moduls an, wenn es eine niedrige Qualität hat",
    low_quality_module_warn: "Diesem Magisk-Modul fehlen wichtige Eigenschaften wie ID, Version, Versionscode, Autor usw., was sich auf seine Funktionalität und Herkunft auswirken kann.",
    invaild_modules: "Ungültige Module",
    invaild_modules_subtitle: "Ungültige Module anzeigen",
    enable_install: "Installation aktivieren",
    scroll_to_bottom: "Nach unten scrollen",
    scroll_to_bottom_subtitle: "Automatisches Scrollen nach unten im Terminal",
    scroll_behavior: "Scrollverhalten",
    terminal: "Terminal",
    eruda_console: "Eruda Konsole",
    eruda_console_subtitle: "Nützlich bei der Entwicklung und Fehlersuche",
    share_device_infos: "Informationen über das Gerät teilen",
    storage: "Speicher",
    clear_repos: "Repositorys löschen",
    patch_settings: "Einstellungen patchen",
    patch_settings_subtitle: "Fehlende Einstellungsschlüssel hinzufügen",
    dm_update_json_fetch_warn: "{id} hat eine leere Eigenschaft „updateJson“ oder der Link ist ungültig",
};


/***/ }),

/***/ "./src/locales/declaration.ts":
/*!************************************!*\
  !*** ./src/locales/declaration.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   strs: () => (/* binding */ strs),
/* harmony export */   useLanguageMap: () => (/* binding */ useLanguageMap)
/* harmony export */ });
/* harmony import */ var _Hooks_useStrings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Hooks/useStrings */ "./src/hooks/useStrings.tsx");
/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./de */ "./src/locales/de.ts");
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en */ "./src/locales/en.ts");
/* harmony import */ var _zh__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zh */ "./src/locales/zh.ts");
/* harmony import */ var _pt_BR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pt-BR */ "./src/locales/pt-BR.ts");
/* harmony import */ var _az_AZ__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./az-AZ */ "./src/locales/az-AZ.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);







const strs = {
    en: _en__WEBPACK_IMPORTED_MODULE_2__.en,
    de: _de__WEBPACK_IMPORTED_MODULE_1__.de,
    zh: _zh__WEBPACK_IMPORTED_MODULE_3__.zh,
    "pt-BR": _pt_BR__WEBPACK_IMPORTED_MODULE_4__.pt_BR,
    "az-AZ": _az_AZ__WEBPACK_IMPORTED_MODULE_5__.az_AZ,
};
const useLanguageMap = () => {
    const { currentLanguage } = (0,_Hooks_useStrings__WEBPACK_IMPORTED_MODULE_0__.useStrings)();
    const regionNames = react__WEBPACK_IMPORTED_MODULE_6___default().useMemo(() => new Intl.DisplayNames([currentLanguage], {
        type: "language",
    }), [currentLanguage]);
    return Object.keys(strs).map((key) => ({
        name: regionNames.of(key) || "Unknown",
        value: key,
    }));
};


/***/ }),

/***/ "./src/locales/en.ts":
/*!***************************!*\
  !*** ./src/locales/en.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   en: () => (/* binding */ en)
/* harmony export */ });
const en = {
    continue: "Continue",
    caution: "Caution",
    latest: "Latest",
    security: "Security",
    changelog: "Changelog",
    new: "New",
    search: "Search",
    updates: "Updates",
    versions: "Versions",
    licenses: "Licenses",
    license: "License",
    search_modules: "Search modules",
    settings: "Settings",
    repository: "Repository",
    repositories: "Repositories",
    appearance: "Appearance",
    accent_color: "Accent color",
    language: "Language",
    dark_theme: "Dark theme",
    bottom_navigation_text: "Bottom navigation",
    bottom_navigation_subtext: "Moves tabs to the bottom of screen.",
    not_supported_in_web_version: "Not supported in web version",
    source_code: "Source code",
    acknowledgements: "Acknowledgements",
    issues: "Issues",
    download: "Download",
    install: "Install",
    update: "Update",
    explore: "Explore",
    installed: "Installed",
    remove: "Remove",
    restore: "Restore",
    module_enabled_LOG: "{name} has been enabled",
    module_disabled_LOG: "{name} has been disabled",
    add: "Add",
    cancel: "Cancel",
    confirm_repo_delete: "Are you sure to remove {name} repository?",
    submit_module: "Submit a module",
    donate: "Donate",
    support: "Support",
    website: "Website",
    no_root: "No Root",
    failed: "Failed",
    no_root_message: "Please make sure that you have at least one root manager, otherwise you can't use MMRL.",
    open_magisk: "Open Magisk",
    development: "Development",
    enabled: "Enabled",
    comments: "Comments",
    configureable: "Configureable",
    change_boot: "Changes boot",
    need_ramdisk: "Needs Ramdisk",
    add_repository: "Add Repository",
    add_repository_description: "Add your repository or an repository from some else.",
    explore_repositories: "Explore Repositories",
    overview: "Overview",
    about_this_module: "About this module",
    about: "About",
    updated_on: "Updated on",
    requirements: "Requirements",
    access: "Access",
    minimum: "Minimum",
    recommended: "Recommended",
    source: "Source",
    require_sdk: "Module requires {sdk}",
    unsupported: "Unsupported",
    images: "Images",
    unset: "Unset",
    yes: "Yes",
    no: "No",
    operating_sys: "Operating System",
    verified_module: "Verified module",
    verified_module_desc: "This module has undergone verification and has been confirmed as a trusted module developed by a reputable developer.",
    update_json: "Uses own update.json",
    update_json_desc: "This module utilizes its own update.json for updating and installation purposes.",
    shading: "Shading",
    shading_title: "Apply custom shading",
    shading_desc: "Use with care, if to dark you may not able to see the UI anymore.",
    module: "Module",
    swipeable_tabs: "Swipeable tabs",
    swipeable_tabs_subtitle: "Make all tabs swipeable. This make break user experience",
    low_quality_module: "Low quality module",
    low_quality_modules: "Low quality modules",
    low_quality_modules_subtitle: "Shows a alert below the module if it has a low quality",
    low_quality_module_warn: "This Magisk module is missing crucial properties, such as id, version, versionCode, author, etc., which may affect its functionality and origin.",
    invaild_modules: "Invaild modules",
    invaild_modules_subtitle: "Show invaild modules",
    // no translate
    modconf: "ModConf",
    modconf_playground: "ModConf Playground",
    // no translate
    modfs: "ModFS",
    enable_install: "Enable install",
    enable_install_subtitle: "Since 1.8.5 the MMRL Install Tools are required",
    scroll_to_bottom: "Scroll to bottom",
    scroll_to_bottom_subtitle: "Automatically scroll to bottom within the terminal",
    scroll_behavior: "Scroll behavior",
    terminal: "Terminal",
    eruda_console: "Eruda console",
    eruda_console_subtitle: "Useful for development and bug hunting",
    share_device_infos: "Share device information's",
    share_device_infos_subtilte: "Device specs, configured ModConf, app infos and installed modules",
    storage: "Storage",
    clear_repos: "Clear repositories",
    patch_settings: "Patch settings",
    patch_settings_subtitle: "Add missing settings keys",
    sticky_search_bar: "Disable sticky search bar",
    dm_update_json_fetch_warn: "{id} has empty „updateJson“ property or the link isn't valid",
    // Anti-Features
    antifeature: "Anti-Feature",
    antifeatures: "Anti-Features",
    // Anchor link confirm
    anchor_confirm_title: "Leaving MMRL",
    anchor_confirm_desc: "This link is taking you the following website {codeblock}",
    link_protection_title: "Link protection",
    link_protection_desc: "Prevent link that are accidentally clicked with a extra confirm dialog. This setting also affects ModConf.",
    // modconf
    compile_error: "Compile error!",
    unverified_host: "Unverified host!",
    unverified_host_text: "You're accessing MMRL from {url} which isn't a verified host. Only use MMRL from it's origial source and not from thrid-party sources.",
    unverified_host_text_help: "Noticed any issues or you know that the accessed host safe for use is? Then report it under our {issues}",
    // terminal activity
    reboot_device: "Reboot device?",
    reboot_device_desc: "Are you sure to reboot your device?",
    word_wrap_title: "Word wrap",
    numberic_lines_title: "Numberic lines",
    numberic_lines_desc: "Adds a number to every line in the installer",
    privacy_privacy: "Privacy Policy",
    hoc_with_require_new_version: "This config requires MMRL above {versionCode} (versionCode){br}Check the latest {url}",
    print_errors: "Print errors",
    print_errors_desc: "Prints terminal and MMRL Install Tools error to the console",
    blacklisted_modules: "Blacklisted modules",
    install_module: "Install {name}?",
    install_module_dialog_desc: "Are you sure that you what to install {name}?",
    exit_app: "Exit app?",
    exit_app_desc: "Are you sure that you want to leave the app?",
    module_require_android_ver: "This module requires {andro_ver}. It may doesn't work for your device.",
    we_hit_a_brick: "We hit a brick!",
    open_settings: "Open settings",
    open_logcat: "Open Logcat",
    try_again: "Try again"
};


/***/ }),

/***/ "./src/locales/pt-BR.ts":
/*!******************************!*\
  !*** ./src/locales/pt-BR.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pt_BR: () => (/* binding */ pt_BR)
/* harmony export */ });
/**
 * Credits due file rename: GitHub @Vaz15k
 * First PR: https://github.com/DerGoogler/MMRL/pull/176
 */
const pt_BR = {
    continue: "Continuar",
    caution: "Cuidado",
    latest: "Mais recente",
    security: "Segurança",
    changelog: "Changelog",
    new: "Novo",
    search: "Buscar",
    updates: "Atualizações",
    versions: "Versões",
    licenses: "Licença",
    license: "Licenças",
    search_modules: "Pesquisar Módulos",
    settings: "Configurações",
    repository: "Repositório",
    repositories: "Repositorios",
    appearance: "Aparência",
    accent_color: "Cor de Destaque",
    language: "Idioma",
    dark_theme: "Tema Escuro",
    bottom_navigation_text: "Botão de Navegação",
    bottom_navigation_subtext: "Move as guias para a parte inferior da tela.",
    not_supported_in_web_version: "Não suportado na versão WEB",
    source_code: "Código Fonte",
    acknowledgements: "Reconhecimentos",
    issues: "Problemas",
    download: "Download",
    install: "Instalar",
    update: "Atualizar",
    explore: "Explorar",
    installed: "Instalado",
    remove: "Remover",
    restore: "Restaurar",
    module_enabled_LOG: "{name} está ativo",
    module_disabled_LOG: "{name} esta desativado",
    add: "Adicionar",
    cancel: "Cancelar",
    confirm_repo_delete: "Tem certeza de que deseja remover o repositório {name}?",
    submit_module: "Submeter Módulo",
    donate: "Doação",
    support: "Suporte",
    website: "Website",
    no_root: "Não Root",
    failed: "Falhou",
    no_root_message: "Certifique-se de ter pelo menos um gerenciador root, caso contrário, você não poderá usar o MMRL",
    open_magisk: "Abrir Magisk",
    development: "Desenvolvimento",
    enabled: "Ativado",
    comments: "Comentários",
    configureable: "Configurável",
    change_boot: "Altera a inicialização",
    need_ramdisk: "Necessita de Ramdisk",
    add_repository: "Adicionar Repositório",
    add_repository_description: "Adicione seu repositório ou um repositório de outro.",
    explore_repositories: "Explorar Repositórios",
    overview: "Visão Geral",
    about_this_module: "Sobre este módulo",
    about: "Sobre",
    updated_on: "Atualizado em",
    requirements: "Requisitos",
    access: "Acesso",
    minimum: "Mínimo",
    recommended: "Recomendado",
    source: "Fonte",
    require_sdk: "Módulo requer {sdk}",
    unsupported: "Não Suportado",
    images: "Imagen",
    unset: "Desativar",
    yes: "Sim",
    no: "Não",
    operating_sys: "Sistema Operacional",
    verified_module: "Módulo Verificado",
    verified_module_desc: "Este módulo passou por verificação e foi confirmado como um módulo confiável desenvolvido por um desenvolvedor confiável.",
    update_json: "Usa o próprio update.json",
    update_json_desc: "Este módulo utiliza seu próprio update.json para fins de atualização e instalação.",
    shading: "Sombreamento",
    shading_title: "Aplicar sombreamento personalizado",
    shading_desc: "Use com cuidado, se estiver muito escuro, você não conseguirá mais ver a IU.",
    module: "Módulo",
    swipeable_tabs: "Guias deslizantes",
    swipeable_tabs_subtitle: "Torne todas as guias deslizáveis. Isso quebra a experiência do usuário",
    low_quality_module: "Módulo de baixa qualidade",
    low_quality_modules: "Módulos de baixa qualidade",
    low_quality_modules_subtitle: "Mostra um alerta abaixo do módulo se ele estiver com baixa qualidade",
    low_quality_module_warn: "Este módulo Magisk não possui propriedades cruciais, como id, versão, versionCode, autor, etc., o que pode afetar sua funcionalidade e origem.",
    invaild_modules: "Módulos inválidos",
    invaild_modules_subtitle: "Mostrar módulos inválidos",
    // no translate
    modconf: "ModConf",
    modconf_playground: "ModConf Playground",
    // no translate
    modfs: "ModFS",
    enable_install: "Habilitar instalação",
    enable_install_subtitle: "Desde 1.8.5 'MMRL Install Tools' são necessárias",
    scroll_to_bottom: "Role para baixo",
    scroll_to_bottom_subtitle: "Rolar automaticamente para baixo no terminal",
    scroll_behavior: "Comportamento de rolagem",
    terminal: "Terminal",
    eruda_console: "Eruda console",
    eruda_console_subtitle: "Útil para desenvolvimento e caça a bugs",
    share_device_infos: "Compartilhe informações do dispositivo",
    share_device_infos_subtilte: "Especificações do dispositivo, ModConf configurado, informações do aplicativo e módulos instalados",
    storage: "Armazenamento",
    clear_repos: "Limpar repositórios",
    patch_settings: "Configurações de patches",
    patch_settings_subtitle: "Adicionar chaves de configurações ausentes",
    sticky_search_bar: "Desativar barra de pesquisa fixa",
    dm_update_json_fetch_warn: "{id} tem a propriedade “updateJson” vazia ou link não válido",
    // Anti-Features
    antifeature: "Anti-Feature",
    antifeatures: "Anti-Features",
    // Anchor link confirm
    anchor_confirm_title: "Saindo MMRL",
    anchor_confirm_desc: "Este link leva você ao site {codeblock}",
    link_protection_title: "Proteção de Links",
    link_protection_desc: "Evite links clicados acidentalmente com uma caixa de diálogo de confirmação extra. Esta configuração também afeta o ModConf.",
    // modconf
    compile_error: "Erro de compilação!",
    unverified_host: "Host não verificado!",
    unverified_host_text: "Você está acessando o MMRL de {url}, que não é um host verificado. Use MMRL apenas de sua fonte original e não de fontes de terceiros.",
    unverified_host_text_help: "Notou algum problema ou sabe que o host acessado é seguro para uso? Em seguida, relate-o em nossos {issues}",
    // terminal activity
    reboot_device: "Reiniciar dispositivo?",
    reboot_device_desc: "Tem certeza de reiniciar seu dispositivo?",
    privacy_privacy: "Privacidade Privacidade",
    hoc_with_require_new_version: "Esta configuração requer MMRL acima de {versionCode} (versionCode){br}Verifique o {url} mais recente",
    print_errors: "Mostrar Erros",
    print_errors_desc: "Mostra os erros de terminal e MMRL Install Tools no console",
    blacklisted_modules: "Módulos na lista negra",
};


/***/ }),

/***/ "./src/locales/zh.ts":
/*!***************************!*\
  !*** ./src/locales/zh.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   zh: () => (/* binding */ zh)
/* harmony export */ });
const zh = {
    search_modules: "模块搜索",
    settings: "设置",
    repository: "仓库",
    repositories: "仓库",
    appearance: "外观",
    accent_color: "强调颜色",
    language: "语言",
    dark_theme: "暗黑主题",
    bottom_navigation_text: "底部导航",
    bottom_navigation_subtext: "将选项卡移动到屏幕底部。",
    not_supported_in_web_version: "Web 版本不支持",
    source_code: "源代码",
    acknowledgements: "鸣谢",
    issues: "问题",
    download: "下载",
    install: "安装",
    update: "更新",
    explore: "浏览",
    installed: "已安装",
    remove: "移除",
    restore: "恢复",
    module_enabled_LOG: "{name} 已启用",
    module_disabled_LOG: "{name} 已禁用",
    add: "添加",
    cancel: "取消",
    confirm_repo_delete: "确定要移除 {name} 仓库吗？",
    submit_module: "提交模块",
    donate: "捐赠",
    support: "支持",
    website: "网站",
    no_root: "无 Root 权限",
    failed: "失败",
    no_root_message: "请确保您至少有一个 root 管理器，否则无法使用 MMRL。",
    open_magisk: "打开 Magisk",
    development: "开发",
    enabled: "已启用",
    comments: "评论",
    configureable: "可配置",
    change_boot: "更改引导",
    need_ramdisk: "需要 Ramdisk",
    add_repository: "添加仓库",
    add_repository_description: "添加您自己的仓库或其他来源的仓库。",
    explore_repositories: "浏览仓库",
    overview: "概览",
    about_this_module: "关于此模块",
    about: "关于",
    updated_on: "更新于",
    requirements: "要求",
    access: "访问",
    minimum: "最低要求",
    recommended: "推荐",
    source: "来源",
    require_sdk: "模块要求 {sdk}",
    unsupported: "不支持",
    images: "图片",
    unset: "未设置",
    yes: "是",
    no: "否",
    operating_sys: "操作系统",
    verified_module: "已验证模块",
    verified_module_desc: "此模块经过验证，已确认为由值得信赖的开发人员开发的受信任模块。",
    update_json: "使用自带的 update.json",
    update_json_desc: "此模块使用自带的 update.json 进行更新和安装。",
    shading: "着色",
    shading_title: "应用自定义着色",
    shading_desc: "小心使用，如果太暗可能无法看到 UI。",
    module: "模块",
    low_quality_module: "低质量模块",
    low_quality_modules: "低质量模块",
    low_quality_modules_subtitle: "如果模块质量低，则显示警报",
    low_quality_module_warn: "此 Magisk 模块缺少关键属性，如 id、version、versionCode、author 等，可能会影响其功能和来源。",
    invaild_modules: "无效模块",
    invaild_modules_subtitle: "显示无效模块",
    enable_install: "启用安装",
    enable_install_subtitle: "从 1.8.5 版本开始，MMRL 安装工具是必需的",
    scroll_to_bottom: "滚动到底部",
    scroll_to_bottom_subtitle: "在终端中自动滚动到底部",
    scroll_behavior: "滚动行为",
    terminal: "终端",
    eruda_console: "Eruda 控制台",
    eruda_console_subtitle: "用于开发和查找错误",
    share_device_infos: "共享设备信息",
    share_device_infos_subtilte: "设备规格、配置的 ModConf、应用信息和已安装的模块",
    storage: "存储",
    clear_repos: "清除仓库",
    patch_settings: "修补设置",
    patch_settings_subtitle: "添加丢失的设置键",
    sticky_search_bar: "禁用粘性搜索栏",
};


/***/ }),

/***/ "./src/native/Build.ts":
/*!*****************************!*\
  !*** ./src/native/Build.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Build: () => (/* binding */ Build)
/* harmony export */ });
class Build {
    static VERSION_CODES = class {
        static BASE = 1;
        static BASE_1_1 = 2;
        static CUPCAKE = 3;
        static DONUT = 4;
        static ECLAIR = 5;
        static ECLAIR_0_1 = 6;
        static ECLAIR_MR1 = 7;
        static FROYO = 8;
        static GINGERBREAD = 9;
        static GINGERBREAD_MR1 = 10;
        static HONEYCOMB = 11;
        static HONEYCOMB_MR1 = 12;
        static HONEYCOMB_MR2 = 13;
        static ICE_CREAM_SANDWICH = 14;
        static ICE_CREAM_SANDWICH_MR1 = 15;
        static JELLY_BEAN = 16;
        static JELLY_BEAN_MR1 = 17;
        static JELLY_BEAN_MR2 = 18;
        static KITKAT = 19;
        static KITKAT_WATCH = 20;
        static L = 21;
        static LOLLIPOP = 21;
        static LOLLIPOP_MR1 = 22;
        static M = 23;
        static N = 24;
        static N_MR1 = 25;
        static O = 26;
        static O_MR1 = 27;
        static P = 28;
        static Q = 29;
        static R = 30;
        static S = 31;
        static S_V2 = 32;
        static TIRAMISU = 33;
    };
    static parseVersion(version) {
        switch (version) {
            case this.VERSION_CODES.BASE:
                return "Android 1.0";
            case this.VERSION_CODES.BASE_1_1:
                return "Android 1.1 (Petit Four)";
            case this.VERSION_CODES.CUPCAKE:
                return "Android 1.5 (Cupcake)";
            case this.VERSION_CODES.DONUT:
                return "Android 1.6 (Donut)";
            case this.VERSION_CODES.ECLAIR:
                return "Android 2.0 (Eclair)";
            case this.VERSION_CODES.ECLAIR_0_1:
                return "Android 2.0.1 (Eclair)";
            case this.VERSION_CODES.ECLAIR_MR1:
                return "Android 2.1 (Eclair)";
            case this.VERSION_CODES.FROYO:
                return "Android 2.2 (Froyo)";
            case this.VERSION_CODES.GINGERBREAD:
                return "Android 2.3.0 - 2.3.2 (Gingerbread)";
            case this.VERSION_CODES.GINGERBREAD_MR1:
                return "Android 2.3.3 - 2.3.7 (Gingerbread)";
            case this.VERSION_CODES.HONEYCOMB:
                return "Android 3.0 (Honeycomb)";
            case this.VERSION_CODES.HONEYCOMB_MR1:
                return "Android 3.1 (Honeycomb)";
            case this.VERSION_CODES.HONEYCOMB_MR2:
                return "Android 3.2 (Honeycomb)";
            case this.VERSION_CODES.ICE_CREAM_SANDWICH:
                return "Android 4.0.1 - 4.0.2 (Ice Cream Sandwich)";
            case this.VERSION_CODES.ICE_CREAM_SANDWICH_MR1:
                return "Android 4.0.3 - 4.0.4 (Ice Cream Sandwich)";
            case this.VERSION_CODES.JELLY_BEAN:
                return "Android 4.1 (Jelly Bean)";
            case this.VERSION_CODES.JELLY_BEAN_MR1:
                return "Android 4.2 (Jelly Bean)";
            case this.VERSION_CODES.JELLY_BEAN_MR2:
                return "Android 4.3 (Jelly Bean)";
            case this.VERSION_CODES.KITKAT:
                return "Android 4.4 (KikKat)";
            case this.VERSION_CODES.KITKAT_WATCH:
                return "Android 4.4 (KitKat)";
            case this.VERSION_CODES.LOLLIPOP:
                return "Android 5.0 (Lollipop)";
            case this.VERSION_CODES.LOLLIPOP_MR1:
                return "Android 5.1 (Lollipop)";
            case this.VERSION_CODES.M:
                return "Android 6.0 (Marshmallow)";
            case this.VERSION_CODES.N:
                return "Android 7.0 (Nougat)";
            case this.VERSION_CODES.N_MR1:
                return "Android 7.1 (Nougat)";
            case this.VERSION_CODES.O:
                return "Android 8.0 (Oreo)";
            case this.VERSION_CODES.O_MR1:
                return "Android 8.1 (Oreo)";
            case this.VERSION_CODES.P:
                return "Android 9.0 (Pie)";
            case this.VERSION_CODES.Q:
                return "Android 10 (Quince Tart)";
            case this.VERSION_CODES.R:
                return "Android 11 (Red Velvet Cake)";
            case this.VERSION_CODES.S:
                return "Android 12 (Snow Cone)";
            case this.VERSION_CODES.S_V2:
                return "Android 12L (Snow Cone)";
            case this.VERSION_CODES.TIRAMISU:
                return "Android 12 (Tiramisu)";
            default:
                return "Sdk: " + version;
        }
    }
}



/***/ }),

/***/ "./src/native/BuildConfig.ts":
/*!***********************************!*\
  !*** ./src/native/BuildConfig.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BuildConfig: () => (/* binding */ BuildConfig),
/* harmony export */   BuildConfigClass: () => (/* binding */ BuildConfigClass)
/* harmony export */ });
/* harmony import */ var _Package__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Package */ "./package.json");
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Native */ "./src/native/Native.ts");


/**
 * BuildConfigs for Android
 */
class BuildConfigClass extends _Native__WEBPACK_IMPORTED_MODULE_1__.Native {
    constructor() {
        super(window.__buildconfig__);
    }
    get BUILD_DATE() {
        if (this.isAndroid) {
            return this.interface.BUILD_DATE();
        }
        else {
            return 1723721046281;
        }
    }
    get VERSION_NAME() {
        if (this.isAndroid) {
            return this.interface.VERSION_NAME();
        }
        else {
            return _Package__WEBPACK_IMPORTED_MODULE_0__.config.version_name;
        }
    }
    get VERSION_CODE() {
        if (this.isAndroid) {
            return this.interface.VERSION_CODE();
        }
        else {
            return _Package__WEBPACK_IMPORTED_MODULE_0__.config.version_code;
        }
    }
    get APPLICATION_ID() {
        if (this.isAndroid) {
            return this.interface.APPLICATION_ID();
        }
        else {
            return _Package__WEBPACK_IMPORTED_MODULE_0__.name;
        }
    }
    get DEBUG() {
        if (this.isAndroid) {
            return this.interface.DEBUG;
        }
        else {
            return "development" === "development";
        }
    }
    get BUILD_TYPE() {
        if (this.isAndroid) {
            return this.interface.BUILD_TYPE;
        }
        else {
            return "development";
        }
    }
}
const BuildConfig = new BuildConfigClass();



/***/ }),

/***/ "./src/native/Chooser.ts":
/*!*******************************!*\
  !*** ./src/native/Chooser.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Chooser: () => (/* binding */ Chooser)
/* harmony export */ });
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native */ "./src/native/Native.ts");

class Chooser extends _Native__WEBPACK_IMPORTED_MODULE_0__.Native {
    type;
    _onChose;
    _onError = null;
    constructor(type) {
        super(window.__chooser__);
        if (typeof type !== "string")
            throw new TypeError("Chooser plugin only accepts 'string' as type");
        this.type = type;
    }
    set onChose(func) {
        this._onChose = func;
    }
    set onError(func) {
        this._onError = func;
    }
    static isSuccess(arg) {
        return arg !== "RESULT_CANCELED";
    }
    getFiles() {
        if (this.isAndroid) {
            if (typeof this._onChose !== "function")
                throw new TypeError("Chooser 'onChose' is not a function");
            this.interface.getFile(this.type, this._onChose, this._onError);
        }
    }
}



/***/ }),

/***/ "./src/native/IsolatedEval/IsoAudio.ts":
/*!*********************************************!*\
  !*** ./src/native/IsolatedEval/IsoAudio.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsoAudio: () => (/* binding */ IsoAudio)
/* harmony export */ });
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IsolatedEvalError */ "./src/native/IsolatedEval/IsolatedEvalError.ts");


class IsoAudio extends Audio {
    type;
    autoplay = false;
    controls = false;
    constructor(src, type = "audio/wav") {
        if (typeof src !== "string")
            throw new _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_1__.IsolatedEvalError("Source is not a string in Audio class");
        super(src);
        this.type = type;
        const file = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_0__.SuFile(src);
        if (file.exist()) {
            this.src = `data:${this.type};base64,${file.readAsBase64()}`;
        }
    }
    isPlaying() {
        return !this.paused;
    }
}



/***/ }),

/***/ "./src/native/IsolatedEval/IsoDOMParser.ts":
/*!*************************************************!*\
  !*** ./src/native/IsolatedEval/IsoDOMParser.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsoDOMParser: () => (/* binding */ IsoDOMParser)
/* harmony export */ });
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IsolatedEvalError */ "./src/native/IsolatedEval/IsolatedEvalError.ts");


class IsoDOMParser extends DOMParser {
    constructor() {
        super();
    }
    parseFromFile(fileName, type = "application/xml") {
        if (typeof fileName !== "string")
            throw new _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_1__.IsolatedEvalError("'fileName' isn't a string");
        const file = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_0__.SuFile(fileName);
        if (file.exist()) {
            return this.parseFromString(file.read(), type);
        }
        else {
            throw new _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_1__.IsolatedEvalError(`Unable to find '${fileName}'`);
        }
    }
}



/***/ }),

/***/ "./src/native/IsolatedEval/IsoDocument.ts":
/*!************************************************!*\
  !*** ./src/native/IsolatedEval/IsoDocument.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsoDocument: () => (/* binding */ IsoDocument)
/* harmony export */ });
/* harmony import */ var _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsolatedFunctionBlockError */ "./src/native/IsolatedEval/IsolatedFunctionBlockError.ts");

class IsoDocument extends Document {
    constructor() {
        super();
    }
    write(...text) {
        throw new _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_0__.IsolatedFunctionBlockError("document.write()");
    }
    writeln(...text) {
        throw new _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_0__.IsolatedFunctionBlockError("document.writeln()");
    }
}



/***/ }),

/***/ "./src/native/IsolatedEval/IsoXMLSerializer.ts":
/*!*****************************************************!*\
  !*** ./src/native/IsolatedEval/IsoXMLSerializer.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsoXMLSerializer: () => (/* binding */ IsoXMLSerializer)
/* harmony export */ });
/* harmony import */ var _Native_SuFile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Native/SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IsolatedEvalError */ "./src/native/IsolatedEval/IsolatedEvalError.ts");


class IsoXMLSerializer extends XMLSerializer {
    constructor() {
        super();
    }
    serializeToFile(fileName, root) {
        if (typeof fileName !== "string")
            throw new _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_1__.IsolatedEvalError("'fileName' isn't a string");
        const file = new _Native_SuFile__WEBPACK_IMPORTED_MODULE_0__.SuFile(fileName);
        const xml = this.serializeToString(root);
        if (typeof xml === "string") {
            file.write(xml);
        }
    }
}



/***/ }),

/***/ "./src/native/IsolatedEval/IsolatedEvalError.ts":
/*!******************************************************!*\
  !*** ./src/native/IsolatedEval/IsolatedEvalError.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsolatedEvalError: () => (/* binding */ IsolatedEvalError)
/* harmony export */ });
class IsolatedEvalError extends Error {
    constructor(message) {
        super(message);
        this.name = "IsolatedEvalError";
    }
}



/***/ }),

/***/ "./src/native/IsolatedEval/IsolatedFunctionBlockError.ts":
/*!***************************************************************!*\
  !*** ./src/native/IsolatedEval/IsolatedFunctionBlockError.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsolatedFunctionBlockError: () => (/* binding */ IsolatedFunctionBlockError)
/* harmony export */ });
/* harmony import */ var _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IsolatedEvalError */ "./src/native/IsolatedEval/IsolatedEvalError.ts");

class IsolatedFunctionBlockError extends _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_0__.IsolatedEvalError {
    constructor(message) {
        message = `${message} has been blacklisted`;
        super(message);
        this.name = "IsolatedFunctionBlockError";
    }
}



/***/ }),

/***/ "./src/native/IsolatedEval/index.ts":
/*!******************************************!*\
  !*** ./src/native/IsolatedEval/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IsolatedEval: () => (/* binding */ IsolatedEval)
/* harmony export */ });
/* harmony import */ var _Native_Chooser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @Native/Chooser */ "./src/native/Chooser.ts");
/* harmony import */ var _Native_SuZip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Native/SuZip */ "./src/native/SuZip.ts");
/* harmony import */ var _Native_Terminal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Native/Terminal */ "./src/native/Terminal.ts");
/* harmony import */ var _Util_path_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Util/path.js */ "./src/util/path.js");
/* harmony import */ var _babel_standalone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/standalone */ "./node_modules/@babel/standalone/babel.js");
/* harmony import */ var _babel_standalone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_standalone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _nyariv_sandboxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nyariv/sandboxjs */ "./node_modules/@nyariv/sandboxjs/dist/Sandbox.js");
/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ini */ "./node_modules/ini/lib/ini.js");
/* harmony import */ var ini__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ini__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var yaml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! yaml */ "./node_modules/yaml/browser/index.js");
/* harmony import */ var _Build__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Build */ "./src/native/Build.ts");
/* harmony import */ var _BuildConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../BuildConfig */ "./src/native/BuildConfig.ts");
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Native */ "./src/native/Native.ts");
/* harmony import */ var _Os__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Os */ "./src/native/Os.ts");
/* harmony import */ var _Shell__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Shell */ "./src/native/Shell.ts");
/* harmony import */ var _SuFile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../SuFile */ "./src/native/SuFile.ts");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../View */ "./src/native/View.ts");
/* harmony import */ var _IsoAudio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./IsoAudio */ "./src/native/IsolatedEval/IsoAudio.ts");
/* harmony import */ var _IsoDOMParser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./IsoDOMParser */ "./src/native/IsolatedEval/IsoDOMParser.ts");
/* harmony import */ var _IsoDocument__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./IsoDocument */ "./src/native/IsolatedEval/IsoDocument.ts");
/* harmony import */ var _IsoXMLSerializer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./IsoXMLSerializer */ "./src/native/IsolatedEval/IsoXMLSerializer.ts");
/* harmony import */ var _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./IsolatedEvalError */ "./src/native/IsolatedEval/IsolatedEvalError.ts");
/* harmony import */ var _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./IsolatedFunctionBlockError */ "./src/native/IsolatedEval/IsolatedFunctionBlockError.ts");






















class IsolatedEval {
    _sandbox = new _nyariv_sandboxjs__WEBPACK_IMPORTED_MODULE_5__["default"]();
    _globals = {
        ..._nyariv_sandboxjs__WEBPACK_IMPORTED_MODULE_5__["default"].SAFE_GLOBALS,
        JSON: JSON,
        YAML: __webpack_require__(/*! yaml */ "./node_modules/yaml/browser/index.js"),
        INI: __webpack_require__(/*! ini */ "./node_modules/ini/lib/ini.js"),
        console: console,
        document: new _IsoDocument__WEBPACK_IMPORTED_MODULE_18__.IsoDocument(),
        Toast: ({"LENGTH_LONG":"long","LENGTH_SHORT":"short"}),
        Object: Object,
        Document: _IsoDocument__WEBPACK_IMPORTED_MODULE_18__.IsoDocument,
        Response: Response,
        Element: Element,
        Audio: _IsoAudio__WEBPACK_IMPORTED_MODULE_16__.IsoAudio,
        HTMLMediaElement: HTMLMediaElement,
        FileReader: FileReader,
        Blob: Blob,
        Event: Event,
        EventTarget: EventTarget,
        NamedNodeMap: NamedNodeMap,
        DOMParser: _IsoDOMParser__WEBPACK_IMPORTED_MODULE_17__.IsoDOMParser,
        XMLSerializer: _IsoXMLSerializer__WEBPACK_IMPORTED_MODULE_19__.IsoXMLSerializer,
        SuFile: _SuFile__WEBPACK_IMPORTED_MODULE_14__.SuFile,
        SuZip: _Native_SuZip__WEBPACK_IMPORTED_MODULE_1__.SuZip,
        Terminal: _Native_Terminal__WEBPACK_IMPORTED_MODULE_2__.Terminal,
        Chooser: _Native_Chooser__WEBPACK_IMPORTED_MODULE_0__.Chooser,
        Shell: _Shell__WEBPACK_IMPORTED_MODULE_13__.Shell,
        view: _View__WEBPACK_IMPORTED_MODULE_15__.view,
        os: _Os__WEBPACK_IMPORTED_MODULE_12__.os,
        BuildConfig: _BuildConfig__WEBPACK_IMPORTED_MODULE_10__.BuildConfig,
        Build: _Build__WEBPACK_IMPORTED_MODULE_9__.Build,
        Native: _Native__WEBPACK_IMPORTED_MODULE_11__.Native,
        React: (react__WEBPACK_IMPORTED_MODULE_7___default()),
        eval() {
            throw new _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_21__.IsolatedFunctionBlockError("eval()");
        },
        atob() {
            throw new _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_21__.IsolatedFunctionBlockError("atob()");
        },
        btoa() {
            throw new _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_21__.IsolatedFunctionBlockError("btoa()");
        },
        encodeURI() {
            throw new _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_21__.IsolatedFunctionBlockError("encodeURI()");
        },
        encodeURIComponent() {
            throw new _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_21__.IsolatedFunctionBlockError("encodeURIComponent()");
        },
        decodeURI() {
            throw new _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_21__.IsolatedFunctionBlockError("decodeURI()");
        },
        decodeURIComponent() {
            throw new _IsolatedFunctionBlockError__WEBPACK_IMPORTED_MODULE_21__.IsolatedFunctionBlockError("decodeURIComponent()");
        },
    };
    _prototypeWhitelist = _nyariv_sandboxjs__WEBPACK_IMPORTED_MODULE_5__["default"].SAFE_PROTOTYPES;
    moduleCache;
    module;
    path;
    libraries;
    indexFile;
    scope;
    standaloneFile;
    constructor(options) {
        this._prototypeWhitelist.set(Node, new Set());
        this._prototypeWhitelist.set(Object, new Set());
        this._prototypeWhitelist.set(Document, new Set());
        this._prototypeWhitelist.set(_IsoDocument__WEBPACK_IMPORTED_MODULE_18__.IsoDocument, new Set());
        this._prototypeWhitelist.set(Response, new Set());
        this._prototypeWhitelist.set(Element, new Set());
        this._prototypeWhitelist.set(HTMLMediaElement, new Set());
        this._prototypeWhitelist.set(_IsoAudio__WEBPACK_IMPORTED_MODULE_16__.IsoAudio, new Set());
        this._prototypeWhitelist.set(FileReader, new Set());
        this._prototypeWhitelist.set(Blob, new Set());
        this._prototypeWhitelist.set(Event, new Set());
        this._prototypeWhitelist.set(EventTarget, new Set());
        this._prototypeWhitelist.set(NamedNodeMap, new Set());
        this._prototypeWhitelist.set(_IsoDOMParser__WEBPACK_IMPORTED_MODULE_17__.IsoDOMParser, new Set());
        this._prototypeWhitelist.set(DOMParser, new Set());
        this._prototypeWhitelist.set(_IsoXMLSerializer__WEBPACK_IMPORTED_MODULE_19__.IsoXMLSerializer, new Set());
        this._prototypeWhitelist.set(XMLSerializer, new Set());
        this._prototypeWhitelist.set(_SuFile__WEBPACK_IMPORTED_MODULE_14__.SuFile, new Set());
        this._prototypeWhitelist.set(_Native_SuZip__WEBPACK_IMPORTED_MODULE_1__.SuZip, new Set());
        this._prototypeWhitelist.set(_View__WEBPACK_IMPORTED_MODULE_15__.View, new Set());
        this._prototypeWhitelist.set(_Os__WEBPACK_IMPORTED_MODULE_12__.OsClass, new Set());
        this._prototypeWhitelist.set(_BuildConfig__WEBPACK_IMPORTED_MODULE_10__.BuildConfigClass, new Set());
        this._prototypeWhitelist.set(_Build__WEBPACK_IMPORTED_MODULE_9__.Build, new Set());
        this._prototypeWhitelist.set(_Native__WEBPACK_IMPORTED_MODULE_11__.Native, new Set());
        this._prototypeWhitelist.set(_Shell__WEBPACK_IMPORTED_MODULE_13__.Shell, new Set());
        this._prototypeWhitelist.set(_Native_Terminal__WEBPACK_IMPORTED_MODULE_2__.Terminal, new Set());
        this._prototypeWhitelist.set(_Native_Chooser__WEBPACK_IMPORTED_MODULE_0__.Chooser, new Set());
        this._prototypeWhitelist.set(_Util_path_js__WEBPACK_IMPORTED_MODULE_3__.Path, new Set());
        this._prototypeWhitelist.set((react__WEBPACK_IMPORTED_MODULE_7___default()), new Set());
        this.require = this.require.bind(this);
        this._resolveModule = this._resolveModule.bind(this);
        this._sandbox = new _nyariv_sandboxjs__WEBPACK_IMPORTED_MODULE_5__["default"]({ globals: this._globals, prototypeWhitelist: this._prototypeWhitelist });
        this.module = {
            exports: {
                __esModule: true,
            },
        };
        this.moduleCache = {};
        this.path = new _Util_path_js__WEBPACK_IMPORTED_MODULE_3__.Path(options.cwd);
        this.libraries = options.libraries;
        this.standaloneFile = options.standaloneFile;
        this.indexFile = options.indexFile;
        this.scope = {
            ...options.scope,
            module: this.module,
            exports: this.module.exports,
            path: this.path,
            require: this.require,
        };
    }
    require(modulePath) {
        // Check if the module is a core module
        if (this.libraries[modulePath]) {
            return this.libraries[modulePath];
        }
        // Resolve the module path
        const resolvedPath = this._resolveModule(modulePath);
        if (!resolvedPath) {
            throw new _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_20__.IsolatedEvalError(`Cannot find module '${modulePath}'`);
        }
        // Check if module is already cached
        if (this.moduleCache[resolvedPath]) {
            return this.moduleCache[resolvedPath].exports;
        }
        // Create a new module and cache it
        const module = { exports: {} };
        this.moduleCache[resolvedPath] = module;
        // Read and execute module content based on file extension
        const extension = this.path.extname(resolvedPath);
        const readResolvedPath = new _SuFile__WEBPACK_IMPORTED_MODULE_14__.SuFile(resolvedPath);
        switch (extension) {
            case ".json":
                const jsonContent = readResolvedPath.read();
                module.exports = JSON.parse(jsonContent);
                break;
            case ".yml":
            case ".yaml":
                module.exports = yaml__WEBPACK_IMPORTED_MODULE_8__["default"].parse(readResolvedPath.read());
                break;
            case ".properties":
            case ".prop":
            case ".ini":
                module.exports = ini__WEBPACK_IMPORTED_MODULE_6___default().parse(readResolvedPath.read());
                break;
            case ".js":
            case ".jsx":
                const moduleContent = readResolvedPath.read();
                const transformed = this.transform(moduleContent);
                if (transformed) {
                    const moduleWrapper = new Function("exports", "require", "module", "__filename", "__dirname", transformed);
                    this.compile(`return ${moduleWrapper}`)(module.exports, this.require, module, resolvedPath, this.path.dirname(resolvedPath));
                }
                else {
                    throw new _IsolatedEvalError__WEBPACK_IMPORTED_MODULE_20__.IsolatedEvalError("An error occurred, either there is a syntax mistake or something");
                }
                break;
            default:
                module.exports.default = readResolvedPath.read();
                break;
        }
        return module.exports.default || module.exports;
    }
    _resolveModule(modulePath) {
        const extensions = [".js", ".jsx", ".json", "yml", ".yaml", ".properties", ".prop", ".ini"];
        const resolvedPath = new _SuFile__WEBPACK_IMPORTED_MODULE_14__.SuFile(this.path.resolve(modulePath));
        // Check if the exact file exists
        if (resolvedPath.exist() && resolvedPath.isFile()) {
            return resolvedPath.getPath();
        }
        // Check if file with extensions exists
        for (let ext of extensions) {
            const pth = new _SuFile__WEBPACK_IMPORTED_MODULE_14__.SuFile(resolvedPath.getPath() + ext);
            if (pth.exist() && pth.isFile()) {
                return pth.getPath();
            }
        }
        // Check if it's a directory and has an index file
        if (resolvedPath.exist() && resolvedPath.isDirectory()) {
            for (let ext of extensions) {
                const ifp = new _SuFile__WEBPACK_IMPORTED_MODULE_14__.SuFile(this.path.join(resolvedPath.getPath(), "index" + ext));
                if (ifp.exist() && ifp.isFile()) {
                    return ifp.getPath();
                }
            }
        }
        return null;
    }
    compileTransform(code) {
        const parseCode = this.transform(code);
        if (typeof parseCode != "undefined") {
            this._sandbox.compile(parseCode, false)(this.scope).run();
        }
        return this.module;
    }
    compile(code, ...scopes) {
        return this._sandbox.compile(code, false)(this.scope, scopes).run();
    }
    transform(data, filename) {
        return (0,_babel_standalone__WEBPACK_IMPORTED_MODULE_4__.transform)(data, {
            filename: this.indexFile,
            presets: ["typescript", "react"],
            plugins: [
                "transform-computed-properties",
                "syntax-import-attributes",
                ["transform-destructuring", { loose: true }],
                ["transform-modules-commonjs", { loose: true, importInterop: "node" }],
                "transform-object-rest-spread",
                "syntax-class-properties",
                ["transform-classes", { loose: true }],
                ["transform-class-properties", { loose: true }],
                "syntax-object-rest-spread",
            ],
        }).code;
    }
}



/***/ }),

/***/ "./src/native/Native.ts":
/*!******************************!*\
  !*** ./src/native/Native.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Native: () => (/* binding */ Native)
/* harmony export */ });
/* harmony import */ var modfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! modfs */ "./node_modules/modfs/dist/index.js");

/**
 * Core functions for native functions/interfaces
 */
class Native {
    _internal_interface;
    /**
     * This field is required, otherwise the comunacation between Android will not work
     * @required true
     */
    constructor(i) {
        this._internal_interface = i;
    }
    static get userAgentRegex() {
        return /MMRL\/(.+)\s\(Linux;\sAndroid\s(.+);\s(.+)\sBuild\/(.+)\)/gs;
    }
    static get userAgent() {
        return window.navigator.userAgent;
    }
    /**
     * Determine if MMRL runs on a Android device
     */
    static get isAndroid() {
        return this.userAgentRegex.test(this.userAgent) || window.hasOwnProperty("cordova") ? true : false;
    }
    /**
     * Determine if MMRL runs on a Android device
     */
    get isAndroid() {
        return Native.isAndroid;
    }
    get interface() {
        return this._internal_interface;
    }
    static get interface() {
        return Native.prototype.interface;
    }
    static Unsupported(mTarget, notes = "") {
        return (target, key, descriptor) => {
            const originalDef = descriptor.value;
            descriptor.value = function (...args) {
                const obj = { M: `${key}()`, T: mTarget };
                console.log(modfs__WEBPACK_IMPORTED_MODULE_0__["default"].format("<M> is not supported on the <T> variant.", obj), modfs__WEBPACK_IMPORTED_MODULE_0__["default"].format(notes, obj));
                return originalDef.apply(this, args);
            };
            return descriptor;
        };
    }
}


/***/ }),

/***/ "./src/native/Os.ts":
/*!**************************!*\
  !*** ./src/native/Os.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OsClass: () => (/* binding */ OsClass),
/* harmony export */   os: () => (/* binding */ os)
/* harmony export */ });
/* harmony import */ var onsenui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! onsenui */ "./node_modules/onsenui/esm/index.js");
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Native */ "./src/native/Native.ts");
/* harmony import */ var _Build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Build */ "./src/native/Build.ts");



class OsClass extends _Native__WEBPACK_IMPORTED_MODULE_1__.Native {
    constructor() {
        super(window.__os__);
    }
    WindowMMRLOwn = "_mmrlOwn";
    WindowBlank = "_blank";
    WindowSelf = "_self";
    WindowParent = "_parent";
    WindowTop = "_top";
    WindowUnfancedTop = "_unfencedTop";
    /**
     * @deprecated Use `os.openURL()` instead
     */
    open(url, options) {
        if (this.isAndroid) {
            return this.interface.open(url, options?.features?.color || "#101010");
        }
        else {
            return window.open(url, options?.target, options?.features?.window);
        }
    }
    _windowObjectReference = null;
    _previousURL = null;
    /**
     * Handle opening link on Android and browsers. Android supports additional `color=#101010` feature
     * @param url
     * @param target
     * @param features
     * @returns
     */
    openURL(url, target, features) {
        const openRequestedSingleTab = (url, features) => {
            if (this._windowObjectReference === null || this._windowObjectReference.closed) {
                this._windowObjectReference = open(url, this.WindowMMRLOwn, features);
            }
            else if (this._previousURL !== url) {
                this._windowObjectReference = open(url, this.WindowMMRLOwn, features);
                /* if the resource to load is different,
                   then we load it in the already opened secondary window and then
                   we bring such window back on top/in front of its parent window. */
                this._windowObjectReference && this._windowObjectReference.focus();
            }
            else {
                this._windowObjectReference.focus();
            }
            this._previousURL = url;
            /* explanation: we store the current url in order to compare url
               in the event of another call of this function. */
        };
        function parseWindowFeatures(features) {
            if (!features)
                return {};
            const featurePairs = features.split(",");
            const featureObject = {};
            featurePairs.forEach((pair) => {
                const [key, value] = pair.split("=");
                featureObject[key.trim()] = parseInt(value.trim()); // Parse value as integer
            });
            return featureObject;
        }
        if (this.isAndroid) {
            const parseFetures = parseWindowFeatures(features);
            this.interface.open(url, parseFetures.color || "#101010");
        }
        else {
            if (target === this.WindowMMRLOwn) {
                openRequestedSingleTab(url, features);
            }
            else {
                window.open(url, target, features);
            }
        }
    }
    hasStoragePermission() {
        if (this.isAndroid) {
            return this.interface.hasStoragePermission();
        }
        else {
            return true;
        }
    }
    requestStoargePermission() {
        if (this.isAndroid) {
            this.interface.requestStoargePermission();
        }
        else {
            name;
        }
    }
    /**
     * Closes the window. On Android closes the App
     */
    close() {
        this.isAndroid ? this.interface.close() : window.close();
    }
    shareText(title, body) {
        if (this.isAndroid) {
            this.interface.shareText(title, body);
        }
    }
    /**
     * Makes an toast, even on Android
     * @param text
     * @param duration
     */
    toast(text, duration) {
        const _duration = duration === "short" ? (this.isAndroid ? 0 : 2000) : this.isAndroid ? 1 : 5000;
        if (this.isAndroid) {
            this.interface.makeToast(text, _duration);
        }
        else {
            onsenui__WEBPACK_IMPORTED_MODULE_0__["default"].notification.toast(text, { timeout: _duration, animation: "ascend" });
        }
    }
    /**
     * The SDK version of the software currently running on this hardware device.
     * @returns {number}
     */
    get sdk() {
        if (this.isAndroid) {
            return this.interface.sdk();
        }
        else {
            return 40;
        }
    }
    getMonetColor(id) {
        if (this.isAndroid && this.sdk >= _Build__WEBPACK_IMPORTED_MODULE_2__.Build.VERSION_CODES.S) {
            return this.interface.getMonetColor(id);
        }
        else {
            return "#ffffff";
        }
    }
    /**
     * Get the current status bar height from the current device. Has an automatic fallback for browsers
     * @returns
     */
    getStatusBarHeight() {
        if (this.isAndroid) {
            return this.interface.getStatusBarHeight() / 2;
        }
        else {
            return 0;
        }
    }
    // public getSafeAreaInsets(typr: "top" | "bottom"): number {
    //   if (this.isAndroid) {
    //     return this.interface.getSafeAreaInsets() / 2;
    //   } else {
    //     return 0;
    //   }
    // }
    /**
     * Changes the status bar color
     * @deprecated
     * @param color Your color
     * @param white `true` makes the status bar white
     */
    setStatusBarColor(color, white = false) {
        this.isAndroid ? this.interface.setStatusBarColor(color, white) : null;
    }
    /**
     * @deprecated
     * @param color
     */
    setNavigationBarColor(color) {
        this.isAndroid ? this.interface.setNavigationBarColor(color) : null;
    }
    addNativeEventListener(type, callback, options) {
        window[type] = new Event(type.toLowerCase());
        window.addEventListener(type.toLowerCase(), callback, options);
    }
    removeNativeEventListener(type, callback, options) {
        window[type] = new Event(type.toLowerCase());
        window.removeEventListener(type.toLowerCase(), callback, options);
    }
    getSchemeParam(param) {
        if (this.isAndroid) {
            return this.interface.getSchemeParam(param);
        }
        else {
            return new URLSearchParams(window.location.search).get(param) || "";
        }
    }
}
const os = new OsClass();



/***/ }),

/***/ "./src/native/Properties.ts":
/*!**********************************!*\
  !*** ./src/native/Properties.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Properties: () => (/* binding */ Properties)
/* harmony export */ });
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native */ "./src/native/Native.ts");
/* harmony import */ var _Shell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shell */ "./src/native/Shell.ts");


class PropertiesClass extends _Native__WEBPACK_IMPORTED_MODULE_0__.Native {
    constructor() {
        super(null);
    }
    get(key, def) {
        if (this.isAndroid) {
            return _Shell__WEBPACK_IMPORTED_MODULE_1__.Shell.cmd(`getprop "${key}" "${def}"`).result();
        }
        else {
            return window.localStorage.getItem(key) || def;
        }
    }
    set(key, value) {
        if (this.isAndroid) {
            _Shell__WEBPACK_IMPORTED_MODULE_1__.Shell.cmd(`setprop "${key}" "${value}"`).exec();
        }
        else {
            return window.localStorage.setItem(key, value);
        }
    }
}
const Properties = new PropertiesClass();


/***/ }),

/***/ "./src/native/Shell.ts":
/*!*****************************!*\
  !*** ./src/native/Shell.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Shell: () => (/* binding */ Shell)
/* harmony export */ });
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native */ "./src/native/Native.ts");
/* harmony import */ var _SuFile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SuFile */ "./src/native/SuFile.ts");


/**
 * Run Shell commands native on Android
 */
class Shell extends _Native__WEBPACK_IMPORTED_MODULE_0__.Native {
    /**
     * Successful module install exit code
     */
    static M_INS_SUCCESS = 0;
    /**
     * Failed module install exit code
     */
    static M_INS_FAILURE = 1;
    /**
     * Failed file download exit code
     */
    static M_DWL_FAILURE = 2;
    /**
     * File creation exit code
     */
    static FILE_CRA_ERRO = 3;
    /**
     * Internal terminal error exit code
     */
    static TERM_INTR_ERR = 500;
    _command;
    // @ts-ignore - Won't get even called
    _shell;
    constructor(command) {
        super(window.__shell__);
        if (!Array.isArray(command)) {
            this._command = [command];
        }
        else {
            this._command = command;
        }
        if (this.isAndroid) {
            this._shell = this.interface.v2.bind(this.interface)(JSON.stringify(this._command));
        }
    }
    exec() {
        if (this.isAndroid) {
            this._shell.exec();
        }
    }
    result() {
        if (this.isAndroid) {
            return this._shell.result();
        }
        else {
            return "";
        }
    }
    isSuccess() {
        if (this.isAndroid) {
            return this._shell.isSuccess();
        }
        else {
            return false;
        }
    }
    getCode() {
        if (this.isAndroid) {
            return this._shell.getCode();
        }
        else {
            return 1;
        }
    }
    /**
     * Compatibility method to ensure support without beaking changes
     * @param command
     * @returns
     */
    static cmd(command) {
        return new Shell(command);
    }
    /**
     * Checks if the app has been granted root privileges
     */
    static isSuAvailable() {
        if (this.isAndroid) {
            return window.__shell__.isSuAvailable();
        }
        return false;
    }
    /**
     * Get current installed Superuser version code
     */
    static VERSION_CODE() {
        if (this.isAndroid) {
            return parseInt(this.cmd("su -V").result());
        }
        else {
            return 0;
        }
    }
    static VERSION_NAME() {
        if (this.isAndroid) {
            return this.cmd("su -v").result();
        }
        else {
            return "0:SU";
        }
    }
    static getRootManager() {
        if (this.isMagiskSU()) {
            return "Magisk";
        }
        else if (this.isKernelSU()) {
            return "KernelSU";
        }
        else if (this.isAPatchSU()) {
            return "APatchSU";
        }
        else {
            return "Unknown";
        }
    }
    /**
     * Use regex for better detection
     * @param searcher
     * @returns
     */
    static _mountDetect(searcher) {
        const proc = new _SuFile__WEBPACK_IMPORTED_MODULE_1__.SuFile("/proc/self/mounts");
        if (proc.exist()) {
            return proc.read().search(searcher) !== -1;
        }
        else {
            return false;
        }
    }
    /**
     * Determine if MMRL runs with KernelSU
     */
    static isKernelSU() {
        // `proc.exist()` is always `false` on browsers
        return this._mountDetect(/(KSU|KernelSU)/);
    }
    /**
     * Determine if MMRL runs with Magisk
     */
    static isMagiskSU() {
        // `proc.exist()` is always `false` on browsers
        return this._mountDetect(/(magisk|core\/mirror|core\/img)/);
    }
    /**
     * Determine if MMRL runs with APatch
     */
    static isAPatchSU() {
        // `proc.exist()` is always `false` on browsers
        return this._mountDetect(/(APD|APatch)/);
    }
    /**
     * Returns the current user id
     * @returns {strign} User ID
     */
    static pw_uid() {
        if (this.isAndroid) {
            return this.cmd("id -u").result();
        }
        else {
            return "Unknown";
        }
    }
    /**
     * Returns the current group id
     * @returns {string} Group ID
     */
    static pw_gid() {
        if (this.isAndroid) {
            return this.cmd("id -g").result();
        }
        else {
            return "Unknown";
        }
    }
    /**
     * Returns the current user name
     * @returns {string} User name
     */
    static pw_name() {
        if (this.isAndroid) {
            return this.cmd("id -un").result();
        }
        else {
            return "Unknown";
        }
    }
}



/***/ }),

/***/ "./src/native/SuFile.ts":
/*!******************************!*\
  !*** ./src/native/SuFile.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuFile: () => (/* binding */ SuFile)
/* harmony export */ });
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native */ "./src/native/Native.ts");

/**
 * Class to read files on a native Android device
 * @implements {NativeSuFile}
 */
class SuFile extends _Native__WEBPACK_IMPORTED_MODULE_0__.Native {
    // @ts-ignore - Won't get even called
    _file;
    _path;
    _imgblob = null;
    _readDefaultValue;
    /**
     * @returns `0` as number to create a new file
     */
    static NEW_FILE = 0;
    /**
     * @returns `1` as number to create a new folder with parent folders
     */
    static NEW_FOLDERS = 1;
    /**
     * @returns `2` as number to create a new folder
     */
    static NEW_FOLDER = 2;
    static TYPE_ISFILE = 0;
    static TYPE_ISSYMLINK = 1;
    static TYPE_ISDIRECTORY = 2;
    static TYPE_ISBLOCK = 3;
    static TYPE_ISCHARACTER = 4;
    static TYPE_ISNAMEDPIPE = 5;
    static TYPE_ISSOCKET = 6;
    static TYPE_ISHIDDEN = 7;
    constructor(path, opt) {
        super(window.__sufile__);
        this._readDefaultValue = opt?.readDefaultValue || "";
        if (typeof path !== "string")
            throw new TypeError("Path name isn't a string");
        this._path = path;
        if (this.isAndroid) {
            this._file = this.interface.v2.bind(this.interface)(path);
        }
    }
    getPath() {
        return this._path;
    }
    read() {
        if (this.isAndroid) {
            return this._file.read(this._readDefaultValue);
        }
        else {
            return localStorage.getItem(this._path) || this._readDefaultValue;
        }
    }
    readAsBase64() {
        if (this.isAndroid) {
            return this._file.readAsBase64();
        }
        else {
            return "";
        }
    }
    write(content) {
        if (this.isAndroid) {
            this._file.write(content);
        }
        else {
            localStorage.setItem(this._path, content);
        }
    }
    list(delimiter = ",") {
        if (this.isAndroid) {
            return this._file.list(delimiter).split(delimiter);
        }
        else {
            return [""];
        }
    }
    lastModified() {
        if (this.isAndroid) {
            return this._file.lastModified();
        }
        else {
            return 0;
        }
    }
    exist() {
        if (this.isAndroid) {
            return this._file.exists();
        }
        else {
            return this._path in localStorage;
        }
    }
    delete() {
        if (this.isAndroid) {
            return this._file.delete();
        }
        else {
            return false;
        }
    }
    deleteRecursive() {
        if (this.isAndroid) {
            this._file.deleteRecursive();
        }
    }
    /**
     * Creates a new file or folder
     * ```
     * SuFile.NEW_FILE
     * SuFile.NEW_FOLDER
     * SuFile.NEW_FOLDERS
     * ```
     * @param type
     * @default SuFile.NEW_FILE
     * @returns {boolean}
     */
    create(type = SuFile.NEW_FILE) {
        if (this.isAndroid) {
            return this._file.create(type);
        }
        else {
            return false;
        }
    }
    _isTypeMethod(type, defR = false) {
        if (typeof type !== "number")
            throw new TypeError("'SuFile' => 'isTypeMethod' only accepts numbers as type");
        if (this.isAndroid) {
            return this._file._is_TypeMethod(type);
        }
        else {
            return defR;
        }
    }
    isFile() {
        return this._isTypeMethod(SuFile.TYPE_ISFILE, this._path in localStorage);
    }
    isSymlink() {
        return this._isTypeMethod(SuFile.TYPE_ISSYMLINK);
    }
    isDirectory() {
        return this._isTypeMethod(SuFile.TYPE_ISDIRECTORY);
    }
    isBlock() {
        return this._isTypeMethod(SuFile.TYPE_ISBLOCK);
    }
    isCharacter() {
        return this._isTypeMethod(SuFile.TYPE_ISCHARACTER);
    }
    isNamedPipe() {
        return this._isTypeMethod(SuFile.TYPE_ISNAMEDPIPE);
    }
    isSocket() {
        return this._isTypeMethod(SuFile.TYPE_ISSOCKET);
    }
    isHidden() {
        return this._isTypeMethod(SuFile.TYPE_ISHIDDEN);
    }
    static read(path) {
        return new SuFile(path).read();
    }
    static write(path, content) {
        new SuFile(path).write(content);
    }
    static list(path) {
        return new SuFile(path).list();
    }
    static exist(path) {
        return new SuFile(path).exist();
    }
    static delete(path) {
        return new SuFile(path).delete();
    }
    static deleteRecursive(path) {
        new SuFile(path).deleteRecursive();
    }
    static create(path, type = SuFile.NEW_FILE) {
        return new SuFile(path).create(type);
    }
}



/***/ }),

/***/ "./src/native/SuZip.ts":
/*!*****************************!*\
  !*** ./src/native/SuZip.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SuZip: () => (/* binding */ SuZip)
/* harmony export */ });
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native */ "./src/native/Native.ts");

/**
 * Class to read files on a native Android device
 * @implements {NativeSuZip}
 */
class SuZip extends _Native__WEBPACK_IMPORTED_MODULE_0__.Native {
    // @ts-ignore - Won't get even called
    _zipFile;
    _zipFilePath;
    _path;
    constructor(zipFile, path) {
        super(window.__suzip__);
        this._zipFilePath = zipFile;
        this._path = path;
        if (this.isAndroid) {
            this._zipFile = this.interface.newFS.bind(this.interface)(zipFile);
        }
    }
    getZipPath() {
        return this._zipFilePath;
    }
    getPath() {
        return this._path;
    }
    read() {
        if (this.isAndroid) {
            return this._zipFile.read(this._path);
        }
        return "";
    }
    list() {
        if (this.isAndroid) {
            return this._zipFile.list().split(",");
        }
        return [""];
    }
    exist() {
        if (this.isAndroid) {
            return this._zipFile.exists(this._path);
        }
        return false;
    }
    isFile() {
        if (this.isAndroid) {
            return this._zipFile.isFile(this._path);
        }
        return false;
    }
    isDirectory() {
        if (this.isAndroid) {
            return this._zipFile.isDirectory(this._path);
        }
        return false;
    }
    static read(zipPath, path) {
        return new SuZip(zipPath, path).read();
    }
    static list(zipPath) {
        return new SuZip(zipPath, "").list();
    }
    static exist(zipPath, path) {
        return new SuZip(zipPath, path).exist();
    }
    static isFile(zipPath, path) {
        return new SuZip(zipPath, path).isFile();
    }
    static isDirectory(zipPath, path) {
        return new SuZip(zipPath, path).isDirectory();
    }
}



/***/ }),

/***/ "./src/native/Terminal.ts":
/*!********************************!*\
  !*** ./src/native/Terminal.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Terminal: () => (/* binding */ Terminal)
/* harmony export */ });
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native */ "./src/native/Native.ts");

class Terminal extends _Native__WEBPACK_IMPORTED_MODULE_0__.Native {
    _env = {};
    cwd;
    printErrors;
    _onLine;
    _onExit;
    constructor(options) {
        super(window.__terminal__);
        this.cwd = options?.cwd;
        this.printErrors = options?.printError;
    }
    set onLine(func) {
        this._onLine = func;
    }
    set onExit(func) {
        this._onExit = func;
    }
    get env() {
        return this._env;
    }
    set env(envs) {
        this._env = envs;
    }
    exec(command) {
        if (this.isAndroid) {
            if (typeof this._onLine !== "function")
                throw new TypeError("Terminal 'onLine' is not a function");
            this.interface.exec({
                command: command,
                cwd: this.cwd,
                env: this.env,
                onLine: this._onLine,
                onExit: this._onExit,
                printError: this.printErrors,
            });
        }
    }
}



/***/ }),

/***/ "./src/native/View.ts":
/*!****************************!*\
  !*** ./src/native/View.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   View: () => (/* binding */ View),
/* harmony export */   ViewInsetsCompat: () => (/* binding */ ViewInsetsCompat),
/* harmony export */   view: () => (/* binding */ view)
/* harmony export */ });
/* harmony import */ var _Native__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Native */ "./src/native/Native.ts");

class ViewInsetsCompat {
    static systemBars() {
        return this.Type.STATUS_BARS | this.Type.NAVIGATION_BARS | this.Type.CAPTION_BAR;
    }
    static Type = class {
        static FIRST = 1;
        static STATUS_BARS = this.FIRST;
        static NAVIGATION_BARS = 1 << 1;
        static CAPTION_BAR = 1 << 2;
    };
}
class View extends _Native__WEBPACK_IMPORTED_MODULE_0__.Native {
    constructor() {
        super(window.__view__);
    }
    getWindowTopInsets() {
        if (this.isAndroid) {
            return this.interface.getWindowTopInsets();
        }
        else {
            return 0;
        }
    }
    getWindowRightInsets() {
        if (this.isAndroid) {
            return this.interface.getWindowRightInsets();
        }
        else {
            return 0;
        }
    }
    getWindowBottomInsets() {
        if (this.isAndroid) {
            return this.interface.getWindowBottomInsets();
        }
        else {
            return 0;
        }
    }
    getWindowLeftInsets() {
        if (this.isAndroid) {
            return this.interface.getWindowLeftInsets();
        }
        else {
            return 0;
        }
    }
    fullscreen(enable) {
        if (this.isAndroid) {
            if (enable) {
                this.interface.hideSystemBars(ViewInsetsCompat.systemBars());
            }
            else {
                this.interface.showSystemBars(ViewInsetsCompat.systemBars());
            }
        }
    }
    /**
     * Checks if the foreground of the navigation bar is set to light.
     * ```
     * ```
     * This method always returns false on API < 26.
     *
     * @return true if the foreground is light
     */
    isAppearanceLightNavigationBars() {
        if (this.isAndroid) {
            return this.interface.isAppearanceLightNavigationBars();
        }
        else {
            return false;
        }
    }
    /**
     * If true, changes the foreground color of the navigation bars to light so that the items on
     * the bar can be read clearly. If false, reverts to the default appearance.
     * ```
     * ```
     * This method has no effect on API < 26.
     */
    setAppearanceLightNavigationBars(isLight = false) {
        if (this.isAndroid) {
            this.interface.setAppearanceLightNavigationBars(isLight);
        }
    }
    /**
     * Checks if the foreground of the status bar is set to light.
     * ```
     * ```
     * This method always returns false on API < 23.
     *
     * @return true if the foreground is light
     */
    isAppearanceLightStatusBars() {
        if (this.isAndroid) {
            return this.interface.isAppearanceLightStatusBars();
        }
        else {
            return false;
        }
    }
    /**
     * If true, changes the foreground color of the status bars to light so that the items on the
     * bar can be read clearly. If false, reverts to the default appearance.
     * ```
     * ```
     * This method has no effect on API < 23.
     */
    setAppearanceLightStatusBars(isLight = true) {
        if (this.isAndroid) {
            this.interface.setAppearanceLightStatusBars(isLight);
        }
    }
    /**
     * Changes the status bar color
     * @param color Your color
     * @param white `true` makes the status bar white
     */
    setStatusBarColor(color, white = false) {
        if (this.isAndroid) {
            this.interface.setStatusBarColor(color, white);
        }
    }
    /**
     *
     * @param color
     */
    setNavigationBarColor(color) {
        if (this.isAndroid) {
            this.interface.setNavigationBarColor(color);
        }
    }
}
const view = new View();



/***/ }),

/***/ "./src/styles/light_theme.tsx":
/*!************************************!*\
  !*** ./src/styles/light_theme.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LightTheme: () => (/* binding */ LightTheme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _Native_View__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Native/View */ "./src/native/View.ts");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/GlobalStyles/GlobalStyles.js");



// export const LightTheme = (theme: Theme): any => ({
//   "@global": {
//     ":root": {},
//   },
// });
const LightTheme = () => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], { styles: (theme) => ({
            // eruda tools
            ".eruda-dev-tools": {
                paddingBottom: `${_Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowBottomInsets()}px !important`,
            },
            html: {
                height: "100%",
                width: "100%",
            },
            body: {
                position: "absolute",
                overflow: "hidden",
                top: "0",
                right: "0",
                left: "0",
                bottom: "0",
                padding: "0",
                margin: "0",
                webkitTextSizeAdjust: "100%",
                touchAction: "manipulation",
            },
            "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video": {
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                webkitTapHighlightColor: "transparent",
                webkitTouchCallout: "none",
            },
            "input, textarea, select, pre, code": {
                webkitUserSelect: "auto",
                msUserSelect: "text",
                userSelect: "auto",
                mozUserSelect: "text",
                webkitTouchCallout: "none",
            },
            "a, button, input, textarea, select": {
                touchAction: "manipulation",
            },
            "input:active, input:focus, textarea:active, textarea:focus, select:active, select:focus": {
                outline: "none",
            },
            h1: {
                fontSize: "36px",
            },
            h2: {
                fontSize: "30px",
            },
            h3: {
                fontSize: "24px",
            },
            "h4, h5, h6": {
                fontSize: "18px",
            },
            "pre, code": {
                userSelect: "text",
                span: {
                    userSelect: "text",
                },
            },
            ".page": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                backgroundColor: theme.palette.background.default,
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                overflowX: "visible",
                overflowY: "hidden",
                // color: "#1f1f21",
                msOverflowStyle: "none",
            },
            ".page::-webkit-scrollbar": {
                display: "none",
            },
            ".page__content": {
                containerType: "inline-size",
                containerName: "ons-page-content",
                backgroundColor: theme.palette.background.default,
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                boxSizing: "border-box",
                paddingTop: "0",
                paddingBottom: _Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowBottomInsets(),
            },
            ".page__background": {
                containerType: "inline-size",
                containerName: "ons-page-background",
                backgroundColor: theme.palette.background.default,
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                boxSizing: "border-box",
            },
            ".page--material": {
                containerType: "inline-size",
                containerName: "ons-page",
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                backgroundColor: theme.palette.background.default,
            },
            // Android
            ".page--wrapper": {
            // marginTop: window.__os__.getSafeArea("top") / 2 + "px",
            // marginTop: os.getStatusBarHeight() + "px",
            },
            ".page--material__content": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
            },
            // ".page__content h1, .page__content h2, .page__content h3, .page__content h4, .page__content h5": {
            //   fontFamily: '"Roboto", "Noto", sans-serif',
            //   webkitFontSmoothing: "antialiased",
            //   fontWeight: "500",
            //   fallbacks: [
            //     {
            //       fontWeight: "400",
            //     },
            //   ],
            //   margin: "0.6em 0",
            //   padding: "0",
            // },
            // ".page__content h1": {
            //   fontSize: "28px",
            // },
            // ".page__content h2": {
            //   fontSize: "24px",
            // },
            // ".page__content h3": {
            //   fontSize: "20px",
            // },
            // ".page--material__content h1, .page--material__content h2, .page--material__content h3, .page--material__content h4, .page--material__content h5":
            //   {
            //     fontFamily: '"Roboto", "Noto", sans-serif',
            //     webkitFontSmoothing: "antialiased",
            //     fontWeight: "500",
            //     fallbacks: [
            //       {
            //         fontWeight: "400",
            //       },
            //     ],
            //     margin: "0.6em 0",
            //     padding: "0",
            //   },
            // ".page--material__content h1": {
            //   fontSize: "28px",
            // },
            // ".page--material__content h2": {
            //   fontSize: "24px",
            // },
            // ".page--material__content h3": {
            //   fontSize: "20px",
            // },
            ".page--material__background": {
                backgroundColor: theme.palette.background.default,
            },
            ".switch": {
                display: "inline-block",
                verticalAlign: "top",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                position: "relative",
                minWidth: "51px",
                fontSize: "17px",
                padding: "0 20px",
                border: "none",
                overflow: "visible",
                width: "51px",
                height: "32px",
                zIndex: "0",
                textAlign: "left",
            },
            ".switch__input": {
                position: "absolute",
                right: "0",
                top: "0",
                left: "0",
                bottom: "0",
                padding: "0",
                border: "0",
                backgroundColor: "transparent",
                zIndex: "0",
                verticalAlign: "top",
                outline: "none",
                width: "100%",
                height: "100%",
                margin: "0",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
            },
            ".switch__toggle": {
                backgroundColor: "white",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
                borderRadius: "30px",
                transitionProperty: "all",
                transitionDuration: "0.35s",
                transitionTimingFunction: "ease-out",
                boxShadow: "inset 0 0 0 2px #e5e5e5",
            },
            ".switch__handle": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                position: "absolute",
                content: '""',
                borderRadius: "28px",
                height: "28px",
                width: "28px",
                backgroundColor: "white",
                left: "1px",
                top: "2px",
                transitionProperty: "all",
                transitionDuration: "0.35s",
                transitionTimingFunction: "cubic-bezier(0.59, 0.01, 0.5, 0.99)",
                boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
            },
            ".switch--active__handle": {
                transition: "none",
            },
            ":checked + .switch__toggle": {
                boxShadow: "inset 0 0 0 2px #44db5e",
                backgroundColor: "#44db5e",
            },
            ":checked + .switch__toggle > .switch__handle": {
                left: "21px",
                boxShadow: "0 3px 2px rgba(0, 0, 0, 0.25)",
            },
            ":disabled + .switch__toggle": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".switch__touch": {
                position: "absolute",
                top: "-5px",
                bottom: "-5px",
                left: "-10px",
                right: "-10px",
            },
            ".switch--material": {
                width: "36px",
                height: "24px",
                padding: "0 10px",
                minWidth: "36px",
            },
            ".switch--material__toggle": {
                backgroundColor: "#b0afaf",
                marginTop: "5px",
                height: "14px",
                boxShadow: "none",
            },
            ".switch--material__input": {
                position: "absolute",
                right: "0",
                top: "0",
                left: "0",
                bottom: "0",
                padding: "0",
                border: "0",
                backgroundColor: "transparent",
                zIndex: "0",
                verticalAlign: "top",
                outline: "none",
                width: "100%",
                height: "100%",
                margin: "0",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
            },
            ".switch--material__handle": {
                backgroundColor: "#f1f1f1",
                left: "0",
                marginTop: "-5px",
                width: "20px",
                height: "20px",
                boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)",
            },
            ":checked + .switch--material__toggle": {
                backgroundColor: "#7c43bd",
                boxShadow: "none",
            },
            ":checked + .switch--material__toggle > .switch--material__handle": {
                left: "16px",
                backgroundColor: theme.palette.primary.main,
                boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
            },
            ":disabled + .switch--material__toggle": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".switch--material__handle:before": {
                background: "transparent",
                content: '""',
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                zIndex: "0",
                boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.12)",
                transition: "box-shadow 0.1s linear",
            },
            ".switch--material__toggle > .switch--active__handle:before": {
                boxShadow: "0 0 0 14px rgba(0, 0, 0, 0.12)",
            },
            ":checked + .switch--material__toggle > .switch--active__handle:before": {
                boxShadow: "0 0 0 14px color-mod(#4a148c alpha(20%))",
            },
            ".switch--material__touch": {
                position: "absolute",
                top: "-10px",
                bottom: "-10px",
                left: "-15px",
                right: "-15px",
            },
            ".range": {
                display: "inline-block",
                position: "relative",
                width: "100px",
                height: "30px",
                margin: "0",
                padding: "0",
                backgroundImage: "linear-gradient(#a4aab3, #a4aab3)",
                backgroundPosition: "left center",
                backgroundSize: "100% 2px",
                backgroundRepeat: "no-repeat",
                backgroundColor: "transparent",
            },
            ".range__input": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "inherit",
                background: "transparent",
                border: "none",
                verticalAlign: "top",
                outline: "none",
                lineHeight: "1",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
                backgroundImage: "linear-gradient(#4a148c, #4a148c)",
                backgroundPosition: "left center",
                backgroundSize: "0% 2px",
                backgroundRepeat: "no-repeat",
                height: "30px",
                position: "relative",
                zIndex: "1",
                width: "100%",
            },
            ".range__input::-moz-range-track": {
                position: "relative",
                border: "none",
                background: "none",
                boxShadow: "none",
                top: "0",
                margin: "0",
                padding: "0",
            },
            ".range__input::-ms-track": {
                position: "relative",
                border: "none",
                backgroundColor: "#a4aab3",
                height: "0",
                borderRadius: "50%",
            },
            ".range__input::-webkit-slider-thumb": {
                position: "relative",
                height: "28px",
                width: "28px",
                backgroundColor: "#fff",
                border: "none",
                boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                margin: "0",
                padding: "0",
                boxSizing: "border-box",
                webkitAppearance: "none",
                appearance: "none",
                top: "0",
                zIndex: "1",
            },
            ".range__input::-moz-range-thumb": {
                position: "relative",
                height: "28px",
                width: "28px",
                backgroundColor: "#fff",
                border: "none",
                boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                margin: "0",
                padding: "0",
            },
            ".range__input::-ms-thumb": {
                position: "relative",
                height: "28px",
                width: "28px",
                backgroundColor: "#fff",
                border: "none",
                boxShadow: "0 0 1px 0 rgba(0, 0, 0, 0.25), 0 3px 2px rgba(0, 0, 0, 0.25)",
                borderRadius: "50%",
                margin: "0",
                padding: "0",
                top: "0",
            },
            ".range__input::-ms-fill-lower": {
                height: "2px",
                backgroundColor: theme.palette.primary.main,
            },
            ".range__input::-ms-tooltip": {
                display: "none",
            },
            ".range__input:disabled": {
                opacity: "1",
                pointerEvents: "none",
            },
            ".range__focus-ring": {
                pointerEvents: "none",
                top: "0",
                left: "0",
                display: "none",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "inherit",
                background: "none",
                border: "none",
                verticalAlign: "top",
                outline: "none",
                lineHeight: "1",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
                height: "30px",
                position: "absolute",
                zIndex: "0",
                width: "100%",
            },
            ".range--disabled": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".range--material": {
                position: "relative",
                backgroundImage: "linear-gradient(#bdbdbd, #bdbdbd)",
            },
            ".range--material__input": {
                backgroundImage: "linear-gradient(#4a148c, #4a148c)",
                backgroundPosition: "center left",
                backgroundSize: "0% 2px",
            },
            ".range--material__focus-ring": {
                display: "block",
            },
            ".range--material__focus-ring::-webkit-slider-thumb": {
                webkitAppearance: "none",
                appearance: "none",
                width: "14px",
                height: "14px",
                border: "none",
                boxShadow: "0 0 0 9px #4a148c",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "50%",
                opacity: "0",
                transition: "opacity 0.25s ease-out, transform 0.25s ease-out, -webkit-transform 0.25s ease-out",
            },
            ".range--material__input.range__input--active + .range--material__focus-ring::-webkit-slider-thumb": {
                opacity: "0.2",
                webkitTransform: "scale(1.5, 1.5, 1.5)",
                transform: "scale(1.5, 1.5, 1.5)",
            },
            ".range--material__input::-webkit-slider-thumb": {
                position: "relative",
                boxSizing: "border-box",
                border: "none",
                backgroundColor: "transparent",
                width: "14px",
                height: "32px",
                borderRadius: "0",
                boxShadow: "none",
                backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #4a148c 0%,\r\n    #4a148c 6.6px,\r\n    transparent 7px\r\n  )",
                transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
                overflow: "visible",
            },
            ".range--material__input[_zero]::-webkit-slider-thumb": {
                backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #f2f2f2 0%,\r\n    #f2f2f2 4px,\r\n    #bdbdbd 4px,\r\n    #bdbdbd 6.4px,\r\n    transparent 7px\r\n  )",
            },
            ".range--material__input[_zero] + .range--material__focus-ring::-webkit-slider-thumb": {
                boxShadow: "0 0 0 9px #bdbdbd",
            },
            ".range--material__input::-moz-range-track": {
                background: "none",
            },
            ".range--material__input::-moz-range-thumb, .range--material__input:focus::-moz-range-thumb": {
                boxSizing: "border-box",
                border: "none",
                width: "14px",
                height: "32px",
                borderRadius: "0",
                backgroundColor: "transparent",
                backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #4a148c 0%,\r\n    #4a148c 6.6px,\r\n    transparent 7px\r\n  )",
                boxShadow: "none",
            },
            ".range--material__input:active::-webkit-slider-thumb, .range--material__input.range__input--active::-webkit-slider-thumb": {
                webkitTransform: "scale(1.5)",
                transform: "scale(1.5)",
                transition: "transform 0.1s linear, -webkit-transform 0.1s linear",
            },
            ".range--disabled.range--material": {
                opacity: "1",
            },
            ".range--disabled > .range--material__input": {
                backgroundImage: "none",
            },
            ".range--material__input:disabled::-webkit-slider-thumb": {
                backgroundImage: "radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0%,\r\n    #b0b0b0 4px,\r\n    #eeeeee 4.4px,\r\n    #eeeeee 7.6px,\r\n    transparent 7.6px\r\n  )",
                transition: "none",
            },
            ".range--material__input:disabled::-moz-range-thumb": {
                backgroundImage: "-moz-radial-gradient(\r\n    circle farthest-corner,\r\n    #b0b0b0 0%,\r\n    #b0b0b0 4px,\r\n    #eeeeee 4.4px,\r\n    #eeeeee 7.6px,\r\n    transparent 7.6px\r\n  )",
                transition: "none",
            },
            ".notification": {
                position: "relative",
                display: "inline-block",
                verticalAlign: "top",
                font: "inherit",
                border: "none",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0 4px",
                margin: "0",
                color: "white",
                background: "transparent",
                lineHeight: "19px",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textDecoration: "none",
                width: "auto",
                height: "19px",
                borderRadius: "19px",
                backgroundColor: "#fe3824",
                textAlign: "center",
                fontSize: "16px",
                minWidth: "19px",
            },
            ".notification:empty": {
                display: "none",
            },
            ".notification--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "500",
                backgroundColor: theme.palette.primary.main,
                fontSize: "16px",
                color: "white",
            },
            ".toolbar": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                whiteSpace: "nowrap",
                overflow: "hidden",
                wordSpacing: "0",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#1f1f21",
                background: "#fafafa",
                border: "none",
                lineHeight: "normal",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                zIndex: "2",
                display: "flex",
                webkitBoxAlign: "stretch",
                webkitAlignItems: "stretch",
                alignItems: "stretch",
                webkitFlexWrap: "nowrap",
                flexWrap: "nowrap",
                height: "44px",
                paddingLeft: "0",
                paddingRight: "0",
                boxShadow: "none",
                width: "100%",
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, #b2b2b2, #b2b2b2 100%)",
                top: "0",
                paddingTop: "0",
            },
            "@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi), (min-resolution: 2dppx)": {
                ".toolbar": {
                    backgroundImage: "linear-gradient(0deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
                },
                ".bottom-bar": {
                    backgroundImage: "linear-gradient(180deg, #b2b2b2, #b2b2b2 50%, transparent 50%)",
                },
                ".tabbar": {
                    borderTop: "none",
                    backgroundSize: "100% 1px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
                },
                ".tabbar__button": {
                    borderTop: "none",
                },
                ".tabbar--noshadow": {
                    boxShadow: "none",
                    backgroundImage: "none",
                    borderBottom: "none",
                },
                ".tabbar--top": {
                    borderBottom: "none",
                    backgroundSize: "100% 1px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "bottom",
                    backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
                },
                ".list": {
                    backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%),\r\n      linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
                },
                ".list-item--expandable": {
                    backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
                },
                ".list-item__center": {
                    backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
                },
                ".list-item__right": {
                    backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
                },
                ".list-header": {
                    backgroundImage: "linear-gradient(180deg, #ccc, #ccc 50%, transparent 50%)",
                },
                ".list-item--material__left:empty, .list-item--material__center": {
                    backgroundImage: theme.palette.background.default,
                },
                ".list-item--material__right": {
                    backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
                },
                ".list-item--material.list-item--expandable": {
                    backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
                },
                ".list-item--material.list-item--longdivider, .list-item--material.list-item--expandable.list-item--longdivider": {
                    backgroundImage: "linear-gradient(0deg, #eee, #eee 50%, transparent 50%)",
                },
                ".list-header--material:not(:first-of-type)": {
                    backgroundImage: "linear-gradient(180deg, #eee, #eee 50%, transparent 50%)",
                },
                ".list-item--longdivider": {
                    backgroundImage: "linear-gradient(0deg, #ccc, #ccc 50%, transparent 50%)",
                },
                ".alert-dialog-button": {
                    borderTop: "none",
                    backgroundSize: "100% 1px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top",
                    backgroundImage: "linear-gradient(180deg, #ddd, #ddd 50%, transparent 50%)",
                },
                ".alert-dialog-button--rowfooter": {
                    borderTop: "none",
                    borderLeft: "none",
                    backgroundSize: "100% 1px, 1px 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top, left",
                    backgroundImage: "linear-gradient(0deg, transparent, transparent 50%, #ddd 50%),\r\n      linear-gradient(90deg, transparent, transparent 50%, #ddd 50%)",
                },
                ".alert-dialog-button--rowfooter:first-of-type": {
                    borderTop: "none",
                    backgroundSize: "100% 1px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "top, left",
                    backgroundImage: "linear-gradient(0deg, transparent, transparent 50%, #ddd 50%)",
                },
                ".alert-dialog-button--material": {
                    background: "none",
                },
                ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-of-type": {
                    background: "none",
                },
                ".alert-dialog-button--primal--material": {
                    background: "none",
                },
                ".action-sheet-button": {
                    backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )",
                },
                ".action-sheet-title": {
                    backgroundImage: "linear-gradient(\r\n      0deg,\r\n      rgba(0, 0, 0, 0.1),\r\n      rgba(0, 0, 0, 0.1) 50%,\r\n      transparent 50%\r\n    )",
                },
            },
            ".toolbar__bg": {
                background: "#fafafa",
            },
            ".toolbar__item": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "inherit",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                height: "44px",
                overflow: "visible",
                display: "block",
                verticalAlign: "middle",
            },
            ".toolbar__left": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "inherit",
                background: "transparent",
                border: "none",
                lineHeight: "44px",
                maxWidth: "50%",
                width: "27%",
                textAlign: "left",
            },
            ".toolbar__right": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "inherit",
                background: "transparent",
                border: "none",
                lineHeight: "44px",
                maxWidth: "50%",
                width: "27%",
                textAlign: "right",
            },
            ".toolbar__center": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#1f1f21",
                background: "transparent",
                border: "none",
                lineHeight: "44px",
                width: "46%",
                textAlign: "center",
                fontSize: "17px",
                fontWeight: "500",
            },
            ".toolbar__title": {
                lineHeight: "44px",
                fontSize: "17px",
                fontWeight: "500",
                color: "#1f1f21",
                margin: "0",
                padding: "0",
                overflow: "visible",
            },
            ".toolbar__center:first-of-type:last-child": {
                width: "100%",
            },
            ".bottom-bar": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                whiteSpace: "nowrap",
                overflow: "hidden",
                wordSpacing: "0",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#1f1f21",
                background: "#fafafa",
                border: "none",
                lineHeight: "normal",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                zIndex: "2",
                display: "block",
                paddingBottom: _Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowBottomInsets(),
                height: `calc(44px + ${_Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowBottomInsets()}px)`,
                paddingLeft: "0",
                paddingRight: "0",
                boxShadow: "none",
                borderBottom: "none",
                borderTop: "none",
                position: "absolute",
                bottom: "0",
                right: "0",
                left: "0",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundImage: "linear-gradient(180deg, #b2b2b2, #b2b2b2 100%)",
            },
            ".bottom-bar__line-height": {
                lineHeight: "44px",
                paddingBottom: "0",
                paddingTop: "0",
            },
            ".bottom-bar--aligned": {
                display: "flex",
                webkitFlexWrap: "nowrap",
                flexWrap: "nowrap",
                lineHeight: "44px",
            },
            ".bottom-bar--transparent": {
                backgroundColor: "transparent",
                backgroundImage: "none",
                border: "none",
            },
            ".toolbar--material": {
                display: "flex",
                webkitFlexWrap: "nowrap",
                flexWrap: "nowrap",
                webkitBoxPack: "justify",
                webkitJustifyContent: "space-between",
                justifyContent: "space-between",
                paddingTop: _Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowTopInsets(),
                height: `calc(56px + ${_Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowTopInsets()}px)`,
                boxShadow: "0 1px 5px rgba(0, 0, 0, 0.3)",
                backgroundColor: theme.palette.background.default,
                backgroundSize: "0",
            },
            ".toolbar--noshadow": {
                boxShadow: "none",
                backgroundImage: "none",
                borderBottom: "none",
            },
            ".toolbar--material__left, .toolbar--material__right": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "500",
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
                height: "56px",
                minWidth: "72px",
                width: "auto",
                lineHeight: "56px",
            },
            ".toolbar--material__center": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "500",
                fontSize: "20px",
                color: "rgba(255, 255, 255, 1)",
                height: "56px",
                width: "auto",
                webkitBoxFlex: "1",
                webkitFlexGrow: "1",
                flexGrow: "1",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textAlign: "left",
                lineHeight: "56px",
            },
            ".toolbar--material__center:first-of-type": {
                marginLeft: "16px",
            },
            ".toolbar--material__center:last-child": {
                marginRight: "16px",
            },
            ".toolbar--material__left:empty, .toolbar--material__right:empty": {
                minWidth: "16px",
            },
            ".toolbar--transparent": {
                backgroundColor: "transparent",
                boxShadow: "none",
                backgroundImage: "none",
                borderBottom: "none",
            },
            ".button": {
                position: "relative",
                display: "inline-block",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "4px 10px",
                margin: "0",
                font: "inherit",
                color: "white",
                background: "transparent",
                border: "0 solid currentColor",
                lineHeight: "32px",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                height: "auto",
                textDecoration: "none",
                fontSize: "17px",
                letterSpacing: "0",
                verticalAlign: "middle",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "3px",
                transition: "none",
            },
            ".button::-moz-focus-inner": {
                outline: "0",
            },
            ".button:hover": {
                transition: "none",
            },
            ".button:active": {
                backgroundColor: theme.palette.primary.main,
                transition: "none",
                opacity: "0.2",
            },
            ".button:focus": {
                outline: "0",
            },
            ".button:disabled, .button[disabled]": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".button--outline": {
                backgroundColor: "transparent",
                border: `1px solid ${theme.palette.primary.main}`,
                color: theme.palette.primary.main,
            },
            ".button--outline:active": {
                backgroundColor: "color-mod(#4a148c tint(70%))",
                border: `1px solid ${theme.palette.primary.main}`,
                color: theme.palette.primary.main,
                opacity: "1",
            },
            ".button--outline:hover": {
                border: `1px solid ${theme.palette.primary.main}`,
                transition: "0",
            },
            ".button--light": {
                backgroundColor: "transparent",
                color: "color-mod(black a(40%))",
                border: "1px solid color-mod(black a(20%))",
            },
            ".button--light:active": {
                backgroundColor: "color-mod(black a(5%))",
                color: "color-mod(black a(40%))",
                border: "1px solid color-mod(black a(20%))",
                opacity: "1",
            },
            ".button--quiet": {
                position: "relative",
                display: "inline-block",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "4px 10px",
                margin: "0",
                font: "inherit",
                color: theme.palette.primary.main,
                background: "transparent",
                border: "none",
                lineHeight: "32px",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                height: "auto",
                textDecoration: "none",
                fontSize: "17px",
                letterSpacing: "0",
                verticalAlign: "middle",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "3px",
                transition: "none",
                boxShadow: "none",
            },
            ".button--quiet:disabled, .button--quiet[disabled]": {
                opacity: "0.3",
                pointerEvents: "none",
                border: "none",
            },
            ".button--quiet:hover": {
                transition: "none",
            },
            ".button--quiet:focus": {
                outline: "0",
            },
            ".button--quiet:active": {
                backgroundColor: "transparent",
                border: "none",
                transition: "none",
                opacity: "0.2",
                color: theme.palette.primary.main,
            },
            ".button--cta": {
                position: "relative",
                display: "inline-block",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "4px 10px",
                margin: "0",
                font: "inherit",
                color: "white",
                background: "transparent",
                border: "none",
                lineHeight: "32px",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                height: "auto",
                textDecoration: "none",
                fontSize: "17px",
                letterSpacing: "0",
                verticalAlign: "middle",
                backgroundColor: "#7c43bd",
                borderRadius: "3px",
                transition: "none",
            },
            ".button--cta:hover": {
                transition: "none",
            },
            ".button--cta:focus": {
                outline: "0",
            },
            ".button--cta:active": {
                color: "white",
                backgroundColor: "#7c43bd",
                transition: "none",
                opacity: "0.2",
            },
            ".button--cta:disabled, .button--cta[disabled]": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".button--large": {
                fontSize: "17px",
                fontWeight: "500",
                lineHeight: "36px",
                padding: "4px 12px",
                display: "block",
                width: "100%",
                textAlign: "center",
            },
            ".button--large:active": {
                backgroundColor: theme.palette.primary.main,
                transition: "none",
                opacity: "0.2",
            },
            ".button--large:disabled, .button--large[disabled]": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".button--large:hover": {
                transition: "none",
            },
            ".button--large:focus": {
                outline: "0",
            },
            ".button--large--quiet": {
                position: "relative",
                display: "block",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "4px 12px",
                margin: "0",
                font: "inherit",
                color: "#4a148c",
                background: "transparent",
                border: "1px solid transparent",
                lineHeight: "36px",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "500",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                height: "auto",
                textDecoration: "none",
                fontSize: "17px",
                letterSpacing: "0",
                verticalAlign: "middle",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "3px",
                transition: "none",
                width: "100%",
                boxShadow: "none",
                textAlign: "center",
            },
            ".button--large--quiet:active": {
                transition: "none",
                opacity: "0.2",
                color: "#4a148c",
                background: "transparent",
                border: "1px solid transparent",
                boxShadow: "none",
            },
            ".button--large--quiet:disabled, .button--large--quiet[disabled]": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".button--large--quiet:hover": {
                transition: "none",
            },
            ".button--large--quiet:focus": {
                outline: "0",
            },
            ".button--large--cta": {
                position: "relative",
                display: "block",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "4px 12px",
                margin: "0",
                font: "inherit",
                color: "white",
                background: "transparent",
                border: "none",
                lineHeight: "36px",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "500",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                height: "auto",
                textDecoration: "none",
                fontSize: "17px",
                letterSpacing: "0",
                verticalAlign: "middle",
                backgroundColor: "#7c43bd",
                borderRadius: "3px",
                transition: "none",
                width: "100%",
                textAlign: "center",
            },
            ".button--large--cta:hover": {
                transition: "none",
            },
            ".button--large--cta:focus": {
                outline: "0",
            },
            ".button--large--cta:active": {
                color: "white",
                backgroundColor: "#7c43bd",
                transition: "none",
                opacity: "0.2",
            },
            ".button--large--cta:disabled, .button--large--cta[disabled]": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".button--material": {
                position: "relative",
                display: "inline-block",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0 16px",
                margin: "0",
                font: "inherit",
                color: "#ffffff",
                background: "transparent",
                border: "0 solid currentColor",
                lineHeight: "36px",
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "500",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                height: "auto",
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "0",
                verticalAlign: "middle",
                backgroundColor: theme.palette.primary.main,
                borderRadius: theme.shape.borderRadius,
                transition: "all 0.25s linear",
                // boxShadow:
                //   "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
                minHeight: "36px",
                textAlign: "center",
                webkitTransform: "translate3d(0, 0, 0)",
                transform: "translate3d(0, 0, 0)",
                textTransform: "uppercase",
                opacity: "1",
            },
            ".button--material:hover": {
                transition: "all 0.25s linear",
            },
            ".button--material:active": {
                // boxShadow:
                //   "0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 5px -1px rgba(0, 0, 0, 0.4)",
                backgroundColor: theme.palette.primary.main,
                opacity: "0.9",
                transition: "all 0.25s linear",
            },
            ".button--material:focus": {
                outline: "0",
            },
            ".button--material:disabled, .button--material[disabled]": {
                transition: "none",
                boxShadow: "none",
                backgroundColor: theme.palette.primary.main,
                filter: "brightness(85%)",
                color: "color-mod(black a(26%))",
                opacity: "1",
            },
            ".button--material--flat": {
                position: "relative",
                display: "inline-block",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0 16px",
                margin: "0",
                font: "inherit",
                color: "#4a148c",
                background: "transparent",
                border: "0 solid currentColor",
                lineHeight: "36px",
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "500",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                height: "auto",
                textDecoration: "none",
                fontSize: "14px",
                letterSpacing: "0",
                verticalAlign: "middle",
                backgroundColor: "transparent",
                borderRadius: "3px",
                transition: "all 0.25s linear",
                boxShadow: "none",
                minHeight: "36px",
                textAlign: "center",
                webkitTransform: "translate3d(0, 0, 0)",
                transform: "translate3d(0, 0, 0)",
                textTransform: "uppercase",
            },
            ".button--material--flat:hover": {
                transition: "all 0.25s linear",
            },
            ".button--material--flat:focus": {
                boxShadow: "none",
                backgroundColor: "transparent",
                color: "#4a148c",
                outline: "0",
                opacity: "1",
                border: "none",
            },
            ".button--material--flat:active": {
                boxShadow: "none",
                outline: "0",
                opacity: "1",
                border: "none",
                backgroundColor: "color-mod(#999 a(20%))",
                color: "#4a148c",
                transition: "all 0.25s linear",
            },
            ".button--material--flat:disabled, .button--material--flat[disabled]": {
                transition: "none",
                opacity: "1",
                boxShadow: "none",
                backgroundColor: "transparent",
                color: "color-mod(black a(26%))",
            },
            ".button-bar": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                display: "inline-flex",
                webkitBoxAlign: "stretch",
                webkitAlignItems: "stretch",
                alignItems: "stretch",
                webkitAlignContent: "stretch",
                alignContent: "stretch",
                webkitFlexWrap: "nowrap",
                flexWrap: "nowrap",
                margin: "0",
                padding: "0",
                border: "none",
            },
            ".button-bar__item": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                borderRadius: "0",
                width: "100%",
                padding: "0",
                margin: "0",
                position: "relative",
                overflow: "hidden",
                boxSizing: "border-box",
            },
            ".button-bar__button": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                borderRadius: "0",
                backgroundColor: "transparent",
                color: "#4a148c",
                border: "1px solid #4a148c",
                borderTopWidth: "1px",
                borderBottomWidth: "1px",
                borderRightWidth: "1px",
                borderLeftWidth: "0",
                padding: "0",
                fontSize: "13px",
                height: "27px",
                lineHeight: "27px",
                width: "100%",
                transition: "background-color 0.2s linear, color 0.2s linear",
                boxSizing: "border-box",
            },
            ".button-bar__button:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".button-bar__button:hover": {
                transition: "none",
            },
            ".button-bar__button:focus": {
                outline: "0",
            },
            ":checked + .button-bar__button": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                transition: "none",
            },
            ".button-bar__button:active, :active + .button-bar__button": {
                backgroundColor: "color-mod(#4a148c tint(70%))",
                border: "0 solid #4a148c",
                borderTop: "1px solid #4a148c",
                borderBottom: "1px solid #4a148c",
                borderRight: "1px solid #4a148c",
                fontSize: "13px",
                width: "100%",
                transition: "none",
            },
            ".button-bar__item:first-of-type > .button-bar__button": {
                borderLeftWidth: "1px",
                borderRadius: "4px 0 0 4px",
            },
            ".button-bar__item:last-child > .button-bar__button": {
                borderRightWidth: "1px",
                borderRadius: "0 4px 4px 0",
            },
            ".segment": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                display: "inline-flex",
                webkitBoxAlign: "stretch",
                webkitAlignItems: "stretch",
                alignItems: "stretch",
                webkitAlignContent: "stretch",
                alignContent: "stretch",
                webkitFlexWrap: "nowrap",
                flexWrap: "nowrap",
                margin: "0",
                padding: "0",
                border: "none",
            },
            ".segment__item": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                borderRadius: "0",
                width: "100%",
                padding: "0",
                margin: "0",
                position: "relative",
                overflow: "hidden",
                boxSizing: "border-box",
                display: "block",
                backgroundColor: "transparent",
                border: "none",
            },
            ".segment__input": {
                position: "absolute",
                right: "0",
                top: "0",
                left: "0",
                bottom: "0",
                padding: "0",
                border: "0",
                backgroundColor: "transparent",
                zIndex: "1",
                verticalAlign: "top",
                outline: "none",
                width: "100%",
                height: "100%",
                margin: "0",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
            },
            ".segment__button": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                borderRadius: "0",
                backgroundColor: "transparent",
                color: "#4a148c",
                border: "1px solid #4a148c",
                borderTopWidth: "1px",
                borderBottomWidth: "1px",
                borderRightWidth: "1px",
                borderLeftWidth: "0",
                padding: "0",
                fontSize: "13px",
                height: "29px",
                lineHeight: "29px",
                width: "100%",
                transition: "background-color 0.2s linear, color 0.2s linear",
                boxSizing: "border-box",
                textAlign: "center",
            },
            ".segment__item:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".segment__button:hover": {
                transition: "none",
            },
            ".segment__button:focus": {
                outline: "0",
            },
            ":active + .segment__button": {
                backgroundColor: "color-mod(#4a148c tint(70%))",
                border: "0 solid #4a148c",
                borderTop: "1px solid #4a148c",
                borderBottom: "1px solid #4a148c",
                borderRight: "1px solid #4a148c",
                fontSize: "13px",
                width: "100%",
                transition: "none",
            },
            ":checked + .segment__button": {
                backgroundColor: theme.palette.primary.main,
                color: "#fff",
                transition: "none",
            },
            ".segment__item:first-of-type > .segment__button": {
                borderLeftWidth: "1px",
                borderRadius: "4px 0 0 4px",
            },
            ".segment__item:last-child > .segment__button": {
                borderRightWidth: "1px",
                borderRadius: "0 4px 4px 0",
            },
            ".segment--material": {
                borderRadius: "2px",
                overflow: "hidden",
                boxShadow: "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)",
            },
            ".segment--material__button": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                fontSize: "14px",
                height: "32px",
                lineHeight: "32px",
                borderWidth: "0",
                color: "color-mod(black a(38%))",
                borderRadius: "0",
                backgroundColor: "#fafafa",
            },
            ":active + .segment--material__button": {
                backgroundColor: "#fafafa",
                borderRadius: "0",
                borderWidth: "0",
                fontSize: "14px",
                transition: "none",
                color: "color-mod(black a(38%))",
            },
            ":checked + .segment--material__button": {
                backgroundColor: "#c8c8c8",
                color: "#353535",
                borderRadius: "0",
                borderWidth: "0",
            },
            ".segment--material__item:first-of-type > .segment--material__button, .segment--material__item:last-child > .segment--material__button": {
                borderRadius: "0",
                borderWidth: "0",
            },
            ".tabbar": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                display: "flex",
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                whiteSpace: "nowrap",
                margin: "0",
                padding: "0",
                height: "49px",
                backgroundColor: "#fafafa",
                borderTop: "none",
                width: "100%",
            },
            ".tabbar__item": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                position: "relative",
                webkitBoxFlex: "1",
                webkitFlexGrow: "1",
                flexGrow: "1",
                webkitFlexBasis: "0",
                flexBasis: "0",
                width: "auto",
                borderRadius: "0",
            },
            ".tabbar__item > input": {
                position: "absolute",
                right: "0",
                top: "0",
                left: "0",
                bottom: "0",
                padding: "0",
                border: "0",
                backgroundColor: "transparent",
                zIndex: "1",
                verticalAlign: "top",
                outline: "none",
                width: "100%",
                height: "100%",
                margin: "0",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
            },
            ".tabbar__button": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#999",
                background: "transparent",
                border: "none",
                lineHeight: "49px",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                position: "relative",
                display: "inline-block",
                textDecoration: "none",
                height: "49px",
                letterSpacing: "0",
                verticalAlign: "top",
                backgroundColor: "transparent",
                borderTop: "none",
                width: "100%",
            },
            ".tabbar__icon": {
                fontSize: "24px",
                padding: "0",
                margin: "0",
                lineHeight: "26px",
                display: "block !important",
                height: "28px",
            },
            ".tabbar__label": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                display: "inline-block",
            },
            ".tabbar__badge.notification": {
                verticalAlign: "text-bottom",
                top: "-1px",
                marginLeft: "5px",
                zIndex: "10",
                fontSize: "12px",
                height: "16px",
                minWidth: "16px",
                lineHeight: "16px",
                borderRadius: "8px",
            },
            ".tabbar__icon ~ .tabbar__badge.notification": {
                position: "absolute",
                top: "5px",
                marginLeft: "0",
            },
            ".tabbar__icon + .tabbar__label": {
                display: "block",
                fontSize: "10px",
                lineHeight: "1",
                margin: "0",
                fontWeight: "400",
            },
            ".tabbar__label:first-of-type": {
                fontSize: "16px",
                lineHeight: "49px",
                margin: "0",
                padding: "0",
            },
            ":checked + .tabbar__button": {
                color: "#4a148c",
                backgroundColor: "transparent",
                boxShadow: "none",
                borderTop: "none",
            },
            ".tabbar__button:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".tabbar__button:focus": {
                zIndex: "1",
                borderTop: "none",
                boxShadow: "none",
                outline: "0",
            },
            ".tabbar__content": {
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "49px",
                zIndex: "0",
            },
            ".tabbar--autogrow .tabbar__item": {
                webkitFlexBasis: "auto",
                flexBasis: "auto",
            },
            ".tabbar--top": {
                position: "relative",
                top: "0",
                left: "0",
                right: "0",
                bottom: "auto",
                borderTop: "none",
                borderBottom: "1px solid #ccc",
                paddingTop: "0",
            },
            ".tabbar--top__content": {
                top: "49px",
                left: "0",
                right: "0",
                bottom: "0",
                zIndex: "0",
            },
            ".tabbar--top-border__button": {
                backgroundColor: "transparent",
                borderBottom: "4px solid transparent",
            },
            ":checked + .tabbar--top-border__button": {
                backgroundColor: "transparent",
                borderBottom: "4px solid #4a148c",
            },
            ".tabbar__border": {
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "0",
                height: "4px",
                backgroundColor: theme.palette.primary.main,
            },
            ".tabbar--material": {
                background: "none",
                backgroundColor: theme.palette.background.default,
                borderBottomWidth: "0",
                // boxShadow: "0 4px 2px -2px rgba(0, 0, 0, 0.14), 0 3px 5px -2px rgba(0, 0, 0, 0.12),\r\n    0 5px 1px -4px rgba(0, 0, 0, 0.2)",
            },
            ".tabbar--material__button": {
                backgroundColor: "transparent",
                color: "rgba(255, 255, 255, 1)",
                // color
                borderBottom: "1px solid #f3f5f726",
                textTransform: "uppercase",
                fontSize: "14px",
                fontWeight: "400",
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
            },
            ".tabbar--material__button:after": {
                content: '""',
                display: "block",
                width: "0",
                height: "2px",
                bottom: "0",
                position: "absolute",
                marginTop: "-2px",
                backgroundColor: "rgba(255, 255, 255, 1)",
            },
            ":checked + .tabbar--material__button:after": {
                width: "100%",
                transition: "width 0.2s ease-in-out",
            },
            ":checked + .tabbar--material__button": {
                backgroundColor: "transparent",
                color: "rgba(255, 255, 255, 1)",
            },
            ".tabbar--material__item:not([ripple]):active": {
                backgroundColor: "rgba(49, 49, 58, 0.1)",
            },
            ".tabbar--material__border": {
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 1)",
            },
            ".tabbar--material__icon": {
                fontSize: "22px !important",
                lineHeight: "36px",
            },
            ".tabbar--material__label": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
            },
            ".tabbar--material__label:first-of-type": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "500",
                letterSpacing: "0.015em",
                fontSize: "14px",
            },
            ".tabbar--material__icon + .tabbar--material__label": {
                fontSize: "10px",
            },
            ".toolbar-button": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                padding: "4px 10px",
                letterSpacing: "0",
                color: "#4a148c",
                backgroundColor: "rgba(0, 0, 0, 0)",
                borderRadius: "2px",
                border: "1px solid transparent",
                fontSize: "17px",
                transition: "none",
            },
            ".toolbar-button:active": {
                backgroundColor: "rgba(0, 0, 0, 0)",
                transition: "none",
                opacity: "0.2",
            },
            ".toolbar-button:disabled, .toolbar-button[disabled]": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".toolbar-button:focus": {
                outline: "0",
                transition: "none",
            },
            ".toolbar-button:hover": {
                transition: "none",
            },
            ".toolbar-button--outline": {
                border: "1px solid #4a148c",
                margin: "auto 8px",
                paddingLeft: "6px",
                paddingRight: "6px",
            },
            ".toolbar-button--material": {
                fontSize: "22px",
                color: "rgba(255, 255, 255, 1)",
                display: "inline-block",
                height: "100%",
                margin: "0",
                border: "none",
                borderRadius: "0",
                verticalAlign: "initial",
                transition: "background-color 0.25s linear",
            },
            ".toolbar-button--material:first-of-type": {
                marginLeft: "4px",
            },
            ".toolbar-button--material:last-of-type": {
                marginRight: "4px",
            },
            ".toolbar-button--material:active": {
                opacity: "1",
                transition: "background-color 0.25s linear",
            },
            ".back-button": {
                height: "44px",
                lineHeight: "44px",
                paddingLeft: "8px",
                color: "#4a148c",
                backgroundColor: "rgba(0, 0, 0, 0)",
                display: "inline-block",
            },
            ".back-button:active": {
                opacity: "0.2",
            },
            ".back-button__label": {
                display: "inline-block",
                height: "100%",
                verticalAlign: "top",
                lineHeight: "44px",
                fontSize: "17px",
                fontWeight: "500",
            },
            ".back-button__icon": {
                marginRight: "6px",
                display: "inline-flex",
                fill: "#4a148c",
                webkitBoxAlign: "center",
                webkitAlignItems: "center",
                alignItems: "center",
                height: "100%",
            },
            ".back-button--material": {
                fontSize: "22px",
                color: "rgba(255, 255, 255, 1)",
                display: "inline-block",
                padding: "0 12px",
                height: "100%",
                margin: "0 0 0 4px",
                border: "none",
                borderRadius: "0",
                verticalAlign: "initial",
                lineHeight: "56px",
            },
            ".back-button--material__label": {
                display: "none",
                fontSize: "20px",
            },
            ".back-button--material__icon": {
                display: "inline-flex",
                fill: "rgba(255, 255, 255, 1)",
                webkitBoxAlign: "center",
                webkitAlignItems: "center",
                alignItems: "center",
                height: "100%",
            },
            ".back-button--material:active": {
                opacity: "1",
            },
            ".checkbox": {
                position: "relative",
                display: "inline-block",
                verticalAlign: "top",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                lineHeight: "22px",
            },
            ".checkbox__checkmark": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                position: "relative",
                display: "inline-block",
                verticalAlign: "top",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                height: "22px",
                width: "22px",
                pointerEvents: "none",
            },
            ".checkbox__input, .checkbox__input:checked": {
                position: "absolute",
                right: "0",
                top: "0",
                left: "0",
                bottom: "0",
                padding: "0",
                border: "0",
                backgroundColor: "transparent",
                zIndex: "1",
                verticalAlign: "top",
                outline: "none",
                width: "100%",
                height: "100%",
                margin: "0",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
            },
            ".checkbox__checkmark:before": {
                content: '""',
                position: "absolute",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                width: "22px",
                height: "22px",
                background: "transparent",
                border: "1px solid #c7c7cd",
                borderRadius: "22px",
                left: "0",
            },
            ".checkbox__checkmark:after": {
                content: '""',
                position: "absolute",
                top: "7px",
                left: "5px",
                width: "11px",
                height: "5px",
                background: "transparent",
                border: "2px solid #fff",
                borderWidth: "1px",
                borderTop: "none",
                borderRight: "none",
                borderRadius: "0",
                webkitTransform: "rotate(-45deg)",
                transform: "rotate(-45deg)",
                opacity: "0",
            },
            ":checked + .checkbox__checkmark:before": {
                background: "#4a148c",
                border: "none",
            },
            ":checked + .checkbox__checkmark:after": {
                opacity: "1",
            },
            ":disabled + .checkbox__checkmark": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ":disabled:active + .checkbox__checkmark:before": {
                background: "transparent",
            },
            ".checkbox--noborder": {
                position: "relative",
                display: "inline-block",
                verticalAlign: "top",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                lineHeight: "22px",
            },
            ".checkbox--noborder__input": {
                position: "absolute",
                right: "0",
                top: "0",
                left: "0",
                bottom: "0",
                padding: "0",
                border: "0",
                backgroundColor: "transparent",
                zIndex: "1",
                verticalAlign: "top",
                outline: "none",
                width: "100%",
                height: "100%",
                margin: "0",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
            },
            ".checkbox--noborder__checkmark": {
                position: "relative",
                display: "inline-block",
                verticalAlign: "top",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                width: "22px",
                height: "22px",
                background: "transparent",
                border: "none",
            },
            ".checkbox--noborder__checkmark:before": {
                content: '""',
                position: "absolute",
                width: "22px",
                height: "22px",
                background: "transparent",
                border: "none",
                borderRadius: "22px",
                left: "0",
            },
            ".checkbox--noborder__checkmark:after": {
                content: '""',
                position: "absolute",
                top: "7px",
                left: "4px",
                opacity: "0",
                width: "11px",
                height: "4px",
                background: "transparent",
                border: "2px solid #4a148c",
                borderTop: "none",
                borderRight: "none",
                borderRadius: "0",
                webkitTransform: "rotate(-45deg)",
                transform: "rotate(-45deg)",
            },
            ":checked + .checkbox--noborder__checkmark:before": {
                background: "transparent",
                border: "none",
            },
            ":checked + .checkbox--noborder__checkmark:after": {
                opacity: "1",
            },
            ":focus + .checkbox--noborder__checkmark:before": {
                border: "none",
            },
            ":disabled + .checkbox--noborder__checkmark": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ":disabled:active + .checkbox--noborder__checkmark:before": {
                background: "transparent",
                border: "none",
            },
            ".checkbox--material": {
                lineHeight: "18px",
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                overflow: "visible",
            },
            ".checkbox--material__checkmark": {
                width: "18px",
                height: "18px",
            },
            ".checkbox--material__checkmark:before": {
                borderRadius: "2px",
                height: "18px",
                width: "18px",
                border: "2px solid #717171",
                transition: "background-color 0.1s linear 0.2s, border-color 0.1s linear 0.2s",
                backgroundColor: "transparent",
            },
            ":checked + .checkbox--material__checkmark:before": {
                border: "2px solid #4a148c",
                backgroundColor: theme.palette.primary.main,
                transition: "background-color 0.1s linear, border-color 0.1s linear",
            },
            ".checkbox--material__checkmark:after": {
                borderColor: "#ffffff",
                transition: "transform 0.2s ease 0, -webkit-transform 0.2s ease 0",
                width: "10px",
                height: "5px",
                top: "4px",
                left: "3px",
                webkitTransform: "scale(0) rotate(-45deg)",
                transform: "scale(0) rotate(-45deg)",
                borderWidth: "2px",
            },
            ":checked + .checkbox--material__checkmark:after": {
                transition: "transform 0.2s ease 0.2s, -webkit-transform 0.2s ease 0.2s",
                width: "10px",
                height: "5px",
                top: "4px",
                left: "3px",
                webkitTransform: "scale(1) rotate(-45deg)",
                transform: "scale(1) rotate(-45deg)",
                borderWidth: "2px",
            },
            ".checkbox--material__input:before": {
                content: '""',
                opacity: "0",
                position: "absolute",
                top: "0",
                left: "0",
                width: "18px",
                height: "18px",
                boxShadow: "0 0 0 11px #717171",
                boxSizing: "border-box",
                borderRadius: "50%",
                backgroundColor: "#717171",
                pointerEvents: "none",
                display: "block",
                webkitTransform: "scale3d(0.2, 0.2, 0.2)",
                transform: "scale3d(0.2, 0.2, 0.2)",
                transition: "opacity 0.25s ease-out, transform 0.1s ease-out, -webkit-transform 0.1s ease-out",
            },
            ".checkbox--material__input:checked:before": {
                boxShadow: "0 0 0 11px #4a148c",
                backgroundColor: theme.palette.primary.main,
            },
            ".checkbox--material__input:active:before": {
                opacity: "0.15",
                webkitTransform: "scale3d(1, 1, 1)",
                transform: "scale3d(1, 1, 1)",
            },
            ":disabled + .checkbox--material__checkmark": {
                opacity: "1",
            },
            ":disabled + .checkbox--material__checkmark:before": {
                borderColor: "#afafaf",
            },
            ":disabled:checked + .checkbox--material__checkmark:before": {
                backgroundColor: "#afafaf",
            },
            ":disabled:checked + .checkbox--material__checkmark:after": {
                borderColor: "#ffffff",
            },
            ".radio-button__input": {
                position: "absolute",
                right: "0",
                top: "0",
                left: "0",
                bottom: "0",
                padding: "0",
                border: "0",
                backgroundColor: "transparent",
                zIndex: "1",
                verticalAlign: "top",
                outline: "none",
                width: "100%",
                height: "100%",
                margin: "0",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
            },
            ".radio-button__input:active, .radio-button__input:focus": {
                outline: "0",
                webkitTapHighlightColor: "rgba(0, 0, 0, 0)",
            },
            ".radio-button": {
                position: "relative",
                display: "inline-block",
                verticalAlign: "top",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                lineHeight: "24px",
                textAlign: "left",
            },
            ".radio-button__checkmark:before": {
                content: '""',
                position: "absolute",
                borderRadius: "22px",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                width: "22px",
                height: "22px",
                background: "transparent",
                border: "none",
                left: "0",
            },
            ".radio-button__checkmark": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                position: "relative",
                display: "inline-block",
                verticalAlign: "top",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                width: "24px",
                height: "24px",
                background: "transparent",
                pointerEvents: "none",
            },
            ".radio-button__checkmark:after": {
                content: '""',
                position: "absolute",
                top: "7px",
                left: "4px",
                opacity: "0",
                width: "11px",
                height: "4px",
                background: "transparent",
                border: "2px solid #4a148c",
                borderTop: "none",
                borderRight: "none",
                borderRadius: "0",
                webkitTransform: "rotate(-45deg)",
                transform: "rotate(-45deg)",
            },
            ":checked + .radio-button__checkmark": {
                background: "rgba(0, 0, 0, 0)",
            },
            ":checked + .radio-button__checkmark:after": {
                opacity: "1",
            },
            ":checked + .radio-button__checkmark:before": {
                background: "transparent",
                border: "none",
            },
            ":disabled + .radio-button__checkmark": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".radio-button--material": {
                lineHeight: "22px",
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
            },
            ".radio-button--material__input:before": {
                content: '""',
                position: "absolute",
                top: "0",
                left: "0",
                opacity: "0",
                width: "20px",
                height: "20px",
                boxShadow: "0 0 0 14px #717171",
                border: "none",
                boxSizing: "border-box",
                borderRadius: "50%",
                backgroundColor: "#717171",
                pointerEvents: "none",
                display: "block",
                webkitTransform: "scale3d(0.2, 0.2, 0.2)",
                transform: "scale3d(0.2, 0.2, 0.2)",
                transition: "opacity 0.25s ease-out, transform 0.1s ease-out, -webkit-transform 0.1s ease-out",
            },
            ".radio-button--material__input:checked:before": {
                boxShadow: "0 0 0 14px #4a148c",
                backgroundColor: theme.palette.primary.main,
            },
            ".radio-button--material__input:active:before": {
                opacity: "0.15",
                webkitTransform: "scale3d(1, 1, 1)",
                transform: "scale3d(1, 1, 1)",
            },
            ".radio-button--material__checkmark": {
                width: "20px",
                height: "20px",
                overflow: "visible",
            },
            ".radio-button--material__checkmark:before": {
                background: "transparent",
                border: "2px solid #717171",
                boxSizing: "border-box",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                transition: "border 0.2s ease",
            },
            ".radio-button--material__checkmark:after": {
                transition: "background 0.2s ease, transform 0.2s ease, -webkit-transform 0.2s ease",
                top: "5px",
                left: "5px",
                width: "10px",
                height: "10px",
                border: "none",
                borderRadius: "50%",
                webkitTransform: "scale(0)",
                transform: "scale(0)",
            },
            ":checked + .radio-button--material__checkmark:before": {
                background: "transparent",
                border: "2px solid #4a148c",
            },
            ".radio-button--material__input + .radio-button__checkmark:after": {
                background: "#717171",
                opacity: "1",
                webkitTransform: "scale(0)",
                transform: "scale(0)",
            },
            ":checked + .radio-button--material__checkmark:after": {
                opacity: "1",
                background: "#4a148c",
                webkitTransform: "scale(1)",
                transform: "scale(1)",
            },
            ":disabled + .radio-button--material__checkmark": {
                opacity: "1",
            },
            ":disabled + .radio-button--material__checkmark:after": {
                backgroundColor: "#afafaf",
                borderColor: "#afafaf",
            },
            ":disabled + .radio-button--material__checkmark:before": {
                borderColor: "#afafaf",
            },
            ".list": {
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "inherit",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                listStyleType: "none",
                textAlign: "left",
                display: "block",
                webkitOverflowScrolling: "touch",
                overflow: "hidden",
                backgroundImage: "linear-gradient(#ccc, #ccc), linear-gradient(#ccc, #ccc)",
                backgroundSize: "100% 1px, 100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom, top",
                backgroundColor: "#fff",
            },
            ".list-item": {
                position: "relative",
                width: "100%",
                listStyle: "none",
                boxSizing: "border-box",
                display: "flex",
                webkitBoxOrient: "horizontal",
                webkitBoxDirection: "normal",
                webkitFlexDirection: "row",
                flexDirection: "row",
                webkitBoxPack: "start",
                webkitJustifyContent: "flex-start",
                justifyContent: "flex-start",
                webkitBoxAlign: "center",
                webkitAlignItems: "center",
                alignItems: "center",
                padding: "0 0 0 14px",
                margin: "0 0 -1px 0",
                // color: "#1f1f21",
                color: theme.palette.text.primary,
                transition: "background-color 0.2s linear",
            },
            ".list-item__top": {
                display: "flex",
                webkitBoxOrient: "horizontal",
                webkitBoxDirection: "normal",
                webkitFlexDirection: "row",
                flexDirection: "row",
                webkitBoxPack: "start",
                webkitJustifyContent: "flex-start",
                justifyContent: "flex-start",
                webkitBoxAlign: "center",
                webkitAlignItems: "center",
                alignItems: "center",
                webkitBoxOrdinalGroup: "1",
                webkitOrder: "0",
                order: "0",
                width: "100%",
            },
            ".list-item--expandable": {
                display: "flex",
                webkitBoxOrient: "vertical",
                webkitBoxDirection: "normal",
                webkitFlexDirection: "column",
                flexDirection: "column",
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
                backgroundPositionX: "14px",
            },
            ".list-item__expandable-content": {
                display: "none",
                width: "100%",
                padding: "12px 14px 12px 0",
                boxSizing: "border-box",
                webkitBoxOrdinalGroup: "2",
                webkitOrder: "1",
                order: "1",
                overflow: "hidden",
            },
            ".list-item.expanded > .list-item__expandable-content": {
                display: "block",
                height: "auto",
            },
            ".list-item__left": {
                boxSizing: "border-box",
                display: "flex",
                padding: "12px 14px 12px 0",
                webkitBoxOrdinalGroup: "1",
                webkitOrder: "0",
                order: "0",
                webkitBoxAlign: "center",
                webkitAlignItems: "center",
                alignItems: "center",
                webkitAlignSelf: "stretch",
                alignSelf: "stretch",
                lineHeight: "1.2em",
                minHeight: "44px",
            },
            ".list-item__left:empty": {
                width: "0",
                minWidth: "0",
                padding: "0",
                margin: "0",
            },
            ".list-item__center": {
                boxSizing: "border-box",
                display: "flex",
                webkitBoxFlex: "1",
                webkitFlexGrow: "1",
                flexGrow: "1",
                webkitFlexWrap: "wrap",
                flexWrap: "wrap",
                webkitBoxOrient: "horizontal",
                webkitBoxDirection: "normal",
                webkitFlexDirection: "row",
                flexDirection: "row",
                webkitBoxOrdinalGroup: "2",
                webkitOrder: "1",
                order: "1",
                marginRight: "auto",
                webkitBoxAlign: "center",
                webkitAlignItems: "center",
                alignItems: "center",
                webkitAlignSelf: "stretch",
                alignSelf: "stretch",
                marginLeft: "0",
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
                padding: "12px 6px 12px 0",
                lineHeight: "1.2em",
                minHeight: "44px",
            },
            ".list-item__right": {
                boxSizing: "border-box",
                display: "flex",
                marginLeft: "auto",
                padding: "12px 12px 12px 0",
                webkitBoxOrdinalGroup: "3",
                webkitOrder: "2",
                order: "2",
                webkitBoxAlign: "center",
                webkitAlignItems: "center",
                alignItems: "center",
                webkitAlignSelf: "stretch",
                alignSelf: "stretch",
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
                lineHeight: "1.2em",
                minHeight: "44px",
            },
            ".list-header": {
                margin: "0",
                listStyle: "none",
                textAlign: "left",
                display: "block",
                boxSizing: "border-box",
                padding: "0 0 0 15px",
                fontSize: "12px",
                fontWeight: "500",
                color: "#1f1f21",
                minHeight: "24px",
                lineHeight: "25px",
                textTransform: "uppercase",
                position: "relative",
                backgroundColor: "#eee",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            },
            ".list--noborder": {
                borderTop: "none",
                borderBottom: "none",
                backgroundImage: "none",
            },
            ".list-item--tappable:active": {
                transition: "none",
                backgroundColor: "#d9d9d9",
            },
            ".list--inset": {
                margin: "0 8px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                backgroundImage: "none",
            },
            ".list-item__label": {
                fontSize: "14px",
                padding: "0 4px",
                opacity: "0.6",
            },
            ".list-item__title": {
                webkitFlexBasis: "100%",
                flexBasis: "100%",
                webkitAlignSelf: "flex-end",
                alignSelf: "flex-end",
                webkitBoxOrdinalGroup: "1",
                webkitOrder: "0",
                order: "0",
            },
            ".list-item__subtitle": {
                opacity: "0.75",
                fontSize: "14px",
                webkitBoxOrdinalGroup: "2",
                webkitOrder: "1",
                order: "1",
                webkitFlexBasis: "100%",
                flexBasis: "100%",
                webkitAlignSelf: "flex-start",
                alignSelf: "flex-start",
            },
            ".list-item__thumbnail": {
                width: "40px",
                height: "40px",
                borderRadius: "6px",
                display: "block",
                margin: "0",
            },
            ".list-item__icon": {
                fontSize: "22px",
                padding: "0 6px",
            },
            ".list--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                backgroundImage: "none",
                backgroundColor: theme.palette.background.default,
            },
            ".list-item--material": {
                border: "0",
                padding: "0 0 0 16px",
                lineHeight: "normal",
            },
            ".list-item--material__subtitle": {
                marginTop: "4px",
            },
            ".list-item--material:first-of-type": {
                boxShadow: "none",
            },
            ".list-item--material__left": {
                padding: "14px 0",
                minWidth: "56px",
                lineHeight: "1",
                minHeight: "48px",
            },
            ".list-item--material__left:empty, .list-item--material__center": {
                padding: "14px 6px 14px 0",
                borderColor: "#eee",
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: `linear-gradient(0deg, ${theme.palette.divider}, ${theme.palette.divider} 100%)`,
                minHeight: "48px",
            },
            ".list-item--material__right": {
                padding: "14px 16px 14px 0",
                lineHeight: "1",
                borderColor: "#eee",
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: `linear-gradient(0deg, ${theme.palette.divider}, ${theme.palette.divider} 100%)`,
                minHeight: "48px",
            },
            ".list-item--material.list-item--expandable": {
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: `linear-gradient(0deg, ${theme.palette.divider}, ${theme.palette.divider} 100%)`,
                backgroundPositionX: "16px",
            },
            ".list-item--material.list-item--longdivider, .list-item--material.list-item--expandable.list-item--longdivider": {
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: `linear-gradient(0deg, ${theme.palette.divider}, ${theme.palette.divider} 100%)`,
            },
            ".list-header--material": {
                background: theme.palette.background.default,
                border: "none",
                fontSize: "14px",
                textTransform: "none",
                margin: "-1px 0 0 0",
                color: "#757575",
                fontWeight: "500",
                padding: "8px 16px",
            },
            ".list-header--material:not(:first-of-type)": {
                borderTop: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
                backgroundImage: `linear-gradient(0deg, ${theme.palette.divider}, ${theme.palette.divider} 100%)`,
                paddingTop: "16px",
            },
            ".list-item--material__thumbnail": {
                width: "40px",
                height: "40px",
                borderRadius: "100%",
            },
            ".list-item--material__icon": {
                fontSize: "20px",
                padding: "0 4px",
            },
            ".list-item--chevron:before, .list-item__expand-chevron": {
                borderRight: "2px solid #c7c7cc",
                borderBottom: "2px solid #c7c7cc",
                width: "7px",
                height: "7px",
                backgroundColor: "transparent",
                zIndex: "5",
            },
            ".list-item--chevron:before": {
                position: "absolute",
                content: '""',
                right: "16px",
                top: "50%",
                webkitTransform: "translateY(-50%) rotate(-45deg)",
                transform: "translateY(-50%) rotate(-45deg)",
            },
            ".list-item__expand-chevron": {
                webkitTransform: "rotate(45deg)",
                transform: "rotate(45deg)",
                margin: "1px",
            },
            ".list-item--expandable.expanded .list-item__expand-chevron": {
                webkitTransform: "rotate(225deg)",
                transform: "rotate(225deg)",
            },
            ".list-item--chevron__right": {
                paddingRight: "30px",
            },
            ".list-item--nodivider__center, .list-item--nodivider__right, .list-item--nodivider.list-item--expandable, .list-item--expandable .list-item__center, .list-item--expandable .list-item__right": {
                border: "none",
                backgroundImage: "none",
            },
            ".list-item--longdivider": {
                borderBottom: "none",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, #ccc, #ccc 100%)",
            },
            ".list-item--longdivider:last-of-type": {
                border: "none",
                backgroundImage: "none",
            },
            ".list-item--longdivider__center": {
                border: "none",
                backgroundImage: "none",
            },
            ".list-item--longdivider__right": {
                border: "none",
                backgroundImage: "none",
            },
            ".list-title": {
                padding: "0 0 0 16px",
                margin: "0",
                font: "inherit",
                color: "#6d6d72",
                background: "transparent",
                border: "none",
                lineHeight: "24px",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "500",
                display: "block",
                textAlign: "left",
                boxSizing: "border-box",
                fontSize: "13px",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
            },
            ".list-title--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "500",
                color: "#757575",
                fontSize: "14px",
                margin: "0",
                padding: "12px 0 12px 16px",
                lineHeight: "24px",
            },
            ".search-input": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0 8px 0 28px",
                margin: "0",
                "border-radius": "8px",
                font: "inherit",
                color: "#1f1f21",
                background: "transparent",
                border: "none",
                verticalAlign: "top",
                outline: "none",
                lineHeight: "1.3",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                webkitAppearance: "textfield",
                mozAppearance: "textfield",
                appearance: "textfield",
                height: "28px",
                fontSize: "14px",
                backgroundColor: "rgba(3, 3, 3, 0.09)",
                boxShadow: "none",
                borderRadius: "5.5px",
                backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTNweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTMgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQyICgzNjc4MSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+aW9zLXNlYXJjaC1pbnB1dC1pY29uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9ImNvbXBvbmVudHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJpb3Mtc2VhcmNoLWlucHV0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNDguMDAwMDAwLCAtNDMuMDAwMDAwKSIgZmlsbD0iIzdBNzk3QiI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi45OTcyNDgyLDE1LjUwNDE0NjYgQzE3LjA3NzM2NTcsMTUuNTQwNTkzOCAxNy4xNTIyNzMxLDE1LjU5MTYxMjkgMTcuMjE3NzUxNiwxNS42NTcwOTE0IEwyMC42NDk5OTEsMTkuMDg5MzMwOCBDMjAuOTQ0ODQ0OSwxOS4zODQxODQ3IDIwLjk0ODQ3NjQsMTkuODU4NjA2IDIwLjY1MzU0MTIsMjAuMTUzNTQxMiBDMjAuMzYwNjQ4LDIwLjQ0NjQzNDQgMTkuODgxMjcxNiwyMC40NDE5MzE3IDE5LjU4OTMzMDgsMjAuMTQ5OTkxIEwxNi4xNTcwOTE0LDE2LjcxNzc1MTYgQzE2LjA5MTM3LDE2LjY1MjAzMDEgMTYuMDQwMTE3MSwxNi41NzczODc0IDE2LjAwMzQxNDEsMTYuNDk3Nzk5NSBDMTUuMTY3MTY5NCwxNy4xMjcwNDExIDE0LjEyNzEzOTMsMTcuNSAxMywxNy41IEMxMC4yMzg1NzYzLDE3LjUgOCwxNS4yNjE0MjM3IDgsMTIuNSBDOCw5LjczODU3NjI1IDEwLjIzODU3NjMsNy41IDEzLDcuNSBDMTUuNzYxNDIzNyw3LjUgMTgsOS43Mzg1NzYyNSAxOCwxMi41IEMxOCwxMy42Mjc0Njg1IDE3LjYyNjgyMzIsMTQuNjY3Nzc2OCAxNi45OTcyNDgyLDE1LjUwNDE0NjYgWiBNMTMsMTYuNSBDMTUuMjA5MTM5LDE2LjUgMTcsMTQuNzA5MTM5IDE3LDEyLjUgQzE3LDEwLjI5MDg2MSAxNS4yMDkxMzksOC41IDEzLDguNSBDMTAuNzkwODYxLDguNSA5LDEwLjI5MDg2MSA5LDEyLjUgQzksMTQuNzA5MTM5IDEwLjc5MDg2MSwxNi41IDEzLDE2LjUgWiIgaWQ9Imlvcy1zZWFyY2gtaW5wdXQtaWNvbiI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=")',
                backgroundPosition: "8px center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "13px",
                display: "inline-block",
                textIndent: "0",
            },
            ".search-input::-webkit-search-cancel-button": {
                webkitAppearance: "textfield",
                appearance: "textfield",
                display: "none",
            },
            ".search-input::-webkit-search-decoration": {
                display: "none",
            },
            ".search-input:focus": {
                outline: "none",
            },
            ".search-input::-webkit-input-placeholder": {
                color: "#7a797b",
                fontSize: "14px",
                textIndent: "0",
            },
            ".search-input:-ms-input-placeholder": {
                color: "#7a797b",
                fontSize: "14px",
                textIndent: "0",
            },
            ".search-input::-ms-input-placeholder": {
                color: "#7a797b",
                fontSize: "14px",
                textIndent: "0",
            },
            ".search-input::placeholder": {
                color: "#7a797b",
                fontSize: "14px",
                textIndent: "0",
            },
            ".search-input:placeholder-shown": {},
            ".search-input:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".search-input--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                // borderRadius: "8px",
                height: "48px",
                backgroundColor: "#fafafa",
                backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxOHB4IiB2aWV3Qm94PSIwIDAgMTggMTgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5TaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJhbmRyb2lkLXNlYXJjaC1pbnB1dC1pY29uIiBmaWxsLXJ1bGU9Im5vbnplcm8iIGZpbGw9IiM4OTg5ODkiPgogICAgICAgICAgICA8ZyBpZD0iY29tcG9uZW50cyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0ibWF0ZXJpYWwtc2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0ic2VhcmNoIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hdGVyaWFsL0ljb25zLWJsYWNrL3NlYXJjaCI+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTIuNTAyLDYuNDkxIEwxMS43MDgsNi40OTEgTDExLjQzMiw2Ljc2NSBDMTIuNDA3LDcuOTAyIDEzLDkuMzc2IDEzLDEwLjk5MSBDMTMsMTQuNTgxIDEwLjA5LDE3LjQ5MSA2LjUsMTcuNDkxIEMyLjkxLDE3LjQ5MSAwLDE0LjU4MSAwLDEwLjk5MSBDMCw3LjQwMSAyLjkxLDQuNDkxIDYuNSw0LjQ5MSBDOC4xMTUsNC40OTEgOS41ODgsNS4wODMgMTAuNzI1LDYuMDU3IEwxMS4wMDEsNS43ODMgTDExLjAwMSw0Ljk5MSBMMTUuOTk5LDAgTDE3LjQ5LDEuNDkxIEwxMi41MDIsNi40OTEgTDEyLjUwMiw2LjQ5MSBaIE02LjUsNi40OTEgQzQuMDE0LDYuNDkxIDIsOC41MDUgMiwxMC45OTEgQzIsMTMuNDc2IDQuMDE0LDE1LjQ5MSA2LjUsMTUuNDkxIEM4Ljk4NSwxNS40OTEgMTEsMTMuNDc2IDExLDEwLjk5MSBDMTEsOC41MDUgOC45ODUsNi40OTEgNi41LDYuNDkxIEw2LjUsNi40OTEgWiIgaWQ9IlNoYXBlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4Ljc0NTAwMCwgOC43NDU1MDApIHNjYWxlKC0xLCAxKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtOC43NDUwMDAsIC04Ljc0NTUwMCkgIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==")',
                backgroundSize: "18px",
                backgroundPosition: "18px center",
                fontSize: "14px",
                padding: "0 24px 0 64px",
                // boxShadow:
                //   "0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24),\r\n    0 1px 0 0 rgba(255, 255, 255, 0.06) inset",
                borderRadius: 4,
                border: "1px solid rgba(0, 0, 0, 0.12)",
            },
            ".text-input": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#1f1f21",
                background: "transparent",
                border: "none",
                verticalAlign: "top",
                outline: "none",
                lineHeight: "1",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                backgroundColor: "transparent",
                letterSpacing: "0",
                boxShadow: "none",
                width: "auto",
                fontSize: "16px",
                height: "31px",
            },
            ".text-input::-ms-clear": {
                display: "none",
            },
            ".text-input:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".text-input::-webkit-input-placeholder": {
                color: "#999",
            },
            ".text-input:-ms-input-placeholder": {
                color: "#999",
            },
            ".text-input::-ms-input-placeholder": {
                color: "#999",
            },
            ".text-input::placeholder": {
                color: "#999",
            },
            ".text-input:disabled::-webkit-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".text-input:disabled:-ms-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".text-input:disabled::-ms-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".text-input:disabled::placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".text-input:invalid": {
                border: "none",
                backgroundColor: "transparent",
                color: "#1f1f21",
            },
            ".text-input--underbar": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#1f1f21",
                background: "transparent",
                border: "none",
                verticalAlign: "top",
                outline: "none",
                lineHeight: "1",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                backgroundColor: "transparent",
                letterSpacing: "0",
                boxShadow: "none",
                width: "auto",
                fontSize: "16px",
                height: "31px",
                borderBottom: "1px solid #ccc",
                borderRadius: "0",
            },
            ".text-input--underbar:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
                border: "none",
                backgroundColor: "transparent",
                borderBottom: "1px solid #ccc",
            },
            ".text-input--underbar:disabled::-webkit-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".text-input--underbar:disabled:-ms-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".text-input--underbar:disabled::-ms-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".text-input--underbar:disabled::placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".text-input--underbar:invalid": {
                border: "none",
                backgroundColor: "transparent",
                color: "#1f1f21",
                borderBottom: "1px solid #ccc",
            },
            ".text-input--material": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#212121",
                background: "transparent",
                border: "none",
                verticalAlign: "middle",
                outline: "none",
                lineHeight: "1",
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                backgroundImage: "linear-gradient(to top, transparent 1px, #afafaf 1px)",
                backgroundSize: "100% 2px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom",
                backgroundColor: "transparent",
                fontSize: "16px",
                paddingBottom: "2px",
                borderRadius: "0",
                height: "24px",
                webkitTransform: "translate3d(0, 0, 0)",
            },
            ".text-input--material__label": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                color: "#afafaf",
                position: "absolute",
                left: "0",
                top: "2px",
                fontSize: "16px",
                pointerEvents: "none",
            },
            ".text-input--material__label--active": {
                color: "#3d5afe",
                webkitTransform: "translate(0, -75%) scale(0.75)",
                transform: "translate(0, -75%) scale(0.75)",
                webkitTransformOrigin: "left top",
                transformOrigin: "left top",
                transition: "transform 0.1s ease-in, color 0.1s ease-in, -webkit-transform 0.1s ease-in",
            },
            ".text-input--material:focus": {
                backgroundImage: "linear-gradient(#3d5afe, #3d5afe),\r\n    linear-gradient(to top, transparent 1px, #afafaf 1px)",
                webkitAnimation: "material-text-input-animate 0.3s forwards",
                animation: "material-text-input-animate 0.3s forwards",
            },
            ".text-input--material::-webkit-input-placeholder": {
                color: "#afafaf",
                lineHeight: "20px",
            },
            ".text-input--material:-ms-input-placeholder": {
                color: "#afafaf",
                lineHeight: "20px",
            },
            ".text-input--material::-ms-input-placeholder": {
                color: "#afafaf",
                lineHeight: "20px",
            },
            ".text-input--material::placeholder": {
                color: "#afafaf",
                lineHeight: "20px",
            },
            "@keyframes material-text-input-animate": {
                "0%": {
                    backgroundSize: "0% 2px, 100% 2px",
                },
                "100%": {
                    backgroundSize: "100% 2px, 100% 2px",
                },
            },
            ".textarea": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "5px 5px 5px 5px",
                margin: "0",
                font: "inherit",
                color: "#1f1f21",
                background: "transparent",
                border: "1px solid #ccc",
                lineHeight: "normal",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                verticalAlign: "top",
                resize: "none",
                outline: "none",
                fontSize: "16px",
                borderRadius: "4px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                letterSpacing: "0",
                boxShadow: "none",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
                width: "auto",
            },
            ".textarea:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".textarea::-webkit-input-placeholder": {
                color: "#999",
            },
            ".textarea:-ms-input-placeholder": {
                color: "#999",
            },
            ".textarea::-ms-input-placeholder": {
                color: "#999",
            },
            ".textarea::placeholder": {
                color: "#999",
            },
            ".textarea--transparent": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "5px 5px 5px 5px",
                margin: "0",
                font: "inherit",
                color: "#1f1f21",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                verticalAlign: "top",
                resize: "none",
                outline: "none",
                paddingLeft: "0",
                paddingRight: "0",
                fontSize: "16px",
                borderRadius: "4px",
                backgroundColor: "transparent",
                letterSpacing: "0",
                boxShadow: "none",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
                width: "auto",
            },
            ".textarea--transparent:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
            },
            ".textarea--transparent::-webkit-input-placeholder": {
                color: "#999",
            },
            ".textarea--transparent:-ms-input-placeholder": {
                color: "#999",
            },
            ".textarea--transparent::-ms-input-placeholder": {
                color: "#999",
            },
            ".textarea--transparent::placeholder": {
                color: "#999",
            },
            ".dialog": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "auto auto",
                font: "inherit",
                color: "inherit",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                position: "absolute",
                top: "50%",
                left: "50%",
                webkitTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)",
                overflow: "hidden",
                minWidth: "270px",
                minHeight: "100px",
                textAlign: "left",
            },
            ".dialog-container": {
                height: "inherit",
                minHeight: "inherit",
                overflow: "hidden",
                borderRadius: "4px",
                backgroundColor: "#f4f4f4",
                webkitMaskImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC")',
                color: "#1f1f21",
            },
            ".dialog-mask": {
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "inherit",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                position: "absolute",
                top: "0",
                right: "0",
                left: "0",
                bottom: "0",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
            ".dialog--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                textAlign: "left",
                boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\r\n    0 8px 10px -5px rgba(0, 0, 0, 0.4)",
            },
            ".dialog-container--material": {
                borderRadius: "8px",
                backgroundColor: "#ffffff",
                color: "#1f1f21",
            },
            ".dialog-mask--material": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
            ".alert-dialog": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "auto",
                font: "inherit",
                color: "#1f1f21",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                position: "absolute",
                top: "50%",
                left: "50%",
                webkitTransform: "translate(-50%, -50%)",
                transform: "translate(-50%, -50%)",
                width: "270px",
                backgroundColor: "#f4f4f4",
                borderRadius: "8px",
                overflow: "visible",
                maxWidth: "95%",
            },
            ".alert-dialog-container": {
                height: "inherit",
                paddingTop: "16px",
                overflow: "hidden",
            },
            ".alert-dialog-title": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "500",
                fontSize: "17px",
                padding: "0 8px",
                textAlign: "center",
                color: "#1f1f21",
            },
            ".alert-dialog-content": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "4px 12px 8px",
                fontSize: "14px",
                minHeight: "36px",
                textAlign: "center",
                color: "#1f1f21",
            },
            ".alert-dialog-footer": {
                width: "100%",
            },
            ".alert-dialog-button": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0 8px",
                margin: "0",
                font: "inherit",
                color: "#4a148c",
                background: "transparent",
                border: "none",
                lineHeight: "44px",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textDecoration: "none",
                letterSpacing: "0",
                verticalAlign: "middle",
                borderTop: "1px solid #ddd",
                fontSize: "16px",
                display: "block",
                width: "100%",
                backgroundColor: "transparent",
                textAlign: "center",
                height: "44px",
                outline: "none",
            },
            ".alert-dialog-button:active": {
                backgroundColor: "rgba(0, 0, 0, 0.05)",
            },
            ".alert-dialog-button--primal": {
                fontWeight: "500",
            },
            ".alert-dialog-footer--rowfooter": {
                whiteSpace: "nowrap",
                display: "flex",
                webkitFlexWrap: "wrap",
                flexWrap: "wrap",
            },
            ".alert-dialog-button--rowfooter": {
                webkitBoxFlex: "1",
                webkitFlex: "1",
                flex: "1",
                display: "block",
                width: "100%",
                borderLeft: "1px solid #ddd",
            },
            ".alert-dialog-button--rowfooter:first-of-type": {
                borderLeft: "none",
            },
            ".alert-dialog-mask": {
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "inherit",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                position: "absolute",
                top: "0",
                right: "0",
                left: "0",
                bottom: "0",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
            },
            ".alert-dialog--material": {
                borderRadius: "25px",
                backgroundColor: "#ffffff",
            },
            ".alert-dialog-container--material": {
                borderRadius: "25px",
                padding: "22px 0 0 0",
                boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\r\n    0 8px 10px -5px rgba(0, 0, 0, 0.4)",
            },
            ".alert-dialog-title--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "500",
                textAlign: "left",
                fontSize: "20px",
                padding: "0 24px",
                color: "#31313a",
            },
            ".alert-dialog-content--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                textAlign: "left",
                fontSize: "16px",
                lineHeight: "20px",
                padding: "0 24px",
                margin: "24px 0 10px 0",
                minHeight: "0",
                color: "rgba(49, 49, 58, 0.85)",
            },
            ".alert-dialog-footer--material": {
                display: "block",
                padding: "0",
                height: "52px",
                boxSizing: "border-box",
                margin: "0",
                lineHeight: "1",
            },
            ".alert-dialog-button--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "500",
                textTransform: "uppercase",
                display: "inline-block",
                width: "auto",
                float: "right",
                background: "none",
                border: "none",
                borderRadius: "2px",
                fontSize: "14px",
                outline: "none",
                height: "36px",
                lineHeight: "36px",
                padding: "0 8px",
                margin: "8px 8px 8px 0",
                boxSizing: "border-box",
                minWidth: "50px",
                color: "#4a148c",
            },
            ".alert-dialog-button--material:active": {
                backgroundColor: "initial",
            },
            ".alert-dialog-button--rowfooter--material, .alert-dialog-button--rowfooter--material:first-of-type": {
                border: "0",
            },
            ".alert-dialog-button--primal--material": {
                fontWeight: "500",
            },
            ".alert-dialog-mask--material": {
                backgroundColor: "rgba(0, 0, 0, 0.3)",
            },
            ".popover": {
                position: "absolute",
                zIndex: "20001",
            },
            ".popover--bottom": {
                bottom: "0",
            },
            ".popover--top": {
                top: "0",
            },
            ".popover--left": {
                left: "0",
            },
            ".popover--right": {
                right: "0",
            },
            ".popover-mask": {
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                position: "absolute",
                zIndex: "19999",
            },
            ".popover__content": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#1f1f21",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                display: "block",
                width: "220px",
                overflow: "auto",
                minHeight: "100px",
                maxHeight: "100%",
                backgroundColor: "white",
                borderRadius: "8px",
                pointerEvents: "auto",
            },
            ".popover--top__content": {},
            ".popover--bottom__content": {},
            ".popover--left__content": {},
            ".popover--right__content": {},
            ".popover__arrow": {
                position: "absolute",
                width: "18px",
                height: "18px",
                webkitTransformOrigin: "50% 50% 0",
                transformOrigin: "50% 50% 0",
                backgroundColor: "transparent",
                backgroundImage: "linear-gradient(45deg, white, white 50%, transparent 50%)",
                borderRadius: "0 0 0 4px",
                margin: "0",
                zIndex: "20001",
            },
            ".popover--bottom__arrow": {
                webkitTransform: "translateY(6px) translateX(-9px) rotate(-45deg)",
                transform: "translateY(6px) translateX(-9px) rotate(-45deg)",
                bottom: "0",
                marginRight: "-18px",
            },
            ".popover--top__arrow": {
                webkitTransform: "translateY(-6px) translateX(-9px) rotate(135deg)",
                transform: "translateY(-6px) translateX(-9px) rotate(135deg)",
                top: "0",
                marginRight: "-18px",
            },
            ".popover--left__arrow": {
                webkitTransform: "translateX(-6px) translateY(-9px) rotate(45deg)",
                transform: "translateX(-6px) translateY(-9px) rotate(45deg)",
                left: "0",
                marginBottom: "-18px",
            },
            ".popover--right__arrow": {
                webkitTransform: "translateX(6px) translateY(-9px) rotate(225deg)",
                transform: "translateX(6px) translateY(-9px) rotate(225deg)",
                right: "0",
                marginBottom: "-18px",
            },
            ".popover--material": {},
            ".popover-mask--material": {
                backgroundColor: "transparent",
            },
            ".popover--material__content": {
                backgroundColor: "#fafafa",
                borderRadius: "2px",
                color: "#1f1f21",
                boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
            },
            ".popover--material__arrow": {
                display: "none",
            },
            ".progress-bar": {
                position: "relative",
                height: "2px",
                display: "block",
                width: "100%",
                backgroundColor: "transparent",
                backgroundClip: "padding-box",
                margin: "0",
                overflow: "hidden",
                borderRadius: "4px",
            },
            ".progress-bar__primary, .progress-bar__secondary": {
                position: "absolute",
                backgroundColor: theme.palette.primary.main,
                top: "0",
                bottom: "0",
                transition: "width 0.3s linear",
                zIndex: "100",
                borderRadius: "4px",
            },
            ".progress-bar__secondary": {
                backgroundColor: "#65adff",
                zIndex: "0",
            },
            ".progress-bar--indeterminate:before": {
                content: '""',
                position: "absolute",
                backgroundColor: theme.palette.primary.main,
                top: "0",
                left: "0",
                bottom: "0",
                willChange: "left, right",
                webkitAnimation: "progress-bar__indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395)\r\n    infinite",
                animation: "progress-bar__indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite",
                borderRadius: "4px",
            },
            ".progress-bar--indeterminate:after": {
                content: '""',
                position: "absolute",
                backgroundColor: theme.palette.primary.main,
                top: "0",
                left: "0",
                bottom: "0",
                willChange: "left, right",
                webkitAnimation: "progress-bar__indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1)\r\n    infinite",
                animation: "progress-bar__indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite",
                webkitAnimationDelay: "1.15s",
                animationDelay: "1.15s",
                borderRadius: "4px",
            },
            "@keyframes progress-bar__indeterminate": {
                "0%": {
                    left: "-35%",
                    right: "100%",
                },
                "60%": {
                    left: "100%",
                    right: "-90%",
                },
                "100%": {
                    left: "100%",
                    right: "-90%",
                },
            },
            "@keyframes progress-bar__indeterminate-short": {
                "0%": {
                    left: "-200%",
                    right: "100%",
                },
                "60%": {
                    left: "107%",
                    right: "-8%",
                },
                "100%": {
                    left: "107%",
                    right: "-8%",
                },
            },
            ".progress-bar--material": {
                height: "4px",
                backgroundColor: "transparent",
                borderRadius: "0",
            },
            ".progress-bar--material__primary, .progress-bar--material__secondary": {
                backgroundColor: theme.palette.primary.main,
                borderRadius: "0",
            },
            ".progress-bar--material__secondary": {
                backgroundColor: "#12005e",
                zIndex: "0",
            },
            ".progress-bar--material.progress-bar--indeterminate:before": {
                backgroundColor: theme.palette.primary.main,
                borderRadius: "0",
            },
            ".progress-bar--material.progress-bar--indeterminate:after": {
                backgroundColor: theme.palette.primary.main,
                borderRadius: "0",
            },
            ".progress-circular": {
                height: "40px",
                position: "relative",
                width: "40px",
                webkitTransform: "rotate(270deg)",
                transform: "rotate(270deg)",
                webkitAnimation: "none",
                animation: "none",
            },
            ".progress-circular__background, .progress-circular__primary, .progress-circular__secondary": {
                cx: "50%",
                cy: "50%",
                r: "40%",
                webkitAnimation: "none",
                animation: "none",
                fill: "none",
                strokeWidth: "5%",
                strokeMiterlimit: "10",
            },
            ".progress-circular__background": {
                stroke: "transparent",
            },
            ".progress-circular__primary": {
                strokeDasharray: "1, 200",
                strokeDashoffset: "0",
                stroke: "#4a148c",
                transition: "all 1s cubic-bezier(0.4, 0, 0.2, 1)",
            },
            ".progress-circular__secondary": {
                stroke: "#65adff",
            },
            ".progress-circular--indeterminate": {
                webkitAnimation: "progress__rotate 2s linear infinite",
                animation: "progress__rotate 2s linear infinite",
                webkitTransform: "none",
                transform: "none",
            },
            ".progress-circular--indeterminate__primary": {
                webkitAnimation: "progress__dash 1.5s ease-in-out infinite",
                animation: "progress__dash 1.5s ease-in-out infinite",
            },
            ".progress-circular--indeterminate__secondary": {
                display: "none",
            },
            "@keyframes progress__rotate": {
                "100%": {
                    webkitTransform: "rotate(360deg)",
                    transform: "rotate(360deg)",
                },
            },
            "@keyframes progress__dash": {
                "0%": {
                    strokeDasharray: "10%, 241.32%",
                    strokeDashoffset: "0",
                },
                "50%": {
                    strokeDasharray: "201%, 50.322%",
                    strokeDashoffset: "-100%",
                },
                "100%": {
                    strokeDasharray: "10%, 241.32%",
                    strokeDashoffset: "-251.32%",
                },
            },
            ".progress-circular--material__background, .progress-circular--material__primary, .progress-circular--material__secondary": {
                strokeWidth: "9%",
            },
            ".progress-circular--material__background": {
                stroke: "transparent",
            },
            ".progress-circular--material__primary": {
                stroke: theme.palette.primary.main,
            },
            ".progress-circular--material__secondary": {
                stroke: "#12005e",
            },
            "ons-fab.fab, ons-speed-dial-item.fab, button.fab": {
                position: "relative",
                display: "inline-block",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#ffffff",
                background: "transparent",
                border: "0 solid currentColor",
                lineHeight: "56px",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                width: "56px",
                height: "56px",
                textDecoration: "none",
                fontSize: "25px",
                letterSpacing: "0",
                verticalAlign: "middle",
                textAlign: "center",
                backgroundColor: theme.palette.primary.main,
                borderRadius: "30%",
                overflow: "hidden",
                boxShadow: "0 3px 6px rgba(0, 0, 0, 0.12)",
                transition: "all 0.1s linear",
            },
            "ons-fab.fab:active, ons-speed-dial-item.fab:active, button.fab:active": {
                boxShadow: "0 0 6 rgba(0, 0, 0, 0.12)",
                backgroundColor: "color-mod(#4a148c a(70%))",
                transition: "all 0.2s ease",
            },
            "ons-fab.fab:focus, ons-speed-dial-item.fab:focus, button.fab:focus": {
                outline: "0",
            },
            "ons-fab.fab:disabled, ons-fab.fab[disabled], ons-speed-dial-item.fab:disabled, ons-speed-dial-item.fab[disabled], button.fab:disabled, button.fab[disabled]": {
                backgroundColor: "color-mod(black alpha(50%))",
                boxShadow: "none",
                opacity: "0.3",
                pointerEvents: "none",
            },
            "ons-fab.fab__icon, ons-speed-dial-item.fab__icon, button.fab__icon": {
                position: "relative",
                overflow: "hidden",
                height: "100%",
                width: "100%",
                display: "block",
                borderRadius: "100%",
                padding: "0",
                zIndex: "100",
                lineHeight: "56px",
            },
            "ons-fab.fab--material, ons-speed-dial-item.fab--material, button.fab--material": {
                position: "relative",
                display: "inline-block",
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "rgba(255, 255, 255, 1)",
                background: "transparent",
                border: "0 solid currentColor",
                lineHeight: "56px",
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                webkitUserSelect: "none",
                mozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
                width: "56px",
                height: "56px",
                textDecoration: "none",
                fontSize: "25px",
                letterSpacing: "0",
                verticalAlign: "middle",
                textAlign: "center",
                backgroundColor: theme.palette.primary.main,
                // borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),\r\n    0 2px 4px -1px rgba(0, 0, 0, 0.4)",
                transition: "all 0.2s ease-in-out",
            },
            "ons-fab.fab--material:active, ons-speed-dial-item.fab--material:active, button.fab--material:active": {
                boxShadow: "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12),\r\n    0 5px 5px -3px rgba(0, 0, 0, 0.4)",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                transition: "all 0.2s ease",
            },
            "ons-fab.fab--material:focus, ons-speed-dial-item.fab--material:focus, button.fab--material:focus": {
                outline: "0",
            },
            "ons-fab.fab--material__icon, ons-speed-dial-item.fab--material__icon, button.fab--material__icon": {
                position: "relative",
                overflow: "hidden",
                height: "100%",
                width: "100%",
                display: "block",
                borderRadius: "100%",
                padding: "0",
                zIndex: "100",
                lineHeight: "56px",
            },
            "ons-fab.fab--material:disabled, ons-fab.fab--material[disabled], ons-speed-dial-item.fab--material:disabled, ons-speed-dial-item.fab--material[disabled], button.fab--material:disabled, button.fab--material[disabled]": {
                backgroundColor: "color-mod(black alpha(50%))",
                boxShadow: "none",
                opacity: "0.3",
                pointerEvents: "none",
            },
            "ons-fab.fab--mini, ons-speed-dial-item.fab--mini, button.fab--mini": {
                width: "40px",
                height: "40px",
                lineHeight: "40px",
            },
            "ons-fab.fab--mini__icon, ons-speed-dial-item.fab--mini__icon, button.fab--mini__icon": {
                lineHeight: "40px",
            },
            "ons-fab.speed-dial__item, ons-speed-dial-item.speed-dial__item, button.speed-dial__item": {
                position: "absolute",
                webkitTransform: "scale(0)",
                transform: "scale(0)",
            },
            "ons-fab.fab--top__right, button.fab--top__right, .speed-dial.fab--top__right": {
                top: "20px",
                bottom: "auto",
                right: "20px",
                left: "auto",
                position: "absolute",
            },
            "ons-fab.fab--bottom__right, button.fab--bottom__right, .speed-dial.fab--bottom__right": {
                top: "auto",
                // bottom: "20px",
                bottom: `calc(20px + ${_Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowBottomInsets()}px)`,
                right: "20px",
                left: "auto",
                position: "absolute",
            },
            "ons-fab.fab--top__left, button.fab--top__left, .speed-dial.fab--top__left": {
                top: "20px",
                bottom: "auto",
                right: "auto",
                left: "20px",
                position: "absolute",
            },
            "ons-fab.fab--bottom__left, button.fab--bottom__left, .speed-dial.fab--bottom__left": {
                top: "auto",
                bottom: "20px",
                right: "auto",
                left: "20px",
                position: "absolute",
            },
            "ons-fab.fab--top__center, button.fab--top__center, .speed-dial.fab--top__center": {
                top: "20px",
                bottom: "auto",
                marginLeft: "-28px",
                left: "50%",
                right: "auto",
                position: "absolute",
            },
            "ons-fab.fab--bottom__center, button.fab--bottom__center, .speed-dial.fab--bottom__center": {
                top: "auto",
                bottom: "20px",
                marginLeft: "-28px",
                left: "50%",
                right: "auto",
                position: "absolute",
            },
            ".modal": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                whiteSpace: "nowrap",
                overflow: "hidden",
                wordSpacing: "0",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "inherit",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0",
                width: "100%",
                height: "100%",
                display: "table",
                zIndex: "2147483647",
            },
            ".modal__content": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                whiteSpace: "normal",
                overflow: "hidden",
                wordSpacing: "0",
                padding: "0",
                margin: "0",
                font: "inherit",
                color: "#fff",
                background: "transparent",
                border: "none",
                lineHeight: "normal",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                display: "table-cell",
                verticalAlign: "middle",
                textAlign: "center",
            },
            ".select-input": {
                boxSizing: "border-box",
                backgroundClip: "padding-box",
                padding: "0 20px 0 0",
                margin: "0",
                font: "inherit",
                color: "#1f1f21",
                background: "transparent",
                border: "none",
                verticalAlign: "top",
                outline: "none",
                lineHeight: "32px",
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                backgroundColor: "transparent",
                position: "relative",
                fontSize: "17px",
                height: "32px",
                borderColor: "#ccc",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
                display: "inline-block",
                borderRadius: "0",
                backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=")',
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center",
                borderBottom: "none",
            },
            ".select-input::-ms-clear": {
                display: "none",
            },
            ".select-input::-webkit-input-placeholder": {
                color: "#999",
            },
            ".select-input:-ms-input-placeholder": {
                color: "#999",
            },
            ".select-input::-ms-input-placeholder": {
                color: "#999",
            },
            ".select-input::placeholder": {
                color: "#999",
            },
            ".select-input:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
                border: "none",
                backgroundColor: "transparent",
            },
            ".select-input:disabled::-webkit-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".select-input:disabled:-ms-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".select-input:disabled::-ms-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".select-input:disabled::placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".select-input:invalid": {
                border: "none",
                backgroundColor: "transparent",
                color: "#1f1f21",
            },
            ".select-input[multiple]": {
                height: "64px",
            },
            ".select-input--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                color: "#1f1f21",
                fontSize: "15px",
                backgroundImage: 'url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCAxMCA1IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0My4yICgzOTA2OSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+c2VsZWN0LWFsbG93PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+PC9kZWZzPgogICAgPGcgaWQ9InNlbGVjdCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Imlvcy1zZWxlY3QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xOTguMDAwMDAwLCAtMTE0LjAwMDAwMCkiIGZpbGw9IiM3NTc1NzUiPgogICAgICAgICAgICA8ZyBpZD0ibWVudS1iYXItKy1vcGVuLW1lbnUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyMy4wMDAwMDAsIDEwMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJtZW51LWJhciI+CiAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9InNlbGVjdC1hbGxvdyIgcG9pbnRzPSI3NSAxNCA4MCAxOSA4NSAxNCI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="),\r\n    linear-gradient(to top, color-mod(black a(12%)) 50%, color-mod(black a(12%)) 50%)',
                backgroundSize: "auto, 100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right center, left bottom",
                border: "none",
                webkitTransform: "translate3d(0, 0, 0)",
                transform: "translate3d(0, 0, 0)",
            },
            ".select-input--material__label": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                color: "rgba(0, 0, 0, 0.81)",
                position: "absolute",
                left: "0",
                top: "2px",
                fontSize: "16px",
                pointerEvents: "none",
            },
            ".select-input--material__label--active": {
                color: "rgba(0, 0, 0, 0.15)",
                webkitTransform: "translate(0, -75%) scale(0.75)",
                transform: "translate(0, -75%) scale(0.75)",
                webkitTransformOrigin: "left top",
                transformOrigin: "left top",
                transition: "transform 0.1s ease-in, color 0.1s ease-in, -webkit-transform 0.1s ease-in",
            },
            ".select-input--material::-webkit-input-placeholder": {
                color: "rgba(0, 0, 0, 0.81)",
                lineHeight: "20px",
            },
            ".select-input--material:-ms-input-placeholder": {
                color: "rgba(0, 0, 0, 0.81)",
                lineHeight: "20px",
            },
            ".select-input--material::-ms-input-placeholder": {
                color: "rgba(0, 0, 0, 0.81)",
                lineHeight: "20px",
            },
            ".select-input--material::placeholder": {
                color: "rgba(0, 0, 0, 0.81)",
                lineHeight: "20px",
            },
            "@keyframes material-select-input-animate": {
                "0%": {
                    backgroundSize: "0% 2px, 100% 2px",
                },
                "100%": {
                    backgroundSize: "100% 2px, 100% 2px",
                },
            },
            ".select-input--underbar": {
                border: "none",
                borderBottom: "1px solid #ccc",
            },
            ".select-input--underbar:disabled": {
                opacity: "0.3",
                pointerEvents: "none",
                border: "none",
                backgroundColor: "transparent",
                borderBottom: "1px solid #ccc",
            },
            ".select-input--underbar:disabled::-webkit-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".select-input--underbar:disabled:-ms-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".select-input--underbar:disabled::-ms-input-placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".select-input--underbar:disabled::placeholder": {
                border: "none",
                backgroundColor: "transparent",
                color: "#999",
            },
            ".select-input--underbar:invalid": {
                border: "none",
                backgroundColor: "transparent",
                color: "#1f1f21",
                borderBottom: "1px solid #ccc",
            },
            ".action-sheet": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                position: "absolute",
                left: "10px",
                right: "10px",
                bottom: "10px",
                zIndex: "2",
            },
            ".action-sheet-button": {
                boxSizing: "border-box",
                height: "56px",
                fontSize: "20px",
                textAlign: "center",
                color: "#4a148c",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "0",
                lineHeight: "56px",
                border: "none",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
                display: "block",
                width: "100%",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 100%)",
            },
            ".action-sheet-button:first-of-type": {
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
            },
            ".action-sheet-button:active": {
                backgroundColor: "#e9e9e9",
                backgroundImage: "none",
            },
            ".action-sheet-button:focus": {
                outline: "none",
            },
            ".action-sheet-button:nth-last-of-type(2)": {
                borderBottomRightRadius: "12px",
                borderBottomLeftRadius: "12px",
                backgroundImage: "none",
            },
            ".action-sheet-button:last-of-type": {
                borderRadius: "12px",
                margin: "8px 0 0 0",
                backgroundColor: "#fff",
                backgroundImage: "none",
                fontWeight: "600",
            },
            ".action-sheet-button:last-of-type:active": {
                backgroundColor: "#e9e9e9",
            },
            ".action-sheet-button--destructive": {
                color: "#fe3824",
            },
            ".action-sheet-title": {
                boxSizing: "border-box",
                height: "56px",
                fontSize: "13px",
                color: "#8f8e94",
                textAlign: "center",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                lineHeight: "56px",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
                backgroundSize: "100% 1px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom",
                backgroundImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 100%)",
            },
            ".action-sheet-title:first-of-type": {
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
            },
            ".action-sheet-icon": {
                display: "none",
            },
            ".action-sheet-mask": {
                position: "absolute",
                left: "0",
                top: "0",
                right: "0",
                bottom: "0",
                backgroundColor: "rgba(0, 0, 0, 0.1)",
                zIndex: "1",
            },
            ".action-sheet--material": {
                paddingBottom: _Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowBottomInsets(),
                backgroundColor: theme.palette.background.default,
                borderTop: `1px solid ${theme.palette.divider}`,
                borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px 0px`,
                left: "0",
                right: "0",
                bottom: "0",
                boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12),\r\n    0 8px 10px -5px rgba(0, 0, 0, 0.4)",
            },
            ".action-sheet-title--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                backgroundImage: "none",
                textAlign: "left",
                height: "56px",
                lineHeight: "56px",
                fontSize: "16px",
                padding: "0 0 0 16px",
                borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px 0px`,
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
            },
            ".action-sheet-title--material:first-of-type": {
                borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px 0px`,
            },
            ".action-sheet-button--material": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                borderRadius: "0",
                backgroundImage: "none",
                height: "52px",
                lineHeight: "52px",
                textAlign: "left",
                fontSize: "16px",
                padding: "0 0 0 16px",
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.background.default,
            },
            ".action-sheet-button--material:first-of-type": {
                borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0px 0px`,
            },
            ".action-sheet-button--material:nth-last-of-type(2)": {
                borderRadius: 0,
            },
            ".action-sheet-button--material:last-of-type": {
                margin: "0",
                borderRadius: 0,
                backgroundColor: theme.palette.background.default,
            },
            ".action-sheet-icon--material": {
                display: "inline-block",
                float: "left",
                height: "52px",
                lineHeight: "52px",
                marginRight: "32px",
                fontSize: "26px",
                width: "0.8em",
                textAlign: "center",
            },
            ".action-sheet-mask--material": {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
            ".card": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.12)",
                borderRadius: "8px",
                backgroundColor: "white",
                boxSizing: "border-box",
                display: "block",
                margin: "8px",
                padding: "16px",
                textAlign: "left",
                wordWrap: "break-word",
            },
            ".card__content": {
                margin: "0",
                fontSize: "14px",
                lineHeight: "1.4",
                color: "#030303",
            },
            ".card__title": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                fontSize: "20px",
                margin: "4px 0 8px 0",
                padding: "0",
                display: "block",
                boxSizing: "border-box",
            },
            ".card--material": {
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),\r\n    0 3px 1px -2px rgba(0, 0, 0, 0.2)",
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
            },
            ".card--material__content": {
                fontSize: "14px",
                lineHeight: "1.4",
                color: "rgba(0, 0, 0, 0.54)",
            },
            ".card--material__title": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                fontSize: "24px",
                margin: "8px 0 12px 0",
            },
            ".toast": {
                fontFamily: '-apple-system, "Helvetica Neue", "Helvetica", "Arial", "Lucida Grande", sans-serif',
                webkitFontSmoothing: "antialiased",
                mozOsxFontSmoothing: "grayscale",
                fontWeight: "400",
                position: "absolute",
                zIndex: "2",
                left: "8px",
                right: "8px",
                bottom: "0",
                margin: "8px 0",
                borderRadius: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                display: "flex",
                minHeight: "48px",
                lineHeight: "1.5",
                boxSizing: "border-box",
                padding: "16px 16px",
            },
            ".toast__message": {
                fontSize: "14px",
                color: "white",
                webkitBoxFlex: "1",
                webkitFlexGrow: "1",
                flexGrow: "1",
                textAlign: "left",
                margin: "0 16px 0 0",
                whiteSpace: "normal",
            },
            ".toast__button": {
                fontSize: "14px",
                color: "white",
                webkitBoxFlex: "0",
                webkitFlexGrow: "0",
                flexGrow: "0",
                webkitAppearance: "none",
                mozAppearance: "none",
                appearance: "none",
                border: "none",
                backgroundColor: "transparent",
                textTransform: "uppercase",
            },
            ".toast__button:focus": {
                outline: "none",
            },
            ".toast__button:active": {
                opacity: "0.4",
            },
            ".toast--material": {
                left: "0",
                right: "0",
                bottom: "0",
                margin: "0",
                backgroundColor: theme.palette.primary.main,
                borderRadius: 0,
                boxShadow: "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
                padding: "16px 24px",
            },
            ".toast--material__message": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                margin: "0 24px 0 0",
            },
            ".toast--material__button": {
                fontFamily: '"Roboto", "Noto", sans-serif',
                webkitFontSmoothing: "antialiased",
                fontWeight: "400",
                color: "#4a148c",
            },
            ".toolbar + .page__background": {
                top: "44px",
            },
            ".toolbar + .page__background + .page__content": {
                top: "44px",
                paddingTop: "0",
            },
            ".page-with-bottom-toolbar > .page__content": {
                bottom: "44px",
            },
            ".toolbar.toolbar--material + .page__background": {
                top: `calc(56px + ${_Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowTopInsets()}px)`,
                paddingBottom: _Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowBottomInsets(),
            },
            ".toolbar.toolbar--material + .page__background + .page__content": {
                top: `calc(56px + ${_Native_View__WEBPACK_IMPORTED_MODULE_1__.view.getWindowTopInsets()}px)`,
                // paddingBottom: view.getWindowBottomInsets(),
                paddingTop: "0",
            },
            ".toolbar.toolbar--transparent + .page__background": {
                top: "0",
            },
            ".toolbar.toolbar--transparent.toolbar--cover-content + .page__background + .page__content, .toolbar.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
                top: "0",
                paddingTop: "44px",
            },
            ".toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content, .toolbar.toolbar--material.toolbar--transparent.toolbar--cover-content\r\n  + .page__background\r\n  + .page__content\r\n  .page_content": {
                top: "0",
                paddingTop: "56px",
            },
            ".tabbar:not(.tabbar--top)": {
                paddingBottom: "0",
            },
            "@media (orientation: landscape)": {
                "html[onsflag-iphonex-landscape] .page__content": {
                    paddingLeft: "44px",
                    paddingRight: "44px",
                    bottom: "0",
                    paddingBottom: "21px",
                },
                "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .modal .page__content": {
                    paddingLeft: "0",
                    paddingRight: "0",
                },
                "html[onsflag-iphonex-landscape] .toolbar__left": {
                    paddingLeft: "44px",
                },
                "html[onsflag-iphonex-landscape] .toolbar__right": {
                    paddingRight: "44px",
                },
                "html[onsflag-iphonex-landscape] .bottom-bar": {
                    paddingRight: "44px",
                    paddingLeft: "44px",
                    bottom: "0",
                    boxSizing: "content-box",
                    paddingBottom: "21px",
                },
                "html[onsflag-iphonex-landscape] .tabbar": {
                    paddingLeft: "44px",
                    paddingRight: "44px",
                    width: "calc(100% - 88px)",
                },
                "html[onsflag-iphonex-landscape] .fab--bottom__left, html[onsflag-iphonex-landscape] .fab--bottom__center, html[onsflag-iphonex-landscape] .fab--bottom__right": {
                    bottom: "21px",
                },
                "html[onsflag-iphonex-landscape] .fab--top__left, html[onsflag-iphonex-landscape] .fab--bottom__left": {
                    left: "44px",
                },
                "html[onsflag-iphonex-landscape] .fab--top__right, html[onsflag-iphonex-landscape] .fab--bottom__right": {
                    right: "44px",
                },
                "html[onsflag-iphonex-landscape] .action-sheet": {
                    left: "calc((100vw - 100vh + 20px) / 2)",
                    right: "calc((100vw - 100vh + 20px) / 2)",
                    bottom: "33px",
                },
                "html[onsflag-iphonex-landscape] .toast": {
                    left: "52px",
                    right: "52px",
                    bottom: "21px",
                },
                "html[onsflag-iphonex-landscape] .dialog .bottom-bar, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .bottom-bar, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .bottom-bar": {
                    bottom: "0",
                    boxSizing: "border-box",
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-landscape] .dialog .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page__content, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content": {
                    bottom: "0",
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content": {
                    bottom: "65px",
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-landscape] .dialog .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content": {
                    bottom: "44px",
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-landscape] .tabbar:not(.tabbar--top)": {
                    paddingBottom: "21px",
                },
                "html[onsflag-iphonex-landscape] .dialog .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top)": {
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content)": {
                    bottom: "70px",
                },
                "html[onsflag-iphonex-landscape] .dialog .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-landscape] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content)": {
                    bottom: "49px",
                },
                "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset)": {
                    marginLeft: "-44px",
                    marginRight: "-44px",
                },
                "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-header": {
                    paddingLeft: "59px",
                },
                "html[onsflag-iphonex-landscape] .page__content > .list:not(.list--inset) > .list-item": {
                    paddingLeft: "58px",
                },
                "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
                    right: "60px",
                },
                "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
                    paddingRight: "50px",
                },
                "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
                    paddingRight: "56px",
                },
                "html[onsflag-iphonex-landscape]\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
                    paddingRight: "74px",
                },
                "html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset)": {
                    marginLeft: "0",
                    marginRight: "0",
                },
                "html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-header": {
                    paddingLeft: "15px",
                },
                "html[onsflag-iphonex-landscape] .dialog .page__content > .list:not(.list--inset) > .list-item": {
                    paddingLeft: "14px",
                },
                "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item--chevron:before": {
                    right: "16px",
                },
                "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__center:last-child": {
                    paddingRight: "6px",
                },
                "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item__right": {
                    paddingRight: "12px",
                },
                "html[onsflag-iphonex-landscape]\r\n    .dialog\r\n    .page__content\r\n    > .list:not(.list--inset)\r\n    > .list-item\r\n    > .list-item--chevron__right": {
                    paddingRight: "30px",
                },
            },
            "@media (orientation: portrait)": {
                "html[onsflag-iphonex-portrait] .fab--top__left, html[onsflag-iphonex-portrait] .fab--top__center, html[onsflag-iphonex-portrait] .fab--top__right": {
                    top: "64px",
                },
                "html[onsflag-iphonex-portrait] .fab--bottom__left, html[onsflag-iphonex-portrait] .fab--bottom__center, html[onsflag-iphonex-portrait] .fab--bottom__right": {
                    bottom: "34px",
                },
                "html[onsflag-iphonex-portrait] .action-sheet": {
                    bottom: "48px",
                },
                "html[onsflag-iphonex-portrait] .toast": {
                    bottom: "34px",
                },
                "html[onsflag-iphonex-portrait] .toolbar": {
                    top: "0",
                    boxSizing: "content-box",
                    paddingTop: "44px",
                },
                "html[onsflag-iphonex-portrait] .dialog .toolbar, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar": {
                    top: "0",
                    boxSizing: "border-box",
                    paddingTop: "0",
                },
                "html[onsflag-iphonex-portrait] .bottom-bar": {
                    bottom: "0",
                    boxSizing: "content-box",
                    paddingBottom: "34px",
                },
                "html[onsflag-iphonex-portrait] .dialog .bottom-bar, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .bottom-bar, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .bottom-bar": {
                    bottom: "0",
                    boxSizing: "border-box",
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-portrait] .page__content": {
                    top: "0",
                    paddingTop: "44px",
                    bottom: "0",
                    paddingBottom: "34px",
                },
                "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content": {
                    top: "0",
                    paddingTop: "0",
                },
                "html[onsflag-iphonex-portrait] .dialog .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page__content, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content": {
                    bottom: "0",
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content) + .page__background, html[onsflag-iphonex-portrait]\r\n    .toolbar:not(.toolbar--cover-content)\r\n    + .page__background\r\n    + .page__content": {
                    top: "88px",
                    paddingTop: "0",
                },
                "html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .dialog .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar:not(.toolbar--cover-content)+.page__background+.page__content": {
                    top: "44px",
                    paddingTop: "0",
                },
                "html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content": {
                    bottom: "78px",
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-portrait] .dialog .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .page-with-bottom-toolbar > .page__content, html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .page-with-bottom-toolbar > .page__content": {
                    bottom: "44px",
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content, html[onsflag-iphonex-portrait]\r\n    .toolbar.toolbar--transparent.toolbar--cover-content\r\n    + .page__background\r\n    + .page__content\r\n    .page_content": {
                    top: "0",
                    paddingTop: "88px",
                },
                "html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .dialog .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content, html[onsflag-iphonex-portrait] .tabbar--top__content .toolbar.toolbar--transparent.toolbar--cover-content+.page__background+.page__content .page_content": {
                    top: "0",
                    paddingTop: "44px",
                },
                "html[onsflag-iphonex-portrait] .tabbar--top": {
                    paddingTop: "44px",
                },
                "html[onsflag-iphonex-portrait] .dialog .tabbar--top, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top": {
                    paddingTop: "0",
                },
                "html[onsflag-iphonex-portrait] .tabbar--top__content": {
                    top: "93px",
                },
                "html[onsflag-iphonex-portrait] .dialog .tabbar--top__content, html[onsflag-iphonex-portrait] .toolbar:not(.toolbar--cover-content)+.page__background+.page__content .tabbar--top__content, html[onsflag-iphonex-portrait] .tabbar--top__content .tabbar--top__content": {
                    top: "49px",
                },
                "html[onsflag-iphonex-portrait] .tabbar:not(.tabbar--top):not(.tabbar--top)": {
                    paddingBottom: "34px",
                },
                "html[onsflag-iphonex-portrait] .dialog .tabbar:not(.tabbar--top):not(.tabbar--top), html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar:not(.tabbar--top), html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar:not(.tabbar--top)": {
                    paddingBottom: "0",
                },
                "html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content)": {
                    bottom: "83px",
                },
                "html[onsflag-iphonex-portrait] .dialog .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait] .page-with-bottom-toolbar > .page__content .tabbar__content:not(.tabbar--top__content), html[onsflag-iphonex-portrait] .tabbar__content:not(.tabbar--top__content) .tabbar__content:not(.tabbar--top__content)": {
                    bottom: "49px",
                },
            },
        }) }));
};


/***/ }),

/***/ "./src/util/blacklisted-modules.ts":
/*!*****************************************!*\
  !*** ./src/util/blacklisted-modules.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   blacklistedModules: () => (/* binding */ blacklistedModules)
/* harmony export */ });
const blacklistedModules = [
    {
        id: "zygisksu",
        source: "https://github.com/Dr-TSNG/ZygiskNext",
        hidden: false,
        notes: "",
        antifeatures: ["Obfuscation", "NoSourceSince"],
    },
    {
        id: "ATWEAKER",
        source: "https://github.com/C0d3h01/AndroidTweaker",
        hidden: false,
        notes: "",
        antifeatures: ["NoSourceSince"],
    },
    {
        id: "STRP",
        source: "https://github.com/CRANKV2/CRV2",
        hidden: false,
        notes: "Aggressive terminal logging - Sends device specs to external server - Includes APK without source - Includes obfuscated scripts",
        antifeatures: ["UnaskedRemoval", "Tracking", "NoSourceSince", "Obfuscation"],
    },
    {
        id: "STRPxZRAM",
        source: "https://github.com/CRANKV2/ZRAM",
        hidden: false,
        notes: "",
        antifeatures: ["UnaskedRemoval", "Tracking", "NoSourceSince", "Obfuscation"],
    },
    {
        id: "STRPxSPOOFER",
        source: "https://github.com/CRANKV2/STRPxSPOOFER",
        hidden: false,
        notes: "Sends device specs to external server",
        antifeatures: ["UnaskedRemoval", "Tracking", "Obfuscation"],
    },
];


/***/ }),

/***/ "./src/util/configure-sample.ts":
/*!**************************************!*\
  !*** ./src/util/configure-sample.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   configureSample: () => (/* binding */ configureSample)
/* harmony export */ });
const configureSample = `import React from "react";
import { Page } from "@mmrl/ui";
import { StringsProvider } from "@mmrl/providers";
import { useStrings } from "@mmrl/hooks";

const strs = {
  en: {
    hello: "Hello"
  },
  de: {
    hello: "Hallo"
  }
}


const Config = () => {
  const { strings } = useStrings();
  return (
    <Page>{strings("hello")}</Page>
  )
}

const Main = () => {
  return (
    <StringsProvider data={strs}>
      <Config />
    </StringsProvider>
  )
}

export default Main`;


/***/ }),

/***/ "./src/util/createRegexURL.ts":
/*!************************************!*\
  !*** ./src/util/createRegexURL.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRegexURL: () => (/* binding */ createRegexURL)
/* harmony export */ });
function createRegexURL(domain, tld) {
    const parseDomain = Array.isArray(domain) ? domain.join("|") : domain;
    const parseTld = Array.isArray(tld) ? tld.join("|") : tld;
    return new RegExp(`(?:http(s)?:\\/\\/)?(www\\.)?(${parseDomain})\\.(${parseTld})(\\/[\\w-]+)?`, "i");
}



/***/ }),

/***/ "./src/util/dapi-sample.ts":
/*!*********************************!*\
  !*** ./src/util/dapi-sample.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dapiSample: () => (/* binding */ dapiSample)
/* harmony export */ });
const dapiSample = `# Markdown: Syntax

## Required modules

- <a module="node_on_android" href="https://github.com/Magisk-Modules-Alt-Repo/node">Node.js</a>

*   [Overview](#overview)
    *   [Philosophy](#philosophy)
    *   [Inline HTML](#html)
    *   [Automatic Escaping for Special Characters](#autoescape)
*   [Block Elements](#block)
    *   [Paragraphs and Line Breaks](#p)
    *   [Headers](#header)
    *   [Blockquotes](#blockquote)
    *   [Lists](#list)
    *   [Code Blocks](#precode)
    *   [Horizontal Rules](#hr)
*   [Span Elements](#span)
    *   [Links](#link)
    *   [Emphasis](#em)
    *   [Code](#code)
    *   [Images](#img)
*   [Miscellaneous](#misc)
    *   [Backslash Escapes](#backslash)
    *   [Automatic Links](#autolink)


**Note:** This document is itself written using Markdown; you
can [see the source for it by adding '.text' to the URL](/projects/markdown/syntax.text).

----

## Overview

### Philosophy

Markdown is intended to be as easy-to-read and easy-to-write as is feasible.

Readability, however, is emphasized above all else. A Markdown-formatted
document should be publishable as-is, as plain text, without looking
like it's been marked up with tags or formatting instructions. While
Markdown's syntax has been influenced by several existing text-to-HTML
filters -- including [Setext](http://docutils.sourceforge.net/mirror/setext.html), [atx](http://www.aaronsw.com/2002/atx/), [Textile](http://textism.com/tools/textile/), [reStructuredText](http://docutils.sourceforge.net/rst.html),
[Grutatext](http://www.triptico.com/software/grutatxt.html), and [EtText](http://ettext.taint.org/doc/) -- the single biggest source of
inspiration for Markdown's syntax is the format of plain text email.

## Block Elements

### Paragraphs and Line Breaks

A paragraph is simply one or more consecutive lines of text, separated
by one or more blank lines. (A blank line is any line that looks like a
blank line -- a line containing nothing but spaces or tabs is considered
blank.) Normal paragraphs should not be indented with spaces or tabs.

The implication of the "one or more consecutive lines of text" rule is
that Markdown supports "hard-wrapped" text paragraphs. This differs
significantly from most other text-to-HTML formatters (including Movable
Type's "Convert Line Breaks" option) which translate every line break
character in a paragraph into a \`<br />\` tag.

When you *do* want to insert a \`<br />\` break tag using Markdown, you
end a line with two or more spaces, then type return.

### Headers

Markdown supports two styles of headers, [Setext] [1] and [atx] [2].

Optionally, you may "close" atx-style headers. This is purely
cosmetic -- you can use this if you think it looks better. The
closing hashes don't even need to match the number of hashes
used to open the header. (The number of opening hashes
determines the header level.)


### Blockquotes

Markdown uses email-style \`>\` characters for blockquoting. If you're
familiar with quoting passages of text in an email message, then you
know how to create a blockquote in Markdown. It looks best if you hard
wrap the text and put a \`>\` before every line:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

Markdown allows you to be lazy and only put the \`>\` before the first
line of a hard-wrapped paragraph:

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

Blockquotes can be nested (i.e. a blockquote-in-a-blockquote) by
adding additional levels of \`>\`:

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

Blockquotes can contain other Markdown elements, including headers, lists,
and code blocks:

> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");

Any decent text editor should make email-style quoting easy. For
example, with BBEdit, you can make a selection and choose Increase
Quote Level from the Text menu.


### Lists

Markdown supports ordered (numbered) and unordered (bulleted) lists.

Unordered lists use asterisks, pluses, and hyphens -- interchangably
-- as list markers:

*   Red
*   Green
*   Blue

is equivalent to:

+   Red
+   Green
+   Blue

and:

-   Red
-   Green
-   Blue

Ordered lists use numbers followed by periods:

1.  Bird
2.  McHale
3.  Parish

It's important to note that the actual numbers you use to mark the
list have no effect on the HTML output Markdown produces. The HTML
Markdown produces from the above list is:

If you instead wrote the list in Markdown like this:

1.  Bird
1.  McHale
1.  Parish

or even:

3. Bird
1. McHale
8. Parish

you'd get the exact same HTML output. The point is, if you want to,
you can use ordinal numbers in your ordered Markdown lists, so that
the numbers in your source match the numbers in your published HTML.
But if you want to be lazy, you don't have to.

To make lists look nice, you can wrap items with hanging indents:

*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
    Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
    viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
    Suspendisse id sem consectetuer libero luctus adipiscing.

But if you want to be lazy, you don't have to:

*   Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
Aliquam hendrerit mi posuere lectus. Vestibulum enim wisi,
viverra nec, fringilla in, laoreet vitae, risus.
*   Donec sit amet nisl. Aliquam semper ipsum sit amet velit.
Suspendisse id sem consectetuer libero luctus adipiscing.

List items may consist of multiple paragraphs. Each subsequent
paragraph in a list item must be indented by either 4 spaces
or one tab:

1.  This is a list item with two paragraphs. Lorem ipsum dolor
    sit amet, consectetuer adipiscing elit. Aliquam hendrerit
    mi posuere lectus.

    Vestibulum enim wisi, viverra nec, fringilla in, laoreet
    vitae, risus. Donec sit amet nisl. Aliquam semper ipsum
    sit amet velit.

2.  Suspendisse id sem consectetuer libero luctus adipiscing.

It looks nice if you indent every line of the subsequent
paragraphs, but here again, Markdown will allow you to be
lazy:

*   This is a list item with two paragraphs.

    This is the second paragraph in the list item. You're
only required to indent the first line. Lorem ipsum dolor
sit amet, consectetuer adipiscing elit.

*   Another item in the same list.

To put a blockquote within a list item, the blockquote's \`>\`
delimiters need to be indented:

*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.

To put a code block within a list item, the code block needs
to be indented *twice* -- 8 spaces or two tabs:

*   A list item with a code block:

        <code goes here>

### Code Blocks

Pre-formatted code blocks are used for writing about programming or
markup source code. Rather than forming normal paragraphs, the lines
of a code block are interpreted literally. Markdown wraps a code block
in both \`<pre>\` and \`<code>\` tags.

To produce a code block in Markdown, simply indent every line of the
block by at least 4 spaces or 1 tab.

This is a normal paragraph:

    This is a code block.

Here is an example of AppleScript:

    tell application "Foo"
        beep
    end tell

A code block continues until it reaches a line that is not indented
(or the end of the article).

Within a code block, ampersands (\`&\`) and angle brackets (\`<\` and \`>\`)
are automatically converted into HTML entities. This makes it very
easy to include example HTML source code using Markdown -- just paste
it and indent it, and Markdown will handle the hassle of encoding the
ampersands and angle brackets. For example, this:

    <div class="footer">
        &copy; 2004 Foo Corporation
    </div>

Regular Markdown syntax is not processed within code blocks. E.g.,
asterisks are just literal asterisks within a code block. This means
it's also easy to use Markdown to write about Markdown's own syntax.

\`\`\`
tell application "Foo"
    beep
end tell
\`\`\`

## Span Elements

### Links

Markdown supports two style of links: *inline* and *reference*.

In both styles, the link text is delimited by [square brackets].

To create an inline link, use a set of regular parentheses immediately
after the link text's closing square bracket. Inside the parentheses,
put the URL where you want the link to point, along with an *optional*
title for the link, surrounded in quotes. For example:

This is [an example](http://example.com/) inline link.

[This link](http://example.net/) has no title attribute.

### Emphasis

Markdown treats asterisks (\`*\`) and underscores (\`_\`) as indicators of
emphasis. Text wrapped with one \`*\` or \`_\` will be wrapped with an
HTML \`<em>\` tag; double \`*\`'s or \`_\`'s will be wrapped with an HTML
\`<strong>\` tag. E.g., this input:

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

### Code

To indicate a span of code, wrap it with backtick quotes (\`\` \` \`\`).
Unlike a pre-formatted code block, a code span indicates code within a
normal paragraph. For example:

Use the \`printf()\` function.`;


/***/ }),

/***/ "./src/util/editorTheme.ts":
/*!*********************************!*\
  !*** ./src/util/editorTheme.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const editorTheme = {
    inherit: true,
    base: "vs-dark",
    colors: {
        focusBorder: "#005cc5",
        foreground: "#d1d5da",
        descriptionForeground: "#959da5",
        errorForeground: "#f97583",
        "textLink.foreground": "#79b8ff",
        "textLink.activeForeground": "#c8e1ff",
        "textBlockQuote.background": "#24292e",
        "textBlockQuote.border": "#444d56",
        "textCodeBlock.background": "#2f363d",
        "textPreformat.foreground": "#d1d5da",
        "textSeparator.foreground": "#586069",
        "button.background": "#176f2c",
        "button.foreground": "#dcffe4",
        "button.hoverBackground": "#22863a",
        "checkbox.background": "#444d56",
        "checkbox.border": "#1b1f23",
        "dropdown.background": "#2f363d",
        "dropdown.border": "#1b1f23",
        "dropdown.foreground": "#e1e4e8",
        "dropdown.listBackground": "#24292e",
        "input.background": "#2f363d",
        "input.border": "#1b1f23",
        "input.foreground": "#e1e4e8",
        "input.placeholderForeground": "#959da5",
        "badge.foreground": "#c8e1ff",
        "badge.background": "#044289",
        "progressBar.background": "#0366d6",
        "titleBar.activeForeground": "#e1e4e8",
        "titleBar.activeBackground": "#24292e",
        "titleBar.inactiveForeground": "#959da5",
        "titleBar.inactiveBackground": "#1f2428",
        "titleBar.border": "#1b1f23",
        "activityBar.foreground": "#e1e4e8",
        "activityBar.inactiveForeground": "#6a737d",
        "activityBar.background": "#24292e",
        "activityBarBadge.foreground": "#fff",
        "activityBarBadge.background": "#0366d6",
        "activityBar.activeBorder": "#f9826c",
        "activityBar.border": "#1b1f23",
        "sideBar.foreground": "#d1d5da",
        "sideBar.background": "#1f2428",
        "sideBar.border": "#1b1f23",
        "sideBarTitle.foreground": "#e1e4e8",
        "sideBarSectionHeader.foreground": "#e1e4e8",
        "sideBarSectionHeader.background": "#1f2428",
        "sideBarSectionHeader.border": "#1b1f23",
        "list.hoverForeground": "#e1e4e8",
        "list.inactiveSelectionForeground": "#e1e4e8",
        "list.activeSelectionForeground": "#e1e4e8",
        "list.hoverBackground": "#282e34",
        "list.inactiveSelectionBackground": "#282e34",
        "list.activeSelectionBackground": "#39414a",
        "list.inactiveFocusBackground": "#1d2d3e",
        "list.focusBackground": "#044289",
        "tree.indentGuidesStroke": "#2f363d",
        "notificationCenterHeader.foreground": "#959da5",
        "notificationCenterHeader.background": "#24292e",
        "notifications.foreground": "#e1e4e8",
        "notifications.background": "#2f363d",
        "notifications.border": "#1b1f23",
        "notificationsErrorIcon.foreground": "#ea4a5a",
        "notificationsWarningIcon.foreground": "#ffab70",
        "notificationsInfoIcon.foreground": "#79b8ff",
        "pickerGroup.border": "#444d56",
        "pickerGroup.foreground": "#e1e4e8",
        "quickInput.background": "#24292e",
        "quickInput.foreground": "#e1e4e8",
        "statusBar.foreground": "#d1d5da",
        "statusBar.background": "#24292e",
        "statusBar.border": "#1b1f23",
        "statusBar.noFolderBackground": "#24292e",
        "statusBar.debuggingBackground": "#931c06",
        "statusBar.debuggingForeground": "#fff",
        "editorGroupHeader.tabsBackground": "#1f2428",
        "editorGroupHeader.tabsBorder": "#1b1f23",
        "editorGroup.border": "#1b1f23",
        "tab.activeForeground": "#e1e4e8",
        "tab.inactiveForeground": "#959da5",
        "tab.inactiveBackground": "#1f2428",
        "tab.activeBackground": "#24292e",
        "tab.hoverBackground": "#24292e",
        "tab.unfocusedHoverBackground": "#24292e",
        "tab.border": "#1b1f23",
        "tab.unfocusedActiveBorderTop": "#1b1f23",
        "tab.activeBorder": "#24292e",
        "tab.unfocusedActiveBorder": "#24292e",
        "tab.activeBorderTop": "#f9826c",
        "breadcrumb.foreground": "#959da5",
        "breadcrumb.focusForeground": "#e1e4e8",
        "breadcrumb.activeSelectionForeground": "#d1d5da",
        "breadcrumbPicker.background": "#2b3036",
        "editor.foreground": "#e1e4e8",
        "editor.background": "#24292e",
        "editorWidget.background": "#1f2428",
        "editor.foldBackground": "#282e33",
        "editor.lineHighlightBackground": "#2b3036",
        "editorLineNumber.foreground": "#444d56",
        "editorLineNumber.activeForeground": "#e1e4e8",
        "editorIndentGuide.background": "#2f363d",
        "editorIndentGuide.activeBackground": "#444d56",
        "editorWhitespace.foreground": "#444d56",
        "editorCursor.foreground": "#c8e1ff",
        "editor.findMatchBackground": "#ffd33d44",
        "editor.findMatchHighlightBackground": "#ffd33d22",
        "editor.inactiveSelectionBackground": "#3392FF22",
        "editor.selectionBackground": "#3392FF44",
        "editor.selectionHighlightBackground": "#17E5E633",
        "editor.selectionHighlightBorder": "#17E5E600",
        "editor.wordHighlightBackground": "#17E5E600",
        "editor.wordHighlightStrongBackground": "#17E5E600",
        "editor.wordHighlightBorder": "#17E5E699",
        "editor.wordHighlightStrongBorder": "#17E5E666",
        "editorBracketMatch.background": "#17E5E650",
        "editorBracketMatch.border": "#17E5E600",
        "editorGutter.modifiedBackground": "#2188ff",
        "editorGutter.addedBackground": "#28a745",
        "editorGutter.deletedBackground": "#ea4a5a",
        "diffEditor.insertedTextBackground": "#28a74530",
        "diffEditor.removedTextBackground": "#d73a4930",
        "scrollbar.shadow": "#0008",
        "scrollbarSlider.background": "#6a737d33",
        "scrollbarSlider.hoverBackground": "#6a737d44",
        "scrollbarSlider.activeBackground": "#6a737d88",
        "editorOverviewRuler.border": "#1b1f23",
        "panel.background": "#1f2428",
        "panel.border": "#1b1f23",
        "panelTitle.activeBorder": "#f9826c",
        "panelTitle.activeForeground": "#e1e4e8",
        "panelTitle.inactiveForeground": "#959da5",
        "panelInput.border": "#2f363d",
        "terminal.foreground": "#d1d5da",
        "gitDecoration.addedResourceForeground": "#34d058",
        "gitDecoration.modifiedResourceForeground": "#79b8ff",
        "gitDecoration.deletedResourceForeground": "#ea4a5a",
        "gitDecoration.untrackedResourceForeground": "#34d058",
        "gitDecoration.ignoredResourceForeground": "#6a737d",
        "gitDecoration.conflictingResourceForeground": "#ffab70",
        "gitDecoration.submoduleResourceForeground": "#6a737d",
        "debugToolBar.background": "#2b3036",
        "editor.stackFrameHighlightBackground": "#a707",
        "editor.focusedStackFrameHighlightBackground": "#b808",
        "peekViewEditor.matchHighlightBackground": "#ffd33d33",
        "peekViewResult.matchHighlightBackground": "#ffd33d33",
        "peekViewEditor.background": "#1f242888",
        "peekViewResult.background": "#1f2428",
        "settings.headerForeground": "#e1e4e8",
        "settings.modifiedItemIndicator": "#0366d6",
        "welcomePage.buttonBackground": "#2f363d",
        "welcomePage.buttonHoverBackground": "#444d56",
    },
    rules: [
        {
            foreground: "#6a737d",
            token: "comment",
        },
        {
            foreground: "#6a737d",
            token: "punctuation.definition.comment",
        },
        {
            foreground: "#6a737d",
            token: "string.comment",
        },
        {
            foreground: "#79b8ff",
            token: "constant",
        },
        {
            foreground: "#79b8ff",
            token: "entity.name.constant",
        },
        {
            foreground: "#79b8ff",
            token: "variable.other.constant",
        },
        {
            foreground: "#79b8ff",
            token: "variable.language",
        },
        {
            foreground: "#b392f0",
            token: "entity",
        },
        {
            foreground: "#b392f0",
            token: "entity.name",
        },
        {
            foreground: "#e1e4e8",
            token: "variable.parameter.function",
        },
        {
            foreground: "#85e89d",
            token: "entity.name.tag",
        },
        {
            foreground: "#f97583",
            token: "keyword",
        },
        {
            foreground: "#f97583",
            token: "storage",
        },
        {
            foreground: "#f97583",
            token: "storage.type",
        },
        {
            foreground: "#e1e4e8",
            token: "storage.modifier.package",
        },
        {
            foreground: "#e1e4e8",
            token: "storage.modifier.import",
        },
        {
            foreground: "#e1e4e8",
            token: "storage.type.java",
        },
        {
            foreground: "#9ecbff",
            token: "string",
        },
        {
            foreground: "#9ecbff",
            token: "punctuation.definition.string",
        },
        {
            foreground: "#9ecbff",
            token: "string punctuation.section.embedded source",
        },
        {
            foreground: "#79b8ff",
            token: "support",
        },
        {
            foreground: "#79b8ff",
            token: "meta.property-name",
        },
        {
            foreground: "#ffab70",
            token: "variable",
        },
        {
            foreground: "#e1e4e8",
            token: "variable.other",
        },
        {
            fontStyle: "italic",
            foreground: "#fdaeb7",
            token: "invalid.broken",
        },
        {
            fontStyle: "italic",
            foreground: "#fdaeb7",
            token: "invalid.deprecated",
        },
        {
            fontStyle: "italic",
            foreground: "#fdaeb7",
            token: "invalid.illegal",
        },
        {
            fontStyle: "italic",
            foreground: "#fdaeb7",
            token: "invalid.unimplemented",
        },
        {
            fontStyle: "italic underline",
            background: "#f97583",
            foreground: "#24292e",
            token: "carriage-return",
        },
        {
            foreground: "#fdaeb7",
            token: "message.error",
        },
        {
            foreground: "#e1e4e8",
            token: "string source",
        },
        {
            foreground: "#79b8ff",
            token: "string variable",
        },
        {
            foreground: "#dbedff",
            token: "source.regexp",
        },
        {
            foreground: "#dbedff",
            token: "string.regexp",
        },
        {
            foreground: "#dbedff",
            token: "string.regexp.character-class",
        },
        {
            foreground: "#dbedff",
            token: "string.regexp constant.character.escape",
        },
        {
            foreground: "#dbedff",
            token: "string.regexp source.ruby.embedded",
        },
        {
            foreground: "#dbedff",
            token: "string.regexp string.regexp.arbitrary-repitition",
        },
        {
            fontStyle: "bold",
            foreground: "#85e89d",
            token: "string.regexp constant.character.escape",
        },
        {
            foreground: "#79b8ff",
            token: "support.constant",
        },
        {
            foreground: "#79b8ff",
            token: "support.variable",
        },
        {
            foreground: "#79b8ff",
            token: "meta.module-reference",
        },
        {
            foreground: "#ffab70",
            token: "punctuation.definition.list.begin.markdown",
        },
        {
            fontStyle: "bold",
            foreground: "#79b8ff",
            token: "markup.heading",
        },
        {
            fontStyle: "bold",
            foreground: "#79b8ff",
            token: "markup.heading entity.name",
        },
        {
            foreground: "#85e89d",
            token: "markup.quote",
        },
        {
            fontStyle: "italic",
            foreground: "#e1e4e8",
            token: "markup.italic",
        },
        {
            fontStyle: "bold",
            foreground: "#e1e4e8",
            token: "markup.bold",
        },
        {
            foreground: "#79b8ff",
            token: "markup.raw",
        },
        {
            background: "#86181d",
            foreground: "#fdaeb7",
            token: "markup.deleted",
        },
        {
            background: "#86181d",
            foreground: "#fdaeb7",
            token: "meta.diff.header.from-file",
        },
        {
            background: "#86181d",
            foreground: "#fdaeb7",
            token: "punctuation.definition.deleted",
        },
        {
            background: "#144620",
            foreground: "#85e89d",
            token: "markup.inserted",
        },
        {
            background: "#144620",
            foreground: "#85e89d",
            token: "meta.diff.header.to-file",
        },
        {
            background: "#144620",
            foreground: "#85e89d",
            token: "punctuation.definition.inserted",
        },
        {
            background: "#c24e00",
            foreground: "#ffab70",
            token: "markup.changed",
        },
        {
            background: "#c24e00",
            foreground: "#ffab70",
            token: "punctuation.definition.changed",
        },
        {
            foreground: "#2f363d",
            background: "#79b8ff",
            token: "markup.ignored",
        },
        {
            foreground: "#2f363d",
            background: "#79b8ff",
            token: "markup.untracked",
        },
        {
            foreground: "#b392f0",
            fontStyle: "bold",
            token: "meta.diff.range",
        },
        {
            foreground: "#79b8ff",
            token: "meta.diff.header",
        },
        {
            fontStyle: "bold",
            foreground: "#79b8ff",
            token: "meta.separator",
        },
        {
            foreground: "#79b8ff",
            token: "meta.output",
        },
        {
            foreground: "#d1d5da",
            token: "brackethighlighter.tag",
        },
        {
            foreground: "#d1d5da",
            token: "brackethighlighter.curly",
        },
        {
            foreground: "#d1d5da",
            token: "brackethighlighter.round",
        },
        {
            foreground: "#d1d5da",
            token: "brackethighlighter.square",
        },
        {
            foreground: "#d1d5da",
            token: "brackethighlighter.angle",
        },
        {
            foreground: "#d1d5da",
            token: "brackethighlighter.quote",
        },
        {
            foreground: "#fdaeb7",
            token: "brackethighlighter.unmatched",
        },
        {
            foreground: "#dbedff",
            fontStyle: "underline",
            token: "constant.other.reference.link",
        },
        {
            foreground: "#dbedff",
            fontStyle: "underline",
            token: "string.other.link",
        },
    ],
    encodedTokensColors: [],
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editorTheme);


/***/ }),

/***/ "./src/util/licenseTypes.ts":
/*!**********************************!*\
  !*** ./src/util/licenseTypes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   licenseTypes: () => (/* binding */ licenseTypes)
/* harmony export */ });
const licenseTypes = [
    "0BSD",
    "AAL",
    "Abstyles",
    "AdaCore-doc",
    "Adobe-2006",
    "Adobe-Display-PostScript",
    "Adobe-Glyph",
    "Adobe-Utopia",
    "ADSL",
    "AFL-1.1",
    "AFL-1.2",
    "AFL-2.0",
    "AFL-2.1",
    "AFL-3.0",
    "Afmparse",
    "AGPL-1.0",
    "AGPL-1.0-only",
    "AGPL-1.0-or-later",
    "AGPL-3.0",
    "AGPL-3.0-only",
    "AGPL-3.0-or-later",
    "Aladdin",
    "AMDPLPA",
    "AML",
    "AML-glslang",
    "AMPAS",
    "ANTLR-PD",
    "ANTLR-PD-fallback",
    "Apache-1.0",
    "Apache-1.1",
    "Apache-2.0",
    "APAFML",
    "APL-1.0",
    "App-s2p",
    "APSL-1.0",
    "APSL-1.1",
    "APSL-1.2",
    "APSL-2.0",
    "Arphic-1999",
    "Artistic-1.0",
    "Artistic-1.0-cl8",
    "Artistic-1.0-Perl",
    "Artistic-2.0",
    "ASWF-Digital-Assets-1.0",
    "ASWF-Digital-Assets-1.1",
    "Baekmuk",
    "Bahyph",
    "Barr",
    "bcrypt-Solar-Designer",
    "Beerware",
    "Bitstream-Charter",
    "Bitstream-Vera",
    "BitTorrent-1.0",
    "BitTorrent-1.1",
    "blessing",
    "BlueOak-1.0.0",
    "Boehm-GC",
    "Borceux",
    "Brian-Gladman-2-Clause",
    "Brian-Gladman-3-Clause",
    "BSD-1-Clause",
    "BSD-2-Clause",
    "BSD-2-Clause-Darwin",
    "BSD-2-Clause-FreeBSD",
    "BSD-2-Clause-NetBSD",
    "BSD-2-Clause-Patent",
    "BSD-2-Clause-Views",
    "BSD-3-Clause",
    "BSD-3-Clause-acpica",
    "BSD-3-Clause-Attribution",
    "BSD-3-Clause-Clear",
    "BSD-3-Clause-flex",
    "BSD-3-Clause-HP",
    "BSD-3-Clause-LBNL",
    "BSD-3-Clause-Modification",
    "BSD-3-Clause-No-Military-License",
    "BSD-3-Clause-No-Nuclear-License",
    "BSD-3-Clause-No-Nuclear-License-2014",
    "BSD-3-Clause-No-Nuclear-Warranty",
    "BSD-3-Clause-Open-MPI",
    "BSD-3-Clause-Sun",
    "BSD-4-Clause",
    "BSD-4-Clause-Shortened",
    "BSD-4-Clause-UC",
    "BSD-4.3RENO",
    "BSD-4.3TAHOE",
    "BSD-Advertising-Acknowledgement",
    "BSD-Attribution-HPND-disclaimer",
    "BSD-Inferno-Nettverk",
    "BSD-Protection",
    "BSD-Source-beginning-file",
    "BSD-Source-Code",
    "BSD-Systemics",
    "BSD-Systemics-W3Works",
    "BSL-1.0",
    "BUSL-1.1",
    "bzip2-1.0.5",
    "bzip2-1.0.6",
    "C-UDA-1.0",
    "CAL-1.0",
    "CAL-1.0-Combined-Work-Exception",
    "Caldera",
    "Caldera-no-preamble",
    "CATOSL-1.1",
    "CC-BY-1.0",
    "CC-BY-2.0",
    "CC-BY-2.5",
    "CC-BY-2.5-AU",
    "CC-BY-3.0",
    "CC-BY-3.0-AT",
    "CC-BY-3.0-AU",
    "CC-BY-3.0-DE",
    "CC-BY-3.0-IGO",
    "CC-BY-3.0-NL",
    "CC-BY-3.0-US",
    "CC-BY-4.0",
    "CC-BY-NC-1.0",
    "CC-BY-NC-2.0",
    "CC-BY-NC-2.5",
    "CC-BY-NC-3.0",
    "CC-BY-NC-3.0-DE",
    "CC-BY-NC-4.0",
    "CC-BY-NC-ND-1.0",
    "CC-BY-NC-ND-2.0",
    "CC-BY-NC-ND-2.5",
    "CC-BY-NC-ND-3.0",
    "CC-BY-NC-ND-3.0-DE",
    "CC-BY-NC-ND-3.0-IGO",
    "CC-BY-NC-ND-4.0",
    "CC-BY-NC-SA-1.0",
    "CC-BY-NC-SA-2.0",
    "CC-BY-NC-SA-2.0-DE",
    "CC-BY-NC-SA-2.0-FR",
    "CC-BY-NC-SA-2.0-UK",
    "CC-BY-NC-SA-2.5",
    "CC-BY-NC-SA-3.0",
    "CC-BY-NC-SA-3.0-DE",
    "CC-BY-NC-SA-3.0-IGO",
    "CC-BY-NC-SA-4.0",
    "CC-BY-ND-1.0",
    "CC-BY-ND-2.0",
    "CC-BY-ND-2.5",
    "CC-BY-ND-3.0",
    "CC-BY-ND-3.0-DE",
    "CC-BY-ND-4.0",
    "CC-BY-SA-1.0",
    "CC-BY-SA-2.0",
    "CC-BY-SA-2.0-UK",
    "CC-BY-SA-2.1-JP",
    "CC-BY-SA-2.5",
    "CC-BY-SA-3.0",
    "CC-BY-SA-3.0-AT",
    "CC-BY-SA-3.0-DE",
    "CC-BY-SA-3.0-IGO",
    "CC-BY-SA-4.0",
    "CC-PDDC",
    "CC0-1.0",
    "CDDL-1.0",
    "CDDL-1.1",
    "CDL-1.0",
    "CDLA-Permissive-1.0",
    "CDLA-Permissive-2.0",
    "CDLA-Sharing-1.0",
    "CECILL-1.0",
    "CECILL-1.1",
    "CECILL-2.0",
    "CECILL-2.1",
    "CECILL-B",
    "CECILL-C",
    "CERN-OHL-1.1",
    "CERN-OHL-1.2",
    "CERN-OHL-P-2.0",
    "CERN-OHL-S-2.0",
    "CERN-OHL-W-2.0",
    "CFITSIO",
    "check-cvs",
    "checkmk",
    "ClArtistic",
    "Clips",
    "CMU-Mach",
    "CMU-Mach-nodoc",
    "CNRI-Jython",
    "CNRI-Python",
    "CNRI-Python-GPL-Compatible",
    "COIL-1.0",
    "Community-Spec-1.0",
    "Condor-1.1",
    "copyleft-next-0.3.0",
    "copyleft-next-0.3.1",
    "Cornell-Lossless-JPEG",
    "CPAL-1.0",
    "CPL-1.0",
    "CPOL-1.02",
    "Cronyx",
    "Crossword",
    "CrystalStacker",
    "CUA-OPL-1.0",
    "Cube",
    "curl",
    "D-FSL-1.0",
    "DEC-3-Clause",
    "diffmark",
    "DL-DE-BY-2.0",
    "DL-DE-ZERO-2.0",
    "DOC",
    "Dotseqn",
    "DRL-1.0",
    "DRL-1.1",
    "DSDP",
    "dtoa",
    "dvipdfm",
    "ECL-1.0",
    "ECL-2.0",
    "eCos-2.0",
    "EFL-1.0",
    "EFL-2.0",
    "eGenix",
    "Elastic-2.0",
    "Entessa",
    "EPICS",
    "EPL-1.0",
    "EPL-2.0",
    "ErlPL-1.1",
    "etalab-2.0",
    "EUDatagrid",
    "EUPL-1.0",
    "EUPL-1.1",
    "EUPL-1.2",
    "Eurosym",
    "Fair",
    "FBM",
    "FDK-AAC",
    "Ferguson-Twofish",
    "Frameworx-1.0",
    "FreeBSD-DOC",
    "FreeImage",
    "FSFAP",
    "FSFAP-no-warranty-disclaimer",
    "FSFUL",
    "FSFULLR",
    "FSFULLRWD",
    "FTL",
    "Furuseth",
    "fwlw",
    "GCR-docs",
    "GD",
    "GFDL-1.1",
    "GFDL-1.1-invariants-only",
    "GFDL-1.1-invariants-or-later",
    "GFDL-1.1-no-invariants-only",
    "GFDL-1.1-no-invariants-or-later",
    "GFDL-1.1-only",
    "GFDL-1.1-or-later",
    "GFDL-1.2",
    "GFDL-1.2-invariants-only",
    "GFDL-1.2-invariants-or-later",
    "GFDL-1.2-no-invariants-only",
    "GFDL-1.2-no-invariants-or-later",
    "GFDL-1.2-only",
    "GFDL-1.2-or-later",
    "GFDL-1.3",
    "GFDL-1.3-invariants-only",
    "GFDL-1.3-invariants-or-later",
    "GFDL-1.3-no-invariants-only",
    "GFDL-1.3-no-invariants-or-later",
    "GFDL-1.3-only",
    "GFDL-1.3-or-later",
    "Giftware",
    "GL2PS",
    "Glide",
    "Glulxe",
    "GLWTPL",
    "gnuplot",
    "GPL-1.0",
    "GPL-1.0+",
    "GPL-1.0-only",
    "GPL-1.0-or-later",
    "GPL-2.0",
    "GPL-2.0+",
    "GPL-2.0-only",
    "GPL-2.0-or-later",
    "GPL-2.0-with-autoconf-exception",
    "GPL-2.0-with-bison-exception",
    "GPL-2.0-with-classpath-exception",
    "GPL-2.0-with-font-exception",
    "GPL-2.0-with-GCC-exception",
    "GPL-3.0",
    "GPL-3.0+",
    "GPL-3.0-only",
    "GPL-3.0-or-later",
    "GPL-3.0-with-autoconf-exception",
    "GPL-3.0-with-GCC-exception",
    "Graphics-Gems",
    "gSOAP-1.3b",
    "gtkbook",
    "HaskellReport",
    "hdparm",
    "Hippocratic-2.1",
    "HP-1986",
    "HP-1989",
    "HPND",
    "HPND-DEC",
    "HPND-doc",
    "HPND-doc-sell",
    "HPND-export-US",
    "HPND-export-US-modify",
    "HPND-Fenneberg-Livingston",
    "HPND-INRIA-IMAG",
    "HPND-Kevlin-Henney",
    "HPND-Markus-Kuhn",
    "HPND-MIT-disclaimer",
    "HPND-Pbmplus",
    "HPND-sell-MIT-disclaimer-xserver",
    "HPND-sell-regexpr",
    "HPND-sell-variant",
    "HPND-sell-variant-MIT-disclaimer",
    "HPND-UC",
    "HTMLTIDY",
    "IBM-pibs",
    "ICU",
    "IEC-Code-Components-EULA",
    "IJG",
    "IJG-short",
    "ImageMagick",
    "iMatix",
    "Imlib2",
    "Info-ZIP",
    "Inner-Net-2.0",
    "Intel",
    "Intel-ACPI",
    "Interbase-1.0",
    "IPA",
    "IPL-1.0",
    "ISC",
    "ISC-Veillard",
    "Jam",
    "JasPer-2.0",
    "JPL-image",
    "JPNIC",
    "JSON",
    "Kastrup",
    "Kazlib",
    "Knuth-CTAN",
    "LAL-1.2",
    "LAL-1.3",
    "Latex2e",
    "Latex2e-translated-notice",
    "Leptonica",
    "LGPL-2.0",
    "LGPL-2.0+",
    "LGPL-2.0-only",
    "LGPL-2.0-or-later",
    "LGPL-2.1",
    "LGPL-2.1+",
    "LGPL-2.1-only",
    "LGPL-2.1-or-later",
    "LGPL-3.0",
    "LGPL-3.0+",
    "LGPL-3.0-only",
    "LGPL-3.0-or-later",
    "LGPLLR",
    "Libpng",
    "libpng-2.0",
    "libselinux-1.0",
    "libtiff",
    "libutil-David-Nugent",
    "LiLiQ-P-1.1",
    "LiLiQ-R-1.1",
    "LiLiQ-Rplus-1.1",
    "Linux-man-pages-1-para",
    "Linux-man-pages-copyleft",
    "Linux-man-pages-copyleft-2-para",
    "Linux-man-pages-copyleft-var",
    "Linux-OpenIB",
    "LOOP",
    "LPD-document",
    "LPL-1.0",
    "LPL-1.02",
    "LPPL-1.0",
    "LPPL-1.1",
    "LPPL-1.2",
    "LPPL-1.3a",
    "LPPL-1.3c",
    "lsof",
    "Lucida-Bitmap-Fonts",
    "LZMA-SDK-9.11-to-9.20",
    "LZMA-SDK-9.22",
    "Mackerras-3-Clause",
    "Mackerras-3-Clause-acknowledgment",
    "magaz",
    "mailprio",
    "MakeIndex",
    "Martin-Birgmeier",
    "McPhee-slideshow",
    "metamail",
    "Minpack",
    "MirOS",
    "MIT",
    "MIT-0",
    "MIT-advertising",
    "MIT-CMU",
    "MIT-enna",
    "MIT-feh",
    "MIT-Festival",
    "MIT-Khronos-old",
    "MIT-Modern-Variant",
    "MIT-open-group",
    "MIT-testregex",
    "MIT-Wu",
    "MITNFA",
    "MMIXware",
    "Motosoto",
    "MPEG-SSG",
    "mpi-permissive",
    "mpich2",
    "MPL-1.0",
    "MPL-1.1",
    "MPL-2.0",
    "MPL-2.0-no-copyleft-exception",
    "mplus",
    "MS-LPL",
    "MS-PL",
    "MS-RL",
    "MTLL",
    "MulanPSL-1.0",
    "MulanPSL-2.0",
    "Multics",
    "Mup",
    "NAIST-2003",
    "NASA-1.3",
    "Naumen",
    "NBPL-1.0",
    "NCGL-UK-2.0",
    "NCSA",
    "Net-SNMP",
    "NetCDF",
    "Newsletr",
    "NGPL",
    "NICTA-1.0",
    "NIST-PD",
    "NIST-PD-fallback",
    "NIST-Software",
    "NLOD-1.0",
    "NLOD-2.0",
    "NLPL",
    "Nokia",
    "NOSL",
    "Noweb",
    "NPL-1.0",
    "NPL-1.1",
    "NPOSL-3.0",
    "NRL",
    "NTP",
    "NTP-0",
    "Nunit",
    "O-UDA-1.0",
    "OCCT-PL",
    "OCLC-2.0",
    "ODbL-1.0",
    "ODC-By-1.0",
    "OFFIS",
    "OFL-1.0",
    "OFL-1.0-no-RFN",
    "OFL-1.0-RFN",
    "OFL-1.1",
    "OFL-1.1-no-RFN",
    "OFL-1.1-RFN",
    "OGC-1.0",
    "OGDL-Taiwan-1.0",
    "OGL-Canada-2.0",
    "OGL-UK-1.0",
    "OGL-UK-2.0",
    "OGL-UK-3.0",
    "OGTSL",
    "OLDAP-1.1",
    "OLDAP-1.2",
    "OLDAP-1.3",
    "OLDAP-1.4",
    "OLDAP-2.0",
    "OLDAP-2.0.1",
    "OLDAP-2.1",
    "OLDAP-2.2",
    "OLDAP-2.2.1",
    "OLDAP-2.2.2",
    "OLDAP-2.3",
    "OLDAP-2.4",
    "OLDAP-2.5",
    "OLDAP-2.6",
    "OLDAP-2.7",
    "OLDAP-2.8",
    "OLFL-1.3",
    "OML",
    "OpenPBS-2.3",
    "OpenSSL",
    "OpenSSL-standalone",
    "OpenVision",
    "OPL-1.0",
    "OPL-UK-3.0",
    "OPUBL-1.0",
    "OSET-PL-2.1",
    "OSL-1.0",
    "OSL-1.1",
    "OSL-2.0",
    "OSL-2.1",
    "OSL-3.0",
    "PADL",
    "Parity-6.0.0",
    "Parity-7.0.0",
    "PDDL-1.0",
    "PHP-3.0",
    "PHP-3.01",
    "Pixar",
    "Plexus",
    "pnmstitch",
    "PolyForm-Noncommercial-1.0.0",
    "PolyForm-Small-Business-1.0.0",
    "PostgreSQL",
    "PSF-2.0",
    "psfrag",
    "psutils",
    "Python-2.0",
    "Python-2.0.1",
    "python-ldap",
    "Qhull",
    "QPL-1.0",
    "QPL-1.0-INRIA-2004",
    "radvd",
    "Rdisc",
    "RHeCos-1.1",
    "RPL-1.1",
    "RPL-1.5",
    "RPSL-1.0",
    "RSA-MD",
    "RSCPL",
    "Ruby",
    "SAX-PD",
    "SAX-PD-2.0",
    "Saxpath",
    "SCEA",
    "SchemeReport",
    "Sendmail",
    "Sendmail-8.23",
    "SGI-B-1.0",
    "SGI-B-1.1",
    "SGI-B-2.0",
    "SGI-OpenGL",
    "SGP4",
    "SHL-0.5",
    "SHL-0.51",
    "SimPL-2.0",
    "SISSL",
    "SISSL-1.2",
    "SL",
    "Sleepycat",
    "SMLNJ",
    "SMPPL",
    "SNIA",
    "snprintf",
    "softSurfer",
    "Soundex",
    "Spencer-86",
    "Spencer-94",
    "Spencer-99",
    "SPL-1.0",
    "ssh-keyscan",
    "SSH-OpenSSH",
    "SSH-short",
    "SSLeay-standalone",
    "SSPL-1.0",
    "StandardML-NJ",
    "SugarCRM-1.1.3",
    "Sun-PPP",
    "SunPro",
    "SWL",
    "swrule",
    "Symlinks",
    "TAPR-OHL-1.0",
    "TCL",
    "TCP-wrappers",
    "TermReadKey",
    "TGPPL-1.0",
    "TMate",
    "TORQUE-1.1",
    "TOSL",
    "TPDL",
    "TPL-1.0",
    "TTWL",
    "TTYP0",
    "TU-Berlin-1.0",
    "TU-Berlin-2.0",
    "UCAR",
    "UCL-1.0",
    "ulem",
    "UMich-Merit",
    "Unicode-3.0",
    "Unicode-DFS-2015",
    "Unicode-DFS-2016",
    "Unicode-TOU",
    "UnixCrypt",
    "Unlicense",
    "UPL-1.0",
    "URT-RLE",
    "Vim",
    "VOSTROM",
    "VSL-1.0",
    "W3C",
    "W3C-19980720",
    "W3C-20150513",
    "w3m",
    "Watcom-1.0",
    "Widget-Workshop",
    "Wsuipa",
    "WTFPL",
    "wxWindows",
    "X11",
    "X11-distribute-modifications-variant",
    "Xdebug-1.03",
    "Xerox",
    "Xfig",
    "XFree86-1.1",
    "xinetd",
    "xkeyboard-config-Zinoviev",
    "xlock",
    "Xnet",
    "xpp",
    "XSkat",
    "YPL-1.0",
    "YPL-1.1",
    "Zed",
    "Zeeff",
    "Zend-2.0",
    "Zimbra-1.3",
    "Zimbra-1.4",
    "Zlib",
    "zlib-acknowledgement",
    "ZPL-1.1",
    "ZPL-2.0",
    "ZPL-2.1",
];


/***/ }),

/***/ "./src/util/onsCustomElement.tsx":
/*!***************************************!*\
  !*** ./src/util/onsCustomElement.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onsCustomElement)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// https://github.com/OnsenUI/OnsenUI/blob/90c0aeb2b2acadfefb66a3da038b6b09cfb5b9c8/react-onsenui/src/onsCustomElement.jsx


const kebabize = (camelString) => camelString.replace(/([a-zA-Z])([A-Z])/g, "$1-$2").toLowerCase();
const addDeprecated = (props, deprecated) => {
    const propsCopy = { ...props };
    const nameMap = {
        className: "class",
        ...deprecated,
    };
    for (const [oldName, newName] of Object.entries(nameMap)) {
        if (propsCopy[newName] === undefined && propsCopy[oldName] !== undefined) {
            propsCopy[newName] = propsCopy[oldName];
            delete propsCopy[oldName];
        }
    }
    return propsCopy;
};
function useCustomElementListener(ref, prop, handler) {
    const event = prop.slice(2).toLowerCase();
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const current = ref.current;
        current.addEventListener(event, handler);
        return function cleanup() {
            current.removeEventListener(event, handler);
        };
    }, [ref, handler]);
}
function useCustomElement(props, options, ref) {
    const notAttributes = options?.notAttributes || [];
    const deprecated = options?.deprecated || {};
    const properties = {};
    for (const [prop, value] of Object.entries(addDeprecated(props, deprecated))) {
        const jsName = kebabize(prop);
        if (notAttributes.includes(prop)) {
            (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
                ref.current[prop] = value;
            });
        }
        else if (/^on[A-Z]/.test(prop)) {
            useCustomElementListener(ref, prop, value);
        }
        else if (typeof value === "boolean") {
            properties[jsName] = value ? "" : null;
        }
        else if (typeof value === "object" && value !== null) {
            properties[jsName] = JSON.stringify(value);
        }
        else {
            properties[jsName] = value;
        }
    }
    return { properties };
}
function onsCustomElement(WrappedComponent, options) {
    return (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])(react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef((props, _ref) => {
        const ref = _ref || (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
        const { children, style, ...rest } = props;
        const { properties } = useCustomElement(rest, options, ref);
        return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(WrappedComponent, { ref: ref, key: WrappedComponent, style: style, ...properties }, children);
    }));
}


/***/ }),

/***/ "./src/util/stringFormat.ts":
/*!**********************************!*\
  !*** ./src/util/stringFormat.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatObjectEntries: () => (/* binding */ formatObjectEntries),
/* harmony export */   formatString: () => (/* binding */ formatString)
/* harmony export */ });
function formatString(template, object) {
    return template.replace(/\<(\w+(\.\w+)*)\>/gi, (match, key) => {
        const keys = key.split(".");
        let value = object;
        for (const k of keys) {
            if (k in value) {
                value = value[k];
            }
            else {
                return match;
            }
        }
        return formatString(String(value), object);
    });
}
function formatObjectEntries(object) {
    const formatValue = (value) => {
        if (typeof value === "string") {
            return value.replace(/\<(\w+(\.\w+)*)\>/gi, (match, key) => {
                const keys = key.split(".");
                let tempValue = object;
                for (const k of keys) {
                    if (k in tempValue) {
                        tempValue = tempValue[k];
                    }
                    else {
                        return match;
                    }
                }
                return formatValue(tempValue);
            });
        }
        else if (Array.isArray(value)) {
            return value.map((item) => formatValue(item));
        }
        else if (typeof value === "object" && value !== null) {
            const formattedObject = {};
            for (const prop in value) {
                formattedObject[prop] = formatValue(value[prop]);
            }
            return formattedObject;
        }
        return value;
    };
    const formattedObject = {};
    for (const key in object) {
        const formattedValue = formatValue(object[key]);
        formattedObject[key] = formattedValue;
    }
    return formattedObject;
}


/***/ }),

/***/ "./src/util/RouterUtil.js":
/*!********************************!*\
  !*** ./src/util/RouterUtil.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RouterUtil: () => (/* binding */ RouterUtil)
/* harmony export */ });
/*
 * routeStack : [userRoute, userRoute2, ...]
 * processStack: [
 * { type: push | pop | reset, route: userRoute },
 * { type: push | pop | reset, route: userRoute2 },
 * ...
 * ]
 */

const RouterUtil = {
  init: (routes) => {
    return {
      routeStack: [...routes],
      processStack: [],
    };
  },

  replace: ({ routeConfig, route, options, key }) => {
    const config = { ...routeConfig };
    const routeStack = [...config.routeStack];
    let processStack = [...config.processStack];

    if (key == null || processStack.filter((el) => el.key === key).length === 0) {
      const process = {
        type: "replace",
        route,
        options,
        key,
      };
      processStack = [...processStack, process];
    }

    return {
      routeStack,
      processStack,
    };
  },

  reset: ({ routeConfig, route, options, key }) => {
    const config = { ...routeConfig };
    const routeStack = [...config.routeStack];
    let processStack = [...config.processStack];

    if (key == null || processStack.filter((el) => el.key === key).length === 0) {
      const process = {
        type: "reset",
        route,
        options,
        key,
      };

      processStack = [...processStack, process];
    }

    return {
      routeStack,
      processStack,
    };
  },

  push: ({ routeConfig, route, options, key, props, context, extra }) => {
    const config = { ...routeConfig };
    const routeStack = [...config.routeStack];
    let processStack = [...config.processStack];

    if (key == null || config.processStack.filter((el) => el.key === key).length === 0) {
      const process = {
        type: "push",
        route,
        options,
        key,
        props,
        context,
        extra,
      };

      processStack = [...processStack, process];
    }

    return {
      routeStack,
      processStack,
    };
  },

  pop: ({ routeConfig, options, key }) => {
    const config = { ...routeConfig };
    const routeStack = [...config.routeStack];
    let processStack = [...config.processStack];
    /**
     * Safegaurd to ensure that not
     * too many pages are popped from
     * the stack.
     */
    const pops = processStack.filter((x) => x.type === "pop").length;

    if (pops + 1 >= routeStack.length) {
      console.warn("Page stack is already empty");
      return config;
    }

    const process = {
      type: "pop",
      key,
      options,
    };

    processStack = [...processStack, process];

    return {
      routeStack,
      processStack,
    };
  },

  postPush: (routeConfig) => {
    const config = { ...routeConfig };
    let routeStack = [...config.routeStack];
    const processStack = [...config.processStack];

    const next = processStack.shift();
    const type = next.type;
    let route = next.route;

    if (type === "push") {
      if (route !== null) {
        routeStack = [...routeStack, route];
      }
    } else if (type === "reset") {
      if (!Array.isArray(route)) route = [route];
      routeStack = route;
    } else if (type === "replace") {
      routeStack.pop();
      routeStack.push(route);
    }

    return {
      routeStack,
      processStack,
    };
  },

  postPop: (routeConfig) => {
    const config = { ...routeConfig };
    let routeStack = [...config.routeStack];
    let processStack = [...config.processStack];
    routeStack = routeStack.slice(0, routeStack.length - 1);
    processStack = processStack.slice(1);

    return {
      routeStack,
      processStack,
    };
  },
};


/***/ }),

/***/ "./src/util/path.js":
/*!**************************!*\
  !*** ./src/util/path.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Path: () => (/* binding */ Path),
/* harmony export */   path: () => (/* binding */ path)
/* harmony export */ });
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = "";
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length) code = path.charCodeAt(i);
    else if (code === 47 /*/*/) break;
    else code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (
          res.length < 2 ||
          lastSegmentLength !== 2 ||
          res.charCodeAt(res.length - 1) !== 46 /*.*/ ||
          res.charCodeAt(res.length - 2) !== 46 /*.*/
        ) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = "";
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0) res += "/..";
          else res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
        else res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

class Path {
  cwd = undefined;
  sep = "/";
  delimiter = ":";
  win32 = null;
  posix = null;

  constructor(cwd) {
    this.cwd = cwd;
  }

  resolve() {
    var resolvedPath = "";
    var resolvedAbsolute = false;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0) path = arguments[i];
      else {
        if (this.cwd === undefined) this.cwd = "/";
        path = this.cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + "/" + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0) return "/" + resolvedPath;
      else return "/";
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return ".";
    }
  }

  normalize(path) {
    assertPath(path);

    if (path.length === 0) return ".";

    var isAbsolute = path.charCodeAt(0) === 47; /*/*/
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47; /*/*/

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = ".";
    if (path.length > 0 && trailingSeparator) path += "/";

    if (isAbsolute) return "/" + path;
    return path;
  }

  isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  }

  join() {
    if (arguments.length === 0) return ".";
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined) joined = arg;
        else joined += "/" + arg;
      }
    }
    if (joined === undefined) return ".";
    return posix.normalize(joined);
  }

  relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return "";

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return "";

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/) break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/) break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode) break;
      else if (fromCode === 47 /*/*/) lastCommonSep = i;
    }

    var out = "";
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0) out += "..";
        else out += "/..";
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/) ++toStart;
      return to.slice(toStart);
    }
  }

  _makeLong(path) {
    return path;
  }

  dirname(path) {
    assertPath(path);
    if (path.length === 0) return ".";
    var code = path.charCodeAt(0);
    var hasRoot = code === 47; /*/*/
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? "/" : ".";
    if (hasRoot && end === 1) return "//";
    return path.slice(0, end);
  }

  basename(path, ext) {
    if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return "";
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;
      else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            start = i + 1;
            break;
          }
        } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return "";
      return path.slice(start, end);
    }
  }

  extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i;
        else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (
      startDot === -1 ||
      end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
    ) {
      return "";
    }
    return path.slice(startDot, end);
  }

  format(pathObject) {
    if (pathObject === null || typeof pathObject !== "object") {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format("/", pathObject);
  }

  parse(path) {
    assertPath(path);

    var ret = { root: "", dir: "", base: "", ext: "", name: "" };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47; /*/*/
    var start;
    if (isAbsolute) {
      ret.root = "/";
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1) startDot = i;
        else if (preDotState !== 1) preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (
      startDot === -1 ||
      end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      (preDotState === 1 && startDot === end - 1 && startDot === startPart + 1)
    ) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
        else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
    else if (isAbsolute) ret.dir = "/";

    return ret;
  }
}

const path = new Path(undefined);



/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"com.dergoogler.mmrl.web","description":"","config":{"application_id":"com.dergoogler.mmrl","min_sdk":26,"target_sdk":34,"version_name":"2.21.22","version_code":22122,"prerelease":false,"verified_hosts":[["mmrl","i"],["localhost","i"],["mmrl.dergoogler.com","i"],["dergoogler.com","i"],["dergoogler.github.io","i"],["gr.dergoogler.com","i"],["googlers-repo.github.io","i"],["(localhost|\\\\b(?:(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d\\\\d?)\\\\.){3}(?:25[0-5]|2[0-4]\\\\d|[01]?\\\\d\\\\d?)(?::\\\\d{0,4})?\\\\b)","g"]]},"main":"index.tsx","keywords":[],"author":"Der_Googler","license":"GPL-3.0","scripts":{"start:dev":"webpack-dev-server --open --config webpack.dev.ts","start:prod":"npm run licensefix && webpack-dev-server --open --config webpack.prod.ts","web:dev":"webpack --config webpack.dev.ts","web:prod":"npm run licensefix && webpack --config webpack.prod.ts","web:prod-app":"npm run web:prod","licensefix":"node licensefix.js"},"resolutions":{"react":"^18.2.0","react-dom":"^18.1.0","@types/webpack":"^5.28.0"},"dependencies":{"@babel/runtime":"^7.23.2","@babel/standalone":"^7.24.0","@emotion/react":"^11.9.0","@emotion/styled":"^11.8.1","@giscus/react":"^2.4.0","@monaco-editor/react":"^4.6.0","@mui/icons-material":"^5.16.5","@mui/lab":"^5.0.0-alpha.160","@mui/material":"^5.15.2","@nyariv/sandboxjs":"^0.8.23","@primer/octicons-react":"^19.9.0","ajv":"^8.12.0","anser":"^2.1.1","axios":"^1.6.2","default-composer":"^0.6.0","eruda":"^3.0.0","escape-carriage":"^1.3.1","flatlist-react":"^1.5.14","googlers-tools":"^1.2.8","highlight.js":"^11.6.0","ini":"^4.1.1","linkify-it":"^5.0.0","localforage":"^1.10.0","markdown-to-jsx":"^7.4.0","material-icons":"^1.10.8","material-ui-confirm":"^3.0.11","modfs":"^1.1.1","monaco-editor":"^0.48.0","monaco-editor-core":"^0.50.0","monaco-languageclient":"^6.5.0","object-assign":"^4.1.1","onsenui":"^2.12.8","properties-file":"^3.2.10","react":"^18.2.0","react-device-detect":"^2.2.3","react-disappear":"^1.1.3","react-dom":"^18.2.0","react-fast-marquee":"^1.6.1","react-onsenui":"^1.13.2","react-render-tools":"^1.0.1","react-syntax-highlighter":"^15.5.0","react-zoom-pan-pinch":"^3.3.0","reflect-metadata":"^0.2.2","underscore":"^1.13.6","usehooks-ts":"^3.1.0","yaml":"^2.3.4"},"devDependencies":{"@babel/core":"^7.24.0","@babel/preset-env":"^7.23.6","@babel/preset-react":"^7.23.3","@octokit/rest":"^21.0.1","@types/babel__core":"^7.20.2","@types/babel__standalone":"^7.1.7","@types/fs-extra":"^11.0.4","@types/ini":"^4.1.0","@types/node":"^18.0.6","@types/object-assign":"^4.0.30","@types/react":"^18.2.67","@types/react-dom":"^18.0.2","@types/react-onsenui":"^2.9.17","@types/react-syntax-highlighter":"^15.5.2","@types/uglifyjs-webpack-plugin":"^1.1.2","@types/underscore":"^1.11.15","@types/webpack":"^5.28.5","babel-loader":"^9.1.3","buffer":"^6.0.3","commander":"^11.0.0","css-loader":"^6.8.1","css-minimizer-webpack-plugin":"^4.0.0","dotenv":"^16.4.5","file-loader":"^6.2.0","filemanager-webpack-plugin":"^8.0.0","fs-extra":"^11.2.0","html-webpack-plugin":"^5.6.0","js-yaml-loader":"^1.2.2","license-checker":"^25.0.1","mini-css-extract-plugin":"^2.9.0","postcss-loader":"^7.3.3","raw-loader":"^4.0.2","sass":"^1.49.8","sass-loader":"^13.0.2","style-loader":"^3.3.3","terser-webpack-plugin":"^5.3.9","ts-loader":"^9.3.0","ts-node":"^10.9.2","tslib":"^2.4.0","typescript":"^5.2.2","url-loader":"^4.1.1","vscode":"^1.1.37","webpack":"^5.91.0","webpack-cli":"^5.1.4","webpack-dev-server":"^4.15.1","yaml-loader":"^0.8.0"}}');

/***/ }),

/***/ "./src/util/licenses.json":
/*!********************************!*\
  !*** ./src/util/licenses.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('[{"name":"@babel/runtime","author":null,"license":"MIT","description":"babel\'s modular runtime helpers","version":"7.24.8","source":"https://www.npmjs.com/package/@babel/runtime"},{"name":"@babel/standalone","author":null,"license":"MIT","description":"Standalone build of Babel for use in non-Node.js environments.","version":"7.24.0","source":"https://www.npmjs.com/package/@babel/standalone"},{"name":"@emotion/react","author":null,"license":"MIT","version":"11.11.3","source":"https://www.npmjs.com/package/@emotion/react"},{"name":"@emotion/styled","author":null,"license":"MIT","description":"styled API for emotion","version":"11.11.0","source":"https://www.npmjs.com/package/@emotion/styled"},{"name":"@giscus/react","author":null,"version":"2.4.0","source":"https://www.npmjs.com/package/@giscus/react"},{"name":"@monaco-editor/react","author":null,"license":"MIT","description":"Monaco Editor for React - use the monaco-editor in any React application without needing to use webpack (or rollup/parcel/etc) configuration files / plugins","version":"4.6.0","source":"https://www.npmjs.com/package/@monaco-editor/react"},{"name":"@mui/icons-material","author":null,"license":"MIT","description":"Material Design icons distributed as SVG React components.","version":"5.16.5","source":"https://www.npmjs.com/package/@mui/icons-material"},{"name":"@mui/lab","author":null,"license":"MIT","description":"Laboratory for new MUI modules.","version":"5.0.0-alpha.160","source":"https://www.npmjs.com/package/@mui/lab"},{"name":"@mui/material","author":null,"license":"MIT","description":"Material UI is an open-source React component library that implements Google\'s Material Design. It\'s comprehensive and can be used in production out of the box.","version":"5.15.4","source":"https://www.npmjs.com/package/@mui/material"},{"name":"@nyariv/sandboxjs","author":null,"license":"MIT","description":"Javascript sandboxing library.","version":"0.8.23","source":"https://www.npmjs.com/package/@nyariv/sandboxjs"},{"name":"@primer/octicons-react","author":null,"license":"MIT","description":"A scalable set of icons handcrafted with <3 by GitHub.","version":"19.9.0","source":"https://www.npmjs.com/package/@primer/octicons-react"},{"name":"ajv","author":null,"license":"MIT","description":"Another JSON Schema Validator","version":"8.12.0","source":"https://www.npmjs.com/package/ajv"},{"name":"anser","author":null,"license":"MIT","description":"A low level parser for ANSI sequences.","version":"2.1.1","source":"https://www.npmjs.com/package/anser"},{"name":"axios","author":null,"license":"MIT","description":"Promise based HTTP client for the browser and node.js","version":"1.6.5","source":"https://www.npmjs.com/package/axios"},{"name":"default-composer","author":null,"license":"MIT","description":"A JavaScript library that allows you to set default values for nested objects","version":"0.6.0","source":"https://www.npmjs.com/package/default-composer"},{"name":"eruda","author":null,"license":"MIT","description":"Console for Mobile Browsers","version":"3.0.1","source":"https://www.npmjs.com/package/eruda"},{"name":"escape-carriage","author":null,"license":"MIT","description":"Escape carriage return the right way.","version":"1.3.1","source":"https://www.npmjs.com/package/escape-carriage"},{"name":"flatlist-react","author":null,"license":"MIT","description":"A helpful utility component to handle lists in react like a champ","version":"1.5.14","source":"https://www.npmjs.com/package/flatlist-react"},{"name":"googlers-tools","author":null,"license":"GPL-3.0","description":"My own tools / scripts that I use.","version":"1.4.5","source":"https://www.npmjs.com/package/googlers-tools"},{"name":"highlight.js","author":null,"license":"BSD-3-Clause","description":"Syntax highlighting with language autodetection.","version":"11.9.0","source":"https://www.npmjs.com/package/highlight.js"},{"name":"ini","author":null,"license":"ISC","description":"An ini encoder/decoder for node","version":"4.1.1","source":"https://www.npmjs.com/package/ini"},{"name":"linkify-it","author":null,"license":"MIT","description":"Links recognition library with FULL unicode support","version":"5.0.0","source":"https://www.npmjs.com/package/linkify-it"},{"name":"localforage","author":null,"license":"Apache-2.0","description":"Offline storage, improved.","version":"1.10.0","source":"https://www.npmjs.com/package/localforage"},{"name":"markdown-to-jsx","author":null,"license":"MIT","description":"Convert markdown to JSX with ease for React and React-like projects. Super lightweight and highly configurable.","version":"7.4.0","source":"https://www.npmjs.com/package/markdown-to-jsx"},{"name":"material-icons","author":null,"license":"Apache-2.0","description":"Latest icon fonts and CSS for self-hosting material design icons.","version":"1.13.12","source":"https://www.npmjs.com/package/material-icons"},{"name":"material-ui-confirm","author":null,"license":"MIT","description":"Simple confirmation dialogs built on top of @mui/material","version":"3.0.11","source":"https://www.npmjs.com/package/material-ui-confirm"},{"name":"modfs","author":null,"license":"MIT","description":"ModFS is a json format processor and also used in MMRL as the ModFS system","version":"1.1.1","source":"https://www.npmjs.com/package/modfs"},{"name":"monaco-editor","author":null,"license":"MIT","description":"A browser based code editor","version":"0.48.0","source":"https://www.npmjs.com/package/monaco-editor"},{"name":"monaco-editor-core","author":null,"license":"MIT","description":"A browser based code editor","version":"0.50.0","source":"https://www.npmjs.com/package/monaco-editor-core"},{"name":"monaco-languageclient","author":"TypeFox GmbH","license":"MIT","description":"Monaco Language client implementation","version":"6.6.1","source":"https://www.npmjs.com/package/monaco-languageclient"},{"name":"object-assign","author":"Sindre Sorhus","license":"MIT","description":"ES2015 `Object.assign()` ponyfill","version":"4.1.1","source":"https://www.npmjs.com/package/object-assign"},{"name":"onsenui","author":null,"license":"Apache-2.0","description":"HTML5 Mobile Framework & UI Components","version":"2.12.8","source":"https://www.npmjs.com/package/onsenui"},{"name":"properties-file","author":null,"license":"MIT","description":".properties file parser, editor, formatter and Webpack loader.","version":"3.3.16","source":"https://www.npmjs.com/package/properties-file"},{"name":"react","author":null,"license":"MIT","description":"React is a JavaScript library for building user interfaces.","version":"18.2.0","source":"https://www.npmjs.com/package/react"},{"name":"react-device-detect","author":"Michael Laktionov","license":"MIT","description":"Detect device type and render your component according to it","version":"2.2.3","source":"https://www.npmjs.com/package/react-device-detect"},{"name":"react-disappear","author":null,"license":"MIT","description":"Detects if the inner children are visible","version":"1.1.3","source":"https://www.npmjs.com/package/react-disappear"},{"name":"react-dom","author":null,"license":"MIT","description":"React package for working with the DOM.","version":"18.2.0","source":"https://www.npmjs.com/package/react-dom"},{"name":"react-fast-marquee","author":null,"license":"MIT","description":"A lightweight React component that utilizes the power of CSS animations to create silky smooth marquees.","version":"1.6.2","source":"https://www.npmjs.com/package/react-fast-marquee"},{"name":"react-onsenui","author":null,"license":"Apache-2.0","description":"Onsen UI - React Components for Hybrid Cordova/PhoneGap Apps with Material Design and iOS UI components","version":"1.13.3","source":"https://www.npmjs.com/package/react-onsenui"},{"name":"react-render-tools","author":null,"license":"GPL-3.0","description":"Simple tools to make react render easier to use","version":"1.0.1","source":"https://www.npmjs.com/package/react-render-tools"},{"name":"react-syntax-highlighter","author":null,"license":"MIT","description":"syntax highlighting component for react with prismjs or highlightjs ast using inline styles","version":"15.5.0","source":"https://www.npmjs.com/package/react-syntax-highlighter"},{"name":"react-zoom-pan-pinch","author":null,"license":"MIT","description":"Zoom and pan html elements in easy way","version":"3.3.0","source":"https://www.npmjs.com/package/react-zoom-pan-pinch"},{"name":"reflect-metadata","author":"Ron Buckton","license":"Apache-2.0","description":"Polyfill for Metadata Reflection API","version":"0.2.2","source":"https://www.npmjs.com/package/reflect-metadata"},{"name":"underscore","author":null,"license":"MIT","description":"JavaScript\'s functional programming helper library.","version":"1.13.6","source":"https://www.npmjs.com/package/underscore"},{"name":"usehooks-ts","author":null,"license":"MIT","description":"React hook library, ready to use, written in Typescript.","version":"3.1.0","source":"https://www.npmjs.com/package/usehooks-ts"},{"name":"yaml","author":null,"license":"ISC","description":"JavaScript parser and stringifier for YAML","version":"2.3.4","source":"https://www.npmjs.com/package/yaml"}]');

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcom_dergoogler_mmrl_web"] = self["webpackChunkcom_dergoogler_mmrl_web"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.f34f084284837bb5e945.js.map