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
import { Image } from "react-native";
import TabNavigator from "../components/TabNavigator";

const Home = (props: any) => {
  console.log(props.navigation);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#ED4C4C", "#DD2323"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        locations={[0.1, 1.5]}
        style={styles.gradient}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 30,
            paddingVertical: 30,
            paddingHorizontal: 40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="search"
            type="evilicon"
            size={38}
            color={"#fff"}
            style={{ marginTop: 4, marginLeft: 10 }}
          />
          <Text style={{ color: "#fff", fontSize: 18 }}>Search</Text>
          <Icon
            name="notifications-none"
            type="material"
            size={40}
            color={"#FFFFFF"}
            style={{ marginLeft: 180 }}
          />
        </View>
      </LinearGradient>
      <ScrollView style={{ flexDirection: "column" }}>
        <Image
          source={require("../../assets/MainBackground.png")}
          style={{ height: 285, width: 477 }}
        />
        <Image
          source={require("../../assets/SeindoLogo.png")}
          style={{
            height: 35,
            width: 120,
            position: "absolute",
            left: 10,
            top: 5,
          }}
        />
        <View style={{ position: "absolute", top: 120 }}>
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 12,
              borderWidth: 1,
              borderRadius: 30,
              backgroundColor: "#fff",
              elevation: 1,
              borderColor: "#fff",
              position: "absolute",
              left: 10,
            }}
          >
            <Icon name="chevron-thin-left" type="entypo" size={25} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 12,
            paddingVertical: 12,
            borderWidth: 1,
            borderRadius: 30,
            backgroundColor: "#fff",
            elevation: 1,
            borderColor: "#fff",
            position: "absolute",
            right: 10,
            top: 120,
          }}
        >
          <Icon name="chevron-thin-right" type="entypo" size={25} />
        </View>
        <View
          style={{
            paddingHorizontal: 50,
            paddingVertical: 80,
            borderWidth: 1,
            backgroundColor: "#fff",
            borderColor: "#fff",
            justifyContent: "center",
            flexDirection: "row",
            gap: 50,
          }}
        >
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 20,
              borderColor: "#EE5F5F",
              backgroundColor: "#EE5F5F",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Flight")}
              >
                <Image
                  source={require("../../assets/IconFlight.png")}
                  style={{ height: 60, width: 70, marginLeft: 30 }}
                />
                <Text style={styles.searchButton}>Flight</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 15,
              paddingVertical: 10,
              borderRadius: 20,
              borderColor: "#EE5F5F",
              backgroundColor: "#EE5F5F",
            }}
          >
            <View>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("Hotel")}
              >
                <Image
                  source={require("../../assets/IconHotel.png")}
                  style={{
                    height: 40,
                    width: 50,
                    marginLeft: 34,
                    marginTop: 19,
                  }}
                />
                <Text style={styles.searchButton}>Hotel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 50,
            paddingVertical: 60,
            borderWidth: 1,
            backgroundColor: "#fff",
            borderColor: "#fff",
            justifyContent: "center",
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
                textAlign: "left",
              }}
            >
              Highly recommended for you
            </Text>
            <View style={{ flexDirection: "row", gap: 15, marginTop: 20 }}>
              <Image
                source={require("../../assets/ImageBG1.png")}
                style={{ height: 139, width: 195 }}
              />
              <Image
                source={require("../../assets/ImageBG2.png")}
                style={{ height: 139, width: 195 }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                marginTop: 20,
                justifyContent: "center",
              }}
            >
              <Icon
                name="circle"
                type="font-awesome"
                size={9}
                color={"#E6E6E6"}
              />
              <Icon
                name="circle"
                type="font-awesome"
                size={9}
                color={"#E6E6E6"}
              />
              <Icon
                name="circle"
                type="font-awesome"
                size={12}
                color={"#BFBFBF"}
              />
              <Icon
                name="circle"
                type="font-awesome"
                size={9}
                color={"#E6E6E6"}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  gradient: {
    flexDirection: "row",
  },

  searchButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
});

export default Home;
