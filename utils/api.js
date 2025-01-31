import axios from "axios";
import Cookies from "js-cookie";

const apiBaseUrl = "http://localhost:8000/api/v1/";

const axiosInstance = axios.create({
  baseURL: `${apiBaseUrl}`,
  //   withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response.status === 401) {
      const token = Cookies.get("token");
      if (token) {
        window.location.assign("/guest/login");
      }
      Cookies.remove("token");
    }

    throw error;
  }
);

export default axiosInstance;
