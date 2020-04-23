import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  subscriptionPackageData: [],
  subscriptionBenefitsData: [],
  err: null,
  loading: null,
  username: "",
  email: ""
};

const packageListStart = (state, action) => {
  return updateObject(state, {
    packagesData: [],
    loading: true,
    err: null,
    username: "",
    email: ""
  });
};

const packageList = (state, action) => {
  return updateObject(state, {
    subscriptionBenefitsData: action.benefits,
    subscriptionPackageData: action.packages,
    loading: false,
    err: null,
    username: action.username,
    email: action.email
  });
};

const packageListErr = (state, action) => {
  return updateObject(state, {
    packagesData: [],
    loading: false,
    err: action.payload,
    username: "",
    email: ""
  });
};

const getPackageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PACKAGES_START:
      return packageListStart(state, action);
    case actionTypes.GET_PACKAGES_SUCCESS:
      return packageList(state, action);
    case actionTypes.GET_PACKAGES_FAIL:
      return packageListErr(state, action);
    default:
      return state;
  }
};

export default getPackageReducer;
