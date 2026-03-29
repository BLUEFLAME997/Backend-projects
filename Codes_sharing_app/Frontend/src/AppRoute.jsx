import React from 'react'
import {createBrowserRouter} from 'react-router-dom';
import Login from './features/auth/pages/Login';
import Register from './features/auth/pages/Register';
import Dashboard from './features/snippets/pages/Dashboard'

export const Approute=createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },{
    path:'/register',
    element:<Register/>
  },{
    path:'/',
    element:<Dashboard/>
  }
])