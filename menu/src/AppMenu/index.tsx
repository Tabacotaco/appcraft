/* eslint-disable react/prop-types */
import React, { useContext, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, DragDropContextProps } from 'react-beautiful-dnd';

import cx from 'clsx';

import _set from 'lodash/set';

import TabScrollButton, { TabScrollButtonProps } from '@material-ui/core/TabScrollButton';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { AppcraftMenu, AppMenuContext, MenuImplementContext, OwnerMenuItemContext, StyleContext } from '../utils/_context';
import { AppMenuCustom, MenuImplementCustom } from './_customs';
import { MenuVariantOptions } from '../utils/prop-types';

import AppMenuFooter from '../AppMenuFooter';
import AppMenuSubheader from '../AppMenuSubheader';


if (typeof window !== 'undefined') {
  _set(window, '__react-beautiful-dnd-disable-dev-warnings', true);
}


// TODO: TS Namespace
export namespace AppcraftMenuImpl {
  export namespace def {
    type dndOptions = { index: number; uid: string };

    interface BaseProps {
      header?: React.ReactNode;
      footer?: React.ReactNode;
    }

    export type ScrollButtonProps = TabScrollButtonProps & BaseProps;

    export interface ImplProps extends BaseProps {
      className?: string;
      colors?: AppcraftMenu.Colors;
      disabledBackground?: boolean;
      indicatorDeps?: any[];
      minRowHeightSpacing?: number;
      subMenuProps?: AppcraftMenu.SubMenuProps;
      variant?: AppcraftMenu.Variant;

      onClick?: React.MouseEventHandler<HTMLElement>;
    }

    export interface Props extends BaseProps {
      actived?: string;
      dnd?: boolean;
      mode?: 'display' | 'editing';
      rootId?: string;

      onCrossDnd?: AppcraftMenu.AppMenuContext['onCrossDnd'];
      onDnd?: (src: dndOptions, dst: dndOptions) => void;
      onModifiable?: AppcraftMenu.AppMenuContext['onModifiable'];
    }
  }

  export namespace hooks {
    export type Actived = [Set<string>, string, React.Dispatch<string>];
    export type ActivedTab = false | number;
    export type DndState = [{ drag: string; drop: [string, React.Dispatch<string>] }, { dragStart: DragDropContextProps['onDragStart'], dragEnd: DragDropContextProps['onDragEnd'] }];
    export type Droppable = [string, boolean, React.MouseEventHandler<HTMLElement>];
    export type IndicatorPosition = [{ size: number; translate: number; }, (uid: string, autoNext?: boolean) => void];
    export type MenuMethods = Pick<AppcraftMenu.AppMenuContext, 'onRecognize' | 'getOption' | 'getOwners' | 'getSubMenu'>;
  }
}


// TODO: Custom Hooks
const INDICATOR_POSITION = {
  TOP: new Set(['horizontal', 'top']),
  BOTTOM: new Set(['horizontal', 'bottom']),
  LEFT: new Set(['vertical', 'right']),
  RIGHT: new Set(['vertical', 'left'])
};

const useStyles = makeStyles((theme) => ({
  root: {
    // @ts-ignore
    background: ({ disabledBackground, colors: { background } }) => (disabledBackground ? null : background),

    // @ts-ignore
    color: ({ colors: { text } }) => text,

    // @ts-ignore
    height: ({ variant }) => (variant === 'vertical' ? '100%' : null),

    // @ts-ignore
    width: ({ variant }) => (variant === 'horizontal' ? '100%' : null)
  },

  scroller: {
    overflow: 'auto !important'
  },

  container: {
    // @ts-ignore
    height: ({ variant }) => (variant === 'vertical' ? '100%' : null),

    // @ts-ignore
    width: ({ variant }) => (variant === 'horizontal' ? '100%' : null)
  },

  indicator: {
    zIndex: theme.zIndex.appBar + 2,

    // @ts-ignore
    background: ({ colors: { actived } }) => actived || theme.palette.secondary.main,

    // @ts-ignore
    top: ({ variant, subVariant }) => (variant !== 'vertical' && INDICATOR_POSITION.TOP.has(subVariant) ? 0 : null),

    // @ts-ignore
    left: ({ variant, subVariant }) => (variant !== 'horizontal' && INDICATOR_POSITION.LEFT.has(subVariant) ? 0 : null),

    // @ts-ignore
    bottom: ({ variant, subVariant }) => (
      variant === 'horizontal' && (
        INDICATOR_POSITION.TOP.has(subVariant)
          ? 'auto'
          : INDICATOR_POSITION.BOTTOM.has(subVariant)
            ? 0
            : null
      )
    ),

    // @ts-ignore
    right: ({ variant, subVariant }) => (
      variant === 'vertical' && (
        INDICATOR_POSITION.LEFT.has(subVariant)
          ? 'auto'
          : INDICATOR_POSITION.RIGHT.has(subVariant)
            ? 0
            : null
      )
    )
  }
}));


