import React from "react";
import "./ProfileData.css";
import ProfileButton from "../../components/ProfileButton/ProfileButton";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import ProfileFollowers from "../../components/ProfileFollowers/ProfileFollowers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter, Redirect } from "react-router-dom";
import LoadingCards from "../../../Homepage/Components/Cards/LoadingCards/LoadingCards";

const ProfileData = (props) => {
  return (
    <React.Fragment>
      <div className="profileData_container">
        <div className="profile_name wd-100 mg-10">
          <div className="author_name-profile flex-10">
            {props.loading ? (
              <LoadingCards image detail title />
            ) : (
              <h5>
                {props.firstName} {props.lastName}
              </h5>
            )}
          </div>

          {!props.PublicProfile && (
            <ProfileButton
              btnName="Edit Profile"
              icon={true}
              href="/edit-profile/"
            />
          )}
        </div>

        {props.userBio !== null && <ProfileBio userBio={props.userBio} />}

        <ProfileFollowers
          fllwrsCount={props.followers + " Followers"}
          fllwingCount={props.following + " Following"}
          collectionCount={props.collectionCount + " Collections"}
          views={props.views + " views"}
          likes={props.likes + " likes"}
          share={props.share + " share"}
        />

        {!props.loading && (
          <div className="social_details">
            {props.facebookURL !== null && (
              <a href={props.facebookURL}>
                <div className="facebook-profile">
                  <FontAwesomeIcon
                    style={{ color: "3B5998" }}
                    icon={["fab", "facebook-square"]}
                    size="lg"
                  />
                </div>
              </a>
            )}
            {props.googleURL !== null && (
              <a href={props.googleURL}>
                <div className="Google-profile">
                  <FontAwesomeIcon
                    style={{ color: "#B23121" }}
                    icon={["fab", "google"]}
                    size="lg"
                  />
                </div>
              </a>
            )}
            {props.linkedinURL !== null && (
              <a href={props.linkedinURL}>
                <div className="linkedin-profile">
                  <FontAwesomeIcon
                    style={{ color: "#0E76A8" }}
                    icon={["fab", "linkedin"]}
                    size="lg"
                  />
                </div>
              </a>
            )}
            {props.twitterURL !== null && (
              <a href={props.twitterURL}>
                <div className="twitter-profile">
                  <FontAwesomeIcon
                    style={{ color: "#00ACEE" }}
                    icon={["fab", "twitter-square"]}
                    size="lg"
                  />
                </div>
              </a>
            )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default withRouter(ProfileData);
