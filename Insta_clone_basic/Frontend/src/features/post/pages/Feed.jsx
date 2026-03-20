import React from 'react'
import '../style/Feed.scss'

const Feed = () => {
  return (
    <main>
      <div className="feed">
        <div className="user">
          <img src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <p>Username</p>
        </div>
        <div className="post-image">
          <img src="https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="bottom">
          <p className='caption'>captoin caption</p>
        </div>
      </div>
    </main>
  )
}

export default Feed
