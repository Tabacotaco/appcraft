"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _shortid = require("shortid");

var _get2 = _interopRequireDefault(require("lodash/get"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardActions = _interopRequireDefault(require("@material-ui/core/CardActions"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _styles = require("@material-ui/core/styles");

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _DeleteOutline = _interopRequireDefault(require("@material-ui/icons/DeleteOutline"));

var _ExpandLess = _interopRequireDefault(require("@material-ui/icons/ExpandLess"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _PlaylistAdd = _interopRequireDefault(require("@material-ui/icons/PlaylistAdd"));

var _SettingsOutlined = _interopRequireDefault(require("@material-ui/icons/SettingsOutlined"));

var _calculator = _interopRequireDefault(require("./calculator"));

var _iconMenuButton = _interopRequireWildcard(require("../icon-menu-button"));

var _request = _interopRequireDefault(require("./request"));

var _variable = _interopRequireDefault(require("./variable"));

var _withStructure = _interopRequireDefault(require("../with-structure"));

var _customs = require("../_customs");

var _locales = require("../../utils/locales");

var _Visualizer = require("../../Visualizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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

var TODO_CONTROLS = [{
  component: _calculator["default"],
  reg: {
    type: /^calculator$/
  }
}, {
  component: _request["default"],
  reg: {
    type: /^request$/
  }
}]; // TODO: Custom Hooks

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
    }
  };
}); // TODO: Components

function TodoItem(_ref2) {
  var index = _ref2.index,
      pathname = _ref2.pathname,
      todo = _ref2.todo,
      onVariableEdit = _ref2.onVariableEdit;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useWidgetWrapper = (0, _Visualizer.useWidgetWrapper)(),
      handleRefs = _useWidgetWrapper.handleRefs;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      InputStyles = _useContext.InputStyles,
      widgetUid = _useContext.uid,
      globalState = _useContext.state,
      handles = _useContext.handles,
      onChange = _useContext.onChange;

  var todos = handles[pathname];
  var uid = todo.uid,
      type = todo.type,
      description = todo.description,
      state = todo.state;
  var TodoElement = (0, _react.useMemo)(function () {
    var _TODO_CONTROLS$find;

    return (_TODO_CONTROLS$find = TODO_CONTROLS.find(function (_ref3) {
      var reg = _ref3.reg;
      return reg.type.test(type);
    })) === null || _TODO_CONTROLS$find === void 0 ? void 0 : _TODO_CONTROLS$find.component;
  }, [type]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var classes = useStyles();
  var refs = (0, _get2["default"])(handleRefs, JSON.stringify([widgetUid, pathname, uid]));

  var handleTodoChange = function handleTodoChange(targets) {
    return onChange({
      handles: (0, _set2["default"])(handles, pathname, todos.map(function ($todo) {
        return $todo.uid !== uid ? $todo : targets.name === 'type' ? _objectSpread(_objectSpread({}, (0, _pick2["default"])($todo, ['uid', 'description', 'state'])), {}, {
          type: targets.value
        }) : _objectSpread(_objectSpread({}, $todo), (Array.isArray(targets) ? targets : [targets]).reduce(function (result, _ref4) {
          var name = _ref4.name,
              value = _ref4.value;
          return (0, _set2["default"])(result, name, value);
        }, {}));
      }))
    });
  };

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
        return setOpen(!open);
      }
    }, open ? /*#__PURE__*/_react["default"].createElement(_ExpandLess["default"], null) : /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null))
  }), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    component: _CardContent["default"],
    classes: {
      wrapperInner: classes.content
    },
    "in": open,
    timeout: "auto",
    unmountOnExit: true
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
    fullWidth: true,
    select: true,
    label: dt('lbl-todo-type'),
    name: "type",
    value: type,
    onChange: function onChange(_ref5) {
      var target = _ref5.target;
      return handleTodoChange(target);
    }
  }), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "calculator"
  }, dt('opt-calculator-todo')), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: "request"
  }, dt('opt-request-todo'))), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
    fullWidth: true,
    label: dt('lbl-description'),
    name: "description",
    value: description,
    onChange: function onChange(_ref6) {
      var target = _ref6.target;
      return handleTodoChange(target);
    }
  })), TodoElement && /*#__PURE__*/_react["default"].createElement(TodoElement, {
    refs: refs,
    todo: todo,
    onVariableEdit: onVariableEdit,
    pathname: (0, _customs.getPropPathname)('array', pathname, index),
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
    value: globalState.some(function (_ref7) {
      var $uid = _ref7.widgetUid,
          path = _ref7.path;
      return "".concat($uid, "['").concat(path, "']") === state;
    }) ? state : '',
    onChange: function onChange(_ref8) {
      var target = _ref8.target;
      return handleTodoChange(target);
    }
  }), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
    value: ""
  }, "None"), globalState.map(function (_ref9) {
    var $uid = _ref9.widgetUid,
        widgetDesc = _ref9.widgetDesc,
        path = _ref9.path;
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: "".concat($uid, "['").concat(path, "']"),
      value: "".concat($uid, "['").concat(path, "']")
    }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: widgetDesc,
      secondary: path
    }));
  }))));
}

var TodoBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref10, ref) {
  var superiorPathname = _ref10.superiorPathname,
      pathname = _ref10.pathname;

  var _useLocales2 = (0, _locales.useLocales)(),
      dt = _useLocales2.getFixedT;

  var _useWidgetWrapper2 = (0, _Visualizer.useWidgetWrapper)(),
      onHandleSlotChange = _useWidgetWrapper2.onHandleSlotChange;

  var _useContext2 = (0, _react.useContext)(_customs.ProptypesEditorContext),
      $classes = _useContext2.classes,
      uid = _useContext2.uid,
      handles = _useContext2.handles,
      onActive = _useContext2.onActive,
      onChange = _useContext2.onChange;

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      variable = _useState4[0],
      onVariableEdit = _useState4[1];

  var _handles$pathname = handles[pathname],
      todos = _handles$pathname === void 0 ? [] : _handles$pathname;
  var classes = useStyles();
  var refOptions = (0, _customs.useRefOptions)(todos, variable || {}); // eslint-disable-next-line react-hooks/exhaustive-deps

  (0, _react.useEffect)(function () {
    return onHandleSlotChange({
      uid: uid,
      pathname: pathname
    });
  }, []);
  (0, _react.useImperativeHandle)(ref, function () {
    return {};
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_variable["default"], {
    refs: variable === null || variable === void 0 ? void 0 : variable.refs,
    options: refOptions,
    value: variable === null || variable === void 0 ? void 0 : variable.value,
    onClose: function onClose() {
      return onVariableEdit(null);
    },
    onConfirm: function onConfirm(newVariable) {
      onVariableEdit(null);
      onChange({
        handles: (0, _set2["default"])(handles, variable.name, newVariable)
      });
    }
  }), /*#__PURE__*/_react["default"].createElement(_List["default"], {
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
        return onActive((0, _toPath2["default"])(superiorPathname).join('/'));
      }
    }, pathname), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
      size: "small",
      color: "primary",
      icon: /*#__PURE__*/_react["default"].createElement(_SettingsOutlined["default"], null)
    }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      icon: /*#__PURE__*/_react["default"].createElement(_PlaylistAdd["default"], null),
      text: dt('btn-add-todo'),
      onClick: function onClick() {
        return onChange({
          handles: (0, _set2["default"])(handles, pathname, [].concat(_toConsumableArray(todos), [{
            uid: (0, _shortid.generate)(),
            description: "Todo_".concat(Math.floor(Math.random() * 10000)),
            type: 'calculator',
            params: []
          }]))
        });
      }
    }), /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      icon: /*#__PURE__*/_react["default"].createElement(_DeleteOutline["default"], {
        color: "secondary"
      }),
      text: dt('btn-reset-todo'),
      onClick: function onClick() {
        return onChange({
          handles: _objectSpread({}, (0, _omit2["default"])(handles, [pathname]))
        });
      }
    }))))
  }, todos.map(function (todo, index) {
    return /*#__PURE__*/_react["default"].createElement(TodoItem, {
      key: todo.uid,
      index: index,
      pathname: pathname,
      todo: todo,
      onVariableEdit: onVariableEdit
    });
  })));
});

TodoBase.displayName = 'TodoBase';

var _default = (0, _withStructure["default"])('todo', TodoBase);

exports["default"] = _default;