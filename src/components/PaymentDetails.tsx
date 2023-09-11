import { View, Text } from "react-native";
import React from "react";

const PaymentDetails = () => {
  return (
    <View>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 100,
          marginHorizontal: 30,
        }}
      >
        Payment Details
      </Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginHorizontal: 30,
              color: "#6B7280",
            }}
          >
            1x Deluxe Double Room
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginHorizontal: 30,
              color: "#6B7280",
            }}
          >
            Taxes and Fees
          </Text>
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginLeft: 50,
              color: "#6B7280",
            }}
          >
            IDR 1.050,000
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginLeft: 50,
              color: "#6B7280",
            }}
          >
            IDR 50.000
          </Text>
        </View>
      </View>
      <View style={{ borderBottomWidth: 1, marginHorizontal: 30 }}></View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginTop: 30,
              marginHorizontal: 30,
            }}
          >
            Total Payment
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 25,
              marginTop: 10,
              marginHorizontal: 30,
            }}
          >
            IDR 1,100,000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PaymentDetails;
