import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import "./CategoryResult.css";
import NavbarNew from "../../Navbar/NavbarNew";
import {
  getMainArticle,
  postBookmark,
  getBookmark,
} from "../../../redux/actions/Homepage/MainArtcileACtion";
import {
  postLike,
  getLike,
} from "../../../redux/actions/Homepage/PostLikeActions";
import * as actions from "../../../redux/actions/CategoryResultsAction/CategoryResultAction";
import LoadingCards from "../Homepage/Components/Cards/LoadingCards/LoadingCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { getCookie } from "../../../../utility/getCookie/getCookie";
import MainCards from "../Homepage/Components/Cards/MainCards/MainCards";
import * as Utility from "../../../../utility/DateTitle/DateTitle";
import "./CategoryResult.css";
import Header from "../../../components/CommonComponents/Header/Header";

const CategoryResult = (props) => {
  const {
    match: { params },
  } = props;

  useEffect(() => {
    props.getCategoryResultsAction(params.id);
    props.getLike();
    if (localStorage.getItem("__vig__mod_1")) {
      props.getBookmark();
    }
    return () => {
      props.getCategoryResultsAction(params.id);
    };
  }, [params.id]);

  const handlePostlike = (article_id, index) => {
    props.postLike(article_id);
    props.MainArticleData[index].liked = !props.MainArticleData[index].liked;
    props.getLike();
  };

  const handlePostBookmark = (article_id, index) => {
    if (props.isAuthenticate) {
      props.postBookmark(article_id);
      props.MainArticleData[index].bookmarked = true;
      props.getBookmark();
    } else {
      // let history = createBrowserHistory();
      props.history.push("/login/");
      window.location.reload();
    }
  };

  let displayElement = [];
  for (var key in props.categoryResult) {
    if (props.categoryResult.hasOwnProperty(key)) {
      console.log(props.categoryResult);
      displayElement[key] = (
        <MainCards
          key={key}
          image={true}
          ImageSrc={props.categoryResult[key].get_cover_image}
          title={Utility.handleTitleChange(props.categoryResult[key].title)}
          description={Utility.handleDescription(
            props.categoryResult[key].description
          )}
          // articleLink={`${this.props.categoryResult[key]}`}
          articleLink={`/@${props.categoryResult[key].author.username}/${props.categoryResult[key].slug_without_uuid_field}-${props.categoryResult[key].uuid_field}`}
          authorName={
            props.categoryResult[key].author.first_name +
            " " +
            props.categoryResult[key].author.last_name
          }
          authorLink={"/author/" + props.categoryResult[key].author.username}
          views={props.categoryResult[key].num_of_views}
          postBookmark={() =>
            handlePostBookmark(props.categoryResult[key].article_id, key)
          }
          postlike={() => handlePostlike(props.categoryResult[key].id, key)}
          liked={
            props.categoryResult[key].liked ? (
              <FontAwesomeIcon icon={faHeart} className="color58" />
            ) : (
              <FontAwesomeIcon icon={["far", "heart"]} className="color58" />
            )
          }
          bookmarked={
            props.categoryResult[key].bookmarked ? (
              <FontAwesomeIcon icon={faBookmark} className="color-green" />
            ) : (
              <FontAwesomeIcon
                icon={["far", "bookmark"]}
                className="color-green"
              />
            )
          }
        />
      );
    }
  }

  console.log(props.categoryResult);

  return (
    <React.Fragment>
      <NavbarNew isAuthenticate={props.isAuthenticate} />
      <Header HeaderValue="" className="category_list_header" />
      <div className=" search_result_page">
        {props.loading ? <LoadingCards image detail /> : null}
        {props.loading ? (
          <LoadingCards style={{ marginTop: "20px" }} detail />
        ) : null}
        {props.loading ? (
          <LoadingCards style={{ marginTop: "20px" }} detail />
        ) : null}
        {props.loading ? (
          <LoadingCards style={{ marginTop: "20px" }} detail />
        ) : null}

        {displayElement}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    categoryResult: state.fetchCategoryResultReducer.categoryResult,
    loading: state.fetchCategoryResultReducer.loading,
    error: state.fetchCategoryResultReducer.error,
    likeDone: state.fetchPostLike.likeDone !== null,
    isAuthenticate: state.fetchAuthReducer.token !== null,
    likeData: state.fetchPostLike.likeData,
    BookmarkedData: state.fetchMainArticleReducer.getBookmarkedData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategoryResultsAction: (id) => {
      dispatch(actions.CategoryListResultAction({ id: id }));
    },
    postLike: (article_id) => {
      dispatch(postLike({ collection_id: article_id }));
    },

    postBookmark: (article_id) => {
      dispatch(postBookmark({ collection: article_id }));
    },
    getLike: () => {
      dispatch(getLike());
    },
    getBookmark: () => {
      dispatch(getBookmark());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryResult);
