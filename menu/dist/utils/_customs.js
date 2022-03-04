"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCallbackState = useCallbackState;
exports.useLazyWidget = useLazyWidget;
exports.MenuItemCustom = exports.INLINED_VARIANT = void 0;

var _react = require("react");

var _clsx = _interopRequireDefault(require("clsx"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _styles = require("@material-ui/core/styles");

var _context = require("./_context");

var _excluded = ["uid", "href"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var INLINED_VARIANT = new Set('horizontal', 'vertical');
exports.INLINED_VARIANT = INLINED_VARIANT;

var _useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    tab: {
      background: 'none',
      minWidth: 'auto !important',
      opacity: 1,
      padding: 0,
      textTransform: 'inherit !important',
      width: function width(_ref) {
        var variant = _ref.variant;
        return variant === 'vertical' ? '100% !important' : null;
      },
      height: function height(_ref2) {
        var variant = _ref2.variant;
        return variant === 'horizontal' ? '100% !important' : null;
      },
      maxWidth: function maxWidth(_ref3) {
        var variant = _ref3.variant;
        return variant === 'vertical' ? '100% !important' : null;
      },
      maxHeight: function maxHeight(_ref4) {
        var variant = _ref4.variant;
        return variant === 'horizontal' ? '100% !important' : null;
      },
      '& > .wrapper > li': {
        width: '100%'
      }
    },
    container: {
      alignItems: 'center',
      display: 'flex',
      minHeight: function minHeight(_ref5) {
        var minRowHeightSpacing = _ref5.minRowHeightSpacing;
        return theme.spacing(minRowHeightSpacing);
      }
    },
    item: {
      display: 'flex',
      height: '100%',
      background: function background(_ref6) {
        var _background = _ref6.colors.background;
        return _background;
      },
      color: function color(_ref7) {
        var text = _ref7.colors.text;
        return text;
      },
      minHeight: function minHeight(_ref8) {
        var minRowHeightSpacing = _ref8.minRowHeightSpacing;
        return theme.spacing(minRowHeightSpacing);
      }
    },
    highlight: {
      background: function background(_ref9) {
        var highlight = _ref9.colors.highlight;
        return !highlight ? null : "".concat(highlight, " !important");
      }
    },
    hover: {
      '&:hover': {
        background: function background(_ref10) {
          var highlight = _ref10.colors.highlight;
          return !highlight ? null : "".concat(highlight, " !important");
        },
        opacity: '0.8 !important',
        cursor: 'pointer'
      }
    },
    action: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      '& button, &.icon': {
        opacity: 0.6,
        color: function color(_ref11) {
          var text = _ref11.colors.text;
          return text;
        },
        '&:not(.icon):hover': {
          opacity: 1
        }
      }
    }
  };
}); // TODO: Export Customs


function useCallbackState(defaultValue, override) {
  var _useState = (0, _react.useState)(function () {
    return [defaultValue instanceof Function ? defaultValue() : defaultValue, null];
  }),
      _useState2 = _slicedToArray(_useState, 2),
      _useState2$ = _slicedToArray(_useState2[0], 2),
      value = _useState2$[0],
      callbackFn = _useState2$[1],
      setValue = _useState2[1];

  (0, _react.useEffect)(function () {
    if (callbackFn instanceof Function) {
      setValue([value, null]);
      callbackFn(value);
    }
  }, [value]);
  return [(0, _react.useMemo)(function () {
    return override instanceof Function ? override(value) : value;
  }, [value, override]), (0, _react.useCallback)(function (newValue, __) {
    return setValue([newValue instanceof Function ? newValue(value) : newValue, __]);
  }, [value, setValue])];
}

function useLazyWidget(Widget) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  var promise = (0, _react.useCallback)((0, _debounce2["default"])(function (resolve, LazyWidget) {
    return resolve({
      "default": LazyWidget
    });
  }), []);

  for (var _len = arguments.length, deps = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    deps[_key - 1] = arguments[_key];
  }

  return (0, _react.useMemo)(function () {
    return /*#__PURE__*/(0, _react.lazy)(function () {
      return new Promise(function (resolve) {
        return promise(resolve, Widget);
      });
    }) // eslint-disable-next-line react-hooks/exhaustive-deps
    ;
  }, [promise, Widget].concat(deps));
}

