"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withStructure;
exports.useOverrided = useOverrided;

var _react = _interopRequireWildcard(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _customs = require("./_customs");

var _customs2 = require("../Visualizer/_customs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useOverrided(PropElement, category, controlProps) {
  var _override$control;

  var superiorType = controlProps.superiorType,
      superiorPathname = controlProps.superiorPathname,
      definition = controlProps.definition,
      propName = controlProps.propName;

  var _useWidgetContext = (0, _customs2.useWidgetContext)(),
      disabledProps = _useWidgetContext.disabledProps;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      uid = _useContext.uid,
      override = _useContext.override,
      props = _useContext.props,
      handles = _useContext.handles;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      locked = _useState2[0],
      setLocked = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      contentProps = _useState4[0],
      setContentProps = _useState4[1];

  var pathname = (0, _react.useMemo)(function () {
    return (0, _customs.getPropPathname)(superiorType, superiorPathname, propName);
  }, [superiorType, superiorPathname, propName]);
  var disabled = new Set(disabledProps.get(uid)).has(pathname);
  var value = !pathname ? props : category !== 'todo' ? (0, _get2["default"])(props, pathname) : (0, _get2["default"])(handles, pathname) || [];
  var overrided = override === null || override === void 0 ? void 0 : (_override$control = override.control) === null || _override$control === void 0 ? void 0 : _override$control.call(override, {
    category: category,
    definition: definition,
    pathname: pathname,
    propName: propName,
    disabled: disabled,
    value: value
  });
  return [overrided === false ? null : overrided || /*#__PURE__*/_react["default"].createElement(PropElement, _extends({
    ref: setContentProps
  }, controlProps, contentProps, {
    disabled: disabled,
    pathname: pathname,
    value: value,
    onFieldLocked: setLocked
  })), contentProps, locked, pathname, disabled, value];
}

function withStructure(category, PropElement) {
  var HOCElement = /*#__PURE__*/_react["default"].memo(function (controlProps) {
    var _useOverrided;

    return ((_useOverrided = useOverrided(PropElement, category, controlProps)) === null || _useOverrided === void 0 ? void 0 : _useOverrided[0]) || null;
  });

  HOCElement.Naked = PropElement;
  HOCElement.displayName = 'Structure';
  return HOCElement;
}