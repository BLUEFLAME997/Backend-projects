import {createBrowserRouter} from 'react-router-dom';
import Login from './features/Auth/pages/Login'
import Register from './features/Auth/pages/Register';
import { Protected } from './features/Auth/components/Protected';

export const AppRoute=createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },{
    path:'/register',
    element:<Register/>
  },{
    path:'/',
    element:<Protected><h1>home</h1></Protected>
  }
])