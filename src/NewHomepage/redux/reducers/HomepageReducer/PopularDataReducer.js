import {
  FETCH_POPULAR_DATA,
  FETCH_POPULAR_DATA_START
} from "../../actions/types";

const initialState = {
  popularData: [],
  loading: true
};

const FetchPopularDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR_DATA:
      return {
        ...state,
        popularData: action.payload,
        loading: false
      };
    case FETCH_POPULAR_DATA_START:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default FetchPopularDataReducer;
