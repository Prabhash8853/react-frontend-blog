import React from "react";
import "./Spinner.css";

const Spinner = props => {
  let classes = ["loader"];
  classes.push(props.className);
  return (
    <React.Fragment>
      <div className={classes.join(" ")}></div>
    </React.Fragment>
  );
};

export default Spinner;
