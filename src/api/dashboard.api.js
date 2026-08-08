
import axiosInstance from "./axios";


export const dashboardApi = () => {
  return axiosInstance.get("/dashboard");
};

