"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _shortid = require("shortid");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _CancelOutlined = _interopRequireDefault(require("@material-ui/icons/CancelOutlined"));

var _CheckCircleOutline = _interopRequireDefault(require("@material-ui/icons/CheckCircleOutline"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _HelpOutline = _interopRequireDefault(require("@material-ui/icons/HelpOutline"));

var _variable = _interopRequireWildcard(require("./variable"));

var _customs = require("../_customs");

var _customs2 = require("../../Visualizer/_customs");

var _locales = require("../../_utils/locales");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// TODO: Custom Hooks
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      padding: '0 !important',
      background: theme.palette.background["default"],
      '&.no-data': {
        background: theme.palette.background.paper
      }
    },
    card: {
      display: 'block',
      border: "1px solid ".concat(theme.palette.divider),
      padding: '0 !important',
      margin: theme.spacing(1, 1),
      width: "calc(100% - ".concat(theme.spacing(2), "px)")
    },
    header: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      '& > .action': {
        margin: '0 !important'
      }
    },
    content: {
      '& > * + *': {
        marginTop: theme.spacing(3)
      }
    },
    variable: {
      height: 'fit-content',
      padding: "".concat(theme.spacing(1), "px !important")
    },
    preview: {
      display: 'flex',
      alignItems: 'center',
      background: function background(_ref) {
        var preview = _ref.preview;
        return theme.palette[preview !== null && preview !== void 0 && preview.result ? 'info' : 'error'].main;
      },
      padding: theme.spacing(1, 1.5),
      '& > * + *': {
        marginLeft: theme.spacing(1.5)
      }
    }
  };
}); // TODO: Components

var ConditionBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref2, ref) {
  var _defaultCondition$;

  var className = _ref2.className,
      component = _ref2.component,
      _ref2$prefix = _ref2.prefix,
      prefix = _ref2$prefix === void 0 ? '' : _ref2$prefix,
      defaultCondition = _ref2.value,
      _onChange = _ref2.onChange;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      InputStyles = _useContext.InputStyles;

  var _useReference = (0, _variable.useReference)(),
      refs = _useReference.refs;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useState = (0, _react.useState)(((_defaultCondition$ = defaultCondition[0]) === null || _defaultCondition$ === void 0 ? void 0 : _defaultCondition$.uid) || null),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      preview = _useState4[0],
      setPreview = _useState4[1];

  var classes = useStyles({
    preview: preview
  });
  (0, _react.useImperativeHandle)(ref, function () {
    return /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-add-condition')
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      color: "primary",
      onClick: function onClick() {
        var newUid = (0, _shortid.generate)();
        var defaultSourceType = Object.keys(refs).find(function (key) {
          return Object.entries(refs[key]).length > 0;
        });
        setExpanded(newUid);

        _onChange({
          name: (0, _customs.getPropPathname)('array', prefix, defaultCondition.length),
          value: {
            uid: newUid,
            description: "Condition_".concat(Math.floor(Math.random() * 10000)),
            source: {
              type: defaultSourceType,
              description: "Source_".concat(Math.floor(Math.random() * 10000))
            },
            value: {
              type: 'String',
              description: "Value_".concat(Math.floor(Math.random() * 10000))
            }
          }
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)));
  }, [prefix, refs, defaultCondition.length]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Popover["default"], {
    open: Boolean(preview),
    anchorEl: preview === null || preview === void 0 ? void 0 : preview.anchorEl,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    onClose: function onClose() {
      return setPreview(null);
    },
    PaperProps: {
      className: classes.preview
    }
  }, preview !== null && preview !== void 0 && preview.result ? /*#__PURE__*/_react["default"].createElement(_CheckCircleOutline["default"], null) : /*#__PURE__*/_react["default"].createElement(_CancelOutlined["default"], null), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    color: "inherit"
  }, dt("ttl-".concat(preview !== null && preview !== void 0 && preview.result ? 'matched' : 'unmatched')))), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    component: component,
    className: (0, _clsx["default"])(classes.root, className, {
      'no-data': defaultCondition.length === 0
    })
  }, defaultCondition.length === 0 && /*#__PURE__*/_react["default"].createElement(_ListItem["default"], null, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primaryTypographyProps: {
      align: 'center',
      color: 'textSecondary',
      variant: 'h6'
    },
    primary: dt('ttl-no-condition')
  })), defaultCondition.map(function (_ref3, i) {
    var uid = _ref3.uid,
        description = _ref3.description,
        source = _ref3.source,
        value = _ref3.value;
    var baseName = (0, _customs.getPropPathname)('array', prefix, i);
    return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
      key: uid,
      className: classes.card,
      component: _ListItem["default"]
    }, /*#__PURE__*/_react["default"].createElement(_CardHeader["default"], {
      classes: {
        root: classes.header,
        action: 'action'
      },
      title: description,
      avatar: /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        onClick: function onClick() {
          return setExpanded(uid === expanded ? null : uid);
        }
      }, uid === expanded ? /*#__PURE__*/_react["default"].createElement(_ExpandLess["default"], null) : /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null)),
      action: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: dt('ttl-preview-condition-result')
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "primary",
        disabled: !source.initValue || !value.initValue,
        onClick: function onClick(_ref4) {
          var currentTarget = _ref4.currentTarget;
          return setPreview({
            anchorEl: currentTarget,
            result: JSON.stringify(_customs2.Variable.generate(refs, source.type, source.initValue)) === JSON.stringify(_customs2.Variable.generate(refs, value.type, value.initValue))
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_HelpOutline["default"], null))), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: dt('btn-remove-condition')
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        color: "secondary",
        onClick: function onClick() {
          if (uid === expanded) {
            setExpanded(null);
          }

          _onChange({
            name: prefix,
            value: defaultCondition.filter(function (c) {
              return c.uid !== uid;
            })
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null))))
    }), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
      component: _CardContent["default"],
      classes: {
        wrapperInner: classes.content
      },
      "in": uid === expanded,
      timeout: "auto",
      unmountOnExit: true
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
      fullWidth: true,
      label: dt('lbl-description'),
      name: (0, _customs.getPropPathname)('object', baseName, 'description'),
      value: description,
      onChange: function onChange(_ref5) {
        var target = _ref5.target;
        return _onChange(target);
      }
    })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
      fullWidth: true,
      label: dt('lbl-condition-source'),
      InputLabelProps: {
        shrink: true
      },
      InputProps: {
        inputComponent: _variable["default"],
        value: source,
        onChange: _onChange,
        inputProps: {
          allowedTypes: ['input', 'state', 'todo'].concat(_toConsumableArray('source' in refs ? ['source'] : [])),
          className: classes.variable,
          disableTreatments: true,
          prefix: (0, _customs.getPropPathname)('object', baseName, 'source')
        }
      }
    })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
      fullWidth: true,
      label: dt('lbl-condition-value'),
      InputLabelProps: {
        shrink: true
      },
      InputProps: {
        inputComponent: _variable["default"],
        value: value,
        onChange: _onChange,
        inputProps: _objectSpread(_objectSpread({}, 'source' in refs && {
          allowedTypes: Object.keys(_customs.VARIABLE_TYPE)
        }), {}, {
          className: classes.variable,
          disableTreatments: true,
          prefix: (0, _customs.getPropPathname)('object', baseName, 'value')
        })
      }
    }))));
  })));
});

ConditionBase.displayName = 'ConditionBase';
var _default = ConditionBase;
exports["default"] = _default;