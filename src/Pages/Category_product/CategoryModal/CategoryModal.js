import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Context/UserContext';

const CategoryModal = () => {
    const { user, product, setProduct } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleBooking = (data) =>{
        console.log(data);
        setProduct(null)
    }

    return (
        <div>
            <input  type="checkbox" id="category_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setProduct(null)} htmlFor="category_modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product?.name}</h3>
                    <form onSubmit={handleSubmit(handleBooking)}>
                        <div className="form-control w-full ">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input {...register("buyer_name")} type="text" defaultValue={user?.displayName} readOnly  className="input input-bordered w-full " />
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("buyer_email")} type="text" defaultValue={user?.email} readOnly  className="input input-bordered w-full " />
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input {...register("product_name")} type="text" defaultValue={product?.name} readOnly  className="input input-bordered w-full " />
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input {...register("product_price")} type="text" defaultValue={product?.resale_price} readOnly  className="input input-bordered w-full " />
                            <label className="label">
                                <span className="label-text">Give Your Phone Number</span>
                            </label>
                            <input type="text" placeholder="Enter your phone number" {...register("phone_number", { required: "This field is Required" })} className="input input-bordered w-full " />
                            {errors.phone_number && <span className='text-red-600 mt-3'>{errors.phone_number.message}</span>}
                            <label className="label">
                                <span className="label-text">Meeting Location</span>
                            </label>
                            <input type="text" placeholder="Enter Meeting Location" {...register("location", { required: "This field is Required" })} className="input input-bordered w-full " />
                            {errors.location && <span className='text-red-600 mt-3'>{errors.location.message}</span>}
                            <button type='submit' className='btn w-full mt-5'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CategoryModal;