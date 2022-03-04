import React from 'react';
import { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import { ListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';
import { ListItemTextProps } from '@material-ui/core/ListItemText';
import { IconProps } from '@material-ui/core/Icon';
import { TypographyProps } from '@material-ui/core/Typography';
import { AppcraftMenu } from '../utils/_context';
export declare namespace AppcraftBaseItem {
    namespace def {
        type DefinitionNode<ContentPropType> = React.ReactNode | {
            props?: ContentPropType;
            content?: React.ReactNode;
        };
        type DefinitionText = React.ReactNode | {
            props?: TypographyProps;
            text?: React.ReactNode;
        };
        type ContentHidden = {
            icon?: boolean;
            text?: boolean;
            action?: boolean;
        };
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
            };
        }
        export {};
    }
    namespace hooks {
        type InitProps = [boolean, AppcraftMenu.SubMenuProps];
        type SubCollapse = [boolean, React.FC<IconProps>, React.MouseEventHandler<HTMLElement>];
    }
}
export declare function makeSubMenu<MenuItemProps>(useInitProps: (props: MenuItemProps) => AppcraftBaseItem.hooks.InitProps): (AnchorComponent: React.FC<MenuItemProps> | React.ForwardRefExoticComponent<MenuItemProps>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<MenuItemProps> & React.RefAttributes<any>>;
declare const BaseMenuItem: React.FC<AppcraftBaseItem.def.Props>;
export default BaseMenuItem;
