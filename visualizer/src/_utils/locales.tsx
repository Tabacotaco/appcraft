import React, { createContext, useMemo, useCallback, useContext } from 'react';

import _get from 'lodash/get';
import _template from 'lodash/template';


namespace AppcraftLocale {
  export type Locales = {
    [lang: string]: {
      [code: string]: string;
    };
  };

  export type Context = {
    lang: string;
    locales: Locales;
    defaultLocales: Locales;
    getFixedT: (code: string) => string;
  };

  export type Props = {
    lang?: string;
    locales?: AppcraftLocale.Locales;
  }
}

const LocaleContext = createContext<AppcraftLocale.Context>({
  lang: 'en',
  locales: {},
  defaultLocales: {},
  getFixedT: (code) => code
});

export const useLocales = () => useContext(LocaleContext);

export default function makeLocales(defaultLocales: AppcraftLocale.Locales) {
  const PrivateCustom = {
    useFixedT(locales: AppcraftLocale.Locales) {
      return useCallback((code, params) => _template(_get(locales, code) || code, { interpolate: /{{([\s\S]+?)}}/g })(params || {}), [locales]);
    },
    useLocales(lang: string, overridedLocales: AppcraftLocale.Locales) {
      const all = useMemo(() => {
        const keys = new Set(Object.keys(overridedLocales || {}));
        const keeps = Object.keys(defaultLocales).filter(($lang) => !keys.has($lang));

        return Object.entries(overridedLocales || {}).reduce(
          (result, [$lang, options]) => {
            const { alias, fixedT = _get(defaultLocales, $lang) } = typeof options === 'string'
              ? { alias: options }
              : options;

            return {
              ...result,
              [alias]: fixedT
            };
          },
          keeps.reduce(
            (result, $lang) => ({
              ...result,
              [$lang]: _get(defaultLocales, $lang)
            }),
            {}
          )
        );
      }, [overridedLocales]);

      return [
        useMemo(() => _get(all, lang), [lang, all]),
        all
      ];
    }
  };

  return <AppcraftProps extends object>(LocaleComponent: React.FC<AppcraftProps> | React.ForwardRefExoticComponent<AppcraftProps>) => (
    React.forwardRef<any, AppcraftProps & AppcraftLocale.Props>(({ lang, locales: overridedLocales, ...props }, ref) => {
      const [locales, allLocales] = PrivateCustom.useLocales(lang, overridedLocales);
      const getFixedT = PrivateCustom.useFixedT(locales) as AppcraftLocale.Context['getFixedT'];

      return (
        <LocaleContext.Provider value={{ lang, locales: allLocales, defaultLocales: overridedLocales, getFixedT }}>
          <LocaleComponent ref={ref} {...(props as AppcraftProps)} />
        </LocaleContext.Provider>
      );
    })
  );
}
