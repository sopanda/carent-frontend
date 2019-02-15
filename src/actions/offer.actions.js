import axios from "../axios-url";

export function fetchOffer(id) {
  return dispatch => {
    dispatch(fetchOfferById(id));
    dispatch(fetchReviewsById(id));
  };

  function fetchReviewsById(id) {
    return {
      type: "FETCH_ALL_CAR_REVIEWS_BY_ID",
      payload: axios
        .get(`/cars/${id}/reviews`)
        .then(res => {
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    };
  }
  function fetchOfferById(id) {
    return {
      type: "FETCH_OFFER_BY_ID",
      payload: axios
        .get(`/cars/${id}`)
        .then(res => {
          return res.data;
        })
        .catch(function(error) {
          console.log(error);
        })
    };
  }
}

export function createOffer(id, order) {
  return {
    type: "CREATE_OFFER",
    payload: axios
      .post(`/cars/${id}/activate`, order)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      })
  };
}
