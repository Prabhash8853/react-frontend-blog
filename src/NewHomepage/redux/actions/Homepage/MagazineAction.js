import * as actionTypes from "../types";
import axios from "axios";

export const getMagazineStart = () => {
  return {
    type: actionTypes.FETCH_MAGAZINE_START
  };
};

export const getMagazineSuccess = (magazine_cover, pdf) => {
  return {
    type: actionTypes.FETCH_MAGAZINE_SUCCESS,
    payload: magazine_cover,
    pdf: pdf
  };
};

export const getMagazineFail = err => {
  return {
    type: actionTypes.FETCH_MAGAZINE_FAIL,
    payload: err
  };
};

export const getMagazine = () => dispatch => {
  dispatch(getMagazineStart());
  axios
    .get("api/home/api/magzine/?query=2", {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      dispatch(
        getMagazineSuccess(res.data[0].file_cover, res.data[0].file_pdf)
      );
    })
    .catch(err => dispatch(getMagazineFail(err)));
};
