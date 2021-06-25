import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import SitesView from '../App/views/SitesView';
import ListView from '../App/views/ListView';
import HomeView from '../App/views/HomeView';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (allTheProps) => (user
    ? (<Component {...allTheProps} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: allTheProps.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

function Routes({ user, sites, setSites }) {
  return (
    <div>
      <Switch>
        <Route exact path='/'
          component={() => <HomeView
            user={user}
            />
          }
        >
        </Route>
        <Route exact path='/service-sites'
          component={() => <SitesView
              user={user}
            />
        }
        >
        </Route>
        <PrivateRoute exact path='/my-list'
          user={user}
          component={() => <ListView
            user={user}
            sites={sites}
            setSites={setSites}
            />
          }
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
