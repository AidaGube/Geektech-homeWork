import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';

import AboutPages from './../pages/AboutPages/AboutPages';
const AppRouter = () => {
  return (
    //приватные роуты
    <Routes>
      <Route path='/list/:id' element={<AboutPages />} />
      <Route path='*' element={<Navigate to={'/'} />} /> //тег который отрабатывает хук как useNavigate если нет такой стр то перекидывает на главную
    </Routes>
  )
}

export default AppRouter