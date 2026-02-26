import React from 'react';

const AboutPage = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 py-20 overflow-hidden bg-slate-50">
      
      {/* Background Decorative Pattern (Subtle Technical Grid/Dots) */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-slate-200" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Abstract Hexagons (similar to image) */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-slate-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 border border-slate-200 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center space-x-2 text-sm font-medium text-slate-500 mb-8">
          <a href="/" className="hover:text-slate-800 transition-colors">Home</a>
          <span>/</span>
          <span className="text-slate-900 font-bold">About</span>
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
          <span className="text-sm font-semibold text-orange-700">About Our Company</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
          Building the Future of <br />
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Business Automation
          </span>
        </h1>

        {/* Description Text */}
        <p className="max-w-3xl mx-auto text-slate-600 text-base md:text-lg lg:text-xl leading-relaxed mb-10 px-4">
          We are passionate about helping businesses work smarter, not harder. Our
          team of experts combines technical expertise with business understanding
          to deliver transformative solutions.
        </p>

        {/* CTA Button */}
        <button className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full hover:shadow-lg hover:shadow-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 active:scale-95">
          Meet Our Team
        </button>
      </div>

    </section>
  );
};

export default AboutPage;