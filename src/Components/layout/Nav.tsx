"use client";
import React from "react";

const Nav = () => {
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          const offset = 150; // ✅ ปรับ Offset (ค่าลบเลื่อนขึ้น, ค่าบวกเลื่อนลง)
          const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    
          window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
      };

    return (
        <nav className="flex flex-row text-white items-center justify-between h-[94px] border border-[#18151C] backdrop-blur-xl px-[80px] py-4 bg-[#090b0f]/40 font-mono fixed top-0 left-0 w-full z-50">
            <img onClick={() => scrollToSection("home")} src="Assets/Grouplogo.png" className="w-[90px] h-[90px]" alt="" />
            {/* เมนูแบบปุ่ม */}
            <div className="flex flex-row space-x-10 px-[40px] py-[16px] rounded-[100px] border border-[#18151C] bg-white/3 backdrop-blur-sm text-[14px] cursor-pointer ">
                <button onClick={() => scrollToSection("about")} className=" cursor-pointer">About</button>
                <button onClick={() => scrollToSection("blog")} className=" cursor-pointer">Blog</button>
                <button onClick={() => scrollToSection("projects")} className=" cursor-pointer">Projects</button>
                <button onClick={() => scrollToSection("component")} className=" cursor-pointer">Component</button>
                <button onClick={() => scrollToSection("contact")} className=" cursor-pointer">Contact</button>
            </div>
            <button onClick={() => scrollToSection("other")} className=" cursor-pointer">Other</button>
        </nav>
    );
};

export default Nav;
