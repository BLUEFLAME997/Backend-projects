import {createBrowserRouter} from 'react-router-dom';
import Login from './features/Auth/pages/Login'
import Register from './features/Auth/pages/Register';

export const AppRoute=createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },{
    path:'/register',
    element:<Register/>
  },{
    path:'/',
    element:<h1>home</h1>
  }
])