import { combineReducers } from "redux";
import FetchPopularDataReducer from "./HomepageReducer/PopularDataReducer";
import EditorPickReducer from "./HomepageReducer/EditorPickReducer";
import FetchMainArticleReducer from "./HomepageReducer/MainArticleReducers";
import FetchMagazineReducer from "./HomepageReducer/MagazineReducer";
import NormalMobReducer from "./MobileReducer/NormalReducer";
import AuthReducers from "./AuthReducers/AuthReducers";
import getTrendingReducer from "./MobileReducer/TrendingReducer";

import SubscribeReducer from "./HomepageReducer/SubscribeReducer";
import searchReducer from "./SearchReducer/SearchReducer";
import PostLikeReducer from "./HomepageReducer/PostLikeReducer";
import getPackageReducer from "./Subscription/Packages";
import postSubscriptionReducer from "./Subscription/PostSubscriptionReducer";
import getAlaCarteItemsReducer from "./Subscription/alaCarteItemsReducer";
import postALaCarteItemsReducer from "./Subscription/PostALaCarteItemReducer";
import FetchArticleDetailsReducer from "./ArticleDetailsReducer/ArticleDetailsReducer";
import CommentSectionReducer from "./ArticleDetailsReducer/CommentReducers";
import getProfileReducer from "./ProfileReducer/ProfileReducer";
import CategoryListReducer from "./CategoryListReducer/CategoryListReducer";
import CategoryListResultReducer from "./CategoryResultsReducer/CategoryResultsReducer";
import FetchRelatedArticleReducer from "./ArticleDetailsReducer/RelatedAarticleReducers";
import GetTagsLinkReducer from "./ArticleDetailsReducer/GetTagsLinkReducer";

const rootReducer = combineReducers({
  fetchPopularReducer: FetchPopularDataReducer,
  fetchEditorPick: EditorPickReducer,
  fetchNormalMobReducer: NormalMobReducer,
  fetchMainArticleReducer: FetchMainArticleReducer,
  fetchMagazineReducer: FetchMagazineReducer,
  fetchAuthReducer: AuthReducers,
  fetchTrendingReducer: getTrendingReducer,
  fetchProfileData: getProfileReducer,
  fetchSubscribe: SubscribeReducer,
  fetchSearchData: searchReducer,
  fetchPostLike: PostLikeReducer,
  fetchPackageReducers: getPackageReducer,
  postsubscriptionData: postSubscriptionReducer,
  fetchAlaCarteItems: getAlaCarteItemsReducer,
  postALaCarteItemsReducer: postALaCarteItemsReducer,
  fetchArticleDetails: FetchArticleDetailsReducer,
  fetchComments: CommentSectionReducer,
  fetchCategoryListReducer: CategoryListReducer,
  fetchCategoryResultReducer: CategoryListResultReducer,
  fetchrelatedArticlesReducer: FetchRelatedArticleReducer,
  getTagsReducer: GetTagsLinkReducer
});

export default rootReducer;
