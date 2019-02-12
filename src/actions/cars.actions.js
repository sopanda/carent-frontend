import axios from "../axios-url";

export function fetchAllCars({ latitude, longitude, range }) {
  return {
    type: "FETCH_ALL_CARS",
    payload: axios
      .get(`/cars?latitude=${latitude}&longitude=${longitude}&range=${range}`)
      .then(res => {
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}

export function fetchCarById(id) {
  return {
    type: "FETCH_CAR_BY_ID",
    payload: axios
      .get(`/cars/${id}`)
      .then(res => {
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}

export function fetchMyCars() {
  return {
    type: "FETCH_MY_CARS",
    payload: axios
      .get(`/my_cars`)
      .then(res => {
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
      })
  };
}
