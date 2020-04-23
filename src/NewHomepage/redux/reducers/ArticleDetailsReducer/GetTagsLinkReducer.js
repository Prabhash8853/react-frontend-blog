import * as actionTypes from "../../actions/types";

const initialState = {
  referenceLink: "",
  name: "",
  description: ""
};

const GetTagsLinkReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TAGS_LINK:
      return {
        ...state,
        referenceLink: action.referenceLink,
        name: action.name,
        description: action.description
      };
    default:
      return state;
  }
};

export default GetTagsLinkReducer;
