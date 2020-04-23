import React from "react";
import { Redirect } from "react-router-dom";

const NotFound = (props) => {
  const {
    match: { params },
  } = props;

  const id = params.title.slice(
    params.title.lastIndexOf("-") + 1,
    params.title.length
  );
  const slug = params.title.slice(0, params.title.lastIndexOf("-"));

  let displayElement;
  if (params.author && params.title) {
    console.log("entering old pages");
    displayElement = (
      <Redirect
        to={{
          pathname: `/${slug}/`,
          search: `?articleId=${id}`,
        }}
      />
    );
  } else {
    displayElement = <Redirect to="*" />;
  }

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

export default NotFound;
