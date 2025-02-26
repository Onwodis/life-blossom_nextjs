"use client";
import { createContext, useState, useContext } from "react";

// Create the context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => useContext(AppContext);

// Context provider
export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const drop = (uuser) => {
    setUser((prev)=>({...prev,...uuser}))
  }
  const [data, setData] = useState({
    home: false,
    about: false,
    services: false,
    contact: false,
  })
  const [profile, setProfile] = useState({
    name:"Life Blossom",
    address:" 20 Fatade Road Baruwa-Ipaja",
    phone:"+234 905 803 8476",
    email:"Lifeblossomcarencurehospital@mail.com",
    api : "localhost:3211/"

    
  }
)


  return (
    <AppContext.Provider value={{ data,user,setUser,drop, setData,profile, setProfile }}>
      {children}
    </AppContext.Provider>
  );
};
