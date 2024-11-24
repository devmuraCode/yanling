import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://84.54.75.248:9090/api",
  timeout: 10000,
});

export default axiosInstance;
