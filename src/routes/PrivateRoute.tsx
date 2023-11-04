import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getCookie } from "../utils/CookieUtil";

const USER_AUTHORITY = ["ADMIN"];

const PrivateRoute = (props: any) => {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        getCookie("authenticated") &&
        USER_AUTHORITY.includes(getCookie("authority")) ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: routeProps.location } }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
