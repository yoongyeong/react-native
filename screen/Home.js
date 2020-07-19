import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "../components/Carousel";
import { dummyData } from "../data/Data";

export const images = [
  {
    url: "https://images.unsplash.com/photo-1508138221679-760a23a2285b",
  },
  {
    url: "https://images.unsplash.com/photo-1485550409059-9afb054cada4",
  },
  {
    url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  },
  {
    url: "https://images.unsplash.com/photo-1429087969512-1e85aab2683d",
  },
  {
    url: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
  },
];

const Home = () => {
  return (
    <View>
      <Carousel data={images} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
