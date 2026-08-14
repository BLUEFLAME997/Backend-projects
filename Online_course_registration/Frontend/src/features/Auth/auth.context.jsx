import React from 'react'
import { useContext } from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const AuthContext = useContext();

export const AuthProvider = ({children}) => {

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);

  return (
    <AuthContext.provider value={{user,setUser,loading,setLoading}}>
      {children}
    </AuthContext.provider>
  )
}
