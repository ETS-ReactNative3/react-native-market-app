import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import PracticeScreen from "./app/screens/PracticeScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AccountScreen from "./app/screens/AccountScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ItemListingScreen from "./app/screens/ItemListingScreen";
import ImageScreen from "./app/screens/ImageScreen";
import ImageInput from "./app/components/ImageInput";
import AuthNavigator from "./app/navigation/AuthNavigator";
import BottomTabNavigator from "./app/navigation/BottomTabNavigator";

export default function App() {
  console.log(Dimensions.get("screen"));
  const { landscape } = useDeviceOrientation();
  return <BottomTabNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
