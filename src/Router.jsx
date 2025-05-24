import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";

export const rote = createBrowserRouter([
    {
        path: '/',
        element: <App/> ,
        children:[
            {
                path:'/',
                element: <Home   category= 'politics'/>
            },
            {
                path: '/General',
                element: <Home    category= 'general' />
            },
            {
                path: '/Business',
                element: <Home   category= 'business' />
            },
            {
                path: '/Sports',
                element: <Home   category= 'sports' />
            },
            {
                path: '/Entertainment',
                element: <Home   category= 'entertainment' />
            },
            {
                path: '/Technology',
                element: <Home   category= 'technology' />
            },
            {
                path: '/Health',
                element: <Home    category= 'health' />
            },

        ]
    }
])