import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { registration } from "./registration.reducer";
import { user } from "./user.reducer";
import { cars } from "./cars.reducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  user,
  cars
});

export default rootReducer;
