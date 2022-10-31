import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { routes } from "../src/utils/routes";

import { AppContainer } from "./components/AppContainer";
import { Footer } from "./components/Footer";

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter basename="/samantha-betts">
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
      </BrowserRouter>
    </>
  );
};

export default App;
