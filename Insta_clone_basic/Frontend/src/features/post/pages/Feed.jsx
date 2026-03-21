import React, { useEffect } from 'react'
import '../style/Feed.scss'
import Post from '../components/Post'
import { usePost } from '../hook/usePost'

const Feed = () => {
  const { feed, loading,handleGetFeed } = usePost();

  useEffect(()=>{
    handleGetFeed()
  },[])
  console.log(feed,loading)
  if (feed === null || loading === true) {
    return (
      <main>
        <h1 className='h1'>Feed is loading...</h1>
      </main>
    )
  }
  return (
    <main className='feed-page'>
      {feed.map((elem)=>{
        return <Post data={elem}/>
      })}
    </main>
  )
}

export default Feed
