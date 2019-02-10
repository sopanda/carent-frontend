const initialState = { registering: false, registered: false };

export function registration(state = initialState, action) {
  switch (action.type) {
    case "REGISTER_PENDING":
      return {
        registering: true
      };
    case "REGISTER_SUCCESS":
      return {
        registered: true,
        registering: false
      };
    case "REGISTER_ERROR":
      return {
        registered: false,
        registering: false,
        error: action.payload
      };
    default:
      return state;
  }
}
