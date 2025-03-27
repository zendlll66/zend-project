import React from 'react'

const Nav = () => {
    return (
        <div>
            <nav className='fixed flex flex-row text-white items-center justify-center h-[94px] border-1 border-[#18151C]  backdrop-blur-sm md:w-full px-[80px] py-4 bg-[#090C12]/60 '>
                {/* <p className='text-2xl font-bold  border-2 border-red-500'>Dev Blog</p> */}
                <div className='flex flex-row space-x-10 px-[40px] py-[16px] rounded-[100px] border-1 border-[#18151C] bg-white/3 backdrop-blur-sm text-[14px]'>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/blog">Blog</a>
                    <a href="/projects">Projects</a>
                    <a href="/contact">Contact</a>
                </div>
                <div>
                </div>
            </nav>
        </div>
    )
}

export default Nav