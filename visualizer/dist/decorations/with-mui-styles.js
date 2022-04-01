"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _withStyles = _interopRequireDefault(require("@material-ui/core/styles/withStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var makeMuiStyles = function makeMuiStyles(options) {
  var withStyleClasses = (0, _withStyles["default"])(options);
  return function (ImplementElement) {
    var StyledElement = withStyleClasses(ImplementElement);
    StyledElement.Naked = ImplementElement;
    StyledElement.displayName = 'StyledElement';
    StyledElement.overrideds = ['classes'];
    return StyledElement;
  };
};

var _default = makeMuiStyles;
exports["default"] = _default;