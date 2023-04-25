import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const MainPage = () => {

  const dispatch = useDispatch()
  const {count} = useSelector(state => state)

  const increment =()=>{
    dispatch({
        type: 'INCREMENT'
    })
  }
  const decrement =()=>{
    dispatch({
        type: 'DECREMENT'
    })
  }

  return (
   <>
   <h1>Counter: {count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
   </>
  )
}

export default MainPage