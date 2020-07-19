import React from "react";
import { StyleSheet, View, Dimensions, Text, Image } from "react-native";

import Header, { header } from "./components/Header";
import HeaderIconSets from "./components/HeaderIconSets";
import Carousel from "./components/Carousel";
import Tabs from "./components/Tabs";
import Cards from "./components/Cards";
import Carousel2 from "./components/Carousel2";

const DEVICE_WIDTH = Dimensions.get("window").width;
const DEVICE_HEIGHT = Dimensions.get("window").height;

const images = [
  {
    url:
      "https://images.unsplash.com/flagged/photo-1576140540370-94b6222a1e59?ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1548866616-463d69c477f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=341&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1571747329185-0eb710b7e267?ixlib=rb-1.2.1&auto=format&fit=crop&w=739&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1589816494510-08265bbbbe48?ixlib=rb-1.2.1&auto=format&fit=crop&w=335&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1569237601515-99a8a113dc6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1595053826286-2e59efd9ff18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
  {
    url:
      "https://images.unsplash.com/photo-1595053842712-ca566f103abe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header
        leftComponent={{
          text: "LOGO",
          style: { color: "#fff", fontSize: 20, zIndex: 1 },
        }}
        rightComponent={<HeaderIconSets />}
      /> */}
      <Header />
      <View
        style={{
          top: header - 1,
          position: "absolute",
          flexDirection: "row",
          justifyContent: "center",
          width: DEVICE_WIDTH,
          zIndex: -99,
          // backgroundColor: "salmon",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            backgroundColor: "#008BDC",
            height: DEVICE_HEIGHT / 4.5,
            width: DEVICE_WIDTH / 2,
            borderBottomLeftRadius: DEVICE_WIDTH / 2,
            borderBottomRightRadius: DEVICE_WIDTH / 2,
            transform: [{ scaleX: 2 }],
          }}
        />
      </View>
      {/* <Carousel data={images} /> */}
      <Carousel2 data={images} />
      <Tabs />
      <Cards />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  myText: {
    color: "#c1c1c1",
  },
});
