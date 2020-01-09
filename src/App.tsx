import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router';

import store, { history } from './store';
import routes from './routes';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
