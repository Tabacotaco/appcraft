"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppcraftVisualizer = void 0;
exports.WidgetImplement = WidgetImplement;
exports["default"] = exports.WidgetWrapper = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _MuiPickersUtilsProvider = _interopRequireDefault(require("@material-ui/pickers/MuiPickersUtilsProvider"));

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
}); // TODO: Component

function WidgetImplement(_ref) {
  var _ref$lazyDeps = _ref.lazyDeps,
      lazyDeps = _ref$lazyDeps === void 0 ? [] : _ref$lazyDeps,
      uid = _ref.uid,
      ready = _ref.ready;

  var _ref2 = (0, _customs.useSubstratumWidgets)(),
      substratum = _ref2.children;

  var container = (0, _react.useRef)();
  var onReady = (0, _customs.useVisualizerReady)(uid, ready);
  var classes = useStyles();
  var LazyWidgetBase = (0, _react.useMemo)(function () {
    return /*#__PURE__*/_react["default"].lazy(function () {
      return onReady().then(function () {
        return {
          "default": _widget["default"]
        };
      });
    });
  }, lazyDeps);
  return /*#__PURE__*/_react["default"].createElement(_MuiPickersUtilsProvider["default"], {
    utils: _dateFns["default"]
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    role: "AppcraftVisualizer",
    ref: container,
    disableGutters: true,
    maxWidth: false,
    className: (0, _clsx["default"])(classes.root, {
      empty: !Boolean(substratum)
    })
  }, !Boolean(substratum) && /*#__PURE__*/_react["default"].createElement(_DesktopAccessDisabled["default"], null), /*#__PURE__*/_react["default"].createElement(LazyWidgetBase, null))));
}

var WidgetWrapper = function WidgetWrapper(_ref3) {
  var children = _ref3.children,
      definitions = _ref3.definitions,
      proxy = _ref3.proxy,
      defaultState = _ref3.state,
      widgets = _ref3.widgets;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      listeners = _useState2[0],
      setListeners = _useState2[1];

  var _useState3 = (0, _react.useState)(new Map()),
      _useState4 = _slicedToArray(_useState3, 2),
      disabledProps = _useState4[0],
      setDisabledProps = _useState4[1];

  var _useGlobalStateReduce = (0, _customs.useGlobalStateReducer)(defaultState),
      _useGlobalStateReduce2 = _slicedToArray(_useGlobalStateReduce, 2),
      state = _useGlobalStateReduce2[0],
      onStateChange = _useGlobalStateReduce2[1];

  var onListenersActived = (0, _react.useCallback)(function (e) {
    return setListeners(e === false ? [] : e);
  }, []);
  var onPropsDisable = (0, _react.useCallback)(function (locked) {
    return setDisabledProps(new Map(Object.entries(locked)));
  }, [disabledProps]);
  return /*#__PURE__*/_react["default"].createElement(_customs.WidgetProvider, {
    value: {
      definitions: definitions,
      disabledProps: disabledProps,
      listeners: listeners,
      proxy: proxy,
      widgets: widgets,
      state: state,
      onListenersActived: onListenersActived,
      onPropsDisable: onPropsDisable,
      // @ts-ignore
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

Visualizer.displayName = 'AppcraftVisualizer';
var _default = Visualizer;
exports["default"] = _default;