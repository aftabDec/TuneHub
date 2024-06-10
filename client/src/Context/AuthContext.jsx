import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); // Exporting useAuth hook

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({
    token: null,
    isAdmin: false,
  });

  const login = (token, isAdmin) => {
    setAuthUser({ token, isAdmin });
  };

  const logout = () => {
    setAuthUser({
      token: null,
      isAdmin: false,
    });
  };

  return (
    <AuthContext.Provider value={{ authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
