import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { user } from "./user.reducer";
import { cars } from "./cars.reducer";
import { offer } from "./offer.reducer";
import { request } from "./request.reducer";
import { orders } from "./orders.reducer";

const appReducer = combineReducers({
  authentication,
  registration,
  user,
  cars,
  offer,
  request,
  orders
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    // state.authentication.user = undefined;
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
