import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:9090/", // Replace with your Laravel API URL
  timeout: 5000, // Set a timeout if needed
});

export default axiosInstance;
