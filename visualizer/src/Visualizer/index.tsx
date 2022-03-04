import React, { useRef, useEffect, useState, useMemo, useCallback } from 'react';

import cx from 'clsx';

import _get from 'lodash/get';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';
import _set from 'lodash/set';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import DesktopAccessDisabledIcon from '@material-ui/icons/DesktopAccessDisabled';

import { AppcraftParser } from '@appcraft/prop-types-parser';

import Widget from './widget';
import { WidgetProvider, getRequestURL, getVariableValue, useGlobalStateReducer, useVisualizerReady, useWidgets, useWidgetContext } from './_customs';


// TODO: TS Namespace
export namespace AppcraftVisualizer {
  export namespace def {
    enum BaseTypeName { Array, Boolean, Date, Number, Object, String };
    enum RefTypeName { input, state, todo };

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
    };

    interface BaseHandle {
      type: string;
      uid: string;
      description: string;
      conditions?: ({ source: Variable; value: Variable; })[]; // FIXME: 待補編輯畫面
      state?: string;
    };

    interface RequestHandle extends BaseHandle {
      type: 'request';
      url: string;
      method: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
      header?: Record<string, string>;
      search?: Record<string, Variable>;
      body?: Variable<'Object'>;
    };

    interface CalculatorHandle extends BaseHandle {
      type: 'calculator';
      params: Variable[];
      template: string;
    };

    interface MapHandle extends BaseHandle { // FIXME: 待補編輯畫面
      type: 'map';
      source: Variable;
      pairs: CalculatorHandle[];
    };

    export type StateBinding = { path: string; typeId: string; defaultValue?: any; };

    export interface WidgetOptions {
      uid: string;
      superior?: string;
      description?: string;
      index: number;
      importBy?: string;
      typePairs?: Record<string, string>;
      props: Record<string, any>;
      handles: Record<string, (RequestHandle | CalculatorHandle | MapHandle)[]>;
      hoc?: ({ importBy: string; options?: Variable<'Array'> })[]; // FIXME: 待補編輯畫面
    };

    export interface Props {
      action?: React.ReactNode;
      children: React.ReactNode;
      proxy: Record<string, React.ElementType>;
      state?: Record<string, StateBinding[]>;
      widgets: WidgetOptions[];
      ready?: (RequestHandle | CalculatorHandle | MapHandle)[]; // FIXME: 待補編輯畫面

      definitions?: Record<string, {
        description?: string;
        propTypes: AppcraftParser.def.PropDefinition<'exact'>;
        defaultProps?: Record<string, any>;
      }>;
    };
  }

  export namespace hooks {
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

      onHandleRefsBound: (e: { target: Omit<HandleSlot, 'todo'>; refs: HandleRefs; }) => void;
      onHandleSlotChange: (e: false | HandleSlot) => void;
      onListenersActived: (e: false | { uid: string; listeners: string[]; }) => void;
      onStateChange: (e: Record<string, Record<string, any>>) => void;
    };
  }
}

// TODO: Custom Hooks
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'block',
    border: 0,
    overflow: 'hidden auto !important',
    padding: theme.spacing(1, 0),
    height: '100%',

    '& > * + *': {
      marginTop: theme.spacing(1.5)
    },

    '&.empty': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '& > svg': {
        fontSize: '20vh',
        opacity: theme.palette.action.focusOpacity,
        color: theme.palette.info.light
      }
    }
  }
}));

export { getRequestURL, getVariableValue };
export const useWidgetWrapper = useWidgetContext as (() => AppcraftVisualizer.hooks.WidgetContext);
export const useSubstratumWidgets = useWidgets as AppcraftVisualizer.hooks.SubstratumWidgets;


// TODO: Component
function WidgetImplement({ uid, ready }: { uid?: string; ready: AppcraftVisualizer.def.Props['ready']; }) {
  const container = useRef<HTMLDivElement>();
  const { widgets } = useWidgetContext();
  const { children: substratum } = useSubstratumWidgets(widgets);
  const onReady = useVisualizerReady(uid, ready);
  const classes = useStyles();

  useEffect(() => {
    onReady();
  }, []);

  return (
    <Container ref={container} disableGutters maxWidth={false} className={cx(classes.root, { empty: !Boolean(substratum) })}>
      {!Boolean(substratum) && (
        <DesktopAccessDisabledIcon />
      )}

      {substratum?.map((widgetOpts) => ( // @ts-ignore
        <Widget key={widgetOpts.uid} {...widgetOpts} />
      ))}
    </Container>
  );
}

export const useLazyVisualizer = (e: any[]) => (
  useMemo(() => (
    React.lazy(() => new Promise((resolve) => ( // @ts-ignore
      resolve({ default: WidgetImplement })
    )))
  ), e)
);

export const WidgetWrapper: React.FC<AppcraftVisualizer.def.Props> = ({ action, children, definitions, proxy, state: defaultState, widgets }) => {
  const [handleRefs, setHandleRefs] = useState({});
  const [handleSlot, setHandleSlot] = useState(null);
  const [listeners, setListeners] = useState(null);
  const [state, onStateChange] = useGlobalStateReducer(defaultState);

  const onHandleRefsBound = useCallback(({ target, refs }) => (
    setHandleRefs(_set(handleRefs, target, refs))
  ), [handleRefs]);

  const onHandleSlotChange = useCallback((e) => {
    if (e !== false) {
      setHandleSlot(e);
    } else {
      setHandleRefs({});
      setHandleSlot(null);
    }

    return () => onHandleSlotChange(false);
  }, []);

  const onListenersActived = useCallback((e) => (
    setListeners(e === false ? null : [e.uid, e.listeners])
  ), []);

  return (
    <WidgetProvider
      value={{
        action,
        definitions,
        handleRefs,
        handleSlot,
        listeners,
        proxy,
        widgets,
        state,

        onHandleRefsBound,
        onHandleSlotChange,
        onListenersActived,
        onStateChange
      }}
    >
      {children}
    </WidgetProvider>
  );
};

const Visualizer: React.FC<Pick<AppcraftVisualizer.def.Props, 'proxy' | 'ready' | 'state' | 'widgets'>> = ({ ready, ...props }) => (
  <WidgetWrapper {...props}>
    <WidgetImplement ready={ready} />
  </WidgetWrapper>
);

export default Visualizer;
