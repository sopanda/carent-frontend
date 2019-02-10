import axios from "../axios-url";
import { history } from "../helpers/history";

export function login(user) {
  return dispatch => {
    dispatch(loginAwait());
    axios
      .post(`/sign_in/`, user)
      .then(res => {
        let token = res.data.jwt;
        localStorage.setItem("user", token);
        history.push("/");
        dispatch(loginSuccess(token));
      })
      .catch(function(error) {
        dispatch(loginError(error));
      });
  };

  function loginAwait() {
    return {
      type: "LOGIN_PENDING",
      loggingIn: true
    };
  }

  function loginError(error) {
    return {
      type: "LOGIN_ERROR",
      payload: error
    };
  }

  function loginSuccess(token) {
    return {
      type: "LOGIN_SUCCESS",
      payload: token
    };
  }
}

export function register(user) {
  return dispatch => {
    dispatch(registerAwait());
    axios
      .post(`/sign_up/`, user)
      .then(res => {
        history.push("/");
        dispatch(registerSuccess());
      })
      .catch(function(error) {
        dispatch(registerError(error));
      });
  };
  function registerAwait() {
    return {
      type: "REGISTER_PENDING",
      registering: true
    };
  }

  function registerError(error) {
    return {
      type: "REGISTER_ERROR",
      payload: error
    };
  }

  function registerSuccess() {
    return {
      type: "REGISTER_SUCCESS"
    };
  }
}

export function logout() {
  localStorage.removeItem("user");
  return {
    type: "LOGOUT"
  };
}
