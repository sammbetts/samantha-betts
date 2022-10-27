import React from 'react';
import { Route, Switch } from 'react-router';
import { routes } from '../src/utils/routes';
import { PageTemplate } from './components/PageTemplate';

export const App: React.FC = () => {
  return (
    <PageTemplate>
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
    </PageTemplate>
  );
};

export default App;
