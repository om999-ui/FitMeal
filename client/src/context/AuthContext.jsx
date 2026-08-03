import { getProfile } from "../services/userService";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const [token, setToken] = useState(
    localStorage.getItem("token")
  );

const [loading, setLoading] = useState(true);

  const login = (userData, jwt) => {
    localStorage.setItem("token", jwt);

    setToken(jwt);

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("token");

    setToken(null);

    setUser(null);
  };

  useEffect(() => {
  const restoreSession = async () => {
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await getProfile(token);
      setUser(response.user);
    } catch (error) {
      console.error(error);

      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  restoreSession();
}, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        logout,
        setUser,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;