import React from "react";

import "./Header.css";

const Header = props => {
  return (
    <div className="header">
      <div className="trending-tp-hd row">
        <div className="pg-hd-contain">
          <h1 className="pg-head">{props.pageName}</h1>
        </div>
      </div>
      <span className="span-border"></span>
      <span className="span-border-sm"></span>
    </div>
  );
};

export default Header;
