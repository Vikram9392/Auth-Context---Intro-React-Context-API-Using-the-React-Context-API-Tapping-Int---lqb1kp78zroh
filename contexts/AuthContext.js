import React, { createContext, useContext, useEffect, useState } from 'react'
const AuthContext= createContext();
export const useAuth= ()=>{
  return useContext(AuthContext);
}
export const AuthProvider=({children}) =>{

    const [isLoggedIn,setisLoggedIn] = useState(false);
    useEffect(()=>{
      const token = localStorage.getItem("token");
      setisLoggedIn(token);
    },[]);
    const login=(token)=>{
        setisLoggedIn(true);
        localStorage.setItem("token",token)
    }
    const logout=()=>{
        setisLoggedIn(false);
        localStorage.removeItem("token");
    }
  return (
    <AuthContext.Provider value={{isLoggedIn,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}
