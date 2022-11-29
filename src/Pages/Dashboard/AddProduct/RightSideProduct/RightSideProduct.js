import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext';

const RightSideProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user, categoriesDetails } = useContext(AuthContext)
    const { category_id, category_name } = categoriesDetails;
    const date = new Date();
    const yr = date.getFullYear();
    const mnth = date.getMonth();
    const min = date.getDate();
    const navigate = useNavigate();
    const handleAddProduct = (data) => {
        
        if (data.category_id === "1" || data.category_id === "2" || data.category_id === "3") {
           return  fetch('https://assignment-12-server-kappa.vercel.app/category/product', {
                method : 'post',
                headers : {
                    'content-type' : 'application/json'
                },
                body : JSON.stringify({...data, status : "Available"})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    toast.success('Product added');
                    navigate('/dashboard/myproduct');
                }
            })
            .catch(err => console.log(err))
        }
        toast('product id will be less than or equal  3 ')
    }
    if (categoriesDetails) {
        return (
            <div className=''>
                <form onSubmit={handleSubmit(handleAddProduct)} className=''>
                    <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input  {...register('email')} name="email" type="email" defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Id</span>
                            </label>
                            <input {...register('category_id', {required : true})} type="text" placeholder='Select Your Category'  className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Category</span>
                            </label>
                            <input {...register('category', {required : true})} type="text" placeholder='Select Your Category'  className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Picture</span>
                            </label>
                            <input {...register('picture',
                                { required: "This field is require" })} type="text" placeholder="Enter Picture url" className="input input-bordered w-full max-w-xs" />
                            {errors.picture && <span className='text-red-600 mt-2'>{errors.picture.message}</span>}
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input {...register('name',
                                { required: "This field is require" })} type="text" placeholder="Enter Product Name" className="input input-bordered w-full max-w-xs" />
                            {errors.name && <span className='text-red-600 mt-2'>{errors.name.message}</span>}
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <input {...register('location',
                                { required: "This field is require" })} type="text" placeholder="Enter Location" className="input input-bordered w-full max-w-xs" />
                            {errors.location && <span className='text-red-600 mt-2'>{errors.location.message}</span>}
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Resale Price</span>
                            </label>
                            <input {...register('resale_price',
                                { required: "This field is require" })} type="text" placeholder="Enter Resale Price" className="input input-bordered w-full max-w-xs" />
                            {errors.resale_price && <span className='text-red-600 mt-2'>{errors.resale_price.message}</span>}
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Original Price</span>
                            </label>
                            <input {...register('original_price',
                                { required: "This field is require" })} type="text" placeholder="Enter Original Price" className="input input-bordered w-full max-w-xs" />
                            {errors.original_price && <span className='text-red-600 mt-2'>{errors.original_price.message}</span>}
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Years Of Use</span>
                            </label>
                            <input {...register('years_of_use',
                                { required: "This field is require" })} type="text" placeholder="Years of Use" className="input input-bordered w-full max-w-xs" />
                            {errors.years_of_use && <span className='text-red-600 mt-2'>{errors.years_of_use.message}</span>}
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Post Time</span>
                            </label>
                            <input {...register('post_time',)} type="text" defaultValue={`${min}-${mnth + 1}-${yr}`} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input {...register('seller_name',)} type="text" defaultValue={user?.displayName} readOnly className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Condition</span>
                            </label>
                            <input {...register('condition',
                                { required: "This field is require" })} type="text" placeholder="Excellent / Good / Bad" className="input input-bordered w-full max-w-xs" />
                            {errors.condition && <span className='text-red-600 mt-2'>{errors.condition.message}</span>}
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Mobile Number</span>
                            </label>
                            <input {...register('mobile',
                                { required: "This field is require" })} type="text" placeholder="Enter Phone Number" className="input input-bordered w-full max-w-xs" />
                            {errors.mobile && <span className='text-red-600 mt-2'>{errors.mobile.message}</span>}
                        </div>
                        <div className=" w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Product Description</span>
                            </label>
                            <input {...register('description',
                                { required: "This field is require" })} type="text" placeholder="About Product" className="input input-bordered w-full max-w-xs" />
                            {errors.description && <span className='text-red-600 mt-2'>{errors.description.message}</span>}
                        </div>
                    </div>
                    <button type='submit' className='btn my-5'>Add Product</button>
                </form>
            </div>
        );
    }
};

export default RightSideProduct;