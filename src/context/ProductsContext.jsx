
import {
  createContext,
  useContext,
  useState,
} from "react";
import { addProduct, deleteProduct, editProduct, getAllProduct, getSingleProduct } from "../api/product.api";

const ProductContext = createContext(null);


export const ProductProvider = ({ children }) => {

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  const getProducts = async (params) => {

    try {
      setLoading(true);
      setError(null);
      const response = await getAllProduct(params);
      setProduct(response.data.user);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "product failed";
      setError(message);

      throw error;

    } finally {

      setLoading(false);

    }
  };


  const addProducts = async (data) => {

    try {
      setLoading(true);
      setError(null);
      const response = await addProduct(data);
      return response.data;
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Registration failed";

      setError(message);

      throw error;

    } finally {

      setLoading(false);

    }
  };


  const getOneProduct = async (id) => {

    try {
      setLoading(true);
      const response = await getSingleProduct(id);
      setProduct(null);
      return response.data
    } catch (error) {
      console.log(
        "Logout error:",
        error
      );

    } finally {
      setLoading(false);
    }
  };
  const editOneProduct = async (id,data) => {

    try {
      setLoading(true);
      await editProduct(id,data);
      setProduct(null);
    } catch (error) {
      console.log(
        "forget Password error:",
        error
      );

    } finally {

      setLoading(false);

    }
  };

  const deleteOneProduct = async (id) => {

    try {
      setLoading(true);
      await deleteProduct(id);
      setProduct(null);
    } catch (error) {
      console.log(
        "verify error:",
        error
      );

    } finally {
      setLoading(false);
    }
  };


  return (
    <ProductContext.Provider
      value={{
        product,
        deleteOneProduct,
        editOneProduct,
        getOneProduct,
        addProducts,
        getProducts,
        loading,
        error,

        isAuthenticated: Boolean(product),
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// ======================================
// Custom Hook
// ======================================

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error(
      "useProduct must be used inside productProvider"
    );
  }
  return context;
};