import { combineReducers } from "redux";
import currentUser from "./userReducer";
import flights from "./flightReducer";

const rootReducer = combineReducers({
  currentUser,
  flights,
});

export default rootReducer;
