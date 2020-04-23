import React from "react";
import "./Header.css";

const Header = props => {
  let classes = ["article_header"];
  classes.push(props.className);
  return (
    <React.Fragment>
      <div className={classes.join(" ")}>
        <h5>{props.HeaderValue}</h5>
      </div>
    </React.Fragment>
  );
};

export default Header;
