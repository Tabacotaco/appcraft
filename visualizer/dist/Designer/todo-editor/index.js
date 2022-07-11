"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _shortid = require("shortid");

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _get3 = _interopRequireDefault(require("lodash/get"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ButtonGroup = _interopRequireDefault(require("@material-ui/core/ButtonGroup"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _LinearProgress = _interopRequireDefault(require("@material-ui/core/LinearProgress"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _DeleteOutline = _interopRequireDefault(require("@material-ui/icons/DeleteOutline"));

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _HelpOutline = _interopRequireDefault(require("@material-ui/icons/HelpOutline"));

var _PlaylistAdd = _interopRequireDefault(require("@material-ui/icons/PlaylistAdd"));

var _SettingsOutlined = _interopRequireDefault(require("@material-ui/icons/SettingsOutlined"));

var _calculator = _interopRequireDefault(require("./calculator"));

var _condition = _interopRequireDefault(require("./condition"));

var _iconMenuButton = _interopRequireWildcard(require("../icon-menu-button"));

var _map = _interopRequireDefault(require("./map"));

var _paired = _interopRequireDefault(require("./paired"));

var _request = _interopRequireDefault(require("./request"));

var _variable = _interopRequireWildcard(require("./variable"));

var _withStructure = _interopRequireDefault(require("../with-structure"));

var _customs = require("../_customs");

var _locales = require("../../_utils/locales");

var _customs2 = require("../../Visualizer/_customs");

var _excluded = ["ContentProps", "allowedOptionTypes", "descriptions", "todo", "type", "refs", "value", "onClose", "onConfirm"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SETTING_CONTROLS = [{
  component: _condition["default"],
  reg: {
    type: /^condition$/
  }
}, {
  component: _paired["default"],
  reg: {
    type: /^pairing$/
  }
}, {
  component: _variable["default"],
  reg: {
    type: /^variable$/
  }
}];
var TODO_CONTROLS = [{
  component: _calculator["default"],
  reg: {
    type: /^calculator$/
  }
}, {
  component: _map["default"],
  reg: {
    type: /^map$/
  }
}, {
  component: _request["default"],
  reg: {
    type: /^request$/
  }
}]; //* Custom Hooks

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative',
      background: theme.palette.background["default"],
      display: 'block',
      overflow: 'hidden auto !important',
      width: '100%'
    },
    subheader: {
      background: theme.palette.background.paper,
      backdropFilter: "blur(".concat(theme.spacing(2), "px)"),
      borderBottom: "1px solid ".concat(theme.palette.divider),
      padding: function padding() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$subheaderSpacing = _ref.subheaderSpacing,
            subheaderSpacing = _ref$subheaderSpacing === void 0 ? 0 : _ref$subheaderSpacing;

        return theme.spacing(subheaderSpacing, 0);
      },
      zIndex: theme.zIndex.appBar
    },
    breadcrumbs: {
      justifyContent: 'flex-start',
      '& > span:first-child': {
        textTransform: 'none'
      }
    },
    tootip: {
      background: theme.palette.action.disabledBackground
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
      '& .subheader': {
        textTransform: 'capitalize'
      },
      '& + * + *': {
        borderTop: "1px solid ".concat(theme.palette.divider)
      }
    },
    content: {
      '& > * + *': {
        marginTop: theme.spacing(3)
      }
    },
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
    setting: {
      padding: theme.spacing(1.5)
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
    }
  };
});

var useExpandedItem = function () {
  function reducerFn(state, _ref2) {
    var type = _ref2.type,
        value = _ref2.value;

    switch (type) {
      case 'todo':
        {
          var target = state.target;
          return {
            target: value === target ? null : value,
            expandeds: new Set()
          };
        }

      case 'property':
        {
          var expandeds = state.expandeds;

          if (value !== false) {
            expandeds[expandeds.has(value) ? 'delete' : 'add'](value);
          }

          return _objectSpread(_objectSpread({}, state), {}, {
            expandeds: new Set(value === false ? [] : expandeds)
          });
        }

      default:
        return state;
    }
  }

  return function (defaultId) {
    return (0, _react.useReducer)(reducerFn, {
      target: defaultId || null,
      expandeds: new Set()
    });
  };
}(); //* Components


function SettingDialog(_ref3) {
  var ContentProps = _ref3.ContentProps,
      _ref3$allowedOptionTy = _ref3.allowedOptionTypes,
      allowedOptionTypes = _ref3$allowedOptionTy === void 0 ? null : _ref3$allowedOptionTy,
      descriptions = _ref3.descriptions,
      uid = _ref3.todo,
      type = _ref3.type,
      refs = _ref3.refs,
      defaultValue = _ref3.value,
      onClose = _ref3.onClose,
      onConfirm = _ref3.onConfirm,
      props = _objectWithoutProperties(_ref3, _excluded);

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      action = _useState2[0],
      setAction = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      config = _useState4[0],
      setConfig = _useState4[1];

  var ContentElement = (0, _react.useMemo)(function () {
    var _SETTING_CONTROLS$fin;

    return (_SETTING_CONTROLS$fin = SETTING_CONTROLS.find(function (_ref4) {
      var reg = _ref4.reg;
      return reg.type.test(type);
    })) === null || _SETTING_CONTROLS$fin === void 0 ? void 0 : _SETTING_CONTROLS$fin.component;
  }, [type]);
  var classes = useStyles();
  var options = (0, _customs.useRefOptions)(descriptions, refs, uid, allowedOptionTypes, defaultValue);
  var open = Boolean(type && options && config);
  (0, _react.useEffect)(function () {
    if (defaultValue) {
      setConfig(defaultValue);
      return function () {
        return setConfig(null);
      };
    }

    return null;
  }, [defaultValue]);
  return /*#__PURE__*/_react["default"].createElement(_Dialog["default"], _extends({}, props, {
    fullWidth: true,
    scroll: "body",
    maxWidth: type === 'pairing' ? 'md' : 'sm',
    open: open
  }), type && /*#__PURE__*/_react["default"].createElement(_DialogTitle["default"], {
    disableTypography: true,
    className: classes.title
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    role: "title",
    variant: "h6",
    color: "textPrimary"
  }, dt("ttl-".concat(type, "-setting"))), action), ContentElement && open && /*#__PURE__*/_react["default"].createElement(_variable.ReferenceProvider, {
    value: {
      options: options,
      refs: refs
    }
  }, /*#__PURE__*/_react["default"].createElement(ContentElement, _extends({}, ContentProps, {
    ref: setAction,
    className: classes.setting,
    component: _DialogContent["default"],
    value: config,
    onChange: function onChange(targets) {
      return setConfig((Array.isArray(targets) ? targets : [targets]).reduce(function (result, _ref5) {
        var name = _ref5.name,
            value = _ref5.value;
        return name ? (0, _set2["default"])(result, name, value) : value;
      }, (0, _cloneDeep2["default"])(config)));
    }
  }))), /*#__PURE__*/_react["default"].createElement(_ButtonGroup["default"], {
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
      return onConfirm(config);
    }
  }, dt('btn-confirm'))));
}

