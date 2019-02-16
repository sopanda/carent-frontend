const initialState = {
  fetchingUser: false,
  fetchingUserReviews: false,
  fetchedUser: false,
  fetchedUserReviews: false,
  userInfo: {},
  userReviews: [],
  profile: {},
  myLocation: {}
};
export function user(state = initialState, action) {
  switch (action.type) {
    case "SET_MY_LOCATION":
      return {
        ...state,
        myLocation: action.payload
      };
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
    case "SET_USER_PHOTO_PENDING":
      return {
        ...state,
        settingPhoto: true
      };
    case "SET_USER_PHOTO_FULFILLED":
      return {
        ...state,
        settingPhoto: false,
        settingPhotoMsg: action.payload
      };
    case "SET_USER_PHOTO_REJECTED":
      return {
        ...state,
        settingPhoto: false
      };
    case "UPLOAD_DOCUMENTS_PENDING":
      return {
        ...state,
        uploadingDocument: true
      };
    case "UPLOAD_DOCUMENTS_FULFILLED":
      return {
        ...state,
        uploadingDocument: false,
        uploadingDocumentMsg: action.payload
      };
    case "UPLOAD_DOCUMENTS_REJECTED":
      return {
        ...state,
        uploadingDocument: false
      };
    default:
      return state;
  }
}
