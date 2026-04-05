import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  const handleNavigate=()=>{
    navigate('/snippet')
  }

  return (
    <nav>
      <div className="heading">
        <h1>NoteCode</h1>
      </div>
      <div className="nav-buttons">
        <button
        onClick={handleNavigate}>My Snippets</button>
        <button className='logout'>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
