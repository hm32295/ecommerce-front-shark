import { createBrowserRouter } from "react-router-dom";


import AuthLayout from "./Pages/auth/AuthLayout/AuthLayout";
import Login from "./Pages/auth/login/Login";
import Verify from "./Pages/auth/Verify/Verify";
import Reset from "./Pages/auth/reset/Reset";
import Register from "./Pages/auth/register/Register";
import ForgetPassword from "./Pages/auth/ForgetPassword/ForgetPassword";

import Users from "./Pages/admin/Users/Users";
import Category from "./Pages/admin/Category/Category";
import Coupon from "./Pages/admin/Coupon/Coupon";
import Product from "./Pages/admin/Products/Products";
import HomeAdmin from "./Pages/admin/HomeAdmin/HomeAdmin";
import AdminLayout from "./Pages/admin/AdminLayout/AdminLayout";

import AddProducts from "./Pages/admin/Products/AddProducts/AddProducts";
import AddCategory from "./Pages/admin/Category/AddCategory/AddCategory";
import ProductDetails from "./Pages/admin/Products/AddProducts/ProductDetails";
import EditProduct from "./Pages/admin/Products/EditProduct";

import UsersDetails from "./Pages/admin/Users/UsersDetails";

import CategoryDetails from "./Pages/admin/Category/CategoryDetails";
import EditCategory from "./Pages/admin/Category/editCategory";

import AddCoupon from "./Pages/admin/Coupon/AddCoupon";
import EditCoupon from "./Pages/admin/Coupon/EditCoupon";
import CouponDetails from "./Pages/admin/Coupon/CouponDetails";

import ProductRoute from "./Routes/ProductRoute";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";


const myRouter = createBrowserRouter([

  {
    path: "/admin",

    element: <ProductRoute />,

    children: [

      {
        element: <AdminLayout />,

        children: [

          {
            index: true,
            element: <HomeAdmin />,
          },

          {
            path: "home",
            element: <HomeAdmin />,
          },



          {
            path: "users",
            element: <Users />,
          },

          {
            path: "users/:id",
            element: <UsersDetails />,
          },



          {
            path: "products",
            element: <Product />,
          },

          {
            path: "products/add",
            element: <AddProducts />,
          },

          {
            path: "products/edit/:id",
            element: <EditProduct />,
          },

          {
            path: "products/:id",
            element: <ProductDetails />,
          },


          {
            path: "categories",
            element: <Category />,
          },

          {
            path: "category/add",
            element: <AddCategory />,
          },

          {
            path: "category/edit/:id",
            element: <EditCategory />,
          },

          {
            path: "category/:id",
            element: <CategoryDetails />,
          },


          {
            path: "coupon",
            element: <Coupon />,
          },

          {
            path: "coupon/add",
            element: <AddCoupon />,
          },

          {
            path: "coupon/edit/:id",
            element: <EditCoupon />,
          },

          {
            path: "coupon/:id",
            element: <CouponDetails />,
          },


          {
            path: "orders",
            element: <Coupon />,
          },


          {
            path: "settings",
            element: <div>Settings</div>,
          },

        ],
      },

    ],
  },


  {
    path: '/',
    element :<AuthLayout />,
    children: [
      

        {
          index: true,
          element: <Login />,
        },
      
    ]
},
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [

      {
        index: true,
        element: <Login />,
      },

      {
        path: "login",
        element: <Login />,
      },

      {
        path: "register",
        element: <Register />,
      },

      {
        path: "reset",
        element: <Reset />,
      },

      {
        path: "forget_password",
        element: <ForgetPassword />,
      },

      {
        path: "verify",
        element: <Verify />,
      },

    ],
  },


    {
        path: "*",
        element: <ErrorPage />,
    },
]);

export default myRouter;