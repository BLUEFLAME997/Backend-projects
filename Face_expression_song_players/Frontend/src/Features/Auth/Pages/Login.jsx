import React from 'react'
import '../style/login.scss'
import FormGroup from '../components/FormGroup'
import {NavLink} from 'react-router-dom'

const Login = () => {
  return (
    <main className='login-page'>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
        }}>

          <FormGroup
            label="Username:"
            placeholder="Enter your username"
            id="email"
            name="userName"
            type="text"
          />
          <FormGroup
            label="Password"
            placeholder="Enter your password"
            id="password"
            name="password"
            type="password"
          />

          <button type="submit" className="button">
            Login
          </button>
        </form>
        <p>Don't have an account? <NavLink to="/register">Register</NavLink></p>
      </div>
    </main>
  )
}

export default Login
