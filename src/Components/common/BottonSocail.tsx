import React from 'react';
import Image from 'next/image';

const BottonSocail = () => {
    return (
        <div>
            <div className='flex flex-row w-full items-center justify-center space-x-10 '>
                <a href="https://www.facebook.com/om.small.1?locale=th_TH" target="_blank" rel="noopener noreferrer" className='w-6 hover:scale-150 transition-transform duration-500' title="Facebook">
                    <Image
                        src="/assets/facebook.png"
                        alt="Facebook"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="..."
                    />

                </a>
                <a href="https://www.instagram.com/om.zend/" target="_blank" rel="noopener noreferrer" className='w-6 hover:scale-150 transition-transform duration-500' title="Instagram">
                    <Image
                        src="/assets/instagram.png"
                        alt="Facebook"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="..."
                    />
                </a>
                <a href="https://www.linkedin.com/in/%E0%B8%81%E0%B8%B4%E0%B8%95%E0%B8%95%E0%B8%B4%E0%B8%98%E0%B8%B1%E0%B8%8A-%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B9%8C%E0%B8%82%E0%B8%AD%E0%B8%A1-291362359/" target="_blank" rel="noopener noreferrer" title="LinkIn" className='w-6 hover:scale-150 transition-transform duration-500'>
                    <Image
                        src="/assets/linkedin.png"
                        alt="Facebook"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="..."
                    />
                </a>
                <a href="https://github.com/zendlll66" target="_blank" rel="noopener noreferrer" className='w-6 hover:scale-150 transition-transform duration-500' title="GitHub">
                    <Image
                        src="/assets/github.png"
                        alt="Facebook"
                        layout="responsive"
                        width={500}
                        height={300}
                        className="..."
                    />
                </a>
            </div>
        </div>
    );
}

export default BottonSocail;
