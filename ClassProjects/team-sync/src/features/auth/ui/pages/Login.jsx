// // import React, { useState } from "react";
// // import { useForm } from "react-hook-form";
// // import {
// //   User,
// //   Mail,
// //   Lock,
// //   Eye,
// //   EyeOff,
// //   Sparkles,
// //   Check,
// //   Loader2,
// // } from "lucide-react";

// // // --- Password strength helper -------------------------------------------------
// // function getPasswordStrength(password) {
// //   if (!password) return { score: 0, label: "" };

// //   let score = 0;
// //   if (password.length >= 8) score++;
// //   if (password.length >= 12) score++;
// //   if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
// //   if (/\d/.test(password)) score++;
// //   if (/[^A-Za-z0-9]/.test(password)) score++;

// //   const clamped = Math.min(score, 4);
// //   const labels = ["Too weak", "Weak", "Fair", "Strong", "Very strong"];
// //   return { score: clamped, label: labels[clamped] };
// // }

// // const strengthColors = [
// //   "bg-neutral-700",
// //   "bg-rose-500",
// //   "bg-amber-500",
// //   "bg-violet-500",
// //   "bg-emerald-500",
// // ];

// // // --- Reusable field ------------------------------------------------------------
// // function FormField({ label, icon: Icon, error, children }) {
// //   return (
// //     <div>
// //       <label className="mb-2 block text-sm font-medium text-neutral-200">
// //         {label}
// //       </label>
// //       <div className="relative">
// //         <Icon
// //           className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-neutral-500"
// //           size={18}
// //         />
// //         {children}
// //       </div>
// //       {error && (
// //         <p className="mt-1.5 text-xs text-rose-400" role="alert">
// //           {error}
// //         </p>
// //       )}
// //     </div>
// //   );
// // }

// // export default function Login() {
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [submitted, setSubmitted] = useState(false);
// //   const {
// //     register,
// //     handleSubmit,
// //     watch,
// //     formState: { errors, isSubmitting },
// //   } = useForm({ mode: "onBlur" });

// //   const password = watch("password", "");
// //   const agreed = watch("agree", false);
// //   const { score, label } = getPasswordStrength(password);

// //   const onSubmit = async (data) => {
// //     await new Promise((r) => setTimeout(r, 900));
// //     setSubmitted(true);
// //   };

// //   return (
// //     <div className="min-h-screen w-full bg-neutral-950 text-neutral-100">
// //       <div className="flex min-h-screen flex-col lg:flex-row">
// //         {/* ---------------- Left panel ---------------- */}
// //         <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden bg-neutral-950 p-8 lg:min-h-screen lg:w-1/2 lg:p-12">
// //           {/* Ambient neuron-like background */}
// //           <div className="pointer-events-none absolute inset-0">
// //             <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-neutral-950 to-neutral-950" />
// //             <NeuronArt />
// //             <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/10 to-transparent" />
// //           </div>

// //           <div className="relative z-10">
// //             <span className="text-lg font-bold tracking-tight">
// //               Synthetix AI
// //             </span>
// //           </div>

// //           <div className="relative z-10 max-w-md">
// //             <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-widest text-violet-300">
// //               <Sparkles size={14} className="fill-violet-300" />
// //               NEXT-GEN INTELLIGENCE
// //             </div>
// //             <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
// //               Accelerate your team&apos;s intelligence.
// //             </h1>
// //             <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
// //               Connect your enterprise data to our specialized AI models and
// //               unlock unparalleled strategic insights in seconds.
// //             </p>

// //             <div className="mt-10 flex gap-10">
// //               <div>
// //                 <div className="text-2xl font-bold text-white">99.9%</div>
// //                 <div className="text-xs text-neutral-500">Uptime SLA</div>
// //               </div>
// //               <div>
// //                 <div className="text-2xl font-bold text-white">ISO</div>
// //                 <div className="text-xs text-neutral-500">27001 Certified</div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ---------------- Right panel (form) ---------------- */}
// //         <div className="flex flex-1 items-center justify-center bg-neutral-950 p-6 sm:p-10 lg:w-1/2">
// //           <div className="w-full max-w-md">
// //             {submitted ? (
// //               <SuccessState />
// //             ) : (
// //               <>
// //                 <h2 className="text-3xl font-bold tracking-tight text-white">
// //                   Create your account
// //                 </h2>
// //                 <p className="mt-2 text-sm text-neutral-400">
// //                   Experience the future of collaborative data intelligence.
// //                 </p>

