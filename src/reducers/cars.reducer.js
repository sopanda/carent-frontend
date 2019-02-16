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
    case "DELETE_CAR_BY_ID_FULFILLED":
      return {
        ...state,
        deleted: action.payload
      };

    case "CREATE_NEW_CAR_PENDING":
      return {
        ...state,
        creatingCar: true
      };
    case "CREATE_NEW_CAR_FULFILLED":
      return {
        ...state,
        creatingCar: false,
        newCar: action.payload
      };
    case "CREATE_NEW_CAR_REJECTED":
      return {
        ...state,
        creatingCar: false
      };
    case "SET_CAR_PHOTO_PENDING":
      return {
        ...state,
        settingPhoto: true
      };
    case "SET_CAR_PHOTO_FULFILLED":
      return {
        ...state,
        settingPhoto: false,
        settingPhotoMsg: action.payload
      };
    case "SET_CAR_PHOTO_REJECTED":
      return {
        ...state,
        settingPhoto: false
      };
    default:
      return state;
  }
}
