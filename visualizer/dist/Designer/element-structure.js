"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ElementStructure;

var _react = _interopRequireWildcard(require("react"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _QueuePlayNext = _interopRequireDefault(require("@material-ui/icons/QueuePlayNext"));

var _SettingsOutlined = _interopRequireDefault(require("@material-ui/icons/SettingsOutlined"));

var _iconMenuButton = _interopRequireWildcard(require("./icon-menu-button"));

var _locales = require("../utils/locales");

var _Visualizer = require("../Visualizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// TODO: Custom Hooks
var NodeContext = /*#__PURE__*/(0, _react.createContext)({
  definitions: null,
  expanded: new Set(),
  widgets: [],
  onActived: function onActived() {
    return null;
  },
  onAppend: function onAppend() {
    return null;
  },
  onDestroy: function onDestroy() {
    return null;
  },
  onElementChange: function onElementChange() {
    return null;
  }
});
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden auto !important',
      width: '100%'
    },
    appbar: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      '& > div > *:first-child': {
        marginRight: 'auto'
      }
    },
    item: {
      paddingLeft: function paddingLeft() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref$level = _ref.level,
            level = _ref$level === void 0 ? 0 : _ref$level;

        return theme.spacing(level * 1.5);
      },
      '& div[role=icon]': {
        minWidth: theme.spacing(4)
      }
    }
  };
}); // TODO: Components

function ElementItem(_ref2) {
  var _substratums$children;

  var prefix = _ref2.prefix,
      level = _ref2.level,
      uid = _ref2.uid,
      importBy = _ref2.importBy,
      description = _ref2.description;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useContext = (0, _react.useContext)(NodeContext),
      definitions = _useContext.definitions,
      expanded = _useContext.expanded,
      widgets = _useContext.widgets,
      onActived = _useContext.onActived,
      onAppend = _useContext.onAppend,
      onDestroy = _useContext.onDestroy,
      onElementChange = _useContext.onElementChange;

  var substratums = (0, _Visualizer.useSubstratumWidgets)(widgets, uid, false);
  var classes = useStyles({
    level: level
  });
  var childrenType = (0, _get2["default"])(definitions, [importBy, 'propTypes', 'children', 'type']);
  var subCount = ((_substratums$children = substratums.children) === null || _substratums$children === void 0 ? void 0 : _substratums$children.length) || 0;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    button: true,
    classes: {
      container: classes.item
    },
    onClick: function onClick() {
      return onActived(uid);
    }
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
    role: "icon",
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, Object.keys(substratums).length > 0 && /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small",
    onClick: function onClick() {
      return onElementChange(uid, !expanded.has(uid));
    }
  }, expanded.has(uid) ? /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null) : /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], prefix ? {
    primary: prefix,
    secondary: description
  } : {
    primary: description
  }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
    size: "small",
    color: "primary",
    icon: /*#__PURE__*/_react["default"].createElement(_SettingsOutlined["default"], null)
  }, importBy && (childrenType === 'node' || childrenType === 'element' && subCount < 1) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
    icon: /*#__PURE__*/_react["default"].createElement(_Add["default"], {
      color: "primary"
    }),
    text: dt('btn-create-element'),
    onClick: function onClick() {
      onElementChange(uid, true);
      onAppend({
        target: uid,
        value: 'children'
      });
    }
  }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null)), /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
    icon: /*#__PURE__*/_react["default"].createElement(_Close["default"], {
      color: "secondary"
    }),
    text: dt('btn-remove-element'),
    onClick: function onClick() {
      return onDestroy(uid);
    }
  })))), /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expanded.has(uid),
    timeout: "auto",
    unmountOnExit: true
  }, Object.entries(substratums).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        propName = _ref4[0],
        substratum = _ref4[1];

    return /*#__PURE__*/_react["default"].createElement(ElementList, {
      key: propName,
      level: level + 1,
      prefix: propName !== 'children' && propName,
      substratum: substratum
    });
  })));
}

function ElementList(_ref5) {
  var prefix = _ref5.prefix,
      substratum = _ref5.substratum,
      _ref5$level = _ref5.level,
      level = _ref5$level === void 0 ? 0 : _ref5$level;
  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_List["default"], {
    role: "element",
    className: classes.root
  }, substratum === null || substratum === void 0 ? void 0 : substratum.map(function (child) {
    return /*#__PURE__*/_react["default"].createElement(ElementItem, _extends({
      key: child.uid,
      prefix: prefix,
      level: level
    }, child));
  }));
}

function ElementStructure(_ref6) {
  var onActived = _ref6.onActived,
      onAppend = _ref6.onAppend,
      onDestroy = _ref6.onDestroy,
      onReadyEdit = _ref6.onReadyEdit;

  var _useLocales2 = (0, _locales.useLocales)(),
      dt = _useLocales2.getFixedT;

  var _useWidgetWrapper = (0, _Visualizer.useWidgetWrapper)(),
      definitions = _useWidgetWrapper.definitions,
      widgets = _useWidgetWrapper.widgets;

  var _useState = (0, _react.useState)(new Set()),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useSubstratumWidgets = (0, _Visualizer.useSubstratumWidgets)(widgets, null, false),
      substratum = _useSubstratumWidgets.children;

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(NodeContext.Provider, {
    value: {
      definitions: definitions,
      expanded: expanded,
      widgets: widgets,
      onActived: onActived,
      onAppend: onAppend,
      onDestroy: onDestroy,
      onElementChange: function onElementChange(uid, open) {
        expanded[open ? 'add' : 'delete'](uid);
        setExpanded(new Set(expanded));
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    position: "static",
    color: "inherit",
    className: classes.appbar,
    elevation: 0
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
    variant: "dense"
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    color: "primary"
  }, dt('ttl-elements')), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: dt('btn-edit-ready-handle')
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small",
    color: "primary",
    onClick: onReadyEdit
  }, /*#__PURE__*/_react["default"].createElement(_QueuePlayNext["default"], null))), /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: dt('btn-create-element')
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      return onAppend();
    }
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))))), /*#__PURE__*/_react["default"].createElement(ElementList, {
    substratum: substratum
  }));
}