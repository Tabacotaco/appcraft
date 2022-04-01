"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = WidgetBase;

var _react = _interopRequireWildcard(require("react"));

var _shortid = require("shortid");

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _merge2 = _interopRequireDefault(require("lodash/merge"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _errorBoundary = _interopRequireDefault(require("./error-boundary"));

var _customs = require("./_customs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WidgetCustoms = function () {
  var overrideds = {};

  function setOverrideds(uid, superior, _ref) {
    var defaultLockeds = _ref.overrideds;
    var _overrideds$uid = overrideds[uid],
        lockedProps = _overrideds$uid === void 0 ? new Set() : _overrideds$uid;
    var lockeds = defaultLockeds || [];

    if (superior) {
      var _superior$split = superior.split('.'),
          _superior$split2 = _slicedToArray(_superior$split, 1),
          superiorId = _superior$split2[0];

      var _overrideds$superiorI = overrideds[superiorId],
          superiorLockedProps = _overrideds$superiorI === void 0 ? new Set() : _overrideds$superiorI;
      var superiorPropPath = superior.replace("".concat(superiorId, "."), '');
      Array.from(superiorLockedProps).forEach(function (locked) {
        if ((0, _isPlainObject2["default"])(locked) && locked.propPath === superiorPropPath) {
          lockeds.push.apply(lockeds, _toConsumableArray(locked.overrideds || []));
          superiorLockedProps.has(locked) && superiorLockedProps["delete"](locked);
          (0, _set2["default"])(overrideds, superiorId, superiorLockedProps);
        }
      });
    }

    return (0, _set2["default"])(overrideds, uid, lockeds.reduce(function (result, locked) {
      return result.add(locked);
    }, lockedProps));
  }

  function useElements(widgets) {
    var _useWidgetContext = (0, _customs.useWidgetContext)(),
        proxy = _useWidgetContext.proxy;

    return widgets.reduce(function (result, widget) {
      return (0, _set2["default"])(result, widget.uid, (0, _react.useMemo)(function () {
        var uid = widget.uid,
            superior = widget.superior,
            element = widget.importBy,
            decoration = widget.decoration;

        if (element) {
          var el = proxy[element] || _react["default"].Fragment;
          setOverrideds(uid, superior, el);
          return (0, _errorBoundary["default"])((decoration || []).reduce(function (decorated, _ref2) {
            var _withDecoration;

            var importBy = _ref2.importBy,
                options = _ref2.options;
            var withDecoration = proxy[importBy];
            var hoc = withDecoration instanceof Function && ((_withDecoration = withDecoration(options)) === null || _withDecoration === void 0 ? void 0 : _withDecoration(decorated)) || decorated;
            setOverrideds(uid, superior, hoc);
            return hoc;
          }, el));
        }

        return null;
      }, [JSON.stringify(widget)]));
    }, {});
  }

  function useFixedProps(widgets) {
    return widgets.reduce(function (result, _ref3) {
      var uid = _ref3.uid,
          props = _ref3.props;
      return result.set(uid, (0, _react.useMemo)(function () {
        return (0, _cloneDeep2["default"])(props);
      }, []));
    }, new Map());
  }

  function useElasticProps(elements) {
    var _useWidgetContext2 = (0, _customs.useWidgetContext)(),
        globalState = _useWidgetContext2.state;

    return Object.keys(elements).reduce(function (result, uid) {
      var state = (0, _get2["default"])(globalState, uid) || {};
      return result.set(uid, (0, _react.useMemo)(function () {
        return Object.entries(state || {}).reduce(function ($state, _ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              propPath = _ref5[0],
              value = _ref5[1];

          return (0, _set2["default"])($state, propPath, value);
        }, {});
      }, [JSON.stringify(state)]));
    }, new Map());
  }

  function useWidgetHandles(widgets) {
    var _useWidgetContext3 = (0, _customs.useWidgetContext)(),
        globalState = _useWidgetContext3.state,
        onStateChange = _useWidgetContext3.onStateChange;

    return widgets.reduce(function (result, _ref6) {
      var uid = _ref6.uid,
          handles = _ref6.handles;
      return result.set(uid, Object.entries(handles).reduce(function (props, _ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            event = _ref8[0],
            todos = _ref8[1];

        return (0, _set2["default"])(props, event, (0, _react.useCallback)(function () {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          var initRefs = (0, _cloneDeep2["default"])({
            input: e,
            state: globalState,
            todo: {}
          });
          todos.reduce(function (exe, todo) {
            return exe.then((0, _customs.getTodoPromise)(todo));
          }, new Promise(function (resolve) {
            return resolve(initRefs);
          })).then(function (_ref9) {
            var finalState = _ref9.state;
            return onStateChange(finalState);
          });
        }, [JSON.stringify(globalState)]));
      }, {}));
    }, new Map());
  }

  function useTriggerTip(widgets) {
    var _useWidgetContext4 = (0, _customs.useWidgetContext)(),
        _useWidgetContext4$li = _slicedToArray(_useWidgetContext4.listeners, 2),
        listenId = _useWidgetContext4$li[0],
        listeners = _useWidgetContext4$li[1];

    return widgets.reduce(function (result, _ref10) {
      var uid = _ref10.uid;
      return result.set(uid, (0, _react.useMemo)(function () {
        return uid !== listenId ? null : Object.entries(listeners || {}).reduce(function (props, _ref11) {
          var _ref12 = _slicedToArray(_ref11, 2),
              event = _ref12[0],
              tip = _ref12[1];

          return (0, _set2["default"])(props, event, tip);
        }, {});
      }, [listenId, JSON.stringify(Object.keys(listeners || {}))]));
    }, new Map());
  }

  return {
    useOverrided: function useOverrided() {
      return Object.entries(overrideds).reduce(function (result, _ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
            uid = _ref14[0],
            propPaths = _ref14[1];

        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, uid, Array.from(propPaths).filter(function (prop) {
          return typeof prop === 'string';
        }).sort()));
      }, {});
    },
    useRender: function useRender(renderKey, widgets) {
      var _useWidgetContext5 = (0, _customs.useWidgetContext)(),
          all = _useWidgetContext5.widgets;

      var elements = useElements(widgets);
      var fixeds = useFixedProps(widgets);
      var elastics = useElasticProps(elements);
      var handles = useWidgetHandles(widgets);
      var triggers = useTriggerTip(widgets);
      return Object.entries(elements).map(function (_ref15) {
        var _ref16 = _slicedToArray(_ref15, 2),
            uid = _ref16[0],
            WidgetEl = _ref16[1];

        var props = fixeds.get(uid);

        if (WidgetEl && (0, _isPlainObject2["default"])(props)) {
          var state = elastics.get(uid);
          var handle = handles.get(uid);
          var substratums = (0, _customs.getSubstratumWidgets)(all, uid);
          var trigger = triggers.get(uid);
          return /*#__PURE__*/_react["default"].createElement(WidgetEl, _extends({
            key: "".concat(renderKey, "-").concat(uid)
          }, (0, _merge2["default"])(Object.entries(substratums).reduce(function (result, _ref17) {
            var _ref18 = _slicedToArray(_ref17, 2),
                propPath = _ref18[0],
                children = _ref18[1];

            return (0, _set2["default"])(result, propPath, WidgetCustoms.useRender(renderKey, children || []));
          }, {}), props, handle, state, trigger)));
        }

        if (typeof props === 'string' && props.trim()) {
          return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
            key: uid
          }, props);
        }

        return null;
      });
    }
  };
}();

function WidgetBase() {
  var _useWidgetContext6 = (0, _customs.useWidgetContext)(),
      _useWidgetContext6$li = _slicedToArray(_useWidgetContext6.listeners, 2),
      listenId = _useWidgetContext6$li[0],
      listeners = _useWidgetContext6$li[1],
      onPropsDisable = _useWidgetContext6.onPropsDisable;

  var _useSubstratumWidgets = (0, _customs.useSubstratumWidgets)(),
      children = _useSubstratumWidgets.children;

  var renderKey = (0, _react.useMemo)(function () {
    return (0, _shortid.generate)();
  }, [listenId, JSON.stringify(Object.keys(listeners || {}))]);
  var nodes = WidgetCustoms.useRender(renderKey, children || []);
  var overrideds = WidgetCustoms.useOverrided();
  (0, _react.useEffect)(function () {
    onPropsDisable(overrideds);
  }, [JSON.stringify(overrideds)]);
  return nodes;
}