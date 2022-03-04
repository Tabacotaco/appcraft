import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { AppcraftParser } from '@appcraft/prop-types-parser';
import { AppcraftVisualizer } from '../Visualizer';
declare namespace AppcraftDesigner {
    namespace def {
        type DesignerValue = {
            subject?: string;
            ready?: AppcraftVisualizer.def.Props['ready'];
            state?: AppcraftVisualizer.def.Props['state'];
            widgets?: AppcraftVisualizer.def.Props['widgets'];
        };
        interface OverrideControlEvent<T extends AppcraftParser.def.PropType> extends Omit<AppcraftParser.def.PropDefinition<T>, 'options' | 'uid'> {
            pathname: string;
            propName: string;
        }
        interface OverrideMixedOptionEvent<T extends AppcraftParser.def.PropType> {
            pathname: string;
            options: AppcraftParser.def.PropDefinition<T>[];
        }
        export interface Props {
            InputStyles: Pick<TextFieldProps, 'color' | 'variant' | 'size' | 'margin'>;
            actions: React.ReactNode;
            definitions: AppcraftVisualizer.def.Props['definitions'];
            overrideMixedOptions?: <T extends AppcraftParser.def.PropType>(e: OverrideMixedOptionEvent<T>) => AppcraftParser.def.PropDefinition<T>[];
            overridePropControl?: <T extends AppcraftParser.def.PropType>(e: OverrideControlEvent<T>) => React.ElementType | null;
            value?: DesignerValue;
            widgetProxy: Record<string, React.ElementType>;
            onCancel?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
            onConfirm?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, newValue: DesignerValue) => void;
            classes?: {
                root?: string;
                header?: string;
                drawer?: string;
                footer?: string;
                required?: string;
                structure?: string;
            };
        }
        export {};
    }
    namespace hooks {
        type ControlParam = {
            type: symbol;
            target?: string;
            value?: any;
            options?: any;
        };
        type ControlState = {
            actived?: string;
            listeners: string[];
            subject: string;
            ready: AppcraftVisualizer.def.Props['ready'];
            state: AppcraftVisualizer.def.Props['state'];
            widgets: AppcraftVisualizer.def.Props['widgets'];
        };
        export type ControlValue = [Record<string, symbol>, ControlState, (e: ControlParam | ControlParam[]) => void];
        export interface EditorParam extends AppcraftVisualizer.def.WidgetOptions {
            superior?: string;
            description: string;
        }
        export type ElementParam = {
            type: 'SET_STATE' | 'WIDGET_APPEND' | 'WIDGET_DESTROY';
            target?: string;
            value?: any;
            options?: any;
        };
        export interface BindingParam extends AppcraftVisualizer.def.StateBinding {
            uid: string;
        }
        export {};
    }
}
declare const _default: React.ForwardRefExoticComponent<AppcraftDesigner.def.Props & {
    lang?: string;
    locales?: {
        [lang: string]: {
            [code: string]: string;
        };
    };
} & React.RefAttributes<any>>;
export default _default;
