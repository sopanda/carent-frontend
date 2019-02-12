import axios from "../axios-url";

export function fetchOfferById(id) {
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
