import { createBrowserRouter } from "react-router-dom"
import HomePages from './../../pages/HomePages/HomePages';
import App from './../../App';
import AboutPages from './../../pages/AboutPages/AboutPages';
import ListPages from './../../pages/ListPages/ListPages';

export const newRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomePages />
            },
            {
                path: '/list',
                element: <ListPages />
            },
            {
                path: '/list/:id',
                element: <AboutPages />
            },
        ]
    }
])