/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable consistent-return */
/* eslint-disable react/forbid-foreign-prop-types */
import { createContext, lazy, useEffect, useMemo, useContext, useReducer } from 'react';

import { generate as uuid } from 'shortid';

import _cloneDeep from 'lodash/cloneDeep';
import _get from 'lodash/get';
import _isPlainObject from 'lodash/isPlainObject';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';
import _sortBy from 'lodash/sortBy';
import _template from 'lodash/template';
import _toPath from 'lodash/toPath';

import { Todo, Variable, useWidgetContext } from '../Visualizer/_customs';


// TODO: Variables
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
  todo: { init: null },
  source: { init: null }
};


// TODO: Methods
export const getPureObject = (obj) => (
  JSON.parse(
    JSON.stringify(obj, (() => {
      const seen = new WeakSet();

      // eslint-disable-next-line consistent-return
      return (key, value) => {
        if (!(value instanceof Function) && value !== window && !(value instanceof Event) && !/^__/.test(key)) {
          const pureValue = value instanceof HTMLElement ? 'HTMLElement' : value;
          const isObject = typeof pureValue === 'object' && pureValue !== null;

          if (!isObject || !seen.has(pureValue)) {
            isObject && seen.add(pureValue);

            return pureValue;
          }
        }
      };
    })())
  )
);

export function getPropPathname(superiorType, superiorPathname, propName) {
  return _template(
    superiorType?.startsWith('array')
      ? '{{ superiorPathname }}[{{ propName }}]'
      : propName?.search(/\./) > 0
        ? '{{ superiorPathname }}["{{ propName }}"]'
        : '{{ superiorPathname }}{{ (superiorPathname && propName) ? \'.\' : \'\' }}{{ propName }}',
    { interpolate: /{{([\s\S]+?)}}/g }
  )({ superiorPathname, propName });
}

