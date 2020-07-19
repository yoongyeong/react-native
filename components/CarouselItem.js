import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";

const CarouselItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.url,
        }}
      />{" "}
    </View>
  );
};

export const imageWidth = 280;
export const imageMarginLeft = 20;

const styles = StyleSheet.create({
  container: {
    width: imageWidth,
    height: 180,
    marginLeft: imageMarginLeft,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  image: {
    width: 280,
    height: 180,
    borderRadius: 8,
  },
  containerLast: {
    // marginRight: 20,
    borderColor: "#ff0000",
    borderWidth: 4,
  },
});

export default CarouselItem;
