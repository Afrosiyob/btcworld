import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRouteAdmin = ({ component: Component, ...rest }) => {
  //   const token = localStorage.getItem("token");
  //   const role = localStorage.getItem("role");
  const fakeAuth = true;
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
