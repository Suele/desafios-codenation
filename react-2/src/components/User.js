import React from "react";
import loginService from "../services/loginService";
import { Link } from "react-router-dom";

const User = () => (
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
