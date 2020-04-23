import axios from "axios";
import * as actionTypes from "../types";
// import Cookies from 'js-cookie';
import {
  createCookie,
  getCookie
} from "../../../../utility/getCookie/getCookie";

axios.defaults.baseURL = "/";

export const passwordMismatch = () => {
  return {
    type: actionTypes.PASSWORD_MISMATCH,
    payload: true
  };
};

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = token => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  };
};

export const authFail = err => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: err
  };
};

export const logout = () => {
  localStorage.removeItem("__vig__mod_1");
  localStorage.removeItem("paid__usr");
  localStorage.removeItem("subscribed__usr");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const PasswordMismatchAction = () => dispatch => {
  dispatch(passwordMismatch());
};

export const authLogin = obj => dispatch => {
  dispatch(authStart());
  axios
    .post(`api/rest-auth/login/`, {
      email: obj.data.email,
      password: obj.data.password
    })
    .then(res => {
      if (res) {
        axios
          .post("api/api/v1/login/", {
            username: obj.data.email,
            password: obj.data.password
          })
          .then(loginRes => {
            console.log(loginRes);
            localStorage.setItem("paid__usr", loginRes.data.is_paid);
            localStorage.setItem(
              "subscribed__usr",
              loginRes.data.is_subscribed
            );
            localStorage.setItem("__vig__mod_1", loginRes.data.auth_token);
            localStorage.setItem("usr_3000_v1", loginRes.data.username);
            dispatch(authSuccess(res.data.token));
          })
          .catch(err => {
            dispatch(authFail(err));
          });
      }
    })
    .catch(err => {
      dispatch(authFail(err));
    });
};

export const SignUpStart = () => {
  return {
    type: actionTypes.SIGNUP_START
  };
};
export const SignUpSuccess = res => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    payload: res
  };
};
export const SignUpFail = err => {
  return {
    type: actionTypes.SIGNUP_FAIL,
    err: err
  };
};

export const authSignUp = obj => dispatch => {
  dispatch(SignUpStart());
  var FormDat = new FormData();
  FormDat.set("first_name", obj.data.FirstName);
  FormDat.append("last_name", obj.data.LastName);
  FormDat.append("email", obj.data.email);
  FormDat.append("password", obj.data.password);
  FormDat.append("password1", obj.data.ConfirmPassword);

  var csrftoken = getCookie("csrftoken");
  axios({
    method: "POST",
    url: "api/signup/",
    data: FormDat,
    headers: {
      "X-CSRFTOKEN": csrftoken,
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
    .then(res => {
      dispatch(SignUpSuccess(res.data));
    })
    .catch(err => {
      dispatch(SignUpFail(err));
    });
};

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("__vig__mod_1");
    if (!token) {
      dispatch(logout());
    } else {
      dispatch(authSuccess(token));
    }
  };
};
