/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useMemo, useCallback, useContext, useReducer } from 'react';
import { useSnackbar } from 'notistack';

import _cloneDeep from 'lodash/cloneDeep';
import _get from 'lodash/get';
import _omit from 'lodash/omit';
import _set from 'lodash/set';
import _template from 'lodash/template';
import _toPath from 'lodash/toPath';


const WidgetContext = createContext({
  action: null,
  definitions: null,
  handleRefs: {},
  handleSlot: null,
  listeners: null,
  proxy: {},
  state: {},
  widgets: [],

  onHandleRefsBound: (_e) => null,
  onHandleSlotChange: (_e) => null,
  onListenersActived: (_e) => null,
  onStateChange: (_e) => null
});

const getPureObject = (obj) => (
  JSON.parse(
    JSON.stringify(obj, (() => {
      const seen = new WeakSet();

      // eslint-disable-next-line consistent-return
      return (key, value) => {
        if (!(value instanceof Function) && value !== window && !(value instanceof Event) && !/^_/.test(key)) {
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

const generateValue = (() => {
  function getValue(refs, type, initValue) {
    switch (type) {
      case 'Boolean':
        return initValue === 'true';

      case 'Number': // eslint-disable-next-line no-bitwise
        return ~~initValue;

      case 'String':
        return typeof initValue === 'string' ? initValue : '';

      case 'Date': {
        const result = new Date(initValue);

        return Number.isNaN(result.valueOf()) ? new Date() : result;
      }
      case 'Array':
        return (Array.isArray(initValue) ? initValue : [initValue]).reduce(
          (result, property) => {
            if (property) {
              result.push(generateValue(refs, property));
            }
            return result;
          },
          []
        );

      case 'Object':
        return Object.entries(initValue || {}).reduce(
          (result, [name, property]) => _set(result, [name], generateValue(refs, property)),
          {}
        );

      default:
        return _get(refs, [type, ...(initValue?.split('.') || [''])]) || null;
    }
  }

  return Object.defineProperty((refs, { type, initValue, treatments = [] }) => (
    treatments.reduce(
      (result, { name, args }) => {
        const { [name]: property } = result;

        return property instanceof Function
          ? property.call(
            result,
            ...(args || []).map(({ type: inputType, initValue: inputValue }) => (
              getValue(refs, inputType, inputValue)
            ))
          )
          : property;
      },
      getValue(refs, type, initValue)
    )
  ), 'implement', { get: () => getValue });
})();

const getURL = (refs, url, search) => `${url}${
  new URLSearchParams(
    Object.entries(search || {}).reduce(
      (result, [name, param]) => _set(result, [name], generateValue(refs, param)),
      {}
    )
  ).toString()
}`;

const implementTodo = ({ uid, description: todoDesc, type, state: setTo, ...todoOpts }, { target, onHandleRefsBound }) => (
  (refs) => {
    const { input, state, todo } = refs;

    onHandleRefsBound?.({ target, refs: getPureObject(refs) });

    switch (type) {
      case 'calculator': {
        const { template, params } = todoOpts;

        if (Array.isArray(params) && params.length > 0 && template?.trim()) {
          _set(todo, uid, JSON.parse(
            _template(`{{ ${template} }}`, { interpolate: /{{([\s\S]+?)}}/g })(
              params.reduce(
                (result, param, i) => {
                  const value = generateValue(refs, param);

                  return {
                    ...result,
                    [`$${i}`]: param.type === 'String' ? `"${value}"` : value
                  };
                },
                {}
              )
            )
          ));

          setTo && _set(state, _toPath(setTo), _get(todo, uid));

          return { input, state, todo };
        }
        break;
      }
      case 'request': {
        const { url, method, header, search, body } = todoOpts;

        if (url?.trim()) {
          return fetch(getURL(refs, url, search), {
            method: method || 'GET',
            headers: { ...header, 'Content-Type': 'application/json' },

            ...(body && {
              body: JSON.stringify(generateValue(refs, body))
            })
          }).then((res) => (
            res.json()
          )).then((res) => {
            _set(todo, uid, res);
            setTo && _set(state, _toPath(setTo), _get(todo, uid));

            return { input, state, todo };
          });
        }
        break;
      }
      default:
    }
    return refs;
  }
);

export const WidgetProvider = WidgetContext.Provider;

export { getURL as getRequestURL };

export const getVariableValue = generateValue.implement;

export const useWidgetContext = () => useContext(WidgetContext);

export function useGlobalStateReducer(defaultState) {
  const [state, dispatch] = useReducer((_state, actions) => actions, {});

  useEffect(() => {
    dispatch(
      Object.entries(defaultState || {}).reduce(
        (__, [uid, collection]) => (
          _set(__, uid, (collection || []).reduce(
            (result, { path, defaultValue = null }) => ({
              ...result,
              [path]: defaultValue
            }),
            {}
          ))
        ),
        {}
      )
    );
  }, [defaultState]);

  return [state, dispatch];
}

export function useVisualizerReady(uid, todos) {
  const { handleSlot, state: globalState, onHandleRefsBound, onStateChange } = useWidgetContext();

  return useCallback(() => {
    const initRefs = _cloneDeep({ input: [], state: globalState, todo: {} });

    (todos || []).reduce(
      (exe, todo) => exe.then(
        implementTodo(
          todo,
          uid === handleSlot?.uid && handleSlot?.pathname === 'onReady'
            ? { target: JSON.stringify([uid, 'onReady', todo.uid]), onHandleRefsBound }
            : {}
        )
      ),
      new Promise((resolve) => resolve(initRefs))
    ).then(({ state: finalState }) => (
      onStateChange(finalState)
    ));
  }, [todos, handleSlot, globalState, onHandleRefsBound, onStateChange]);
}

export function useWidgets(widgets, superior, stringify = true) {
  return useMemo(() => {
    const substratum = widgets.reduce(
      (result, widget) => {
        const [superiorUid, ...path] = widget.superior?.split('.') || [];
        const superiorPropName = path.join('.') || 'children';

        if ((stringify || typeof widget.props !== 'string') && ((!superiorUid && !superior) || (superiorUid === superior))) {
          const collection = result[superiorPropName] || [];

          _set(result, superiorPropName, collection.concat(widget));
        }
        return result;
      },
      {}
    );

    return Object.fromEntries(
      Object.entries(substratum).map(([propName, collection]) => ([
        propName,
        collection.sort(({ index: i1 }, { index: i2 }) => i1 - i2)
      ]))
    );
  }, [widgets, superior, stringify]);
}

export function useWidgetElement(withErrorBoundary, importBy) {
  const { handleSlot, listeners, proxy } = useWidgetContext();

  return useMemo(() => (
    proxy[importBy]
      ? withErrorBoundary(proxy[importBy])
      : null
  ), [importBy, JSON.stringify(handleSlot), JSON.stringify(listeners)]);
}

export function useWidgetProps({ uid, description, props: defaultProps, handles: defaultHandles }, widgetState) {
  const { action, handleSlot, listeners, state: globalState, onHandleRefsBound, onStateChange } = useWidgetContext();
  const { enqueueSnackbar: msg } = useSnackbar();
  const props = useMemo(() => JSON.parse(JSON.stringify(defaultProps)), [JSON.stringify(defaultProps), JSON.stringify(listeners)]);

  const handles = useMemo(() => {
    const dev = new Set(uid === listeners?.[0] ? listeners[1] : []);
    const events = new Set([...(listeners?.[1] || []), ...Object.keys(defaultHandles || {})]);

    return Array.from(events).reduce(
      (result, event) => ({
        ...result,
        [event]: (...e) => {
          const { [event]: todos = [] } = defaultHandles;
          const initRefs = _cloneDeep({ input: e, state: globalState, todo: {} });

          if (dev.has(event)) {
            msg(`${description} Event: ${event}`, {
              action,
              ariaAttributes: { 'data-pathname': event },
              variant: 'success'
            });
          }

          todos.reduce(
            (exe, todo) => exe.then(
              implementTodo(
                todo,
                uid === handleSlot?.uid && event === handleSlot?.pathname
                  ? { target: JSON.stringify([uid, event, todo.uid]), onHandleRefsBound }
                  : {}
              )
            ),
            new Promise((resolve) => resolve(initRefs))
          ).then(({ state: finalState }) => (
            onStateChange(finalState)
          ));
        }
      }),
      {}
    );
  }, [JSON.stringify(handleSlot), JSON.stringify(listeners), JSON.stringify(globalState), uid, description, defaultHandles, action, onHandleRefsBound]);

  return Object.entries({ ...widgetState, ...handles }).reduce(
    (result, [path, value]) => _set(result, path, value),
    props
  );
}
