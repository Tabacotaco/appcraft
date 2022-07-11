"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WidgetProvider = exports.Variable = exports.Todo = void 0;
exports.getSubstratumWidgets = getSubstratumWidgets;
exports.useGlobalStateReducer = useGlobalStateReducer;
exports.useSubstratumWidgets = void 0;
exports.useVisualizerReady = useVisualizerReady;
exports.useWidgetContext = void 0;

var _react = require("react");

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _template3 = _interopRequireDefault(require("lodash/template"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _excluded = ["uid", "description", "condition", "type", "state"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//* Methods
var Variable = {
  /** TODO: 取得 Variable 初始值 */
  generate: function generate(refs, type, initValue) {
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
          var result = _construct(Date, _toConsumableArray(!initValue ? [] : [initValue]));

          return result.toString() === 'Invalid Date' ? new Date() : result;
        }

      case 'Array':
        return (Array.isArray(initValue) ? initValue : [initValue]).reduce(function (result, property) {
          if (property) {
            result.push(Variable.get(refs, property));
          }

          return result;
        }, []);

      case 'Object':
        return Object.entries(initValue || {}).reduce(function (result, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              name = _ref2[0],
              property = _ref2[1];

          return (0, _set2["default"])(result, [name], Variable.get(refs, property));
        }, {});

      default:
        return (0, _get2["default"])(refs, [type].concat(_toConsumableArray((0, _toPath2["default"])(initValue)))) || null;
    }
  },

  /** TODO: 取得 Variable 結果值 (透過 treatments 處理) */
  get: function get(refs, _ref3) {
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
        return Variable.generate(refs, inputType, inputValue);
      })))) : property;
    }, Variable.generate(refs, type, initValue));
  },

  /** TODO: 取得 Variables 運算結果 */
  template: function template(refs, _template2, params) {
    try {
      var result = (0, _template3["default"])("{{ ".concat(_template2, " }}"), {
        interpolate: /{{([\s\S]+?)}}/g
      })(params.reduce(function (options, param, i) {
        var value = Variable.get(refs, param);
        return (0, _set2["default"])(options, "$".concat(i), Array.isArray(value) || (0, _isPlainObject2["default"])(value) // param.type === 'Array' || param.type === 'Object' || param.type === 'todo'
        ? JSON.stringify(value) : value);
      }, {}));

      try {
        return JSON.parse(result);
      } catch (e) {
        return JSON.parse("\"".concat(result, "\""));
      }
    } catch (e) {
      return null;
    }
  }
};
exports.Variable = Variable;
var Todo = {
  /** TODO: 逐層取出各個 Source 的資料值，並透過 callbackFn 轉出資料內容 */
  mapValues: function mapValues(_ref6, condition, refs, callbackFn, values) {
    var _ref7 = _toArray(_ref6),
        src = _ref7[0],
        source = _ref7.slice(1);

    if (src) {
      var uid = src.uid;
      var array = src && Variable.get(refs, src);
      return (Array.isArray(array) ? array : []).reduce(function (result, property) {
        return (// FIXME: Todo.valid(condition, { ...refs, source: values })
          result.concat(Todo.mapValues(source, condition, refs, callbackFn, _objectSpread(_objectSpread({}, values), {}, _defineProperty({}, uid, property))))
        );
      }, []);
    }

    return function (data) {
      return Object.keys(data).length && Todo.valid(condition, _objectSpread(_objectSpread({}, refs), {}, {
        source: values
      })) ? [data] : [];
    }(callbackFn(values));
  },

  /** TODO: Todo 未正常執行時使用 */
  nothing: function nothing(refs, uid) {
    return (0, _set2["default"])(refs, ['todo', uid], null);
  },

  /** TODO: 將 Todo 設定的執行內容轉為 Promise，執行後會產生 Reference 紀錄執行結果值 */
  promise: function promise(_ref8) {
    var uid = _ref8.uid,
        todoDesc = _ref8.description,
        condition = _ref8.condition,
        type = _ref8.type,
        setTo = _ref8.state,
        todoOpts = _objectWithoutProperties(_ref8, _excluded);

    return function (refs) {
      var input = refs.input,
          state = refs.state,
          todo = refs.todo;

      switch (type) {
        case 'calculator':
          {
            var template = todoOpts.template,
                params = todoOpts.params;

            if (Todo.valid(condition, refs) && Array.isArray(params) && params.length > 0 && template !== null && template !== void 0 && template.trim()) {
              var todoResult = Variable.template(refs, template, params);
              (0, _set2["default"])(todo, uid, todoResult);
              setTo && (0, _set2["default"])(state, (0, _toPath2["default"])(setTo), todoResult);
              return {
                input: input,
                state: state,
                todo: todo
              };
            }

            return Todo.nothing(refs, uid);
          }

        case 'map':
          {
            var mappable = todoOpts.mappable,
                source = todoOpts.source,
                pairs = todoOpts.pairs;

            if (Todo.valid(condition, refs)) {
              var _todoResult = Todo.mapValues(source || [], mappable, refs, function (values) {
                return (Array.isArray(pairs) ? pairs : []).reduce(function (data, _ref9) {
                  var template = _ref9.template,
                      src = _ref9.params,
                      path = _ref9.path;
                  return (0, _set2["default"])(data, !(src !== null && src !== void 0 && src.length) || !(template !== null && template !== void 0 && template.trim()) ? [] : (0, _toPath2["default"])(path), Variable.template(_objectSpread(_objectSpread({}, refs), {}, {
                    source: values
                  }), template, src));
                }, {});
              });

              (0, _set2["default"])(todo, uid, _todoResult);
              setTo && (0, _set2["default"])(state, (0, _toPath2["default"])(setTo), _todoResult);
              return {
                input: input,
                state: state,
                todo: todo
              };
            }

            return Todo.nothing(refs, uid);
          }

        case 'request':
          {
            var url = todoOpts.url,
                method = todoOpts.method,
                header = todoOpts.header,
                search = todoOpts.search,
                body = todoOpts.body;
            return !Todo.valid(condition, refs) || !(url !== null && url !== void 0 && url.trim()) ? Todo.nothing(refs, uid) : fetch(Todo.url(refs, url, search), _objectSpread({
              method: method || 'GET',
              headers: header
            }, body && {
              body: JSON.stringify(Variable.get(refs, body))
            })).then(function (res) {
              return res.json();
            }).then(function (todoResult) {
              (0, _set2["default"])(todo, uid, todoResult);
              setTo && (0, _set2["default"])(state, (0, _toPath2["default"])(setTo), todoResult);
              return {
                input: input,
                state: state,
                todo: todo
              };
            })["catch"](function (err) {
              console.warn(err);
              return Todo.nothing(refs, uid);
            });
          }

        default:
          return Todo.nothing(refs, uid);
      }
    };
  },

  /** TODO: 取得解析後完整的 Request URL */
  url: function url(refs, _url, search) {
    var params = new URLSearchParams(Object.entries(search || {}).reduce(function (result, _ref10) {
      var _ref11 = _slicedToArray(_ref10, 2),
          name = _ref11[0],
          param = _ref11[1];

      return (0, _set2["default"])(result, [name], Variable.get(refs, param));
    }, {})).toString();
    return "".concat(_url).concat(params ? "?".concat(params) : '');
  },

  /** TODO: 驗證 Condition 是否正確 */
  valid: function valid(condition, refs) {
    return (condition || []).every(function (_ref12) {
      var source = _ref12.source,
          value = _ref12.value;
      return JSON.stringify(Variable.get(refs, source)) === JSON.stringify(Variable.get(refs, value));
    });
  }
};
exports.Todo = Todo;

