import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  category: [],
  loading: false,
  error: null
};

const CategoryListStartReducer = (state, action) => {
  return updateObject(state, {
    category: null,
    loading: true,
    error: null
  });
};

const CategoryListSuccessReducer = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
    category: [...action.payload]
  });
};

const CategoryListFailReducer = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    loading: false,
    category: []
  });
};

const CategoryListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY_LIST_START:
      return CategoryListStartReducer(state, action);
    case actionTypes.CATEGORY_LIST_SUCCESS:
      return CategoryListSuccessReducer(state, action);
    case actionTypes.CATEGORY_LIST_FAIL:
      return CategoryListFailReducer(state, action);

    default:
      return state;
  }
};

export default CategoryListReducer;
