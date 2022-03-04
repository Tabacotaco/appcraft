"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AppcraftMenuImpl = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _clsx = _interopRequireDefault(require("clsx"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _TabScrollButton = _interopRequireDefault(require("@material-ui/core/TabScrollButton"));

var _Tabs = _interopRequireDefault(require("@material-ui/core/Tabs"));

var _styles = require("@material-ui/core/styles");

var _context = require("../utils/_context");

var _customs = require("./_customs");

var _propTypes2 = require("../utils/prop-types");

var _AppMenuFooter = _interopRequireDefault(require("../AppMenuFooter"));

var _AppMenuSubheader = _interopRequireDefault(require("../AppMenuSubheader"));

var _excluded = ["direction", "header", "footer"],
    _excluded2 = ["action"],
    _excluded3 = ["icon"],
    _excluded4 = ["children", "className", "colors", "disabledBackground", "footer", "header", "minRowHeightSpacing", "subMenuProps", "indicatorDeps", "variant"],
    _excluded5 = ["variant", "collapseByBackdrop"],
    _excluded6 = ["actived", "dnd", "mode", "rootId", "footer", "header", "onCrossDnd", "onDnd", "onModifiable"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

if (typeof window !== 'undefined') {
  (0, _set2["default"])(window, '__react-beautiful-dnd-disable-dev-warnings', true);
} // TODO: TS Namespace


var AppcraftMenuImpl; // TODO: Custom Hooks

exports.AppcraftMenuImpl = AppcraftMenuImpl;

(function (_AppcraftMenuImpl) {
  var def;

  (function (_def) {})(def || (def = _AppcraftMenuImpl.def || (_AppcraftMenuImpl.def = {})));

  var hooks;

  (function (_hooks) {})(hooks || (hooks = _AppcraftMenuImpl.hooks || (_AppcraftMenuImpl.hooks = {})));
})(AppcraftMenuImpl || (exports.AppcraftMenuImpl = AppcraftMenuImpl = {}));

var INDICATOR_POSITION = {
  TOP: new Set(['horizontal', 'top']),
  BOTTOM: new Set(['horizontal', 'bottom']),
  LEFT: new Set(['vertical', 'right']),
  RIGHT: new Set(['vertical', 'left'])
};
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      // @ts-ignore
      background: function background(_ref) {
        var disabledBackground = _ref.disabledBackground,
            _background = _ref.colors.background;
        return disabledBackground ? null : _background;
      },
      // @ts-ignore
      color: function color(_ref2) {
        var text = _ref2.colors.text;
        return text;
      },
      // @ts-ignore
      height: function height(_ref3) {
        var variant = _ref3.variant;
        return variant === 'vertical' ? '100%' : null;
      },
      // @ts-ignore
      width: function width(_ref4) {
        var variant = _ref4.variant;
        return variant === 'horizontal' ? '100%' : null;
      }
    },
    scroller: {
      overflow: 'auto !important'
    },
    container: {
      // @ts-ignore
      height: function height(_ref5) {
        var variant = _ref5.variant;
        return variant === 'vertical' ? '100%' : null;
      },
      // @ts-ignore
      width: function width(_ref6) {
        var variant = _ref6.variant;
        return variant === 'horizontal' ? '100%' : null;
      }
    },
    indicator: {
      zIndex: theme.zIndex.appBar + 2,
      // @ts-ignore
      background: function background(_ref7) {
        var actived = _ref7.colors.actived;
        return actived || theme.palette.secondary.main;
      },
      // @ts-ignore
      top: function top(_ref8) {
        var variant = _ref8.variant,
            subVariant = _ref8.subVariant;
        return variant !== 'vertical' && INDICATOR_POSITION.TOP.has(subVariant) ? 0 : null;
      },
      // @ts-ignore
      left: function left(_ref9) {
        var variant = _ref9.variant,
            subVariant = _ref9.subVariant;
        return variant !== 'horizontal' && INDICATOR_POSITION.LEFT.has(subVariant) ? 0 : null;
      },
      // @ts-ignore
      bottom: function bottom(_ref10) {
        var variant = _ref10.variant,
            subVariant = _ref10.subVariant;
        return variant === 'horizontal' && (INDICATOR_POSITION.TOP.has(subVariant) ? 'auto' : INDICATOR_POSITION.BOTTOM.has(subVariant) ? 0 : null);
      },
      // @ts-ignore
      right: function right(_ref11) {
        var variant = _ref11.variant,
            subVariant = _ref11.subVariant;
        return variant === 'vertical' && (INDICATOR_POSITION.LEFT.has(subVariant) ? 'auto' : INDICATOR_POSITION.RIGHT.has(subVariant) ? 0 : null);
      }
    }
  };
}); // TODO: Export Component

