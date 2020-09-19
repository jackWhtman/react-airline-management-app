import React from "react";
import FacebookLogin from "react-facebook-login";

export default function FacebookLoginButton({ loginResponse }) {
  return (
    <FacebookLogin
      appId="test"
      autoLoad={true}
      reauthenticate={true}
      fields="name,email,picture"
      onClick={loginResponse}
      callback={loginResponse}
    />
  );
}
