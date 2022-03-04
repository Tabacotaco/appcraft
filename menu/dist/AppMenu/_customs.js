"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MenuImplementCustom = exports.AppMenuCustom = void 0;

var _react = require("react");

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isPlainObject2 = _interopRequireDefault(require("lodash/isPlainObject"));

var _context = require("../utils/_context");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getActived(defaultActived, getOption) {
  return !defaultActived ? null : defaultActived instanceof Function ? getActived(defaultActived(), getOption) : getOption(defaultActived, defaultActived.startsWith('/') ? 'href' : 'uid');
}

function getParents(uid, items) {
  var _ref = items.get(uid) || {},
      owner = _ref.owner;

  return !owner ? [] : [].concat(_toConsumableArray(getParents(owner, items)), [owner]);
}

var AppMenuCustom = {
  useActived: function useActived(defaultActived, getOption, getOwners) {
    var _useState = (0, _react.useState)(function () {
      var _getActived;

      return ((_getActived = getActived(defaultActived, getOption)) === null || _getActived === void 0 ? void 0 : _getActived.uid) || null;
    }),
        _useState2 = _slicedToArray(_useState, 2),
        actived = _useState2[0],
        setActived = _useState2[1];

    (0, _react.useEffect)(function () {
      if (defaultActived && defaultActived !== actived) {
        var _getActived2;

        var uid = ((_getActived2 = getActived(defaultActived, getOption)) === null || _getActived2 === void 0 ? void 0 : _getActived2.uid) || null;
        setActived(uid);
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [defaultActived, getOption]);
    return [(0, _react.useMemo)(function () {
      return new Set(getOwners(actived, {
        root: true,
        self: true
      }));
    }, [actived, getOwners]), actived, setActived];
  },
  useDndState: function useDndState(dnd, onDnd) {
    var _useState3 = (0, _react.useState)(null),
        _useState4 = _slicedToArray(_useState3, 2),
        drag = _useState4[0],
        setDrag = _useState4[1];

    var drop = (0, _react.useState)(null);
    return [{
      drop: drop,
      drag: drag
    }, {
      dragStart: (0, _react.useCallback)(function (_ref2) {
        var draggableId = _ref2.draggableId,
            source = _ref2.source;

        if (dnd) {
          setDrag(draggableId);
          drop[1](source.droppableId);
        } // eslint-disable-next-line react-hooks/exhaustive-deps

      }, [dnd]),
      dragEnd: (0, _react.useCallback)(function (_ref3) {
        var _ref3$source = _ref3.source,
            srcIndex = _ref3$source.index,
            srcId = _ref3$source.droppableId,
            destination = _ref3.destination;

        var _drop = _slicedToArray(drop, 2),
            setDrop = _drop[1];

        if (dnd) {
          setDrop(null);
          setDrag(null);

          if (destination) {
            var dstIndex = destination.index,
                dstId = destination.droppableId;
            onDnd({
              index: srcIndex,
              uid: srcId.replace(/^droppable-/, '')
            }, {
              index: dstIndex,
              uid: dstId.replace(/^droppable-/, '')
            });
          }
        } // eslint-disable-next-line react-hooks/exhaustive-deps

      }, [dnd, onDnd])
    }];
  },
  useModifiable: function useModifiable(mode, onModifiable) {
    return (0, _react.useCallback)(function (type, option) {
      if (onModifiable instanceof Function) {
        return mode === 'editing' && onModifiable(type, option) === true;
      }

      return mode === 'editing';
    }, [mode, onModifiable]);
  },
  useExpanded: function useExpanded(getOwners) {
    var _useState5 = (0, _react.useState)(new Set()),
        _useState6 = _slicedToArray(_useState5, 2),
        expanded = _useState6[0],
        setExpanded = _useState6[1];

    return [expanded, (0, _react.useCallback)(function (open, uid) {
      return setExpanded(function (history) {
        var $history = Array.from(history);

        if (!open) {
          var index = $history.findIndex(function (itemId) {
            return itemId === uid;
          });
          return index >= 0 ? new Set($history.slice(0, index)) : uid ? history : new Set();
        }

        return !uid ? history : new Set(getOwners(uid, {
          self: true
        }));
      });
    }, [setExpanded, getOwners])];
  },
  useMenuMethods: function useMenuMethods() {
    var _useState7 = (0, _react.useState)(new Map()),
        _useState8 = _slicedToArray(_useState7, 2),
        items = _useState8[0],
        setItems = _useState8[1];

    return {
      onRecognize: (0, _react.useCallback)(function (option) {
        if (!(0, _isPlainObject2["default"])(option)) {
          setItems(function (prev) {
            prev["delete"](option);
            return new Map(prev);
          });
        } else {
          var uid = option.uid,
              owner = option.owner,
              index = option.index,
              href = option.href,
              icon = option.icon,
              primary = option.primary,
              secondary = option.secondary;
          setItems(function (prev) {
            return new Map(prev.set(uid, {
              owner: owner,
              uid: uid,
              href: href,
              icon: icon,
              primary: primary,
              secondary: secondary,
              index: index || Array.from(prev.values()).filter(function (_ref4) {
                var checkedId = _ref4.owner;
                return checkedId === owner;
              }).length
            }));
          });
        }
      }, [setItems]),
      getOption: (0, _react.useCallback)(function (params) {
        var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'uid';
        return field === 'uid' ? items.get(params) : Array.from(items.values()).find(function (_ref5) {
          var key = _ref5[field];
          return key === params;
        });
      }, [items]),
      getOwners: (0, _react.useCallback)(function (uid) {
        var _ref6 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref6$root = _ref6.root,
            root = _ref6$root === void 0 ? false : _ref6$root,
            _ref6$self = _ref6.self,
            self = _ref6$self === void 0 ? false : _ref6$self;

        var owners = getParents(uid, items).slice(root ? 0 : 1);
        return !self || !uid ? owners : [].concat(_toConsumableArray(owners), [uid]);
      }, [items]),
      getSubMenu: (0, _react.useCallback)(function (uid) {
        return Array.from(items.values()).filter(function (_ref7) {
          var owner = _ref7.owner;
          return owner === uid;
        }).sort(function (_ref8, _ref9) {
          var i1 = _ref8.index;
          var i2 = _ref9.index;
          return i1 - i2;
        });
      }, [items])
    };
  }
};
exports.AppMenuCustom = AppMenuCustom;
var MenuImplementCustom = {
  useActived: function useActived(onIndicatorChange) {
    var _useContext = (0, _react.useContext)(_context.AppMenuContext),
        rootId = _useContext.rootId,
        activeds = _useContext.activeds,
        _useContext$expanded = _slicedToArray(_useContext.expanded, 1),
        expanded = _useContext$expanded[0],
        getSubMenu = _useContext.getSubMenu;

    var _useContext2 = (0, _react.useContext)(_context.OwnerMenuItemContext),
        owner = _useContext2.owner;

    var _useMemo = (0, _react.useMemo)(function () {
      var spliceId = owner || rootId;

      if (activeds.has(spliceId)) {
        var result = Array.from(activeds);
        return result.slice(result.indexOf(spliceId) + 1);
      }

      return []; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [owner, activeds]),
        _useMemo2 = _slicedToArray(_useMemo, 1),
        uid = _useMemo2[0];

    for (var _len = arguments.length, indicatorDeps = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      indicatorDeps[_key - 1] = arguments[_key];
    }

    (0, _react.useEffect)(function () {
      onIndicatorChange(uid, false); // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeds, expanded].concat(indicatorDeps));
    return (0, _react.useMemo)(function () {
      var index = getSubMenu(owner || rootId).findIndex(function (_ref10) {
        var subId = _ref10.uid;
        return subId === uid;
      });
      return index < 0 ? false : index; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [owner, uid, activeds, getSubMenu]);
  },
  useBackdropCollapse: function useBackdropCollapse(collapseByBackdrop, _ref11) {
    var onClick = _ref11.onClick;

    var _useContext3 = (0, _react.useContext)(_context.AppMenuContext),
        _useContext3$expanded = _slicedToArray(_useContext3.expanded, 2),
        onExpandedChange = _useContext3$expanded[1];

    return (0, _react.useCallback)(function () {
      collapseByBackdrop && onExpandedChange(false);
      onClick instanceof Function && onClick.apply(void 0, arguments);
    }, [collapseByBackdrop, onClick, onExpandedChange]);
  },
  useColors: function useColors(theme, colors) {
    return (0, _react.useMemo)(function () {
      var _ref12 = colors || {},
          actived = _ref12.actived,
          _ref12$background = _ref12.background,
          background = _ref12$background === void 0 ? 'inherit' : _ref12$background,
          highlight = _ref12.highlight,
          text = _ref12.text;

      return {
        actived: actived,
        background: background || theme.palette.background.paper,
        highlight: highlight,
        text: text || (background === 'inherit' ? 'inherit' : theme.palette.getContrastText(background || theme.palette.background.paper))
      };
    }, [theme, colors]);
  },
  useDroppable: function useDroppable(uid) {
    var disabled = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _useContext4 = (0, _react.useContext)(_context.AppMenuContext),
        dnd = _useContext4.dnd,
        getOption = _useContext4.getOption,
        onCrossDnd = _useContext4.onCrossDnd,
        onModifiable = _useContext4.onModifiable,
        editing = _useContext4.editing;

    var _ref13 = dnd || {},
        _ref13$drop = _ref13.drop;

    _ref13$drop = _ref13$drop === void 0 ? [] : _ref13$drop;

    var _ref13$drop2 = _slicedToArray(_ref13$drop, 2),
        drop = _ref13$drop2[0],
        setDrop = _ref13$drop2[1],
        drag = _ref13.drag;

    var droppableId = "droppable-".concat(uid);
    return [droppableId, !disabled && editing && onModifiable('dnd') === true && dnd && drop === droppableId, (0, _react.useCallback)(function (e) {
      e.stopPropagation();

      if (drag && onCrossDnd(getOption(uid)) === true && droppableId !== drop) {
        setDrop(droppableId);
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [uid, drop, drag, getOption, onCrossDnd])];
  },
  useIndicatorPosition: function useIndicatorPosition(variant) {
    var _useContext5 = (0, _react.useContext)(_context.MenuImplementContext),
        onIndicatorChange = _useContext5.onIndicatorChange;

    var _useContext6 = (0, _react.useContext)(_context.OwnerMenuItemContext),
        owner = _useContext6.owner;

    var _useState9 = (0, _react.useState)({
      size: 0,
      translate: 0
    }),
        _useState10 = _slicedToArray(_useState9, 2),
        indicator = _useState10[0],
        setIndicator = _useState10[1];

    return [indicator, (0, _react.useCallback)(function (uid) {
      var autoNext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var el = document.querySelector("div[data-appcraft-uid=\"".concat(uid, "\"]"));

      if (!el || !uid) {
        setIndicator({
          size: 0,
          translate: 0
        });
      } else {
        var mg = el["offset".concat(variant === 'horizontal' ? 'Left' : 'Top')];
        setIndicator({
          size: (0, _get2["default"])(el, variant === 'horizontal' ? 'clientWidth' : 'clientHeight') || 0,
          translate: mg || 0
        });
        autoNext && owner && (onIndicatorChange === null || onIndicatorChange === void 0 ? void 0 : onIndicatorChange(owner));
      }
    }, [variant, owner, onIndicatorChange])];
  }
};
exports.MenuImplementCustom = MenuImplementCustom;