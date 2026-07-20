import React from 'react'
import { Outlet } from 'react-router'
// import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaShoppingBasket,
} from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
// import { useForm } from "react-hook-form"


const LoginRegisterLayout = ({children}) => {
  return (
        <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 flex items-center justify-center px-4 py-6 overflow-x-hidden">
    
          {/* Background Blur */}
          <div className="hidden md:block absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-500/10 blur-[120px]" />
        
    
          <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">
    
            {/* LEFT PANEL */}
    
            <div className="hidden lg:flex relative flex-col justify-between bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 p-14 text-white overflow-hidden">
    
              <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-white/10"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5"></div>
    
              <div className="relative z-10">
    
                {/* Logo */}
    
                <div className="flex items-center gap-4 mb-16">
    
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl">
    
                    <FaShoppingBasket className="text-indigo-700 text-3xl" />
    
                  </div>
    
                  <div>
    
                    <h2 className="text-3xl font-black tracking-wide">
    
                      SkyMart
    
                    </h2>
    
                    <p className="text-blue-100">
    
                      Smart Shopping Experience
    
                    </p>
    
                  </div>
    
                </div>
    
                <h1 className="text-5xl font-black leading-tight">
    
                  Shop Smarter.
                  <br />
                  Live Better.
    
                </h1>
    
                <p className="mt-6 text-lg text-blue-100 leading-8 max-w-lg">
    
                  Discover thousands of premium products,
                  lightning-fast delivery, secure checkout,
                  and exclusive offers—all in one place.
    
                </p>
    
              </div>
    
              <div className="relative z-10 space-y-5">
    
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
    
                  <p className="leading-8 text-lg">
    
                    "Small progress every day adds up to
                    remarkable results."
    
                  </p>
    
                </div>
    
                <div className="grid grid-cols-3 gap-4">
    
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
    
                    <h3 className="text-2xl font-bold">
    
                      10K+
    
                    </h3>
    
                    <p className="text-blue-100 text-sm">
    
                      Products
    
                    </p>
    
                  </div>
    
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
    
                    <h3 className="text-2xl font-bold">
    
                      50K+
    
                    </h3>
    
                    <p className="text-blue-100 text-sm">
    
                      Customers
    
                    </p>
    
                  </div>
    
                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur">
    
                    <h3 className="text-2xl font-bold">
    
                      24/7
    
                    </h3>
    
                    <p className="text-blue-100 text-sm">
    
                      Support
    
                    </p>
    
                  </div>
    
                </div>
    
              </div>
    
            </div>
  {/* Right Side */}
                <Outlet></Outlet>

              </div>
            

      {/* Floating Decorations */}

      <div className="hidden lg:block absolute top-16 left-16 w-56 h-56 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none"></div>

      <div className="hidden lg:block absolute bottom-10 right-10 w-72 h-72 rounded-full bg-purple-500/10 blur-[150px] pointer-events-none"></div>

      <div className="hidden lg:block absolute top-1/2 left-1/2 w-80 h-80 rounded-full bg-cyan-500/10 blur-[180px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

    </div>
  )
}

export default LoginRegisterLayout