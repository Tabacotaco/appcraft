"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._getPropDefinition = _getPropDefinition;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get2 = _interopRequireDefault(require("lodash/get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var OPTIONS = Symbol('OPTIONS');

function uid(proptype) {
  var seq = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return "".concat(proptype, "_").concat((seq + 1).toString().padStart(3, '0'));
}

function generateOptions(proptype, params, splitFn) {
  var type = Object.keys(_propTypes["default"]).find(function (proptypeName) {
    return _propTypes["default"][proptypeName] === proptype;
  });
  var overrided = params.length === 0 ? proptype : proptype.apply(void 0, _toConsumableArray(params));
  var definition = splitFn(type);

  if (definition) {
    var options = _objectSpread({
      type: type
    }, definition);

    Object.defineProperty(overrided, OPTIONS, {
      get: function get() {
        return _objectSpread(_objectSpread({}, options), {}, {
          required: false
        });
      }
    });
    Object.defineProperty(overrided.isRequired, OPTIONS, {
      get: function get() {
        return _objectSpread(_objectSpread({}, options), {}, {
          required: true
        });
      }
    });
  }

  return overrided;
}

function overrideProptype(proptype) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return generateOptions(proptype, params, function (type) {
    switch (type) {
      case 'objectOf':
      case 'arrayOf':
      case 'instanceOf':
        return {
          uid: uid(type),
          options: (0, _get2["default"])(params[0], OPTIONS)
        };

      case 'oneOf':
        return {
          uid: uid(type),
          options: params[0]
        };

      case 'exact':
      case 'shape':
        return {
          uid: uid(type),
          options: Object.entries(params[0]).reduce(function (properties, _ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                property = _ref2[0],
                options = _ref2[1][OPTIONS];

            return !options ? properties : _objectSpread(_objectSpread({}, properties), {}, _defineProperty({}, property, options));
          }, {})
        };

      case 'oneOfType':
        {
          var alloweds = params[0].reduce(function (result, _ref3, i) {
            var options = _ref3[OPTIONS];
            return !options ? result : result.concat(_objectSpread(_objectSpread({}, options), {}, {
              uid: uid(options.type, i)
            }));
          }, []);

          switch (alloweds.length) {
            case 0:
              return null;

            case 1:
              return alloweds[0];

            default:
              return {
                uid: uid(type),
                options: alloweds
              };
          }
        }

      default:
        return {
          uid: uid(type)
        };
    }
  });
}

function _getPropDefinition(propTypes) {
  return Object.entries(propTypes).reduce(function (result, _ref4) {
    var _ref5 = _slicedToArray(_ref4, 2),
        name = _ref5[0],
        options = _ref5[1][OPTIONS];

    return !options ? result : _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, options));
  }, {});
}

var _default = _objectSpread(_objectSpread({}, _propTypes["default"]), {}, {
  any: overrideProptype(_propTypes["default"].any),
  array: overrideProptype(_propTypes["default"].array),
  arrayOf: function arrayOf() {
    for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }

    return overrideProptype.apply(void 0, [_propTypes["default"].arrayOf].concat(params));
  },
  bool: overrideProptype(_propTypes["default"].bool),
  element: overrideProptype(_propTypes["default"].element),
  elementType: overrideProptype(_propTypes["default"].elementType),
  exact: function exact() {
    for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      params[_key3] = arguments[_key3];
    }

    return overrideProptype.apply(void 0, [_propTypes["default"].exact].concat(params));
  },
  func: overrideProptype(_propTypes["default"].func),
  instanceOf: function instanceOf() {
    for (var _len4 = arguments.length, params = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      params[_key4] = arguments[_key4];
    }

    return overrideProptype.apply(void 0, [_propTypes["default"].instanceOf].concat(params));
  },
  node: overrideProptype(_propTypes["default"].node),
  number: overrideProptype(_propTypes["default"].number),
  object: overrideProptype(_propTypes["default"].object),
  objectOf: function objectOf() {
    for (var _len5 = arguments.length, params = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      params[_key5] = arguments[_key5];
    }

    return overrideProptype.apply(void 0, [_propTypes["default"].objectOf].concat(params));
  },
  oneOf: function oneOf() {
    for (var _len6 = arguments.length, params = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      params[_key6] = arguments[_key6];
    }

    return overrideProptype.apply(void 0, [_propTypes["default"].oneOf].concat(params));
  },
  oneOfType: function oneOfType() {
    for (var _len7 = arguments.length, params = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      params[_key7] = arguments[_key7];
    }

    return overrideProptype.apply(void 0, [_propTypes["default"].oneOfType].concat(params));
  },
  shape: function shape() {
    for (var _len8 = arguments.length, params = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      params[_key8] = arguments[_key8];
    }

    return overrideProptype.apply(void 0, [_propTypes["default"].shape].concat(params));
  },
  string: overrideProptype(_propTypes["default"].string),
  symbol: overrideProptype(_propTypes["default"].symbol)
});

exports["default"] = _default;