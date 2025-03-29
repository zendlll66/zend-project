import React from 'react';

const BottonSocail = () => {
    return (
        <div>
            <div className='flex flex-row w-full items-center justify-center space-x-10'>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='w-6'>
                    <img src="Assets/facebook.png" alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='w-6'>
                    <img src="Assets/instagram.png" alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='w-6'>
                    <img src="Assets/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className='w-6'>
                    <img src="Assets/github.png" alt="GitHub" />
                </a>
            </div>
        </div>
    );
}

export default BottonSocail;
