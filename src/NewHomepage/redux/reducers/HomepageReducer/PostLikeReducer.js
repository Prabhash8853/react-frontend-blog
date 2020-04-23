import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  counter: null,
  err: null,
  likeDone: null,
  likeData: []
};

const PostLikeDone = (state, action) => {
  return updateObject(state, {
    counter: action.payload,
    likeDone: true
  });
};

const PostLikeFail = (state, action) => {
  return updateObject(state, {
    err: action.payload,
    likeDone: false
  });
};

const getLikes = (state, action) => {
  return updateObject(state, {
    likeData: action.payload
  });
};

const PostLikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LIKE_SUCCESS:
      return PostLikeDone(state, action);
    case actionTypes.LIKE_FAIL:
      return PostLikeFail(state, action);
    case actionTypes.GET_LIKE:
      return getLikes(state, action);
    default:
      return state;
  }
};

export default PostLikeReducer;
