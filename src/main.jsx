
import './output.css'
import { NewsProvider } from './ContextApp/NewsContext.jsx'
import ReactDOM from 'react-dom/client'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { rote } from './Router.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewsProvider>
    <RouterProvider router={rote}/>
    </NewsProvider>
  </React.StrictMode>,
)
