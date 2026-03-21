import React from 'react'

const Post = ({data}) => {
  return (
    <div className="post">
        <div className="user">
          <div className="img-wrapper">
            <img src={data.user.bio} alt="" />
          </div>
          <p>Username</p>
        </div>
        <div className="post-image">
          <img src={data.imgUrl} alt="" />
        </div>
        <div className="icons-section">
          <div className="left-section">
            <button><i className={`ri-heart-line ${data.isLiked?"like":""}`} ></i></button>
            <button><i className="ri-chat-1-line"></i></button>
            <button><i className="ri-share-forward-line"></i></button>
          </div>
          <div className="right-section">
            <button><i class="ri-bookmark-line"></i></button>
          </div>
        </div>
        <div className="bottom">
          <p className='caption'>{data.caption}</p>
        </div>
      </div>
  )
}

export default Post
