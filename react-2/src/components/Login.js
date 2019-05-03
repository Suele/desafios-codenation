import React, { Component } from "react";
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  loginUser = () => {
    const usuarioTentandoLogar = loginService.login(
      this.state.username,
      this.state.password
    );
    console.log(usuarioTentandoLogar);
    console.log(loginService.isLogged());
  };

  registerUser = () => {
    const usuarioTentandoFazerRegistro = loginService.register(
      this.state.username,
      this.state.password
    );
    console.log(usuarioTentandoFazerRegistro);
  };

  render() {
    let { from } = { from: { pathname: "/" } };
    if (loginService.isLogged()) return <Redirect to={from} />;

    return (
      <form className='form-signin'>
        <div className='text-center mb-4'>
          <h1 className='h3 mb-3 font-weight-normal'>Login / Register</h1>
        </div>

        <div className='form-label-group'>
          <label htmlFor='inputEmail'>Username</label>
          <input
            name='username'
            onChange={e => {
              e.preventDefault();
              this.setState({ username: e.target.value });
            }}
            value={this.onChange}
            className='form-control'
            placeholder='Username'
            required
          />
        </div>

        <div className='form-label-group mt-2'>
          <label htmlFor='inputPassword'>Password</label>
          <input
            name='password'
            onChange={e => {
              e.preventDefault();
              this.setState({ password: e.target.value });
            }}
            value={this.onChange}
            type='password'
            className='form-control'
            placeholder='Password'
            required
          />
        </div>

        <div className='mt-5'>
          {!loginService.isLogged() ? (
            <Link to={"/"}>
              <button
                onClick={this.loginUser}
                className='login btn btn-lg btn-primary btn-block'
                type='submit'
              >
                Login
              </button>
            </Link>
          ) : (
            <PrivateRoute />
          )}
          {loginService.isLogged() ? (
            <Link to={"/"}>
              <button
                onClick={this.registerUser}
                className='register btn btn-lg btn-secondary btn-block'
                type='submit'
              >
                Register
              </button>
            </Link>
          ) : (
            <Link to={"/user/login"}>
              <button
                onClick={this.registerUser}
                className='register btn btn-lg btn-secondary btn-block'
                type='submit'
              >
                Register
              </button>
            </Link>
          )}
        </div>
        {console.log(this.state)}
        {console.log("isLogged: ", loginService.isLogged())}
      </form>
    );
  }
}
export default Login;
