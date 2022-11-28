import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import LargeLoader from '../Shared/Loader/LargeLoader/LargeLoader';

const SingleProduct = ({ product }) => {
    const { setProduct } = useContext(AuthContext)

    return (
        <div class="">
            <section>
                <section class="text-gray-600 body-font">
                    <div class="container px-5  mx-auto">
                        <div class="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                            <div class="w-60 h-60  sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                                <img
                                    src={product?.picture} className='h-full' alt='' />
                            </div>
                            <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h1 class="text-black text-2xl title-font font-bold mb-2">
                                    {/* <input type="radio" className='bg-blue-600'/> */}

                                    <span className=''>{product?.name}</span>

                                </h1>
                                <p class="leading-relaxed text-base">{product?.description.slice(0, 150)}</p>
                                {/* <div class="py-4">
                                    <div class=" inline-block mr-2" >
                                        <div class="flex  pr-2 h-full items-center">
                                            <svg class="text-yellow-500 w-6 h-6 mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <path d="M9 12l2 2l4 -4" />
                                            </svg>
                                            <p class="title-font font-medium">Python</p>
                                        </div>
                                    </div>
                                    <div class="inline-block mr-2" >
                                        <div class="flex  pr-2 h-full items-center">
                                            <svg class="text-yellow-500 w-6 h-6 mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <path d="M9 12l2 2l4 -4" />
                                            </svg>
                                            <p class="title-font font-medium">C</p>
                                        </div>
                                    </div>
                                    <div class=" inline-block mr-2" >
                                        <div class="flex  pr-2 h-full items-center">
                                            <svg class="text-yellow-500 w-6 h-6 mr-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx="12" cy="12" r="9" />
                                                <path d="M9 12l2 2l4 -4" />
                                            </svg>
                                            <p class="title-font font-medium">Php</p>
                                        </div>
                                    </div>
                                    <div class=" inline-block mr-2" >
                                        <div class="flex  pr-2 h-full items-center">
                                            <svg class="text-gray-500 w-6 h-6 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="15" y1="9" x2="9" y2="15" />
                                                <line x1="9" y1="9" x2="15" y2="15" />
                                            </svg>
                                            <p class="title-font font-medium">Swift</p>
                                        </div>
                                    </div>

                                    <div class=" inline-block mr-2" >
                                        <div class="flex  pr-2 h-full items-center">
                                            <svg class="text-gray-500 w-6 h-6 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="15" y1="9" x2="9" y2="15" />
                                                <line x1="9" y1="9" x2="15" y2="15" />
                                            </svg>
                                            <p class="title-font font-medium">Java</p>
                                        </div>
                                    </div>
                                    <div class=" inline-block mr-2" >
                                        <div class="flex  pr-2 h-full items-center">
                                            <svg class="text-gray-500 w-6 h-6 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <circle cx="12" cy="12" r="10" />
                                                <line x1="15" y1="9" x2="9" y2="15" />
                                                <line x1="9" y1="9" x2="15" y2="15" />
                                            </svg>
                                            <p class="title-font font-medium">Javascript</p>
                                        </div>
                                    </div>
                                </div> */}
                                <div class="md:flex font-bold text-gray-800 mt-3">
                                    <div class="w-full md:w-1/2 flex space-x-3">
                                        <div class="w-1/2">
                                            <h2 class="text-gray-500">Locaton</h2>
                                            <p >{product?.location}</p>
                                        </div>
                                        <div class="w-1/2">
                                            <h2 class="text-gray-500">Resale Price</h2>
                                            <p>$ {product?.resale_price}</p>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-1/2 flex space-x-3">
                                        <div class="w-1/2">
                                            <h2 class="text-gray-500">Original Price</h2>
                                            <p>$ {product?.original_price}</p>
                                        </div>
                                        <div class="w-1/2">
                                            <h2 class="text-gray-500">Condition</h2>
                                            <p>{product?.condition}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="md:flex font-bold text-gray-800 mt-5">
                                    <div class="w-full md:w-1/2 flex space-x-3">
                                        <div class="w-1/2">
                                            <h2 class="text-gray-500">Seller Name</h2>
                                            <div className='flex  items-center'>
                                                {
                                                    product?.verified &&
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='h-6'  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path className='text-blue-600' stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                        </svg>                                                   
                                                }
                                                <p className='ml-2'>{product?.seller_name}</p>
                                            </div>
                                        </div>
                                        <div class="w-1/2">
                                            <h2 class="text-gray-500">Mobile</h2>
                                            <p>{product?.mobile}</p>
                                        </div>
                                    </div>
                                    <div class="w-full md:w-1/2 flex space-x-3">
                                        <div class="w-1/2">
                                            <h2 class="text-gray-500">Years of Use</h2>
                                            <p>{product?.years_of_use}</p>
                                        </div>
                                        <div class="w-1/2">
                                            <h2 class="text-gray-500">Post Time</h2>
                                            <p>{product?.post_time}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <label onClick={() => setProduct(product)} htmlFor="category_modal" className='btn '>Book Now</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default SingleProduct;