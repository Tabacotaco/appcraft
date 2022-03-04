"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AppcraftEditor = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ButtonGroup = _interopRequireDefault(require("@material-ui/core/ButtonGroup"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _InputLabel = _interopRequireDefault(require("@material-ui/core/InputLabel"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _OutlinedInput = _interopRequireDefault(require("@material-ui/core/OutlinedInput"));

var _Radio = _interopRequireDefault(require("@material-ui/core/Radio"));

var _RadioGroup = _interopRequireDefault(require("@material-ui/core/RadioGroup"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _DeleteOutline = _interopRequireDefault(require("@material-ui/icons/DeleteOutline"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _locales = _interopRequireWildcard(require("../utils/locales"));

var _customs = require("./_customs");

var _propTypes2 = require("../utils/prop-types");

var _excluded = ["inputRef", "classes", "icons"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var LocalesEn = {
  "btn-cancel": "Cancel",
  "btn-confirm": "Confirm",
  "lbl-icon": "Icon",
  "lbl-item-name": "Display Name",
  "plh-keyword": "Search Icons"
};
var LocalesZh = {
  "btn-cancel": "\u53D6\u6D88",
  "btn-confirm": "\u78BA\u8A8D",
  "lbl-icon": "\u5716\u793A",
  "lbl-item-name": "\u540D\u7A31",
  "plh-keyword": "\u95DC\u9375\u5B57\u641C\u5C0B"
}; // TODO: TS Namespace

var AppcraftEditor; // TODO: Custom Hooks

exports.AppcraftEditor = AppcraftEditor;

(function (_AppcraftEditor) {
  var def;

  (function (_def) {})(def || (def = _AppcraftEditor.def || (_AppcraftEditor.def = {})));

  var hooks;

  (function (_hooks) {})(hooks || (hooks = _AppcraftEditor.hooks || (_AppcraftEditor.hooks = {})));
})(AppcraftEditor || (exports.AppcraftEditor = AppcraftEditor = {}));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    actions: {
      padding: 0,
      '& > button': {
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        margin: '0 !important'
      }
    },
    content: {
      marginBottom: theme.spacing(3),
      '& > *:not(:first-child)': {
        marginTop: theme.spacing(2)
      }
    },
    control: {
      display: 'flex',
      flexDirection: 'column',
      '& > .search-bar': {
        width: '100%'
      },
      '& > .icon-group': {
        maxHeight: theme.spacing(60),
        overflow: 'auto',
        '& > *': {
          margin: theme.spacing(1, 0),
          width: '25%'
        }
      }
    }
  };
}); // TODO: Export Component

var IconGroup = function IconGroup(_ref) {
  var inputRef = _ref.inputRef,
      classes = _ref.classes,
      icons = _ref.icons,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useLocales = (0, _locales.useLocales)(),
      mt = _useLocales.getFixedT;

  var _ref2 = (0, _customs.useIcons)(icons),
      _ref3 = _slicedToArray(_ref2, 2),
      list = _ref3[0],
      handleSearch = _ref3[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
    disableGutters: true,
    variant: "dense",
    className: classes.search
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    fullWidth: true,
    variant: "standard",
    size: "small",
    margin: "dense",
    placeholder: mt('plh-keyword'),
    onChange: handleSearch,
    InputProps: {
      startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Search["default"], {
        color: "disabled"
      }))
    }
  })), /*#__PURE__*/_react["default"].createElement(_RadioGroup["default"], _extends({
    ref: function ref(_ref5) {
      return inputRef((_ref5 === null || _ref5 === void 0 ? void 0 : _ref5.inputElement) || null);
    },
    row: true,
    name: "icon"
  }, props, {
    className: (0, _clsx["default"])(classes.group, props.className)
  }), list.map(function (_ref4) {
    var key = _ref4.key,
        type = _ref4.type,
        name = _ref4.name;
    return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      key: key,
      title: name
    }, /*#__PURE__*/_react["default"].createElement(_FormControlLabel["default"], {
      value: key,
      label: /*#__PURE__*/_react["default"].createElement(_Icon["default"], _extends({
        color: key === props.value ? 'primary' : 'action',
        style: {
          fontSize: 32
        }
      }, type !== 'mui' && {
        className: (0, _clsx["default"])(type, key)
      }), type === 'mui' && name),
      control:
      /*#__PURE__*/
      // @ts-ignore
      _react["default"].createElement(_Radio["default"], {
        color: "primary",
        inputProps: {
          'data-type': type,
          'data-name': name
        }
      })
    }));
  })));
};

