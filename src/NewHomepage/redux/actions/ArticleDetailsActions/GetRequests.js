import axios from "axios";

export const getRequests = (method, url, data, headers, contentType) => {
  var header;

  if (headers) {
    header = {
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
      "Content-Type": contentType,
    };
  } else {
    header = {};
  }

  const config = {
    method: method,
    url: url,
    data: data,
    headers: header,
  };

  return axios(config);
};
