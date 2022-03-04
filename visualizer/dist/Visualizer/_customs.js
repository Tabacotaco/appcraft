"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVariableValue = exports.getRequestURL = exports.WidgetProvider = void 0;
exports.useGlobalStateReducer = useGlobalStateReducer;
exports.useVisualizerReady = useVisualizerReady;
exports.useWidgetContext = void 0;
exports.useWidgetElement = useWidgetElement;
exports.useWidgetProps = useWidgetProps;
exports.useWidgets = useWidgets;

var _react = require("react");

var _notistack = require("notistack");

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _template2 = _interopRequireDefault(require("lodash/template"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _excluded = ["uid", "description", "type", "state"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var WidgetContext = /*#__PURE__*/(0, _react.createContext)({
  action: null,
  definitions: null,
  handleRefs: {},
  handleSlot: null,
  listeners: null,
  proxy: {},
  state: {},
  widgets: [],
  onHandleRefsBound: function onHandleRefsBound(_e) {
    return null;
  },
  onHandleSlotChange: function onHandleSlotChange(_e) {
    return null;
  },
  onListenersActived: function onListenersActived(_e) {
    return null;
  },
  onStateChange: function onStateChange(_e) {
    return null;
  }
});

var getPureObject = function getPureObject(obj) {
  return JSON.parse(JSON.stringify(obj, function () {
    var seen = new WeakSet(); // eslint-disable-next-line consistent-return

    return function (key, value) {
      if (!(value instanceof Function) && value !== window && !(value instanceof Event) && !/^_/.test(key)) {
        var pureValue = value instanceof HTMLElement ? 'HTMLElement' : value;
        var isObject = _typeof(pureValue) === 'object' && pureValue !== null;

        if (!isObject || !seen.has(pureValue)) {
          isObject && seen.add(pureValue);
          return pureValue;
        }
      }
    };
  }()));
};

var generateValue = function () {
  function getValue(refs, type, initValue) {
    switch (type) {
      case 'Boolean':
        return initValue === 'true';

      case 'Number':
        // eslint-disable-next-line no-bitwise
        return ~~initValue;

      case 'String':
        return typeof initValue === 'string' ? initValue : '';

      case 'Date':
        {
          var result = new Date(initValue);
          return Number.isNaN(result.valueOf()) ? new Date() : result;
        }

      case 'Array':
        return (Array.isArray(initValue) ? initValue : [initValue]).reduce(function (result, property) {
          if (property) {
            result.push(generateValue(refs, property));
          }

          return result;
        }, []);

      case 'Object':
        return Object.entries(initValue || {}).reduce(function (result, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              property = _ref2[1];

          return (0, _set2["default"])(result, [name], generateValue(refs, property));
        }, {});

      default:
        return (0, _get2["default"])(refs, [type].concat(_toConsumableArray((initValue === null || initValue === void 0 ? void 0 : initValue.split('.')) || ['']))) || null;
    }
  }

  return Object.defineProperty(function (refs, _ref3) {
    var type = _ref3.type,
        initValue = _ref3.initValue,
        _ref3$treatments = _ref3.treatments,
        treatments = _ref3$treatments === void 0 ? [] : _ref3$treatments;
    return treatments.reduce(function (result, _ref4) {
      var name = _ref4.name,
          args = _ref4.args;
      var property = result[name];
      return property instanceof Function ? property.call.apply(property, [result].concat(_toConsumableArray((args || []).map(function (_ref5) {
        var inputType = _ref5.type,
            inputValue = _ref5.initValue;
        return getValue(refs, inputType, inputValue);
      })))) : property;
    }, getValue(refs, type, initValue));
  }, 'implement', {
    get: function get() {
      return getValue;
    }
  });
}();

var getURL = function getURL(refs, url, search) {
  return "".concat(url).concat(new URLSearchParams(Object.entries(search || {}).reduce(function (result, _ref6) {
    var _ref7 = _slicedToArray(_ref6, 2),
        name = _ref7[0],
        param = _ref7[1];

    return (0, _set2["default"])(result, [name], generateValue(refs, param));
  }, {})).toString());
};

exports.getRequestURL = getURL;

var implementTodo = function implementTodo(_ref8, _ref9) {
  var target = _ref9.target,
      onHandleRefsBound = _ref9.onHandleRefsBound;

  var uid = _ref8.uid,
      todoDesc = _ref8.description,
      type = _ref8.type,
      setTo = _ref8.state,
      todoOpts = _objectWithoutProperties(_ref8, _excluded);

  return function (refs) {
    var input = refs.input,
        state = refs.state,
        todo = refs.todo;
    onHandleRefsBound === null || onHandleRefsBound === void 0 ? void 0 : onHandleRefsBound({
      target: target,
      refs: getPureObject(refs)
    });

    switch (type) {
      case 'calculator':
        {
          var template = todoOpts.template,
              params = todoOpts.params;

          if (Array.isArray(params) && params.length > 0 && template !== null && template !== void 0 && template.trim()) {
            (0, _set2["default"])(todo, uid, JSON.parse((0, _template2["default"])("{{ ".concat(template, " }}"), {
              interpolate: /{{([\s\S]+?)}}/g
            })(params.reduce(function (result, param, i) {
              var value = generateValue(refs, param);
              return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, "$".concat(i), param.type === 'String' ? "\"".concat(value, "\"") : value));
            }, {}))));
            setTo && (0, _set2["default"])(state, (0, _toPath2["default"])(setTo), (0, _get2["default"])(todo, uid));
            return {
              input: input,
              state: state,
              todo: todo
            };
          }

          break;
        }

      case 'request':
        {
          var url = todoOpts.url,
              method = todoOpts.method,
              header = todoOpts.header,
              search = todoOpts.search,
              body = todoOpts.body;

          if (url !== null && url !== void 0 && url.trim()) {
            return fetch(getURL(refs, url, search), _objectSpread({
              method: method || 'GET',
              headers: _objectSpread(_objectSpread({}, header), {}, {
                'Content-Type': 'application/json'
              })
            }, body && {
              body: JSON.stringify(generateValue(refs, body))
            })).then(function (res) {
              return res.json();
            }).then(function (res) {
              (0, _set2["default"])(todo, uid, res);
              setTo && (0, _set2["default"])(state, (0, _toPath2["default"])(setTo), (0, _get2["default"])(todo, uid));
              return {
                input: input,
                state: state,
                todo: todo
              };
            });
          }

          break;
        }

      default:
    }

    return refs;
  };
};

var WidgetProvider = WidgetContext.Provider;
exports.WidgetProvider = WidgetProvider;
var getVariableValue = generateValue.implement;
exports.getVariableValue = getVariableValue;

var useWidgetContext = function useWidgetContext() {
  return (0, _react.useContext)(WidgetContext);
};

exports.useWidgetContext = useWidgetContext;

function useGlobalStateReducer(defaultState) {
  var _useReducer = (0, _react.useReducer)(function (_state, actions) {
    return actions;
  }, {}),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  (0, _react.useEffect)(function () {
    dispatch(Object.entries(defaultState || {}).reduce(function (__, _ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
          uid = _ref11[0],
          collection = _ref11[1];

      return (0, _set2["default"])(__, uid, (collection || []).reduce(function (result, _ref12) {
        var path = _ref12.path,
            _ref12$defaultValue = _ref12.defaultValue,
            defaultValue = _ref12$defaultValue === void 0 ? null : _ref12$defaultValue;
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, path, defaultValue));
      }, {}));
    }, {}));
  }, [defaultState]);
  return [state, dispatch];
}

