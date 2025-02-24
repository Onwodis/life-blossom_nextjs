"use client"
import React,{useEffect}from 'react'
import Index from "../components/home/Index";
import Land from "../components/home/Land";
import { useAppContext } from "../components/home/myContext";




const page = () => {
  const { setData } = useAppContext();
  useEffect(()=>{
setData(() => ({
    home: true,
    services: false,
    contact: false,
    about: false,
  }));
},[])
  
  return (
    <div>
      {/* <Index /> */}
      <Land />
    </div>
  )
}

export default page
