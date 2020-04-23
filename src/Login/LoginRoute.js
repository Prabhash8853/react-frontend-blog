import React from "react";
import Media from "react-media";
import LoginDtpComponent from "./LoginDesktop/LoginDesktop";
import LoginMbComponent from "./LoginMb/LoginMb";

const LoginRoute = props => {
  return (
    <Media query="(max-width: 968px)">
      {matches => (matches ? <LoginMbComponent /> : <LoginDtpComponent />)}
    </Media>
  );
};

export default LoginRoute;
