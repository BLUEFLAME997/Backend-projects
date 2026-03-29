import React, { useEffect } from 'react'
import useAuth from '../../auth/hooks/useAuth'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import '../style/dashboard.scss'
import Controls from '../components/Controls'

const Dashboard = () => {
  const {user}=useAuth();
  const navigate=useNavigate();

  const clickhandle=()=>{
    console.log(user)
  }

  useEffect(()=>{
    if(user===null){
      console.log(user)
      navigate('/login')
    }
  },[user])

  if(user===undefined){
    return (
      <main><h1>Loading...</h1></main>
    )
  }

  return (
    <section className='dashboard-page'>
      <Navbar/>
      <Controls/>
    </section>
  )
}

export default Dashboard