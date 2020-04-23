import * as actionTypes from "../types";
import axios from "axios";
import { getCookie } from "../../../../utility/getCookie/getCookie";

const likeDone = counter => {
  return {
    type: actionTypes.LIKE_SUCCESS,
    payload: counter
  };
};

const likeFail = err => {
  return {
    type: actionTypes.LIKE_FAIL,
    payload: err
  };
};

export const postLike = obj => dispatch => {
  var likeData = new FormData();
  likeData.set("collection_id", obj.collection_id);
  var csrftoken = getCookie("csrftoken");
  axios({
    method: "POST",
    url: "api/api/like/",
    data: likeData,
    headers: {
      "X-CSRFTOKEN": csrftoken,
      // Authorization: `Token ${process.env.AUTH_KEY}`,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(res => {
      dispatch(likeDone(res.data.like_counter));
    })
    .catch(err => dispatch(likeFail(err)));
};

const getLikeSuccess = res => {
  return {
    type: actionTypes.GET_LIKE,
    payload: res
  };
};

export const getLike = () => dispatch => {
  var csrftoken = getCookie("csrftoken");

  axios({
    method: "GET",
    url: "api/api/like/",
    headers: {
      "X-CSRFTOKEN": csrftoken
      // Authorization: `Token ${process.env.AUTH_KEY}`
    }
  })
    .then(res => {
      dispatch(getLikeSuccess(res.data));
    })
    .catch(err => console.log(err));
};
