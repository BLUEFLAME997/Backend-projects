import React, { useContext } from 'react'
import { userLoginApi } from '../services/auth.api'
import { AuthContext } from '../auth.context'

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
  
  return {handleLoginApi,loading,user,setUser}
}

export default useAuth
