import React, { Suspense } from "react";
import { connect } from "react-redux";
import "./Homepage.css";
import {
  getMainArticle,
  postBookmark,
  getBookmark,
} from "../../../../../redux/actions/Homepage/MainArtcileACtion";
import {
  postLike,
  getLike,
} from "../../../../../redux/actions/Homepage/PostLikeActions";
import * as Utility from "../../../../../../utility/DateTitle/DateTitle";
import MainCards from "../../Components/Cards/MainCards/MainCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import LoadingCards from "../../Components/Cards/LoadingCards/LoadingCards";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      ipVar: "",
      limit: 7,
    };
  }

  componentDidMount() {
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }

  handleObserver = (entities, observer) => {
    if (entities[0].intersectionRatio > 0) {
      this.props.getMainArticle(this.state.limit, this.state.offset);
      this.setState({
        offset: this.state.offset + 7,
      });
    }
  };

  render() {
    var DisplayingCenterData;
    DisplayingCenterData = this.props.MainArticleData.map((data, index) => {
      if (index == 0 || index % 5 == 0) {
        return (
          <MainCards
            key={index}
            image={true}
            ImageSrc={data.image}
            title={Utility.handleTitleChange(data.title)}
            description={Utility.handleDescription(data.description)}
            articleLink={`/@${data.author}/${data.slug_without_uuid_field}-${data.uuid_field}`}
            // search={``}
            authorName={data.author_fullnme}
            authorLink={"/author/" + data.author}
            views={data.num_of_views}
            postBookmark={() => this.handlePostBookmark(data.article_id, index)}
            postlike={() => this.handlePostlike(data.article_id, index)}
            liked={
              data.liked ? (
                <FontAwesomeIcon icon={faHeart} className="color58" />
              ) : (
                <FontAwesomeIcon icon={["far", "heart"]} className="color58" />
              )
            }
            bookmarked={
              data.bookmarked ? (
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
      } else {
        return (
          <MainCards
            key={index}
            image={false}
            title={Utility.handleTitleChange(data.title)}
            description={Utility.handleDescription(data.description)}
            articleLink={`/@${data.author}/${data.slug_without_uuid_field}-${data.uuid_field}`}
            // search={`/${data.slug_without_uuid_field}-${data.uuid_field}`}
            authorName={data.author_fullnme}
            authorLink={"/author/" + data.author}
            views={data.num_of_views}
            postBookmark={() => this.handlePostBookmark(data.article_id, index)}
            postlike={() => this.handlePostlike(data.article_id, index)}
            liked={
              data.liked ? (
                <FontAwesomeIcon icon={faHeart} className="color58" />
              ) : (
                <FontAwesomeIcon icon={["far", "heart"]} className="color58" />
              )
            }
            bookmarked={
              data.bookmarked ? (
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
    });

    return (
      <div className="main_container">
        {DisplayingCenterData}
        <div ref={(loadingRef) => (this.loadingRef = loadingRef)}>
          <LoadingCards image detail />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    MainArticleData: state.fetchMainArticleReducer.MainArticleData,
    error: state.fetchMainArticleReducer.error,
    loading: state.fetchMainArticleReducer.loading,
    likeDone: state.fetchPostLike.likeDone !== null,
    isAuthenticate: state.fetchAuthReducer.token !== null,
    likeData: state.fetchPostLike.likeData,
    BookmarkedData: state.fetchMainArticleReducer.getBookmarkedData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMainArticle: (limit, offset) => {
      dispatch(
        getMainArticle({
          limit: limit,
          offset: offset,
        })
      );
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

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
