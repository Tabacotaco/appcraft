import { Dispatch, MouseEventHandler, MutableRefObject, ReactNode, createContext } from 'react';

import { IconButtonProps } from '@material-ui/core/IconButton';
import { PopoverProps } from '@material-ui/core/Popover';


export namespace AppcraftMenu {
  export type Colors = { actived?: string; background?: string; highlight?: string; text?: string; };
  export type Icon = { type: 'mui' | string; name: string; };
  export type Text = { [lang: string]: string; };
  export type Variant = 'horizontal' | 'vertical';
  export type SubVariant = Variant | 'top' | 'bottom' | 'left' | 'right';

  export interface MenuItemOptions {
    href?: string;
    index?: number;
    owner?: string;
    uid?: string;

    icon?: Icon;
    primary?: string | Text;
    secondary?: string | Text;
  }

  export interface SubMenuProps {
    borderRadiusSpacing?: number;
    className?: string;
    collapseByBackdrop?: boolean;
    content: React.ReactNode;
    props?: PopoverProps | { className?: string; };
    toggleProps?: IconButtonProps;
    uid: string;
    variant: 'top' | 'bottom' | 'right' | 'left' | 'horizontal' | 'vertical';

    onOpen: MouseEventHandler<HTMLElement>;
    onClose: MouseEventHandler<HTMLElement>;
  };

  export interface SubMenuOptions extends Omit<SubMenuProps, 'borderRadiusSpacing' | 'content' | 'props' | 'variant'> {
    action: ReactNode;
    actionRef: MutableRefObject<HTMLDivElement>;
  }

  export interface AppMenuContext {
    actived: [string, Dispatch<string>];
    activeds: Set<string>;
    dnd: false | { drag: string; drop: [string, Dispatch<string>]; };
    editing: boolean;
    expanded: [Set<string>, (open: boolean, uid?: string) => void];
    rootId: string;

    getOption: (params: any, field: string) => AppcraftMenu.MenuItemOptions | null;
    getOwners: (uid: string, options?: { root?: boolean; self?: boolean; }) => string | string[] | null;
    getSubMenu: (uid: string) => AppcraftMenu.MenuItemOptions[];

    onCrossDnd: (item: AppcraftMenu.MenuItemOptions) => boolean;
    onModifiable: (type: 'dnd' | 'edit', item?: AppcraftMenu.MenuItemOptions) => boolean;
    onRecognize: (item: string | AppcraftMenu.MenuItemOptions) => void;
  }

  export interface MenuImplementContext {
    colors: AppcraftMenu.Colors;
    isDraggingOver: boolean;
    minRowHeightSpacing: number;
    subMenuProps?: AppcraftMenu.SubMenuProps;
    subVariant?: AppcraftMenu.SubVariant;
    variant: AppcraftMenu.Variant;

    onIndicatorChange: (uid: string, autoNext?: boolean) => void;
  }
}

export const AppMenuContext = createContext<AppcraftMenu.AppMenuContext>({
  actived: [null, () => null],
  activeds: new Set(),
  dnd: false,
  editing: false,
  expanded: [null, () => null],
  rootId: 'root',

  getOption: () => null,
  getOwners: () => null,
  getSubMenu: () => [],

  onCrossDnd: () => false,
  onModifiable: () => false,
  onRecognize: () => null
});

export const MenuImplementContext = createContext<AppcraftMenu.MenuImplementContext>({
  colors: { actived: null, background: null, highlight: null, text: null },
  isDraggingOver: false,
  minRowHeightSpacing: 6,
  subMenuProps: null,
  subVariant: null,
  variant: 'vertical',

  onIndicatorChange: () => null
});

export const OwnerMenuItemContext = createContext<{ footer: boolean; owner: string; }>({
  footer: false,
  owner: null
});

export const StyleContext = createContext<{
  style: 'drawer';
  menuRef: MutableRefObject<{
    collapseAll: () => void;
  }>;
}>({
  style: null,
  menuRef: null
});
