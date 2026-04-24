import {createBrowserRouter} from 'react-router-dom';
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register';

export const AppRoute=createBrowserRouter([
  {
    path:'/login',
    element:<Login/>
  },{
    path:'/register',
    element:<Register/>
  }
])