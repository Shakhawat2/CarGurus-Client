import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom/dist';
import { AuthContext } from '../../../Context/UserContext';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signInWithGoogle, logIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSignIn = (data) => {

        // sign in 
        logIn(data?.email, data?.password)
            .then(() => {
                toast.success("Login Successfully")
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorMessage = error.message;
                toast.error(errorMessage)
            });

    }
    // Sign in With Google
    const handleGoogle = () => {
        signInWithGoogle()
            .then((result) => {
                toast.success('Login Successfully')
                navigate(from, { replace: true });
            }).catch((error) => {
                // Handle Errors here.
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
    }
    return (
        <div className="h-screen">
            <div className="flex bg-white  shadow-lg h-screen overflow-hidden ">
                <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')`, backgroundRepeat: 'no-repeat' }}></div>
                <div className="w-full p-8 lg:w-1/2 bg-gray-900">
                    <h2 className="text-2xl font-bold text-white text-center">CarGurus</h2>
                    <p className="text-xl text-white text-center">Welcome back!</p>
                    <button onClick={handleGoogle} className="flex w-full items-center justify-center mt-4 text-white  shadow-md bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                                <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                                <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                                <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-white font-bold">Sign in with Google</h1>
                    </button>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <p className="text-xs text-center text-white uppercase">or login with email</p>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleSubmit(handleSignIn)}>
                        <div className="mt-4">
                            <label className="block text-white text-sm font-bold mb-2">Email Address</label>
                            <input
                                {...register('email',
                                    { required: "This field is required" }
                                )}
                                placeholder="johnsnow@example.com"
                                className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                            {errors.email && <span className='text-red-600 mt-2'>{errors.email.message}</span>}
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-white text-sm font-bold mb-2">Password</label>
                                <button className="text-xs text-white hover:underline">Forget Password?</button>
                            </div>
                            <input
                                {...register('password',
                                    { required: "This field is required" }
                                )}
                                placeholder="Enter your password"
                                className="bg-gray-200 text-black focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                            {errors.password && <span className='text-red-600 mt-2'>{errors.password.message}</span>}
                        </div>
                        <div className="mt-8">
                            <button type='submit' className=" text-white font-bold py-2 px-4 w-full bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">Login</button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 md:w-1/4"></span>
                        <p className="text-xs text-white uppercase">Don't have an account? <Link to='/signup' className='text-blue-500 hover:underline'>Sign up</Link></p>
                        <span className="border-b w-1/5 md:w-1/4"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;