"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDnd = useDnd;
exports.useModifiable = useModifiable;

var _react = require("react");

var _context = require("../utils/_context");

var _customs = require("../utils/_customs");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function isModifiable(type, option, _ref) {
  var editing = _ref.editing,
      onModifiable = _ref.onModifiable;
  return editing && onModifiable(type, option) === true;
} // TODO: Custom Hooks


function useDnd(option) {
  var _useContext = (0, _react.useContext)(_context.AppMenuContext),
      dnd = _useContext.dnd,
      editing = _useContext.editing,
      getSubMenu = _useContext.getSubMenu,
      onCrossDnd = _useContext.onCrossDnd,
      onModifiable = _useContext.onModifiable;

  var _useContext2 = (0, _react.useContext)(_context.OwnerMenuItemContext),
      footer = _useContext2.footer;

  var _useState = (0, _react.useState)({
    drag: false,
    drop: false
  }),
      _useState2 = _slicedToArray(_useState, 2),
      interactived = _useState2[0],
      setInteractived = _useState2[1];

  var droppableId = "droppable-".concat(option.uid);
  var modifiable = isModifiable('dnd', option, {
    editing: editing,
    onModifiable: onModifiable
  });

  var _ref2 = dnd || {},
      drag = _ref2.drag,
      _ref2$drop = _ref2.drop;

  _ref2$drop = _ref2$drop === void 0 ? [] : _ref2$drop;

  var _ref2$drop2 = _slicedToArray(_ref2$drop, 2),
      drop = _ref2$drop2[0],
      setDrop = _ref2$drop2[1];

  return [droppableId, interactived, Boolean(drag), (0, _react.useMemo)(function () {
    return onCrossDnd(option) === true;
  }, [option, onCrossDnd]), (0, _react.useMemo)(function () {
    return !footer && modifiable && interactived.drop && !_customs.MenuItemCustom.isProgeny(option.uid, drop === null || drop === void 0 ? void 0 : drop.replace(/^droppable-/, ''), getSubMenu);
  }, [interactived.drop, option.uid, footer, modifiable, drop, getSubMenu]), {
    on: (0, _react.useCallback)(function (_ref3) {
      var dataset = _ref3.currentTarget.dataset;
      return setInteractived(function ($interactived) {
        return _objectSpread(_objectSpread({}, $interactived), {}, _defineProperty({}, dataset.dndType, !footer));
      });
    }, [footer, setInteractived]),
    off: (0, _react.useCallback)(function (_ref4) {
      var dataset = _ref4.currentTarget.dataset;
      return setInteractived(function ($interactived) {
        return _objectSpread(_objectSpread({}, $interactived), {}, _defineProperty({}, dataset.dndType, false));
      });
    }, [setInteractived]),
    over: (0, _react.useCallback)(function (e) {
      e.stopPropagation();

      if (drag && droppableId !== drop) {
        setDrop(droppableId);
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [drop, drag])
  }];
}

function useModifiable(option, onAdd, onEdit, onRemove) {
  var context = (0, _react.useContext)(_context.AppMenuContext);

  var _useContext3 = (0, _react.useContext)(_context.OwnerMenuItemContext),
      footer = _useContext3.footer;

  return [!footer && isModifiable('dnd', option, context), !footer && isModifiable('edit', option, context) && (onAdd instanceof Function || onEdit instanceof Function || onRemove instanceof Function)];
}