// //                 <form
// //                   onSubmit={handleSubmit(onSubmit)}
// //                   className="mt-8 space-y-5"
// //                   noValidate
// //                 >
// //                   <FormField
// //                     label="Full Name"
// //                     icon={User}
// //                     error={errors.fullName?.message}
// //                   >
// //                     <input
// //                       type="text"
// //                       placeholder="Enter your full name"
// //                       className={`w-full rounded-xl border bg-neutral-900/60 py-3.5 pl-11 pr-4 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 ${
// //                         errors.fullName
// //                           ? "border-rose-500"
// //                           : "border-neutral-800"
// //                       }`}
// //                       {...register("fullName", {
// //                         required: "Please enter your full name",
// //                         minLength: {
// //                           value: 2,
// //                           message: "Name must be at least 2 characters",
// //                         },
// //                       })}
// //                     />
// //                   </FormField>

// //                   <FormField
// //                     label="Email Address"
// //                     icon={Mail}
// //                     error={errors.email?.message}
// //                   >
// //                     <input
// //                       type="email"
// //                       placeholder="name@company.com"
// //                       className={`w-full rounded-xl border bg-neutral-900/60 py-3.5 pl-11 pr-4 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 ${
// //                         errors.email ? "border-rose-500" : "border-neutral-800"
// //                       }`}
// //                       {...register("email", {
// //                         required: "Please enter your email",
// //                         pattern: {
// //                           value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// //                           message: "Enter a valid email address",
// //                         },
// //                       })}
// //                     />
// //                   </FormField>

// //                   <FormField
// //                     label="Password"
// //                     icon={Lock}
// //                     error={errors.password?.message}
// //                   >
// //                     <input
// //                       type={showPassword ? "text" : "password"}
// //                       placeholder="Create a password"
// //                       className={`w-full rounded-xl border bg-neutral-900/60 py-3.5 pl-11 pr-11 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30 ${
// //                         errors.password
// //                           ? "border-rose-500"
// //                           : "border-neutral-800"
// //                       }`}
// //                       {...register("password", {
// //                         required: "Please create a password",
// //                         minLength: {
// //                           value: 8,
// //                           message: "Password must be at least 8 characters",
// //                         },
// //                       })}
// //                     />
// //                     <button
// //                       type="button"
// //                       tabIndex={-1}
// //                       onClick={() => setShowPassword((s) => !s)}
// //                       className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 transition hover:text-neutral-300"
// //                       aria-label={
// //                         showPassword ? "Hide password" : "Show password"
// //                       }
// //                     >
// //                       {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
// //                     </button>
// //                   </FormField>

// //                   {/* Strength meter */}
// //                   {password && (
// //                     <div className="!mt-3">
// //                       <div className="flex gap-1.5">
// //                         {[0, 1, 2, 3].map((i) => (
// //                           <div
// //                             key={i}
// //                             className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
// //                               i < score
// //                                 ? strengthColors[score]
// //                                 : "bg-neutral-800"
// //                             }`}
// //                           />
// //                         ))}
// //                       </div>
// //                       <p
// //                         className={`mt-1.5 text-xs font-medium ${
// //                           score <= 1
// //                             ? "text-rose-400"
// //                             : score === 2
// //                             ? "text-amber-400"
// //                             : score === 3
// //                             ? "text-violet-400"
// //                             : "text-emerald-400"
// //                         }`}
// //                       >
// //                         {label} password
// //                       </p>
// //                     </div>
// //                   )}

// //                   <div>
// //                     <label className="flex cursor-pointer items-start gap-3 text-sm text-neutral-400">
// //                       <input
// //                         type="checkbox"
// //                         className="peer sr-only"
// //                         {...register("agree", {
// //                           required: "You must accept the terms to continue",
// //                         })}
// //                       />
// //                       <span
// //                         className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded border transition ${
// //                           agreed
// //                             ? "border-violet-500 bg-violet-500"
// //                             : "border-neutral-700 bg-neutral-900"
// //                         }`}
// //                       >
// //                         {agreed && <Check size={12} className="text-white" />}
// //                       </span>
// //                       <span>
// //                         I agree to the{" "}
// //                         <a href="#" className="text-violet-400 hover:underline">
// //                           Terms of Service
// //                         </a>{" "}
// //                         and{" "}
// //                         <a href="#" className="text-violet-400 hover:underline">
// //                           Privacy Policy
// //                         </a>
// //                         .
// //                       </span>
// //                     </label>
// //                     {errors.agree && (
// //                       <p className="mt-1.5 text-xs text-rose-400" role="alert">
// //                         {errors.agree.message}
// //                       </p>
// //                     )}
// //                   </div>

