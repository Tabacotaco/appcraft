export function useCallbackState(defaultValue: any, override: any): any[];
export function useLazyWidget(Widget: any, ...deps: any[]): import("react").LazyExoticComponent<import("react").ComponentType<any>>;
export const INLINED_VARIANT: Set<string>;
export namespace MenuItemCustom {
    function isProgeny(owner: any, uid: any, getSubMenu: any): boolean;
    function isProgeny(owner: any, uid: any, getSubMenu: any): boolean;
    function useCollapse(variant: any, uid: any, { onOpen, onClose }: {
        onOpen: any;
        onClose: any;
    }): (boolean | {
        collapse: (e: any) => void;
        expand: (e: any) => void;
    })[];
    function useCollapse(variant: any, uid: any, { onOpen, onClose }: {
        onOpen: any;
        onClose: any;
    }): (boolean | {
        collapse: (e: any) => void;
        expand: (e: any) => void;
    })[];
    function useHighlight(footer: any, href: any, option: any, subMenu: any, onClick: any): (boolean | ((e: any) => void))[];
    function useHighlight(footer: any, href: any, option: any, subMenu: any, onClick: any): (boolean | ((e: any) => void))[];
    function useRecognize({ uid, href, ...defaultOption }: {
        [x: string]: any;
        uid: any;
        href: any;
    }): (import("./_context").AppcraftMenu.MenuItemOptions[] | {
        uid: any;
        owner: string;
        href: any;
    })[];
    function useRecognize({ uid, href, ...defaultOption }: {
        [x: string]: any;
        uid: any;
        href: any;
    }): (import("./_context").AppcraftMenu.MenuItemOptions[] | {
        uid: any;
        owner: string;
        href: any;
    })[];
    function useStyles(colors: any, minRowHeightSpacing: any, highlight?: boolean): {
        tab: (cls: any) => any;
        item: (cls: any, isButton?: any) => any;
        action: (cls: any, isIcon?: any) => any;
        text: (cls: any) => any;
    };
    function useStyles(colors: any, minRowHeightSpacing: any, highlight?: boolean): {
        tab: (cls: any) => any;
        item: (cls: any, isButton?: any) => any;
        action: (cls: any, isIcon?: any) => any;
        text: (cls: any) => any;
    };
}
