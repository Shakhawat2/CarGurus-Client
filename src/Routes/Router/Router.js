import { createBrowserRouter } from "react-router-dom/dist";
import HomeLayout from "../../Layout/HomeLayout.js/HomeLayout";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <HomeLayout></HomeLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : '/',
                element : <ErrorPage></ErrorPage>
            }
        ]
    }
])