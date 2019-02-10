import axios from "axios";

let token = localStorage.getItem("user");
const instanceOrders = axios.create({
  baseURL: "https://carrent-api.herokuapp.com/"
});

axios.defaults.headers = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + token
};

export default instanceOrders;
