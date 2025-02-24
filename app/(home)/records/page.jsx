"use client";
import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAppContext } from "../../components/home/myContext";


export default function Records() {
  const { profile,data, setData } = useAppContext();
  

  useEffect(() => {
    setData(() => ({
      home: false,
      services: false,
      contact: false,
      about: false,
      records: true,
    }))
  }, [])
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password

  const onSubmit = (data) => {
    setLoading(true);
    setTimeout(() => {
      alert(`Welcome, ${data.username}!`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex bggg justify-center items-center min-h-screen sm:min-h-[400px] md:min-h-[400px] lg:min-h-[400px] bg-gradient-to-br from-gray-100 to-gray-300">
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="w-full max-w-md p-3 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-3">Life Blossom Records Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div className="flex items-center border rounded-md p-2 bg-gray-50">
            <FaUser className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className="w-full bg-transparent outline-none"
            />
          </div>
          {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}

          {/* Password */}
          <div className="flex items-center border rounded-md p-2 bg-gray-50 relative">
            <FaLock className="text-gray-500 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
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
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

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
