/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useMemo, useCallback } from 'react';

import { generate as uuid } from 'shortid';

import _cloneDeep from 'lodash/cloneDeep';
import _get from 'lodash/get';
import _isPlainObject from 'lodash/isPlainObject';
import _merge from 'lodash/merge';
import _pick from 'lodash/pick';
import _set from 'lodash/set';

import withErrorBoundary from './error-boundary';
import { getSubstratumWidgets, getTodoPromise, useWidgetContext, useSubstratumWidgets } from './_customs';


const WidgetCustoms = (() => {
  const overrideds = {};

  function setOverrideds(uid, superior, { overrideds: defaultLockeds }) {
    const { [uid]: lockedProps = new Set() } = overrideds;
    const lockeds = defaultLockeds || [];

    if (superior) {
      const [superiorId] = superior.split('.');
      const { [superiorId]: superiorLockedProps = new Set() } = overrideds;
      const superiorPropPath = superior.replace(`${superiorId}.`, '');

      Array.from(superiorLockedProps).forEach((locked) => {
        if (_isPlainObject(locked) && locked.propPath === superiorPropPath) {
          lockeds.push(...(locked.overrideds || []));
          superiorLockedProps.has(locked) && superiorLockedProps.delete(locked);
          _set(overrideds, superiorId, superiorLockedProps);
        }
      });
    }

    return _set(overrideds, uid, lockeds.reduce(
      (result, locked) => (
        result.add(locked)
      ),
      lockedProps
    ));
  }

  function useElements(widgets) {
    const { proxy } = useWidgetContext();

    return widgets.reduce(
      (result, widget) => (
        _set(
          result,
          widget.uid,

          useMemo(() => {
            const { uid, superior, importBy: element, decoration } = widget;

            if (element) {
              const el = proxy[element] || React.Fragment;

              setOverrideds(uid, superior, el);

              return withErrorBoundary(
                (decoration || []).reduce(
                  (decorated, { importBy, options }) => {
                    const withDecoration = proxy[importBy];
                    const hoc = (withDecoration instanceof Function && withDecoration(options)?.(decorated)) || decorated;

                    setOverrideds(uid, superior, hoc);

                    return hoc;
                  },
                  el
                )
              );
            }

            return null;
          }, [JSON.stringify(widget)])
        )
      ),
      {}
    );
  }

  function useFixedProps(widgets) {
    return widgets.reduce(
      (result, { uid, props }) => (
        result.set(uid, useMemo(() => _cloneDeep(props), []))
      ),
      new Map()
    );
  }

  function useElasticProps(elements) {
    const { state: globalState } = useWidgetContext();

    return Object.keys(elements).reduce(
      (result, uid) => {
        const state = _get(globalState, uid) || {};

        return result.set(
          uid,

          useMemo(() => (
            Object.entries(state || {}).reduce(
              ($state, [propPath, value]) => (
                _set($state, propPath, value)
              ),
              {}
            )
          ), [JSON.stringify(state)])
        );
      },
      new Map()
    );
  }

  function useWidgetHandles(widgets) {
    const { state: globalState, onStateChange } = useWidgetContext();

    return widgets.reduce(
      (result, { uid, handles }) => (
        result.set(
          uid,
          Object.entries(handles).reduce(
            (props, [event, todos]) => (
              _set(
                props,
                event,

                useCallback((...e) => {
                  const initRefs = _cloneDeep({ input: e, state: globalState, todo: {} });

                  todos.reduce(
                    (exe, todo) => exe.then(getTodoPromise(todo)),
                    new Promise((resolve) => resolve(initRefs))
                  ).then(({ state: finalState }) => (
                    onStateChange(finalState)
                  ));
                }, [JSON.stringify(globalState)])
              )
            ),
            {}
          )
        )
      ),
      new Map()
    );
  }

  function useTriggerTip(widgets) {
    const { listeners: [listenId, listeners] } = useWidgetContext();

    return widgets.reduce(
      (result, { uid }) => (
        result.set(
          uid,
          useMemo(() => (
            uid !== listenId
              ? null
              : Object.entries(listeners || {}).reduce(
                (props, [event, tip]) => (
                  _set(props, event, tip)
                ),
                {}
              )
          ), [listenId, JSON.stringify(Object.keys(listeners || {}))])
        )
      ),
      new Map()
    );
  }

  return {
    useOverrided() {
      return Object.entries(overrideds).reduce(
        (result, [uid, propPaths]) => ({
          ...result,
          [uid]: Array.from(propPaths).filter((prop) => typeof prop === 'string').sort()
        }),
        {}
      );
    },

    useRender(renderKey, widgets) {
      const { widgets: all } = useWidgetContext();

      const elements = useElements(widgets);
      const fixeds = useFixedProps(widgets);
      const elastics = useElasticProps(elements);
      const handles = useWidgetHandles(widgets);
      const triggers = useTriggerTip(widgets);

      return Object.entries(elements).map(([uid, WidgetEl]) => {
        const props = fixeds.get(uid);

        if (WidgetEl && _isPlainObject(props)) {
          const state = elastics.get(uid);
          const handle = handles.get(uid);
          const substratums = getSubstratumWidgets(all, uid);
          const trigger = triggers.get(uid);

          return (
            <WidgetEl
              key={`${renderKey}-${uid}`}
              {..._merge(
                Object.entries(substratums).reduce(
                  (result, [propPath, children]) => (
                    _set(result, propPath, WidgetCustoms.useRender(renderKey, children || []))
                  ),
                  {}
                ),
                props,
                handle,
                state,
                trigger
              )}
            />
          );
        }

        if (typeof props === 'string' && props.trim()) {
          return (
            <React.Fragment key={uid}>
              {props}
            </React.Fragment>
          );
        }

        return null;
      });
    }
  };
})();

export default function WidgetBase() {
  const { listeners: [listenId, listeners], onPropsDisable } = useWidgetContext();
  const { children } = useSubstratumWidgets();

  const renderKey = useMemo(() => uuid(), [listenId, JSON.stringify(Object.keys(listeners || {}))]);
  const nodes = WidgetCustoms.useRender(renderKey, children || []);
  const overrideds = WidgetCustoms.useOverrided();

  useEffect(() => {
    onPropsDisable(overrideds);
  }, [JSON.stringify(overrideds)]);

  return nodes;
}
