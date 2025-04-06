import React from 'react';
import Image from 'next/image';
const SectionHero = () => {
    return (
        <div className='flex items-center justify-center flex-col text-center px-4'>
            {/* โลโก้ */}
            
            <Image
                src="/Assets/Grouplogo.png"
                alt="Logo"
                width={200}
                height={200}
                className="rounded-full"
            />
            {/* หัวข้อ */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white my-4 animate__animated animate__fadeIn animate__delay-1s">
                Web Developer
            </h1>

            {/* คำอธิบาย */}
            <p className="text-[#A7A7A7] text-base sm:text-lg mt-4 w-full max-w-[700px] animate__animated animate__fadeIn animate__delay-2s">
                I am a web developer skilled in both Frontend and Backend, passionate about creating full-stack websites with a focus on efficient design and user experience.
            </p>
        </div>
    );
};

export default SectionHero;
