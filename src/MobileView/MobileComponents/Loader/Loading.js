import React from "react";
import "./Loader.css";

const Loading = props => {
  return (
    <div className="full-page-loader">
      <img
        width="200"
        src="/static/img/vigyaa-logo-home.svg"
        alt="vigyaa logo"
      />
    </div>
  );
};

export default Loading;
