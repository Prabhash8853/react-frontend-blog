import * as actionTypes from "../types";
import axios from "axios";

axios.defaults.baseURL = "/";

const SearchStart = (res) => {
  return {
    type: actionTypes.SEARCH_START,
    data: res,
  };
};
const SearchSucess = (res) => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    data: res,
  };
};

const SearchError = (err) => {
  return {
    type: actionTypes.SEARCH_FAIL,
    err: err,
  };
};

const dataloading = (obj, dispatch) => {
  console.log(obj);
  axios({
    method: "GET",
    url: `api/api/v1/global-search/?query=${obj.query}&page=${obj.page}`,
  })
    .then((res) => {
      console.log(res.data.results);
      dispatch(SearchSucess(res.data.results));
    })
    .catch((err) => dispatch(SearchError(err)));
};

export const getSearch = (obj) => (dispatch) => {
  dispatch(SearchStart());
  dataloading(obj, dispatch);
};
