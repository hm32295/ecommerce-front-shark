import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import myRouter from "./router";
import { AuthProvider } from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ProductProvider } from "./context/ProductsContext";
import { CategoryProvider } from "./context/CategoryContext";
import { UsersProvider } from "./context/UsersContext";
import { CouponProvider } from "./context/CouponContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>

    <AuthProvider>
      <ProductProvider>
        <UsersProvider>
        <CouponProvider>
          <CategoryProvider>
            <RouterProvider router={myRouter} />
          </CategoryProvider>
        </CouponProvider>
        </UsersProvider>
      </ProductProvider>
    </AuthProvider>

  </StrictMode>
);
