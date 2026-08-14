import React from 'react'
import { NavLink } from 'react-router'
import '../style/register.scss'
import useAuth from '../hook/useAuth'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const Register = () => {

  const navigate = useNavigate();
  const {user,loading,handleRegisterApi} = useAuth();
  
  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [role,setRole] = useState('Student');

  async function handleFormData(e){
    e.preventDefault();
    try{
      await handleRegisterApi(username,email,password,role);
      navigate('/');
    }catch(err){
      throw err
    }
  }

  return (
    <section className="register-page">
      <div className="register">
        <form onSubmit={handleFormData}>

          <div className="header">
            <h1>Welcome</h1>
            <p>Join us to get started</p>
          </div>

          <div className="input-fields">
            <div className="input-contents">
              <label htmlFor="username">Enter Username: </label>
              <input 
              type="text" 
              name='username' 
              id='username' 
              placeholder='username' 
              value={username}
              onChange={(e)=>{
                setUsername(e.target.value);
              }}/>
            </div>
            <div className="input-contents">
              <label htmlFor="email">Enter Email:</label>
              <input 
              type="email" 
              placeholder='xyz@gmail.com' 
              name='email' 
              id='email' 
              value={email}
              onChange={(e)=>{
                setEmail(e.target.value);
              }}/>
            </div>
            <div className="input-contents">
              <label htmlFor="password">Enter password:</label>
              <input 
              type="password" 
              placeholder='abc123' 
              name='password' 
              id='password' 
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
              }}/>
            </div>
            <div className="input-contents">
              <label htmlFor="role">Role:</label>
              <select 
              name="role" 
              id="role" 
              value={role} 
              onChange={(e)=>{
                setRole(e.target.value);
              }}>
                <option value="student">Student</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </div>

          <button>Register</button>
        </form>
        <p>Already have an account? <NavLink to='/login'>Sign In</NavLink></p>
      </div>
    </section>
  )
}

export default Register
