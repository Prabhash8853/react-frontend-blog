import React from "react";

const HeaderName = props => {
  return (
    <React.Fragment>
      <div className="subscription_heading">
        <h3>{props.headingName}</h3>
      </div>
    </React.Fragment>
  );
};

export default HeaderName;
