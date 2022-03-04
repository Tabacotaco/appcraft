import React from 'react';
import { AppcraftParser } from '@appcraft/prop-types-parser';
import { getRequestURL, getVariableValue } from './_customs';
export declare namespace AppcraftVisualizer {
    namespace def {
        enum BaseTypeName {
            Array = 0,
            Boolean = 1,
            Date = 2,
            Number = 3,
            Object = 4,
            String = 5
        }
        enum RefTypeName {
            input = 0,
            state = 1,
            todo = 2
        }
        type VariableType = keyof typeof BaseTypeName | keyof typeof RefTypeName;
        interface Variable<T extends VariableType = VariableType> {
            uid: string;
            type: T;
            finalType?: BaseTypeName;
            description: string;
            initValue?: Variable[] | Record<string, Variable> | string;
            treatments?: ({
                uid: string;
                description: string;
                name: string;
                args?: Variable[];
            })[];
        }
        interface BaseHandle {
            type: string;
            uid: string;
            description: string;
            conditions?: ({
                source: Variable;
                value: Variable;
            })[];
            state?: string;
        }
        interface RequestHandle extends BaseHandle {
            type: 'request';
            url: string;
            method: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
            header?: Record<string, string>;
            search?: Record<string, Variable>;
            body?: Variable<'Object'>;
        }
        interface CalculatorHandle extends BaseHandle {
            type: 'calculator';
            params: Variable[];
            template: string;
        }
        interface MapHandle extends BaseHandle {
            type: 'map';
            source: Variable;
            pairs: CalculatorHandle[];
        }
        export type StateBinding = {
            path: string;
            typeId: string;
            defaultValue?: any;
        };
        export interface WidgetOptions {
            uid: string;
            superior?: string;
            description?: string;
            index: number;
            importBy?: string;
            typePairs?: Record<string, string>;
            props: Record<string, any>;
            handles: Record<string, (RequestHandle | CalculatorHandle | MapHandle)[]>;
            hoc?: ({
                importBy: string;
                options?: Variable<'Array'>;
            })[];
        }
        export interface Props {
            action?: React.ReactNode;
            children: React.ReactNode;
            proxy: Record<string, React.ElementType>;
            state?: Record<string, StateBinding[]>;
            widgets: WidgetOptions[];
            ready?: (RequestHandle | CalculatorHandle | MapHandle)[];
            definitions?: Record<string, {
                description?: string;
                propTypes: AppcraftParser.def.PropDefinition<'exact'>;
                defaultProps?: Record<string, any>;
            }>;
        }
        export {};
    }
    namespace hooks {
        type HandleSlot = {
            uid: string;
            pathname: string;
            todo: string;
        };
        type HandleRefs = {
            input: any[];
            state: Record<string, Record<string, any>>;
            todo: Record<string, any>;
        };
        export type SubstratumWidgets = (widgets: def.WidgetOptions[], superior?: string) => Record<string, def.WidgetOptions[]>;
        export interface WidgetContext extends Pick<def.Props, 'action' | 'proxy' | 'widgets'> {
            handleRefs: Record<string, HandleRefs>;
            handleSlot?: HandleSlot;
            listeners?: [string, string[]];
            state: Record<string, Record<string, any>>;
            onHandleRefsBound: (e: {
                target: Omit<HandleSlot, 'todo'>;
                refs: HandleRefs;
            }) => void;
            onHandleSlotChange: (e: false | HandleSlot) => void;
            onListenersActived: (e: false | {
                uid: string;
                listeners: string[];
            }) => void;
            onStateChange: (e: Record<string, Record<string, any>>) => void;
        }
        export {};
    }
}
export { getRequestURL, getVariableValue };
export declare const useWidgetWrapper: () => AppcraftVisualizer.hooks.WidgetContext;
export declare const useSubstratumWidgets: AppcraftVisualizer.hooks.SubstratumWidgets;
export declare const useLazyVisualizer: (e: any[]) => React.LazyExoticComponent<React.ComponentType<any>>;
export declare const WidgetWrapper: React.FC<AppcraftVisualizer.def.Props>;
declare const Visualizer: React.FC<Pick<AppcraftVisualizer.def.Props, 'proxy' | 'ready' | 'state' | 'widgets'>>;
export default Visualizer;
