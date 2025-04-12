'use client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const MailSender = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState('');

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                'service_anx89qv',     // จาก EmailJS Dashboard
                'template_fofoo2q',    // จาก EmailJS Dashboard
                formRef.current,
                'TQk_l9CSHFIAu68r3'      // Public Key จาก EmailJS
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus('✅ ส่งเมลเรียบร้อยแล้ว!');
                    formRef.current?.reset();
                },
                (error) => {
                    console.log(error.text);
                    setStatus('❌ เกิดข้อผิดพลาดในการส่งเมล');
                }
            );
    };
    return (
        <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-lg mx-auto mt-10 p-6  rounded-md shadow">
            <div className='flex flex-row gap-4'>
                <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    required
                    className="border p-2"
                />
                <input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    required
                    className="border p-2"
                />
            </div>
            <textarea
                name="message"
                placeholder="Your Message"
                required
                className="border p-2 w-full h-32"
            />
            <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700">
                Send
            </button>
            <p className="text-center text-sm text-green-600">{status}</p>
        </form>
    )
}

export default MailSender