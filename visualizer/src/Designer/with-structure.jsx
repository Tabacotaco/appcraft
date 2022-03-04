import React, { useRef, useEffect, useState, useMemo, useContext } from 'react';

import _get from 'lodash/get';

import { ProptypesEditorContext, getPropPathname } from './_customs';


export function useOverrided(PropElement, category, controlProps) {
  const { superiorType, superiorPathname, definition, propName } = controlProps;

  const { override, props } = useContext(ProptypesEditorContext);
  const [locked, setLocked] = useState(false);
  const [contentProps, setContentProps] = useState(null);
  const pathname = useMemo(() => getPropPathname(superiorType, superiorPathname, propName), [superiorType, superiorPathname, propName]);

  const value = _get(props, pathname) || null;
  const overrided = override?.control?.({ category, definition, pathname, propName, value });

  return [
    overrided === false ? null : (overrided || (
      <PropElement ref={setContentProps} {...controlProps} {...contentProps} pathname={pathname} value={value} onFieldLocked={setLocked} />
    )),
    contentProps,
    locked,
    pathname,
    value
  ];
}

export default function withStructure(category, PropElement) {
  const HOCElement = (controlProps) => (
    useOverrided(PropElement, category, controlProps)?.[0] || null
  );

  HOCElement.Naked = PropElement;
  HOCElement.displayName = 'Structure';

  return HOCElement;
}
