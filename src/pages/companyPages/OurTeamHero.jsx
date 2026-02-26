import React from 'react';
import { ChevronDown } from 'lucide-react'; // 'npm install lucide-react' zaroori hai icons ke liye

const OurTeamHero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-[#f9fafb]">
      
      {/* Background Decorative Pattern (Subtle Circuit/Hexagon effect) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="50" height="43.3" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="#e5e7eb" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
        {/* Subtle blur circles to match the image depth */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-slate-200 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-50 rounded-full blur-[120px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        
        {/* 1. Breadcrumb */}
        <nav className="flex items-center justify-center space-x-2 text-sm font-medium text-slate-500 mb-6">
          <a href="/" className="hover:text-slate-800 transition-colors">Home</a>
          <span>/</span>
          <span className="text-[#1e293b] font-bold">Our Team</span>
        </nav>

        {/* 2. Badge */}
        <div className="inline-flex items-center bg-[#fff7ed] border border-[#ffedd5] rounded-full px-5 py-2 mb-8 shadow-sm">
          <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2"></span>
          <span className="text-sm font-bold text-[#9a3412]">Our Team</span>
        </div>

        {/* 3. Main Heading */}
        <h1 className="flex flex-col gap-2 mb-6">
          <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#0f172a] tracking-tight">
            Meet Our Experts
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent tracking-tight">
            The People Behind Your Success
          </span>
        </h1>

        {/* 4. Description Text */}
        <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed mb-12 px-2">
          A passionate team of developers, designers, and automation specialists
          dedicated to transforming your business processes and driving digital
          innovation.
        </p>

        {/* 5. Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          {/* Join Our Team Button */}
          <button className="w-full sm:w-auto px-10 py-4 font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-orange-200 hover:scale-105 transition-transform duration-200">
            Join Our Team
          </button>
          
          {/* Contact Us Button */}
          <button className="w-full sm:w-auto px-10 py-4 font-bold text-[#9a3412] bg-white border-2 border-yellow-400 rounded-full hover:bg-orange-50 transition-colors duration-200">
            Contact Us
          </button>
        </div>

        {/* 6. Scroll Down Arrow */}
        <div className="flex justify-center">
            <div className="p-3 bg-white rounded-full shadow-md border border-slate-100 animate-bounce cursor-pointer">
                <ChevronDown size={24} className="text-slate-400" />
            </div>
        </div>
      </div>

    </section>
  );
};

export default OurTeamHero;