import React from "react";
import "./LogoNew.css";
const LogoImg = require("../../../../../assets/img/vigyaa-logo-home.svg");

const LogoNew = props => {
  return (
    <React.Fragment>
      <div className="vigyaa-nav-logo txt-lt flex-3">
        <a href="/">
          <img src={LogoImg} alt="vigyaa logo" />
        </a>
        <span className="logo_span">
          IDEAS EVOLVE
          <br />
          KEEP READING...
        </span>
      </div>
    </React.Fragment>
  );
};

export default LogoNew;
