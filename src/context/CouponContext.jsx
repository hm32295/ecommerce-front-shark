import {  createContext, useContext, useState } from "react";
import { addCouponApi, deleteCouponApi, editCouponApi, getCoupons, getSingleCouponApi } from "../api/coupon.api";

export const CouponContext = createContext(null);


export const CouponProvider = ({ children }) => {
    const [coupon , setCoupon]= useState([])
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const getAllCoupons = async () => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getCoupons();
          setCoupon(response.data.Coupon);
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
    
    const addCoupon = async (data) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await addCouponApi(data);
          setCoupon(response.data.Coupon);
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
    
    const editCoupon = async (id ,data) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await editCouponApi(id,data);
          setCoupon(response.data.Coupon);
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
    const getSingleCoupon = async (id ) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getSingleCouponApi(id);
          setCoupon(response.data.Coupon);
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
    
    const deleteCoupon = async (id ) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await deleteCouponApi(id);
          setCoupon(response.data.Coupon);
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
        <CouponContext.Provider
            value={{
                coupon,
                loading,
                deleteCoupon,
                editCoupon,
                addCoupon,
                getSingleCoupon,
                getAllCoupons,
                error,
            }}

        >
            {children}
        </CouponContext.Provider>
    )
    
}   
export const useCoupon = () => {
    const context = useContext(CouponContext);
    if (!context) {
        throw new Error ('useCoupon must be used inside CouponProvider')
    }
    return context
}