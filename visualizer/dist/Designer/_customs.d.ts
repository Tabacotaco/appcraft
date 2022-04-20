export function getPropPathname(superiorType: any, superiorPathname: any, propName: any): string;
export function getTreatmentOptions(refValue: any): any[];
export function useBindingState(pathname: any): boolean[];
export function useTodoWithRefs(refs: any, todos: any, withTodoRefs: any): any[];
export function useTypePairs(pathname: any, { type, options }?: {
    type: any;
    options: any;
}): any[];
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
    namespace source {
        const init_9: any;
        export { init_9 as init };
    }
}
export function getPureObject(obj: any): any;
export const ProptypesEditorContext: import("react").Context<{
    InputStyles: {
        size: string;
        color: string;
        variant: string;
        margin: any;
    };
    actived: any;
    classes: any;
    disableHandleRefs: boolean;
    override: {
        control: () => any;
        mixed: () => any;
    };
    refs: any;
    substratum: {};
    decoration: any[];
    definition: any;
    description: any;
    handles: {};
    importBy: any;
    props: {};
    state: any[];
    typePairs: {};
    uid: any;
    onActive: () => any;
    onChange: () => any;
    onElementDispatch: () => any;
    onPropSelect: () => any;
    onRefsChange: () => any;
    onStateBinding: () => any;
}>;
export function useControlValue({ subject, ready: defaultReady, state: defaultState, widgets: defaultWidgets }: {
    subject?: string;
    ready?: any[];
    state?: {};
    widgets?: any[];
}): any[];
export function useRefOptions(todoDescs: any, refs: any, todoId: any, allowedOptionTypes: any, variable: any): {
    input: any;
    source: any;
    state: any[];
    todo: any[];
};
