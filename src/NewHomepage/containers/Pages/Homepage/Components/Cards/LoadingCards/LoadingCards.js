import React from "react";
import "./LoadingCards.css";

const LoadingCards = (props) => {
  let loader_style = ["card_loader"];
  loader_style.push(props.className);

  let classes = ["card-loader-image loading"];
  classes.push(props.imageStyleLoader);

  return (
    <div className="container_cards" style={props.style}>
      <section className={loader_style.join(" ")}>
        {props.image ? (
          <figure className={classes.join(" ")} style={props.imgStyle}></figure>
        ) : null}
        {props.detail ? (
          <div className="card-detail">
            {!props.title && <h3 className="card-title loading"></h3>}
            {/* <p className="card-description loading"></p> */}
            {!props.description && <p className="card-description loading"></p>}
            {!props.author && <p className="card-author loading"></p>}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default LoadingCards;
