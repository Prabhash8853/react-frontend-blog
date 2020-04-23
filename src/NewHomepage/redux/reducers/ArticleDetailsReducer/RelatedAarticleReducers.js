import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  related_articles: []
};

const RelatedArticle = (state, action) => {
  return updateObject(state, {
    error: null,
    related_articles: action.relatedArticle
  });
};

const FetchRelatedArticleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RELATED_ARTICLE_SUCCESS:
      return RelatedArticle(state, action);
    default:
      return state;
  }
};

export default FetchRelatedArticleReducer;
