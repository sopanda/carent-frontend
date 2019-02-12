const initialState = {
  fetchingUser: false,
  fetchingUserReviews: false,
  fetchedUser: false,
  fetchedUserReviews: false,
  userInfo: {},
  userReviews: [],
  profile: {}
};
export function user(state = initialState, action) {
  switch (action.type) {
    case "FETCH_USER_BY_ID_PENDING":
      return {
        ...state,
        fetchingUser: true
      };
    case "FETCH_USER_BY_ID_FULFILLED":
      return {
        ...state,
        fetchingUser: false,
        fetchedUser: true,
        userInfo: action.payload
      };
    case "FETCH_USER_BY_ID_REJECTED":
      return {
        ...state,
        fetchingUser: false
      };
    case "FETCH_USER_REVIEWS_BY_ID_PENDING":
      return {
        ...state,
        fetchingUserReviews: true
      };
    case "FETCH_USER_REVIEWS_BY_ID_FULFILLED":
      return {
        ...state,
        fetchingUserReviews: false,
        userReviews: action.payload,
        fetchedUserReviews: true
      };
    case "FETCH_USER_REVIEWS_BY_ID_REJECTED":
      return {
        ...state,
        fetchingUserReviews: false
      };
    case "FETCH_PROFILE_PENDING":
      return {
        ...state,
        fetchingProfile: true
      };
    case "FETCH_PROFILE_FULFILLED":
      return {
        ...state,
        fetchingProfile: false,
        profile: action.payload
      };
    case "FETCH_PROFILE_REJECTED":
      return {
        ...state,
        fetchingProfile: false
      };
    default:
      return state;
  }
}
