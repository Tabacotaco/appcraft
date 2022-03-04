"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyleContext = exports.OwnerMenuItemContext = exports.MenuImplementContext = exports.AppMenuContext = exports.AppcraftMenu = void 0;

var _react = require("react");

var AppcraftMenu;
exports.AppcraftMenu = AppcraftMenu;

(function (_AppcraftMenu) {
  ;
})(AppcraftMenu || (exports.AppcraftMenu = AppcraftMenu = {}));

var AppMenuContext = /*#__PURE__*/(0, _react.createContext)({
  actived: [null, function () {
    return null;
  }],
  activeds: new Set(),
  dnd: false,
  editing: false,
  expanded: [null, function () {
    return null;
  }],
  rootId: 'root',
  getOption: function getOption() {
    return null;
  },
  getOwners: function getOwners() {
    return null;
  },
  getSubMenu: function getSubMenu() {
    return [];
  },
  onCrossDnd: function onCrossDnd() {
    return false;
  },
  onModifiable: function onModifiable() {
    return false;
  },
  onRecognize: function onRecognize() {
    return null;
  }
});
exports.AppMenuContext = AppMenuContext;
var MenuImplementContext = /*#__PURE__*/(0, _react.createContext)({
  colors: {
    actived: null,
    background: null,
    highlight: null,
    text: null
  },
  isDraggingOver: false,
  minRowHeightSpacing: 6,
  subMenuProps: null,
  subVariant: null,
  variant: 'vertical',
  onIndicatorChange: function onIndicatorChange() {
    return null;
  }
});
exports.MenuImplementContext = MenuImplementContext;
var OwnerMenuItemContext = /*#__PURE__*/(0, _react.createContext)({
  footer: false,
  owner: null
});
exports.OwnerMenuItemContext = OwnerMenuItemContext;
var StyleContext = /*#__PURE__*/(0, _react.createContext)({
  style: null,
  menuRef: null
});
exports.StyleContext = StyleContext;