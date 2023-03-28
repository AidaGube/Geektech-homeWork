import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from './store/reducers/authReducer';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const username = useSelector(state => state.auth.username)
  const password = useSelector(state => state.auth.password)
  const isAuth = useSelector(state => state.auth.isAuth)
  const isError = useSelector(state => state.auth.isError)
  const handleUsername = (e) => dispatch({ type: actions.NAME, payload: e.target.value })
  const handlePassword = (e) => dispatch({ type: actions.PASS, payload: e.target.value })

  useEffect(() => {
    fetch('http://localhost:8000/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: localStorage.getItem('token') })
    })
      .then(res => res.json())
      .then(data => {
        if (data.new_token) {
          dispatch({ type: actions.AUTH, payload: true })
        }
      })
  }, [])

  const login = () => {
    fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'success') {
          localStorage.setItem('token', data.token)
          dispatch({ type: actions.ERROR, payload: false })
          dispatch({ type: actions.AUTH, payload: true })
        } else {
          dispatch({ type: actions.ERROR, payload: true })
        }
      })
  }

  if (isAuth) return (
    <div className='App'>
      <span>Вход успешно выполнен!</span>
    </div>
  )

  return (
    <div className="App">
      <div className='container'>
        <div className='auth'>
          <h2 className='auth__title'>Авторизация</h2>
          <form className="welcome__form">
            <input type="text" value={username} onChange={handleUsername} className="form-control" />
            <input type="text" value={password} onChange={handlePassword} className="form-control" />
            <button onClick={login} className="signup__btn form-control" >Войти</button>
            <div>
              {isError && <span>Неверный логин или пароль</span>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
