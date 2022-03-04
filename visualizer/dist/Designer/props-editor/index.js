"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PropsEditor;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _sortBy2 = _interopRequireDefault(require("lodash/sortBy"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _ChevronRightOutlined = _interopRequireDefault(require("@material-ui/icons/ChevronRightOutlined"));

var _PlaylistAdd = _interopRequireDefault(require("@material-ui/icons/PlaylistAdd"));

var _display = _interopRequireDefault(require("./display"));

var _mixed = _interopRequireDefault(require("./mixed"));

var _node = _interopRequireDefault(require("./node"));

var _pure = _interopRequireDefault(require("./pure"));

var _todoEditor = _interopRequireDefault(require("../todo-editor"));

var _withStructure = _interopRequireDefault(require("../with-structure"));

var _customs = require("../_customs");

var _locales = require("../../utils/locales");

var _Visualizer = require("../../Visualizer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PROP_CONTROLS = [{
  component: _display["default"],
  reg: {
    type: /^(((array|object)(Of)?)|exact|shape)$/
  }
}, {
  component: _pure["default"],
  reg: {
    type: /^(bool|elementType|instanceOf|number|oneOf|string|symbol)$/
  }
}, {
  component: _mixed["default"],
  reg: {
    type: /^(any|oneOfType)$/
  }
}, {
  component: _node["default"],
  reg: {
    type: /^(element|node)$/
  }
}, {
  component: _display["default"],
  reg: {
    type: /^func$/
  }
}]; // TODO: Custom Hooks

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden auto !important',
      width: '100%'
    },
    subheader: {
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
    drawerPaper: {
      position: 'absolute !important'
    },
    appbar: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    info: {
      display: 'flex',
      flexDirection: 'column',
      '& > * + *': {
        marginTop: theme.spacing(2)
      }
    }
  };
}); // TODO: Components

var StructureBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref2, ref) {
  var superiorPathname = _ref2.superiorPathname,
      pathname = _ref2.pathname,
      definition = _ref2.definition,
      value = _ref2.value,
      subheader = _ref2.subheader;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useWidgetWrapper = (0, _Visualizer.useWidgetWrapper)(),
      onListenersActived = _useWidgetWrapper.onListenersActived;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      actived = _useContext.actived,
      $classes = _useContext.classes,
      uid = _useContext.uid,
      typePairs = _useContext.typePairs,
      props = _useContext.props,
      onActive = _useContext.onActive,
      onChange = _useContext.onChange;

  var binding = (0, _customs.useBindingState)(pathname);
  var classes = useStyles(); // 根據 definition.type 決定子項目是從 prop value/definition.options 轉出

  var items = (0, _react.useMemo)(function () {
    var result = /^(array|object)(Of)?$/.test(definition.type) ? Object.keys(value || {}).map(function (itemName) {
      return [itemName, definition.options || {
        type: 'any'
      }];
    }) : Object.entries(definition.options || {});
    return (0, _sortBy2["default"])(result, [function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          type = _ref4[1].type;

      return PROP_CONTROLS.findIndex(function (_ref5) {
        var reg = _ref5.reg;
        return reg.type.test(type);
      });
    }, 0]);
  }, [definition, value]); // 判斷是否有子項目正在展開狀態

  var _useMemo = (0, _react.useMemo)(function () {
    var paths = (0, _toPath2["default"])(pathname);
    return [!pathname || (actived === null || actived === void 0 ? void 0 : actived.startsWith(paths.join('/'))) === true].concat(_toConsumableArray(items.find(function (_ref6) {
      var _ref7 = _slicedToArray(_ref6, 1),
          itemName = _ref7[0];

      return actived === null || actived === void 0 ? void 0 : actived.startsWith([].concat(_toConsumableArray(paths), [itemName]).join('/'));
    }) || [])); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actived, pathname, JSON.stringify(items)]),
      _useMemo2 = _slicedToArray(_useMemo, 3),
      open = _useMemo2[0],
      detailName = _useMemo2[1],
      detail = _useMemo2[2];

  (0, _react.useImperativeHandle)(ref, function () {
    return {};
  }, []);
  (0, _react.useEffect)(function () {
    if (!detail || !open) {
      onListenersActived({
        uid: uid,
        listeners: items.reduce(function (result, _ref8) {
          var _ref9 = _slicedToArray(_ref8, 2),
              itemName = _ref9[0],
              itemOpts = _ref9[1];

          return /^func$/.test(itemOpts.type) ? result.concat((0, _customs.getPropPathname)(definition.type, pathname, itemName)) : result;
        }, [])
      });
      return function () {
        return onListenersActived(false);
      };
    }

    return null; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detail, open, JSON.stringify(items)]);
  return /*#__PURE__*/_react["default"].createElement(_List["default"], {
    role: "structure",
    className: (0, _clsx["default"])(classes.root, $classes === null || $classes === void 0 ? void 0 : $classes.structure),
    subheader: subheader || /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
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
    }, pathname), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, /^((array|object)(Of)?|func)$/.test(definition.type) && /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-add-property')
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      color: "primary",
      disabled: binding,
      onClick: function onClick() {
        var path = (0, _toPath2["default"])(pathname);

        if (definition.type.startsWith('array')) {
          onChange({
            props: (0, _set2["default"])(props, path, (value || []).concat(null))
          });
        } else if (definition.type.startsWith('object')) {
          onChange({
            props: (0, _set2["default"])(props, path, _objectSpread(_objectSpread({}, value), {}, _defineProperty({}, "*".concat(Object.keys(value || {}).length), null)))
          });
        }
      }
    }, /*#__PURE__*/_react["default"].createElement(_PlaylistAdd["default"], null)))))
  }, detail && /*#__PURE__*/_react["default"].createElement(_Drawer["default"], {
    anchor: "right",
    variant: "permanent",
    classes: {
      paper: (0, _clsx["default"])(classes.drawerPaper, $classes === null || $classes === void 0 ? void 0 : $classes.drawerPaper, {
        open: open
      })
    },
    open: open
  }, detail.type === 'func' ? /*#__PURE__*/_react["default"].createElement(_todoEditor["default"], {
    superiorPathname: pathname,
    superiorType: definition.type,
    propName: detailName,
    definition: detail
  }) : /*#__PURE__*/_react["default"].createElement(StructureProp, {
    superiorPathname: pathname,
    superiorType: definition.type,
    propName: detailName,
    definition: typePairs[(0, _customs.getPropPathname)(definition.type, pathname, detailName)] || detail
  })), (!detail || !open) && items.map(function (_ref10) {
    var _ref11 = _slicedToArray(_ref10, 2),
        itemName = _ref11[0],
        itemOpts = _ref11[1];

    var _ref12 = PROP_CONTROLS.find(function (_ref13) {
      var _ref13$reg = _ref13.reg,
          type = _ref13$reg.type,
          _ref13$reg$name = _ref13$reg.name,
          name = _ref13$reg$name === void 0 ? /^.+$/ : _ref13$reg$name;
      return type.test(itemOpts.type) && name.test(itemName);
    }) || {},
        _ref12$component = _ref12.component,
        PropControl = _ref12$component === void 0 ? null : _ref12$component;

    return PropControl === null ? null : /*#__PURE__*/_react["default"].createElement(PropControl, {
      key: itemName,
      superiorPathname: pathname,
      superiorType: definition.type,
      propName: itemName,
      definition: itemOpts
    });
  }));
});

StructureBase.displayName = 'StructureBase';
var StructureProp = (0, _withStructure["default"])('structure', StructureBase);

