import React from 'react';
import {
  BrowserRouter as Router, Route, NavLink, Switch,
} from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader/root';

import Home from './pages/Home';
import About from './pages/About';
import NoMatch from './pages/NoMatch';
import './app.scss';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div className="app-container">
      <div className="app-content">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      <ul className="nav">
        <li>
          <NavLink to="/" activeClassName="active" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
      </ul>
    </div>
  </Router>
);

export default hot(App);
