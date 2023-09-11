import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const FilterSort = () => {
  return (
    <View
      style={{
        marginHorizontal: 130,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 10,
        borderColor: "#EA5454",
        backgroundColor: "#EA5454",
        height: 50,
        width: 200,
      }}
    >
      <View style={{ flexDirection: "row", gap: 5  }}>
        <Image
          source={require("../../assets/Icon_Filter.png")}
          style={{
            marginHorizontal: 5,
            marginTop: 5,
            height: 30,
            width: 30,
          }}
        />
        <Text style={{ fontSize: 20, color: "#FFF", marginTop: 5 }}>
          Filter
        </Text>
        <Image
          source={require("../../assets/Icon_Sort.png")}
          style={{
            marginHorizontal: 5,
            marginTop: 5,
            height: 30,
            width: 30,
          }}
        />
        <Text style={{ fontSize: 20, color: "#FFF", marginTop: 5 }}>Sort</Text>
      </View>
    </View>
  );
};

export default FilterSort;