// TODO: Export Component
const ScrollButton: React.FC<AppcraftMenuImpl.def.ScrollButtonProps> = ({ direction, header, footer, ...props }) => {
  const { action: headerAction, ...headerProps } = (header as any)?.props;
  const { icon: footerIcon, ...footerProps } = (footer as any)?.props;

  return direction === 'left'
    ? (
      <AppMenuSubheader
        {...headerProps}
        action={{
          props: !React.isValidElement(headerAction) && headerAction?.props,
          content: (
            <>
              {React.isValidElement(headerAction) ? headerAction : headerAction?.content}

              <TabScrollButton {...props} direction="left" />
            </>
          )
        }}
      />
    )
    : (
      <AppMenuFooter
        {...footerProps}
        icon={{
          props: !React.isValidElement(footerIcon) && footerIcon?.props,
          content: (
            <>
              <TabScrollButton {...props} direction="right" />

              {React.isValidElement(footerIcon) ? footerIcon : footerIcon?.content}
            </>
          )
        }}
      />
    );
}

const MenuImplement: React.FC<AppcraftMenuImpl.def.ImplProps> = ({
  children,
  className,
  colors: defaultColors = {},
  disabledBackground = false,
  footer,
  header,
  minRowHeightSpacing = 6,
  subMenuProps: defaultSubMenuProps,
  indicatorDeps,
  variant = 'vertical',

  ...props
}) => {
  const theme = useTheme();
  const { rootId } = useContext(AppMenuContext);
  const { footer: isFooter, owner } = useContext(OwnerMenuItemContext);
  const { variant: subVariant = 'vertical', collapseByBackdrop = false, ...subMenuProps } = defaultSubMenuProps || {};

  const [droppableId, droppable, handleDragOver] = MenuImplementCustom.useDroppable(owner || rootId, isFooter) as AppcraftMenuImpl.hooks.Droppable;
  const [indicator, onIndicatorChange] = MenuImplementCustom.useIndicatorPosition(variant) as AppcraftMenuImpl.hooks.IndicatorPosition;

  const actived = MenuImplementCustom.useActived(onIndicatorChange, ...(indicatorDeps || [])) as AppcraftMenuImpl.hooks.ActivedTab;
  const colors = MenuImplementCustom.useColors(theme, defaultColors) as AppcraftMenu.Colors;
  const classes = useStyles({ colors, disabledBackground, subVariant, variant });

  // @ts-ignore
  const handleClick = MenuImplementCustom.useBackdropCollapse(collapseByBackdrop, props) as React.MouseEventHandler<HTMLElement>;

  return (
    <Droppable droppableId={droppableId} isDropDisabled={!droppable} direction={variant}>
      {(dropProv, dropSnap) => (
        // @ts-ignore
        <MenuImplementContext.Provider value={{ colors, isDraggingOver: dropSnap.isDraggingOver, minRowHeightSpacing, subMenuProps, subVariant, variant, onIndicatorChange }}>
          {/* @ts-ignore */}
          <Tabs
            ref={dropProv.innerRef}
            {...props}
            {...dropProv.droppableProps}
            classes={{
              root: cx(classes.root, className),
              flexContainer: classes.container,
              scroller: classes.scroller,
              indicator: classes.indicator
            }}
            TabIndicatorProps={{
              style: {
                display: actived === false || (colors.actived || 'none') === 'none' ? 'none' : null,
                transform: `translate${variant === 'vertical' ? 'Y' : 'X'}(${indicator.translate}px)`,
                height: variant === 'vertical' ? indicator.size : theme.spacing(0.5),
                width: variant === 'horizontal' ? indicator.size : theme.spacing(0.5),
                top: variant === 'vertical' ? 0 : null,
                left: variant === 'horizontal' ? 0 : null
              }
            }}
            value={actived}
            onClick={handleClick}
            onMouseOver={handleDragOver}
            {...(
              variant === 'horizontal'
                ? {
                  ScrollButtonComponent: ScrollButton,
                  TabScrollButtonProps: { header, footer },
                  orientation: 'horizontal',
                  scrollButtons: (header || footer) ? 'on' : 'auto',
                  variant: !owner ? 'scrollable' : 'standard'
                }
                : {
                  orientation: 'vertical',
                  variant: 'standard'
                }
            )}
          >
            {variant === 'vertical' && header}
            {children}
            {dropProv.placeholder}
            {variant === 'vertical' && footer}
          </Tabs>
        </MenuImplementContext.Provider>
      )}
    </Droppable>
  );
}

