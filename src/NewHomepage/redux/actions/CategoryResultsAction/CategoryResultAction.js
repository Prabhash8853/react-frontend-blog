import * as actionTypes from "../types";
import axios from "axios";

axios.defaults.baseURL = "/";

export const CategoryListResultStart = () => {
  return {
    type: actionTypes.CATEGORY_LIST_RESULT_START,
  };
};

export const CategoryListResultSuccess = (data, categoryName) => {
  return {
    type: actionTypes.CATEGORY_LIST_RESULT__SUCCESS,
    payload: data,
  };
};

export const CategoryListResultFail = (err) => {
  return {
    type: actionTypes.CATEGORY_LIST_RESULT__FAIL,
    err: err,
  };
};

export const CategoryListResultAction = (obj) => (dispatch) => {
  dispatch(CategoryListResultStart());
  axios({
    method: "GET",
    url: `api/api/v1/all-collection-get-by-category/?category_ids=${obj.id}`,
    // headers: {
    //   Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`
    // }
  })
    .then((res) => {
      dispatch(CategoryListResultSuccess(res.data));
    })
    .catch((err) => {
      dispatch(CategoryListResultFail(err));
    });
};
