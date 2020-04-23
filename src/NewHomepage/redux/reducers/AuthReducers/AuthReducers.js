import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  token: null,
  error: null,
  loading: false,
  signupRes: [],
  signupLoading: null,
  signuperr: null,
  passwordMismatch: null
};

const passwordMismatch = (state, action) => {
  return updateObject(state, {
    passwordMismatch: action.payload
  });
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, {
    token: null
  });
};

const SignupStart = (state, action) => {
  return updateObject(state, {
    signupLoading: true
  });
};

const SignupSuccess = (state, action) => {
  return updateObject(state, {
    signupLoading: false,
    signupRes: action.payload
  });
};

const SignupFail = (state, action) => {
  return updateObject(state, {
    signuperr: action.payload
  });
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SIGNUP_START:
      return SignupStart(state, action);
    case actionTypes.SIGNUP_SUCCESS:
      return SignupSuccess(state, action);
    case actionTypes.SIGNUP_FAIL:
      return SignupFail(state, action);
    case actionTypes.PASSWORD_MISMATCH:
      return passwordMismatch(state, action);
    default:
      return state;
  }
};

export default AuthReducer;
