'use client';

import React from 'react';
import Image from 'next/image';

interface CardProProps {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  role: string;
  links: {
    demo: string;
    github: string;
  };
  onClick: () => void; // เพิ่ม onClick สำหรับเปิด Modal
}

const CardPro: React.FC<CardProProps> = ({ image, title, onClick }) => {
  return (
    <div className="flex flex-col w-full max-w-sm rounded-2xl items-center shadow-md overflow-hidden hover:scale-105  transition-transform duration-300 "> 
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className=" object-cover  w-[300px] h-[200px] rounded-2xl"
      />
      <div className="p-4 justify-center flex flex-col  w-full items-center ">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <button
          onClick={onClick}
          className="block w-full text-center  bg-[#FF3035] text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default CardPro;
