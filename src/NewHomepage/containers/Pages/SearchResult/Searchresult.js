import React, { useState, useEffect } from "react";
// import "./SearchResult.css";
import { connect } from "react-redux";

import {
  postBookmark,
  getBookmark,
} from "../../../redux/actions/Homepage/MainArtcileACtion";
import {
  postLike,
  getLike,
} from "../../../redux/actions/Homepage/PostLikeActions";

import * as actions from "../../../redux/actions/SeachAction/SearchAction";
import NavbarNew from "../../Navbar/NavbarNew";
import Header from "../../../components/CommonComponents/Header/Header";
import MainCards from "../Homepage/Components/Cards/MainCards/MainCards";
import * as Utility from "../../../../utility/DateTitle/DateTitle";
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoadingCards from "../Homepage/Components/Cards/LoadingCards/LoadingCards";

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      ipVar: "",
      offset: 0,
      size: 10,
    };
  }

  onScroll = () => {
    const {
      match: { params },
    } = this.props;

    var scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;
    var scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;
    var clientHeight =
      document.documentElement.clientHeight || window.innerHeight;
    var scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

    if (scrolledToBottom) {
      this.setState({
        page: this.state.page + 1,
      });
      this.props.getSearchResultAction(params.id, this.state.page);
    }
  };

  componentDidMount() {
    const query = this.props.location.search.slice("?query=".length);
    // const val = query.slice("?query=".length, this.props.location.search);
    console.log(query);
    this.props.getSearchResultAction(query, this.state.page);

    // window.addEventListener("scroll", this.onScroll);
    this.props.getLike();
    if (localStorage.getItem("__vig__mod_1")) {
      this.props.getBookmark();
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  }

  render() {
    const handlePostlike = (article_id, index) => {
      this.props.postLike(article_id);
      this.props.MainArticleData[index].liked = !this.props.MainArticleData[
        index
      ].liked;
      this.props.getLike();
    };

    const handlePostBookmark = (article_id, index) => {
      if (this.props.isAuthenticate) {
        this.props.postBookmark(article_id);
        this.props.MainArticleData[index].bookmarked = true;
        this.props.getBookmark();
      } else {
        // let history = createBrowserHistory();
        this.this.props.history.push("/login/");
        window.location.reload();
      }
    };

    let displayElement = [];
    for (var key in this.props.searchedArticle) {
      if (this.props.searchedArticle.hasOwnProperty(key)) {
        //   console.log(this.props.searchedArticle[key].name);

        displayElement[key] = (
          <MainCards
            key={key}
            image={true}
            ImageSrc={this.props.searchedArticle[key].full_size_image}
            title={Utility.handleTitleChange(
              this.props.searchedArticle[key].title
            )}
            description={Utility.handleDescription(
              this.props.searchedArticle[key].description
            )}
            articleLink={`${this.props.searchedArticle[key].get_share_url}`}
            authorName={
              this.props.searchedArticle[key].author.first_name +
              " " +
              this.props.searchedArticle[key].author.last_name
            }
            authorLink={"/author/" + this.props.searchedArticle[key].author}
            views
            postBookmark={() =>
              handlePostBookmark(
                this.props.searchedArticle[key].article_id,
                key
              )
            }
            postlike={() =>
              handlePostlike(this.props.searchedArticle[key].id, key)
            }
            liked={
              this.props.searchedArticle[key].liked ? (
                <FontAwesomeIcon icon={faHeart} className="color58" />
              ) : (
                <FontAwesomeIcon icon={["far", "heart"]} className="color58" />
              )
            }
            bookmarked={
              this.props.searchedArticle[key].bookmarked ? (
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

    return (
      <React.Fragment>
        <NavbarNew isAuthenticate={this.props.isAuthenticate} />
        <Header
          HeaderValue={"Search result"}
          className="category_list_header"
        />
        <div className="search_result_page">
          {this.props.loading ? <LoadingCards image detail /> : null}
          {this.props.loading ? (
            <LoadingCards style={{ marginTop: "20px" }} detail />
          ) : null}
          {this.props.loading ? (
            <LoadingCards style={{ marginTop: "20px" }} detail />
          ) : null}
          {this.props.loading ? (
            <LoadingCards style={{ marginTop: "20px" }} detail />
          ) : null}

          {displayElement}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToprops = (state) => {
  return {
    searchedArticle: state.fetchSearchData.result,
    error: state.fetchSearchData.err,
    loading: state.fetchSearchData.loading,
    likeDone: state.fetchPostLike.likeDone !== null,
    isAuthenticate: state.fetchAuthReducer.token !== null,
    likeData: state.fetchPostLike.likeData,
    BookmarkedData: state.fetchMainArticleReducer.getBookmarkedData,
    // categoryName: state.fetchsearchedArticleReducer.categoryHeader
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    getSearchResultAction: (query, page) => {
      dispatch(actions.getSearch({ query: query, page: page }));
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

export default connect(mapStateToprops, mapDispatchToprops)(SearchResult);
