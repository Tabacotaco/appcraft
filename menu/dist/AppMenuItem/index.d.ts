import React from 'react';
import { TabProps } from '@material-ui/core/Tab';
import { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';
import { TypographyProps } from '@material-ui/core/Typography';
import { AppcraftMenu } from '../utils/_context';
import { AppcraftBaseItem } from '../BaseMenuItem';
import { AppcraftAction } from '../MenuItemAction';
export declare namespace AppcraftMenuItem {
    namespace def {
        interface Props extends Pick<AppcraftMenu.MenuItemOptions & AppcraftAction.def.Props['type'] & Pick<AppcraftBaseItem.def.Props, 'hidden'>, 'href' | 'hidden' | 'icon' | 'primary' | 'secondary' | 'uid' | 'onAdd' | 'onEdit' | 'onRemove'> {
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
            onClick?: (e: {
                footer: boolean;
                href?: string;
                editing: boolean;
                option: AppcraftMenu.MenuItemOptions;
            }) => ({
                actived?: false | string;
                expanded?: false | string;
            });
        }
    }
    namespace hooks {
        type Collapse = [boolean, {
            collapse: React.MouseEventHandler<HTMLElement>;
            expand: React.MouseEventHandler<HTMLElement>;
        }];
        type Highlight = [boolean, React.MouseEventHandler<HTMLElement>];
        type Modifiable = [boolean, boolean];
        type Recognize = [AppcraftMenu.MenuItemOptions, AppcraftMenu.MenuItemOptions[]];
        type Dnd = [
            string,
            {
                drop: boolean;
                drag: boolean;
            },
            boolean,
            boolean,
            boolean,
            {
                off: React.MouseEventHandler<HTMLElement>;
                on: React.MouseEventHandler<HTMLElement>;
                over: React.MouseEventHandler<HTMLElement>;
            }
        ];
        type Styles = {
            tab: (cls: string | TabProps['classes']) => TabProps['classes'];
            item: (cls: string | ListItemProps['classes'], isButton?: boolean) => ListItemProps['classes'];
            action: (cls: string | ListItemSecondaryActionProps['classes'], isIcon?: boolean) => ListItemSecondaryActionProps['classes'];
            text: (cls: string | TypographyProps['classes']) => TypographyProps['classes'];
        };
    }
}
declare const _default: React.ForwardRefExoticComponent<AppcraftMenuItem.def.Props & React.RefAttributes<any>>;
export default _default;
