import React, { Suspense } from "react";
import "./ArticleSection.css";
import ArticleAuthor from "../../component/ArticleAuthor/ArticleAuthor";
import ArticleAuthorBottom from "../ArticleAuthorBottom/ArticleAuthorBottom";

import LoadingCards from "../../../Homepage/Components/Cards/LoadingCards/LoadingCards";
import Buttons from "../../../../../components/CommonComponents/Buttons/Buttons";
import RenderArticle from "../RenderArticle/RenderArticle";
import { Helmet } from "react-helmet";
import { withRouter, Redirect } from "react-router-dom";

const ArticleSection = (props) => {
  // const createMarkup = (content) => {
  //   return {
  //     __html: content,
  //   };
  // };

  let displayElement = [];
  for (var key in props.sub_category) {
    displayElement[key] = (
      <div className="subcategory_data" key={key}>
        <h6>{props.sub_category[key].name}</h6>
      </div>
    );
  }

  return (
    <React.Fragment>
      <Helmet>
        <meta name="og:title" content={props.articleData.title} />

        <meta
          property="og:description"
          content={props.articleData.description}
        />
        <meta property="og:url" content={window.location.href} />
        <meta name="og:image" content={props.articleData.get_cover_image} />
        <meta name="twitter:title" content={props.articleData.title} />
        <meta
          name="twitter:description"
          content={props.articleData.description}
        />
        <meta
          name="twitter:image"
          content={props.articleData.get_cover_image}
        />
        <meta name="twitter:card" content={window.location.href} />
      </Helmet>
      <div className="article_section">
        <div className="article_title">
          {props.location.state !== undefined &&
          props.location.state.EditArticle ? (
            <div className="edit-btn-block">
              <Buttons
                anchorTag
                btnName="Edit"
                className="edit-btn"
                href={`/api/collection/edit/${props.articleData.id}/`}
              />
            </div>
          ) : null}

          <div className="ttl-block">
            {props.loading ? (
              <LoadingCards detail description />
            ) : (
              <h2 className="title_content">
                <b>{props.articleData.title}</b>
              </h2>
            )}
          </div>
        </div>
        {props.loading ? (
          <LoadingCards image imageStyleLoader="image-round" />
        ) : (
          <ArticleAuthor
            avatar={props.avatar}
            AuthorName={props.author}
            views={props.articleData.num_of_views}
            published={props.articleData.published_on}
            authorURL={props.username}
          />
        )}
        {props.loading ? (
          <React.Fragment>
            <LoadingCards image detail author />
            <LoadingCards detail title author />
            <LoadingCards detail title author />
            <LoadingCards detail title author />
            <LoadingCards detail title author />
            <LoadingCards detail title author />
            <LoadingCards detail title author image />
            <LoadingCards detail title author />
            <LoadingCards detail title author />
            <LoadingCards detail title author />
            <LoadingCards detail title author />
            <LoadingCards detail title author />
            <LoadingCards detail title author />
          </React.Fragment>
        ) : (
          <div className="article_content">
            <p className="description_content">
              {props.articleData.description}
            </p>
            <img
              className="cover-image"
              src={props.articleData.get_cover_image}
              alt="Article Card image"
              height="175"
              srcSet={props.articleData.get_cover_image}
            />

            <RenderArticle
              articleContent={props.content}
              doFollow={props.articleData.do_follow}
            />
          </div>
        )}

        {props.loading ? (
          <LoadingCards image imageStyleLoader="image-round" />
        ) : (
          <ArticleAuthorBottom
            avatar={props.avatar}
            AuthorName={props.author}
            // authorBio={props.articleData.author.short_bio}
            authorURL={props.username}
            collectionId={props.articleData.id}
          />
        )}
        <div className="subcategory_container">{displayElement}</div>
        <Suspense fallback={<LoadingCards image detail />}></Suspense>
      </div>
    </React.Fragment>
  );
};

export default withRouter(ArticleSection);
