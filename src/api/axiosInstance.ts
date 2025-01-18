import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://84.54.75.248:9090/api",
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const selectedLanguage = localStorage.getItem("selectedLanguage") || "ru";
    config.headers["language"] = selectedLanguage;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
