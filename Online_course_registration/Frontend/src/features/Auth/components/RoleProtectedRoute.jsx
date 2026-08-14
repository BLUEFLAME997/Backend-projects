import React from 'react'
import useAuth from '../hook/useAuth'
import Restrited from './Restricted';
import { Navigate } from 'react-router';

const RoleProtectedRoute = ({children,allowedRole}) => {
  const {user,loading} = useAuth();
  if(user.role!==allowedRole){
    return <Navigate to='unauthorized'/>
  }
  return children
}

export default RoleProtectedRoute
