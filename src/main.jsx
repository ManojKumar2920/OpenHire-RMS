import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from "./Components/Auth/Login.jsx";
import Signup from "./Components/Auth/Signup.jsx";
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
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
