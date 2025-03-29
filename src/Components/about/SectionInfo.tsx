import React from "react";
import Myicon from "../common/Myicon";

const SectionInfo = () => {
  return (
    <div className="w-full max-w-[1260px] bg-[#090b0f]/40 backdrop-blur-sm border border-[#221B20] rounded-[20px] flex flex-col mb-[100px] px-4 sm:px-8 md:px-16 py-12 text-[#D9D9D9] font-mono">
      
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
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 mt-8">
        {["box01", "box02", "box03"].map((box, index) => (
          <div
            key={index}
            className="flex flex-col p-4 bg-[#06060ae0] rounded-[10px] sm:w-full lg:max-w-[372px] h-auto min-h-[300px] border border-[#221B20] hover:bg-[#221B20]/50 transition-all duration-300 ease-in-out md:mx-auto"
          >
            {box}
          </div>
        ))}
      </div>

      {/* ข้อความเพิ่มเติม */}
      <h1 className="mt-10 text-center text-sm sm:text-base">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati tempore nam, dicta minus inventore voluptates! Nulla sunt ea voluptas totam.
      </h1>

    </div>
  );
};

export default SectionInfo;
