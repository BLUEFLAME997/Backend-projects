import React, { useState } from 'react'
import '../style/form.scss';
import { NavLink } from 'react-router';
import axios from 'axios';

const Login = () => {
  const [userName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  
  async function handleSubmit(e){
    e.preventDefault();
    const response=await axios.post('http://localhost:8000/api/auth/login',{
      userName,
      password
    },{
      withCredentials:true
    })
    console.log(response)
    setUserName('')
    setPassword('')
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
