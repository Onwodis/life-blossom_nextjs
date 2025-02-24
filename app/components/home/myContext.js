"use client";
import { createContext, useState, useContext } from "react";

// Create the context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Context provider
export const AppProvider = ({ children }) => {
  const [data, setData] = useState({
    home:false,
    about:false,
    services:false,
    contact:false,
  }
);

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};
