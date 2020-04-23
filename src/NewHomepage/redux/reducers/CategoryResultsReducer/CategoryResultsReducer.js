import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  categoryResult: [],
  loading: false,
  error: null,
};

const CategoryListResultStart = (state, action) => {
  return updateObject(state, {
    categoryResult: null,
    loading: true,
    error: null,
  });
};

const CategoryListResultSuccess = (state, action) => {
  return updateObject(state, {
    categoryResult: action.payload,
    loading: false,
    error: null,
  });
};

const CategoryListResultFail = (state, action) => {
  return updateObject(state, {
    categoryResult: [],
    loading: false,
    error: action.err,
  });
};

const CategoryListResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CATEGORY_LIST_RESULT_START:
      return CategoryListResultStart(state, action);
    case actionTypes.CATEGORY_LIST_RESULT__SUCCESS:
      return CategoryListResultSuccess(state, action);
    case actionTypes.CATEGORY_LIST_RESULT__FAIL:
      return CategoryListResultFail(state, action);
    default:
      return state;
  }
};

export default CategoryListResultReducer;
