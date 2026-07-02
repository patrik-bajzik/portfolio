import {
    useCallback,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react';
import { ThemeContext } from "./ThemeContext";

export type Theme = 'dark' | 'light';

export type ThemeContextValue = {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (t: Theme) => void;
};

const STORAGE_KEY = 'portfolio-theme';

function getInitialTheme(): Theme {
    if (typeof window === 'undefined') return 'dark';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return 'dark';
}

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        root.setAttribute('data-theme', theme);
        root.style.colorScheme = theme;
        window.localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const setTheme = useCallback((t: Theme) => setThemeState(t), []);
    const toggleTheme = useCallback(
        () => setThemeState((t) => (t === 'dark' ? 'light' : 'dark')),
        [],
    );

    const value = useMemo(
        () => ({ theme, toggleTheme, setTheme }),
        [theme, toggleTheme, setTheme],
    );

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
