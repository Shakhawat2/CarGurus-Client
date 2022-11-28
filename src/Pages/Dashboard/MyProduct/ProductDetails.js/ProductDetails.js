import React from 'react';

const ProductDetails = ({ product, handleProductDelete, addAdvertisement }) => {
    return (
        <div className="">
            <section>
                <section className="text-gray-600 body-font">
                    <div className="container px-5  mx-auto">
                        <div className="p-5 bg-white flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
                            <div className="w-60 h-60  sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
                                <img
                                    src={product?.picture} className='h-full' alt='' />
                            </div>
                            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                                <h1 className="text-black text-2xl title-font font-bold mb-2">
                                    

                                    <span className=''>{product?.name}</span>

                                </h1>
                                <p className="leading-relaxed text-base">{product?.description.slice(0, 150)}</p>
        
                                <div className="md:flex font-bold text-gray-800 mt-3">
                                    <div className="w-full md:w-1/2 flex space-x-3">
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Locaton</h2>
                                            <p >{product?.location}</p>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Resale Price</h2>
                                            <p>$ {product?.resale_price}</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 flex space-x-3">
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Original Price</h2>
                                            <p>$ {product?.original_price}</p>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Condition</h2>
                                            <p>{product?.condition}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="md:flex font-bold text-gray-800 mt-5">
                                    <div className="w-full md:w-1/2 flex space-x-3">
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Seller Name</h2>
                                            <div className='flex  items-center'>
                                                {
                                                    product?.verified &&
                                                    <svg xmlns="http://www.w3.org/2000/svg" className='h-6' fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                                        <path className='text-blue-600' stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                    </svg>
                                                }
                                                <p className='ml-2'>{product?.seller_name}</p>
                                            </div>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Mobile</h2>
                                            <p>{product?.mobile}</p>
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 flex space-x-3">
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Years of Use</h2>
                                            <p>{product?.years_of_use}</p>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Post Time</h2>
                                            <p>{product?.post_time}</p>
                                        </div>
                                        <div className="w-1/2">
                                            <h2 className="text-gray-500">Status</h2>
                                            <p>{product?.status}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-3'>
                                    <label  onClick={() => handleProductDelete(product?._id)} className='btn '>Delete Product</label>
                                    <label onClick={() => addAdvertisement(product)}  className='btn ml-3'>Advertise</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default ProductDetails;