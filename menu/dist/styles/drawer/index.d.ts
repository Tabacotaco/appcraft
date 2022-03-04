import React from 'react';
import { DrawerProps } from '@material-ui/core/Drawer';
declare namespace AppcraftDrawer {
    namespace def {
        type HocOptions = {
            anchor?: string;
            borderRadiusSpacing?: number;
            disabledBackdrop?: boolean;
            maxSpacing?: number;
            minSpacing?: number;
            variant?: DrawerProps['variant'];
        };
        interface Props {
            classes?: DrawerProps['classes'] & {
                backdrop?: string;
            };
            drawer: {
                open: boolean;
                onClose: React.MouseEventHandler<HTMLElement>;
            };
        }
    }
}
export default function makeDrawer({ anchor, borderRadiusSpacing, disabledBackdrop, maxSpacing, minSpacing, variant }?: AppcraftDrawer.def.HocOptions): <DrawerImplementProps extends object>(DrawerImplement: React.FC<DrawerImplementProps> | React.ForwardRefExoticComponent<DrawerImplementProps>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<DrawerImplementProps & AppcraftDrawer.def.Props> & React.RefAttributes<any>>;
export {};
