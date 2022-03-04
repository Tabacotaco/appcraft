export function getPropPathname(superiorType: any, superiorPathname: any, propName: any, { hidden, ignoreSpecialKey }?: {
    hidden?: boolean;
    ignoreSpecialKey?: boolean;
}): string;
export function useControlValue({ subject, ready: defaultReady, state: defaultState, widgets: defaultWidgets }: {
    subject?: string;
    ready?: any[];
    state?: {};
    widgets?: any[];
}): any[];
export function useBindingState(pathname: any): boolean;
export function useRefOptions(todos: any, { todo: todoUid, refs, value: variable }: {
    todo: any;
    refs: any;
    value: any;
}): {
    input: any;
    state: any[];
    todo: any[];
};
export function useTypePairs(pathname: any, { type, options }: {
    type: any;
    options: any;
}, override: any): any[];
export function useVariableTreatments(name: any, refs: any, { type, initValue, treatments }: {
    type: any;
    initValue: any;
    treatments: any;
}, onChange: any): any;
export namespace VARIABLE_TYPE {
    namespace Array {
        const init: any[];
    }
    namespace Boolean {
        const init_1: string;
        export { init_1 as init };
    }
    namespace Date {
        const init_2: any;
        export { init_2 as init };
    }
    namespace Number {
        const init_3: string;
        export { init_3 as init };
    }
    namespace Object {
        const init_4: {};
        export { init_4 as init };
    }
    namespace String {
        const init_5: string;
        export { init_5 as init };
    }
    namespace input {
        const init_6: any;
        export { init_6 as init };
    }
    namespace state {
        const init_7: any;
        export { init_7 as init };
    }
    namespace todo {
        const init_8: any;
        export { init_8 as init };
    }
}
export function getTreatmentOptions(refValue: any): any[];
export const ProptypesEditorContext: import("react").Context<{
    InputStyles: {
        size: string;
        color: string;
        variant: string;
        margin: any;
    };
    actived: any;
    classes: any;
    override: {
        control: () => any;
        mixed: () => any;
    };
    definition: any;
    handles: {};
    props: {};
    state: any[];
    substratum: {};
    typePairs: {};
    uid: any;
    onActive: () => any;
    onChange: () => any;
    onElementDispatch: () => any;
    onStateBinding: () => any;
}>;
