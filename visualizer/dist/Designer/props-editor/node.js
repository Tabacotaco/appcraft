"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _shortid = require("shortid");

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _Undo = _interopRequireDefault(require("@material-ui/icons/Undo"));

var _Widgets = _interopRequireDefault(require("@material-ui/icons/Widgets"));

var _iconMenuButton = _interopRequireWildcard(require("../icon-menu-button"));

var _withPropitem = _interopRequireDefault(require("./with-propitem"));

var _customs = require("../_customs");

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

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      minHeight: theme.spacing(5)
    },
    required: {
      color: theme.palette.secondary.main
    }
  };
});

var NodeBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var pathname = _ref.pathname,
      propName = _ref.propName,
      definition = _ref.definition,
      disabled = _ref.disabled;

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      InputStyles = _useContext.InputStyles,
      $classes = _useContext.classes,
      uid = _useContext.uid,
      substratum = _useContext.substratum,
      onChange = _useContext.onChange,
      onElementDispatch = _useContext.onElementDispatch;

  var _substratum$pathname = substratum[pathname],
      nodes = _substratum$pathname === void 0 ? [] : _substratum$pathname;

  var _nodes = _slicedToArray(nodes, 1),
      _nodes$ = _nodes[0],
      node = _nodes$ === void 0 ? null : _nodes$;

  var classes = useStyles();
  (0, _react.useImperativeHandle)(ref, function () {
    return {};
  }, []);

  var handleNodeActived = function handleNodeActived(_e) {
    var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : nodes;

    switch (target.length) {
      case 0:
        {
          var appendUid = (0, _shortid.generate)();
          onElementDispatch([{
            type: 'WIDGET_APPEND',
            target: uid,
            value: pathname,
            options: {
              uid: appendUid
            }
          }, {
            type: 'SET_STATE',
            target: 'actived',
            value: appendUid
          }]);
          return false;
        }

      case 1:
        {
          onElementDispatch({
            type: 'SET_STATE',
            target: 'actived',
            value: target[0].uid
          });
          return false;
        }

      default:
        return true;
    }
  };

  var handleChange = (0, _react.useMemo)(function () {
    return (0, _debounce2["default"])(function (_ref2) {
      var value = _ref2.target.value;

      if (!node) {
        onElementDispatch({
          type: 'WIDGET_APPEND',
          target: uid,
          value: pathname,
          options: {
            uid: (0, _shortid.generate)(),
            props: value
          }
        });
      } else {
        onChange(_objectSpread(_objectSpread({}, node), {}, {
          props: value
        }));
      }
    }, 1200) // eslint-disable-next-line react-hooks/exhaustive-deps
    ;
  }, [uid, pathname, node]);
  return /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
    fullWidth: true,
    required: definition.required,
    disabled: disabled || (0, _isPlainObject2["default"])(node === null || node === void 0 ? void 0 : node.props),
    label: propName,
    defaultValue: !(0, _isPlainObject2["default"])(node === null || node === void 0 ? void 0 : node.props) && (node === null || node === void 0 ? void 0 : node.props) || '',
    onChange: handleChange,
    InputLabelProps: _objectSpread(_objectSpread({}, (0, _isPlainObject2["default"])(node === null || node === void 0 ? void 0 : node.props) && {
      shrink: false
    }), {}, {
      classes: {
        asterisk: (0, _clsx["default"])(classes.required, $classes === null || $classes === void 0 ? void 0 : $classes.required)
      }
    }),
    InputProps: {
      className: (0, _clsx["default"])(classes.root, $classes === null || $classes === void 0 ? void 0 : $classes.input),
      endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
        position: "end"
      }, (!(node !== null && node !== void 0 && node.props) || (0, _isPlainObject2["default"])(node === null || node === void 0 ? void 0 : node.props)) && /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
        size: "small",
        color: "primary",
        disabled: disabled,
        tooltip: dt(nodes.length === 0 ? 'btn-create-element' : 'btn-view-element', {
          propName: propName
        }),
        icon: /*#__PURE__*/_react["default"].createElement(_Widgets["default"], null),
        onClick: handleNodeActived
      }, nodes.map(function (item) {
        return /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
          key: item.uid,
          text: item.description,
          onClick: function onClick(e) {
            return handleNodeActived(e, [item]);
          }
        });
      })), typeof (node === null || node === void 0 ? void 0 : node.props) === 'string' && node.props.trim() && /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
        title: dt('btn-reset')
      }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
        size: "small",
        color: "secondary",
        onClick: function onClick() {
          return onElementDispatch({
            type: 'WIDGET_DESTROY',
            target: node.uid
          });
        }
      }, /*#__PURE__*/_react["default"].createElement(_Undo["default"], null))))
    }
  }));
});

NodeBase.displayName = 'NodeBase';

var _default = (0, _withPropitem["default"])('node', NodeBase);

exports["default"] = _default;