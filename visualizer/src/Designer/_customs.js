/* eslint-disable consistent-return */
/* eslint-disable react/forbid-foreign-prop-types */
import { createContext, useEffect, useMemo, useContext, useReducer } from 'react';

import { generate as uuid } from 'shortid';

import _cloneDeep from 'lodash/cloneDeep';
import _debounce from 'lodash/debounce';
import _get from 'lodash/get';
import _isPlainObject from 'lodash/isPlainObject';
import _mergeWith from 'lodash/mergeWith';
import _omit from 'lodash/omit';
import _sortBy from 'lodash/sortBy';
import _template from 'lodash/template';

import { getVariableValue, useWidgetWrapper } from '../Visualizer';


const ANY_DEFINITIONS = ['array', 'bool', 'number', 'object', 'string'].map((type) => ({ uid: type, type }));

const CONTROL_ACTION = {
  SET_STATE: Symbol('SET_STATE'),

  STATE_APPEND: Symbol('STATE_APPEND'),
  STATE_DESTROY: Symbol('STATE_DESTROY'),

  RESET_READY: Symbol('RESET_READY'),

  WIDGET_APPEND: Symbol('WIDGET_APPEND'),
  WIDGET_MODIFY: Symbol('WIDGET_MODIFY'),
  WIDGET_DESTROY: Symbol('WIDGET_DESTROY')
};

export const VARIABLE_TYPE = {
  Array: { init: [] },
  Boolean: { init: 'false' },
  Date: { init: null },
  Number: { init: '0' },
  Object: { init: {} },
  String: { init: '' },
  input: { init: null },
  state: { init: null },
  todo: { init: null }
};

export function getPropPathname(superiorType, superiorPathname, propName, { hidden = false, ignoreSpecialKey = false } = {}) {
  return _template(
    superiorType?.startsWith('array')
      ? '{{ superiorPathname }}[{{ propName }}]'
      : !ignoreSpecialKey && propName?.search(/\./) > 0
        ? '{{ superiorPathname }}["{{ propName }}"]'
        : '{{ superiorPathname }}{{ (superiorPathname && propName) ? \'.\' : \'\' }}{{ propName }}',
    { interpolate: /{{([\s\S]+?)}}/g }
  )({ superiorPathname, propName: hidden ? '*' : propName });
}

function getChainOfWidgetIds(widgets, superior) {
  const ids = widgets.reduce(
    (result, { superior: $superior, uid }) => {
      const [superiorUid] = $superior?.split('.') || [];

      return (!superiorUid && !superior) || (superiorUid === superior)
        ? result.concat(uid)
        : result;
    },
    []
  );

  return ids.length === 0 ? ids : ids.concat(
    ...ids.map((uid) => getChainOfWidgetIds(widgets, uid))
  );
}

function getInputOptions(target, superiorPathname = '') {
  const superiorType = _isPlainObject(target) ? 'object' : Array.isArray(target) ? 'array' : 'other';

  return _sortBy(
    Object.entries(superiorType === 'other' ? {} : target).reduce(
      (result, [propertyName, value]) => (
        result.concat(getInputOptions(value, getPropPathname(superiorType, superiorPathname, propertyName)))
      ),
      !superiorPathname ? [] : [{
        code: superiorPathname,
        description: { primary: superiorPathname },
        refValue: target
      }]
    ),
    ['code']
  );
}

export const getTreatmentOptions = (refValue) => (
  refValue instanceof Date || /^(string|number)$/.test(typeof refValue)
    // eslint-disable-next-line no-proto
    ? Object.getOwnPropertyNames(refValue.__proto__).reduce(
      (result, property) => (
        property === 'constructor'
          ? result
          : result.concat({ property, isFunc: refValue[property] instanceof Function })
      ),
      []
    )
    : []
);

export const ProptypesEditorContext = createContext({
  InputStyles: { size: 'small', color: 'primary', variant: 'outlined', margin: null },
  actived: null,
  classes: null,
  override: { control: () => null, mixed: () => null },

  definition: null,
  handles: {},
  props: {},
  state: [],
  substratum: {},
  typePairs: {},
  uid: null,

  onActive: () => null,
  onChange: () => null,
  onElementDispatch: () => null,
  onStateBinding: () => null
});

