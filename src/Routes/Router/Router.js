import { createBrowserRouter } from "react-router-dom/dist";
import DashboardLayout from "../../Layout/DashboardLayout/DashboardLayout";
import HomeLayout from "../../Layout/HomeLayout.js/HomeLayout";
import Login from "../../Pages/Authentication/Login/Login";
import SignUp from "../../Pages/Authentication/SignUp/SignUp";
import CategoryProduct from "../../Pages/Category_product/CategoryProduct";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct.js/AddProduct";
import AllBuyers from "../../Pages/Dashboard/AllBuyers/AllBuyers";
import AllSellers from "../../Pages/Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
import BuyerRoutes from "../BuyerRoutes/BuyerRoutes";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoutes from "../SellerRoutes/SellerRoutes";

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
                path : 'category/:id',
                loader : ({params}) => fetch(`https://assignment-12-server-kappa.vercel.app/category/${params.id}`),
                element : <PrivateRoutes><CategoryProduct></CategoryProduct></PrivateRoutes>
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
        element : <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/dashboard/myorders',
                element : <BuyerRoutes><MyOrders></MyOrders></BuyerRoutes>
            },
            {
                path : '/dashboard/allsellers',
                element : <AdminRoutes><AllSellers></AllSellers></AdminRoutes>
            },
            {
                path : '/dashboard/allbuyers',
                element : <AdminRoutes><AllBuyers></AllBuyers></AdminRoutes>
            },
            {
                path : '/dashboard/addproduct',
                element : <SellerRoutes><AddProduct></AddProduct></SellerRoutes>
            },
            {
                path : '/dashboard/myproduct',
                element : <SellerRoutes><MyProduct></MyProduct></SellerRoutes>
            },
        ]
    }
])