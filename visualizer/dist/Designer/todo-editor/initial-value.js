"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = InitialValue;

var _react = _interopRequireWildcard(require("react"));

var _reactNumberFormat = _interopRequireDefault(require("react-number-format"));

var _shortid = require("shortid");

var _debounce2 = _interopRequireDefault(require("lodash/debounce"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _DateTimePicker = require("@material-ui/pickers/DateTimePicker");

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _customs = require("../_customs");

var _locales = require("../../utils/locales");

var _excluded = ["inputRef", "name", "required", "value", "onChange"],
    _excluded2 = ["VariableComponent", "classes", "title", "type", "options", "name", "value", "onChange"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NumberField = function NumberField(_ref) {
  var inputRef = _ref.inputRef,
      name = _ref.name,
      required = _ref.required,
      value = _ref.value,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/_react["default"].createElement(_reactNumberFormat["default"], _extends({}, props, {
    value: value,
    thousandSeparator: true,
    isNumericString: true,
    getInputRef: inputRef,
    onValueChange: function onValueChange(_ref2) {
      var newValue = _ref2.value;
      return onChange({
        target: {
          name: name,
          value: parseFloat(newValue)
        }
      });
    }
  }));
};

function InitialValue(_ref3) {
  var Variable = _ref3.VariableComponent,
      classes = _ref3.classes,
      title = _ref3.title,
      type = _ref3.type,
      options = _ref3.options,
      name = _ref3.name,
      value = _ref3.value,
      _onChange = _ref3.onChange,
      props = _objectWithoutProperties(_ref3, _excluded2);

  var _useLocales = (0, _locales.useLocales)(),
      dt = _useLocales.getFixedT;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var handlePropertyRename = (0, _react.useMemo)(function () {
    return (0, _debounce2["default"])(function (_ref4) {
      var _ref4$target = _ref4.target,
          prevName = _ref4$target.name,
          newName = _ref4$target.value;
      return _onChange({
        name: name,
        value: Object.entries(value).reduce(function (result, _ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              property = _ref6[0],
              variable = _ref6[1];

          return _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, property === prevName ? newName : property, variable));
        }, {})
      });
    }, 800 // eslint-disable-next-line react-hooks/exhaustive-deps
    );
  }, [value]);

  switch (type) {
    case 'Boolean':
      return !value ? null : /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        fullWidth: true,
        select: true,
        variant: "filled",
        size: "small",
        label: dt('lbl-initial-value'),
        name: name,
        value: value,
        onChange: function onChange(_ref7) {
          var target = _ref7.target;
          return _onChange(target);
        }
      }, /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        value: "true"
      }, "True"), /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
        value: "false"
      }, "False"));

    case 'Date':
      return /*#__PURE__*/_react["default"].createElement(_DateTimePicker.DateTimePicker, {
        inputVariant: "filled",
        size: "small",
        fullWidth: true,
        clearable: true,
        autoOk: true,
        ampm: false,
        format: "yyyy-MM-dd hh:mm",
        label: dt('lbl-initial-value'),
        name: name,
        value: value,
        onChange: function onChange(e) {
          return _onChange({
            name: name,
            value: (e === null || e === void 0 ? void 0 : e.valueOf()) || null
          });
        }
      });

    case 'Number':
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        fullWidth: true,
        variant: "filled",
        size: "small",
        label: dt('lbl-initial-value'),
        name: name,
        value: value,
        onChange: function onChange(_ref8) {
          var target = _ref8.target;
          return _onChange(target);
        },
        InputProps: {
          inputComponent: NumberField
        }
      });

    case 'String':
      return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
        fullWidth: true,
        variant: "filled",
        size: "small",
        label: dt('lbl-initial-value'),
        name: name,
        value: value || '',
        onChange: function onChange(_ref9) {
          var target = _ref9.target;
          return _onChange(target);
        }
      });

    default:
      if (/^(input|state|todo)$/.test(type)) {
        return /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
          fullWidth: true,
          select: true,
          required: true,
          variant: "filled",
          size: "small",
          label: dt('lbl-initial-value'),
          name: name,
          value: (0, _get2["default"])(options, type).some(function (_ref10) {
            var code = _ref10.code;
            return code === value;
          }) ? value : '',
          onChange: function onChange(_ref11) {
            var target = _ref11.target;
            return _onChange(target);
          }
        }, (0, _get2["default"])(options, type).map(function (_ref12) {
          var code = _ref12.code,
              desc = _ref12.description,
              refValue = _ref12.refValue;
          return /*#__PURE__*/_react["default"].createElement(_MenuItem["default"], {
            key: code,
            value: code
          }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
            title: /*#__PURE__*/_react["default"].createElement("pre", null, refValue ? JSON.stringify(refValue, null, 2) : 'Null')
          }, /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], desc)));
        }));
      }

      if (/^(Array|Object)$/.test(type) && value) {
        return /*#__PURE__*/_react["default"].createElement(_List["default"], {
          disablePadding: true,
          subheader: /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
            disableGutters: true,
            button: true,
            disabled: Object.keys(value).length === 0,
            onClick: function onClick() {
              return setExpanded(!expanded);
            }
          }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
            className: classes.icon
          }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            size: "small"
          }, expanded && Object.keys(value).length > 0 ? /*#__PURE__*/_react["default"].createElement(_ExpandMore["default"], null) : /*#__PURE__*/_react["default"].createElement(_ChevronRight["default"], null))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
            primary: title || dt("ttl-initial-".concat(type.toLowerCase()))
          }), /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
            title: dt('btn-add-property')
          }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            size: "small",
            color: "primary",
            onClick: function onClick() {
              var property = {
                uid: (0, _shortid.generate)(),
                type: 'input',
                description: "Variable_".concat(Math.floor(Math.random() * 10000))
              };
              setExpanded(true);

              _onChange({
                name: name,
                value: type === 'Array' ? [].concat(_toConsumableArray(value), [property]) : _objectSpread(_objectSpread({}, value), {}, _defineProperty({}, property.description, property))
              });
            }
          }, /*#__PURE__*/_react["default"].createElement(_Add["default"], null)))))
        }, /*#__PURE__*/_react["default"].createElement(_Collapse["default"], {
          "in": expanded,
          timeout: "auto",
          unmountOnExit: true
        }, Object.entries(value).map(function (_ref13) {
          var _ref14 = _slicedToArray(_ref13, 2),
              property = _ref14[0],
              variable = _ref14[1];

          return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], {
            key: variable.uid,
            divider: true,
            disableGutters: true,
            className: classes.item
          }, /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
            className: classes.icon
          }, /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
            title: dt('btn-remove-property')
          }, /*#__PURE__*/_react["default"].createElement(_IconButton["default"], {
            size: "small",
            color: "secondary",
            onClick: function onClick() {
              return _onChange({
                name: name,
                value: Object.entries(value).reduce(function (result, _ref15) {
                  var _ref16 = _slicedToArray(_ref15, 2),
                      $property = _ref16[0],
                      $variable = _ref16[1];

                  return $variable.uid === variable.uid ? result : type === 'Array' ? result.concat($variable) : _objectSpread(_objectSpread({}, result), {}, _defineProperty({}, $property, $variable));
                }, type === 'Array' ? [] : {})
              });
            }
          }, /*#__PURE__*/_react["default"].createElement(_Close["default"], null)))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
            className: "content",
            primary: type === 'Object' && /*#__PURE__*/_react["default"].createElement(_TextField["default"], {
              fullWidth: true,
              required: true,
              variant: "filled",
              size: "small",
              label: dt('lbl-property-name', {
                propName: ''
              }),
              name: property,
              defaultValue: property,
              onChange: handlePropertyRename
            }),
            secondary: /*#__PURE__*/_react["default"].createElement(Variable, _extends({}, props, {
              prefix: (0, _customs.getPropPathname)(type.toLowerCase(), name, property),
              variable: variable,
              onChange: _onChange
            }))
          }));
        })));
      }

      return null;
  }
}