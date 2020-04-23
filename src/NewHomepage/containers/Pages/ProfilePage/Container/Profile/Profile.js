import React, { useState, memo } from "react";
import "./Profile.css";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileDataNavigator from "../../components/ProfileDataNavigator/ProfileDataNavigator";
import ProfileArticles from "../ProfileArticles/ProfileArticles";
import NavbarNew from "../../../../Navbar/NavbarNew";

import ProfilePublished from "../ProfileNavigations/ProfilePublished";
import ProfileDraft from "../ProfileNavigations/ProfileDraft";
import { useEffect } from "react";
import { Redirect } from "react-router";

const Profile = (props) => {
  // const [articleSection, setArticleSection] = useState(true);
  const [likeSection, setLikeSection] = useState(false);
  const [openSection, setOpenSection] = useState("article");
  const [activeSection, setActiveSection] = useState("article");
  const handleOpenSection = (e) => {
    setOpenSection(e);
    setActiveSection(e);
  };

  useEffect(() => {});

  const user = localStorage.getItem("usr_3000_v1");

  let displayElement;
  if (props.isAuthenticate) {
    displayElement = (
      <React.Fragment>
        <NavbarNew isAuthenticate={props.isAuthenticate} />
        <div className="profile_container">
          <div className="profile_block">
            <ProfileDetails user={user} />
            <br />
            <ProfileDataNavigator
              // Likeclicked={() => handleLike("like")}
              Articleclicked={() => handleOpenSection("article")}
              publishedClicked={() => handleOpenSection("published")}
              draftClicked={() => handleOpenSection("draft")}
              openLikes={likeSection}
              active={activeSection}
            />
            <br />
            <div>
              {/* {openSection === "like" && <ProfileLikes />} */}
              {openSection === "article" && <ProfileArticles />}
              {openSection === "draft" && <ProfileDraft />}
              {openSection === "published" && <ProfilePublished />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (displayElement = <Redirect to="/login" />);
  }

  return <React.Fragment>{displayElement}</React.Fragment>;
};

export default Profile;