function getSubstratumWidgets(widgets, superior) {
  var stringify = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var substratum = widgets.reduce(function (result, widget) {
    var _widget$superior, _widget$superior2;

    var _ref13 = ((_widget$superior = widget.superior) === null || _widget$superior === void 0 ? void 0 : _widget$superior.split('.')) || [],
        _ref14 = _toArray(_ref13),
        superiorUid = _ref14[0],
        path = _ref14.slice(1);

    var superiorPropName = path.length && ((_widget$superior2 = widget.superior) === null || _widget$superior2 === void 0 ? void 0 : _widget$superior2.replace(new RegExp("^".concat(superiorUid, ".")), '')) || 'children';

    if ((stringify || typeof widget.props !== 'string') && (!superiorUid && !superior || superiorUid === superior)) {
      var collection = result[superiorPropName] || [];
      return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, superiorPropName, collection.concat(widget)));
    }

    return result;
  }, {});
  return Object.fromEntries(Object.entries(substratum).map(function (_ref15) {
    var _ref16 = _slicedToArray(_ref15, 2),
        propName = _ref16[0],
        collection = _ref16[1];

    return [propName, collection.sort(function (_ref17, _ref18) {
      var i1 = _ref17.index;
      var i2 = _ref18.index;
      return i1 - i2;
    })];
  }));
} //* Custom Hooks


