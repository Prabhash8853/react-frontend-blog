import React from "react";
import "./LikeSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShareSquare,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

const LikeSection = props => {
  return (
    <React.Fragment>
      <div className="like_section">
        {/* <div className="like_artcl flex-3">
          <FontAwesomeIcon
            className="like_artcl-heart fa-icon"
            icon={faHeart}
          />
        </div>
        <div className="bookmrk_artcl flex-3">
          <FontAwesomeIcon
            icon={faBookmark}
            className="bookmrk_artcl-bookmark fa-icon color_green"
          />
        </div>
        <div className="share_artcl flex-3">
          <FontAwesomeIcon
            icon={faShareSquare}
            className="share_icon fa-icon color_black"
          />
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default LikeSection;
