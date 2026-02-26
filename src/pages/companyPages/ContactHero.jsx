import React from 'react';
import { ChevronDown } from 'lucide-react'; // 'npm install lucide-react' zaroori hai

const ContactHero = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-16 overflow-hidden bg-white">
      
      {/* Background Subtle Tech Pattern (Consistency with other pages) */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
        {/* Soft Decorative Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-50 rounded-full blur-[100px] opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-[100px] opacity-40"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* 1. Breadcrumb */}
        <nav className="flex items-center justify-center space-x-2 text-sm font-medium text-slate-500 mb-8">
          <a href="/" className="hover:text-slate-900 transition-colors">Home</a>
          <span className="text-slate-400">/</span>
          <span className="text-[#0f172a] font-bold">Contact</span>
        </nav>

        {/* 2. Badge */}
        <div className="inline-flex items-center bg-[#fffbeb] border border-[#fef3c7] rounded-full px-5 py-2 mb-10 shadow-sm">
          <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full mr-2.5"></span>
          <span className="text-sm font-bold text-[#92400e]">Get in Touch</span>
        </div>

        {/* 3. Main Heading */}
        <h1 className="flex flex-col gap-2 mb-8">
          <span className="text-5xl md:text-7xl font-extrabold text-[#1e293b] tracking-tight">
            Contact Us
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent tracking-tight leading-tight">
            Let's Start Your Project
          </span>
        </h1>

        {/* 4. Sub-heading / Description */}
        <p className="max-w-2xl mx-auto text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed mb-12 px-2 font-medium">
          Ready to transform your business with automation? Reach out to our team
          for a free consultation and discover how we can help you achieve your goals.
        </p>

        {/* 5. CTA Button */}
        <div className="flex justify-center mb-20">
          <button className="px-12 py-4 font-extrabold text-white text-lg bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-2xl shadow-orange-200 hover:scale-105 transition-all duration-300 active:scale-95">
            Schedule a Call
          </button>
        </div>

        {/* 6. Scroll Down Arrow Icon */}
        <div className="flex justify-center">
            <div className="p-3 bg-white rounded-full shadow-lg border border-slate-100 animate-bounce cursor-pointer flex items-center justify-center">
                <ChevronDown size={24} className="text-slate-400" />
            </div>
        </div>
      </div>

    </section>
  );
};

export default ContactHero;