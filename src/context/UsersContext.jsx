import {  createContext, useContext, useState } from "react";
import { blockUserApi, getAllUsersApi, getSingleUserApi } from "../api/users.api";
import { dashboardApi } from "../api/dashboard.api";

export const UsersContext = createContext(null);


export const UsersProvider = ({ children }) => {
    const [users , setUsers] = useState([])
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const dashboard = async () => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await dashboardApi();
          return response.data;
        } catch (error) {
          const message =
            error.response?.data?.message ||
            "Failed to fetch dashboard";
          setError(message);
    
          throw error;
    
        } finally {
          setLoading(false);
        }
    };
    
    const getAllUsers = async () => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getAllUsersApi();
          setUsers(response.data.Users);
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
    
    const getOneUsers = async (id) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getSingleUserApi(id);
          setUsers(response.data.Users);
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
    
    const blockUser = async (id) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await blockUserApi(id);
          setUsers(response.data.Users);
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
        <UsersContext.Provider
            value={{
                users,
                loading,
          getAllUsers,
                dashboard,
                getOneUsers,
                error,
                blockUser
            }}

        >
            {children}
        </UsersContext.Provider>
    )
    
}   
export const useUsers = () => {
    const context = useContext(UsersContext);
    if (!context) {
        throw new Error ('useUsers must be used inside UsersProvider')
    }
    return context
}