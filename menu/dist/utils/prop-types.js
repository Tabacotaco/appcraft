"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeOptions = exports.MenuVariantOptions = exports.MenuItemOptions = exports.MenuItemTextOptions = exports.MenuItemHiddenOptions = exports.IconOptions = exports.BaseSubMenuOptions = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BaseSubMenuOptions = _propTypes["default"].shape({
  action: _propTypes["default"].node,
  actionRef: _propTypes["default"].any,
  onOpen: _propTypes["default"].func,
  onClose: _propTypes["default"].func
});

exports.BaseSubMenuOptions = BaseSubMenuOptions;

var IconOptions = _propTypes["default"].exact({
  name: _propTypes["default"].string,
  type: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['mui']), _propTypes["default"].string])
});

exports.IconOptions = IconOptions;

var MenuItemHiddenOptions = _propTypes["default"].exact({
  icon: _propTypes["default"].bool,
  text: _propTypes["default"].bool,
  action: _propTypes["default"].bool
});

exports.MenuItemHiddenOptions = MenuItemHiddenOptions;

var MenuItemTextOptions = _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].exact({
  props: _propTypes["default"].object,
  text: _propTypes["default"].node
})]);

exports.MenuItemTextOptions = MenuItemTextOptions;
var MenuItemOptions = {
  uid: _propTypes["default"].string,
  icon: IconOptions,
  primary: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].objectOf(_propTypes["default"].string.isRequired)]),
  secondary: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].objectOf(_propTypes["default"].string.isRequired)])
};
exports.MenuItemOptions = MenuItemOptions;

var MenuVariantOptions = _propTypes["default"].oneOf(['horizontal', 'vertical', 'top', 'bottom', 'left', 'right']);

exports.MenuVariantOptions = MenuVariantOptions;

var NodeOptions = _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].exact({
  props: _propTypes["default"].object,
  content: _propTypes["default"].node
})]);

exports.NodeOptions = NodeOptions;