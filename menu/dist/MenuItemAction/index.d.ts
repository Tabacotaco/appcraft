import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { AppcraftMenu } from '../utils/_context';
export declare namespace AppcraftAction {
    namespace def {
        type ActionHandle = (e: AppcraftMenu.MenuItemOptions) => void;
        export interface Props {
            ButtonComponent?: React.FC<ButtonProps> | React.FC<IconButtonProps>;
            ButtonProps?: {
                [prop: string]: any;
            };
            uid: string;
            children?: React.ReactNode;
            type: {
                root?: boolean;
                onAdd?: ActionHandle;
                onEdit?: ActionHandle;
                onRemove?: ActionHandle;
            };
        }
        export {};
    }
    namespace hooks {
        type Actions = [HTMLElement | null, {
            [name: string]: () => void;
        }];
    }
}
declare const _default: React.ForwardRefExoticComponent<AppcraftAction.def.Props & {
    lang?: string;
    locales?: {
        [lang: string]: {
            [code: string]: string;
        };
    };
} & React.RefAttributes<any>>;
export default _default;
