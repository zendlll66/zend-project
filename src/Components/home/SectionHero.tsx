import React from 'react'

const SectionHero = () => {
    return (
        <div className='flex items-center justify-center flex-col '>

            <img src="Assets/Grouplogo.png" className='h-40 ' alt="" />

            <h1 className="text-4xl font-bold text-center text-white my-4">
                Web Developer
            </h1>
            <p className="text-[#A7A7A7] text-[18px] mt-4 w-[700px]">
                I am a web developer skilled in both Frontend and Backend, passionate about creating full-stack websites with a focus on efficient design and user experience.
            </p>


        </div>
    )
}

export default SectionHero