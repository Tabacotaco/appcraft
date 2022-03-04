"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSubMenu = makeSubMenu;
exports["default"] = exports.AppcraftBaseItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _propTypes2 = require("../utils/prop-types");

var _customs = require("./_customs");

var _excluded = ["className", "toggleProps"],
    _excluded2 = ["borderRadiusSpacing", "variant", "props", "content", "onOpen", "onClose"],
    _excluded3 = ["action", "actionRef", "hidden", "icon", "text"];

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
var AppcraftBaseItem; // TODO: Custom Hooks & HOC

exports.AppcraftBaseItem = AppcraftBaseItem;

(function (_AppcraftBaseItem) {
  var def;

  (function (_def) {})(def || (def = _AppcraftBaseItem.def || (_AppcraftBaseItem.def = {})));

  var hooks;

  (function (_hooks) {})(hooks || (hooks = _AppcraftBaseItem.hooks || (_AppcraftBaseItem.hooks = {})));
})(AppcraftBaseItem || (exports.AppcraftBaseItem = AppcraftBaseItem = {}));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    tab: {
      opacity: 1,
      padding: 0,
      '& > .wrapper > li': {
        width: '100%'
      }
    },
    collapsed: {
      display: 'none'
    },
    popover: {
      // @ts-ignore
      borderRadius: function borderRadius(_ref) {
        var brs = _ref.borderRadiusSpacing,
            variant = _ref.variant;
        return variant === 'top' ? theme.spacing(brs, brs, 0, 0) : variant === 'right' ? theme.spacing(0, brs, brs, 0) : variant === 'bottom' ? theme.spacing(0, 0, brs, brs) : theme.spacing(brs, 0, 0, brs);
      }
    }
  };
});

function makeSubMenu(useInitProps) {
  return function (AnchorComponent) {
    var ResultComponent = /*#__PURE__*/_react["default"].forwardRef(function (props, ref) {
      var _anchorRef$current, _PaperProps, _PaperProps2, _PaperProps2$classes;

      var anchorRef = _react["default"].useRef(null);

      var _ref2 = useInitProps(props),
          _ref3 = _slicedToArray(_ref2, 2),
          collapsable = _ref3[0],
          _ref3$ = _ref3[1],
          className = _ref3$.className,
          toggleProps = _ref3$.toggleProps,
          subMenuProps = _objectWithoutProperties(_ref3$, _excluded);

      var _ref4 = (0, _customs.useSubCollapse)(subMenuProps),
          _ref5 = _slicedToArray(_ref4, 3),
          open = _ref5[0],
          SubIcon = _ref5[1],
          handleSub = _ref5[2];

      var borderRadiusSpacing = subMenuProps.borderRadiusSpacing,
          variant = subMenuProps.variant,
          containerProps = subMenuProps.props,
          content = subMenuProps.content,
          onOpen = subMenuProps.onOpen,
          onClose = subMenuProps.onClose,
          BaseSubMenu = _objectWithoutProperties(subMenuProps, _excluded2);

      var classes = useStyles({
        variant: variant,
        borderRadiusSpacing: borderRadiusSpacing || 0
      });
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(AnchorComponent, _extends({}, props, {
        ref: ref,
        BaseSubMenu: _objectSpread(_objectSpread({}, BaseSubMenu), {}, {
          actionRef: anchorRef,
          onOpen: onOpen,
          onClose: onClose,
          action: collapsable && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], _extends({}, toggleProps, {
            size: "small",
            onClick: handleSub
          }), /*#__PURE__*/_react["default"].createElement(SubIcon, null))
        })
      })), collapsable && (variant === 'horizontal' || variant === 'vertical' ? /*#__PURE__*/_react["default"].createElement("div", _extends({}, containerProps, {
        className: (0, _clsx["default"])(containerProps === null || containerProps === void 0 ? void 0 : containerProps.className, _defineProperty({}, classes.collapsed, !open))
      }), content) : /*#__PURE__*/_react["default"].createElement(_Popover["default"], _extends({}, containerProps, {
        keepMounted: true,
        open: open,
        anchorEl: (_anchorRef$current = anchorRef.current) === null || _anchorRef$current === void 0 ? void 0 : _anchorRef$current.parentElement,
        onClose: onClose,
        anchorOrigin: {
          vertical: variant === 'bottom' ? 'bottom' : 'top',
          horizontal: variant === 'right' ? 'right' : 'left'
        },
        transformOrigin: {
          vertical: variant === 'top' ? 'bottom' : 'top',
          horizontal: variant === 'left' ? 'right' : 'left'
        },
        PaperProps: _objectSpread(_objectSpread({}, containerProps === null || containerProps === void 0 ? void 0 : containerProps.PaperProps), {}, {
          classes: _objectSpread(_objectSpread({}, containerProps === null || containerProps === void 0 ? void 0 : (_PaperProps = containerProps.PaperProps) === null || _PaperProps === void 0 ? void 0 : _PaperProps.classes), {}, {
            root: (0, _clsx["default"])(classes.popover, containerProps === null || containerProps === void 0 ? void 0 : (_PaperProps2 = containerProps.PaperProps) === null || _PaperProps2 === void 0 ? void 0 : (_PaperProps2$classes = _PaperProps2.classes) === null || _PaperProps2$classes === void 0 ? void 0 : _PaperProps2$classes.root, className)
          })
        })
      }), content)));
    });

    ResultComponent.displayName = 'SubMenuHOC';
    return ResultComponent;
  };
} // TODO: Export Component


