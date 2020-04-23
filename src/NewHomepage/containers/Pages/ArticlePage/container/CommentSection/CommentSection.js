import React, { useState, useEffect } from "react";
import "./CommentSection.css";
import { connect } from "react-redux";
import * as actions from "../../../../../redux/actions/AuthActions/AuthAction";
import Buttons from "../../../../../components/CommonComponents/Buttons/Buttons";
import { withRouter } from "react-router-dom";
import * as commentActions from "../../../../../redux/actions/ArticleDetailsActions/CommentActions";

const CommentSection = props => {
  const [commentValue, setCommentValue] = useState("");

  useEffect(() => {
    props.getCommentSection(props.collection_id);
    return () => {
      props.getCommentSection(props.collection_id);
    };
  }, []);

  const handleCommentValue = e => {
    setCommentValue(e.target.value);
    // console.log(commentValue);
  };

  const handleRoute = () => {
    props.history.push({
      pathname: `/login/?next=${props.locations.pathname}`
    });
  };
  const handlePostComment = () => {
    props.postComment(props.collection_id, commentValue);
  };

  return (
    <React.Fragment>
      <div className="comment">
        {!props.isAuthenticate && (
          <Buttons
            btnName="Hi, Login/Register to comment"
            className="comment__login--btn"
            click={handleRoute}
          ></Buttons>
        )}

        {props.isAuthenticate && (
          <div className="comment__block">
            <input
              type="text"
              className="comment__block--input"
              onChange={e => handleCommentValue(e)}
              name="comment"
              value={commentValue}
              placeholder="Write Your Comment Here"
            />
            <Buttons
              className="comment_btn"
              btnName="Comment"
              click={handlePostComment}
            />

            <div className="comment__block-Commentlist">
              <div className="comment_user_list">
                <div className="comment_user-avatar">
                  <img src="" />
                </div>
                <div className="comment_user-comment">
                  <div className="comment_user-name"></div>
                  <div className="comment_user-text">
                    <div className="comment_user-commenttext"></div>
                    <div className="comment_user-delete"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticate: state.fetchAuthReducer.token !== null,
    commentData: state.fetchComments.commentData,
    error: state.fetchComments.error,
    loading: state.fetchComments.loading,
    done: state.fetchComments.done
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => {
      dispatch(actions.authCheckState());
    },
    getCommentSection: id => {
      dispatch(commentActions.getCommentAction({ id: id }));
    },
    postComment: (collection_id, comment_text) => {
      dispatch(
        commentActions.postComment({
          collection_id: collection_id,
          comment_text: comment_text
        })
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CommentSection));
