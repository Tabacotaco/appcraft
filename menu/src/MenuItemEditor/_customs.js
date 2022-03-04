import { useState, useMemo, useCallback } from 'react';
import { generate as uuid } from 'shortid';

import _debounce from 'lodash/debounce';
import _set from 'lodash/set';

import ICONS from '../_assets/json/icons.json';


export const EMPTY_OPTION = `EMPTY-${uuid()}`;

export function useDialog(type, defaultValue, onChange) {
  const initValue = useMemo(() => JSON.parse(JSON.stringify(defaultValue)), []);
  const [value, setValue] = useState(initValue);

  return [
    value,

    useMemo(() => (
      JSON.stringify(initValue) !== JSON.stringify(value)
    ), [initValue, value]),

    {
      add: useCallback(() => (
        setValue(({ primary, ...option }) => ({
          ...option,
          primary: {
            ...primary,
            [EMPTY_OPTION]: ''
          }
        }))
      ), [setValue]),

      remove: useCallback(({ currentTarget }) => (
        setValue(({ primary, ...option }) => {
          // eslint-disable-next-line no-param-reassign
          delete primary[currentTarget.dataset.lang];

          return { ...option, primary };
        })
      ), [setValue]),

      lang: useCallback(({ target: { name: lastLang, value: newLang } }) => (
        setValue(({ primary: { [lastLang]: lang, ...$primary }, ...option }) => ({
          ...option,
          primary: _set($primary, newLang, lang)
        }))
      ), [setValue]),

      primary: useCallback(({ target: { name: lang, value: primary } }) => (
        setValue(({ primary: $primary, ...option }) => ({
          ...option,
          primary: _set($primary, lang, primary)
        }))
      ), [setValue]),

      icon: useCallback(({ currentTarget: { dataset } }) => (
        setValue((option) => {
          const { type: iconType, name } = dataset;

          return {
            ...option,
            icon: { type: iconType, name }
          };
        })
      ), [setValue]),

      confirm: useCallback((e) => {
        e.preventDefault();
        onChange instanceof Function && onChange(type, value);
      }, [type, value, onChange])
    }
  ];
}

export function useIcons(icons) {
  const [keyword, setKeyword] = useState('');

  const list = useMemo(() => (
    Object.entries(icons || {}).reduce(
      (result, [type, $icons]) => (
        result.concat(
          $icons.map((name) => ({
            key: `${type}-${name}`,
            type,
            name
          }))
        )
      ),
      ICONS.map((name) => ({
        key: `mui-${name}`,
        type: 'mui',
        name
      }))
    )
  ), [icons]);

  return [
    useMemo(() => (
      (!keyword.trim() ? list : list.filter(
        ({ key }) => key.toLowerCase().includes(keyword.toLowerCase())
      )).slice(0, 100)
    ), [list, keyword]),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useCallback(_debounce(
      ({ target: { value } }) => setKeyword(value),
      800
    ), [])
  ];
}
