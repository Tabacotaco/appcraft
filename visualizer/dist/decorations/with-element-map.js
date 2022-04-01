"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _merge2 = _interopRequireDefault(require("lodash/merge"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _excluded = ["ElementMapProps"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var makeElementMap = function makeElementMap(_ref) {
  var dataMappingProps = _ref.dataMappingProps;
  var replaceds = (dataMappingProps || []).reduce(function (result, _ref2) {
    var mappingPropPath = _ref2.mappingPropPath,
        keyField = _ref2.keyField,
        sourceCode = _ref2.sourceCode,
        childPairs = _ref2.childPairs;
    return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, mappingPropPath, {
      keyField: keyField,
      sourceCode: sourceCode,
      childPairs: (childPairs || []).reduce(function (childResult, pair) {
        return _objectSpread(_objectSpread({}, childResult), {}, _defineProperty({}, (0, _isPlainObject2["default"])(pair) && pair.propPath || pair || '', (pair === null || pair === void 0 ? void 0 : pair.field) || null));
      }, {})
    }));
  }, {});
  return function (OverridedElement) {
    var MappedElement = function MappedElement(_ref3) {
      var ElementMapProps = _ref3.ElementMapProps,
          oringinalProps = _objectWithoutProperties(_ref3, _excluded);

      var _ref4 = ElementMapProps || {},
          datasource = _ref4.datasource;

      var props = (0, _omit2["default"])(oringinalProps, Object.keys(replaceds));
      return /*#__PURE__*/_react["default"].createElement(OverridedElement, (0, _merge2["default"])({}, props, Object.entries(replaceds).reduce(function (overridedProps, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            mappingPropPath = _ref6[0],
            _ref6$ = _ref6[1],
            keyField = _ref6$.keyField,
            sourceCode = _ref6$.sourceCode,
            childPairs = _ref6$.childPairs;

        var children = (0, _get2["default"])(oringinalProps, mappingPropPath);

        var _ref7 = (datasource === null || datasource === void 0 ? void 0 : datasource.find(function (_ref8) {
          var code = _ref8.code;
          return code === sourceCode;
        })) || {},
            list = _ref7.data;

        return !children ? overridedProps : (0, _set2["default"])(overridedProps, mappingPropPath, (Array.isArray(children) ? children : [children]).reduce(function (__, _ref9) {
          var ChildElement = _ref9.type,
              childKey = _ref9.key,
              oringinalCildProps = _ref9.props;
          return (list || []).reduce(function (result, data) {
            var key = (0, _get2["default"])(data, (0, _toPath2["default"])(keyField)) || JSON.stringify(data);
            var childProps = (0, _omit2["default"])(oringinalCildProps, Object.keys(childPairs));
            return result.concat( /*#__PURE__*/_react["default"].createElement(ChildElement, _extends({
              key: "".concat(childKey || 'root', "-").concat(key)
            }, (0, _merge2["default"])({}, childProps, Object.entries(childPairs).reduce(function (childOverridedProps, _ref10) {
              var _ref11 = _slicedToArray(_ref10, 2),
                  childPropPath = _ref11[0],
                  field = _ref11[1];

              return (0, _set2["default"])(childOverridedProps, childPropPath, !field ? data : (0, _get2["default"])(data, field));
            }, {})))));
          }, __);
        }, []));
      }, {})));
    };

    MappedElement.displayName = 'MappingElement';
    MappedElement.Naked = OverridedElement;
    MappedElement.overrideds = Object.entries(replaceds).reduce(function (result, _ref12) {
      var _ref13 = _slicedToArray(_ref12, 2),
          propPath = _ref13[0],
          childPairs = _ref13[1].childPairs;

      return result.concat({
        propPath: propPath,
        overrideds: Object.keys(childPairs)
      });
    }, Object.keys(replaceds));
    return MappedElement;
  };
};

makeElementMap.configTypes = {
  dataMappingProps: _propTypes["default"].arrayOf(_propTypes["default"].exact({
    sourceCode: _propTypes["default"].string.isRequired,
    keyField: _propTypes["default"].string,
    mappingPropPath: _propTypes["default"].string.isRequired,
    childPairs: _propTypes["default"].arrayOf(_propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].exact({
      propPath: _propTypes["default"].string.isRequired,
      field: _propTypes["default"].string
    })])).isRequired
  }).isRequired).isRequired
};
makeElementMap.propTypes = {
  ElementMapProps: _propTypes["default"].exact({
    datasource: _propTypes["default"].arrayOf(_propTypes["default"].exact({
      code: _propTypes["default"].string.isRequired,
      data: _propTypes["default"].array
    }))
  })
};
var _default = makeElementMap;
exports["default"] = _default;