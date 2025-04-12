import React from 'react'
import Image from 'next/image';
const MyFullName = () => {
    return (
        <div>
            <div className="flex flex-row text-[12px] font-bold text-center items-center space-x-3 text-white  p-3 rounded-2xl bg-[#161616]">
                <div className=''>
                    <Image
                        src="/Assets/Grouplogo.png"
                        alt="Facebook"
                        width={30}
                        height={30}
                        className="rounded-full"
                    />
                </div>
                <span>
                    KITTITHAT CHANKHOM
                </span>
            </div>
        </div>
    )
}

export default MyFullName