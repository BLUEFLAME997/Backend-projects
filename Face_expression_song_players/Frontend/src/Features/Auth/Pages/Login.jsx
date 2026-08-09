import React, { useState } from 'react'
import '../style/login.scss'
import FormGroup from '../components/FormGroup'
import { NavLink } from 'react-router-dom'
import useAuth from '../hook/useAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await handleLogin(username, password);
      navigate('/');
    } catch (err) {
      console.log("Error: ", err);
    }
  }

  return (
    <main className='login-page'>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>

          <FormGroup
            label="Username:"
            placeholder="Enter your username"
            id="email"
            name="userName"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value)
            }}
          />
          <FormGroup
            label="Password"
            placeholder="Enter your password"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
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
