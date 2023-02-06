import React from "react";

const BestSellers = () => {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">Top Selling</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">Wing Car</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$12000</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://w7.pngwing.com/pngs/38/708/png-transparent-car-mercedes-car-love-compact-car-vehicle-thumbnail.png" alt="A chair with designed back" />
                        </div>
                        <div className="flex justify-end items-center hidden space-x-2 mt-16 md:mt-32">
                            <button aria-label="show in red color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#DC2626" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">A Red Car</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$150000</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://freepngimg.com/thumb/car/3-2-car-free-download-png.png" alt="A chair with wooden legs" />
                        </div>
                        <div className="flex justify-end items-center hidden space-x-2 mt-8 md:mt-24">
                            <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">TESLA CAR</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$80000</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://www.freeiconspng.com/thumbs/car-png/land-rover-range-rover-car-png-25.png" alt="A sofa chair with wooden legs" />
                        </div>
                        <div className="flex justify-end items-center hidden space-x-2 mt-16 md:mt-32">
                            <button aria-label="show in green color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in brown color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#92400E" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
                    <div className="bg-gray-50 p-8">
                        <div>
                            <h2 className="text-xl leading-tight text-gray-600">Luxury Bus</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$78900</p>
                        </div>
                        <div className="flex justify-center items-center mt-28 md:mt-3">
                            <img src="https://assetsw.bus.com/content/uploads/2020/02/14170850/Charter-Bus-Rentals-Photo.jpg" alt="A large sectional sofa" />
                        </div>
                        <div className="flex justify-end items-center hidden space-x-2 mt-36 md:mt-12">
                            <button aria-label="show in yellow color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#F59E0B" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in light gray color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8">
                        <div>
                            <h2 className="text-xl leading-tight text-gray-600">Two Seater Bus</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$2900</p>
                        </div>
                        <div className="flex justify-center items-center mt-28 md:mt-3">
                            <img src="https://assetsw.bus.com/content/uploads/2020/02/14170850/Charter-Bus-Rentals-Photo.jpg" alt="A beautiful two seater sofa" />
                        </div>
                        <div className="flex justify-end items-center hidden space-x-2 mt-36 md:mt-12">
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in green color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestSellers;
