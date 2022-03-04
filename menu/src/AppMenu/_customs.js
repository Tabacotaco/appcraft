import { useEffect, useState, useMemo, useCallback, useContext } from 'react';

import _get from 'lodash/get';
import _isPlainObject from 'lodash/isPlainObject';

import { AppMenuContext, MenuImplementContext, OwnerMenuItemContext } from '../utils/_context';


function getActived(defaultActived, getOption) {
  return !defaultActived
    ? null
    : defaultActived instanceof Function
      ? getActived(defaultActived(), getOption)
      : getOption(defaultActived, defaultActived.startsWith('/') ? 'href' : 'uid');
}

function getParents(uid, items) {
  const { owner } = items.get(uid) || {};

  return !owner ? [] : [...getParents(owner, items), owner];
}

export const AppMenuCustom = {
  useActived(defaultActived, getOption, getOwners) {
    const [actived, setActived] = useState(() => getActived(defaultActived, getOption)?.uid || null);

    useEffect(() => {
      if (defaultActived && defaultActived !== actived) {
        const uid = getActived(defaultActived, getOption)?.uid || null;

        setActived(uid);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaultActived, getOption]);

    return [
      useMemo(() => new Set(getOwners(actived, { root: true, self: true })), [actived, getOwners]),
      actived,
      setActived
    ];
  },
  useDndState(dnd, onDnd) {
    const [drag, setDrag] = useState(null);
    const drop = useState(null);

    return [
      { drop, drag },

      {
        dragStart: useCallback(({ draggableId, source }) => {
          if (dnd) {
            setDrag(draggableId);
            drop[1](source.droppableId);
          }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [dnd]),

        dragEnd: useCallback(({ source: { index: srcIndex, droppableId: srcId }, destination }) => {
          const [, setDrop] = drop;

          if (dnd) {
            setDrop(null);
            setDrag(null);

            if (destination) {
              const { index: dstIndex, droppableId: dstId } = destination;

              onDnd(
                { index: srcIndex, uid: srcId.replace(/^droppable-/, '') },
                { index: dstIndex, uid: dstId.replace(/^droppable-/, '') }
              );
            }
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [dnd, onDnd])
      }
    ];
  },
  useModifiable(mode, onModifiable) {
    return useCallback((type, option) => {
      if (onModifiable instanceof Function) {
        return mode === 'editing' && onModifiable(type, option) === true;
      }
      return mode === 'editing';
    }, [mode, onModifiable]);
  },
  useExpanded(getOwners) {
    const [expanded, setExpanded] = useState(new Set());

    return [
      expanded,

      useCallback((open, uid) => (
        setExpanded((history) => {
          const $history = Array.from(history);

          if (!open) {
            const index = $history.findIndex((itemId) => itemId === uid);

            return index >= 0
              ? new Set($history.slice(0, index))
              : uid
                ? history
                : new Set();
          }
          return !uid ? history : new Set(getOwners(uid, { self: true }));
        })
      ), [setExpanded, getOwners])
    ];
  },
  useMenuMethods() {
    const [items, setItems] = useState(new Map());

    return {
      onRecognize: useCallback((option) => {
        if (!_isPlainObject(option)) {
          setItems((prev) => {
            prev.delete(option);

            return new Map(prev);
          });
        } else {
          const { uid, owner, index, href, icon, primary, secondary } = option;

          setItems((prev) => new Map(
            prev.set(uid, {
              owner,
              uid,
              href,
              icon,
              primary,
              secondary,

              index: index || Array.from(prev.values()).filter(({ owner: checkedId }) => (
                checkedId === owner
              )).length
            })
          ));
        }
      }, [setItems]),

      getOption: useCallback((params, field = 'uid') => (
        field === 'uid'
          ? items.get(params)
          : Array.from(items.values()).find(({ [field]: key }) => (
            key === params
          ))
      ), [items]),

      getOwners: useCallback((uid, { root = false, self = false } = {}) => {
        const owners = getParents(uid, items).slice(root ? 0 : 1);

        return !self || !uid ? owners : [...owners, uid];
      }, [items]),

      getSubMenu: useCallback((uid) => (
        Array.from(items.values())
          .filter(({ owner }) => owner === uid)
          .sort(({ index: i1 }, { index: i2 }) => (i1 - i2))
      ), [items])
    };
  }
};

export const MenuImplementCustom = {
  useActived(onIndicatorChange, ...indicatorDeps) {
    const { rootId, activeds, expanded: [expanded], getSubMenu } = useContext(AppMenuContext);
    const { owner } = useContext(OwnerMenuItemContext);

    const [uid] = useMemo(() => {
      const spliceId = owner || rootId;

      if (activeds.has(spliceId)) {
        const result = Array.from(activeds);

        return result.slice(result.indexOf(spliceId) + 1);
      }
      return [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [owner, activeds]);

    useEffect(() => {
      onIndicatorChange(uid, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeds, expanded, ...indicatorDeps]);

    return useMemo(() => {
      const index = getSubMenu(owner || rootId).findIndex(({ uid: subId }) => subId === uid);

      return index < 0 ? false : index;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [owner, uid, activeds, getSubMenu]);
  },

  useBackdropCollapse(collapseByBackdrop, { onClick }) {
    const { expanded: [, onExpandedChange] } = useContext(AppMenuContext);

    return useCallback((...e) => {
      collapseByBackdrop && onExpandedChange(false);
      onClick instanceof Function && onClick(...e);
    }, [collapseByBackdrop, onClick, onExpandedChange]);
  },

  useColors(theme, colors) {
    return useMemo(() => {
      const { actived, background = 'inherit', highlight, text } = colors || {};

      return {
        actived,
        background: background || theme.palette.background.paper,
        highlight,
        text: text || (
          background === 'inherit'
            ? 'inherit'
            : theme.palette.getContrastText(background || theme.palette.background.paper)
        )
      };
    }, [theme, colors]);
  },

  useDroppable(uid, disabled = false) {
    const { dnd, getOption, onCrossDnd, onModifiable, editing } = useContext(AppMenuContext);

    const { drop: [drop, setDrop] = [], drag } = dnd || {};
    const droppableId = `droppable-${uid}`;

    return [
      droppableId,
      !disabled && editing && onModifiable('dnd') === true && dnd && drop === droppableId,

      useCallback((e) => {
        e.stopPropagation();

        if (drag && onCrossDnd(getOption(uid)) === true && droppableId !== drop) {
          setDrop(droppableId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [uid, drop, drag, getOption, onCrossDnd])
    ];
  },

  useIndicatorPosition(variant) {
    const { onIndicatorChange } = useContext(MenuImplementContext);
    const { owner } = useContext(OwnerMenuItemContext);
    const [indicator, setIndicator] = useState({ size: 0, translate: 0 });

    return [
      indicator,

      useCallback((uid, autoNext = true) => {
        const el = document.querySelector(`div[data-appcraft-uid="${uid}"]`);

        if (!el || !uid) {
          setIndicator({ size: 0, translate: 0 });
        } else {
          const { [`offset${variant === 'horizontal' ? 'Left' : 'Top'}`]: mg } = el;

          setIndicator({
            size: _get(el, variant === 'horizontal' ? 'clientWidth' : 'clientHeight') || 0,
            translate: mg || 0
          });

          autoNext && owner && onIndicatorChange?.(owner);
        }
      }, [variant, owner, onIndicatorChange])
    ];
  }
};
