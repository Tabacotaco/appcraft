"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPropPath;

var _template2 = _interopRequireDefault(require("lodash/template"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getPropPath(name) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$parent = _ref.parent;

  _ref$parent = _ref$parent === void 0 ? {
    type: 'shape',
    path: ''
  } : _ref$parent;
  var type = _ref$parent.type,
      path = _ref$parent.path,
      _ref$hidden = _ref.hidden,
      hidden = _ref$hidden === void 0 ? false : _ref$hidden;
  return (0, _template2["default"])(type !== null && type !== void 0 && type.startsWith('array') ? '{{ base }}[{{ name }}]' : (name === null || name === void 0 ? void 0 : name.search(/\./)) > 0 ? '{{ base }}["{{ name }}"]' : '{{ base }}{{ (base && name) ? \'.\' : \'\' }}{{ name }}', {
    interpolate: /{{([\s\S]+?)}}/g
  })({
    base: path,
    name: hidden ? '*' : name
  });
}