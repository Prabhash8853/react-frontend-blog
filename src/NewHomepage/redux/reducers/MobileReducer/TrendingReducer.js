import { FETCH_TRENDING } from "../../actions/types";

const initialState = {
  trendingData: []
};

const getTrendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRENDING:
      return {
        ...state,
        trendingData: action.payload
      };
    default:
      return state;
  }
};

export default getTrendingReducer;
