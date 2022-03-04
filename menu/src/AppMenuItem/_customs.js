import { useState, useMemo, useCallback, useContext } from 'react';

import { AppMenuContext, OwnerMenuItemContext } from '../utils/_context';
import { MenuItemCustom } from '../utils/_customs';


function isModifiable(type, option, { editing, onModifiable }) {
  return editing && onModifiable(type, option) === true;
}


// TODO: Custom Hooks
export function useDnd(option) {
  const { dnd, editing, getSubMenu, onCrossDnd, onModifiable } = useContext(AppMenuContext);
  const { footer } = useContext(OwnerMenuItemContext);
  const [interactived, setInteractived] = useState({ drag: false, drop: false });
  const droppableId = `droppable-${option.uid}`;

  const modifiable = isModifiable('dnd', option, { editing, onModifiable });
  const { drag, drop: [drop, setDrop] = [] } = dnd || {};

  return [
    droppableId,
    interactived,
    Boolean(drag),
    useMemo(() => onCrossDnd(option) === true, [option, onCrossDnd]),

    useMemo(() => (
      !footer
        && modifiable
          && interactived.drop
            && !MenuItemCustom.isProgeny(option.uid, drop?.replace(/^droppable-/, ''), getSubMenu)
    ), [interactived.drop, option.uid, footer, modifiable, drop, getSubMenu]),

    {
      on: useCallback(({ currentTarget: { dataset } }) => (
        setInteractived(($interactived) => ({
          ...$interactived,
          [dataset.dndType]: !footer
        }))
      ), [footer, setInteractived]),

      off: useCallback(({ currentTarget: { dataset } }) => (
        setInteractived(($interactived) => ({
          ...$interactived,
          [dataset.dndType]: false
        }))
      ), [setInteractived]),

      over: useCallback((e) => {
        e.stopPropagation();

        if (drag && droppableId !== drop) {
          setDrop(droppableId);
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [drop, drag])
    }
  ];
}

export function useModifiable(option, onAdd, onEdit, onRemove) {
  const context = useContext(AppMenuContext);
  const { footer } = useContext(OwnerMenuItemContext);

  return [
    !footer && isModifiable('dnd', option, context),

    !footer && isModifiable('edit', option, context) && (
      onAdd instanceof Function
        || onEdit instanceof Function
          || onRemove instanceof Function
    )
  ];
}
