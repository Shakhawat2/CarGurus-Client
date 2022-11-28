import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/UserContext';
import ProductLeftSide from '../ProductLeftSide/ProductLeftSide';
import RightSideProduct from '../RightSideProduct/RightSideProduct';

const AddProduct = () => {
    const {categoriesDetails} = useContext(AuthContext)
    return (
        <div className='flex lg:flex-row flex-col'>
            <div>
                <ProductLeftSide></ProductLeftSide>
            </div>
            <div className='p-10 lg:px-32 lg:py-10'>
                {
                    categoriesDetails &&
                    <RightSideProduct></RightSideProduct>
                }
            </div>
        </div>
    );
};

export default AddProduct;