// //                   <button
// //                     type="submit"
// //                     disabled={isSubmitting}
// //                     className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-400 py-3.5 text-sm font-semibold text-neutral-950 transition hover:brightness-110 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
// //                   >
// //                     {isSubmitting ? (
// //                       <>
// //                         <Loader2 size={16} className="animate-spin" />
// //                         Creating account...
// //                       </>
// //                     ) : (
// //                       "Create Account"
// //                     )}
// //                   </button>

// //                   <div className="relative py-2 text-center">
// //                     <div className="absolute inset-0 top-1/2 border-t border-neutral-800" />
// //                     <span className="relative bg-neutral-950 px-3 text-xs font-medium tracking-widest text-neutral-500">
// //                       OR CONTINUE WITH
// //                     </span>
// //                   </div>

// //                   <div className="grid grid-cols-2 gap-3">
// //                     <button
// //                       type="button"
// //                       className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/40 py-3 text-sm font-medium text-neutral-200 transition hover:bg-neutral-900"
// //                     >
// //                       <GoogleIcon />
// //                       Google
// //                     </button>
// //                     <button
// //                       type="button"
// //                       className="flex items-center justify-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/40 py-3 text-sm font-medium text-neutral-200 transition hover:bg-neutral-900"
// //                     >
// //                       <Sparkles size={16} className="text-neutral-300" />
// //                       SSO
// //                     </button>
// //                   </div>

// //                   <p className="text-center text-sm text-neutral-400">
// //                     Already have an account?{" "}
// //                     <a href="#" className="font-medium text-violet-400 hover:underline">
// //                       Log In
// //                     </a>
// //                   </p>
// //                 </form>
// //               </>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // function SuccessState() {
// //   return (
// //     <div className="flex flex-col items-center py-16 text-center">
// //       <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
// //         <Check size={26} className="text-emerald-400" />
// //       </div>
// //       <h2 className="text-2xl font-bold text-white">Account created</h2>
// //       <p className="mt-2 max-w-xs text-sm text-neutral-400">
// //         Welcome to Synthetix AI. Check your inbox to verify your email and get
// //         started.
// //       </p>
// //     </div>
// //   );
// // }

// // function GoogleIcon() {
// //   return (
// //     <svg width="16" height="16" viewBox="0 0 48 48">
// //       <path
// //         fill="#FFC107"
// //         d="M43.6 20.5H42V20.5H24v7h11.3c-1.6 4.5-5.9 7.5-11.3 7.5-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 5.5 29.6 3.5 24 3.5 12.7 3.5 3.5 12.7 3.5 24S12.7 44.5 24 44.5 44.5 35.3 44.5 24c0-1.2-.1-2.4-.9-3.5z"
// //       />
// //       <path
// //         fill="#FF3D00"
// //         d="m6.3 14.7 5.8 4.3C13.6 15.6 18.4 12.5 24 12.5c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6.5 29.6 4.5 24 4.5c-7.6 0-14.1 4.3-17.4 10.2z"
// //       />
// //       <path
// //         fill="#4CAF50"
// //         d="M24 44.5c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4c-2 1.4-4.6 2.3-7.6 2.3-5.4 0-9.9-3.6-11.5-8.5l-6.5 5C9.8 39.9 16.3 44.5 24 44.5z"
// //       />
// //       <path
// //         fill="#1976D2"
// //         d="M43.6 20.5H42V20.5H24v7h11.3c-.8 2.3-2.3 4.3-4.2 5.6l6.6 5.4C41.6 35.4 44.5 30.1 44.5 24c0-1.2-.1-2.4-.9-3.5z"
// //       />
// //     </svg>
// //   );
// // }

