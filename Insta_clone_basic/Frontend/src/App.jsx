import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { route } from './AppRoutes';
import './style.scss'

const App = () => {
  return (
    <> 
    <RouterProvider router={route}/>
    </>
  )
}

export default App
