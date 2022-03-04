"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CalculatorTodo;

var _react = _interopRequireWildcard(require("react"));

var _shortid = require("shortid");

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

var _EditOutlined = _interopRequireDefault(require("@material-ui/icons/EditOutlined"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _Functions = _interopRequireDefault(require("@material-ui/icons/Functions"));

var _iconMenuButton = _interopRequireWildcard(require("../icon-menu-button"));

var _customs = require("../_customs");

var _locales = require("../../utils/locales");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25)
    },
    action: {
      right: '0 !important'
    },
    secondary: {
      paddingRight: "".concat(theme.spacing(8), "px !important")
    },
    seq: {
      background: theme.palette.success.main
    }
  };
});

function CalculatorTodo(_ref) {
  var pathname = _ref.pathname,
      refs = _ref.refs,
      todo = _ref.todo,
      _onChange = _ref.onChange,
      onVariableEdit = _ref.onVariableEdit;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      InputStyles = _useContext.InputStyles;

  var _todo$params = todo.params,
      params = _todo$params === void 0 ? [] : _todo$params,
      template = todo.template;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true,
    subheader: /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      disableGutters: true,
      button: true,
      disabled: params.length === 0,
      onClick: function onClick() {
        return setExpanded(!expanded);
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
      className: classes.icon
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small"
    }, expanded && params.length > 0 ? /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null) : /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: dt('ttl-variables')
    }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
      className: classes.action
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-add-variable')
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      color: "primary",
      onClick: function onClick() {
        setExpanded(true);

        _onChange({
          name: 'params',
          value: [].concat(_toConsumableArray(params), [{
            uid: (0, _shortid.generate)(),
            description: "Variable_".concat(Math.floor(Math.random() * 10000)),
            type: 'input'
          }])
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)))))
  }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expanded,
    timeout: "auto",
    unmountOnExit: true
  }, params.map(function (variable, i) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: variable.uid,
      disableGutters: true,
      classes: {
        secondaryAction: classes.secondary
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItemAvatar["default"], null, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      className: classes.seq
    }, i)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: dt("opt-variable-".concat((variable.finalType || variable.type).toLowerCase())),
      secondary: variable.description
    }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
      className: classes.action
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-edit-variable')
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      disabled: !refs,
      onClick: function onClick() {
        return onVariableEdit({
          refs: refs,
          name: "".concat(pathname, ".params[").concat(i, "]"),
          todo: todo.uid,
          value: variable
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_EditOutlined["default"], null))), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
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
          value: params.filter(function (_ref2) {
            var uid = _ref2.uid;
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
    onChange: function onChange(_ref3) {
      var target = _ref3.target;
      return _onChange(target);
    },
    InputProps: {
      endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
        size: "small",
        color: "primary",
        tooltip: dt('btn-append-variable'),
        icon: /*#__PURE__*/_react["default"].createElement(_Functions["default"], null)
      }, params.map(function (_ref4, i) {
        var uid = _ref4.uid,
            type = _ref4.type,
            description = _ref4.description;
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