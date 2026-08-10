import { Navigate } from "react-router";
import { useEffect } from "react";
import useAuth from "../hook/useAuth";
import { useNavigate } from "react-router";

const Protected = ({children}) =>{

  const navigate = useNavigate();

  const {user,loading} = useAuth();
  if(!loading || !user){
    navigate('/login');
  }
  if(loading){
    return <h1>Loading</h1>
  }

  return children;
}

export default Protected;
// Protected route to make sure the valid user logs in