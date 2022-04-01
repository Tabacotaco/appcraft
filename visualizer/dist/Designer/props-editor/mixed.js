"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _display = _interopRequireDefault(require("./display"));

var _pure = _interopRequireDefault(require("./pure"));

var _withPropitem = _interopRequireDefault(require("./with-propitem"));

var _customs = require("../_customs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MixedBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var pathname = _ref.pathname,
      propName = _ref.propName,
      definition = _ref.definition,
      disabled = _ref.disabled,
      value = _ref.value,
      onFieldLocked = _ref.onFieldLocked;

  var _useTypePairs = (0, _customs.useTypePairs)(pathname, definition),
      _useTypePairs2 = _slicedToArray(_useTypePairs, 1),
      pseudoDef = _useTypePairs2[0];

  if (/^(bool|element|instanceOf|node|number|oneOf|string|symbol)$/.test(pseudoDef === null || pseudoDef === void 0 ? void 0 : pseudoDef.type)) {
    return /*#__PURE__*/_react["default"].createElement(_pure["default"].Naked, {
      ref: ref,
      pathname: pathname,
      propName: "".concat(propName, "(").concat(pseudoDef.description || pseudoDef.type, ")"),
      definition: pseudoDef,
      disabled: disabled,
      value: value,
      onFieldLocked: onFieldLocked
    });
  }

  if (/^(((array|object)(Of)?)|exact|shape|func)$/.test(pseudoDef === null || pseudoDef === void 0 ? void 0 : pseudoDef.type)) {
    return /*#__PURE__*/_react["default"].createElement(_display["default"].Naked, {
      ref: ref,
      pathname: pathname,
      propName: "".concat(propName, "(").concat(pseudoDef.description || pseudoDef.type, ")"),
      definition: pseudoDef,
      disabled: disabled
    });
  }

  return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    color: "textSecondary"
  }, propName);
});

MixedBase.displayName = 'MixedBase';

var _default = (0, _withPropitem["default"])('mixed', MixedBase);

exports["default"] = _default;