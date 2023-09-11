import { Icon, color } from "@rneui/base";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import PaymentDetails from "../components/PaymentDetails";
import { Image } from "react-native";
import TabNavigator from "../components/TabNavigator";

const Ewallet = (props: any) => {
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
            paddingHorizontal: 20,
            paddingVertical: 30,
            borderRadius: 20,
            marginTop: 30,
            elevation: 10,
            marginHorizontal: 30,
            borderColor: "#fff",
            backgroundColor: "#fff",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="close" type="antdesign" size={30} />
            <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
              Ewallet
            </Text>
          </View>
          <View
            style={{
              marginTop: 20,
              paddingVertical: 20,
              borderRadius: 20,
              width: 170,
              backgroundColor: "#EBEBEB",
            }}
          >
            <Image
              source={require("../../assets/OVO.png")}
              style={{ height: 18, width: 55, marginHorizontal: 60 }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              paddingVertical: 20,
              borderRadius: 20,
              width: 170,
              backgroundColor: "#EBEBEB",
            }}
          >
            <Image
              source={require("../../assets/SPAY.png")}
              style={{ height: 32, width: 60, marginHorizontal: 60 }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              paddingVertical: 20,
              borderRadius: 20,
              width: 170,
              backgroundColor: "#EBEBEB",
            }}
          >
            <Image
              source={require("../../assets/DANA.png")}
              style={{ height: 21, width: 71, marginHorizontal: 60 }}
            />
          </View>
          <View
            style={{
              marginTop: 20,
              paddingVertical: 20,
              borderRadius: 20,
              width: 170,
              backgroundColor: "#EBEBEB",
            }}
          >
            <Image
              source={require("../../assets/LINKAJA.png")}
              style={{ height: 30, width: 30, marginHorizontal: 60 }}
            />
          </View>
        </View>
        <PaymentDetails />
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
});

export default Ewallet;
