"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DecorationDialog;

var _react = _interopRequireWildcard(require("react"));

var _shortid = require("shortid");

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ButtonGroup = _interopRequireDefault(require("@material-ui/core/ButtonGroup"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Step = _interopRequireDefault(require("@material-ui/core/Step"));

var _StepButton = _interopRequireDefault(require("@material-ui/core/StepButton"));

var _Stepper = _interopRequireDefault(require("@material-ui/core/Stepper"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _customs = require("./_customs");

var _locales = require("../_utils/locales");

var _customs2 = require("../Visualizer/_customs");

var _excluded = ["props"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

// TODO: Custom Hooks
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    title: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing(1, 3),
      borderBottom: "1px solid ".concat(theme.palette.divider),
      '& > *[role=title]': {
        marginRight: 'auto'
      }
    },
    action: {
      padding: '0 !important',
      '& > *': {
        borderRadius: '0',
        margin: '0 !important',
        '&:first-child': {
          borderBottomLeftRadius: "".concat(theme.shape.borderRadius, " !important")
        },
        '&:last-child': {
          borderBottomRightRadius: "".concat(theme.shape.borderRadius, " !important")
        }
      }
    },
    content: {
      height: "calc(90vh - ".concat(theme.spacing(15), "px) !important"),
      margin: "".concat(theme.spacing(-1, 0), " !important"),
      padding: "".concat(theme.spacing(1, 0), " !important"),
      '& > *[role=stepper]': {
        maxHeight: '100%',
        height: 'fit-content',
        width: "calc(100% - ".concat(theme.spacing(42), "px) !important"),
        overflowY: 'auto',
        '& *[role=text]': {
          wordBreak: 'break-all'
        },
        '& + *': {
          width: theme.spacing(42),
          borderLeft: "1px solid ".concat(theme.palette.divider)
        },
        '& button[role=step] > span:first-child': {
          width: '100%',
          '& > span:nth-child(2)': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            '& > span:first-child': {
              minWidth: 'fit-content',
              paddingRight: theme.spacing(4)
            },
            '& > div.action': {
              position: 'absolute',
              display: 'flex',
              top: 0,
              right: 0,
              bottom: 0,
              left: 'auto',
              alignItems: 'center'
            }
          }
        }
      }
    }
  };
}); // TODO: Component

