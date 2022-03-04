"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AppcraftMenuItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _clsx = _interopRequireDefault(require("clsx"));

var _shortid = require("shortid");

var _get2 = _interopRequireDefault(require("lodash/get"));

var _Icon = _interopRequireDefault(require("@material-ui/core/Icon"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Tab = _interopRequireDefault(require("@material-ui/core/Tab"));

var _styles = require("@material-ui/core/styles");

var _ImportExport = _interopRequireDefault(require("@material-ui/icons/ImportExport"));

var _PlaylistAdd = _interopRequireDefault(require("@material-ui/icons/PlaylistAdd"));

var _locales = _interopRequireWildcard(require("../utils/locales"));

var _context = require("../utils/_context");

var _propTypes2 = require("../utils/prop-types");

var _customs = require("../utils/_customs");

var _BaseMenuItem = _interopRequireWildcard(require("../BaseMenuItem"));

var _MenuItemAction = _interopRequireDefault(require("../MenuItemAction"));

var _customs2 = require("./_customs");

var _excluded = ["borderRadiusSpacing"],
    _excluded2 = ["BaseSubMenu", "children", "className", "classes", "dragIndex", "hidden", "href", "icon", "primary", "secondary", "onClick", "onAdd", "onEdit", "onRemove"];

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

var AppcraftMenuItem; // TODO: Custom Hooks & HOC

exports.AppcraftMenuItem = AppcraftMenuItem;

(function (_AppcraftMenuItem) {
  var def;

  (function (_def) {})(def || (def = _AppcraftMenuItem.def || (_AppcraftMenuItem.def = {})));

  var hooks;

  (function (_hooks) {})(hooks || (hooks = _AppcraftMenuItem.hooks || (_AppcraftMenuItem.hooks = {})));
})(AppcraftMenuItem || (exports.AppcraftMenuItem = AppcraftMenuItem = {}));

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    dragging: {
      opacity: 0.4,
      '&.over': {
        opacity: 1
      },
      '&.target': {
        opacity: '0.6 !important',
        pointerEvents: 'none !important',
        userSelect: 'none',
        zIndex: theme.zIndex.tooltip
      }
    },
    droppable: {
      // @ts-ignore
      background: function background(_ref) {
        var highlight = _ref.colors.highlight;
        return !highlight ? null : "".concat(highlight, " !important");
      },
      borderRadius: '50% !important',
      // @ts-ignore
      color: function color(_ref2) {
        var text = _ref2.colors.text;
        return text;
      },
      opacity: '0 !important',
      transform: "translateX(".concat(theme.spacing(-1), "px) !important"),
      '&.over': {
        opacity: '1 !important'
      }
    }
  };
});
var withSubMenu = (0, _BaseMenuItem.makeSubMenu)(function (_ref3) {
  var children = _ref3.children,
      classes = _ref3.classes,
      defaultUid = _ref3.uid;

  var uid = _react["default"].useMemo(function () {
    return defaultUid || "AppMenuItem-".concat((0, _shortid.generate)());
  }, [defaultUid]);

  var _ref4 = _react["default"].useContext(_context.MenuImplementContext),
      subMenuProps = _ref4.subMenuProps,
      subVariant = _ref4.subVariant;

  var _React$useContext = _react["default"].useContext(_context.OwnerMenuItemContext),
      footer = _React$useContext.footer;

  var _ref5 = _customs.MenuItemCustom.useCollapse(subVariant, uid, subMenuProps),
      _ref6 = _slicedToArray(_ref5, 2),
      open = _ref6[0],
      submenu = _ref6[1];

  var _ref7 = subMenuProps || {},
      borderRadiusSpacing = _ref7.borderRadiusSpacing,
      subProps = _objectWithoutProperties(_ref7, _excluded);

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
        footer: footer,
        owner: uid
      }
    }, children)
  }];
}); // TODO: Export Component

