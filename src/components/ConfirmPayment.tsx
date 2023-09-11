import { View, Text, TouchableOpacity } from "react-native";
import React from "react";




const ConfirmPayment = (props:any) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "column",
          paddingHorizontal: 30,
          paddingVertical: 30,
          width: 320,
          height: 270,
          backgroundColor: "#fff",
          elevation: 15,
          borderRadius: 25,
          borderColor: "#fff",
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Confirm Payment
        </Text>
        <Text style={{ fontSize: 14, textAlign: "center", color: "#000000" }}>
          Total payment IDR 1,100,000 continue to pay?{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            gap: 5,
            marginTop: 20,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: 40,
              paddingVertical: 15,
              borderRadius: 20,
              backgroundColor: "#F36363",
            }}
          >
            <TouchableOpacity
              onPress={() => props.props.navigation.navigate("PaymentCompleted")}
              style={{ alignSelf: "flex-start" }}
            >
              <Text style={{ fontSize: 15, color: "#fff" }}>Yes</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              paddingHorizontal: 40,
              paddingVertical: 15,
              borderRadius: 20,
              backgroundColor: "#C0C0C0",
            }}
          >
            <TouchableOpacity
              onPress={() => props.navigation.navigate("AddCreditCard")}
              style={{ alignSelf: "flex-start" }}
            >
              <Text style={{ fontSize: 15, color: "#000" }}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmPayment;
