import React, { useContext } from 'react'
import { userLoginApi } from '../services/auth.api'
import { AuthContext } from '../auth.context'
import { userRegisterApi } from '../services/auth.api'

const useAuth = () => {
  const context = useContext(AuthContext);
  const {loading,user,setLoading,setUser}=context;

  const handleLoginApi=async(username,password)=>{
    setLoading(true)
    try{
      const response=await userLoginApi(username,password);
      console.log(response);
      return response
    }catch(err){
      throw err
    }finally{
      setLoading(false)
    }
  }

  const handleRegisterApi=async(username,email,password)=>{
    setLoading(true);
    try{
      const response = await userRegisterApi(username,email,password);
      return response;
    }catch(err){
      throw err
    }finally{
      setLoading(false)
    }
  }
  
  return {handleLoginApi,handleRegisterApi,loading,user,setUser}
}

export default useAuth
