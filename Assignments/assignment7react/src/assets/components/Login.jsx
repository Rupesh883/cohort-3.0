import { useContext, useState } from "react";
import {FaEye,FaEyeSlash,FaShoppingBasket,} from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form"
import { Link, redirect, useNavigate } from "react-router";
import { MyContext } from "./Contextapi";
import { toast } from "react-toastify";


export default function Login() {
   const navigate = useNavigate();
  let{allUserData, setAllUserData,loginData, setLoginData}=useContext(MyContext)
   let massage=()=> toast.success("User Logged in Successfully!");
  let invalidMEssage=()=>toast.error("incorrect Email or Password")
     const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()
  
     function Submit(data){
      let userExist=allUserData.find((user)=> user.email == data.email)
      if(userExist && userExist.password===data.password){
       massage()
        setLoginData(userExist)
         localStorage.setItem("CurrentUser",JSON.stringify(userExist))
          navigate("/")
        reset()
        return
      }
        invalidMEssage()
     }


const [showPassword, setShowPassword] = useState(false);

// its gives an total truthy in numbers
// const score = [
//   hasUppercase,
 
//   hasNumber,
//   hasSymbol,
//   hasLength,
//  ].filter(Boolean).length ;

//  const width = score * 25;

  return (

<>
        <form onSubmit={handleSubmit(Submit)} className="flex items-center justify-center px-6 py-10 sm:px-10 lg:px-14 bg-white">
          <div className="w-full max-w-md">

            {/* Mobile Logo */}

            <div className="lg:hidden flex items-center justify-center gap-3 mb-10">

              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">

                <FaShoppingBasket className="text-white text-2xl" />

              </div>

              <div>

                <h2 className="text-3xl font-black">

                  SkyMart

                </h2>

                <p className="text-slate-500 text-sm">

                  Smart Shopping

                </p>

              </div>

            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">

              Welcome Back 👋

            </h2>

            <p className="mt-2 text-slate-500">

              Sign in to continue shopping.

            </p>
               {/* Email */}

            <div className="mt-8">

              <label className="text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition">

                <MdEmail className="text-xl text-slate-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full h-full px-3 outline-none bg-transparent"
                  {...register("email", { required: "This feild is required ",
                     pattern: {
                              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                              message:
                                "Pleas Enter An Valid Email Address"
                            }
                   })}
                />
              </div>
                 {errors.email && <p className="font-sm text-red-500">{errors.email.message}</p>}
            </div>

            {/* Password */}

            <div className="mt-5">

              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition">

                <MdLock className="text-xl text-slate-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full h-full px-3 outline-none bg-transparent"
                 {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 8,
                              message: "Password must be at least 8 characters"
                            }
                          })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-500 hover:text-blue-600 transition"
                >
                  {showPassword ? (
                    <FaEyeSlash />
                  ) : (
                    <FaEye />
                  )}
                </button>

              </div>
            {errors.password && <p className="font-sm text-red-500">{errors.password.message}</p>}
                  
            </div>
            {/* Password Strength */}
            {/* <div className="mt-3">

              <div className="flex items-center justify-between">

                <span className="text-sm text-slate-500">
                  Password Strength
                </span>

                <span className="text-sm font-semibold text-green-600">
                  Strong
                </span>

              </div>

              <div className="mt-2 h-2 w-full rounded-full bg-slate-200 overflow-hidden">

                <div className={`h-full rounded-full bg-green-500  `}
                style={{ width: `${width}%`, transition:"all 0.5s" }}></div>

              </div>

              <div className="mt-2 flex gap-2 flex-wrap">
            
                 <span className={`rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700  ${hasUppercase ? "text-green-700 bg-green-200 ":"text-red-700 bg-red-200"}`}>
                  Uppercase
                </span>

                <span className={`rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 ${hasSymbol ? "text-green-700 bg-green-200 ":"text-red-700 bg-red-200"}`}>
                  Symbol
                </span>

                <span className={`rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 ${hasNumber ? "text-green-700 bg-green-200 ":"text-red-700 bg-red-200"} `}>
                  Number
                </span>

                <span className={`rounded-full bg-green-100 px-3 py-1 text-xs font-medium  ${hasLength ? "text-green-700 bg-green-200 ":"text-red-700 bg-red-200"}`}>
                  8+ Characters
                </span>

                



              </div>

             </div>
             */}

            {/* Remember */}

            <div className="mt-5 flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm text-slate-600 cursor-pointer">

                <input
                  type="checkbox"
                  className="accent-blue-600 w-4 h-4"
                />

                Remember Me

              </label>

              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">

                Forgot Password?

              </button>

            </div>

            {/* Login */}

            <button className="w-full py-4 mt-8 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold shadow-lg shadow-blue-500/30">

              Login

            </button>

            {/* Divider */}

            <div className="flex items-center gap-3 my-7">

              <div className="flex-1 h-px bg-slate-200"></div>

           

              <div className="flex-1 h-px bg-slate-200"></div>

            </div>
                        {/* Features */}

            {/* <div className="space-y-4 mt-8">

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4 hover:shadow-md transition">

                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-xl">

                  🔒

                </div>

                <div>

                  <h4 className="font-semibold text-slate-800">

                    Secure Authentication

                  </h4>

                  <p className="text-sm text-slate-500 mt-1 leading-6">

                    Your account is protected using modern security standards and encrypted authentication.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-slate-200 p-4 hover:shadow-md transition">

                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-xl">

                  ⚡

                </div>

                <div>

                  <h4 className="font-semibold text-slate-800">

                    Fast & Reliable

                  </h4>

                  <p className="text-sm text-slate-500 mt-1 leading-6">

                    Shop quickly with a smooth experience and lightning-fast performance.

                  </p>

                </div>

              </div>

            </div> */}

            {/* Sign Up */}

            <p className="text-center mt-8 text-slate-500">

              Don't have an account?

              <Link to={"/register"} className="ml-2 cursor-pointer font-semibold text-blue-600 hover:text-blue-700 transition">
                Create Account

              </Link>

            </p>

          </div>
        </form>
</>
    
  );
}