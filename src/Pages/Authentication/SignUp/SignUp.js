import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom/dist';
import { AuthContext } from '../../../Context/UserContext';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createAccountWithEmail, profileUpdate, signInWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleSignIn = (data) => {
        const name = `${data?.first_name} ${data?.last_name}`;
        const image = data?.image[0];
        const formData = new FormData();
        formData.append('image', image);

        fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_Image_BB_KEY}`, {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const image = result.data.url;
                // create account with email and password
                createAccountWithEmail(data?.email, data?.password)
                    .then(() => {
                        profileUpdate(name, image)
                            .then(() => {
                                const user = {
                                    name,
                                    image,
                                    email: data?.email,
                                    account_type: data?.account_type,
                                }
                                // post user in Database
                                saveUser(user);
                            })
                            .catch((error) => {
                                console.log(error);
                            });
                    })
                    .catch((error) => {
                        const errorMessage = error.message;
                        toast.error(errorMessage)
                    });
            })
            .catch(err => console.log(err))
    }
    // post user 
    const saveUser = (user) => {
        fetch(`https://assignment-12-server-kappa.vercel.app/users`, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    
                    getUserToken(user?.email)
                }
            })
            .catch(err => toast.error(err))
    }
    //get TOken 
    const getUserToken = email => {
        fetch(`https://assignment-12-server-kappa.vercel.app/jwt?email=${email}`)
        .then(res => res.json())
        .then(data => {
            if(data.accessToken){
                toast.success('Sign Up Successfuly')
                localStorage.setItem('accessToken', data.accessToken)
                navigate('/');
            }
        })
    }

    // Create Account With Google
    const handleGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                const user = result.user;
                const users = {
                    name : user?.displayName,
                    image : user?.photoURL,
                    email: user?.email,
                    account_type: 'Buyer',
                }
                saveUser(users);
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }
    return (
        // < !--component -- >
        <section className="bg-black">
            <div className="flex justify-center min-h-screen">
                <div className="hidden bg-cover lg:block lg:w-2/5" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80')`, backgroundRepeat: "no-repeat" }}>
                </div>

                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full">
                        <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                            Get your free account now.
                        </h1>

                        <p className="mt-4 text-gray-500 dark:text-gray-400">
                            Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                        </p>

                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <div className="mt-6">
                                <h1 className="text-gray-500 dark:text-gray-300">Select type of account</h1>

                                <div className="mt-3  md:-mx-2">
                                    <select name='type' {...register('account_type',
                                        { required: "This field is required" })}
                                        className="select w-full max-w-xs ml-2">
                                        {/* <option disabled selected>Please Select type of account</option> */}
                                        <option>Buyer</option>
                                        <option>Seller</option>
                                    </select>
                                    {errors.account_type && <span>{errors.account_type.message}</span>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                                    <input type="text" {...register('first_name',
                                        { required: "This field is required" })}
                                        placeholder="John" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.first_name && <span className='text-red-600 mt-2'>{errors.first_name.message}</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last name</label>
                                    <input type="text" {...register('last_name',
                                        { required: "This field is required" }
                                    )} placeholder="Snow" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.last_name && <span className='text-red-600 mt-2'>{errors.last_name.message}</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Phone number</label>
                                    <input type="text" {...register('phone',
                                        { required: "This field is required" }
                                    )} placeholder="XXX-XX-XXXX-XXX" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.phone && <span className='text-red-600 mt-2'>{errors.phone.message}</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                    <input type="email" {...register('email',
                                        { required: "This field is required" }
                                    )} placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.email && <span className='text-red-600 mt-2'>{errors.email.message}</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <input type="password" {...register('password',
                                        { required: "This field is required" }
                                    )} placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    {errors.password && <span className='text-red-600 mt-2'>{errors.password.message}</span>}
                                </div>

                                <div>
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Photo</label>
                                    <input type="file" {...register('image',
                                        { required: "This field is required" }
                                    )} className="file-input file-input-bordered w-full max-w-xs" />
                                    {errors.image && <span className='text-red-600 mt-2'>{errors.image.message}</span>}
                                </div>

                                <button
                                    type='submit'
                                    className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Sign Up

                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <div>
                            <div className="flex items-center pt-4 space-x-1">
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                                <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                                <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <button onClick={handleGoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                                    </svg>
                                </button>
                                <button aria-label="Log in with Twitter" className="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                                    </svg>
                                </button>
                                <button aria-label="Log in with GitHub" className="p-3 rounded-sm">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                                    </svg>
                                </button>
                            </div>
                            <p className="text-xs text-center sm:px-6 dark:text-gray-400">Already have an account?
                                <Link to='/login' className="text-blue-500 hover:underline"> Log In</Link>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SignUp;