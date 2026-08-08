import {  createContext, useCallback, useContext, useState } from "react";
import { blockUserApi, getAllUsersApi, getSingleUserApi } from "../api/users.api";
import { dashboardApi } from "../api/dashboard.api";

export const UsersContext = createContext(null);


export const UsersProvider = ({ children }) => {
    const [users , setUsers] = useState([])
    const [user , setUser] = useState([])
    const [dashboardData , setDashboardData] = useState({
    products: 0,
    users: 0,
    categories: 0,
    coupons: 0,
    orders: 0,
  })
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const dashboard = useCallback(async () => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await dashboardApi();
          setDashboardData(response.data.data)
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
    },[]);
    
    const getAllUsers = useCallback(async () => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getAllUsersApi();
          const handelResponse = response.data.data.map(user => {
            return {
              address: `${user.adress?.city || ''}- ${user.adress?.area || ''}- ${user.adress?.street || ''} `,
              ...user}
            })
          setUsers(handelResponse);
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
    },[]);
    
    const getOneUsers =useCallback (async (id) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getSingleUserApi(id);
          setUser(response.data.data);
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
    },[]);
    
    const blockUser =useCallback (async (id) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await blockUserApi(id);
          setUser(response.data.data);
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
    },[]);
    


    return (
        <UsersContext.Provider
            value={{
          users,
              user,
                loading,
          getAllUsers,
          dashboardData,
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