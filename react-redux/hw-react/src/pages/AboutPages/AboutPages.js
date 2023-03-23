import React from 'react'
import { useParams } from 'react-router-dom'

const AboutPages = ({list}) => {
  const {id} = useParams()
  const select = list.find((item) => item.id === parseInt(id));
  if (!select) {
    return <div>Элемент не найден</div>;
  }
  return (
    <div>
      <h2>{select.title}</h2>
    </div>
  )
}

export default AboutPages