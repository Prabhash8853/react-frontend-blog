import * as actionTypes from "../types";
import axios from "axios";

export const getNormalMobStart = () => {
  return {
    type: actionTypes.GET_NORMAL_DATA_START
  };
};

export const getNormalDataSucess = res => {
  return {
    type: actionTypes.FETCH_NORMAL_MB,
    payload: res
  };
};

export const getNormalMob = obj => dispatch => {
  dispatch(getNormalMobStart());
  var page = obj.page;
  axios
    .get(`api/home/api/normal/?page=${page}`, {
      headers: {
        "Content-Type": "application/json"
        // "Authorization": `Token ${process.env.AUTH_KEY}`
      }
    })
    .then(res => {
      dispatch(getNormalDataSucess(res.data.results));
    })
    .catch(err => console.log(err));
};
