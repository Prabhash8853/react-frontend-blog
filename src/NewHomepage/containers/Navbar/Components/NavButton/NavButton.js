import * as React from "react";
import "./NavButton.css";
import Spinner from "../../../../../loader/Spinner";
// import Spinner from "../../../../loader/Spinner";

const NavButton = props => {
  let classes = ["btnStyle"];
  classes.push(props.className);

  let hoc_class = [""];
  hoc_class.push(props.BtnTopClass);

  return (
    <a href={props.href} className={hoc_class.join(" ")}>
      <div
        className={classes.join(" ")}
        onClick={props.click}
        style={props.style}
      >
        {props.btnName} {props.loaderIcon ? <Spinner /> : null}
      </div>
    </a>
  );
};

export default NavButton;
