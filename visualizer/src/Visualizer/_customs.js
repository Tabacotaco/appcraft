/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState, useMemo, useCallback, useContext } from 'react';

import _cloneDeep from 'lodash/cloneDeep';
import _get from 'lodash/get';
import _isPlainObject from 'lodash/isPlainObject';
import _set from 'lodash/set';
import _template from 'lodash/template';
import _toPath from 'lodash/toPath';


//* Methods
export const Variable = {
  /** TODO: 取得 Variable 初始值 */
  generate: (refs, type, initValue) => {
    switch (type) {
      case 'Boolean':
        return initValue === 'true';

      case 'Number': // eslint-disable-next-line no-bitwise
        return ~~initValue;

      case 'String':
        return typeof initValue === 'string' ? initValue : '';

      case 'Date': {
        const result = new Date(...(!initValue ? [] : [initValue]));

        return result.toString() === 'Invalid Date' ? new Date() : result;
      }
      case 'Array':
        return (Array.isArray(initValue) ? initValue : [initValue]).reduce(
          (result, property) => {
            if (property) {
              result.push(Variable.get(refs, property));
            }
            return result;
          },
          []
        );

      case 'Object':
        return Object.entries(initValue || {}).reduce(
          (result, [name, property]) => _set(result, [name], Variable.get(refs, property)),
          {}
        );

      default:
        return _get(refs, [type, ..._toPath(initValue)]) || null;
    }
  },

  /** TODO: 取得 Variable 結果值 (透過 treatments 處理) */
  get: (refs, { type, initValue, treatments = [] }) => (
    treatments.reduce(
      (result, { name, args }) => {
        const { [name]: property } = result;

        return property instanceof Function
          ? property.call(
            result,
            ...(args || []).map(({ type: inputType, initValue: inputValue }) => (
              Variable.generate(refs, inputType, inputValue)
            ))
          )
          : property;
      },
      Variable.generate(refs, type, initValue)
    )
  ),

  /** TODO: 取得 Variables 運算結果 */
  template: (refs, template, params) => {
    try {
      const result = _template(`{{ ${template} }}`, { interpolate: /{{([\s\S]+?)}}/g })(
        params.reduce(
          (options, param, i) => {
            const value = Variable.get(refs, param);

            return _set(
              options,
              `$${i}`,
              Array.isArray(value) || _isPlainObject(value)
              // param.type === 'Array' || param.type === 'Object' || param.type === 'todo'
                ? JSON.stringify(value)
                : value
            );
          },
          {}
        )
      );

      try {
        return JSON.parse(result);
      } catch (e) {
        return JSON.parse(`"${result}"`);
      }
    } catch (e) {
      return null;
    }
  }
};

