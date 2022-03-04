import React from 'react';
import PropTypes from 'prop-types';

import cx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemIcon, { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction, { ListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';
import ListItemText, { ListItemTextProps } from '@material-ui/core/ListItemText';
import Popover, { PopoverProps } from '@material-ui/core/Popover';
import Tooltip from '@material-ui/core/Tooltip';
import { IconProps } from '@material-ui/core/Icon';
import { TypographyProps } from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { MenuItemHiddenOptions, MenuItemTextOptions, NodeOptions } from '../utils/prop-types';
import { AppcraftMenu } from '../utils/_context';
import { useNode, useSubCollapse } from './_customs';


// TODO: TS Namespace
export namespace AppcraftBaseItem {
  export namespace def {
    type DefinitionNode<ContentPropType> = React.ReactNode | {
      props?: ContentPropType;
      content?: React.ReactNode;
    };

    type DefinitionText = React.ReactNode | {
      props?: TypographyProps;
      text?: React.ReactNode;
    };

    type ContentHidden = { icon?: boolean; text?: boolean; action?: boolean; };

    export interface Props {
      action?: DefinitionNode<ListItemSecondaryActionProps>;
      actionRef?: React.Ref<HTMLDivElement>;
      classes?: ListItemProps['classes'];
      hidden?: ContentHidden;
      icon?: DefinitionNode<ListItemIconProps>;
      onClick?: React.MouseEventHandler<HTMLElement>;
      selected?: boolean;
      text?: {
        props?: ListItemTextProps;
        primary?: DefinitionText;
        secondary?: DefinitionText;
      }
    }
  }

  export namespace hooks {
    export type InitProps = [boolean, AppcraftMenu.SubMenuProps];
    export type SubCollapse = [boolean, React.FC<IconProps>, React.MouseEventHandler<HTMLElement>];
  }
}


// TODO: Custom Hooks & HOC
const useStyles = makeStyles((theme) => ({
  tab: {
    opacity: 1,
    padding: 0,

    '& > .wrapper > li': {
      width: '100%'
    }
  },
  collapsed: {
    display: 'none'
  },
  popover: {
    // @ts-ignore
    borderRadius: ({ borderRadiusSpacing: brs, variant }) => (
      variant === 'top'
        ? theme.spacing(brs, brs, 0, 0)
        : variant === 'right'
          ? theme.spacing(0, brs, brs, 0)
          : variant === 'bottom'
            ? theme.spacing(0, 0, brs, brs)
            : theme.spacing(brs, 0, 0, brs)
    )
  }
}));

export function makeSubMenu<MenuItemProps>(useInitProps: (props: MenuItemProps) => AppcraftBaseItem.hooks.InitProps) {
  return (AnchorComponent: React.FC<MenuItemProps> | React.ForwardRefExoticComponent<MenuItemProps>) => {
    const ResultComponent = React.forwardRef<any, MenuItemProps>((props, ref) => {
      const anchorRef = React.useRef<HTMLElement>(null);
      const [collapsable, { className, toggleProps, ...subMenuProps }] = useInitProps(props) as AppcraftBaseItem.hooks.InitProps;
      const [open, SubIcon, handleSub] = useSubCollapse(subMenuProps) as AppcraftBaseItem.hooks.SubCollapse;

      const { borderRadiusSpacing, variant, props: containerProps, content, onOpen, onClose, ...BaseSubMenu } = subMenuProps;
      const classes = useStyles({ variant, borderRadiusSpacing: borderRadiusSpacing || 0 });

      return (
        <>
          <AnchorComponent
            {...props}
            ref={ref}
            BaseSubMenu={{
              ...BaseSubMenu,

              actionRef: anchorRef,
              onOpen,
              onClose,

              action: collapsable && (
                <IconButton {...toggleProps} size="small" onClick={handleSub}>
                  <SubIcon />
                </IconButton>
              )
            }}
          />

          {collapsable && (
            variant === 'horizontal' || variant === 'vertical'
              ? (
                <div {...containerProps as object} className={cx(containerProps?.className, { [classes.collapsed]: !open })}>
                  {content}
                </div>
              )
              : (
                <Popover
                  {...containerProps}
                  keepMounted
                  open={open}
                  anchorEl={anchorRef.current?.parentElement}
                  onClose={onClose}
                  anchorOrigin={{
                    vertical: variant === 'bottom' ? 'bottom' : 'top',
                    horizontal: variant === 'right' ? 'right' : 'left'
                  }}
                  transformOrigin={{
                    vertical: variant === 'top' ? 'bottom' : 'top',
                    horizontal: variant === 'left' ? 'right' : 'left'
                  }}
                  PaperProps={{
                    ...(containerProps as PopoverProps)?.PaperProps,
                    classes: {
                      ...(containerProps as PopoverProps)?.PaperProps?.classes,
                      root: cx(classes.popover, (containerProps as PopoverProps)?.PaperProps?.classes?.root, className)
                    }
                  }}
                >
                  {content}
                </Popover>
              )
          )}
        </>
      );
    });

    ResultComponent.displayName = 'SubMenuHOC';

    return ResultComponent;
  };
}


// TODO: Export Component
const BaseMenuItem: React.FC<AppcraftBaseItem.def.Props> = ({ action: defaultAction, actionRef, hidden, icon: defaultIcon, text, ...props }) => {
  const { content: icon, props: iconProps } = useNode(defaultIcon);
  const { content: action, props: actionProps } = useNode(defaultAction);
  const { text: primary, props: primaryProps } = useNode(text?.primary, 'text');
  const { text: secondary, props: secondaryProps } = useNode(text?.secondary, 'text');

  return (
    <Tooltip
      TransitionProps={{ unmountOnExit: true, ...((!hidden?.text || !primary) && { in: false }) }}
      title={primary || (<>&nbsp;</>)}
    >
      <ListItem {...props} component="div" disableGutters>
        {hidden?.icon !== true && (
          <ListItemIcon {...iconProps}>
            {icon || (
              <>&nbsp;</>
            )}
          </ListItemIcon>
        )}

        {hidden?.text !== true && (
          <ListItemText
            {...{ ...text?.props, primary, secondary }}
            primaryTypographyProps={{ color: 'inherit', ...primaryProps }}
            secondaryTypographyProps={{ color: 'inherit', ...secondaryProps }}
          />
        )}

        <ListItemSecondaryAction {...actionProps} ref={actionRef}>
          {hidden?.action !== true && action}
        </ListItemSecondaryAction>
      </ListItem>
    </Tooltip>
  );
};

BaseMenuItem.propTypes = {
  action: NodeOptions,
  actionRef: PropTypes.any,
  hidden: MenuItemHiddenOptions,
  icon: NodeOptions,

  // @ts-ignore
  classes: PropTypes.objectOf(
    PropTypes.string.isRequired
  ),

  text: PropTypes.exact({
    props: PropTypes.object,
    primary: MenuItemTextOptions,
    secondary: MenuItemTextOptions
  })
};

export default BaseMenuItem;
