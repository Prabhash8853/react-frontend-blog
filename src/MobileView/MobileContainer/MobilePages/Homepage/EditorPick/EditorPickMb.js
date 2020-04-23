import React from "react";
import { connect } from "react-redux";
import "./EditorPick.css";
import { getEditorPicks } from "../../../../../NewHomepage/redux/actions/Homepage/EditorPicksAction";
import * as utility from "../../../../../utility/DateTitle/DateTitle";
import {
  postLike,
  getLike,
} from "../../../../../NewHomepage/redux/actions/Homepage/PostLikeActions";
import {
  postBookmark,
  getBookmark,
} from "../../../../../NewHomepage/redux/actions/Homepage/MainArtcileACtion";
import MainCards from "../../../../../NewHomepage/containers/Pages/Homepage/Components/Cards/MainCards/MainCards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import HeadingName from "../../../../../NewHomepage/containers/Pages/Homepage/Components/HeadingName/HeadingName";
// import GoogleAd from "../../../../../AdsComponent/GoogleAd";
import Media from "react-media";
import { Redirect } from "react-router-dom";
import NavbarNew from "../../../../../NewHomepage/containers/Navbar/NavbarNew";

class EditorPickMb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ipVar: "",
    };
  }

  componentDidMount() {
    this.props.getEditorPicks();
    // this.props.getLike();
    // var ip = location.host;
    // this.setState({
    //   ipVar: ip.slice(0, -5)
    // });
    // if (localStorage.getItem("token")) {
    //   this.props.getBookmark();
    // }
  }

  componentWillUnmount() {
    this.props.getEditorPicks();
  }

  render() {
    let _sourceData;
    this.props.editorPickDatas.map((data, index) => {
      _sourceData = data._source;
    });

    var DisplayingEditorData;

    // console.log(this.props.editorPickDatas);

    if (_sourceData) {
      DisplayingEditorData = this.props.editorPickDatas.map((data, index) => {
        return (
          <MainCards
            key={index}
            image={false}
            title={utility.handleTitleChange(data._source.title)}
            description={data._source.description.slice(0, 70) + "..."}
            articleLink={`/${data.slug_without_uuid_field}/`}
            search={data.uuid_field}
            authorName={utility.handleAuthorName(
              data._source.author_fullnme,
              data._source.author
            )}
            authorLink={"/author/" + data.author}
            views={data._source.num_of_views}
          />
        );
      });
    } else {
      DisplayingEditorData = this.props.editorPickDatas.map((data, index) => {
        return (
          <MainCards
            key={index}
            image={false}
            title={utility.handleTitleChange(data.title)}
            description={data.description.slice(0, 70) + "..."}
            articleLink={`/${data.slug_without_uuid_field}/`}
            search={data.uuid_field}
            authorName={utility.handleAuthorName(
              data.author_fullnme,
              data.author
            )}
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
            <div className="editorPick_container">
              <NavbarNew isAuthenticate={this.props.isAuthenticate} />
              <HeadingName headingName="Editor's Pick" />
              {/* <GoogleAd
                adSlot="7579265094"
                style={{
                  display: "block",
                  width: "320px",
                  height: "50px"
                }}
                responsive="true"
              /> */}
              {DisplayingEditorData}
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
    editorPickDatas: state.fetchEditorPick.editorPickData,
    likeDone: state.fetchPostLike.likeDone !== null,
    isAuthenticate: state.fetchAuthReducer.token !== null,
    likeData: state.fetchPostLike.likeData,
    BookmarkedData: state.fetchMainArticleReducer.getBookmarkedData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getEditorPicks: () => {
      dispatch(getEditorPicks());
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

const EditorPickMbComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorPickMb);

export default EditorPickMbComponent;

// handlePostBookmark = (article_id, index) => {
//   if (this.props.isAuthenticate && getCookie("csrftoken")) {
//     this.props.postBookmark(article_id);
//     this.props.editorPickDatas[index].bookmarked = true;
//     this.props.getBookmark();
//   } else {
//     let history = createBrowserHistory();
//     history.push("/login/");
//     window.location.reload();
//   }
// };

// handlePostlike = (article_id, index) => {
//   this.props.postLike(article_id);
//   this.props.editorPickDatas[index].liked = true;
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
//   for (let i = 0; i < this.props.editorPickDatas.length; i++) {
//     if (val == this.props.editorPickDatas[i].article_id) {
//       this.props.editorPickDatas[i].liked = true;
//     }
//   }
// }

// for (let i = 0; i < this.props.BookmarkedData.length; i++) {
//   for (let j = 0; j < this.props.editorPickDatas.length; j++) {
//     var profile_id = this.props.BookmarkedData[i].collection;
//     if (profile_id == this.props.editorPickDatas[j].article_id) {
//       this.props.editorPickDatas[j].bookmarked = true;
//     }
//   }
// }
