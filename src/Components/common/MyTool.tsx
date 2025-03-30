import React from 'react';

const MyTool = () => {
    return (
        <div className="flex justify-center items-start my-20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-5 text-[#D9D9D9] font-mono">
                {/* แถวที่ 1 มี 6 ไอคอน */}
                {[
                    { src: "Assets/htmlShadow.png", alt: "HTML" },
                    { src: "Assets/cssShadow.png", alt: "CSS" },
                    { src: "Assets/jsShadow.png", alt: "JavaScript" },
                    { src: "Assets/tsShadow.png", alt: "TypeScript" },
                    { src: "Assets/reactShadow.png", alt: "React" },
                    { src: "Assets/nextjsShadow.png", alt: "Next.js" },
                    { src: "Assets/tailwindShadow.png", alt: "Tailwind CSS" },
                    { src: "Assets/mysqlShadow.png", alt: "MySQL" },
                    { src: "Assets/nodeShadow.png", alt: "Node.js" },
                    { src: "Assets/splineShadow.png", alt: "Spine Design" },
                    { src: "Assets/figmaShadow.png", alt: "Figma" },
                    { src: "Assets/psShadow.png", alt: "Adobe Photoshop" },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col justify-center items-center bg-black/80 backdrop-blur-sm p-4 rounded-lg w-[200px] h-[200px] border border-[#ffffff]/20 hover:bg-[#221B20]/50 transition-all duration-300 ease-in-out">
                        <img src={item.src} className="h-[80px] w-[80px]" alt={item.alt} />
                        <span className="mt-2 text-sm">{item.alt}</span>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default MyTool;