export const Todo = {
  /** TODO: 逐層取出各個 Source 的資料值，並透過 callbackFn 轉出資料內容 */
  mapValues: ([src, ...source], condition, refs, callbackFn, values) => {
    if (src) {
      const { uid } = src;
      const array = src && Variable.get(refs, src);

      return (Array.isArray(array) ? array : []).reduce(
        (result, property) => ( // FIXME: Todo.valid(condition, { ...refs, source: values })
          result.concat(
            Todo.mapValues(source, condition, refs, callbackFn, {
              ...values,
              [uid]: property
            })
          )
        ),
        []
      );
    }

    return ((data) => (
      Object.keys(data).length && Todo.valid(condition, { ...refs, source: values })
        ? [data]
        : []
    ))(callbackFn(values));
  },

  /** TODO: Todo 未正常執行時使用 */
  nothing: (refs, uid) => (
    _set(refs, ['todo', uid], null)
  ),

  /** TODO: 將 Todo 設定的執行內容轉為 Promise，執行後會產生 Reference 紀錄執行結果值 */
  promise: ({ uid, description: todoDesc, condition, type, state: setTo, ...todoOpts }) => (
    (refs) => {
      const { input, state, todo } = refs;

      switch (type) {
        case 'calculator': {
          const { template, params } = todoOpts;

          if (Todo.valid(condition, refs) && Array.isArray(params) && params.length > 0 && template?.trim()) {
            const todoResult = Variable.template(refs, template, params);

            _set(todo, uid, todoResult);
            setTo && _set(state, _toPath(setTo), todoResult);

            return { input, state, todo };
          }

          return Todo.nothing(refs, uid);
        }
        case 'map': {
          const { mappable, source, pairs } = todoOpts;

          if (Todo.valid(condition, refs)) {
            const todoResult = Todo.mapValues(source || [], mappable, refs, (values) => (
              (Array.isArray(pairs) ? pairs : []).reduce(
                (data, { template, params: src, path }) => (
                  _set(
                    data,
                    !src?.length || !template?.trim() ? [] : _toPath(path),
                    Variable.template({ ...refs, source: values }, template, src)
                  )
                ),
                {}
              )
            ));

            _set(todo, uid, todoResult);
            setTo && _set(state, _toPath(setTo), todoResult);

            return { input, state, todo };
          }

          return Todo.nothing(refs, uid);
        }
        case 'request': {
          const { url, method, header, search, body } = todoOpts;

          return (!Todo.valid(condition, refs) || !url?.trim())
            ? Todo.nothing(refs, uid)
            : fetch(Todo.url(refs, url, search), {
              method: method || 'GET',
              headers: header,

              ...(body && {
                body: JSON.stringify(Variable.get(refs, body))
              })
            }).then((res) => (
              res.json()
            )).then((todoResult) => {
              _set(todo, uid, todoResult);
              setTo && _set(state, _toPath(setTo), todoResult);

              return { input, state, todo };
            }).catch((err) => {
              console.warn(err);

              return Todo.nothing(refs, uid);
            });
        }
        default:
          return Todo.nothing(refs, uid);
      }
    }
  ),

  /** TODO: 取得解析後完整的 Request URL */
  url: (refs, url, search) => {
    const params = new URLSearchParams(
      Object.entries(search || {}).reduce(
        (result, [name, param]) => _set(result, [name], Variable.get(refs, param)),
        {}
      )
    ).toString();

    return `${url}${params ? `?${params}` : ''}`;
  },

  /** TODO: 驗證 Condition 是否正確 */
  valid: (condition, refs) => (
    (condition || []).every(({ source, value }) => (
      JSON.stringify(Variable.get(refs, source)) === JSON.stringify(Variable.get(refs, value))
    ))
  )
};

export function getSubstratumWidgets(widgets, superior, stringify = true) {
  const substratum = widgets.reduce(
    (result, widget) => {
      const [superiorUid, ...path] = widget.superior?.split('.') || [];
      const superiorPropName = (path.length && widget.superior?.replace(new RegExp(`^${superiorUid}.`), '')) || 'children';

      if ((stringify || typeof widget.props !== 'string') && ((!superiorUid && !superior) || (superiorUid === superior))) {
        const collection = result[superiorPropName] || [];

        return {
          ...result,
          [superiorPropName]: collection.concat(widget)
        };
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
}


//* Custom Hooks
const WidgetContext = createContext({
  definitions: null,
  disabledProps: new Map(),
  listeners: null,
  proxy: {},
  state: {},
  widgets: [],

  onPropsDisable: (..._e) => null,
  onListenersActived: (_e) => null,
  onStateChange: (_e) => null
});

export const WidgetProvider = WidgetContext.Provider;

export const useWidgetContext = () => useContext(WidgetContext);

export const useSubstratumWidgets = ({ superior = null, stringify = true } = {}) => {
  const { widgets } = useWidgetContext();

  return useMemo(() => (
    getSubstratumWidgets(widgets, superior, stringify)
  ), [widgets, superior, stringify]);
};

export function useGlobalStateReducer(defaultState) {
  const [state, dispatch] = useState({});

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
  const { state: globalState, onStateChange } = useWidgetContext();

  return useCallback(() => {
    const initRefs = _cloneDeep({ input: [], state: globalState, todo: {} });

    return (todos || []).reduce(
      (exe, todo) => exe.then(
        Todo.promise(todo)
      ),
      new Promise((resolve) => resolve(initRefs))
    ).then(({ state: finalState }) => (
      onStateChange(finalState)
    ));
  }, [todos, globalState, onStateChange]);
}
