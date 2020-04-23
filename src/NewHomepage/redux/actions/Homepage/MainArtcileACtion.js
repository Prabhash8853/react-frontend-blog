import * as actionTypes from "../types";
import axios from "axios";
import { getCookie } from "../../../../utility/getCookie/getCookie";

export const getMainSuccess = (data) => {
  return {
    type: actionTypes.FETCH_MAIN_SUCCESS,
    payload: data,
  };
};

export const getMainStart = () => {
  return {
    type: actionTypes.FETCH_MAIN_START,
  };
};

export const getMainFail = (err) => {
  return {
    type: actionTypes.FETCH_MAIN_FAIL,
    error: err,
  };
};

export const postMainBookmark = (result) => {
  return {
    type: actionTypes.POST_BOOKMARK,
    payload: result,
  };
};

export const postMainBookmarkFail = (err) => {
  return {
    type: actionTypes.POST_BOOKMARK_FAIL,
    error: err,
  };
};

export const getBookmarkData = (res) => {
  return {
    type: actionTypes.GET_BOOKMARK,
    payload: res,
  };
};

export const getMainBookmarkDataErr = (err) => {
  return {
    type: actionTypes.GET_BOOKMARK_FAIL,
    error: err,
  };
};

export const postBookmark = (obj) => (dispatch) => {
  var csrftoken = getCookie("csrftoken");
  var formData = new FormData();
  formData.set("action", "add");
  axios({
    method: "POST",
    url: `api/api/collection/${obj.collection}/bookmark/`,
    data: formData,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      // Authorization: `Token ${process.env.AUTH_KEY}`,
      "X-CSRFTOKEN": csrftoken,
    },
  })
    .then((res) => {
      dispatch(postMainBookmark(res));
    })
    .catch((err) => dispatch(postMainBookmarkFail(err)));
};

export const getBookmark = () => (dispatch) => {
  // var csrftoken = getCookie('csrftoken')
  var formData = new FormData();
  formData.set("action", "add");
  axios({
    method: "GET",
    url: `api/api/collection/bookmark/data/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
      // "X-CSRFTOKEN": csrftoken
    },
  })
    .then((res) => {
      dispatch(getBookmarkData(res.data));
    })
    .catch((err) => dispatch(getMainBookmarkDataErr(err)));
};

const getMainSectionData = async (obj, dispatch) => {
  const config = {
    method: "GET",
    url: `/api/home/api/normal/?limit=${obj.limit}&offset=${obj.offset}`,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const res = await axios(config);
    dispatch(getMainSuccess(res.data.results));
  } catch (e) {
    console.log(e);
    dispatch(getMainFail(e));
  }
};

export const getMainArticle = (obj) => (dispatch) => {
  dispatch(getMainStart());
  let page = obj.page;

  getMainSectionData(obj, dispatch);
};
