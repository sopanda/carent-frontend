import axios from "../axios-url";

export function login(user) {
  return {
    type: "LOGIN_REQUEST",
    payload: axios.post(`/sign_in/`, user).then(res => {
      console.log(res);
    })
  };
}

export function register(user) {
  return {
    type: "REGISTER_REQUEST",
    payload: axios.post(`/sign_up/`, user).then(res => {
      console.log(res);
    })
  };
}
