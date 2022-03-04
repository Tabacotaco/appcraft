import { lazy, useEffect, useState, useMemo, useCallback, useContext } from 'react';
import cx from 'clsx';

import _debounce from 'lodash/debounce';
import _isPlainObject from 'lodash/isPlainObject';

import { makeStyles } from '@material-ui/core/styles';

import { AppMenuContext, MenuImplementContext, OwnerMenuItemContext } from './_context';


export const INLINED_VARIANT = new Set('horizontal', 'vertical');

const useStyles = makeStyles((theme) => ({
  tab: {
    background: 'none',
    minWidth: 'auto !important',
    opacity: 1,
    padding: 0,
    textTransform: 'inherit !important',

    width: ({ variant }) => (variant === 'vertical' ? '100% !important' : null),
    height: ({ variant }) => (variant === 'horizontal' ? '100% !important' : null),
    maxWidth: ({ variant }) => (variant === 'vertical' ? '100% !important' : null),
    maxHeight: ({ variant }) => (variant === 'horizontal' ? '100% !important' : null),

    '& > .wrapper > li': {
      width: '100%'
    }
  },

  container: {
    alignItems: 'center',
    display: 'flex',
    minHeight: ({ minRowHeightSpacing }) => theme.spacing(minRowHeightSpacing)
  },

  item: {
    display: 'flex',
    height: '100%',
    background: ({ colors: { background } }) => background,
    color: ({ colors: { text } }) => text,
    minHeight: ({ minRowHeightSpacing }) => theme.spacing(minRowHeightSpacing)
  },

  highlight: {
    background: ({ colors: { highlight } }) => (!highlight ? null : `${highlight} !important`)
  },

  hover: {
    '&:hover': {
      background: ({ colors: { highlight } }) => (!highlight ? null : `${highlight} !important`),
      opacity: '0.8 !important',
      cursor: 'pointer'
    }
  },

  action: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',

    '& button, &.icon': {
      opacity: 0.6,
      color: ({ colors: { text } }) => text,

      '&:not(.icon):hover': {
        opacity: 1
      }
    }
  }
}));


// TODO: Export Customs
export function useCallbackState(defaultValue, override) {
  const [[value, callbackFn], setValue] = useState(() => ([
    defaultValue instanceof Function ? defaultValue() : defaultValue,
    null
  ]));

  useEffect(() => {
    if (callbackFn instanceof Function) {
      setValue([value, null]);
      callbackFn(value);
    }
  }, [value]);

  return [
    useMemo(() => (
      override instanceof Function
        ? override(value)
        : value
    ), [value, override]),

    useCallback((newValue, __) => (
      setValue([
        newValue instanceof Function
          ? newValue(value)
          : newValue,
        __
      ])
    ), [value, setValue])
  ];
}

export function useLazyWidget(Widget, ...deps) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const promise = useCallback(_debounce((resolve, LazyWidget) => (
    resolve({ default: LazyWidget })
  )), []);

  return useMemo(() => (
    lazy(() => (
      new Promise((resolve) => promise(resolve, Widget))
    ))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [promise, Widget, ...deps]);
}

export const MenuItemCustom = {
  isProgeny(owner, uid, getSubMenu) {
    const subMenu = getSubMenu(owner);

    return !uid
      ? false
      : Boolean(
        subMenu.find(({ uid: childId }) => (
          childId === uid || MenuItemCustom.isProgeny(childId, uid, getSubMenu)
        ))
      );
  },
  useCollapse(variant, uid, { onOpen, onClose }) {
    const { actived: [actived], expanded: [expanded, onExpandedChange], getSubMenu } = useContext(AppMenuContext);

    return [
      useMemo(() => (
        expanded.has(uid) && (!INLINED_VARIANT.has(variant) || MenuItemCustom.isProgeny(uid, actived, getSubMenu))
      ), [actived, expanded, variant, uid, getSubMenu]),

      {
        collapse: useCallback((e) => {
          e.stopPropagation();

          onExpandedChange(false, uid);
          onClose instanceof Function && onClose(e);
        }, [uid, onClose, onExpandedChange]),

        expand: useCallback((e) => {
          e.stopPropagation();

          onExpandedChange(true, uid);
          onOpen instanceof Function && onOpen(e);
        }, [uid, onOpen, onExpandedChange])
      }
    ];
  },
  useHighlight(footer, href, option, subMenu, onClick) {
    const { editing, actived: [actived, onActivedChange], expanded: [, onExpandedChange] } = useContext(AppMenuContext);
    const { onIndicatorChange } = useContext(MenuImplementContext);

    return [
      actived === option.uid,

      useCallback((e) => {
        const { actived: activedId, expanded: expandedId } = (onClick instanceof Function && onClick({ footer, href, editing, option })) || {};

        e.stopPropagation();

        if (activedId || activedId === false) {
          onActivedChange(activedId || null);
          onIndicatorChange(activedId || null);
        } else if (href || (!footer && editing)) {
          onActivedChange(option.uid);
          onIndicatorChange(option.uid);
        }

        if (expandedId === false) {
          onExpandedChange(false);
        } else if (subMenu.length > 0) {
          if (expandedId) {
            onExpandedChange(true, expandedId);
          } else if (!editing || footer) {
            onExpandedChange(true, option.uid);
          }
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [editing, footer, href, option, onActivedChange, onExpandedChange, onIndicatorChange, onClick, JSON.stringify(subMenu)])
    ];
  },
  useRecognize({ uid, href, ...defaultOption }) {
    const { rootId, getSubMenu, onRecognize } = useContext(AppMenuContext);
    const { owner } = useContext(OwnerMenuItemContext);

    const option = useMemo(() => ({
      ...(!uid.startsWith('AppMenuItem-') && defaultOption),
      uid,
      owner: owner || rootId,
      href
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }), [owner, uid, href, JSON.stringify(defaultOption)]);

    useEffect(() => {
      onRecognize(option);

      return () => onRecognize(option.uid);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [option]);

    return [
      option,

      useMemo(() => getSubMenu(option.uid), [option.uid, getSubMenu])
    ];
  },
  useStyles(colors, minRowHeightSpacing, highlight = false) {
    const { variant } = useContext(MenuImplementContext);
    const classes = useStyles({ colors, minRowHeightSpacing, variant });

    return {
      tab: useCallback((cls) => ({
        ...(_isPlainObject(cls) && cls),

        root: cx(classes.tab, _isPlainObject(cls) ? cls.root : cls),
        wrapper: cx('wrapper', _isPlainObject(cls) && cls.wrapper)
      }), [classes.tab]),

      item: useCallback((cls, isButton = false) => ({
        ...(_isPlainObject(cls) && cls),

        root: cx(classes.item, _isPlainObject(cls) ? cls.root : cls, { [classes.highlight]: highlight, [classes.hover]: isButton }),
        container: cx(classes.container, _isPlainObject(cls) && cls.container),
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }), [highlight, classes.item, classes.highlight, classes.container]),

      action: useCallback((cls, isIcon = false) => ({
        ...(_isPlainObject(cls) && cls),

        root: cx(classes.action, _isPlainObject(cls) ? cls.root : cls, { icon: isIcon })
      }), [classes.action]),

      text: useCallback((cls) => ({
        ...(_isPlainObject(cls) && cls),

        root: cx(_isPlainObject(cls) ? cls.root : cls)
      }), [])
    };
  }
};
