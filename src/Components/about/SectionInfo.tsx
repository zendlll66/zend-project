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
        "⚛️ Frontend: React, Next.js, Tailwind CSS",
        "🛠️ Backend: Node.js, MySQL, TiDB, DBeaver",
        "🎨 Design/UI: Figma, Photoshop",
      ],
      icon: "🛠️",
    },
    {
      title: "My Experience",
      content: [
        "💻 Front-end Developer and UX/UI Intern at Devsmith",
        "📅 Duration: April 1, 2024 – June 14, 2024",
        "🔧 Worked on Front-end and UX/UI for the Bus Tracking website project for Naresuan University",
      ],
      icon: "💼",
    },
    {
      title: "My Education",
      content: [
        "🎓 Bachelor’s Degree in Computer Engineering from Naresuan University",
        "📅 Graduation Year: 2025",
        
      ],
      icon: "📚",
    },
    {
      title: "My Interests",
      content: [
        "🎨 UI/UX Design",
        "💻 Full-stack Development",
        "🚀 Front-end Development",
      ],
      icon: "📚",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true, // เลื่อนครั้งเดียวแล้วหยุด
    });
  }, []);

  return (
    <div className="w-full max-w-[1260px] bg-[#090b0f]/40 backdrop-blur-xl border border-[#221B20] rounded-[20px] flex flex-col mb-[100px] px-4 sm:px-8 md:px-16 py-12 text-[#D9D9D9] font-mono">

      {/* Icon */}
      <div data-aos="fade-up" className="flex justify-center items-center mt-5">
        <Myicon text = {"About"}/>
      </div>

      {/* ชื่อ */}
      <h1 data-aos="fade-up" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mt-5 mb-5">
        Kittithat Chankhom
      </h1>

      {/* คำอธิบาย */}
      <p data-aos="fade-up" className="text-center text-sm sm:text-base max-w-[900px] mx-auto mb-8">
        I am a passionate Front-end Developer and UX/UI Designer with expertise in React, Next.js, and Tailwind CSS. I am currently working towards becoming a Full-stack Developer, capable of handling both Front-end and Back-end development. I have experience in web development and am always excited to learn new technologies and improve my skills.
      </p>


      {/* กล่องข้อมูล */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-8">
        {infoData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-6 bg-[#06060a]/60 rounded-[10px] w-full lg:max-w-[500px] h-auto min-h-[300px] border border-[#221B20] hover:bg-[#221B20]/50 transition-all duration-300 ease-in-out md:mx-auto"
            data-aos="fade-up"
          >
            <span className="text-4xl">{item.icon}</span>
            <h2 className="text-xl font-semibold mt-4 text-[#D9D9D9]">{item.title}</h2>
            <ul className="mt-2 text-sm text-[#D9D9D9] space-y-2">
              {item.content.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ข้อความเพิ่มเติม */}
      <h1 className="mt-10 text-center text-sm sm:text-base text-[#D9D9D9]">
        Passionate about innovation and learning new technologies.
      </h1>
    </div>
  );
};

export default SectionInfo;
