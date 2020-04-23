import * as actionTypes from "../../actions/types";
import { updateObject } from "../../ReduxUtility/ReduxUitility";

const initialState = {
  ArticleDetailsData: [],
  error: null,
  loading: null,
  avatar: null,
  category: null,
  sub_category: [],
  related_articles: [],
  authorUsername: null,
  content: "",
};

const ArticleDetailsStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const ArticleDetailsSuccess = (state, action) => {
  return updateObject(state, {
    ArticleDetailsData: action.payload,
    error: null,
    loading: false,
    author: action.author,
    avatar: action.avatar,
    category: action.header,
    sub_category: action.sub_category,
    authorUsername: action.username,
    content: action.content,
  });
};

const ArticleDetailsFail = (state, action) => {
  return updateObject(state, {
    error: action.payload,
    loading: false,
  });
};

const RelatedArticle = (state, action) => {
  return updateObject(state, {
    error: null,
    related_articles: action.relatedArticle,
  });
};

const FetchArticleDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ARTICLE_DETAILS_START:
      return ArticleDetailsStart(state, action);
    case actionTypes.GET_ARTICLE_DETAILS_SUCCESS:
      return ArticleDetailsSuccess(state, action);
    case actionTypes.GET_ARTICLE_DETAILS_FAIL:
      return ArticleDetailsFail(state, action);
    case actionTypes.RELATED_ARTICLE_SUCCESS:
      return RelatedArticle(state, action);
    default:
      return state;
  }
};

export default FetchArticleDetailsReducer;
