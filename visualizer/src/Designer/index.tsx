import React, { useState, useMemo } from 'react';
import { SnackbarProvider } from 'notistack';

import DateFnsUtils from '@date-io/date-fns';
import cx from 'clsx';
import { generate as uuid } from 'shortid';

import _delay from 'lodash/delay';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import InputAdornment from '@material-ui/core/InputAdornment';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import { AppcraftParser } from '@appcraft/prop-types-parser';

import ElementStructure from './element-structure';
import PropsEditor from './props-editor';
import TodoEditor from './todo-editor';
import makeLocales, { useLocales } from '../utils/locales';
import { ProptypesEditorContext, useControlValue } from './_customs';
import { WidgetWrapper, AppcraftVisualizer, useLazyVisualizer } from '../Visualizer';

import LocalesEn from '../_assets/locales/en/designer.json';
import LocalesZh from '../_assets/locales/zh-Hant/designer.json';


// TODO: TS Namespace
namespace AppcraftDesigner {
  export namespace def {
    type DesignerValue = {
      subject?: string;
      ready?: AppcraftVisualizer.def.Props['ready'];
      state?: AppcraftVisualizer.def.Props['state'];
      widgets?: AppcraftVisualizer.def.Props['widgets'];
    };

    interface OverrideControlEvent<T extends AppcraftParser.def.PropType> extends Omit<AppcraftParser.def.PropDefinition<T>, 'options' | 'uid'> {
      pathname: string;
      propName: string;
    };

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
    };
  }

  export namespace hooks {
    type ControlParam = { type: symbol; target?: string; value?: any; options?: any; };

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

    export type ElementParam = { type: 'SET_STATE' | 'WIDGET_APPEND' | 'WIDGET_DESTROY'; target?: string; value?: any; options?: any; };

    export interface BindingParam extends AppcraftVisualizer.def.StateBinding {
      uid: string;
    }
  }
}

const ROOT_ID = uuid();

// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
    paddingRight: theme.spacing(42),

    '& > .AppcraftDesigner-content': {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }
  },
  drawer: {
    position: 'absolute',
    borderLeft: `1px solid ${theme.palette.divider}`,
    overflow: 'hidden !important',
    width: 0,
    zIndex: theme.zIndex.drawer,

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),

    '&.open': {
      width: theme.spacing(42),

      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  },
  appbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,

    '&.AppcraftDesigner-footerbar': {
      marginTop: 'auto',
      bottom: 0,

      '& > * > button': {
        borderTopLeftRadius: '0 !important',
        borderTopRightRadius: '0 !important'
      }
    }
  },
  structure: {
    height: '100%'
  },
  title: {
    '&:hover .AppcraftDesigner-tagIcon': {
      color: theme.palette.primary.main
    }
  }
}));


