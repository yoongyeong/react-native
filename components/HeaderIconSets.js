import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Icon } from "react-native-elements";

export default class HeaderIconSets extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Icon
          style={styles.iconStyle}
          name="search"
          type="material-comunity"
          color="#fff"
        />
        <Icon
          style={styles.iconStyle}
          name="bell-outline"
          type="material-community"
          color="#fff"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  iconStyle: {
    padding: 4,
  },
});
