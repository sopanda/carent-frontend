let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST_PENDING":
      return {
        loggingIn: true,
        user: action.payload
      };
    case "LOGIN_REQUEST_FULFILLED":
      return {
        loggedIn: true,
        user: action.payload
      };
    case "LOGIN_REQUEST_REJECTED":
      return {
        loggedIn: false
      };
    default:
      return state;
  }
}
