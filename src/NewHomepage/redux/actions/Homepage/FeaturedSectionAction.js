import { FETCH_POPULAR_DATA, FETCH_POPULAR_DATA_START } from "../types";
import axios from "axios";

export const getFeaturedStart = () => {
  return {
    type: FETCH_POPULAR_DATA_START
  };
};

export const getFeaturedSuccess = data => {
  return {
    type: FETCH_POPULAR_DATA,
    payload: data
  };
};

export const getFeaturedSection = () => dispatch => {
  axios
    .get("api/home/api/popular/?query=2", {
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      dispatch(getFeaturedSuccess(res.data));
    })
    .catch(err => {
      if (err) {
        axios({
          method: "GET",
          url: "api/home/api/popular/?query=2",
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(res => {
            dispatch(getFeaturedSuccess(res.data));
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
};
