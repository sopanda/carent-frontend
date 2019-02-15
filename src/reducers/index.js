import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { user } from "./user.reducer";
import { cars } from "./cars.reducer";
import { offer } from "./offer.reducer";
import { request } from "./request.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  user,
  cars,
  offer,
  request
});

export default rootReducer;
