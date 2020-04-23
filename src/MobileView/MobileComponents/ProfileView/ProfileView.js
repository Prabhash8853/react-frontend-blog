import React from "react";
import Buttons from "../../../NewHomepage/components/CommonComponents/Buttons/Buttons";
import "./ProfileView.css";

const ProfileView = props => {
  return (
    <div className="profile-component">
      <div className="author-intro">
        <div className="author-pf-img">
          <img
            src="https://specials-images.forbesimg.com/imageserve/5c097d76a7ea437059198809/960x0.jpg?cropX1=0&cropX2=2000&cropY1=0&cropY2=2000"
            alt="profile-image"
          />
        </div>
        <div className="author-pf-details  clearfix">
          <div className="author-pf-name">
            <p>Satya Nadella</p>
          </div>
          <div className="author-follow ">
            <Buttons
              btnName="Follow"
              style={{
                border: "1px solid #002B98",
                color: "#002B98",
                fontWeight: "bold",
                fontFamily: "Proxima Nova"
              }}
            />
          </div>
        </div>
      </div>

      <div className="author-pf-intro-detail">
        <p>
          Satya Narayana Nadella is an engineer and Indian American business
          executive. He currently serves as the Chief Executive Officer (CEO) of
          Microsoft, succeeding Steve Ballmer in 2014. He led a giant round of
          layoffs and flattened the organization, getting rid of middle
          managers.
        </p>
      </div>

      <div className="author-collection-details">
        <div className="follower-count">
          <p className="pd-10">249 Followers</p>
        </div>
        <div className="following-count">
          <p className="pd-10">300 Following</p>
        </div>
        <div className="collection-count">
          <p className="pd-10">25 Collections</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
