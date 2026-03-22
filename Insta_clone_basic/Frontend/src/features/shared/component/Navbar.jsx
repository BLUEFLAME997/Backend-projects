import React from 'react'
import '../navbar.scss'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const navigate=useNavigate();

  return (
    <nav>
      <p>Insta</p>
      <button className='create-post-button'
      onClick={()=>{
        navigate('/create-post')
      }}>Create post</button>
    </nav>
  )
}

export default Navbar
