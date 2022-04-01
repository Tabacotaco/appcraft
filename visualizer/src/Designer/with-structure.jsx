import React, { useState, useMemo, useContext } from 'react';

import _get from 'lodash/get';

import { ProptypesEditorContext, getPropPathname } from './_customs';
import { useWidgetContext } from '../Visualizer/_customs';


export function useOverrided(PropElement, category, controlProps) {
  const { superiorType, superiorPathname, definition, propName } = controlProps;

  const { disabledProps } = useWidgetContext();
  const { uid, override, props } = useContext(ProptypesEditorContext);
  const [locked, setLocked] = useState(false);
  const [contentProps, setContentProps] = useState(null);
  const pathname = useMemo(() => getPropPathname(superiorType, superiorPathname, propName), [superiorType, superiorPathname, propName]);

  const disabled = new Set(disabledProps.get(uid)).has(pathname);
  const value = (pathname ? _get(props, pathname) : props) || null;
  const overrided = override?.control?.({ category, definition, pathname, propName, disabled, value });

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
