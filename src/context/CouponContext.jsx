import {  createContext, useCallback, useContext, useState } from "react";
import { addCouponApi, deleteCouponApi, editCouponApi, getCoupons, getSingleCouponApi } from "../api/coupon.api";

export const CouponContext = createContext(null);


export const CouponProvider = ({ children }) => {
    const [coupons , setCoupons]= useState([])
    const [coupon , setCoupon]= useState({})
    const [loading , setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const getAllCoupons = useCallback( async () => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getCoupons();
          setCoupons(response.data.data);
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
    
    const addCoupon = useCallback( async (data) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await addCouponApi(data);
          setCoupon(response.data.data);
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
    
    const editCoupon = useCallback( async (id ,data) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await editCouponApi(id,data);
          setCoupon(response.data.data);
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
    const getSingleCoupon = useCallback( async (id ) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await getSingleCouponApi(id);
          setCoupon(response.data.data);
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
    
    const deleteCoupon = useCallback( async (id ) => {
    
        try {
          setLoading(true);
          setError(null);
          const response = await deleteCouponApi(id);
          setCoupon(response.data.data);
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
        <CouponContext.Provider
            value={{
                coupon,
          loading,
                coupons ,
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