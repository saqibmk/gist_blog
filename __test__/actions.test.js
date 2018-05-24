import configureMockStore from "redux-mock-store";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import axiosMiddleware from "redux-axios-middleware";
import {
  GET_GIST_LIST,
  GET_GIST_LIST_SUCCESS,
  SET_USER,
  GET_GIST_DETAIL,
  GET_GIST_DETAIL_SUCCESS
} from "../constants";
import { getGistList, setUser, getGist } from "../reducers";

describe("Actions Test", () => {
  let store;
  let httpMock;
  const client = axios.create({
    baseURL: "https://api.github.com",
    responseType: "json"
  });

  const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

  beforeEach(() => {
    httpMock = new MockAdapter(client);
    const mockStore = configureMockStore([axiosMiddleware(client)]);
    store = mockStore({});
  });

  it("Fetches Gist List for a user", async () => {
    httpMock.onGet("https://api.github.com/users/testuser/gists").reply(200, {
      status: "success"
    });

    store.dispatch(getGistList("testuser"));
    await flushAllPromises();
    expect(
      store.getActions().find(a => a.type === GET_GIST_LIST)
    ).toBeDefined();
    expect(
      store.getActions().find(a => a.type === GET_GIST_LIST_SUCCESS)
    ).toBeDefined();
  });

  it("Fetches Gist Details", async () => {
    httpMock.onGet("https://api.github.com/gists/1234").reply(200, {
      status: "success"
    });

    store.dispatch(getGist("1234"));
    await flushAllPromises();
    expect(
      store.getActions().find(a => a.type === GET_GIST_DETAIL)
    ).toBeDefined();
    expect(
      store.getActions().find(a => a.type === GET_GIST_DETAIL_SUCCESS)
    ).toBeDefined();
  });

  it("Dispaches setUser correctly", async () => {
    store.dispatch(setUser("abc"));
    expect(store.getActions()).toEqual([{ type: "SET_USER", data: "abc" }]);
  });
});
