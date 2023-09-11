import { Icon } from "@rneui/base";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import TabNavigator from "../components/TabNavigator";

const Room = (props: any) => {
  console.log(props.navigation);

  return (
      <View style={{ backgroundColor: "#fff", flex:1 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 30,
            paddingVertical: 60,
            paddingHorizontal: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row", gap: 150 }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon
                name="left"
                type="antdesign"
                size={35}
                color={"#EC2934"}
                style={{ marginTop: 14 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
              <Image
                source={require("../../assets/SeindoLogo.png")}
                style={{ height: 60, width: 220 }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <Text
            style={{ fontSize: 20, fontWeight: "bold", marginHorizontal: 10 }}
          >
            Hotel Booking
          </Text>
        <View style={{ flexDirection: "column" }}/>
          <Image
            source={require("../../assets/Image1.png")}
            style={{
              height: 200,
              width: 460,
              marginHorizontal: 10,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
          <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
            <Image
              source={require("../../assets/Image2.png")}
              style={{ height: 120, width: 170, marginTop: 4, borderRadius: 5 }}
            />
            <Image
              source={require("../../assets/Image3.png")}
              style={{
                height: 120,
                width: 170,
                marginTop: 4,
                borderRadius: 5,
                marginHorizontal: 2,
              }}
            />
            <Image
              source={require("../../assets/Image4.png")}
              style={{ height: 120, width: 118, marginTop: 4, borderRadius: 5 }}
            />
            <Text
              style={{
                position: "absolute",
                top: 55,
                left: 370,
                color: "#000",
                zIndex: 1,
              }}
            >
              7+ photos
            </Text>
          </View>
          <View style={{ flexDirection: "column", gap: 10 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                marginHorizontal: 10,
                marginTop: 10,
              }}
            >
              The Kleep Jungle Resort
            </Text>
            <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
              <Icon
                name="location"
                type="octicon"
                size={25}
                color={"#B0B0B0"}
              />
              <Text
                style={{
                  fontSize: 15,
                  color: "#B0B0B0",
                  marginHorizontal: 10,
                  marginTop: 2,
                }}
              >
                Nusa Penida, Bali
              </Text>
            </View>
            <Text
              style={{
                fontSize: 18,
                color: "#000",
                marginHorizontal: 10,
                marginTop: 2,
              }}
            >
              Start From{" "}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  marginHorizontal: 10,
                  marginTop: 2,
                }}
              >
                IDR 550,000 / night
              </Text>
              <View style={{ marginHorizontal: 65 }}></View>
              <Icon name="star" type="entypo" size={25} color={"#F0D67B"} />
              <Icon name="star" type="entypo" size={25} color={"#F0D67B"} />
              <Icon name="star" type="entypo" size={25} color={"#F0D67B"} />
              <Icon name="star" type="entypo" size={25} color={"#F0D67B"} />
              <Icon
                name="star-outline"
                type="ionicon"
                size={24}
                color={"#F0D67B"}
              />
            </View>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 20,
                marginTop: 10,
                textAlign: "center",
              }}
            >
              Facility
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  paddingHorizontal: 20,
                  elevation: 1,
                  marginTop: 10,
                  paddingVertical: 10,
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 12,
                  marginHorizontal: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Icon name="wifi" type="antdesign" size={30} />
                  <Text
                    style={{ marginTop: 5, marginHorizontal: 5, fontSize: 15 }}
                  >
                    Free Wifi
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  elevation: 1,
                  marginTop: 10,
                  paddingVertical: 10,
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 12,
                  marginHorizontal: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Icon name="balcony" type="material-community" size={30} />
                  <Text
                    style={{ marginTop: 5, marginHorizontal: 5, fontSize: 15 }}
                  >
                    Balcony
                  </Text>
                </View>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  elevation: 1,
                  marginTop: 10,
                  paddingVertical: 10,
                  borderWidth: 1,
                  borderColor: "#fff",
                  borderRadius: 12,
                  marginHorizontal: 10,
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Icon name="drink" type="entypo" size={30} />
                  <Text
                    style={{ marginTop: 5, marginHorizontal: 5, fontSize: 15 }}
                  >
                    Minibar
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                paddingHorizontal: 20,
                elevation: 1,
                marginTop: 10,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 12,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon name="flower" type="entypo" size={30} />
                <Text
                  style={{ marginTop: 5, marginHorizontal: 5, fontSize: 15 }}
                >
                  Garden View
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                elevation: 1,
                marginTop: 10,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 12,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="coolant-temperature"
                  type="material-community"
                  size={30}
                />
                <Text
                  style={{ marginTop: 5, marginHorizontal: 5, fontSize: 15 }}
                >
                  Air Conditioning
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                paddingHorizontal: 20,
                elevation: 1,
                marginTop: 10,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 12,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon name="bathtub" type="font-awesome" size={30} />
                <Text
                  style={{ marginTop: 5, marginHorizontal: 5, fontSize: 15 }}
                >
                  Ensuite Bathroom
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                elevation: 1,
                marginTop: 10,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: "#fff",
                borderRadius: 12,
                marginHorizontal: 10,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Icon name="tv-outline" type="ionicon" size={30} />
                <Text
                  style={{ marginTop: 5, marginHorizontal: 5, fontSize: 15 }}
                >
                  Flat-screen TV
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("GuestsDetails")}
            >
              <Text style={styles.searchButton}>Select Room</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                marginTop: 25,
              }}
            >
              <Image
                source={require("../../assets/DeluxeDoubleRoom.png")}
                style={{ height: 180, width: 270 }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginHorizontal: 10,
                    fontWeight: "bold",
                  }}
                >
                  Deluxe Double Room
                </Text>
                <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                  <Icon name="bed-outline" type="ionicon" size={30} />
                  <Text
                    style={{ fontSize: 15, marginHorizontal: 10, marginTop: 5 }}
                  >
                    1 Large bed{" "}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                  <Icon name="user" type="antdesign" size={30} />
                  <Text
                    style={{ fontSize: 15, marginHorizontal: 10, marginTop: 5 }}
                  >
                    2 Adult{" "}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                  }}
                >
                  Free Cancellation
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "normal",
                    marginHorizontal: 10,
                  }}
                >
                  until 18.00 on 21 Nov 2023
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                  }}
                >
                  Exceptional breakfast
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "normal",
                    marginHorizontal: 10,
                  }}
                >
                  included
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                    marginTop: 7,
                  }}
                >
                  IDR 550,000 / night
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                marginTop: 25,
              }}
            >
              <Image
                source={require("../../assets/DeluxeBungalow.png")}
                style={{ height: 180, width: 270 }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginHorizontal: 10,
                    fontWeight: "bold",
                  }}
                >
                  Deluxe Bungalow
                </Text>
                <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                  <Icon name="bed-outline" type="ionicon" size={30} />
                  <Text
                    style={{ fontSize: 13, marginHorizontal: 10, marginTop: 5 }}
                  >
                    1 Large double bed{" "}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                  <Icon name="user" type="antdesign" size={30} />
                  <Text
                    style={{ fontSize: 15, marginHorizontal: 10, marginTop: 5 }}
                  >
                    2 Adult{" "}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                  }}
                >
                  Free Cancellation
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "normal",
                    marginHorizontal: 10,
                  }}
                >
                  until 18.00 on 21 Nov 2023
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                  }}
                >
                  Exceptional breakfast
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "normal",
                    marginHorizontal: 10,
                  }}
                >
                  included
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                    marginTop: 7,
                  }}
                >
                  IDR 590,000 / night
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 10,
                marginTop: 25,
              }}
            >
              <Image
                source={require("../../assets/TwinRoom.png")}
                style={{ height: 180, width: 270 }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginHorizontal: 10,
                    fontWeight: "bold",
                  }}
                >
                  Twin Room
                </Text>
                <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                  <Icon name="bed-outline" type="ionicon" size={30} />
                  <Text
                    style={{ fontSize: 15, marginHorizontal: 10, marginTop: 5 }}
                  >
                    2 Twin bed{" "}
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginHorizontal: 10 }}>
                  <Icon name="user" type="antdesign" size={30} />
                  <Text
                    style={{ fontSize: 15, marginHorizontal: 10, marginTop: 5 }}
                  >
                    2 Adult{" "}
                  </Text>
                </View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                  }}
                >
                  Free Cancellation
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "normal",
                    marginHorizontal: 10,
                  }}
                >
                  until 18.00 on 21 Nov 2023
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                  }}
                >
                  Exceptional breakfast
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "normal",
                    marginHorizontal: 10,
                  }}
                >
                  included
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    marginHorizontal: 10,
                    marginTop: 7,
                  }}
                >
                  IDR 590,000 / night
                </Text>
              </View>
            </View>
          </View>
          </ScrollView>
      <TabNavigator/>
   
      
      </View>
   
      
  );
};

const styles = StyleSheet.create({
  searchButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#EA5454",
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: "flex-start",
    marginHorizontal: 10,
  },
});

export default Room;
