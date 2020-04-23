import axios from "axios";
import * as actionTypes from "../types";

axios.defaults.baseURL = "/";

const PostSubscriptionDataSuccess = data => {
  return {
    type: actionTypes.POST_SUBSCRIPTION_DATA,
    payload: data
  };
};

const PostSubscriptionDataFail = err => {
  return {
    type: actionTypes.POST_SUBSCRIPTION_FAIL,
    payload: err
  };
};

export const PostSubscriptionDataAction = obj => dispatch => {
  axios({
    method: "POST",
    url: `/api/api/v1/saved-payment-detail-for-package/`,
    data: {
      order_id: obj.order_id,
      package_id: obj.package_id,
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
      if (res) {
        axios({
          method: "POST",
          url: `/api/api/package/`,
          data: {
            package_id: obj.package_id
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`
          }
        })
          .then(response => {
            dispatch(PostSubscriptionDataSuccess(response));
          })
          .catch(err => {
            PostSubscriptionDataFail(err);
          });
      }
    })
    .catch(err => {
      PostSubscriptionDataFail(err);
    });
};

// .then(res => {
//   axios({
//     method: "POST",
//     url: `/api/package/`,
//     data: {
//       package_id: obj.package_id
//     },
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`
//     }
//   })
//     .then(packageRes => {})

//     .catch(err => {
//       PostSubscriptionDataFail(err);
//     });
//   dispatch(PostSubscriptionDataSuccess(res.data));
// })
// .catch(err => {
//   PostSubscriptionDataFail(err);
// });
