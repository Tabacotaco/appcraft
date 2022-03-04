"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WidgetWrapper = exports.AppcraftVisualizer = void 0;
Object.defineProperty(exports, "getRequestURL", {
  enumerable: true,
  get: function get() {
    return _customs.getRequestURL;
  }
});
Object.defineProperty(exports, "getVariableValue", {
  enumerable: true,
  get: function get() {
    return _customs.getVariableValue;
  }
});
exports.useWidgetWrapper = exports.useSubstratumWidgets = exports.useLazyVisualizer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _styles = require("@material-ui/core/styles");

var _DesktopAccessDisabled = _interopRequireDefault(require("@material-ui/icons/DesktopAccessDisabled"));

var _widget = _interopRequireDefault(require("./widget"));

var _customs = require("./_customs");

var _excluded = ["ready"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// TODO: TS Namespace
var AppcraftVisualizer; // TODO: Custom Hooks

exports.AppcraftVisualizer = AppcraftVisualizer;

(function (_AppcraftVisualizer) {
  var def;

  (function (_def) {
    var BaseTypeName;

    (function (BaseTypeName) {
      BaseTypeName[BaseTypeName["Array"] = 0] = "Array";
      BaseTypeName[BaseTypeName["Boolean"] = 1] = "Boolean";
      BaseTypeName[BaseTypeName["Date"] = 2] = "Date";
      BaseTypeName[BaseTypeName["Number"] = 3] = "Number";
      BaseTypeName[BaseTypeName["Object"] = 4] = "Object";
      BaseTypeName[BaseTypeName["String"] = 5] = "String";
    })(BaseTypeName || (BaseTypeName = {}));

    ;
    var RefTypeName;

    (function (RefTypeName) {
      RefTypeName[RefTypeName["input"] = 0] = "input";
      RefTypeName[RefTypeName["state"] = 1] = "state";
      RefTypeName[RefTypeName["todo"] = 2] = "todo";
    })(RefTypeName || (RefTypeName = {}));

    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
  })(def || (def = _AppcraftVisualizer.def || (_AppcraftVisualizer.def = {})));

  var hooks;

  (function (_hooks) {
    ;
  })(hooks || (hooks = _AppcraftVisualizer.hooks || (_AppcraftVisualizer.hooks = {})));
})(AppcraftVisualizer || (exports.AppcraftVisualizer = AppcraftVisualizer = {}));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative',
      display: 'block',
      border: 0,
      overflow: 'hidden auto !important',
      padding: theme.spacing(1, 0),
      height: '100%',
      '& > * + *': {
        marginTop: theme.spacing(1.5)
      },
      '&.empty': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > svg': {
          fontSize: '20vh',
          opacity: theme.palette.action.focusOpacity,
          color: theme.palette.info.light
        }
      }
    }
  };
});
var useWidgetWrapper = _customs.useWidgetContext;
exports.useWidgetWrapper = useWidgetWrapper;
var useSubstratumWidgets = _customs.useWidgets; // TODO: Component

exports.useSubstratumWidgets = useSubstratumWidgets;

function WidgetImplement(_ref) {
  var uid = _ref.uid,
      ready = _ref.ready;
  var container = (0, _react.useRef)();

  var _useWidgetContext = (0, _customs.useWidgetContext)(),
      widgets = _useWidgetContext.widgets;

  var _useSubstratumWidgets = useSubstratumWidgets(widgets),
      substratum = _useSubstratumWidgets.children;

  var onReady = (0, _customs.useVisualizerReady)(uid, ready);
  var classes = useStyles();
  (0, _react.useEffect)(function () {
    onReady();
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    ref: container,
    disableGutters: true,
    maxWidth: false,
    className: (0, _clsx["default"])(classes.root, {
      empty: !Boolean(substratum)
    })
  }, !Boolean(substratum) && /*#__PURE__*/_react["default"].createElement(_DesktopAccessDisabled["default"], null), substratum === null || substratum === void 0 ? void 0 : substratum.map(function (widgetOpts) {
    return (
      /*#__PURE__*/
      // @ts-ignore
      _react["default"].createElement(_widget["default"], _extends({
        key: widgetOpts.uid
      }, widgetOpts))
    );
  }));
}

var useLazyVisualizer = function useLazyVisualizer(e) {
  return (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react["default"].lazy(function () {
      return new Promise(function (resolve) {
        return (// @ts-ignore
          resolve({
            "default": WidgetImplement
          })
        );
      });
    });
  }, e);
};

exports.useLazyVisualizer = useLazyVisualizer;

var WidgetWrapper = function WidgetWrapper(_ref2) {
  var action = _ref2.action,
      children = _ref2.children,
      definitions = _ref2.definitions,
      proxy = _ref2.proxy,
      defaultState = _ref2.state,
      widgets = _ref2.widgets;

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      handleRefs = _useState2[0],
      setHandleRefs = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      handleSlot = _useState4[0],
      setHandleSlot = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      listeners = _useState6[0],
      setListeners = _useState6[1];

  var _useGlobalStateReduce = (0, _customs.useGlobalStateReducer)(defaultState),
      _useGlobalStateReduce2 = _slicedToArray(_useGlobalStateReduce, 2),
      state = _useGlobalStateReduce2[0],
      onStateChange = _useGlobalStateReduce2[1];

  var onHandleRefsBound = (0, _react.useCallback)(function (_ref3) {
    var target = _ref3.target,
        refs = _ref3.refs;
    return setHandleRefs((0, _set2["default"])(handleRefs, target, refs));
  }, [handleRefs]);
  var onHandleSlotChange = (0, _react.useCallback)(function (e) {
    if (e !== false) {
      setHandleSlot(e);
    } else {
      setHandleRefs({});
      setHandleSlot(null);
    }

    return function () {
      return onHandleSlotChange(false);
    };
  }, []);
  var onListenersActived = (0, _react.useCallback)(function (e) {
    return setListeners(e === false ? null : [e.uid, e.listeners]);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_customs.WidgetProvider, {
    value: {
      action: action,
      definitions: definitions,
      handleRefs: handleRefs,
      handleSlot: handleSlot,
      listeners: listeners,
      proxy: proxy,
      widgets: widgets,
      state: state,
      onHandleRefsBound: onHandleRefsBound,
      onHandleSlotChange: onHandleSlotChange,
      onListenersActived: onListenersActived,
      onStateChange: onStateChange
    }
  }, children);
};

exports.WidgetWrapper = WidgetWrapper;

var Visualizer = function Visualizer(_ref4) {
  var ready = _ref4.ready,
      props = _objectWithoutProperties(_ref4, _excluded);

  return /*#__PURE__*/_react["default"].createElement(WidgetWrapper, props, /*#__PURE__*/_react["default"].createElement(WidgetImplement, {
    ready: ready
  }));
};

var _default = Visualizer;
exports["default"] = _default;