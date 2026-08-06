import axiosInstance from "./axios"

export const getCategories = () => {
    return axiosInstance.get('/category')
} 
export const addCategoryApi = (data) => {
    return axiosInstance.post('/category' ,data)
} 
export const getSingleCategoryApi = (id) => {
    return axiosInstance.get('/category/'+id )
} 
export const editCategoryApi = (id, data) => {
    return axiosInstance.put('/category/'+id ,data)
} 
export const deleteCategoryApi = (id) => {
    return axiosInstance.delete('/category/'+id )
} 