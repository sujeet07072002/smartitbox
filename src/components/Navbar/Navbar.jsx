import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ArrowRight,
  Layers,
  ShieldCheck,
  Zap,
  MessageSquare,
  Rocket,
  Code,
  Users,
  Settings,
  Headphones,
  FlaskConical,
  BarChart,
  Smartphone,
  Building2,
  Award,
  FileText,
  Shield,
  Scale,
  Phone,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const productData = [
    {
      title: "TeamFlow",
      desc: "Intelligent Task Delegation system.",
      icon: <Layers className="text-orange-500" />,
    },
    {
      title: "SmartCA",
      desc: "Solution for GST & Bank Processing.",
      icon: <ShieldCheck className="text-orange-500" />,
    },
    {
      title: "FieldOps",
      desc: "Field Sales Automation Platform.",
      icon: <Zap className="text-orange-500" />,
    },
    {
      title: "WA Sender",
      desc: "Automate Your WhatsApp Messaging.",
      icon: <MessageSquare className="text-orange-500" />,
    },
  ];

  const servicesData = [
    {
      title: "Custom Software",
      desc: "Tailored software solutions.",
      icon: <Code className="text-orange-500" />,
      points: ["Web Apps", "API Development"],
    },
    {
      title: "IT Consulting",
      desc: "Strategic technology advisory.",
      icon: <Users className="text-orange-500" />,
      points: ["Digital Strategy"],
    },
    {
      title: "DevOps",
      desc: "Streamline deployment cycles.",
      icon: <Settings className="text-orange-500" />,
      points: ["CI/CD Setup"],
    },
    {
      title: "24/7 Support",
      desc: "Proactive system maintenance.",
      icon: <Headphones className="text-orange-500" />,
      points: ["Monitoring"],
    },
    {
      title: "QA & Testing",
      desc: "Ensuring software reliability.",
      icon: <FlaskConical className="text-orange-500" />,
      points: [],
    },
    {
      title: "UI/UX Design",
      desc: "Enhancing user engagement.",
      icon: <BarChart className="text-orange-500" />,
      points: [],
    },
    {
      title: "Mobile Solutions",
      desc: "iOS and Android ecosystems.",
      icon: <Smartphone className="text-orange-500" />,
      points: [],
    },
  ];

  const companyData = [
    {
      title: "About Us",
      icon: <Building2 className="text-orange-500" size={20} />,
    },
    {
      title: "Our Team",
      icon: <Users className="text-orange-500" size={20} />,
    },
    { title: "Careers", icon: <Award className="text-orange-500" size={20} /> },
    {
      title: "Case Studies",
      icon: <FileText className="text-orange-500" size={20} />,
    },
    {
      title: "Blogs",
      icon: <MessageSquare className="text-orange-500" size={20} />,
    },
    {
      title: "Privacy Policy",
      icon: <Shield className="text-orange-500" size={20} />,
    },
    {
      title: "Terms of Service",
      icon: <Scale className="text-orange-500" size={20} />,
    },
    {
      title: "Contact Us",
      icon: <Phone className="text-orange-500" size={20} />,
    },
  ];

  const navLinks = [
    { name: "Certificate", href: "/certificate", type: "pill" },
    { name: "Products", href: "#", type: "mega-products" },
    { name: "Services", href: "#", type: "mega-services" },
    { name: "Company", href: "#", type: "mega-company" },
  ];

  const gradientBtn =
    "bg-gradient-to-r from-[#FFD200] to-[#F7941D] text-white shadow-md hover:shadow-lg transition-all duration-300";

  return (
    <nav className="bg-white sticky top-0 z-50 font-sans border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 bg-blue-900 rotate-45 rounded-sm"></div>
              <div className="absolute inset-1 bg-yellow-500 rotate-45 rounded-sm flex items-center justify-center">
                <span className="text-white text-[10px] -rotate-45 font-bold">
                  S
                </span>
              </div>
            </div>
            <div className="flex flex-col leading-none font-bold">
              <span className="text-2xl tracking-tighter text-[#1A2E5A]">
                SMART <span className="text-[#F7941D]">ITBOX</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] text-gray-400 uppercase">
                Make It Smart
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <button
                  className={`flex items-center px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                    link.type === "pill" || link.type?.startsWith("mega")
                      ? gradientBtn
                      : "text-gray-700 hover:text-orange-500"
                  }`}
                >
                  {link.name}
                  {link.type?.startsWith("mega") && (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  )}
                </button>

                {/* MEGA MENU: PRODUCTS */}
                {link.type === "mega-products" && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-0 pt-4 w-[900px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl flex overflow-hidden p-6 gap-6">
                      <div className="grid grid-cols-2 gap-4 flex-[2]">
                        {productData.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-all cursor-pointer"
                          >
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-3">
                              {item.icon}
                            </div>
                            <h4 className="font-bold text-[#1A2E5A] text-sm mb-1">
                              {item.title}
                            </h4>
                            <p className="text-[11px] text-gray-500 leading-relaxed mb-2">
                              {item.desc}
                            </p>
                            <span className="text-[10px] font-bold text-orange-500 flex items-center gap-1">
                              Learn more <ArrowRight size={10} />
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-[#FFD200] via-[#F7941D] to-[#4B5563] rounded-2xl p-6 text-white flex flex-col items-center text-center justify-center">
                        <Rocket size={30} className="mb-4" />
                        <h3 className="text-xl font-bold mb-2">
                          Innovation Lab
                        </h3>
                        <p className="text-[11px] opacity-90 mb-6">
                          AI-Powered solutions that scale.
                        </p>
                        <button className="bg-white text-orange-500 px-6 py-2 rounded-xl font-bold text-xs flex items-center gap-2">
                          Explore <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* MEGA MENU: SERVICES */}
                {link.type === "mega-services" && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-0 pt-4 w-[1100px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-8 grid grid-cols-4 gap-6 text-left">
                      {servicesData.map((service, idx) => (
                        <div key={idx} className="flex flex-col">
                          <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
                            {service.icon}
                          </div>
                          <h4 className="font-bold text-[#1A2E5A] text-base mb-2">
                            {service.title}
                          </h4>
                          <p className="text-xs text-gray-500 mb-4">
                            {service.desc}
                          </p>
                          <Link
                            to="#"
                            className="mt-auto text-xs font-bold text-orange-500 flex items-center gap-1"
                          >
                            Learn more <ArrowRight size={14} />
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* MEGA MENU: COMPANY */}
                {link.type === "mega-company" && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-0 pt-4 w-[1000px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl flex overflow-hidden p-6 gap-6">
                      <div className="grid grid-cols-3 gap-4 flex-[2.5]">
                        {companyData.map((item, idx) => (
                          <div
                            key={idx}
                            className="p-4 rounded-2xl border border-gray-50 hover:bg-gray-50 transition-all flex items-center gap-4 cursor-pointer"
                          >
                            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                              {item.icon}
                            </div>
                            <div className="flex flex-col">
                              <h4 className="font-bold text-[#1A2E5A] text-sm">
                                {item.title}
                              </h4>
                              <span className="text-[10px] font-bold text-orange-500 flex items-center gap-1">
                                Learn more <ArrowRight size={10} />
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-[#FFD200] via-[#F7941D] to-[#4B5563] rounded-2xl p-6 text-white flex flex-col items-center text-center justify-center">
                        <Sparkles size={24} className="mb-4" />
                        <h3 className="text-xl font-bold mb-2">Our Story</h3>
                        <button className="bg-white text-orange-500 px-6 py-2 rounded-xl font-bold text-xs flex items-center gap-2">
                          Read More <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-5">
            <Search size={20} className="text-gray-500 cursor-pointer" />
            <Link to="/login" className="text-gray-700 font-bold text-sm">
              Login
            </Link>
            <Link
              to="/signup"
              className={`flex items-center gap-2 px-7 py-3 rounded-full font-bold text-sm ${gradientBtn}`}
            >
              Talk to us <ArrowRight size={18} />
            </Link>
          </div>

          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
