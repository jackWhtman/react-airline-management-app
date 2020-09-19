import * as types from "./actionTypes";
import * as userApi from "../../api/userApi";

export function loadUser(currentUser) {
  return { type: types.LOAD_USER, currentUser };
}

export function setIsLoggedIn(isLoggedIn) {
  return { type: types.IS_LOGGED_IN, isLoggedIn };
}

export function resetUserLoginDetails(isLoggedIn) {
  return { type: types.RESET_USER, isLoggedIn };
}

export function setIsAdmin(isAdmin) {
  return { type: types.IS_ADMIN, isAdmin };
}

export function addCurrentUser(user) {
  return function (dispatch) {
    return userApi
      .getUserRole()
      .then((urd) => {
        dispatch(loadUser(user));
        dispatch(setIsAdmin(findRole(urd)));
        dispatch(setIsLoggedIn(true));
        return;
      })
      .catch((error) => {
        alert("Loading users failed" + error);
      });
  };

  function findRole(urd) {
    const l = urd.filter((u) => u.name === user.name && u.email === user.email);
    if (l.length > 0) {
      return l[0].role === "ADMIN" ? true : false;
    } else {
      return false;
    }
  }
}
