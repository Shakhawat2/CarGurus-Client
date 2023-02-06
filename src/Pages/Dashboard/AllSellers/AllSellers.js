import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import LargeLoader from '../../Shared/Loader/LargeLoader/LargeLoader';
import SingleSellers from './SingleSellers';

const AllSellers = () => {
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-kappa.vercel.app/users/sellers');
            const data = await res.json();
            return data;
        }
    })
    // https://assignment-12-server-kappa.vercel.app
    const handleDelete = (id) =>{
        fetch(`https://assignment-12-server-kappa.vercel.app/user/${id}`, {
            method : 'delete'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('Deleted Successfully');
                refetch()
            }
        })
        .catch(err => console.log(err))
    }
    const handleVerify = id =>{
        fetch(`https://assignment-12-server-kappa.vercel.app/user/${id}`, {
            method : 'put'
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('verify successfully')
                refetch()
            }
            toast(data.message)
        
        })
        .catch(err => console.log(err))
    }
    if (isLoading) {
        return <LargeLoader></LargeLoader>
    }
    return (
        <div className='w-4/5 mx-auto mt-5'>
            {/* <!-- component --> */}
            <section className="antialiased bg-gray-100 text-gray-600 h-screen px-4">
                <div className="flex flex-col justify-center h-full">
                    {/* <!-- Table --> */}
                    <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-5 py-4 border-b border-gray-100">
                            <h2 className="font-semibold text-gray-800">All Sellers</h2>
                        </header>
                        <div className="p-3">
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr className=''>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Name</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Email</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Verify</div>
                                            </th>
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Delete</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                                                             
                                        {
                                            data && 
                                            data.map(dt => <SingleSellers key={dt._id} dt={dt} handleDelete={handleDelete} handleVerify={handleVerify}></SingleSellers>)
                                        }                                      
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AllSellers;