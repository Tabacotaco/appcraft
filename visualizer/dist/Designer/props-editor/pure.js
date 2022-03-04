"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _clsx = _interopRequireDefault(require("clsx"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _withPropitem = _interopRequireDefault(require("./with-propitem"));

var _customs = require("../_customs");

var _excluded = ["inputRef", "name", "required", "value", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// TODO: Custom Hooks
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      minHeight: theme.spacing(5)
    },
    bool: {
      width: '100%',
      margin: theme.spacing(0, 2)
    },
    required: {
      color: theme.palette.secondary.main
    }
  };
}); // TODO: Components

function BoolField(_ref) {
  var inputRef = _ref.inputRef,
      name = _ref.name,
      value = _ref.value,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _onChange = _ref.onChange;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
    className: classes.bool,
    disabled: disabled,
    labelPlacement: "start",
    control: /*#__PURE__*/_react["default"].createElement(_Switch["default"], {
      inputRef: inputRef,
      defaultChecked: value === true,
      size: "small",
      onChange: function onChange(_ref2) {
        var checked = _ref2.target.checked;
        return _onChange({
          target: {
            name: name,
            value: checked
          }
        });
      }
    })
  });
}

function NumberField(_ref3) {
  var inputRef = _ref3.inputRef,
      name = _ref3.name,
      required = _ref3.required,
      value = _ref3.value,
      onChange = _ref3.onChange,
      props = _objectWithoutProperties(_ref3, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_reactNumberFormat["default"], _extends({}, props, {
    value: value || (required ? 0 : null),
    thousandSeparator: true,
    isNumericString: true,
    getInputRef: inputRef,
    onValueChange: function onValueChange(_ref4) {
      var newValue = _ref4.value;
      return onChange({
        target: {
          name: name,
          value: parseFloat(newValue)
        }
      });
    }
  }));
}

var PureBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref5, ref) {
  var _definition$options;

  var pathname = _ref5.pathname,
      propName = _ref5.propName,
      definition = _ref5.definition,
      value = _ref5.value,
      onFieldLocked = _ref5.onFieldLocked;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      InputStyles = _useContext.InputStyles,
      $classes = _useContext.classes,
      props = _useContext.props,
      onChange = _useContext.onChange;

  var binding = (0, _customs.useBindingState)(pathname);
  var dropdown = definition.type === 'oneOf' && Array.isArray(definition.options);
  var classes = useStyles();
  (0, _react.useImperativeHandle)(ref, function () {
    return {};
  }, []);
  var handleChange = (0, _react.useMemo)(function () {
    return (0, _debounce2["default"])(function (_ref6) {
      var propValue = _ref6.target.value;
      var path = (0, _toPath2["default"])(pathname);

      switch (definition.type) {
        case 'bool':
          onChange({
            props: (0, _set2["default"])(props, path, propValue === true)
          });
          break;

        case 'number':
          onChange({
            props: (0, _set2["default"])(props, path, propValue || (definition.required ? 0 : null))
          });
          break;

        default:
          onChange({
            props: (0, _set2["default"])(props, path, propValue || '')
          });
      }

      onFieldLocked(false); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, 1200);
  }, [definition, pathname, props, onChange]);
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, dropdown && {
    select: true,
    SelectProps: {
      displayEmpty: !definition.required
    }
  }, {
    disabled: binding,
    fullWidth: true,
    required: definition.required,
    label: propName,
    defaultValue: value || '',
    onChange: function onChange(e) {
      onFieldLocked(true);
      handleChange(e);
    },
    InputLabelProps: _objectSpread(_objectSpread({}, definition.type === 'bool' && {
      shrink: false
    }), {}, {
      classes: {
        asterisk: (0, _clsx["default"])(classes.required, $classes === null || $classes === void 0 ? void 0 : $classes.required)
      }
    }),
    InputProps: _objectSpread(_objectSpread({}, /^(bool|number)$/.test(definition.type) && {
      inputComponent: definition.type === 'bool' ? BoolField : NumberField
    }), {}, {
      className: (0, _clsx["default"])(classes.root, $classes === null || $classes === void 0 ? void 0 : $classes.input)
    })
  }), !definition.required && /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: ""
  }, "\xA0"), dropdown && ((_definition$options = definition.options) === null || _definition$options === void 0 ? void 0 : _definition$options.map(function (option) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: option,
      value: option
    }, option === false ? 'false' : option);
  })));
});

PureBase.displayName = 'PureBase';

var _default = (0, _withPropitem["default"])('pure', PureBase);

exports["default"] = _default;