function useVisualizerReady(uid, todos) {
  var _useWidgetContext = useWidgetContext(),
      handleSlot = _useWidgetContext.handleSlot,
      globalState = _useWidgetContext.state,
      onHandleRefsBound = _useWidgetContext.onHandleRefsBound,
      onStateChange = _useWidgetContext.onStateChange;

  return (0, _react.useCallback)(function () {
    var initRefs = (0, _cloneDeep2["default"])({
      input: [],
      state: globalState,
      todo: {}
    });
    (todos || []).reduce(function (exe, todo) {
      return exe.then(implementTodo(todo, uid === (handleSlot === null || handleSlot === void 0 ? void 0 : handleSlot.uid) && (handleSlot === null || handleSlot === void 0 ? void 0 : handleSlot.pathname) === 'onReady' ? {
        target: JSON.stringify([uid, 'onReady', todo.uid]),
        onHandleRefsBound: onHandleRefsBound
      } : {}));
    }, new Promise(function (resolve) {
      return resolve(initRefs);
    })).then(function (_ref13) {
      var finalState = _ref13.state;
      return onStateChange(finalState);
    });
  }, [todos, handleSlot, globalState, onHandleRefsBound, onStateChange]);
}

function useWidgets(widgets, superior) {
  var stringify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return (0, _react.useMemo)(function () {
    var substratum = widgets.reduce(function (result, widget) {
      var _widget$superior;

      var _ref14 = ((_widget$superior = widget.superior) === null || _widget$superior === void 0 ? void 0 : _widget$superior.split('.')) || [],
          _ref15 = _toArray(_ref14),
          superiorUid = _ref15[0],
          path = _ref15.slice(1);

      var superiorPropName = path.join('.') || 'children';

      if ((stringify || typeof widget.props !== 'string') && (!superiorUid && !superior || superiorUid === superior)) {
        var collection = result[superiorPropName] || [];
        (0, _set2["default"])(result, superiorPropName, collection.concat(widget));
      }

      return result;
    }, {});
    return Object.fromEntries(Object.entries(substratum).map(function (_ref16) {
      var _ref17 = _slicedToArray(_ref16, 2),
          propName = _ref17[0],
          collection = _ref17[1];

      return [propName, collection.sort(function (_ref18, _ref19) {
        var i1 = _ref18.index;
        var i2 = _ref19.index;
        return i1 - i2;
      })];
    }));
  }, [widgets, superior, stringify]);
}

