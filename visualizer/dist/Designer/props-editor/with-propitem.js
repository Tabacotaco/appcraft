"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = withPropitem;

var _react = _interopRequireWildcard(require("react"));

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _set2 = _interopRequireDefault(require("lodash/set"));

var _toPath2 = _interopRequireDefault(require("lodash/toPath"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemSecondaryAction = _interopRequireDefault(require("@material-ui/core/ListItemSecondaryAction"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _styles = require("@material-ui/core/styles");

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _Done = _interopRequireDefault(require("@material-ui/icons/Done"));

var _LabelOutlined = _interopRequireDefault(require("@material-ui/icons/LabelOutlined"));

var _SettingsOutlined = _interopRequireDefault(require("@material-ui/icons/SettingsOutlined"));

var _Undo = _interopRequireDefault(require("@material-ui/icons/Undo"));

var _iconMenuButton = _interopRequireWildcard(require("../icon-menu-button"));

var _customs = require("../_customs");

var _locales = require("../../_utils/locales");

var _withStructure = require("../with-structure");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

// TODO: Custom Hooks
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    icon: {
      minWidth: theme.spacing(5.25),
      width: theme.spacing(5.25)
    }
  };
}); // TODO: Components

function withPropitem(category, PropElement) {
  var HOCElement = /*#__PURE__*/_react["default"].memo(function (controlProps) {
    var superiorType = controlProps.superiorType,
        superiorPathname = controlProps.superiorPathname,
        definition = controlProps.definition,
        propName = controlProps.propName;

    var _useLocales = (0, _locales.useLocales)(),
        dt = _useLocales.getFixedT;

    var _useContext = (0, _react.useContext)(_customs.ProptypesEditorContext),
        InputStyles = _useContext.InputStyles,
        selected = _useContext.selected,
        uid = _useContext.uid,
        typePairs = _useContext.typePairs,
        props = _useContext.props,
        onChange = _useContext.onChange,
        onStateBinding = _useContext.onStateBinding;

    var _useOverrided = (0, _withStructure.useOverrided)(PropElement, category, controlProps),
        _useOverrided2 = _slicedToArray(_useOverrided, 6),
        implement = _useOverrided2[0],
        contentProps = _useOverrided2[1],
        locked = _useOverrided2[2],
        pathname = _useOverrided2[3],
        disabled = _useOverrided2[4],
        value = _useOverrided2[5];

    var _useBindingState = (0, _customs.useBindingState)(pathname),
        _useBindingState2 = _slicedToArray(_useBindingState, 2),
        binding = _useBindingState2[0],
        mainState = _useBindingState2[1];

    var _useState = (0, _react.useState)(false),
        _useState2 = _slicedToArray(_useState, 2),
        naming = _useState2[0],
        setNaming = _useState2[1];

    var _useState3 = (0, _react.useState)(null),
        _useState4 = _slicedToArray(_useState3, 2),
        namingEl = _useState4[0],
        setNamingEl = _useState4[1];

    var _useState5 = (0, _react.useState)(propName),
        _useState6 = _slicedToArray(_useState5, 2),
        newName = _useState6[0],
        setNewName = _useState6[1];

    var _useTypePairs = (0, _customs.useTypePairs)(pathname, definition),
        _useTypePairs2 = _slicedToArray(_useTypePairs, 2),
        pseudoDef = _useTypePairs2[0],
        types = _useTypePairs2[1];

    var menuRef = (0, _react.useRef)();
    var classes = useStyles();

    var _ref = typePairs[pathname] || definition,
        type = _ref.type;

    var modifiable = naming || /^(any|oneOfType)$/.test(definition.type) && types.length > 1 || /^(array|object)(Of)?$/.test(superiorType);

    var handleNaming = function handleNaming() {
      var superior = superiorPathname ? (0, _get2["default"])(props, (0, _toPath2["default"])(superiorPathname)) : props;
      delete typePairs[pathname];
      delete superior[propName];

      if (propName !== newName) {
        (0, _set2["default"])(typePairs, [(0, _customs.getPropPathname)(superiorType, superiorPathname, newName)], typePairs[pathname]);
        (0, _set2["default"])(props, [].concat(_toConsumableArray((0, _toPath2["default"])(superiorPathname)), [newName]), value);
      }

      onChange((0, _cloneDeep2["default"])({
        typePairs: typePairs,
        props: props
      }));
      setNaming(false);
    };

    (0, _react.useEffect)(function () {
      namingEl === null || namingEl === void 0 ? void 0 : namingEl.focus();
    }, [namingEl]);
    return /*#__PURE__*/_react["default"].createElement(_ListItem["default"], _extends({}, contentProps, {
      role: "prop-".concat(category),
      id: pathname,
      selected: pathname === selected
    }), onStateBinding instanceof Function && /*#__PURE__*/_react["default"].createElement(_ListItemIcon["default"], {
      className: classes.icon,
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    }, !/^(func|node|element|elementType)$/.test(type) && (!modifiable || pseudoDef) && /*#__PURE__*/_react["default"].createElement(_Tooltip["default"], {
      title: dt('btn-state-binding')
    }, /*#__PURE__*/_react["default"].createElement(_Checkbox["default"], {
      color: "secondary",
      disabled: locked || disabled || binding && !mainState,
      checked: binding,
      onChange: function onChange(_ref2) {
        var checked = _ref2.target.checked;
        return onStateBinding({
          uid: uid,
          path: pathname,
          typeId: (pseudoDef === null || pseudoDef === void 0 ? void 0 : pseudoDef.uid) || definition.uid,
          defaultValue: value
        }, checked);
      }
    }))), /*#__PURE__*/_react["default"].createElement(_ListItemText["default"], {
      primary: !naming ? implement : /*#__PURE__*/_react["default"].createElement(_TextField["default"], _extends({}, InputStyles, {
        fullWidth: true,
        inputRef: setNamingEl,
        label: dt('lbl-property-name', {
          propName: propName
        }),
        defaultValue: propName,
        onChange: function onChange(_ref3) {
          var name = _ref3.target.value;
          return setNewName(name);
        },
        onKeyDown: function onKeyDown(e) {
          var _menuRef$current;

          return e.key === 'Enter' && handleNaming() || e.key === 'Escape' && ((_menuRef$current = menuRef.current) === null || _menuRef$current === void 0 ? void 0 : _menuRef$current.close());
        }
      }))
    }), modifiable && /*#__PURE__*/_react["default"].createElement(_ListItemSecondaryAction["default"], null, /*#__PURE__*/_react["default"].createElement(_iconMenuButton["default"], {
      size: "small",
      color: "primary",
      tooltip: dt('btn-property-setting'),
      disabled: binding || disabled,
      icon: /*#__PURE__*/_react["default"].createElement(_SettingsOutlined["default"], null)
    }, naming ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      icon: /*#__PURE__*/_react["default"].createElement(_Undo["default"], null),
      text: dt('btn-cancel'),
      onClick: function onClick() {
        return setNaming(false);
      }
    }), /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      icon: /*#__PURE__*/_react["default"].createElement(_Done["default"], {
        color: "primary"
      }),
      text: dt('btn-confirm'),
      onClick: function onClick() {
        return handleNaming();
      }
    })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !disabled && /^(any|oneOfType)$/.test(definition.type) && types.length > 1 && !/^\*\d+$/.test(propName) && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, types.map(function (mixed) {
      return /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
        key: mixed.uid,
        selected: mixed.uid === (pseudoDef === null || pseudoDef === void 0 ? void 0 : pseudoDef.uid),
        icon: mixed.uid === (pseudoDef === null || pseudoDef === void 0 ? void 0 : pseudoDef.uid) ? /*#__PURE__*/_react["default"].createElement(_CheckBox["default"], {
          color: "primary"
        }) : /*#__PURE__*/_react["default"].createElement(_CheckBoxOutlineBlank["default"], null),
        text: mixed.description || mixed.type,
        onClick: function onClick() {
          onChange({
            typePairs: _objectSpread(_objectSpread({}, typePairs), {}, _defineProperty({}, pathname, mixed)),
            props: (0, _set2["default"])(props, pathname, null)
          });
        }
      });
    }), /*#__PURE__*/_react["default"].createElement(_Divider["default"], null)), /^object(Of)?$/.test(superiorType) && /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      disabled: disabled,
      icon: /*#__PURE__*/_react["default"].createElement(_LabelOutlined["default"], {
        color: "primary"
      }),
      text: dt('btn-naming'),
      onClick: function onClick() {
        return setNaming(true);
      }
    }), /^(array|object)(Of)?$/.test(superiorType) && /*#__PURE__*/_react["default"].createElement(_iconMenuButton.IconMenuItem, {
      disabled: disabled,
      icon: /*#__PURE__*/_react["default"].createElement(_Close["default"], {
        color: "secondary"
      }),
      text: dt('btn-remove-property'),
      onClick: function onClick() {
        if (/^object(Of)?$/.test(superiorType)) {
          handleNaming();
        } else if (/^array(Of)?$/.test(superiorType)) {
          var superiorValue = (0, _get2["default"])(props, superiorPathname);
          var index = parseFloat(propName);
          onChange({
            props: (0, _set2["default"])(props, (0, _toPath2["default"])(superiorPathname), superiorValue.filter(function (_v, i) {
              return i !== index;
            })),
            typePairs: Object.entries(typePairs).reduce(function (result, _ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                  pairPath = _ref5[0],
                  pairDef = _ref5[1];

              var _toPath$reverse = (0, _toPath2["default"])(pairPath).reverse(),
                  _toPath$reverse2 = _toArray(_toPath$reverse),
                  pairName = _toPath$reverse2[0],
                  pairSuperiorPath = _toPath$reverse2.slice(1);

              var pairIndex = parseFloat(pairName);
              pairSuperiorPath.reverse();

              if (JSON.stringify(pairSuperiorPath) !== JSON.stringify(superiorPathname)) {
                (0, _set2["default"])(result, [pairPath], pairDef);
              } else if (pairIndex > index) {
                (0, _set2["default"])(result, [(0, _customs.getPropPathname)(superiorType, superiorPathname, pairIndex - 1)], pairDef);
              }

              return result;
            }, {})
          });
        }
      }
    })))));
  });

  HOCElement.Naked = PropElement;
  HOCElement.displayName = 'Propitem';
  return HOCElement;
}