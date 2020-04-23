import React, { useEffect, Suspense } from "react";
import "./RelatedArticles.css";
import { connect } from "react-redux";
import * as Utility from "../../../../../../utility/DateTitle/DateTitle";
import * as actions from "../../../../../redux/actions/ArticleDetailsActions/ArticleDetailsActions";
import { withRouter } from "react-router-dom";
import LoadingCards from "../../../Homepage/Components/Cards/LoadingCards/LoadingCards";
import { useIntersectionObserver } from "../../../../../../hooks/IntersectionObserverHook";

const MainCards = React.lazy(() =>
  import("../../../Homepage/Components/Cards/MainCards/MainCards")
);

const RelatedArticles = (props) => {
  const loadingref = React.useRef();

  const [inView, entry] = useIntersectionObserver(loadingref, {
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      props.getRelatedArticles(props.articleId);
    }
  }, [inView]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [props.articleId]);

  let displayElement = [];
  for (var key in props.related_articles) {
    displayElement[key] = (
      <div className="article_related_content flex-3" key={key}>
        <Suspense fallback={<LoadingCards image detail />}>
          <MainCards
            image={true}
            ImageSrc={props.related_articles[key].get_cover_image}
            title={Utility.handleTitleChange(props.related_articles[key].title)}
            articleLink={`/@${props.related_articles[key].author.username}/${props.related_articles[key].slug_without_uuid_field}-${props.related_articles[key].uuid_field}`}
            authorName={
              props.related_articles[key].author.first_name +
              " " +
              props.related_articles[key].author.last_name
            }
            authorLink={
              "/author/" + props.related_articles[key].author.username
            }
            views
          />
        </Suspense>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="relatedArtcle_container">
        <div className="relatedArticle_header">
          <h4>Related Article</h4>
        </div>

        <div className="articles_related" ref={loadingref}>
          {displayElement}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    related_articles: state.fetchrelatedArticlesReducer.related_articles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedArticles: (id) => {
      dispatch(actions.fetchRelatedArticles({ id: id }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(RelatedArticles));
