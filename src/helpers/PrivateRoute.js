import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

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

export default PrivateRoute;
