import * as actionTypes from "../types";
import axios from "axios";

axios.defaults.baseURL = "/";

export const getProfileStart = () => {
  return {
    type: actionTypes.GET_PROFILE_START,
  };
};

export const getProfileSuccess = (data, count, article) => {
  return {
    type: actionTypes.GET_PROFILE_SUCCESS,
    payload: data,
    count: count,
    article: article,
  };
};

export const getPublicProfileSuccess = (data, count, article) => {
  return {
    type: actionTypes.GET_PUBLIC_PROFILE,
    payload: data,
    count: count,
    article: article,
  };
};

export const getProfileFail = (err) => {
  return {
    type: actionTypes.GET_PROFILE_FAIL,
    payload: err,
  };
};

const fetchProfile = (obj, dispatch) => {
  axios({
    method: "GET",
    url: `api/api/v1/profile-viewset/?username=${obj.user}`,
    headers: {
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
    },
  })
    .then((res) => {
      if (res) {
        axios({
          method: "GET",
          url: `api/api/v1/all-collection-get-for-profile/`,
          headers: {
            Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
          },
        })
          .then((data) => {
            dispatch(getProfileSuccess(res.data.results[0], 20, data.data));
          })
          .catch((err) => {
            dispatch(getProfileFail(err));
          });
      }
    })
    .catch((err) => {
      dispatch(getProfileFail(err));
    });
};

const fetchPublicProfile = (obj, dispatch) => {
  axios({
    method: "GET",
    url: `/api/api/v1/public-author_getby-username/?username=${obj.user}`,
  })
    .then((res) => {
      if (res) {
        axios({
          method: "GET",
          url: `/api/api/v1/published-collection-get-for-public-author/?author_id=${res.data.results[0].user_id}`,
        })
          .then((data) => {
            dispatch(
              getPublicProfileSuccess(res.data.results[0], 20, data.data)
            );
          })
          .catch((err) => {
            dispatch(getProfileFail(err));
          });
      }
    })
    .catch((err) => {
      dispatch(getProfileFail(err));
    });
};

export const getProfileActions = (obj) => (dispatch) => {
  dispatch(getProfileStart());

  fetchProfile(obj, dispatch);
};

// actions for getting draft data

export const getProfileDraftActions = (obj) => (dispatch) => {
  dispatch(getProfileStart());
  axios({
    method: "GET",
    url: `api/api/v1/profile-viewset/?username=${obj.user}`,
    headers: {
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
    },
  })
    .then((res) => {
      if (res) {
        axios({
          method: "GET",
          url: `api/api/v1/draft-collection-get-for-profile/`,
          headers: {
            Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
          },
        })
          .then((data) => {
            dispatch(getProfileSuccess(res.data.results[0], 20, data.data));
          })
          .catch((err) => {
            dispatch(getProfileFail(err));
          });
      }
    })
    .catch((err) => {
      dispatch(getProfileFail(err));
    });
};

// actions to get published data

export const getProfilePublishedActions = (obj) => (dispatch) => {
  dispatch(getProfileStart());
  axios({
    method: "GET",
    url: `api/api/v1/profile-viewset/?username=${obj.user}`,
    headers: {
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
    },
  })
    .then((res) => {
      if (res) {
        axios({
          method: "GET",
          url: `api/api/v1/published-collection-get-for-profile/`,
          headers: {
            Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
          },
        })
          .then((data) => {
            dispatch(getProfileSuccess(res.data.results[0], 20, data.data));
          })
          .catch((err) => {
            dispatch(getProfileFail(err));
          });
      }
    })
    .catch((err) => {
      dispatch(getProfileFail(err));
    });
};

//action to post the data for profile edit

export const postProfileActionSuccess = (data) => {
  return {
    type: actionTypes.POST_PROFILE_SUCCESS,
    payload: data,
  };
};

export const postProfileChangeAction = (obj) => (dispatch) => {
  let formData = new FormData();

  formData.set("photo", obj.image);
  formData.append("short_bio", obj.bio);
  formData.append("user.first_name", obj.firstName);
  formData.append("user.last_name", obj.lastName);
  formData.append("facebook", obj.facebookURL);
  formData.append("linkedin", obj.LinkedinURL);
  formData.append("twiiter", obj.twitterURL);
  formData.append("web", obj.webURL);

  axios({
    method: "PATCH",
    url: `api/api/v1/profile-viewset/${obj.id}/`,
    data: formData,
    headers: {
      Authorization: `Token ${localStorage.getItem("__vig__mod_1")}`,
      "Content-Type": "multipart/form-data",
    },
  })
    .then((res) => {
      dispatch(postProfileActionSuccess(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

//======================== public profile -====================///

export const getPublicProfileActions = (obj) => (dispatch) => {
  dispatch(getProfileStart());

  fetchPublicProfile(obj, dispatch);
};
