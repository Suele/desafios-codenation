import React from "react";
import loginService from "../services/loginService";
import { Redirect, Link } from "react-router-dom";

const User = () =>
  loginService.isLogged() ? (
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
  ) : (
    <Redirect to={"/"} />
  );

export default User;
