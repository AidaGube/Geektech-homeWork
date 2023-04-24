import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const PostPage = () => {
  const [posts, setPosts] = useState([])

  const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const posts = await response.json()
    setPosts(posts)
    console.log(response);
  }

  useEffect(() => {
    getPosts()
  }, [])
  
  return (
    <div>
      <h1>Все посты</h1>
      {
        posts.map(post => <Post key={post.id} post={post} />)
      }
    </div>
  )
}

export default PostPage