function useWidgetElement(withErrorBoundary, importBy) {
  var _useWidgetContext2 = useWidgetContext(),
      handleSlot = _useWidgetContext2.handleSlot,
      listeners = _useWidgetContext2.listeners,
      proxy = _useWidgetContext2.proxy;

  return (0, _react.useMemo)(function () {
    return proxy[importBy] ? withErrorBoundary(proxy[importBy]) : null;
  }, [importBy, JSON.stringify(handleSlot), JSON.stringify(listeners)]);
}

function useWidgetProps(_ref20, widgetState) {
  var uid = _ref20.uid,
      description = _ref20.description,
      defaultProps = _ref20.props,
      defaultHandles = _ref20.handles;

  var _useWidgetContext3 = useWidgetContext(),
      action = _useWidgetContext3.action,
      handleSlot = _useWidgetContext3.handleSlot,
      listeners = _useWidgetContext3.listeners,
      globalState = _useWidgetContext3.state,
      onHandleRefsBound = _useWidgetContext3.onHandleRefsBound,
      onStateChange = _useWidgetContext3.onStateChange;

  var _useSnackbar = (0, _notistack.useSnackbar)(),
      msg = _useSnackbar.enqueueSnackbar;

  var props = (0, _react.useMemo)(function () {
    return JSON.parse(JSON.stringify(defaultProps));
  }, [JSON.stringify(defaultProps), JSON.stringify(listeners)]);
  var handles = (0, _react.useMemo)(function () {
    var dev = new Set(uid === (listeners === null || listeners === void 0 ? void 0 : listeners[0]) ? listeners[1] : []);
    var events = new Set([].concat(_toConsumableArray((listeners === null || listeners === void 0 ? void 0 : listeners[1]) || []), _toConsumableArray(Object.keys(defaultHandles || {}))));
    return Array.from(events).reduce(function (result, event) {
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, event, function () {
        var _defaultHandles$event = defaultHandles[event],
            todos = _defaultHandles$event === void 0 ? [] : _defaultHandles$event;

        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }

        var initRefs = (0, _cloneDeep2["default"])({
          input: e,
          state: globalState,
          todo: {}
        });

        if (dev.has(event)) {
          msg("".concat(description, " Event: ").concat(event), {
            action: action,
            ariaAttributes: {
              'data-pathname': event
            },
            variant: 'success'
          });
        }

        todos.reduce(function (exe, todo) {
          return exe.then(implementTodo(todo, uid === (handleSlot === null || handleSlot === void 0 ? void 0 : handleSlot.uid) && event === (handleSlot === null || handleSlot === void 0 ? void 0 : handleSlot.pathname) ? {
            target: JSON.stringify([uid, event, todo.uid]),
            onHandleRefsBound: onHandleRefsBound
          } : {}));
        }, new Promise(function (resolve) {
          return resolve(initRefs);
        })).then(function (_ref21) {
          var finalState = _ref21.state;
          return onStateChange(finalState);
        });
      }));
    }, {});
  }, [JSON.stringify(handleSlot), JSON.stringify(listeners), JSON.stringify(globalState), uid, description, defaultHandles, action, onHandleRefsBound]);
  return Object.entries(_objectSpread(_objectSpread({}, widgetState), handles)).reduce(function (result, _ref22) {
    var _ref23 = _slicedToArray(_ref22, 2),
        path = _ref23[0],
        value = _ref23[1];

    return (0, _set2["default"])(result, path, value);
  }, props);
}