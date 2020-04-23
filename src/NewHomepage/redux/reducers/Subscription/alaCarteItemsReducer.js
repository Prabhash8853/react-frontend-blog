import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  alaCarteItemsData: [],
  error: null
};

const getAlaCarteItemsSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    alaCarteItemsData: [
      ...action.payload.map((data, index) => {
        return {
          ...data,
          selected: false
        };
      })
    ]
  });
};

const getAlaCarteItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_A_LA_CARTE_ITEMS:
      return getAlaCarteItemsSuccess(state, action);
    default:
      return state;
  }
};

export default getAlaCarteItemsReducer;