// // function NeuronArt() {
// //   // Decorative ambient SVG evoking the neuron/particle artwork from the reference
// //   const lines = Array.from({ length: 28 });
// //   return (
// //     <svg
// //       className="absolute -left-10 top-0 h-full w-full opacity-60"
// //       viewBox="0 0 500 700"
// //       preserveAspectRatio="xMidYMid slice"
// //     >
// //       <defs>
// //         <radialGradient id="glow" cx="35%" cy="45%" r="55%">
// //           <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
// //           <stop offset="45%" stopColor="#4338ca" stopOpacity="0.18" />
// //           <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
// //         </radialGradient>
// //       </defs>
// //       <rect width="500" height="700" fill="url(#glow)" />
// //       {lines.map((_, i) => {
// //         const angle = (i / lines.length) * Math.PI * 2;
// //         const len = 120 + ((i * 37) % 160);
// //         const cx = 175 + Math.cos(angle * 1.3) * 10;
// //         const cy = 330 + Math.sin(angle * 1.7) * 10;
// //         const x2 = cx + Math.cos(angle) * len;
// //         const y2 = cy + Math.sin(angle) * len;
// //         return (
// //           <line
// //             key={i}
// //             x1={cx}
// //             y1={cy}
// //             x2={x2}
// //             y2={y2}
// //             stroke="#8b7cf6"
// //             strokeOpacity={0.15 + (i % 5) * 0.06}
// //             strokeWidth={0.6}
// //           />
// //         );
// //       })}
// //       {lines.slice(0, 14).map((_, i) => {
// //         const angle = (i / 14) * Math.PI * 2 + 0.4;
// //         const r = 60 + ((i * 53) % 220);
// //         const cx = 175 + Math.cos(angle) * r;
// //         const cy = 330 + Math.sin(angle) * r;
// //         return (
// //           <circle
// //             key={`dot-${i}`}
// //             cx={cx}
// //             cy={cy}
// //             r={1.4}
// //             fill="#c4b5fd"
// //             opacity={0.5}
// //           />
// //         );
// //       })}
// //     </svg>
// //   );
// // }


// import { useState, useMemo, useCallback } from "react";
// import { User, Mail, Lock, Check, Sparkles, Eye, EyeOff, ShieldCheck, Gauge } from "lucide-react";

// // ---- Password strength helper -------------------------------------------------
// function scorePassword(pw) {
//   if (!pw) return 0;
//   let score = 0;
//   if (pw.length >= 8) score++;
//   if (pw.length >= 12) score++;
//   if (/[A-Z]/.test(pw) && /[a-z]/.test(pw)) score++;
//   if (/\d/.test(pw)) score++;
//   if (/[^A-Za-z0-9]/.test(pw)) score++;
//   return Math.min(score, 4);
// }

// const STRENGTH_META = [
//   { label: "Too short", color: "bg-neutral-700" },
//   { label: "Weak password", color: "bg-rose-500" },
//   { label: "Fair password", color: "bg-amber-500" },
//   { label: "Good password", color: "bg-violet-400" },
//   { label: "Strong password", color: "bg-emerald-400" },
// ];

// function Field({ id, label, icon: Icon, error, children }) {
//   return (
//     <div className="flex flex-col gap-2">
//       <label htmlFor={id} className="text-sm font-medium text-neutral-300">
//         {label}
//       </label>
//       <div className="relative">
//         <Icon
//           size={18}
//           strokeWidth={1.75}
//           className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
//             error ? "text-rose-400" : "text-neutral-500 peer-focus:text-violet-400"
//           }`}
//         />
//         {children}
//       </div>
//       {error && (
//         <p className="text-xs text-rose-400 flex items-center gap-1">{error}</p>
//       )}
//     </div>
//   );
// }

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [touched, setTouched] = useState({});
//   const [agree, setAgree] = useState(false);
//   const [showPw, setShowPw] = useState(false);
//   const [submitting, setSubmitting] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const strength = useMemo(() => scorePassword(form.password), [form.password]);

//   const errors = useMemo(() => {
//     const e = {};
//     if (touched.name && form.name.trim().length < 2) e.name = "Enter your full name.";
//     if (touched.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
//       e.email = "Enter a valid email address.";
//     if (touched.password && form.password.length < 8)
//       e.password = "Use at least 8 characters.";
//     return e;
//   }, [form, touched]);

//   const isValid =
//     // form.name.trim().length >= 2 &&
//     /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) &&
//     form.password.length >= 8 &&
//     agree;

