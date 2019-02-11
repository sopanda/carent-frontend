import axios from "../axios-url";

export function fetchAllCars({ latitude, longitude, range }) {
  return {
    type: "FETCH_ALL_CARS",
    payload: axios
      .get(`/cars?latitude=${latitude}&longitude=${longitude}&range=${range}`)
      .then(res => {
        console.log(latitude);
        console.log(longitude);
        console.log(range);
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}