var MenuItemEditor = function MenuItemEditor(_ref6) {
  var defaultValue = _ref6.value,
      open = _ref6.open,
      title = _ref6.title,
      type = _ref6.type,
      icons = _ref6.icons,
      languages = _ref6.languages,
      onChange = _ref6.onChange,
      onClose = _ref6.onClose;
  var classes = useStyles();

  var _useLocales2 = (0, _locales.useLocales)(),
      mt = _useLocales2.getFixedT;

  var _ref7 = (0, _customs.useDialog)(type, defaultValue, onChange),
      _ref8 = _slicedToArray(_ref7, 3),
      value = _ref8[0],
      confirmable = _ref8[1],
      handles = _ref8[2];

  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    fullWidth: true,
    disableBackdropClick: true,
    scroll: "body",
    maxWidth: "sm",
    open: open,
    onClose: onClose,
    PaperProps: {
      component: 'form'
    }
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    component: _DialogTitle["default"],
    disableTypography: true
  }, title), /*#__PURE__*/_react["default"].createElement(_DialogContent["default"], {
    className: classes.content
  }, Object.entries((value === null || value === void 0 ? void 0 : value.primary) || {}).map(function (_ref9, i, arr) {
    var _ref10 = _slicedToArray(_ref9, 2),
        lang = _ref10[0],
        primary = _ref10[1];

    return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      key: lang,
      fullWidth: true,
      variant: "outlined",
      margin: "dense",
      size: "small",
      disabled: lang === _customs.EMPTY_OPTION,
      label: mt('lbl-item-name'),
      name: lang,
      value: primary,
      onChange: handles.primary,
      InputProps: {
        startAdornment: (languages === null || languages === void 0 ? void 0 : languages.length) > 1 && /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
          position: "start"
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          fullWidth: true,
          select: true,
          variant: "standard",
          margin: "dense",
          size: "small",
          name: lang,
          value: lang,
          onChange: handles.lang,
          InputProps: {
            disableUnderline: true
          }
        }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
          value: _customs.EMPTY_OPTION
        }, "\xA0"), languages === null || languages === void 0 ? void 0 : languages.map(function (_ref11) {
          var code = _ref11.code,
              display = _ref11.display;
          return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
            key: code,
            value: code,
            disabled: code in value.primary
          }, display);
        }))),
        endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
          position: "end"
        }, i === arr.length - 1 && (languages === null || languages === void 0 ? void 0 : languages.length) > arr.length && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
          size: "small",
          color: "primary",
          onClick: handles.add
        }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)), arr.length > 1 && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
          size: "small",
          color: "secondary",
          "data-lang": lang,
          onClick: handles.remove
        }, /*#__PURE__*/_react["default"].createElement(_DeleteOutline["default"], null)))
      }
    });
  }), /*#__PURE__*/_react["default"].createElement(_FormControl["default"], {
    fullWidth: true,
    variant: "outlined",
    size: "small",
    margin: "dense"
  }, /*#__PURE__*/_react["default"].createElement(_InputLabel["default"], {
    shrink: true
  }, mt('lbl-icon')), /*#__PURE__*/_react["default"].createElement(_OutlinedInput["default"], {
    fullWidth: true,
    multiline: true,
    notched: true,
    className: classes.control,
    margin: "dense",
    size: "small",
    label: mt('lbl-icon'),
    value: !(value !== null && value !== void 0 && value.icon) ? '' : "".concat(value.icon.type, "-").concat(value.icon.name),
    onChange: handles.icon // @ts-ignore
    ,
    inputComponent: IconGroup,
    inputProps: {
      classes: {
        search: 'search-bar',
        group: 'icon-group'
      },
      icons: icons
    }
  }))), /*#__PURE__*/_react["default"].createElement(_ButtonGroup["default"], {
    fullWidth: true,
    className: classes.actions,
    size: "large",
    variant: "contained",
    component: _DialogActions["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    startIcon: /*#__PURE__*/_react["default"].createElement(_Close["default"], null),
    onClick: onClose
  }, mt('btn-cancel')), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    type: "submit",
    color: "primary",
    disabled: !confirmable,
    startIcon: /*#__PURE__*/_react["default"].createElement(_Check["default"], null),
    onClick: handles.confirm
  }, mt('btn-confirm'))));
};

MenuItemEditor.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  title: _propTypes["default"].string,
  value: _propTypes["default"].shape({
    uid: _propTypes["default"].string,
    icon: _propTypes2.IconOptions,
    primary: _propTypes["default"].objectOf(_propTypes["default"].string.isRequired),
    secondary: _propTypes["default"].objectOf(_propTypes["default"].string.isRequired)
  }),
  onChange: _propTypes["default"].func,
  onClose: _propTypes["default"].func,
  icons: _propTypes["default"].objectOf(_propTypes["default"].arrayOf(_propTypes["default"].string.isRequired).isRequired),
  languages: _propTypes["default"].arrayOf(_propTypes["default"].exact({
    code: _propTypes["default"].string.isRequired,
    display: _propTypes["default"].string.isRequired
  })),
  // @ts-ignore
  type: _propTypes["default"].oneOf(['add', 'edit']).isRequired
};
MenuItemEditor.defaultProps = {
  icons: {},
  languages: []
};

var _default = (0, _locales["default"])({
  en: LocalesEn,
  'zh-Hant': LocalesZh
})(MenuItemEditor);

exports["default"] = _default;