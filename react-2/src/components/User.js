import React from "react";
import loginService from "../services/loginService";
import { Redirect, Link, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      loginService.isLogged() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const User = () =>
  !loginService.isLogged() ? (
    <PrivateRoute />
  ) : (
    <Link to={"/"}>
      <button
        className='btn'
        onClick={() => {
          loginService.logout();
        }}
      >
        Logout
      </button>
    </Link>
  );

export default User;
