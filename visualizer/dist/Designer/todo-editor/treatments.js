"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Treatments;

var _react = _interopRequireWildcard(require("react"));

var _shortid = require("shortid");

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _InputAdornment = _interopRequireDefault(require("@material-ui/core/InputAdornment"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _DeleteOutline = _interopRequireDefault(require("@material-ui/icons/DeleteOutline"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _Functions = _interopRequireDefault(require("@material-ui/icons/Functions"));

var _customs = require("../_customs");

var _locales = require("../../_utils/locales");

var _excluded = ["after", "options"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Treatment(_ref) {
  var InitialValue = _ref.InitialValue,
      classes = _ref.classes,
      superiorName = _ref.superiorName,
      options = _ref.options,
      reference = _ref.reference,
      list = _ref.list,
      index = _ref.index,
      value = _ref.value,
      _onChange = _ref.onChange;
  var uid = value.uid,
      description = value.description,
      name = value.name,
      args = value.args;
  var pathname = (0, _customs.getPropPathname)('array', superiorName, index);

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _ref2 = (0, _react.useMemo)(function () {
    return options.find(function (_ref3) {
      var property = _ref3.property;
      return property === name;
    });
  }, [options, name]) || {},
      _ref2$isFunc = _ref2.isFunc,
      isFunc = _ref2$isFunc === void 0 ? false : _ref2$isFunc;

  return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
    key: uid,
    divider: true,
    disableGutters: true,
    className: classes.item
  }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
    primary: /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
      fullWidth: true,
      required: true,
      variant: "filled",
      size: "small",
      label: dt('lbl-description'),
      name: (0, _customs.getPropPathname)('object', pathname, 'description'),
      value: description,
      onChange: function onChange(_ref4) {
        var target = _ref4.target;
        return _onChange(target);
      },
      InputProps: {
        endAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
          position: "end"
        }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
          title: dt('lbl-preview-treatment', {
            value: reference ? JSON.stringify(reference) : 'Null'
          })
        }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
          size: "small",
          color: "primary"
        }, /*#__PURE__*/_react["default"].createElement(_Functions["default"], null)))),
        startAdornment: /*#__PURE__*/_react["default"].createElement(_InputAdornment["default"], {
          position: "start"
        }, /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          InputProps: {
            className: classes.select,
            disableUnderline: true
          },
          SelectProps: {
            displayEmpty: true
          },
          fullWidth: true,
          required: true,
          select: true,
          variant: "standard",
          size: "small",
          name: (0, _customs.getPropPathname)('object', pathname, 'name'),
          value: name,
          onChange: function onChange(_ref5) {
            var propertyName = _ref5.target.value;
            return _onChange({
              name: superiorName,
              value: list.reduce(function (result, $treatment, i) {
                return i > index ? result : result.concat(_objectSpread(_objectSpread({}, $treatment), $treatment.uid === uid && {
                  name: propertyName
                }));
              }, [])
            });
          }
        }, options.map(function (_ref6) {
          var property = _ref6.property;
          return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
            key: property,
            value: property
          }, /*#__PURE__*/_react["default"].createElement("span", {
            className: classes.capitalize
          }, property));
        })))
      }
    }),
    secondary: isFunc && /*#__PURE__*/_react["default"].createElement(InitialValue, {
      classes: classes,
      options: options,
      onChange: _onChange,
      disableTreatments: true,
      title: dt('ttl-arguments'),
      type: "Array",
      name: (0, _customs.getPropPathname)('object', pathname, 'args'),
      value: args || []
    })
  }));
}

function Treatments(_ref7) {
  var InitialValue = _ref7.InitialValue,
      classes = _ref7.classes,
      name = _ref7.name,
      value = _ref7.value,
      onChange = _ref7.onChange;

  var _useLocales2 = (0, _locales.useLocales)(),
      dt = _useLocales2.getFixedT;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  return /*#__PURE__*/_react["default"].createElement(_List["default"], {
    disablePadding: true,
    subheader: /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
      disableGutters: true,
      button: true,
      disabled: value.length === 0,
      onClick: function onClick() {
        return setExpanded(!expanded);
      }
    }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
      className: classes.icon
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small"
    }, expanded && value.length > 0 ? /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null) : /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primaryTypographyProps: {
        color: 'textSecondary'
      },
      primary: dt('ttl-treatments')
    }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, (value.length === 0 || (0, _customs.getTreatmentOptions)(value[value.length - 1].after).length > 0) && /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-add-treatment')
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      color: "primary",
      onClick: function onClick() {
        setExpanded(true);
        onChange({
          name: name,
          value: [].concat(_toConsumableArray(value), [{
            uid: (0, _shortid.generate)(),
            description: "Treatment_".concat(Math.floor(Math.random() * 10000))
          }])
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null))), value.length > 0 && /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-reset-treatment')
    }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
      size: "small",
      color: "secondary",
      onClick: function onClick() {
        return onChange({
          name: name,
          value: []
        });
      }
    }, /*#__PURE__*/_react["default"].createElement(_DeleteOutline["default"], null)))))
  }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
    "in": expanded,
    timeout: "auto",
    unmountOnExit: true
  }, value.map(function (_ref8, index) {
    var reference = _ref8.after,
        options = _ref8.options,
        treatment = _objectWithoutProperties(_ref8, _excluded);

    return /*#__PURE__*/_react["default"].createElement(Treatment, {
      InitialValue: InitialValue,
      classes: classes,
      reference: reference,
      options: options,
      index: index,
      onChange: onChange,
      key: treatment.uid,
      superiorName: name,
      list: value,
      value: treatment
    });
  })));
}