const initialState = { fetchedOffer: false, fetchedReviews: false };
export function offer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_OFFER_BY_ID_PENDING":
      return {
        ...state,
        fetchingOffer: true
      };
    case "FETCH_OFFER_BY_ID_FULFILLED":
      return {
        ...state,
        fetchingOffer: false,
        fetchedOffer: true,
        offerInfo: action.payload
      };
    case "FETCH_OFFER_BY_ID_REJECTED":
      return {
        ...state,
        fetchingOffer: false
      };
    case "FETCH_ALL_CAR_REVIEWS_BY_ID_PENDING":
      return {
        ...state,
        fetchingReviews: true
      };
    case "FETCH_ALL_CAR_REVIEWS_BY_ID_FULFILLED":
      return {
        ...state,
        fetchingReviews: false,
        fetchedReviews: true,
        reviewsInfo: action.payload
      };
    case "FETCH_ALL_CAR_REVIEWS_BY_ID_REJECTED":
      return {
        ...state,
        fetchingReviews: false
      };
    case "CREATE_OFFER_PENDING":
      return {
        ...state,
        creatingOffer: true
      };
    case "CREATE_OFFER_FULFILLED":
      return {
        ...state,
        creatingOffer: false,
        messageAfterCreation: action.payload
      };
    case "CREATE_OFFER_REJECTED":
      return {
        ...state,
        creatingOffer: false
      };
    default:
      return state;
  }
}
