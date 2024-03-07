import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';
import Home, { HomeLayout } from './Pages/Home/Home.jsx';


const Router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
    children:[
      {
        path:"/",
        element:<HomeLayout/>
      },
    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
