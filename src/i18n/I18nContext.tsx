import {createContext} from "react";
import {I18nContextValue} from "./I18nProvider.tsx";

export const I18nContext = createContext<I18nContextValue | null>(null);
