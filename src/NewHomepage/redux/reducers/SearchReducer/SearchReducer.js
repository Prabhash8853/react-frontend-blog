import * as actionTypes from "../../actions/types";

const initialState = {
  result: [],
  err: null,
  loading: false,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_SUCCESS:
      return {
        ...state,
        result: [...state.result, ...action.data],
        loading: false,
      };
    case actionTypes.SEARCH_START:
      return {
        ...state,
        result: [],
        loading: true,
      };
    case actionTypes.SEARCH_FAIL:
      return {
        ...state,
        err: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default searchReducer;
