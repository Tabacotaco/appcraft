"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Widget;

var _react = _interopRequireDefault(require("react"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _errorBoundary = _interopRequireDefault(require("./error-boundary"));

var _customs = require("./_customs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// TODO: Component
function Widget(options) {
  var uid = options.uid,
      importBy = options.importBy;

  var _useWidgetContext = (0, _customs.useWidgetContext)(),
      widgetState = _useWidgetContext.state[uid],
      widgets = _useWidgetContext.widgets;

  var WidgetElement = (0, _customs.useWidgetElement)(_errorBoundary["default"], importBy);
  var substratum = (0, _customs.useWidgets)(widgets, uid);
  var widgetProps = (0, _customs.useWidgetProps)(options, widgetState);
  return !WidgetElement ? null : /*#__PURE__*/_react["default"].createElement(WidgetElement, _extends({}, widgetProps, Object.entries(substratum || {}).reduce( // Element Nodes
  function (result, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        propName = _ref2[0],
        nodes = _ref2[1];

    return (0, _set2["default"])(result, propName, nodes.map(function (widgetOpts) {
      return typeof widgetOpts.props === 'string' ? widgetOpts.props || null : /*#__PURE__*/_react["default"].createElement(Widget, _extends({
        key: widgetOpts.uid
      }, widgetOpts));
    }));
  }, {})));
}