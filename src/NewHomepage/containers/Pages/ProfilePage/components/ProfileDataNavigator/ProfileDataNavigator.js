import React, { useState } from "react";
import "./ProfileDataNavigator.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  // faBookmark,
  // faHeart,
  // faComments,
  faSave,
  faPenNib,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProfileDataNavigator = (props) => {
  return (
    <React.Fragment>
      <div className="profileNavigator_container">
        <div
          className={
            props.publicData
              ? "profileNavigator publicDisplay"
              : "profileNavigator"
          }
        >
          <div
            className={
              props.publicData
                ? "profile-article profile-mg active"
                : props.active === "article"
                ? "profile-article profile-mg flex-4 active"
                : "profile-article profile-mg flex-4 "
            }
            onClick={props.Articleclicked}
          >
            {props.publicData ? null : (
              <div className="circle">
                <FontAwesomeIcon className="navigator_icon" icon={faPen} />
              </div>
            )}
            <p className="profile_marker">
              {props.publicData ? "Published Articles" : "All Articles"}
            </p>
          </div>

          {props.hidePublishedArticle ? null : (
            <div
              className={
                props.active === "published"
                  ? "profile-Likes profile-mg flex-4 active"
                  : "profile-Likes profile-mg flex-4"
              }
              onClick={props.publishedClicked}
            >
              <div className="circle">
                <FontAwesomeIcon className="navigator_icon" icon={faPenNib} />
              </div>
              <p className="profile_marker">Published</p>
            </div>
          )}

          {props.hideDrafts ? null : (
            <div
              className={
                props.active === "draft"
                  ? "profile-Comments profile-mg flex-4 active"
                  : "profile-Comments profile-mg flex-4"
              }
              onClick={props.draftClicked}
            >
              <div className="circle">
                <FontAwesomeIcon className="navigator_icon" icon={faSave} />
              </div>
              <p className="profile_marker">Draft</p>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileDataNavigator;
