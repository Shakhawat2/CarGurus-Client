import React from 'react';

const Contact = () => {
    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto' id="contact">
                <div className='text-center'>
                    <h1 className='text-4xl font-bold pt-14 uppercase'>Let's Get in Touch</h1>
                    <progress className="progress progress-success w-96 mt-7 mx-5 "></progress>
                </div>
                <div className='grid gap-2 grid-cols-1 md:grid-cols-2 py-20'>
                    <div className="mx-auto w-full max-w-[550px] px-3 mt-10">
                        <form action="https://formbold.com/s/FORM_ID" method="POST">
                            <div className="mb-5">
                                <label
                                    for="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    className=" w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="email"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="subject"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Enter your subject"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    for="message"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-4 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                required
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    className="bg-gradient-to-tr from-green-300 to-blue-400 rounded-lg py-5 px-10 text-md font-semibold uppercase outline-none"
                                    type='submit'
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mx-auto w-full max-w-[550px] px-5 py-5">
                        <h1 className='text-2xl font-bold text-gray-500'>Let's Chat </h1>
                        <h1 className='text-2xl font-bold text-gray-500'>Tell me about your Projects</h1>
                        <progress className="progress w-28 mt-5" value="0" max="100"></progress>
                        <div className='border-2 rounded-lg mt-7 flex items-center p-8 '>
                            <div className='border-none rounded-full p-3 bg-gradient-to-tr from-green-200 to-blue-300 text-slate-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl font-semibold text-slate-600'>Contact on Phone</h1>
                                <h1 className='text-lg font-semibold text-slate-600'>(+880) 1311-197939</h1>
                                <h1 className='text-lg font-semibold text-slate-600'>(+880) 1771-533803</h1>
                            </div>
                        </div>
                        <div className='border-2 rounded-lg mt-7 flex items-center p-8'>
                            <div className='border-none rounded-full p-3 bg-gradient-to-tr from-green-200 to-blue-300 text-slate-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl font-semibold text-slate-600'>Contact on Email</h1>
                                <h1 className='text-lg font-semibold text-slate-600'>shakhawat.web22@gmail.com</h1>
                                <h1 className='text-lg font-semibold text-slate-600'>shohugmahbub@gmail.com</h1>
                            </div>
                        </div>
                        <div className='border-2 rounded-lg mt-7 flex items-center p-8 '>
                            <div className='border-none rounded-full p-3 bg-gradient-to-tr from-green-200 to-blue-300 text-slate-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div className='ml-5'>
                                <h1 className='text-xl font-semibold text-slate-600'>Contact Address</h1>
                                <h1 className='text-lg font-semibold text-slate-600'>Rajbari, Dhaka, Bangladesh</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;