import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/form.scss'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleLoginApi, loading, setUser, user } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handleLoginApi(username, password);
      setUser(response.isUserExist);
      console.log(user)
      navigate('/');
    } catch (err) {
      console.log("Error: ", err)
    }
  }

  if (loading) {
    return (
      <main><h1>Loading....</h1></main>
    )
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="userName">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              placeholder='Enter username'
              id='username' name='username'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
              }} />
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder='Enter password'
              id='password' name='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }} />
          </div>
          <button type='submit'>Login</button>
        </form>
        <p>Don't have an account?<NavLink to='/register'>Register</NavLink></p>
      </div>
    </main>
  )
}

export default Login
