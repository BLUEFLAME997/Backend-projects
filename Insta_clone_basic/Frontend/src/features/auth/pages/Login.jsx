import React, { useState } from 'react'
import '../style/form.scss';
import { NavLink } from 'react-router';
import axios from 'axios';
import { useAuth } from '../hooks/userAuth';
import { useNavigate } from 'react-router';

const Login = () => {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const {handleLogin,loading}=useAuth();
  const navigate=useNavigate();
  
  async function handleSubmit(e){
    e.preventDefault();
    const response = await handleLogin(userName,password);
    console.log("Login handler: ",response);
    navigate('/') 
  }

  if(loading){
    return (
      <h1>Loading...</h1>
    )
  }

  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input 
            onInput={(e)=>{
              setUserName(e.target.value)
            }}
            value={userName}
            type="text" 
            placeholder='Enter username' 
            name='userName' />
          
          <input 
            onInput={(e)=>{
              setPassword(e.target.value)
            }}
            value={password}
            type="password" 
            placeholder='Enter password' 
            name='password' />

          <button type='submit'>Login</button>

        </form>
        <p>Don't have an account?<NavLink className='toggleAuthForm' to='/register'>Register</NavLink></p>
      </div>
    </main>
  )
}

export default Login
