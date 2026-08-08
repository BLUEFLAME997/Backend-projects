import React from 'react'
import '../style/register.scss'
import FormGroup from '../components/FormGroup'
import {NavLink} from 'react-router-dom'

const Register = () => {
  return (
    <main className='register-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={(e) => {
          e.preventDefault()
        }}>
          <FormGroup
            label="Username:"
            placeholder="Enter your username"
            id="username"
            name="username"
            type="text"
          />
          <FormGroup
            label="Email:"
            placeholder="Enter your email"
            id="email"
            name="email"
            type="email"
          />
          <FormGroup
            label="Password:"
            placeholder="Enter your password"
            id="password"
            name="password"
            type="password"
          />
          <button type="submit" className="button">
            Register
          </button>
        </form>
        <p>Already have an account? <NavLink to="/login">Login</NavLink></p>
      </div>
    </main>
  )
}

export default Register
