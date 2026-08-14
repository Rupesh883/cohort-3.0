import { useForm } from "react-hook-form";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);


   let {register,handleSubmit,onRegisterSubmit,errors,navigate}=useAuth()
  

  return (
    <div className="min-h-screen bg-[#0B0713] text-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 lg:grid lg:grid-cols-[40%_60%]">
        {/* Left Side */}
        <div className="hidden lg:block relative overflow-hidden border-r border-white/10">
          <img
            src="/images/ai-bg.webp"
            alt="AI Background"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#07142e]/40 via-[#090611]/50 to-[#090611]/80" />

          <div className="relative h-full flex flex-col justify-between p-10">
            <h1 className="text-2xl font-bold">
              Synthetix AI
            </h1>

            <div className="max-w-md">
              <div className="flex items-center gap-2 text-violet-300 text-xs tracking-[4px] uppercase mb-6">
                <Sparkles size={14} />
                Next-Gen Intelligence
              </div>

              <h2 className="text-6xl font-bold leading-tight mb-6">
                Create your future with AI.
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Join thousands of teams already
                leveraging enterprise-grade AI
                intelligence to accelerate growth.
              </p>

              <div className="flex gap-12 mt-12">
                <div>
                  <h3 className="text-4xl font-bold">
                    50K+
                  </h3>
                  <p className="text-gray-400">
                    Active Users
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold">
                    99.9%
                  </h3>
                  <p className="text-gray-400">
                    Uptime SLA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-[520px]">
            <h1 className="text-5xl font-bold">
              Create Account
            </h1>

            <p className="mt-3 text-[#A39CB3]">
              Experience the future of collaborative
              data intelligence.
            </p>

            <form
              onSubmit={handleSubmit(onRegisterSubmit)}
              className="mt-10 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block mb-2 text-sm">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6578]"
                  />

                  <input
                    {...register("name", {
                      required:
                        "Full name is required",
                    })}
                    placeholder="Enter your full name"
                    className="h-14 w-full rounded-xl border border-[#2B2437] bg-[#15111E] pl-12 pr-4 focus:border-[#B79AF7] focus:outline-none"
                  />
                </div>

                {errors.name && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6578]"
                  />

                  <input
                    {...register("email", {
                      required:
                        "Email is required",
                    })}
                    placeholder="name@company.com"
                    className="h-14 w-full rounded-xl border border-[#2B2437] bg-[#15111E] pl-12 pr-4 focus:border-[#B79AF7] focus:outline-none"
                  />
                </div>

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block mb-2 text-sm">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6578]"
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    {...register("password", {
                      required:
                        "Password is required",
                      minLength: {
                        value: 8,
                        message:
                          "Minimum 8 characters",
                      },
                    })}
                    placeholder="••••••••"
                    className="h-14 w-full rounded-xl border border-[#2B2437] bg-[#15111E] pl-12 pr-12 focus:border-[#B79AF7] focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block mb-2 text-sm">
                  Confirm Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6578]"
                  />

                  <input
                    type={
                      showConfirm
                        ? "text"
                        : "password"
                    }
                    {...register(
                      "confirmPassword",
                      {
                        required:
                          "Confirm password required",
                        validate: (value) =>
                          value === password ||
                          "Passwords do not match",
                      }
                    )}
                    placeholder="••••••••"
                    className="h-14 w-full rounded-xl border border-[#2B2437] bg-[#15111E] pl-12 pr-12 focus:border-[#B79AF7] focus:outline-none"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirm(
                        !showConfirm
                      )
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    {showConfirm ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p className="mt-2 text-sm text-red-400">
                    {
                      errors.confirmPassword
                        .message
                    }
                  </p>
                )}
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm text-[#B8B2C7]">
                <input
                  type="checkbox"
                  {...register("terms", {
                    required: true,
                  })}
                  className="mt-1"
                />

                <span>
                  I agree to the Terms of Service
                  and Privacy Policy.
                </span>
              </label>

              {/* Button */}
              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-gradient-to-r from-[#8F72E8] to-[#C5AEF8] text-[#1B1235] font-semibold hover:opacity-90 transition"
              >
                Create Account
              </button>
            </form>

            {/* Divider */}
            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#2B2437]" />
              <span className="text-xs uppercase tracking-wider text-[#7D768D]">
                Or Continue With
              </span>
              <div className="h-px flex-1 bg-[#2B2437]" />
            </div>

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">
              <button className="h-14 rounded-xl border border-[#2B2437] bg-[#120E1A] hover:border-[#B79AF7] transition">
                Google
              </button>

              <button className="h-14 rounded-xl border border-[#2B2437] bg-[#120E1A] hover:border-[#B79AF7] transition">
                SSO
              </button>
            </div>

            <p className="mt-10 text-center text-[#B8B2C7]">
              Already have an account?{" "}
              <button onClick={()=>navigate("/")} className="text-[#B79AF7] font-semibold">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#9D97AB]">
          <div className="font-semibold text-white">
            Synthetix AI
          </div>

          <div className="flex flex-wrap gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
            <a href="#">System Status</a>
          </div>

          <div>
            © 2024 Synthetix AI. Enterprise
            Intelligence Platforms.
          </div>
        </div>
      </footer>
    </div>
  );
}