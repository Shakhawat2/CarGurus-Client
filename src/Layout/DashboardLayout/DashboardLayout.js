import React from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../../Pages/Dashboard/DashboardNav/DashboardNav';

const DashboardLayout = () => {
    return (
        <div>
           <DashboardNav></DashboardNav>
           <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;