const AppMenu: React.FC<AppcraftMenuImpl.def.Props> = ({
  actived: defaultActived,
  dnd = false,
  mode = 'display',
  rootId = 'root',
  footer,
  header,

  onCrossDnd,
  onDnd,
  onModifiable,

  ...props
}) => {
  const { menuRef } = useContext(StyleContext);
  const { owner } = useContext(OwnerMenuItemContext);
  const [value, handles] = AppMenuCustom.useDndState(dnd, onDnd) as AppcraftMenuImpl.hooks.DndState;

  const methods = AppMenuCustom.useMenuMethods() as AppcraftMenuImpl.hooks.MenuMethods;
  const expanded = AppMenuCustom.useExpanded(methods.getOwners) as AppcraftMenu.AppMenuContext['expanded'];
  const [activeds, ...actived] = AppMenuCustom.useActived(defaultActived, methods.getOption, methods.getOwners) as AppcraftMenuImpl.hooks.Actived;
  const handleModifiable = AppMenuCustom.useModifiable(mode, onModifiable) as AppcraftMenu.AppMenuContext['onModifiable'];

  useImperativeHandle(menuRef, () => ({
    collapseAll: () => expanded[1](false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }), []);

  return owner
    ? (
      <MenuImplement {...props} />
    )
    : (
      <AppMenuContext.Provider
        value={{
          ...methods,

          actived,
          activeds,
          rootId,
          dnd: dnd && onDnd instanceof Function ? value : false,
          onCrossDnd: onCrossDnd instanceof Function ? onCrossDnd : () => true,
          onModifiable: handleModifiable,
          editing: handleModifiable('edit') === true,
          expanded
        }}
      >
        <DragDropContext onDragStart={handles.dragStart} onDragEnd={handles.dragEnd}>
          <MenuImplement {...props} {...{ footer, header }} />
        </DragDropContext>
      </AppMenuContext.Provider>
    );
}

AppMenu.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabledBackground: PropTypes.bool,
  dnd: PropTypes.bool,
  footer: PropTypes.node,
  header: PropTypes.node,
  minRowHeightSpacing: PropTypes.number,
  rootId: PropTypes.string,
  theme: PropTypes.object,
  indicatorDeps: PropTypes.array,

  onCrossDnd: PropTypes.func,
  onDnd: PropTypes.func,
  onModifiable: PropTypes.func,

  // @ts-ignore
  actived: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),

  colors: PropTypes.exact({
    actived: PropTypes.string,
    background: PropTypes.string,
    highlight: PropTypes.string,
    text: PropTypes.string
  }),

  mode: PropTypes.oneOf([
    'display',
    'editing'
  ]),

  subMenuProps: PropTypes.shape({
    borderRadiusSpacing: PropTypes.number,
    collapseByBackdrop: PropTypes.bool,
    variant: MenuVariantOptions
  }),

  variant: PropTypes.oneOf([
    'horizontal',
    'vertical'
  ])
};

export default AppMenu;
