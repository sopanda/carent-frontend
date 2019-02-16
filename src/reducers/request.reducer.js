const initialState = { sending: false, myRequests: [] };
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
    case "FETCH_MY_REQUESTS_PENDING":
      return {
        ...state,
        fetching: true
      };
    case "FETCH_MY_REQUESTS_FULFILLED":
      return {
        ...state,
        fetching: false,
        myRequests: action.payload
      };
    case "FETCH_MY_REQUESTS_REJECTED":
      return {
        ...state,
        fetching: false
      };
    case "ACCEPT_REQUEST_FULFILLED":
      return {
        ...state,
        requestAcceptMsg: action.payload
      };
    case "REJECT_REQUEST_FULFILLED":
      return {
        ...state,
        requestDeclineMsg: action.payload
      };
    default:
      return state;
  }
}
