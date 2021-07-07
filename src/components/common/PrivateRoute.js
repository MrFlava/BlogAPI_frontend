import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
        return <Component {...props} />;
    }}
  />
);

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(PrivateRoute);
