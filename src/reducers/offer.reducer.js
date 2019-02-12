const initialState = { fetchingOffer: false };
export function offer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_OFFER_BY_ID_PENDING":
      return {
        fetchingOffer: true
      };
    case "FETCH_OFFER_BY_ID_FULFILLED":
      return {
        fetchingOffer: false,
        offerInfo: action.payload
      };
    case "FETCH_OFFER_BY_ID_REJECTED":
      return {
        fetchingOffer: false
      };
    default:
      return state;
  }
}
