import * as actionTypes from "../types";
import axios from "axios";

export const getTagsSuccess = res => {
  return {
    type: actionTypes.GET_TAGS_LINK,
    referenceLink: res.data.tags[0].reference_link,
    description: res.data.tags[0].description,
    name: res.data.tags[0].name
  };
};

export const callTagAPIaction = obj => dispatch => {
  axios
    .get(`/api/tags/tags-get/?tags_id=${obj.id}`)
    .then(res => {
      console.log(res.data.tags[0]);
      dispatch(getTagsSuccess(res));
    })
    .catch(err => console.log(err));
};
