import React, { useState } from "react";
import { StyleSheet, Image, View } from "react-native";
import { Icon } from "react-native-elements";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../assets/Logo_white.png")} />
      <View style={styles.headerIcons}>
        <Icon
          style={{ padding: 4, flex: 1 }}
          name="search"
          type="material-comunity"
          color="#fff"
        />
        <Icon
          style={{ padding: 4, flex: 1 }}
          name="bell-outline"
          type="material-community"
          color="#fff"
        />
      </View>
    </View>
  );
};

export default Header;
export const header = 60;

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: header,
    backgroundColor: "#008BDC",
    padding: 12,
  },
  logo: {
    height: 450 / 16,
    width: 1400 / 16,
    margin: 8,
  },
  headerIcons: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});