// TODO: Component
const Designer: React.FC<AppcraftDesigner.def.Props> = ({
  InputStyles,
  actions,
  classes: $classes,
  definitions,
  value: defaultValue,
  widgetProxy,
  overrideMixedOptions,
  overridePropControl,
  onCancel,
  onConfirm
}) => {
  const { getFixedT: dt } = useLocales();
  const [CONTROL_ACTION, { actived, subject, ready, state: globalState, widgets }, dispatch] = useControlValue(defaultValue || {}) as AppcraftDesigner.hooks.ControlValue;
  const [selected, setSelected] = useState(null);
  const classes = useStyles();
  const LazyVisualizer = useLazyVisualizer([globalState, widgets, ready]);

  const state = useMemo(() => (
    Object.entries(globalState).map(([widgetUid, list]) => (
      list.map((widgetState) => ({
        ...widgetState,
        widgetUid,
        widgetDesc: widgets.find(({ uid }) => uid === widgetUid).description
      }))
    )).flat()
  ), [globalState, widgets]);

  const styles = useMemo(() => ({
    color: InputStyles?.color || 'primary',
    margin: InputStyles?.margin,
    size: InputStyles?.size || 'small',
    variant: InputStyles?.variant || 'outlined'
  }), [InputStyles]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <SnackbarProvider maxSnack={4}>
        <WidgetWrapper
          definitions={definitions}
          proxy={widgetProxy}
          state={globalState}
          widgets={widgets}
          action={( // TODO: Widget Event Handle Tip Action
            <Button
              variant="text"
              size="small"
              onClick={({ currentTarget }) => {
                const { pathname } = (currentTarget.closest('[data-pathname]') as HTMLElement).dataset;
                const el = document.getElementById(pathname);

                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setSelected(pathname);
                _delay(() => setSelected(null), 3000);
              }}
            >
              {dt('btn-setting')}
            </Button>
          )}
        >
          <Container disableGutters maxWidth={false} className={cx(classes.root, $classes?.root)}>
            <Container disableGutters maxWidth={false} className={classes.container}>
              <Container disableGutters maxWidth={false} className="AppcraftDesigner-content">
                {/* TODO: Header Toolbar */}
                <AppBar position="static" color="inherit" className={cx(classes.appbar, $classes?.header)} elevation={0}>
                  <Toolbar variant="dense">
                    <TextField
                      className={classes.title}
                      variant="standard"
                      size="small"
                      value={subject}
                      onChange={({ target: { value } }) => dispatch({ type: CONTROL_ACTION.SET_STATE, target: 'subject', value })}
                      InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                          <InputAdornment position="start">
                            <Tooltip title={dt('lbl-description')}>
                              <LabelImportantIcon className="AppcraftDesigner-tagIcon" />
                            </Tooltip>
                          </InputAdornment>
                        )
                      }}
                    />

                    {actions}
                  </Toolbar>
                </AppBar>

                <React.Suspense fallback={null}>
                  <LazyVisualizer uid={ROOT_ID} ready={ready} />
                </React.Suspense>
              </Container>

              {/* TODO: Props Setting */}
              <Drawer
                anchor="right"
                variant="permanent"
                classes={{ paper: cx(classes.drawer, $classes?.drawer, { open: Boolean(actived) }) }}
                open={Boolean(actived)}
              >
                {actived && (
                  actived === ROOT_ID
                    ? (
                      <ProptypesEditorContext.Provider
                        value={{
                          InputStyles: styles,
                          uid: ROOT_ID,
                          handles: { onReady: ready },
                          state,

                          onActive: () => dispatch({ type: CONTROL_ACTION.SET_STATE, target: 'actived', value: null }), // @ts-ignore
                          onChange: ({ handles }) => dispatch({ type: CONTROL_ACTION.RESET_READY, value: handles?.onReady || [] }),

                          classes: {
                            structure: cx(classes.structure, $classes?.structure),
                            drawerPaper: cx(classes.drawer, $classes?.drawer)
                          }
                        }}
                      >
                        <TodoEditor definition={{ type: 'func' }} propName="onReady" />
                      </ProptypesEditorContext.Provider>
                    )
                    : (
                      <PropsEditor
                        InputStyles={styles}
                        selected={selected}
                        state={state}
                        value={actived}
                        overrideMixedOptions={overrideMixedOptions}
                        overridePropControl={overridePropControl}

                        classes={{
                          structure: cx(classes.structure, $classes?.structure),
                          drawerPaper: cx(classes.drawer, $classes?.drawer)
                        }}

                        onChange={(e: AppcraftDesigner.hooks.EditorParam) => (
                          dispatch({ type: CONTROL_ACTION.WIDGET_MODIFY, value: e })
                        )}
                        onElementDispatch={(e: AppcraftDesigner.hooks.ElementParam | AppcraftDesigner.hooks.ElementParam[]) => (
                          dispatch((Array.isArray(e) ? e : [e]).map(({ type, ...param }) => ({ type: CONTROL_ACTION[type], ...param })))
                        )}
                        onStateBinding={({ uid: target, path: value, ...options }: AppcraftDesigner.hooks.BindingParam, checked: boolean) => (
                          dispatch({ type: CONTROL_ACTION[checked ? 'STATE_APPEND' : 'STATE_DESTROY'], target, value, options })
                        )}
                      />
                    )
                )}
              </Drawer>

              {/* TODO: Element Structure */}
              <Drawer
                anchor="right"
                variant="permanent"
                classes={{ paper: cx(classes.drawer, $classes?.drawer, { open: !Boolean(actived) }) }}
                open={!Boolean(actived)}
              >
                <ElementStructure
                  onActived={(value: string) => dispatch({ type: CONTROL_ACTION.SET_STATE, target: 'actived', value })}
                  onAppend={(e: AppcraftDesigner.hooks.EditorParam) => dispatch({ ...e, type: CONTROL_ACTION.WIDGET_APPEND })}
                  onDestroy={(target: string) => dispatch({ type: CONTROL_ACTION.WIDGET_DESTROY, target })}
                  onReadyEdit={() => dispatch({ type: CONTROL_ACTION.SET_STATE, target: 'actived', value: ROOT_ID })}
                />
              </Drawer>
            </Container>

            {/* TODO: Footer Toolbar */}
            {(onCancel instanceof Function || onConfirm instanceof Function) && (
              <AppBar component="footer" position="sticky" color="inherit" className={cx(classes.appbar, $classes?.footer, 'AppcraftDesigner-footerbar')} elevation={0}>
                {/* @ts-ignore */}
                <Toolbar disableGutters fullWidth variant="dense" size="large" component={ButtonGroup}>
                  {onCancel instanceof Function && (
                    <Button
                      variant="contained"
                      color="default"
                      startIcon={(<CloseIcon />)}
                      onClick={onCancel}
                    >
                      {dt('btn-cancel')}
                    </Button>
                  )}

                  {onConfirm instanceof Function && (
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={(<CheckIcon />)}
                      onClick={(e) => onConfirm(e, { subject, ready, state: globalState, widgets })}
                    >
                      {dt('btn-confirm')}
                    </Button>
                  )}
                </Toolbar>
              </AppBar>
            )}
          </Container>
        </WidgetWrapper>
      </SnackbarProvider>
    </MuiPickersUtilsProvider>
  );
};

export default makeLocales({
  en: LocalesEn,
  'zh-Hant': LocalesZh
})(Designer);
