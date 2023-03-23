import React from 'react'
import { Link } from 'react-router-dom'

const CardList = ({item}) => {
  return (
   <React.Fragment>
    <Link  to={`/${item.id}`}>
    <div className='card__list'>
     <h2>{item.title}</h2>
    </div>
    </Link>
   </React.Fragment>
  )
}

export default CardList