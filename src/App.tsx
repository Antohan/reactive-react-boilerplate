import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router';
import { NavLink } from 'react-router-dom';

import store, { history } from './store';
import routes from './routes';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  const routesArr = routes.map((route, i) => (
    <RouteWithSubRoutes key={i} {...route} />
  ));

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav className="App-navigation">
            <NavLink
              to="/"
              className="App-navigation-link"
              activeClassName="selected"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="App-navigation-link"
              activeClassName="selected"
            >
              About
            </NavLink>
          </nav>
        </header>

        <Switch>{routesArr}</Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default App;
