import { createBrowserRouter } from 'react-router'
import Register from './Features/Auth/Pages/Register'
import Login from './Features/Auth/Pages/Login'
import Protected from './Features/Auth/components/Protected'

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Protected><h1>home</h1></Protected>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/register',
    element:<Register/>
  }
])

