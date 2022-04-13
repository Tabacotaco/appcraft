"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RequestTodo;

var _react = _interopRequireWildcard(require("react"));

var _shortid = require("shortid");

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _EditOutlined = _interopRequireDefault(require("@material-ui/icons/EditOutlined"));

var _MoreVert = _interopRequireDefault(require("@material-ui/icons/MoreVert"));

var _VisibilityOutlined = _interopRequireDefault(require("@material-ui/icons/VisibilityOutlined"));

var _iconMenuButton = _interopRequireWildcard(require("../icon-menu-button"));

var _calculator = require("./calculator");

var _customs = require("../_customs");

var _customs2 = require("../../Visualizer/_customs");

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

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var METHODS = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'PATCH', 'POST', 'PUT'];
var DEFAULT = {
  header: function header() {
    return '';
  },
  search: function search() {
    return {
      uid: (0, _shortid.generate)(),
      description: "Variable_".concat(Math.floor(Math.random() * 10000)),
      type: 'String'
    };
  }
}; // TODO: Custom Hooks

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    capitalize: {
      textTransform: 'capitalize'
    },
    icon: {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25)
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
    },
    variable: {
      padding: theme.spacing(0, 1.5)
    }
  };
}); // TODO: Component

function RequestTodo(_ref) {
  var expandeds = _ref.expandeds,
      pathname = _ref.pathname,
      refs = _ref.refs,
      todo = _ref.todo,
      _onChange = _ref.onChange,
      onPropertyExpand = _ref.onPropertyExpand,
      onSetting = _ref.onSetting;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      InputStyles = _useContext.InputStyles,
      disableHandleRefs = _useContext.disableHandleRefs;

  var url = todo.url,
      method = todo.method,
      header = todo.header,
      search = todo.search,
      body = todo.body;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      headerDisabled = _useState2[0],
      setHeaderDisabled = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      searchDisabled = _useState4[0],
      setSearchDisabled = _useState4[1];

  var classes = useStyles();
  var handlePropertyAdd = (0, _react.useCallback)(function (code, value) {
    var name = "".concat(code.charAt(0).toUpperCase()).concat(code.slice(1), "_").concat(Math.floor(Math.random() * 10000));

    if (!expandeds.has(code)) {
      onPropertyExpand(code);
    }

    _onChange({
      name: code,
      value: _objectSpread(_objectSpread({}, value), {}, _defineProperty({}, name, DEFAULT[code]()))
    }); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [expandeds, _onChange]);
  var handleOptionChange = (0, _react.useMemo)(function () {
    return (0, _debounce2["default"])(function (type, _ref2, _ref3) {
      var _ref2$target = _ref2.target,
          target = _ref2$target.name,
          value = _ref2$target.value;
      var setDisabled = _ref3.setDisabled,
          category = _ref3.category,
          options = _ref3.options;
      setDisabled(false);

      _onChange({
        name: category,
        value: Object.entries(options).reduce(function (result, _ref4) {
          var _ref5 = _slicedToArray(_ref4, 2),
              optName = _ref5[0],
              optValue = _ref5[1];

          return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, type === 'name' && optName === target ? value : optName, type === 'value' && optName === target ? value : optValue));
        }, {})
      });
    }, 800);
  }, [_onChange]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
    fullWidth: true,
    required: true,
    label: dt('lbl-url'),
    name: "url",
    error: !(url !== null && url !== void 0 && url.trim()),
    value: url || '',
    onChange: function onChange(_ref6) {
      var target = _ref6.target;
      return _onChange(target);
    },
    InputProps: {
      endAdornment: refs && url && Object.keys(search || {}).length > 0 && /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: dt('lbl-preview-url', {
          url: _customs2.Todo.url(refs, url, search)
        })
      }, /*#__PURE__*/_react["default"].createElement(_VisibilityOutlined["default"], {
        size: "small"
      })))
    }
  })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
    SelectProps: {
      displayEmpty: true
    },
    fullWidth: true,
    select: true,
    label: dt('lbl-method'),
    name: "method",
    value: method || 'GET',
    onChange: function onChange(_ref7) {
      var target = _ref7.target;
      return _onChange(target);
    }
  }), METHODS.map(function ($method) {
    return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
      key: $method,
      value: $method
    }, $method);
  })), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true,
    subheader: /*#__PURE__*/_react["default"].createElement(_calculator.PropertySubheader, {
      category: "request-header",
      classes: (0, _pick2["default"])(classes, ['icon', 'action']),
      disableAdd: headerDisabled,
      disableExpand: Object.keys(header || {}).length === 0,
      expanded: expandeds.has('header'),
      onSubheaderClick: function onSubheaderClick() {
        return onPropertyExpand('header');
      },
      onPropertyAdd: function onPropertyAdd() {
        return handlePropertyAdd('header', header || {});
      }
    })
  }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expandeds.has('header'),
    timeout: "auto",
    unmountOnExit: true
  }, Object.entries(header || {}).map(function (_ref8) {
    var _ref9 = _slicedToArray(_ref8, 2),
        name = _ref9[0],
        value = _ref9[1];

    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: name,
      disableGutters: true,
      classes: {
        secondaryAction: classes.secondary
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
      className: classes.padding
    }), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        fullWidth: true,
        size: "small",
        variant: "filled",
        label: dt('lbl-header-name'),
        disabled: headerDisabled !== false && (!headerDisabled.startsWith(name) || headerDisabled === "".concat(name, ".value")),
        name: name,
        defaultValue: name,
        onChange: function onChange(e) {
          setHeaderDisabled("".concat(name, ".key"));
          handleOptionChange('name', e, {
            category: 'header',
            options: header,
            setDisabled: setHeaderDisabled
          });
        }
      }),
      secondary: /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        fullWidth: true,
        size: "small",
        variant: "filled",
        label: dt('lbl-header-content'),
        disabled: headerDisabled !== false && (!headerDisabled.startsWith(name) || headerDisabled === "".concat(name, ".key")),
        name: name,
        defaultValue: value,
        onChange: function onChange(e) {
          setHeaderDisabled("".concat(name, ".value"));
          handleOptionChange('value', e, {
            category: 'header',
            options: header,
            setDisabled: setHeaderDisabled
          });
        }
      })
    }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
      className: classes.action
    }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-remove-request-header')
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      color: "secondary",
      disabled: Boolean(headerDisabled),
      onClick: function onClick() {
        return _onChange({
          name: 'header',
          value: (0, _omit2["default"])(header, [name])
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))));
  }))), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true,
    subheader: /*#__PURE__*/_react["default"].createElement(_calculator.PropertySubheader, {
      category: "request-search",
      classes: (0, _pick2["default"])(classes, ['icon', 'action']),
      disableAdd: searchDisabled,
      disableExpand: Object.keys(search || {}).length === 0,
      expanded: expandeds.has('header'),
      onSubheaderClick: function onSubheaderClick() {
        return onPropertyExpand('search');
      },
      onPropertyAdd: function onPropertyAdd() {
        return handlePropertyAdd('search', search || {});
      }
    })
  }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expandeds.has('search'),
    timeout: "auto",
    unmountOnExit: true
  }, Object.entries(search || {}).map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
        name = _ref11[0],
        variable = _ref11[1];

    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      key: name,
      disableGutters: true,
      classes: {
        secondaryAction: classes.secondary
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
      className: classes.padding
    }), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      disableTypography: true
    }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      className: classes.variable,
      primaryTypographyProps: {
        className: classes.capitalize,
        color: 'primary'
      },
      primary: dt("opt-variable-".concat((variable.finalType || variable.type).toLowerCase())),
      secondary: variable.description
    }), /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      fullWidth: true,
      size: "small",
      variant: "filled",
      label: dt('lbl-search-name'),
      disabled: searchDisabled !== false && (!searchDisabled.startsWith(name) || searchDisabled === "".concat(name, ".value")),
      name: name,
      defaultValue: name,
      onChange: function onChange(e) {
        setSearchDisabled("".concat(name, ".key"));
        handleOptionChange('name', e, {
          category: 'search',
          options: search,
          setDisabled: setSearchDisabled
        });
      }
    })), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
      className: classes.action
    }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
      size: "small",
      color: "default",
      icon: /*#__PURE__*/_react["default"].createElement(_MoreVert["default"], null)
    }, /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      text: dt('btn-edit-search'),
      icon: /*#__PURE__*/_react["default"].createElement(_EditOutlined["default"], {
        color: "primary"
      }),
      disabled: !disableHandleRefs && !refs,
      onClick: function onClick() {
        return onSetting({
          type: 'variable',
          refs: refs,
          name: "".concat(pathname, ".search[\"").concat(name, "\"]"),
          todo: todo.uid,
          value: variable
        });
      }
    }), /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      text: dt('btn-remove-search'),
      icon: /*#__PURE__*/_react["default"].createElement(_Close["default"], {
        color: "secondary"
      }),
      onClick: function onClick() {
        return _onChange({
          name: 'search',
          value: (0, _omit2["default"])(search, [name])
        });
      }
    }))));
  }))), /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true
  }, /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    disableGutters: true,
    classes: {
      secondaryAction: classes.secondary
    }
  }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    disableTypography: true
  }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    variant: "subtitle1",
    color: "textPrimary",
    className: classes.capitalize
  }, dt('lbl-request-body')), body && /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    className: classes.variable,
    primaryTypographyProps: {
      className: classes.capitalize,
      color: 'primary'
    },
    primary: dt("opt-variable-".concat((body.finalType || body.type).toLowerCase())),
    secondary: body === null || body === void 0 ? void 0 : body.description
  }))), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], {
    className: classes.action
  }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
    title: dt('btn-edit-request-body')
  }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
    size: "small",
    disabled: !refs,
    onClick: function onClick() {
      return onSetting({
        type: 'variable',
        refs: refs,
        name: "".concat(pathname, ".body"),
        todo: todo.uid,
        value: body || {
          uid: (0, _shortid.generate)(),
          description: "Body_".concat(Math.floor(Math.random() * 10000)),
          type: 'Object'
        }
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_EditOutlined["default"], null))))));
}