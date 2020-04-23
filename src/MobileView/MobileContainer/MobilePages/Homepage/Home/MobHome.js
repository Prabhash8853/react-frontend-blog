import React, { Suspense } from "react";
import "./MobMain.css";
import { connect } from "react-redux";
import {
  getMainArticle,
  postBookmark,
  getBookmark,
} from "../../../../../NewHomepage/redux/actions/Homepage/MainArtcileACtion";
import {
  postLike,
  getLike,
} from "../../../../../NewHomepage/redux/actions/Homepage/PostLikeActions";
import * as Utility from "../../../../../utility/DateTitle/DateTitle";
import MainCards from "../../../../../NewHomepage/containers/Pages/Homepage/Components/Cards/MainCards/MainCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import LoadingCards from "../../../../../NewHomepage/containers/Pages/Homepage/Components/Cards/LoadingCards/LoadingCards";

class MobHome extends React.Component {
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
      console.log(this.state.offset);
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
            loading={this.props.loading}
            ImageSrc={data.image}
            title={Utility.handleTitleChange(data.title)}
            description={Utility.handleDescription(data.description)}
            articleLink={`/@${data.author}/${data.slug_without_uuid_field}-${data.uuid_field}`}
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
            loading={this.props.loading}
            title={Utility.handleTitleChange(data.title)}
            description={Utility.handleDescription(data.description)}
            articleLink={`/@${data.author}/${data.slug_without_uuid_field}-${data.uuid_field}`}
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
      <div className="mob-main">
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
    likeDone: state.fetchPostLike.likeDone !== null,
    isAuthenticate: state.fetchAuthReducer.token !== null,
    likeData: state.fetchPostLike.likeData,
    BookmarkedData: state.fetchMainArticleReducer.getBookmarkedData,
    magazineDatas: state.fetchMagazineReducer.MagazineData,
    loading: state.fetchMainArticleReducer.loading,
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

const MobHomeComponent = connect(mapStateToProps, mapDispatchToProps)(MobHome);

export default MobHomeComponent;
