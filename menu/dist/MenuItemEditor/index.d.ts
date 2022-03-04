import React from 'react';
import { AppcraftMenu } from '../utils/_context';
export declare namespace AppcraftEditor {
    namespace def {
        type IconGroup = {
            [type: string]: string[];
        };
        export interface IconGroupProps {
            inputRef: React.RefCallback<HTMLElement | null>;
            className?: string;
            classes: {
                [name: string]: string;
            };
            icons?: IconGroup;
            value?: string;
        }
        export interface Props {
            icons?: IconGroup;
            languages?: ({
                code: string;
                display: string;
            })[];
            open: boolean;
            title?: string;
            type: 'add' | 'edit';
            value?: AppcraftMenu.MenuItemOptions;
            onClose?: React.MouseEventHandler<HTMLElement>;
            onChange?: Function;
        }
        export {};
    }
    namespace hooks {
        type Icon = AppcraftMenu.Icon & {
            key: string;
        };
        export type Icons = [Icon[], React.ChangeEventHandler<HTMLInputElement>];
        export type Dialog = [
            AppcraftMenu.MenuItemOptions,
            boolean,
            {
                add: React.MouseEventHandler<HTMLButtonElement>;
                confirm: React.MouseEventHandler<HTMLButtonElement>;
                icon: React.ChangeEventHandler<HTMLInputElement>;
                lang: React.ChangeEventHandler<HTMLInputElement>;
                primary: React.ChangeEventHandler<HTMLInputElement>;
                remove: React.MouseEventHandler<HTMLButtonElement>;
            }
        ];
        export {};
    }
}
declare const _default: React.ForwardRefExoticComponent<AppcraftEditor.def.Props & {
    lang?: string;
    locales?: {
        [lang: string]: {
            [code: string]: string;
        };
    };
} & React.RefAttributes<any>>;
export default _default;
