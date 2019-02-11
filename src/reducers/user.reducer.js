const initialState = { fetchingUser: false, userInfo: {} };
export function user(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_BY_ID_PENDING":
      return {
        fetchingUser: true
      };
    case "FETCH_USER_BY_ID_FULFILLED":
      return {
        fetchingUser: false,
        userInfo: action.payload
      };
    case "FETCH_USER_BY_ID_REJECTED":
      return {
        fetchingUser: false
      };
    default:
      return state;
  }
}
