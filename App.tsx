import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/Home/Home";
import Hotel from "./src/Hotel/Hotel";
import Room from "./src/Room/Room";
import HotelList from "./src/HotelList/HotelList";
import GuestDetails from "./src/GuestsDetails/GuestDetails";
import Payment from "./src/Payment/Payment";
import BankTransfer from "./src/BankTransfer/BankTransfer";
import VirtualAccount from "./src/VirtualAccount/VirtualAccount";
import Ewallet from "./src/Ewallet/Ewallet";
import CreditCard from "./src/CreditCard/CreditCard";
import AddCreditCard from "./src/AddCreditCard/AddCreditCard";
import ConfirmPayment from "./src/components/ConfirmPayment";
import PaymentCompleted from "./src/PaymentCompleted/PaymentCompleted";
import VoucherHotel from "./src/VoucherHotel/VoucherHotel";
import Profile from "./src/Profile/Profile";
import TabNavigator from "./src/components/TabNavigator";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Hotel" component={Hotel} />
        <Stack.Screen name="HotelList" component={HotelList} />
        <Stack.Screen name="Room" component={Room} />
        <Stack.Screen name="GuestsDetails" component={GuestDetails} />
        <Stack.Screen name="Payment" component={Payment} />
        <Stack.Screen name="BankTransfer" component={BankTransfer} />
        <Stack.Screen name="VirtualAccount" component={VirtualAccount} />
        <Stack.Screen name="Ewallet" component={Ewallet} />
        <Stack.Screen name="CreditCard" component={CreditCard} />
        <Stack.Screen name="AddCreditCard" component={AddCreditCard} />
        <Stack.Screen name="ConfirmPayment" component={ConfirmPayment} />
        <Stack.Screen name="PaymentCompleted" component={PaymentCompleted} />
        <Stack.Screen name="VoucherHotel" component={VoucherHotel} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <TabNavigator/>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
