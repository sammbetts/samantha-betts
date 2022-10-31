import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

import { routes } from "../src/utils/routes";
import { ThemeContextProvider } from "./theme/themeContext";

import { AppContainer } from "./components/AppContainer";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter basename="/samantha-betts">
        <ThemeContextProvider>
          <AppContainer>
            <Switch>
              {Object.values(routes).map((route, idx) => (
                <Route
                  key={idx}
                  path={route.path}
                  component={route.component}
                  exact={true}
                />
              ))}
            </Switch>
          </AppContainer>
          <Footer />
        </ThemeContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
