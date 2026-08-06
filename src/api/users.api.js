import axiosInstance from "./axios"

export const getAllUsersApi = () => {
    return axiosInstance.get('/users')
} 
export const getSingleUserApi = (id) => {
    return axiosInstance.get('/users/' +id)
} 
export const blockUserApi = (id) => {
    return axiosInstance.post('/users/block/' +id)
} 