var BaseMenuItem = function BaseMenuItem(_ref6) {
  var defaultAction = _ref6.action,
      actionRef = _ref6.actionRef,
      hidden = _ref6.hidden,
      defaultIcon = _ref6.icon,
      text = _ref6.text,
      props = _objectWithoutProperties(_ref6, _excluded3);

  var _useNode = (0, _customs.useNode)(defaultIcon),
      icon = _useNode.content,
      iconProps = _useNode.props;

  var _useNode2 = (0, _customs.useNode)(defaultAction),
      action = _useNode2.content,
      actionProps = _useNode2.props;

  var _useNode3 = (0, _customs.useNode)(text === null || text === void 0 ? void 0 : text.primary, 'text'),
      primary = _useNode3.text,
      primaryProps = _useNode3.props;

  var _useNode4 = (0, _customs.useNode)(text === null || text === void 0 ? void 0 : text.secondary, 'text'),
      secondary = _useNode4.text,
      secondaryProps = _useNode4.props;

  return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    TransitionProps: _objectSpread({
      unmountOnExit: true
    }, (!(hidden !== null && hidden !== void 0 && hidden.text) || !primary) && {
      "in": false
    }),
    title: primary || /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0")
  }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], _extends({}, props, {
    component: "div",
    disableGutters: true
  }), (hidden === null || hidden === void 0 ? void 0 : hidden.icon) !== true && /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], iconProps, icon || /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "\xA0")), (hidden === null || hidden === void 0 ? void 0 : hidden.text) !== true && /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], _extends({}, _objectSpread(_objectSpread({}, text === null || text === void 0 ? void 0 : text.props), {}, {
    primary: primary,
    secondary: secondary
  }), {
    primaryTypographyProps: _objectSpread({
      color: 'inherit'
    }, primaryProps),
    secondaryTypographyProps: _objectSpread({
      color: 'inherit'
    }, secondaryProps)
  })), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], _extends({}, actionProps, {
    ref: actionRef
  }), (hidden === null || hidden === void 0 ? void 0 : hidden.action) !== true && action)));
};

BaseMenuItem.propTypes = {
  action: _propTypes2.NodeOptions,
  actionRef: _propTypes["default"].any,
  hidden: _propTypes2.MenuItemHiddenOptions,
  icon: _propTypes2.NodeOptions,
  // @ts-ignore
  classes: _propTypes["default"].objectOf(_propTypes["default"].string.isRequired),
  text: _propTypes["default"].exact({
    props: _propTypes["default"].object,
    primary: _propTypes2.MenuItemTextOptions,
    secondary: _propTypes2.MenuItemTextOptions
  })
};
var _default = BaseMenuItem;
exports["default"] = _default;