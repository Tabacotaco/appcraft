"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _shortid = require("shortid");

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _styles = require("@material-ui/core/styles");

var _propTypes2 = require("../utils/prop-types");

var _context = require("../utils/_context");

var _customs = require("../utils/_customs");

var _BaseMenuItem = _interopRequireWildcard(require("../BaseMenuItem"));

var _excluded = ["borderRadiusSpacing"],
    _excluded2 = ["BaseSubMenu", "action", "children", "className", "classes", "hidden", "href", "icon", "primary", "secondary", "textProps", "onClick"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// TODO: TS Namespace
var AppcraftFooter;

(function (_AppcraftFooter) {
  var def;

  (function (_def) {})(def || (def = _AppcraftFooter.def || (_AppcraftFooter.def = {})));

  var hooks;

  (function (_hooks) {})(hooks || (hooks = _AppcraftFooter.hooks || (_AppcraftFooter.hooks = {})));
})(AppcraftFooter || (AppcraftFooter = {})); // TODO: Custom Hooks & HOC


var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    sticky: {
      bottom: 0,
      marginTop: 'auto !important',
      minWidth: 'auto !important',
      position: 'sticky',
      zIndex: theme.zIndex.appBar - 1
    }
  };
});
var withSubMenu = (0, _BaseMenuItem.makeSubMenu)(function (_ref) {
  var children = _ref.children,
      classes = _ref.classes;

  var uid = _react["default"].useMemo(function () {
    return "AppMenuFooter-".concat((0, _shortid.generate)());
  }, []);

  var _React$useContext = _react["default"].useContext(_context.MenuImplementContext),
      subMenuProps = _React$useContext.subMenuProps,
      subVariant = _React$useContext.subVariant;

  var _ref2 = _customs.MenuItemCustom.useCollapse(subVariant, uid, subMenuProps),
      _ref3 = _slicedToArray(_ref2, 2),
      open = _ref3[0],
      submenu = _ref3[1];

  var _ref4 = subMenuProps || {},
      borderRadiusSpacing = _ref4.borderRadiusSpacing,
      subProps = _objectWithoutProperties(_ref4, _excluded);

  return [Boolean(children), {
    borderRadiusSpacing: borderRadiusSpacing,
    className: classes === null || classes === void 0 ? void 0 : classes.submenu,
    open: open,
    props: subProps,
    uid: uid,
    variant: subVariant,
    onOpen: submenu.expand,
    onClose: submenu.collapse,
    content: /*#__PURE__*/_react["default"].createElement(_context.OwnerMenuItemContext.Provider, {
      value: {
        footer: true,
        owner: uid
      }
    }, children)
  }];
}); // TODO: Export Component

var AppMenuFooter = function AppMenuFooter(_ref5) {
  var _classes$tab, _classes$item;

  var BaseSubMenu = _ref5.BaseSubMenu,
      action = _ref5.action,
      children = _ref5.children,
      className = _ref5.className,
      classes = _ref5.classes,
      hidden = _ref5.hidden,
      href = _ref5.href,
      icon = _ref5.icon,
      primary = _ref5.primary,
      secondary = _ref5.secondary,
      textProps = _ref5.textProps,
      onClick = _ref5.onClick,
      props = _objectWithoutProperties(_ref5, _excluded2);

  var _React$useContext2 = _react["default"].useContext(_context.AppMenuContext),
      activeds = _React$useContext2.activeds;

  var _React$useContext3 = _react["default"].useContext(_context.MenuImplementContext),
      colors = _React$useContext3.colors,
      minRowHeightSpacing = _React$useContext3.minRowHeightSpacing,
      variant = _React$useContext3.variant;

  var _ref6 = _customs.MenuItemCustom.useRecognize({
    uid: BaseSubMenu.uid,
    href: href
  }),
      _ref7 = _slicedToArray(_ref6, 2),
      option = _ref7[0],
      subMenu = _ref7[1];

  var _ref8 = _customs.MenuItemCustom.useHighlight(true, href, option, subMenu, onClick),
      _ref9 = _slicedToArray(_ref8, 2),
      highlight = _ref9[0],
      handleItemClick = _ref9[1];

  var styles = _customs.MenuItemCustom.useStyles(colors, minRowHeightSpacing, highlight);

  var $classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_Tab["default"], {
    component: "div",
    value: BaseSubMenu.uid,
    "data-appcraft-uid": BaseSubMenu.uid,
    classes: styles.tab(_objectSpread(_objectSpread({}, classes === null || classes === void 0 ? void 0 : classes.tab), {}, {
      root: (0, _clsx["default"])(classes === null || classes === void 0 ? void 0 : (_classes$tab = classes.tab) === null || _classes$tab === void 0 ? void 0 : _classes$tab.root, _defineProperty({}, $classes.sticky, variant === 'vertical'))
    })),
    label: /*#__PURE__*/_react["default"].createElement(_BaseMenuItem["default"], _extends({}, props, {
      actionRef: BaseSubMenu.actionRef,
      hidden: hidden,
      selected: activeds.has(BaseSubMenu.uid),
      text: {
        props: textProps,
        primary: primary,
        secondary: secondary
      },
      onClick: handleItemClick,
      classes: styles.item(_objectSpread(_objectSpread({}, classes === null || classes === void 0 ? void 0 : classes.item), {}, {
        container: (0, _clsx["default"])(classes === null || classes === void 0 ? void 0 : (_classes$item = classes.item) === null || _classes$item === void 0 ? void 0 : _classes$item.container, className)
      }), props.button === true || subMenu.length > 0),
      icon: {
        props: _objectSpread(_objectSpread({}, ! /*#__PURE__*/_react["default"].isValidElement(icon) && (icon === null || icon === void 0 ? void 0 : icon.props)), {}, {
          classes: styles.action(classes === null || classes === void 0 ? void 0 : classes.icon, true)
        }),
        content: /*#__PURE__*/_react["default"].isValidElement(icon) ? icon : icon === null || icon === void 0 ? void 0 : icon.content
      },
      action: {
        props: _objectSpread(_objectSpread({}, ! /*#__PURE__*/_react["default"].isValidElement(action) && (action === null || action === void 0 ? void 0 : action.props)), {}, {
          classes: styles.action(classes === null || classes === void 0 ? void 0 : classes.action)
        }),
        content: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].isValidElement(action) ? action : action === null || action === void 0 ? void 0 : action.content, BaseSubMenu.action)
      }
    }))
  });
};

AppMenuFooter.propTypes = {
  action: _propTypes2.NodeOptions,
  button: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  hidden: _propTypes2.MenuItemHiddenOptions,
  href: _propTypes["default"].string,
  icon: _propTypes2.NodeOptions,
  primary: _propTypes2.MenuItemTextOptions,
  secondary: _propTypes2.MenuItemTextOptions,
  textProps: _propTypes["default"].object,
  onClick: _propTypes["default"].func,
  classes: _propTypes["default"].exact({
    submenu: _propTypes["default"].string,
    tab: _propTypes["default"].objectOf(_propTypes["default"].string),
    item: _propTypes["default"].objectOf(_propTypes["default"].string),
    icon: _propTypes["default"].objectOf(_propTypes["default"].string),
    action: _propTypes["default"].objectOf(_propTypes["default"].string)
  })
};

var _default = withSubMenu(AppMenuFooter);

exports["default"] = _default;