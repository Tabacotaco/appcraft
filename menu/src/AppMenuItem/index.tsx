import React from 'react';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import cx from 'clsx';
import { generate as uuid } from 'shortid';

import _get from 'lodash/get';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import Tab, { TabProps } from '@material-ui/core/Tab';
import { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';
import { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ImportExportIcon from '@material-ui/icons/ImportExport';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import makeLocales, { useLocales } from '../utils/locales';
import { AppcraftMenu, AppMenuContext, MenuImplementContext, OwnerMenuItemContext } from '../utils/_context';
import { BaseSubMenuOptions, MenuItemHiddenOptions, MenuItemOptions } from '../utils/prop-types';
import { MenuItemCustom } from '../utils/_customs';

import BaseMenuItem, { AppcraftBaseItem, makeSubMenu } from '../BaseMenuItem';
import MenuItemAction, { AppcraftAction } from '../MenuItemAction';
import { useDnd, useModifiable } from './_customs';

import LocalesEn from '../_assets/locales/en/menu-item-action.json';
import LocalesZh from '../_assets/locales/zh-Hant/menu-item-action.json';


// TODO: TS Namespace
export namespace AppcraftMenuItem {
  export namespace def {
    export interface Props extends Pick<
      AppcraftMenu.MenuItemOptions & AppcraftAction.def.Props['type'] & Pick<AppcraftBaseItem.def.Props, 'hidden'>,
      'href' | 'hidden' | 'icon' | 'primary' | 'secondary' | 'uid' | 'onAdd' | 'onEdit' | 'onRemove'
    > {
      BaseSubMenu: AppcraftMenu.SubMenuOptions;

      button?: boolean;
      children: React.ReactNode;
      className?: string;
      dragIndex?: number;

      classes?: {
        action?: string | ListItemSecondaryActionProps['classes'];
        icon?: string | ListItemIconProps['classes'];
        item?: ListItemProps['classes'];
        primary?: string | TypographyProps['classes'];
        secondary?: string | TypographyProps['classes'];
        submenu?: string;
        tab?: TabProps['classes'];
      };

      onClick?: (e: { footer: boolean; href?: string; editing: boolean; option: AppcraftMenu.MenuItemOptions; }) => ({
        actived?: false | string;
        expanded?: false | string;
      });
    }
  }

  export namespace hooks {
    export type Collapse = [boolean, { collapse: React.MouseEventHandler<HTMLElement>; expand: React.MouseEventHandler<HTMLElement>; }];
    export type Highlight = [boolean, React.MouseEventHandler<HTMLElement>];
    export type Modifiable = [boolean, boolean];
    export type Recognize = [AppcraftMenu.MenuItemOptions, AppcraftMenu.MenuItemOptions[]];

    export type Dnd = [string, { drop: boolean; drag: boolean; }, boolean, boolean, boolean, {
      off: React.MouseEventHandler<HTMLElement>;
      on: React.MouseEventHandler<HTMLElement>;
      over: React.MouseEventHandler<HTMLElement>;
    }];

    export type Styles = {
      tab: (cls: string | TabProps['classes']) => TabProps['classes'];
      item: (cls: string | ListItemProps['classes'], isButton?: boolean) => ListItemProps['classes'];
      action: (cls: string | ListItemSecondaryActionProps['classes'], isIcon?: boolean) => ListItemSecondaryActionProps['classes'];
      text: (cls: string | TypographyProps['classes']) => TypographyProps['classes'];
    };
  }
}


// TODO: Custom Hooks & HOC
const useStyles = makeStyles((theme) => ({
  dragging: {
    opacity: 0.4,

    '&.over': {
      opacity: 1
    },

    '&.target': {
      opacity: '0.6 !important',
      pointerEvents: 'none !important',
      userSelect: 'none',
      zIndex: theme.zIndex.tooltip
    }
  },

  droppable: {
    // @ts-ignore
    background: ({ colors: { highlight } }) => (!highlight ? null : `${highlight} !important`),
    borderRadius: '50% !important',
    // @ts-ignore
    color: ({ colors: { text } }) => text,
    opacity: '0 !important',
    transform: `translateX(${theme.spacing(-1)}px) !important`,

    '&.over': {
      opacity: '1 !important'
    }
  }
}));

const withSubMenu = makeSubMenu<AppcraftMenuItem.def.Props>(({ children, classes, uid: defaultUid }) => {
  const uid = React.useMemo(() => defaultUid || `AppMenuItem-${uuid()}`, [defaultUid]);
  const { subMenuProps, subVariant } = React.useContext(MenuImplementContext) as { subMenuProps: AppcraftMenu.SubMenuProps; subVariant: AppcraftMenu.SubVariant; };
  const { footer } = React.useContext(OwnerMenuItemContext);
  const [open, submenu] = MenuItemCustom.useCollapse(subVariant, uid, subMenuProps) as AppcraftMenuItem.hooks.Collapse;

  const { borderRadiusSpacing, ...subProps } = subMenuProps || {};

  return [Boolean(children), {
    borderRadiusSpacing,
    className: classes?.submenu,
    open,
    props: subProps,
    uid,
    variant: subVariant,

    onOpen: submenu.expand,
    onClose: submenu.collapse,

    content: (
      <OwnerMenuItemContext.Provider value={{ footer, owner: uid }}>
        {children}
      </OwnerMenuItemContext.Provider>
    )
  }];
});


// TODO: Export Component
const AppMenuItem: React.FC<AppcraftMenuItem.def.Props> = ({
  BaseSubMenu,

  children,
  className,
  classes,
  dragIndex,
  hidden,
  href,

  icon,
  primary,
  secondary,

  onClick,
  onAdd,
  onEdit,
  onRemove,

  ...props
}) => {
  const { lang, defaultLocales } = useLocales();
  const { activeds } = React.useContext(AppMenuContext);
  const { colors, isDraggingOver, minRowHeightSpacing } = React.useContext(MenuImplementContext);

  const [option, subMenu] = MenuItemCustom.useRecognize({ uid: BaseSubMenu.uid, index: dragIndex, href, icon, primary, secondary }) as AppcraftMenuItem.hooks.Recognize;
  const [droppableId, interactived, dragging, crossable, droppable, interactive] = useDnd(option) as AppcraftMenuItem.hooks.Dnd;
  const [highlight, handleItemClick] = MenuItemCustom.useHighlight(false, href, option, subMenu, onClick) as AppcraftMenuItem.hooks.Highlight;
  const [dnd, editable] = useModifiable(option, onAdd, onEdit, onRemove) as AppcraftMenuItem.hooks.Modifiable;

  const styles = MenuItemCustom.useStyles(colors, minRowHeightSpacing, highlight) as AppcraftMenuItem.hooks.Styles;
  const $classes = useStyles({ colors });

  return (
    <>
      <Draggable index={dragIndex} draggableId={BaseSubMenu.uid} isDragDisabled={!interactived.drag}>
        {(dragProv, dragSnap) => (
          <Tab
            {...dragProv.draggableProps}
            ref={dragProv.innerRef}
            component="div"
            value={BaseSubMenu.uid}
            data-appcraft-uid={BaseSubMenu.uid}
            classes={styles.tab({
              ...classes?.tab,
              root: cx(classes?.tab?.root, { [$classes.dragging]: dragging, target: dragSnap.isDragging, over: isDraggingOver })
            })}
            label={(
              <BaseMenuItem
                {...props}
                actionRef={BaseSubMenu.actionRef}
                selected={activeds.has(BaseSubMenu.uid)}
                classes={styles.item({ ...classes?.item, container: cx(classes?.item?.container, className) }, true)}
                hidden={hidden}
                onClick={handleItemClick}
                icon={{
                  props: {
                    'data-dnd-type': 'drag',
                    classes: styles.action(classes?.icon, true),
                    ...dragProv.dragHandleProps,
                    ...(dnd && !dragging && { onMouseDown: BaseSubMenu.onClose, onMouseEnter: interactive.on, onMouseLeave: interactive.off })
                  },
                  content: interactived.drag
                    ? (
                      <ImportExportIcon />
                    )
                    : (icon && (
                      <Icon color="inherit" className={cx({ [icon.name]: icon.type !== 'mui' })}>
                        {icon.type === 'mui' && icon.name}
                      </Icon>
                    ))
                }}
                text={{
                  primary: {
                    props: { classes: styles.text(classes?.primary) },
                    text: typeof primary === 'string' ? primary : _get(primary, lang)
                  },
                  secondary: {
                    props: { classes: styles.text(classes?.secondary) },
                    text: typeof secondary === 'string' ? secondary : _get(secondary, lang)
                  }
                }}
                action={{
                  props: {
                    classes: styles.action(classes?.action),
                    style: dragProv.draggableProps.style
                  },
                  content: (
                    <>
                      {BaseSubMenu.action}

                      {(dnd && crossable && dragging && !dragSnap.isDragging && subMenu.length === 0 && (
                        <IconButton size="small" data-dnd-type="drop" onMouseEnter={interactive.on}>
                          <PlaylistAddIcon />
                        </IconButton>
                      )) || (editable && (
                        // @ts-ignore
                        <MenuItemAction ButtonProps={{ size: 'small' }} lang={lang} locales={defaultLocales} uid={BaseSubMenu.uid} type={{ onAdd, onEdit, onRemove }} />
                      ))}
                    </>
                  )
                }}
              />
            )}
          />
        )}
      </Draggable>

      {crossable && subMenu.length === 0 && (
        <Droppable droppableId={droppableId} isDropDisabled={!droppable}>
          {(dropProv, dropSnap) => (
            <Popover
              ref={dropProv.innerRef}
              keepMounted
              anchorEl={BaseSubMenu.actionRef.current?.parentElement}
              open={droppable && dragging}
              anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
              transformOrigin={{ vertical: 'center', horizontal: 'right' }}
              PaperProps={{
                className: cx($classes.droppable, { over: dropSnap.isDraggingOver }),
                // @ts-ignore
                'data-dnd-type': 'drop',
                onMouseLeave: interactive.off
              }}
            >
              <IconButton color="inherit" {...dropProv.droppableProps} onMouseOver={interactive.over}>
                <PlaylistAddIcon />
              </IconButton>
            </Popover>
          )}
        </Droppable>
      )}
    </>
  );
}

AppMenuItem.propTypes = {
  ...MenuItemOptions,

  children: PropTypes.node,
  className: PropTypes.string,
  dragIndex: PropTypes.number,
  hidden: MenuItemHiddenOptions,
  href: PropTypes.string,

  onClick: PropTypes.func,
  onAdd: PropTypes.func,
  onEdit: PropTypes.func,
  onRemove: PropTypes.func,

  classes: PropTypes.exact({
    submenu: PropTypes.string,

    tab: PropTypes.objectOf(
      PropTypes.string
    ),

    item: PropTypes.objectOf(
      PropTypes.string
    ),

    icon: PropTypes.oneOfType([
      PropTypes.string,

      PropTypes.objectOf(
        PropTypes.string
      )
    ]),

    action: PropTypes.oneOfType([
      PropTypes.string,

      PropTypes.objectOf(
        PropTypes.string
      )
    ]),

    primary: PropTypes.oneOfType([
      PropTypes.string,

      PropTypes.objectOf(
        PropTypes.string
      )
    ]),

    secondary: PropTypes.oneOfType([
      PropTypes.string,

      PropTypes.objectOf(
        PropTypes.string
      )
    ])
  })
};

export default withSubMenu(
  makeLocales({
    en: LocalesEn,
    'zh-Hant': LocalesZh
  })(AppMenuItem)
);

