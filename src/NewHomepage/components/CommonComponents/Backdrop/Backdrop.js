import * as React from "react";
import "./Backdrop.css";

const Backdrop = props => {
  const classes = ["backdrop"];
  classes.push(props.className);

  return <div className={classes.join(" ")} onClick={props.click}></div>;
};

export default Backdrop;
