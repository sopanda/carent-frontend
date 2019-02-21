import axios from "../axios-url";

export function fetchDataForOrdersPanel() {
  return dispatch => {
    dispatch(fetchMyLoans());
    dispatch(fetchMyOrders());
  };

  function fetchMyLoans() {
    return {
      type: "FETCH_MY_LOANS",
      payload: axios
        .get(`/my_loans`)
        .then(res => {
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    };
  }
  function fetchMyOrders() {
    return {
      type: "FETCH_MY_ORDERS",
      payload: axios
        .get(`/my_orders`)
        .then(res => {
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    };
  }
}

export function createOffer(id, order) {
  return {
    type: "CREATE_OFFER",
    payload: axios
      .post(`/cars/${id}/activate`, order)
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

export function finishBooking(id) {
  return dispatch => {
    dispatch(finish(id));
    setTimeout(() => dispatch(fetchDataForOrdersPanel()), 1200);
  };

  function finish(id) {
    return {
      type: "FINISH_BOOKING",
      payload: axios
        .get(`/bookings/${id}/finish`)
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

export function fetchBookings() {
  return {
    type: "FETCH_MY_BOOKINGS",
    payload: axios
      .get(`/bookings`)
      .then(res => {
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}
