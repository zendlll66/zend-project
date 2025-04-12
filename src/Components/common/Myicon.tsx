import React from 'react'

interface MyiconProps {
    text: string;
}

const Myicon: React.FC<MyiconProps> = (text) => {
    return (
        <div className='bg-gradient-to-b from-red-500/20 to-red-300/20 border-1 border-red-500/10  w-fit px-5 py-1 rounded-4xl font-bold '>
            <p className="bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-red-100 text-sm">
                {text.text}
            </p>
        </div>
    )
}

export default Myicon