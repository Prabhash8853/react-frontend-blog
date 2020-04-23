import React from "react";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class OAuth extends React.Component {
  render() {
    return (
      <div className="OAuth">
        <div className="fl-4 text-center">Continue With</div>
        <div className="fl-2 text-center font-bold">
          <a href="/accounts/google/login/?process=login">
            <FontAwesomeIcon icon={["fab", "google"]} />
          </a>
        </div>
        <div className="fl-2 text-center font-bold">
          <a href="/accounts/facebook/login/?process=login">
            <FontAwesomeIcon icon={["fab", "facebook-square"]} />
          </a>
        </div>

        <div className="fl-2 text-center font-bold">
          <a href="/accounts/linkedin_oauth2/login/?process=login">
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
        </div>
      </div>
    );
  }
}

export default OAuth;
