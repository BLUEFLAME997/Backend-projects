import React from 'react'
import { Approute } from './AppRoute'
import { RouterProvider } from 'react-router-dom'
import './index.scss'
import { AuthProvider } from '../../../Insta_clone_basic/Frontend/src/features/auth/auth.context'
import { AuthContextProvider } from './features/auth/auth.context'
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
