import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/users";

export function getUserRole() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
