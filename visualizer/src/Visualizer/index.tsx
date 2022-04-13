import React, { useRef, useState, useMemo, useCallback } from 'react';

import DateFnsUtils from '@date-io/date-fns';
import cx from 'clsx';

import _get from 'lodash/get';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';
import _set from 'lodash/set';

import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';
import MuiPickersUtilsProvider from '@material-ui/pickers/MuiPickersUtilsProvider';
import { makeStyles } from '@material-ui/core/styles';

import DesktopAccessDisabledIcon from '@material-ui/icons/DesktopAccessDisabled';

import { AppcraftParser } from '@appcraft/prop-types-parser';

import WidgetBase from './widget';
import { WidgetProvider, useGlobalStateReducer, useSubstratumWidgets, useVisualizerReady } from './_customs';


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

    type Condition = { uid: string; description: string; source: Variable; value: Variable; };

    interface HandleBase {
      type: string;
      uid: string;
      description: string;
      state?: string;
      condition?: Condition[];
    };

    interface RequestHandle extends HandleBase {
      type: 'request';
      url: string;
      method: 'DELETE' | 'GET' | 'HEAD' | 'OPTIONS' | 'PATCH' | 'POST' | 'PUT';
      header?: Record<string, string>;
      search?: Record<string, Variable>;
      body?: Variable<'Object'>;
    };

    interface CalculatorHandle extends HandleBase {
      type: 'calculator';
      params: Variable[];
      template: string;
    };

    interface MapPair extends Omit<CalculatorHandle, 'condition'> { // params 等同 source
      path: string;
    }

    interface MapHandle extends HandleBase {
      type: 'map';
      mappable?: Condition[];
      source: Variable<'Array'>[];
      pairs: MapPair[];
    };

    export type StateBinding = { path: string; typeId: string; defaultValue?: any; };

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
    };

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


// TODO: Component
export function WidgetImplement({ lazyDeps = [], uid, ready }: { lazyDeps?: any[]; uid?: string; ready: AppcraftVisualizer.def.Props['ready']; }) {
  const { children: substratum } = useSubstratumWidgets() as Record<string, AppcraftVisualizer.def.WidgetOptions[]>;

  const container = useRef<HTMLDivElement>();
  const onReady = useVisualizerReady(uid, ready);
  const classes = useStyles();

  const LazyWidgetBase = useMemo(() => (
    React.lazy(() => (
      onReady().then(() => ({
        default: WidgetBase
      }))
    ))
  ), lazyDeps);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <React.Suspense fallback={(<LinearProgress />)}>
        <Container role="AppcraftVisualizer" ref={container} disableGutters maxWidth={false} className={cx(classes.root, { empty: !Boolean(substratum) })}>
          {!Boolean(substratum) && (
            <DesktopAccessDisabledIcon />
          )}

          <LazyWidgetBase />
        </Container>
      </React.Suspense>
    </MuiPickersUtilsProvider>
  );
}

export const WidgetWrapper: React.FC<AppcraftVisualizer.def.Props> = ({ children, definitions, proxy, state: defaultState, widgets }) => {
  const [listeners, setListeners] = useState([]);
  const [disabledProps, setDisabledProps] = useState(new Map());
  const [state, onStateChange] = useGlobalStateReducer(defaultState);

  const onListenersActived = useCallback((e) => (
    setListeners(e === false ? [] : e)
  ), []);

  const onPropsDisable = useCallback((locked) => (
    setDisabledProps(new Map(Object.entries(locked)))
  ), [disabledProps]);

  return (
    <WidgetProvider
      value={{
        definitions,
        disabledProps,
        listeners,
        proxy,
        widgets,
        state,

        onListenersActived,
        onPropsDisable,
        // @ts-ignore
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

Visualizer.displayName = 'AppcraftVisualizer';

export default Visualizer;
