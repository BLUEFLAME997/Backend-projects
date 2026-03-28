import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/form.scss'
import useAuth from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { handleRegisterApi, loading, user, setUser } = useAuth();
  const navigate=useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await handleRegisterApi(username, email, password);
      console.log(response);
      navigate('/');
    } catch (err) {
      throw err
    }
  }

  if (loading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    )
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="userName">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder='Enter username'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                console.log(username);
              }} />
          </div>
          <div className="email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name='email'
              id='email'
              placeholder='Enter email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log(email)
              }} />
          </div>
          <div className="password">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name='password'
              id='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log(password)
              }} />
          </div>
          <button>Register</button>
        </form>
        <p>Already have an accrount? <NavLink to='/login'>Login</NavLink></p>
      </div>
    </main>
  )
}

export default Register
