"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapTodo;

var _react = _interopRequireWildcard(require("react"));

var _shortid = require("shortid");

var _get2 = _interopRequireDefault(require("lodash/get"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemAvatar = _interopRequireDefault(require("@material-ui/core/ListItemAvatar"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _styles = require("@material-ui/core/styles");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _EditOutlined = _interopRequireDefault(require("@material-ui/icons/EditOutlined"));

var _HelpOutline = _interopRequireDefault(require("@material-ui/icons/HelpOutline"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _iconMenuButton = _interopRequireWildcard(require("../icon-menu-button"));

var _calculator = require("./calculator");

var _customs = require("../_customs");

var _locales = require("../../_utils/locales");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// TODO: Custom Hooks
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25),
      '& > *[role=seq]': {
        width: theme.spacing(4),
        height: theme.spacing(4),
        background: theme.palette.info.main
      }
    },
    padding: {
      minWidth: theme.spacing(3.75),
      width: theme.spacing(3.75)
    },
    action: {
      right: '0 !important'
    },
    secondary: {
      paddingRight: "".concat(theme.spacing(4), "px !important")
    }
  };
}); // TODO: Component

function MapTodo(_ref) {
  var expandeds = _ref.expandeds,
      pathname = _ref.pathname,
      refs = _ref.refs,
      todo = _ref.todo,
      _onChange = _ref.onChange,
      onPropertyExpand = _ref.onPropertyExpand,
      onSetting = _ref.onSetting;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var mappable = todo.mappable,
      _todo$source = todo.source,
      source = _todo$source === void 0 ? [] : _todo$source,
      _todo$pairs = todo.pairs,
      pairs = _todo$pairs === void 0 ? [] : _todo$pairs;
  var classes = useStyles();
  var modifiable = refs && Object.values(refs).some(function (ref) {
    return Object.entries(ref).length > 0;
  });
  var handlePropertyAdd = (0, _react.useCallback)(function (code, value) {
    if (!expandeds.has(code)) {
      onPropertyExpand(code);
    }

    _onChange({
      name: code,
      value: [].concat(_toConsumableArray(value), [{
        uid: (0, _shortid.generate)(),
        description: "".concat(code.charAt(0).toUpperCase()).concat(code.slice(1), "_").concat(Math.floor(Math.random() * 10000))
      }])
    }); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [expandeds, _onChange]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true,
    subheader: /*#__PURE__*/_react["default"].createElement(_calculator.PropertySubheader, {
      category: "map-source",
      classes: (0, _pick2["default"])(classes, ['icon', 'action']),
      disableAdd: !modifiable,
      disableExpand: source.length === 0,
      expanded: expandeds.has('source'),
      onSubheaderClick: function onSubheaderClick() {
        return onPropertyExpand('source');
      },
      onPropertyAdd: function onPropertyAdd() {
        return handlePropertyAdd('source', source);
      },
      actions: [{
        text: dt('btn-condition'),
        icon: /*#__PURE__*/_react["default"].createElement(_HelpOutline["default"], null),
        disabled: !modifiable,
        onClick: function onClick() {
          return onSetting({
            type: 'condition',
            name: "".concat(pathname, ".mappable"),
            refs: _objectSpread(_objectSpread({}, refs), {}, {
              source: source
            }),
            todo: todo.uid,
            value: mappable || []
          });
        }
      }]
    })
  }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expandeds.has('source'),
    timeout: "auto",
    unmountOnExit: true
  }, source.map(function (src, i) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], _extends({
      key: src.uid,
      disableGutters: true,
      classes: {
        secondaryAction: classes.secondary
      }
    }, modifiable && {
      button: true,
      onClick: function onClick() {
        return onSetting({
          ContentProps: {
            allowedTypes: ['input', 'state', 'todo']
          },
          type: 'variable',
          allowedOptionTypes: ['SourceMap'],
          name: "".concat(pathname, ".source[").concat(i, "]"),
          refs: refs,
          todo: todo.uid,
          value: _objectSpread({
            type: 'todo'
          }, src)
        });
      }
    }), /*#__PURE__*/_react["default"].createElement(_ListItemAvatar["default"], {
      className: classes.icon
    }, /*#__PURE__*/_react["default"].createElement(_Avatar["default"], {
      role: "seq"
    }, i)), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: src.description
    }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
      className: classes.action
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      color: "secondary",
      onClick: function onClick() {
        return _onChange([{
          name: 'pairs',
          value: []
        }, {
          name: 'source',
          value: source.filter(function (_ref2) {
            var uid = _ref2.uid;
            return uid !== src.uid;
          })
        }]);
      }
    }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null))));
  }))), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true,
    subheader: /*#__PURE__*/_react["default"].createElement(_calculator.PropertySubheader, {
      category: "map-pairs",
      classes: (0, _pick2["default"])(classes, ['icon', 'action']),
      disableAdd: !modifiable,
      disableExpand: pairs.length === 0,
      expanded: expandeds.has('pairs'),
      onSubheaderClick: function onSubheaderClick() {
        return onPropertyExpand('pairs');
      },
      onPropertyAdd: function onPropertyAdd() {
        return handlePropertyAdd('pairs', pairs);
      }
    })
  }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expandeds.has('pairs'),
    timeout: "auto",
    unmountOnExit: true
  }, pairs.map(function (pair, i) {
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: pair.uid,
      disableGutters: true,
      classes: {
        secondaryAction: classes.secondary
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
      className: classes.padding
    }), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      disableTypography: true
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      fullWidth: true,
      size: "small",
      variant: "filled",
      label: pair.description,
      name: "pairs[".concat(i, "].path"),
      placeholder: dt('ttl-pairpath-placeholder'),
      defaultValue: pair.path || '',
      onChange: function onChange(_ref3) {
        var target = _ref3.target;
        return _onChange(target);
      }
    })), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
      className: classes.action
    }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
      size: "small",
      color: "default",
      icon: /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)
    }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      text: dt('btn-edit-pairs'),
      icon: /*#__PURE__*/_react["default"].createElement(_EditOutlined["default"], {
        color: "primary"
      }),
      disabled: !modifiable,
      onClick: function onClick() {
        return onSetting({
          type: 'pairing',
          name: "".concat(pathname, ".pairs[").concat(i, "]"),
          refs: _objectSpread(_objectSpread({}, refs), {}, {
            source: source
          }),
          todo: todo.uid,
          value: _objectSpread({
            type: 'source'
          }, pair)
        });
      }
    }), /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      text: dt('btn-remove-pairs'),
      icon: /*#__PURE__*/_react["default"].createElement(_Close["default"], {
        color: "secondary"
      }),
      onClick: function onClick() {
        return _onChange({
          name: 'pairs',
          value: pairs.filter(function (_ref4) {
            var uid = _ref4.uid;
            return uid !== pair.uid;
          })
        });
      }
    }))));
  }))));
}