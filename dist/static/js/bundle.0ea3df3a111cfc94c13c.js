/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 488:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
;// CONCATENATED MODULE: ./src/assets/login.svg
const login_namespaceObject = __webpack_require__.p + "./static/images/login80966d41e754f8ef10d4.svg";
;// CONCATENATED MODULE: ./src/hooks/useShowPassHook.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useShowPassHook = function useShowPassHook(showState) {
  var _useState = (0,react.useState)(showState),
    _useState2 = _slicedToArray(_useState, 2),
    showPassword = _useState2[0],
    setShowPassword = _useState2[1];
  var togglePasswordHandler = function togglePasswordHandler(state) {
    setShowPassword(state);
  };
  return [showPassword, togglePasswordHandler];
};
/* harmony default export */ const hooks_useShowPassHook = (useShowPassHook);
// EXTERNAL MODULE: ./node_modules/react-icons/ai/index.esm.js
var index_esm = __webpack_require__(193);
;// CONCATENATED MODULE: ./src/components/auth/Login.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Login_slicedToArray(arr, i) { return Login_arrayWithHoles(arr) || Login_iterableToArrayLimit(arr, i) || Login_unsupportedIterableToArray(arr, i) || Login_nonIterableRest(); }
function Login_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Login_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Login_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Login_arrayLikeToArray(o, minLen); }
function Login_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Login_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Login_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Login = function Login(props) {
  var _useShowPassHook = hooks_useShowPassHook(false),
    _useShowPassHook2 = Login_slicedToArray(_useShowPassHook, 2),
    showPassword = _useShowPassHook2[0],
    setShowPassword = _useShowPassHook2[1];
  var _useState = (0,react.useState)({
      username: "",
      pass: ""
    }),
    _useState2 = Login_slicedToArray(_useState, 2),
    auth = _useState2[0],
    setAuth = _useState2[1];
  var _useState3 = (0,react.useState)(true),
    _useState4 = Login_slicedToArray(_useState3, 2),
    loginDisabled = _useState4[0],
    setLoginDisabled = _useState4[1];
  var setUserameHandler = function setUserameHandler(event) {
    setAuth(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        username: event.target.value
      });
    });
  };
  var setPassHandler = function setPassHandler(event) {
    setAuth(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        pass: event.target.value
      });
    });
  };
  (0,react.useEffect)(function () {
    console.log(auth.pass.length, auth.username.length);
    if (auth.pass.length > 7 && auth.username.length > 0) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  }, [auth]);
  return /*#__PURE__*/react.createElement("div", {
    className: "main-container --flex-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "img-container"
  }, /*#__PURE__*/react.createElement("img", {
    src: login_namespaceObject,
    alt: "login"
  })), /*#__PURE__*/react.createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/react.createElement("form", {
    className: "--form-control"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "--color-danger --text-center"
  }, "Login"), /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "--width-100",
    placeholder: "username",
    onInput: setUserameHandler
  }), /*#__PURE__*/react.createElement("div", {
    className: "password"
  }, /*#__PURE__*/react.createElement("input", {
    type: showPassword ? "text" : "password",
    className: "--width-100",
    placeholder: "password",
    onInput: setPassHandler
  }), /*#__PURE__*/react.createElement("span", {
    className: "icon",
    onClick: function onClick() {
      setShowPassword(!showPassword);
    }
  }, showPassword ? /*#__PURE__*/react.createElement(index_esm/* AiOutlineEyeInvisible */.I0d, null) : /*#__PURE__*/react.createElement(index_esm/* AiOutlineEye */.Zju, null))), /*#__PURE__*/react.createElement("button", {
    className: loginDisabled ? "--btn --btn-primary --btn-block btn-disabled" : "--btn --btn-primary --btn-block ",
    disabled: loginDisabled
  }, "Login"), /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "--text-sm",
    onClick: props.onReset
  }, "forgot password"), /*#__PURE__*/react.createElement("span", {
    className: "--text-sm --block"
  }, "Don't have an account?", /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "--text-sm",
    onClick: props.onRegister
  }, "Register")))));
};
/* harmony default export */ const auth_Login = (Login);
;// CONCATENATED MODULE: ./src/assets/register.svg
const register_namespaceObject = __webpack_require__.p + "./static/images/registerf1f0c620ef428d9d3f19.svg";
// EXTERNAL MODULE: ./node_modules/react-icons/go/index.esm.js
var go_index_esm = __webpack_require__(653);
// EXTERNAL MODULE: ./node_modules/react-icons/fa/index.esm.js
var fa_index_esm = __webpack_require__(583);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var bi_index_esm = __webpack_require__(516);
;// CONCATENATED MODULE: ./src/components/tooltip/Tooltip.js


