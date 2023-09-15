import { Icon } from "@rneui/base";
import React, { useState } from "react";
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
import CheckBox from './../components/CheckBox';
import TabNavigator from "../components/TabNavigator";

const GuestDetails = (props: any) => {
  console.log(props.navigation);
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Mr");
  const options = ["Mr", "Mrs"];

  const [checkmarks, setCheckmarks] = useState({
  });

  const toggleCheckmark = (option: string | number) => {
    setCheckmarks((prevCheckmarks) => ({
      ...prevCheckmarks,
    }));
  };
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const handleOptionSelect = (option: React.SetStateAction<string>) => {
    setSelectedOption(option);
    toggleOptions();
  };

  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
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
        <View
          style={{
            flexDirection: "column",
            paddingHorizontal: 20,
            paddingVertical: 50,
            borderWidth: 1,
            borderColor: "#fff",
            backgroundColor: "#FFF2F2",
            borderRadius: 15,
            elevation: 8,
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                fontSize: 27,
                fontWeight: "normal",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              The Kleep Jungle Resort
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <Icon
                    name="bookmark"
                    type="feather"
                    size={40}
                    style={{ marginTop: 10, alignItems: "flex-start" }}
                  />
                  <View style={{ flexDirection: "column" }}>
                    <Text style={{ marginTop: 10, fontSize: 15 }}>
                      Check In
                    </Text>
                    <Text style={{ fontSize: 15 }}>22 November 2023</Text>
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flexDirection: "column" }}>
                    <Text
                      style={{
                        marginTop: 10,
                        fontSize: 15,
                        marginHorizontal: 80,
                      }}
                    >
                      Check In
                    </Text>
                    <Text style={{ fontSize: 15, marginHorizontal: 80 }}>
                      24 November 2023
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <Text
              style={{
                marginTop: 20,
                marginHorizontal: 5,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              1x Deluxe Double Room
            </Text>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontWeight: "normal",
                    fontSize: 15,
                    marginHorizontal: 5,
                  }}
                >
                  Guest per room
                </Text>
                <Text
                  style={{
                    fontWeight: "normal",
                    fontSize: 15,
                    marginHorizontal: 5,
                  }}
                >
                  Bed Type
                </Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{
                    fontWeight: "normal",
                    fontSize: 15,
                    marginHorizontal: 135,
                  }}
                >
                  2 Adults
                </Text>
                <Text
                  style={{
                    fontWeight: "normal",
                    fontSize: 15,
                    marginHorizontal: 135,
                  }}
                >
                  1 Large Bed
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Icon
                  name="circle"
                  type="font-awesome"
                  color={"#9F9F9F"}
                  size={10}
                  style={{ marginTop: 30 }}
                />
                <Text style={{ fontSize: 15, marginTop: 23 }}>
                  Breakfast Included
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Icon
                  name="circle"
                  type="font-awesome"
                  color={"#9F9F9F"}
                  size={10}
                  style={{ marginTop: 30 }}
                />
                <Text style={{ fontSize: 15, marginTop: 23 }}>
                  Free Resechedule
                </Text>
              </View>
              <View style={{ flexDirection: "row", gap: 10 }}>
                <Icon
                  name="circle"
                  type="font-awesome"
                  color={"#9F9F9F"}
                  size={10}
                  style={{ marginTop: 30 }}
                />
                <Text style={{ fontSize: 15, marginTop: 23 }}>
                  Free cancellation
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 25,
            marginTop: 30,
          }}
        >
          Contact Person
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "flex-start",
            marginLeft: 15,
          }}
        >
          <TouchableOpacity onPress={toggleOptions}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginLeft: 14,
              }}
            >
              <Text style={{ fontSize: 20, marginTop: 8 }}>
                {selectedOption}{" "}
              </Text>
              <Icon
                name="chevron-down"
                type="evilicon"
                size={35}
                style={{ marginTop: 8 }}
              />
            </View>
          </TouchableOpacity>

          {showOptions && (
            <View style={{ marginTop: 10 }}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleOptionSelect(option)}
                  style={{ paddingVertical: 5 }}
                >
                  <Text style={{ fontSize: 15 }}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 20 }}>
            <TextInput style={styles.textInput} placeholder="First Name" />
            <TextInput style={styles.textInput} placeholder="Last Name" />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 25,
              marginTop: 30,
            }}
          >
            Guest Details
          </Text>
          <TouchableOpacity onPress={toggleCheckbox}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                marginLeft: 25,
              }}
            >
              <View
                style={{
                  width: 25,
                  height: 25,
                  borderWidth: 1,
                  borderColor: "#BCBCBC",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {isChecked && (
                  <Icon name="checkmark-outline" type="ionicon" size={20} />
                )}
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: "#BCBCBC",
                  marginTop: 1,
                  marginLeft: 5,
                }}
              >
                same as contact person
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "flex-start",
            marginLeft: 15,
          }}
        >
          <TouchableOpacity onPress={toggleOptions}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginLeft: 14,
              }}
            >
              <Text style={{ fontSize: 20, marginTop: 8 }}>
                {selectedOption}{" "}
              </Text>
              <Icon
                name="chevron-down"
                type="evilicon"
                size={35}
                style={{ marginTop: 8 }}
              />
            </View>
          </TouchableOpacity>

          {showOptions && (
            <View style={{ marginTop: 10 }}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleOptionSelect(option)}
                  style={{ paddingVertical: 5 }}
                >
                  <Text style={{ fontSize: 15 }}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 20 }}>
            <TextInput style={styles.textInput} placeholder="First Name" />
            <TextInput style={styles.textInput} placeholder="Last Name" />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            alignItems: "flex-start",
            marginLeft: 15,
          }}
        >
          <TouchableOpacity onPress={toggleOptions}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginLeft: 14,
              }}
            >
              <Text style={{ fontSize: 20, marginTop: 8 }}>
                {selectedOption}{" "}
              </Text>
              <Icon
                name="chevron-down"
                type="evilicon"
                size={35}
                style={{ marginTop: 8 }}
              />
            </View>
          </TouchableOpacity>

          {showOptions && (
            <View style={{ marginTop: 10 }}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => handleOptionSelect(option)}
                  style={{ paddingVertical: 5 }}
                >
                  <Text style={{ fontSize: 15 }}>{option}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 20 }}>
            <TextInput style={styles.textInput} placeholder="First Name" />
            <TextInput style={styles.textInput} placeholder="Last Name" />
          </View>
        </View>
        <CheckBox/>
        <View
          style={{
            flexDirection: "column",
            gap: 10,
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <TextInput style={styles.textInput} placeholder="Note" />
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Cancelllation policy
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 16, textAlign: "justify" }}>
            The cancellation is free of charge 7 days prior to the date of
            arrival, after this time we charge you 90% the room rate as
            cancellation fee, if we could not sell the room more.
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Reschedule
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 16, textAlign: "justify" }}>
            This reservation is reschedulable, but may be subject to
            cancellation fees after 15 May 2023 13:00.
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 30,
              marginLeft: 10,
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
                  marginLeft: 10,
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
                  marginLeft: 10,
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
                  marginLeft: 70,
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
                  marginLeft: 70,
                  color: "#6B7280",
                }}
              >
                IDR 50.000
              </Text>
            </View>
          </View>
          <View style={{ borderBottomWidth: 1 }}></View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  marginTop: 30,
                  marginLeft: 10,
                }}
              >
                Total Payment
              </Text>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 25,
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                IDR 1,100,000
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Payment")}
            >
              <Text style={styles.searchButton}>Purchase</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginLeft: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    fontSize: 20,
  },

  searchButton: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#EA5454",
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 10,
    marginTop: 50,
    alignSelf: "flex-start",
    marginHorizontal: 10,
    marginLeft: 100,
  },
});

export default GuestDetails;
