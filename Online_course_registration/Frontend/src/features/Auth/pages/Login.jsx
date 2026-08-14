import React from 'react'
import { NavLink } from 'react-router'
import '../style/login.scss'
import useAuth from '../hook/useAuth'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Login = () => {

  const navigate = useNavigate();
  const {user,loading,handleLoginApi} = useAuth();
  
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  async function handleFormData(e){
    e.preventDefault();
    try{
      await handleLoginApi(username,password);
      if(user.role === "student"){
        navigate('/student');
      }
      if(user.role === 'admin'){
        navigate('/admin')
      }
    }catch(err){
      throw err
    }
  }

  return (
    <section className="login-page">
      <div className="login">
        <form onSubmit={handleFormData}>
          
          <div className="header">
            <h1>Welcome back</h1>
            <p>Sign in to continue</p>
          </div>
          
          <div className="input-fields">
            <div className="input-contents">
              <label htmlFor="username">Enter username:</label>
              
              <input 
              type="text" 
              placeholder='username' 
              id='username' 
              name='username' 
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value)
              }}/>

            </div>
            <div className="input-contents">
              <label htmlFor="password">Enter password:</label>
              
              <input 
              type="password" 
              placeholder='abc123' 
              id='password'
              name='password' 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value)
              }}/>

            </div>
          </div>

          <button>Sign In</button>
        </form>
        <p>Don't have an account? <NavLink to='/register'>Sign up</NavLink></p>
      </div>
    </section>
  )
}

export default Login
