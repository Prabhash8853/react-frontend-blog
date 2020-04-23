import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  error: null,
  postsubscriptionData: []
};

const postSubscriptionReducerSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    postsubscriptionData: action.payload
  });
};

const postSubscriptionReducerFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    postsubscriptionData: []
  });
};

const postSubscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_SUBSCRIPTION_DATA:
      return postSubscriptionReducerSuccess(state, action);
    case actionTypes.POST_SUBSCRIPTION_FAIL:
      return postSubscriptionReducerFail(state, action);

    default:
      return state;
  }
};

export default postSubscriptionReducer;
