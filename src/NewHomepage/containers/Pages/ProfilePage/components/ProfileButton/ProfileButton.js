import React from "react";
import "./ProfileButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProfileButton = props => {
  let classes = ["profile_btn"];
  classes.push(props.className);
  return (
    <React.Fragment>
      <Link to={props.href}>
        <div className="edit_profileBtn">
          <div className={classes.join(" ")} onClick={props.onClick}>
            {props.btnName}
            {"  "}
            {props.icon ? <FontAwesomeIcon icon={faUserEdit} /> : null}
          </div>
        </div>
      </Link>
    </React.Fragment>
  );
};

export default ProfileButton;