var MenuItemCustom = {
  isProgeny: function isProgeny(owner, uid, getSubMenu) {
    var subMenu = getSubMenu(owner);
    return !uid ? false : Boolean(subMenu.find(function (_ref12) {
      var childId = _ref12.uid;
      return childId === uid || MenuItemCustom.isProgeny(childId, uid, getSubMenu);
    }));
  },
  useCollapse: function useCollapse(variant, uid, _ref13) {
    var onOpen = _ref13.onOpen,
        onClose = _ref13.onClose;

    var _useContext = (0, _react.useContext)(_context.AppMenuContext),
        _useContext$actived = _slicedToArray(_useContext.actived, 1),
        actived = _useContext$actived[0],
        _useContext$expanded = _slicedToArray(_useContext.expanded, 2),
        expanded = _useContext$expanded[0],
        onExpandedChange = _useContext$expanded[1],
        getSubMenu = _useContext.getSubMenu;

    return [(0, _react.useMemo)(function () {
      return expanded.has(uid) && (!INLINED_VARIANT.has(variant) || MenuItemCustom.isProgeny(uid, actived, getSubMenu));
    }, [actived, expanded, variant, uid, getSubMenu]), {
      collapse: (0, _react.useCallback)(function (e) {
        e.stopPropagation();
        onExpandedChange(false, uid);
        onClose instanceof Function && onClose(e);
      }, [uid, onClose, onExpandedChange]),
      expand: (0, _react.useCallback)(function (e) {
        e.stopPropagation();
        onExpandedChange(true, uid);
        onOpen instanceof Function && onOpen(e);
      }, [uid, onOpen, onExpandedChange])
    }];
  },
  useHighlight: function useHighlight(footer, href, option, subMenu, onClick) {
    var _useContext2 = (0, _react.useContext)(_context.AppMenuContext),
        editing = _useContext2.editing,
        _useContext2$actived = _slicedToArray(_useContext2.actived, 2),
        actived = _useContext2$actived[0],
        onActivedChange = _useContext2$actived[1],
        _useContext2$expanded = _slicedToArray(_useContext2.expanded, 2),
        onExpandedChange = _useContext2$expanded[1];

    var _useContext3 = (0, _react.useContext)(_context.MenuImplementContext),
        onIndicatorChange = _useContext3.onIndicatorChange;

    return [actived === option.uid, (0, _react.useCallback)(function (e) {
      var _ref14 = onClick instanceof Function && onClick({
        footer: footer,
        href: href,
        editing: editing,
        option: option
      }) || {},
          activedId = _ref14.actived,
          expandedId = _ref14.expanded;

      e.stopPropagation();

      if (activedId || activedId === false) {
        onActivedChange(activedId || null);
        onIndicatorChange(activedId || null);
      } else if (href || !footer && editing) {
        onActivedChange(option.uid);
        onIndicatorChange(option.uid);
      }

      if (expandedId === false) {
        onExpandedChange(false);
      } else if (subMenu.length > 0) {
        if (expandedId) {
          onExpandedChange(true, expandedId);
        } else if (!editing || footer) {
          onExpandedChange(true, option.uid);
        }
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [editing, footer, href, option, onActivedChange, onExpandedChange, onIndicatorChange, onClick, JSON.stringify(subMenu)])];
  },
  useRecognize: function useRecognize(_ref15) {
    var uid = _ref15.uid,
        href = _ref15.href,
        defaultOption = _objectWithoutProperties(_ref15, _excluded);

    var _useContext4 = (0, _react.useContext)(_context.AppMenuContext),
        rootId = _useContext4.rootId,
        getSubMenu = _useContext4.getSubMenu,
        onRecognize = _useContext4.onRecognize;

    var _useContext5 = (0, _react.useContext)(_context.OwnerMenuItemContext),
        owner = _useContext5.owner;

    var option = (0, _react.useMemo)(function () {
      return _objectSpread(_objectSpread({}, !uid.startsWith('AppMenuItem-') && defaultOption), {}, {
        uid: uid,
        owner: owner || rootId,
        href: href // eslint-disable-next-line react-hooks/exhaustive-deps

      });
    }, [owner, uid, href, JSON.stringify(defaultOption)]);
    (0, _react.useEffect)(function () {
      onRecognize(option);
      return function () {
        return onRecognize(option.uid);
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option]);
    return [option, (0, _react.useMemo)(function () {
      return getSubMenu(option.uid);
    }, [option.uid, getSubMenu])];
  },
  useStyles: function useStyles(colors, minRowHeightSpacing) {
    var highlight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var _useContext6 = (0, _react.useContext)(_context.MenuImplementContext),
        variant = _useContext6.variant;

    var classes = _useStyles({
      colors: colors,
      minRowHeightSpacing: minRowHeightSpacing,
      variant: variant
    });

    return {
      tab: (0, _react.useCallback)(function (cls) {
        return _objectSpread(_objectSpread({}, (0, _isPlainObject2["default"])(cls) && cls), {}, {
          root: (0, _clsx["default"])(classes.tab, (0, _isPlainObject2["default"])(cls) ? cls.root : cls),
          wrapper: (0, _clsx["default"])('wrapper', (0, _isPlainObject2["default"])(cls) && cls.wrapper)
        });
      }, [classes.tab]),
      item: (0, _react.useCallback)(function (cls) {
        var _cx;

        var isButton = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return _objectSpread(_objectSpread({}, (0, _isPlainObject2["default"])(cls) && cls), {}, {
          root: (0, _clsx["default"])(classes.item, (0, _isPlainObject2["default"])(cls) ? cls.root : cls, (_cx = {}, _defineProperty(_cx, classes.highlight, highlight), _defineProperty(_cx, classes.hover, isButton), _cx)),
          container: (0, _clsx["default"])(classes.container, (0, _isPlainObject2["default"])(cls) && cls.container) // eslint-disable-next-line react-hooks/exhaustive-deps

        });
      }, [highlight, classes.item, classes.highlight, classes.container]),
      action: (0, _react.useCallback)(function (cls) {
        var isIcon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        return _objectSpread(_objectSpread({}, (0, _isPlainObject2["default"])(cls) && cls), {}, {
          root: (0, _clsx["default"])(classes.action, (0, _isPlainObject2["default"])(cls) ? cls.root : cls, {
            icon: isIcon
          })
        });
      }, [classes.action]),
      text: (0, _react.useCallback)(function (cls) {
        return _objectSpread(_objectSpread({}, (0, _isPlainObject2["default"])(cls) && cls), {}, {
          root: (0, _clsx["default"])((0, _isPlainObject2["default"])(cls) ? cls.root : cls)
        });
      }, [])
    };
  }
};
exports.MenuItemCustom = MenuItemCustom;