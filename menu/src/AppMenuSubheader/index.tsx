import React from 'react';
import PropTypes from 'prop-types';

import cx from 'clsx';

import { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';
import { ListItemTextProps } from '@material-ui/core/ListItemText';
import { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import BaseMenuItem, { AppcraftBaseItem } from '../BaseMenuItem';
import MenuItemAction, { AppcraftAction } from '../MenuItemAction';

import makeLocales, { useLocales } from '../utils/locales';
import { AppMenuContext, MenuImplementContext } from '../utils/_context';
import { MenuItemHiddenOptions, MenuItemTextOptions, NodeOptions } from '../utils/prop-types';
import { MenuItemCustom } from '../utils/_customs';
import { useRecognizeEffect } from './_customs';

import LocalesEn from '../_assets/locales/en/menu-item-action.json';
import LocalesZh from '../_assets/locales/zh-Hant/menu-item-action.json';


// TODO: TS Namespace
export namespace AppcraftSubheader {
  export namespace def {
    export interface Props extends Pick<
      AppcraftBaseItem.def.Props & AppcraftBaseItem.def.Props['text'] & AppcraftAction.def.Props['type'],
      'action' | 'hidden' | 'icon' | 'primary' | 'secondary' | 'onAdd'
    > {
      button?: boolean;
      className?: string;
      textProps?: ListItemTextProps;

      classes?: {
        action?: string | ListItemSecondaryActionProps['classes'];
        icon?: string | ListItemIconProps['classes'];
        item?: ListItemProps['classes'];
      }
    }
  }

  export namespace hooks {
    export type Styles = {
      item: (cls: string | ListItemProps['classes'], isButton?: boolean) => ListItemProps['classes'];
      action: (cls: string | ListItemSecondaryActionProps['classes'], isIcon?: boolean) => ListItemSecondaryActionProps['classes'];
      text: (cls: string | TypographyProps['classes']) => TypographyProps['classes'];
    };
  }
}


// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  sticky: {
    minWidth: 'auto !important',
    position: 'sticky',
    top: 0,
    zIndex: theme.zIndex.appBar + 1
  }
}));


// TODO: Export Component
const AppMenuSubheader: React.FC<AppcraftSubheader.def.Props> = ({
  action,
  className,
  classes,
  hidden,
  icon,
  primary,
  secondary,
  textProps,

  onAdd,

  ...props
}) => {
  const { editing, rootId } = React.useContext(AppMenuContext);
  const { variant, colors, minRowHeightSpacing } = React.useContext(MenuImplementContext);
  const { lang, defaultLocales } = useLocales();

  const styles = MenuItemCustom.useStyles(colors, minRowHeightSpacing) as AppcraftSubheader.hooks.Styles;
  const $classes = useStyles();

  useRecognizeEffect(rootId);

  return (
    <BaseMenuItem
      {...props}
      hidden={editing && onAdd instanceof Function ? { ...hidden, text: true } : hidden}
      text={{ props: textProps, primary, secondary }}
      classes={styles.item({
        ...classes?.item,

        container: cx(classes?.item?.container, className, {
          [$classes.sticky]: variant === 'vertical'
        })
      }, props.button === true)}
      icon={{
        props: {
          ...(!React.isValidElement(icon) && (icon as any)?.props),
          classes: styles.action(classes?.icon, true)
        },
        content: editing && onAdd instanceof Function
          ? (
            <MenuItemAction
              lang={lang}
              locales={defaultLocales}
              uid={rootId}
              type={{ root: true, onAdd }}
            />
          )
          : (React.isValidElement(icon) ? icon : (icon as any)?.content)
      }}
      action={{
        props: {
          ...(!React.isValidElement(action) && (action as any)?.props),
          classes: styles.action(classes?.action)
        },
        content: React.isValidElement(action) ? action : (action as any)?.content
      }}
    />
  );
}

AppMenuSubheader.propTypes = {
  action: NodeOptions,
  button: PropTypes.bool,
  className: PropTypes.string,
  hidden: MenuItemHiddenOptions,
  icon: NodeOptions,
  primary: MenuItemTextOptions,
  secondary: MenuItemTextOptions,
  textProps: PropTypes.object,

  onAdd: PropTypes.func,

  classes: PropTypes.exact({
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

export default makeLocales({
  en: LocalesEn,
  'zh-Hant': LocalesZh
})(AppMenuSubheader);
