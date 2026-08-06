
import axiosInstance from "./axios";


export const addProduct = (data) => {
  return axiosInstance.post("/product", data);
};

export const getAllProduct = (params) => {
  
  return axiosInstance.get("/product" , {params});
};

export const getSingleProduct = (id) => {
  return axiosInstance.get("/product/"+ id);
};

export const editProduct = (id,data) => {
  
  return axiosInstance.put("/product/"+id,data);
};

export const deleteProduct = (id) => {
  return axiosInstance.delete("/product/" + id);
};

