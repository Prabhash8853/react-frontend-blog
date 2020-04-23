import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
const APIRoute = (props) => {
  let displayElement;
  if (props.location.pathname === "/api/admin/") {
    console.log(props.location.pathname);
    displayElement = window.location.href = `/api/collection/create/`;
  }

  useEffect(() => {}, []);

  return (
    <div>
      {/* {
        (window.location.href = `https://myvigyaa.com/api/${params.author}/${params.title}`)
      } */}
      {displayElement}
      {/* <h1>Page Not Found</h1>9 */}
    </div>
  );
};

export default APIRoute;
