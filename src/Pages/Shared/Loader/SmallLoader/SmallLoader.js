import React from 'react';

const SmallLoader = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin dark:border-indigo-500"></div>
        </div>
    );
};

export default SmallLoader;