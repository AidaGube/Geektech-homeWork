import { useDispatch} from 'react-redux';
import './App.css';
import { useState } from 'react';
import { userActions } from 'store/slices/userSlice';
import { useEffect } from 'react';
import { postFetch } from './store/slices/postSlice';


function App() {

  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  // useEffect(() => {

  // }, [dispatch])

  // const loginUser = () => {
  //   const body = {
  //     username: value,
  //     password: value2
  //   }
  //   dispatch(authThunkToken(body))
  // }
  // const getPostsFetch = () => {

  //   dispatch(getThunk())
  // }



  return (
    <div className="App">
      <div className='page_wrapper'>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <input value={value2} onChange={(e) => setValue2(e.target.value)} />
        {/* <button onClick={loginUser}>AUTH</button> */}
      </div>
      <button onClick={() => dispatch(postFetch())}>GetPost</button>
    </div>
  );
}

export default App;
