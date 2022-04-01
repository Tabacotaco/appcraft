"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconMenuItem = IconMenuItem;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _excluded = ["icon", "text", "disabledAutoClose", "onClick"],
    _excluded2 = ["icon", "tooltip", "children", "onClick", "onClose"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var MenuContext = /*#__PURE__*/(0, _react.createContext)({
  onClose: function onClose() {
    return null;
  }
});
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25)
    }
  };
});
var FitContentMenu = (0, _styles.withStyles)({
  root: {
    width: 'fit-content !important'
  }
})(_List["default"]);

function IconMenuItem(_ref) {
  var icon = _ref.icon,
      text = _ref.text,
      _ref$disabledAutoClos = _ref.disabledAutoClose,
      disabledAutoClose = _ref$disabledAutoClos === void 0 ? false : _ref$disabledAutoClos,
      _onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useContext = (0, _react.useContext)(MenuContext),
      onClose = _useContext.onClose;

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], _extends({}, props, {
    button: true,
    onClick: function onClick(e) {
      _onClick === null || _onClick === void 0 ? void 0 : _onClick(e);
      !disabledAutoClose && onClose();
    }
  }), icon && /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
    className: classes.icon
  }, icon), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: text
  }));
}

var IconMenuButton = /*#__PURE__*/(0, _react.forwardRef)(function (_ref2, ref) {
  var icon = _ref2.icon,
      tooltip = _ref2.tooltip,
      children = _ref2.children,
      _onClick2 = _ref2.onClick,
      _onClose = _ref2.onClose,
      props = _objectWithoutProperties(_ref2, _excluded2);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var handleClose = (0, _react.useCallback)(function () {
    setAnchorEl(null);
    _onClose === null || _onClose === void 0 ? void 0 : _onClose();
  }, [_onClose]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      close: handleClose
    };
  });
  return /*#__PURE__*/_react["default"].createElement(MenuContext.Provider, {
    value: {
      onClose: handleClose
    }
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], _extends({
    title: tooltip || ' '
  }, !tooltip && {
    open: false
  }), /*#__PURE__*/_react["default"].createElement(_IconButton["default"], _extends({}, props, {
    onClick: function onClick(e) {
      return (_onClick2 === null || _onClick2 === void 0 ? void 0 : _onClick2(e)) !== false && setAnchorEl(e.currentTarget);
    }
  }), icon || /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null))), /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    open: Boolean(anchorEl),
    onClose: function onClose() {
      setAnchorEl(null);
      _onClose === null || _onClose === void 0 ? void 0 : _onClose();
    },
    PaperProps: {
      component: FitContentMenu
    }
  }, children));
});
IconMenuButton.displayName = 'IconMenuButton';
var _default = IconMenuButton;
exports["default"] = _default;