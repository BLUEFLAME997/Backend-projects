import React from 'react'
import FaceExpression from './Features/Expression/Components/FaceExpression'
import { router } from './app.route'
import { RouterProvider } from 'react-router'
import "./Features/shared/global.scss"
import { AuthProvider } from './Features/Auth/auth.context'

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
