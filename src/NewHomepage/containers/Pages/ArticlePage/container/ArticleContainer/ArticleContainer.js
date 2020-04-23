import React, { useState, useEffect, Suspense } from "react";
import "./ArticleContainer.css";
import { connect } from "react-redux";
import LikeSection from "../LikeSection/LikeSection";
import * as actions from "../../../../../redux/actions/ArticleDetailsActions/ArticleDetailsActions";
import * as Utility from "../../../../../../utility/DateTitle/DateTitle";
import FooterNew from "../../../../../components/CommonComponents/Footer/FooterNew";
import LoadingCards from "../../../Homepage/Components/Cards/LoadingCards/LoadingCards";
import { withRouter, Redirect } from "react-router-dom";

const ArticleSection = React.lazy(() =>
  import("../ArticleSection/ArticleSection")
);

const RelatedArticles = React.lazy(() =>
  import("../RelatedArticles/RelatedArticles")
);

const ArticleContainer = (props) => {
  const [scrollingDown, setscrollingDown] = useState(false);
  const [lastScrollTop, setlastScrollTop] = useState(0);

  const getStaticURL = (url) => {
    if (props.location.search === "") {
      getURLByRouterLocation(url);
    }
  };

  const getURLByRouterLocation = (url) => {
    // const id = props.location.search.slice(
    //   "?articleId=".length,
    //   props.location.search.length
    // );
    // /api/collection-for-users/@zee-media/how-to-get-rid-of-stress-naturally-10-tips-9d08fe42/
    props.getArticleDetails(`/api/collection-for-users${url}`);
  };

  const {
    match: { params },
  } = props;

  useEffect(() => {
    getStaticURL(props.location.pathname);
    // if (params.author && props.location.search !== "") {
    //   console.log("entring article page");
    //   getStaticURL(params);
    // } else if (props.location.search) {
    //   console.log("entering to check location.search");
    //   getStaticURL(params);
    // }
    if (window.innerWidth <= 768) {
      window.addEventListener("scroll", onScroll);
    }
  }, [params]);
  const onScroll = () => {
    var st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
      setscrollingDown(true);
    } else {
      setscrollingDown(false);
    }
    setlastScrollTop(st <= 0 ? 0 : st);
  };

  let displayElements;
  if (props.error) {
    displayElements = (
      <React.Fragment>{/* <Redirect to="/" /> */}</React.Fragment>
    );
  } else {
    displayElements = (
      <React.Fragment>
        <div className="article_container-main">
          <div className="above_article"></div>
          <div className="side_ads">
            {/*  <img className ="side_banner" src="/static/img/ads.svg" alt="ads" /> */}
          </div>
          <div className="articles">
            <Suspense fallback={<LoadingCards image detail />}>
              <ArticleSection {...props} />
            </Suspense>
          </div>
          <div
            className={
              scrollingDown
                ? "article_footer article_footer_hide"
                : "article_footer"
            }
          >
            <LikeSection />
          </div>
        </div>
        <Suspense fallback={<LoadingCards image detail />}>
          <RelatedArticles articleId={props.articleData.id} />
        </Suspense>
        <FooterNew />
      </React.Fragment>
    );
  }
  return <>{displayElements}</>;
};

const mapStateToProps = (state) => {
  return {
    articleData: state.fetchArticleDetails.ArticleDetailsData,
    loading: state.fetchArticleDetails.loading,
    error: state.fetchArticleDetails.error !== null,
    author: state.fetchArticleDetails.author,
    content: state.fetchArticleDetails.content,
    avatar: state.fetchArticleDetails.avatar,
    sub_category: state.fetchArticleDetails.sub_category,
    category: state.fetchArticleDetails.category,
    username: state.fetchArticleDetails.authorUsername,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getArticleDetails: (url) => {
      dispatch(actions.fetchArticleDetails({ url: url }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ArticleContainer));
