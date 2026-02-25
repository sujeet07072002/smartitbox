import React, { useState } from "react";
import {
  Menu, X, ChevronDown, Search, ArrowRight, Layers, ShieldCheck, Zap,
  MessageSquare, Rocket, Code, Users, Settings, Headphones, FlaskConical,
  BarChart, Smartphone, Building2, Award, FileText, Shield, Scale, Phone, Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null); // Mobile accordion state

  const toggleMobileAccordion = (menu) => {
    setActiveMobileMenu(activeMobileMenu === menu ? null : menu);
  };

  const productData = [
    { title: "TeamFlow", desc: "Intelligent Task Delegation system.", icon: <Layers className="text-orange-500" /> },
    { title: "SmartCA", desc: "Solution for GST & Bank Processing.", icon: <ShieldCheck className="text-orange-500" /> },
    { title: "FieldOps", desc: "Field Sales Automation Platform.", icon: <Zap className="text-orange-500" /> },
    { title: "WA Sender", desc: "Automate Your WhatsApp Messaging.", icon: <MessageSquare className="text-orange-500" /> },
  ];

  const servicesData = [
    { title: "Custom Software", icon: <Code className="text-orange-500" /> },
    { title: "IT Consulting", icon: <Users className="text-orange-500" /> },
    { title: "DevOps", icon: <Settings className="text-orange-500" /> },
    { title: "24/7 Support", icon: <Headphones className="text-orange-500" /> },
    { title: "QA & Testing", icon: <FlaskConical className="text-orange-500" /> },
    { title: "UI/UX Design", icon: <BarChart className="text-orange-500" /> },
    { title: "Mobile Solutions", icon: <Smartphone className="text-orange-500" /> },
  ];

  const companyData = [
    { title: "About Us", icon: <Building2 className="text-orange-500" size={20} /> },
    { title: "Our Team", icon: <Users className="text-orange-500" size={20} /> },
    { title: "Careers", icon: <Award className="text-orange-500" size={20} /> },
    { title: "Contact Us", icon: <Phone className="text-orange-500" size={20} /> },
  ];

  const navLinks = [
    { name: "Certificate", href: "/certificate", type: "pill" },
    { name: "Products", type: "mega-products" },
    { name: "Services", type: "mega-services" },
    { name: "Company", type: "mega-company" },
  ];

  const gradientBtn = "bg-gradient-to-r from-[#FFD200] to-[#F7941D] text-white shadow-md hover:shadow-lg transition-all duration-300";

  return (
    <nav className="bg-white sticky top-0 z-50 font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 lg:h-24">
          
          {/* 1. LOGO */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 lg:w-10 lg:h-10 relative">
              <div className="absolute inset-0 bg-blue-900 rotate-45 rounded-sm"></div>
              <div className="absolute inset-1 bg-yellow-500 rotate-45 rounded-sm flex items-center justify-center">
                <span className="text-white text-[10px] -rotate-45 font-bold">S</span>
              </div>
            </div>
            <div className="flex flex-col leading-none font-bold">
              <span className="text-xl lg:text-2xl tracking-tighter text-[#1A2E5A]">
                SMART <span className="text-[#F7941D]">ITBOX</span>
              </span>
              <span className="text-[9px] lg:text-[10px] tracking-[0.2em] text-gray-400 uppercase">Make It Smart</span>
            </div>
          </Link>

          {/* 2. DESKTOP MENU */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button className={`flex items-center px-6 py-2.5 rounded-full font-bold text-sm transition-all ${link.type === "pill" || link.type?.startsWith("mega") ? gradientBtn : "text-gray-700 hover:text-orange-500"}`}>
                  {link.name}
                  {link.type?.startsWith("mega") && <ChevronDown className="ml-1 w-4 h-4" />}
                </button>

                {/* MEGA MENUS (Same as your code) */}
                {link.type === "mega-products" && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-0 pt-4 w-[900px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl flex overflow-hidden p-6 gap-6">
                      <div className="grid grid-cols-2 gap-4 flex-[2]">
                        {productData.map((item, idx) => (
                          <div key={idx} className="p-4 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-all cursor-pointer">
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-3">{item.icon}</div>
                            <h4 className="font-bold text-[#1A2E5A] text-sm mb-1">{item.title}</h4>
                            <p className="text-[11px] text-gray-500 leading-relaxed mb-2">{item.desc}</p>
                            <span className="text-[10px] font-bold text-orange-500 flex items-center gap-1">Learn more <ArrowRight size={10} /></span>
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-[#FFD200] via-[#F7941D] to-[#4B5563] rounded-2xl p-6 text-white flex flex-col items-center text-center justify-center">
                        <Rocket size={30} className="mb-4" />
                        <h3 className="text-xl font-bold mb-2 text-white">Innovation Lab</h3>
                        <button className="bg-white text-orange-500 px-6 py-2 rounded-xl font-bold text-xs flex items-center gap-2">Explore <ArrowRight size={14}/></button>
                      </div>
                    </div>
                  </div>
                )}
                {/* Add Services/Company Mega Menus here as well... */}
              </div>
            ))}
          </div>

          {/* 3. DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center space-x-5">
            <Search size={20} className="text-gray-500 cursor-pointer" />
            <Link to="/login" className="text-gray-700 font-bold text-sm">Login</Link>
            <Link to="/signup" className={`flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm ${gradientBtn}`}>
              Talk to us <ArrowRight size={18} />
            </Link>
          </div>

          {/* 4. MOBILE HAMBURGER BUTTON */}
          <button className="lg:hidden p-2 text-[#1A2E5A]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* 5. MOBILE OVERLAY MENU (FIXED) */}
      <div className={`lg:hidden fixed inset-0 z-[60] bg-white transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full overflow-y-auto">
          
          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 h-20 border-b">
             <span className="text-xl font-black text-[#1A2E5A]">SMART <span className="text-[#F7941D]">ITBOX</span></span>
             <button onClick={() => setIsOpen(false)} className="p-2"><X size={30} /></button>
          </div>

          {/* Mobile Links */}
          <div className="flex-1 px-6 py-6 space-y-2">
            
            {/* Simple Link */}
            <Link to="/certificate" onClick={() => setIsOpen(false)} className={`block w-full py-4 px-6 rounded-2xl font-bold text-lg mb-4 text-center ${gradientBtn}`}>
              Certificate
            </Link>

            {/* Products Accordion */}
            <div className="border-b border-gray-100 pb-2">
              <button onClick={() => toggleMobileAccordion('products')} className="flex items-center justify-between w-full py-4 text-xl font-bold text-[#1A2E5A]">
                Products <ChevronDown className={`transition-transform ${activeMobileMenu === 'products' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileMenu === 'products' && (
                <div className="grid grid-cols-1 gap-4 py-2 animate-in fade-in duration-300">
                  {productData.map((p, i) => (
                    <Link key={i} to="#" className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">{p.icon}</div>
                      <span className="font-bold text-gray-700">{p.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Services Accordion */}
            <div className="border-b border-gray-100 pb-2">
              <button onClick={() => toggleMobileAccordion('services')} className="flex items-center justify-between w-full py-4 text-xl font-bold text-[#1A2E5A]">
                Services <ChevronDown className={`transition-transform ${activeMobileMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileMenu === 'services' && (
                <div className="grid grid-cols-1 gap-3 py-2">
                   {servicesData.map((s, i) => (
                    <Link key={i} to="#" className="flex items-center gap-4 p-3 font-medium text-gray-600">
                      {s.icon} <span>{s.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Accordion */}
            <div className="border-b border-gray-100 pb-2">
              <button onClick={() => toggleMobileAccordion('company')} className="flex items-center justify-between w-full py-4 text-xl font-bold text-[#1A2E5A]">
                Company <ChevronDown className={`transition-transform ${activeMobileMenu === 'company' ? 'rotate-180' : ''}`} />
              </button>
              {activeMobileMenu === 'company' && (
                <div className="grid grid-cols-2 gap-4 py-2">
                   {companyData.map((c, i) => (
                    <Link key={i} to="#" className="text-sm font-bold text-gray-600 hover:text-orange-500 transition-colors">
                       {c.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Auth Buttons */}
          <div className="px-6 py-8 bg-gray-50 space-y-4">
             <Link to="/login" onClick={() => setIsOpen(false)} className="block w-full text-center py-4 font-bold text-[#1A2E5A] border-2 border-gray-200 rounded-2xl">
               Login
             </Link>
             <Link to="/signup" onClick={() => setIsOpen(false)} className={`block w-full text-center py-4 font-bold rounded-2xl ${gradientBtn}`}>
               Talk to us
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;