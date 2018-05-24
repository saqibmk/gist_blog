import reducer from "../reducers";
import {
  GET_GIST_LIST,
  GET_GIST_LIST_SUCCESS,
  GET_GIST_LIST_FAIL,
  SET_USER,
  GET_GIST_DETAIL,
  GET_GIST_DETAIL_FAIL,
  GET_GIST_DETAIL_SUCCESS
} from "../constants";

describe("Reducers", () => {
  it("Returns initial state", () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it("sets the correct user", () => {
    const newState = reducer({}, { type: SET_USER, data: "abcd" });
    expect(newState).toEqual({
      currentUser: "abcd"
    });
  });
  describe("List Gist Reducers", () => {
    it("sets loading state", () => {
      const action = {
        type: GET_GIST_LIST
      };
      const newState = reducer({}, action);
      expect(newState).toEqual({ loadingGists: true });
    });
    it("sets success state", () => {
      const action = {
        type: GET_GIST_LIST_SUCCESS,
        payload: {
          data: []
        }
      };
      const newState = reducer({}, action);
      expect(newState).toEqual({ loadingGists: false, gistList: [] });
    });
    it("sets correct failure state", () => {
      const action = {
        type: GET_GIST_LIST_FAIL,
        payload: {
          data: []
        }
      };
      const newState = reducer({}, action);
      expect(newState).toEqual({
        loadingGists: false,
        error: "Error while fetching gists"
      });
    });
  });
  describe("Gist Details Reducers", () => {
    it("sets loading state", () => {
      const action = {
        type: GET_GIST_DETAIL
      };
      const newState = reducer({}, action);
      expect(newState).toEqual({ loadingGistDetail: true });
    });
    it("sets success state", () => {
      const action = {
        type: GET_GIST_DETAIL_SUCCESS,
        payload: {
          data: {}
        }
      };
      const newState = reducer({}, action);
      expect(newState).toEqual({ loadingGistDetail: false, gistDetail: {} });
    });
    it("sets correct failure state", () => {
      const action = {
        type: GET_GIST_DETAIL_FAIL,
        payload: {
          data: []
        }
      };
      const newState = reducer({}, action);
      expect(newState).toEqual({
        loadingGistDetail: false,
        error: "Error while fetching gists"
      });
    });
  });
});
