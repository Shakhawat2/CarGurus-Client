import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import useCheckUser from '../../../CustomHooks/useCheckUser';
import LargeLoader from '../../Shared/Loader/LargeLoader/LargeLoader';

const DashboardNav = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin, isBuyer, isSeller, isUserloader] = useCheckUser(user?.email);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Sign-out successful');
            }).catch((error) => {
                toast.error('An error happened');
            });
    }

    if(isUserloader){
        return <LargeLoader></LargeLoader>
    }
    return (
        <div className="px-4 py-5 bg-gray-100 mx-auto sm:max-w-full md:max-w-full lg:max-w-full md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <Link
                    to="/"
                    aria-label="Company"
                    title="Company"
                    className="inline-flex items-center"
                >

                    <img className='h-7' src="https://images.ctfassets.net/0czyc7nlfvzo/6Uk8HOsyj67Ny7a88YNRne/bb99d2107e1811044ddbf0f63e334620/CarGurus_Digital_Color_Registered.png" alt="" />
                </Link>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <NavLink
                            to="/home"
                            aria-label="Home"
                            title="Home"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            aria-label="Blog"
                            title="Blog"
                            className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                        >
                            Blog
                        </NavLink>
                    </li>
                    {
                        isBuyer &&
                        <>
                            <li>
                                <NavLink
                                    to="/dashboard/myorders"
                                    aria-label="My Orders"
                                    title="My Orders"
                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                >
                                    My Orders
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/mywishlist"
                                    aria-label="My WishList"
                                    title="My WishList"
                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                >
                                    My WishList
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        isSeller && <>
                            <li>
                                <NavLink
                                    to="/dashboard/addproduct"
                                    aria-label="Add Product"
                                    title="Add Product"
                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/myproduct"
                                    aria-label="My Product"
                                    title="My Product"
                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                >
                                    My Product
                                </NavLink>
                            </li>
                        </>
                    }
                    {
                        isAdmin && <>
                            <li>
                                <NavLink
                                    to="/dashboard/allsellers"
                                    aria-label="All Sellers"
                                    title="All Sellers"
                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                >
                                    All Sellers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/allbuyers"
                                    aria-label="All Buyers"
                                    title="All Buyers"
                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                >
                                    All Buyers
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/reportitem"
                                    aria-label="Reported Item"
                                    title="Reported Item"
                                    className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                >
                                    Reported Item
                                </NavLink>
                            </li>
                        </>
                    }




                    {
                        user
                            ?
                            <li onClick={handleLogOut}>
                                <Link
                                    to="/"
                                    className="inline-flex btn btn-neutral items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Log Out"
                                    title="Log Out"
                                >
                                    Log Out
                                </Link>
                            </li>

                            :
                            <li>
                                <Link
                                    to="/login"
                                    className="inline-flex btn btn-neutral items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                    aria-label="Log In"
                                    title="Log In"
                                >
                                    Log In
                                </Link>
                            </li>


                    }


                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full z-10">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <Link
                                            to="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >

                                            <img className='h-7' src="https://images.ctfassets.net/0czyc7nlfvzo/6Uk8HOsyj67Ny7a88YNRne/bb99d2107e1811044ddbf0f63e334620/CarGurus_Digital_Color_Registered.png" alt="" />
                                        </Link>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <NavLink
                                                to="/home"
                                                aria-label="Home"
                                                title="Home"
                                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                            >
                                                Home
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/blog"
                                                aria-label="Blog"
                                                title="Blog"
                                                className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                            >
                                                Blog
                                            </NavLink>
                                        </li>
                                        {
                                            isBuyer &&
                                            <>
                                                <li>
                                                    <NavLink
                                                        to="/myorders"
                                                        aria-label="My Orders"
                                                        title="My Orders"
                                                        className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                    >
                                                        My Orders
                                                    </NavLink>
                                                </li>
                                            </>
                                        }
                                        {
                                            isSeller && <>
                                                <li>
                                                    <NavLink
                                                        to="/addproduct"
                                                        aria-label="Add Product"
                                                        title="Add Product"
                                                        className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                    >
                                                        Add Product
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/myproduct"
                                                        aria-label="My Product"
                                                        title="My Product"
                                                        className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                    >
                                                        My Product
                                                    </NavLink>
                                                </li>
                                            </>
                                        }
                                        {
                                            isAdmin && <>
                                                <li>
                                                    <NavLink
                                                        to="/allsellers"
                                                        aria-label="All Sellers"
                                                        title="All Sellers"
                                                        className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                    >
                                                        All Sellers
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/allbuyers"
                                                        aria-label="All Buyers"
                                                        title="All Buyers"
                                                        className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                    >
                                                        All Buyers
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/reportitem"
                                                        aria-label="Reported Item"
                                                        title="Reported Item"
                                                        className={({ isActive }) => isActive ? "font-medium tracking-wide text-blue-600 transition-colors duration-200 hover:text-deep-purple-accent-400" : "font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"}
                                                    >
                                                        Reported Item
                                                    </NavLink>
                                                </li>
                                            </>
                                        }




                                        {
                                            user
                                                ?
                                                <li onClick={handleLogOut}>
                                                    <Link
                                                        to="/"
                                                        className="inline-flex btn btn-neutral items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Log Out"
                                                        title="Log Out"
                                                    >
                                                        Log Out
                                                    </Link>
                                                </li>

                                                :
                                                <li>
                                                    <Link
                                                        to="/login"
                                                        className="inline-flex btn btn-neutral items-center justify-center h-10 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                        aria-label="Log In"
                                                        title="Log In"
                                                    >
                                                        Log In
                                                    </Link>
                                                </li>


                                        }
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
};

export default DashboardNav;