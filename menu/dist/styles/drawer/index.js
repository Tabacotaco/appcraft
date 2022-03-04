"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeDrawer;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Backdrop = _interopRequireDefault(require("@material-ui/core/Backdrop"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _styles = require("@material-ui/core/styles");

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

var _context = require("../../utils/_context");

var _excluded = ["classes", "drawer"],
    _excluded2 = ["backdrop"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// TODO: TS Namespace
var AppcraftDrawer;

(function (_AppcraftDrawer) {
  var def;

  (function (_def) {})(def || (def = _AppcraftDrawer.def || (_AppcraftDrawer.def = {})));
})(AppcraftDrawer || (AppcraftDrawer = {})); // @ts-ignore TODO: Custom Hooks


var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    backdrop: {
      zIndex: "".concat(theme.zIndex.drawer - 1, " !important")
    },
    drawer: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      // @ts-ignore
      overflowX: function overflowX(_ref) {
        var anchor = _ref.anchor;
        return anchor === 'left' || anchor === 'right' ? 'hidden' : null;
      },
      // @ts-ignore
      overflowY: function overflowY(_ref2) {
        var anchor = _ref2.anchor;
        return anchor === 'top' || anchor === 'bottom' ? 'hidden' : null;
      }
    },
    paper: {
      border: 0,
      zIndex: "".concat(theme.zIndex.drawer + 1, " !important"),
      // @ts-ignore
      overflowX: function overflowX(_ref3) {
        var anchor = _ref3.anchor;
        return anchor === 'left' || anchor === 'right' ? 'hidden' : null;
      },
      // @ts-ignore
      overflowY: function overflowY(_ref4) {
        var anchor = _ref4.anchor;
        return anchor === 'top' || anchor === 'bottom' ? 'hidden' : null;
      },
      // @ts-ignore
      borderRadius: function borderRadius(_ref5) {
        var anchor = _ref5.anchor,
            brs = _ref5.borderRadiusSpacing;
        return anchor === 'top' ? theme.spacing(0, 0, brs, brs) : anchor === 'right' ? theme.spacing(brs, 0, 0, brs) : anchor === 'bottom' ? theme.spacing(brs, brs, 0, 0) : theme.spacing(0, brs, brs, 0);
      }
    },
    open: {
      // @ts-ignore
      width: function width(_ref6) {
        var anchor = _ref6.anchor,
            maxSpacing = _ref6.maxSpacing;
        return anchor === 'left' || anchor === 'right' ? theme.spacing(maxSpacing) : null;
      },
      // @ts-ignore
      height: function height(_ref7) {
        var anchor = _ref7.anchor,
            maxSpacing = _ref7.maxSpacing;
        return anchor === 'top' || anchor === 'bottom' ? theme.spacing(maxSpacing) : null;
      },
      // @ts-ignore
      transition: function transition(_ref8) {
        var anchor = _ref8.anchor;
        return theme.transitions.create(anchor === 'left' || anchor === 'right' ? 'width' : 'height', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        });
      }
    },
    close: {
      // @ts-ignore
      width: function width(_ref9) {
        var anchor = _ref9.anchor,
            minSpacing = _ref9.minSpacing;
        return anchor === 'left' || anchor === 'right' ? theme.spacing(minSpacing) : null;
      },
      // @ts-ignore
      height: function height(_ref10) {
        var anchor = _ref10.anchor,
            minSpacing = _ref10.minSpacing;
        return anchor === 'top' || anchor === 'bottom' ? theme.spacing(minSpacing) : null;
      },
      // @ts-ignore
      transition: function transition(_ref11) {
        var anchor = _ref11.anchor;
        return theme.transitions.create(anchor === 'left' || anchor === 'right' ? 'width' : 'height', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        });
      }
    },
    subPopover: {
      zIndex: "".concat(theme.zIndex.drawer, " !important")
    },
    subPaper: {
      background: 'none'
    }
  };
});

