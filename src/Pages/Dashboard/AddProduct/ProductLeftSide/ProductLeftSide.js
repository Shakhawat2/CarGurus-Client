import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/UserContext';
import LargeLoader from '../../../Shared/Loader/LargeLoader/LargeLoader';
import SmallLoader from '../../../Shared/Loader/SmallLoader/SmallLoader';

const ProductLeftSide = () => {
    const { categoriesDetails, setCategoriesDetails } = useContext(AuthContext)

    const { data, isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/category`);
            const data = await res.json();
            return data;
        }
    })

    const handleVale = category =>{
        
        if(category.category_id){
            setCategoriesDetails(category)
        }
    }

    if (isLoading) {
        return <SmallLoader></SmallLoader>
    }
    
    return (
        <aside className="w-full h-30 lg:h-screen p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
            <nav className="space-y-8 text-sm">
                <div className="space-y-2">
                    <h2 className="text-lg   font-semibold  uppercase dark:text-gray-400">Select a Category  and Add a Product</h2>
                    <hr className='text-white'/>
                    <div className="flex justify-between lg:justify-start items-center lg:items-start flex-row lg:flex-col ">
                        {data &&
                            data.map(category => <span onClick={() => handleVale(category)} className={categoriesDetails?.category_name === category?.category_name ? 'text-lg text-blue-500 mt-3 cursor-pointer' : 'text-lg mt-3 cursor-pointer'} key={category._id}>{category?.category_name}-Product Id-{category?.category_id}</span>)
                        }
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default ProductLeftSide;