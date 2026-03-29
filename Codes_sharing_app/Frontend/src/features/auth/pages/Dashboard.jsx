import React, { useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const {user}=useAuth();
  const navigate=useNavigate();

  const clickhandle=()=>{
    console.log(user)
  }

  if(user===undefined){
      return (
        <main><h1>Loading...</h1></main>
      )
    }

  useEffect(()=>{
    if(user===null){
      console.log(user)
      navigate('/login')
    }
  },[user])

  return (
    <div>
      <button
      onClick={clickhandle}>button</button>
      <h1>this is dashboard</h1>
    </div>
  )
}

export default Dashboard
