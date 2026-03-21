import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { route } from './AppRoutes';
import './style.scss';
import { AuthProvider } from './features/auth/auth.context';
import { PostContextProvider } from './features/post/post.context';

const App = () => {
  return (
    <>
      <AuthProvider>
        <PostContextProvider>
          <RouterProvider router={route} />
        </PostContextProvider>
      </AuthProvider>
    </>
  )
}

export default App
