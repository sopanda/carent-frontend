const initialState = { sending: false };
export function request(state = initialState, action) {
  switch (action.type) {
    case "SEND_REQUEST_PENDING":
      return {
        ...state,
        sending: true
      };
    case "SEND_REQUEST_FULFILLED":
      return {
        ...state,
        sending: false,
        msg: action.payload
      };
    case "SEND_REQUEST_REJECTED":
      return {
        ...state,
        sending: false
      };
    default:
      return state;
  }
}
