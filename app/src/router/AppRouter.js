import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';

import LandingPage from '../components/LandingPage';
import Login from '../components/auth/Login';
import Journal from '../components/journal/Journal';

export const history = createBrowserHistory();

const AppRouter = () => {

  return (
    <Router history={history}>
      <Switch>
        <Route        path="/login"   component={Login} />
        <PrivateRoute path='/journal' component={Journal} />
        <PrivateRoute path="/"        component={LandingPage} />
      </Switch>
    </Router>
  )
};

export default AppRouter;