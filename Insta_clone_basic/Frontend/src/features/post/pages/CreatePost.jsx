import React from 'react'
import { useState, useRef } from 'react'
import '../style/CreatePost.scss'
import {usePost} from '../hook/usePost.jsx'
import { useNavigate } from 'react-router'

const CreatePost = () => {
  const [caption, setCaption] = useState('');
  const postImageInputFieldRef = useRef(null);
  const {handleCreatePost,loading} = usePost();
  const navigate=useNavigate();

  const captionInputhandler=(e)=>{
    setCaption(e.target.value)
    console.log(caption)
  }

  async function formSubmit(e){
    e.preventDefault();
    const file=postImageInputFieldRef.current.files[0];

    await handleCreatePost(file,caption);
    navigate('/')
  }

  if(loading){
    return <main><h1>Loading...</h1></main>
  }

  return (
    <main className='create-post-page'>
      <h1>Create post</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="image">Select image</label>
        <input ref={postImageInputFieldRef} type="file" hidden name='image' id='image' />
        <input
          type="text"
          name='caption'
          id='caption'
          placeholder='Enter caption: '
          value={caption}
        onInput={(e)=>{
          captionInputhandler(e);
        }}/>
        <button>Create post</button>
      </form>
    </main>
  )
}

export default CreatePost
