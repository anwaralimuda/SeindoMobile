import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/base";
import { Image } from "react-native";

const Recommended = () => {
  return (
    <View>
       <View style={{ justifyContent: "flex-start", marginLeft: 50 }}>
            <Text style={{ fontSize: 20 }}>Recommended</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              height: 290,
              marginHorizontal: 50,
              borderWidth: 2,
              elevation: 1,
              borderRadius: 15,
              backgroundColor: "#fff",
              borderColor: "#fff",
              marginVertical: 15,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View style={[{ flexDirection: "row" }]}>
              <Image
                source={require("../../assets/LaLisaHotel.png")}
                style={{
                  marginLeft: 15,
                  marginTop: 15,
                  height: 125,
                  width: 220,
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                    fontWeight: "bold",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  La Lisa Hotel
                </Text>
                <Text
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginLeft: 10,
                    color: "#5A5A5A"
                  }}
                >
                  IDR 650.000/night
                </Text>
                <View
                  style={{ flexDirection: "row", marginLeft: 8, marginTop: 15 }}
                >
                  <Icon
                    name="location-pin"
                    type="simple-line-icon"
                    size={30}
                    color={"#4A5568"}
                  />
                  <Text style={{ marginTop: 3, fontSize: 17, marginLeft: 5 }}>
                    Surabaya
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Icon
                    name="star"
                    type="entypo"
                    size={25}
                    color={"#F0D67B"}
                  />
                  <Icon
                    name="star"
                    type="entypo"
                    size={25}
                    color={"#F0D67B"}
                  />
                  <Icon
                    name="star"
                    type="entypo"
                    size={25}
                    color={"#F0D67B"}
                  />
                  <Icon
                    name="star"
                    type="entypo"
                    size={25}
                    color={"#F0D67B"}
                  />
                  <Icon
                    name="star-outline"
                    type="ionicon"
                    size={22}
                    color={"#F0D67B"}
                  />
                </View>
              </View>
            </View>

            <View style={[{ flexDirection: "row" }]}>
              <Image
                source={require("../../assets/HotelPadma.png")}
                style={{
                  marginLeft: 15,
                  marginTop: 15,
                  height: 120,
                  width: 217,
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                    fontWeight: "bold",
                    alignItems: "flex-end",
                    justifyContent: "flex-end",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  Hotel Padma
                </Text>
                <Text
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    marginLeft: 10,
                    color: "#5A5A5A"
                  }}
                >
                  IDR 550.000/night
                </Text>
                <View
                  style={{ flexDirection: "row", marginLeft: 8, marginTop: 15 }}
                >
                  <Icon
                    name="location-pin"
                    type="simple-line-icon"
                    size={30}
                    color={"#4A5568"}
                  />
                  <Text style={{ marginTop: 3, fontSize: 17, marginLeft: 5 }}>
                    Bandung
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  <Icon
                    name="star"
                    type="entypo"
                    size={25}
                    color={"#F0D67B"}
                  />
                  <Icon
                    name="star"
                    type="entypo"
                    size={25}
                    color={"#F0D67B"}
                  />
                  <Icon
                    name="star"
                    type="entypo"
                    size={25}
                    color={"#F0D67B"}
                  />
                  <Icon
                    name="star"
                    type="entypo"
                    size={25}
                    color={"#F0D67B"}
                  />
                  <Icon
                    name="star-outline"
                    type="ionicon"
                    size={22}
                    color={"#F0D67B"}
                  />
                </View>
              </View>
            </View>
          </View>
    </View>
  )
}

export default Recommended