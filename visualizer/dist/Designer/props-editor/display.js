"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _styles = require("@material-ui/core/styles");

var _AccountTree = _interopRequireDefault(require("@material-ui/icons/AccountTree"));

var _DeviceHub = _interopRequireDefault(require("@material-ui/icons/DeviceHub"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _withPropitem = _interopRequireDefault(require("./with-propitem"));

var _customs = require("../_customs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react-hooks/exhaustive-deps */

/* eslint-disable react/prop-types */
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      '& > *:first-child': {
        marginRight: theme.spacing(1.5)
      }
    }
  };
});

var DisplayBase = /*#__PURE__*/_react["default"].forwardRef(function (_ref, ref) {
  var pathname = _ref.pathname,
      propName = _ref.propName,
      definition = _ref.definition;

  var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
      handles = _useContext.handles,
      onActive = _useContext.onActive;

  var classes = useStyles();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      button: true,
      disabled: definition.type === 'func' && !(pathname in handles),
      // 有設定過的事件才可以點擊查看
      onClick: function onClick() {
        return onActive((0, _toPath2["default"])(pathname));
      }
    };
  }, [handles]);
  return /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    className: classes.root,
    variant: "subtitle1",
    color: "textPrimary"
  }, definition.type === 'func' ? /*#__PURE__*/_react["default"].createElement(_DeviceHub["default"], null) : /*#__PURE__*/_react["default"].createElement(_AccountTree["default"], null), propName);
});

DisplayBase.displayName = 'DisplayBase';

var _default = (0, _withPropitem["default"])('display', DisplayBase);

exports["default"] = _default;