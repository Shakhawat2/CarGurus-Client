import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import LargeLoader from '../../Shared/Loader/LargeLoader/LargeLoader';
import ProductDetails from './ProductDetails.js/ProductDetails';

const MyProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['product', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-kappa.vercel.app/product/${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleProductDelete = (id) => {
        fetch(`https://assignment-12-server-kappa.vercel.app/product/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Deleted Successfully');
                    refetch()
                }
            })
            .catch(err => console.log(err))
    }

    const addAdvertisement = (product) => {
        fetch('https://assignment-12-server-kappa.vercel.app/advertise', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                // toast.success('Advertisement successfully')
                navigate('/')
            }
        })
        .catch(err => console.log(err))
    }

    if (isLoading) {
        return <LargeLoader></LargeLoader>
    }


    return (
        <div className='py-10 '>
            {
                data &&
                data.map(product => <ProductDetails key={product._id} product={product} handleProductDelete={handleProductDelete} addAdvertisement={addAdvertisement}></ProductDetails>)
            }
        </div>
    );
};

export default MyProduct;