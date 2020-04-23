import React, { useState, memo } from "react";
import "../Profile/Profile.css";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileDataNavigator from "../../components/ProfileDataNavigator/ProfileDataNavigator";
import ProfileArticles from "../ProfileArticles/ProfileArticles";
import NavbarNew from "../../../../Navbar/NavbarNew";
import ProfilePublished from "../ProfileNavigations/ProfilePublished";
import ProfileDraft from "../ProfileNavigations/ProfileDraft";
import { useEffect } from "react";
import { Redirect, withRouter } from "react-router";
import PublicProfileDetails from "./PublicProfileDetails";
import PublicProfileArticles from "./PublicProfileArticles";
// import { Redirect } from "react-router";

const PublicProfile = (props) => {
  // const [articleSection, setArticleSection] = useState(true);
  const [likeSection, setLikeSection] = useState(false);
  const [openSection, setOpenSection] = useState("article");
  const [Publicprofile, setPublicProfile] = useState(true);
  const [author, setAuthor] = useState();
  const handleLike = (e) => {
    setOpenSection(e);
  };

  useEffect(() => {
    const {
      match: { params },
    } = props;
    setAuthor(params.author);
  });

  return (
    <React.Fragment>
      <NavbarNew isAuthenticate={props.isAuthenticate} />
      <div className="profile_container">
        <div className="profile_block">
          <PublicProfileDetails Publicprofile={Publicprofile} user={author} />
          <br />
          <ProfileDataNavigator
            // Likeclicked={() => handleLike("like")}
            Articleclicked={() => handleLike("article")}
            hidePublishedArticle
            hideDrafts
            publicData
          />
          <br />
          <div>
            {/* {openSection === "like" && <ProfileLikes />} */}
            {openSection === "article" && (
              <PublicProfileArticles Publicprofile={Publicprofile} />
            )}
            {openSection === "published" && <ProfilePublished Publicprofile />}
            {openSection === "draft" && <ProfileDraft Publicprofile />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(PublicProfile);
