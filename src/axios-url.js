import axios from "axios";

const defaultOptions = {
  baseURL: "https://carrent-api.herokuapp.com/",
  headers: {
    "Content-Type": "application/json"
  }
};

let instance = axios.create(defaultOptions);

instance.interceptors.request.use(function(config) {
  const token = localStorage.getItem("user");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default instance;
