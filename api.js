import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "https://sistema-estagio-back-production.up.railway.app/api/v1",
});
const token = Cookies.get('my_token')
api.interceptors.request.use(
  (config) => {
    debugger
    config.headers = [{ "key": "Access-Control-Allow-Credentials", "value": "true" },
      { "key": "Access-Control-Allow-Origin", "value": "*" },
      { "key": "Access-Control-Allow-Methods", "value": "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
      { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }];
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api