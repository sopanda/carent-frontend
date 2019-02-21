const initialState = {
  fetchedOrders: false,
  fetchedLoans: false,
  fetchingBookings: false
};
export function orders(state = initialState, action) {
  switch (action.type) {
    case "FETCH_MY_ORDERS_PENDING":
      return {
        ...state,
        fetchingOrders: true
      };
    case "FETCH_MY_ORDERS_FULFILLED":
      return {
        ...state,
        fetchingOrders: false,
        fetchedOrders: true,
        orders: action.payload
      };
    case "FETCH_MY_ORDERS_REJECTED":
      return {
        ...state,
        fetchingOrders: false
      };
    case "FETCH_MY_LOANS_PENDING":
      return {
        ...state,
        fetchingLoans: true
      };
    case "FETCH_MY_LOANS_FULFILLED":
      return {
        ...state,
        fetchingLoans: false,
        fetchedLoans: true,
        loans: action.payload
      };
    case "FETCH_MY_LOANS_REJECTED":
      return {
        ...state,
        fetchingLoans: false
      };
    case "FINISH_BOOKING_FULFILLED":
      return {
        ...state,
        finishBookingMsg: action.payload
      };
    case "FETCH_MY_BOOKINGS_PENDING":
      return {
        ...state,
        fetchingBookings: true
      };
    case "FETCH_MY_BOOKINGS_FULFILLED":
      return {
        ...state,
        bookings: action.payload,
        fetchingBookings: false
      };
    case "FETCH_MY_BOOKINGS_REJECTED":
      return {
        ...state,
        fetchingBookings: false
      };
    default:
      return state;
  }
}
