import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import SitesView from '../App/views/SitesView';
import ListView from '../App/views/ListView';
import HomeView from '../App/views/HomeView';

function Routes({ user, sites, setSites }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
          component={() => (
            <HomeView
              user={user}
            />
          )}
        >
        </Route>
        <Route exact path='/service-sites'
          component={() => (
            <SitesView
              user={user}
              sites={sites}
              setSites={setSites}
            />
          )}
        >
        </Route>
        <PrivateRoute exact path='/my-list'
          user={user}
          component={() => (
            <ListView
              user={user}
              // sites={sites}
              // setSites={setSites}
            />
          )}
        >
        </PrivateRoute>
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  sites: PropTypes.array,
  setSites: PropTypes.func,
};

export default Routes;
