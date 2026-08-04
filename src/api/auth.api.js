
import axiosInstance from "./axios";


export const registerUser = (data) => {
  return axiosInstance.post("/auth/register", data);
};

export const loginUser = (data) => {
  return axiosInstance.post("/auth/login", data);
};


export const verifyUser = (data) => {
  return axiosInstance.post("/auth/verify-email", data);
};


export const resendVerificationCode = (data) => {
  
  return axiosInstance.post("/auth/resend-verification-code",data);
};



export const forgetPasswordUser = (data) => {
  return axiosInstance.post(
    "/auth/forget-password",
    data
  );
};



export const resetPasswordUser = (data) => {
  return axiosInstance.post(
    "/auth/reset-password",
    data
  );
};


export const logoutUser = () => {
  return axiosInstance.post("/auth/log-out");
};