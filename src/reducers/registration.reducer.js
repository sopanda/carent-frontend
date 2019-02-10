const initialState = { registering: false, registered: false };

export function registration(state = initialState, action) {
  switch (action.type) {
    case "REGISTER_REQUEST_PENDING":
      return {
        registering: true
      };
    case "REGISTER_REQUEST_FULFILLED":
      return {
        registered: true,
        registering: false
      };
    case "REGISTER_REQUEST_REJECTED":
      return {
        registered: false,
        registering: false
      };
    default:
      return state;
  }
}
