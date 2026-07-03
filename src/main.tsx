import './index.css';
import React from 'react';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "./context/ThemeProvider.tsx";
import {I18nProvider} from "./i18n/I18nProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <App/>
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
