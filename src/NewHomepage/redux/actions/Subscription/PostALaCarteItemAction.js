import axios from "axios";
import * as actionTypes from "../types";
axios.defaults.baseURL = "/";

const PostALaCarteItemSuccess = data => {
  return {
    type: actionTypes.POST_A_LA_CARTE_ITEM_SUCCESS,
    payload: data
  };
};

const PostALaCarteItemFail = err => {
  return {
    type: actionTypes.POST_A_LA_CARTE_ITEM_FAIL,
    payload: err
  };
};

export const PostALaCarteItemAction = obj => dispatch => {
  console.log(obj);
  axios({
    method: "POST",
    url: `api/api/v1/saved-payment-detail-for-alacarte/`,
    data: {
      order_id: obj.order_id,
      alacarte_ids: obj.alacarte_ids,
      payer_id: obj.payer_id,
      value: obj.value,
      country_code: obj.country_code,
      first_name: obj.first_name,
      last_name: obj.last_name,
      email: obj.email,
      currency_code: obj.currency_code,
      merchant_id: obj.merchant_id
    },
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`
    }
  })
    .then(res => {
      dispatch(PostALaCarteItemSuccess(res.data));
    })
    .catch(err => {
      dispatch(PostALaCarteItemFail(err));
    });
};
