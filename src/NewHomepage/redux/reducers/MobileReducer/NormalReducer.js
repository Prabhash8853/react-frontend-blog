import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  NormalMobData: [],
  isLoading: true
};

const getNormalMobStart = (state, action) => {
  return updateObject(state, {
    isLoading: true
  });
};

const getNormaMobSuccess = (state, action) => {
  return updateObject(state, {
    NormalMobData: [
      ...state.NormalMobData.map(article => {
        return { ...article, liked: false, bookmarked: false };
      }),
      ...action.payload.map(article => {
        return { ...article, liked: false, bookmarked: false };
      })
    ],
    isLoading: false
  });
};

const NormalMobReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NORMAL_DATA_START:
      return getNormalMobStart(state, action);
    case actionTypes.FETCH_NORMAL_MB:
      return getNormaMobSuccess(state, action);
    default:
      return state;
  }
};

export default NormalMobReducer;
