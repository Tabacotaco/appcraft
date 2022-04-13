"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useReference = exports["default"] = exports.ReferenceProvider = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _treatments = _interopRequireDefault(require("./treatments"));

var _withInitialValue = _interopRequireDefault(require("./with-initial-value"));

var _customs = require("../_customs");

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

var REF_TYPES = new Set('input', 'state', 'todo'); // TODO: Custom Hooks

var ReferenceContext = /*#__PURE__*/(0, _react.createContext)({
  refs: null,
  options: []
});
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      '& > *': {
        padding: '0 !important'
      }
    },
    icon: {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25)
    },
    capitalize: {
      textTransform: 'capitalize'
    },
    select: {
      width: theme.spacing(24)
    },
    item: {
      paddingTop: 0,
      paddingBottom: 0,
      '& > .content': {
        borderLeft: "1px solid ".concat(theme.palette.divider),
        padding: theme.spacing(1, 0, 0, 1),
        margin: '0 !important'
      }
    }
  };
}); // TODO: Components

var ReferenceProvider = ReferenceContext.Provider;
exports.ReferenceProvider = ReferenceProvider;

var useReference = function useReference() {
  return (0, _react.useContext)(ReferenceContext);
};

exports.useReference = useReference;

var VariableBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var _ref$allowedTypes = _ref.allowedTypes,
      allowedTypes = _ref$allowedTypes === void 0 ? Object.keys(_customs.VARIABLE_TYPE).filter(function (code) {
    return code !== 'source';
  }) : _ref$allowedTypes,
      className = _ref.className,
      component = _ref.component,
      _ref$disableTreatment = _ref.disableTreatments,
      disableTreatments = _ref$disableTreatment === void 0 ? false : _ref$disableTreatment,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '' : _ref$prefix,
      value = _ref.value,
      _onChange = _ref.onChange;

  var _ref2 = value || {},
      description = _ref2.description,
      type = _ref2.type,
      initValue = _ref2.initValue;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useReference = useReference(),
      options = _useReference.options,
      refs = _useReference.refs;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      disableHandleRefs = _useContext.disableHandleRefs;

  var treatments = (0, _customs.useVariableTreatments)((0, _customs.getPropPathname)('object', prefix, 'finalType'), refs, value, _onChange);
  var classes = useStyles();
  var initValueName = (0, _customs.getPropPathname)('object', prefix, 'initValue');
  var treatmentName = (0, _customs.getPropPathname)('object', prefix, 'treatments');
  var InitialValue = (0, _react.useMemo)(function () {
    return (0, _withInitialValue["default"])(VariableBase);
  }, []);
  (0, _react.useImperativeHandle)(ref, function () {
    return null;
  }, []);
  (0, _react.useEffect)(function () {
    var _Object$entries$find;

    var init = ((_Object$entries$find = Object.entries(_customs.VARIABLE_TYPE).find(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 1),
          $type = _ref4[0];

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
    className: (0, _clsx["default"])(classes.root, className)
  }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    disableGutters: true
  }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    disableTypography: true
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    fullWidth: true,
    required: true,
    variant: "filled",
    size: "small",
    label: dt('lbl-variable'),
    name: (0, _customs.getPropPathname)('object', prefix, 'description'),
    value: description,
    onChange: function onChange(_ref5) {
      var target = _ref5.target;
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
        disabled: allowedTypes.length <= 1 && type,
        name: (0, _customs.getPropPathname)('object', prefix, 'type'),
        value: type,
        onChange: function onChange(_ref6) {
          var target = _ref6.target;
          return _onChange([target, {
            name: initValueName,
            value: null
          }]);
        }
      }, allowedTypes.map(function ($type) {
        var disabled = $type in options && options[$type].length === 0;
        return disableHandleRefs && REF_TYPES.has($type) && disabled ? null : /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
          key: $type,
          disabled: disabled,
          value: $type
        }, /*#__PURE__*/_react["default"].createElement("span", {
          className: classes.capitalize
        }, dt("opt-variable-".concat($type.toLowerCase()))));
      })))
    }
  }))), /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    disableGutters: true
  }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    disableTypography: true
  }, /*#__PURE__*/_react["default"].createElement(InitialValue, {
    type: type,
    options: options,
    classes: (0, _pick2["default"])(classes, ['icon', 'item']),
    name: initValueName,
    value: initValue,
    onChange: _onChange
  }))), /^(Date|Number|Object|String)$/.test(type) && !disableTreatments && /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    disableGutters: true
  }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    disableTypography: true
  }, /*#__PURE__*/_react["default"].createElement(_treatments["default"], {
    InitialValue: InitialValue,
    classes: (0, _pick2["default"])(classes, ['capitalize', 'icon', 'item', 'select']),
    name: treatmentName,
    value: treatments,
    onChange: _onChange
  }))));
});

VariableBase.displayName = 'VariableBase';
var _default = VariableBase;
exports["default"] = _default;