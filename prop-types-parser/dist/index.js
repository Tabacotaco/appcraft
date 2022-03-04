"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AppcraftParser = void 0;

var _server = _interopRequireDefault(require("react-dom/server.browser"));

var _window = _interopRequireDefault(require("window"));

var _navigator = _interopRequireDefault(require("navigator"));

var _vm = require("vm2");

var _get2 = _interopRequireDefault(require("lodash/get"));

var _fakePropTypes = _interopRequireWildcard(require("./fake-prop-types"));

var _excluded = ["path"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// TODO: TS Namespace
var AppcraftParser;
exports.AppcraftParser = AppcraftParser;

(function (_AppcraftParser) {
  var def;

  (function (_def) {
    var PropTypeName;

    (function (PropTypeName) {
      PropTypeName[PropTypeName["any"] = 0] = "any";
      PropTypeName[PropTypeName["array"] = 1] = "array";
      PropTypeName[PropTypeName["arrayOf"] = 2] = "arrayOf";
      PropTypeName[PropTypeName["bool"] = 3] = "bool";
      PropTypeName[PropTypeName["element"] = 4] = "element";
      PropTypeName[PropTypeName["elementType"] = 5] = "elementType";
      PropTypeName[PropTypeName["exact"] = 6] = "exact";
      PropTypeName[PropTypeName["func"] = 7] = "func";
      PropTypeName[PropTypeName["instanceOf"] = 8] = "instanceOf";
      PropTypeName[PropTypeName["node"] = 9] = "node";
      PropTypeName[PropTypeName["number"] = 10] = "number";
      PropTypeName[PropTypeName["object"] = 11] = "object";
      PropTypeName[PropTypeName["objectOf"] = 12] = "objectOf";
      PropTypeName[PropTypeName["oneOf"] = 13] = "oneOf";
      PropTypeName[PropTypeName["oneOfType"] = 14] = "oneOfType";
      PropTypeName[PropTypeName["shape"] = 15] = "shape";
      PropTypeName[PropTypeName["string"] = 16] = "string";
      PropTypeName[PropTypeName["symbol"] = 17] = "symbol";
    })(PropTypeName || (PropTypeName = {}));

    ;
  })(def || (def = _AppcraftParser.def || (_AppcraftParser.def = {})));
})(AppcraftParser || (exports.AppcraftParser = AppcraftParser = {}));

function createVm(root) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      sandbox = _ref.sandbox,
      mock = _ref.mock;

  var window = new _window["default"]();
  return new _vm.NodeVM({
    sandbox: _objectSpread(_objectSpread(_objectSpread({}, sandbox), Object.getOwnPropertyDescriptors(window)), {}, {
      Event: window.Event,
      document: window.document,
      navigator: _navigator["default"],
      window: window
    }),
    require: {
      external: true,
      builtin: ['*'],
      context: 'sandbox',
      mock: mock,
      root: root
    }
  });
}

var PropTypesParser = /*#__PURE__*/function () {
  function PropTypesParser(projectPath) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        libs = _ref2.libs,
        mock = _ref2.mock;

    _classCallCheck(this, PropTypesParser);

    this.projectPath = projectPath;

    _defineProperty(this, "baseVm", null);

    _defineProperty(this, "globalLibs", null);

    _defineProperty(this, "defaultMock", null);

    this.globalLibs = libs;
    this.defaultMock = mock;
    this.baseVm = createVm(projectPath);
  }

  _createClass(PropTypesParser, [{
    key: "getImportModule",
    value: function getImportModule(importPath) {
      var _this = this;

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          mock = _ref3.mock,
          sandbox = _ref3.sandbox,
          extra = _ref3.extra,
          _ref3$prefix = _ref3.prefix,
          prefix = _ref3$prefix === void 0 ? '/node_modules' : _ref3$prefix;

      var importModule = createVm(this.projectPath, {
        mock: _objectSpread(_objectSpread({}, Object.entries(_objectSpread(_objectSpread({}, this.defaultMock), mock)).reduce(function (result, _ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              name = _ref5[0],
              mockModule = _ref5[1];

          return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, typeof mockModule === 'string' ? "".concat(_this.projectPath, "/node_modules/").concat(mockModule) : mockModule));
        }, {})), {}, {
          'prop-types': _fakePropTypes["default"],
          // REMARK: 將所有 Component 的 PropTypes 替換為 Overrided 版本，才能順利產生 Structures
          'react-dom/server': _server["default"] // REMARK: 強制使用 browser 版本（因為 NodeVM 已經模擬前端環境）

        }),
        sandbox: _objectSpread(_objectSpread({}, sandbox), Object.entries(this.globalLibs || {}).reduce(function (result, _ref6) {
          var _ref7 = _slicedToArray(_ref6, 2),
              name = _ref7[0],
              globalOptions = _ref7[1];

          var _ref8 = typeof globalOptions === 'string' ? {
            path: globalOptions
          } : globalOptions,
              _ref8$prefix = _ref8.prefix,
              globalPrefix = _ref8$prefix === void 0 ? '/node_modules' : _ref8$prefix,
              path = _ref8.path;

          return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, name, _this.baseVm.runFile("".concat(_this.projectPath).concat(globalPrefix, "/").concat(path))));
        }, {}))
      }).runFile("".concat(this.projectPath).concat(prefix, "/").concat(importPath));
      return extra && (0, _get2["default"])(importModule, extra) || (0, _get2["default"])(importModule, 'default');
    }
  }, {
    key: "getPropsDefinition",
    value: function getPropsDefinition(importPath) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var _this$getImportModule = this.getImportModule(importPath, options),
          propTypes = _this$getImportModule.propTypes,
          defaultProps = _this$getImportModule.defaultProps;

      return {
        propTypes: (0, _fakePropTypes._getPropDefinition)(propTypes),
        defaultProps: defaultProps
      };
    }
  }, {
    key: "getPropsDefinitions",
    value: function getPropsDefinitions(importations) {
      var _this2 = this;

      return Object.entries(importations).reduce(function (result, _ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            moduleName = _ref10[0],
            moduleOptions = _ref10[1];

        var _ref11 = typeof moduleOptions === 'string' ? {
          path: moduleOptions
        } : moduleOptions,
            path = _ref11.path,
            options = _objectWithoutProperties(_ref11, _excluded);

        return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, moduleName, _this2.getPropsDefinition(path, options)));
      }, {});
    }
  }]);

  return PropTypesParser;
}();

exports["default"] = PropTypesParser;