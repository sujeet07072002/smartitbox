import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Github,
  Chrome,
} from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const gradientBtn =
    "bg-gradient-to-r from-[#FFD200] to-[#F7941D] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-orange-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-2xl border border-gray-100 relative z-10">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-900 rotate-45 rounded flex items-center justify-center">
              <span className="text-white text-xs -rotate-45 font-bold">S</span>
            </div>
            <span className="text-xl font-black text-[#1A2E5A]">
              SMART <span className="text-[#F7941D]">ITBOX</span>
            </span>
          </Link>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Please enter your details to sign in
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Email Field */}
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                required
                className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:bg-white transition-all sm:text-sm"
                placeholder="Email address"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                required
                className="block w-full pl-10 pr-10 py-4 border border-gray-200 rounded-2xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:bg-white transition-all sm:text-sm"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded text-[#F7941D] focus:ring-[#F7941D]"
              />
              Remember me
            </label>
            <Link
              to="#"
              className="font-bold text-[#F7941D] hover:text-orange-600 transition-colors"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className={`group relative w-full flex justify-center py-4 px-4 rounded-2xl font-bold text-white uppercase tracking-wider ${gradientBtn}`}
          >
            Sign In{" "}
            <ArrowRight
              className="ml-2 group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors gap-2 font-medium text-gray-700">
            <Chrome size={20} /> Google
          </button>
          <button className="flex items-center justify-center py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-colors gap-2 font-medium text-gray-700">
            <Github size={20} /> GitHub
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-[#F7941D] font-bold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
