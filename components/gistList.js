import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import {
  ListView,
  View,
  Row,
  Icon,
  Subtitle,
  TouchableOpacity
} from "@shoutem/ui";
import { getGistList } from "../reducers";

class GistList extends Component {
  static navigationOptions = {
    title: "Gists"
  };
  componentDidMount() {
    this.props.getGistList(this.props.currentUser);
  }

  renderRow(gist) {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("FileList", { gistId: gist.id })
        }
      >
        <Row styleName="small">
          <View styleName="vertical">
            <Text numberOfLines={2}>{gist.description}</Text>
          </View>
          <Icon styleName="disclosure" name="right-arrow" />
        </Row>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <ListView
        data={this.props.gists || []}
        renderRow={gist => this.renderRow(gist)}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    gists: state.gistList,
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = {
  getGistList
};

export default connect(mapStateToProps, mapDispatchToProps)(GistList);
