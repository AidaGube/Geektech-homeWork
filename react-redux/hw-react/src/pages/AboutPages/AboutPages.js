import React from 'react'
import { useParams } from 'react-router-dom'

const AboutPages = ({list}) => {
  const {id} = useParams()
  const item = list.find((item) => item.id === parseInt(id));
  if (!item) {
    return <div>Элемент не найден.</div>;
  }
  return (
    <div>
      <h2>{item.title}</h2>
    </div>
  )
}

export default AboutPages