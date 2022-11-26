import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import CategoryModal from './CategoryModal/CategoryModal';
import SingleProduct from './SingleProduct';

const CategoryProduct = () => {
    const products = useLoaderData();
    const { product } = useContext(AuthContext);

    return (
        <div>
            <div className='bg-gray-100 py-10'>
                {
                    products &&
                    products.map(product => <SingleProduct key={product?._id} product={product}></SingleProduct>)
                }
                {
                    product &&
                    <CategoryModal></CategoryModal>
                }
            </div>
        </div>

    );
};

export default CategoryProduct;