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
