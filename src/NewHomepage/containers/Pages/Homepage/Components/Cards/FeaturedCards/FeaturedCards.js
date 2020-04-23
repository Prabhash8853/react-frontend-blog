import React from "react";
import "./FeaturedCards.css";
import { Link, withRouter } from "react-router-dom";

const FeaturedCards = (props) => {
  return (
    <div className="featured_card">
      <div className="featured_card-body">
        <div className="featured_card-title">
          <Link
            to={{
              pathname: props.articleLink,
            }}
          >
            <h1>{props.title}</h1>
          </Link>
        </div>
        <div className="featured_card-desc">
          <Link
            to={{
              pathname: props.articleLink,
            }}
          >
            <p>{props.description}</p>
          </Link>
        </div>
        {props.editorCard ? (
          <div className="author_name-editorpick">
            <a href={props.authorLink}>
              <p>{props.authorName}</p>
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default withRouter(FeaturedCards);
