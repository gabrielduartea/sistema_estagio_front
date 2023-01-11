import axios from "axios";
import Cookies from "js-cookie";

 const api = axios.create({
 baseURL: "https://sistema-estagio-back-production.up.railway.app/api/v1",
});
 const token = Cookies.get('my_token')
 api.interceptors.request.use(
     (config) => {
         debugger
       config.headers={'Authorization' : `Bearer ${token}`};
       return config;
     },
     (error) => {
       return Promise.reject(error);
     }
    );

export default api