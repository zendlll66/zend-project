import React from 'react'

const ProjectInfo = () => {
    return (
        <div className='w-[1260px] h-[800px] bg-[#090b0f]/40 backdrop-blur-sm  border-1 border-[#221B20] rounded-[20px] flex flex-col px-[64px] py-[48px] text-[#D9D9D9] font-mono'>
            <h1 className='text-[50px] font-bold text-white text-center mt-[20px] mb-[20px]'>
                Kittithat Chankhom
            </h1>
            <div className='flex flex-row justify-center items-center mt-[20px] space-x-2'>
                <div className='flex flex-col mt-[20px] p-4 bg-[#090b0f] rounded-[10px] w-[372px] h-[492px] border-1 border-[#221B20] hover:bg-[#221B20]/50 transition-all duration-300 ease-in-out'>
                    box01
                </div>
                <div className='flex flex-col mt-[20px] p-4 bg-[#090b0f] rounded-[10px] w-[372px] h-[492px] border-1 border-[#221B20] hover:bg-[#221B20]/50 transition-all duration-300 ease-in-out'>
                    box02
                </div>
                <div className='flex flex-col mt-[20px] p-4 bg-[#090b0f] rounded-[10px] w-[372px] h-[492px] border-1 border-[#221B20] hover:bg-[#221B20]/50 transition-all duration-300 ease-in-out'>
                    box03
                </div>
            </div>
        </div>
    )
}

export default ProjectInfo