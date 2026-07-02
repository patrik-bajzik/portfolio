import {useContext} from "react";
import {ThemeContextValue} from "../context/ThemeProvider.tsx";
import {ThemeContext} from "../context/ThemeContext.tsx";

export function useTheme(): ThemeContextValue {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
    return ctx;
}
