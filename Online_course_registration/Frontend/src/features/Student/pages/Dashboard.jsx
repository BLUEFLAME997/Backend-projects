import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import '../style/studentDashboard.scss'

const Dashboard = () => {
  
  return (
    <div className='dashboard'>
      <Navbar/>
      <section className="welcome-banner">
        <div className="welcome-left">
          <div className="avatar">
            <span>JR</span>
            <span className="status-dot"></span>
          </div>
          <div className="welcome-text">
            <p className="eyebrow">Welcome back</p>
            <h2>Jordan Rivera</h2>
            <p className="subtext">
              jordan.rivera@university.edu · Student
            </p>
          </div>
        </div>
        <div className="welcome-right">
          <div className="progress-ring">
            <span className="progress-value">25%</span>
          </div>
          <p className="progress-label">Enrollment Progress</p>
        </div>
      </section>

      {/* Stat cards */}
      <section className="stat-cards">
        <div className="stat-card">
          <p className="stat-label">
            <span className="dot dot-indigo"></span>Enrolled Courses
          </p>
          <p className="stat-value value-indigo">3</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">
            <span className="dot dot-teal"></span>Total Available
          </p>
          <p className="stat-value value-teal">12</p>
        </div>
        <div className="stat-card">
          <p className="stat-label">
            <span className="dot dot-amber"></span>Yet to Explore
          </p>
          <p className="stat-value value-amber">9</p>
        </div>
      </section>

      {/* Active courses */}
      <section className="active-courses">
        <div className="section-header">
          <h3>
            <i className="ri-computer-line"></i> Active Courses
            <span className="count-badge">3</span>
          </h3>
          <a href="/enrolled-courses" className="see-all">
            See all →
          </a>
        </div>
        <div className="course-cards-grid">

          <div className="course-card theme-pink">
            <div className="course-card-top">
              <h4>Introduction to Computer Science</h4>
              <span className="credit-badge">3 cr</span>
            </div>
            <p className="course-meta">
              <i className="ri-user-line"></i> Dr. Aisha Patel
            </p>
            <p className="course-meta">
              <i className="ri-calendar-line"></i> Mon / Wed 10:00–11:30 AM
            </p>
            <p className="course-meta">
              <i className="ri-time-line"></i> Enrolled Sep 3, 2025
            </p>
            <div className="capacity">
              <div className="capacity-label">
                <span>Capacity</span>
                <span>38/50 (76%)</span>
              </div>
              <div className="capacity-bar">
                <div className="capacity-fill w-76"></div>
              </div>
            </div>
            <button className="view-details-btn">View Details</button>
          </div>

          <div className="course-card theme-amber">
            <div className="course-card-top">
              <h4>Data Structures & Algorithms</h4>
              <span className="credit-badge">4 cr</span>
            </div>
            <p className="course-meta">
              <i className="ri-user-line"></i> Prof. Marcus Lee
            </p>
            <p className="course-meta">
              <i className="ri-calendar-line"></i> Tue / Thu 1:00–2:30 PM
            </p>
            <p className="course-meta">
              <i className="ri-time-line"></i> Enrolled Sep 5, 2025
            </p>
            <div className="capacity">
              <div className="capacity-label">
                <span>Capacity</span>
                <span>45/45 (100%)</span>
              </div>
              <div className="capacity-bar">
                <div className="capacity-fill w-100"></div>
              </div>
            </div>
            <button className="view-details-btn">View Details</button>
          </div>

          <div className="course-card theme-indigo">
            <div className="course-card-top">
              <h4>Machine Learning Fundamentals</h4>
              <span className="credit-badge">3 cr</span>
            </div>
            <p className="course-meta">
              <i className="ri-user-line"></i> Dr. Priya Sharma
            </p>
            <p className="course-meta">
              <i className="ri-calendar-line"></i> Fri 9:00 AM–12:00 PM
            </p>
            <p className="course-meta">
              <i className="ri-time-line"></i> Enrolled Sep 10, 2025
            </p>
            <div className="capacity">
              <div className="capacity-label">
                <span>Capacity</span>
                <span>22/35 (63%)</span>
              </div>
              <div className="capacity-bar">
                <div className="capacity-fill w-63"></div>
              </div>
            </div>
            <button className="view-details-btn">View Details</button>
          </div>

        </div>
      </section>

      {/* Recent materials */}
      <section className="recent-materials">
        <h3>
          <i className="ri-file-list-3-line"></i> Recent Materials
          <span className="count-badge">3</span>
        </h3>
        <div className="materials-list">

          <div className="material-item">
            <div className="material-icon">
              <i className="ri-file-pdf-2-line"></i>
            </div>
            <div className="material-info">
              <h5>Week 3 – Sorting Algorithms.pdf</h5>
              <p>Data Structures & Algorithms</p>
            </div>
            <span className="material-date">Oct 12</span>
          </div>

          <div className="material-item">
            <div className="material-icon">
              <i className="ri-play-circle-line"></i>
            </div>
            <div className="material-info">
              <h5>Intro to Neural Nets – Lecture Video</h5>
              <p>Machine Learning Fundamentals</p>
            </div>
            <span className="material-date">Oct 10</span>
          </div>

          <div className="material-item">
            <div className="material-icon">
              <i className="ri-file-pdf-2-line"></i>
            </div>
            <div className="material-info">
              <h5>CS101 Lab 4 – Recursion.pdf</h5>
              <p>Introduction to Computer Science</p>
            </div>
            <span className="material-date">Oct 8</span>
          </div>

        </div>
      </section>

      {/* Quick actions */}
      <section className="quick-actions">
        <h3>
          <i className="ri-flashlight-fill"></i> Quick Actions
        </h3>
        <div className="quick-actions-grid">
          <div className="quick-action-card">
            <div className="quick-action-icon icon-indigo">
              <i className="ri-search-line"></i>
            </div>
            <h4>Browse Courses</h4>
            <p>Explore all available courses and find your next learning adventure.</p>
          </div>
          <div className="quick-action-card">
            <div className="quick-action-icon icon-teal">
              <i className="ri-book-open-line"></i>
            </div>
            <h4>My Courses</h4>
            <p>Review your enrolled courses, materials, and track your progress.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
