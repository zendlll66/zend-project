'use client';

import React, { useEffect } from "react";   
import Myicon from "../common/Myicon";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionInfo = () => {
  const infoData = [
    {
      title: "My Skills",
      content: [
        "🚀 Frontend: React, Next.js, Tailwind CSS",
        "⚙️ Backend: Node.js, Express.js",
        "💾 Database: MySQL",
      ],
      icon: "🛠️",
    },
    {
      title: "My Experience",
      content: [
        "💻 Software Developer - 3+ Years",
        "🔥 Freelance Web Developer",
        "🌍 Worked on global projects",
      ],
      icon: "💼",
    },
    {
      title: "My Interests",
      content: [
        "🎨 UI/UX Design",
        "🤖 AI & Machine Learning",
        "🎮 Game Development",
      ],
      icon: "📚",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // เลื่อนครั้งเดียวแล้วหยุด
    });
  }, []);

  return (
    <div className="w-full max-w-[1260px] bg-[#090b0f]/40 backdrop-blur-xl border border-[#221B20] rounded-[20px] flex flex-col mb-[100px] px-4 sm:px-8 md:px-16 py-12 text-[#D9D9D9] font-mono">
      {/* Icon */}
      <div className="flex justify-center items-center mt-5">
        <Myicon />
      </div>

      {/* ชื่อ */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mt-5 mb-5">
        Kittithat Chankhom
      </h1>

      {/* คำอธิบาย */}
      <p className="text-center text-sm sm:text-base max-w-[900px] mx-auto">
        I am a software engineer with a passion for creating innovative solutions. I have experience in web development, mobile app development, and cloud computing. I am always eager to learn new technologies and improve my skills.
      </p>

      {/* กล่องข้อมูล */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8">
        {infoData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-[#06060a]/60 rounded-[10px] sm:w-full lg:max-w-[372px] h-auto min-h-[300px] border border-[#221B20] hover:bg-[#221B20]/50 transition-all duration-300 ease-in-out md:mx-auto"
            data-aos="fade-up"
          >
            <span className="text-4xl">{item.icon}</span>
            <h2 className="text-lg font-bold mt-3">{item.title}</h2>
            <ul className="mt-2 text-center text-sm space-y-1">
              {item.content.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ข้อความเพิ่มเติม */}
      <h1 className="mt-10 text-center text-sm sm:text-base">
        Passionate about innovation and learning new technologies.
      </h1>
    </div>
  );
};

export default SectionInfo;
