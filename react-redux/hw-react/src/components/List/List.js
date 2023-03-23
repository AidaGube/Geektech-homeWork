import React from 'react'
import CardList from './../CardList/CardList';

const List = ({ list }) => {
  return (
    <div className='list'>
      <div className='list__item'>
        <ul>
          {list.map((item) => (
              <li key={item.id}>
                <CardList item={item} />
              </li>))}
        </ul>
      </div>
    </div>
  )
}

export default List