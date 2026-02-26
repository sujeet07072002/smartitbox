import React from 'react';
import { ChevronDown } from 'lucide-react'; // 'npm install lucide-react' karein icons ke liye

const CareersHero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-12 overflow-hidden bg-[#f8f9fa]">
      
      {/* Background Tech Pattern (Hexagons & Lines) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 15 L60 45 L30 60 L0 45 L0 15 Z" fill="none" stroke="#cbd5e1" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="1.5" fill="#e2e8f0" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-pattern)" />
        </svg>
        {/* Soft Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] -ml-48 -mb-48 opacity-50"></div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* 1. Breadcrumb */}
        <nav className="flex items-center justify-center space-x-2 text-sm font-medium text-slate-500 mb-6">
          <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
          <span className="text-slate-400">/</span>
          <span className="text-slate-900 font-bold">Careers</span>
        </nav>

        {/* 2. Badge */}
        <div className="inline-flex items-center bg-[#fffbeb] border border-[#fef3c7] rounded-full px-5 py-2 mb-8 shadow-sm">
          <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2.5"></span>
          <span className="text-sm font-bold text-[#92400e]">Careers</span>
        </div>

        {/* 3. Main Heading */}
        <h1 className="flex flex-col gap-3 mb-8">
          <span className="text-5xl md:text-7xl font-extrabold text-[#1e293b] tracking-tight">
            Join Our Team
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[#fbbf24] via-[#f97316] to-[#ea580c] bg-clip-text text-transparent tracking-tight leading-tight">
            Build the Future of Automation
          </span>
        </h1>

        {/* 4. Sub-text */}
        <p className="max-w-3xl mx-auto text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed mb-12 px-4">
          Work with passionate innovators creating cutting-edge automation
          solutions. Grow your career while transforming businesses worldwide.
        </p>

        {/* 5. Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20">
          {/* Main CTA */}
          <button className="w-full sm:w-auto px-10 py-4 font-bold text-white bg-gradient-to-r from-[#fbbf24] to-[#f97316] rounded-full shadow-xl shadow-orange-100 hover:scale-105 transition-all duration-300 active:scale-95">
            View Open Positions
          </button>
          
          {/* Secondary Button */}
          <button className="w-full sm:w-auto px-10 py-4 font-bold text-[#92400e] bg-[#f1f5f9]/50 border-2 border-[#fbbf24] rounded-full hover:bg-orange-50 transition-all duration-300">
            Learn About Culture
          </button>
        </div>

        {/* 6. Bottom Scroll Icon */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <div className="p-3 bg-white rounded-full shadow-lg border border-slate-100 animate-bounce cursor-pointer flex items-center justify-center">
                <ChevronDown size={24} className="text-slate-400" />
            </div>
        </div>
      </div>

    </section>
  );
};

export default CareersHero;