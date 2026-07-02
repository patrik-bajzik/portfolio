import {createContext} from "react";
import {ThemeContextValue} from "./ThemeProvider.tsx";

export const ThemeContext = createContext<ThemeContextValue | null>(null);
