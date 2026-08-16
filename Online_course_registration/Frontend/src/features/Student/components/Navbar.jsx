import React from 'react'
import '../style/navbar.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
      <section className="logo-section">
        <div className="logo">
          <i className="ri-book-marked-fill"></i>
        </div>
        <div className="logo-content">
          <h3>EduPortal</h3>
        </div>
      </section>
      <section className="routes">
        <NavLink
          to="/student"
          className={({ isActive }) => isActive ? 'active' : 'close'}
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/courses"
          className={({ isActive }) => isActive ? 'active' : 'close'}
        >
          Browse Courses
        </NavLink>

        <NavLink
          to="/enrolled-courses"
          className={({ isActive }) => isActive ? 'active' : 'close'}
        >
          My Courses
        </NavLink>
      </section>
      <section className="user-logo">
        <div className="user">
          JR
        </div>
      </section>
    </nav>
  )
}

export default Navbar
