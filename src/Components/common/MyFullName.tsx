import React from 'react'

const MyFullName = () => {
    return (
        <div>
            <div className="flex flex-row text-[12px] font-bold text-center items-center space-x-3 text-white  p-3 rounded-2xl bg-[#161616]">
                <div className=''>
                    <img src="Assets/Grouplogo.png" className = "w-[30px]" alt="" />
                </div>
                <span>
                    KITTITHAT CHANKHOM
                </span>
            </div>
        </div>
    )
}

export default MyFullName