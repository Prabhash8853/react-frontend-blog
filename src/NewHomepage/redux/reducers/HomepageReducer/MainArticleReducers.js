import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  MainArticleData: [],
  error: null,
  loading: false,
  bookmarked: true,
  status: [],
  getBookmarkedData: [],
};

const MainStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const MainSuccess = (state, action) => {
  return updateObject(state, {
    MainArticleData: [
      ...state.MainArticleData.map((article) => {
        return { ...article, liked: false, bookmarked: false };
      }),
      ...action.payload.map((article) => {
        return { ...article, liked: false, bookmarked: false };
      }),
    ],
    loading: false,
    error: null,
  });
};

const MainFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
  });
};

const BookmarkSuccess = (state, action) => {
  return updateObject(state, {
    status: action.payload,
  });
};

const getBookmarkSuccess = (state, action) => {
  return updateObject(state, {
    getBookmarkedData: action.payload,
  });
};

const getBookmarkFail = (state, action) => {
  return updateObject(state, {
    bookmarkerr: action.error,
  });
};

const FetchMainArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAIN_SUCCESS:
      return MainSuccess(state, action);
    case actionTypes.FETCH_MAIN_FAIL:
      return MainFail(state, action);
    case actionTypes.FETCH_MAIN_START:
      return MainStart(state, action);
    case actionTypes.POST_BOOKMARK:
      return BookmarkSuccess(state, action);
    case actionTypes.GET_BOOKMARK:
      return getBookmarkSuccess(state, action);
    case actionTypes.GET_BOOKMARK_FAIL:
      return getBookmarkFail(state, action);
    default:
      return state;
  }
};

export default FetchMainArticleReducer;
