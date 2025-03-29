import React from 'react'

const Footer = () => {
    return (
        <div className="w-full mt-auto flex flex-col px-[80px] h-full bg-black border-t border-[#221B20] text-white">
            <div className='flex-col items-center '>
                <div className="flex flex-rows justify-between h-full px-10 ">
                    <div className='flex flex-row items-center w-full py-15'>
                        {/* ซ้าย */}
                        <div className="flex flex-col items-center">
                            <img src="Assets/Grouplogo.png" className="w-[200px]" alt="Logo" />
                            <h1 className="text-[50px] font-bold text-white text-center">ZEnd</h1>
                        </div>

                        {/* เส้นแบ่ง */}
                        <div className="h-full w-[2px] bg-[#FF3035] mx-5 rounded-2xl "></div>
                    </div>


                    {/* ขวา */}
                    <div className="flex flex-col items-center justify-center w-full py-15">
                        <span>ZEnd</span>
                        <span>Software Development</span>
                    </div>
                </div>
                {/* ล่าง */}
                <div className='flex justify-center  items-center p-2'>
                    <span>© 2025 ZEnd. All rights reserved.</span>
                </div>
            </div>


        </div>
    );
};
export default Footer