import { FETCH_TRENDING } from "../types";
import axios from "axios";

export const getTrendingData = () => dispatch => {
  axios
    .get("api/home/api/popular/", {
      headers: {
        "Content-Type": "application/json"
        // "Authorization": `Token ${process.env.AUTH_KEY}`
      }
    })
    .then(res => {
      dispatch({
        type: FETCH_TRENDING,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
