const initialState = { fetching: false, cars: [], myCars: [] };
export function cars(state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_CARS_PENDING":
      return {
        ...state,
        fetching: true
      };
    case "FETCH_ALL_CARS_FULFILLED":
      return {
        ...state,
        fetching: false,
        cars: action.payload
      };
    case "FETCH_ALL_CARS_PENDING_REJECTED":
      return {
        ...state,
        fetching: false
      };
    case "FETCH_CAR_BY_ID_PENDING":
      return {
        ...state,
        fetchingCar: true
      };
    case "FETCH_CAR_BY_ID_FULFILLED":
      return {
        ...state,
        fetchingCar: false,
        carInfo: action.payload
      };
    case "FETCH_CAR_BY_ID_REJECTED":
      return {
        ...state,
        fetchingCar: false
      };
    case "FETCH_MY_CARS_PENDING":
      return {
        ...state,
        fetchingCars: true
      };
    case "FETCH_MY_CARS_FULFILLED":
      return {
        ...state,
        fetchingCars: false,
        myCars: action.payload
      };
    case "FETCH_MY_CARS_REJECTED":
      return {
        ...state,
        fetchingCars: false
      };

    default:
      return state;
  }
}
