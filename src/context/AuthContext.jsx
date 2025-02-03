"use client"
import React from 'react'

//(1)First make imports
import { createContext } from 'react'

//(2) Create context
const AuthContext = createContext(); 

//(3) Define context provider
const AuthContextProvider = ({children}) => {

  return (
    <AuthContext.Provider value={{user, signIn }}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider