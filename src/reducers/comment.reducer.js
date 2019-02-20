const initialState = { addingComment: false, addedComment: false };
export function comment(state = initialState, action) {
  switch (action.type) {
    case "CREATE_CAR_COMMENT_PENDING":
      return {
        ...state,
        addingComment: true
      };
    case "CREATE_CAR_COMMENT_FULFILLED":
      return {
        ...state,
        addingComment: false,
        addedComment: true,
        commentAddedMsg: action.payload
      };
    case "CREATE_CAR_COMMENT_REJECTED":
      return {
        ...state,
        addingComment: false
      };
    case "CREATE_USER_COMMENT_PENDING":
      return {
        ...state,
        addingComment: true
      };
    case "CREATE_USER_COMMENT_FULFILLED":
      return {
        ...state,
        addingComment: false,
        addedComment: true,
        commentAddedMsg: action.payload
      };
    case "CREATE_USER_COMMENT_REJECTED":
      return {
        ...state,
        addingComment: false
      };
    case "FINISH_BOOKING_FULFILLED":
      return {
        ...state,
        finishBookingMsg: action.payload
      };
    default:
      return state;
  }
}
