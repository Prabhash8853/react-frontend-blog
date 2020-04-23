import React from "react";
import "./ArticleButtons.css";

const ArticleButtons = props => {
  let classes = ["article_btns"];
  classes.push(props.className);

  return (
    <React.Fragment>
      <div onClick={props.onClick} className={classes.join(" ")}>
        {props.btnName}
      </div>
    </React.Fragment>
  );
};

export default ArticleButtons;
