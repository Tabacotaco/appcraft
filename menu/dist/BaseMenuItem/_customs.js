"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useNode = useNode;
exports.useSubCollapse = useSubCollapse;

var _react = require("react");

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _KeyboardArrowLeft = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowLeft"));

var _KeyboardArrowRight = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowRight"));

var _KeyboardArrowUp = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowUp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function useNode(option) {
  var contentAlias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'content';
  return (0, _react.useMemo)(function () {
    return /*#__PURE__*/(0, _react.isValidElement)(option) || typeof option === 'string' ? _defineProperty({}, contentAlias, option) : option || {};
  }, [option, contentAlias]);
}

function useSubCollapse(sub) {
  var open = sub.open,
      variant = sub.variant,
      onOpen = sub.onOpen,
      onClose = sub.onClose;
  return [open].concat(_toConsumableArray((0, _react.useMemo)(function () {
    switch (variant) {
      case 'top':
        return open ? [_KeyboardArrowDown["default"], onClose] : [_KeyboardArrowUp["default"], onOpen];

      case 'left':
        return open ? [_KeyboardArrowRight["default"], onClose] : [_KeyboardArrowLeft["default"], onOpen];

      case 'right':
      case 'horizontal':
        return open ? [_KeyboardArrowLeft["default"], onClose] : [_KeyboardArrowRight["default"], onOpen];

      case 'bottom':
      case 'vertical':
        return open ? [_KeyboardArrowUp["default"], onClose] : [_KeyboardArrowDown["default"], onOpen];

      default:
        return [];
    }
  }, [open, variant, onOpen, onClose])));
}