function PropsEditor(_ref14) {
  var InputStyles = _ref14.InputStyles,
      $classes = _ref14.classes,
      selected = _ref14.selected,
      state = _ref14.state,
      overrideMixedOptions = _ref14.overrideMixedOptions,
      overridePropControl = _ref14.overridePropControl,
      defaultValue = _ref14.value,
      handleChange = _ref14.onChange,
      onElementDispatch = _ref14.onElementDispatch,
      onStateBinding = _ref14.onStateBinding;

  var _useLocales2 = (0, _locales.useLocales)(),
      dt = _useLocales2.getFixedT;

  var _useWidgetWrapper2 = (0, _Visualizer.useWidgetWrapper)(),
      definitions = _useWidgetWrapper2.definitions,
      widgets = _useWidgetWrapper2.widgets;

  var widget = widgets.find(function (_ref15) {
    var uid = _ref15.uid;
    return uid === defaultValue;
  }) || {};
  var importBy = widget.importBy,
      description = widget.description,
      typePairs = widget.typePairs,
      props = widget.props,
      handles = widget.handles;

  var _ref16 = (definitions === null || definitions === void 0 ? void 0 : definitions[importBy]) || {},
      _ref16$propTypes = _ref16.propTypes,
      definition = _ref16$propTypes === void 0 ? null : _ref16$propTypes;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      actived = _useState2[0],
      setActived = _useState2[1];

  var substratum = (0, _Visualizer.useSubstratumWidgets)(widgets, defaultValue);
  var classes = useStyles({
    subheaderSpacing: 1.5
  });
  return /*#__PURE__*/_react["default"].createElement(_customs.ProptypesEditorContext.Provider, {
    value: {
      InputStyles: InputStyles,
      actived: actived,
      classes: $classes,
      override: {
        control: overridePropControl,
        mixed: overrideMixedOptions
      },
      selected: selected,
      handles: handles || {},
      props: props || {},
      state: state,
      substratum: substratum,
      typePairs: typePairs || {},
      uid: defaultValue,
      onActive: setActived,
      onChange: function onChange(newValue) {
        return handleChange(_objectSpread(_objectSpread({}, widget), newValue));
      },
      onElementDispatch: onElementDispatch,
      onStateBinding: onStateBinding
    }
  }, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    position: "static",
    color: "inherit",
    className: (0, _clsx["default"])(classes.appbar, $classes.appbar),
    elevation: 0
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
    variant: "dense",
    color: "primary",
    component: _Button["default"],
    startIcon: /*#__PURE__*/_react["default"].createElement(_ChevronRightOutlined["default"], {
      color: "primary"
    }),
    style: {
      justifyContent: 'flex-start',
      textTransform: 'none'
    },
    onClick: function onClick() {
      return onElementDispatch({
        type: 'SET_STATE',
        target: 'actived',
        value: null
      });
    }
  }, dt('ttl-properties'))), /*#__PURE__*/_react["default"].createElement(StructureProp, {
    definition: {
      type: 'exact',
      options: definition
    },
    subheader: /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
      disableGutters: true,
      className: (0, _clsx["default"])(classes.subheader, $classes === null || $classes === void 0 ? void 0 : $classes.subheader),
      component: _AppBar["default"],
      color: "inherit",
      elevation: 0
    }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
      variant: "dense",
      className: classes.info
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
      fullWidth: true,
      select: true,
      label: dt('lbl-import-by'),
      value: importBy || '',
      onChange: function onChange(_ref17) {
        var value = _ref17.target.value,
            currentTarget = _ref17.currentTarget;
        return handleChange(_objectSpread(_objectSpread({}, widget), {}, {
          description: "".concat(currentTarget.dataset.description, "_").concat(Math.floor(Math.random() * 10000)),
          importBy: value,
          props: (0, _cloneDeep2["default"])(definitions === null || definitions === void 0 ? void 0 : definitions[value].defaultProps) || {}
        }));
      }
    }), Object.entries(definitions).map(function (_ref18) {
      var _ref19 = _slicedToArray(_ref18, 2),
          name = _ref19[0],
          desc = _ref19[1].description;

      return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        key: name,
        value: name,
        "data-description": desc
      }, desc);
    })), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
      fullWidth: true,
      label: dt('lbl-description'),
      value: description || '',
      onChange: function onChange(_ref20) {
        var value = _ref20.target.value;
        return handleChange(_objectSpread(_objectSpread({}, widget), {}, {
          description: value
        }));
      }
    }))))
  }));
}