import React, { useRef, useEffect, useState, useCallback } from 'react';

import cx from 'clsx';

import Backdrop from '@material-ui/core/Backdrop';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import { StyleContext } from '../../utils/_context';


// TODO: TS Namespace
namespace AppcraftDrawer {
  export namespace def {
    export type HocOptions = {
      anchor?: string;
      borderRadiusSpacing?: number;
      disabledBackdrop?: boolean;
      maxSpacing?: number;
      minSpacing?: number;
      variant?: DrawerProps['variant'];
    };

    export interface Props {
      classes?: DrawerProps['classes'] & { backdrop?: string; };
      drawer: { open: boolean; onClose: React.MouseEventHandler<HTMLElement>; };
    }
  }
}


// @ts-ignore TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: `${theme.zIndex.drawer - 1} !important`
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',

    // @ts-ignore
    overflowX: ({ anchor }) => (anchor === 'left' || anchor === 'right' ? 'hidden' : null),

    // @ts-ignore
    overflowY: ({ anchor }) => (anchor === 'top' || anchor === 'bottom' ? 'hidden' : null)
  },
  paper: {
    border: 0,
    zIndex: `${theme.zIndex.drawer + 1} !important`,

    // @ts-ignore
    overflowX: ({ anchor }) => (anchor === 'left' || anchor === 'right' ? 'hidden' : null),

    // @ts-ignore
    overflowY: ({ anchor }) => (anchor === 'top' || anchor === 'bottom' ? 'hidden' : null),

    // @ts-ignore
    borderRadius: ({ anchor, borderRadiusSpacing: brs }) => (
      anchor === 'top'
        ? theme.spacing(0, 0, brs, brs)
        : anchor === 'right'
          ? theme.spacing(brs, 0, 0, brs)
          : anchor === 'bottom'
            ? theme.spacing(brs, brs, 0, 0)
            : theme.spacing(0, brs, brs, 0)
    )
  },
  open: {
    // @ts-ignore
    width: ({ anchor, maxSpacing }) => (
      anchor === 'left' || anchor === 'right'
        ? theme.spacing(maxSpacing)
        : null
    ),

    // @ts-ignore
    height: ({ anchor, maxSpacing }) => (
      anchor === 'top' || anchor === 'bottom'
        ? theme.spacing(maxSpacing)
        : null
    ),

    // @ts-ignore
    transition: ({ anchor }) => (
      theme.transitions.create(anchor === 'left' || anchor === 'right' ? 'width' : 'height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      })
    )
  },
  close: {
    // @ts-ignore
    width: ({ anchor, minSpacing }) => (
      anchor === 'left' || anchor === 'right'
        ? theme.spacing(minSpacing)
        : null
    ),

    // @ts-ignore
    height: ({ anchor, minSpacing }) => (
      anchor === 'top' || anchor === 'bottom'
        ? theme.spacing(minSpacing)
        : null
    ),

    // @ts-ignore
    transition: ({ anchor }) => (
      theme.transitions.create(anchor === 'left' || anchor === 'right' ? 'width' : 'height', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    )
  },
  subPopover: {
    zIndex: `${theme.zIndex.drawer} !important`
  },
  subPaper: {
    background: 'none'
  }
}));

export default function makeDrawer({
  anchor = 'left',
  borderRadiusSpacing = 0,
  disabledBackdrop = false,
  maxSpacing = 40,
  minSpacing = 0,
  variant = 'permanent'
}: AppcraftDrawer.def.HocOptions = {}) {
  return <DrawerImplementProps extends object>(DrawerImplement: React.FC<DrawerImplementProps> | React.ForwardRefExoticComponent<DrawerImplementProps>) => (
    React.forwardRef<any, DrawerImplementProps & AppcraftDrawer.def.Props>(({ classes: defaultClasses, drawer: { open, onClose }, ...props }, ref) => {
      const { backdrop: backdropClassName, ...classes } = defaultClasses || {};
      const { transitions } = useTheme();
      const [indicatorDeps, setIndicatorDeps] = useState([open]);

      const menuRef = useRef(null);
      const $classes = useStyles({ anchor, borderRadiusSpacing, minSpacing, maxSpacing }) as Record<string, string>;

      const handleClose = useCallback((...e) => {
        menuRef.current?.collapseAll();

        // @ts-ignore
        onClose(...e);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [menuRef.current, onClose]);

      useEffect(() => {
        const id = setTimeout(() => {
          setIndicatorDeps([open]);
          clearTimeout(id);
        }, transitions.duration.leavingScreen);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [open]);

      return (
        <StyleContext.Provider value={{ style: 'drawer', menuRef }}>
          <Backdrop
            className={cx($classes.backdrop, backdropClassName)}
            open={!disabledBackdrop && open}
            onClick={handleClose}
          />

          <Drawer
            variant={variant}
            classes={{
              ...classes,
              root: cx($classes.drawer, classes.root),
              paper: cx($classes.paper, classes.paper, $classes[open ? 'open' : 'close'])
            }}
          >
            <DrawerImplement
              {...(props as DrawerImplementProps)}
              drawer={{
                open,
                indicatorDeps,
                onClose: handleClose,
                subheader: {
                  action: (
                    <IconButton onClick={handleClose}>
                      {anchor === 'top'
                        ? (<KeyboardArrowUpIcon />)
                        : anchor === 'right'
                          ? (<KeyboardArrowRightIcon />)
                          : anchor === 'bottom'
                            ? (<KeyboardArrowDownIcon />)
                            : (<KeyboardArrowLeftIcon />)}
                    </IconButton>
                  )
                },
                subMenuProps: {
                  borderRadiusSpacing,
                  className: $classes.subPopover,
                  BackdropProps: { invisible: true, onClick: () => setTimeout(handleClose) },
                  PaperProps: { className: $classes.subPaper }
                }
              }}
            />
          </Drawer>
        </StyleContext.Provider>
      );
    })
  );
}
