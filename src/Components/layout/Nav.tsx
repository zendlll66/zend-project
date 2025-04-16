"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useRouter(); // ใช้เพื่อตรวจสอบ path ปัจจุบัน

    const handleNavigation = (id: string) => {
        if (window.location.pathname === "/") {
            scrollToSection(id);
        } else {
            // เปลี่ยนหน้า และรอให้โหลดเสร็จก่อน scroll
            router.push(`/#${id}`);

            // Listen เมื่อโหลดเสร็จ
            const handleRouteChange = () => {
                scrollToSection(id);
                // ยกเลิก listener หลังเรียกครั้งเดียว
                window.removeEventListener("load", handleRouteChange);
            };

            // รอให้หน้าใหม่โหลดก่อน scroll
            window.addEventListener("load", handleRouteChange);
        }
        setIsMenuOpen(false);
    };


    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            const offset = 150;
            const topPosition = section.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };

    return (
        <nav className="flex flex-row text-white items-center justify-between h-[94px] border border-[#18151C] backdrop-blur-xl px-4 md:px-[80px] py-4 bg-[#090b0f]/40 font-mono fixed top-0 left-0 w-full z-50">
            <Link href="/">
                <Image
                    src="/Assets/Grouplogo.png"
                    alt="Logo"
                    width={90}
                    height={90}
                    className="rounded-full "
                />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex flex-row space-x-10 px-[40px] py-[16px] rounded-[100px] border border-[#18151C] bg-white/3 backdrop-blur-sm text-[14px] cursor-pointer">
                <button onClick={() => handleNavigation("about")} className="cursor-pointer">About</button>
                {/* <button onClick={() => handleNavigation("blog")} className="cursor-pointer">Blog</button> */}
                <button onClick={() => handleNavigation("projects")} className="cursor-pointer">Projects</button>
                <Link href="/mycomponent">
                    <button className="cursor-pointer">Component</button>
                </Link>
                <button onClick={() => handleNavigation("contact")} className="cursor-pointer">Contact</button>
            </div>
            <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hidden md:block border border-white/30 px-5 py-2 rounded-full text-sm hover:bg-white/10 transition"
            >
                Resume
            </a>

            {/* Hamburger Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer z-50"
                title="Toggle Menu"
            >
                <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
            </button>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute inset-0 bg-black h-screen transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-lg">
                    <button onClick={() => handleNavigation("about")} className="cursor-pointer hover:text-red-500 transition-colors duration-300">About</button>
                    {/* <button onClick={() => handleNavigation("blog")} className="cursor-pointer hover:text-red-500 transition-colors duration-300">Blog</button> */}
                    <button onClick={() => handleNavigation("projects")} className="cursor-pointer hover:text-red-500 transition-colors duration-300">Projects</button>
                    <Link href="/mycomponent">
                        <button className="cursor-pointer hover:text-red-500 transition-colors duration-300">Component</button>
                    </Link>
                    <button onClick={() => handleNavigation("contact")} className="cursor-pointer hover:text-red-500 transition-colors duration-300">Contact</button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
