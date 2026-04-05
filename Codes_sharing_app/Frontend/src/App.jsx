import React from 'react'
import { Approute } from './AppRoute'
import { RouterProvider } from 'react-router-dom'
import './index.scss'
import { AuthContextProvider } from './features/auth/Auth.context'
import SnippetContextProvider from './features/snippets/Snippets.context'

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <SnippetContextProvider>
          <RouterProvider router={Approute} />
        </SnippetContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App