var ScrollButton = function ScrollButton(_ref12) {
  var direction = _ref12.direction,
      header = _ref12.header,
      footer = _ref12.footer,
      props = _objectWithoutProperties(_ref12, _excluded);

  var _props = header === null || header === void 0 ? void 0 : header.props,
      headerAction = _props.action,
      headerProps = _objectWithoutProperties(_props, _excluded2);

  var _props2 = footer === null || footer === void 0 ? void 0 : footer.props,
      footerIcon = _props2.icon,
      footerProps = _objectWithoutProperties(_props2, _excluded3);

  return direction === 'left' ? /*#__PURE__*/_react["default"].createElement(_AppMenuSubheader["default"], _extends({}, headerProps, {
    action: {
      props: ! /*#__PURE__*/_react["default"].isValidElement(headerAction) && (headerAction === null || headerAction === void 0 ? void 0 : headerAction.props),
      content: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].isValidElement(headerAction) ? headerAction : headerAction === null || headerAction === void 0 ? void 0 : headerAction.content, /*#__PURE__*/_react["default"].createElement(_TabScrollButton["default"], _extends({}, props, {
        direction: "left"
      })))
    }
  })) : /*#__PURE__*/_react["default"].createElement(_AppMenuFooter["default"], _extends({}, footerProps, {
    icon: {
      props: ! /*#__PURE__*/_react["default"].isValidElement(footerIcon) && (footerIcon === null || footerIcon === void 0 ? void 0 : footerIcon.props),
      content: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TabScrollButton["default"], _extends({}, props, {
        direction: "right"
      })), /*#__PURE__*/_react["default"].isValidElement(footerIcon) ? footerIcon : footerIcon === null || footerIcon === void 0 ? void 0 : footerIcon.content)
    }
  }));
};

var MenuImplement = function MenuImplement(_ref13) {
  var children = _ref13.children,
      className = _ref13.className,
      _ref13$colors = _ref13.colors,
      defaultColors = _ref13$colors === void 0 ? {} : _ref13$colors,
      _ref13$disabledBackgr = _ref13.disabledBackground,
      disabledBackground = _ref13$disabledBackgr === void 0 ? false : _ref13$disabledBackgr,
      footer = _ref13.footer,
      header = _ref13.header,
      _ref13$minRowHeightSp = _ref13.minRowHeightSpacing,
      minRowHeightSpacing = _ref13$minRowHeightSp === void 0 ? 6 : _ref13$minRowHeightSp,
      defaultSubMenuProps = _ref13.subMenuProps,
      indicatorDeps = _ref13.indicatorDeps,
      _ref13$variant = _ref13.variant,
      variant = _ref13$variant === void 0 ? 'vertical' : _ref13$variant,
      props = _objectWithoutProperties(_ref13, _excluded4);

  var theme = (0, _styles.useTheme)();

  var _useContext = (0, _react.useContext)(_context.AppMenuContext),
      rootId = _useContext.rootId;

  var _useContext2 = (0, _react.useContext)(_context.OwnerMenuItemContext),
      isFooter = _useContext2.footer,
      owner = _useContext2.owner;

  var _ref14 = defaultSubMenuProps || {},
      _ref14$variant = _ref14.variant,
      subVariant = _ref14$variant === void 0 ? 'vertical' : _ref14$variant,
      _ref14$collapseByBack = _ref14.collapseByBackdrop,
      collapseByBackdrop = _ref14$collapseByBack === void 0 ? false : _ref14$collapseByBack,
      subMenuProps = _objectWithoutProperties(_ref14, _excluded5);

  var _ref15 = _customs.MenuImplementCustom.useDroppable(owner || rootId, isFooter),
      _ref16 = _slicedToArray(_ref15, 3),
      droppableId = _ref16[0],
      droppable = _ref16[1],
      handleDragOver = _ref16[2];

  var _ref17 = _customs.MenuImplementCustom.useIndicatorPosition(variant),
      _ref18 = _slicedToArray(_ref17, 2),
      indicator = _ref18[0],
      onIndicatorChange = _ref18[1];

  var actived = _customs.MenuImplementCustom.useActived.apply(_customs.MenuImplementCustom, [onIndicatorChange].concat(_toConsumableArray(indicatorDeps || [])));

  var colors = _customs.MenuImplementCustom.useColors(theme, defaultColors);

  var classes = useStyles({
    colors: colors,
    disabledBackground: disabledBackground,
    subVariant: subVariant,
    variant: variant
  }); // @ts-ignore

  var handleClick = _customs.MenuImplementCustom.useBackdropCollapse(collapseByBackdrop, props);

  return /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Droppable, {
    droppableId: droppableId,
    isDropDisabled: !droppable,
    direction: variant
  }, function (dropProv, dropSnap) {
    return (
      /*#__PURE__*/
      // @ts-ignore
      _react["default"].createElement(_context.MenuImplementContext.Provider, {
        value: {
          colors: colors,
          isDraggingOver: dropSnap.isDraggingOver,
          minRowHeightSpacing: minRowHeightSpacing,
          subMenuProps: subMenuProps,
          subVariant: subVariant,
          variant: variant,
          onIndicatorChange: onIndicatorChange
        }
      }, /*#__PURE__*/_react["default"].createElement(_Tabs["default"], _extends({
        ref: dropProv.innerRef
      }, props, dropProv.droppableProps, {
        classes: {
          root: (0, _clsx["default"])(classes.root, className),
          flexContainer: classes.container,
          scroller: classes.scroller,
          indicator: classes.indicator
        },
        TabIndicatorProps: {
          style: {
            display: actived === false || (colors.actived || 'none') === 'none' ? 'none' : null,
            transform: "translate".concat(variant === 'vertical' ? 'Y' : 'X', "(").concat(indicator.translate, "px)"),
            height: variant === 'vertical' ? indicator.size : theme.spacing(0.5),
            width: variant === 'horizontal' ? indicator.size : theme.spacing(0.5),
            top: variant === 'vertical' ? 0 : null,
            left: variant === 'horizontal' ? 0 : null
          }
        },
        value: actived,
        onClick: handleClick,
        onMouseOver: handleDragOver
      }, variant === 'horizontal' ? {
        ScrollButtonComponent: ScrollButton,
        TabScrollButtonProps: {
          header: header,
          footer: footer
        },
        orientation: 'horizontal',
        scrollButtons: header || footer ? 'on' : 'auto',
        variant: !owner ? 'scrollable' : 'standard'
      } : {
        orientation: 'vertical',
        variant: 'standard'
      }), variant === 'vertical' && header, children, dropProv.placeholder, variant === 'vertical' && footer))
    );
  });
};

