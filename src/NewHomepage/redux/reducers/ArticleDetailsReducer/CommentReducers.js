import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  commentData: [],
  error: null,
  loading: false,
  done: false
};

const postCommentReducer = (state, action) => {
  return updateObject(state, {
    done: true
  });
};
const getCommentReducerStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};
const getCommentReducerSuccess = (state, action) => {
  return updateObject(state, {
    commentData: action.payload,
    loading: false,
    done: false,
    err: null
  });
};
const getCommentReducerFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    done: false
  });
};

const CommentSectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_COMMENT_START:
      return getCommentReducerStart(state, action);
    case actionTypes.GET_COMMENT_SUCCESS:
      return getCommentReducerSuccess(state, action);
    case actionTypes.GET_COMMENT_SUCCESS:
      return getCommentReducerFail(state, action);
    case actionTypes.POST_COMMENT:
      return postCommentReducer(state, action);
    default:
      return state;
  }
};

export default CommentSectionReducer;