var WidgetContext = /*#__PURE__*/(0, _react.createContext)({
  definitions: null,
  disabledProps: new Map(),
  listeners: null,
  proxy: {},
  state: {},
  widgets: [],
  onPropsDisable: function onPropsDisable() {
    return null;
  },
  onListenersActived: function onListenersActived(_e) {
    return null;
  },
  onStateChange: function onStateChange(_e) {
    return null;
  }
});
var WidgetProvider = WidgetContext.Provider;
exports.WidgetProvider = WidgetProvider;

var useWidgetContext = function useWidgetContext() {
  return (0, _react.useContext)(WidgetContext);
};

exports.useWidgetContext = useWidgetContext;

var useSubstratumWidgets = function useSubstratumWidgets() {
  var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref19$superior = _ref19.superior,
      superior = _ref19$superior === void 0 ? null : _ref19$superior,
      _ref19$stringify = _ref19.stringify,
      stringify = _ref19$stringify === void 0 ? true : _ref19$stringify;

  var _useWidgetContext = useWidgetContext(),
      widgets = _useWidgetContext.widgets;

  return (0, _react.useMemo)(function () {
    return getSubstratumWidgets(widgets, superior, stringify);
  }, [widgets, superior, stringify]);
};

exports.useSubstratumWidgets = useSubstratumWidgets;

function useGlobalStateReducer(defaultState) {
  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      dispatch = _useState2[1];

  (0, _react.useEffect)(function () {
    dispatch(Object.entries(defaultState || {}).reduce(function (__, _ref20) {
      var _ref21 = _slicedToArray(_ref20, 2),
          uid = _ref21[0],
          collection = _ref21[1];

      return (0, _set2["default"])(__, uid, (collection || []).reduce(function (result, _ref22) {
        var path = _ref22.path,
            _ref22$defaultValue = _ref22.defaultValue,
            defaultValue = _ref22$defaultValue === void 0 ? null : _ref22$defaultValue;
        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, path, defaultValue));
      }, {}));
    }, {}));
  }, [defaultState]);
  return [state, dispatch];
}

function useVisualizerReady(uid, todos) {
  var _useWidgetContext2 = useWidgetContext(),
      globalState = _useWidgetContext2.state,
      onStateChange = _useWidgetContext2.onStateChange;

  return (0, _react.useCallback)(function () {
    var initRefs = (0, _cloneDeep2["default"])({
      input: [],
      state: globalState,
      todo: {}
    });
    return (todos || []).reduce(function (exe, todo) {
      return exe.then(Todo.promise(todo));
    }, new Promise(function (resolve) {
      return resolve(initRefs);
    })).then(function (_ref23) {
      var finalState = _ref23.state;
      return onStateChange(finalState);
    });
  }, [todos, globalState, onStateChange]);
}