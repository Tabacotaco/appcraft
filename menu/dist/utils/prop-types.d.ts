export const BaseSubMenuOptions: PropTypes.Requireable<PropTypes.InferProps<{
    action: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    actionRef: PropTypes.Requireable<any>;
    onOpen: PropTypes.Requireable<(...args: any[]) => any>;
    onClose: PropTypes.Requireable<(...args: any[]) => any>;
}>>;
export const IconOptions: PropTypes.Requireable<Required<PropTypes.InferProps<{
    name: PropTypes.Requireable<string>;
    type: PropTypes.Requireable<string>;
}>>>;
export const MenuItemHiddenOptions: PropTypes.Requireable<Required<PropTypes.InferProps<{
    icon: PropTypes.Requireable<boolean>;
    text: PropTypes.Requireable<boolean>;
    action: PropTypes.Requireable<boolean>;
}>>>;
export const MenuItemTextOptions: PropTypes.Requireable<PropTypes.ReactNodeLike>;
export namespace MenuItemOptions {
    export const uid: PropTypes.Requireable<string>;
    export { IconOptions as icon };
    export const primary: PropTypes.Requireable<string | {
        [x: string]: string;
    }>;
    export const secondary: PropTypes.Requireable<string | {
        [x: string]: string;
    }>;
}
export const MenuVariantOptions: PropTypes.Requireable<string>;
export const NodeOptions: PropTypes.Requireable<PropTypes.ReactNodeLike>;
import PropTypes from "prop-types";
