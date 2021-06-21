import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRouteAdmin = ( { component: Component, ...rest } ) => {
  const token = localStorage.getItem( "token" );

  return (
    <Route
      { ...rest }
      render={ ( props ) =>
        true ? (
          <Component { ...props } />
        ) : (
          <Redirect
            to={ {
              pathname: "/",
              state: { from: props.location },
            } }
          />
        )
      }
    />
  );
};
