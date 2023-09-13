import { Icon } from "@rneui/base";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Image } from "react-native";
import TabNavigator from "../components/TabNavigator";

const PaymentCompleted = (props: any) => {
  console.log(props.navigation);

  return (
    <View style={{ flex: 1 }}>
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
              paddingVertical: 35,
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
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <TouchableOpacity onPress={() =>props.navigation.navigate("Profile")}>
                <Icon
                  name="menu"
                  type="ionicon"
                  size={55}
                  style={{ borderColor: "#fff" }}
                />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 30,
                    color: "#fff",
                    marginTop: 10,
                    marginHorizontal: 100,
                    textAlign: "center",
                  }}
                >
                  Payment
                </Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </View>
      <ScrollView style={{ flexDirection: "column", marginTop: 20 }}>
        <Image
          source={require("../../assets/IconLight.png")}
          style={{ alignSelf: "center", position: "relative", left: 30 }}
        />
        <Image
          source={require("../../assets/IconCheck.png")}
          style={{ alignSelf: "center" }}
        />
        <Image
          source={require("../../assets/IconSparkle.png")}
          style={{ alignSelf: "center", position: "relative", right: 25 }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "#FF6565",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          PAYMENT COMPLETED
        </Text>
        <View
          style={{
            paddingHorizontal: 20,
            paddingVertical: 40,
            marginHorizontal: 40,
            height: 500,
            width: 350,
            alignSelf: "center",
            borderColor: "#FFF",
            backgroundColor: "#FFF",
            elevation: 1,
            borderRadius: 15,
          }}
        >
          <View style={{ flexDirection: "row", gap: 20 }}>
            <Text style={{ fontSize: 16 }}>Flight Ticket</Text>
            <View style={{ flexDirection: "row", marginLeft: 35 }}>
              <Icon
                name="clock"
                type="evilicon"
                size={20}
                style={{ marginTop: 2 }}
              />
              <Text style={{ fontSize: 14, color: "#A4A4A4" }}>
                21 Nov 23 - 03.00 pm{" "}
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: "#A4A4A4",
              borderStyle: "solid",
              width: 310,
              marginTop: 10,
            }}
          ></View>
          <View style={{ flexDirection: "row", gap: 73, marginTop: 20 }}>
            <Text style={{ fontSize: 16 }}>Payment Methode</Text>
            <Text style={{ fontSize: 16 }}>Credit Card</Text>
          </View>
          <Text style={{ fontSize: 16, marginTop: 10 }}>Detail Payment</Text>
          <View style={{ flexDirection: "row", gap: 30, marginTop: 10 }}>
            <Text style={{ fontSize: 12, color: "#959595" }}>
              1x Deluse Double Room (2 Night)
            </Text>
            <Text style={{ fontSize: 12, color: "#959595" }}>
              IDR 1,050,000
            </Text>
          </View>
          <View style={{ flexDirection: "row", gap: 124, marginTop: 10 }}>
            <Text style={{ fontSize: 12, color: "#959595" }}>
              Taxes and fees
            </Text>
            <Text style={{ fontSize: 12, color: "#959595" }}>IDR 50,000</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 128, marginTop: 10 }}>
            <Text style={{ fontSize: 16 }}>Total Price</Text>
            <Text style={{ fontSize: 16 }}>IDR 1,100,000</Text>
          </View>
          <Text style={{ fontSize: 16, marginTop: 30 }}>Voucher hotel</Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 20,
              textAlign: "center",
            }}
          >
            The Kleep Jungle Resort
          </Text>
          <Text
            style={{
              fontSize: 13,
              marginTop: 10,
              textAlign: "center",
              color: "#B0B0B0",
            }}
          >
            Nusa Penida, Bali
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
            22 Nov 23 - 24 Nov 23
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 5 }}>
            Double Deluxe room
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 20 }}>
            Anwar Alimuda Lubis
          </Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate("VoucherHotel")}>
          <Text style={styles.Button}>Done</Text>
        </TouchableOpacity>
      </ScrollView>
      <TabNavigator />
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

  Button: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#EA5454",
    paddingVertical: 15,
    paddingHorizontal: 130,
    height: 50,
    width: 300,
    alignSelf: "center",
    borderRadius: 8,
    marginTop: 20,
  },
});

export default PaymentCompleted;
