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

export default function fetchUser(id) {
  return dispatch => {
    dispatch(fetchUserById(id));
    dispatch(fetchUserReviews(id));
  };

  function fetchUserById(id) {
    return {
      type: "FETCH_USER_BY_ID",
      payload: axios
        .get(`/users/${id}`)
        .then(res => {
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    };
  }
  function fetchUserReviews(id) {
    return {
      type: "FETCH_USER_REVIEWS_BY_ID",
      payload: axios
        .get(`/users/${id}/reviews`)
        .then(res => {
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    };
  }
}

export function fetchProfile() {
  return {
    type: "FETCH_PROFILE",
    payload: axios
      .get(`/profile`)
      .then(res => {
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}

export function setMyLocation({ latitude, longitude }) {
  return {
    type: "SET_MY_LOCATION",
    payload: { latitude: latitude, longitude: longitude }
  };
}

export function setUserPhoto(userId, photo) {
  return dispatch => {
    dispatch(setPhoto(userId, photo));
    setTimeout(() => {
      dispatch(fetchProfile());
    }, 2000);
  };

  function setPhoto(userId, photo) {
    console.log(userId);
    console.log(photo);
    return {
      type: "SET_USER_PHOTO",
      payload: axios
        .put(`/users/${userId}`, photo)
        .then(res => {
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    };
  }
}

export function uploadDocuments(doc) {
  return {
    type: "UPLOAD_DOCUMENTS",
    payload: axios
      .post(`/add_verify_document`, doc)
      .then(res => {
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}
