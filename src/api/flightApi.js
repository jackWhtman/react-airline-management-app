import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/flights/";

export function getFlights() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
