import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Single from "./Pages/Single/Single";
import OnSale from "./Pages/OnSale/OnSale";
import NewArrivals from "./Pages/NewArrivals/NewArrivals";
import Brands from "./Pages/Brands/Brands";
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
    }

])

export default myRouter;