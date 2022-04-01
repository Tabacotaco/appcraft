"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PropsEditor;

var _react = _interopRequireWildcard(require("react"));

var _notistack = require("notistack");

var _clsx = _interopRequireDefault(require("clsx"));

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _delay2 = _interopRequireDefault(require("lodash/delay"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _merge2 = _interopRequireDefault(require("lodash/merge"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _sortBy2 = _interopRequireDefault(require("lodash/sortBy"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _BookmarksOutlined = _interopRequireDefault(require("@material-ui/icons/BookmarksOutlined"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _PlaylistAdd = _interopRequireDefault(require("@material-ui/icons/PlaylistAdd"));

var _decorationEditor = _interopRequireDefault(require("../decoration-editor"));

var _display = _interopRequireDefault(require("./display"));

var _mixed = _interopRequireDefault(require("./mixed"));

var _node = _interopRequireDefault(require("./node"));

var _pure = _interopRequireDefault(require("./pure"));

var _todoEditor = _interopRequireDefault(require("../todo-editor"));

var _withStructure = _interopRequireDefault(require("../with-structure"));

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

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
}];

function isActived(actived, paths) {
  var target = JSON.stringify(paths);
  return (actived === null || actived === void 0 ? void 0 : actived.some(function (_path, i) {
    return JSON.stringify(actived.slice(0, i + 1)) === target;
  })) || false;
} // TODO: Custom Hooks


var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden auto !important',
      width: '100%',
      paddingBottom: '0 !important'
    },
    subheader: {
      backdropFilter: "blur(".concat(theme.spacing(2), "px)"),
      borderBottom: "1px solid ".concat(theme.palette.divider),
      zIndex: theme.zIndex.appBar,
      '& > *[role="subheader-bar"]': {
        paddingRight: function paddingRight() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref$dynamic = _ref.dynamic,
              dynamic = _ref$dynamic === void 0 ? false : _ref$dynamic;

          return theme.spacing(dynamic ? 6 : 2);
        },
        '&.main': {
          display: 'flex',
          flexDirection: 'column',
          paddingTop: theme.spacing(1.5),
          paddingBottom: theme.spacing(1.5),
          paddingLeft: theme.spacing(2),
          '& > * + *': {
            marginTop: theme.spacing(2)
          }
        }
      }
    },
    group: {
      backdropFilter: "blur(".concat(theme.spacing(2), "px)"),
      borderBottom: "1px solid ".concat(theme.palette.divider),
      padding: theme.spacing(1.5, 1),
      '& > *[role=expand]': {
        minWidth: theme.spacing(5.25),
        width: theme.spacing(5.25)
      }
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
    icon: {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25)
    },
    option: {
      paddingLeft: theme.spacing(5.25),
      '&:not(.shown)': {
        display: 'none !important'
      },
      '&.shown': {
        display: 'flex !important'
      }
    },
    appbar: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    }
  };
});

var useDefinitionWithDecoration = function useDefinitionWithDecoration(definitions, importBy, decoration) {
  return (0, _react.useMemo)(function () {
    var _definitions$props;

    var _ref2 = (definitions === null || definitions === void 0 ? void 0 : (_definitions$props = definitions.props) === null || _definitions$props === void 0 ? void 0 : _definitions$props[importBy]) || {},
        _ref2$propTypes = _ref2.propTypes,
        definition = _ref2$propTypes === void 0 ? {
      type: 'exact'
    } : _ref2$propTypes;

    return _merge2["default"].apply(void 0, [{}, definition].concat(_toConsumableArray((decoration || []).map(function (_ref3) {
      var _definitions$decorati;

      var $importBy = _ref3.importBy;

      var _ref4 = (definitions === null || definitions === void 0 ? void 0 : (_definitions$decorati = definitions.decorations) === null || _definitions$decorati === void 0 ? void 0 : _definitions$decorati[$importBy]) || {},
          $definition = _ref4.propTypes;

      return $definition || {
        type: 'exact'
      };
    }))));
  }, [importBy, decoration]);
};

