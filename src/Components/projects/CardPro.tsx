'use client';

import React from 'react';


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

const CardPro: React.FC<CardProProps> = ({ image, title, description, techStack, role, links, onClick }) => {
  return (
    <div className="w-full max-w-sm rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-2xl"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <button
          onClick={onClick}
          className="block w-full text-center bg-[#FF3035] text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors duration-200"
        >
          ดูรายละเอียด
        </button>
      </div>
    </div>
  );
};

export default CardPro;
