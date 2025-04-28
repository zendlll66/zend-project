'use client';
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const MailSender = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState('');
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);
        setStatus('');

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
                    setStatus('✅ Email sent successfully!');
                    formRef.current?.reset();
                    setIsSending(false);
                },
                (error) => {
                    console.log(error.text);
                    setStatus('❌ There was an error sending the email.');
                    setIsSending(false);
                }
            );
    };
    return (
        <form data-aos="fade-up" ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4 max-w-lg mx-auto mt-10  rounded-md shadow">
            <div className='flex flex-row gap-4'> 
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="border p-2 rounded-md flex-1"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="border p-2 rounded-md flex-1"
                />
            </div>
            <textarea
                name="message"
                placeholder="Your Message"
                required
                className="border p-2 w-full h-50  rounded-md "
            />
            <button 
                type="submit" 
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 flex justify-center items-center"
                disabled={isSending}
            >
                {isSending ? (
                    <div className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </div>
                ) : (
                    'Send'
                )}
            </button>
            <p className="text-center text-sm text-green-600">{status}</p>
        </form>
    )
}

export default MailSender;