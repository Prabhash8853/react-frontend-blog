import * as actionTypes from "../types";
import axios from "axios";
axios.defaults.baseURL = "/";
// axios.defaults.baseURL = "/";

export const postComment = data => {
  return {
    type: actionTypes.POST_COMMENT,
    payload: data
  };
};

export const postCommentAction = obj => dispatch => {
  axios({
    method: "POST",
    url: "/api/v1/comment/",
    data: {
      collection_id: obj.id,
      comment_text: obj.text
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`
    }
  }).then(res => {
    dispatch(postComment(res.data));
  });
};

// Comment section get API

export const getCommentStart = data => {
  return {
    type: actionTypes.GET_COMMENT_START
  };
};

export const getCommentSuccess = data => {
  return {
    type: actionTypes.GET_COMMENT_SUCCESS,
    payload: data
  };
};

export const getCommentFail = err => {
  return {
    type: actionTypes.GET_COMMENT_FAIL,
    payload: err
  };
};

export const getCommentAction = obj => dispatch => {
  axios({
    method: "POST",
    url: `/api/v1/comment-details/?collection_id=${obj.id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`
    }
  })
    .then(res => {
      dispatch(postComment(res.data));
    })
    .catch(err => dispatch(getCommentFail(err)));
};