var Tooltip = function Tooltip(props) {
  return /*#__PURE__*/react.createElement("span", {
    className: "tooltip"
  }, props.text);
};
/* harmony default export */ const tooltip_Tooltip = (Tooltip);
;// CONCATENATED MODULE: ./src/components/auth/Register.js
function Register_typeof(o) { "@babel/helpers - typeof"; return Register_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, Register_typeof(o); }
function Register_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function Register_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? Register_ownKeys(Object(t), !0).forEach(function (r) { Register_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Register_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Register_defineProperty(obj, key, value) { key = Register_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Register_toPropertyKey(arg) { var key = Register_toPrimitive(arg, "string"); return Register_typeof(key) === "symbol" ? key : String(key); }
function Register_toPrimitive(input, hint) { if (Register_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Register_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function Register_slicedToArray(arr, i) { return Register_arrayWithHoles(arr) || Register_iterableToArrayLimit(arr, i) || Register_unsupportedIterableToArray(arr, i) || Register_nonIterableRest(); }
function Register_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Register_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Register_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Register_arrayLikeToArray(o, minLen); }
function Register_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Register_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Register_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Register = function Register(props) {
  var _useShowPassHook = hooks_useShowPassHook(false),
    _useShowPassHook2 = Register_slicedToArray(_useShowPassHook, 2),
    showPassword = _useShowPassHook2[0],
    setShowPassword = _useShowPassHook2[1];
  var _useState = (0,react.useState)(false),
    _useState2 = Register_slicedToArray(_useState, 2),
    showIndicator = _useState2[0],
    setShowIndicator = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = Register_slicedToArray(_useState3, 2),
    pass = _useState4[0],
    setPass = _useState4[1];
  var emailValue = (0,react.useRef)("");
  var _useState5 = (0,react.useState)({
      passLetter: false,
      passNumber: false,
      passChar: false,
      passLength: false
    }),
    _useState6 = Register_slicedToArray(_useState5, 2),
    validPass = _useState6[0],
    setValidPass = _useState6[1];
  var showIndicatorHandler = function showIndicatorHandler() {
    setShowIndicator(true);
  };
  var setPassHandler = function setPassHandler(event) {
    setPass(event.target.value);
  };
  var hoverHandler = function hoverHandler() {
    setIsHovered(true);
  };
  var unhoverHandler = function unhoverHandler() {
    setIsHovered(false);
  };
  var buttonDisableHnalder = function buttonDisableHnalder() {
    if (!validPass.passChar || !validPass.passLength || !validPass.passLetter || !validPass.passNumber || !emailIsValid || emailValue.current.value.length < 1) {
      console.log(emailValue.current.value);
      return true;
    } else {
      return false;
    }
  };
  var _useState7 = (0,react.useState)(false),
    _useState8 = Register_slicedToArray(_useState7, 2),
    isHovered = _useState8[0],
    setIsHovered = _useState8[1];
  var _useState9 = (0,react.useState)(true),
    _useState10 = Register_slicedToArray(_useState9, 2),
    emailIsValid = _useState10[0],
    setEmialIsValid = _useState10[1];
  var emailIsValidHandler = function emailIsValidHandler(event) {
    if (event.target.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) || event.target.value.length < 1) {
      setEmialIsValid(true);
    } else {
      setEmialIsValid(false);
    }
  };
  (0,react.useEffect)(function () {
    //check lower and uppercase
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      setValidPass(function (prevState) {
        return Register_objectSpread(Register_objectSpread({}, prevState), {}, {
          passLetter: true
        });
      });
    } else {
      setValidPass(function (prevState) {
        return Register_objectSpread(Register_objectSpread({}, prevState), {}, {
          passLetter: false
        });
      });
    }

    //check for numbers
    if (pass.match(/([0-9])/)) {
      setValidPass(function (prevState) {
        return Register_objectSpread(Register_objectSpread({}, prevState), {}, {
          passNumber: true
        });
      });
    } else {
      setValidPass(function (prevState) {
        return Register_objectSpread(Register_objectSpread({}, prevState), {}, {
          passNumber: false
        });
      });
    }

    //check for special char
    if (pass.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      setValidPass(function (prevState) {
        return Register_objectSpread(Register_objectSpread({}, prevState), {}, {
          passChar: true
        });
      });
    } else {
      setValidPass(function (prevState) {
        return Register_objectSpread(Register_objectSpread({}, prevState), {}, {
          passChar: false
        });
      });
    }

    //check length
    if (pass.length > 7) {
      setValidPass(function (prevState) {
        return Register_objectSpread(Register_objectSpread({}, prevState), {}, {
          passLength: true
        });
      });
    } else {
      setValidPass(function (prevState) {
        return Register_objectSpread(Register_objectSpread({}, prevState), {}, {
          passLength: false
        });
      });
    }
  }, [pass]);
  return /*#__PURE__*/react.createElement("div", {
    className: "main-container --flex-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-container"
  }, /*#__PURE__*/react.createElement("form", {
    className: "--form-control"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "--color-danger --text-center"
  }, "Register"), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("input", {
    type: "text",
    className: "--width-100",
    placeholder: "Username"
  })), /*#__PURE__*/react.createElement("div", {
    className: "email"
  }, /*#__PURE__*/react.createElement("input", {
    type: "email",
    className: "--width-100",
    placeholder: "Email",
    onInput: emailIsValidHandler,
    ref: emailValue
  }), !emailIsValid && /*#__PURE__*/react.createElement("span", {
    className: "icon",
    onMouseOver: hoverHandler,
    onMouseOut: unhoverHandler
  }, /*#__PURE__*/react.createElement(bi_index_esm/* BiErrorCircle */.Cw1, {
    color: "red"
  })), isHovered && /*#__PURE__*/react.createElement(tooltip_Tooltip, {
    text: "Email Not valid!"
  })), /*#__PURE__*/react.createElement("div", {
    className: "password"
  }, /*#__PURE__*/react.createElement("input", {
    type: showPassword ? "text" : "password",
    className: "--width-100",
    placeholder: "password",
    onFocus: showIndicatorHandler,
    onInput: setPassHandler
  }), /*#__PURE__*/react.createElement("span", {
    className: "icon",
    onClick: function onClick() {
      setShowPassword(!showPassword);
    }
  }, showPassword ? /*#__PURE__*/react.createElement(index_esm/* AiOutlineEyeInvisible */.I0d, null) : /*#__PURE__*/react.createElement(index_esm/* AiOutlineEye */.Zju, null))), /*#__PURE__*/react.createElement("button", {
    disabled: buttonDisableHnalder(),
    className: buttonDisableHnalder() ? "--btn --btn-primary --btn-block btn-disabled" : "--btn --btn-primary --btn-block "
  }, "Register"), /*#__PURE__*/react.createElement("span", {
    className: "--text-sm --block"
  }, "Have an account?", /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "--text-sm",
    onClick: props.onLogin
  }, "Login")), /*#__PURE__*/react.createElement("div", {
    className: showIndicator ? "show-indicator" : "hide-indicator"
  }, /*#__PURE__*/react.createElement("ul", {
    className: "--list-style-none --card --bg-grey --text-sm --p"
  }, /*#__PURE__*/react.createElement("p", {
    className: "--text-sm"
  }, "Password Strength indicator"), /*#__PURE__*/react.createElement("li", {
    className: validPass.passLetter ? "pass-green" : "pass-red"
  }, /*#__PURE__*/react.createElement("span", {
    className: "--align-center"
  }, validPass.passLetter ? /*#__PURE__*/react.createElement(fa_index_esm/* FaCheck */.l_A, null) : /*#__PURE__*/react.createElement(go_index_esm/* GoDotFill */.Zh5, null), "\xA0 Lowercase & Uppercase")), /*#__PURE__*/react.createElement("li", {
    className: validPass.passNumber ? "pass-green" : "pass-red"
  }, /*#__PURE__*/react.createElement("span", {
    className: "--align-center"
  }, validPass.passNumber ? /*#__PURE__*/react.createElement(fa_index_esm/* FaCheck */.l_A, null) : /*#__PURE__*/react.createElement(go_index_esm/* GoDotFill */.Zh5, null), "\xA0 Numbers (0-9)")), /*#__PURE__*/react.createElement("li", {
    className: validPass.passChar ? "pass-green" : "pass-red"
  }, /*#__PURE__*/react.createElement("span", {
    className: "--align-center"
  }, validPass.passChar ? /*#__PURE__*/react.createElement(fa_index_esm/* FaCheck */.l_A, null) : /*#__PURE__*/react.createElement(go_index_esm/* GoDotFill */.Zh5, null), "\xA0 Special characters(!@#$%^&*)")), /*#__PURE__*/react.createElement("li", {
    className: validPass.passLength ? "pass-green" : "pass-red"
  }, /*#__PURE__*/react.createElement("span", {
    className: "--align-center"
  }, validPass.passLength ? /*#__PURE__*/react.createElement(fa_index_esm/* FaCheck */.l_A, null) : /*#__PURE__*/react.createElement(go_index_esm/* GoDotFill */.Zh5, null), "\xA0 At least 8 characters")))))), /*#__PURE__*/react.createElement("div", {
    className: "img-container"
  }, /*#__PURE__*/react.createElement("img", {
    src: register_namespaceObject,
    alt: "register"
  })));
};
/* harmony default export */ const auth_Register = (Register);
;// CONCATENATED MODULE: ./src/assets/forgot.svg
const forgot_namespaceObject = __webpack_require__.p + "./static/images/forgot0ffd5c8d78ea83ebec4a.svg";
;// CONCATENATED MODULE: ./src/components/auth/Reset.js
function Reset_slicedToArray(arr, i) { return Reset_arrayWithHoles(arr) || Reset_iterableToArrayLimit(arr, i) || Reset_unsupportedIterableToArray(arr, i) || Reset_nonIterableRest(); }
function Reset_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Reset_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Reset_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Reset_arrayLikeToArray(o, minLen); }
function Reset_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function Reset_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function Reset_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var Reset = function Reset(props) {
  var emailValue = (0,react.useRef)("");
  var _useState = (0,react.useState)(false),
    _useState2 = Reset_slicedToArray(_useState, 2),
    emailIsValid = _useState2[0],
    setEmialIsValid = _useState2[1];
  var emailIsValidHandler = function emailIsValidHandler() {
    if (emailValue.current.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setEmialIsValid(true);
    } else {
      setEmialIsValid(false);
    }
  };
  return /*#__PURE__*/react.createElement("div", {
    className: "main-container --flex-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "form-container reset"
  }, /*#__PURE__*/react.createElement("form", {
    className: "--form-control"
  }, /*#__PURE__*/react.createElement("h2", {
    className: "--color-danger --text-center"
  }, "Reset"), /*#__PURE__*/react.createElement("input", {
    type: "email",
    className: "--width-100",
    placeholder: "Email",
    ref: emailValue,
    onInput: emailIsValidHandler
  }), /*#__PURE__*/react.createElement("button", {
    className: !emailIsValid ? "--btn --btn-primary --btn-block btn-disabled" : "--btn --btn-primary --btn-block "
  }, "Reset password"), /*#__PURE__*/react.createElement("span", {
    className: "--text-sm --block --text-center"
  }, "We will send you a reset link!!!"), /*#__PURE__*/react.createElement("div", {
    className: "close",
    onClick: props.onClose
  }, /*#__PURE__*/react.createElement(index_esm/* AiOutlineClose */.oHP, {
    color: "red"
  })))), /*#__PURE__*/react.createElement("div", {
    className: "img-container"
  }, /*#__PURE__*/react.createElement("img", {
    src: forgot_namespaceObject,
    alt: "register"
  })));
};
/* harmony default export */ const auth_Reset = (Reset);
;// CONCATENATED MODULE: ./src/components/auth/AuthContainer.js
function AuthContainer_typeof(o) { "@babel/helpers - typeof"; return AuthContainer_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, AuthContainer_typeof(o); }
function AuthContainer_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function AuthContainer_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? AuthContainer_ownKeys(Object(t), !0).forEach(function (r) { AuthContainer_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : AuthContainer_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function AuthContainer_defineProperty(obj, key, value) { key = AuthContainer_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AuthContainer_toPropertyKey(arg) { var key = AuthContainer_toPrimitive(arg, "string"); return AuthContainer_typeof(key) === "symbol" ? key : String(key); }
function AuthContainer_toPrimitive(input, hint) { if (AuthContainer_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AuthContainer_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function AuthContainer_slicedToArray(arr, i) { return AuthContainer_arrayWithHoles(arr) || AuthContainer_iterableToArrayLimit(arr, i) || AuthContainer_unsupportedIterableToArray(arr, i) || AuthContainer_nonIterableRest(); }
function AuthContainer_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AuthContainer_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AuthContainer_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AuthContainer_arrayLikeToArray(o, minLen); }
function AuthContainer_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function AuthContainer_iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function AuthContainer_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var AuthContainer = function AuthContainer() {
  var _useState = (0,react.useState)({
      login: true,
      register: false,
      reset: false
    }),
    _useState2 = AuthContainer_slicedToArray(_useState, 2),
    auth = _useState2[0],
    setAuth = _useState2[1];
  var onResetHandler = function onResetHandler() {
    setAuth(function (prev) {
      return AuthContainer_objectSpread(AuthContainer_objectSpread({}, prev), {}, {
        reset: true,
        login: false
      });
    });
  };
  var onRegisterHandler = function onRegisterHandler() {
    setAuth(function (prev) {
      return AuthContainer_objectSpread(AuthContainer_objectSpread({}, prev), {}, {
        register: true,
        login: false
      });
    });
  };
  var onLoginHandler = function onLoginHandler() {
    setAuth(function (prev) {
      return AuthContainer_objectSpread(AuthContainer_objectSpread({}, prev), {}, {
        register: false,
        login: true
      });
    });
  };
  var onResetCloseHandler = function onResetCloseHandler() {
    setAuth(function (prev) {
      return AuthContainer_objectSpread(AuthContainer_objectSpread({}, prev), {}, {
        reset: false,
        login: true
      });
    });
  };
  return /*#__PURE__*/react.createElement("section", {
    className: "--flex-center --100vh --bg-grey"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container box"
  }, auth.login && /*#__PURE__*/react.createElement(auth_Login, {
    onReset: onResetHandler,
    onRegister: onRegisterHandler
  }), auth.register && /*#__PURE__*/react.createElement(auth_Register, {
    onLogin: onLoginHandler
  }), auth.reset && /*#__PURE__*/react.createElement(auth_Reset, {
    onClose: onResetCloseHandler
  })));
};
/* harmony default export */ const auth_AuthContainer = (AuthContainer);
;// CONCATENATED MODULE: ./src/App.js



function App() {
  return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(auth_AuthContainer, null));
}
/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/index.js




var root = client.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(src_App, null)));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
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
/******/ 			179: 0
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_app_with_webpack"] = self["webpackChunkreact_app_with_webpack"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [277], () => (__webpack_require__(488)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.0ea3df3a111cfc94c13c.js.map