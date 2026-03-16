import React, { useState } from 'react'
import '../style/form.scss';
import { NavLink } from 'react-router';
import axios from 'axios';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e){
    e.preventDefault();
    const response=await axios.post('http://localhost:8000/api/auth/register',{
      userName,
      email,
      password
    },{
      withCredentials:true
    })
    console.log(response)
    setUserName('')
    setEmail('')
    setPassword('')
  }

  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <input
              onInput={(e) => {
                setUserName(e.target.value)
              }}
              value={userName}
              type="text"
              name='userName'
              placeholder='Enter username:' />

          <input
              onInput={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
              type="email"
              name='email'
              placeholder='Enter email:' />

          <input
              onInput={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
              type="password"
              name='password'
              placeholder='Enter password' />

          <button type='submit'>Register</button>
        </form>
        <p>Already have an account?<NavLink className='toggleAuthForm' to='/login'>Login</NavLink></p>
      </div>
    </main>
  )
}

export default Register
