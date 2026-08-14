import React from 'react'
import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import useAuthHook from '../../hooks/useAuthHook';


const LoginPage = () => {
  const {navigate,register,handleSubmit, watch,errors,loginForm}=useAuthHook()
  const [showPassword, setShowPassword] = useState(false);
 return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 border border-slate-200 z-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Welcome Back
          </h1>
          <p className="text-slate-500 mt-2">
            Please enter your details to sign in.
          </p>
        </div>

        <form onSubmit={handleSubmit(loginForm)} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-600">
              Username or Email
            </label>

            <input
              type="text"
              placeholder="Enter your email"
              name='username'
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
               {...register("username",{ required: true })}
              
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-slate-600">
                Password
              </label>

              <button
                type="button"
                className="text-indigo-600 text-sm cursor-pointer outline-0 border-0"
              >
                Forgot Password?
              </button>
            </div>

           <div className="relative">
           {errors.password && <p className="text-red-400">{errors.password.message}</p>}
            <input
              type={showPassword ? "text" : "password"}
            required
              placeholder="Password"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
             {...register("password",{required:{
              value:true,
              message:"Password is Required"
             }})}
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-indigo-600 transition cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" />
            <label className="text-sm text-slate-600">
              Remember me for 30 days
            </label>
          </div>

          <button
            type='submit'
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span className="text-sm text-slate-400">
            Or continue with
          </span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div> */}

        {/* <div className="grid grid-cols-2 gap-4">
          <button className="border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-slate-50">
            <FaGoogle />
            Google
          </button>

          <button className="border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-slate-50">
            <FaApple />
            Apple
          </button>
        </div> */}

        <p className="text-center text-slate-500 mt-6">
          Don't have an account?{" "}
          <span onClick={()=>navigate("register")} className="text-indigo-600 font-semibold cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage



