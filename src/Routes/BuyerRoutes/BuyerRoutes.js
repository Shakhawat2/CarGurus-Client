import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom/dist';
import { AuthContext } from '../../Context/UserContext';
import useCheckUser from '../../CustomHooks/useCheckUser';
import LargeLoader from '../../Pages/Shared/Loader/LargeLoader/LargeLoader';

const BuyerRoutes = ({children}) => {
    const {user, loading, logOut} = useContext(AuthContext);
    const [isAdmin, isBuyer, isSeller, isUserloader] = useCheckUser(user?.email);
    const location = useLocation()
    const handleLogOut = () =>{
        logOut()
            .then(() => {
                <Navigate to='/login' state={{ from: location }} replace ></Navigate>
            }).catch((error) => {
                toast.error('An error happened');
            });
    }
    if(loading || isUserloader){
        return <LargeLoader></LargeLoader>
    }

    if(user && user?.uid && isBuyer){
        return children;
    }
    return handleLogOut();   
};

export default BuyerRoutes;