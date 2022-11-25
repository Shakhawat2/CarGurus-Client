import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import LargeLoader from '../../Shared/Loader/LargeLoader/LargeLoader';
import Category from './Category/Category';

const Banner = () => {
    const { data, isLoading } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category`);
            const data = await res.json();
            return data
        }
    })

    if (isLoading) {
        return <LargeLoader></LargeLoader>
    }

    return (
        <section className="relative  bg-blueGray-50">
            <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: `url('https://www.bugatti.com/fileadmin/_processed_/sei/p1/se-image-3bbeac5006e9b894545a3519cc23a735.jpg')`, backgroundRepeat: 'no-repeat' }}>
                    <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                </div>
                <div className="container relative mx-auto">
                    <div className="items-center flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                            <div className="pr-12">
                                <h1 className="text-white font-semibold text-5xl">
                                    Find the right car <span className='font-bold text-blue-500'>Guaranteed </span>
                                </h1>
                                <p className="mt-4 text-white text-lg text-blueGray-200 ">
                                CarGurus is a Cambridge, Massachusetts-based automotive research and shopping website that assists users in comparing local listings for used and new cars, and contacting sellers. CarGurus is pronounced as a single word, rhyming with 'kangaroos'
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: `translateZ("0px")` }}>
                    <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                        <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                    </svg>
                </div>
            </div>
            <section className="pb-10 bg-blueGray-200 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        {
                            data?.length &&
                            data.map(dt => <Category key={dt?._id} dt={dt}></Category>)
                        }
                    </div>
                    <footer className="relative  pt-8 pb-6 mt-1">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                                        Please Select a  Category and show available services 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        </section>
    );
};

export default Banner;