import axios from "axios";
import * as actionTypes from "../types";

// fetch Related articles success action

// fetching related articles. function which accepts collection id as an argument

// fetch article details page

export const fetchRelatedArticleDetails = (obj) => (dispatch) => {
  console.log(obj.id);
  getRelatedArticles(obj.id, dispatch);
};
