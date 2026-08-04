import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Single from "./Pages/Single/Single";
import OnSale from "./Pages/OnSale/OnSale";
import NewArrivals from "./Pages/NewArrivals/NewArrivals";
import Brands from "./Pages/Brands/Brands";
import AuthLayout from "./Pages/auth/authLayout/authLayout";
import Login from "./Pages/auth/login/Login";
import Verify from "./Pages/auth/Verify/Verify";
import Reset from "./Pages/auth/reset/Reset";
import Register from "./Pages/auth/register/Register";
import ForgetPassword from "./Pages/auth/ForgetPassword/ForgetPassword";
const myRouter=createBrowserRouter([
    {
        path:"/",
        element : <Home/>
    },

    {
        path:"/Home",
        element : <Home/>

    },

    {
      path:"/Shop",
      element: <Shop/>
    },

    {
        path:"/Single/:id",
        element: <Single/>
    },
    
    {
        path:"/OnSale",
        element:<OnSale/>
    },

    {
        path:"/NewArrivals",
        element:<NewArrivals/>
    },
    
    {
        path:"/Brands",
        element:<Brands/>
    },
    
    {
        path:"/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "",
                element: <Login />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "reset",
                element: <Reset />
            },
            {
                path: "forget_password",
                element: <ForgetPassword />
            },
            {
                path: "verify",
                element: <Verify />
            },

        ]
    },
])

export default myRouter;