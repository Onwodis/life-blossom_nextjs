"use client";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import axios from "axios"
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppContext } from "../../components/home/myContext";

import { useRouter } from "next/navigation";
export default function Records() {
  const { api,profile,setData ,setUser,user,drop} = useAppContext();
  const router = useRouter(); 
  const [logs, setLogs] = useState({ email: process.env.adminemail, pwrd: process.env.adminpwrd })
  

  useEffect(() => {
    console.log("User updated:", user.name);
  }, [user]); // Runs every time `user` changes

  useEffect(() => {
    setData(() => ({
      home: false,
      services: false,
      contact: false,
      about: false,
      records: true,
    }))
  }, [])
  const { register, handleSubmit,setValue, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password

  const onSubmit = async(data) => {
    
    setLoading(true);


    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({email:data.email,pwrd:data.pwrd}),
      });
  
      const ddata = await res.json();

      setLoading(false);

      if (!res.ok) {
        Swal.fire({
          title:`Authentication error ! `,
          text:`Invalid login credentials !! `,
         
          icon: "error"
        });
        // throw new Error(ddata.error || "Login failed");
      }

      else{
        const set = JSON.stringify(ddata.user)
        sessionStorage.setItem("user",set );
        sessionStorage.setItem("token",ddata.token );
        // alert(JSON.stringify(ddata.user))
    
        
        setUser((prev) => ({ ...prev, ...ddata.user }));

        
        // sessionStorage.setItem("token", ddata.token); // Store token for authentication
        Swal.fire({
          title:`Welcome ${ddata.user.name} ! `,
          text: "Login Successful !!",
          icon: "success"
        })
        if(ddata.user.admin ){
          // router.push("/contact")

          router.push("/admindb")
          
        }
      }
      
      

     
    } catch (err) {
  
      Swal.fire({
        title:`Sorry there was an error loging you in ! `,
        text:`something went wrong !! `,
       
        icon: "error"
      });
    } finally {
      setLoading(false);
    }
   
  };
  // setValue("email", logs.email);

  return (
    <div className="flex bggg justify-center items-center min-h-screen sm:min-h-[400px] md:min-h-[400px] lg:min-h-[400px] bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="w-full max-w-md p-3 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-3">Life Blossom Records</h2>
       

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-md w-80 mx-auto">
      {/* Username */}
      <div className="flex items-center border rounded-md p-2 bg-gray-50">
        <FaUser className="text-gray-500 mr-2" />
        <input
          type="email"
          // value={logs.email}
          defaultValue={logs.email}
          onChange={(e) => {
            const email = e.target.value;
           
            setValue("email", email, { shouldValidate: true }); // Sync with React Hook Form
          }}
          placeholder="Username"
          {...register("email", { required: "email is required" })}
          className="w-full bg-transparent outline-none"
        />
      </div>
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      {/* Password */}
      <div className="flex items-center border rounded-md p-2 bg-gray-50 relative">
        <FaLock className="text-gray-500 mr-2" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          defaultValue={logs.pwrd}
          onChange={(e) => {
            const pwrd = e.target.value;
    
            setValue("pwrd", pwrd, { shouldValidate: true }); // Sync with React Hook Form
          }}
          {...register("pwrd", { required: "Password is required" })}
          className="w-full bg-transparent outline-none"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 text-gray-500 hover:text-blue-500"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {errors.pwrd && <p className="text-red-500 text-sm">{errors.pwrd.message}</p>}

      {/* Login Button */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="w-full py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </motion.button>
    </form>
          
      </motion.div>

    </div>
  );
}
