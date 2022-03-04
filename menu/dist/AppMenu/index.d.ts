import React from 'react';
import { DragDropContextProps } from 'react-beautiful-dnd';
import { TabScrollButtonProps } from '@material-ui/core/TabScrollButton';
import { AppcraftMenu } from '../utils/_context';
export declare namespace AppcraftMenuImpl {
    namespace def {
        type dndOptions = {
            index: number;
            uid: string;
        };
        interface BaseProps {
            header?: React.ReactNode;
            footer?: React.ReactNode;
        }
        export type ScrollButtonProps = TabScrollButtonProps & BaseProps;
        export interface ImplProps extends BaseProps {
            className?: string;
            colors?: AppcraftMenu.Colors;
            disabledBackground?: boolean;
            indicatorDeps?: any[];
            minRowHeightSpacing?: number;
            subMenuProps?: AppcraftMenu.SubMenuProps;
            variant?: AppcraftMenu.Variant;
            onClick?: React.MouseEventHandler<HTMLElement>;
        }
        export interface Props extends BaseProps {
            actived?: string;
            dnd?: boolean;
            mode?: 'display' | 'editing';
            rootId?: string;
            onCrossDnd?: AppcraftMenu.AppMenuContext['onCrossDnd'];
            onDnd?: (src: dndOptions, dst: dndOptions) => void;
            onModifiable?: AppcraftMenu.AppMenuContext['onModifiable'];
        }
        export {};
    }
    namespace hooks {
        type Actived = [Set<string>, string, React.Dispatch<string>];
        type ActivedTab = false | number;
        type DndState = [{
            drag: string;
            drop: [string, React.Dispatch<string>];
        }, {
            dragStart: DragDropContextProps['onDragStart'];
            dragEnd: DragDropContextProps['onDragEnd'];
        }];
        type Droppable = [string, boolean, React.MouseEventHandler<HTMLElement>];
        type IndicatorPosition = [{
            size: number;
            translate: number;
        }, (uid: string, autoNext?: boolean) => void];
        type MenuMethods = Pick<AppcraftMenu.AppMenuContext, 'onRecognize' | 'getOption' | 'getOwners' | 'getSubMenu'>;
    }
}
declare const AppMenu: React.FC<AppcraftMenuImpl.def.Props>;
export default AppMenu;
