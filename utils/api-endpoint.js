const axios = require('axios').default;
const tough = require('tough-cookie');

const cookieJar = new tough.CookieJar();

axios.defaults.baseURL = "http://localhost:8000/api/v1/";
axios.defaults.withCredentials = true;
axios.defaults.jar = cookieJar;

export default axios;
// const instance = axios.create({
//     baseURL: "http://localhost:8000/api/v1/",
//   });
  
//   export default instance;


