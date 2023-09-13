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

const Profile = () => {
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
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          ></View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              color: "#fff",
              marginTop: 65,
            }}
          >
            MyAccount
          </Text>
          <Image
            source={require("../../assets/profile.png")}
            style={{
              height: 65,
              width: 65,
              alignSelf: "center",
              marginTop: 20,
            }}
          />
          <Text
            style={{
              fontSize: 20,
              marginTop: 20,
              color: "#fff",
              textAlign: "center",
              fontWeight: 'bold'
            }}
          >
            Anwar Alimuda Lubis
          </Text>
          <ScrollView
            style={{
              borderRadius: 25,
              borderWidth: 1,
              height: 1000,
              borderColor: "#fff",
              backgroundColor: "#F7F7F7",
              marginTop: 40,
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginTop: 30, 
                marginHorizontal: 40
              }}
            >
              <Icon
                name="person"
                type="ionicon"
                size={25}
                style={{ alignSelf: "flex-start", color: "#6B7280" }}
              />
              <Text style={{ fontSize: 20, marginLeft: 30}}>My Account</Text>
              <Icon
                name="chevron-right"
                type="entypo"
                size={25}
                style={{  color: "#6B7280", marginLeft: 180  }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30, 
                marginHorizontal: 40
              }}
            >
              <Icon
                name="document-text-outline"
                type="ionicon"
                size={25}
                style={{ alignSelf: "flex-start", color: "#6B7280" }}
              />
              <Text style={{ fontSize: 20, marginLeft: 30 }}>Order</Text>
              <Icon
                name="chevron-right"
                type="entypo"
                size={25}
                style={{  color: "#6B7280", marginLeft: 238  }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30, 
                marginHorizontal: 40
              }}
            >
              <Icon
                name="cog"
                type="font-awesome"
                size={25}
                style={{ alignSelf: "flex-start", color: "#6B7280" }}
              />
              <Text style={{ fontSize: 20, marginLeft: 33}}>Setting</Text>
              <Icon
                name="chevron-right"
                type="entypo"
                size={25}
                style={{  color: "#6B7280", marginLeft: 225  }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30, 
                marginHorizontal: 40
              }}
            >
              <Icon
                name="lock"
                type="font-awesome"
                size={25}
                style={{ alignSelf: "flex-start", color: "#6B7280" }}
              />
              <Text style={{ fontSize: 20, marginLeft: 40 }}>Security</Text>
              <Icon
                name="chevron-right"
                type="entypo"
                size={25}
                style={{  color: "#6B7280", marginLeft: 217  }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30, 
                marginHorizontal: 40
              }}
            >
              <Icon
                name="logout"
                type="material-community"
                size={25}
                style={{ alignSelf: "flex-start", color: "#6B7280",  }}
              />
              <Text style={{ fontSize: 20, marginLeft: 32 }}>Log Out</Text>
              <Icon
                name="chevron-right"
                type="entypo"
                size={25}
                style={{  color: "#6B7280", marginLeft: 217  }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30, 
                marginHorizontal: 40
              }}
            >
              <Icon
                name="phone"
                type="font-awesome"
                size={25}
                style={{ alignSelf: "flex-start", color: "#6B7280",  }}
              />
              <Text style={{ fontSize: 20, marginLeft: 38 }}>Help</Text>
              <Icon
                name="chevron-right"
                type="entypo"
                size={25}
                style={{  color: "#6B7280", marginLeft: 246  }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30, 
                marginHorizontal: 40
              }}
            >
              <Icon
                name="code"
                type="entypo"
                size={25}
                style={{ alignSelf: "flex-start", color: "#6B7280",  }}
              />
              <Text style={{ fontSize: 20, marginLeft: 33 }}>Invite Friends</Text>
              <Icon
                name="chevron-right"
                type="entypo"
                size={25}
                style={{  color: "#6B7280", marginLeft: 168  }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 30, 
                marginHorizontal: 40
              }}
            >
              <Icon
                name="comment-text-outline"
                type="material-community"
                size={25}
                style={{ alignSelf: "flex-start", color: "#6B7280",  }}
              />
              <Text style={{ fontSize: 20, marginLeft: 33 }}>FAQ</Text>
              <Icon
                name="chevron-right"
                type="entypo"
                size={25}
                style={{  color: "#6B7280", marginLeft: 250  }}
              />
            </View>
          </ScrollView>
        </LinearGradient>
      </View>
      <TabNavigator/>
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
});

export default Profile;
