import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const FilterSort = () => {
  const [isFilterActive, setFilterActive] = useState(false);
  const [isSortActive, setSortActive] = useState(false);

  const handleFilterClick = () => {
    setFilterActive(!isFilterActive);
  };

  const handleSortClick = () => {
    setSortActive(!isSortActive);
  };

  return (
    <View
      style={{
        marginHorizontal: 45,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 12,
        borderWidth: 1,
        marginTop: 10,
        borderColor: "#EA5454",
        backgroundColor: "#EA5454",
        height: 50,
        width: 395,
      }}
    >
      <View style={{ flexDirection: "row", gap: 5 }}>
        <TouchableOpacity onPress={handleFilterClick}>
          <Image
            source={require("../../assets/Icon_Filter.png")}
            style={{
              marginHorizontal: 5,
              marginTop: 5,
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: "#FFF", marginTop: 5 }}>
          Filter {isFilterActive ? "Aktif" : "Tidak Aktif"}
        </Text>
        <TouchableOpacity onPress={handleSortClick}>
          <Image
            source={require("../../assets/Icon_Sort.png")}
            style={{
              marginHorizontal: 5,
              marginTop: 5,
              height: 30,
              width: 30,
            }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, color: "#FFF", marginTop: 5 }}>
          Sort {isSortActive ? "Aktif" : "Tidak Aktif"}
        </Text>
      </View>
    </View>
  );
};

export default FilterSort;
