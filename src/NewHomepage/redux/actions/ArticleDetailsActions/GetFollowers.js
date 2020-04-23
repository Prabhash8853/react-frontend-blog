import * as actionTypes from "../types";

import axios from "axios";

const getRequests = async (method, url, data, contentType) => {
  const config = {
    method: method,
    url: url,
    data: data,
    headers: {
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
      "Content-Type": contentType,
    },
  };
  try {
    const res = await axios(config);
    console.log(res.data);
    return res.data;
  } catch (e) {
    return e;
  }
};

export const OnFollowClick = (obj) => (dispatch) => {
  const url = "/api/api/v1/follow-user/";
  const data = {
    collection_id: obj.collection_id,
  };
  const result = getRequests("POST", url, data, "application/json");
};
