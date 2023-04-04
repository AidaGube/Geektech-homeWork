import { useDispatch } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { userActions } from 'store/slices/userSlice';
import { useEffect } from 'react';
import { postFetch, postFetchV2 } from './store/slices/postSlice';
import { deletePost } from 'store/slices/deletePost';
import { patchPost } from 'store/slices/patchSlice';


function App() {

  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const [value2, setValue2] = useState('')

  // useEffect(() => {

  // }, [dispatch])

  const loginUser = () => {
    const body = {
      username: value,
      password: value2
    }
    dispatch(postFetch({ body }))
  }

  // const getPostsFetch = () => {

  //   dispatch(getThunk())
  // }

  const deletePosts = () => {
    dispatch(deletePost())
  }

  const patchClick = () => {
    const body = {
      id: 10,
      username: 'adminka',
      password: '345'
    }
    dispatch(patchPost({ body }))
  };

  return (
    <div className="App">
      <div className='page_wrapper'>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <br />
        <input value={value2} onChange={(e) => setValue2(e.target.value)} />
        <br />
        <button onClick={loginUser}>AUTH</button>
      </div>
      <button onClick={() => dispatch(postFetchV2())}>get</button>
      <br />
      <button onClick={deletePosts}>Delete</button>
      <br />
      <button onClick={patchClick}>Patch</button>
    </div>
  );
}

export default App;
