import axiosInstance from "./axios"

export const getCoupons = () => {
    return axiosInstance.get('/coupons')
} 
export const addCouponApi = (data) => {
    return axiosInstance.post('/coupons' ,data)
} 
export const getSingleCouponApi = (id) => {
    return axiosInstance.get('/coupons/'+id )
} 
export const editCouponApi = (id, data) => {
    return axiosInstance.put('/coupons/'+id ,data)
} 
export const deleteCouponApi = (id) => {
    return axiosInstance.delete('/coupons/'+id )
} 