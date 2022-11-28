import React from 'react';

const SingleBuyers = ({dt, handleDelete}) => {
    return (
        <tr>
            <td className="p-2 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img className="rounded-full" src={dt?.image} width="40" height="40" alt="" /></div>
                    <div className="font-medium text-gray-800">{dt?.name}</div>
                </div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div className="text-left">{dt?.email}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <div>{dt?.account_type}</div>
            </td>
            <td className="p-2 whitespace-nowrap">
                <button onClick={() => handleDelete(dt?._id)}  className='btn btn-sm '>Delete</button>
            </td>
        </tr>
    );
};

export default SingleBuyers;