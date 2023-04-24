import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div>
      <Link to={`/posts/${post.id}`}><h5>{post.title}</h5></Link>
      <Link to={`/posts/${post.id}`}>Подробнее</Link>
      <p>---------------------------------------</p>
    </div>
  )
}

export default Post