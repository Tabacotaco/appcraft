export function useDnd(option: any): (string | boolean | {
    drag: boolean;
    drop: boolean;
} | {
    on: ({ currentTarget: { dataset } }: any) => void;
    off: ({ currentTarget: { dataset } }: any) => void;
    over: (e: any) => void;
})[];
export function useModifiable(option: any, onAdd: any, onEdit: any, onRemove: any): boolean[];