var AppMenuItem = function AppMenuItem(_ref8) {
  var BaseSubMenu = _ref8.BaseSubMenu,
      children = _ref8.children,
      className = _ref8.className,
      classes = _ref8.classes,
      dragIndex = _ref8.dragIndex,
      hidden = _ref8.hidden,
      href = _ref8.href,
      icon = _ref8.icon,
      primary = _ref8.primary,
      secondary = _ref8.secondary,
      onClick = _ref8.onClick,
      onAdd = _ref8.onAdd,
      onEdit = _ref8.onEdit,
      onRemove = _ref8.onRemove,
      props = _objectWithoutProperties(_ref8, _excluded2);

  var _useLocales = (0, _locales.useLocales)(),
      lang = _useLocales.lang,
      defaultLocales = _useLocales.defaultLocales;

  var _React$useContext2 = _react["default"].useContext(_context.AppMenuContext),
      activeds = _React$useContext2.activeds;

  var _React$useContext3 = _react["default"].useContext(_context.MenuImplementContext),
      colors = _React$useContext3.colors,
      isDraggingOver = _React$useContext3.isDraggingOver,
      minRowHeightSpacing = _React$useContext3.minRowHeightSpacing;

  var _ref9 = _customs.MenuItemCustom.useRecognize({
    uid: BaseSubMenu.uid,
    index: dragIndex,
    href: href,
    icon: icon,
    primary: primary,
    secondary: secondary
  }),
      _ref10 = _slicedToArray(_ref9, 2),
      option = _ref10[0],
      subMenu = _ref10[1];

  var _ref11 = (0, _customs2.useDnd)(option),
      _ref12 = _slicedToArray(_ref11, 6),
      droppableId = _ref12[0],
      interactived = _ref12[1],
      dragging = _ref12[2],
      crossable = _ref12[3],
      droppable = _ref12[4],
      interactive = _ref12[5];

  var _ref13 = _customs.MenuItemCustom.useHighlight(false, href, option, subMenu, onClick),
      _ref14 = _slicedToArray(_ref13, 2),
      highlight = _ref14[0],
      handleItemClick = _ref14[1];

  var _ref15 = (0, _customs2.useModifiable)(option, onAdd, onEdit, onRemove),
      _ref16 = _slicedToArray(_ref15, 2),
      dnd = _ref16[0],
      editable = _ref16[1];

  var styles = _customs.MenuItemCustom.useStyles(colors, minRowHeightSpacing, highlight);

  var $classes = useStyles({
    colors: colors
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Draggable, {
    index: dragIndex,
    draggableId: BaseSubMenu.uid,
    isDragDisabled: !interactived.drag
  }, function (dragProv, dragSnap) {
    var _classes$tab, _cx, _classes$item;

    return /*#__PURE__*/_react["default"].createElement(_Tab["default"], _extends({}, dragProv.draggableProps, {
      ref: dragProv.innerRef,
      component: "div",
      value: BaseSubMenu.uid,
      "data-appcraft-uid": BaseSubMenu.uid,
      classes: styles.tab(_objectSpread(_objectSpread({}, classes === null || classes === void 0 ? void 0 : classes.tab), {}, {
        root: (0, _clsx["default"])(classes === null || classes === void 0 ? void 0 : (_classes$tab = classes.tab) === null || _classes$tab === void 0 ? void 0 : _classes$tab.root, (_cx = {}, _defineProperty(_cx, $classes.dragging, dragging), _defineProperty(_cx, "target", dragSnap.isDragging), _defineProperty(_cx, "over", isDraggingOver), _cx))
      })),
      label: /*#__PURE__*/_react["default"].createElement(_BaseMenuItem["default"], _extends({}, props, {
        actionRef: BaseSubMenu.actionRef,
        selected: activeds.has(BaseSubMenu.uid),
        classes: styles.item(_objectSpread(_objectSpread({}, classes === null || classes === void 0 ? void 0 : classes.item), {}, {
          container: (0, _clsx["default"])(classes === null || classes === void 0 ? void 0 : (_classes$item = classes.item) === null || _classes$item === void 0 ? void 0 : _classes$item.container, className)
        }), true),
        hidden: hidden,
        onClick: handleItemClick,
        icon: {
          props: _objectSpread(_objectSpread({
            'data-dnd-type': 'drag',
            classes: styles.action(classes === null || classes === void 0 ? void 0 : classes.icon, true)
          }, dragProv.dragHandleProps), dnd && !dragging && {
            onMouseDown: BaseSubMenu.onClose,
            onMouseEnter: interactive.on,
            onMouseLeave: interactive.off
          }),
          content: interactived.drag ? /*#__PURE__*/_react["default"].createElement(_ImportExport["default"], null) : icon && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
            color: "inherit",
            className: (0, _clsx["default"])(_defineProperty({}, icon.name, icon.type !== 'mui'))
          }, icon.type === 'mui' && icon.name)
        },
        text: {
          primary: {
            props: {
              classes: styles.text(classes === null || classes === void 0 ? void 0 : classes.primary)
            },
            text: typeof primary === 'string' ? primary : (0, _get2["default"])(primary, lang)
          },
          secondary: {
            props: {
              classes: styles.text(classes === null || classes === void 0 ? void 0 : classes.secondary)
            },
            text: typeof secondary === 'string' ? secondary : (0, _get2["default"])(secondary, lang)
          }
        },
        action: {
          props: {
            classes: styles.action(classes === null || classes === void 0 ? void 0 : classes.action),
            style: dragProv.draggableProps.style
          },
          content: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, BaseSubMenu.action, dnd && crossable && dragging && !dragSnap.isDragging && subMenu.length === 0 && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            size: "small",
            "data-dnd-type": "drop",
            onMouseEnter: interactive.on
          }, /*#__PURE__*/_react["default"].createElement(_PlaylistAdd["default"], null)) || editable &&
          /*#__PURE__*/
          // @ts-ignore
          _react["default"].createElement(_MenuItemAction["default"], {
            ButtonProps: {
              size: 'small'
            },
            lang: lang,
            locales: defaultLocales,
            uid: BaseSubMenu.uid,
            type: {
              onAdd: onAdd,
              onEdit: onEdit,
              onRemove: onRemove
            }
          }))
        }
      }))
    }));
  }), crossable && subMenu.length === 0 && /*#__PURE__*/_react["default"].createElement(_reactBeautifulDnd.Droppable, {
    droppableId: droppableId,
    isDropDisabled: !droppable
  }, function (dropProv, dropSnap) {
    var _BaseSubMenu$actionRe;

    return /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
      ref: dropProv.innerRef,
      keepMounted: true,
      anchorEl: (_BaseSubMenu$actionRe = BaseSubMenu.actionRef.current) === null || _BaseSubMenu$actionRe === void 0 ? void 0 : _BaseSubMenu$actionRe.parentElement,
      open: droppable && dragging,
      anchorOrigin: {
        vertical: 'center',
        horizontal: 'right'
      },
      transformOrigin: {
        vertical: 'center',
        horizontal: 'right'
      },
      PaperProps: {
        className: (0, _clsx["default"])($classes.droppable, {
          over: dropSnap.isDraggingOver
        }),
        // @ts-ignore
        'data-dnd-type': 'drop',
        onMouseLeave: interactive.off
      }
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], _extends({
      color: "inherit"
    }, dropProv.droppableProps, {
      onMouseOver: interactive.over
    }), /*#__PURE__*/_react["default"].createElement(_PlaylistAdd["default"], null)));
  }));
};

AppMenuItem.propTypes = _objectSpread(_objectSpread({}, _propTypes2.MenuItemOptions), {}, {
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  dragIndex: _propTypes["default"].number,
  hidden: _propTypes2.MenuItemHiddenOptions,
  href: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  onAdd: _propTypes["default"].func,
  onEdit: _propTypes["default"].func,
  onRemove: _propTypes["default"].func,
  classes: _propTypes["default"].exact({
    submenu: _propTypes["default"].string,
    tab: _propTypes["default"].objectOf(_propTypes["default"].string),
    item: _propTypes["default"].objectOf(_propTypes["default"].string),
    icon: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].objectOf(_propTypes["default"].string)]),
    action: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].objectOf(_propTypes["default"].string)]),
    primary: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].objectOf(_propTypes["default"].string)]),
    secondary: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].objectOf(_propTypes["default"].string)])
  })
});

var _default = withSubMenu((0, _locales["default"])({
  en: LocalesEn,
  'zh-Hant': LocalesZh
})(AppMenuItem));

exports["default"] = _default;