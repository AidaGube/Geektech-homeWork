import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ConatcsPage from './pages/ConatcsPage';
import MainPage from './pages/MainPage';
import UsersPage from './pages/UsersPage';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';

function App() {
  return (
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='about' element={<AboutPage />} />
          <Route path='contacts' element={<ConatcsPage />} />
          <Route index element={<MainPage />} />
          <Route path='user' element={<UsersPage />} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
