import React, { useState, useMemo, useContext } from 'react';

import _get from 'lodash/get';
import _set from 'lodash/set';
import _toPath from 'lodash/toPath';

import { ProptypesEditorContext, getPropPathname, useTypePairs } from './_customs';
import { useWidgetContext } from '../Visualizer/_customs';


export function useOverrided(PropElement, category, controlProps) {
  const { superiorType, superiorPathname, definition, propName } = controlProps;

  const { disabledProps } = useWidgetContext();
  const { uid, decoration, override, importBy, props, handles, onChange } = useContext(ProptypesEditorContext);
  const [locked, setLocked] = useState(false);
  const [contentProps, setContentProps] = useState(null);
  const pathname = useMemo(() => getPropPathname(superiorType, superiorPathname, propName), [superiorType, superiorPathname, propName]);
  const [pseudoDef] = useTypePairs(pathname, definition);

  const disabled = new Set(disabledProps.get(uid)).has(pathname);
  const value = !pathname ? props : category !== 'todo' ? _get(props, pathname) : (_get(handles, pathname) || []);

  const overrided = override?.control?.({
    category,
    decoration: decoration || [],
    definition: pseudoDef || definition,
    disabled,
    importBy,
    pathname,
    propName,
    props: props || {},
    value,
    onChange: (newValue) => onChange({ props: _set(props, _toPath(pathname), newValue) })
  });

  return [
    overrided === false ? null : (overrided || (
      <PropElement ref={setContentProps} {...controlProps} {...contentProps} disabled={disabled} pathname={pathname} value={value} onFieldLocked={setLocked} />
    )),
    contentProps,
    locked,
    pathname,
    disabled,
    value
  ];
}

export default function withStructure(category, PropElement) {
  const HOCElement = React.memo((controlProps) => (
    useOverrided(PropElement, category, controlProps)?.[0] || null
  ));

  HOCElement.Naked = PropElement;
  HOCElement.displayName = 'Structure';

  return HOCElement;
}