//   const handleChange = useCallback((field) => (ev) => {
//     setForm((f) => ({ ...f, [field]: ev.target.value }));
//   }, []);

//   const handleBlur = useCallback((field) => () => {
//     setTouched((t) => ({ ...t, [field]: true }));
//   }, []);

//   const handleSubmit = (ev) => {
//     ev.preventDefault();
//     setTouched({ name: true, email: true, password: true });
//     if (!isValid) return;
//     setSubmitting(true);
//     setTimeout(() => {
//       setSubmitting(false);
//       setSubmitted(true);
//     }, 1100);
//   };

//   return (
//     <div className="min-h-screen w-full bg-[#0a0a0f] text-neutral-100 flex items-center justify-center p-0 font-sans">
//       <div className="w-full min-h-screen lg:min-h-0 lg:h-[860px] lg:max-h-[92vh] lg:w-[1100px] flex flex-col lg:flex-row overflow-hidden lg:rounded-2xl lg:border lg:border-white/5 lg:shadow-[0_0_120px_-20px_rgba(139,92,246,0.25)]">
//         {/* ---------------- Left panel ---------------- */}
//         <div className="relative hidden lg:flex lg:w-[42%] flex-col justify-between overflow-x-hidden overflow-y-auto bg-[#07070c] p-10">
//           <NeuralArt />
//           <div className="relative z-10 flex items-center gap-2">
//             <span className="text-lg font-bold tracking-tight">Synthetix AI</span>
//           </div>

//           <div className="relative z-10 space-y-6">
//             <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] text-violet-300/90">
//               <Sparkles size={14} strokeWidth={2} />
//               NEXT-GEN INTELLIGENCE
//             </div>
//             <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white">
//               Accelerate your
//               <br />
//               team&apos;s intelligence.
//             </h1>
//             <p className="max-w-xs text-[15px] leading-relaxed text-neutral-400">
//               Connect your enterprise data to our specialized AI models and
//               unlock unparalleled strategic insights in seconds.
//             </p>

//             <div className="flex gap-10 pt-2">
//               <div>
//                 <div className="text-2xl font-bold text-white">99.9%</div>
//                 <div className="text-xs text-neutral-500">Uptime SLA</div>
//               </div>
//               <div>
//                 <div className="text-2xl font-bold text-white">ISO</div>
//                 <div className="text-xs text-neutral-500">27001 Certified</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ---------------- Right panel ---------------- */}
//         <div className="relative flex flex-1 flex-col bg-[#0d0d13]">
//           <div className="lg:hidden flex items-center gap-2 px-6 pt-6">
//             <span className="text-base font-bold tracking-tight">Synthetix AI</span>
//           </div>

//           <div className="flex flex-1 items-center justify-center px-6 py-10 sm:px-10">
//             <div className="w-full max-w-sm">
//               {submitted ? (
//                 <SuccessState name={form.name} onReset={() => {
//                   setSubmitted(false);
//                   setForm({ email: "", password: "" });
//                   setTouched({});
//                   setAgree(false);
//                 }} />
//               ) : (
//                 <>
//                   <h2 className="text-3xl font-extrabold tracking-tight text-white">
//                    welcome Back
//                   </h2>
//                   <p className="mt-2 text-sm text-neutral-400">
//                     Experience the future of collaborative data intelligence.
//                   </p>

//                   <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
//                     <Field id="email" label="Email Address" icon={Mail} error={errors.email}>
//                       <input
//                         id="email"
//                         type="email"
//                         placeholder="name@company.com"
//                         value={form.email}
//                         onChange={handleChange("email")}
//                         onBlur={handleBlur("email")}
//                         className={`peer w-full rounded-xl border bg-white/[0.03] py-3.5 pl-11 pr-4 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:bg-white/[0.05] ${
//                           errors.email
//                             ? "border-rose-500/60 focus:border-rose-400"
//                             : "border-white/10 focus:border-violet-400/70"
//                         }`}
//                       />
//                     </Field>

