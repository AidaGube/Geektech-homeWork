import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { api } from './QueryApi/reduxApi';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={api}>
    <App />
  </ApiProvider>
);
