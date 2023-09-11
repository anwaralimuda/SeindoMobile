import { Icon } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Image } from "react-native";
import TabNavigator from "../components/TabNavigator";
import FilterSort from "../components/FilterSort";

const HotelList = (props: any) => {
  console.log(props.navigation);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#ED4C4C", "#FFFFFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.2, 0.5]}
        style={styles.gradient}
      >
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
          <View>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon name="left" type="antdesign" size={35} color={"#ffff"} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Icon name="location" type="octicon" size={40} color={"#ffff"} />
            <View style={{ flexDirection: "column" }}>
              <Text style={styles.title}>Bali, Indonesia</Text>
              <Text style={styles.subtitle}>
                November, 22 2023 - 2 Night - 1 Room
              </Text>
            </View>
          </View>
        </View>
        <ScrollView
          style={{
            borderRadius: 25,
            borderWidth: 1,
            height: 1000,
            borderColor: "#fff",
            backgroundColor: "#fff",
          }}
        >
          <Text
            style={{
              position: "absolute",
              top: 0,
              right: 50,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 30,
              color: "#000",
            }}
          >
            24 Result
          </Text>
          <View
            style={{
              borderRadius: 25,
              borderWidth: 1,
              height: 430,
              elevation: 2,
              marginTop: 60,
              marginHorizontal: 15,
              borderColor: "#fff",
              backgroundColor: "#fff",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/TheKleepJungleResort.png")}
                style={{
                  marginHorizontal: 15,
                  marginTop: 15,
                  height: 150,
                  width: 225,
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}
                >
                  Deluxe Double Room
                </Text>
                <Text style={{ fontSize: 15, color: "#A7A7A7" }}>
                  Breakfast included
                </Text>
                <Text style={{ fontSize: 15, color: "#A7A7A7" }}>
                  Free cancellation
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  Facility
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 14 }}>Free Wifi</Text>
                  <Text style={{ fontSize: 14 }}>Swimming Pool</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 14 }}>Restaurant</Text>
                  <Text style={{ fontSize: 14 }}>Balcony</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginHorizontal: 10,
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                The Kleep Jungle Resort
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "normal", color: "#B0B0B0" }}
              >
                Sakti, Kec. Nusa Penida, Kabupaten Klangkung, Bali 80771
                Toyapakeh, Indonesia, 80771, Nusa Penida, Indonesia
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon
                  name="star-outline"
                  type="ionicon"
                  size={32}
                  color={"#F0D67B"}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  marginHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#A7A7A7",
                    textDecorationLine: "line-through",
                  }}
                >
                  IDR 650,000
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text
                    style={{ fontSize: 35, fontWeight: "bold", color: "#000" }}
                  >
                    IDR 550,000
                  </Text>
                  <Text style={styles.title}>Title</Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Room")}
                  >
                    <Text style={styles.searchButton}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderRadius: 25,
              borderWidth: 1,
              height: 430,
              elevation: 2,
              marginTop: 60,
              marginHorizontal: 15,
              borderColor: "#fff",
              backgroundColor: "#fff",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/VinVillaCanggu.png")}
                style={{
                  marginHorizontal: 15,
                  marginTop: 15,
                  height: 150,
                  width: 225,
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}
                >
                  Three Badroom Villa
                </Text>
                <Text style={{ fontSize: 15, color: "#A7A7A7" }}>
                  Breakfast included
                </Text>
                <Text style={{ fontSize: 15, color: "#A7A7A7" }}>
                  Free cancellation
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  Facility
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 14 }}>Free Wifi</Text>
                  <Text style={{ fontSize: 14 }}>Swimming Pool</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 14 }}>Restaurant</Text>
                  <Text style={{ fontSize: 14 }}>Balcony</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginHorizontal: 10,
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Vin Villa Canggu
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "normal", color: "#B0B0B0" }}
              >
                Jalan Veteran Perumahan Tiga Raja No. Kav. 17, Tumbak Bayuh,
                80361 Canggu, Indonesia
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon
                  name="star-outline"
                  type="ionicon"
                  size={32}
                  color={"#F0D67B"}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  marginHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#A7A7A7",
                    textDecorationLine: "line-through",
                  }}
                >
                  IDR 690,000
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text
                    style={{ fontSize: 35, fontWeight: "bold", color: "#000" }}
                  >
                    IDR 550,000
                  </Text>
                  <Text style={styles.title}>Title</Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Room")}
                  >
                    <Text style={styles.searchButton}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderRadius: 25,
              borderWidth: 1,
              height: 430,
              elevation: 2,
              marginTop: 60,
              marginHorizontal: 15,
              borderColor: "#fff",
              backgroundColor: "#fff",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/MarusakaNusaDua.png")}
                style={{
                  marginHorizontal: 15,
                  marginTop: 15,
                  height: 150,
                  width: 225,
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}
                >
                  Three Badroom Villa
                </Text>
                <Text style={{ fontSize: 15, color: "#A7A7A7" }}>
                  Breakfast included
                </Text>
                <Text style={{ fontSize: 15, color: "#A7A7A7" }}>
                  Free cancellation
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  Facility
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 14 }}>Free Wifi</Text>
                  <Text style={{ fontSize: 14 }}>Swimming Pool</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 14 }}>Restaurant</Text>
                  <Text style={{ fontSize: 14 }}>Balcony</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginHorizontal: 10,
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Marusaka Nusa Dua
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "normal", color: "#B0B0B0" }}
              >
                Kawasan Wisata Nusa Dua Lot S-3, Benoa, KEc. Kuta Sel Kabupaten
                Badung, Bali 80363, Indonesia
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon
                  name="star-outline"
                  type="ionicon"
                  size={32}
                  color={"#F0D67B"}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  marginHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#A7A7A7",
                    textDecorationLine: "line-through",
                  }}
                >
                  IDR 770,000
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text
                    style={{ fontSize: 35, fontWeight: "bold", color: "#000" }}
                  >
                    IDR 670,000
                  </Text>
                  <Text style={styles.title}>Title</Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Room")}
                  >
                    <Text style={styles.searchButton}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              borderRadius: 25,
              borderWidth: 1,
              height: 430,
              elevation: 2,
              marginTop: 60,
              marginHorizontal: 15,
              borderColor: "#fff",
              backgroundColor: "#fff",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../../assets/PuriSaronHotelSeminyak.png")}
                style={{
                  marginHorizontal: 15,
                  marginTop: 15,
                  height: 150,
                  width: 225,
                }}
              />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}
                >
                  Three Badroom Villa
                </Text>
                <Text style={{ fontSize: 15, color: "#A7A7A7" }}>
                  Breakfast included
                </Text>
                <Text style={{ fontSize: 15, color: "#A7A7A7" }}>
                  Free cancellation
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: "#000",
                    marginTop: 10,
                    fontWeight: "bold",
                  }}
                >
                  Facility
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 14 }}>Free Wifi</Text>
                  <Text style={{ fontSize: 14 }}>Swimming Pool</Text>
                </View>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text style={{ fontSize: 14 }}>Restaurant</Text>
                  <Text style={{ fontSize: 14 }}>Balcony</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
                marginHorizontal: 10,
                gap: 10,
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Puri Saron Hotel Seminyak
              </Text>
              <Text
                style={{ fontSize: 15, fontWeight: "normal", color: "#B0B0B0" }}
              >
                Jl. Gatot Subroto Barat No.459 C, Padangsambian Kaja, Kec.
                Denpasar Bar., Kota Denpasar, Bali 80361
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                }}
              >
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon name="star" type="entypo" size={35} color={"#F0D67B"} />
                <Icon
                  name="star-outline"
                  type="ionicon"
                  size={32}
                  color={"#F0D67B"}
                />
              </View>
              <View
                style={{
                  flexDirection: "column",
                  gap: 10,
                  marginHorizontal: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#A7A7A7",
                    textDecorationLine: "line-through",
                  }}
                >
                  IDR 990,000
                </Text>
                <View style={{ flexDirection: "row", gap: 10 }}>
                  <Text
                    style={{ fontSize: 35, fontWeight: "bold", color: "#000" }}
                  >
                    IDR 930,000
                  </Text>
                  <Text style={styles.title}>Title</Text>
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate("Room")}
                  >
                    <Text style={styles.searchButton}>Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
        <FilterSort />
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flex: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    alignItems: "flex-start",
    color: "#ffff",
    marginTop: 10,
    paddingHorizontal: 10,
  },

  subtitle: {
    fontSize: 16,
    fontWeight: "normal",
    marginBottom: 16,
    alignItems: "flex-start",
    color: "#ffff",
    paddingHorizontal: 10,
  },

  searchButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#EA5454",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default HotelList;
