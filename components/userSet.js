import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Text, TextInput, View } from "@shoutem/ui";
import { getGistList, setUser } from "../reducers";

class UserSet extends Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder={"Enter Github Username"}
          defaultValue={"relferreira"}
          onChangeText={value => this.props.setUser(value)}
        />
        <Button
          styleName="dark"
          onPress={() => this.props.navigation.navigate("List")}
        >
          <Text>LOAD BLOGS</Text>
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = {
  getGistList,
  setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(UserSet);
