import axios from "axios";
import * as actionTypes from "../types";
axios.defaults.baseURL = "/";

const getAlaCarteItemsSuccess = data => {
  return {
    type: actionTypes.GET_A_LA_CARTE_ITEMS,
    payload: data
  };
};

export const getAlaCarteItemsAction = () => dispatch => {
  axios({
    method: "GET",
    url: "api/api/v1/alacarte-item/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`
    }
  })
    .then(res => {
      //   console.log(res.data.alacarte_item_data);
      dispatch(getAlaCarteItemsSuccess(res.data.alacarte_item_data));
    })
    .catch(err => {
      console.log(err);
    });
};
