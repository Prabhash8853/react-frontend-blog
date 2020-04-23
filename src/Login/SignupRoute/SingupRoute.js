import React from "react";
import Media from "react-media";
// import SignupDesktop from '../SingupDesktop/SignupDesktop';
import SignupDesktopComp from "../SingupDesktop/SignupDesktop";
import SignupMb from "../Signup/Signup";

const SignupRoute = props => {
  return (
    <Media query="(max-width: 968px)">
      {matches => (matches ? <SignupMb /> : <SignupDesktopComp />)}
    </Media>
  );
};

export default SignupRoute;
