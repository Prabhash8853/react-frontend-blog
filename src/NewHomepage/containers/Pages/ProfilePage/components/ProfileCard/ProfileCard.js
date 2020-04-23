import React from "react";
import "./ProfileCard.css";
import { Link, withRouter } from "react-router-dom";

const ProfileCard = (props) => {
  const handleAlaCarteClick = () => {
    props.history.push({
      pathname: "/a-la-carte",
      state: {
        articleURI: props.articleURI,
      },
    });
  };

  return (
    <div className="profileCard__container">
      {props.image && (
        <div className="profileCard__img flex-3">
          <img src={props.CoverImage} alt="cover-img" />
        </div>
      )}
      <div className="profileCard__content flex-10">
        <div className="profileCard__content-data px-10">
          {props.EditArticle ? (
            <Link
              to={{
                pathname: props.articleLink,
                state: {
                  EditArticle: true,
                },
              }}
            >
              <p className="inline-block" style={{ width: "90%" }}>
                <b>{props.Title}</b>
              </p>
            </Link>
          ) : (
            <Link
              to={{
                pathname: props.articleLink,
              }}
            >
              <p className="inline-block" style={{ width: "90%" }}>
                <b>{props.Title}</b>
              </p>
            </Link>
          )}
          {!props.Publicprofile && (
            <p
              className="a-la-carte inline-block"
              onClick={handleAlaCarteClick}
            >
              <img src="/static/img/ala.svg" alt="a-la-carte" />
            </p>
          )}

          <Link
            to={{
              pathname: props.articleLink,
              state: {
                EditArticle: true,
              },
            }}
          >
            <p>{props.Content}</p>
          </Link>
        </div>

        {/* <div className="profileCard__aLaCarte "></div> */}
      </div>
    </div>
  );
};

export default withRouter(ProfileCard);
