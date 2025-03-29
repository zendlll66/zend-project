import React from 'react'

const MyTool = () => {
    return (
        <div>
            {/* bg-[#090b0f]/40 backdrop-blur-sm  border-1 border-[#221B20] */}
            <div className='w-full p-5  flex flex-row  text-[#D9D9D9] font-mono  justify-center items-center  '>
                <img src="Assets/htmlShadow.png" className="h-[100px] w-[100px]  " alt="HTML" />
                <img src="Assets/cssShadow.png" className="h-[100px] w-[100px] " alt="CSS" />
                <img src="Assets/jsShadow.png" className="h-[100px] w-[100px]" alt="JavaScript" />
                <img src="Assets/tsShadow.png" className="h-[100px] w-[100px] " alt="TypeScript" />
                <img src="Assets/reactShadow.png" className="h-[100px] w-[100px] " alt="React" />
                <img src="Assets/nextjsShadow.png" className="h-[100px] w-[100px] " alt="Next.js" />
                <img src="Assets/tailwindShadow.png" className="h-[100px] w-[100px]" alt="Tailwind CSS" />
                <img src="Assets/mysqlShadow.png" className="h-[100px] w-[100px]" alt="MySQL" />
                <img src="Assets/nodeShadow.png" className="h-[100px] w-[100px]" alt="Node.js" />
            </div>
        </div>
    )
}

export default MyTool