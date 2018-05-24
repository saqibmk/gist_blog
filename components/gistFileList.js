import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { ListView, View, Row, TouchableOpacity, Icon } from "@shoutem/ui";
import { getGist } from "../reducers";
// onPress={() =>
//     this.props.navigation.navigate("FileList", { gistId: gist.id })
//   }
class GistFileList extends Component {
  static navigationOptions = {
    title: "Gist Files"
  };
  componentDidMount() {
    const { gistId } = this.props.navigation.state.params;
    this.props.getGist(gistId);
  }

  renderRow(file) {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("Show", { fileName: file })
        }
      >
        <Row styleName="small">
          <View styleName="vertical">
            <Text numberOfLines={2}>{file}</Text>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
      </TouchableOpacity>
    );
  }
  render() {
    const { gistDetail } = this.props;

    return (
      <ListView
        data={gistDetail ? Object.keys(gistDetail.files) : []}
        renderRow={file => this.renderRow(file)}
      />
    );
  }
}

const mapStateToProps = state => ({
  gistDetail: state.gistDetail
});

const mapDispatchToProps = {
  getGist
};

export default connect(mapStateToProps, mapDispatchToProps)(GistFileList);
