import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as userActions from "../Redux/actions/userActions";
import FacebookLogin from "./FacebookLoginButton";
import GoogleLogin from "./GoogleLoginButton";
import TwitterLogin from "./TwitterLoginButton";
import PropType from "prop-types";

function LoginOptions({ isAdmin, isLoggedIn, action }) {
  useEffect(() => {
    action.resetUserLoginDetails();
  }, []);

  const loginResponse = (response) => {
    validateResponse(response) && addToStore(response);
  };
  const addToStore = (response) => {
    const user = {
      name: response.profileObj.name,
      email: response.profileObj.email,
      profileImg: response.profileObj.imageUrl,
    };
    action.addCurrentUser(user);
  };
  const validateResponse = (rseponse) => {
    if (rseponse.error != null) {
      return false;
    }
    return true;
  };
  return (
    <>
      {isLoggedIn &&
        (isAdmin ? <Redirect to="/admin" /> : <Redirect to="/staff" />)}
      <div className="jumbotron text-center">
        <h1>AirLines Management System</h1>
        <h5>React based App</h5>
      </div>
      <div className="text-center">
        <span>
          <div>
            <b>Login With :</b>{" "}
          </div>
          <GoogleLogin loginResponse={loginResponse} />
          {"   "}
          <FacebookLogin loginResponse={loginResponse} />
          {"   "}
          <TwitterLogin loginResponse={loginResponse}>
            <b>t</b>
          </TwitterLogin>
        </span>
      </div>
    </>
  );
}
LoginOptions.propType = {
  isAdmin: PropType.bool.isRequired,
  isLoggedIn: PropType.bool.isRequired,
  action: PropType.object.isRequired,
};

function mapState(state) {
  return {
    isAdmin: state.currentUser.isAdmin,
    isLoggedIn: state.currentUser.isLoggedIn,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    action: bindActionCreators(userActions, dispatch),
  };
}
export default connect(mapState, mapDispatchToProps)(LoginOptions);
