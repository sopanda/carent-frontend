import axios from "../axios-url";

export function addCarComment(id, comment) {
  return {
    type: "CREATE_CAR_COMMENT",
    payload: axios
      .post(`/cars/${id}/reviews`, comment)
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

export function addRenterComment(id, comment) {
  return {
    type: "CREATE_USER_COMMENT",
    payload: axios
      .post(`/users/${id}/reviews`, comment)
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
  return {
    type: "FINISH_BOOKING",
    payload: axios
      .post(`/bookings/${id}/finish `)
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
