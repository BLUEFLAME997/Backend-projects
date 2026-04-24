import React from 'react'
import { NavLink } from 'react-router'
import '../../style/register.scss'

const Register = () => {
  return (
    <section className="register-page">
      <div className="register">
        <form>

          <div className="header">
            <h1>Welcome</h1>
            <p>Join us to get started</p>
          </div>

          <div className="input-fields">
            <div className="input-contents">
              <label htmlFor="username">Enter Username: </label>
              <input type="text" name='username' id='username' placeholder='username' />
            </div>
            <div className="input-contents">
              <label htmlFor="email">Enter Email:</label>
              <input type="email" placeholder='xyz@gmail.com' name='email' id='email' />
            </div>
            <div className="input-contents">
              <label htmlFor="password">Enter password:</label>
              <input type="password" placeholder='abc123' name='password' id='password' />
            </div>
          </div>

          <button>Register</button>
        </form>
        <p>Already have an account? <NavLink to='/login'>Sign In</NavLink></p>
      </div>
    </section>
  )
}

export default Register