//                     <div className="flex flex-col gap-2">
//                       <Field id="password" label="Password" icon={Lock} error={errors.password}>
//                         <input
//                           id="password"
//                           type={showPw ? "text" : "password"}
//                           placeholder="Create a password"
//                           value={form.password}
//                           onChange={handleChange("password")}
//                           onBlur={handleBlur("password")}
//                           className={`peer w-full rounded-xl border bg-white/[0.03] py-3.5 pl-11 pr-11 text-sm text-white placeholder-neutral-600 outline-none transition-colors focus:bg-white/[0.05] ${
//                             errors.password
//                               ? "border-rose-500/60 focus:border-rose-400"
//                               : "border-white/10 focus:border-violet-400/70"
//                           }`}
//                         />
//                         <button
//                           type="button"
//                           tabIndex={-1}
//                           onClick={() => setShowPw((s) => !s)}
//                           className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-300 transition-colors"
//                           aria-label={showPw ? "Hide password" : "Show password"}
//                         >
//                           {showPw ? <EyeOff size={17} /> : <Eye size={17} />}
//                         </button>
//                       </Field>

//                       {/* Strength meter */}
//                       <div className="pt-1">
//                         <div className="flex gap-1.5">
//                           {[0, 1, 2, 3].map((i) => (
//                             <div key={i} className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
//                               <div
//                                 className={`h-full rounded-full transition-all duration-500 ease-out ${
//                                   strength > i ? STRENGTH_META[strength].color : ""
//                                 }`}
//                                 style={{ width: strength > i ? "100%" : "0%" }}
//                               />
//                             </div>
//                           ))}
//                         </div>
//                         {form.password.length > 0 && (
//                           <p className="mt-1.5 flex items-center gap-1 text-xs text-neutral-400">
//                             <Gauge size={12} />
//                             {STRENGTH_META[strength].label}
//                           </p>
//                         )}
//                       </div>
//                     </div>

//                     <label className="flex cursor-pointer items-start gap-3 pt-1 select-none">
//                       <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center">
//                         <input
//                           type="checkbox"
//                           checked={agree}
//                           onChange={(e) => setAgree(e.target.checked)}
//                           className="peer sr-only"
//                         />
//                         <span
//                           className={`h-4 w-4 rounded-[4px] border transition-all ${
//                             agree
//                               ? "border-violet-400 bg-violet-500"
//                               : "border-white/20 bg-white/[0.03]"
//                           }`}
//                         />
//                         {agree && (
//                           <Check size={12} strokeWidth={3} className="absolute text-white" />
//                         )}
//                       </span>
//                       <span className="text-[13px] leading-snug text-neutral-400">
//                         I agree to the{" "}
//                         <a href="#" onClick={(e) => e.preventDefault()} className="text-violet-300 hover:text-violet-200 underline underline-offset-2">
//                           Terms of Service
//                         </a>{" "}
//                         and{" "}
//                         <a href="#" onClick={(e) => e.preventDefault()} className="text-violet-300 hover:text-violet-200 underline underline-offset-2">
//                           Privacy Policy
//                         </a>
//                         .
//                       </span>
//                     </label>

//                     <button
//                       type="submit"
//                       disabled={!isValid || submitting}
//                       className={`relative mt-2 w-full overflow-hidden rounded-xl py-3.5 text-sm font-bold tracking-wide transition-all duration-200 ${
//                         isValid && !submitting
//                           ? "bg-gradient-to-r from-violet-600 via-violet-500 to-purple-400 text-white shadow-[0_8px_24px_-8px_rgba(139,92,246,0.6)] hover:shadow-[0_10px_28px_-6px_rgba(139,92,246,0.75)] hover:-translate-y-0.5 active:translate-y-0"
//                           : "cursor-not-allowed bg-white/10 text-neutral-500"
//                       }`}
//                     >
//                       {submitting ? (
//                         <span className="flex items-center justify-center gap-2">
//                           <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
//                           Creating account…
//                         </span>
//                       ) : (
//                         "Create Account"
//                       )}
//                     </button>
//                   </form>

//                   <div className="my-7 flex items-center gap-3">
//                     <div className="h-px flex-1 bg-white/10" />
//                     <span className="text-[10px] font-semibold tracking-[0.15em] text-neutral-500">
//                       OR CONTINUE WITH
//                     </span>
//                     <div className="h-px flex-1 bg-white/10" />
//                   </div>

//                   <div className="grid grid-cols-2 gap-3">
//                     <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] py-3 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/[0.06]">
//                       <GoogleIcon />
//                       Google
//                     </button>
//                     <button className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] py-3 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/[0.06]">
//                       <ShieldCheck size={16} className="text-violet-300" />
//                       SSO
//                     </button>
//                   </div>

