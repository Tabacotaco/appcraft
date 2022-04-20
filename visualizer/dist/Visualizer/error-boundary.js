"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withErrorBoundary;

var _react = _interopRequireDefault(require("react"));

var _pick2 = _interopRequireDefault(require("lodash/pick"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _styles = require("@material-ui/core/styles");

var _WarningRounded = _interopRequireDefault(require("@material-ui/icons/WarningRounded"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ErrorBoundary = (0, _styles.withStyles)(function () {
  return {
    error: {
      margin: 'auto',
      width: '100%',
      height: '100%',
      opacity: 0.125
    }
  };
})( /*#__PURE__*/function (_React$Component) {
  _inherits(__, _React$Component);

  var _super = _createSuper(__);

  function __(props) {
    var _this;

    _classCallCheck(this, __);

    _this = _super.call(this, props);
    _this.state = {
      error: false
    };
    return _this;
  }

  _createClass(__, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var error = this.state.error;
      var _this$props = this.props,
          uid = _this$props.uid,
          onBoundaryHandle = _this$props[error ? 'onError' : 'onValid'];
      onBoundaryHandle === null || onBoundaryHandle === void 0 ? void 0 : onBoundaryHandle(uid);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_p, _ref) {
      var prevErr = _ref.error;
      var currErr = this.state.error;

      if (prevErr !== currErr) {
        var _this$props2 = this.props,
            uid = _this$props2.uid,
            onBoundaryHandle = _this$props2[currErr ? 'onError' : 'onValid'];
        onBoundaryHandle === null || onBoundaryHandle === void 0 ? void 0 : onBoundaryHandle(uid);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          classes = _this$props3.classes,
          children = _this$props3.children;
      var error = this.state.error;
      return !error ? children || null : /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
        className: classes.error,
        variant: "h4",
        color: "textSecondary",
        component: _WarningRounded["default"]
      });
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        error: true
      };
    }
  }]);

  return __;
}(_react["default"].Component));

function withErrorBoundary(Widget) {
  var ErrorBoundaryHOC = /*#__PURE__*/_react["default"].memo(function (props) {
    return /*#__PURE__*/_react["default"].createElement(ErrorBoundary, null, Widget && /*#__PURE__*/_react["default"].createElement(Widget, props));
  });

  ErrorBoundaryHOC.Naked = Widget;
  ErrorBoundaryHOC.displayName = 'ErrorBoundaryHOC';
  return ErrorBoundaryHOC;
}