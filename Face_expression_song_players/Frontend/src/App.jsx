import React from 'react'
import FaceExpression from './Features/Expression/Components/FaceExpression'
import { router } from './app.route'
import { RouterProvider } from 'react-router'
import "./Features/shared/global.scss"

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
