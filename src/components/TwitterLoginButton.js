import React from "react";
import TwitterLogin from "react-twitter-auth";

export default function TwitterLoginButton({ loginResponse }) {
  return (
    <TwitterLogin
      loginUrl="http://localhost:4000/api/v1/auth/twitter"
      onFailure={loginResponse}
      className="btn btn-social-icon btn-twitter"
      onSuccess={loginResponse}
      requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
      showIcon={true}
    >
      <b>t</b>
    </TwitterLogin>
  );
}
