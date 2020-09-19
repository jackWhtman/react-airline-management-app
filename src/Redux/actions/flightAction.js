import * as types from "./actionTypes";
import * as flightsApi from "../../api/flightApi";
import { handleResponse } from "../../api/apiUtils";

export function loadFlightsSuccess(flights) {
  return { type: types.LOAD_FLIGHTS_SUCCESS, flights };
}

export function loadFlights() {
  console.log("inloadFlights");
  return function (dispatch) {
    return flightsApi
      .getFlights()
      .then((flights) => dispatch(loadFlightsSuccess(flights)))
      .catch((error) => {
        throw error;
      });
  };
}
