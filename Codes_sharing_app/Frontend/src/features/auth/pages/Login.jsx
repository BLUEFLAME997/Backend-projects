import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/form.scss'

const Login = () => {
  return (
    <main>
      <div className="form-container">
          <h1>Login</h1>
          <form>
            <div className="userName">
              <label htmlFor="username">Username:</label>
              <input type="text" placeholder='Enter username' id='username' name='username' />
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input type="password" placeholder='Enter password' id='password' name='password' />
            </div>
            <button>Login</button>
          </form>
          <p>Don't have an account?<NavLink to='/register'>Register</NavLink></p>
      </div>
    </main>
  )
}

export default Login
