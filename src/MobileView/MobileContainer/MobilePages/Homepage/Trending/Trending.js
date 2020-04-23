import React from "react";
import { connect } from "react-redux";
// import Header from "../../../../MobileComponents/PagesHeader/Header";
import { getFeaturedSection } from "../../../../../NewHomepage/redux/actions/Homepage/FeaturedSectionAction";
import "./Trending.css";
// import TrendingCards from "../../../../MobileComponents/MbCards/TrendingCards/TrendingCards";
import * as utility from "../../../../../utility/DateTitle/DateTitle";
// import EditorPickMbComponent from "../EditorPick/EditorPickMb";
// import Loading from "../../../../MobileComponents/Loader/Loading";
import {
  postLike,
  getLike,
} from "../../../../../NewHomepage/redux/actions/Homepage/PostLikeActions";
// import { getCookie } from "../../../../../utility/getCookie/getCookie";
// import { createBrowserHistory } from "history";
import {
  postBookmark,
  getBookmark,
} from "../../../../../NewHomepage/redux/actions/Homepage/MainArtcileACtion";
// import GoogleAd from "../../../../../AdsComponent/GoogleAd";
import MainCards from "../../../../../NewHomepage/containers/Pages/Homepage/Components/Cards/MainCards/MainCards";
import HeadingName from "../../../../../NewHomepage/containers/Pages/Homepage/Components/HeadingName/HeadingName";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
// import Spinner from "../../../../../loader/Spinner";
import Media from "react-media";
import { Redirect } from "react-router-dom";
import NavbarNew from "../../../../../NewHomepage/containers/Navbar/NavbarNew";
import LoadingCards from "../../../../../NewHomepage/containers/Pages/Homepage/Components/Cards/LoadingCards/LoadingCards";

class Trending extends React.Component {
  editorRef = React.createRef;
  trendingRef = React.createRef;
  constructor(props) {
    super(props);
    this.state = {
      ipVar: "",
    };
  }

  componentDidMount() {
    this.props.getFeaturedSection();
  }

  componentWillUnmount() {
    this.props.getFeaturedSection();
  }

  componentDidUpdate(prevProps) {}

  // scrollToMyRef = (ref) => ref.current.scrollIntoView({ behavior: "smooth" });

  // scrollToOrigin = () =>
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  render() {
    let _sourceData;
    this.props.popularDatas.map((data, index) => {
      _sourceData = data._source;
    });

    var DisplayingPopularData;

    if (_sourceData) {
      DisplayingPopularData = this.props.popularDatas.map((data, index) => {
        return (
          <MainCards
            image={false}
            key={index}
            title={utility.handleTitleChange(data._source.title)}
            description={utility.handleTitleChange(data._source.description)}
            articleLink={`/${data.slug_without_uuid_field}/`}
            search={data.uuid_field}
            authorName={data._source.author_fullnme}
            authorLink={"/author/" + data.author}
            views={data.num_of_views}
          />
        );
      });
    } else {
      DisplayingPopularData = this.props.popularDatas.map((data, index) => {
        return (
          <MainCards
            image={false}
            key={index}
            title={utility.handleTitleChange(data.title)}
            description={utility.handleTitleChange(data.description)}
            articleLink={`/${data.slug_without_uuid_field}/`}
            search={data.uuid_field}
            authorName={data.author_fullnme}
            authorLink={"/author/" + data.author}
            views={data.num_of_views}
          />
        );
      });
    }

    return (
      <Media query="(max-width: 769px)">
        {(matches) =>
          matches ? (
            <div className="trending_container">
              <NavbarNew isAuthenticate={this.props.isAuthenticate} />
              <div className="trending_container-elements">
                <HeadingName headingName="Popular On Vigyaa" />
                {!this.props.loading ? (
                  <React.Fragment>{DisplayingPopularData}</React.Fragment>
                ) : (
                  <React.Fragment>
                    <LoadingCards detail />
                    <LoadingCards detail />
                    <LoadingCards detail />
                    <LoadingCards detail />
                  </React.Fragment>
                )}
              </div>
            </div>
          ) : (
            <Redirect to="/" />
          )
        }
      </Media>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    popularDatas: state.fetchPopularReducer.popularData,
    likeDone: state.fetchPostLike.likeDone !== null,
    isAuthenticate: state.fetchAuthReducer.token !== null,
    likeData: state.fetchPostLike.likeData,
    BookmarkedData: state.fetchMainArticleReducer.getBookmarkedData,
    loading: state.fetchPopularReducer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFeaturedSection: () => {
      dispatch(getFeaturedSection());
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

const TrendingComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);

export default TrendingComponent;

// this.props.getLike();
// var ip = location.host;
// this.setState({
//   ipVar: ip.slice(0, -5)
// });
// if (localStorage.getItem("token")) {
//   this.props.getBookmark();
// }

// handlePostBookmark = (article_id, index) => {
//   if (this.props.isAuthenticate && getCookie("csrftoken")) {
//     this.props.postBookmark(article_id);
//     this.props.popularDatas[index].bookmarked = true;
//     this.props.getBookmark();
//   } else {
//     let history = createBrowserHistory();
//     history.push("/login/");
//     window.location.reload();
//   }
// };

// handlePostlike = (article_id, index) => {
//   this.props.postLike(article_id);
//   this.props.popularDatas[index].liked = true;
//   this.props.getLike();
// };

// var article_id = [...this.props.likeData];
// var getData = article_id.map(data => {
//   if (data.ip_address == this.state.ipVar) {
//     return data.collection;
//   }
// });

// var val;
// for (let i = 0; i < getData.length; i++) {
//   val = getData[i];
//   for (let i = 0; i < this.props.popularDatas.length; i++) {
//     if (val == this.props.popularDatas[i].article_id) {
//       this.props.popularDatas[i].liked = true;
//     }
//   }
// }

// for (let i = 0; i < this.props.BookmarkedData.length; i++) {
//   for (let j = 0; j < this.props.popularDatas.length; j++) {
//     var profile_id = this.props.BookmarkedData[i].collection;
//     if (profile_id == this.props.popularDatas[j].article_id) {
//       this.props.popularDatas[j].bookmarked = true;
//     }
//   }
// }
