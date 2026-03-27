import React from 'react'
import { Approute } from './AppRoute'
import { RouterProvider } from 'react-router-dom'
import './index.scss'

const App = () => {
  return (
    <>
    <RouterProvider router={Approute}/>
    </>
  )
}

export default App
