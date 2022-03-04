/// <reference types="react" />
import AppMenu from './AppMenu';
import AppMenuFooter from './AppMenuFooter';
import AppMenuItem from './AppMenuItem';
import AppMenuSubheader from './AppMenuSubheader';
import MenuItemAction from './MenuItemAction';
import MenuItemEditor from './MenuItemEditor';
import styles from './styles';
export { AppMenu, AppMenuFooter, AppMenuItem, AppMenuSubheader, MenuItemAction, MenuItemEditor, styles };
declare const _default: {
    AppMenu: import("react").FC<import("./AppMenu").AppcraftMenuImpl.def.Props>;
    AppMenuFooter: import("react").ForwardRefExoticComponent<Pick<import("./AppMenuItem").AppcraftMenuItem.def.Props, "button" | "hidden" | "className" | "children" | "href" | "onClick" | "classes" | "BaseSubMenu"> & Pick<import("./AppMenuSubheader").AppcraftSubheader.def.Props, "action" | "icon" | "primary" | "secondary" | "textProps"> & import("react").RefAttributes<any>>;
    AppMenuItem: import("react").ForwardRefExoticComponent<import("./AppMenuItem").AppcraftMenuItem.def.Props & import("react").RefAttributes<any>>;
    AppMenuSubheader: import("react").ForwardRefExoticComponent<import("./AppMenuSubheader").AppcraftSubheader.def.Props & {
        lang?: string;
        locales?: {
            [lang: string]: {
                [code: string]: string;
            };
        };
    } & import("react").RefAttributes<any>>;
    MenuItemAction: import("react").ForwardRefExoticComponent<import("./MenuItemAction").AppcraftAction.def.Props & {
        lang?: string;
        locales?: {
            [lang: string]: {
                [code: string]: string;
            };
        };
    } & import("react").RefAttributes<any>>;
    MenuItemEditor: import("react").ForwardRefExoticComponent<import("./MenuItemEditor").AppcraftEditor.def.Props & {
        lang?: string;
        locales?: {
            [lang: string]: {
                [code: string]: string;
            };
        };
    } & import("react").RefAttributes<any>>;
    styles: {
        makeDrawer: typeof import("./styles").makeDrawer;
    };
};
export default _default;
