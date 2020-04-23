import axios from "axios";
import * as actionTypes from "../types";

axios.defaults.baseURL = "/";

export const getSubscriptionPackageStart = () => {
  return {
    type: actionTypes.GET_PACKAGES_START
  };
};

export const getSubscriptionPackageSuccess = (
  benefits,
  SubscriptionPackage,
  username,
  email
) => {
  return {
    type: actionTypes.GET_PACKAGES_SUCCESS,
    benefits: benefits,
    packages: SubscriptionPackage,
    username: username,
    email: email
  };
};

export const getSubscriptionPackageFail = err => {
  return {
    type: actionTypes.GET_PACKAGES_FAIL,
    payload: err
  };
};

export const getSubscriptionPackageAction = () => dispatch => {
  dispatch(getSubscriptionPackageStart());
  axios({
    method: "GET",
    url: "api/api/v1/package-and-benefit-details/",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`
    }
  })
    .then(res => {
      console.log(res.data);
      dispatch(
        getSubscriptionPackageSuccess(
          res.data.benefit,
          res.data.package,
          res.data.username,
          res.data.email
        )
      );
    })
    .catch(err => {
      dispatch(getSubscriptionPackageFail(err));
    });
};
