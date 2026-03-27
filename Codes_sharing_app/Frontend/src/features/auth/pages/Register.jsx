import React from 'react'
import { NavLink } from 'react-router-dom'
import '../style/form.scss'

const Register = () => {
  return (
    <main>
      <div className="form-container">
          <h1>Register</h1>
          <form>
            <div className="userName">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" id="username" placeholder='Enter username' />
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input type="email" name='email' id='email' placeholder='Enter email' />
            </div>
            <div className="password">
              <label htmlFor="password">Password:</label>
              <input type="password" name='password' id='password' placeholder='Enter password' />
            </div>
            <button>Register</button>
          </form>
          <p>Already have an accrount? <NavLink to='/login'>Login</NavLink></p>
      </div>
    </main>
  )
}

export default Register
