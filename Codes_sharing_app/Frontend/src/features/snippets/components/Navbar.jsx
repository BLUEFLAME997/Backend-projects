import React from 'react'

const Navbar = () => {
  return (
    <nav>
      <div className="heading">
        <h1>NoteCode</h1>
      </div>
      <div className="nav-buttons">
        <button>My Snippets</button>
        <button className='logout'>Logout</button>
      </div>
    </nav>
  )
}

export default Navbar
