import React from 'react';
import { AppcraftParser } from '@appcraft/prop-types-parser';
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
        type Condition = {
            uid: string;
            description: string;
            source: Variable;
            value: Variable;
        };
        interface HandleBase {
            type: string;
            uid: string;
            description: string;
            state?: string;
            condition?: Condition[];
        }
        interface RequestHandle extends HandleBase {
            type: 'request';
            url: string;
            method: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
            header?: Record<string, string>;
            search?: Record<string, Variable>;
            body?: Variable<'Object'>;
        }
        interface CalculatorHandle extends HandleBase {
            type: 'calculator';
            params: Variable[];
            template: string;
        }
        interface MapSource extends Variable<'Array'> {
            condition?: Condition[];
        }
        interface MapPair extends CalculatorHandle {
            path: string;
        }
        interface MapHandle extends HandleBase {
            type: 'map';
            source: MapSource[];
            pairs: MapPair[];
        }
        export type StateBinding = {
            path: string;
            typeId: string;
            defaultValue?: any;
        };
        interface OptionsBase {
            description?: string;
            handles: Record<string, (RequestHandle | CalculatorHandle | MapHandle)[]>;
            importBy?: string;
            typePairs?: Record<string, string>;
            uid: string;
        }
        interface DecorationOptions extends OptionsBase {
            options: Record<string, any>;
        }
        export interface WidgetOptions extends OptionsBase {
            decoration?: DecorationOptions[];
            index: number;
            props: Record<string, any>;
            superior?: string;
        }
        export interface Props {
            children: React.ReactNode;
            proxy: Record<string, React.ElementType>;
            ready?: (RequestHandle | CalculatorHandle | MapHandle)[];
            state?: Record<string, StateBinding[]>;
            widgets: WidgetOptions[];
            definitions?: {
                decorations?: Record<string, {
                    description?: string;
                    propTypes?: AppcraftParser.def.PropDefinition<'arrayOf'>;
                    configTypes?: AppcraftParser.def.PropDefinition<'arrayOf'>;
                    defaultProps?: Record<string, any>;
                }>;
                props?: Record<string, {
                    description?: string;
                    propTypes: AppcraftParser.def.PropDefinition<'exact'>;
                    defaultProps?: Record<string, any>;
                }>;
            };
        }
        export {};
    }
}
export declare function WidgetImplement({ lazyDeps, uid, ready }: {
    lazyDeps?: any[];
    uid?: string;
    ready: AppcraftVisualizer.def.Props['ready'];
}): JSX.Element;
export declare const WidgetWrapper: React.FC<AppcraftVisualizer.def.Props>;
declare const Visualizer: React.FC<Pick<AppcraftVisualizer.def.Props, 'proxy' | 'ready' | 'state' | 'widgets'>>;
export default Visualizer;
