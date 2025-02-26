"use client";
import React, { useEffect } from "react";
import { useAppContext } from "../../components/home/myContext";

import Image from "next/image";
import Db from "../../components/admin/Db";

import Link from "next/link";

const page = () => {
  const { data, setData } = useAppContext();

  useEffect(() => {
    setData(() => ({
      home: false,
      db: true,

      services: false,
      contact: false,
      about: false,
    }));
  }, []);
  // useEffect(() => {
  //   const storedUser = sessionStorage.getItem("user");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser))
  //     alert(JSON.parse(storedUser))}
  // }, []);
  return (
<div> 

    

   <Db/>
</div>

  );
};

export default page;
