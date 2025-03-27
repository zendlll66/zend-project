import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col justify-between items-center px-[80px]bg-[#090C12] h-[200px]  border-2 border-[#1A2334] text-white'>
            <div className='flex flex-row justify-between w-full p-[80px]'>
                <div>
                    Logo
                </div>
                <div className='flex flex-col items-center'>
                    <span>ZEnd</span>
                    <p>Software Development</p>
                </div>
            </div>
            
        </div>
    )
}

export default Footer