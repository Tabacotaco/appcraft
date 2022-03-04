export namespace AppMenuCustom {
    function useActived(defaultActived: any, getOption: any, getOwners: any): any[];
    function useActived(defaultActived: any, getOption: any, getOwners: any): any[];
    function useDndState(dnd: any, onDnd: any): ({
        drop: [any, import("react").Dispatch<any>];
        drag: any;
        dragStart?: undefined;
        dragEnd?: undefined;
    } | {
        dragStart: ({ draggableId, source }: any) => void;
        dragEnd: ({ source: { index: srcIndex, droppableId: srcId }, destination }: any) => void;
        drop?: undefined;
        drag?: undefined;
    })[];
    function useDndState(dnd: any, onDnd: any): ({
        drop: [any, import("react").Dispatch<any>];
        drag: any;
        dragStart?: undefined;
        dragEnd?: undefined;
    } | {
        dragStart: ({ draggableId, source }: any) => void;
        dragEnd: ({ source: { index: srcIndex, droppableId: srcId }, destination }: any) => void;
        drop?: undefined;
        drag?: undefined;
    })[];
    function useModifiable(mode: any, onModifiable: any): (type: any, option: any) => boolean;
    function useModifiable(mode: any, onModifiable: any): (type: any, option: any) => boolean;
    function useExpanded(getOwners: any): (Set<any> | ((open: any, uid: any) => void))[];
    function useExpanded(getOwners: any): (Set<any> | ((open: any, uid: any) => void))[];
    function useMenuMethods(): {
        onRecognize: (option: any) => void;
        getOption: (params: any, field?: any) => any;
        getOwners: (uid: any, { root, self }?: any) => any;
        getSubMenu: (uid: any) => any[];
    };
    function useMenuMethods(): {
        onRecognize: (option: any) => void;
        getOption: (params: any, field?: any) => any;
        getOwners: (uid: any, { root, self }?: any) => any;
        getSubMenu: (uid: any) => any[];
    };
}
export namespace MenuImplementCustom {
    function useActived(onIndicatorChange: any, ...indicatorDeps: any[]): number | false;
    function useActived(onIndicatorChange: any, ...indicatorDeps: any[]): number | false;
    function useBackdropCollapse(collapseByBackdrop: any, { onClick }: {
        onClick: any;
    }): (...e: any[]) => void;
    function useBackdropCollapse(collapseByBackdrop: any, { onClick }: {
        onClick: any;
    }): (...e: any[]) => void;
    function useColors(theme: any, colors: any): {
        actived: any;
        background: any;
        highlight: any;
        text: any;
    };
    function useColors(theme: any, colors: any): {
        actived: any;
        background: any;
        highlight: any;
        text: any;
    };
    function useDroppable(uid: any, disabled?: boolean): (string | boolean | ((e: any) => void))[];
    function useDroppable(uid: any, disabled?: boolean): (string | boolean | ((e: any) => void))[];
    function useIndicatorPosition(variant: any): ({
        size: number;
        translate: number;
    } | ((uid: any, autoNext?: any) => void))[];
    function useIndicatorPosition(variant: any): ({
        size: number;
        translate: number;
    } | ((uid: any, autoNext?: any) => void))[];
}
