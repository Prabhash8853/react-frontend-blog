import React, { useState, useEffect } from "react";
import "./MainCards.css";
import { Link, withRouter } from "react-router-dom";

import { Suspense, lazy } from "react";
import LoadingCards from "../LoadingCards/LoadingCards";

const Image = React.lazy(() => import("./Image"));

const MainCards = (props) => {
  // var ImageUrl = props.ImageSrc;
  // const [IsMobile, setIsMobile] = useState(false);

  return (
    <React.Fragment>
      <div className={props.profile ? "profile_card" : "main_card"}>
        {props.image ? (
          <div
            className={
              props.profile ? "main_profile-card-img flex-4" : "main_card-img"
            }
          >
            {!props.loading ? (
              <Link
                to={{
                  pathname: props.articleLink,
                }}
              >
                <Suspense fallback={<LoadingCards image />}>
                  <Image profile={props.profile} ImageSrc={props.ImageSrc} />
                </Suspense>
              </Link>
            ) : (
              <LoadingCards image />
            )}
          </div>
        ) : null}
        <div
          className={
            props.profile
              ? "main_card-body flex-10 main_profile_card"
              : "main_card-body "
          }
        >
          <div className="main_card-body-ttl">
            <h1>
              {props.profile ? (
                <a href={props.articleLink}>{props.title}</a>
              ) : (
                <Link
                  to={{
                    pathname: props.articleLink,
                  }}
                >
                  {props.title}
                </Link>
              )}
            </h1>
          </div>
          <div className="main_card-body-dsc">
            <Link
              to={{
                pathname: props.articleLink,
              }}
            >
              <p>{props.description}</p>
            </Link>
          </div>
          <div className="main_card-body-author">
            <div className="main_card-author-name flex-10">
              <a href={props.authorLink}>
                <p>{props.authorName}</p>
              </a>
            </div>
            <div className="main_card-like-bookmark">
              <div className="like-bookmark_container">
                <div className="main_card-like" onClick={props.postlike}>
                  {props.liked}
                </div>
                <div
                  className="main_card-bookmark"
                  onClick={props.postBookmark}
                >
                  {props.bookmarked}
                </div>
              </div>
            </div>
          </div>
          {!props.views && <div className="views">{props.views} views</div>}
        </div>
        {props.profile && <span className="a-la-carteIcon"></span>}
      </div>
    </React.Fragment>
  );
};

export default withRouter(MainCards);
