import { login,register,getMe } from "./services/auth.api";
import { createContext,useState } from "react";

export const AuthContext=createContext();

export const AuthProvider=({children})=>{
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(false);

  const handleLogin=async(email,password)=>{
    setLoading(true);
    try{
      const response=await login(email,password);
      setUser(response.data.user);
      return response
    }catch(err){
      throw err
    }finally{
      setLoading(false);
    }
  }

  const handleRegister=async(userName,email,password)=>{
    setLoading(true);
    try{
      const response=await register(userName,email,password);
      setUser(response.data.user);
      return response
    }catch(err){
      throw err
    }finally{
      setLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{user,loading,handleLogin,handleRegister}}>
      {children}
    </AuthContext.Provider>
  )
}