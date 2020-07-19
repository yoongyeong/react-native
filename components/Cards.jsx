import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Icon } from "react-native-elements";

import data from "../data/data.json";

const Cards = () => {
  const cardList = data.cardList;
  let x = [];
  cardList.map((item) => {
    x = item.isFavorite;
  });
  const [favoriteList, setFavoriteList] = useState(x);

  const favoriteHandler = (e) => {
    cardList[e].isFavorite = !cardList[e].isFavorite;

    setFavoriteList((prevState) => {
      return { ...prevState, x: cardList[e].isFavorite };
    });

    console.log(cardList[e].title);
    console.log("isFavorite: " + cardList[e].isFavorite);
    console.log("FavoriteList: " + favoriteList);
  };

  return (
    <FlatList
      style={{ marginVertical: 16 }}
      data={cardList}
      keyExtractor={(item) => item.id}
      extraData={favoriteList}
      renderItem={({ item }) => (
        <View style={styles.cardStyle}>
          <Image style={styles.cardImage} source={{ uri: item.url }} />
          <View
            style={{
              flex: 4,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flex: 4,
              }}
            >
              <View>
                <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "salmon",
                    fontSize: 18,
                  }}
                >
                  Rp {item.price}
                </Text>
              </View>
              <Text style={{ fontSize: 13, color: "#333" }}>
                {item.sold} Produk terjual
              </Text>
            </View>
            <TouchableOpacity onPress={() => favoriteHandler(item.id - 1)}>
              <Icon
                style={{ flex: 1 }}
                name="favorite"
                type="material-comunity"
                color={item.isFavorite == true ? "red" : "rgba(0,0,0,0.2)"}
              />
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
};

export default Cards;

const styles = StyleSheet.create({
  cardStyle: {
    width: null,
    height: null,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0.5, height: 0.5 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 8,
    alignContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
});
