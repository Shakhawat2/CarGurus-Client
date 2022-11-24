import React from 'react';
import Login from '../../Pages/Authentication/Login/Login';
import SignUp from '../../Pages/Authentication/SignUp/SignUp';

const HomeLayout = () => {
    return (
        <div>
            <Login></Login>
            <SignUp></SignUp>
        </div>
    );
};

export default HomeLayout;