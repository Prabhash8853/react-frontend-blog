import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  userData: [],
  error: null,
  articleData: [],
  count: null,
  loading: false,
  postResponse: [],
  publicUser: [],
  publicUserArticles: [],
  publicUserCount: null,
};

const getProfileStart = (state, action) => {
  return updateObject(state, {
    error: null,
    userData: [],
    loading: true,
  });
};

const getProfileSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    userData: action.payload,
    articleData: action.article,
    count: action.count,
    loading: false,
  });
};

const getPublicProfileSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    publicUser: action.payload,
    publicUserArticles: [...state.publicUserArticles, ...action.article],
    publicUserCount: action.count,
    loading: false,
  });
};

const getProfileFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    userData: [],
    articleData: [],
    loading: false,
  });
};

const postProfileSuccess = (state, action) => {
  return updateObject(state, {
    postResponse: action.payload,
  });
};

const getProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFILE_START:
      return getProfileStart(state, action);
    case actionTypes.GET_PROFILE_SUCCESS:
      return getProfileSuccess(state, action);
    case actionTypes.GET_PROFILE_FAIL:
      return getProfileFail(state, action);
    case actionTypes.POST_PROFILE_SUCCESS:
      return postProfileSuccess(state, action);
    case actionTypes.GET_PUBLIC_PROFILE:
      return getPublicProfileSuccess(state, action);
    default:
      return state;
  }
};

export default getProfileReducer;
