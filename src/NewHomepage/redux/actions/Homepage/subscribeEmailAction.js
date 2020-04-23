import * as actionTypes from "../types";
import axios from "axios";

const subscribeSucess = message => {
  if (message) {
    return {
      type: actionTypes.POST_SUBSCRIBE,
      isMessage: true,
      payload: message
    };
  } else {
    return {
      type: actionTypes.POST_SUBSCRIBE,
      payload: message
    };
  }
};

const subscribeFail = err => {
  return {
    type: actionTypes.SUBSCRIBE_FAIL,
    payload: err
  };
};

export const SubscribeEmail = obj => dispatch => {
  var formData = new FormData();
  formData.set("email_id", obj.email_id);
  console.log(formData);
  axios({
    method: "post",
    url: "api/home/api/emailsubscribe/",
    data: formData,
    headers: {
      "Content-Type": "application/json"
      // "Authorization": `Token ${process.env.AUTH_KEY}`
    }
  })
    .then(res => {
      dispatch(subscribeSucess(res.data.message));
    })
    .catch(err => dispatch(subscribeFail(err)));
};
