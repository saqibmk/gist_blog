import {
  GET_GIST_LIST,
  GET_GIST_LIST_SUCCESS,
  GET_GIST_LIST_FAIL,
  SET_USER,
  GET_GIST_DETAIL,
  GET_GIST_DETAIL_FAIL,
  GET_GIST_DETAIL_SUCCESS
} from "./constants";

export default function reducer(state = {}, action) {
  switch (action.type) {
    case GET_GIST_LIST:
      return {
        ...state,
        loadingGists: true
      };
    case GET_GIST_LIST_SUCCESS:
      return {
        ...state,
        loadingGists: false,
        gistList: action.payload.data
      };
    case GET_GIST_LIST_FAIL:
      return {
        ...state,
        loadingGists: false,
        error: "Error while fetching gists"
      };
    case SET_USER:
      return {
        ...state,
        currentUser: action.data
      };
    case GET_GIST_DETAIL:
      return {
        ...state,
        loadingGistDetail: true
      };
    case GET_GIST_DETAIL_SUCCESS:
      return {
        ...state,
        loadingGistDetail: false,
        gistDetail: action.payload.data
      };
    case GET_GIST_DETAIL_FAIL:
      return {
        ...state,
        loadingGistDetail: false,
        error: "Error while fetching gists"
      };
    default:
      return state;
  }
}

export function getGistList(user) {
  return {
    type: GET_GIST_LIST,
    payload: {
      request: {
        url: `/users/${user}/gists`
      }
    }
  };
}

export function setUser(user) {
  return {
    type: SET_USER,
    data: user
  };
}

export function getGist(gistId) {
  return {
    type: GET_GIST_DETAIL,
    payload: {
      request: {
        url: `/gists/${gistId}`
      }
    }
  };
}
