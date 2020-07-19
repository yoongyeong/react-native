import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";

export default class HomeCarousel extends Component {
  render() {
    return (
      <View
        style={{
          height: 180,
          width: 280,
          marginLeft: 20,
          // borderWidth: 0.5,
          // borderColor: "#dddddd",
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            source={this.props.imageUri}
            style={{
              flex: 1,
              width: null,
              height: null,
              resizeMode: "cover",
              borderRadius: 16,
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