function isValidType(allowedTypes, value) {
  if (Array.isArray(allowedTypes)) {
    if (value instanceof Date) {
      return allowedTypes.includes('Date');
    }

    if (Array.isArray(value)) {
      return allowedTypes.includes('Array') || (allowedTypes.includes('SourceMap') && value.every((val) => _isPlainObject(val)));
    }

    if (_isPlainObject(value)) {
      return allowedTypes.includes('Object');
    }

    switch (typeof value) {
      case 'string':
        return allowedTypes.includes('String');
      case 'number':
        return allowedTypes.includes('Number');
      default:
        return false;
    }
  }

  return true;
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

export function getTreatmentOptions(refValue) {
  if (refValue instanceof Date || /^(string|number)$/.test(typeof refValue)) {
    // eslint-disable-next-line no-proto
    return Object.getOwnPropertyNames(refValue.__proto__).reduce(
      (result, property) => (
        property === 'constructor'
          ? result
          : result.concat({ property, isFunc: refValue[property] instanceof Function })
      ),
      []
    );
  }

  if (_isPlainObject(refValue)) {
    return Object.keys(refValue).map((property) => ({
      property,
      isFunc: refValue[property] instanceof Function
    }));
  }

  return [];
}


// TODO: Custom Hooks
export const ProptypesEditorContext = createContext({
  InputStyles: { size: 'small', color: 'primary', variant: 'outlined', margin: null },
  actived: null,
  classes: null,
  disableHandleRefs: false,
  override: { control: () => null, mixed: () => null },
  refs: null,
  substratum: {},

  decoration: [],
  definition: null,
  description: null,
  handles: {},
  importBy: null,
  props: {},
  state: [],
  typePairs: {},
  uid: null,

  onActive: () => null,
  onChange: () => null,
  onElementDispatch: () => null,
  onPropSelect: () => null,
  onRefsChange: () => null,
  onStateBinding: () => null
});

export const useControlValue = (() => {
  function reducerFn(state, actions) {
    return (
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
    );
  }

  return ({ subject = '', ready: defaultReady = [], state: defaultState = {}, widgets: defaultWidgets = [] }) => ([
    CONTROL_ACTION,

    ...useReducer(reducerFn, {
      actived: null,
      subject,
      ready: defaultReady || [],
      state: defaultState || {},
      widgets: defaultWidgets || []
    })
  ]);
})();

export function useBindingState(pathname) {
  const { state, uid } = useContext(ProptypesEditorContext);

  return useMemo(() => {
    const checkedPath = _toPath(pathname);

    return [
      state.some(({ widgetUid, path }) => {
        const statePath = JSON.stringify(_toPath(path));

        return widgetUid === uid && checkedPath.some((_path, i) => (
          JSON.stringify(checkedPath.slice(0, i + 1)) === statePath
        ));
      }),
      state.some(({ widgetUid, path }) => (
        widgetUid === uid && path === pathname
      ))
    ];
  }, [JSON.stringify(state), uid, pathname]);
}

export const useRefOptions = (() => {
  function getAllProperties(target, { allowedTypes, superior = '' } = {}) {
    const superiorType = _isPlainObject(target) ? 'object' : Array.isArray(target) ? 'array' : 'other';

    return _sortBy(
      Object.entries(superiorType === 'other' ? {} : target).reduce(
        (result, [name, property]) => (
          result.concat(
            getAllProperties(property, {
              allowedTypes,
              superior: getPropPathname(superiorType, superior, name)
            })
          )
        ),
        (!superior || !isValidType(allowedTypes, target))
          ? []
          : [{ path: superior, value: target }]
      ),
      ['path']
    );
  }

  return (todoDescs, refs, todoId, allowedOptionTypes, variable) => {
    const { widgets } = useWidgetContext();

    return useMemo(() => {
      if (refs && variable) {
        const { input, source = [], state = {}, todo = {} } = refs;

        return {
          input: getAllProperties(input, { allowedTypes: allowedOptionTypes }).map(({ path: code, value: refValue }) => ({
            code,
            description: { primary: code },
            refValue
          })),

          source: source.reduce(
            (result, src) => {
              const { uid, description, condition } = src;
              const array = (src && Variable.get(refs, src)) || [];

              return result.concat(
                Array.from(
                  (Todo.valid(condition, refs) ? array : []).reduce(
                    (__, property) => (
                      getAllProperties(property).reduce(
                        (options, { path, value: refValue }) => {
                          const pathname = `${uid}.${path}`;

                          if (!options.has(pathname)) {
                            options.set(pathname, {
                              code: pathname,
                              description: { primary: description, secondary: path },
                              refValue
                            });
                          }

                          (refValue !== null && refValue !== undefined) && options.set(pathname, { ...options.get(pathname), refValue });

                          return options;
                        },
                        __
                      )
                    ),
                    new Map()
                  ).values()
                )
              );
            },
            []
          ),

          state: Object.entries(state).reduce(
            (__, [uid, widgetState]) => (
              Object.entries(widgetState).reduce(
                (result, [path, refValue]) => {
                  const target = widgets.find(({ uid: widgetUid }) => widgetUid === uid);

                  return (!target || !isValidType(allowedOptionTypes, refValue))
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
              code === todoId || !isValidType(allowedOptionTypes, refValue)
                ? result
                : result.concat({ code, refValue, description: { primary: todoDescs.get(code) } })
            ),
            []
          )
        };
      }

      return null;
    }, [allowedOptionTypes, todoId, refs, variable]);
  };
})();

export function useTodoWithRefs(refs, todos, withTodoRefs) {
  const memos = useMemo(() => new Map(), [Boolean(todos.length)]);

  refs && todos.reduce(
    ([promise, deps], todo, index) => {
      const { uid } = todo;

      if (!memos.has(uid) || memos.get(uid).prev !== deps) {
        const LazyElement = lazy(() => (
          promise.then((res) => ({
            default: withTodoRefs({ refs: _cloneDeep(res) })
          }))
        ));

        LazyElement.displayName = todo.uid;

        memos.set(uid, { deps: uuid(), prev: deps, todo, index, el: LazyElement });
      } else if (JSON.stringify(todo) !== JSON.stringify(memos.get(uid).todo)) {
        const { el } = memos.get(uid);

        memos.set(uid, { deps: uuid(), prev: deps, todo, index, el });
      }

      return [
        promise.then(Todo.promise(todo)),
        memos.get(uid).deps
      ];
    },
    [new Promise((resolve) => resolve(refs)), null]
  );

  return [
    todos.reduce(
      (result, { uid, description }) => (
        result.set(uid, description)
      ),
      new Map()
    ),

    Array.from(memos.values())
      .sort(({ index: i1 }, { index: i2 }) => i1 - i2)
      .map((memo) => _pick(memo, ['el', 'todo']))
  ];
}

export function useTypePairs(pathname, { type, options } = {}) {
  const { importBy, typePairs, override } = useContext(ProptypesEditorContext);

  return useMemo(() => {
    if (/^(any|oneOfType)$/.test(type)) {
      const opts = type === 'oneOfType' ? options : ANY_DEFINITIONS;

      return [
        typePairs[pathname],
        override?.mixed?.({ importBy, pathname, options: opts }) || opts
      ];
    }
    return [];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typePairs, pathname, override?.mixed]);
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
              Variable.generate(refs, inputType, inputValue)
            ))
          )
          : property;

        return [collection.concat({ ...treatment, after: res, options: getTreatmentOptions(before) }), res];
      },
      [[], Variable.generate(refs, type, initValue)]
    )
  ), [refs, type, initValue, JSON.stringify(treatments)]);

  useEffect(() => {
    if (treatments?.length) {
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
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(lastValue)]);

  return options;
}
