import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            {user?.displayName}
        </div>
    );
};

export default Home;