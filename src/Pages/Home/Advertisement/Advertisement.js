import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import CategoryModal from '../../Category_product/CategoryModal/CategoryModal';
import LargeLoader from '../../Shared/Loader/LargeLoader/LargeLoader';
import ShowAdvertisement from './ShowAdvertisement/ShowAdvertisement';

const Advertisement = () => {
    const {product} = useContext(AuthContext)
    const {data, isLoading} = useQuery({
        queryKey : ["advertisement"],
        queryFn : async () =>{
            const res = await fetch(`http://localhost:5000/advertisement`);
            const data = await res.json();
            return data;
        }
    })
    if(isLoading){
        return  <LargeLoader></LargeLoader>
    }

    if(!data.length){
        return <></>
    }

    return (
        <div className=''>
            <div>
                    <h1 className='text-4xl ml-14 py-10 font-bold text-orange-400'>Advertisement</h1>                
            </div>
            <div>
                {
                    data.map(product => <ShowAdvertisement key={product._id} product={product}></ShowAdvertisement>)
                }
                {
                    product &&
                    <CategoryModal></CategoryModal>
                }
            </div>
        </div>
    );
};

export default Advertisement;