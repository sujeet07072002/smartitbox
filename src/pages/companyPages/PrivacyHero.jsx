import React from 'react';
import { ChevronDown } from 'lucide-react'; // 'npm install lucide-react' zaroori hai

const PrivacyHero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-white">
      
      {/* Background Subtle Pattern (Tech theme consistency) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="privacy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#privacy-grid)" />
        </svg>
        {/* Subtle decorative shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 border border-slate-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 border border-slate-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* 1. Breadcrumb */}
        <nav className="flex items-center justify-center space-x-2 text-sm font-medium text-slate-500 mb-8">
          <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
          <span>/</span>
          <span className="text-slate-400">Policies</span>
          <span>/</span>
          <span className="text-[#0f172a] font-bold">Privacy Policy</span>
        </nav>

        {/* 2. Badge */}
        <div className="inline-flex items-center bg-[#fffbeb] border border-[#fef3c7] rounded-full px-5 py-2 mb-10 shadow-sm">
          <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2.5"></span>
          <span className="text-sm font-bold text-[#92400e]">Privacy & Security</span>
        </div>

        {/* 3. Main Heading */}
        <h1 className="flex flex-col gap-3 mb-8">
          <span className="text-5xl md:text-7xl font-extrabold text-[#1e293b] tracking-tight">
            Privacy Policy
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent tracking-tight leading-tight">
            Your Data Protection Rights
          </span>
        </h1>

        {/* 4. Description Text */}
        <p className="max-w-3xl mx-auto text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed mb-16 px-4">
          We are committed to protecting your privacy and being transparent about
          how we collect, use, and protect your personal information.
        </p>

        {/* 5. Scroll Down Icon */}
        <div className="flex justify-center mt-10">
            <div className="p-3 bg-white rounded-full shadow-lg border border-slate-100 animate-bounce cursor-pointer flex items-center justify-center">
                <ChevronDown size={24} className="text-slate-400" />
            </div>
        </div>
      </div>

    </section>
  );
};

export default PrivacyHero;