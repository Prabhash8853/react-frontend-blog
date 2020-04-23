import React, { useEffect, useState } from "react";
import "../ProfileDetails/ProfileDetails.css";
import { connect } from "react-redux";
import ProfileImage from "../../components/ProfileImage/ProfileImage";
import ProfileData from "../ProfileData/ProfileData";
import * as actions from "../../../../../redux/actions/ProfileActions/ProfileAction";
import LoadingCards from "../../../Homepage/Components/Cards/LoadingCards/LoadingCards";
import PublicProfileData from "./PublicProfileData";
import { withRouter } from "react-router-dom";

const PublicProfileDetails = (props) => {
  const [publicProfileUser, setpublicProfileUser] = useState(props.user);

  useEffect(() => {
    const {
      match: { params },
    } = props;
    props.getPublicProfileData(params.author, props.Publicprofile);
  }, []);

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
              <ProfileImage src={props.publicUser.avatar} />
            )}
          </div>
          <div className="profile_data">
            {props.loading ? (
              <LoadingCards detail />
            ) : (
              <PublicProfileData
                firstName={props.publicUser.first_name}
                lastName={props.publicUser.last_name}
                username={props.publicUser.username}
                userBio={props.publicUser.short_bio}
                followers={props.publicUser.num_of_follower_user}
                following={props.publicUser.num_of_following_user}
                facebookURL={props.publicUser.facebook}
                linkedinURL={props.publicUser.linkedin}
                twitterURL={props.publicUser.twiiter}
                webURL={props.publicUser.web}
                googleURL={props.publicUser.google}
                collectionCount={props.publicUserCount}
                views={props.publicUser.view_article}
                share={props.publicUser.share_article}
                likes={props.publicUser.like_user}
                loading={props.publicUser.loading}
                publicProfile={props.Publicprofile}
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
    publicUser: state.fetchProfileData.publicUser,
    error: state.fetchProfileData.error,
    publicUserCount: state.fetchProfileData.publicUserCount,
    publicUserArticles: state.fetchProfileData.publicUserArticles,
    loading: state.fetchProfileData.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPublicProfileData: (user) => {
      dispatch(actions.getPublicProfileActions({ user: user }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PublicProfileDetails));
