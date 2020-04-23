import React, { useEffect, useState } from "react";
import "./ProfileDetails.css";
import { connect } from "react-redux";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import ProfileData from "../ProfileData/ProfileData";
import * as actions from "../../../../../redux/actions/ProfileActions/ProfileAction";
import LoadingCards from "../../../Homepage/Components/Cards/LoadingCards/LoadingCards";

const ProfileDetails = (props) => {
  const [publicUser, setPublicUser] = useState(props.Publicprofile);

  useEffect(() => {
    if (publicUser) {
      props.getPublicProfileData(props.user, publicUser);
    } else {
      props.getProfileData(props.user, publicUser);
    }
  }, [publicUser]);

  return (
    <React.Fragment>
      <div className="profile_details_container">
        <div className="profile_details">
          <div className="profile_image">
            {props.loading ? (
              <LoadingCards
                image
                className="profile_loader"
                imageStyleLoader="image_loader"
              />
            ) : (
              <ProfileImage src={props.userData.avatar} />
            )}
          </div>
          <div className="profile_data">
            {props.loading ? (
              <LoadingCards detail />
            ) : (
              <ProfileData
                firstName={props.userData.first_name}
                lastName={props.userData.last_name}
                username={props.userData.username}
                userBio={props.userData.short_bio}
                followers={props.userData.num_of_follower_user}
                following={props.userData.num_of_following_user}
                facebookURL={props.userData.facebook}
                linkedinURL={props.userData.linkedin}
                twitterURL={props.userData.twiiter}
                webURL={props.userData.web}
                googleURL={props.userData.google}
                collectionCount={props.count}
                views={props.userData.view_article}
                share={props.userData.share_article}
                likes={props.userData.like_user}
                loading={props.userData.loading}
                publicProfile={props.publicProfile}
              />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.fetchProfileData.userData,
    error: state.fetchProfileData.error,
    count: state.fetchProfileData.count,
    articleData: state.fetchProfileData.articleData,
    loading: state.fetchProfileData.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileData: (user, publicUser) => {
      dispatch(
        actions.getProfileActions({ user: user, publicUser: publicUser })
      );
    },
    getPublicProfileData: (user, publicUser) => {
      dispatch(
        actions.getPublicProfileActions({ user: user, publicUser: publicUser })
      );
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
