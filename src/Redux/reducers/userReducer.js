import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_USER:
      return { ...state, userData: action.currentUser };
    case types.IS_ADMIN:
      return { ...state, isAdmin: action.isAdmin };
    case types.IS_LOGGED_IN:
      return { ...state, isLoggedIn: action.isLoggedIn };
    case types.RESET_USER:
      return { ...initialState };
    default:
      return state;
  }
}
