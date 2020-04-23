import React from "react";
import "./ProfileBio.css";

const ProfileBio = props => {
  return (
    <React.Fragment>
      <div className="profile_bio wd-100 mg-10">
        <div className="profileBio_container">
          <p className="author_bio">{props.userBio}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileBio;
