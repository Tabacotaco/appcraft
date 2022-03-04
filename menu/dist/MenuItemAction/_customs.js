"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useActions = useActions;

var _react = require("react");

var _shortid = require("shortid");

var _context = require("../utils/_context");

var _locales = require("../utils/locales");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useActions(uid, onAdd, onEdit, onRemove) {
  var _useContext = (0, _react.useContext)(_context.AppMenuContext),
      getOption = _useContext.getOption;

  var _useLocales = (0, _locales.useLocales)(),
      lang = _useLocales.lang;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  return [anchorEl, {
    close: (0, _react.useCallback)(function () {
      return setAnchorEl(null);
    }, []),
    open: (0, _react.useCallback)(function (e) {
      return setAnchorEl(e.currentTarget);
    }, []),
    add: (0, _react.useCallback)(function () {
      setAnchorEl(null);
      onAdd instanceof Function && onAdd({
        owner: uid,
        uid: (0, _shortid.generate)(),
        primary: _defineProperty({}, lang, ''),
        secondary: _defineProperty({}, lang, '')
      });
    }, [lang, uid, onAdd]),
    edit: (0, _react.useCallback)(function () {
      setAnchorEl(null);
      onEdit instanceof Function && onEdit(getOption(uid));
    }, [uid, getOption, onEdit]),
    remove: (0, _react.useCallback)(function () {
      return onRemove instanceof Function && onRemove(getOption(uid));
    }, [uid, getOption, onRemove])
  }];
}