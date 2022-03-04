"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VARIABLE_TYPE = exports.ProptypesEditorContext = void 0;
exports.getPropPathname = getPropPathname;
exports.getTreatmentOptions = void 0;
exports.useBindingState = useBindingState;
exports.useControlValue = useControlValue;
exports.useRefOptions = useRefOptions;
exports.useTypePairs = useTypePairs;
exports.useVariableTreatments = useVariableTreatments;

var _react = require("react");

var _shortid = require("shortid");

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _mergeWith2 = _interopRequireDefault(require("lodash/mergeWith"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _sortBy2 = _interopRequireDefault(require("lodash/sortBy"));

var _template2 = _interopRequireDefault(require("lodash/template"));

var _Visualizer = require("../Visualizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var ANY_DEFINITIONS = ['array', 'bool', 'number', 'object', 'string'].map(function (type) {
  return {
    uid: type,
    type: type
  };
});
var CONTROL_ACTION = {
  SET_STATE: Symbol('SET_STATE'),
  STATE_APPEND: Symbol('STATE_APPEND'),
  STATE_DESTROY: Symbol('STATE_DESTROY'),
  RESET_READY: Symbol('RESET_READY'),
  WIDGET_APPEND: Symbol('WIDGET_APPEND'),
  WIDGET_MODIFY: Symbol('WIDGET_MODIFY'),
  WIDGET_DESTROY: Symbol('WIDGET_DESTROY')
};
var VARIABLE_TYPE = {
  Array: {
    init: []
  },
  Boolean: {
    init: 'false'
  },
  Date: {
    init: null
  },
  Number: {
    init: '0'
  },
  Object: {
    init: {}
  },
  String: {
    init: ''
  },
  input: {
    init: null
  },
  state: {
    init: null
  },
  todo: {
    init: null
  }
};
exports.VARIABLE_TYPE = VARIABLE_TYPE;

function getPropPathname(superiorType, superiorPathname, propName) {
  var _ref = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden,
      _ref$ignoreSpecialKey = _ref.ignoreSpecialKey,
      ignoreSpecialKey = _ref$ignoreSpecialKey === void 0 ? false : _ref$ignoreSpecialKey;

  return (0, _template2["default"])(superiorType !== null && superiorType !== void 0 && superiorType.startsWith('array') ? '{{ superiorPathname }}[{{ propName }}]' : !ignoreSpecialKey && (propName === null || propName === void 0 ? void 0 : propName.search(/\./)) > 0 ? '{{ superiorPathname }}["{{ propName }}"]' : '{{ superiorPathname }}{{ (superiorPathname && propName) ? \'.\' : \'\' }}{{ propName }}', {
    interpolate: /{{([\s\S]+?)}}/g
  })({
    superiorPathname: superiorPathname,
    propName: hidden ? '*' : propName
  });
}

function getChainOfWidgetIds(widgets, superior) {
  var ids = widgets.reduce(function (result, _ref2) {
    var $superior = _ref2.superior,
        uid = _ref2.uid;

    var _ref3 = ($superior === null || $superior === void 0 ? void 0 : $superior.split('.')) || [],
        _ref4 = _slicedToArray(_ref3, 1),
        superiorUid = _ref4[0];

    return !superiorUid && !superior || superiorUid === superior ? result.concat(uid) : result;
  }, []);
  return ids.length === 0 ? ids : ids.concat.apply(ids, _toConsumableArray(ids.map(function (uid) {
    return getChainOfWidgetIds(widgets, uid);
  })));
}

function getInputOptions(target) {
  var superiorPathname = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var superiorType = (0, _isPlainObject2["default"])(target) ? 'object' : Array.isArray(target) ? 'array' : 'other';
  return (0, _sortBy2["default"])(Object.entries(superiorType === 'other' ? {} : target).reduce(function (result, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        propertyName = _ref6[0],
        value = _ref6[1];

    return result.concat(getInputOptions(value, getPropPathname(superiorType, superiorPathname, propertyName)));
  }, !superiorPathname ? [] : [{
    code: superiorPathname,
    description: {
      primary: superiorPathname
    },
    refValue: target
  }]), ['code']);
}

var getTreatmentOptions = function getTreatmentOptions(refValue) {
  return refValue instanceof Date || /^(string|number)$/.test(_typeof(refValue)) // eslint-disable-next-line no-proto
  ? Object.getOwnPropertyNames(refValue.__proto__).reduce(function (result, property) {
    return property === 'constructor' ? result : result.concat({
      property: property,
      isFunc: refValue[property] instanceof Function
    });
  }, []) : [];
};

exports.getTreatmentOptions = getTreatmentOptions;
var ProptypesEditorContext = /*#__PURE__*/(0, _react.createContext)({
  InputStyles: {
    size: 'small',
    color: 'primary',
    variant: 'outlined',
    margin: null
  },
  actived: null,
  classes: null,
  override: {
    control: function control() {
      return null;
    },
    mixed: function mixed() {
      return null;
    }
  },
  definition: null,
  handles: {},
  props: {},
  state: [],
  substratum: {},
  typePairs: {},
  uid: null,
  onActive: function onActive() {
    return null;
  },
  onChange: function onChange() {
    return null;
  },
  onElementDispatch: function onElementDispatch() {
    return null;
  },
  onStateBinding: function onStateBinding() {
    return null;
  }
});
exports.ProptypesEditorContext = ProptypesEditorContext;

function useControlValue(_ref7) {
  var _ref7$subject = _ref7.subject,
      subject = _ref7$subject === void 0 ? '' : _ref7$subject,
      _ref7$ready = _ref7.ready,
      defaultReady = _ref7$ready === void 0 ? [] : _ref7$ready,
      _ref7$state = _ref7.state,
      defaultState = _ref7$state === void 0 ? {} : _ref7$state,
      _ref7$widgets = _ref7.widgets,
      defaultWidgets = _ref7$widgets === void 0 ? [] : _ref7$widgets;
  return [CONTROL_ACTION].concat(_toConsumableArray((0, _react.useReducer)(function (state, actions) {
    return (Array.isArray(actions) ? actions : [actions]).reduce(function (result, action) {
      var _ref8 = action || {},
          type = _ref8.type,
          target = _ref8.target,
          value = _ref8.value,
          options = _ref8.options;

      switch (type) {
        // TODO: Base State
        case CONTROL_ACTION.SET_STATE:
          return /^(actived|subject)$/.test(target) ? _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, target, value)) : result;
        // TODO: Visualizer Global State

        case CONTROL_ACTION.STATE_APPEND:
          {
            var _result$state = result.state,
                _result$state$target = _result$state[target],
                collection = _result$state$target === void 0 ? [] : _result$state$target,
                visualizerState = _objectWithoutProperties(_result$state, [target].map(_toPropertyKey));

            return _objectSpread(_objectSpread({}, result), {}, {
              state: _objectSpread(_objectSpread({}, visualizerState), {}, _defineProperty({}, target, [].concat(_toConsumableArray(collection), [_objectSpread(_objectSpread({}, options), {}, {
                path: value
              })])))
            });
          }

        case CONTROL_ACTION.STATE_DESTROY:
          {
            var _result$state2 = result.state,
                _result$state2$target = _result$state2[target],
                _collection = _result$state2$target === void 0 ? [] : _result$state2$target,
                _visualizerState = _objectWithoutProperties(_result$state2, [target].map(_toPropertyKey));

            return _objectSpread(_objectSpread({}, result), {}, {
              state: _objectSpread(_objectSpread({}, _visualizerState), {}, _defineProperty({}, target, _collection.filter(function (_ref9) {
                var path = _ref9.path;
                return path !== value;
              })))
            });
          }
        // TODO: onReady Handle Setting

        case CONTROL_ACTION.RESET_READY:
          return _objectSpread(_objectSpread({}, result), {}, {
            ready: value
          });
        // TODO: Widgets

        case CONTROL_ACTION.WIDGET_APPEND:
          {
            var widgets = result.widgets;
            return _objectSpread(_objectSpread({}, result), {}, {
              widgets: [].concat(_toConsumableArray(widgets), [_objectSpread({
                superior: target ? "".concat(target, ".").concat(value || 'children') : null,
                uid: (0, _shortid.generate)(),
                description: "Widget_".concat(Math.floor(Math.random() * 10000)),
                importBy: null,
                props: {},
                handles: {}
              }, options)])
            });
          }

        case CONTROL_ACTION.WIDGET_MODIFY:
          return _objectSpread(_objectSpread({}, result), {}, {
            widgets: result.widgets.map(function (opts) {
              return opts.uid !== value.uid ? opts : value;
            })
          });

        case CONTROL_ACTION.WIDGET_DESTROY:
          {
            var globalState = result.state,
                _widgets = result.widgets;
            var ids = new Set([target].concat(_toConsumableArray(getChainOfWidgetIds(_widgets, target))));
            return _objectSpread(_objectSpread({}, result), {}, {
              state: (0, _omit2["default"])(globalState, Array.from(ids)),
              widgets: _widgets.filter(function (_ref10) {
                var uid = _ref10.uid;
                return !ids.has(uid);
              })
            });
          }

        default:
      }

      return result;
    }, state);
  }, {
    actived: null,
    subject: subject,
    ready: defaultReady || [],
    state: defaultState || {},
    widgets: defaultWidgets || []
  })));
}

