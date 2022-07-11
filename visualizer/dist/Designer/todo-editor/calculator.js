"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PropertySubheader = PropertySubheader;
exports["default"] = CalculatorTodo;

var _react = _interopRequireWildcard(require("react"));

var _shortid = require("shortid");

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _Functions = _interopRequireDefault(require("@material-ui/icons/Functions"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _iconMenuButton = _interopRequireWildcard(require("../icon-menu-button"));

var _customs = require("../_customs");

var _locales = require("../../_utils/locales");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//* Custom Hooks
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25),
      '& > *[role=seq]': {
        width: theme.spacing(4),
        height: theme.spacing(4),
        background: theme.palette.success.main
      }
    },
    action: {
      right: '0 !important'
    },
    secondary: {
      paddingRight: "".concat(theme.spacing(4), "px !important")
    }
  };
}); //* Components

function PropertySubheader(_ref) {
  var actions = _ref.actions,
      classes = _ref.classes,
      category = _ref.category,
      disableAdd = _ref.disableAdd,
      disableExpand = _ref.disableExpand,
      expanded = _ref.expanded,
      onPropertyAdd = _ref.onPropertyAdd,
      onSubheaderClick = _ref.onSubheaderClick;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    disableGutters: true,
    button: true,
    disabled: Boolean(disableExpand),
    onClick: onSubheaderClick
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
    className: classes === null || classes === void 0 ? void 0 : classes.icon
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small"
  }, expanded && !disableExpand ? /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null) : /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: dt("ttl-".concat(category))
  }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
    className: classes === null || classes === void 0 ? void 0 : classes.action
  }, !(actions !== null && actions !== void 0 && actions.length) ? /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: dt("btn-add-".concat(category))
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small",
    color: "primary",
    disabled: Boolean(disableAdd),
    onClick: onPropertyAdd
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))) : /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
    size: "small",
    color: "default",
    icon: /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
    text: dt("btn-add-".concat(category)),
    icon: /*#__PURE__*/_react["default"].createElement(_Add["default"], {
      color: "primary"
    }),
    disabled: Boolean(disableAdd),
    onClick: onPropertyAdd
  }), actions.map(function (_ref2) {
    var text = _ref2.text,
        icon = _ref2.icon,
        disabled = _ref2.disabled,
        onClick = _ref2.onClick;
    return /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      key: text,
      text: text,
      icon: icon,
      disabled: disabled,
      onClick: onClick
    });
  }))));
}

function CalculatorTodo(_ref3) {
  var _ref3$defaultType = _ref3.defaultType,
      defaultType = _ref3$defaultType === void 0 ? 'String' : _ref3$defaultType,
      expandeds = _ref3.expandeds,
      pathname = _ref3.pathname,
      refs = _ref3.refs,
      todo = _ref3.todo,
      _onChange = _ref3.onChange,
      onPropertyExpand = _ref3.onPropertyExpand,
      onSetting = _ref3.onSetting;

  var _useLocales2 = (0, _locales.useLocales)(),
      dt = _useLocales2.getFixedT;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      InputStyles = _useContext.InputStyles;

  var _todo$params = todo.params,
      params = _todo$params === void 0 ? [] : _todo$params,
      template = todo.template;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true,
    subheader: /*#__PURE__*/_react["default"].createElement(PropertySubheader, {
      category: "variables",
      classes: (0, _pick2["default"])(classes, ['icon', 'action']),
      disableExpand: params.length === 0,
      expanded: expandeds.has('params'),
      onSubheaderClick: function onSubheaderClick() {
        return onPropertyExpand('params');
      },
      onPropertyAdd: function onPropertyAdd() {
        var newParam = {
          uid: (0, _shortid.generate)(),
          type: defaultType,
          description: "Variable_".concat(Math.floor(Math.random() * 10000))
        };

        if (!expandeds.has('params')) {
          onPropertyExpand('params');
        }

        _onChange(params.length > 0 ? {
          name: 'params',
          value: [].concat(_toConsumableArray(params), [newParam])
        } : [{
          name: 'params',
          value: [].concat(_toConsumableArray(params), [newParam])
        }, {
          name: 'template',
          value: '$0'
        }]);
      }
    })
  }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expandeds.has('params'),
    timeout: "auto",
    unmountOnExit: true
  }, params.map(function (variable, i) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: variable.uid,
      button: true,
      disableGutters: true,
      classes: {
        secondaryAction: classes.secondary
      },
      onClick: function onClick() {
        return onSetting({
          type: 'variable',
          refs: refs,
          name: (0, _customs.getPropPathname)('array', (0, _customs.getPropPathname)('object', pathname, 'params'), i),
          todo: todo.uid,
          value: variable
        }, i);
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItemAvatar["default"], {
      className: classes.icon
    }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      role: "seq"
    }, i)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: dt("opt-variable-".concat((variable.finalType || variable.type).toLowerCase())),
      secondary: variable.description
    }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
      className: classes.action
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-remove-variable')
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      color: "secondary",
      onClick: function onClick() {
        return _onChange([{
          name: 'template',
          value: null
        }, {
          name: 'params',
          value: params.filter(function (_ref4) {
            var uid = _ref4.uid;
            return uid !== variable.uid;
          })
        }]);
      }
    }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))));
  }))), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
    fullWidth: true,
    required: true,
    label: dt('lbl-calculator'),
    name: "template",
    error: !(template !== null && template !== void 0 && template.trim()),
    value: template || '',
    onChange: function onChange(_ref5) {
      var target = _ref5.target;
      return _onChange(target);
    },
    InputProps: {
      endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
        size: "small",
        color: "primary",
        disabled: params.length === 0,
        tooltip: dt('btn-append-variable'),
        icon: /*#__PURE__*/_react["default"].createElement(_Functions["default"], null)
      }, params.map(function (_ref6, i) {
        var uid = _ref6.uid,
            type = _ref6.type,
            description = _ref6.description;
        return /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
          key: uid,
          text: /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
            primary: type,
            secondary: description
          }),
          onClick: function onClick() {
            return _onChange({
              name: 'template',
              value: "".concat(template || '', " $").concat(i)
            });
          }
        });
      })))
    }
  })));
}