//                   <p className="mt-7 text-center text-sm text-neutral-500">
//                     Already have an account?{" "}
//                     <a href="#" onClick={(e) => e.preventDefault()} className="font-semibold text-violet-300 hover:text-violet-200">
//                       Log In
//                     </a>
//                   </p>
//                 </>
//               )}
//             </div>
//           </div>

//           <div className="hidden lg:flex items-center justify-between border-t border-white/5 px-10 py-4 text-xs text-neutral-600">
//             <span className="font-semibold text-neutral-500">Synthetix AI</span>
//             <div className="flex gap-5">
//               <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300">Privacy Policy</a>
//               <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300">Terms</a>
//               <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300">Security</a>
//               <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-neutral-300">Status</a>
//             </div>
//             <span>© 2026 Synthetix AI</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function SuccessState({ name, onReset }) {
//   return (
//     <div className="flex flex-col items-center py-10 text-center animate-[fadeIn_0.4s_ease]">
//       <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/15 ring-1 ring-violet-400/40">
//         <Check size={28} className="text-violet-300" strokeWidth={2.5} />
//       </div>
//       <h2 className="mt-6 text-2xl font-bold text-white">
//         Welcome{name ? `, ${name.split(" ")[0]}` : ""}!
//       </h2>
//       <p className="mt-2 max-w-xs text-sm text-neutral-400">
//         Your account has been created. This is a demo — no real account was made.
//       </p>
//       <button
//         onClick={onReset}
//         className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-neutral-200 hover:bg-white/[0.06]"
//       >
//         Back to form
//       </button>
//     </div>
//   );
// }

// function GoogleIcon() {
//   return (
//     <svg width="16" height="16" viewBox="0 0 24 24">
//       <path fill="#4285F4" d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.57-5.17 3.57-8.82Z"/>
//       <path fill="#34A853" d="M12 24c3.24 0 5.95-1.07 7.94-2.91l-3.88-3c-1.08.72-2.46 1.15-4.06 1.15-3.12 0-5.77-2.11-6.71-4.94H1.29v3.1A12 12 0 0 0 12 24Z"/>
//       <path fill="#FBBC05" d="M5.29 14.3a7.2 7.2 0 0 1 0-4.6v-3.1H1.29a12 12 0 0 0 0 10.8l4-3.1Z"/>
//       <path fill="#EA4335" d="M12 4.75c1.76 0 3.34.6 4.59 1.8l3.44-3.44C17.94 1.19 15.24 0 12 0 7.4 0 3.42 2.7 1.29 6.6l4 3.1C6.23 6.86 8.88 4.75 12 4.75Z"/>
//     </svg>
//   );
// }

// function NeuralArt() {
//   // Decorative ambient art evoking a neural / synaptic network, built with layered radial gradients + SVG lines.
//   const lines = useMemo(() => {
//     const arr = [];
//     const cx = 130, cy = 460;
//     for (let i = 0; i < 34; i++) {
//       const angle = (Math.PI * 2 * i) / 34 + (i % 3) * 0.18;
//       const len = 90 + ((i * 37) % 160);
//       const x2 = cx + Math.cos(angle) * len;
//       const y2 = cy + Math.sin(angle) * len * 0.9;
//       arr.push({ x1: cx, y1: cy, x2, y2, o: 0.15 + ((i % 5) * 0.09) });
//     }
//     return arr;
//   }, []);

