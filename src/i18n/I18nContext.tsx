import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react';
import { translations, type Locale, type TranslationKey } from './translations';

type I18nContextValue = {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: (key: TranslationKey, vars?: Record<string, string>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = 'portfolio-locale';

function getInitialLocale(): Locale {
    if (typeof window === 'undefined') return 'en';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'en' || stored === 'sk') return stored;
    const nav = window.navigator.language.slice(0, 2).toLowerCase();
    return nav === 'sk' ? 'sk' : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, locale);
        document.documentElement.lang = locale;
    }, [locale]);

    const setLocale = useCallback((l: Locale) => setLocaleState(l), []);

    const t = useCallback(
        (key: TranslationKey, vars?: Record<string, string>) => {
            const dict = translations[locale] as Record<string, string>;
            let str = dict[key] ?? key;
            if (vars) {
                for (const [k, v] of Object.entries(vars)) {
                    str = str.replace(`{${k}}`, v);
                }
            }
            return str;
        },
        [locale],
    );

    const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
    return ctx;
}
