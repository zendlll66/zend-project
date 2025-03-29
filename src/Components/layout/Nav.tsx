"use client";
import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 150;
      const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="flex flex-row text-white items-center justify-between h-[94px] border border-[#18151C] backdrop-blur-xl px-4 md:px-[80px] py-4 bg-[#090b0f]/40 font-mono fixed top-0 left-0 w-full z-50">
      <img 
        onClick={() => scrollToSection("home")} 
        src="Assets/Grouplogo.png" 
        className="w-[90px] h-[90px]" 
        alt="" 
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row space-x-10 px-[40px] py-[16px] rounded-[100px] border border-[#18151C] bg-white/3 backdrop-blur-sm text-[14px] cursor-pointer">
        <button onClick={() => scrollToSection("about")} className="cursor-pointer">About</button>
        <button onClick={() => scrollToSection("blog")} className="cursor-pointer">Blog</button>
        <button onClick={() => scrollToSection("projects")} className="cursor-pointer">Projects</button>
        <button onClick={() => scrollToSection("component")} className="cursor-pointer">Component</button>
        <button onClick={() => scrollToSection("contact")} className="cursor-pointer">Contact</button>
      </div>

      {/* Hamburger Button */}
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer z-50"
      >
        <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
        <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden absolute inset-0 bg-black h-screen  transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
          <button 
            onClick={() => scrollToSection("about")} 
            className="cursor-pointer hover:text-red-500 transition-colors duration-300"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("blog")} 
            className="cursor-pointer hover:text-red-500 transition-colors duration-300"
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection("projects")} 
            className="cursor-pointer hover:text-red-500 transition-colors duration-300"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("component")} 
            className="cursor-pointer hover:text-red-500 transition-colors duration-300"
          >
            Component
          </button>
          <button 
            onClick={() => scrollToSection("contact")} 
            className="cursor-pointer hover:text-red-500 transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </div>

      <button 
        onClick={() => scrollToSection("other")} 
        className="hidden md:block cursor-pointer"
      >
        Other
      </button>
    </nav>
  );
};

export default Nav;