function DecorationDialog(_ref) {
  var _definitions$decorati;

  var StructureProps = _ref.StructureComponent,
      _classes = _ref.classes,
      open = _ref.open,
      defaultValue = _ref.value,
      onConfirm = _ref.onConfirm,
      onClose = _ref.onClose;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useWidgetContext = (0, _customs2.useWidgetContext)(),
      definitions = _useWidgetContext.definitions;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      InputStyles = _useContext.InputStyles,
      $classes = _useContext.classes,
      override = _useContext.override,
      onElementDispatch = _useContext.onElementDispatch;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      actived = _useState2[0],
      setActived = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      step = _useState4[0],
      setStep = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      decorations = _useState6[0],
      setDecorations = _useState6[1];

  var decoration = decorations[step] || {};
  var importBy = decoration.importBy,
      description = decoration.description,
      typePairs = decoration.typePairs,
      options = decoration.options,
      handles = decoration.handles;

  var _ref2 = (definitions === null || definitions === void 0 ? void 0 : (_definitions$decorati = definitions.decorations) === null || _definitions$decorati === void 0 ? void 0 : _definitions$decorati[importBy]) || {},
      _ref2$configTypes = _ref2.configTypes,
      definition = _ref2$configTypes === void 0 ? {
    type: 'exact'
  } : _ref2$configTypes,
      defaultConfigs = _ref2.defaultConfigs;

  var classes = useStyles();

  var handleDecorationChange = function handleDecorationChange(_ref3) {
    var props = _ref3.props,
        newDecoration = _objectWithoutProperties(_ref3, _excluded);

    return setDecorations(decorations.map(function ($decoration, i) {
      return i === step ? _objectSpread(_objectSpread({}, newDecoration), {}, {
        options: props
      }) : $decoration;
    }));
  };

  (0, _react.useEffect)(function () {
    if (open) {
      setActived(null);
      setStep(0);
      setDecorations(defaultValue || []);
    }
  }, [open]);
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], {
    fullWidth: true,
    maxWidth: "sm",
    open: open
  }, /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    disableTypography: true,
    className: classes.title
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    role: "title",
    variant: "h6",
    color: "textPrimary"
  }, dt('ttl-decoration')), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: dt('btn-add-decoration')
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    color: "primary",
    onClick: function onClick() {
      return setDecorations([].concat(_toConsumableArray(decorations), [{
        uid: (0, _shortid.generate)(),
        description: "Decoration_".concat(Math.floor(Math.random() * 10000)),
        options: {}
      }]));
    }
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)))), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    className: classes.content,
    container: true,
    component: _DialogContent["default"]
  }, decorations.length === 0 ? /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "h6",
    align: "center",
    color: "textSecondary",
    component: _Grid["default"],
    item: true,
    xs: 12
  }, dt('ttl-no-decoration')) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Stepper["default"], {
    role: "stepper",
    nonLinear: true,
    orientation: "vertical",
    activeStep: step,
    component: _Grid["default"],
    item: true
  }, decorations.map(function (_ref4, i) {
    var uid = _ref4.uid,
        subtitle = _ref4.description,
        value = _ref4.importBy;

    var _ref5 = definitions.decorations[value] || {},
        title = _ref5.description;

    return /*#__PURE__*/_react["default"].createElement(_Step["default"], {
      key: uid
    }, /*#__PURE__*/_react["default"].createElement(_StepButton["default"], {
      role: "step",
      onClick: function onClick() {
        return setStep(i);
      },
      optional: /*#__PURE__*/_react["default"].createElement("div", {
        className: "action"
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        size: "small",
        color: "secondary",
        onClick: function onClick(e) {
          e.stopPropagation();
          setDecorations(decorations.filter(function (_ref6) {
            var target = _ref6.uid;
            return target !== uid;
          }));
        }
      }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      role: "text",
      align: "left",
      variant: "subtitle1",
      color: title ? 'textPrimary' : 'secondary'
    }, title || dt('ttl-invalid-decoration')), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      role: "text",
      align: "left",
      variant: "body2",
      color: "textSecondary"
    }, subtitle)));
  })), /*#__PURE__*/_react["default"].createElement(_Grid["default"], {
    item: true
  }, /*#__PURE__*/_react["default"].createElement(_customs.ProptypesEditorContext.Provider, {
    value: {
      InputStyles: InputStyles,
      actived: actived,
      classes: $classes,
      disableHandleRefs: true,
      override: override,
      handles: handles || {},
      importBy: importBy,
      state: [],
      props: options || (0, _cloneDeep2["default"])(defaultConfigs) || {},
      substratum: {},
      typePairs: typePairs || {},
      onActive: setActived,
      onChange: function onChange(newDecoration) {
        return handleDecorationChange(_objectSpread(_objectSpread({}, decoration), newDecoration));
      },
      onElementDispatch: onElementDispatch
    }
  }, /*#__PURE__*/_react["default"].createElement(StructureProps, {
    definition: definition,
    subheader: /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
      role: "subheader-bar",
      className: "main",
      variant: "dense"
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
      fullWidth: true,
      select: true,
      label: dt('lbl-decoration'),
      value: importBy || '',
      onChange: function onChange(_ref7) {
        var value = _ref7.target.value,
            currentTarget = _ref7.currentTarget;
        return handleDecorationChange({
          uid: decoration.uid,
          description: "".concat(currentTarget.dataset.description, "_").concat(Math.floor(Math.random() * 10000)),
          importBy: value,
          options: {}
        });
      }
    }), Object.entries(definitions.decorations).map(function (_ref8) {
      var _ref9 = _slicedToArray(_ref8, 2),
          value = _ref9[0],
          text = _ref9[1].description;

      return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        key: value,
        "data-description": text,
        value: value
      }, text);
    })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
      fullWidth: true,
      disabled: !importBy,
      label: dt('lbl-description'),
      value: description || '',
      onChange: function onChange(_ref10) {
        var value = _ref10.target.value;
        return handleDecorationChange(_objectSpread(_objectSpread({}, decoration), {}, {
          description: value
        }));
      }
    })))
  }))))), /*#__PURE__*/_react["default"].createElement(_ButtonGroup["default"], {
    className: classes.action,
    fullWidth: true,
    variant: "contained",
    size: "large",
    component: _DialogActions["default"]
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "default",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Close["default"], null),
    onClick: onClose
  }, dt('btn-cancel')), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    color: "primary",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Check["default"], null),
    onClick: function onClick() {
      return onConfirm(decorations);
    }
  }, dt('btn-confirm'))));
}