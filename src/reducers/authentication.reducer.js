let user = localStorage.getItem("user");
const initialState = user
  ? { loggedIn: true, user, loggingIn: false }
  : { loggedIn: false, loggingIn: false };

export function authentication(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_PENDING":
      return {
        loggingIn: true
      };
    case "LOGIN_SUCCESS":
      return {
        loggedIn: true,
        user: action.payload,
        loggingIn: false
      };
    case "LOGIN_ERROR":
      return {
        loggedIn: false,
        error: action.payload,
        loggingIn: false
      };
    default:
      return state;
  }
}
