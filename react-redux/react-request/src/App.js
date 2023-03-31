import { useDispatch} from 'react-redux';
import './App.css';
import { authThunk, authThunkToken, getThunk } from './store/thunks/authThunk';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  // const { count, increment, decrement } = useCount()

  const dispatch = useDispatch()
  // const { count } = useSelector(state => state.count)
  // const { users } = useSelector(state => state.users)
  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  useEffect(() => {
    // dispatch(authThunk())
    // api.get('posts')
    //   .then((data) => {
    //     console.log(data)
    //   })
  }, [dispatch])

  const loginUser = () => {
    const body = {
      username: value,
      password: value2
    }
    dispatch(authThunkToken(body))
  }
  const getPostsFetch = () => {

    dispatch(getThunk())
  }

  // function increment() {
  //   dispatch({ type: actions.INC })
  // }

  // function decrement() {
  //   dispatch({ type: actions.DEC })
  // }

  // function addElement() {
  //   dispatch(usersPush('Smith'))
  // }

  // function deleteElm() {
  //   dispatch(usersDelete('Smith'))
  // }

  return (
    <div className="App">
      <div className='page_wrapper'>
        {/* <h1 onClick={deleteElm}>
          {count}
          </h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button> */}
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <input value={value2} onChange={(e) => setValue2(e.target.value)} />
        <button onClick={loginUser}>AUTH</button>
      </div>
      <button onClick={getPostsFetch}>GetPost</button>
      {/* <div>
        {users.map((item, i) =>
          <h1 key={i} onClick={addElement}>{item}</h1>
        )}
      </div> */}
    </div>
  );
}

export default App;
