export function getSubstratumWidgets(widgets: any, superior: any, stringify?: boolean): {
    [k: string]: any;
};
export function useGlobalStateReducer(defaultState: any): {}[];
export function useVisualizerReady(uid: any, todos: any): () => any;
export namespace Variable {
    function generate(refs: any, type: any, initValue: any): any;
    function get(refs: any, { type, initValue, treatments }: {
        type: any;
        initValue: any;
        treatments?: any[];
    }): any;
    function template(refs: any, template: any, params: any): any;
}
export namespace Todo {
    function mapValues([src, ...source]: [any, ...any[]], condition: any, refs: any, callbackFn: any, values: any): any;
    function nothing(refs: any, uid: any): any;
    function promise({ uid, description: todoDesc, condition, type, state: setTo, ...todoOpts }: {
        [x: string]: any;
        uid: any;
        description: any;
        condition: any;
        type: any;
        state: any;
    }): (refs: any) => any;
    function url(refs: any, url: any, search: any): string;
    function valid(condition: any, refs: any): any;
}
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