var useWidgetOptionsWithGroup = function useWidgetOptionsWithGroup(dt, definitions, value) {
  var classes = useStyles();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var sorted = (0, _react.useMemo)(function () {
    return Object.entries(definitions).sort(function (_ref5, _ref6) {
      var _ref7 = _slicedToArray(_ref5, 2),
          n1 = _ref7[0],
          _ref7$1$group = _ref7[1].group,
          g1 = _ref7$1$group === void 0 ? '~ungroup' : _ref7$1$group;

      var _ref8 = _slicedToArray(_ref6, 2),
          n2 = _ref8[0],
          _ref8$1$group = _ref8[1].group,
          g2 = _ref8$1$group === void 0 ? '~ungroup' : _ref8$1$group;

      return g1 < g2 ? -1 : g1 > g2 ? 1 : n1 < n2 ? -1 : n1 > n2 ? 1 : 0;
    });
  }, [definitions]);
  (0, _react.useEffect)(function () {
    var _ref9 = sorted.find(function (_ref11) {
      var _ref12 = _slicedToArray(_ref11, 1),
          name = _ref12[0];

      return name === value;
    }) || sorted[0],
        _ref10 = _slicedToArray(_ref9, 2),
        matched = _ref10[1];

    setExpanded(matched.group || '~ungroup');
  }, [value]);
  return (0, _react.useMemo)(function () {
    return sorted.reduce(function (_ref13, _ref14) {
      var _ref15 = _slicedToArray(_ref13, 2),
          options = _ref15[0],
          groups = _ref15[1];

      var _ref16 = _slicedToArray(_ref14, 2),
          name = _ref16[0],
          _ref16$ = _ref16[1],
          desc = _ref16$.description,
          _ref16$$group = _ref16$.group,
          group = _ref16$$group === void 0 ? '~ungroup' : _ref16$$group;

      if (!groups.has(group)) {
        groups.add(group);
        options.push( /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
          key: group,
          className: classes.group,
          "data-group": group,
          component: _MenuItem["default"],
          onClick: function onClick() {
            return setExpanded(group);
          }
        }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
          role: "expand"
        }, expanded === group ? /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], {
          color: "primary"
        }) : /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], {
          color: "primary"
        })), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
          primaryTypographyProps: {
            color: 'primary'
          },
          primary: group === '~ungroup' ? dt('ttl-none-group') : group
        })));
      }

      options.push( /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        key: name,
        className: (0, _clsx["default"])(classes.option, {
          shown: expanded === group
        }),
        value: name,
        "data-description": desc
      }, desc));
      return [options, groups];
    }, [[], new Set()]);
  }, [sorted, expanded]);
}; // TODO: Components


var StructureBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref17, ref) {
  var superiorPathname = _ref17.superiorPathname,
      pathname = _ref17.pathname,
      definition = _ref17.definition,
      disabled = _ref17.disabled,
      value = _ref17.value,
      subheader = _ref17.subheader;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useSnackbar = (0, _notistack.useSnackbar)(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar;

  var _useWidgetContext = (0, _customs2.useWidgetContext)(),
      globalState = _useWidgetContext.state,
      onListenersActived = _useWidgetContext.onListenersActived;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      actived = _useContext.actived,
      $classes = _useContext.classes,
      refs = _useContext.refs,
      uid = _useContext.uid,
      description = _useContext.description,
      typePairs = _useContext.typePairs,
      props = _useContext.props,
      onActive = _useContext.onActive,
      onChange = _useContext.onChange,
      onPropSelect = _useContext.onPropSelect,
      onRefsChange = _useContext.onRefsChange;

  var _useBindingState = (0, _customs.useBindingState)(pathname),
      _useBindingState2 = _slicedToArray(_useBindingState, 1),
      binding = _useBindingState2[0];

  var classes = useStyles({
    dynamic: /^((array|object)(Of)?|func)$/.test(definition.type)
  }); // 根據 definition.type 決定子項目是從 prop value/definition.options 轉出

  var items = (0, _react.useMemo)(function () {
    var result = /^(array|object)(Of)?$/.test(definition.type) ? Object.keys(value || {}).map(function (itemName) {
      return [itemName, definition.options || {
        type: 'any'
      }];
    }) : Object.entries(definition.options || {});
    return (0, _sortBy2["default"])(result, [function (_ref18) {
      var _ref19 = _slicedToArray(_ref18, 2),
          type = _ref19[1].type;

      return PROP_CONTROLS.findIndex(function (_ref20) {
        var reg = _ref20.reg;
        return reg.type.test(type);
      });
    }, 0]);
  }, [definition, JSON.stringify(value)]); // 判斷是否有子項目正在展開狀態

  var _useMemo = (0, _react.useMemo)(function () {
    var paths = (0, _toPath2["default"])(pathname);

    var _ref21 = items.find(function (_ref23) {
      var _ref24 = _slicedToArray(_ref23, 1),
          $itemName = _ref24[0];

      return isActived(actived, [].concat(_toConsumableArray(paths), [$itemName]));
    }) || [],
        _ref22 = _slicedToArray(_ref21, 2),
        itemName = _ref22[0],
        itemOpts = _ref22[1];

    var itemPathname = (0, _customs.getPropPathname)(definition.type, pathname, itemName);

    var _ref25 = typePairs[itemPathname] || itemOpts || {},
        itemType = _ref25.type;

    return [!pathname || itemOpts && isActived(actived, paths), itemName, !itemOpts ? null : _objectSpread(_objectSpread({}, itemOpts), {}, {
      type: itemType
    })];
  }, [JSON.stringify(actived), typePairs, JSON.stringify(items)]),
      _useMemo2 = _slicedToArray(_useMemo, 3),
      open = _useMemo2[0],
      detailName = _useMemo2[1],
      detail = _useMemo2[2];

  (0, _react.useImperativeHandle)(ref, function () {
    return {};
  }, []);
  /** TODO: 事件類 props 編輯處理
   *  透過 onListenersActived 幫 Visualizer 加入事件觸發的提示訊息
   *  點擊提示訊息按鈕時，將會自動進入事件編輯畫面
   */

  (0, _react.useEffect)(function () {
    if (!detail) {
      onListenersActived([uid, items.reduce(function (result, _ref26) {
        var _ref27 = _slicedToArray(_ref26, 2),
            itemName = _ref27[0],
            itemOpts = _ref27[1];

        var itemPathname = (0, _customs.getPropPathname)(definition.type, pathname, itemName);

        var _ref28 = typePairs[itemPathname] || itemOpts,
            itemType = _ref28.type;

        return _objectSpread(_objectSpread({}, result), /^func$/.test(itemType) && /^on[A-Z].+$/.test(itemName) && _defineProperty({}, itemPathname, function () {
          for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
            e[_key] = arguments[_key];
          }

          var defaultRefs = {
            state: globalState,
            input: (0, _customs.getPureObject)(e),
            todo: {}
          };
          enqueueSnackbar("".concat(description, " Event: ").concat(itemPathname), {
            variant: 'success',
            action: /*#__PURE__*/_react["default"].createElement(_Button["default"], {
              variant: "text",
              size: "small",
              color: "inherit",
              onClick: function onClick() {
                var el = document.getElementById(itemPathname);
                el.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
                onPropSelect(itemPathname);
                (0, _delay2["default"])(function () {
                  onListenersActived(false);
                  onRefsChange(itemPathname, defaultRefs);
                }, 1000);
              }
            }, dt('btn-setting'))
          });
        }));
      }, {})]);
    }
  }, [detail, description, JSON.stringify(items)]);
  return /*#__PURE__*/_react["default"].createElement(_List["default"], {
    role: "structure",
    className: (0, _clsx["default"])(classes.root, $classes === null || $classes === void 0 ? void 0 : $classes.structure),
    subheader: /*#__PURE__*/_react["default"].createElement(_ListSubheader["default"], {
      disableGutters: true,
      className: (0, _clsx["default"])(classes.subheader, $classes === null || $classes === void 0 ? void 0 : $classes.subheader),
      component: _AppBar["default"],
      color: "inherit",
      elevation: 0
    }, subheader, pathname && /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], _extends({
      role: "subheader-bar",
      className: classes.breadcrumbs,
      variant: "dense"
    }, pathname && {
      component: _Button["default"],
      startIcon: /*#__PURE__*/_react["default"].createElement(_ArrowBack["default"], null),
      onClick: function onClick() {
        return onActive((0, _toPath2["default"])(superiorPathname));
      }
    }), pathname), /^((array|object)(Of)?|func)$/.test(definition.type) && /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-add-property')
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      color: "primary",
      disabled: binding || disabled,
      onClick: function onClick() {
        var path = (0, _toPath2["default"])(pathname);

        if (definition.type.startsWith('array')) {
          var newValue = (value || []).concat(null);
          onChange({
            props: pathname ? (0, _set2["default"])(props, path, newValue) : newValue
          });
        } else if (definition.type.startsWith('object')) {
          var _newValue = _objectSpread(_objectSpread({}, value), {}, _defineProperty({}, "*".concat(Object.keys(value || {}).length), null));

          onChange({
            props: pathname ? (0, _set2["default"])(props, path, _newValue) : _newValue
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
    refs: refs,
    superiorPathname: pathname,
    superiorType: definition.type,
    propName: detailName,
    definition: detail
  }) : /*#__PURE__*/_react["default"].createElement(StructureProp, {
    superiorPathname: pathname,
    superiorType: definition.type,
    propName: detailName,
    definition: typePairs[(0, _customs.getPropPathname)(definition.type, pathname, detailName)] || detail
  })), (!detail || !open) && items.map(function (_ref30) {
    var _ref31 = _slicedToArray(_ref30, 2),
        itemName = _ref31[0],
        itemOpts = _ref31[1];

    var _ref32 = PROP_CONTROLS.find(function (_ref33) {
      var _ref33$reg = _ref33.reg,
          type = _ref33$reg.type,
          _ref33$reg$name = _ref33$reg.name,
          name = _ref33$reg$name === void 0 ? /^.+$/ : _ref33$reg$name;
      var itemType = itemOpts.type;
      return type.test(itemType) && name.test(itemName);
    }) || {},
        _ref32$component = _ref32.component,
        PropControl = _ref32$component === void 0 ? null : _ref32$component;

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

function PropsEditor(_ref34) {
  var InputStyles = _ref34.InputStyles,
      $classes = _ref34.classes,
      state = _ref34.state,
      overrideMixedOptions = _ref34.overrideMixedOptions,
      overridePropControl = _ref34.overridePropControl,
      defaultValue = _ref34.value,
      handleChange = _ref34.onChange,
      onElementDispatch = _ref34.onElementDispatch,
      onStateBinding = _ref34.onStateBinding;

  var _useLocales2 = (0, _locales.useLocales)(),
      dt = _useLocales2.getFixedT;

  var _useSnackbar2 = (0, _notistack.useSnackbar)(),
      closeSnackbar = _useSnackbar2.closeSnackbar;

  var _useWidgetContext2 = (0, _customs2.useWidgetContext)(),
      definitions = _useWidgetContext2.definitions,
      widgets = _useWidgetContext2.widgets;

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      actived = _useState4[0],
      setActived = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      decorating = _useState6[0],
      setDecorating = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      expanded = _useState8[0],
      setExpanded = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      refs = _useState10[0],
      setRefs = _useState10[1];

  var _useState11 = (0, _react.useState)(null),
      _useState12 = _slicedToArray(_useState11, 2),
      selected = _useState12[0],
      setSelected = _useState12[1];

  var widget = widgets.find(function (_ref35) {
    var uid = _ref35.uid;
    return uid === defaultValue;
  }) || {};
  var importBy = widget.importBy,
      description = widget.description,
      typePairs = widget.typePairs,
      props = widget.props,
      handles = widget.handles,
      decoration = widget.decoration;
  var definition = useDefinitionWithDecoration(definitions, importBy, decoration);
  var substratum = (0, _customs2.useSubstratumWidgets)({
    superior: defaultValue
  });
  var widgetOptions = useWidgetOptionsWithGroup(dt, definitions === null || definitions === void 0 ? void 0 : definitions.props, importBy);
  var classes = useStyles();
  (0, _react.useEffect)(function () {
    closeSnackbar();
  }, [actived]);
  return /*#__PURE__*/_react["default"].createElement(_customs.ProptypesEditorContext.Provider, {
    value: {
      InputStyles: InputStyles,
      actived: actived,
      classes: $classes,
      disableHandleRefs: false,
      override: {
        control: overridePropControl,
        mixed: overrideMixedOptions
      },
      refs: refs,
      selected: selected,
      description: description,
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
      onPropSelect: setSelected,
      onStateBinding: onStateBinding,
      onRefsChange: function onRefsChange(pathname, newRefs) {
        setSelected(null);
        setActived((0, _toPath2["default"])(pathname));
        setRefs(newRefs);
      }
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
    startIcon: /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], {
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
    definition: definition,
    subheader: /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
      role: "subheader-bar",
      className: "main",
      variant: "dense"
    }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
      SelectProps: {
        open: expanded,
        onOpen: function onOpen() {
          return setExpanded(true);
        },
        onClose: function onClose(_ref36) {
          var currentTarget = _ref36.currentTarget;
          return setExpanded(Boolean(currentTarget.dataset.group));
        }
      },
      fullWidth: true,
      select: true,
      label: dt('lbl-import-by'),
      value: importBy || '',
      onChange: function onChange(_ref37) {
        var value = _ref37.target.value,
            currentTarget = _ref37.currentTarget;

        if (value && currentTarget.dataset.description) {
          var _definitions$props2;

          setExpanded(false);
          handleChange({
            uid: defaultValue,
            superior: widget.superior,
            description: "".concat(currentTarget.dataset.description, "_").concat(Math.floor(Math.random() * 10000)),
            importBy: value,
            decoration: [],
            props: (0, _cloneDeep2["default"])(definitions === null || definitions === void 0 ? void 0 : (_definitions$props2 = definitions.props) === null || _definitions$props2 === void 0 ? void 0 : _definitions$props2[value].defaultProps) || {},
            handles: {}
          });
        }
      },
      InputProps: {
        // TODO: HOC Decoration
        startAdornment: importBy && (definitions === null || definitions === void 0 ? void 0 : definitions.decorations) && /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
          position: "start"
        }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: dt('btn-decoration')
        }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
          size: "small",
          color: "primary",
          onClick: function onClick() {
            return setDecorating(true);
          }
        }, /*#__PURE__*/_react["default"].createElement(_BookmarksOutlined["default"], null))), /*#__PURE__*/_react["default"].createElement(_decorationEditor["default"], {
          StructureComponent: StructureProp,
          classes: {
            subheader: classes.subheader
          },
          open: decorating,
          value: decoration,
          onClose: function onClose() {
            return setDecorating(false);
          },
          onConfirm: function onConfirm(newDecoration) {
            handleChange(_objectSpread(_objectSpread({}, widget), {}, {
              decoration: newDecoration
            }));
            setDecorating(false);
          }
        }))
      }
    }), widgetOptions), /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
      fullWidth: true,
      disabled: !importBy,
      label: dt('lbl-description'),
      value: description || '',
      onChange: function onChange(_ref38) {
        var value = _ref38.target.value;
        return handleChange(_objectSpread(_objectSpread({}, widget), {}, {
          description: value
        }));
      }
    })))
  }));
}