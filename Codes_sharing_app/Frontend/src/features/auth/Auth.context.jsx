import { useEffect, useState } from "react";
import { createContext } from "react";
import { verifyUserApi } from "./services/auth.api";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const handleUserVerifyApi = async () => {
    const response = await verifyUserApi();
    console.log("response: ", response.data.user);
    setUser(response.data.user);
  }

  useEffect(() => {
    const verify = async () => {
      try {
        // const response = await verifyUserApi();
        // console.log("response: ", response.data.user);
        // setUser(response.data.user);
        await handleUserVerifyApi();
      } catch (err) {
        setUser(null);
      }
    }
    verify();
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}