function TodoItem(_ref6) {
  var refs = _ref6.refs,
      expanded = _ref6.expanded,
      expandeds = _ref6.expandeds,
      index = _ref6.index,
      superiorPathname = _ref6.pathname,
      todo = _ref6.todo,
      onTodoExpand = _ref6.onTodoExpand,
      onPropertyExpand = _ref6.onPropertyExpand,
      onSetting = _ref6.onSetting;

  var _useLocales2 = (0, _locales.useLocales)(),
      dt = _useLocales2.getFixedT;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      InputStyles = _useContext.InputStyles,
      globalState = _useContext.state,
      handles = _useContext.handles,
      onChange = _useContext.onChange;

  var todos = handles[superiorPathname];
  var uid = todo.uid,
      type = todo.type,
      description = todo.description,
      condition = todo.condition,
      state = todo.state;
  var TodoElement = (0, _react.useMemo)(function () {
    var _TODO_CONTROLS$find;

    return (_TODO_CONTROLS$find = TODO_CONTROLS.find(function (_ref7) {
      var reg = _ref7.reg;
      return reg.type.test(type);
    })) === null || _TODO_CONTROLS$find === void 0 ? void 0 : _TODO_CONTROLS$find.component;
  }, [type]);
  var classes = useStyles();
  var pathname = "[".concat(index, "]");
  var refsCount = (0, _react.useMemo)(function () {
    return Object.values(refs || {}).reduce(function (result, ref) {
      return result + Object.entries(ref).length;
    }, 0);
  }, [refs]);

  var _useMemo = (0, _react.useMemo)(function () {
    var handleChange = function handleChange(targets) {
      return onChange({
        handles: _objectSpread(_objectSpread({}, handles), {}, _defineProperty({}, superiorPathname, todos.map(function ($todo) {
          return $todo.uid !== uid ? $todo : targets.name === 'type' ? _objectSpread(_objectSpread({}, (0, _pick2["default"])($todo, ['uid', 'description', 'state'])), {}, {
            type: targets.value
          }) : (Array.isArray(targets) ? targets : [targets]).reduce(function (result, _ref8) {
            var name = _ref8.name,
                value = _ref8.value;
            return (0, _set2["default"])(result, name, value);
          }, $todo);
        })))
      });
    };

    return [handleChange, (0, _debounce2["default"])(handleChange, 1200)]; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handles, todos, uid]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      handleTodoChange = _useMemo2[0],
      handleTodoDebounceChange = _useMemo2[1];

  return /*#__PURE__*/_react["default"].createElement(_Card["default"], {
    role: "prop-".concat(type),
    className: classes.card,
    component: _ListItem["default"]
  }, /*#__PURE__*/_react["default"].createElement(_CardHeader["default"], {
    classes: {
      root: classes.header,
      subheader: 'subheader'
    },
    title: description,
    subheader: type,
    avatar: /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      onClick: function onClick() {
        return onTodoExpand(uid);
      }
    }, expanded ? /*#__PURE__*/_react["default"].createElement(_ExpandLess["default"], null) : /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null))
  }), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    component: _CardContent["default"],
    classes: {
      wrapperInner: classes.content
    },
    "in": expanded,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
    fullWidth: true,
    select: true,
    label: dt('lbl-todo-type'),
    name: "type",
    value: type,
    onChange: function onChange(_ref9) {
      var target = _ref9.target;
      return handleTodoChange(target);
    }
  }), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "calculator"
  }, dt('opt-calculator-todo')), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "map"
  }, dt('opt-map-todo')), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "request"
  }, dt('opt-request-todo'))), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
    fullWidth: true,
    label: dt('lbl-description'),
    name: "description",
    defaultValue: description,
    onChange: function onChange(_ref10) {
      var target = _ref10.target;
      return handleTodoDebounceChange(target);
    },
    InputProps: {
      endAdornment: refsCount > 0 && /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: dt('btn-condition')
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        size: "small",
        color: condition ? 'primary' : 'default',
        onClick: function onClick() {
          return onSetting({
            type: 'condition',
            refs: refs,
            name: (0, _customs.getPropPathname)('object', pathname, 'condition'),
            todo: uid,
            value: condition || []
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_HelpOutline["default"], null))))
    }
  })), TodoElement && /*#__PURE__*/_react["default"].createElement(TodoElement, {
    expandeds: expandeds,
    refs: refs,
    todo: todo,
    pathname: pathname,
    onPropertyExpand: onPropertyExpand,
    onSetting: onSetting,
    onChange: handleTodoChange
  })), /*#__PURE__*/_react["default"].createElement(_CardActions["default"], null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
    InputProps: {
      disableUnderline: true
    },
    InputLabelProps: {
      shrink: true
    },
    SelectProps: {
      displayEmpty: true
    },
    disabled: globalState.length === 0,
    fullWidth: true,
    select: true,
    variant: "filled",
    label: dt('lbl-set-to-state'),
    name: "state",
    defaultValue: globalState.some(function (_ref11) {
      var $uid = _ref11.widgetUid,
          path = _ref11.path;
      return "".concat($uid, "['").concat(path, "']") === state;
    }) ? state : '',
    onChange: function onChange(_ref12) {
      var target = _ref12.target;
      return handleTodoDebounceChange(target);
    }
  }), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: ""
  }, dt('opt-none')), globalState.map(function (_ref13) {
    var $uid = _ref13.widgetUid,
        widgetDesc = _ref13.widgetDesc,
        path = _ref13.path;
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: "".concat($uid, "['").concat(path, "']"),
      value: "".concat($uid, "['").concat(path, "']")
    }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: widgetDesc,
      secondary: path
    }));
  }))));
}

var TodoBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref14, ref) {
  var _get2;

  var refs = _ref14.refs,
      superiorPathname = _ref14.superiorPathname,
      pathname = _ref14.pathname,
      todos = _ref14.value;

  var _useLocales3 = (0, _locales.useLocales)(),
      dt = _useLocales3.getFixedT;

  var _useWidgetContext = (0, _customs2.useWidgetContext)(),
      _useWidgetContext$lis = _slicedToArray(_useWidgetContext.listeners, 1),
      listenId = _useWidgetContext$lis[0],
      globalState = _useWidgetContext.state,
      onListenersActived = _useWidgetContext.onListenersActived;

  var _useContext2 = (0, _react.useContext)(_customs.ProptypesEditorContext),
      $classes = _useContext2.classes,
      uid = _useContext2.uid,
      handles = _useContext2.handles,
      onActive = _useContext2.onActive,
      onChange = _useContext2.onChange,
      onRefsChange = _useContext2.onRefsChange;

  var _useExpandedItem = useExpandedItem((0, _get3["default"])(todos, [todos.length - 1, 'uid'])),
      _useExpandedItem2 = _slicedToArray(_useExpandedItem, 2),
      _useExpandedItem2$ = _useExpandedItem2[0],
      target = _useExpandedItem2$.target,
      expandeds = _useExpandedItem2$.expandeds,
      onExpandedDispatch = _useExpandedItem2[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      setting = _useState6[0],
      onSetting = _useState6[1];

  var classes = useStyles();

  var _useTodoWithRefs = (0, _customs.useTodoWithRefs)(refs, todos, (0, _react.useCallback)(function (_ref15) {
    var todoRefs = _ref15.refs;

    var ImplementEl = function ImplementEl(props) {
      return /*#__PURE__*/_react["default"].createElement(TodoItem, _extends({}, props, {
        refs: todoRefs
      }));
    };

    ImplementEl.displayName = 'TodoItemWithRefs';
    return ImplementEl;
  }, [])),
      _useTodoWithRefs2 = _slicedToArray(_useTodoWithRefs, 2),
      descriptions = _useTodoWithRefs2[0],
      items = _useTodoWithRefs2[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {};
  }, []);
  (0, _react.useEffect)(function () {
    onListenersActived(false);
    return function () {
      return onRefsChange instanceof Function && onRefsChange(null);
    }; // 離開事件編輯時移除 refs 參數
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  (0, _react.useEffect)(function () {
    if (items.length === 0 && !listenId) {
      onListenersActived([uid, _defineProperty({}, pathname, function () {
        onListenersActived(false);

        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }

        onRefsChange(pathname, {
          state: globalState,
          input: (0, _customs.getPureObject)(e),
          todo: {}
        });
      })]);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [items.length, listenId]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(SettingDialog, _extends({}, (0, _pick2["default"])(setting, ['ContentProps', 'todo', 'allowedOptionTypes', 'type', 'refs', 'value']), {
    descriptions: descriptions,
    onClose: function onClose() {
      return onSetting(null);
    },
    onConfirm: function onConfirm(newSetting) {
      onSetting(null);
      onChange({
        handles: _objectSpread(_objectSpread({}, handles), {}, _defineProperty({}, pathname, (0, _set2["default"])(todos, setting.name, newSetting)))
      });
    }
  })), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    role: "structure",
    className: (0, _clsx["default"])(classes.root, $classes === null || $classes === void 0 ? void 0 : $classes.structure),
    subheader: /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
      disableGutters: true,
      className: (0, _clsx["default"])(classes.subheader, $classes === null || $classes === void 0 ? void 0 : $classes.subheader),
      component: _AppBar["default"],
      color: "inherit",
      elevation: 0
    }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
      className: classes.breadcrumbs,
      variant: "dense",
      component: _Button["default"],
      startIcon: /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null),
      onClick: function onClick() {
        return onActive((0, _toPath2["default"])(superiorPathname));
      }
    }, pathname), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
      size: "small",
      color: "primary",
      disabled: Boolean(!refs),
      icon: /*#__PURE__*/_react["default"].createElement(_SettingsOutlined["default"], null)
    }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      icon: /*#__PURE__*/_react["default"].createElement(_PlaylistAdd["default"], {
        color: "primary"
      }),
      text: dt('btn-add-todo'),
      onClick: function onClick() {
        var newUid = (0, _shortid.generate)();
        onExpandedDispatch({
          type: 'todo',
          value: newUid
        });
        onChange({
          handles: _objectSpread(_objectSpread({}, handles), {}, _defineProperty({}, pathname, [].concat(_toConsumableArray(todos), [{
            uid: newUid,
            description: "Todo_".concat(Math.floor(Math.random() * 10000)),
            type: 'calculator',
            params: []
          }])))
        });
      }
    }), /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      icon: /*#__PURE__*/_react["default"].createElement(_DeleteOutline["default"], {
        color: "secondary"
      }),
      text: dt('btn-reset'),
      disabled: !((_get2 = (0, _get3["default"])(handles, pathname)) !== null && _get2 !== void 0 && _get2.length),
      onClick: function onClick() {
        return onChange({
          handles: _objectSpread({}, (0, _omit2["default"])(handles, [pathname]))
        });
      }
    }))))
  }, items.length === 0 && !refs && /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    className: classes.tootip
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], null, /*#__PURE__*/_react["default"].createElement(_CircularProgress["default"], null)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primaryTypographyProps: {
      color: 'textSecondary',
      variant: 'h6'
    },
    primary: dt('ttl-trigger-first')
  })), items.length > 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_LinearProgress["default"], null)
  }, items.map(function (_ref17, index) {
    var TodoEl = _ref17.el,
        todo = _ref17.todo;
    return /*#__PURE__*/_react["default"].createElement(TodoEl, {
      key: TodoEl.displayName,
      todo: todo,
      expanded: target === TodoEl.displayName,
      onTodoExpand: function onTodoExpand(value) {
        return onExpandedDispatch({
          type: 'todo',
          value: value
        });
      },
      onPropertyExpand: function onPropertyExpand(value) {
        return onExpandedDispatch({
          type: 'property',
          value: value
        });
      },
      expandeds: expandeds,
      index: index,
      pathname: pathname,
      onSetting: onSetting
    });
  }))));
});

TodoBase.displayName = 'TodoBase';

var _default = (0, _withStructure["default"])('todo', TodoBase);

exports["default"] = _default;