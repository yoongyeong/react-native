import React, { useState, useEffect, createRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  Image,
} from "react-native";

let flatList = createRef();

const DEVICE_WIDTH = Dimensions.get("window").width;

const imageWidth = 280;
const imageMargin = 16;
const scrollAmount = imageWidth + imageMargin;

const Carousel2 = ({ data }) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, scrollAmount);
  return (
    <View style={{ marginTop: 8 }}>
      <FlatList
        data={data}
        ref={flatList}
        keyExtractor={(item, index) => "key" + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={1000 / 60}
        decelerationRate={"fast"}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={[styles.container]}>
              <Image style={styles.image} source={{ uri: item.url }} />
            </View>
          );
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
      />

      <View style={styles.dotView}>
        {data.map((_, i) => {
          let opacity;
          let width;
          let backgroundColor;

          // if(i == Object.keys(data).length-1){
          //   console.log();
          // }

          const addVal = 1 - scrollAmount / DEVICE_WIDTH;

          let lVal;
          let mVal;
          let rVal;
          i == Object.keys(data).length - 1 ? (lVal = i - 1) : (lVal = i - 1);
          i == Object.keys(data).length - 1 ? (mVal = i - addVal) : (mVal = i);
          i == Object.keys(data).length - 1 ? (rVal = i + 1) : (rVal = i + 1);

          // i == Object.keys(data).length - 1
          //   ? (addVal = i + addVal)
          //   : (rVal = i);

          console.log(
            Math.round(lVal * 100) / 100,
            Math.round(mVal * 100) / 100,
            Math.round(rVal * 100) / 100,
            Math.round(addVal * 100) / 100,
            scrollAmount,
            DEVICE_WIDTH
          );

          opacity = position.interpolate({
            inputRange: [lVal, mVal, rVal],
            outputRange: [0.2, 1, 0.2],
            extrapolate: "clamp",
          });
          width = position.interpolate({
            inputRange: [lVal, mVal, rVal],
            outputRange: [5, 20, 5],
            extrapolate: "clamp",
          });
          backgroundColor = position.interpolate({
            inputRange: [lVal, mVal, rVal],
            outputRange: ["#000", "#FFAA00", "#000"],
            extrapolate: "clamp",
          });
          console.log("Opacity: ", opacity);
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 5,
                width,
                backgroundColor,
                margin: 5,
                borderRadius: 10,
              }}
            />
          );
        })}
      </View>
      {/* <TouchableOpacity onPress={() => console.log(position, scrollX)}>
        <Text>get value</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  dotView: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 16,
    marginBottom: 8,
  },
  container: {
    width: imageWidth,
    height: 180,
    marginLeft: imageMargin,
    marginBottom: 4,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
  },
  image: {
    width: imageWidth,
    height: 180,
    borderRadius: 8,
  },
});

export default Carousel2;
