import React from 'react';
import { Outlet } from 'react-router-dom';
import BestSellers from '../../Pages/BestSellers/BestSellers';
import Contact from '../../Pages/Contact/Contact';
import Footer from '../../Pages/Shared/Footer/Footer';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Team from '../../Pages/Team/Team';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <BestSellers></BestSellers>
            <Team></Team>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;