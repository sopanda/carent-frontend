const initialState = { fetching: false, cars: [] };
export function cars(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_CARS_PENDING":
      return {
        fetching: true
      };
    case "FETCH_ALL_CARS_FULFILLED":
      return {
        fetching: false,
        cars: action.payload
      };
    case "FETCH_ALL_CARS_PENDING_REJECTED":
      return {
        fetching: false
      };
    case "FETCH_CAR_BY_ID_PENDING":
      return {
        fetchingCar: true
      };
    case "FETCH_CAR_BY_ID_FULFILLED":
      return {
        fetchingCar: false,
        carInfo: action.payload
      };
    case "FETCH_CAR_BY_ID_REJECTED":
      return {
        fetchingCar: false
      };
    default:
      return state;
  }
}
