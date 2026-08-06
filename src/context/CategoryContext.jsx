import {  createContext, useContext, useState } from "react";
import { addCategoryApi, deleteCategoryApi, editCategoryApi, getCategories, getSingleCategoryApi } from "../api/category.api";

export const CategoryContext = createContext(null);


export const CategoryProvider = ({ children }) => {
    const [categories , setCategories]= useState([])
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const getAllCategories = async () => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getCategories();
          setCategories(response.data.category);
          return response.data;
        } catch (error) {
          const message =
            error.response?.data?.message ||
            "Failed to fetch categories";
          setError(message);
    
          throw error;
    
        } finally {
          setLoading(false);
        }
    };
    
    const addCategory = async (data) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await addCategoryApi(data);
          setCategories(response.data.category);
          return response.data;
        } catch (error) {
          const message =
            error.response?.data?.message ||
            "Failed to fetch categories";
          setError(message);
    
          throw error;
    
        } finally {
          setLoading(false);
        }
    };
    
    const editCategory = async (id ,data) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await editCategoryApi(id,data);
          setCategories(response.data.category);
          return response.data;
        } catch (error) {
          const message =
            error.response?.data?.message ||
            "Failed to fetch categories";
          setError(message);
    
          throw error;
    
        } finally {
          setLoading(false);
        }
    };
    const getSingleCategory = async (id ) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getSingleCategoryApi(id);
          setCategories(response.data.category);
          return response.data;
        } catch (error) {
          const message =
            error.response?.data?.message ||
            "Failed to fetch categories";
          setError(message);
    
          throw error;
    
        } finally {
          setLoading(false);
        }
    };
    
    const deleteCategory = async (id ) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await deleteCategoryApi(id);
          setCategories(response.data.category);
          return response.data;
        } catch (error) {
          const message =
            error.response?.data?.message ||
            "Failed to fetch categories";
          setError(message);
    
          throw error;
    
        } finally {
          setLoading(false);
        }
    };
    

    return (
        <CategoryContext.Provider
            value={{
                categories,
                loading,
                deleteCategory,
                editCategory,
                addCategory,
                getSingleCategory,
                getAllCategories,
                error,
            }}

        >
            {children}
        </CategoryContext.Provider>
    )
    
}   
export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error ('useCategory must be used inside CategoryProvider')
    }
    return context
}