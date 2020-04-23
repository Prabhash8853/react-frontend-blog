import * as actionTypes from "../types";
import axios from "axios";

export const getEditorPickStart = () => {
  return {
    type: actionTypes.EDITOR_PICK_START
  };
};

export const getEditorPickSuccess = data => {
  return {
    type: actionTypes.EDITOR_PICK_SUCCESS,
    payload: data
  };
};

export const getEditorPickFail = err => {
  return {
    type: actionTypes.EDITOR_PICK_FAIL,
    error: err
  };
};

export const getEditorPicks = () => dispatch => {
  axios
    .get("api/home/api/editor/?query=2", {
      headers: {
        "Content-Type": "application/json"
        // "Authorization": `Token ${process.env.AUTH_KEY}`
      }
    })
    .then(res => {
      dispatch(getEditorPickSuccess(res.data));
    })
    .catch(err => {
      if (err) {
        axios({
          method: "GET",
          url: "api/home/api/editor/?query=2",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            dispatch(getEditorPickSuccess(res.data));
          })
          .catch(err => {
            dispatch(getEditorPickFail(err));
          });
      }
    });
};
