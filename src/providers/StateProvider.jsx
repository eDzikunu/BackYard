"use client";
import React, { createContext, useContext, useReducer } from "react";

// Create a context
export const StateContext = createContext();

// Build the provider
export const StateProvider = ({ reducer, initialState, children }) => {
  //to debug
  // console.log("StateProvider is rendering!");
  // console.log("Initial State:", initialState);
  // console.log("Reducer Function:", reducer);
  // const contextValue = useReducer(reducer, initialState);
  // console.log("Context Value:", contextValue);

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the StateContext
export const useStateValue = () => useContext(StateContext);
