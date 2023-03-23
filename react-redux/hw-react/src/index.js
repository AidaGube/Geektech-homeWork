import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { newRouter } from './routes/config/routerConfig';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App />
    <React.StrictMode>
    <RouterProvider router={newRouter}/>
        {/* <App /> */}
</React.StrictMode>
);
