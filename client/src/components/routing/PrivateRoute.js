import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authState = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        authState && !authState.isAuthenticated && !authState.loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
