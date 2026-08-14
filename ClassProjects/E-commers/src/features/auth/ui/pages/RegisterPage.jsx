import { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import useAuthHook from "../../hooks/useAuthHook";



export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
    const {navigate,register,handleSubmit, watch,errors,HandelRegisterSubmit}=useAuthHook()

    
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-40"></div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-200 p-8 z-10 animate-in fade-in duration-500">
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Create Account
          </h1>
          <p className="text-slate-500 mt-2">
            Join us and start your journey today.
          </p>
        </div>

        <form onSubmit={handleSubmit(HandelRegisterSubmit)} className="space-y-4">
           {errors.fullname && <p className="text-red-400">{errors.fullname.message}</p>}

          <input
            type="text"
            required
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
             {...register("fullname",{required:{
              value:true,
              message:"FullName is Required"
             }})}
          />
           {errors.email && <p className="text-red-400">{errors.email.message}</p>}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
             {...register("email",{required:{
              value:true,
              message:"Email is Required"
             }})}
         />
           {errors.number && <p className="text-red-400">{errors.number.message}</p>}
         
          <input
            required
            type="number"
            placeholder="contact"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
             {...register("number",{required:{
              value:true,
              message:"number is Required"
             }})}
           
         />

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
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all"
          />

          <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            I agree to the Terms & Conditions
          </label>

          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 active:scale-[0.98] transition-all duration-300 cursor-pointer"
          >
            Create Account
          </button>
        </form>

        {/* <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-slate-200"></div>
          <span className="text-sm text-slate-400">
            Or continue with
          </span>
          <div className="flex-1 h-px bg-slate-200"></div>
        </div> */}

        {/* <div className="grid grid-cols-2 gap-4">
          <button className="border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-slate-50 transition cursor-pointer">
            <FaGoogle />
            Google
          </button>

          <button className="border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-slate-50 transition cursor-pointer">
            <FaApple />
            Apple
          </button>
        </div> */}

        <p className="text-center text-slate-500 mt-6">
          Already have an account?{" "}
          <span onClick={()=>navigate("/")} className="text-indigo-600 font-semibold hover:underline cursor-pointer">
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
