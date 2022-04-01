import React from 'react';
declare namespace AppcraftLocale {
    type Locales = {
        [lang: string]: {
            [code: string]: string;
        };
    };
    type Context = {
        lang: string;
        locales: Locales;
        defaultLocales: Locales;
        getFixedT: (code: string) => string;
    };
    type Props = {
        lang?: string;
        locales?: AppcraftLocale.Locales;
    };
}
export declare const useLocales: () => AppcraftLocale.Context;
export default function makeLocales(defaultLocales: AppcraftLocale.Locales): <AppcraftProps extends object>(LocaleComponent: React.FC<AppcraftProps> | React.ForwardRefExoticComponent<AppcraftProps>) => React.ForwardRefExoticComponent<React.PropsWithoutRef<AppcraftProps & AppcraftLocale.Props> & React.RefAttributes<any>>;
export {};
