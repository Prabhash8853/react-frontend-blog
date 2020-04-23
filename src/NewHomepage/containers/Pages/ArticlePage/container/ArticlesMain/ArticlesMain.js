import React, { useEffect } from "react";
import "./ArticlesMain.css";
import { createRef } from "react";
import ArticleContainer from "../ArticleContainer/ArticleContainer";
import Header from "../../../../../components/CommonComponents/Header/Header";
import NavbarNew from "../../../../Navbar/NavbarNew";

const ArticlesMain = (props) => {
  const articleRef = createRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="article_container" ref={articleRef}>
      <div className="article_contain">
        <NavbarNew hideSliderTop isAuthenticate={props.isAuthenticate} />
        {/* <Header HeaderValue="Profile" className="" /> */}
      </div>
      <ArticleContainer />
    </div>
  );
};

export default ArticlesMain;
