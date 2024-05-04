const axios = require('axios').default;
import Cookies from "js-cookie";


axios.defaults.baseURL = "http://localhost:8000/api/v1/";
axios.defaults.withCredentials = true;

axios.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    try {
        const { response } = error
        if (response.status === 401) {
            Cookies.remove("token");
            // window.location.reload();
        }
    } catch (e) {
        console.error(e)
    }

    throw error
});

export default axios;



