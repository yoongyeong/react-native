import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import data from "../data/data.json";

const Tabs = ({ props }) => {
  const tabList = data.tabList;
  const [selectedTab, setSelectedTab] = useState(1);

  const pressHandler = (e) => {
    setSelectedTab(e);
  };

  return (
    <FlatList
      data={tabList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.tabStyle}
          onPress={() => pressHandler(item.id)}
        >
          <Text style={{ fontWeight: item.id == selectedTab ? "bold" : "" }}>
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
      horizontal
      pagingEnabled
      scrollEnabled
      snapToAlignment="start"
      scrollEventThrottle={16}
      decelerationRate={"fast"}
      showsHorizontalScrollIndicator={false}
      selectedTab={selectedTab}
    />
  );
};

export default Tabs;

const styles = StyleSheet.create({
  tabStyle: {
    height: 48,
    width: null,
    justifyContent: "center",
    alignContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: "center",
  },
});
