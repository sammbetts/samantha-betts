import React from 'react';
import { Route, Switch } from 'react-router';
import { routes } from '../src/utils/routes';
import { AppContainer } from './components/AppContainer';

export const App: React.FC = () => {
  return (
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
  );
};

export default App;
