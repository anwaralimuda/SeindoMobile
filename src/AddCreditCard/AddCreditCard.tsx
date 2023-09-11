import { Icon } from "@rneui/base";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Modal,
} from "react-native";
import TabNavigator from "../components/TabNavigator";
import { Picker } from "@react-native-picker/picker";
import ConfirmPayment from "../components/ConfirmPayment";



const AddCreditCard = (props: any) => {
  console.log('#########',props);

  const [cardNumber, setCardNumber] = useState("");
  const [expiryMonth, setExpiryMonth] = useState<string>("");
  const [expiryYear, setExpiryYear] = useState<string>("");
  const [cvv, setCVV] = useState("");
  const [showConfirmPayment, setShowConfirmPayment] = useState(false);

  const handleCardNumberChange = (text: string) => {
    const numericInput = text.replace(/[^0-9]/g, "");
    setCardNumber(numericInput);
  };

  const showConfirmPaymentModal = () => {
    setShowConfirmPayment(true);
  };

  const hideConfirmPaymentModal = () => {
    setShowConfirmPayment(false);
  };

  const handleCVVChange = (text: string) => {
    const numericInput = text.replace(/[^0-9]/g, "");
    setCVV(numericInput);
  };

  const monthNames: { [key: string]: string } = {
    "01": "Januari",
    "02": "Februari",
    "03": "Maret",
    "04": "April",
    "05": "Mei",
    "06": "Juni",
    "07": "Juli",
    "08": "Agustus",
    "09": "September",
    "10": "Oktober",
    "11": "November",
    "12": "Desember",
  };

  const handleSubmit = () => {
    const expiryMonthName = monthNames[expiryMonth];
    const expiryDate = `${expiryMonthName} ${expiryYear}`;
    console.log("Nomor Kartu:", cardNumber);
    console.log("Tanggal Kadaluwarsa:", expiryDate);
    console.log("CVV:", cvv);
    setShowConfirmPayment(true);
  };

  return (
    <View>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <View style={styles.iconContainer}>
              <Icon
                name="left"
                type="antdesign"
                size={35}
                color={"#000"}
                style={{ marginTop: 15 }}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Add Credit Card
            </Text>
          </View>
          <View style={styles.placeholderContainer}></View>
        </View>
        <Text style={{ fontSize: 20, marginLeft: 25 }}>Name on Card </Text>
        <TextInput style={styles.textInput} placeholder="Anwar Alimuda Lubis" />
        <Text style={{ fontSize: 20, marginLeft: 25, marginTop: 40 }}>
          Card Number{" "}
        </Text>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Icon
              name="creditcard"
              type="antdesign"
              size={30}
              style={{ marginTop: 20 }}
            />
          </View>
          <TextInput
            placeholder="Input Your Card Number Here !"
            onChangeText={handleCardNumberChange}
            value={cardNumber}
            keyboardType="numeric"
            maxLength={30}
            style={styles.textInput}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.expDateContainer}>
            <Text style={{ fontSize: 20 }}>Exp Date</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={expiryMonth}
                style={[
                  styles.picker,
                  { backgroundColor: "#fff", color: "white" },
                ]}
                onValueChange={(itemValue) => setExpiryMonth(itemValue)}
              >
                {Object.keys(monthNames).map((key) => (
                  <Picker.Item label={monthNames[key]} value={key} key={key} />
                ))}
              </Picker>
              <Picker
                selectedValue={expiryYear}
                style={[
                  styles.picker,
                  { backgroundColor: "#fff", color: "white" },
                ]}
                onValueChange={(itemValue) => setExpiryYear(itemValue)}
              >
                <Picker.Item label="23" value="23" />
                <Picker.Item label="24" value="24" />
              </Picker>
            </View>
          </View>
          <View style={styles.cvvContainer}>
            <Text style={{ fontSize: 20 }}>CVV</Text>
            <TextInput
              placeholder="000"
              onChangeText={handleCVVChange}
              value={cvv}
              keyboardType="numeric"
              maxLength={3}
              style={styles.textInput}
            />
          </View>
        </View>
        <View>
          <View>
            <ScrollView style={{ backgroundColor: "#fff" }}>
              <TouchableOpacity onPress={showConfirmPaymentModal}>
                <Text style={styles.confirmButton}>Confirm</Text>
              </TouchableOpacity>
              <Modal
                transparent={true}
                animationType="slide"
                visible={showConfirmPayment}
              >
                <View style={styles.modalContainer}>
                  <ConfirmPayment props={props}/>
                  <TouchableOpacity onPress={hideConfirmPaymentModal}>
                    <Text style={styles.closeModalButton}>Close</Text>
                  </TouchableOpacity>
                </View>
              </Modal>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
        <View
        style={{
          flexDirection: "column",
          height: 250,
          width: 480,
          backgroundColor: "#FFF",
          marginTop: 20,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            marginHorizontal: 25,
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Total Payment
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            IDR 1,100,000{" "}
          </Text>
        </View>
      </View>
      <TabNavigator/>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginHorizontal: 25,
    paddingVertical: 5,
    borderBottomWidth: 1,
    fontSize: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
  },
  placeholderContainer: {
    width: 35,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginTop: 30,
  },

  expDateContainer: {
    alignItems: "flex-start",
  },
  cvvContainer: {
    alignItems: "flex-start",
  },
  titleContainer: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },

  closeModalButton: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#EA5454",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: 25,
    marginBottom: 16,
  },
  confirmButton: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    backgroundColor: "#EA5454",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginHorizontal: 80,
    textAlign: "center",
    marginTop: 30,
  },
  picker: {
    width: 80,
  },
});

export default AddCreditCard;
