import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { registerUser, loginUser, getMe, logoutUser } from "../service/auth.api";
import { useEffect } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  // Register user API:
  async function handleRegisterApi(username, email, password, role) {
    setLoading(true);
    try {

      const data = await registerUser(username, email, password, role);
      return data;

    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  // Login user API:
  async function handleLoginApi(username, password) {
    setLoading(true);
    try {

      const data = await loginUser(username, password);
      return data;

    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  // Get-me API:
  async function handleGetMeApi() {
    setLoading(true);
    try {

      const data = await getMe();
      return data;

    } catch (err) {
      throw err
    } finally {
      setLoading(false);
    }
  }

  // Logout user API:
  async function handleLogoutApi(){
    setLoading(true);
    try{

      const data = await logoutUser();
      return data;

    }catch(err){
      throw err;
    }finally{
      setLoading(true);
    }
  }

  useEffect(()=>{
    let data;
    async function getData(){
      data = await handleGetMeApi();
      setUser(data.user);
      console.log(user);
    }
    getData();
  },[])

  return(
    {user,loading,handleRegisterApi,handleLoginApi,handleGetMeApi,handleLogoutApi}
  )
}

export default useAuth;