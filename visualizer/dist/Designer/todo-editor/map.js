"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MapTodo;

var _react = _interopRequireWildcard(require("react"));

var _shortid = require("shortid");

var _get2 = _interopRequireDefault(require("lodash/get"));

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

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _EditOutlined = _interopRequireDefault(require("@material-ui/icons/EditOutlined"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _HelpOutline = _interopRequireDefault(require("@material-ui/icons/HelpOutline"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _iconMenuButton = _interopRequireWildcard(require("../icon-menu-button"));

var _locales = require("../../_utils/locales");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
}); // TODO: Components

function Subheader(_ref) {
  var code = _ref.code,
      disabled = _ref.disabled,
      expanded = _ref.expanded,
      value = _ref.value,
      onChange = _ref.onChange,
      onExpandedChange = _ref.onExpandedChange;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var classes = useStyles();
  return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    disableGutters: true,
    button: true,
    disabled: value.length === 0,
    onClick: function onClick() {
      expanded[expanded.has(code) ? 'delete' : 'add'](code);
      onExpandedChange(new Set(expanded));
    }
  }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
    className: classes.icon
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small"
  }, expanded.has(code) && value.length > 0 ? /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null) : /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: dt("ttl-map-".concat(code))
  }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
    className: classes.action
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: dt("btn-add-map-".concat(code))
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small",
    color: "primary",
    disabled: disabled,
    onClick: function onClick() {
      onExpandedChange(new Set(expanded.add(code)));
      onChange({
        name: code,
        value: [].concat(_toConsumableArray(value), [{
          uid: (0, _shortid.generate)(),
          description: "".concat(code.charAt(0).toUpperCase()).concat(code.slice(1), "_").concat(Math.floor(Math.random() * 10000))
        }])
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)))));
}

function MapTodo(_ref2) {
  var pathname = _ref2.pathname,
      refs = _ref2.refs,
      todo = _ref2.todo,
      _onChange = _ref2.onChange,
      onSetting = _ref2.onSetting;

  var _useLocales2 = (0, _locales.useLocales)(),
      dt = _useLocales2.getFixedT;

  var _useState = (0, _react.useState)(new Set()),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _todo$source = todo.source,
      source = _todo$source === void 0 ? [] : _todo$source,
      _todo$pairs = todo.pairs,
      pairs = _todo$pairs === void 0 ? [] : _todo$pairs;
  var classes = useStyles();
  var modifiable = refs && Object.values(refs).some(function (ref) {
    return Object.entries(ref).length > 0;
  });
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true,
    subheader: /*#__PURE__*/_react["default"].createElement(Subheader, {
      code: "source",
      disabled: !modifiable,
      expanded: expanded,
      value: source,
      onChange: _onChange,
      onExpandedChange: setExpanded
    })
  }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expanded.has('source'),
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
          allowedOptionTypes: ['Array'],
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
    }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
      size: "small",
      color: "default",
      icon: /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)
    }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      text: dt('btn-condition'),
      icon: /*#__PURE__*/_react["default"].createElement(_HelpOutline["default"], null),
      disabled: !modifiable,
      onClick: function onClick() {
        return onSetting({
          type: 'condition',
          name: "".concat(pathname, ".source[").concat(i, "].condition"),
          refs: refs,
          todo: todo.uid,
          value: src.condition || []
        });
      }
    }), /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      text: dt('btn-remove-source'),
      icon: /*#__PURE__*/_react["default"].createElement(_Close["default"], {
        color: "secondary"
      }),
      onClick: function onClick() {
        return _onChange([{
          name: 'pairs',
          value: []
        }, {
          name: 'source',
          value: source.filter(function (_ref3) {
            var uid = _ref3.uid;
            return uid !== src.uid;
          })
        }]);
      }
    }))));
  }))), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true,
    subheader: /*#__PURE__*/_react["default"].createElement(Subheader, {
      code: "pairs",
      disabled: !modifiable,
      expanded: expanded,
      value: pairs,
      onChange: _onChange,
      onExpandedChange: setExpanded
    })
  }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expanded.has('pairs'),
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
      onChange: function onChange(_ref4) {
        var target = _ref4.target;
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
      text: dt('btn-condition'),
      icon: /*#__PURE__*/_react["default"].createElement(_HelpOutline["default"], null),
      disabled: !modifiable,
      onClick: function onClick() {
        return onSetting({
          type: 'condition',
          name: "".concat(pathname, ".pairs[").concat(i, "].condition"),
          refs: _objectSpread(_objectSpread({}, refs), {}, {
            source: source
          }),
          todo: todo.uid,
          value: pair.condition || []
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
          value: pairs.filter(function (_ref5) {
            var uid = _ref5.uid;
            return uid !== pair.uid;
          })
        });
      }
    }))));
  }))));
}