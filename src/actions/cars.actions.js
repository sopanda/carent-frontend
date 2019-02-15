import axios from "../axios-url";
import { history } from "../helpers/history";

export function fetchAllCars({ latitude, longitude, range }) {
  return {
    type: "FETCH_ALL_CARS",
    payload: axios
      .get(`/cars?latitude=${latitude}&longitude=${longitude}&range=${range}`)
      .then(res => {
        return res.data;
      })
      .catch(function(error) {
        return error;
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

export function deleteCarById(id) {
  return dispatch => {
    dispatch(deleteById(id));
    setTimeout(() => {
      dispatch(fetchMyCars());
    }, 1000);
  };

  function deleteById(id) {
    return {
      type: "DELETE_CAR_BY_ID",
      payload: axios
        .delete(`/cars/${id}`) //change to delete
        .then(res => {
          history.push("/dashboard");
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    };
  }
}

export function createNewCar(car) {
  return dispatch => {
    dispatch(createCar(car));
    setTimeout(() => {
      dispatch(fetchMyCars());
    }, 1000);
  };

  function createCar(car) {
    return {
      type: "CREATE_NEW_CAR",
      payload: axios
        .post(`/cars/`, car)
        .then(res => {
          console.log(res.data);
        })
        .catch(function(error) {
          console.log(error);
        })
    };
  }
}
