import axios from "../axios-url";

export function sendRequest(id) {
  return {
    type: "SEND_REQUEST",
    payload: axios
      .post(`/cars/${id}/booking_requests `)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      })
  };
}

export function fetchMyRequests() {
  return {
    type: "FETCH_MY_REQUESTS",
    payload: axios
      .get(`/booking_requests`)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      })
  };
}

export function acceptRequest(id) {
  return dispatch => {
    dispatch(accept(id));
    setTimeout(() => {
      dispatch(fetchMyRequests());
    }, 1000);
  };

  function accept(id) {
    return {
      type: "ACCEPT_REQUEST",
      payload: axios
        .get(`/booking_requests/${id}/approve`)
        .then(res => {
          console.log(res.data);
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
          return error;
        })
    };
  }
}

export function declineRequests(id) {
  return dispatch => {
    dispatch(reject(id));
    setTimeout(() => {
      dispatch(fetchMyRequests());
    }, 1000);
  };

  function reject(id) {
    return {
      type: "REJECT_REQUEST",
      payload: axios
        .get(`/booking_requests/${id}/decline`)
        .then(res => {
          console.log(res.data);
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
          return error;
        })
    };
  }
}
