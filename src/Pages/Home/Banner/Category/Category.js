import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({dt}) => {
    return (
        <Link to={`/category/${dt?.category_id}`} className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center hover:scale-110 transition duration-300 ease-in-out">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex  items-center justify-center  mb-5 shadow-lg  ">
                        <img className='h-[200px]' src={dt?.image} alt="" />
                    </div>
                    <h6 className="text-xl font-semibold">{dt?.category_name}</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                        {dt?.description && dt?.description.slice(0, 40)+"..."  }
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Category;