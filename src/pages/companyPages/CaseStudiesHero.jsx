import React from 'react';
import { ChevronDown } from 'lucide-react'; // 'npm install lucide-react' zaroori hai

const CaseStudiesHero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070" 
          alt="Office background" 
          className="w-full h-full object-cover"
        />
        {/* White/Light Overlay to make text readable (bilkul image ki tarah) */}
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto text-center pt-20">
        
        {/* 1. Breadcrumb */}
        <nav className="flex items-center justify-center space-x-2 text-sm font-semibold text-slate-500 mb-8">
          <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
          <span>/</span>
          <span className="text-[#0f172a]">Case Studies</span>
        </nav>

        {/* 2. Badge */}
        <div className="inline-flex items-center bg-[#fffbeb] border border-[#fef3c7] rounded-full px-5 py-2 mb-10 shadow-sm">
          <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2.5"></span>
          <span className="text-sm font-bold text-[#92400e]">Case Studies & Success Stories</span>
        </div>

        {/* 3. Main Heading */}
        <h1 className="flex flex-col gap-2 mb-8">
          <span className="text-5xl md:text-7xl font-extrabold text-[#1e293b] tracking-tight">
            Real World Impact
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent tracking-tight">
            Client Success Stories
          </span>
        </h1>

        {/* 4. Description */}
        <p className="max-w-3xl mx-auto text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed mb-12 px-4">
          Explore how we've helped businesses transform their operations, increase
          efficiency, and drive growth through our automation solutions.
        </p>

        {/* 5. Buttons Group */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
          {/* Primary Action */}
          <button className="w-full sm:w-auto px-10 py-4 font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl shadow-orange-100 hover:scale-105 transition-all duration-300">
            View Our Work
          </button>
          
          {/* Secondary Action */}
          <button className="w-full sm:w-auto px-10 py-4 font-bold text-[#92400e] bg-transparent border-2 border-yellow-400 rounded-full hover:bg-white/50 transition-all duration-300">
            Contact Us
          </button>
        </div>

        {/* 6. Scroll Down Icon */}
        <div className="flex justify-center">
            <div className="p-3 bg-white rounded-full shadow-lg border border-slate-100 animate-bounce cursor-pointer flex items-center justify-center">
                <ChevronDown size={24} className="text-slate-400" />
            </div>
        </div>
      </div>

    </section>
  );
};

export default CaseStudiesHero;