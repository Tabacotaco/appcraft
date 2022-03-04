import React from 'react';
import { ListItemIconProps } from '@material-ui/core/ListItemIcon';
import { ListItemProps } from '@material-ui/core/ListItem';
import { ListItemSecondaryActionProps } from '@material-ui/core/ListItemSecondaryAction';
import { ListItemTextProps } from '@material-ui/core/ListItemText';
import { TypographyProps } from '@material-ui/core/Typography';
import { AppcraftBaseItem } from '../BaseMenuItem';
import { AppcraftAction } from '../MenuItemAction';
export declare namespace AppcraftSubheader {
    namespace def {
        interface Props extends Pick<AppcraftBaseItem.def.Props & AppcraftBaseItem.def.Props['text'] & AppcraftAction.def.Props['type'], 'action' | 'hidden' | 'icon' | 'primary' | 'secondary' | 'onAdd'> {
            button?: boolean;
            className?: string;
            textProps?: ListItemTextProps;
            classes?: {
                action?: string | ListItemSecondaryActionProps['classes'];
                icon?: string | ListItemIconProps['classes'];
                item?: ListItemProps['classes'];
            };
        }
    }
    namespace hooks {
        type Styles = {
            item: (cls: string | ListItemProps['classes'], isButton?: boolean) => ListItemProps['classes'];
            action: (cls: string | ListItemSecondaryActionProps['classes'], isIcon?: boolean) => ListItemSecondaryActionProps['classes'];
            text: (cls: string | TypographyProps['classes']) => TypographyProps['classes'];
        };
    }
}
declare const _default: React.ForwardRefExoticComponent<AppcraftSubheader.def.Props & {
    lang?: string;
    locales?: {
        [lang: string]: {
            [code: string]: string;
        };
    };
} & React.RefAttributes<any>>;
export default _default;
