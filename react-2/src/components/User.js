import React from "react";
import loginService from "../services/loginService";
import { Redirect, Link, Route } from "react-router-dom";

const User = ({ component: Component, ...rest }) =>
  !loginService.isLogged() ? (
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
