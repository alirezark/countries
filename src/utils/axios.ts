import axios from "axios";

import { BaseUrl } from "@/config";

const axiosInstance = axios.create({
  baseURL: BaseUrl,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