var AppMenu = function AppMenu(_ref19) {
  var defaultActived = _ref19.actived,
      _ref19$dnd = _ref19.dnd,
      dnd = _ref19$dnd === void 0 ? false : _ref19$dnd,
      _ref19$mode = _ref19.mode,
      mode = _ref19$mode === void 0 ? 'display' : _ref19$mode,
      _ref19$rootId = _ref19.rootId,
      rootId = _ref19$rootId === void 0 ? 'root' : _ref19$rootId,
      footer = _ref19.footer,
      header = _ref19.header,
      onCrossDnd = _ref19.onCrossDnd,
      onDnd = _ref19.onDnd,
      onModifiable = _ref19.onModifiable,
      props = _objectWithoutProperties(_ref19, _excluded6);

  var _useContext3 = (0, _react.useContext)(_context.StyleContext),
      menuRef = _useContext3.menuRef;

  var _useContext4 = (0, _react.useContext)(_context.OwnerMenuItemContext),
      owner = _useContext4.owner;

  var _ref20 = _customs.AppMenuCustom.useDndState(dnd, onDnd),
      _ref21 = _slicedToArray(_ref20, 2),
      value = _ref21[0],
      handles = _ref21[1];

  var methods = _customs.AppMenuCustom.useMenuMethods();

  var expanded = _customs.AppMenuCustom.useExpanded(methods.getOwners);

  var _ref22 = _customs.AppMenuCustom.useActived(defaultActived, methods.getOption, methods.getOwners),
      _ref23 = _toArray(_ref22),
      activeds = _ref23[0],
      actived = _ref23.slice(1);

  var handleModifiable = _customs.AppMenuCustom.useModifiable(mode, onModifiable);

  (0, _react.useImperativeHandle)(menuRef, function () {
    return {
      collapseAll: function collapseAll() {
        return expanded[1](false);
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    };
  }, []);
  return owner ? /*#__PURE__*/_react["default"].createElement(MenuImplement, props) : /*#__PURE__*/_react["default"].createElement(_context.AppMenuContext.Provider, {
    value: _objectSpread(_objectSpread({}, methods), {}, {
      actived: actived,
      activeds: activeds,
      rootId: rootId,
      dnd: dnd && onDnd instanceof Function ? value : false,
      onCrossDnd: onCrossDnd instanceof Function ? onCrossDnd : function () {
        return true;
      },
      onModifiable: handleModifiable,
      editing: handleModifiable('edit') === true,
      expanded: expanded
    })
  }, /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.DragDropContext, {
    onDragStart: handles.dragStart,
    onDragEnd: handles.dragEnd
  }, /*#__PURE__*/_react["default"].createElement(MenuImplement, _extends({}, props, {
    footer: footer,
    header: header
  }))));
};

AppMenu.propTypes = {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  disabledBackground: _propTypes["default"].bool,
  dnd: _propTypes["default"].bool,
  footer: _propTypes["default"].node,
  header: _propTypes["default"].node,
  minRowHeightSpacing: _propTypes["default"].number,
  rootId: _propTypes["default"].string,
  theme: _propTypes["default"].object,
  indicatorDeps: _propTypes["default"].array,
  onCrossDnd: _propTypes["default"].func,
  onDnd: _propTypes["default"].func,
  onModifiable: _propTypes["default"].func,
  // @ts-ignore
  actived: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string]),
  colors: _propTypes["default"].exact({
    actived: _propTypes["default"].string,
    background: _propTypes["default"].string,
    highlight: _propTypes["default"].string,
    text: _propTypes["default"].string
  }),
  mode: _propTypes["default"].oneOf(['display', 'editing']),
  subMenuProps: _propTypes["default"].shape({
    borderRadiusSpacing: _propTypes["default"].number,
    collapseByBackdrop: _propTypes["default"].bool,
    variant: _propTypes2.MenuVariantOptions
  }),
  variant: _propTypes["default"].oneOf(['horizontal', 'vertical'])
};
var _default = AppMenu;
exports["default"] = _default;