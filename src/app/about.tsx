import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function about() {
  return (
    <View>
      <Text>about</Text>
      <Link href="/">Go to home</Link>
    </View>
  );
}
