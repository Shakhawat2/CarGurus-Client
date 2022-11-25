import { createBrowserRouter } from "react-router-dom/dist";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import HomeLayout from "../../Layout/HomeLayout.js/HomeLayout";
import Login from "../../Pages/Authentication/Login/Login";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <HomeLayout></HomeLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : 'home',
                element : <Home></Home>
            },
            {
                path : 'login',
                element : <Login></Login>
            },
            {
                path : 'signup',
                element : <SignUp></SignUp>
            },
            {
                path : 'blog',
                element : <Blog></Blog>
            },
        ]
    },
    {
        path : '/dashboard',
        element : <DashboardLayout></DashboardLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [

        ]
    }
])