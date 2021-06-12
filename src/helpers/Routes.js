import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

function Routes({ user, sites, setSites }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
        </Route>
        <Route exact path='/servicesites'
          user={user}
          sites={sites}
          setSites={setSites}
        >

        </Route>
        <PrivateRoute exact path='/mylist'
          user={user}
        >
        </PrivateRoute>
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  sites: PropTypes.array,
  setSites: PropTypes.func
};

export default Routes;