function useBindingState(pathname) {
  var _useContext = (0, _react.useContext)(ProptypesEditorContext),
      state = _useContext.state,
      uid = _useContext.uid;

  return (0, _react.useMemo)(function () {
    return state.some(function (_ref11) {
      var widgetUid = _ref11.widgetUid,
          path = _ref11.path;
      return widgetUid === uid && pathname.startsWith(path);
    });
  }, [state, uid, pathname]);
}

function useRefOptions(todos, _ref12) {
  var todoUid = _ref12.todo,
      refs = _ref12.refs,
      variable = _ref12.value;

  var _useWidgetWrapper = (0, _Visualizer.useWidgetWrapper)(),
      widgets = _useWidgetWrapper.widgets;

  return (0, _react.useMemo)(function () {
    if (refs && variable) {
      var todo = refs.todo,
          state = refs.state,
          input = refs.input;

      var _todos$reduce = todos.reduce(function (_ref13, _ref14) {
        var found = _ref13.found,
            result = _ref13.result;
        var uid = _ref14.uid,
            description = _ref14.description;
        var $found = found ? true : uid === todoUid;
        return {
          found: $found,
          result: $found ? result : result.set(uid, description)
        };
      }, {
        found: false,
        result: new Map()
      }),
          previousTodo = _todos$reduce.result;

      return {
        input: getInputOptions(input),
        state: Object.entries(state).reduce(function (__, _ref15) {
          var _ref16 = _slicedToArray(_ref15, 2),
              uid = _ref16[0],
              widgetState = _ref16[1];

          return Object.entries(widgetState).reduce(function (result, _ref17) {
            var _ref18 = _slicedToArray(_ref17, 2),
                path = _ref18[0],
                refValue = _ref18[1];

            var target = widgets.find(function (_ref19) {
              var widgetUid = _ref19.uid;
              return widgetUid === uid;
            });
            return !target ? result : result.concat({
              code: "".concat(uid, "['").concat(path, "']"),
              refValue: refValue,
              description: {
                primary: target.description,
                secondary: path
              }
            });
          }, __);
        }, []),
        todo: Object.entries(todo).reduce(function (result, _ref20) {
          var _ref21 = _slicedToArray(_ref20, 2),
              code = _ref21[0],
              refValue = _ref21[1];

          return !previousTodo.has(code) ? result : result.concat({
            code: code,
            refValue: refValue,
            description: {
              primary: previousTodo.get(code)
            }
          });
        }, [])
      };
    }

    return null;
  }, [todos, todoUid, refs, variable]);
}

