export function useGlobalStateReducer(defaultState: any): any[];
export function useVisualizerReady(uid: any, todos: any): () => void;
export function useWidgets(widgets: any, superior: any, stringify?: boolean): {
    [k: string]: any;
};
export function useWidgetElement(withErrorBoundary: any, importBy: any): any;
export function useWidgetProps({ uid, description, props: defaultProps, handles: defaultHandles }: {
    uid: any;
    description: any;
    props: any;
    handles: any;
}, widgetState: any): any;
export const WidgetProvider: import("react").Provider<{
    action: any;
    definitions: any;
    handleRefs: {};
    handleSlot: any;
    listeners: any;
    proxy: {};
    state: {};
    widgets: any[];
    onHandleRefsBound: (_e: any) => any;
    onHandleSlotChange: (_e: any) => any;
    onListenersActived: (_e: any) => any;
    onStateChange: (_e: any) => any;
}>;
export { getURL as getRequestURL };
export const getVariableValue: any;
export function useWidgetContext(): {
    action: any;
    definitions: any;
    handleRefs: {};
    handleSlot: any;
    listeners: any;
    proxy: {};
    state: {};
    widgets: any[];
    onHandleRefsBound: (_e: any) => any;
    onHandleSlotChange: (_e: any) => any;
    onListenersActived: (_e: any) => any;
    onStateChange: (_e: any) => any;
};
declare function getURL(refs: any, url: any, search: any): string;
