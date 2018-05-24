/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import axios from "axios";
import axiosMiddleware from "redux-axios-middleware";
import reducer from "./reducers";
import GistList from "./components/gistList";
import UserSet from "./components/userSet";
import GistShow from "./components/gistShow";
import GistFileList from "./components/gistFileList";

import { createStackNavigator } from "react-navigation";

const client = axios.create({
  baseURL: "https://api.github.com",
  responseType: "json"
});

const Stack = createStackNavigator({
  Home: {
    screen: UserSet
  },
  List: {
    screen: GistList
  },
  FileList: {
    screen: GistFileList
  },
  Show: {
    screen: GistShow
  }
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Stack />
      </Provider>
    );
  }
}
