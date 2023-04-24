import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const PhotosPage = () => {
  const { id } = useParams();

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
  }, [])

  const navigate = useNavigate();
  const back = () => {
      navigate('/posts')
  }

  return (
    <>
      {/* <Link to="/posts">Назад</Link> */}
      <button onClick={back}>Назад</button>
      <h1>{photos.title}</h1>
      <img src={photos.url} alt='photo' />
    </>
  )
}

export default PhotosPage