import * as actionTypes from "../../actions/types";

const initialState = {
  message: "",
  err: null,
  isMessage: null
};

const SubscribeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_SUBSCRIBE:
      return {
        ...state,
        isMessage: action.isMessage,
        message: action.payload
      };
    case actionTypes.SUBSCRIBE_FAIL:
      return {
        ...state,
        err: action.payload
      };
    default:
      return state;
  }
};

export default SubscribeReducer;
