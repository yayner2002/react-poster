/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userInfo) => {
    setUser(userInfo);
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
