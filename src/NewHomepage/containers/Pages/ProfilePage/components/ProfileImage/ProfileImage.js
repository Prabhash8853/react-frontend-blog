import React from "react";
import "./ProfileImage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const ProfileImage = props => {
  // let classes = ["image_edit"];
  // classes.push(props.className);
  return (
    <div className="profile_image_container">
      <div className="image_container">
        {props.src && <img src={props.src} alt="profile_image" />}
        {!props.src && <img src={props.src} alt="profile_image" />}
        {props.children}
      </div>
    </div>
  );
};

export default ProfileImage;
