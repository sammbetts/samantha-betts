import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './App';
import { ThemeContextProvider } from './theme/themeContext';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    <ThemeContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeContextProvider>
  );
