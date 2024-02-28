"use client";
import React from "react";
import { createContext, useReducer } from "react";
import { authInitialState, authReducer } from "../reducer/Auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthProvider;