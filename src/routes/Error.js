import React from "react";
import { withRouter, Redirect } from "react-router-dom";

const ErrorPage = () => {
  let redirect;

  return (
    <div>
      <h1>Sorry No Data Found</h1>
      {<Redirect to="/" />}
    </div>
  );
};

export default ErrorPage;
