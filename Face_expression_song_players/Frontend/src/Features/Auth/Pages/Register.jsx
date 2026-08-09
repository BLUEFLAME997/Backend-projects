import React from 'react'
import '../style/register.scss'
import FormGroup from '../components/FormGroup'
import {NavLink} from 'react-router-dom'
import useAuth from '../hook/useAuth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Register = () => {

  const navigate = useNavigate();
  const {loading,handleRegister}=useAuth();

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    try{
      await handleRegister(username,email,password);
      navigate('/')
    }catch(err){
      console.log("Error: ",err)
    }
  }

  return (
    <main className='register-page'>
      <div className="form-container">
        <h1>Register</h1>
        <form  onSubmit={handleSubmit}>
          <FormGroup
            label="Username:"
            placeholder="Enter your username"
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(e)=>{
              setUsername(e.target.value);
            }}
          />

          <FormGroup
            label="Email:"
            placeholder="Enter your email"
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
          />
          
          <FormGroup
            label="Password:"
            placeholder="Enter your password"
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
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
