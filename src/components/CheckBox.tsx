import { Icon } from "@rneui/base";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";


const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
  
    const [checkmarks, setCheckmarks] = useState({
      option1: false,
      option2: false,
      option3: false,
      option4: false,
      option5: false,
      option6: false,
      option7: false,
      option8: false,
    });
  
    const toggleCheckbox = () => {
      setIsChecked(!isChecked);
    };
  
    const toggleCheckmark = (option: string) => {
      setCheckmarks((prevCheckmarks) => ({
        ...prevCheckmarks,
      }));
    };
  
    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginLeft: 25,
            marginTop: 30,
          }}
        >
          Special Request
        </Text>
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity onPress={() => toggleCheckmark("option1")}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 25,
                }}
              >
                <Icon
                  name={
                    checkmarks.option1 ? "checkbox-outline" : "square-outline"
                  }
                  type="ionicon"
                  size={30}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: checkmarks.option1 ? "#000" : "#BCBCBC",
                    marginLeft: 10,
                  }}
                >
                  No-smoking room
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheckmark("option2")}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 25,
                }}
              >
                <Icon
                  name={
                    checkmarks.option2 ? "checkbox-outline" : "square-outline"
                  }
                  type="ionicon"
                  size={30}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: checkmarks.option2 ? "#000" : "#BCBCBC",
                    marginLeft: 10,
                  }}
                >
                  Same Floor
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheckmark("option3")}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 25,
                }}
              >
                <Icon
                  name={
                    checkmarks.option3 ? "checkbox-outline" : "square-outline"
                  }
                  type="ionicon"
                  size={30}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: checkmarks.option3 ? "#000" : "#BCBCBC",
                    marginLeft: 10,
                  }}
                >
                  High Floor
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheckmark("option4")}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 25,
                }}
              >
                <Icon
                  name={
                    checkmarks.option4 ? "checkbox-outline" : "square-outline"
                  }
                  type="ionicon"
                  size={30}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: checkmarks.option4 ? "#000" : "#BCBCBC",
                    marginLeft: 10,
                  }}
                >
                  Connecting room
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "column" }}>
            <TouchableOpacity onPress={() => toggleCheckmark("option5")}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 25,
                }}
              >
                <Icon
                  name={
                    checkmarks.option5 ? "checkbox-outline" : "square-outline"
                  }
                  type="ionicon"
                  size={30}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: checkmarks.option5 ? "#000" : "#BCBCBC",
                    marginLeft: 10,
                  }}
                >
                  Check out Time
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheckmark("option6")}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 25,
                }}
              >
                <Icon
                  name={
                    checkmarks.option6 ? "checkbox-outline" : "square-outline"
                  }
                  type="ionicon"
                  size={30}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: checkmarks.option6 ? "#000" : "#BCBCBC",
                    marginLeft: 10,
                  }}
                >
                  Check in Time
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheckmark("option7")}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 25,
                }}
              >
                <Icon
                  name={
                    checkmarks.option7 ? "checkbox-outline" : "square-outline"
                  }
                  type="ionicon"
                  size={30}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: checkmarks.option7 ? "#000" : "#BCBCBC",
                    marginLeft: 10,
                  }}
                >
                  Bed Type
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleCheckmark("option8")}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: 25,
                }}
              >
                <Icon
                  name={
                    checkmarks.option8 ? "checkbox-outline" : "square-outline"
                  }
                  type="ionicon"
                  size={30}
                />
                <Text
                  style={{
                    fontSize: 18,
                    color: checkmarks.option8 ? "#000" : "#BCBCBC",
                    marginLeft: 10,
                  }}
                >
                  Other
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

export default CheckBox;