//   return (
//     <>
//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_75%,rgba(99,102,241,0.35),transparent_60%),radial-gradient(ellipse_at_60%_30%,rgba(59,130,246,0.12),transparent_55%)]" />
//       <svg className="absolute inset-0 h-full w-full opacity-70" viewBox="0 0 460 860" preserveAspectRatio="xMidYMid slice">
//         <defs>
//           <linearGradient id="synth-line" x1="0" y1="0" x2="1" y2="1">
//             <stop offset="0%" stopColor="#a78bfa" />
//             <stop offset="100%" stopColor="#38bdf8" />
//           </linearGradient>
//         </defs>
//         {lines.map((l, i) => (
//           <line
//             key={i}
//             x1={l.x1}
//             y1={l.y1}
//             x2={l.x2}
//             y2={l.y2}
//             stroke="url(#synth-line)"
//             strokeWidth={0.6}
//             opacity={l.o}
//           />
//         ))}
//         {lines.map((l, i) => (
//           <circle key={`c-${i}`} cx={l.x2} cy={l.y2} r={1.4} fill="#c4b5fd" opacity={l.o + 0.15} />
//         ))}
//         <circle cx={130} cy={460} r={4} fill="#e9d5ff" opacity={0.9} />
//       </svg>
//       <div className="absolute inset-0 bg-gradient-to-t from-[#07070c] via-transparent to-[#07070c]/40" />
//     </>
//   );
// }
import { useForm } from "react-hook-form";
import {
  Mail,
  Lock,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
 let {register,handleSubmit,onLoginSubmit,errors,navigate}=useAuth()
  return (
    <div className="min-h-screen bg-[#0B0713] text-white flex flex-col">
      {/* Main */}
      <div className="flex-1 lg:grid lg:grid-cols-[40%_60%]">
        {/* Left Panel */}
        <div className="hidden lg:block relative border-r border-white/10 overflow-hidden">
          <img
            src="/images/ai-bg.webp"
            alt="AI"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#061538]/40 via-[#090611]/40 to-[#090611]/80" />

          <div className="relative h-full flex flex-col justify-between p-10">
            <h1 className="text-2xl font-semibold">
              Synthetix AI
            </h1>

            <div className="max-w-md">
              <div className="flex items-center gap-2 text-violet-300 text-xs tracking-[4px] uppercase mb-6">
                <Sparkles size={14} />
                Next-Gen Intelligence
              </div>

              <h2 className="text-6xl font-bold leading-tight mb-6">
                Accelerate your team's
                intelligence.
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Connect your enterprise data to our
                specialized AI models and unlock
                unparalleled strategic insights in
                seconds.
              </p>

              <div className="flex gap-12 mt-12">
                <div>
                  <h3 className="text-4xl font-bold">
                    99.9%
                  </h3>
                  <p className="text-gray-400 mt-1">
                    Uptime SLA
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold">
                    ISO
                  </h3>
                  <p className="text-gray-400 mt-1">
                    27001 Certified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-[500px]">
            <h1 className="text-5xl font-bold tracking-tight">
              Sign In
            </h1>

            <p className="mt-3 text-[#A39CB3] text-lg">
              Welcome back to your workspace.
            </p>

            <form
              onSubmit={handleSubmit(onLoginSubmit)}
              className="mt-12 space-y-6"
            >
              {/* Email */}
              <div>
                <label className="block mb-3 text-sm font-medium">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6578]"
                  />

                  <input
                    type="email"
                    placeholder="name@company.com"
                    {...register("email", {
                      required:
                        "Email address is required",
                    })}
                    className="h-14 w-full rounded-xl border border-[#2B2437] bg-[#15111E] pl-12 pr-4 text-white placeholder:text-[#6B6578] focus:border-[#B79AF7] focus:outline-none"
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
                <label className="block mb-3 text-sm font-medium">
                  Password
                </label>

                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6578]"
                  />

                  <input
                    type="password"
                    placeholder="••••••••"
                    {...register("password", {
                      required:
                        "Password is required",
                    })}
                    className="h-14 w-full rounded-xl border border-[#2B2437] bg-[#15111E] pl-12 pr-4 text-white placeholder:text-[#6B6578] focus:border-[#B79AF7] focus:outline-none"
                  />
                </div>

                {errors.password && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-[#B8B2C7]">
                  <input
                    type="checkbox"
                    className="rounded border-[#2B2437]"
                  />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-[#B79AF7] hover:text-white"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                className="h-14 w-full rounded-xl bg-gradient-to-r from-[#8F72E8] to-[#C5AEF8] font-semibold text-[#1B1235] transition hover:opacity-90"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="my-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#2B2437]" />

              <span className="text-xs tracking-wider text-[#7D768D] uppercase">
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

            <p className="mt-12 text-center text-[#B8B2C7]">
              Don't have an account?{" "}
              <button onClick={()=>navigate("/register")} className="font-semibold text-[#B79AF7] hover:text-white">
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-5">
        <div className="flex flex-col gap-4 text-sm text-[#9D97AB] md:flex-row md:items-center md:justify-between">
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