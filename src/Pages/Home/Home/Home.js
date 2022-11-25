import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>   
            
            <Banner></Banner>
            <Feature></Feature>
        </div>
    );
};

export default Home;