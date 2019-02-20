const initialState = { fetchedOrders: false, fetchedLoans: false };
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
    default:
      return state;
  }
}
