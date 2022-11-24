import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom/dist';
import { AuthContext } from '../../Context/UserContext';
import LargeLoader from '../../Pages/Shared/Loader/LargeLoader/LargeLoader';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation()
    if(loading){
        return <LargeLoader></LargeLoader>
    }

    if(user && user?.uid){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
    
};

export default PrivateRoutes;