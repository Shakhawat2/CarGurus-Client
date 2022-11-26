import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const CategoryModal = () => {
    const { user, product } = useContext(AuthContext);
    return (
        <div>

            <input type="checkbox" id="category_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="category_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product?.name}</h3>
                    <div className="form-control w-full ">        
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryModal;