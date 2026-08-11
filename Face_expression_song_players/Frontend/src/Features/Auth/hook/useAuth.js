import { registerUser, loginUser, logoutUser, getMe } from "../services/auth.api";
import { useContext } from "react";
import { AuthContext } from "../auth.context";
import { useEffect } from "react";

export const useAuth = () => {

  const context = useContext(AuthContext);
  const { loading, user, setUser, setLoading } = context;

  async function handleRegister(userName, email, password) {
    setLoading(true);
    try {
      const data = await registerUser(userName, email, password);
      setUser(data.user);
      return data;
    } catch (err) {
      throw err
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(userName, password) {
    setLoading(true);
    try {
      const data = await loginUser(userName, password);
      setUser(data.user);
      return data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function handleGetMe() {
    setLoading(true);
    try {
      const data = await getMe();
      setUser(data.user);
      return data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    setLoading(true);
    try {
      const data = await logoutUser();
      setUser(null);
      return data;
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let userValue;

    async function getData() {
      const userValue = await handleGetMe();
      setUser(userValue.user);
    }

    getData();

  }, [])

  return ({
    user, loading, handleRegister, handleLogin, handleGetMe, handleLogout
  })
}

export default useAuth
