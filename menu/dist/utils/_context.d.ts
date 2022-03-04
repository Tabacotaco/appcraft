import { Dispatch, MouseEventHandler, MutableRefObject, ReactNode } from 'react';
import { IconButtonProps } from '@material-ui/core/IconButton';
import { PopoverProps } from '@material-ui/core/Popover';
export declare namespace AppcraftMenu {
    type Colors = {
        actived?: string;
        background?: string;
        highlight?: string;
        text?: string;
    };
    type Icon = {
        type: 'mui' | string;
        name: string;
    };
    type Text = {
        [lang: string]: string;
    };
    type Variant = 'horizontal' | 'vertical';
    type SubVariant = Variant | 'top' | 'bottom' | 'left' | 'right';
    interface MenuItemOptions {
        href?: string;
        index?: number;
        owner?: string;
        uid?: string;
        icon?: Icon;
        primary?: string | Text;
        secondary?: string | Text;
    }
    interface SubMenuProps {
        borderRadiusSpacing?: number;
        className?: string;
        collapseByBackdrop?: boolean;
        content: React.ReactNode;
        props?: PopoverProps | {
            className?: string;
        };
        toggleProps?: IconButtonProps;
        uid: string;
        variant: 'top' | 'bottom' | 'right' | 'left' | 'horizontal' | 'vertical';
        onOpen: MouseEventHandler<HTMLElement>;
        onClose: MouseEventHandler<HTMLElement>;
    }
    interface SubMenuOptions extends Omit<SubMenuProps, 'borderRadiusSpacing' | 'content' | 'props' | 'variant'> {
        action: ReactNode;
        actionRef: MutableRefObject<HTMLDivElement>;
    }
    interface AppMenuContext {
        actived: [string, Dispatch<string>];
        activeds: Set<string>;
        dnd: false | {
            drag: string;
            drop: [string, Dispatch<string>];
        };
        editing: boolean;
        expanded: [Set<string>, (open: boolean, uid?: string) => void];
        rootId: string;
        getOption: (params: any, field: string) => AppcraftMenu.MenuItemOptions | null;
        getOwners: (uid: string, options?: {
            root?: boolean;
            self?: boolean;
        }) => string | string[] | null;
        getSubMenu: (uid: string) => AppcraftMenu.MenuItemOptions[];
        onCrossDnd: (item: AppcraftMenu.MenuItemOptions) => boolean;
        onModifiable: (type: 'dnd' | 'edit', item?: AppcraftMenu.MenuItemOptions) => boolean;
        onRecognize: (item: string | AppcraftMenu.MenuItemOptions) => void;
    }
    interface MenuImplementContext {
        colors: AppcraftMenu.Colors;
        isDraggingOver: boolean;
        minRowHeightSpacing: number;
        subMenuProps?: AppcraftMenu.SubMenuProps;
        subVariant?: AppcraftMenu.SubVariant;
        variant: AppcraftMenu.Variant;
        onIndicatorChange: (uid: string, autoNext?: boolean) => void;
    }
}
export declare const AppMenuContext: import("react").Context<AppcraftMenu.AppMenuContext>;
export declare const MenuImplementContext: import("react").Context<AppcraftMenu.MenuImplementContext>;
export declare const OwnerMenuItemContext: import("react").Context<{
    footer: boolean;
    owner: string;
}>;
export declare const StyleContext: import("react").Context<{
    style: 'drawer';
    menuRef: MutableRefObject<{
        collapseAll: () => void;
    }>;
}>;
