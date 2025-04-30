import React from 'react';
import Image from 'next/image';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="w-full mt-auto flex flex-col px-[80px] py-10 bg-black border-t rounded-t-4xl border-[#221B20] text-white">
            <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
                
                {/* ซ้าย: โลโก้ */}
                <div className="flex flex-col items-center">
                    <Image
                        src="/Assets/Grouplogo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        className="rounded-full"
                    />
                    <h1 className="text-[40px] font-bold text-white mt-2">ZEnd</h1>
                    <span className="text-sm text-gray-400">Web Developer</span>
                </div>

                {/* กลาง: ข้อมูลติดต่อ */}
                <div className="flex flex-col gap-3 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                        <FaPhoneAlt className="text-red-500" />
                        <span>+66 95-643-3948</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaEnvelope className="text-red-500" />
                        <span>kittithat.dev@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-red-500" />
                        <span>Phitsanulok, Thailand</span>
                    </div>
                </div>

                {/* ขวา: โซเชียล */}
                <div className="flex flex-col items-center gap-3">
                    <span className="text-white font-semibold">Follow Me</span>
                    <div className="flex gap-4 text-lg">
                        <a href="https://www.facebook.com/om.small.1/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="hover:text-blue-500 transition" />
                        </a>
                        <a href="https://www.instagram.com/om.zend/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="hover:text-blue-500 transition" />
                        </a>
                        <a href="https://github.com/zendlll66" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="hover:text-gray-400 transition" />
                        </a>
                        <a href="https://www.linkedin.com/in/%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%B4%E0%B8%98%E0%B8%B1%E0%B8%8A-%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%A1-291362359/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="hover:text-blue-400 transition" />
                        </a>
                    </div>
                </div>
            </div>

            {/* ล่าง */}
            <div className='mt-10 text-center text-xs text-gray-500'>
                <span>© 2025 ZEnd. All rights reserved.</span>
            </div>
        </div>
    );
};

export default Footer;
