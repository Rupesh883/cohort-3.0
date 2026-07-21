import { useState,useContext } from "react";
import { MyContext } from "./Contextapi";
import {
  FaShoppingBasket,
  FaCamera,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import {
  MdEmail,
  MdLock,
  MdPerson,
  MdPhone,
} from "react-icons/md";
import { Link } from "react-router";
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router";


export default function Register() {
  const navigate=useNavigate()
  const{allUserData, setAllUserData,loginData, setLoginData}=useContext(MyContext)

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(false);
   
       const {
        register,
        handleSubmit,
        watch,
        getValues,
        reset,
        formState: { errors },
      } = useForm()
      
 function Submit(data){
            let userFound= allUserData.find((user)=>user.email == data.email || user.number == data.number ) 
             if(userFound){
               navigate("/login")
               return alert("user Already exist please Login")}
            let obj={
                id:uuidv4(),
                username:data.fullName,
                email:data.email,
                number:data.number,
                password:data.password,
            }
            setLoginData([obj])
            
            setAllUserData((prev)=> [...prev, obj])
            localStorage.setItem("CurrentUser",JSON.stringify(obj))
            localStorage.setItem("AllUserData",JSON.stringify([...allUserData,obj]))
            navigate("/")
            reset()
           
         }
    
    
    const password = watch("password") || "";
    const confirmPassword=watch("confirmPassword")

    // password==confirmPassword?setPasswordMatch(true):setPasswordMatch(false)
    const hasSame=password===confirmPassword
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*]/.test(password);
    const hasLength = password.length >= 8;
    
    // its gives an total truthy in numbers
    const score = [
      hasUppercase,
     
      hasNumber,
      hasSymbol,
      hasLength,
     ].filter(Boolean).length ;
     let width=score*25


  return (
  <>
        {/* RIGHT SIDE */}
        <form onSubmit={handleSubmit(Submit)} className="flex items-center justify-center px-6 py-10 lg:px-14">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}

            <div className="lg:hidden flex items-center justify-center gap-3 mb-10">

              <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center">

                <FaShoppingBasket className="text-white text-2xl"/>

              </div>

              <div>

                <h2 className="text-3xl font-black">

                  SkyMart

                </h2>

                <p className="text-slate-500">

                  Smart Shopping

                </p>

              </div>

            </div>

            <h2 className="text-4xl font-bold text-slate-900">

              Create Account 🚀

            </h2>

            <p className="mt-2 text-slate-500">

              Join SkyMart and start shopping today.

            </p>

            {/* Profile Upload */}

            <div className="flex justify-center mt-8">

              <div className="relative">

                <div className="w-28 h-28 rounded-full border-4 border-blue-100 bg-slate-100 flex items-center justify-center">

                  <MdPerson className="text-6xl text-slate-400"/>

                </div>

                {/* <button className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg">

                  <FaCamera/>

                </button> */}

              </div>

            </div>
                        {/* Full Name */}

            <div className="mt-8">

              <label className="text-sm font-semibold text-slate-700">
                Full Name
              </label>

              <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition-all">

                <MdPerson className="text-xl text-slate-400"/>

                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full h-full px-3 outline-none bg-transparent"
                    {...register("fullName", { required:{value:true ,message:"This feild is required "},
                   })}
                />

              </div>
                {errors.fullName && <p className="font-sm text-red-500">{errors.fullName.message}</p>}
            
            </div>

            {/* Email */}

            <div className="mt-5">

              <label className="text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition-all">

                <MdEmail className="text-xl text-slate-400"/>

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

            {/* Phone */}

            <div className="mt-5">

              <label className="text-sm font-semibold text-slate-700">
                Phone Number
              </label>

              <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition-all">

                <MdPhone className="text-xl text-slate-400"/>

                <input
                  type="tel"
                  placeholder="+977 98XXXXXXXX"
                  className="w-full h-full px-3 outline-none bg-transparent"
                  {...register("number",{required:{
                    value:true,
                    message:"Mobile Number is required"
                  },
                  minLength:{value:10,message:"Mobile Number must have minimum 10 "},
                })}
                                                                            
                />
                   
              </div>
                {errors.number && <p className="font-sm text-red-500">{errors.number.message}</p>}

            </div>

            {/* Password */}

            <div className="mt-5">

              <label className="text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition-all">

                <MdLock className="text-xl text-slate-400"/>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  className="w-full h-full px-3 outline-none bg-transparent"
                    {...register("password", {
                            required: "Password is required",
                            minLength: {
                              value: 8,
                              message: "Password must be at least 8 characters"
                            },
                            pattern: {
                              value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).+$/,
                              message:
                                "Password must contain an uppercase letter, a number, and a special character"
                            }
                          })}
                />


                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-500 hover:text-blue-600 transition"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>
                {errors.password && <p className="font-sm text-red-500">{errors.password.message}</p>}
             
            </div>
                        {/* Password Strength */}

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

            {/* Confirm Password */}

            <div className="mt-6">

              <label className="text-sm font-semibold text-slate-700">
                Confirm Password
              </label>

              <div className={`mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100 transition-all ${hasSame?" border-slate-300 px-4 focus-within:border-blue-600":" border-red-300 px-4 focus-within:border-red-600"}`}>

                <MdLock className="text-xl text-slate-400"/>

                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm your password"
                  className={`w-full h-full px-3 outline-none bg-transparent `}
                  {...register("confirmPassword",{required:{
                    value:true,
                    message:"Password Dos not Match ",
                    
                  },
                   validate: (value) =>
                   value === getValues("password") || "Passwords do not match!"  
                })}
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="text-slate-500 hover:text-blue-600 transition"
                >
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>
                {errors.confirmPassword && <p className="font-sm text-red-500">{errors.confirmPassword.message}</p>}
             {/* { <p className="mt-2 text-sm font-medium text-green-600 flex items-center gap-2">

                ✅ Passwords Match

              </p>
} */}
            </div>
                        {/* Terms & Conditions */}

            <div className="mt-6 flex items-start gap-3">

              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-blue-600"
                required
              />

              <p className="text-sm text-slate-600 leading-6">

                I agree to the

                <button
                  type="button"
                  className="mx-1 font-semibold text-blue-600 hover:text-blue-700"
                >
                  Terms & Conditions
                </button>

                and

                <button
                  type="button"
                  className="ml-1 font-semibold text-blue-600 hover:text-blue-700"
                >
                  Privacy Policy
                </button>

              </p>

            </div>

            {/* Register Button */}

            <button 
            type="submit"
              className="group mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 transition-all duration-300 hover:scale-[1.02] hover:from-blue-700 hover:to-indigo-700 active:scale-100"
            >

              Create Account

              <span className="transition-transform duration-300 group-hover:translate-x-1">

                →

              </span>

            </button>

            {/* Divider */}

            <div className="my-8 flex items-center gap-3">

              <div className="h-px flex-1 bg-slate-200"></div>

              {/* <span className="text-xs font-semibold uppercase tracking-[3px] text-slate-400">

                Or Continue With

              </span> */}

              <div className="h-px flex-1 bg-slate-200"></div>

            </div>


            <p className="mt-8 text-center text-slate-500">

              Already have an account?

              <Link to={"/login"}
                className="ml-2 cursor-pointer font-semibold text-blue-600 hover:text-blue-700"
              >

                Login

              </Link>

            </p>
           </div>
        </form>
</>
  );
}