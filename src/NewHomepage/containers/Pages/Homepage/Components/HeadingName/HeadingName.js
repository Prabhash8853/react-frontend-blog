import React from "react";
import "./HeadingName.css";

const HeadingName = props => {
  return (
    <div className="heading">
      <h4>{props.headingName}</h4>
    </div>
  );
};

export default HeadingName;
