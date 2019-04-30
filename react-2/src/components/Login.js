import React, { Component } from "react";
import login from "../services/loginService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handlerSubmitForm = () => {};

  render = () => (
    <form className='form-signin' onSubmit={this.handlerSubmitForm}>
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
        <button
          className='login btn btn-lg btn-primary btn-block'
          type='submit'
        >
          Login
        </button>
        <button
          className='register btn btn-lg btn-secondary btn-block'
          type='submit'
        >
          Register
        </button>
      </div>
      {console.log(this.state)}
    </form>
  );
}

export default Login;
