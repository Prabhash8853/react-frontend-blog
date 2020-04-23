import React, { ReactNode } from "react";
import "./ContinueButton.css";
import Spinner from "../../../loader/Spinner";
// import Spinner from '../../../loader/Spinner';

const ContinueButton = props => {
  let classes = ["btn_style"];
  classes.push(props.className);

  return (
    <React.Fragment>
      <div className={classes.join(" ")} onClick={props.onClick}>
        {props.btnName}{" "}
        {props.Loading ? <Spinner className="spinner_color" /> : null}
      </div>
    </React.Fragment>
  );
};

export default ContinueButton;
