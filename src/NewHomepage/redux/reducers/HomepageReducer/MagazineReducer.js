import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  magazineCover: "",
  err: null,
  loading: true,
  pdf: ""
};

const FetchMagazineReducerStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};
const FetchMagazineReducerFail = (state, action) => {
  return updateObject(state, {
    ...state,
    err: action.payload,
    loading: false
  });
};

const FetchMagazineReducerSuccess = (state, action) => {
  return updateObject(state, {
    ...state,
    magazineCover: action.payload,
    pdf: action.pdf,
    loading: false
  });
};

const FetchMagazineReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAGAZINE_SUCCESS:
      return FetchMagazineReducerSuccess(state, action);
    case actionTypes.FETCH_MAGAZINE_FAIL:
      return FetchMagazineReducerFail(state, action);
    case actionTypes.FETCH_MAGAZINE_START:
      return FetchMagazineReducerStart(state, action);
    default:
      return state;
  }
};

export default FetchMagazineReducer;
