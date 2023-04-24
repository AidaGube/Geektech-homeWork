import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';
import NavBar from './components/NavBar';
import NotFound from './pages/NotFound';
import PhotosPage from './components/PhotosPage';
import Layout from './Hooks/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/posts' element={<PostPage />} />
        </Route>
        <Route path='*' element={<NotFound />} />
        <Route path='/posts/:id' element={<PhotosPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