function useTypePairs(pathname) {
  var _ref22 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref22.type,
      options = _ref22.options;

  var override = arguments.length > 2 ? arguments[2] : undefined;

  var _useContext2 = (0, _react.useContext)(ProptypesEditorContext),
      typePairs = _useContext2.typePairs;

  return (0, _react.useMemo)(function () {
    if (/^(any|oneOfType)$/.test(type)) {
      var _override$mixed;

      var opts = type === 'oneOfType' ? options : ANY_DEFINITIONS;
      return [typePairs[pathname], (override === null || override === void 0 ? void 0 : (_override$mixed = override.mixed) === null || _override$mixed === void 0 ? void 0 : _override$mixed.call(override, {
        pathname: pathname,
        options: opts
      })) || opts];
    }

    return []; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typePairs, pathname, type, options, override === null || override === void 0 ? void 0 : override.mixed]);
}

function useVariableTreatments(name, refs, _ref23, onChange) {
  var type = _ref23.type,
      initValue = _ref23.initValue,
      treatments = _ref23.treatments;

  var _useMemo = (0, _react.useMemo)(function () {
    return (treatments || []).reduce(function (_ref24, treatment) {
      var _ref25 = _slicedToArray(_ref24, 2),
          collection = _ref25[0],
          value = _ref25[1];

      var before = (0, _cloneDeep2["default"])(value);
      var property = (0, _get2["default"])(value, treatment.name);
      var res = property instanceof Function ? property.call.apply(property, [value].concat(_toConsumableArray((treatment.args || []).map(function (_ref26) {
        var inputType = _ref26.type,
            inputValue = _ref26.initValue;
        return (0, _Visualizer.getVariableValue)(refs, inputType, inputValue);
      })))) : property;
      return [collection.concat(_objectSpread(_objectSpread({}, treatment), {}, {
        after: res,
        options: getTreatmentOptions(before)
      })), res];
    }, [[], (0, _Visualizer.getVariableValue)(refs, type, initValue)]);
  }, [refs, type, initValue, treatments]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      options = _useMemo2[0],
      lastValue = _useMemo2[1];

  (0, _react.useEffect)(function () {
    switch (_typeof(lastValue)) {
      case 'boolean':
        onChange({
          name: name,
          value: 'Boolean'
        });
        break;

      case 'number':
        onChange({
          name: name,
          value: 'Number'
        });
        break;

      case 'string':
        onChange({
          name: name,
          value: 'String'
        });
        break;

      default:
        onChange({
          name: name,
          value: (0, _isPlainObject2["default"])(lastValue) ? 'Object' : Array.isArray(lastValue) ? 'Array' : null
        });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [JSON.stringify(lastValue)]);
  return options;
}