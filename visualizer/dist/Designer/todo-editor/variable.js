"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = VariableDialog;

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ButtonGroup = _interopRequireDefault(require("@material-ui/core/ButtonGroup"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _initialValue = _interopRequireDefault(require("./initial-value"));

var _treatments = _interopRequireDefault(require("./treatments"));

var _customs = require("../_customs");

var _locales = require("../../utils/locales");

var _excluded = ["refs", "options", "value", "onClose", "onConfirm"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// TODO: Custom Hooks
var ReferenceContext = /*#__PURE__*/(0, _react.createContext)({
  refs: null,
  options: []
});
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25)
    },
    title: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    capitalize: {
      textTransform: 'capitalize'
    },
    select: {
      width: theme.spacing(24)
    },
    variable: {
      '& > *': {
        padding: '0 !important'
      }
    },
    item: {
      paddingTop: 0,
      paddingBottom: 0,
      '& > .content': {
        borderLeft: "1px solid ".concat(theme.palette.divider),
        padding: theme.spacing(1, 0, 0, 1),
        margin: '0 !important'
      }
    },
    action: {
      padding: '0 !important',
      '& > *': {
        borderRadius: '0',
        margin: '0 !important',
        '&:first-child': {
          borderBottomLeftRadius: "".concat(theme.shape.borderRadius, " !important")
        },
        '&:last-child': {
          borderBottomRightRadius: "".concat(theme.shape.borderRadius, " !important")
        }
      }
    }
  };
}); // TODO: Components

function Variable(_ref) {
  var component = _ref.component,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '' : _ref$prefix,
      _ref$disableTreatment = _ref.disableTreatments,
      disableTreatments = _ref$disableTreatment === void 0 ? false : _ref$disableTreatment,
      defaultVariable = _ref.variable,
      _onChange = _ref.onChange;
  var description = defaultVariable.description,
      type = defaultVariable.type,
      initValue = defaultVariable.initValue;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useContext = (0, _react.useContext)(ReferenceContext),
      options = _useContext.options,
      refs = _useContext.refs;

  var treatments = (0, _customs.useVariableTreatments)((0, _customs.getPropPathname)('object', prefix, 'finalType'), refs, defaultVariable, _onChange);
  var classes = useStyles();
  var initValueName = (0, _customs.getPropPathname)('object', prefix, 'initValue');
  var treatmentName = (0, _customs.getPropPathname)('object', prefix, 'treatments');
  (0, _react.useEffect)(function () {
    var _Object$entries$find;

    var init = ((_Object$entries$find = Object.entries(_customs.VARIABLE_TYPE).find(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
          $type = _ref3[0];

      return $type === type;
    })) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[1].init) || null;

    if (!initValue && init !== initValue) {
      _onChange([{
        name: initValueName,
        value: init
      }, {
        name: treatmentName,
        value: []
      }]);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [type]);
  return /*#__PURE__*/_react["default"].createElement(_List["default"], {
    component: component,
    className: classes.variable
  }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    disableGutters: true
  }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      fullWidth: true,
      required: true,
      variant: "filled",
      size: "small",
      label: dt('lbl-variable'),
      name: (0, _customs.getPropPathname)('object', prefix, 'description'),
      value: description,
      onChange: function onChange(_ref4) {
        var target = _ref4.target;
        return _onChange(target);
      },
      InputLabelProps: {
        shrink: true
      },
      InputProps: {
        startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
          position: "start"
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          InputProps: {
            className: classes.select,
            disableUnderline: true
          },
          variant: "standard",
          size: "small",
          fullWidth: true,
          select: true,
          name: (0, _customs.getPropPathname)('object', prefix, 'type'),
          value: type,
          onChange: function onChange(_ref5) {
            var target = _ref5.target;
            return _onChange([target, {
              name: initValueName,
              value: null
            }]);
          }
        }, Object.keys(_customs.VARIABLE_TYPE).map(function ($type) {
          return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
            key: $type,
            disabled: $type in options && options[$type].length === 0,
            value: $type
          }, /*#__PURE__*/_react["default"].createElement("span", {
            className: classes.capitalize
          }, dt("opt-variable-".concat($type.toLowerCase()))));
        })))
      }
    })
  })), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    disableGutters: true
  }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: /*#__PURE__*/_react["default"].createElement(_initialValue["default"], {
      type: type,
      options: options,
      VariableComponent: Variable,
      classes: (0, _pick2["default"])(classes, ['icon', 'item']),
      name: initValueName,
      value: initValue,
      onChange: _onChange
    })
  })), /^(Date|Number|String)$/.test(type) && !disableTreatments && /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    disableGutters: true
  }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: /*#__PURE__*/_react["default"].createElement(_treatments["default"], {
      VariableComponent: Variable,
      classes: (0, _pick2["default"])(classes, ['capitalize', 'icon', 'item', 'select']),
      name: treatmentName,
      value: treatments,
      onChange: _onChange
    })
  })));
}

Variable.displayName = 'Variable';

function VariableDialog(_ref6) {
  var refs = _ref6.refs,
      options = _ref6.options,
      defaultValue = _ref6.value,
      onClose = _ref6.onClose,
      onConfirm = _ref6.onConfirm,
      props = _objectWithoutProperties(_ref6, _excluded);

  var _useLocales2 = (0, _locales.useLocales)(),
      dt = _useLocales2.getFixedT;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      variable = _useState2[0],
      setVariable = _useState2[1];

  var open = Boolean(options && variable);
  var classes = useStyles();
  (0, _react.useEffect)(function () {
    if (defaultValue) {
      setVariable(defaultValue);
      return function () {
        return setVariable(null);
      };
    }

    return null;
  }, [defaultValue]);
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], _extends({}, props, {
    fullWidth: true,
    maxWidth: "sm",
    scroll: "body",
    open: open
  }), /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    className: classes.title
  }, dt('ttl-variable-setting')), /*#__PURE__*/_react["default"].createElement(ReferenceContext.Provider, {
    value: {
      refs: refs,
      options: options
    }
  }, open && /*#__PURE__*/_react["default"].createElement(Variable, {
    component: _DialogContent["default"],
    variable: variable,
    onChange: function onChange(targets) {
      return setVariable((Array.isArray(targets) ? targets : [targets]).reduce(function (result, _ref7) {
        var name = _ref7.name,
            value = _ref7.value;
        return (0, _set2["default"])(result, name, value);
      }, (0, _cloneDeep2["default"])(variable)));
    }
  })), /*#__PURE__*/_react["default"].createElement(_ButtonGroup["default"], {
    className: classes.action,
    fullWidth: true,
    variant: "contained",
    size: "large",
    component: _DialogActions["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "default",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Close["default"], null),
    onClick: onClose
  }, dt('btn-cancel')), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "primary",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Check["default"], null),
    onClick: function onClick() {
      return onConfirm(variable);
    }
  }, dt('btn-confirm'))));
}