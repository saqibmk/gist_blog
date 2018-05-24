import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { getGist } from "../reducers";

class GistShow extends Component {
  static navigationOptions = {
    title: "Content"
  };
  render() {
    const { fileName } = this.props.navigation.state.params;
    return <Text>{this.props.gistDetail.files[fileName].content}</Text>;
  }
}

const mapStateToProps = state => {
  return {
    gistDetail: state.gistDetail
  };
};

export default connect(mapStateToProps, {})(GistShow);
