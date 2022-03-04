"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AppcraftSubheader = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _styles = require("@material-ui/core/styles");

var _BaseMenuItem = _interopRequireDefault(require("../BaseMenuItem"));

var _MenuItemAction = _interopRequireDefault(require("../MenuItemAction"));

var _locales = _interopRequireWildcard(require("../utils/locales"));

var _context = require("../utils/_context");

var _propTypes2 = require("../utils/prop-types");

var _customs = require("../utils/_customs");

var _customs2 = require("./_customs");

var _excluded = ["action", "className", "classes", "hidden", "icon", "primary", "secondary", "textProps", "onAdd"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

var AppcraftSubheader; // TODO: Custom Hooks

exports.AppcraftSubheader = AppcraftSubheader;

(function (_AppcraftSubheader) {
  var def;

  (function (_def) {})(def || (def = _AppcraftSubheader.def || (_AppcraftSubheader.def = {})));

  var hooks;

  (function (_hooks) {})(hooks || (hooks = _AppcraftSubheader.hooks || (_AppcraftSubheader.hooks = {})));
})(AppcraftSubheader || (exports.AppcraftSubheader = AppcraftSubheader = {}));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    sticky: {
      minWidth: 'auto !important',
      position: 'sticky',
      top: 0,
      zIndex: theme.zIndex.appBar + 1
    }
  };
}); // TODO: Export Component

var AppMenuSubheader = function AppMenuSubheader(_ref) {
  var _classes$item;

  var action = _ref.action,
      className = _ref.className,
      classes = _ref.classes,
      hidden = _ref.hidden,
      icon = _ref.icon,
      primary = _ref.primary,
      secondary = _ref.secondary,
      textProps = _ref.textProps,
      onAdd = _ref.onAdd,
      props = _objectWithoutProperties(_ref, _excluded);

  var _React$useContext = _react["default"].useContext(_context.AppMenuContext),
      editing = _React$useContext.editing,
      rootId = _React$useContext.rootId;

  var _React$useContext2 = _react["default"].useContext(_context.MenuImplementContext),
      variant = _React$useContext2.variant,
      colors = _React$useContext2.colors,
      minRowHeightSpacing = _React$useContext2.minRowHeightSpacing;

  var _useLocales = (0, _locales.useLocales)(),
      lang = _useLocales.lang,
      defaultLocales = _useLocales.defaultLocales;

  var styles = _customs.MenuItemCustom.useStyles(colors, minRowHeightSpacing);

  var $classes = useStyles();
  (0, _customs2.useRecognizeEffect)(rootId);
  return /*#__PURE__*/_react["default"].createElement(_BaseMenuItem["default"], _extends({}, props, {
    hidden: editing && onAdd instanceof Function ? _objectSpread(_objectSpread({}, hidden), {}, {
      text: true
    }) : hidden,
    text: {
      props: textProps,
      primary: primary,
      secondary: secondary
    },
    classes: styles.item(_objectSpread(_objectSpread({}, classes === null || classes === void 0 ? void 0 : classes.item), {}, {
      container: (0, _clsx["default"])(classes === null || classes === void 0 ? void 0 : (_classes$item = classes.item) === null || _classes$item === void 0 ? void 0 : _classes$item.container, className, _defineProperty({}, $classes.sticky, variant === 'vertical'))
    }), props.button === true),
    icon: {
      props: _objectSpread(_objectSpread({}, ! /*#__PURE__*/_react["default"].isValidElement(icon) && (icon === null || icon === void 0 ? void 0 : icon.props)), {}, {
        classes: styles.action(classes === null || classes === void 0 ? void 0 : classes.icon, true)
      }),
      content: editing && onAdd instanceof Function ? /*#__PURE__*/_react["default"].createElement(_MenuItemAction["default"], {
        lang: lang,
        locales: defaultLocales,
        uid: rootId,
        type: {
          root: true,
          onAdd: onAdd
        }
      }) : /*#__PURE__*/_react["default"].isValidElement(icon) ? icon : icon === null || icon === void 0 ? void 0 : icon.content
    },
    action: {
      props: _objectSpread(_objectSpread({}, ! /*#__PURE__*/_react["default"].isValidElement(action) && (action === null || action === void 0 ? void 0 : action.props)), {}, {
        classes: styles.action(classes === null || classes === void 0 ? void 0 : classes.action)
      }),
      content: /*#__PURE__*/_react["default"].isValidElement(action) ? action : action === null || action === void 0 ? void 0 : action.content
    }
  }));
};

AppMenuSubheader.propTypes = {
  action: _propTypes2.NodeOptions,
  button: _propTypes["default"].bool,
  className: _propTypes["default"].string,
  hidden: _propTypes2.MenuItemHiddenOptions,
  icon: _propTypes2.NodeOptions,
  primary: _propTypes2.MenuItemTextOptions,
  secondary: _propTypes2.MenuItemTextOptions,
  textProps: _propTypes["default"].object,
  onAdd: _propTypes["default"].func,
  classes: _propTypes["default"].exact({
    item: _propTypes["default"].objectOf(_propTypes["default"].string),
    icon: _propTypes["default"].objectOf(_propTypes["default"].string),
    action: _propTypes["default"].objectOf(_propTypes["default"].string)
  })
};

var _default = (0, _locales["default"])({
  en: LocalesEn,
  'zh-Hant': LocalesZh
})(AppMenuSubheader);

exports["default"] = _default;