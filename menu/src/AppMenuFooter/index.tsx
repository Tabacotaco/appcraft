import React from 'react';
import PropTypes from 'prop-types';

import cx from 'clsx';
import { generate as uuid } from 'shortid';

import Tab from '@material-ui/core/Tab';
import { makeStyles } from '@material-ui/core/styles';

import { BaseSubMenuOptions, MenuItemHiddenOptions, MenuItemTextOptions, NodeOptions } from '../utils/prop-types';
import { AppMenuContext, MenuImplementContext, OwnerMenuItemContext } from '../utils/_context';
import { MenuItemCustom } from '../utils/_customs';

import BaseMenuItem, { makeSubMenu } from '../BaseMenuItem';
import { AppcraftMenuItem } from '../AppMenuItem';
import { AppcraftSubheader } from '../AppMenuSubheader';


// TODO: TS Namespace
namespace AppcraftFooter {
  export namespace def {
    export type Props = Pick<AppcraftMenuItem.def.Props, 'BaseSubMenu' | 'button' | 'href' | 'hidden' | 'children' | 'classes' | 'className' | 'onClick'>
      & Pick<AppcraftSubheader.def.Props, 'action' | 'icon' | 'primary' | 'secondary' | 'textProps'>;
  }

  export namespace hooks {

  }
}


// TODO: Custom Hooks & HOC
const useStyles = makeStyles((theme) => ({
  sticky: {
    bottom: 0,
    marginTop: 'auto !important',
    minWidth: 'auto !important',
    position: 'sticky',
    zIndex: theme.zIndex.appBar - 1
  }
}));

const withSubMenu = makeSubMenu<AppcraftFooter.def.Props>(({ children, classes }) => {
  const uid = React.useMemo(() => `AppMenuFooter-${uuid()}`, []);
  const { subMenuProps, subVariant } = React.useContext(MenuImplementContext);
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
      <OwnerMenuItemContext.Provider value={{ footer: true, owner: uid }}>
        {children}
      </OwnerMenuItemContext.Provider>
    )
  }];
});


// TODO: Export Component
const AppMenuFooter: React.FC<AppcraftFooter.def.Props> = ({
  BaseSubMenu,

  action,
  children,
  className,
  classes,
  hidden,
  href,

  icon,
  primary,
  secondary,
  textProps,

  onClick,

  ...props
}) => {
  const { activeds } = React.useContext(AppMenuContext);
  const { colors, minRowHeightSpacing, variant } = React.useContext(MenuImplementContext);
  const [option, subMenu] = MenuItemCustom.useRecognize({ uid: BaseSubMenu.uid, href }) as AppcraftMenuItem.hooks.Recognize;
  const [highlight, handleItemClick] = MenuItemCustom.useHighlight(true, href, option, subMenu, onClick) as AppcraftMenuItem.hooks.Highlight;

  const styles = MenuItemCustom.useStyles(colors, minRowHeightSpacing, highlight) as AppcraftMenuItem.hooks.Styles;
  const $classes = useStyles();

  return (
    <Tab
      component="div"
      value={BaseSubMenu.uid}
      data-appcraft-uid={BaseSubMenu.uid}
      classes={styles.tab({
        ...classes?.tab,

        root: cx(classes?.tab?.root, {
          [$classes.sticky]: variant === 'vertical'
        })
      })}
      label={(
        <BaseMenuItem
          {...props}
          actionRef={BaseSubMenu.actionRef}
          hidden={hidden}
          selected={activeds.has(BaseSubMenu.uid)}
          text={{ props: textProps, primary, secondary }}
          onClick={handleItemClick}
          classes={styles.item(
            { ...classes?.item, container: cx(classes?.item?.container, className) },
            props.button === true || subMenu.length > 0
          )}
          icon={{
            props: {
              ...(!React.isValidElement(icon) && (icon as any)?.props),
              classes: styles.action(classes?.icon, true)
            },
            content: React.isValidElement(icon) ? icon : (icon as any)?.content
          }}
          action={{
            props: {
              ...(!React.isValidElement(action) && (action as any)?.props),
              classes: styles.action(classes?.action)
            },
            content: (
              <>
                {React.isValidElement(action) ? action : (action as any)?.content}

                {BaseSubMenu.action}
              </>
            )
          }}
        />
      )}
    />
  );
};

AppMenuFooter.displayName = 'AppcraftAppMenuFooter';

AppMenuFooter.propTypes = {
  action: NodeOptions,
  button: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: MenuItemHiddenOptions,
  href: PropTypes.string,
  icon: NodeOptions,
  primary: MenuItemTextOptions,
  secondary: MenuItemTextOptions,
  textProps: PropTypes.object,

  onClick: PropTypes.func,

  classes: PropTypes.exact({
    submenu: PropTypes.string,

    tab: PropTypes.objectOf(
      PropTypes.string
    ),

    item: PropTypes.objectOf(
      PropTypes.string
    ),

    icon: PropTypes.objectOf(
      PropTypes.string
    ),

    action: PropTypes.objectOf(
      PropTypes.string
    )
  })
};

export default withSubMenu(AppMenuFooter);
