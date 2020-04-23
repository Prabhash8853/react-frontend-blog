import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  postALaCarteItems: [],
  error: null
};

const postALaCarteItemsReducerSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    postALaCarteItems: action.payload
  });
};

const postALaCarteItemsReducerFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    postALaCarteItems: []
  });
};

const postALaCarteItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_A_LA_CARTE_ITEM_SUCCESS:
      return postALaCarteItemsReducerSuccess(state, action);
    case actionTypes.POST_A_LA_CARTE_ITEM_FAIL:
      return postALaCarteItemsReducerFail(state, action);

    default:
      return state;
  }
};

export default postALaCarteItemsReducer;
