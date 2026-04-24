import React from 'react'
import { NavLink } from 'react-router'
import '../../style/login.scss'

const Login = () => {
  return (
    <section className="login-page">
      <div className="login">
        <form>
          
          <div className="header">
            <h1>Welcome back</h1>
            <p>Sign in to continue</p>
          </div>
          
          <div className="input-fields">
            <div className="input-contents">
              <label htmlFor="username">Enter username:</label>
              <input type="text" placeholder='username' id='username' name='username' />
            </div>
            <div className="input-contents">
              <label htmlFor="password">Enter password:</label>
              <input type="password" placeholder='abc123' id='password' name='password' />
            </div>
          </div>

          <button>Sign In</button>
        </form>
        <p>Don't have an account? <NavLink to='/register'>Sign up</NavLink></p>
      </div>
    </section>
  )
}

export default Login
