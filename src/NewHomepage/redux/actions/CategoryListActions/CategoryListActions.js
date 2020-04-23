import * as actionTypes from "../types";
import axios from "axios";

export const CategoryListStart = () => {
  return {
    type: actionTypes.CATEGORY_LIST_START,
  };
};

export const CategoryListSuccess = (data) => {
  return {
    type: actionTypes.CATEGORY_LIST_SUCCESS,
    payload: data,
  };
};

export const CategoryListFail = (err) => {
  return {
    type: actionTypes.CATEGORY_LIST_FAIL,
    payload: err,
  };
};

axios.defaults.baseURL = "/";

export const CategoryListActions = () => (dispatch) => {
  dispatch(CategoryListStart());
  axios({
    method: "GET",
    url: `api/api/v1/category-viewset/?remove_pagination=true`,
    // headers: {
    //   Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`
    // }
  })
    .then((res) => {
      console.log(res.data);
      dispatch(CategoryListSuccess(res.data));
    })
    .catch((err) => {
      dispatch(CategoryListFail(err));
    });
};