function makeDrawer() {
  var _ref12 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref12$anchor = _ref12.anchor,
      anchor = _ref12$anchor === void 0 ? 'left' : _ref12$anchor,
      _ref12$borderRadiusSp = _ref12.borderRadiusSpacing,
      borderRadiusSpacing = _ref12$borderRadiusSp === void 0 ? 0 : _ref12$borderRadiusSp,
      _ref12$disabledBackdr = _ref12.disabledBackdrop,
      disabledBackdrop = _ref12$disabledBackdr === void 0 ? false : _ref12$disabledBackdr,
      _ref12$maxSpacing = _ref12.maxSpacing,
      maxSpacing = _ref12$maxSpacing === void 0 ? 40 : _ref12$maxSpacing,
      _ref12$minSpacing = _ref12.minSpacing,
      minSpacing = _ref12$minSpacing === void 0 ? 0 : _ref12$minSpacing,
      _ref12$variant = _ref12.variant,
      variant = _ref12$variant === void 0 ? 'permanent' : _ref12$variant;

  return function (DrawerImplement) {
    return /*#__PURE__*/_react["default"].forwardRef(function (_ref13, ref) {
      var defaultClasses = _ref13.classes,
          _ref13$drawer = _ref13.drawer,
          open = _ref13$drawer.open,
          onClose = _ref13$drawer.onClose,
          props = _objectWithoutProperties(_ref13, _excluded);

      var _ref14 = defaultClasses || {},
          backdropClassName = _ref14.backdrop,
          classes = _objectWithoutProperties(_ref14, _excluded2);

      var _useTheme = (0, _styles.useTheme)(),
          transitions = _useTheme.transitions;

      var _useState = (0, _react.useState)([open]),
          _useState2 = _slicedToArray(_useState, 2),
          indicatorDeps = _useState2[0],
          setIndicatorDeps = _useState2[1];

      var menuRef = (0, _react.useRef)(null);
      var $classes = useStyles({
        anchor: anchor,
        borderRadiusSpacing: borderRadiusSpacing,
        minSpacing: minSpacing,
        maxSpacing: maxSpacing
      });
      var handleClose = (0, _react.useCallback)(function () {
        var _menuRef$current;

        (_menuRef$current = menuRef.current) === null || _menuRef$current === void 0 ? void 0 : _menuRef$current.collapseAll(); // @ts-ignore

        onClose.apply(void 0, arguments); // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [menuRef.current, onClose]);
      (0, _react.useEffect)(function () {
        var id = setTimeout(function () {
          setIndicatorDeps([open]);
          clearTimeout(id);
        }, transitions.duration.leavingScreen); // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [open]);
      return /*#__PURE__*/_react["default"].createElement(_context.StyleContext.Provider, {
        value: {
          style: 'drawer',
          menuRef: menuRef
        }
      }, /*#__PURE__*/_react["default"].createElement(_Backdrop["default"], {
        className: (0, _clsx["default"])($classes.backdrop, backdropClassName),
        open: !disabledBackdrop && open,
        onClick: handleClose
      }), /*#__PURE__*/_react["default"].createElement(_Drawer["default"], {
        variant: variant,
        classes: _objectSpread(_objectSpread({}, classes), {}, {
          root: (0, _clsx["default"])($classes.drawer, classes.root),
          paper: (0, _clsx["default"])($classes.paper, classes.paper, $classes[open ? 'open' : 'close'])
        })
      }, /*#__PURE__*/_react["default"].createElement(DrawerImplement, _extends({}, props, {
        drawer: {
          open: open,
          indicatorDeps: indicatorDeps,
          onClose: handleClose,
          subheader: {
            action: /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
              onClick: handleClose
            }, anchor === 'top' ? /*#__PURE__*/_react["default"].createElement(_KeyboardArrowUp["default"], null) : anchor === 'right' ? /*#__PURE__*/_react["default"].createElement(_KeyboardArrowRight["default"], null) : anchor === 'bottom' ? /*#__PURE__*/_react["default"].createElement(_KeyboardArrowDown["default"], null) : /*#__PURE__*/_react["default"].createElement(_KeyboardArrowLeft["default"], null))
          },
          subMenuProps: {
            borderRadiusSpacing: borderRadiusSpacing,
            className: $classes.subPopover,
            BackdropProps: {
              invisible: true,
              onClick: function onClick() {
                return setTimeout(handleClose);
              }
            },
            PaperProps: {
              className: $classes.subPaper
            }
          }
        }
      }))));
    });
  };
}