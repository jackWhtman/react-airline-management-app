import React from "react";
import GoogleLogin from "react-google-login";

export default function GoogleLoginButton({ loginResponse }) {
  return (
    <GoogleLogin
      clientId="1058302374323-9fh4tqttjbvo4bo7d5o4s50jo1l6m7gj.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={loginResponse}
      onFailure={loginResponse}
      cookiePolicy={"single_host_origin"}
    />
  );
}
