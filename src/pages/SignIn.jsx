import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  ShieldCheck,
} from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const gradientBtn =
    "bg-gradient-to-r from-[#FFD200] to-[#F7941D] text-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Blur Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-[2.5rem] shadow-2xl relative z-10 border border-gray-100">
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
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Join us to start making your business smart
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div className="space-y-4">
            {/* Full Name */}
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                required
                className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-2xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:bg-white transition-all sm:text-sm"
                placeholder="Full Name"
              />
            </div>

            {/* Email address */}
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="email"
                required
                className="block w-full pl-10 pr-3 py-4 border border-gray-200 rounded-2xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:bg-white transition-all sm:text-sm"
                placeholder="Email address"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type={showPassword ? "text" : "password"}
                required
                className="block w-full pl-10 pr-10 py-4 border border-gray-200 rounded-2xl bg-gray-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F7941D] focus:bg-white transition-all sm:text-sm"
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

          <div className="flex items-start gap-3 text-sm text-gray-600">
            <input
              type="checkbox"
              required
              className="mt-1 w-4 h-4 rounded text-[#F7941D] focus:ring-[#F7941D]"
            />
            <span>
              I agree to the{" "}
              <Link to="#" className="text-[#F7941D] font-bold">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="#" className="text-[#F7941D] font-bold">
                Privacy Policy
              </Link>
            </span>
          </div>

          <button
            type="submit"
            className={`group relative w-full flex justify-center py-4 px-4 rounded-2xl font-bold text-white uppercase tracking-wider ${gradientBtn}`}
          >
            Get Started <UserPlus className="ml-2" size={20} />
          </button>
        </form>

        <div className="bg-blue-50/50 p-4 rounded-2xl flex items-center gap-3 border border-blue-100">
          <ShieldCheck className="text-blue-600 shrink-0" />
          <p className="text-[11px] text-blue-800">
            Your data is secured using industry-standard SSL encryption and
            protected by our secure cloud.
          </p>
        </div>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#F7941D] font-bold hover:underline"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
