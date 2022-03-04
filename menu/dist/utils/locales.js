"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeLocales;
exports.useLocales = void 0;

var _react = _interopRequireWildcard(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _template2 = _interopRequireDefault(require("lodash/template"));

var _excluded = ["lang", "locales"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AppcraftLocale;

(function (_AppcraftLocale) {})(AppcraftLocale || (AppcraftLocale = {}));

var LocaleContext = /*#__PURE__*/(0, _react.createContext)({
  lang: 'en',
  locales: {},
  defaultLocales: {},
  getFixedT: function getFixedT(code) {
    return code;
  }
});

var useLocales = function useLocales() {
  return (0, _react.useContext)(LocaleContext);
};

exports.useLocales = useLocales;

function makeLocales(defaultLocales) {
  var PrivateCustom = {
    useFixedT: function useFixedT(locales) {
      return (0, _react.useCallback)(function (code, params) {
        return (0, _template2["default"])((0, _get2["default"])(locales, code) || code, {
          interpolate: /{{([\s\S]+?)}}/g
        })(params || {});
      }, [locales]);
    },
    useLocales: function useLocales(lang, overridedLocales) {
      var all = (0, _react.useMemo)(function () {
        var keys = new Set(Object.keys(overridedLocales || {}));
        var keeps = Object.keys(defaultLocales).filter(function ($lang) {
          return !keys.has($lang);
        });
        return Object.entries(overridedLocales || {}).reduce(function (result, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              $lang = _ref2[0],
              options = _ref2[1];

          var _ref3 = typeof options === 'string' ? {
            alias: options
          } : options,
              alias = _ref3.alias,
              _ref3$fixedT = _ref3.fixedT,
              fixedT = _ref3$fixedT === void 0 ? (0, _get2["default"])(defaultLocales, $lang) : _ref3$fixedT;

          return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, alias, fixedT));
        }, keeps.reduce(function (result, $lang) {
          return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, $lang, (0, _get2["default"])(defaultLocales, $lang)));
        }, {}));
      }, [overridedLocales]);
      return [(0, _react.useMemo)(function () {
        return (0, _get2["default"])(all, lang);
      }, [lang, all]), all];
    }
  };
  return function (LocaleComponent) {
    return /*#__PURE__*/_react["default"].forwardRef(function (_ref4, ref) {
      var lang = _ref4.lang,
          overridedLocales = _ref4.locales,
          props = _objectWithoutProperties(_ref4, _excluded);

      var _PrivateCustom$useLoc = PrivateCustom.useLocales(lang, overridedLocales),
          _PrivateCustom$useLoc2 = _slicedToArray(_PrivateCustom$useLoc, 2),
          locales = _PrivateCustom$useLoc2[0],
          allLocales = _PrivateCustom$useLoc2[1];

      var getFixedT = PrivateCustom.useFixedT(locales);
      return /*#__PURE__*/_react["default"].createElement(LocaleContext.Provider, {
        value: {
          lang: lang,
          locales: allLocales,
          defaultLocales: overridedLocales,
          getFixedT: getFixedT
        }
      }, /*#__PURE__*/_react["default"].createElement(LocaleComponent, _extends({
        ref: ref
      }, props)));
    });
  };
}