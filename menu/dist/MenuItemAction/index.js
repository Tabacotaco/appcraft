"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AppcraftAction = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Menu = _interopRequireDefault(require("@material-ui/core/Menu"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _styles = require("@material-ui/core/styles");

var _DeleteOutline = _interopRequireDefault(require("@material-ui/icons/DeleteOutline"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _PlaylistAdd = _interopRequireDefault(require("@material-ui/icons/PlaylistAdd"));

var _locales = _interopRequireWildcard(require("../utils/locales"));

var _customs = require("./_customs");

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

var LocalesEn = {
  "btn-add": "Add",
  "btn-edit": "Edit",
  "btn-remove": "Remove"
};
var LocalesZh = {
  "btn-add": "\u52A0\u5165",
  "btn-edit": "\u7DE8\u8F2F",
  "btn-remove": "\u522A\u9664"
}; // TODO: TS Namespace

var AppcraftAction; // TODO: Custom Hooks

exports.AppcraftAction = AppcraftAction;

(function (_AppcraftAction) {
  var def;

  (function (_def) {})(def || (def = _AppcraftAction.def || (_AppcraftAction.def = {})));

  var hooks;

  (function (_hooks) {})(hooks || (hooks = _AppcraftAction.hooks || (_AppcraftAction.hooks = {})));
})(AppcraftAction || (exports.AppcraftAction = AppcraftAction = {}));

var useStyles = (0, _styles.makeStyles)(function () {
  return {
    menu: {
      '& > ul > *': {
        width: '100% !important'
      }
    }
  };
}); // TODO: Export Component

var MenuItemAction = function MenuItemAction(_ref) {
  var _ref$ButtonComponent = _ref.ButtonComponent,
      ButtonComponent = _ref$ButtonComponent === void 0 ? _IconButton["default"] : _ref$ButtonComponent,
      _ref$ButtonProps = _ref.ButtonProps,
      ButtonProps = _ref$ButtonProps === void 0 ? {} : _ref$ButtonProps,
      uid = _ref.uid,
      children = _ref.children,
      _ref$type = _ref.type,
      _ref$type$root = _ref$type.root,
      root = _ref$type$root === void 0 ? false : _ref$type$root,
      onAdd = _ref$type.onAdd,
      onEdit = _ref$type.onEdit,
      onRemove = _ref$type.onRemove;

  var _useLocales = (0, _locales.useLocales)(),
      mt = _useLocales.getFixedT;

  var _ref2 = (0, _customs.useActions)(uid, onAdd, onEdit, onRemove),
      _ref3 = _slicedToArray(_ref2, 2),
      anchorEl = _ref3[0],
      action = _ref3[1];

  var classes = useStyles();
  return (root ? onAdd instanceof Function && /*#__PURE__*/_react["default"].createElement(ButtonComponent, _extends({}, ButtonProps, {
    onClick: action.add
  }), children || /*#__PURE__*/_react["default"].createElement(_PlaylistAdd["default"], {
    fontSize: "large"
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(ButtonComponent, _extends({}, ButtonProps, {
    onClick: action.open
  }), children || /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)), /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    classes: {
      paper: classes.menu
    },
    open: Boolean(anchorEl),
    anchorEl: anchorEl,
    onClose: action.close
  }, onEdit instanceof Function && /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], _extends({
    component: _Button["default"]
  }, ButtonProps, {
    startIcon: /*#__PURE__*/_react["default"].createElement(_Edit["default"], null),
    onClick: action.edit
  }), mt('btn-edit')), onAdd instanceof Function && /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], _extends({
    component: _Button["default"]
  }, ButtonProps, {
    startIcon: /*#__PURE__*/_react["default"].createElement(_PlaylistAdd["default"], null),
    onClick: action.add
  }), mt('btn-add')), onRemove instanceof Function && /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], _extends({
    component: _Button["default"]
  }, ButtonProps, {
    startIcon: /*#__PURE__*/_react["default"].createElement(_DeleteOutline["default"], null),
    onClick: action.remove
  }), mt('btn-remove'))))) || null;
};

MenuItemAction.propTypes = {
  ButtonProps: _propTypes["default"].object,
  ButtonComponent: _propTypes["default"].oneOf([_Button["default"], _IconButton["default"]]),
  children: _propTypes["default"].node,
  uid: _propTypes["default"].string.isRequired,
  type: _propTypes["default"].exact({
    root: _propTypes["default"].bool,
    onAdd: _propTypes["default"].func,
    onEdit: _propTypes["default"].func,
    onRemove: _propTypes["default"].func
  }).isRequired
};
MenuItemAction.defaultProps = {
  ButtonComponent: _IconButton["default"],
  ButtonProps: {},
  type: {
    root: false
  }
};

var _default = (0, _locales["default"])({
  en: LocalesEn,
  'zh-Hant': LocalesZh
})(MenuItemAction);

exports["default"] = _default;