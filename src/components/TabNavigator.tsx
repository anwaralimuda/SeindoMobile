import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from '@react-navigation/native';

const TabNavigator = (props: any) => {
  console.log(props.navigation);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 5,
          elevation: 1,
          borderRadius: 20,
          paddingVertical: 5,
          marginHorizontal: 25,
          backgroundColor: "#fff",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity onPress={() =>props.navigation.navigate("Home")}>
              <Icon name="home" type="antdesign" size={30} color={"#000"} />
              <Text>Home</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 25 }}>
          <Icon name="ticket" type="entypo" size={30} color={"#000"} />
          <Text>Voucher</Text>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 25 }}>
          <Icon name="calendar" type="feather" size={30} color={"#000"} />
          <Text>Bookings</Text>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 25 }}>
          <Icon
            name="notifications-outline"
            type="ionicon"
            size={30}
            color={"#000"}
          />
          <Text>Notification</Text>
        </View>
        <View style={{ flexDirection: "column", marginLeft: 25 }}>
          <Icon name="user" type="antdesign" size={30} color={"#000"} />
          <Text>Profile</Text>
        </View>
      </View>
    </View>
  );
};

export default TabNavigator;
