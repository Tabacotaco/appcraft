"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _notistack = require("notistack");

var _dateFns = _interopRequireDefault(require("@date-io/date-fns"));

var _clsx = _interopRequireDefault(require("clsx"));

var _shortid = require("shortid");

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _ButtonGroup = _interopRequireDefault(require("@material-ui/core/ButtonGroup"));

var _Container = _interopRequireDefault(require("@material-ui/core/Container"));

var _Drawer = _interopRequireDefault(require("@material-ui/core/Drawer"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _MuiPickersUtilsProvider = _interopRequireDefault(require("@material-ui/pickers/MuiPickersUtilsProvider"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _Check = _interopRequireDefault(require("@material-ui/icons/Check"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _LabelImportant = _interopRequireDefault(require("@material-ui/icons/LabelImportant"));

var _elementStructure = _interopRequireDefault(require("./element-structure"));

var _propsEditor = _interopRequireDefault(require("./props-editor"));

var _todoEditor = _interopRequireDefault(require("./todo-editor"));

var _locales = _interopRequireWildcard(require("../_utils/locales"));

var _customs = require("./_customs");

var _Visualizer = require("../Visualizer");

var _excluded = ["type"],
    _excluded2 = ["uid", "path"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LocalesEn = {
  "btn-add-condition": "Add Condition",
  "btn-add-decoration": "Add Feature Decoration",
  "btn-add-map-pairs": "Add Value Paired Setting",
  "btn-add-map-source": "Add Map Source",
  "btn-add-property": "Add Property",
  "btn-add-request-header": "Add Header",
  "btn-add-request-search": "Add URL Search Parameter",
  "btn-add-todo": "Add Todo",
  "btn-add-treatment": "Add Treatment",
  "btn-add-variable": "Add Variable",
  "btn-append-variable": "Append Variable",
  "btn-cancel": "Cancel",
  "btn-condition": "Condition Setting",
  "btn-confirm": "Confirm",
  "btn-create-element": "Create Element",
  "btn-decoration": "Feature Decoration",
  "btn-edit-pairs": "Set Data Source",
  "btn-edit-ready-handle": "Initial Todos Setting",
  "btn-edit-request-body": "Request Body Setting",
  "btn-edit-search": "Parameter Setting",
  "btn-edit-source": "Source Setting",
  "btn-edit-variable": "Variable Setting",
  "btn-naming": "Rename Property",
  "btn-property-setting": "Property Setting",
  "btn-remove-condition": "Remove Condition",
  "btn-remove-element": "Destroy Element",
  "btn-remove-pairs": "Remove Value Paired",
  "btn-remove-property": "Destroy Property",
  "btn-remove-request-header": "Remove Header",
  "btn-remove-search": "Remove Parameter",
  "btn-remove-source": "Remove Source",
  "btn-remove-variable": "Remove Variable",
  "btn-reset": "Reset",
  "btn-reset-treatment": "Reset Treatment",
  "btn-setting": "Setting",
  "btn-state-binding": "As Global State",
  "btn-view-element": "View {{ propName.charAt(0).toUpperCase() + propName.slice(1) }} Content",
  "lbl-calculator": "Calculator Template",
  "lbl-condition-source": "Source",
  "lbl-condition-value": "Target",
  "lbl-decoration": "Decoration",
  "lbl-description": "Description",
  "lbl-header-content": "Content",
  "lbl-header-name": "Name",
  "lbl-import-by": "Widget",
  "lbl-initial-value": "Initial Value",
  "lbl-method": "Method",
  "lbl-operator": "Operator",
  "lbl-preview-treatment": "Treatment Result Preview: {{ value }}",
  "lbl-preview-url": "URL Preview: {{ url }}",
  "lbl-property-name": "Property Name{{ propName ? (`(${propName})`) : '' }}",
  "lbl-request-body": "Request Body",
  "lbl-search-name": "Parameter Name",
  "lbl-set-to-state": "Set to",
  "lbl-todo-type": "Todo Type",
  "lbl-url": "URL",
  "lbl-variable": "Variable Setting",
  "opt-calculator-todo": "Calculator",
  "opt-map-todo": "Data Map",
  "opt-none": "None",
  "opt-request-todo": "Request",
  "opt-variable-array": "Array",
  "opt-variable-boolean": "Boolean",
  "opt-variable-date": "Date",
  "opt-variable-input": "Event Input",
  "opt-variable-number": "Number",
  "opt-variable-object": "Object",
  "opt-variable-source": "Map Source",
  "opt-variable-state": "Global State",
  "opt-variable-string": "String",
  "opt-variable-todo": "Todo Result",
  "ttl-arguments": "Treatment Arguments",
  "ttl-condition-setting": "Condition Setting",
  "ttl-decoration": "Feature Decoration Setting",
  "ttl-elements": "Elements",
  "ttl-initial-array": "Initital Array",
  "ttl-initial-object": "Initital Object",
  "ttl-invalid-decoration": "Invalid Decoration",
  "ttl-map-pairs": "Paired Values",
  "ttl-map-source": "Map Sources",
  "ttl-matched": "Valid",
  "ttl-no-condition": "No Condition",
  "ttl-no-decoration": "No Decoration",
  "ttl-no-source-actived": "No Actived Source",
  "ttl-none-group": "None Group",
  "ttl-pairing-setting": "Paired Values Setting",
  "ttl-pairpath-placeholder": "Enter data field name/path",
  "ttl-preview-condition-result": "Result Preview",
  "ttl-properties": "Widget Properties",
  "ttl-request-header": "Request Header",
  "ttl-request-search": "URL Search Parameters",
  "ttl-treatments": "Treatments",
  "ttl-trigger-first": "Please trigger this event to get the relevant information.",
  "ttl-unmatched": "Not Matched",
  "ttl-variable-setting": "Variable Setting",
  "ttl-variables": "Variables"
};
var LocalesZh = {
  "btn-add-condition": "\u65B0\u589E\u57F7\u884C\u689D\u4EF6",
  "btn-add-decoration": "\u65B0\u589E\u9032\u968E\u529F\u80FD",
  "btn-add-map-source": "\u52A0\u5165\u8CC7\u6599\u4F86\u6E90",
  "btn-add-map-pairs": "\u589E\u52A0\u8CC7\u6599\u8F49\u63DB\u8A2D\u5B9A",
  "btn-add-property": "\u65B0\u589E\u5C6C\u6027",
  "btn-add-request-header": "\u65B0\u589E\u8868\u982D\u8A2D\u5B9A",
  "btn-add-request-search": "\u65B0\u589E\u7DB2\u5740\u53C3\u6578",
  "btn-add-todo": "\u65B0\u589E\u4E8B\u4EF6\u8655\u7406",
  "btn-add-treatment": "\u65B0\u589E\u8F49\u63DB\u8655\u7406",
  "btn-add-variable": "\u5EFA\u7ACB\u65B0\u53C3\u6578",
  "btn-append-variable": "\u52A0\u5165\u6307\u5B9A\u53C3\u6578",
  "btn-cancel": "\u53D6\u6D88",
  "btn-condition": "\u89F8\u767C\u689D\u4EF6",
  "btn-confirm": "\u78BA\u5B9A",
  "btn-create-element": "\u65B0\u589E\u7D44\u4EF6\u5143\u7D20",
  "btn-decoration": "\u9032\u968E\u529F\u80FD",
  "btn-edit-pairs": "\u8A2D\u5B9A\u8CC7\u6599\u4F86\u6E90",
  "btn-edit-ready-handle": "\u521D\u59CB\u8655\u7406\u8A2D\u5B9A",
  "btn-edit-request-body": "\u7DE8\u8F2F\u8ACB\u6C42\u8CC7\u6599\u5167\u5BB9",
  "btn-edit-search": "\u7DE8\u8F2F\u7DB2\u5740\u53C3\u6578",
  "btn-edit-source": "\u4F86\u6E90\u8A2D\u5B9A",
  "btn-edit-variable": "\u7DE8\u8F2F\u53C3\u6578",
  "btn-naming": "\u91CD\u65B0\u547D\u540D\u5C6C\u6027",
  "btn-property-setting": "\u5C6C\u6027\u8A2D\u5B9A",
  "btn-remove-condition": "\u79FB\u9664\u689D\u4EF6",
  "btn-remove-element": "\u522A\u9664\u7D44\u4EF6\u5143\u7D20",
  "btn-remove-pairs": "\u79FB\u9664\u8F49\u63DB\u8A2D\u5B9A",
  "btn-remove-property": "\u79FB\u9664\u5C6C\u6027",
  "btn-remove-request-header": "\u522A\u9664\u8868\u982D\u8A2D\u5B9A",
  "btn-remove-search": "\u522A\u9664\u7DB2\u5740\u53C3\u6578",
  "btn-remove-source": "\u79FB\u9664\u4F86\u6E90",
  "btn-remove-variable": "\u79FB\u9664\u53C3\u6578",
  "btn-reset": "\u6E05\u9664",
  "btn-reset-treatment": "\u6E05\u9664\u5168\u90E8\u8F49\u63DB\u8655\u7406",
  "btn-setting": "\u8A2D\u5B9A",
  "btn-state-binding": "\u8A2D\u7F6E\u70BA\u53EF\u8B80\u5BEB\u7684\u5168\u57DF\u8CC7\u8A0A",
  "btn-view-element": "\u67E5\u770B {{ propName.charAt(0).toUpperCase() + propName.slice(1) }} \u7684\u7D44\u4EF6\u5143\u7D20\u5167\u5BB9",
  "lbl-calculator": "\u904B\u7B97\u6A21\u677F",
  "lbl-condition-source": "\u5224\u65B7\u4F86\u6E90",
  "lbl-condition-value": "\u76EE\u6A19\u503C",
  "lbl-decoration": "\u9032\u968E\u529F\u80FD",
  "lbl-description": "\u63CF\u8FF0",
  "lbl-header-content": "\u5167\u5BB9",
  "lbl-header-name": "\u540D\u7A31",
  "lbl-import-by": "\u7D44\u4EF6",
  "lbl-initial-value": "\u521D\u59CB\u503C",
  "lbl-method": "\u8ACB\u6C42\u65B9\u6CD5",
  "lbl-operator": "\u904B\u7B97\u5B50",
  "lbl-preview-treatment": "\u8F49\u63DB\u7D50\u679C\u9810\u89BD: {{ value }}",
  "lbl-preview-url": "\u7DB2\u5740\u9810\u89BD: {{ url }}",
  "lbl-property-name": "\u5C6C\u6027\u540D\u7A31{{ propName ? (`(${propName})`) : '' }}",
  "lbl-request-body": "\u8ACB\u6C42\u8CC7\u6599\u5167\u5BB9",
  "lbl-search-name": "\u540D\u7A31",
  "lbl-set-to-state": "\u56DE\u5BEB\u81F3",
  "lbl-todo-type": "\u8655\u7406\u985E\u578B",
  "lbl-url": "\u7DB2\u5740",
  "lbl-variable": "\u53C3\u6578\u8A2D\u5B9A",
  "opt-calculator-todo": "\u904B\u7B97",
  "opt-map-todo": "\u8CC7\u6599\u8F49\u63DB",
  "opt-none": "\u5C1A\u672A\u8A2D\u5B9A",
  "opt-request-todo": "\u767C\u9001\u8ACB\u6C42",
  "opt-variable-array": "\u9663\u5217",
  "opt-variable-boolean": "\u5E03\u6797\u503C",
  "opt-variable-date": "\u65E5\u671F/\u6642\u9593",
  "opt-variable-input": "\u4E8B\u4EF6\u8CC7\u8A0A",
  "opt-variable-number": "\u6578\u5B57",
  "opt-variable-object": "\u7269\u4EF6",
  "opt-variable-source": "\u8CC7\u6599\u4F86\u6E90",
  "opt-variable-state": "\u5168\u57DF\u8CC7\u8A0A",
  "opt-variable-string": "\u5B57\u4E32",
  "opt-variable-todo": "\u4E8B\u4EF6\u57F7\u884C\u7D50\u679C",
  "ttl-arguments": "\u6307\u5B9A\u8F49\u63DB\u8B8A\u6578",
  "ttl-condition-setting": "\u89F8\u767C\u689D\u4EF6\u5B9A\u7FA9",
  "ttl-decoration": "\u9032\u968E\u529F\u80FD\u8A2D\u5B9A",
  "ttl-elements": "\u7D44\u4EF6\u5143\u7D20\u5217\u8868",
  "ttl-initial-array": "\u521D\u59CB\u9663\u5217",
  "ttl-initial-object": "\u521D\u59CB\u7269\u4EF6",
  "ttl-invalid-decoration": "\u7121\u6548\u8A2D\u5B9A",
  "ttl-map-pairs": "\u8CC7\u6599\u8F49\u63DB\u8A2D\u5B9A",
  "ttl-map-source": "\u8CC7\u6599\u4F86\u6E90",
  "ttl-matched": "\u7D50\u679C\u543B\u5408",
  "ttl-no-condition": "\u5C1A\u672A\u6307\u5B9A\u57F7\u884C\u689D\u4EF6",
  "ttl-no-decoration": "\u5C1A\u672A\u8A2D\u7F6E\u9032\u968E\u529F\u80FD",
  "ttl-no-source-actived": "\u5C1A\u672A\u9078\u64C7\u8CC7\u6599\u4F86\u6E90",
  "ttl-none-group": "\u672A\u5206\u985E",
  "ttl-pairing-setting": "\u8CC7\u6599\u4F86\u6E90\u8A2D\u5B9A",
  "ttl-pairpath-placeholder": "\u76EE\u6A19\u5BEB\u5165\u6B04\u4F4D\u8DEF\u5F91",
  "ttl-preview-condition-result": "\u5224\u65B7\u7D50\u679C\u9810\u89BD",
  "ttl-properties": "\u7D44\u4EF6\u5C6C\u6027\u8A2D\u5B9A",
  "ttl-request-header": "\u8ACB\u6C42\u8868\u982D\u5B9A\u7FA9",
  "ttl-request-search": "\u7DB2\u5740\u53C3\u6578\u5B9A\u7FA9",
  "ttl-treatments": "\u53C3\u6578\u8F49\u63DB\u8A2D\u5B9A",
  "ttl-trigger-first": "\u8ACB\u5148\u89F8\u767C\u8A72\u4E8B\u4EF6\uFF0C\u5DF2\u53D6\u5F97\u76F8\u95DC\u904B\u7B97\u53C3\u6578",
  "ttl-unmatched": "\u7D50\u679C\u4E0D\u543B\u5408",
  "ttl-variable-setting": "\u53C3\u6578\u5B9A\u7FA9",
  "ttl-variables": "\u53C3\u6578\u5217\u8868"
}; // TODO: TS Namespace

var AppcraftDesigner;

(function (_AppcraftDesigner) {
  var def;

  (function (_def) {
    ;
    ;
  })(def || (def = _AppcraftDesigner.def || (_AppcraftDesigner.def = {})));

  var hooks;

  (function (_hooks) {})(hooks || (hooks = _AppcraftDesigner.hooks || (_AppcraftDesigner.hooks = {})));
})(AppcraftDesigner || (AppcraftDesigner = {}));

var ROOT_ID = (0, _shortid.generate)(); // TODO: Custom Hooks

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      overflow: 'hidden'
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      paddingRight: theme.spacing(42),
      '& > .AppcraftDesigner-content': {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    },
    drawer: {
      position: 'absolute',
      borderLeft: "1px solid ".concat(theme.palette.divider),
      overflow: 'hidden !important',
      width: 0,
      zIndex: theme.zIndex.drawer,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      '&.open': {
        width: theme.spacing(42),
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen
        })
      }
    },
    appbar: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      '&.AppcraftDesigner-footerbar': {
        marginTop: 'auto',
        bottom: 0,
        '& > * > button': {
          borderTopLeftRadius: '0 !important',
          borderTopRightRadius: '0 !important'
        }
      }
    },
    structure: {
      height: '100%'
    },
    title: {
      '&:hover .AppcraftDesigner-tagIcon': {
        color: theme.palette.primary.main
      }
    }
  };
}); // TODO: Component

var Designer = function Designer(_ref) {
  var InputStyles = _ref.InputStyles,
      actions = _ref.actions,
      $classes = _ref.classes,
      definitions = _ref.definitions,
      defaultValue = _ref.value,
      widgetProxy = _ref.widgetProxy,
      overrideMixedOptions = _ref.overrideMixedOptions,
      overridePropControl = _ref.overridePropControl,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _ref2 = (0, _customs.useControlValue)(defaultValue || {}),
      _ref3 = _slicedToArray(_ref2, 3),
      CONTROL_ACTION = _ref3[0],
      _ref3$ = _ref3[1],
      actived = _ref3$.actived,
      subject = _ref3$.subject,
      ready = _ref3$.ready,
      globalState = _ref3$.state,
      widgets = _ref3$.widgets,
      dispatch = _ref3[2];

  var classes = useStyles();
  var state = (0, _react.useMemo)(function () {
    return Object.entries(globalState).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          widgetUid = _ref5[0],
          list = _ref5[1];

      return list.map(function (widgetState) {
        return _objectSpread(_objectSpread({}, widgetState), {}, {
          widgetUid: widgetUid,
          widgetDesc: widgets.find(function (_ref6) {
            var uid = _ref6.uid;
            return uid === widgetUid;
          }).description
        });
      });
    }).flat();
  }, [globalState, widgets]);
  var styles = (0, _react.useMemo)(function () {
    return {
      color: (InputStyles === null || InputStyles === void 0 ? void 0 : InputStyles.color) || 'primary',
      margin: InputStyles === null || InputStyles === void 0 ? void 0 : InputStyles.margin,
      size: (InputStyles === null || InputStyles === void 0 ? void 0 : InputStyles.size) || 'small',
      variant: (InputStyles === null || InputStyles === void 0 ? void 0 : InputStyles.variant) || 'outlined'
    };
  }, [InputStyles]);
  return /*#__PURE__*/_react["default"].createElement(_notistack.SnackbarProvider, {
    classes: {
      root: 'xxx'
    },
    maxSnack: 4,
    autoHideDuration: 50000
  }, /*#__PURE__*/_react["default"].createElement(_Visualizer.WidgetWrapper, {
    definitions: definitions,
    proxy: widgetProxy,
    state: globalState,
    widgets: widgets
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    disableGutters: true,
    maxWidth: false,
    className: (0, _clsx["default"])(classes.root, $classes === null || $classes === void 0 ? void 0 : $classes.root)
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    disableGutters: true,
    maxWidth: false,
    className: classes.container
  }, /*#__PURE__*/_react["default"].createElement(_Container["default"], {
    disableGutters: true,
    maxWidth: false,
    className: "AppcraftDesigner-content"
  }, /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    position: "static",
    color: "inherit",
    className: (0, _clsx["default"])(classes.appbar, $classes === null || $classes === void 0 ? void 0 : $classes.header),
    elevation: 0
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
    variant: "dense"
  }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
    fullWidth: true,
    className: classes.title,
    variant: "standard",
    size: "small",
    value: subject,
    onChange: function onChange(_ref7) {
      var value = _ref7.target.value;
      return dispatch({
        type: CONTROL_ACTION.SET_STATE,
        target: 'subject',
        value: value
      });
    },
    InputProps: {
      disableUnderline: true,
      startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "start"
      }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: dt('lbl-description')
      }, /*#__PURE__*/_react["default"].createElement(_LabelImportant["default"], {
        className: "AppcraftDesigner-tagIcon"
      })))
    }
  }), actions)), /*#__PURE__*/_react["default"].createElement(_Visualizer.WidgetImplement, {
    uid: ROOT_ID,
    ready: ready,
    lazyDeps: [Object.keys(globalState), widgets, ready]
  })), /*#__PURE__*/_react["default"].createElement(_Drawer["default"], {
    anchor: "right",
    variant: "permanent",
    classes: {
      paper: (0, _clsx["default"])(classes.drawer, $classes === null || $classes === void 0 ? void 0 : $classes.drawer, {
        open: Boolean(actived)
      })
    },
    open: Boolean(actived)
  }, /*#__PURE__*/_react["default"].createElement(_MuiPickersUtilsProvider["default"], {
    utils: _dateFns["default"]
  }, actived && (actived === ROOT_ID ? /*#__PURE__*/_react["default"].createElement(_customs.ProptypesEditorContext.Provider, {
    value: {
      InputStyles: styles,
      uid: ROOT_ID,
      handles: {
        onReady: ready
      },
      state: state,
      onActive: function onActive() {
        return dispatch({
          type: CONTROL_ACTION.SET_STATE,
          target: 'actived',
          value: null
        });
      },
      // @ts-ignore
      onChange: function onChange(_ref8) {
        var handles = _ref8.handles;
        return dispatch({
          type: CONTROL_ACTION.RESET_READY,
          value: (handles === null || handles === void 0 ? void 0 : handles.onReady) || []
        });
      },
      classes: {
        structure: (0, _clsx["default"])(classes.structure, $classes === null || $classes === void 0 ? void 0 : $classes.structure),
        drawerPaper: (0, _clsx["default"])(classes.drawer, $classes === null || $classes === void 0 ? void 0 : $classes.drawer)
      }
    }
  }, /*#__PURE__*/_react["default"].createElement(_todoEditor["default"], {
    refs: {
      state: globalState,
      input: [],
      todo: {}
    },
    definition: {
      type: 'func'
    },
    propName: "onReady"
  })) : /*#__PURE__*/_react["default"].createElement(_propsEditor["default"], {
    InputStyles: styles,
    state: state,
    value: actived,
    overrideMixedOptions: overrideMixedOptions,
    overridePropControl: overridePropControl,
    classes: {
      structure: (0, _clsx["default"])(classes.structure, $classes === null || $classes === void 0 ? void 0 : $classes.structure),
      drawerPaper: (0, _clsx["default"])(classes.drawer, $classes === null || $classes === void 0 ? void 0 : $classes.drawer)
    },
    onChange: function onChange(e) {
      return dispatch({
        type: CONTROL_ACTION.WIDGET_MODIFY,
        value: e
      });
    },
    onElementDispatch: function onElementDispatch(e) {
      return dispatch((Array.isArray(e) ? e : [e]).map(function (_ref9) {
        var type = _ref9.type,
            param = _objectWithoutProperties(_ref9, _excluded);

        return _objectSpread({
          type: CONTROL_ACTION[type]
        }, param);
      }));
    },
    onStateBinding: function onStateBinding(_ref10, checked) {
      var target = _ref10.uid,
          value = _ref10.path,
          options = _objectWithoutProperties(_ref10, _excluded2);

      return dispatch({
        type: CONTROL_ACTION[checked ? 'STATE_APPEND' : 'STATE_DESTROY'],
        target: target,
        value: value,
        options: options
      });
    }
  })))), /*#__PURE__*/_react["default"].createElement(_Drawer["default"], {
    anchor: "right",
    variant: "permanent",
    classes: {
      paper: (0, _clsx["default"])(classes.drawer, $classes === null || $classes === void 0 ? void 0 : $classes.drawer, {
        open: Boolean(!actived)
      })
    },
    open: Boolean(!actived)
  }, /*#__PURE__*/_react["default"].createElement(_elementStructure["default"], {
    open: Boolean(!actived),
    onActived: function onActived(value) {
      return dispatch({
        type: CONTROL_ACTION.SET_STATE,
        target: 'actived',
        value: value
      });
    },
    onAppend: function onAppend(e) {
      return dispatch(_objectSpread(_objectSpread({}, e), {}, {
        type: CONTROL_ACTION.WIDGET_APPEND
      }));
    },
    onDestroy: function onDestroy(target) {
      return dispatch({
        type: CONTROL_ACTION.WIDGET_DESTROY,
        target: target
      });
    },
    onReadyEdit: function onReadyEdit() {
      return dispatch({
        type: CONTROL_ACTION.SET_STATE,
        target: 'actived',
        value: ROOT_ID
      });
    }
  }))), (onCancel instanceof Function || onConfirm instanceof Function) && /*#__PURE__*/_react["default"].createElement(_AppBar["default"], {
    component: "footer",
    position: "sticky",
    color: "inherit",
    className: (0, _clsx["default"])(classes.appbar, $classes === null || $classes === void 0 ? void 0 : $classes.footer, 'AppcraftDesigner-footerbar'),
    elevation: 0
  }, /*#__PURE__*/_react["default"].createElement(_Toolbar["default"], {
    disableGutters: true,
    fullWidth: true,
    variant: "dense",
    size: "large",
    component: _ButtonGroup["default"]
  }, onCancel instanceof Function && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "default",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Close["default"], null),
    onClick: onCancel
  }, dt('btn-cancel')), onConfirm instanceof Function && /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    variant: "contained",
    color: "primary",
    startIcon: /*#__PURE__*/_react["default"].createElement(_Check["default"], null),
    onClick: function onClick(e) {
      return onConfirm(e, {
        subject: subject,
        ready: ready,
        state: globalState,
        widgets: widgets
      });
    }
  }, dt('btn-confirm')))))));
};

Designer.displayName = 'AppcraftDesigner';

var _default = (0, _locales["default"])({
  en: LocalesEn,
  'zh-Hant': LocalesZh
})(Designer);

exports["default"] = _default;