import * as React from "react";
import "./Logo.css";
const LogoImg = require("../../../../assets/img/vigyaa-logo-home.svg");

const Logo = props => {
  return (
    <div className="logo_sec">
      <a href="/">
        <img src={LogoImg} alt="vigyaa-logo" width="100" height="43" />
      </a>
      <span className="logo_sec_span">
        IDEAS EVOLVE
        <br />
        KEEP READING...
      </span>
    </div>
  );
};

export default Logo;
