import React from "react";
import "./ProfileFollowers.css";

const ProfileFollowers = props => {
  return (
    <React.Fragment>
      <div className="profile_followers wd-100 mg-10">
        <div className="followers-grid CntFnt">
          <p>{props.fllwrsCount}</p>
        </div>
        <div className="followers-grid CntFnt">
          <p>{props.fllwingCount}</p>
        </div>
        <div className="followers-grid CntFnt">
          <p>{props.collectionCount}</p>
        </div>
        <div className="followers-grid CntFnt">
          <p>{props.likes}</p>
        </div>
        <div className="followers-grid CntFnt">
          <p>{props.views}</p>
        </div>
        <div className="followers-grid CntFnt">
          <p>{props.share}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileFollowers;
