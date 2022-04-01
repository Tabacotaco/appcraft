export function getSubstratumWidgets(widgets: any, superior: any, stringify?: boolean): {
    [k: string]: any;
};
export function useGlobalStateReducer(defaultState: any): any[];
export function useVisualizerReady(uid: any, todos: any): () => any;
export function getConditionValid(condition: any, refs: any): any;
export function getInitialVariable(refs: any, type: any, initValue: any): any;
export function getRequestURL(refs: any, url: any, search: any): string;
export function getTodoPromise({ uid, description: todoDesc, condition, type, state: setTo, ...todoOpts }: {
    [x: string]: any;
    uid: any;
    description: any;
    condition: any;
    type: any;
    state: any;
}): (refs: any) => any;
export function getTreatedVariable(refs: any, { type, initValue, treatments }: {
    type: any;
    initValue: any;
    treatments?: any[];
}): any;
export const WidgetProvider: import("react").Provider<{
    definitions: any;
    disabledProps: Map<any, any>;
    listeners: any;
    proxy: {};
    state: {};
    widgets: any[];
    onPropsDisable: (..._e: any[]) => any;
    onListenersActived: (_e: any) => any;
    onStateChange: (_e: any) => any;
}>;
export function useWidgetContext(): {
    definitions: any;
    disabledProps: Map<any, any>;
    listeners: any;
    proxy: {};
    state: {};
    widgets: any[];
    onPropsDisable: (..._e: any[]) => any;
    onListenersActived: (_e: any) => any;
    onStateChange: (_e: any) => any;
};
export function useSubstratumWidgets({ superior, stringify }?: {
    superior?: any;
    stringify?: boolean;
}): {
    [k: string]: any;
};
