import { Icon } from "@rneui/base";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import Recommended from "../components/Recommended";
import TabNavigator from "../components/TabNavigator";

const Hotel = (props: any) => {
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
          <Image source={require("../../assets/profile.png")} />
          <Text style={styles.title}>
            Hello, Anwar {"\n"}Where are you going today?
          </Text>
          <Icon
            name="notifications-none"
            type="material"
            size={45}
            color={"#FFFFFF"}
          />
        </View>
        <ScrollView>
          <View
            style={[
              styles.circle,
              { height: 600, marginHorizontal: 20, marginVertical: 20 },
            ]}
          >
            <View style={styles.buttonContainer}>
              <View
                style={{
                  paddingHorizontal: 60,
                  paddingVertical: 20,
                  borderRadius: 25,
                  borderColor: "#fff",
                  marginHorizontal: 5,
                  marginVertical: 10,
                  backgroundColor: "#fff",
                  elevation: 1,
                  borderWidth: 1,
                }}
              >
                <Text style={{ fontSize: 15, color: "#EA5454" }}>Flight</Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 60,
                  paddingVertical: 20,
                  borderRadius: 25,
                  borderColor: "#EA5454",
                  marginHorizontal: 5,
                  marginVertical: 10,
                  backgroundColor: "#EA5454",
                  elevation: 1,
                  borderWidth: 1,
                }}
              >
                <Text style={{ fontSize: 15, color: "#fff" }}>Hotel</Text>
              </View>
            </View>
            <View style={styles.inputContainer}>
              <Icon name="search1" type="antdesign" size={30} color="#4A5568" />
              <TextInput
                style={styles.textInput}
                placeholder="Where do you want to stay?"
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="calendar" type="feather" size={30} color="#000" />
              <TextInput style={styles.textInput} placeholder="Check In" />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="calendar" type="feather" size={30} color="#000" />
              <TextInput style={styles.textInput} placeholder="Check Out" />
            </View>
            <View style={{ flexDirection: "row", gap: 22 }}>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  paddingHorizontal: 20,
                  marginTop: 15,
                  paddingVertical: 13,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#000",
                }}
              >
                <Icon name="minus" type="antdesign" size={30} color="#000" />
                <Text style={{ marginTop: 5 }}>1 Room</Text>
                <Icon
                  name="plussquareo"
                  type="antdesign"
                  size={30}
                  color="#000"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  paddingHorizontal: 20,
                  marginTop: 15,
                  paddingVertical: 13,
                  borderRadius: 10,
                  borderWidth: 1,
                  borderColor: "#000",
                }}
              >
                <Icon name="minus" type="antdesign" size={30} color="#000" />
                <Text style={{ marginTop: 5 }}>2 Adult</Text>
                <Icon
                  name="plussquareo"
                  type="antdesign"
                  size={30}
                  color="#000"
                />
              </View>
            </View>
            <View>
              <Text style={styles.title}>Title</Text>
              <TouchableOpacity
                onPress={() => props.navigation.navigate("HotelList")}
              >
                <Text style={styles.searchButton}>Search Hotel</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Recommended />
        </ScrollView>
      </LinearGradient>
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
    fontWeight: "normal",
    marginBottom: 16,
    alignItems: "flex-start",
    color: "#ffff",
    marginTop: 10,
  },

  circle: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 20,
    elevation: 1,
    marginTop: 10,
    paddingHorizontal: 50,
    paddingVertical: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    fontSize: 10,
    fontWeight: "600",
    paddingVertical: 10,
    color: "#BFB7B7",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 15,
  },

  searchButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#EA5454",
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 10,
  },

  textInput: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 5,
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  button: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 10,
    backgroundColor: "#ED4C4C",
    marginRight: 5,
    elevation: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginTop: 20,
  },
});

export default Hotel;
