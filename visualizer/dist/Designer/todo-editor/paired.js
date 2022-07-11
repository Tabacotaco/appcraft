"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _calculator = _interopRequireDefault(require("./calculator"));

var _variable = _interopRequireWildcard(require("./variable"));

var _locales = require("../../_utils/locales");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//* Custom Hooks
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: "".concat(theme.spacing(-1, 0), " !important"),
      padding: "".concat(theme.spacing(1, 0), " !important"),
      '& > *[role=source]': {
        padding: theme.spacing(2, 2, 2, 3),
        maxHeight: '100%',
        height: 'fit-content',
        width: theme.spacing(42),
        overflowY: 'auto',
        '& > * + *': {
          marginTop: theme.spacing(3)
        },
        '& + *': {
          display: 'flex',
          flexDirection: 'column',
          padding: theme.spacing(2, 3, 2, 2),
          width: "calc(100% - ".concat(theme.spacing(42), "px) !important"),
          borderLeft: "1px solid ".concat(theme.palette.divider),
          '& > *[role=unactived]': {
            margin: 'auto'
          },
          '& > .variable': {
            height: 'fit-content'
          }
        }
      }
    }
  };
}); //* Component

var PairedBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var className = _ref.className,
      component = _ref.component,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '' : _ref$prefix,
      defaultPaired = _ref.value,
      onChange = _ref.onChange;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useReference = (0, _variable.useReference)(),
      refs = _useReference.refs;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      actived = _useState2[0],
      setActived = _useState2[1];

  var _useState3 = (0, _react.useState)(new Set()),
      _useState4 = _slicedToArray(_useState3, 2),
      expandeds = _useState4[0],
      setExpandeds = _useState4[1];

  var classes = useStyles();
  (0, _react.useImperativeHandle)(ref, function () {
    return null;
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    className: (0, _clsx["default"])(classes.root, className),
    container: true,
    component: component
  }, /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    role: "source",
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_calculator["default"], {
    defaultType: "source",
    expandeds: expandeds,
    pathname: prefix,
    refs: refs,
    todo: defaultPaired,
    onChange: onChange,
    onSetting: function onSetting(_ref2, index) {
      var name = _ref2.name;
      return setActived({
        name: name,
        index: index
      });
    },
    onPropertyExpand: function onPropertyExpand(code) {
      expandeds[expandeds.has(code) ? 'delete' : 'add'](code);
      setExpandeds(new Set(expandeds));
    }
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, !actived ? /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    role: "unactived",
    align: "center",
    variant: "h5",
    color: "textSecondary"
  }, dt('ttl-no-source-actived')) : /*#__PURE__*/_react["default"].createElement(_variable["default"], {
    allowedTypes: ['source'],
    className: "variable",
    prefix: actived.name,
    value: defaultPaired.params[actived.index],
    onChange: onChange
  })));
});

PairedBase.displayName = 'PairedBase';
var _default = PairedBase;
exports["default"] = _default;