import { Icon, color } from "@rneui/base";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import PaymentDetails from "../components/PaymentDetails";
import TabNavigator from "../components/TabNavigator";

const Payment = (props: any) => {
  console.log("======",props)

  return (
    <View style={{ flex:1 }}>
      <View style={styles.container}>
        <LinearGradient
          colors={["#ED4C4C", "#FFFFFF"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 1 }}
          locations={[0.2, 0.5]}
          style={styles.gradient}
        >
          <View
            style={{
              flexDirection: "row",
              gap: 30,
              paddingVertical: 45,
              paddingHorizontal: 10,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 30,
                alignItems: "flex-start",
              }}
            >
              <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={{ alignSelf: "flex-start" }}
              >
                <Icon
                  name="left"
                  type="antdesign"
                  size={35}
                  color={"#ffff"}
                  style={{ marginTop: 3 }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#FFF1F1",
                  marginLeft: 30,
                }}
              >
                Payment
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>
      <ScrollView>
      <Text
        style={{
          fontWeight: "bold",
          marginTop: 40,
          marginLeft: 20,
          fontSize: 22,
        }}
      >
        Payment Methods
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          marginHorizontal: 40,
          paddingVertical: 20,
          marginTop: 30,
          borderRadius: 15,
          borderColor: "#fff",
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 3 }}>Bank Transfer</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("BankTransfer")}>
          <Icon
            name="chevron-forward"
            type="ionicon"
            size={35}
            color={"#C3C7C8"}
            style={{ marginLeft: 130 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          marginHorizontal: 40,
          paddingVertical: 20,
          marginTop: 30,
          borderRadius: 15,
          borderColor: "#fff",
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 3 }}>Virtual Account</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("VirtualAccount")}>
          <Icon
            name="chevron-forward"
            type="ionicon"
            size={35}
            color={"#C3C7C8"}
            style={{ marginLeft: 116 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          marginHorizontal: 40,
          paddingVertical: 20,
          marginTop: 30,
          borderRadius: 15,
          borderColor: "#fff",
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 3 }}>E-Wallet</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("Ewallet")}>
        <Icon
          name="chevron-forward"
          type="ionicon"
          size={35}
          color={"#C3C7C8"}
          style={{ marginLeft: 180 }}
        />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 30,
          marginHorizontal: 40,
          paddingVertical: 20,
          marginTop: 30,
          borderRadius: 15,
          borderColor: "#fff",
          backgroundColor: "#fff",
        }}
      >
        <Text style={{ fontSize: 20, marginTop: 3 }}>Credit Card</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate("CreditCard")}>
        <Icon
          name="chevron-forward"
          type="ionicon"
          size={35}
          color={"#C3C7C8"}
          style={{ marginLeft: 150 }}
        />
        </TouchableOpacity>
      </View>
        <PaymentDetails/>
        </ScrollView>
        <TabNavigator/>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },

  gradient: {
    flex: 1,
  },
});

export default Payment;
