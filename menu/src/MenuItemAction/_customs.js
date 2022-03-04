import { useState, useCallback, useContext } from 'react';
import { generate as uuid } from 'shortid';

import { AppMenuContext } from '../utils/_context';
import { useLocales } from '../utils/locales';


export function useActions(uid, onAdd, onEdit, onRemove) {
  const { getOption } = useContext(AppMenuContext);
  const { lang } = useLocales();
  const [anchorEl, setAnchorEl] = useState(null);

  return [anchorEl, {
    close: useCallback(() => (
      setAnchorEl(null)
    ), []),

    open: useCallback((e) => (
      setAnchorEl(e.currentTarget)
    ), []),

    add: useCallback(() => {
      setAnchorEl(null);

      onAdd instanceof Function && onAdd({
        owner: uid,
        uid: uuid(),
        primary: { [lang]: '' },
        secondary: { [lang]: '' }
      });
    }, [lang, uid, onAdd]),

    edit: useCallback(() => {
      setAnchorEl(null);
      onEdit instanceof Function && onEdit(getOption(uid));
    }, [uid, getOption, onEdit]),

    remove: useCallback(() => (
      onRemove instanceof Function && onRemove(getOption(uid))
    ), [uid, getOption, onRemove])
  }];
}