export function useControlValue({ subject = '', ready: defaultReady = [], state: defaultState = {}, widgets: defaultWidgets = [] }) {
  return [
    CONTROL_ACTION,

    ...useReducer(
      (state, actions) => (
        (Array.isArray(actions) ? actions : [actions]).reduce(
          (result, action) => {
            const { type, target, value, options } = action || {};

            switch (type) {
              // TODO: Base State
              case CONTROL_ACTION.SET_STATE:
                return /^(actived|subject)$/.test(target)
                  ? { ...result, [target]: value }
                  : result;

              // TODO: Visualizer Global State
              case CONTROL_ACTION.STATE_APPEND: {
                const { state: { [target]: collection = [], ...visualizerState } } = result;

                return {
                  ...result,
                  state: {
                    ...visualizerState,
                    [target]: [...collection, { ...options, path: value }]
                  }
                };
              }
              case CONTROL_ACTION.STATE_DESTROY: {
                const { state: { [target]: collection = [], ...visualizerState } } = result;

                return {
                  ...result,
                  state: {
                    ...visualizerState,
                    [target]: collection.filter(({ path }) => path !== value)
                  }
                };
              }

              // TODO: onReady Handle Setting
              case CONTROL_ACTION.RESET_READY:
                return { ...result, ready: value };

              // TODO: Widgets
              case CONTROL_ACTION.WIDGET_APPEND: {
                const { widgets } = result;

                return {
                  ...result,
                  widgets: [...widgets, {
                    superior: target ? `${target}.${value || 'children'}` : null,
                    uid: uuid(),
                    description: `Widget_${Math.floor(Math.random() * 10000)}`,
                    importBy: null,
                    props: {},
                    handles: {},
                    ...options
                  }]
                };
              }
              case CONTROL_ACTION.WIDGET_MODIFY:
                return {
                  ...result,
                  widgets: result.widgets.map((opts) => (opts.uid !== value.uid ? opts : value))
                };

              case CONTROL_ACTION.WIDGET_DESTROY: {
                const { state: globalState, widgets } = result;
                const ids = new Set([target, ...getChainOfWidgetIds(widgets, target)]);

                return {
                  ...result,
                  state: _omit(globalState, Array.from(ids)),
                  widgets: widgets.filter(({ uid }) => !ids.has(uid))
                };
              }
              default:
            }
            return result;
          },
          state
        )
      ),
      {
        actived: null,
        subject,
        ready: defaultReady || [],
        state: defaultState || {},
        widgets: defaultWidgets || []
      }
    )
  ];
}

export function useBindingState(pathname) {
  const { state, uid } = useContext(ProptypesEditorContext);

  return useMemo(() => state.some(({ widgetUid, path }) => widgetUid === uid && pathname.startsWith(path)), [state, uid, pathname]);
}

export function useRefOptions(todos, { todo: todoUid, refs, value: variable }) {
  const { widgets } = useWidgetWrapper();

  return useMemo(() => {
    if (refs && variable) {
      const { todo, state, input } = refs;

      const { result: previousTodo } = todos.reduce(
        ({ found, result }, { uid, description }) => {
          const $found = found ? true : uid === todoUid;

          return {
            found: $found,
            result: $found ? result : result.set(uid, description)
          };
        },
        { found: false, result: new Map() }
      );

      return {
        input: getInputOptions(input),

        state: Object.entries(state).reduce(
          (__, [uid, widgetState]) => (
            Object.entries(widgetState).reduce(
              (result, [path, refValue]) => {
                const target = widgets.find(({ uid: widgetUid }) => widgetUid === uid);

                return !target
                  ? result
                  : result.concat({
                    code: `${uid}['${path}']`,
                    refValue,
                    description: {
                      primary: target.description,
                      secondary: path
                    }
                  });
              },
              __
            )
          ),
          []
        ),
        todo: Object.entries(todo).reduce(
          (result, [code, refValue]) => (
            !previousTodo.has(code)
              ? result
              : result.concat({ code, refValue, description: { primary: previousTodo.get(code) } })
          ),
          []
        )
      };
    }

    return null;
  }, [todos, todoUid, refs, variable]);
}

export function useTypePairs(pathname, { type, options } = {}, override) {
  const { typePairs } = useContext(ProptypesEditorContext);

  return useMemo(() => {
    if (/^(any|oneOfType)$/.test(type)) {
      const opts = type === 'oneOfType' ? options : ANY_DEFINITIONS;

      return [
        typePairs[pathname],
        override?.mixed?.({ pathname, options: opts }) || opts
      ];
    }
    return [];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typePairs, pathname, type, options, override?.mixed]);
}

export function useVariableTreatments(name, refs, { type, initValue, treatments }, onChange) {
  const [options, lastValue] = useMemo(() => (
    (treatments || []).reduce(
      ([collection, value], treatment) => {
        const before = _cloneDeep(value);
        const property = _get(value, treatment.name);

        const res = property instanceof Function
          ? property.call(
            value,
            ...(treatment.args || []).map(({ type: inputType, initValue: inputValue }) => (
              getVariableValue(refs, inputType, inputValue)
            ))
          )
          : property;

        return [collection.concat({ ...treatment, after: res, options: getTreatmentOptions(before) }), res];
      },
      [[], getVariableValue(refs, type, initValue)]
    )
  ), [refs, type, initValue, treatments]);

  useEffect(() => {
    switch (typeof lastValue) {
      case 'boolean':
        onChange({ name, value: 'Boolean' });
        break;

      case 'number':
        onChange({ name, value: 'Number' });
        break;

      case 'string':
        onChange({ name, value: 'String' });
        break;

      default:
        onChange({ name, value: _isPlainObject(lastValue) ? 'Object' : Array.isArray(lastValue) ? 'Array' : null });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(lastValue)]);

  return options;
}
