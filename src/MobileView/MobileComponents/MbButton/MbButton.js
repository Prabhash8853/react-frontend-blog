import React from "react";
import "./MbButton.css";

const MbButton = props => {
  return (
    <a href={props.href} className="btn-link-class">
      <div className="mb-btnStyle">{props.btnName}</div>
    </a>
  );
};

export default MbButton;
